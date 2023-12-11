export interface OrcamentoProps {
    id?: number;
    nomeCliente: string;
    data: Date;
}

export class Orcamento {
    private _id?: number | undefined;
    private _nomeCliente: string;
    private _data: Date;
    constructor({
        id,
        nomeCliente,
        data
    }: OrcamentoProps){
        this._id = id;
        this._nomeCliente = nomeCliente;
        this._data = data;
    }
    public get id(): number | undefined {
        return this._id;
    }
    public set id(value: number | undefined) {
        this._id = value;
    }
    public get nomeCliente(): string {
        return this._nomeCliente;
    }
    public set nomeCliente(value: string) {
        this._nomeCliente = value;
    }
    public get data(): Date {
        return this._data;
    }
    public set data(value: Date) {
        this._data = value;
    }
}