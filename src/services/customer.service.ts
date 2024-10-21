import { Customer } from '@prisma/client';
import { CustomerRepository } from '../repository/customer.repository';
import { ICustomer } from '../controller/customer/customer.interface';

class CustomerService {
  private customerRepository;
  constructor() {
    this.customerRepository = new CustomerRepository();
  }

  async create(data: ICustomer): Promise<Customer> {
    return this.customerRepository.create(data);
  }
  async get(): Promise<Customer[]> {
    return this.customerRepository.findMany();
  }
  async findCustomer(data: Object): Promise<Customer | null> {
    return this.customerRepository.findOne(data);
  }
}
export default new CustomerService();
