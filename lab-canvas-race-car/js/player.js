class Player {
  constructor(src1, src2, ctx) {
    this.image = new Image();
    this.src1 = src1;
    this.src2 = src2;
    this.image.src = src1;
    this.flipped = false;
    this.height = 150;
    this.width = 80;
    this.x = canvas.width / 2 - 40;
    this.y = canvas.height - 150;
    this.ctx = ctx;
  }
  draw() {
    this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
  flip() {
    this.flipped = !this.flipped;
    if (this.flipped) {
      this.image.src = this.src1;
    } else {
      this.image.src = this.src2;
    }
  }
}
