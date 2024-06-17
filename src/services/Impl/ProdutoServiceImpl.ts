import { Produto } from "../../models/Produto";
import { ProdutoService } from "../ProdutoService";
import { AppDataSource } from "../../index";
import { Repository } from "typeorm";
import { ProdutoRepository } from "../../models/repositories/ProdutoRepositorio";

export class ProdutoServiceImpl implements ProdutoService{
    
    private produtoRepository: ProdutoRepository

    constructor(){this.produtoRepository=new ProdutoRepository()}

    async criaProduto(p: Produto): Promise<void> {
        await this.produtoRepository.create(p)
    }
    async leProduto(id: number): Promise<Produto> {
        return this.produtoRepository.findOne(id)
    }
    async leProdutos(): Promise<Produto[]> {
        return this.produtoRepository.findAll()
    }
    

}