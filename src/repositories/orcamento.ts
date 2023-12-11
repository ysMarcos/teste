import { Orcamento } from "../entities/orcamento.ts";

export interface OrcamentoRepository {
    save(orcamento: Orcamento): Promise<any>;
    list(): Promise<any[]>;
}