import PromptSync from "prompt-sync";

let prompt = PromptSync();

class Pessoa {

    #senha;

    constructor(nome,idade,dataNasc,senha, palavraChavePessoa) {
        this.nome = nome;
        this.idade = idade;
        this.dataNasc = new Date(dataNasc).toLocaleString("pt-BR");
        this.#senha = senha;
        this.palavraChavePessoa = palavraChavePessoa;
    }
    apresentar() {
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos, nasci em ${this.dataNasc}.`);
    }

   get senha(){
        const palavraChave = prompt("Digite a palavra chave para acessar a senha: ");
        if( this.palavraChavePessoa === palavraChave){
            console.log(`Senha: ${this.#senha}`);
        } else {
            return "Palavra chave incorreta. Acesso negado.";
        }
   }
};

let nomePessoa = prompt("Digite o nome: ");
let idadePessoa = parseInt(prompt("Digite a idade: "));
let dataNascPessoa = prompt("Digite a data de nascimento (AAAA-MM-DD): ");
let senhaPessoa = prompt("Digite a senha: ");
let palavraChavePessoa = prompt("Defina uma palavra chave para proteger sua senha: ");

const novaPessoa = new Pessoa(
    nomePessoa,
    idadePessoa,
    dataNascPessoa,
    senhaPessoa,
    palavraChavePessoa
);

novaPessoa.apresentar();
novaPessoa.senha;

console.log(novaPessoa);
