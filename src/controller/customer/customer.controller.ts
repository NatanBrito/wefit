import { Request, Response } from "express";
import { Customer } from "@prisma/client";

import CustomerService from "../../services/customer.service";
import { ICustomer, IValidateCustomer } from "./customer.interface";
import { IAddress, IValidateAddress } from "../address/address.interface";
import AlreadyExistError from "../../error/alreadyExist.error";

export async function createCustomer(req: Request, res: Response): Promise<void> {
  try {
    const dataCustomer: ICustomer = req.body.Customer;
    let dataAddress: IAddress = req.body?.Address;
    console.log({ dataCustomer })

    const customer: ICustomer = IValidateCustomer.parse(dataCustomer);
    const address: IAddress = IValidateAddress.parse(dataAddress);

    const hasCustomer = await CustomerService.findCustomer({ cpf: customer.cpf, cnpj: customer.cnpj });
    if (!hasCustomer) {
      throw new AlreadyExistError(`Customer:${customer.name} already exist`);
    }
    const newCustomer = await CustomerService.create(customer);
    // const newAddress = await CustomerService.createAddress(newCustomer.id, address);

    res.status(200).send({ customer: newCustomer, address: "newAddress" });

  } catch (err) {
    if (err instanceof AlreadyExistError) {
      res.status(err.statusCode).send({ error: err, message: err.message });
      return
    }
    res.status(500).send({ error: err, message: "Error to create customer" });
  }
}

export async function listCustomer(req: Request, res: Response): Promise<Customer[]> {
  const customers: Customer[] = await CustomerService.get();
  res.status(200).send(customers);
  return customers;
}