import { Request, Response } from "express";
import { getCustomer } from "../../services/customer";
import { Customer } from "@prisma/client";

export async function createCustomer(req: Request, res: Response): Promise<Customer[]> {
     const customers: Customer[]= await getCustomer()
      res.status(200).send(customers);
      return customers;
  }

export async function listCustomer(req: Request, res: Response): Promise<Customer[]> {
     const customers: Customer[]= await getCustomer()
      res.status(200).send(customers);
      return customers;
  }