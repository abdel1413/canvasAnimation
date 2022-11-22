let canvas = document.querySelector("canvas");
let cx = canvas.getContext("2d");
let img = document.createElement("img");

let context = document.querySelector("#rotation").getContext("2d");
img.src = "./player.png";
let spriteW = 24,
  spriteH = 30;
img.addEventListener("load", () => {
  let cycle = 0;
  setInterval(() => {
    cx.clearRect(0, 0, spriteW, spriteH);
    cx.drawImage(
      img,
      spriteW * cycle,
      0,
      spriteW,
      spriteH,
      0,
      0,
      spriteW,
      spriteH
    );
    cycle = (cycle + 1) % 8;
  }, 120);
});

context.scale(3, 0.5);
context.beginPath();
context.arc(50, 50, 40, 0, 7);
context.lineWidth = 2;
context.stroke();
