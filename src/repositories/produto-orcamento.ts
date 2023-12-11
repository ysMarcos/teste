import { ProdutoOrcamento } from "../entities/produto-orcamento.ts";

export interface ProdutoOrcamentoRepository {
    save(produtoOrcamento: ProdutoOrcamento): Promise<any>;
}