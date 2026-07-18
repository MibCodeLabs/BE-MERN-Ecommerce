import type { QueryFilter, UpdateQuery } from "mongoose";
import type { ICrudController } from "../interface/controller/crud-controller.interface.js";
import type { ICustomer } from "../interface/model/customer-account.interface.js";
import { CustomerAccountService } from "../service/customer-account.service.js";
import { createCrudControllerFromService } from "../util/create-service-controller.js";
import { customerCrudResponseMappers } from "../mapper/customer-account/customer-crud-response.mappers.js";


export const customerAccountController: ICrudController<
  Partial<ICustomer>,
  UpdateQuery<ICustomer>,
  QueryFilter<ICustomer>
> = createCrudControllerFromService(
  CustomerAccountService,
  customerCrudResponseMappers,
);