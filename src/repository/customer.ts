import { Prisma, PrismaClient } from "@prisma/client";

export class CustomerRepository {
    private prisma;
    constructor() {
        this.prisma = new PrismaClient();
    }
  async create(data: Prisma.CustomerCreateInput) {
    return this.prisma.customer.create({ data });
  }

  async findMany() {
    return this.prisma.customer.findMany();
  }

  async findOne(id: number) {
    return this.prisma.customer.findUnique({ where: { id } });
  }

  async update(id: number, data: Prisma.CustomerUpdateInput) {
    return this.prisma.customer.update({ where: { id }, data });
  }

  async delete(id: number) {
    return this.prisma.customer.delete({ where: { id } });
  }
}