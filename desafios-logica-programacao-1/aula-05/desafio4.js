// Desafio 4
// - Adivinhe o Número
// ● Crie um programa que gere um número aleatório entre 1 e 100. Em 
// seguida, peça ao usuário para adivinhar o número. Use um loop 
// while para continuar pedindo ao usuário que adivinhe até que ele 
// acerte o número. Forneça dicas informando se o número é maior ou 
// menor.

// Gera um número aleatório entre 1 e 100
// Math.random retorna números decimais "aleatórios" entre 0 e 1, por isso multiplico por 100
// dessa meneira consigo valores que chegam até 100, mas para garantir, utilizo Math.floor de 
// forma a garantir que o resultado da multiplicação seja um número inteiro
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

// Inicializo a variável referente as tentativas do usuário e defino o valor base da variável
// que irá fazer o loop while funcionar
let tentativas = 0;
let acertou = false;

// Inicia um loop while que será executando até que o usuário acerte o número
while (!acertou) {
    // Solicita o palpite do usuário
    const palpite = parseInt(prompt("Adivinhe o número entre 1 e 100:"));

    // Verifica se o palpite do usuário é igual ao número aleatório gerado
    if (palpite === numeroAleatorio) {
        acertou = true; // Altera a variável acertou para true para sair do loop (não se faz necessário o uso de 'break')
        tentativas++; // Incrementa o número de tentativas
        console.log(`Parabéns! O número era ${numeroAleatorio} e você acertou em ${tentativas} tentativa(s).`);
    } else if (palpite < numeroAleatorio) {
        tentativas++;
        console.log("Tente um número maior."); // Informa ao usuário para tentar um número maior
    } else {
        tentativas++;
        console.log("Tente um número menor."); // Informa ao usuário para tentar um número menor
    }
}