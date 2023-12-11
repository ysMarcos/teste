import { Request, Response } from "express";
import { Orcamento } from "../entities/orcamento.ts";
import { CreateOrcamento } from "../services/create-orcamento.ts";
import { ListOrcamento } from "../services/list-orcamento.ts";
import { DbOrcamentoRepository } from "../db/repositories/orcamento-repository.ts";

export class OrcamentoController {
    async create(request: Request, response: Response) {
        const { nomeCliente, data } = request.body;
        const orcamento = new Orcamento({
            nomeCliente, 
            data: new Date(data)
        })
        const repo = new DbOrcamentoRepository;
        const createOrcamento = new CreateOrcamento(repo);
        try {
            const result = await createOrcamento.execute(orcamento);
            return response.status(201).json(result);
        } catch(error) {
            response.status(400).json(error);
        }
    }

    async list(request: Request, response: Response){
        const repo = new DbOrcamentoRepository;
        const listOrcamento = new ListOrcamento(repo);
        try {
            const result = await listOrcamento.execute();
            return response.status(200).json(result);
        } catch(error) {
            response.status(400).json(error);
        }
    }

}