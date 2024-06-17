import { json } from 'express';
import * as express from 'express'
import { ProdutoController } from '../controllers/produto';
import { AuthRouter } from '../routes/AuthRouter';
import { AppDataSource } from '../index';

const app = express.default();

app.use(json());



app.use("/auth", authRouter.router);

const controller = new ProdutoController;

app.get("/produtos", controller.criaProduto);

app.post("/produtos", controller.leProduto);

export default app;