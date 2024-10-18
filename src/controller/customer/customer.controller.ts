import { Request, Response } from "express";
import { Customer } from "@prisma/client";

import { getCustomer } from "../../services/customer";
import { ICustomer, IValidateCustomer } from "./customer.interface";
import { IAddress, IValidateAddress } from "../address/address.interface";

export async function createCustomer(req: Request, res: Response): Promise<void> {
  try {

    let dataCustomer = req.body;

    const customer: ICustomer = IValidateCustomer.parse(dataCustomer);
    const address: IAddress = IValidateAddress.parse(customer.address);
    
    res.status(200).send({ customer, address });
  } catch (err) {
    res.status(400).send({ error: err, message: "Error to create customer" });
  }
}

export async function listCustomer(req: Request, res: Response): Promise<Customer[]> {
  const customers: Customer[] = await getCustomer()
  res.status(200).send(customers);
  return customers;
}