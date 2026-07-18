import type { ICrudResponseMappers } from "../../interface/controller/crud-response-mappers.interface.js";
import type { IShop } from "../../interface/model/shop.interface.js";
import { shopResponseMapper } from "./shop-response.mapper.js";

export const shopCrudResponseMappers: ICrudResponseMappers<IShop> = {
  getOne: shopResponseMapper,
  create: shopResponseMapper,
  update: shopResponseMapper,
  getAll: (page) => ({
    ...page,
    content: page.content.map(shopResponseMapper),
  }),
};