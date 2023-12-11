import { ProdutoOrcamento } from "../entities/produto-orcamento.ts";
import { ProdutoOrcamentoRepository } from "../repositories/produto-orcamento.ts";

export class CreateProdutoOrcamento {
    constructor(
        private readonly repository: ProdutoOrcamentoRepository
    ){}
    async execute(produtoOrcamento: ProdutoOrcamento) {
        try{
            const result = this.repository.save(produtoOrcamento)
            return result;
        } catch(error){
            throw error;
        }
        
    }
}