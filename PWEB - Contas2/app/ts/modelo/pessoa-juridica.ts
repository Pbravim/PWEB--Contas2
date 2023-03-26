class PessoaJuridica extends Pessoa {
    private _cnpj: string;

    constructor(nome: string, idade: number, dataNasci: Date, cnpj: string) {
        super(nome, idade, dataNasci);
        this._cnpj = cnpj;
    }

    get cnpj(): string {
        return this._cnpj;
    }
}
