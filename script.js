let gridSize = prompt(`Enter grid size:`, `4`);

const container = document.querySelector(`div`);

const grid = document.createElement(`div`);
container.appendChild(grid);

grid.style.display = `grid`;
grid.style.width = `500px`;
grid.style.height = `500px`;
grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

console.log(container);

for (let i = 1 ; i <= gridSize ** 2 ; i++) {

    const square = document.createElement(`div`);
    square.classList.add(`square`);
    square.addEventListener(`mousedown`, changeBg);
    square.addEventListener(`mousedown`, changeBg);
    grid.appendChild(square);
};

const square = document.getElementsByClassName(`square`);
