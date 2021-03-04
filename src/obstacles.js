export default class Obstacles{
    constructor(dimensions) {
        this.dimensions = dimensions;
        this.x = this.dimensions.width;
        this.y = this.dimensions.height;
    }

    move() {
        this.x -= this.velocity;
    }

    checkCollison() {
        if (this.player.bounds().right > this.obstacle.x && this.player.bounds().bottom > this.obstacle.y && this.player.bounds().left < this.obstacle.x + 30) {
            alert("youre hit")
        }
    }


}