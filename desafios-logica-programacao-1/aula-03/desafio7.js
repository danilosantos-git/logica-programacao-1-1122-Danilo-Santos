// Desafio 07
// Crie um mapa chamado frutas onde as chaves são nomes de frutas e os valores 
// são seus preços. 
// Verifique se a maçã é mais cara que a banana
// Verifique se a pêra não custa o mesmo que a uva.

// Map frutas e preços
const frutas = {
    'maçã': 3,
    'banana': 2.5,
    'pêra': 3.5,
    'uva': 2.75
};

// Imprimindo os valores do mapa frutas
console.log('Tabela de preços:');
for (let fruta in frutas) {
    console.log(`${fruta}: R$ ${frutas[fruta]}`);
}

// Verificando se a maçã é mais cara que a banana
if (frutas['maçã'] > frutas['banana']) {
    console.log('A maçã é mais cara que a banana.');
} else {
    console.log('A maçã não é mais cara que a banana.');
}

// Verificando se a pêra não custa o mesmo que a uva
if (frutas['pêra'] !== frutas['uva']) {
    console.log('A pêra não custa o mesmo que a uva.');
} else {
    console.log('A pêra custa o mesmo que a uva.');
}