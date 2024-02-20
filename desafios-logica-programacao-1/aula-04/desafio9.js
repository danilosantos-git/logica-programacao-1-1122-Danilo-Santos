// Desafio 9
// - Determinação de Estação do Ano
// ● Escreva um programa que recebe o nome de um mês como entrada e 
// utiliza um switch case para determinar a estação do ano 
// correspondente. Use a seguinte correspondência de meses:
// - Dezembro, Janeiro, Fevereiro: "Inverno" Março, Abril, Maio: 
// "Primavera" Junho, Julho, Agosto: "Verão" Setembro, Outubro, 
// Novembro: "Outono"

// Recebe o nome do mês como entrada
let mes = prompt("Digite o nome de um mês:").toLowerCase();

// Determina a estação do ano usando switch case
switch (mes) {
    case 'dezembro':
    case 'janeiro':
    case 'fevereiro':
        console.log("Inverno");
        break;
    case 'março':
    case 'abril':
    case 'maio':
        console.log("Primavera");
        break;
    case 'junho':
    case 'julho':
    case 'agosto':
        console.log("Verão");
        break;
    case 'setembro':
    case 'outubro':
    case 'novembro':
        console.log("Outono");
        break;
    default:
        console.log("Mês inválido");
}