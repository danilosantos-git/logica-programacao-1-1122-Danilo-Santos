// Desafio 8
// - Conversão de Notas em Conceitos
// ● Faça um programa que peça ao usuário para digitar uma letra e 
// verifique se é uma vogal ou uma consoante utilizando o comando 
// switch case. Se o usuário digitar uma vogal (a, e, i, o, u), o 
// programa deve exibir a mensagem "É uma vogal". Se o usuário 
// digitar uma consoante, o programa deve exibir a mensagem "É uma 
// consoante".

// Recebe a letra como entrada
// Garantir que apenas uma letra seja digitada (números também são)
let letra;

do {
    letra = prompt("Digite uma letra:").toLowerCase();
} while (letra.length !== 1 || !isNaN(letra));

// Verifica se a letra é uma vogal ou consoante usando switch case
switch (letra) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log(`"${letra.toUpperCase()}" é uma vogal`);
        break;
    default:
        console.log(`"${letra.toUpperCase()}" é uma consoante`);
}