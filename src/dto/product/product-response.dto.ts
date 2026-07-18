export interface IProductResponseDTO {
  id: string;
  shopId: string;
  categoryId: string;
  name: string;
  slug: string;
  description: string | null;
  price: number;
  currency: string | null;
  trackInventory: boolean;
  stock: number;
  lowStockThreshold: number;
  sku: string | null;
  status: "active" | "inactive" | "draft" | "archived";
  images: string[];
  isFeatured: boolean;
}