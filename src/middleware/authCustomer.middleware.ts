import { NextFunction, Request, Response } from 'express';

const authCustomer = async (req: Request, res: Response, next: NextFunction) => {
  console.log('User is authenticated');
  next();
};

export default authCustomer;
