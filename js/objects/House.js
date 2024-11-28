export function House(x, y) {
  const house = document.createElement('img')
  house.src = './assets/casa_pequena.png'
  setInterval(() => {
    house.src = './assets/casa_grande.png'
  }, 10 * 1000)
}