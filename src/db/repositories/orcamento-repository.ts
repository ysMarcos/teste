import { sql } from "drizzle-orm"
import { Orcamento } from "../../entities/orcamento.ts";
import { db } from "../index.ts";
import { orcamentoSchema } from "../schemas/orcamento.ts";
import { OrcamentoRepository } from "../../repositories/orcamento.ts";


export class DbOrcamentoRepository implements OrcamentoRepository{
    async save(orcamento: Orcamento) {
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
    async list() {
        const listSql = db
            .select()
            .from(orcamentoSchema)
            .prepare();
        try {
            const orcamentos = await listSql.execute();
            return orcamentos;
        } catch(error) {
            throw error;
        }
    }
}