import { Types } from "mongoose";
import { createBaseSchema, IBaseEntity } from "./base.schema";

export interface ICustomer extends IBaseEntity {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  password: string;

  addresses?: {
    title?: string;
    street: string;
    city: string;
    state?: string;
    country: string;
    postalCode?: string;
    isDefault?: boolean;
  }[];

  isActive: boolean;
  isVerified: boolean;

  lastLoginAt?: Date;
}

export const CustomerSchema = createBaseSchema<ICustomer>({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },

  lastName: {
    type: String,
    required: true,
    trim: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },

  phone: {
    type: String,
    trim: true,
  },

  password: {
    type: String,
    required: true,
    select: false, 
  },

  addresses: [
    {
      title: {
        type: String,
        default: "Home",
      },

      street: {
        type: String,
        required: true,
      },

      city: {
        type: String,
        required: true,
      },

      state: {
        type: String,
      },

      country: {
        type: String,
        required: true,
      },

      postalCode: {
        type: String,
      },

      isDefault: {
        type: Boolean,
        default: false,
      },
    },
  ],

  isActive: {
    type: Boolean,
    default: true,
  },

  isVerified: {
    type: Boolean,
    default: false,
  },

  lastLoginAt: {
    type: Date,
  },
});