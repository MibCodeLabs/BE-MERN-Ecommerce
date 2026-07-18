import type { IShopAffiliationResponseDTO } from "../../dto/shop-affiliation/shop-affiliation-response.dto.js";
import type { IShopAffiliation } from "../../interface/model/shop-affiliation.interface.js";

export const shopAffiliationResponseMapper = (
  shopAffiliation: IShopAffiliation,
): IShopAffiliationResponseDTO => ({
  id: shopAffiliation._id.toString(),
  shopId: shopAffiliation.shopId.toString(),
  shopAccountId: shopAffiliation.shopAccountId.toString(),
  role: shopAffiliation.role,
  status: shopAffiliation.status,
});