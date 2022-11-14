let gridSize = 20;

const container = document.querySelector(`.container`);

const grid = document.createElement(`div`);
container.appendChild(grid);

grid.style.display = `grid`;

const square = document.getElementsByClassName(`square`);

function changeBg(e) {
    if ( e.type == `mouseover`) {
        e.target.style.backgroundColor = `#333333`;
    };
};

const newGrid = document.getElementById("newGrid");
newGrid.addEventListener("click", function() {
    gridSize = prompt("Enter new grid size (120 max)", "64");
    while ( 
        gridSize <= 0 || 
        gridSize > 120 || 
        gridSize == !Number ) {
    gridSize = prompt(`Enter a valid new grid size. Between 0 and 120.`, `64`);
    if (gridSize == null ) {break};
    };
    buildGrid(gridSize);

});

function buildGrid() {
    grid.style.width = `800px`;
    grid.style.height = `800px`;
    grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    grid.innerHTML = ``;
    for (let i = 1 ; i <= gridSize ** 2 ; i++) {

        const square = document.createElement(`div`);
        square.classList.add(`square`);
        square.addEventListener(`mouseover`, changeBg);
    //    square.addEventListener(`mousedown`, changeBg);
        grid.appendChild(square);
    };
};

buildGrid(gridSize);