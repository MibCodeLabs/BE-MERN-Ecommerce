import { model, Types } from "mongoose";
import { createBaseSchema } from "./base.schema";


export interface IProductCategory {
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


export const ProductCategorySchema =
  createBaseSchema<IProductCategory>({
    name: {
      type: String,
      required: true,
      trim: true,
    },

    parentId: {
      type: Types.ObjectId,
      ref: "ProductCategory",
      default: null,
    },

    shopId: {
      type: Types.ObjectId,
      ref: "Shop",
      default: null,
    },

    level: {
      type: Number,
      required: true,
      default: 0,
      min: 0,
    },

    path: {
      type: String,
      trim: true,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  });


ProductCategorySchema.index(
  {
    name: 1,
    parentId: 1,
    shopId: 1,
  },
  {
    unique: true,
  },
);


ProductCategorySchema.index({
  parentId: 1,
});

ProductCategorySchema.index({
  shopId: 1,
});


export const ProductCategory = model<IProductCategory>(
  "ProductCategory",
  ProductCategorySchema,
);