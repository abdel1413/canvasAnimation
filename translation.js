//create a function to flip the img
function flipHorizontally(contx, around) {
  contx.translate(around, 0); // move to the right
  contx.scale(-1, 1); // flip the position
  contx.translate(-around, 0);
  // cancel the first translation and then translate to the inital positon
}

let translation = document.querySelector("#translation").getContext("2d");
let image = document.createElement("img");
image.src = "./player.png";

let sW = 24,
  sH = 30;
image.addEventListener("load", () => {
  flipHorizontally(translation, 100 + sW / 2);
  translation.drawImage(image, 0, 0, sW, sH, 100, 0, sW, sH);
});
