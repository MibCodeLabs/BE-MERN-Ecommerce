import { model, Types } from "mongoose";
import { createBaseSchema } from "./base.schema";
import { ShopStatus } from "../types/shop-status.type";

export interface IShop {
  name: string;
  slug: string;
  description?: string;
  email?: string;
  contactNumber?: string;
  address?: {
    line1?: string;
    city?: string;
    state?: string;
    country?: string;
    postalCode?: string;
  };
  location?: {
    latitude?: number;
    longitude?: number;
  };
  status: ShopStatus;

  logo?: string;
  coverImage?: string;

  settings?: {
    currency?: string;
    timezone?: string;
  };

  openedAt?: Date;
  deletedAt?: Date;

  createdBy?: Types.ObjectId;
  modifiedBy?: Types.ObjectId;
  createdAt?: Date;
  modifiedAt?: Date;
  ownerId:Types.ObjectId
}

export const ShopSchema = createBaseSchema<IShop>({
  ownerId: {
    type: Types.ObjectId,
    ref: "ShopAccount",
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
    unique: true,
    lowercase: true,
    trim: true,
  },

  description: {
    type: String,
    default: null,
  },

  email: {
    type: String,
    lowercase: true,
    trim: true,
  },

  contactNumber: {
    type: String,
    trim: true,
  },

  address: {
    add: {
      type: String,
      trim: true,
    },

    city: {
      type: String,
      trim: true,
    },

    state: {
      type: String,
      trim: true,
    },

    country: {
      type: String,
      trim: true,
    },

    postalCode: {
      type: String,
      trim: true,
    },
  },

  location: {
    latitude: {
      type: Number,
    },

    longitude: {
      type: Number,
    },
  },
  status: {
    type: String,
    enum: ["active", "inactive", "suspended", "pending"],
    default: "pending",
    required: true,
  },

  logo: {
    type: String,
    default: null,
  },

  coverImage: {
    type: String,
    default: null,
  },

  settings: {
    currency: {
      type: String,
      default: "PKR",
    },

    timezone: {
      type: String,
      default: "Asia/Karachi",
    },
  },

  openedAt: {
    type: Date,
    default: null,
  },

  deletedAt: {
    type: Date,
    default: null,
  },
});

ShopSchema.index(
  {
    slug: 1,
  },
  {
    unique: true,
  },
);

ShopSchema.index({
  category: 1,
  status: 1,
});

export const Shop = model<IShop>("Shop", ShopSchema);
