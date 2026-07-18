export interface IInternalAccountResponseDTO {
  id: string;

  email: string;

  contactNumber: string;

  role: "admin" | "employee";

  status: "active" | "inactive" | "suspended";

  lastLoginAt: Date | null;
}