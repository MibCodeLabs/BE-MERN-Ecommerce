import type { QueryFilter, UpdateQuery } from "mongoose";
import type { ICrudController } from "../interface/controller/crud-controller.interface.js";
import type { IProductCategory } from "../interface/model/product-category.interface.js";
import { ProductCategoryService } from "../service/product-category.service.js";
import { createCrudControllerFromService } from "../util/create-service-controller.js";
import { productCategoryCrudResponseMappers } from "../mapper/product-category/product-category-crud-response.mappers.js";


export const productCategoryController: ICrudController<
  Partial<IProductCategory>,
  UpdateQuery<IProductCategory>,
  QueryFilter<IProductCategory>
> = createCrudControllerFromService(
  ProductCategoryService,
  productCategoryCrudResponseMappers,
);