import { JWT_DEFAULTS } from "../util/constant/constants.js";

export const jwtConfig = {
  accessSecret: process.env.JWT_ACCESS_SECRET!,
  refreshSecret: process.env.JWT_REFRESH_SECRET!,
  accessExpiresIn: JWT_DEFAULTS.ACCESS_EXPIRY,
  refreshExpiresIn: JWT_DEFAULTS.REFRESH_EXPIRY,
};
