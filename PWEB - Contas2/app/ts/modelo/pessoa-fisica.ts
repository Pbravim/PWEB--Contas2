class PessoaFisica extends Pessoa {
    private _cpf: string;

    constructor(nome: string, idade: number, dataNasci: Date, cpf: string) {
        super(nome + " - Física", idade, dataNasci);
        this._cpf = cpf;
    }

    get cpf(): string {
        return this._cpf;
    }
}