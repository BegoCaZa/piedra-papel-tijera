//FLUJO DEL PROGRAMA

// - Detectar dónde hacemos click (Si tenéis problemas al hacer click
//      -Guardar nuestra jugada
// - Generar una jugada aleatoria para el ordenador y guardarla
//      - Comparar jugadas
//      - Mostrar resultado
//      - Asignar puntos

//traer variables css
const rootStyles = document.documentElement.style;

//ATRIBUTOS DATA
const gameOptionsElement = document.getElementById('game');
// const advancedModeElement = document.getElementById('advanced-mode'); //detecta que es avanzado

//ATRIBUTOS INPUT
const resultsElement = document.getElementById('results');
const userScoreElement = document.getElementById('user-score');
const pcScoreElement = document.getElementById('pc-score');
const userResultElement = document.getElementById('result-item');
const pcResultElement = document.getElementById('pc-result-item');
const playAgainButton = document.getElementById('play-again-button');
const resultPopUpElement = document.getElementById('results');
const gameContainerElement = document.getElementById('game-container');
const resultSubtitleElement = document.getElementById('result-subtitle');

//VARIABLE GLOBALES
let userPlay = '';
let pcPlay = '';
// let pcPlayPicked = '';

const playOptions = ['rock', 'paper', 'scissors'];
let pcWins = 0;
let userWins = 0;
let tie = 0;

//REGLAS
const rules = {
  rock: {
    scissors: true,
    lizard: true,
    paper: false,
    spock: false
  },
  paper: {
    rock: true,
    spock: true,
    scissors: false,
    lizard: false
  },
  scissors: {
    paper: true,
    lizard: true,
    rock: false,
    spock: false
  },
  lizard: {
    spock: true,
    paper: true,
    rock: false,
    scissors: false
  },
  spock: {
    scissors: true,
    rock: true,
    paper: false,
    lizard: false
  }
};

//FUNCIONES
//comparacion
const showResults = () => {
  resultPopUpElement.classList.remove('hide');
};

const playAgain = () => {
  resultPopUpElement.classList.add('hide');
  gameContainerElement.classList.remove('hide');
};

const compareResults = () => {
  // let userWins=(rules.userPlay[pcPlay]=true);

  if (userPlay === pcPlay) {
    console.log('TIE');
    // tie += 1;
    // userScoreElement.textContent = tie;
    resultSubtitleElement.textContent = 'TIE';
  } else if (rules[userPlay][pcPlay]) {
    console.log('USER WINS');
    resultSubtitleElement.textContent = 'YOU WIN';
    userWins += 1;
    userScoreElement.textContent = userWins;
  } else {
    console.log('PC WINS');
    resultSubtitleElement.textContent = 'PC WINS';
    pcWins += 1;
    pcScoreElement.textContent = pcWins;
  }

  gameContainerElement.classList.add('hide');

  showResults();
};

const pcPicked = () => {
  const randomIndex = Math.floor(Math.random() * playOptions.length);
  pcPlay = playOptions[randomIndex];
  pcResultElement.className = `game-item pc-${pcPlay}-result`;
  compareResults();
  console.log(`Pc picked: ${pcPlay}`);
};

const playPick = event => {
  //lee el evento click
  userPlay = event.target.dataset.item;
  if (!userPlay) return; //evitar que si hago click en un lugar donde no me interesa, no se ejecute nada
  console.log(userPlay);
  console.log(`User picked: ${userPlay}`);
  userResultElement.className = `game-item ${userPlay}-result`;

  pcPicked();
};

//modo avanzado
let advancedMode = false;
if (document.getElementById('advanced-mode')) {
  advancedMode = true;
  playOptions.push('lizard', 'spock');
  console.log('Advanced mode activated');
  console.log(playOptions);
} else {
  console.log('Simple mode deactivated');
  console.log(playOptions);
}

gameOptionsElement.addEventListener('click', playPick);
playAgainButton.addEventListener('click', playAgain);
