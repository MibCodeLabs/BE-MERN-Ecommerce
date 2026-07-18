import type { IShopAccountResponseDTO } from "../../dto/shop-account/shop-account-response.dto.js";
import type { IShopAccount } from "../../interface/model/shop-account.interface.js";

export const shopAccountResponseMapper = (
  shopAccount: IShopAccount,
): IShopAccountResponseDTO => ({
  id: shopAccount._id.toString(),
  email: shopAccount.email,
  contactNumber: shopAccount.contactNumber,
  status: shopAccount.status,
  lastLoginAt: shopAccount.lastLoginAt ?? null,
});