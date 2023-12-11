import { Orcamento } from "../entities/orcamento.ts";
import { OrcamentoRepository } from "../repositories/orcamento.ts";

export class CreateOrcamento {
    constructor(
        private readonly repository: OrcamentoRepository
    ){}
    async execute(orcamento: Orcamento) {
        try{
            const result = this.repository.save(orcamento);
            return result;
        } catch(error){
            throw error;
        }
        
    }
}