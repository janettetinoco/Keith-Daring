

export default class Level {
    constructor(dimensions) {
        this.dimensions = dimensions;
    }

    drawBackground(ctx) {
        ctx.fillStyle = "#ffd24d";
        ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
        this.drawBase(ctx);
        this.drawDots(ctx)
    }
    drawBase(context){
        context.lineWidth = 3;
        context.moveTo(1, 480);
        context.lineTo(100, 466)
        context.lineTo(320, 468)
        context.lineTo(350, 470)
        context.lineTo(500, 466)
        context.lineTo(900, 475)
        context.stroke();

    }

    drawDots(context){
        context.fillStyle = "black"
        for(let i = 1; i < 900 ; i= i+40){
            context.fillRect(i + 25, 475, 10, 9)
            context.fillRect(i, 490, 10, 9)
            context.fillRect(i + 28, 505, 10, 9)
            context.fillRect(i + 13, 518, 10, 8)
            context.fillRect(i + 28, 530, 10, 9)
            context.fillRect(i, 545, 10, 9)
        }
    }


    animate(ctx) {
        this.drawBackground(ctx)
    }

    


}