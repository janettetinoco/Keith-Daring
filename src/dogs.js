import Obstacles from './obstacles'

class Dog extends Obstacles{
    constructor(dimensions){
        super(dimensions);
        this.height = 100;
        this.width = 110;
        this.velocity = Math.floor(Math.random() * 2) + 1;
    }

    drawDog(ctx){
        const dog = new Image();
        dog.src = 'css/images/dog_left.png'
        ctx.drawImage(dog, this.x, this.y-150, this.width, this.height)

        // ctx.fillStyle = "white";
        // ctx.fillRect(this.x, this.y, 30,30)
    }

    animate(ctx){
        this.move();
        this.drawDog(ctx);
    }
}

class Flyer extends Obstacles{
    constructor(dimensions){
        super(dimensions);
        this.width = 110;
        this.height = 100;
        this.velocity = Math.floor(Math.random() * 3) + 1

    }

    drawFlyer(ctx){
        const flyer = new Image();
        flyer.src = 'css/images/flyer.png';
        ctx.drawImage(flyer, this.x, this.y - 550, this.width, this.height)

    }

    animate(ctx) {
        this.move();
        this.drawFlyer(ctx);
    }
}

class People extends Obstacles{
    constructor(dimensions) {
        super(dimensions);
        this.height = 120;
        this.width = 200;
        this.velocity = (Math.random() * 2);
    }

    drawDog(ctx) {
        const dog = new Image();
        dog.src = 'css/images/dancers.png'
        ctx.drawImage(dog, this.x, this.y - 150, this.width, this.height)
    }

    animate(ctx) {
        this.move();
        this.drawDog(ctx);
    }

}

export {Dog, Flyer, People}

