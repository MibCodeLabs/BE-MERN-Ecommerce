import type { Model, Document } from "mongoose";
import {
  comparePassword,
  hashPassword,
} from "../util/auth/password-utilities.js";
import type { ICustomer } from "../interface/model/customer-account.interface.js";
import type { IShopAccount } from "../interface/model/shop-account.interface.js";
import { Customer } from "../model/customer-account.schema.js";
import { ShopAccount } from "../model/shop-account.schema.js";
import type { IInternalAccount } from "../interface/model/internal-account.interface.js";
import { InternalAccount } from "../model/internal-account.schema.js";
import type { AccountType } from "../type/account.type.js";
import type { IAuthResponse } from "../interface/auth/auth-response.js";
import { TokenService } from "./token.service.js";
import { RefreshToken } from "../model/refresh-token.model.js";
import { hashToken } from "../util/hash.js";
import { ACCOUNT_TYPE } from "../util/constant/constants.js";
import { logger } from "../util/logger.js";

interface IPasswordEmailData {
  password: string;
  email: string;
}
//TODO CREATE ERROR CLASSES THEN USE THEM ALSO CHECK WHERE ERRORS ARE CALLED AND ATTACH RESPECTIVE LOGGERS FOR DEBUGGING
export class AuthService {
  private tokenService = new TokenService();
  private async registerAccount<T extends IPasswordEmailData>(
    model: Model<T>,
    data: T,
  ): Promise<T & Document> {
    //TODO-U ADD CHECKS FOR PHONE AFTER TESTING
    const existing = await model.findOne({ email: data.email });
    if (existing) {
      logger.error("Email already registered");
      throw new Error("Email already registered");
    }
    const hashedPassword = await hashPassword(data.password);

    return model.create({
      ...data,
      password: hashedPassword,
    });
  }

  private async createAuthTokens(
    accountId: string,
    accountType: AccountType,
  ): Promise<IAuthResponse> {
    const payload = {
      sub: accountId,
      type: accountType,
    };

    const accessToken = this.tokenService.generateAccessToken(payload);

    const refreshToken = this.tokenService.generateRefreshToken(payload);

    await RefreshToken.create({
      accountId,
      accountType,
      tokenHash: hashToken(refreshToken),
      //TODO MAKE THIS TO UTIL
      expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    });

    return {
      accessToken,
      refreshToken,
    };
  }

  public async registerCustomer(data: ICustomer) {
    const customer = await this.registerAccount(Customer, data);
    return this.createAuthTokens(
      customer._id.toString(),
      ACCOUNT_TYPE.CUSTOMER,
    );
  }

  public async registerShop(data: IShopAccount) {
    const shop = await this.registerAccount(ShopAccount, data);
    return this.createAuthTokens(shop._id.toString(), ACCOUNT_TYPE.SHOP);
  }

  public async registerStaff(data: IInternalAccount) {
    const staff = await this.registerAccount(InternalAccount, data);
    return this.createAuthTokens(staff._id.toString(), ACCOUNT_TYPE.STAFF);
  }

  public async loginCustomer(
    email: string,
    password: string,
  ): Promise<IAuthResponse> {
    const customer = await Customer.findOne({ email }).select("+password");
    if (!customer) {
      throw new Error("Invalid credentials");
    }
    const isPasswordValid = await comparePassword(password, customer.password);
    if (!isPasswordValid) {
      throw new Error("Invalid credentials");
    }
    return this.createAuthTokens(
      customer._id.toString(),
      ACCOUNT_TYPE.CUSTOMER,
    );
  }

  public async loginShop(
    email: string,
    password: string,
  ): Promise<IAuthResponse> {
    const shop = await ShopAccount.findOne({ email });

    if (!shop) {
      throw new Error("Invalid credentials");
    }

    const isPasswordValid = await comparePassword(password, shop.password);

    if (!isPasswordValid) {
      throw new Error("Invalid credentials");
    }

    return this.createAuthTokens(shop._id.toString(), ACCOUNT_TYPE.SHOP);
  }

  public async loginStaff(
    email: string,
    password: string,
  ): Promise<IAuthResponse> {
    const staff = await InternalAccount.findOne({ email });

    if (!staff) {
      throw new Error("Invalid credentials");
    }

    const isPasswordValid = await comparePassword(password, staff.password);

    if (!isPasswordValid) {
      throw new Error("Invalid credentials");
    }

    return this.createAuthTokens(staff._id.toString(), ACCOUNT_TYPE.STAFF);
  }

  public async refreshToken(refreshToken: string): Promise<IAuthResponse> {
    const payload = this.tokenService.verifyRefreshToken(refreshToken);

    const storedToken = await RefreshToken.findOne({
      accountId: payload.sub,
      accountType: payload.type,
      tokenHash: hashToken(refreshToken),
      revokedAt: null,
    });

    if (!storedToken) {
      throw new Error("Invalid refresh token");
    }

    if (storedToken.expiresAt < new Date()) {
      throw new Error("Refresh token expired");
    }

    storedToken.revokedAt = new Date();
    await storedToken.save();

    return this.createAuthTokens(payload.sub, payload.type);
  }
}
