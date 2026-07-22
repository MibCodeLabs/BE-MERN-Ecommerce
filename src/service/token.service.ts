import jwt, { type SignOptions } from "jsonwebtoken";
import type { IBaseJwtPayload } from "../interface/auth/base-jwt-payload.js";
import { jwtConfig } from "../config/jwt.config.js";

export class TokenService {
  generateAccessToken(payload: IBaseJwtPayload): string {
    return jwt.sign(payload, jwtConfig.accessSecret, {
      expiresIn: jwtConfig.accessExpiresIn,
    });
  }

  generateRefreshToken(payload: IBaseJwtPayload): string {
    return jwt.sign(payload, jwtConfig.refreshSecret, {
      expiresIn: jwtConfig.refreshExpiresIn,
    });
  }

  verifyAccessToken(token: string): IBaseJwtPayload {
    return jwt.verify(
      token,
      jwtConfig.accessSecret,
    ) as IBaseJwtPayload;
  }

  verifyRefreshToken(token: string): IBaseJwtPayload {
    return jwt.verify(
      token,
      jwtConfig.refreshSecret,
    ) as IBaseJwtPayload;
  }
}
