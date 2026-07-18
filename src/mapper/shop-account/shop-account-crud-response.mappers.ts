import type { ICrudResponseMappers } from "../../interface/controller/crud-response-mappers.interface.js";
import type { IShopAccount } from "../../interface/model/shop-account.interface.js";
import { shopAccountResponseMapper } from "./shop-account-response.mapper.js";

export const shopAccountCrudResponseMappers: ICrudResponseMappers<IShopAccount> = {
  getOne: shopAccountResponseMapper,
  create: shopAccountResponseMapper,
  update: shopAccountResponseMapper,
  getAll: (page) => ({
    ...page,
    content: page.content.map(shopAccountResponseMapper),
  }),
};