import express, { json } from "express";
import cors from "cors";
import customer from "./routes/customer.routes";
// import handleErrorMiddleware from "./middlewares/handlerErrorMiddleware.js";

const app = express();
app.use(cors());
app.use(json());
app.use(customer);
// app.use(handleErrorMiddleware);

export default app;


//#TODO 2: Criar um arquivo de configuração para o TypeScript
//#TODO COLOCAR ESLINT E PRETTIER
//#TODO COLOCAR ZOD PARA VALIDAÇÃO DE DADOS
//#TODO MIDDLEWARE DE VALIDAÇÃO
//#TODO ARQUITETURA EM CAMADAS
//#TODO TESTES UNITARIOS E DE INTEGRAÇÃO
//#TODO INSTALAÇÃO DAS LIBS DE TESTES E DE VALIDAÇÃO
//#TODO BUILD OTIMIZADO