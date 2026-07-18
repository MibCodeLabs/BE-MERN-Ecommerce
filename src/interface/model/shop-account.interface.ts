import { Document, Types } from "mongoose";
import type { AccountStatus } from "../../type/account-status.type.js";
import type { IBaseEntity } from "./base-entity.interface.js";

export interface IShopAccount extends Document,IBaseEntity {
  email: string;
  password: string;
  contactNumber: string;
  status: AccountStatus;
  lastLoginAt?: Date;
  createdBy?: Types.ObjectId;
  modifiedBy?: Types.ObjectId;
  createdAt?: Date;
  modifiedAt?: Date;
}
