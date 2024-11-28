import { mapContainer, gameStatus } from "../game.js"

export function Tree(x, y) {
  const tree = document.createElement('img')

  const randomId = Math.floor(Math.random() * 6) + 1
  tree.src = `./assets/trees/tree${randomId}.png`

  // arvores melhoram o meio ambiente =)
  const limpandoAr = setInterval(() => {
    gameStatus.meioAmbiente += 1;
  }, 3000)

  // clicar numa arvore vende ela
  tree.addEventListener("click", () => {
    gameStatus.dinheiro += 300;
    gameStatus.meioAmbiente -= 40
    mapContainer.removeChild(tree);

    // e também remove o efeito de limpar o ar dela
    clearInterval(limpandoAr)
  })

  tree.style.top = `${y}px`;
  tree.style.left = `${x}px`;


  return tree
}