// Desafio 9
// Criar um algoritmo de ordenação de arrays;
// novoArray = [1, 7, 2, 8, 3, 4, 5, 0, 9]
// 09.01 - Método que faz isso (Achar o método que ordena os arrays)

// Função/algoritmo para ordenar os valores dentro da array
function ordenarArray(array) {
    // Inicia-se no segundo elemento do array, pois nessa função o elemento vai ser
    // comparado com o elemento anterior a ele, por isso o primeiro elemento (índice 0)
    // é considerado como se estivesse já "ordenado" inicialmente, só que mais a frente
    // do código ele será analisado também
    for (let i = 1; i < array.length; i++) {
        // Recebe o valor do elemento que será comparado
        let elementoAtual = array[i];
        // "j" recebe o valor do elemento anterior ao que está sendo tomado como referência
        let j = i - 1;
        // Nesse loop vai ser verificado se "j" está contido no array e se o valor deste elemento
        // é maior do que o "elementoAtual", se for o caso, ele será reposicionado
        while (j >= 0 && array[j] > elementoAtual) {
            // Enquanto for verdadeira a condição, o "j" será reposicionado para uma posição após,
            // até que ele esteja em uma posição onde os valores na frente dele sejam menores e os
            // posteriores sejam maiores
            array[j + 1] = array[j];
            // Decrementa o valor de "j" para continuar a verificação
            j--;
        }
        // Após a verificação, o elemento atual será inserido na posição correta
        array[j + 1] = elementoAtual;
    }
    // Retorna o array ordenado
    return array;
}

// Array que será utilizado como base para a testagem do algoritmo
let arrayBase = [1, 7, 2, 8, 3, 4, 5, 0, 9];
// Usamos slice() para criar uma cópia do array original e modificá-lo
let arrayOrdenado = ordenarArray(arrayBase.slice());

// Retorna o array base e o array devidamente ordenado
console.log("Array original:", arrayBase);
console.log("Array ordenado:", arrayOrdenado);