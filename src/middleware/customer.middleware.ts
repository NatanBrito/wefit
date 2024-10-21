import { ZodSchema } from 'zod';

type RequestData = 'body' | 'query' | 'params';

export const validateInterface =
  (schema: ZodSchema, dataSource: RequestData = 'body') =>
  (req: any, res: any, next: any) => {
    const data = req[dataSource];
    const validation = schema.safeParse(data);

    if (!validation.success) {
      return res.status(400).json({
        message: 'Validation error',
        errors: validation.error.format(),
      });
    }

    req[dataSource] = validation.data;
    next();
  };

export default validateInterface;
