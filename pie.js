/**
 * To draw a pie chart, we draw a number of pie slices,
 *  each made up of an arc and a pair of lines to the center of
 * that arc. We can compute the angle taken up by each arc by dividing
 * a full circle (2π) by the total number of responses and then
 * multiplying that number (the angle per response) by the number of
 * people who picked a given choice
 */

let results = [
  { name: "Satisfied", count: 1043, color: "lightblue" },
  { name: "Neutral", count: 563, color: "lightgreen" },
  { name: "Unsatisfied", count: 510, color: "pink" },
  { name: "No comment", count: 175, color: "silver" },
];

let context = document.querySelector("canvas").getContext("2d");

let total = results.reduce((sum, { count }) => sum + count, 0);
console.log(total);

// Start at the top
let currentAngle = -0.5 * Math.PI;
console.log("current angel", currentAngle);
//loop thru results to get the slice of each angle
for (let result of results) {
  console.log("result", result);
  console.log("count", result.count);
  console.log("color", result.color);
  console.log("name", result.name);
  let sliceAngle = (result.count / total) * 2 * Math.PI;
  console.log("slice angle", sliceAngle);

  context.beginPath();
  context.arc(100, 100, 100, currentAngle, currentAngle + sliceAngle);
  currentAngle += sliceAngle;
  context.lineTo(100, 100);
  context.fillStyle = result.color;
  context.fill();
}

let cx = document.querySelector("#text").getContext("2d");
//specify the size, style, and font of the text with the font property
cx.font = "bold 20px Gorgia";
cx.fillStyle = "fushia";
let p = prompt("Enter a text here");
cx.fillText(p, 90, 50);
//cx.textBaseline = "bottom" or 'top' or 'middle';
//cx.textAlign = 'center' or 'end' or 'vertical'
