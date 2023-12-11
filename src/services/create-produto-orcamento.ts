import { sql } from "drizzle-orm";
import { db } from "../db/index.ts";
import { produtoOrcamentoSchema } from "../db/schemas/produto-orcamento.ts";
import { ProdutoOrcamento } from "../entities/produto-orcamento.ts";

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