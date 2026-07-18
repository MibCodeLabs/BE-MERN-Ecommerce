export interface IOrderResponseDTO {
  id: string;
  shopId: string;
  customerId: string | null;
  orderNumber: string;
  orderStatus:
    | "pending"
    | "confirmed"
    | "processing"
    | "completed"
    | "cancelled";
  customer: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string | null;
  };
  shippingAddress: {
    street: string;
    city: string;
    state: string | null;
    country: string;
    postalCode: string | null;
  };
  items: {
    productId: string;
    name: string;
    sku: string | null;
    image: string | null;
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
    method: "cod" | "stripe" | "paypal" | "bank_transfer";
    status: "pending" | "paid" | "failed" | "refunded";
    transactionId: string | null;
  };

  customerNote: string | null;
  trackingNumber: string | null;
  shippedAt: Date | null;
  deliveredAt: Date | null;
}