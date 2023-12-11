import { describe, expect, test } from "vitest";
import { ProdutoOrcamento } from "../../src/entities/produto-orcamento"

describe("ProdutoOrcamento", () => {
    test("Deve criar a classe corretamente", () => {
        const produtoOrcamento = new ProdutoOrcamento({
            nome: "teste",
            valor: 2,
            orcamentoId: 1
        })
        expect(produtoOrcamento).toBeInstanceOf(ProdutoOrcamento);
    })
})