import { User } from "../models/User"

export interface AuthService {
    login(email: string, password: string): Promise<string>

    signup(email: string, password: string): Promise<User>
}