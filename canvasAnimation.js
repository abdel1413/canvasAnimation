let canvas = document.querySelector("canvas");
console.log(canvas);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.background = "red";
document.body.style.margin = "0";
let context = canvas.getContext("2d");
/**
 * to change the background of rect we use fillStyle property
 * after each rectangle. Yet, if fillstyle is placed on top of all
 * the rectangles, the background styling will impact all of them
 */
//context.fillStyle = "green";
context.fillRect(100, 100, 100, 100);
context.fillStyle = "blue";
context.fillRect(300, 100, 100, 100);
context.fillStyle = "yellow";
context.fillRect(200, 200, 100, 100);

context.beginPath();
context.moveTo(450, 200);
context.lineTo(610, 300);
context.moveTo(450, 200);
context.lineTo(610, 50);
context.moveTo(610, 50);
context.lineTo(610, 300);
context.strokeStyle = "white";
context.lineWidth = 5;
context.stroke();

//circle
context.beginPath();
context.arc(800, 300, 50, 0, Math.PI * 2, false);
context.stroke();

context.beginPath();
context.strokeStyle = "green";
context.arc(900, 400, 60, 0, Math.PI * 2, false);
context.fillStyle = "blue";
context.fill();
context.stroke();

for (let c = 0; c < 5; c++) {
  let x = Math.random() * window.innerWidth;
  let y = Math.random() * window.innerHeight;
  context.beginPath();
  context.arc(x, y, 30, 0, Math.PI * 3, false);
  context.strokeStyle = "cyan";
  context.fillStyle = "black";
  context.lineWidth = 1;
  context.fill();
  context.stroke();
}
