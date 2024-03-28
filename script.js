"use strict";

const grid = document.querySelector(".paint__grid");
const clear = document.querySelector(".paint__clear");
const colorInput = document.querySelector(".paint__color");
let size = 45;
let gridCells = [];
let color;

class Cell {
  constructor() {
    this.elem = document.createElement("div");
  }
}

window.addEventListener("load", (e) => {
  for (let i = 0; i < size; i++) {
    let cellRow = [];
    for (let j = 0; j < size; j++) {
      const cell = new Cell().elem;
      cell.classList.add("paint__cell");
      grid.insertAdjacentElement("beforeend", cell);
      cellRow.push(cell);
    }
    gridCells.push(cellRow);
  }
});

grid.addEventListener("mousedown", (e) => {
  color = colorInput.value;
  window.addEventListener("mousemove", function paint(e) {
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        if (e.target == gridCells[i][j]) {
          gridCells[i][j].style.backgroundColor = `${color}`;
        }
      }
    }
    window.addEventListener("mouseup", (e) => {
      this.window.removeEventListener("mousemove", paint);
    });
  });
});

clear.addEventListener("mousedown", (e) => {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      gridCells[i][j].style.backgroundColor = `#eee`;
    }
  }
});
