import dotenv from 'dotenv';
import express, { json } from 'express';
import cors from 'cors';

import customer from './routes/customer.routes';

dotenv.config();

const app = express();

app.use(cors());
app.use(json());
app.use(customer);

export default app;
