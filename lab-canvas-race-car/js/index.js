window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };

  function startGame() {
    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d");

    let game = new Game(canvas, ctx, "./images/road.png");

    setInterval(game.createObstacle, 3000);

    game.draw();

    document.addEventListener("keypress", (event) => {
      if (event.charCode === 97) {
        // if (car.x >= 0) car.x--;
        game.player.flip();
      }
      if (event.charCode === 100) {
        if (game.player.x <= canvas.width - game.player.width) game.player.x++;
      }
    });
    // game = new Game(canvas, ctx, "./images/road.png")
  }
};
