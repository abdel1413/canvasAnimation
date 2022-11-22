/**
 * When you call save, the current state is pushed onto the stack,
 * and when you call restore, the state on top of the stack is
 * taken off and used as the context’s current transformation
 */
let canvas = document.querySelector("canvas");
let cx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function branch(length, angle, scale) {
  cx.fillRect(0, 0, 1, length);
  if (length < 8) return;
  cx.save();
  cx.translate(0, length);
  cx.rotate(-angle);
  branch(length * scale, angle, scale);
  cx.rotate(2 * angle);
  branch(length * scale, angle, scale);
  cx.restore();
}
cx.translate(300, 0); //move tree 300 px along the x axis
branch(60, 0.5, 0.8);
