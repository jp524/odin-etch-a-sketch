const container = document.querySelector(".container");

// --- Create the grid --- 
function createSquare() {
  const square = document.createElement("div");
  square.classList.add("square");
  container.appendChild(square);
}

// --- Hover effect ---
const squares = document.querySelectorAll(".square");
squares.forEach(square => square.addEventListener("mouseover", () => {
  square.classList.add("hovering");
}))

// --- Ask user input to set grid size ---
const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  const squares = document.querySelectorAll(".square");
  if (squares) {
    squares.forEach(square => container.removeChild(square))
  };

  let gridSize = prompt("Enter the number of square per sides to create the grid:");

  while (gridSize <= 1 && gridSize > 100) {
    alert(`${gridSize} is not a valid input. Try to enter a number between 2 and 100.`)
    gridSize = prompt("Enter the number of square per sides to create the grid:");
  };

  for (let i = 0; i < gridSize * gridSize; i++) {
    createSquare();
  };
})