import { describe, test } from "vitest";
import request from "supertest"

describe("ProdutoOrcamentoController", () => {
    test("Deve criar um usuário corretamente pela rota", async () => {
        request('http://localhost:3000/')
        .post('/produto')
        .send({
            "nome": "Marcos",
            "valor": "11/12/2023",
            "orcamentoId": 1
        })
        .expect(201)
        .end(function(err, res) {
            if(err) throw err;
        })
    })
})