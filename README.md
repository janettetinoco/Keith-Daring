# Keith-Daring
A game inspired by the street artist, Keith Haring. The objective is to get to the train station while collecting as many hearts as possible. The more hearts collected, the higher the score. However, the player needs to avoid the obstacles of the busy streets of New York, or any collisions will take away points.

Live link to [Keith Daring](https://janettetinoco.github.io/Keith-Daring/)

<img width="800" alt="Screen Shot 2021-03-29 at 8 10 54 AM" src="https://user-images.githubusercontent.com/52670122/112858916-3202af00-9067-11eb-8c66-ac76a0bbb2d1.png">

## Technologies
* Vanilla Javvascript
* HTML/CSS

## Development
### Animation Loop
The game view consists of a single canvas and multiple Obstacle chile elements using canvas' drawImage. The animation loop animates all elements and triggers new obstacles depending on frame number, number of obstacles on the screen, and height of the player. 

```javascript
  this.level.animate(this.ctx, this.player);
  this.player.animate(this.ctx, this.frame);
  this.frame ++
  this.animateObstacles()
  let that = this.obstacle
  if (this.running) {
      if (this.frame % 400 === 0 && this.obstacle.length < 3 || this.frame === 4) that.push(new Dog(this.dimensions));
```

### Collision Detection
The player's score drops whenever they colide with one of the obstacles. To detect collision, it was necessary to keep track of the player's boundaries(top, bottom, left, right) and compare them to the location of each of the obstacles' boundaries. As long as the player is colliding, the score will continuously drop.

```javascript
bounds(){
        return{
            left: this.x+10,
            right: this.x + CONSTANTS.PLAYER_W-10,
            top: this.y,
            bottom: this.y + CONSTANTS.PLAYER_H
        }
    }
 ```
 
 ## Future Features
 * Levels of Difficulty
 * Global High Scores
