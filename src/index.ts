import "reflect-metadata";
import { DataSource } from "typeorm";
import { Produto } from "./models/Produto";
import http from "http";
import app from "./config/index";
import { User } from "./models/User";
import e, { json } from "express";
import { AuthRouter } from "./routes/AuthRouter";
import { ProdutoRouter } from "./routes/ProdutoRouter";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "0023",
  database: "revisao",
  entities: [Produto, User],
  synchronize: true,
  logging: false,
});

AppDataSource.initialize()
  .then(() => {
    console.log("iniciando banco");

    const server = e();
    const authRouter = new AuthRouter(AppDataSource);
    const produtoRouter = new ProdutoRouter(AppDataSource);

    server.use(json());

    server.use("/auth", authRouter.router);
    server.use("/produtos", produtoRouter.router);

    server.listen(3000, () => {
      console.log("rodando");
    });
  })
  .catch((error) => console.log("erro ao iniciar banco", error));
