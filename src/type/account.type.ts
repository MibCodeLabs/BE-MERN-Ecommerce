import { ACCOUNT_TYPE } from "../util/constant/constants.js"; 
export type AccountType =
  typeof ACCOUNT_TYPE[keyof typeof ACCOUNT_TYPE];
