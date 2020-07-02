class Player extends Component {
  constructor(game, x, y, width, height) {
    super(game, x, y, width, height);
  }

  move() {
    document.addEventListener('keydown', event => {
      event.preventDefault();
      switch (event.keyCode) {
        case 37:
        case 65:
          if (this.x >= 0) this.x -= 10;
          break;
        case 39:
        case 83:
          if (this.x <= 1000 - this.width) this.x += 10;
          break;

        case 38:
        case 87:
          if (this.y >= 10) this.y -= 10;
          break;

        case 40:
        case 68:
          if (this.y <= 500 - this.height) this.y += 10;
          break;
        default:
          console.log('I am not sure what are you doing');
      }
    });
  }
}
