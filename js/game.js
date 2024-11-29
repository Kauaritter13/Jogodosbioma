import { Tree } from './objects/Tree.js'
import './objectives.js'
import { House } from './objects/House.js';

// só informações básicas pra aparecer enciminha
export const username = window.localStorage.getItem('playerName');
export const difficulty = window.localStorage.getItem('difficulty');
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
  // três arvores de cima
  Tree(20, 60), Tree(110, 40), Tree(200, 60), Tree(310, 50),
  House(40, 180), House(140, 190), House(250, 185),
  // grupinho compacto no meio do mapa
  Tree(400, 400), Tree(500, 420), Tree(640, 260), Tree(640, 400),
  House(520, 260),

  // de baixo
  Tree(80, 400), House(200, 420)
]
for (const el of GameMap) {
  mapContainer.append(el)
}


function getMeioAmbiente() {
  // hack vindo direito das profundezas do mdn docs
  const formater = new Intl.NumberFormat('en-EN', { minimumFractionDigits: 1, maximumFractionDigits: 1 })
  return formater.format(gameStatus.meioAmbiente)
}

// game loop / atualiza as informações em tempo real.
function step() {
  statusBar.innerHTML = `
    Dinheiro: <b>R$ ${gameStatus.dinheiro}.00</b> <br>
    Meio-Ambiente: <b>${getMeioAmbiente()}%</b>
  `;

  if (gameStatus.meioAmbiente < 1) {
    alert("Você perdeu o jogo!")
    window.location.href = "/"
  }
}
setInterval(step, 500);