const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

const cWidth = canvas.width;
const cHeight = canvas.height;

function drawPattern() {
  const img = new Image();
  img.src = './images/wall-paper.png';
  img.addEventListener('load', () => {
    const pattern = ctx.createPattern(img, 'repeat');
    ctx.fillStyle = pattern;
    ctx.fillRect(0, 0, 300, 200);
  });
}

// drawPattern();

function drawShadow() {
  ctx.shadowOffsetX = 10;
  ctx.shadowOffsetY = 8;
  ctx.shadowBlur = 1;

  ctx.shadowColor = 'rgba(15, 155, 140, 0.5)';
  ctx.font = '15px monospace';
  ctx.fillText('Is this working?', 5, 250);
}

drawShadow();
