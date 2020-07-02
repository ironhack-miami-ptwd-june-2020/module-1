class Game {
  constructor() {
    // this.myCanvas = document.querySelector('#my-canvas');
    this.myCanvas = undefined;
    this.ctx = undefined;
    this.superman = new Player(this, 0, 200, 150, 150);
    this.fireball = new Component(this, 800, 200, 70, 70);
    this.score = 0;
  }

  init() {
    console.log('called');
    this.myCanvas = document.querySelector('#my-canvas');
    this.ctx = this.myCanvas.getContext('2d');
    this.drawBackground();
    // console.log(this.fireball);
    this.drawMainCharacters();
    this.superman.move();
    const interval = setInterval(() => {
      this.clear();

      this.drawBackground();
      this.drawMainCharacters();

      if (this.superman.didCollide(this.fireball)) {
        // alert('collision');
        clearInterval(interval);
        this.gameOver();
      }

      this.fireball.x -= 5;

      if (this.fireball.x < -70) {
        this.fireball.x = 1000;
        this.fireball.y = Math.floor(Math.random() * 430); // 500 - 70
      }

      if (this.fireball.x === 0) this.score++;
    }, 1000 / 60);
  }

  drawBackground() {
    this.ctx.fillStyle = 'pink';
    //                          1000, 500
    this.ctx.fillRect(0, 0, this.myCanvas.width, this.myCanvas.height);

    this.ctx.fillStyle = 'green';
    this.ctx.font = '25px Arial';
    this.ctx.fillText(`Score: ${this.score}`, 800, 50);
  }

  clear() {
    this.ctx.clearRect(0, 0, this.myCanvas.width, this.myCanvas.height);
  }

  drawMainCharacters() {
    this.fireball.drawComponent('./images/fireball.png');
    this.superman.drawComponent('./images/superman.png');
  }

  gameOver() {
    this.clear();
    this.drawBackground();
    this.ctx.font = '70px Arial';
    this.ctx.fillStyle = 'red';
    this.ctx.fillText('Game Over!!!', 300, this.myCanvas.height / 2);
  }
}
