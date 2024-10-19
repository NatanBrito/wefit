import { Prisma, PrismaClient } from "@prisma/client";

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

  async findOne(id: number) {
    return this.orm.customer.findUnique({ where: { id } });
  }

  async update(id: number, data: Prisma.CustomerUpdateInput) {
    return this.orm.customer.update({ where: { id }, data });
  }

  async delete(id: number) {
    return this.orm.customer.delete({ where: { id } });
  }
}