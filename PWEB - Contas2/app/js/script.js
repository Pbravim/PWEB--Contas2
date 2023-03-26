const c1 = new Conta('1', 100);
const c2 = new Conta('2');
const contaController = new ContaController();
contaController.adicionarConta(c1);
contaController.adicionarConta(c2);
contaController.listar();
const contaBonificada = new ContaBonificada('10', 100);
contaBonificada.creditar(10);
console.log(contaBonificada.saldo);
const pessoa = new Pessoa("João", 30, new Date(1990, 7, 22));
console.log("Nome: " + pessoa.nome);
console.log("Idade: " + pessoa.idade);
console.log("Data: " + pessoa.dataNascimento.toLocaleDateString());
const pessoaFisica = new PessoaFisica("Maria", 25, new Date(1996, 6, 12), "123.456.789-10");
console.log("Nome: " + pessoaFisica.nome + " - Física");
console.log("Idade: " + pessoaFisica.idade);
console.log("Data: " + pessoaFisica.dataNascimento.toLocaleDateString());
console.log("CPF: " + pessoaFisica.cpf);
const pessoaJuridica = new PessoaJuridica("Empresa A", 10, new Date(2012, 9, 5), "12.345.678/0001-90");
console.log("Nome: " + pessoaJuridica.nome + " - Jurídica");
console.log("Idade: " + pessoaJuridica.idade);
console.log("Data: " + pessoaJuridica.dataNascimento.toLocaleDateString());
console.log("CNPJ: " + pessoaJuridica.cnpj);
// const repContas = new RepositorioContas();
//
// const c1 = new Conta('1', 100);
// const c2 = new Conta('2');
//
// repContas.adicionar(c1);
// repContas.adicionar(c2);
//
// repContas.getContas().forEach(conta => console.log(conta.numero))
// console.log(c1.saldo)
// console.log(c2.saldo)
//
// c1.saldo = 200;
//
// c1.debitar(50);
// c2.creditar(1000);
// console.log(c1.saldo)
// console.log(c2.saldo)
//
// c2.transferir(c1, 500);
// console.log(c1.saldo)
// console.log(c2.saldo)
