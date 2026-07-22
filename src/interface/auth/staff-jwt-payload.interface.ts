import type { InternalAccountRole } from "../../type/internal-account.type.js";
import type { IBaseJwtPayload } from "./base-jwt-payload.js";

export interface IStaffJwtPayload extends IBaseJwtPayload {
  type: "staff";
  role: InternalAccountRole;
}