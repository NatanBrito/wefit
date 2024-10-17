import { Router } from "express";
import * as customerController from "../controller/customer.controller";

const customer = Router();

customer.get("/customer", customerController.createCustomer);

export default customer;