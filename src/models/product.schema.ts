import { model, Types } from "mongoose";
import { createBaseSchema } from "./base.schema";
import { ProductStatus } from "../types/product-status.type";

export interface IProduct {
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

export const ProductSchema = createBaseSchema<IProduct>({
  shopId: {
    type: Types.ObjectId,
    ref: "Shop",
    required: true,
  },

  categoryId: {
    type: Types.ObjectId,
    ref: "Category",
    required: true,
  },

  name: {
    type: String,
    required: true,
    trim: true,
  },

  slug: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },

  description: {
    type: String,
    default: null,
  },

  price: {
    type: Number,
    required: true,
    min: 0,
  },


  currency: {
    type: String,
    trim: true,
    uppercase: true,
    default: null,
  },

  trackInventory: {
    type: Boolean,
    default: true,
    required: true,
  },

  stock: {
    type: Number,
    default: 0,
    min: 0,
    required: true,
  },

  lowStockThreshold: {
    type: Number,
    default: 5,
    min: 0,
  },

  sku: {
    type: String,
    trim: true,
    uppercase: true,
    default: null,
  },

  status: {
    type: String,
    enum: ["active", "inactive", "draft", "archived"],
    default: "draft",
    required: true,
  },

  images: {
    type: [String],
    default: [],
  },

  isFeatured: {
    type: Boolean,
    default: false,
    required: true,
  },
});

ProductSchema.index(
  {
    shopId: 1,
    slug: 1,
  },
  {
    unique: true,
  },
);

ProductSchema.index(
  {
    shopId: 1,
    sku: 1,
  },
  {
    unique: true,
    partialFilterExpression: {
      sku: {
        $exists: true,
        $type: "string",
      },
    },
  },
);

ProductSchema.index({
  shopId: 1,
  categoryId: 1,
});

ProductSchema.index({
  shopId: 1,
  status: 1,
});

ProductSchema.index({
  shopId: 1,
  isFeatured: 1,
});

export const Product = model<IProduct>(
  "Product",
  ProductSchema,
);