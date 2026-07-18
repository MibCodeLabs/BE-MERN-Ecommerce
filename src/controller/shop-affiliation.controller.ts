import type { QueryFilter, UpdateQuery } from "mongoose";
import type { IShopAffiliation } from "../interface/model/shop-affiliation.interface.js";
import { ShopAffiliationService } from "../service/shop-affiliation.service.js";
import { createCrudControllerFromService } from "../util/create-service-controller.js";
import type { ICrudController } from "../interface/controller/crud-controller.interface.js";
import { shopAffiliationCrudResponseMappers } from "../mapper/shop-affiliation/shop-affiliation-crud-response.mappers.js";

export const shopAffiliationController: ICrudController<
  Partial<IShopAffiliation>,
  UpdateQuery<IShopAffiliation>,
  QueryFilter<IShopAffiliation>
> = createCrudControllerFromService(
  ShopAffiliationService,
  shopAffiliationCrudResponseMappers,
);