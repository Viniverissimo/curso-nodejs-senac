let pessoa = {
    nome: "Vinicius",
    dataNasc: new Date(1997,10,12).toLocaleString("pt-BR"),
    altura: 1.75,
    peso: 105,
    senha:"123a",
    idade: 28,
    maiorDeIdade: function() {
        return this.idade >= 18;
    },
    apresentar: function() {
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos, minha altura é ${this.altura}m e meu peso é ${this.peso}kg.`;
    }
};

console.log(pessoa.apresentar());
