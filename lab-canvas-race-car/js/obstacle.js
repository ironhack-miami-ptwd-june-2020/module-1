class Obstacle {
  constructor(width, x, ctx, color) {
    this.height = 50;
    this.width = width;
    this.x = x;
    this.y = 0;
    this.color = this.random_rgba();
    this.ctx = ctx;
  }
  draw() {
    this.y += 2;
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  random_rgba() {
    var o = Math.round,
      r = Math.random,
      s = 255;
    return "rgb(" + o(r() * s) + "," + o(r() * s) + "," + o(r() * s) + ")";
  }
}
