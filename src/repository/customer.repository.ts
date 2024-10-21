import { Prisma, PrismaClient } from "@prisma/client";

type CustomerWhereInput = Prisma.CustomerWhereInput;


export class CustomerRepository {
  private orm;
  constructor() {
    this.orm = new PrismaClient();
  }
  async create(data: Prisma.CustomerCreateInput) {
    return this.orm.customer.create({ data });
  }

  async findMany() {
    return this.orm.customer.findMany();
  }

  async findOne(dataSearch: CustomerWhereInput) {
    return this.orm.customer.findFirst({
      where: dataSearch
    });
  }
}