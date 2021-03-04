const CONSTANTS = {
    PLAYER_W: 85,
    PLAYER_H: 140,
    GRAVITY: 0.2
}

export default class Player {
    constructor(dimensions) {
        this.velocity = .2;
        this.dimensions = dimensions;
        this.x = this.dimensions.width/12;
        this.y = this.dimensions.height * .60;
        this.height = 0;
    }
    drawPlayer(ctx){
        const player = new Image();
        player.src = 'css/images/player.png';
        console.log(this.x)
        console.log(this.y)
        ctx.drawImage(player, this.x, this.y, CONSTANTS.PLAYER_W, CONSTANTS.PLAYER_H)
        // player.onload = () => (ctx.drawImage(player, this.x, this.y, 85, 120))
        // this.loadPlayer(ctx);
        // debugger
        // ctx.fillStyle = "black";
        // ctx.fillRect(this.x, this.y, CONSTANTS.PLAYER_W, CONSTANTS.PLAYER_H)
    }
    
    animate(ctx){
        console.log("hello")
        this.move();
        this.drawPlayer(ctx);
    }

    // loadPlayer(ctx){
    //     const player = new Image();
    //     player.onload = () => (ctx.drawImage(player, this.x, this.y, 85, 120))
    //     player.src = 'src/images/player.png';
    // }

    move(){
        this.x += this.velocity;
        this.y -= this.height;
        if (this.y - this.height < 345 ){
            this.height -= CONSTANTS.GRAVITY;
        }else{
            this.height = 0;
        }
    }

    speedUp(){
        this.velocity += .2;
    }

    jump(){
        this.height = 5;
    }

    bounds(){
        return{
            left: this.x,
            right: this.x + CONSTANTS.PLAYER_W,
            top: this.y,
            bottom: this.y + CONSTANTS.PLAYER_H
        }
    }

}