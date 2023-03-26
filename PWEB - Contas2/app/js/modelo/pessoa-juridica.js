class PessoaJuridica extends Pessoa {
    _cnpj;
    constructor(nome, idade, dataNasci, cnpj) {
        super(nome, idade, dataNasci);
        this._cnpj = cnpj;
    }
    get cnpj() {
        return this._cnpj;
    }
}
