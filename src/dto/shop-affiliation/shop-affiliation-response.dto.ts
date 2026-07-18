export interface IShopAffiliationResponseDTO {
  id: string;
  shopId: string;
  shopAccountId: string;
  role: "owner" | "employee";
  status: "active" | "inactive" | "removed";
  createdAt?: Date;
}