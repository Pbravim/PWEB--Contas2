class Conta {
    _numero;
    _saldo;
    constructor(numero, saldo = 0) {
        this._saldo = saldo;
        this._numero = numero;
    }
    get numero() {
        return this._numero;
    }
    get saldo() {
        return this._saldo;
    }
    debitar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
        }
    }
    creditar(valor) {
        this._saldo += valor;
    }
    transferir(destino, valor) {
        this.debitar(valor);
        destino.creditar(valor);
    }
}
