import { Router } from "express";
import { AuthController } from "../controllers/AuthController";
import { UserRepository } from "../models/repositories/UserRepositorio";
import { AuthServiceImpl } from "../services/Impl/AuthServiceImpl";
import { User } from "../models/User";
import { DataSource } from "typeorm";

export class AuthRouter{
    public router: Router

    constructor(dataSource:DataSource){
        this.router=Router()
        
        this.iniciar(dataSource)
    }

    private iniciar(dataSource:DataSource){
        console.log("iniciando rota");
        const repository = new UserRepository(dataSource.getRepository(User));
        const service = new AuthServiceImpl(repository);
        const controller = new AuthController(service);

        this.router.post("/login", controller.login);
        this.router.post("/signup", controller.signup);
    }
}