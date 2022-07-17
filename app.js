const container = document.querySelector(".container");

// --- Create the grid --- 
function createSquare() {
  const square = document.createElement("div");
  square.classList.add("square");
  container.appendChild(square);
}

for (let i = 0; i < 16 * 16; i++) {
  createSquare();
};

// --- Hover effect ---
const squares = document.querySelectorAll(".square");
squares.forEach(square => square.addEventListener("mouseover", () => {
  square.classList.add("hovering");
}))