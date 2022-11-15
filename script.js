let gridSize = 20;

const container = document.querySelector(`.container`);

const grid = document.createElement(`div`);
container.appendChild(grid);

grid.style.display = `grid`;

const square = document.getElementsByClassName(`square`);

const newGrid = document.getElementById("newGrid");
const isRainbow = document.getElementById(`isRainbow`);

newGrid.addEventListener("click", function() {
    gridSize = prompt("Enter new grid size (120 max)", "64");
    while ( 
        gridSize <= 0 || 
        gridSize > 120 || 
        isNaN(gridSize) ) 
        {
        if (gridSize == null ) {break};
        gridSize = prompt(`Enter a valid new grid size. Between 1 and 120.`, `64`);
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
    //    square.addEventListener(`mousedown`, changeBg);
        square.addEventListener(`mouseover`, changeBg);
        grid.appendChild(square);
    };
};

function changeBg(e) {
    if (isRainbow.value == `ON` ) {
        toRainbow(e);
    } else {
        toBlack(e);
    };
};

function toBlack(e) {
    if ( e.type == `mouseover`) {
        e.target.style.backgroundColor = `rgb(0,0,0)`;
    };
};

function toRainbow(e) {
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    const rgb = `rgb(${r}, ${g}, ${b})`;
    if ( e.type == `mouseover`) {
        e.target.style.backgroundColor = rgb;
    };
};

isRainbow.onclick = () => {
    if(isRainbow.value=="ON") {
        isRainbow.value="OFF";
    } else if (isRainbow.value=="OFF") {
        isRainbow.value="ON";
    };
};

buildGrid(gridSize);