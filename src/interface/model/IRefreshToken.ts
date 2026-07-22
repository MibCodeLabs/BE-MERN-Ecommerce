import type { Types } from "mongoose";
import type { AccountType } from "../../type/account.type.js";
import type { IBaseEntity } from "./base-entity.interface.js";
import type { IBaseJwtPayload } from "../auth/base-jwt-payload.js";

export interface IRefreshToken extends Document,IBaseEntity,IBaseJwtPayload{
  accountId: Types.ObjectId;
  accountType: AccountType;
  tokenHash: string;
  expiresAt: Date;
  revokedAt?: Date | null;
}
