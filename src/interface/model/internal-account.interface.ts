import { Document, Types } from "mongoose";
import type { InternalAccountRole } from "../../type/internal-account.type.js";
import type { AccountStatus } from "../../type/account-status.type.js";
import type { IBaseEntity } from "./base-entity.interface.js";

export interface IInternalAccount extends Document,IBaseEntity{
  email: string;
  password: string;
  contactNumber: string;

  role: InternalAccountRole;
  status: AccountStatus;

  lastLoginAt?: Date;

  createdBy?: Types.ObjectId;
  modifiedBy?: Types.ObjectId;
  createdAt?: Date;
  modifiedAt?: Date;
}