import { Document, Types } from "mongoose";
import type { ShopAccountRole } from "../../type/shop-account-role.type.js";
import type { ShopAffiliationStatus } from "../../type/shop-affiliation-status.type.js";
import type { IBaseEntity } from "./base-entity.interface.js";

export interface IShopAffiliation extends Document,IBaseEntity {
  shopId: Types.ObjectId;
  shopAccountId: Types.ObjectId;

  role: ShopAccountRole;
  status: ShopAffiliationStatus;

  createdBy?: Types.ObjectId;
  modifiedBy?: Types.ObjectId;
  createdAt?: Date;
  modifiedAt?: Date;
}
