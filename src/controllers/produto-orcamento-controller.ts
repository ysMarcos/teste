import { Request, Response } from "express";
import { ProdutoOrcamento } from "../entities/produto-orcamento.js";
import { CreateProdutoOrcamento } from "../services/create-produto-orcamento.js";
import { DbProdutoOrcamentoRepository } from "../db/repositories/produto-orcamento-repository.ts";

export class ProdutoOrcamentoController {
    async create(request: Request, response: Response) {
        const { valor, nome, orcamentoId } = request.body;
        const produtoOrcamento = new ProdutoOrcamento({valor, nome, orcamentoId});
        const repo = new DbProdutoOrcamentoRepository;
        const createProdutoOrcamento = new CreateProdutoOrcamento(repo);

        try {
            const result = await createProdutoOrcamento.execute(produtoOrcamento);
            return response.status(201).json(result);
        } catch(error) {
            return response.status(400).json(error);
        }
    }
}