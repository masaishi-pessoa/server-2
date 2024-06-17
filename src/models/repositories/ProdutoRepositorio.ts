import { Produto } from "../Produto"
import { AppDataSource } from "../../index"
import { Repository } from "typeorm"

export class ProdutoRepository{

    private repository: Repository<Produto>

    constructor(){this.repository=AppDataSource.getRepository(Produto)}

    async create(p: Produto): Promise<void> {
        const novoProduto = this.repository.create(p)
        await this.repository.save(novoProduto)
    }

    async findOne(id: number): Promise<Produto | null> {
        return this.repository.findOneBy({id});
    }

    async findAll(): Promise<Produto[]> {
        return this.repository.find()
    }

}

