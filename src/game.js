import Level from './level';
import Player from './player'
import {Dog, Flyer, People} from './dogs';
import Heart from './hearts';


export default class KeithGame{

    constructor(canvas){
        this.ctx = canvas.getContext("2d");
        this.dimensions = { width: canvas.width, height: canvas.height };
        this.threats = [];
        this.obstacle = [];
        this.frame = 0;
        this.eventsHandler();
        this.restart();
    }

    animate(){
        this.level.animate(this.ctx);
        this.player.animate(this.ctx);
        this.frame ++
        //test
        this.animateObstacles()
        // this.heart.animate(this.ctx);
        //
        let that = this.obstacle
        if (this.gameStarted) {//this needs to happen as you refresh the page
            if (this.frame % 350 === 0) that.push(new Dog(this.dimensions));
            if (this.frame % 700 === 0 && this.player.y < 200) that.push(new Flyer(this.dimensions));
            if ( this.obstacle.length % 6 === 0) that.push(new People(this.dimensions));



            this.checkCollison();
            requestAnimationFrame(this.animate.bind(this));
        }
    }

    animateObstacles(){
        for (let i = 0; i < this.obstacle.length; i++) {
            this.obstacle[i].animate(this.ctx);
            if(this.obstacle[i].x < 0){
                debugger
                this.obstacle.splice(0,1);
            }
        }
    }

    restart(){
        this.running = false;
        this.gameStarted=true;//when game is over change to false
        this.player = new Player(this.dimensions);
        this.level = new Level(this.dimensions);
        this.frame = 0;
        //testing
        // this.heart = new Heart(this.dimensions);
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
        this.player.speedUp();
    }

    arrowUpJump(){
        if (!this.running) {
            this.play();
        }
        this.player.jump();
    }

    checkCollison(){
        // debugger
        let bounds = this.player.bounds();
        for (let i = 0; i < this.obstacle.length; i++){
            let obs = this.obstacle[i];
            if(obs instanceof Dog && obs.x < bounds.right && bounds.left < obs.x && bounds.bottom > obs.y-150) alert('you hit')
            if (obs instanceof Flyer && obs.x < bounds.right && bounds.left < obs.x && obs.y+ obs.height-500 > bounds.top) alert('you hit')
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
            this.player.velocity = .2;
        })


    }

    addObstacle(){

    }
}