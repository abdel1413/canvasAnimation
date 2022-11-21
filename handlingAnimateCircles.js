let canvas = document.querySelector("canvas");
let cx = canvas.getContext("2d");

//console.log(cx);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.background = "blue";

//console.log(cx.width);

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
    this.drawing();
  }
}

// create 100 circle where each
//circle has its velocity different from othere
let circlesArray = [];
for (let i = 0; i < 300; i++) {
  //create random number
  let radius = Math.random() * 30;
  let x = Math.random() * (innerWidth - radius * 2) + radius;
  //console.log("rand x", x);
  let y = Math.random() * (innerHeight - radius * 2) + radius;
  let dx = Math.random() * -0.5 + 2;
  let dy = Math.random() * -0.5 + 2;
  circlesArray.push(new Circles(x, y, radius, dx, dy));
}
//for (let cir of circlesArray) console.log(cir);
//let circles = new Circles(200, 200, 30, 4, 4);
//let circles = new Circles(x, y, radius, dx, dy);
//console.log(circles);

//add event listener to grow or shrink the circles within
// 40 px wides from the mouse position
window.addEventListener("mousemove", function () {
  console.log("mouse is mooved");
});

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
