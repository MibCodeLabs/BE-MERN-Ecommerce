import { Types,Document } from "mongoose";
import type { ProductStatus } from "../../type/product-status.type.js";
import type { IBaseEntity } from "./base-entity.interface.js";

export interface IProduct extends Document,IBaseEntity {
  shopId: Types.ObjectId;
  categoryId: Types.ObjectId;
  name: string;
  slug: string;
  description?: string;
  price: number;
  currency?: string;
  trackInventory: boolean;
  stock: number;
  lowStockThreshold?: number;
  sku?: string;
  status: ProductStatus;
  images: string[];
  isFeatured: boolean;
  createdBy?: Types.ObjectId;
  modifiedBy?: Types.ObjectId;
  createdAt?: Date;
  modifiedAt?: Date;
}
