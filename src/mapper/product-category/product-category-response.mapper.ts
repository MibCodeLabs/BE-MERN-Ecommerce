import type { IProductCategoryResponseDTO } from "../../dto/product-category/product-category-response.dto.js";
import type { IProductCategory } from "../../interface/model/product-category.interface.js";

export const productCategoryResponseMapper = (
  productCategory: IProductCategory,
): IProductCategoryResponseDTO => ({
  id: productCategory._id.toString(),
  name: productCategory.name,
  parentId: productCategory.parentId
    ? productCategory.parentId.toString()
    : null,
  shopId: productCategory.shopId
    ? productCategory.shopId.toString()
    : null,
  level: productCategory.level,
  path: productCategory.path ?? null,
  isActive: productCategory.isActive,
});