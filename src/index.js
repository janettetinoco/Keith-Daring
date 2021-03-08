import KeithGame from './game';

const canvas = document.getElementById('game-board');
let keithGame = new KeithGame(canvas);

let introScreen = document.querySelector('.game-intro')
export const scoreCont = document.querySelector('#score')
export const finalScore = document.querySelector('#final-score')
export const startButton = document.querySelector('#start-button')
export const gameScreen = document.querySelector('#game-canvas')
export const gameOver = document.querySelector('#game-over')
export const restartButton = document.querySelector('#game-over')
export const finalContainer = document.querySelector('#final-container')



startButton.onclick = startGame;
restartButton.onclick = restartGame;

function startGame() {
    introScreen.classList.add("hidden");
    gameScreen.classList.remove("hidden");

    keithGame.play();
}

function restartGame(){
    gameOver.classList.add('hidden');
    let newGame =new KeithGame(canvas);
    newGame.play();
}