// Desafio 01
// Crie um mapa para representar uma lista de compras
// const listaDeCompras = new Map()
// 1. Adicione itens à lista de compras com a quantidade desejada
// Maçã - 5
// Banana - 3
// Leite - 4
// Pão - 10
// 2. Verifique se um item específico está na lista de compras
// 3. Verifique a quantidade de um item específico da lista
// 4. Modifique a quantidade de um item específico da lista
// 5. Remova um item específico da lista

// Cria um mapa para representar a lista de compras
const listaDeCompras = new Map();

// Adiciona itens à lista de compras com a quantidade desejada
listaDeCompras.set("Maçã", 5);
listaDeCompras.set("Banana", 3);
listaDeCompras.set("Leite", 4);
listaDeCompras.set("Pão", 10);

// Exibir a lista de compras original
console.log("Lista de compras original:");
console.log(listaDeCompras);

// Verificar se um item específico está na lista de compras
const itemEspecifico = "Banana";
if (listaDeCompras.has(itemEspecifico)) {
    console.log(`${itemEspecifico} está na lista de compras.`);
} else {
    console.log(`${itemEspecifico} não está na lista de compras.`);
}

// Verificar a quantidade de um item específico da lista
const itemQuantidade = "Maçã";
if (listaDeCompras.has(itemQuantidade)) {
    console.log(`A quantidade de ${itemQuantidade} na lista de compras é ${listaDeCompras.get(itemQuantidade)}.`);
} else {
    console.log(`${itemQuantidade} não está na lista de compras.`);
}

// Modificar a quantidade de um item específico da lista
const itemModificar = "Pão";
const novaQuantidade = 15;
if (listaDeCompras.has(itemModificar)) {
    listaDeCompras.set(itemModificar, novaQuantidade);
    console.log(`A quantidade de ${itemModificar} foi modificada para ${novaQuantidade}.`);
} else {
    console.log(`${itemModificar} não está na lista de compras.`);
}

// Remover um item específico da lista
const itemRemover = "Leite";
if (listaDeCompras.has(itemRemover)) {
    listaDeCompras.delete(itemRemover);
    console.log(`${itemRemover} foi removido da lista de compras.`);
} else {
    console.log(`${itemRemover} não está na lista de compras.`);
}

// Exibe a lista de compras atualizada
console.log("Lista de compras atualizada:");
console.log(listaDeCompras);