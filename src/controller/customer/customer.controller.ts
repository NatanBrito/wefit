import { Request, Response } from "express";
import { Customer } from "@prisma/client";

import CustomerService from "../../services/customer";
import { ICustomer, IValidateCustomer } from "./customer.interface";
import { IAddress, IValidateAddress } from "../address/address.interface";

export async function createCustomer(req: Request, res: Response): Promise<void> {
  try {
    const dataCustomer: ICustomer = req.body.Customer;
    let dataAddress: IAddress = req.body?.Address;
    console.log({ dataCustomer })

    const customer: ICustomer = IValidateCustomer.parse(dataCustomer);
    const address: IAddress = IValidateAddress.parse(dataAddress);
    // const test = { ...customer, Address: address }
    const response = await CustomerService.create(customer);
    res.status(200).send({ response });
  } catch (err) {
    console.error(err);
    res.status(400).send({ error: err, message: "Error to create customer" });
  }
}

export async function listCustomer(req: Request, res: Response): Promise<Customer[]> {
  const customers: Customer[] = await CustomerService.get();
  res.status(200).send(customers);
  return customers;
}