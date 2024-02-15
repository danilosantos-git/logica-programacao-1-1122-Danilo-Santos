// Desafio 06 
// Dado um array nomes, remova todos os nomes que contenham menos de 5 letras.
// const nomes = ["Alice", "Bob", "Eva", "John", "Daniel", "Isabel"];

// Array pré-definido
const nomes = ["Alice", "Bob", "Eva", "John", "Daniel", "Isabel"];

// Função para filtrar os nomes com menos de 5 letras
function filtrarNomes(array) {
    return array.filter(nome => nome.length >= 5);
}

// Criar um novo array contendo apenas os nomes com mais de 5 letras
const nomesMaisDe5Letras = filtrarNomes(nomes);

// Exibir o array original e retorna o resultado
console.log("Array original: ", nomes);
console.log("Nomes com mais de 5 letras: ", nomesMaisDe5Letras);