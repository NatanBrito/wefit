import { NextFunction, Request, Response } from 'express';

const authCustomer = async (req: Request, res: Response, next: NextFunction) => {
  // Entraria validação JWT
  console.log('\n User is authenticated');
  next();
};

export default authCustomer;
