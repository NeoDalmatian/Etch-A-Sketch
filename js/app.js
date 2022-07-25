const grid = document.querySelector(".grid");

for (let i = 0; i < 256; i++) {
  const pixel = document.createElement("div");
  pixel.addEventListener("mousemove", (e) => {
    e.target.setAttribute("style", "background: black;")
  })
  grid.appendChild(pixel);
}