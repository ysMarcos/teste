import { sql } from "drizzle-orm";
import { db } from "../db/index.js";
import { orcamentoSchema } from "../db/schemas/orcamento.js";
import { Orcamento } from "../entities/orcamento.js";

export class CreateOrcamento {
    async execute(orcamento: Orcamento) {
        const insertSql = db
        .insert(orcamentoSchema)
        .values({
            nomeCliente: sql.placeholder("nomeCliente"),
            data: sql.placeholder("data")
        })
        .prepare();
        try{
            const result = await insertSql.execute({
                nomeCliente: orcamento.nomeCliente,
                data: orcamento.data
            })
            return result;
        } catch(error){
            throw error;
        }
        
    }
}