import type { ICrudResponseMappers } from "../../interface/controller/crud-response-mappers.interface.js";
import type { IProduct } from "../../interface/model/product.interface.js";
import { productResponseMapper } from "./product-response.mapper.js";

export const productCrudResponseMappers: ICrudResponseMappers<IProduct> = {
  getOne: productResponseMapper,
  create: productResponseMapper,
  update: productResponseMapper,
  getAll: (page) => ({
    ...page,
    content: page.content.map(productResponseMapper),
  }),
};