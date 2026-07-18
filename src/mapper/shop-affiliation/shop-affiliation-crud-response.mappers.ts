import type { ICrudResponseMappers } from "../../interface/controller/crud-response-mappers.interface.js";
import type { IShopAffiliation } from "../../interface/model/shop-affiliation.interface.js";
import { shopAffiliationResponseMapper } from "./shop-affiliation-response.mapper.js";

export const shopAffiliationCrudResponseMappers: ICrudResponseMappers<IShopAffiliation> = {
  getOne: shopAffiliationResponseMapper,
  create: shopAffiliationResponseMapper,
  update: shopAffiliationResponseMapper,
  getAll: (page) => ({
    ...page,
    content: page.content.map(shopAffiliationResponseMapper),
  }),
};