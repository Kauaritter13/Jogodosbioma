// Captura o formulário de login
const form = document.getElementById('loginForm');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Obtém o nome do jogador e a dificuldade escolhida
    const playerName = document.getElementById('playerName').value.trim();
    const difficulty = getSelectedDifficulty();

    console.log(difficulty)

    // Valida o nome do jogador
    if (playerName == null || difficulty == null) {
        alert('Por favor, escolha seu nome e a dificuldade!');
        return;
    }

    // Salva as informações do jogador no localStorage
    localStorage.setItem('playerName', playerName);
    localStorage.setItem('difficulty', difficulty.id);

    // Redireciona para a página principal do jogo
    window.location.href = 'game.html';
});

function getSelectedDifficulty() {
    const difficulties = document.getElementsByClassName('difficulty-class');
    const difficultyArray = [...difficulties];
    return difficultyArray.find((el) => el.checked)
}