const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const cWidth = canvas.width;
const cHeight = canvas.height;

const naturePic = new Image();
// console.log(naturePic);
// in the console in the browser we can see that the image tag has been created (<img>)

naturePic.src = './images/waterfalls.jpeg';

// console.log(naturePic);
// in the console ==> <img src=​"./​images/​waterfalls.jpeg">​

naturePic.addEventListener('load', () => {
  // context.drawImage(Image, dX, dY, dWidth, dHeight);
  context.drawImage(naturePic, 10, 10, 260, 160);
});
