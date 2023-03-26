class Pessoa {
    private _nome : string;
    private _idade: number;
    private _dataNasci: Date;

    constructor(nome: string, idade: number, dataNasci: Date) {
        this._nome = nome;
        this._idade = idade;
        this._dataNasci = dataNasci;
    }
    get nome(): string {
        return this._nome;
    }

    set nome(nome: string) {
        this._nome = nome;
    }

    get idade(): number {
        return this._idade;
    }

    set idade(idade: number) {
        this._idade = idade;
    }

    get dataNascimento(): Date {
        return this._dataNasci;
    }

    set dataNascimento(novoDataNasci: Date) {
        this._dataNasci = novoDataNasci;
    }
}
