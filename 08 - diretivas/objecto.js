var pedro = {
    nome : "Pedro",
    idade : 16
};

console.log(pedro);


//Factory Function
var criarPessoa = function(nome, idade){
    return {
        nome: nome,
        idade: idade
    };
};

var maria = criarPessoa("maria", 20);
console.log(maria);

console.log("----------------------------");

//Constructor Function
var Pessoa = function(nome, idade){
    this.nome = nome;
    this.idade = idade;
}

var carlos =  new Pessoa("Carlos", 25);
console.log(carlos);
