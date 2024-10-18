import { Router } from "express";
import * as customerController from "../controller/customer/customer.controller";
import { validateInterface } from "../middleware/customer.middleware";
import { IValidateCustomer } from "../controller/customer/customer.interface";
import authCustomer from "../middleware/authCustomer.middleware";

const customer = Router();

customer.use(authCustomer)
customer.post("/customer",validateInterface(IValidateCustomer), customerController.createCustomer)
customer.get("/customer", customerController.listCustomer);

export default customer;