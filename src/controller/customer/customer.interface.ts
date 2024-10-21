import { z } from 'zod';
import { IAddress, IValidateAddress } from '../address/address.interface';

interface ICustomerWithAddress {
  Customer: ICustomer;
  Address?: IAddress;
}

interface ICustomer {
  name: string;
  cnpj: string;
  cpf: string;
  typeAccount: 'PF' | 'PJ';
  cellPhone: string;
  phone?: string;
  email: string;
}

const IValidateCustomer = z.object({
  name: z.string().min(1).max(255).trim(),
  cnpj: z.string().min(14).max(20).trim(),
  cpf: z.string().min(11).max(11).trim(),
  typeAccount: z.enum(['PF', 'PJ']),
  cellPhone: z.string().min(11).max(11).trim(),
  phone: z.string().max(15).trim(),
  email: z.string().email(),
});

const IValidateCustomerWithAddress = z.object({
  Customer: IValidateCustomer,
  Address: IValidateAddress,
});

export { ICustomer, IValidateCustomer, ICustomerWithAddress, IValidateCustomerWithAddress };
