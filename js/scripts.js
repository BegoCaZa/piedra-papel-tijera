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

//ATRIBUTOS INPUT
const resultsElement = document.getElementById('results');
const userScoreElement = document.getElementById('user-score');
const pcScoreElement = document.getElementById('pc-score');


//VARIABLE GLOBALES
let userPlay = '';
let pcPlay = '';
// let pcPlayPicked = '';
const playOptions = ['rock', 'paper', 'scissors'];
let pcWins=0;
  let userWins=0;
  let tie=0;

//REGLAS
const rules = {
  rock: {
    paper: false,
    scissors: true
  },
  paper: {
    scissors: false,
    rock: true
  },
  scissors: {
    rock: false,
    paper: true
  }
};

//FUNCIONES
//comparacion
const compareResults = () => {
  // let userWins=(rules.userPlay[pcPlay]=true);
  
 
  if (userPlay === pcPlay) {
    console.log('TIE');
    tie +=1;
    userScoreElement.textContent = tie;
  }else if (rules[userPlay][pcPlay]) { 
    console.log('USER WINS');
    userWins +=1;
    userScoreElement.textContent= userWins;
  } else {
    console.log('PC WINS');
    pcWins +=1;
    pcScoreElement.textContent= pcWins;
  }
};

const pcPicked = () => {
  const randomIndex = Math.floor(Math.random() * playOptions.length);
  pcPlay = playOptions[randomIndex];
  compareResults();
  console.log(`Pc picked: ${pcPlay}`);
};

const playPick = event => {
  userPlay = event.target.dataset.item;
  console.log(`User picked: ${userPlay}`);
  pcPicked();
};

gameOptionsElement.addEventListener('click', playPick);
