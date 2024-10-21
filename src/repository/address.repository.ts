import { Prisma, PrismaClient } from "@prisma/client";

type AddressUniqueFields = Prisma.AddressWhereInput;

export class AddressRepository {
    private orm;

    constructor() {
        this.orm = new PrismaClient();

    }


    async create(data: Prisma.AddressCreateInput) {
        return this.orm.address.create({ data });
    }

    async findMany() {
        return this.orm.address.findMany();
    }

    async findOne(dataSearch: AddressUniqueFields) {
        return this.orm.address.findFirst({
            where: dataSearch
        });
    }
}