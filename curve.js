let curve = document.querySelector("canvas");
let context = curve.getContext("2d");
context.beginPath();
context.moveTo(10, 90);
context.quadraticCurveTo(60, 10, 90, 90);
context.lineTo(60, 10);
context.closePath();
context.stroke();

let context2 = document.querySelector("#bez").getContext("2d");

context2.beginPath();
context2.moveTo(10, 90);
context2.bezierCurveTo(10, 10, 90, 10, 50, 90);
context2.lineTo(90, 10);
context2.lineTo(10, 10);
context2.closePath();
context2.stroke();
context2.closePath();

let context3 = document.querySelector("#arc").getContext("2d");
context3.beginPath();
context3.arc(50, 50, 40, 0, 7, false);

context3.arc(150, 50, 40, 0.5 * Math.PI, false);
context3.closePath();
context3.stroke();
