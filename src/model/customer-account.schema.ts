import { Document, model } from "mongoose";
import { createBaseSchema } from "./base.schema.js";
import type { ICustomer } from "../interface/model/customer-account.interface.js";


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

export const Customer = model<ICustomer>(
  "Customer",
  CustomerSchema,
);