import Level from './level';
import Player from './player'
import Dog from './dogs';

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
        this.obstacle.animate(this.ctx)
        //

        if (this.running) {
            this.checkCollison();
            requestAnimationFrame(this.animate.bind(this));
        }
    }

    restart(){
        this.running = false;
        this.player = new Player(this.dimensions);
        this.level = new Level(this.dimensions);
        //testing
        this.obstacle = new Dog(this.dimensions)
        //

        this.animate();
    }

    play(){
        this.running =  true;
        this.animate();
    }

    spaceDown(){
        if(!this.running){
            debugger
            this.play();
        }
        this.player.speedUp();
    }

    checkCollison(){
        if (this.player.bounds().right > this.obstacle.x && this.player.bounds().bottom > this.obstacle.y && this.player.bounds().left < this.obstacle.x+30){
            alert("youre hit")
        }
    }

    eventsHandler(){
        this.spaceBarHandler = this.spaceDown.bind(this);
        window.addEventListener("keydown", (e) => {
            if (e.code === 'Space'){
                this.spaceBarHandler();
            }
        })
    }
}