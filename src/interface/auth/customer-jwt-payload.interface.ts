import type { IBaseJwtPayload } from "./base-jwt-payload.js"; 
export interface ICustomerJwtPayload extends IBaseJwtPayload {
  type: "customer";
}
