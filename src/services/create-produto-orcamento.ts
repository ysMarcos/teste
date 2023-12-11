import { sql } from "drizzle-orm";
import { db } from "../db/index.js";
import { produtoOrcamentoSchema } from "../db/schemas/produto-orcamento.js";
import { ProdutoOrcamento } from "../entities/produto-orcamento.js";

export class CreateProdutoOrcamento {
    async execute(produtoOrcamento: ProdutoOrcamento) {
        const insertSql = db
        .insert(produtoOrcamentoSchema)
        .values({
            nome: sql.placeholder("nome"),
            valor: sql.placeholder("valor"),
            orcamentoId: sql.placeholder("orcamentoId")
        })
        .prepare();
        try{
            const result = await insertSql.execute({
                nome: produtoOrcamento.nome,
                valor: produtoOrcamento.valor,
                orcamentoId: produtoOrcamento.orcamentoId
            })
            return result;
        } catch(error){
            throw error;
        }
        
    }
}