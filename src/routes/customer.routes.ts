import { Router } from "express";
import * as customerController from "../controller/customer/customer.controller";
import { validateInterface } from "../middleware/customer.middleware";
import { IValidateCustomer } from "../controller/customer/customer.interface";

const customer = Router();

customer.post("/customer",validateInterface(IValidateCustomer), customerController.createCustomer)
customer.get("/customer", customerController.listCustomer);

export default customer;