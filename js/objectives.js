import { gameStatus } from "./game.js"
import { setTrashModifier } from "./objects/House.js";

const States = [
  "Péssimo", "Ruim", "Aceitavel", "Bom", "Ótimo"
]

let saudeState = 0;
document.getElementById("saude").addEventListener("click", (e) => {
  if (gameStatus.dinheiro > 4000 && saudeState < 4) {
    gameStatus.dinheiro -= 4000;
    saudeState++;
    document.getElementById("saudeSpan").innerText = States[saudeState];
    if (saudeState == 4) document.getElementById("saude").disabled = true;
    verifyWin()
  }
})

let educacaoState = 0;
document.getElementById("educacao").addEventListener("click", (e) => {
  if (gameStatus.dinheiro > 6000 && educacaoState < 4) {
    gameStatus.dinheiro -= 6000;
    educacaoState++;
    document.getElementById("educacaoSpan").innerText = States[educacaoState];
    if (educacaoState == 4) document.getElementById("educacao").disabled = true;
    verifyWin()
  }
})

let esgotoState = 0;
document.getElementById("esgoto").addEventListener("click", (e) => {
  if (gameStatus.dinheiro > 2500 && esgotoState < 4) {
    gameStatus.dinheiro -= 2500;
    esgotoState++;
    document.getElementById("esgotoSpan").innerText = States[esgotoState];
    setTrashModifier(esgotoState);
    if (esgotoState >= 4) document.getElementById("esgoto").disabled = true;
    verifyWin()
  }
})

function verifyWin() {
  if (saudeState == 4 && educacaoState == 4 && esgotoState == 4) {
    alert("Você ganhou o jogo! Espere para mais atualizações");
  }
}