
import { z } from 'zod';
import { IValidateAddress } from '../address/address.interface';

interface ICustomer {
    id: String;
    name: String;
    cnpj: String;
    cpf: String;
    typeAccount: String;
    cellPhone: String;
    phone?: String;
    email: String;
    address?: {
        zipCode: String;
        street: String;
        number: String;
        neighborhood: String;
        complement: String;
        city: String;
        state: String;
    };
}

const IValidateCustomer = z.object({
    id: z.string(),
    name: z.string().min(1).max(255).trim(),
    cnpj: z.string().min(14).max(20).trim(),
    cpf: z.string().min(11).max(11).trim(),
    typeAccount: z.enum(['PF', 'PJ']),
    cellPhone: z.string().min(11).max(11).trim(),
    phone: z.string().max(15).trim(),
    email: z.string().email(),
    address: IValidateAddress
});

export { ICustomer, IValidateCustomer };