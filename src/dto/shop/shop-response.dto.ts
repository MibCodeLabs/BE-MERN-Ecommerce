export interface IShopResponseDTO {
  id: string;
  name: string;
  slug: string;
  description: string | null;
   email: string | null;
  contactNumber: string | null;
  address: {
    add?: string | undefined;
    city?: string | undefined;
    state?: string | undefined;
    country?: string | undefined;
    postalCode?: string | undefined;
  };

  location: {
    latitude?: number | undefined;
    longitude?: number | undefined;
  };
  status: "active" | "inactive" | "suspended" | "pending";
  logo: string | null;
  coverImage: string | null;
  settings: {
    currency: string;
    timezone: string;
  };
  openedAt: Date | null;
}