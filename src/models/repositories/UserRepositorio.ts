import { User } from "../User"
import { Repository } from "typeorm"

export class UserRepository{

    private repository: Repository<User>

    constructor(repository:Repository<User>){this.repository=repository}

    async create(p: User): Promise<User> {
        const novoUser = this.repository.create(p);
        await this.repository.save(novoUser);
        return novoUser;
    }

    async findOne(id: number): Promise<User | null> {
        return this.repository.findOneBy({id});
    }

    async findOneByEmail(email:string): Promise<User | null> {
        return this.repository.findOneBy({email});
    }

    async findAll(): Promise<User[]> {
        return this.repository.find()
    }

}

