import KeithGame from './game';

const canvas = document.getElementById('game-board');
let keithGame = new KeithGame(canvas);

let introScreen = document.querySelector('.game-intro')
export const scoreCont = document.querySelector('#score')
export const startButton = document.querySelector('#start-button')
export const gameScreen = document.querySelector('#game-canvas')



startButton.onclick = startGame

function startGame() {
    debugger
    introScreen.classList.add("hidden");
    gameScreen.classList.remove("hidden");

    keithGame.play();
}