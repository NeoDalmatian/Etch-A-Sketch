const grid = document.querySelector(".grid");
const canvas = document.querySelector(".canvas");
const rainbow = document.querySelector(".rainbow");
const black = document.querySelector(".black");
const grayscale = document.querySelector(".grayscale");

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

//Prompt for resizing canvas (0-100)
canvas.addEventListener("click", () => {
  newRowSize = parseInt(prompt("Set canvas size (0-100)"));
  if (newRowSize < 0 || newRowSize > 100) return;
  drawCanvas(newRowSize);
})

//Function for making new css grid children and removing old ones
function drawNewCanvas (size) {
  grid.setAttribute("style", `grid-template-columns: repeat(${size}, 1fr);`)
  while (grid.firstChild) grid.firstChild.remove();
}

//Function for making initial canvas (16*16) and any other custom sized canvases
function drawCanvas (rowSize = 16) {
  canvasSize = rowSize * rowSize;
  drawNewCanvas(rowSize);
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