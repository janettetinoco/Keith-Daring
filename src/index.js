import KeithGame from './game';




let introScreen = document.querySelector('.game-intro')
export const scoreCont = document.querySelector('#score')
export const scoreDiv = document.querySelector('#score-card')
export const finalScore = document.querySelector('#final-score')
export const startButton = document.querySelector('#start-button')
export const gameScreen = document.querySelector('#game-canvas')
export const gameOver = document.querySelector('#game-over')
export const restartButton = document.querySelector('#game-over')
export const finalContainer = document.querySelector('#final-container')
export const playAgainButton = document.querySelector('#play-again-button')
export const audio = document.getElementById("audio");
export const soundOn = document.getElementById("sound-icon");

const canvas = document.getElementById('game-board');
let keithGame = new KeithGame(canvas);
let playing=false;


startButton.onclick = startGame;
restartButton.onclick = restartGame;
playAgainButton.onclick = restartGame;
soundOn.onclick = playMusic;

function startGame() {
    introScreen.classList.add("hidden");
    gameScreen.classList.remove("hidden");

    keithGame.play();
}

function restartGame(){
    gameOver.classList.add('hidden');
    finalContainer.classList.add('hidden');
    scoreDiv.classList.remove('hidden');
    let newGame =new KeithGame(canvas);
    newGame.play();
}

function playMusic(){
    if(playing === false){
        playing = true;
        audio.volume= 0.1;
        setTimeout(() => audio.play(), 500);
        soundOn.innerHTML = '<img src="https://img.icons8.com/ios-filled/50/4a90e2/room-sound.png" />';
    }else{
        playing = false;
        setTimeout(() => audio.pause(), 500);
        soundOn.innerHTML = '<img src="https://img.icons8.com/ios-filled/50/4a90e2/mute--v1.png"/>';
    }
    
}