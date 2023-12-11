import { describe, expect, test } from "vitest";
import { CreateProdutoOrcamento } from "../../src/services/create-produto-orcamento";
import { ProdutoOrcamentoRepository } from "../../src/repositories/produto-orcamento";
import { ProdutoOrcamento } from "../../src/entities/produto-orcamento";

class Repository implements ProdutoOrcamentoRepository{
    public db: ProdutoOrcamento[] = [];
    async save(produtoOrcamento: ProdutoOrcamento) {
        this.db.push(produtoOrcamento);
    }
}

describe("CreateOrcamentoService", () => {
    test("Deve criar o service corretamente", () => {
        const orcamento = new ProdutoOrcamento({
            nome: "Teste",
            valor: 2,
            orcamentoId: 1
        })
        const repo = new Repository;
        const createService = new CreateProdutoOrcamento(repo);
        createService.execute(orcamento);
        expect(repo.db).toHaveLength(1);
    })
})