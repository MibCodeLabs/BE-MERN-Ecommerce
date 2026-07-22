import type { AccountType } from "../../type/account.type.js";

export interface IBaseJwtPayload {
  sub: string;
  iat?: number;
  exp?: number;
  type: AccountType;
}
