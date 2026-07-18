import { shopCrudResponseMappers } from "../mapper/shop/shop-crud-response.mappers.js";
import { ShopService } from "../service/shop.service.js";
import { createCrudControllerFromService } from "../util/create-service-controller.js";

export const shopController = createCrudControllerFromService(ShopService,shopCrudResponseMappers);

