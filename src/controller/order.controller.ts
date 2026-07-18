import type { QueryFilter, UpdateQuery } from "mongoose";
import type { IOrder } from "../interface/model/order.interface.js";
import { OrderService } from "../service/order.service.js";
import { createCrudControllerFromService } from "../util/create-service-controller.js";
import type { ICrudController } from "../interface/controller/crud-controller.interface.js";
import { orderCrudResponseMappers } from "../mapper/order/order-crud-response.mappers.js";


export const orderController: ICrudController<
  Partial<IOrder>,
  UpdateQuery<IOrder>,
  QueryFilter<IOrder>
> = createCrudControllerFromService(
  OrderService,
  orderCrudResponseMappers,
);
