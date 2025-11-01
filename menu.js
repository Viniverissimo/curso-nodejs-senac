//instalado a biblio que permite entrada de dados
import PromptSync from "prompt-sync";

//aciona a função da biblio
let prompt = PromptSync();


//class é um modelo de algo(objeto)
class Pessoa {

    //atributo privado
    #senha;

    //construtor constroi mais de um objeto
    //para por os valores de cada obj, colocamos via parametro
    constructor(nome, dataNasc, senha) {
        this.nome = nome
        this.dataNasc = new Date(dataNasc).toLocaleString("pt-BR")
        this.#senha = senha
    }

    apresentar(){
        console.log(`Olá, meu nome é ${this.nome}, nasci em ${this.dataNasc}.`);
    }
};

class Aluno extends Pessoa {
    constructor(tipo, nome, idade, dataNasc, RA) {
        super(nome, idade, dataNasc);
        this.tipo = tipo;
        this.RA = RA

        
    }
    apresentar(){
        console.log(`Olá, sou um ${this.tipo}, meu nome é ${this.nome}, nasci em ${this.dataNasc} e meu RA é ${this.RA}.`);
    }
};

class Professor extends Pessoa {
    constructor(tipo, nome, idade, dataNasc, salario, registroProf) {
        super(nome, idade, dataNasc);
        this.tipo = tipo;
        this.salario = salario;
        this.registroProf = registroProf;
    }
    apresentar(){
        console.log(`Olá, sou um ${this.tipo}, meu nome é ${this.nome}, nasci em ${this.dataNasc}, meu salário é ${this.salario} e meu registro profissional é ${this.registroProf}.`);
    }
};

let opcao = prompt("Você é um (a) \n1 - Aluno \n2 - Professor \nDigite a opção: ");

let novaPessoa;

let nomePessoa = prompt("Digite o seu nome: ");
let dataNascPessoa = prompt("Digite sua data de nascimento no formato AAAA/MM/DD: ");
let senhaPessoa = prompt("Digite sua senha: ");


if (opcao == '1') {
    let tipo = "Aluno";
    let raAluno = prompt("Digite o seu RA: ");

    const novoAluno = new Aluno(
        tipo, 
        nomePessoa, 
        dataNascPessoa, 
        senhaPessoa, 
        raAluno
    );
    novaPessoa = novoAluno;
    console.log(novaPessoa.apresentar());

} else if (opcao == '2') {
    let tipo = "Professor";
    let salario = prompt("Digite o seu salário: ");
    let registroProf = prompt("Digite o seu registro profissional: ");
    const novoProfessor = new Professor(
        tipo, 
        nomePessoa,
        dataNascPessoa,
        senhaPessoa,
        salario,
        registroProf
    );
    novaPessoa = novoProfessor;
    console.log(novaPessoa.apresentar());
} else {
    console.log("Opção inválida!");
}

console.log(novaPessoa);
