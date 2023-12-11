import { ProdutoOrcamento } from "../../entities/produto-orcamento.ts";
import { ProdutoOrcamentoRepository } from "../../repositories/produto-orcamento.ts";
import { db } from "../index.ts";
import { produtoOrcamentoSchema } from "../schemas/produto-orcamento.ts";
import { sql } from "drizzle-orm"

export class DbProdutoOrcamentoRepository implements ProdutoOrcamentoRepository {
    async save(produtoOrcamento: ProdutoOrcamento) {
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