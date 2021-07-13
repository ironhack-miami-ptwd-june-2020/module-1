const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

const cWidth = canvas.width;
const cHeight = canvas.height;

let speed1 = 1;
let speed2 = 2;
let speed3 = 3;

function drawCanvas(x, y, w, h, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
}

function clearCanvas() {
  ctx.clearRect(0, 0, cWidth, cHeight);
}

// the previous two functions () and drawCanvas() are included inside updateCanvas() below:
function updateCanvas() {
  speed1 += 1;
  speed2 += 2;
  speed3 += 3;

  clearCanvas();

  drawCanvas(50, speed1, 50, 50, 'red');
  drawCanvas(150, speed2, 50, 50, 'green');
  drawCanvas(250, speed3, 50, 50, 'yellow');

  // 1st way to make some animation is using setTimeout()
  // this way is the same as the recursive function
  // the benefit is to be able to influence the speed through the milliseconds 
  // (in example below it's 30ms ==> the function updateCanvas() gets called every 30ms)
  // setTimeout(() => updateCanvas(), 30);

  // 2nd way: requestAnimationFrame(someFunctionNameWithoutParentheses)
  // very often used but requires a bit of manual work to influence the speed
  requestAnimationFrame(updateCanvas);

  // 3rd way: setInterval(() => updateCanvas(), framesPerSecond)
  // setInterval(() => updateCanvas(), 10000 / 60);
}

updateCanvas();
