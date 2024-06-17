import { User } from "../../models/User";
import { UserRepository } from "../../models/repositories/UserRepositorio";
import { AuthService } from "../AuthService";
import * as crypto from "crypto";
import jwt from "jsonwebtoken";

export class AuthServiceImpl implements AuthService {
  private UserRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.UserRepository = userRepository;
  }

  async login(email: string, password: string): Promise<string> {
    const UserExiste = await this.UserRepository.findOneByEmail(email);
    if (!UserExiste) {
      return;
    }
    const hash = crypto.createHash("sha256");
    hash.update(password);
    const novohash = hash.digest("hex");
    if (novohash !== UserExiste.password) {
      return;
    }
    const token = jwt.sign({ id: UserExiste.id }, "segredo", {
      expiresIn: "3h",
    });
    return token;
  }

  async signup(email: string, password: string): Promise<User> {
    const UserExiste = await this.UserRepository.findOneByEmail(email);
    if (UserExiste) {
      return;
    }
    const hash = crypto.createHash("sha256");
    const NovoUsuario = new User();
    NovoUsuario.email = email;
    hash.update(password);
    NovoUsuario.password = hash.digest("hex");
    const usuario = await this.UserRepository.create(NovoUsuario);
    return usuario;
  }
}
