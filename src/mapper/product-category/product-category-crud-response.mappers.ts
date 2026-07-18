import type { ICrudResponseMappers } from "../../interface/controller/crud-response-mappers.interface.js";
import type { IProductCategory } from "../../interface/model/product-category.interface.js";
import { productCategoryResponseMapper } from "./product-category-response.mapper.js";

export const productCategoryCrudResponseMappers: ICrudResponseMappers<IProductCategory> = {
  getOne: productCategoryResponseMapper,
  create: productCategoryResponseMapper,
  update: productCategoryResponseMapper,
  getAll: (page) => ({
    ...page,
    content: page.content.map(productCategoryResponseMapper),
  }),
};