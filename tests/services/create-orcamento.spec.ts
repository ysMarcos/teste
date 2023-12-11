import { describe, expect, test } from "vitest";
import { CreateOrcamento } from "../../src/services/create-orcamento";
import { Orcamento } from "../../src/entities/orcamento";
import { OrcamentoRepository } from "../../src/repositories/orcamento";

class Repository implements OrcamentoRepository{
    list(): Promise<any> {
        throw new Error("Method not implemented.");
    }
    public db: Orcamento[] = [];
    async save(orcamento: Orcamento) {
        this.db.push(orcamento);
    }
}

describe("CreateOrcamentoService", () => {
    test("Deve criar o service corretamente", () => {
        const orcamento = new Orcamento({
            nomeCliente: "Marcos",
            data: new Date('11/12/2023')
        })
        const repo = new Repository;
        const createService = new CreateOrcamento(repo);
        createService.execute(orcamento);
        expect(repo.db).toHaveLength(1);
    })
})