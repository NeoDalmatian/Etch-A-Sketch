const grid = document.querySelector(".grid");
const button = document.querySelector("button");

let canvasSize = 256;
let n = 16;

button.addEventListener("click", () => {
  n = parseInt(prompt("Set canvas size (16-100)"));
  grid.setAttribute("style", `grid-template-columns: repeat(${n}, 1fr);`)
  canvasSize = (n * n);
  while (grid.firstChild) {grid.firstChild.remove()};
  drawCanvas();
})

function drawCanvas() {
  for (let i = 0; i < canvasSize; i++) {
    const pixel = document.createElement("div");
    pixel.addEventListener("mousemove", (e) => {
      e.target.setAttribute("style", "background: black;")
    })
    grid.appendChild(pixel);
  }
}

drawCanvas();