import { Request, Response } from "express";
import { Orcamento } from "../entities/orcamento.js";
import { CreateOrcamento } from "../services/create-orcamento.js";
import { ListOrcamento } from "../services/list-orcamento.js";

export class OrcamentoController {
    async create(request: Request, response: Response) {
        const { nomeCliente, data } = request.body;
        const orcamento = new Orcamento({
            nomeCliente, 
            data: new Date(data)
        })
        const createOrcamento = new CreateOrcamento;
        try {
            const result = await createOrcamento.execute(orcamento);
            return response.status(201).json(result);
        } catch(error) {
            response.status(400).json(error);
        }
    }

    async list(request: Request, response: Response){
        const listOrcamento = new ListOrcamento;
        try {
            const result = await listOrcamento.execute();
            return response.status(200).json(result);
        } catch(error) {
            response.status(400).json(error);
        }
    }

}