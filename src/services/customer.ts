import { Customer } from "@prisma/client";
import { CustomerRepository } from "../repository/customer";


export async function getCustomer(): Promise<Customer[]> {
    const customerRepository = new CustomerRepository()
    return customerRepository.findMany()
}