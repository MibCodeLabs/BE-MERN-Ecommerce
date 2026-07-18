import type { QueryFilter, UpdateQuery } from "mongoose";
import type { ICrudController } from "../interface/controller/crud-controller.interface.js";
import type { IProduct } from "../interface/model/product.interface.js";
import { ProductService } from "../service/product.service.js";
import { createCrudControllerFromService } from "../util/create-service-controller.js";
import { productCrudResponseMappers } from "../mapper/product/product-crud-response.mappers.js";

export const productController: ICrudController<
  Partial<IProduct>,
  UpdateQuery<IProduct>,
  QueryFilter<IProduct>
> = createCrudControllerFromService(
  ProductService,
  productCrudResponseMappers,
);
