import type { QueryFilter, UpdateQuery } from "mongoose";
import type { ICrudController } from "../interface/controller/crud-controller.interface.js";
import type { IShopAccount } from "../interface/model/shop-account.interface.js";
import { shopAccountCrudResponseMappers } from "../mapper/shop-account/shop-account-crud-response.mappers.js";
import { ShopAccountService } from "../service/shop-account.service.js";
import { createCrudControllerFromService } from "../util/create-service-controller.js";

export const shopAccountController: ICrudController<
  Partial<IShopAccount>,
  UpdateQuery<IShopAccount>,
  QueryFilter<IShopAccount>
> = createCrudControllerFromService(
  ShopAccountService,
  shopAccountCrudResponseMappers,
);