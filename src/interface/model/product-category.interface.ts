import { Document, Types } from "mongoose";
import type { IBaseEntity } from "./base-entity.interface.js";

export interface IProductCategory extends Document,IBaseEntity {
  name: string;
  parentId?: Types.ObjectId;
  shopId?: Types.ObjectId;
  level: number;
  path?: string;
  isActive: boolean;
  createdBy?: Types.ObjectId;
  modifiedBy?: Types.ObjectId;
  createdAt?: Date;
  modifiedAt?: Date;
}
