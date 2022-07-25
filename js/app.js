const grid = document.querySelector(".grid");

for (let i = 0; i < 256; i++) {
  const pixel = document.createElement("div");
  pixel.classList.add("pixels");
  grid.appendChild(pixel);
}

