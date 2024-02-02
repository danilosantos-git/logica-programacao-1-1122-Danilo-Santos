// Desafio 03 - Verificar Compatibilidade de Plataformas
// Receba através do prompt dois argumentos:
// ● navegador
// ● sistemaOperacional
// Deve retornar true se o navegador for "Chrome" ou "Firefox" e o sistema
// operacional for "Windows" ou "Mac".

// Entrada dos dados
let navegador = prompt("Digite o nome do navegador:");
let sistemaOperacional = prompt("Digite o nome do sistema operacional:");

// Converter os valores para letras minúsculas
navegador = navegador.toLowerCase();
sistemaOperacional = sistemaOperacional.toLowerCase();

// Verifica o navegador e o OS
let compativel = (navegador === "Chrome" || navegador === "Firefox") && (sistemaOperacional === "Windows" || sistemaOperacional === "Mac");

// Retorna o resultado
if (compativel) {
    alert("Navegador e OS compatíveis!");
} else {
    alert("Navegador e OS não correspondentes!");
}