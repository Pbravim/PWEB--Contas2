class Pessoa {
    _nome;
    _idade;
    _dataNasci;
    constructor(nome, idade, dataNasci) {
        this._nome = nome;
        this._idade = idade;
        this._dataNasci = dataNasci;
    }
    get nome() {
        return this._nome;
    }
    set nome(nome) {
        this._nome = nome;
    }
    get idade() {
        return this._idade;
    }
    set idade(idade) {
        this._idade = idade;
    }
    get dataNascimento() {
        return this._dataNasci;
    }
    set dataNascimento(novoDataNasci) {
        this._dataNasci = novoDataNasci;
    }
}
