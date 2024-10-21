import { z } from 'zod';


interface IAddress {
    zipCode: string,
    street: string,
    number: string,
    neighborhood: string,
    complement: string,
    city: string,
    state: string
}

const IValidateAddress = z.object({
    zipCode: z.string().max(14).trim(),
    street: z.string().min(1).max(255).trim(),
    number: z.string().min(1).max(10).trim(),
    neighborhood: z.string().min(1).max(255).trim(),
    complement: z.string().max(255).trim(),
    city: z.string().min(1).max(255).trim(),
    state: z.string().min(2).max(2).trim()
})

export { IAddress, IValidateAddress };
