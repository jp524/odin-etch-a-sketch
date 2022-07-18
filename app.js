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

function activateHover() {
  const squares = document.querySelectorAll(".square");
  squares.forEach(square => square.addEventListener("mouseover", () => {
    square.classList.add("hovering");
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