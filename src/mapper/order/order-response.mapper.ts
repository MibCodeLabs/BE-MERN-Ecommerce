import type { IOrderResponseDTO } from "../../dto/order/order-response.dto.js";
import type { IOrder } from "../../interface/model/order.interface.js";

export const orderResponseMapper = (
  order: IOrder,
): IOrderResponseDTO => ({
  id: order._id.toString(),

  shopId: order.shopId.toString(),

  customerId: order.customerId
    ? order.customerId.toString()
    : null,

  orderNumber: order.orderNumber,

  orderStatus: order.orderStatus,

  customer: {
    firstName: order.customer.firstName,
    lastName: order.customer.lastName,
    email: order.customer.email,
    phone: order.customer.phone ?? null,
  },

  shippingAddress: {
    street: order.shippingAddress.street,
    city: order.shippingAddress.city,
    state: order.shippingAddress.state ?? null,
    country: order.shippingAddress.country,
    postalCode: order.shippingAddress.postalCode ?? null,
  },

  items: order.items.map((item) => ({
    productId: item.productId.toString(),

    name: item.name,

    sku: item.sku ?? null,

    image: item.image ?? null,

    price: item.price,

    quantity: item.quantity,

    subtotal: item.subtotal,
  })),

  totals: {
    subtotal: order.totals.subtotal,

    shippingFee: order.totals.shippingFee ?? 0,

    discount: order.totals.discount ?? 0,

    tax: order.totals.tax ?? 0,

    total: order.totals.total,
  },

  payment: {
    method: order.payment.method,

    status: order.payment.status,

    transactionId: order.payment.transactionId ?? null,
  },

  customerNote: order.customerNote ?? null,

  trackingNumber: order.trackingNumber ?? null,

  shippedAt: order.shippedAt ?? null,

  deliveredAt: order.deliveredAt ?? null,
});