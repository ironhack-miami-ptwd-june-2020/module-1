const myCanvas = document.querySelector('#my-canvas');
// define the context
const ctx = myCanvas.getContext('2d');

let score = 0;
let isOver = false;

// 1. draw background

function drawBackground() {
  ctx.fillStyle = 'pink';
  //                          1000,       500
  ctx.fillRect(0, 0, myCanvas.width, myCanvas.height);

  ctx.fillStyle = 'green';
  ctx.font = '25px Arial';
  ctx.fillText(`Score: ${score}`, 800, 50);
}

// 2. add images to the board

let supermanX = 0;
let supermanY = 200;

let supermanImg = new Image();
supermanImg.src = './images/superman.png'; // navigate to this file as you were in html file

// supermanImg.addEventListener('load', () => {
//   ctx.drawImage(supermanImg, supermanX, supermanY, 150, 150);
// });

let fireballX = 800;
let fireballY = 200;

let fireballImg = new Image();
fireballImg.src = './images/fireball.png'; // navigate to this file as you were in html file

// fireballImg.addEventListener('load', () => {
//   ctx.drawImage(fireballImg, fireballX, fireballY, 70, 70);
// });

function drawEverything() {
  ctx.drawImage(supermanImg, supermanX, supermanY, 150, 150);
  ctx.drawImage(fireballImg, fireballX, fireballY, 70, 70);

  if (checkCollision(supermanX, supermanY, fireballX, fireballY)) {
    console.log('CRASH!!!!!!');
    gameOver();
  }

  if (fireballX === 0) {
    score++;
  }
}

// 3. create some animation

function drawingLoop() {
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
  drawBackground();
  drawEverything();

  fireballX -= 5;

  if (fireballX < -70) {
    fireballX = 1000;
    fireballY = Math.floor(Math.random() * 430); // 500 - 70
  }

  //   requestAnimationFrame(drawingLoop);
  if (isOver === false) {
    requestAnimationFrame(drawingLoop);
  }
}

// all 4 conditions need to be true in order to return true
function checkCollision(obj1x, obj1y, obj2x, obj2y) {
  // supermanY + superman-height >= fireballY
  return (
    obj1y + 150 >= obj2y &&
    // supermanY <= fireballY + fireball-height
    obj1y <= obj2y + 70 &&
    // supermanX + superman-width >= fireballX
    obj1x + 150 - 70 >= obj2x &&
    // supermanX <= fireballX + fireball-width
    obj1x <= obj2x + 70
  );
}

document.addEventListener('keydown', event => {
  //   console.log(event);
  switch (event.keyCode) {
    case 37:
      if (supermanX >= 0) supermanX -= 10;
      break;
    case 39:
      if (supermanX <= 850) supermanX += 10;
      break;

    case 38:
      supermanY -= 10;
      break;

    case 40:
      supermanY += 10;
      break;
    default:
      console.log('I am not sure what are you doing');
  }
});

function gameOver() {
  ctx.clearRect(0, 0, 1000, 500);

  drawBackground();

  const tiredSuperman = new Image();
  tiredSuperman.src = './images/tired-superman.png';
  tiredSuperman.onload = () => {
    ctx.drawImage(tiredSuperman, 400, 300, 150, 150);
  };

  isOver = true;

  ctx.font = '70px bold Arial';
  ctx.fillStyle = 'red';
  ctx.fillText('GAME OVER!', 300, 200);
}

// drawBackground();
drawingLoop();
