const container = document.querySelector(".container");

function createSquare(gridSize) {
  const containerWidth = container.offsetWidth;
  const squareDimensions = Math.floor((containerWidth - 1 * gridSize) / gridSize) + "px";

  const square = document.createElement("div");
  square.classList.add("square");
  square.style.width = squareDimensions;
  square.style.height = squareDimensions;
  container.appendChild(square);
}

function randomRGB(seed) {
  const r = Math.round(Math.random() * seed);
  const g = Math.round(Math.random() * seed);
  const b = Math.round(Math.random() * seed);
  return `rgb(${r}, ${g}, ${b})`;
}

function activateHover() {
  const squares = document.querySelectorAll(".square");
  let seed = 255;
  squares.forEach(square => square.addEventListener("mouseover", () => {
    square.style.backgroundColor = randomRGB(seed);
    if (seed > 0) {
      seed -= 25.5;
    }
  }))
}

function createGrid() {
  const squares = document.querySelectorAll(".square");
  if (squares) {
    squares.forEach(square => container.removeChild(square))
  };

  let gridSize = parseInt(prompt("Enter the number of square per sides to create the grid:"), 10);
  while (gridSize < 1 || gridSize > 100 || isNaN(gridSize)) {
    alert(`${gridSize} is not a valid input. Try to enter a number between 1 and 100.`)
    gridSize = prompt("Enter the number of square per sides to create the grid:");
  };

  for (let i = 0; i < gridSize * gridSize; i++) {
    createSquare(gridSize);
  };
  activateHover();
}

const btn = document.querySelector("button");
btn.addEventListener("click", createGrid);