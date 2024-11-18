// Configurações iniciais
let money = 1000;
let population = 100;
let happiness = 80;
let environment = 80;
let gameTime = 0;

// DOM
const playerNameElem = document.getElementById('playerName');
const difficultyElem = document.getElementById('difficultyLevel');
const moneyElem = document.getElementById('money');
const populationElem = document.getElementById('population');
const happinessElem = document.getElementById('happiness');
const environmentElem = document.getElementById('environment');
const gameTimeElem = document.getElementById('gameTime');
const cityMap = document.getElementById('cityMap');

// Dados do jogador
const playerName = localStorage.getItem('playerName');
const difficulty = localStorage.getItem('difficulty');

// Ajusta os valores iniciais
if (difficulty === 'hippie') {
    money = 500;
    happiness += 10;
    environment += 20;
} else if (difficulty === 'visionary') {
    money = 1500;
    happiness -= 10;
    environment -= 10;
}

playerNameElem.textContent = playerName;
difficultyElem.textContent = difficulty;

// Atualiza os recursos na tela
function updateStats() {
    moneyElem.textContent = money;
    populationElem.textContent = population;
    happinessElem.textContent = happiness;
    environmentElem.textContent = environment;
    gameTimeElem.textContent = `${gameTime} dias`;
}

// Adiciona elementos visuais na cidade
function addCityElement(type, x, y) {
    const element = document.createElement('img');
    element.src = `assets/${type}.png`;
    element.className = 'city-element';
    element.style.left = `${x}px`;
    element.style.top = `${y}px`;
    cityMap.appendChild(element);
}

// Funções de ações
function investEducation() {
    if (money >= 800) {
        money -= 800;
        happiness += 10;
        environment += 5;
        addCityElement('school', Math.random() * 300, Math.random() * 300);
        updateStats();
    } else {
        alert('Dinheiro insuficiente!');
    }
}

function investInfrastructure() {
    if (money >= 1200) {
        money -= 1200;
        population += 20;
        happiness += 5;
        environment -= 10;
        addCityElement('building', Math.random() * 300, Math.random() * 300);
        updateStats();
    } else {
        alert('Dinheiro insuficiente!');
    }
}

// Ligações aos botões
document.getElementById('investEducation').addEventListener('click', investEducation);
document.getElementById('investInfrastructure').addEventListener('click', investInfrastructure);

// Renda e tempo
setInterval(() => {
    gameTime++;
    money += population * 5; // Renda proporcional à população
    updateStats();

    if (Math.random() > 0.5) {
        addCityElement('tree', Math.random() * 300, Math.random() * 300);
    }
}, 5000); // Atualiza a cada 5 segundos

// Inicializa os valores
updateStats();
    