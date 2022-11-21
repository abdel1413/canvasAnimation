let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let cx = canvas.getContext("2d");
let img = document.createElement("img");
img.src = "hat.png";
img.addEventListener("load", () => {
  for (let x = 10; x < 200; x += 30) {
    cx.drawImage(img, x, 10);
  }
});
