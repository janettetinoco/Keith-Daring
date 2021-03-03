import Level from './level';
import Player from './player'
import Dog from './dogs';
import Heart from './hearts';

export default class KeithGame{

    constructor(canvas){
        this.ctx = canvas.getContext("2d");
        this.dimensions = { width: canvas.width, height: canvas.height };
        this.eventsHandler();
        this.restart();
    }

    animate(){
        this.level.animate(this.ctx);
        this.player.animate(this.ctx);
        //test
        // this.obstacle.animate(this.ctx);
        // this.heart.animate(this.ctx);
        //

        if (this.gameStarted) {//this needs to happen as you refresh the page
            this.checkCollison();
            requestAnimationFrame(this.animate.bind(this));
        }
    }

    restart(){
        this.running = false;
        this.gameStarted=true;//when game is over change to false
        this.player = new Player(this.dimensions);
        this.level = new Level(this.dimensions);
        //testing
        this.obstacle = new Dog(this.dimensions)
        this.heart = new Heart(this.dimensions);
        //

        this.animate();
    }

    play(){
        this.running =  true;
        this.animate();
    }

    spaceDown(){
        if(!this.running){
            this.play();
        }
        console.log("hi")
        this.player.speedUp();
    }

    arrowUpJump(){
        if (!this.running) {
            this.play();
        }
        this.player.jump();
    }

    checkCollison(){
        if (this.player.bounds().right > this.obstacle.x && this.player.bounds().bottom > this.obstacle.y && this.player.bounds().left < this.obstacle.x+30){
            alert("youre hit")
        }
    }

    eventsHandler(){
        this.spaceBarHandler = this.spaceDown.bind(this);
        this.arrowUpHAndler = this.arrowUpJump.bind(this);
        window.addEventListener("keydown", (e) => {
            if (e.code === 'Space'){
                this.spaceBarHandler();
            }else if(e.code === 'ArrowUp'){
                this.arrowUpHAndler();
            }
        })
        window.addEventListener("keyup", (e) => {
            this.player.velocity = .5;
        })


    }
}