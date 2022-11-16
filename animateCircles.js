let canvas = document.querySelector("canvas");
console.log(canvas);
let context = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function Circles(x, y, r, dx, dy) {
  this.x = x;
  this.y = y;
  this.r = r;
  this.dx = dx;
  this.dy = dy;

  this.draw = function () {
    console.log("drawing");
    context.beginPath();
    context.arc(this.x, this.y, this.r, 0, Math.PI * 3, false);
    context.strokeStyle = "blue";
    context.fillStyle = "blue";
    //context.fill();
    context.lineWidth = 1;
    context.stroke();
  };

  //create update mthd to update the circle
  this.update = function () {
    if (this.x + this.r > innerWidth || this.x - this.r < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.r > innerHeight || this.y - this.r < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;
    this.draw();
  };
}

let circle = new Circles(200, 200, 30, 5, 5);
console.log(circle);
console.log(circle.draw());

//creating 100 circle

let circleArray = [];
for (let i = 0; i < 100; i++) {
  let x = Math.random() * innerWidth;
  let dx = (Math.random() - 0.5) * 5;
  let radius = 30;
  let y = Math.random() * innerHeight;
  let dy = (Math.random() - 0.5) * 5;

  circleArray.push(new Circles(x, y, radius, dx, dy));
}

//console.log(circleArray);

// let x = Math.random() * innerWidth;
// let dx = (Math.random() - 0.5) * 10;
// let radius = 30;
// let y = Math.random() * innerHeight;
// let dy = (Math.random() - 0.5) * 10;

function animate() {
  requestAnimationFrame(animate);
  context.clearRect(0, 0, innerWidth, innerHeight);
  //console.log("hhdhdhd");

  //   context.beginPath();
  //   context.arc(x, y, radius, 0, Math.PI * 3, false);
  //   context.strokeStyle = "blue";
  //   context.fillStyle = "blue";
  //   //context.fill();
  //   context.lineWidth = 1;
  //   context.stroke();

  //call the draw mthd  here
  //circle.draw();

  //   if (x + radius > innerWidth || x - radius < 0) {
  //     dx = -dx;
  //   }
  //   if (y + radius > innerHeight || y - radius < 0) {
  //     dy = -dy;
  //   }
  //   x += dx;
  //   y += dy;

  //circle.update();

  //loop thru arrayCirlces to display circles
  for (let i = 0; i < circleArray.length; i++) {
    //console.log(circleArray[i].update());
    circleArray[i].update();
  }
}

animate();
