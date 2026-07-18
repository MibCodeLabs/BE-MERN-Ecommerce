import { Customer, type ICustomer } from "../model/customer-account.schema.js";
import { BaseCrudService } from "./base-crud.service.js";

export class CustomerAccountService extends BaseCrudService<ICustomer>{
    constructor(){
        super(Customer)
    }
}