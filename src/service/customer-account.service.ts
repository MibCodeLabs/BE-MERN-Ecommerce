import type { ICustomer } from "../interface/model/customer-account.interface.js";
import { Customer } from "../model/customer-account.schema.js";
import { BaseCrudService } from "./base-crud.service.js";

export class CustomerAccountService extends BaseCrudService<ICustomer>{
    constructor(){
        super(Customer)
    }
}