import { db } from "../db/index.ts";
import { orcamentoSchema } from "../db/schemas/orcamento.ts";
import { OrcamentoRepository } from "../repositories/orcamento.ts";

export class ListOrcamento {
    constructor(
        private readonly repo: OrcamentoRepository
    ){}
    async execute() {
        try {
            const result = await this.repo.list();
            return result;
        } catch(error) {
            throw error;
        }
    }
}