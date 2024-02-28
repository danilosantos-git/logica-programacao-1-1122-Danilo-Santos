// Este código implementa um jogo da velha onde os jogadores podem alternar entre 'X' e 'O' para fazer suas jogadas em um tabuleiro. O código verifica se há um vencedor após cada jogada e também verifica se houve um empate. O jogo pode ser reiniciado a qualquer momento.

// Após o código, vou deixar uma breve explicação do que é cada parte do código e qual a intenção delas

// Variáveis globais
const board = document.querySelector('.board');
const startBtn = document.getElementById('start');
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];

// Adiciona evento de clique nos botões
startBtn.addEventListener('click', startGame);

// Função para iniciar o jogo
function startGame() {
    board.innerHTML = ''; // Limpa o tabuleiro antes de desenhar
    board.style.display = 'grid'; // Altera o estilo do tabuleiro para grid
    drawBoard();
    board.addEventListener('click', playerMove);
}

// Função para desenhar o tabuleiro do jogo da velha
function drawBoard() {
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('button');
        cell.classList.add('cell');
        cell.dataset.index = i;
        board.appendChild(cell);
    }
}

// Função para a jogada do jogador
function playerMove(event) {
    const cell = event.target;
    const index = cell.dataset.index;

    if (gameBoard[index] === '') {
        gameBoard[index] = currentPlayer;
        cell.textContent = currentPlayer;
        cell.classList.add('selected'); // Adiciona classe para destacar a célula selecionada

        if (checkWinner(currentPlayer)) {
            setTimeout(() => {
                alert(`Jogador ${currentPlayer} venceu!`);
                resetGame();
            }, 100);
        } else if (gameBoard.every(cell => cell !== '')) {
            setTimeout(() => {
                alert('Empate!');
                resetGame();
            }, 100);
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

// Função para verificar se há um vencedor
function checkWinner(player) {
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    return winningCombos.some(combo => {
        return combo.every(index => gameBoard[index] === player);
    });
}

// Função para reiniciar o jogo
function resetGame() {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    board.innerHTML = ''; // Limpa o tabuleiro antes de desenhar
    drawBoard();
}

// 1. Variáveis Globais:
//    -  board ,  startBtn ,  currentPlayer ,  gameBoard : Essas variáveis globais armazenam elementos do DOM, como o tabuleiro e o botão de iniciar, o jogador atual e o estado atual do tabuleiro do jogo. 
    
// 2. Evento de Clique no Botão Iniciar:
//    -  startBtn.addEventListener('click', startGame); : Adiciona um evento de clique no botão de iniciar para chamar a função  startGame  quando o botão for clicado. 
 
// 3. Função  startGame :
//    -  board.innerHTML = ''; : Limpa o tabuleiro antes de desenhar. 
//    -  board.style.display = 'grid'; : Altera o estilo do tabuleiro para grid. 
//    -  drawBoard(); : Chama a função  drawBoard  para desenhar o tabuleiro. 
//    -  board.addEventListener('click', playerMove); : Adiciona um evento de clique no tabuleiro para a jogada do jogador. 
 
// 4. Função  drawBoard :
//    - Cria e adiciona botões no tabuleiro para representar as células do jogo da velha. 
 
// 5. Função  playerMove :
//    - Lida com a jogada do jogador, atualizando o tabuleiro com a jogada do jogador atual. 
//    - Verifica se houve um vencedor ou empate após a jogada. 
//    - Alterna entre os jogadores 'X' e 'O' após cada jogada válida. 
 
// 6. Função  checkWinner :
//    - Verifica se há um vencedor com base em combinações vencedoras predefinidas (linhas, colunas e diagonais). 
 
// 7. Função  resetGame :
//    - Reinicia o jogo, limpando o tabuleiro e resetando as variáveis do jogo para um novo jogo.