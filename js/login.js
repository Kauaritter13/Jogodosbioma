// Captura o formulário de login
const form = document.getElementById('loginForm');
console.log(form)

form.addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio do formulário padrão

    // Obtém o nome do jogador e a dificuldade escolhida
    const playerName = document.getElementById('playerName').value.trim();

    const difficulty = document.querySelector('input[name="difficulty"]:checked')

    // Valida o nome do jogador
    if (!playerName) {
        alert('Por favor, insira um nome válido!');
        return;
    }

    // Salva as informações do jogador no localStorage
    localStorage.setItem('playerName', playerName);
    localStorage.setItem('difficulty', difficulty);

    // Redireciona para a página principal do jogo
    window.location.href = 'game.html';
});
