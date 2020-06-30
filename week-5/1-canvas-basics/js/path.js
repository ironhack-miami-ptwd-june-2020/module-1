// console.log('am i connected?');

// 2d ctx is where everything happens in canvas
// it holds all the methods for drawing things and animation
const theCanvas = document.getElementById('example');
const ctx = theCanvas.getContext('2d');

// ****************************
// draw rectangle:
// ****************************

ctx.fillStyle = 'blue';
ctx.fillRect(220, 220, 40, 40);

ctx.fillStyle = 'rgba(50, 205, 50, 0.5)';
ctx.fillRect(30, 30, 40, 40);

// ****************************
// draw text
// ****************************

ctx.fillStyle = 'pink';
ctx.font = '15px monospace';

// pattern to follow:
// ctx.fillText('text we want to add', x, y);
// x, y are the coordinates where the text is going to appear
ctx.fillText('ptwd-mia-june 2020 ♥️', 90, 50);

// ****************************
// draw path
// ****************************

// color of the line
ctx.strokeStyle = 'green';

ctx.beginPath(); // step: 1

// starting position is x=50; y=80
ctx.moveTo(50, 80); // step: 2

// the final coordinates are (220, 50)
ctx.lineTo(220, 80); // step 3

// executes the drawing (of the line/path)
ctx.stroke(); // step: 4

ctx.lineTo(220, 100);

ctx.stroke();
ctx.fill(); // optional: fills with the last set color used with fillStyle (and that is pink)

ctx.closePath(); // step 5

// ****************************
// draw circle
// ****************************

/*
    Angles in the arc function are measured in radians, not degrees.
    To convert degrees to radians use the following JavaScript expression:

    radians = (Math.PI / 180) * degrees.

*/

// bigger - orange circle:

ctx.beginPath();
ctx.strokeStyle = 'orange';
ctx.lineWidth = 7;

// ctx.arc(x, y, radius, startAngle, endAngle)
ctx.arc(150, 150, 50, 0, Math.PI * 2);
ctx.stroke();
ctx.closePath();

// smaller half circle

ctx.strokeStyle = 'gray';
ctx.beginPath();
ctx.arc(150, 150, 30, 0, Math.PI);
ctx.stroke();
ctx.closePath();
