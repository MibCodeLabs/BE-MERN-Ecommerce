import type { QueryFilter, UpdateQuery } from "mongoose";
import type { ICrudController } from "../interface/controller/crud-controller.interface.js";
import type { IInternalAccount } from "../interface/model/internal-account.interface.js";
import { InternalAccountService } from "../service/internal-account.service.js";
import { createCrudControllerFromService } from "../util/create-service-controller.js";
import { internalAccountCrudResponseMappers } from "../mapper/internal-account/internal-account-crud-response.mappers.js";


export const internalAccountController: ICrudController<
  Partial<IInternalAccount>,
  UpdateQuery<IInternalAccount>,
  QueryFilter<IInternalAccount>
> = createCrudControllerFromService(
  InternalAccountService,
  internalAccountCrudResponseMappers,
);