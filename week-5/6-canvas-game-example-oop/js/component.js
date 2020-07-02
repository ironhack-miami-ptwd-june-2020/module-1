class Component {
  constructor(game, x, y, width, height) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.img = new Image();
  }

  drawComponent(imgSource) {
    console.log(imgSource);
    const theCtx = this.game.ctx;
    this.img.src = imgSource;
    // this.img.addEventListener('load', () => {
    theCtx.drawImage(this.img, this.x, this.y, this.width, this.height);
    // });
  }

  getLeft() {
    return this.x;
  }

  getRight() {
    return this.x + this.width - 30;
  }

  getTop() {
    return this.y + 30;
  }

  getBottom() {
    return this.y + this.height - 50;
  }

  didCollide(otherComp) {
    const crossLeft = otherComp.x >= this.getLeft() && otherComp.x <= this.getRight();
    const crossRight =
      otherComp.x + otherComp.width >= this.getLeft() && otherComp.x + otherComp.width <= this.getRight();
    const crossTop = otherComp.y <= this.getBottom() && otherComp.y >= this.getTop();

    const crossBottom =
      otherComp.y + otherComp.height >= this.getTop() && otherComp.y + otherComp.height <= this.getBottom();

    if ((crossLeft || crossRight) && (crossBottom || crossTop)) {
      return true;
    }
    return false;

    // ALTERNATIVE:

    // if (
    //     this.getRight() >= otherComp.x && // comp1 right edge past comp2 left edge
    //     this.getLeft() <= otherComp.x + otherComp.width && // comp1 left edge past comp2 right edge
    //     this.getBottom() >= otherComp.y && // comp1 top edge past comp2 bottom
    //     this.getTop() <= otherComp.y + otherComp.height // comp1 bottom edge past comp2 top edge
    //   ) {
    //     return true;
    //   }
    //   return false;
  }
}
