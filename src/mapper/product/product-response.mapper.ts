import type { IProductResponseDTO } from "../../dto/product/product-response.dto.js";
import type { IProduct } from "../../interface/model/product.interface.js";

export const productResponseMapper = (
  product: IProduct,
): IProductResponseDTO => ({
  id: product._id.toString(),
  shopId: product.shopId.toString(),
  categoryId: product.categoryId.toString(),
  name: product.name,
  slug: product.slug,
  description: product.description ?? null,
  price: product.price,
  currency: product.currency ?? null,
  trackInventory: product.trackInventory,
  stock: product.stock,
  lowStockThreshold: product.lowStockThreshold ?? 0,
  sku: product.sku ?? null,
  status: product.status,
  images: product.images ?? [],
  isFeatured: product.isFeatured,
});
