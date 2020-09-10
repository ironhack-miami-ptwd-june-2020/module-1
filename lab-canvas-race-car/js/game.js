class Game {
  constructor(canvas, ctx, src) {
    this.obstacles = [];
    this.score = 0;
    this.hit = false;
    this.canvas = canvas;
    this.ctx = ctx;
    this.player = new Player("./images/car.png", "./images/carm.png", this.ctx);
    this.background = new Image();
    this.background.src = src;
  }
  createObstacle = () => {
    let width = 100 + Math.round(Math.random() * 200);
    let x = Math.round(Math.random() * (this.canvas.width - width));
    let obstacle = new Obstacle(width, x, this.ctx, "green");
    this.obstacles.push(obstacle);
  };

  checkCol = (obstacle, i) => {
    if (
      !(
        obstacle.x + obstacle.width < this.player.x ||
        obstacle.x > this.player.x + this.player.width ||
        obstacle.y + obstacle.height < this.player.y ||
        obstacle.y > this.player.y + this.player.height
      )
    ) {
      setTimeout(() => (this.hit = false), 2000);
      this.hit = true;
      this.score = 0;
    }
    if (obstacle.y > this.canvas.height + 5) {
      this.obstacles.splice(i, 1);
    } else if (obstacle.y > this.player.y + this.player.height) {
      if (!this.hit) this.score++;
    }
  };
  draw = () => {
    // score++;
    this.ctx.drawImage(
      this.background,
      0,
      0,
      this.canvas.width,
      this.canvas.height
    );

    this.player.draw();

    this.obstacles.forEach((obstacle, i) => {
      //   obstacle.y += 2;
      obstacle.draw();
      this.checkCol(obstacle, i);
    });

    this.ctx.fillText(`score: ${this.score}`, 50, 50, 150, 100);

    window.requestAnimationFrame(this.draw);
  };
}
