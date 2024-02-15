// Desafio 04
// Crie um vetor (array) chamado vetor1 com valores de coordenadas x e outro 
// vetor vetor2 com valores de coordenadas y. Calcule o produto escalar (produto 
// interno) desses dois vetores usando a fórmula matemática do produto escalar.

// Definindo os vetores de coordenadas x e y
let vetor1 = [2, 4, 6]; // Vetor de coordenadas x
let vetor2 = [1, 3, 5]; // Vetor de coordenadas y

// Função para calcular o produto escalar
function calcularProdutoEscalar(vetor1, vetor2) {
    if (vetor1.length !== vetor2.length) {
        return "Os vetores precisam ter o mesmo tamanho";
    }

    let produtoEscalar = 0;
    for (let i = 0; i < vetor1.length; i++) {
        produtoEscalar += vetor1[i] * vetor2[i];
    }

    return produtoEscalar;
}

// Calculando o produto escalar dos vetores vetor1 e vetor2
let produtoEscalar = calcularProdutoEscalar(vetor1, vetor2);

// Exibindo os vetores
console.log("Vetor 1: [" + vetor1.join(", ") + "]");
console.log("Vetor 2: [" + vetor2.join(", ") + "]");

// Retorna o resultado
console.log("O produto escalar dos vetores é: " + produtoEscalar);