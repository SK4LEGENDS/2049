# 🧠 2049 – A Modern Twist on the Classic 2048 Game

**2049** is a sleek and interactive web-based puzzle game inspired by the legendary 2048, but with a shiny upgrade and a playful twist!  
Swipe, merge, and strategize your way to the elusive **2049 tile** (yes, just one step beyond 😏) — and bask in particle explosion glory when you win! 🎇

---

## 🎮 Gameplay Overview

### 🎯 Objective  
Merge matching number tiles until you reach the **2049** tile.

### 🧩 How to Play

- 🟢 Start on a **4x4 grid** with two tiles (2 or 4).  
- 🔄 Swipe in any direction:  
  ⬆️ Up &nbsp;&nbsp;&nbsp;&nbsp; ⬇️ Down &nbsp;&nbsp;&nbsp;&nbsp; ⬅️ Left &nbsp;&nbsp;&nbsp;&nbsp; ➡️ Right  
- ➕ When two tiles of the same value touch:  
  - They merge into one.  
  - Their value doubles.  
- 🧠 Plan your moves carefully.  
- 💀 If no moves remain → **Game Over**

---

## ✨ Features

- 🔄 Smooth tile merging with seamless updates  
- ⌨️ Keyboard controls using arrow keys  
- ➕ Auto-generation of a new tile after every move  
- 📢 Win & Game Over status messages  
- 🎆 tsParticles integration for explosive **2049** celebration  
- 🔁 Restart button to keep the game going  
- 🧼 Clean, modular, and readable JavaScript code  

---

## 🛠️ Tech Stack

| Technology     | Role                                      |
|----------------|-------------------------------------------|
| `HTML5`        | Structure of the game grid and layout     |
| `CSS3`         | Styling, animation, and grid aesthetics   |
| `Vanilla JS`   | Core logic and real-time interactivity    |
| `tsParticles`  | Special visual effects on victory         |

---

## ⚙️ How It Works

### 🧱 Grid Initialization

- 🟦 A 4x4 matrix is created and filled with 0s  
- 🎲 Two random tiles (2 or 4) are placed in empty cells  

### 🕹️ Movement Logic

- 🔁 On arrow key press:  
  - 🎯 All tiles shift toward the direction  
  - 🔗 Same tiles merge and double in value  
  - ✨ A new tile (2 or 4) appears in a random empty cell  

### 🚦 Game Status

- 🏆 **You Win**: When a 2049 tile appears → 🎉 Celebration!  
- ❌ **Game Over**: No more moves or empty spaces → 💀

### 💥 Particle Effect

- 🌈 Upon reaching 2049, a vibrant tsParticles explosion animates at the center.

---

## 🧪 Function Breakdown

| Function           | Purpose                                                                 |
|--------------------|-------------------------------------------------------------------------|
| `createGrid()`     | Initializes a 2D array (4x4) to represent the game board               |
| `updateGrid()`     | Renders updated tile values on the DOM                                |
| `addNewTile()`     | Randomly places a new 2 or 4 in an empty spot                          |
| `handleKeyPress()` | Detects arrow keys and handles directional input                       |
| `moveLeft()`       | Handles merging logic for left movement                                |
| `moveRight()`      | Handles merging logic for right movement                               |
| `moveUp()`         | Handles merging logic for upward movement                              |
| `moveDown()`       | Handles merging logic for downward movement                            |
| `compressAndMerge()`| Removes empty spaces, merges tiles, and refills the row              |
| `checkGameStatus()`| Evaluates if the game is won or lost                                   |
| `spawnParticles(x, y)` | Emits colorful particle effects using tsParticles              |
| `restartGame()`    | Fully resets the grid and starts a new game                            |

---

## 📸 Demo

Here’s a sneak peek of the game in action:  
*(Add your GIF or screenshot like below)*

![2049 Gameplay Demo](demo/2049-pictures-demo.png)

---

## 🚀 Ready to Play?

Clone this repo, open the HTML file in your browser, and **start merging** your way to 2049 glory! 😎  
Let the puzzle party begin 🎉
