import { Request, Response } from 'express';
import { Customer } from '@prisma/client';

import { ICustomer, IValidateCustomer } from './customer.interface';
import { IAddress, IValidateAddress } from '../address/address.interface';
import CustomerService from '../../services/customer.service';
import addressService from '../../services/address.service';
import AlreadyExistError from '../../error/alreadyExist.error';

export async function createCustomer(req: Request, res: Response): Promise<void> {
  try {
    const dataCustomer: ICustomer = req.body.Customer;
    let dataAddress: IAddress = req.body?.Address;

    const customer: ICustomer = IValidateCustomer.parse(dataCustomer);
    const address: IAddress = IValidateAddress.parse(dataAddress);

    const validateHasUnique = {
      cpf: customer.cpf,
      cnpj: customer.cnpj,
      email: customer.email,
      cellPhone: customer.cellPhone,
    };

    const hasCustomer = await CustomerService.findCustomer(validateHasUnique);

    if (hasCustomer) {
      const message = `Customer: ${customer.name}, already exist, verify this fields: [${Object.keys(validateHasUnique)}], They has unique value`;
      throw new AlreadyExistError(message);
    }

    const newCustomer: Customer = await CustomerService.create(customer);
    const newAddress = await addressService.create(address, newCustomer.id);

    res.status(200).send({ customer: newCustomer, address: newAddress });
  } catch (err) {
    console.error(err);

    if (err instanceof AlreadyExistError) {
      res.status(err.statusCode).send({ error: err, message: err.message });
      return;
    }

    res.status(500).send({ error: err, message: 'Error to create customer' });
  }
}

export async function listCustomer(req: Request, res: Response): Promise<Customer[]> {
  const customers: Customer[] = await CustomerService.get();
  res.status(200).send(customers);
  return customers;
}
