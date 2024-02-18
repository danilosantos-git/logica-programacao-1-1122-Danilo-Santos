// Desafio 05
// Crie um objeto chamado pessoa com as propriedades nome, idade, e cidade. 
// Verifique se a pessoa tem 18 anos ou mais (Exibir apenas true ou false)
// Verifique se a pessoa não é de uma cidade chamada "São Paulo" (True ou False)

// Objeto criado
const pessoa = {
    nome: "João",
    idade: 25,
    cidade: "Rio de Janeiro"
};

// Verificando se a pessoa tem 18 anos ou mais
const maiorDeIdade = pessoa.idade >= 18;
console.log(`Maior de 18 anos: ${maiorDeIdade}`);

// Verificando se a pessoa não é de São Paulo
const naoSaoPaulo = pessoa.cidade !== "São Paulo";
console.log(`Não é de São Paulo: ${naoSaoPaulo}`);