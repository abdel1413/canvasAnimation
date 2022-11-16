let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");
console.log(canvas);

// make the canvas have the full size and height of the window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.style.margin = "0";
canvas.style.background = "yellow";

// let x = 200;
// let radius = 30;
// let y = 200;
// let xVelocity = 6;
// let yVelocity = 6;

//let randomize the coords and velocity

let x = Math.random() * innerWidth;
let y = Math.random() * innerHeight;
let xVelocity = (Math.random() - 0.5) * 10;
let yVelocity = (Math.random() - 0.5) * 10;
let radius = 30;
//note: the velocity is assigned to the product of math random time
// negative (-) inoder to get canvas started in either direction radomly

//create animation circle
// 1)function
//2) to call the requestanimation frame and pass the function inside it
function animate() {
  requestAnimationFrame(animate);
  //clear the circle each time the canvas is refreshed
  context.clearRect(0, 0, innerWidth, innerHeight);

  context.beginPath();
  context.arc(x, y, radius, 0, Math.PI * 2, false);
  context.strokeStyle = "green";
  context.fillStyle = "white";
  context.lineWidth = 2;
  context.fill();
  context.stroke();
  console.log("something");
  //   x + radius > innerWidth ? xVelocity : -xVelocity;
  //   y + radius > innerHeight || y - radius < 0 ? yVelocity : -yVelocity;
  if (x + radius > innerWidth || x - radius < 0) {
    xVelocity = -xVelocity;
  }
  if (y + radius > innerHeight || y - radius < 0) {
    yVelocity = -yVelocity;
  }

  x += xVelocity;
  y += yVelocity;
}

animate();
