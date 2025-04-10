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

//VARIABLE GLOBALES
let userPlay = '';
let pcPlay = '';
// let pcPlayPicked = '';
const playOptions = ['rock', 'paper', 'scissors'];

//REGLAS
const rules = {
  rock: {
    paper: false,
    scissors: true
  }
};

//FUNCIONES
//comparacion
const compareResults = () => {
  if (userPlay === pcPlay) {
    console.log('TIE');
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
