import Level from './level';
import Player from './player'

export default class KeithGame{

    constructor(canvas){
        this.ctx = canvas.getContext("2d");
        this.dimensions = { width: canvas.width, height: canvas.height };

        this.restart();
    }

    animate(){
        this.level.animate(this.ctx);
        this.player.animate(this.ctx);
    }

    restart(){
        this.player = new Player(this.dimensions);
        this.level = new Level(this.dimensions);

        this.animate();
    }
}