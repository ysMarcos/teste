import { float, int, mysqlTable, serial, varchar } from "drizzle-orm/mysql-core";
import { orcamentoSchema } from "./orcamento.ts";
import { relations } from "drizzle-orm";

export const produtoOrcamentoSchema = mysqlTable('produtoOrcamento', {
    id: int('id').autoincrement().primaryKey(),
    nome: varchar('nome', { length: 50 }),
    valor: float("valor"),
    orcamentoId: int("orcamentoId")
});

export const produtoOrcamentoRelations = relations(produtoOrcamentoSchema, ({ one }) => ({
    orcamento: one(orcamentoSchema, {
        fields: [produtoOrcamentoSchema.orcamentoId],
        references: [orcamentoSchema.id]
    })
}))