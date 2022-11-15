let circleColor = document.querySelector("circle");
circleColor.setAttribute("fill", "yellow");
circleColor.setAttribute("r", "40");

console.log(circleColor.r.baseVal.value);
console.log(circleColor.r.baseVal.valueAsString);
console.log(circleColor.r.baseVal.valueAsString);

let circleValue = document.createElement("h1");
circleValue.innerHTML = `circle value ${circleColor.r.baseVal.value}`;
circleValue.style.margin = "0px";
console.log(document.body.firstElementChild);
// document.body.insertBefore(, circleValue);

let rect = document.querySelector("rect");
rect.setAttribute("fill", "lightgray");
console.log(rect.x.baseVal.valueAsString);
let x = `${rect.x.baseVal.value}`;
rect.setAttribute("x", "150");
console.log(rect.x.baseVal.value);
rect.setAttribute("y", "10");
console.log(rect.y.baseVal.value);

let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");
context.fillStyle = "red";
context.fillRect("10", "10", "130", "100");
/**
 * Note the canvas start its coord (0,0)at top-left corner
 * so the positive y-axis goes down from (0,0) while x-axis goes
 * right from of the top-left corner
 * (5,5) is x and y coord 130 is width and 70 is height
 *
 */

context.strokeStyle = "blue";
context.lineWidth = 10;
context.strokeRect("15", "15", "150", "00");

//A path is a sequence of lines so if you want to do something with
//it you may want to make a sequence of method calls to describe its
//shape.
context.beginPath();
for (let y = 10; y < 100; y += 10) {
  context.moveTo(10, y);
  context.lineTo(10, y);
}
context.stroke();
