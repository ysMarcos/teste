import { db } from "../db/index.js";
import { orcamentoSchema } from "../db/schemas/orcamento.js";

export class ListOrcamento {
    async execute() {
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