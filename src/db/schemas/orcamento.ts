import { relations } from "drizzle-orm";
import { date, int, mysqlTable, serial, varchar } from "drizzle-orm/mysql-core";
import { produtoOrcamentoSchema } from "./produto-orcamento.ts";

export const orcamentoSchema = mysqlTable('orcamento', {
    id: int('id').autoincrement().primaryKey(),
    nomeCliente: varchar('nome', { length: 50 }),
    data: date("data")
});

export const orcamentoRelations = relations(orcamentoSchema, ({many}) => ({
    produtoOrcamento: many(produtoOrcamentoSchema)
}))