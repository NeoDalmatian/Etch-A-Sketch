const grid = document.querySelector(".grid");

for (let i = 0; i < 256; i++) {
  const pixel = document.createElement("div");
  pixel.classList.add("pixels");
  grid.appendChild(pixel);
}

const pixels = document.querySelectorAll(".pixels");

pixels.forEach((pixel) => {
  pixel.addEventListener("mousemove", (e) => {
      e.target.classList.add("hoverPixels");
  })
})