import { Request, Response } from "express";
import { AuthServiceImpl } from "../services/Impl/AuthServiceImpl";

export class AuthController{

    private UserService:AuthServiceImpl

    constructor(userService: AuthServiceImpl){this.UserService = userService}

    async login(req: Request, res: Response){

        const {email, password} = req.body;
        
        const logado = await this.UserService.login(email, password);

        if(!logado){
            return res.status(401).send({message:"senha inválida ou usuário não encontrado!"})
        }
        return res.status(200).send(logado)
    }

    async signup(req: Request, res: Response){

        const {email, password} = req.body;

        const usuario = await this.UserService.signup(email, password);

        if(!usuario){
            return res.status(400).send({message:"usuário já existente"});
        }
        return res.status(201).send(usuario);
    }

}