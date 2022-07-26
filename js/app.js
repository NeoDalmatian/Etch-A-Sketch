const grid = document.querySelector(".grid");
const button = document.querySelector(".canvas");
const rainbow = document.querySelector(".rainbow");

let canvasSize = 256;
let n = 16;
let rainbowVar = false;

rainbow.addEventListener("click", () => {
  rainbowVar = true;
})

function rainbowMaker () {
  return Math.floor(Math.random() * 255);
}

button.addEventListener("click", () => {
  n = parseInt(prompt("Set canvas size (1-100)"));
  if (n > 100) return;
  grid.setAttribute("style", `grid-template-columns: repeat(${n}, 1fr);`)
  canvasSize = n * n;
  while (grid.firstChild) {grid.firstChild.remove()};
  drawCanvas();
})

function drawCanvas() {
  for (let i = 0; i < canvasSize; i++) {
    const pixel = document.createElement("div");
    pixel.addEventListener("mouseenter", (e) => {
      if (rainbowVar) {
        e.target.setAttribute("style", `background: rgb(${rainbowMaker()}, ${rainbowMaker()}, ${rainbowMaker()});`);
      } else {e.target.setAttribute("style", "background: black;")}
    })
    grid.appendChild(pixel);
  }
}

drawCanvas();