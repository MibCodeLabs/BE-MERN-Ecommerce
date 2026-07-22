import type { ShopAccountRole } from "../../type/shop-account-role.type.js";
import type { IBaseJwtPayload } from "./base-jwt-payload.js";

export interface IShopJwtPayload extends IBaseJwtPayload {
  type: "shop";
  shopId: string;
  shopRole: ShopAccountRole;
}
