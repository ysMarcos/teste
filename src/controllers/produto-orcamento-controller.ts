import { Request, Response } from "express";
import { ProdutoOrcamento } from "../entities/produto-orcamento.js";
import { CreateProdutoOrcamento } from "../services/create-produto-orcamento.js";
import { DbProdutoOrcamentoRepository } from "../db/repositories/produto-orcamento-repository.ts";

export class CreateProdutoOrcamentoController {
    async create(request: Request, response: Response) {
        const { items, orcamentoId } = request.body;
        const repo = new DbProdutoOrcamentoRepository;
        const createProdutoOrcamento = new CreateProdutoOrcamento(repo);
        let result: any[] = []
        try {
            for(let i in items){
                result += await createProdutoOrcamento.execute(new ProdutoOrcamento({
                    nome: items[i].nome,
                    valor: items[i].valor,
                    orcamentoId
                }));
            }
            return response.status(201).json(result);
        } catch(error) {
            return response.status(400).json(error);
        }
    }
}