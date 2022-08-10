const grid = document.querySelector(".grid");
const canvas = document.querySelector(".canvas");
const rainbow = document.querySelector(".rainbow");
const black = document.querySelector(".black");
const grayscale = document.querySelector(".grayscale");

let canvasSize = 256;
let rowSize = 16;
let grayscaleNumber;
let rainbowCheck = false;
let blackCheck = true;
let grayscaleCheck = false;

rainbow.addEventListener("click", () => {
  blackCheck = false;
  grayscaleCheck = false;
  rainbowCheck = true;
})

black.addEventListener("click", () => {
  rainbowCheck = false;
  grayscaleCheck = false;
  blackCheck = true;
})

grayscale.addEventListener("click", () => {
  blackCheck = false;
  rainbowCheck = false;
  grayscaleCheck = true;
  grayscaleNumber = 255;
})

canvas.addEventListener("click", () => {
  rowSize = parseInt(prompt("Set canvas size (0-100)"));
  if (rowSize < 0 || rowSize > 100) return;
  drawNewCanvas();
})

function drawNewCanvas () {
  grid.setAttribute("style", `grid-template-columns: repeat(${rowSize}, 1fr);`)
  while (grid.firstChild) grid.firstChild.remove();
  canvasSize = rowSize * rowSize;
  drawCanvas();
}

function drawCanvas () {
  for (let i = 0; i < canvasSize; i++) {
    const pixel = document.createElement("div");
    pixel.addEventListener("mouseenter", (e) => {
      if (rainbowCheck) {
        e.target.setAttribute("style", `background: 
            rgb(${rainbowMaker()}, ${rainbowMaker()}, ${rainbowMaker()});`);
      } else if (blackCheck) {
        e.target.setAttribute("style", "background: black;")
      } else if (grayscaleCheck){
        e.target.setAttribute("style", `background: 
            rgb(${grayscaleMaker()}, ${grayscaleMaker()}, ${grayscaleMaker()})`)
      }
    })
    grid.appendChild(pixel);
  }
}

function rainbowMaker () {
  return ~~(Math.random() * 255);
}

function grayscaleMaker () {
  return grayscaleNumber -= 1;
}

drawCanvas();