export interface OrcamentoProps {
    id?: number;
    nome: string;
    valor: number;
    orcamentoId: number;
}

export class ProdutoOrcamento {
    private _id?: number;
    private _nome: string;
    private _valor: number;
    private _orcamentoId: number;

constructor({
    id,
    nome,
    valor,
    orcamentoId
}: OrcamentoProps){
    this._id = id;
    this._nome = nome;
    this._valor = valor;
    this._orcamentoId = orcamentoId
}

    public get id(): number | undefined {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    public get nome(): string {
        return this._nome;
    }
    public set nome(value: string) {
        this._nome = value;
    }
    public get valor(): number {
        return this._valor;
    }
    public set valor(value: number) {
        this._valor = value;
    }
    public get orcamentoId(): number {
        return this._orcamentoId;
    }
    public set orcamentoId(value: number) {
        this._orcamentoId = value;
    }
}