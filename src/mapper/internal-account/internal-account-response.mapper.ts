import type { IInternalAccountResponseDTO } from "../../dto/internal-account/internal-account-response.dto.js";
import type { IInternalAccount } from "../../interface/model/internal-account.interface.js";

export const internalAccountResponseMapper = (
  internalAccount: IInternalAccount,
): IInternalAccountResponseDTO => ({
  id: internalAccount._id.toString(),

  email: internalAccount.email,

  contactNumber: internalAccount.contactNumber,

  role: internalAccount.role,

  status: internalAccount.status,

  lastLoginAt: internalAccount.lastLoginAt ?? null,
});