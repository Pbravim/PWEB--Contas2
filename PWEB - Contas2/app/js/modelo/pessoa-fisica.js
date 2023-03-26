class PessoaFisica extends Pessoa {
    _cpf;
    constructor(nome, idade, dataNasci, cpf) {
        super(nome + " - Física", idade, dataNasci);
        this._cpf = cpf;
    }
    get cpf() {
        return this._cpf;
    }
}
