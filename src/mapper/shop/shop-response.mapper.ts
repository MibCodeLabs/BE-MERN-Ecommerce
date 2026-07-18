import type { IShopResponseDTO } from "../../dto/shop/shop-response.dto.js";
import type { IShop } from "../../interface/model/shop.interface.js";

export const shopResponseMapper = (shop: IShop): IShopResponseDTO => ({
  id: shop._id.toString(),

  name: shop.name,
  slug: shop.slug,

  description: shop.description ?? null,

  email: shop.email ?? null,
  contactNumber: shop.contactNumber ?? null,

  address: {
    add: shop.address?.add,
    city: shop.address?.city,
    state: shop.address?.state,
    country: shop.address?.country,
    postalCode: shop.address?.postalCode,
  },

  location: {
    latitude: shop.location?.latitude,
    longitude: shop.location?.longitude,
  },

  status: shop.status,

  logo: shop.logo ?? null,
  coverImage: shop.coverImage ?? null,

  settings: {
    currency: shop.settings?.currency ?? "PKR",
    timezone: shop.settings?.timezone ?? "Asia/Karachi",
  },

  openedAt: shop.openedAt ?? null,
});
