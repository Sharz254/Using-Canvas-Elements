var canvas = document.createElement('canvas');
canvas.width = 500;
canvas.height = 250;
var ctx = canvas.getContext('2d');

ctx.font = ' 30px cursive';
ctx.fillText("Hello, World", 50, 50);

document.body.appendChild(canvas);