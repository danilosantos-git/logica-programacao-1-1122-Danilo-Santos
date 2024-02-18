// Desafio 04
// Criar um dicionário de sinônimos usando Map 
// Exemplo: dicionarioDeSinonimos.get(Feliz) , deve retornar ["alegre", 
// "contente", "satisfeito"]
// dicionarioDeSinonimos.get(triste), retorna ["melancólico", "abatido", 
// "deprimido"],
// dicionarioDeSinonimos.get(bom), retorna ["ótimo", "excelente", "maravilhoso"],

// Dicionário base com o uso de Map
const dicionarioDeSinonimos = new Map([
    ['Feliz', ['alegre', 'contente', 'satisfeito']],
    ['Triste', ['melancólico', 'abatido', 'deprimido']],
    ['Bom', ['ótimo', 'excelente', 'maravilhoso']]
]);

// Exibindo as palavras e seus sinônimos
console.log("Dicionário de Sinônimos")
for (let [palavra, sinonimos] of dicionarioDeSinonimos) {
    console.log(`${palavra}: ${sinonimos.join(', ')}`);
}