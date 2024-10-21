import { Address } from '@prisma/client';

import { AddressRepository } from '../repository/address.repository';
import { IAddress } from '../controller/address/address.interface';

class CustomerService {
  private addressRepository;
  constructor() {
    this.addressRepository = new AddressRepository();
  }

  async create(address: IAddress, customerId: number): Promise<Address> {
    const dataAddress = { customer: { connect: { id: customerId } }, ...address };

    return this.addressRepository.create(dataAddress);
  }

  async get(): Promise<Address[]> {
    return this.addressRepository.findMany();
  }

  async findCustomer(data: Object): Promise<Address | null> {
    return this.addressRepository.findOne(data);
  }
}
export default new CustomerService();
