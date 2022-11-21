let canvas = document.querySelector("canvas");
let cx = canvas.getContext("2d");

//console.log(cx);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.background = "blue";

//console.log(cx.width);

//add interactivity here to grow or shrink the circles within
//certain distance
let maxRadius = 40;
let minRadius = 2;
var mouseCoords = {
  x: undefined,
  y: undefined,
};

window.addEventListener("mousemove", function (event) {
  mouseCoords.x = event.x;
  mouseCoords.y = event.y;
  console.log("inside event", mouseCoords.x);
  // console.log(this.x);
  // console.log(mouseCoords);
});
console.log(mouseCoords);
class Circles {
  constructor(x, y, r, dx, dy) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.dx = dx;
    this.dy = dy;
  }

  drawing() {
    cx.beginPath();
    cx.arc(this.x, this.y, this.r, 0, Math.PI * 3, false);
    cx.strokeStyle = "blue";
    cx.fillStyle = "lightgray";
    cx.lineStyel = 2;
    cx.fill();
    cx.stroke();
  }

  //create random number

  update() {
    if (this.x + this.r > innerWidth || this.x - this.r < 0) {
      this.dx = -this.dx;
    }

    if (this.y + this.r > innerHeight || this.y - this.r < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;
    // interactivity
    //grow all the circles that appear around mouse withing 50px radius
    // console.log("move", mouseCoords.x);
    // console.log("this", this.x);
    // window.addEventListener("click", function (event) {
    //   console.log(event);
    //   mouseCoords.x = event.x;
    //   mouseCoords.y = event.y;
    //   console.log("inside event", mouseCoords.x);
    //   // console.log(this.x);
    //   console.log(mouseCoords);
    // });
    console.log(mouseCoords);
    console.log(this.x);
    console.log(mouseCoords.x);
    if (
      mouseCoords.x - this.x < 50 &&
      mouseCoords.x - this.x > -50 &&
      mouseCoords.y - this.y < 50 &&
      mouseCoords.y - this.y > -50
    ) {
      //check if the raduis is less than the max radius
      if (this.radius < maxRadius) {
        this.radius += 1;
      }
      // don't shrink the radius if is less than 2
    } else if (this.radius > minRadius) {
      this.radius -= 1;
    }

    this.drawing();
  }
}

// create 100 circle where each
//circle has its velocity different from othere
let circlesArray = [];
for (let i = 0; i < 1000; i++) {
  //create random number
  let radius = 30;
  let x = Math.random() * (innerWidth - radius * 2) + radius;
  //console.log("rand x", x);
  let y = Math.random() * (innerHeight - radius * 2) + radius;
  let dx = Math.random() * -0.5 * 8;
  let dy = Math.random() * -0.5 * 8;
  circlesArray.push(new Circles(x, y, radius, dx, dy));
}
//for (let cir of circlesArray) console.log(cir);
//let circles = new Circles(200, 200, 30, 4, 4);
//let circles = new Circles(x, y, radius, dx, dy);
//console.log(circles);

//add event listener to grow or shrink the circles within
// 40 px wides from the mouse position
//create an object to collect x y coords

function animate() {
  requestAnimationFrame(animate);
  cx.clearRect(0, 0, innerWidth, innerHeight); //clearing old circle each time
  //circles.drawing();
  // circles.update();
  for (let i = 0; i < circlesArray.length; i++) {
    circlesArray[i].update();
  }
}

animate();
