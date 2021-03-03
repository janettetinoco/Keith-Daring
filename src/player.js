const CONSTANTS = {
    PLAYER_W: 50,
    PLAYER_H: 50
}

export default class Player {
    constructor(dimensions) {
        this.velocity = 0;
        this.dimensions = dimensions;
        this.x = this.dimensions.width/12;
        this.y = this.dimensions.height * .65;
    }
    drawPlayer(ctx){
        // const player = new Image();
        // player.src = 'src/images/player.png';
        // ctx.drawImage(player, this.x, this.y, 85, 120)
        // player.onload = () => (ctx.drawImage(player, this.x, this.y, 85, 120))
        // this.loadPlayer(ctx);
        ctx.fillStyle = "black";
        ctx.fillRect(this.x, this.y, CONSTANTS.PLAYER_W, CONSTANTS.PLAYER_H)
    }
    
    animate(ctx){
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
        this.velocity = 1
    }

    speedUp(){
        this.velocity = 10;
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