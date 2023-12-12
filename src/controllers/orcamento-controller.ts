import { Request, Response } from "express";
import { Orcamento } from "../entities/orcamento.ts";
import { CreateOrcamento } from "../services/create-orcamento.ts";
import { DbOrcamentoRepository } from "../db/repositories/orcamento-repository.ts";

export class OrcamentoController {
    async create(request: Request, response: Response) {
        const { nomeCliente, data } = request.body;
        const orcamento = new Orcamento({
            nomeCliente, 
            data: new Date(data)
        })
        console.log(orcamento)
        const repo = new DbOrcamentoRepository;
        const createOrcamento = new CreateOrcamento(repo);
        try {
            const result = await createOrcamento.execute(orcamento);
            return response.status(201).json(result);
        } catch(error) {
            response.status(400).json(error);
        }
    }

}