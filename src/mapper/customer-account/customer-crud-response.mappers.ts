import type { ICrudResponseMappers } from "../../interface/controller/crud-response-mappers.interface.js";
import type { ICustomer } from "../../model/customer-account.schema.js";
import { customerResponseMapper } from "./customer-response.mapper.js";

export const customerCrudResponseMappers: ICrudResponseMappers<ICustomer> = {
  getOne: customerResponseMapper,

  create: customerResponseMapper,

  update: customerResponseMapper,

  getAll: (page) => ({
    ...page,
    content: page.content.map(customerResponseMapper),
  }),
};