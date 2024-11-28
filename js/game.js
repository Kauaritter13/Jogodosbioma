import { Tree } from './objects/Tree.js'

// só informações básicas pra aparecer enciminha
const username = window.localStorage.getItem('playerName');
const difficulty = window.localStorage.getItem('difficulty');
if (!username) window.location = 'login';
document.getElementById('playerName').innerText = username;
document.getElementById('difficulty').innerText = difficulty;

export const gameStatus = {
  dinheiro: 4000,
  meioAmbiente: 80, // 80%
}

export const mapContainer = document.getElementById('cityMap');
export const statusBar = document.getElementById("gameStatus");
// mapa inicial:
const GameMap = [
  Tree(20, 60), Tree(110, 40), Tree(200, 60)
]
for (const el of GameMap) {
  mapContainer.append(el)
}


// game loop / atualiza as informações em tempo real.
function step() {
  statusBar.innerHTML = `
Dinheiro: <b>R$ ${gameStatus.dinheiro}.00</b>
Meio-Ambiente: <b>${gameStatus.meioAmbiente}%</b>
`;

  if (gameStatus.meioAmbiente < 1) {
    alert("Você perdeu o jogo!")
    window.location.href = "/"
  }

}
setInterval(step, 500);