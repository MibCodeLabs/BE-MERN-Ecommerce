import type { ICustomerResponseDTO } from "../../dto/customer-account/customer-response.dto.js";
import type { ICustomer } from "../../interface/model/customer-account.interface.js";

export const customerResponseMapper = (
  customer: ICustomer,
): ICustomerResponseDTO => ({
  id: customer._id.toString(),
  firstName: customer.firstName,
  lastName: customer.lastName,
  email: customer.email,
  phone: customer.phone ?? null,
  addresses:
    customer.addresses?.map((address) => ({
      title: address.title ?? null,
      street: address.street,
      city: address.city,
      state: address.state ?? null,
      country: address.country,
      postalCode: address.postalCode ?? null,
      isDefault: address.isDefault ?? false,
    })) ?? [],

  isActive: customer.isActive,
  isVerified: customer.isVerified,
  lastLoginAt: customer.lastLoginAt ?? null,
});