export const SortDirection = {
    ASC: "ASC",
    DESC: "DESC",
} as const;


export const PAGINATION_PREFERENCE = {
    STARTING_PAGE:0,
    DEFAULT_PAGE_SIZE:10
}

export const ACCOUNT_TYPE = {
  CUSTOMER: "customer",
  SHOP: "shop",
  STAFF: "staff",
} as const;


export const JWT_DEFAULTS = {
    SALT_ROUNDS : 12,
    ACCESS_EXPIRY:"15m",
    REFRESH_EXPIRY:"30d"
} as const;