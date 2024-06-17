import { Produto } from "../../models/Produto";
import { ProdutoService } from "../ProdutoService";
import { AppDataSource } from "../../index";
import { Repository } from "typeorm";
import { ProdutoRepository } from "../../models/repositories/ProdutoRepositorio";

export class ProdutoServiceImpl implements ProdutoService {
  private produtoRepository: ProdutoRepository;

  constructor(produtoRepository: ProdutoRepository) {
    this.produtoRepository = produtoRepository;
  }
  async criaProduto(p: Produto): Promise<Produto> {
    const produtoNovo = await this.produtoRepository.create(p);
    return produtoNovo;
  }
  async leProduto(id: number): Promise<Produto> {
    return this.produtoRepository.findOne(id);
  }
  async leProdutos(): Promise<Produto[]> {
    return this.produtoRepository.findAll();
  }
}
