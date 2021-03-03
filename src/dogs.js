export default class Dog{
    constructor(dimensions){
        this.dimensions = dimensions;
        this.x = this.dimensions.width;
        this.y = this.dimensions.height-150;
        this.velocity = Math.floor(Math.random() * 4 )+ 1
    }

    drawDog(ctx){
        const dog = new Image();
        dog.src = 'src/images/dog_left.png'
        ctx.drawImage(dog, this.x, this.y, 110, 100)

        // ctx.fillStyle = "white";
        // ctx.fillRect(this.x, this.y, 30,30)
    }

    animate(ctx){
        this.move();
        this.drawDog(ctx);
    }

    move(){
        this.x -= this.velocity;
    }
}