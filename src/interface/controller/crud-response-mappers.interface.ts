import type { IPageResponse } from "../common/page-response.interfac.js";

export interface ICrudResponseMappers<T> {
  getOne?: (entity: T) => unknown;
  getAll?: (page: IPageResponse<T>) => unknown;
  create?: (entity: T) => unknown;
  update?: (entity: T) => unknown;
}