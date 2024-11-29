import { difficulty, gameStatus, mapContainer } from "../game.js";

export const houseOptions = {
  count: 0,
  moneyModifier: 1,
};

export let trashModifier = 1;
export function setTrashModifier(mod) {
  trashModifier = 1 - (mod * 0.1)
}

export function House(x, y) {
  houseOptions.count++;

  let houseSize = 1;
  const house = document.createElement('img')

  const randomHouseIndex = Math.floor(Math.random() * 3) + 1
  house.src = `./assets/casas/casa_pequena${randomHouseIndex}.png`

  house.style.top = `${y}px`;
  house.style.left = `${x}px`;

  // ela cria lixo, logo, o meio-ambiente sofre =(
  setInterval(() => {
    if (difficulty == "sustentavel" || difficulty == "moderado") {
      gameStatus.meioAmbiente -= .1 * houseSize * trashModifier;
      gameStatus.dinheiro += 50 * houseOptions.moneyModifier;
    } else {
      gameStatus.meioAmbiente -= .2 * houseSize * trashModifier;
      gameStatus.dinheiro += 100 * houseOptions.moneyModifier;
    }
  }, 1000)

  // a cada 30 segundos, uma casa pode pegar fogo
  setInterval(() => {

    // uma chance pequena
    if (Math.random() < (.05 * houseSize)) {
      const wildFire = document.createElement('img')
      wildFire.src = './assets/fire.gif'
      wildFire.style.top = `${y}px`;
      wildFire.style.left = `${x}px`;

      // fogo libera CO2, faz mal pro meio ambiente
      const burning = setInterval(() => {
        gameStatus.meioAmbiente -= 3;
      }, 500)

      wildFire.addEventListener('click', (e) => {
        if (gameStatus.dinheiro > 5000) {
          gameStatus.dinheiro -= 5000
          clearInterval(burning)
          mapContainer.removeChild(wildFire)
        }
      })

      mapContainer.append(wildFire)
    }
  }, 10 * 1000)

  // a casa cresce depois de 10 segundos
  let randomness = 10;
  if (difficulty == "sustentavel") randomness += 15;
  const randomGrowTime = Math.random() * randomness;
  setTimeout(() => {
    if (Math.random() > .8 && houseSize < 2) {
      house.src = `./assets/casas/casa_grande${randomHouseIndex}.png`
      houseSize++;
    }
  }, (40 + randomGrowTime) * 1000)

  mapContainer.append(house)
  return house
}