import { describe, test } from "vitest";
import request from "supertest"

describe("OrcamentoController", () => {
    test("Deve criar um orcamento corretamente pela rota", async () => {
        const req = {
            "nomeCliente": "Marcos",
            "data": "11/12/2023"
        };
        
        request('http://localhost:3000/')
        .post('/orcamento')
        .send(req)
        .expect('Content-Type', 'application/json')
        .expect(201)
    })
    
    test("Deve retornar erro 400 ao não informar um campo", async () => {
        request('http://localhost:3000/')
        .post('/orcamento')
        .send({
            "nomeCliente": "",
            "data": "11/12/2023"
        })
        .expect(404)
        .end(function(err, res) {
            if(err) throw err;
        })
    })
})