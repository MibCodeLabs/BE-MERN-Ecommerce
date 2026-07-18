import type { ICrudResponseMappers } from "../../interface/controller/crud-response-mappers.interface.js";
import type { IOrder } from "../../interface/model/order.interface.js";
import { orderResponseMapper } from "./order-response.mapper.js";

export const orderCrudResponseMappers: ICrudResponseMappers<IOrder> = {
  getOne: orderResponseMapper,
  create: orderResponseMapper,
  update: orderResponseMapper,
  getAll: (page) => ({
    ...page,
    content: page.content.map(orderResponseMapper),
  }),
};