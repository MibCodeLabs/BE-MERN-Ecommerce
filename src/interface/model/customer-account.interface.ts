import type { Document } from "mongoose";
import type { IBaseEntity } from "./base-entity.interface.js";

export interface ICustomer extends IBaseEntity,Document {
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
