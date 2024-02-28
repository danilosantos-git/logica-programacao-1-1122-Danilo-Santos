// Desafio 2
// Crie um objeto representando uma pessoa com nome, idade e cidade.
// Utilize um loop for-in para imprimir no console todas as
// propriedades e os valores do objeto

// Objeto pessoa com nome, idade e cidade
const pessoa = {
    nome: 'Danilo',
    idade: 25,
    cidade: 'Recife'
};

// Utilização do loop for-in para percorrer as propriedades do objeto
for (let propriedade in pessoa) {
    // Imprime a propriedade e seu valor no console
    console.log(`${propriedade}: ${pessoa[propriedade]}`);
}