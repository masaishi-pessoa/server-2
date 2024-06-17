import { Request, Response } from "express";
import { Produto } from "../models/Produto";

export class ProdutoController {
    
    public produtos: Produto[]=[];

    public criaProduto = ( req: Request, res: Response )=>{
        const {nome, preco, imagem, descricao} = req.body;
        const produto = new Produto();
        produto.nome = nome;
        produto.descricao = descricao;
        produto.preco = preco;
        produto.imagem = imagem;
        this.produtos.push(
            produto
        )
        res.status(201).json(this.produtos);
    }

    public leProduto = ( req: Request, res: Response )=>{
        res.status(200).json(this.produtos);
    }
}