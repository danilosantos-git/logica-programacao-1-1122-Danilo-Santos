// Desafio 8
// Crie um programa que pede ao usuário para inserir uma palavra e
// conta quantas vogais (a, e, i, o, u) ela contém. Utilize um loop for
// e estruturas condicionais if para realizar a contagem.
// (Não precisa considerar acentos. Ex.: aviao)

// Obs: Este programa possui uma limitação na hora de verificar vogais que possuem acentos
// desconsiderando-as na hora em que retorna o resultado

// Função que irá veerificar as vogais
function contarVogais(palavra) {
    // Inicializo as vogais (sem acento)
    let vogais = ['a', 'e', 'i', 'o', 'u'];

    // Inicializo o contador que retornará a quantidade de vogais encontradas
    let contador = 0;

    // Loop que percorre a palavra em busca dos 'matchs'
    for (let i = 0; i < palavra.length; i++) {
        // Passa as palavras para minúsculo, padronizando a verificação
        let letra = palavra[i].toLowerCase();
        // Incrementa ao contador de vogais em caso de 'match'
        if (vogais.includes(letra)) {
            contador++;
        }
    }

    // Ao final do loop retorna o valor atualizado
    return contador;
}

// Recebe a palavra referência do usuário
const palavraEntrada = prompt("Digite uma palavra: ");

// Estabelece o valor da variável de acordo com o resultado da verificação
const quantidadeVogais = contarVogais(palavraEntrada);

// Retorna o resultado para o usuário
console.log(`A palavra "${palavraEntrada}" possui ${quantidadeVogais} vogais.`);