// Desafio 02
// Crie uma agenda de contatos que armazene vários contatos em um array, 
// modelando o "contato" como um objeto: (Nome, telefone, email) (Não utilizar 
// Map)

// Definindo a estrutura de um contato
function Contato(nome, telefone, email) {
    this.nome = nome;
    this.telefone = telefone;
    this.email = email;
}

// Criando a agenda de contatos
const agendaDeContatos = [];

// Adicionando contatos à agenda
const contato1 = new Contato("Danilo Santos", "81982077816", "danilosantosgit@gmail.com");
const contato2 = new Contato("Fátima Santos", "81984328597", "fatimasantosdoces@gmail.com");

// Adicionando os contatos ao array agendaDeContatos
agendaDeContatos.push(contato1);
agendaDeContatos.push(contato2);

// Exibindo a agenda de contatos
console.log("Agenda de Contatos:");
agendaDeContatos.forEach((contato, index) => {
    console.log(`Contato ${index + 1}:`);
    console.log(`Nome: ${contato.nome}`);
    console.log(`Telefone: ${contato.telefone}`);
    console.log(`Email: ${contato.email}`);
    console.log("--------------------");
});