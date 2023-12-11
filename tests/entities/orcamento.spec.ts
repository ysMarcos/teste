import { describe, expect, test } from "vitest";
import { Orcamento } from "../../src/entities/orcamento"

describe("Orcamento", () => {
    test("Deve criar a classe corretamente", () => {
        const orcamento = new Orcamento({
            nomeCliente: "Marcos",
            data: new Date("11/12/2023")
        })
        expect(orcamento).toBeInstanceOf(Orcamento);
    })
})