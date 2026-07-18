import { Document, Types } from "mongoose";
import type { OrderStatus } from "../../type/order-status.type.js";
import type { PaymentMethod } from "../../type/payment-method.type.js";
import type { PaymentStatus } from "../../type/payment-status.type.js";
import type { IBaseEntity } from "./base-entity.interface.js";

export interface IOrder extends Document,IBaseEntity {
  shopId: Types.ObjectId;
  customerId?: Types.ObjectId;

  orderNumber: string;

  orderStatus:OrderStatus;

  customer: {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
  };

  shippingAddress: {
    street: string;
    city: string;
    state?: string;
    country: string;
    postalCode?: string;
  };

  items: {
    productId: Types.ObjectId;
    name: string;
    sku?: string;
    image?: string;
    price: number;
    quantity: number;
    subtotal: number;
  }[];

  totals: {
    subtotal: number;
    shippingFee: number;
    discount: number;
    tax: number;
    total: number;
  };

  payment: {
    method:PaymentMethod;
    status: PaymentStatus;
    transactionId?: string;
  };
  customerNote?: string;
  trackingNumber?: string;
  shippedAt?: Date;
  deliveredAt?: Date;
}