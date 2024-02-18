// Desafio 03
// Criar um dicionário de sinônimos usando Array e Objs
// Exemplo: dicionarioDeSinonimos.feliz, deve retornar ["alegre", "contente", 
// "satisfeito"]
// dicionarioDeSinonimos.triste, retorna ["melancólico", "abatido", "deprimido"],
// dicionarioDeSinonimos.bom, retorna ["ótimo", "excelente", "maravilhoso"],

// Dicionário base
const dicionarioDeSinonimos = {
    feliz: ["alegre", "contente", "satisfeito"],
    triste: ["melancólico", "abatido", "deprimido"],
    bom: ["ótimo", "excelente", "maravilhoso"]
};

// Exibe o valor correspondente a palavra base e seus sinônimos
console.log("Dicionário de Sinônimos")
for (let palavra in dicionarioDeSinonimos) {
    console.log(`${palavra}: ${dicionarioDeSinonimos[palavra]}`);
}