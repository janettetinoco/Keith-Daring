let introScreen = document.querySelector('.game-intro')
export const scoreCont = document.querySelector('#score')
export const startButton = document.querySelector('start-button')
let gameScreen = document.querySelector('#game')



startButton.onclick = startGame

function startGame() {
    introScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');
    
}