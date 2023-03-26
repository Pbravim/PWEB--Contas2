class RepositorioContas {
    _contas;
    constructor() {
        this._contas = new Array();
    }
    adicionar(conta) {
        this._contas.push(conta);
    }
    pesquisar(numero) {
        return this._contas.find(conta => conta.numero === numero);
    }
    getContas() {
        return this._contas;
    }
    remover(numero) {
        const contaARemover = this.pesquisar(numero);
        if (contaARemover) {
            const indiceARemover = this._contas.indexOf(contaARemover);
            if (indiceARemover > -1) {
                this._contas.splice(indiceARemover, 1);
            }
        }
    }
}
