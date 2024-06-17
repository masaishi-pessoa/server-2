import { Request, Response } from "express";
import { AuthServiceImpl } from "../services/Impl/AuthServiceImpl";

export class AuthController {
  private UserService: AuthServiceImpl;

  constructor(userService: AuthServiceImpl) {
    this.UserService = userService;
  }

  login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const logado = await this.UserService.login(email, password);

    if (!logado) {
      return res
        .status(401)
        .send({ message: "senha inválida ou usuário não encontrado!" });
    }
    return res.status(200).send(logado);
  };

  signUp = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const usuario = await this.UserService.signup(email, password);

    if (!usuario) {
      console.log(usuario);
      return res.status(400).send({ message: "usuário já existente" });
    }
    return res.status(201).send({
      email: usuario.email,
      id: usuario.id,
    });
  };
}
