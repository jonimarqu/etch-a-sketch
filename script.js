let gridSize = 20;

const container = document.querySelector(`.container`);

const grid = document.createElement(`div`);
container.appendChild(grid);

grid.style.display = `grid`;

const square = document.getElementsByClassName(`square`);

const newGrid = document.getElementById("newGrid");
const isRainbow = document.getElementById(`isRainbow`);

newGrid.addEventListener("click", function() {
    gridSize = prompt("Enter new grid size (150 max)", "64");
    while ( 
        gridSize <= 0 || 
        gridSize > 150 || 
        isNaN(gridSize) ) 
        {
        if (gridSize == null ) {break};
        gridSize = prompt(`Enter a valid new grid size. Between 1 and 120.`, `64`);
        };
    buildGrid(gridSize);
});

function buildGrid() {
    grid.style.width = `850px`;
    grid.style.height = `850px`;
    grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    grid.innerHTML = ``;
    for (let i = 1 ; i <= gridSize ** 2 ; i++) {

        const square = document.createElement(`div`);
        square.classList.add(`square`);
        square.addEventListener(`mouseover`, changeBg);
        square.addEventListener(`mousedown`, changeBg);
        grid.appendChild(square);
    };
};

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function changeBg(e) {
    e.preventDefault(); // To prevent from dragging

    if ( e.type === "mouseover" && !mouseDown ) return;
    if (isRainbow.value == `ON`) {
    toRainbow(e);
    } else {
    toBlack(e);
    };
};

function toBlack(e) {
        e.target.style.backgroundColor = `rgb(0,0,0)`;
};

function toRainbow(e) {
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    const rgb = `rgb(${r}, ${g}, ${b})`;
        e.target.style.backgroundColor = rgb;
};

isRainbow.onclick = () => {
    isRainbow.innerText = isRainbow.innerText == 'Activate Rainbow mode' ? 'Deactivate Rainbow mode' : 'Activate Rainbow mode';

    if(isRainbow.value == "ON") {
        isRainbow.value = "OFF";
    } else if (isRainbow.value == "OFF") {
        isRainbow.value = "ON";
    };
};

buildGrid(gridSize);