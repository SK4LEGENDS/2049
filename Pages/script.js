const gridSize = 4;
let grid = [];

window.onload = () => {
  createGrid();
  addNewTile();
  addNewTile();
  updateGrid();
  document.addEventListener("keydown", handleKeyPress);
};

function createGrid() {
  grid = Array(gridSize).fill().map(() => Array(gridSize).fill(0));
}

function updateGrid() {
  const gridElement = document.getElementById("grid");
  gridElement.innerHTML = "";

  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      const value = grid[row][col];
      const tile = document.createElement("div");
      tile.className = "tile";
      if (value > 0) {
        tile.textContent = value;
        tile.classList.add(`tile-${value}`);
      }
      gridElement.appendChild(tile);
    }
  }
}

function addNewTile() {
  let emptyCells = [];
  for (let r = 0; r < gridSize; r++) {
    for (let c = 0; c < gridSize; c++) {
      if (grid[r][c] === 0) emptyCells.push({ r, c });
    }
  }
  if (emptyCells.length === 0) return;
  const { r, c } = emptyCells[Math.floor(Math.random() * emptyCells.length)];
  grid[r][c] = Math.random() < 0.9 ? 2 : 4;
}

function handleKeyPress(e) {
  let moved = false;
  switch (e.key) {
    case "ArrowUp":
      moved = moveUp();
      break;
    case "ArrowDown":
      moved = moveDown();
      break;
    case "ArrowLeft":
      moved = moveLeft();
      break;
    case "ArrowRight":
      moved = moveRight();
      break;
  }

  if (moved) {
    addNewTile();
    updateGrid();
    checkGameStatus();
  }
}

function compressAndMerge(row) {
  let newRow = row.filter(val => val !== 0);
  for (let i = 0; i < newRow.length - 1; i++) {
    if (newRow[i] === newRow[i + 1]) {
      newRow[i] *= 2;
      newRow[i + 1] = 0;
    }
  }
  newRow = newRow.filter(val => val !== 0);
  while (newRow.length < gridSize) newRow.push(0);
  return newRow;
}

function moveLeft() {
  let moved = false;
  for (let r = 0; r < gridSize; r++) {
    const newRow = compressAndMerge(grid[r]);
    if (!arraysEqual(grid[r], newRow)) {
      grid[r] = newRow;
      moved = true;
    }
  }
  return moved;
}

function moveRight() {
  let moved = false;
  for (let r = 0; r < gridSize; r++) {
    const reversed = [...grid[r]].reverse();
    const newRow = compressAndMerge(reversed).reverse();
    if (!arraysEqual(grid[r], newRow)) {
      grid[r] = newRow;
      moved = true;
    }
  }
  return moved;
}

function moveUp() {
  let moved = false;
  for (let c = 0; c < gridSize; c++) {
    let column = [];
    for (let r = 0; r < gridSize; r++) column.push(grid[r][c]);
    const newCol = compressAndMerge(column);
    for (let r = 0; r < gridSize; r++) {
      if (grid[r][c] !== newCol[r]) {
        grid[r][c] = newCol[r];
        moved = true;
      }
    }
  }
  return moved;
}

function moveDown() {
  let moved = false;
  for (let c = 0; c < gridSize; c++) {
    let column = [];
    for (let r = 0; r < gridSize; r++) column.push(grid[r][c]);
    const newCol = compressAndMerge(column.reverse()).reverse();
    for (let r = 0; r < gridSize; r++) {
      if (grid[r][c] !== newCol[r]) {
        grid[r][c] = newCol[r];
        moved = true;
      }
    }
  }
  return moved;
}

function arraysEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

function checkGameStatus() {
  for (let row of grid) {
    if (row.includes(2049)) {
      document.getElementById("status").textContent = "🎉 You win!";
      document.removeEventListener("keydown", handleKeyPress);
      return;
    }
  }

  if (!canMove()) {
    document.getElementById("status").textContent = "💀 Game Over!";
    document.removeEventListener("keydown", handleKeyPress);
  }
}

function canMove() {
  for (let r = 0; r < gridSize; r++) {
    for (let c = 0; c < gridSize; c++) {
      if (grid[r][c] === 0) return true;
      if (c < gridSize - 1 && grid[r][c] === grid[r][c + 1]) return true;
      if (r < gridSize - 1 && grid[r][c] === grid[r + 1][c]) return true;
    }
  }
  return false;
}

function restartGame() {
  createGrid();
  addNewTile();
  addNewTile();
  updateGrid();
  document.getElementById("status").textContent = "";
  document.addEventListener("keydown", handleKeyPress);
}

function spawnParticles(x, y) {
  tsParticles.load("tsparticles", {
    fullScreen: { enable: false },
    particles: {
      number: { value: 0 },
      color: { value: ["#0ff", "#0f0", "#f0f"] },
      shape: { type: "circle" },
      size: { value: 5 },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        outModes: "destroy"
      },
      opacity: {
        value: 1,
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 0,
          sync: false
        }
      }
    },
    emitters: {
      direction: "none",
      life: {
        count: 1,
        duration: 0.2,
      },
      rate: {
        delay: 0,
        quantity: 30
      },
      position: {
        x: x / window.innerWidth * 100,
        y: y / window.innerHeight * 100
      }
    }
  });
}

