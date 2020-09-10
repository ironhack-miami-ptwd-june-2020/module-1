const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let image = new Image();
image.src =
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.x3nAVrcgNoQ8wRNnjF4reAHaEK%26pid%3DApi&f=1";
let image2 = new Image();
image2.src =
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.x3nAVrcgNoQ8wRNnjF4reAHaEK%26pid%3DApi&f=1";
// if you want the canvas to go in opposite direction:
// let i = 0;
// let j = -canvas.width;
let i = 0;
let j = canvas.width;

// draw function
const draw = () => {
  // recursively call the function
  let animation = window.requestAnimationFrame(draw);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  i--;
  if (i <= -canvas.width) i = canvas.width;
  j--;
  if (j <= -canvas.width) j = canvas.width;
  // if you want the canvas to go in opposite direction:
  //   i++;
  //   if (i >= canvas.width) i = -canvas.width;
  //   j++;
  //   if (j >= canvas.width) j = -canvas.width;

  ctx.drawImage(image, i, 0, canvas.width, canvas.height);
  ctx.drawImage(image, j, 0, canvas.width, canvas.height);
  //   if we want to cancel the animation, we could do it in this way:
  //   if (i > 500) {
  //     // window.cancelAnimationFrame(animation);
  //   }
};

// call the function initially to start it off:
draw();

// call the function with setIterval
// let interval = setInterval(draw, 20);
