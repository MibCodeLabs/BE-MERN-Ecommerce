import type { ICrudResponseMappers } from "../../interface/controller/crud-response-mappers.interface.js";
import type { IInternalAccount } from "../../interface/model/internal-account.interface.js";
import { internalAccountResponseMapper } from "./internal-account-response.mapper.js";

export const internalAccountCrudResponseMappers: ICrudResponseMappers<IInternalAccount> = {
  getOne: internalAccountResponseMapper,
  create: internalAccountResponseMapper,
  update: internalAccountResponseMapper,
  getAll: (page) => ({
    ...page,
    content: page.content.map(internalAccountResponseMapper),
  }),
};