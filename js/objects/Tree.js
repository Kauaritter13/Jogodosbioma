import { mapContainer, gameStatus, difficulty } from "../game.js"
import { House } from "./House.js";

export function Tree(x, y) {
  const tree = document.createElement('img')
  tree.style.top = `${y}px`;
  tree.style.left = `${x}px`;

  const randomTreeId = Math.floor(Math.random() * 6) + 1
  tree.src = `./assets/trees/tree${randomTreeId}.png`

  // arvores melhoram o meio ambiente =)
  const limpandoAr = setInterval(() => {
    if (gameStatus.meioAmbiente < 100) {
      gameStatus.meioAmbiente += .05;
    }
  }, 500)

  // clicar numa arvore vende ela
  tree.addEventListener("click", () => {
    gameStatus.dinheiro += 2000;
    if (difficulty == "sustentavel") {
      gameStatus.meioAmbiente -= 20
    } else {
      gameStatus.meioAmbiente -= 40
    }
    mapContainer.removeChild(tree);

    // e também remove o efeito de limpar o ar dela
    clearInterval(limpandoAr)

    House(x, y)
  })

  return tree
}