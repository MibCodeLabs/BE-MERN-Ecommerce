export interface IProductCategoryResponseDTO {
  id: string;
  name: string;
  parentId: string | null;
  shopId: string | null;
  level: number;
  path: string | null;
  isActive: boolean;
}