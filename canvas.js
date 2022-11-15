let canvas = document.querySelector("canvas");
console.log(canvas);
let context = canvas.getContext("2d");
context.beginPath();
for (let line = 10; line < 100; line += 10) {
  context.moveTo(10, line);
  context.strokeStyle = "blue";
  context.lineWidth = 5;
  context.lineTo(90, line);
}
context.stroke();
context.closePath();
let canv = document.querySelector("#canvas");
console.log(canv);
let cont = canv.getContext("2d");
cont.beginPath();
cont.moveTo(50, 10);
cont.lineTo(10, 70);
cont.lineTo(90, 70);
cont.fill();

cont.closePath();
(() => {
  let rect = document.querySelector("#rectangle");
  if (!rect.getContext) {
    return;
  }
  let r = rect.getContext("2d");

  r.fillStyle = "#F0DB4F"; //background
  r.strokeStyle = "red"; //red edge color
  r.fillRect(50, 50, 150, 100); //
  r.strokeRect(50, 50, 150, 100); //edges
})();
