export interface IShopAccountResponseDTO {
  id: string;
  email: string;
  contactNumber: string;
  status: "active" | "inactive" | "suspended";
  lastLoginAt: Date | null;
}