export interface ICustomerResponseDTO {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string | null;
  addresses: {
    title: string | null;
    street: string;
    city: string;
    state: string | null;
    country: string;
    postalCode: string | null;
    isDefault: boolean;
  }[];
  isActive: boolean;
  isVerified: boolean;
  lastLoginAt: Date | null;
}