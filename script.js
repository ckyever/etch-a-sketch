const DEFAULT_GRID_DIMENSIONS = 16;
const MAX_GRID_DIMENSIONS = 100;
const INITIAL_OPACITY_RANGE = 0.4;
const OPACITY_INCREMENT = 0.1;

const etchASketch = document.querySelector("#etch-a-sketch");

function createEmptyGrid(dimensions) {
    console.log("creating grid...");
    for (let i = 0; i < dimensions; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        etchASketch.appendChild(row);

        for (let i = 0; i < dimensions; i++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.style.backgroundColor = "black";
            cell.style.opacity = "0";
            cell.addEventListener("mouseenter", () => {
                if (cell.style.opacity === "0") {
                    cell.style.opacity = Math.random() * INITIAL_OPACITY_RANGE;
                }
                cell.style.opacity = Number(cell.style.opacity) + OPACITY_INCREMENT;
            });
            row.appendChild(cell);
        }
    }
}

createEmptyGrid(DEFAULT_GRID_DIMENSIONS);

const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", () => {
    while(true) {
        const newDimensions = prompt("How many squares per side?");
        if (!Number.isInteger(Number(newDimensions))) {
            alert("Please enter a whole number");
            continue;
        }
        if (newDimensions > MAX_GRID_DIMENSIONS) {
            alert("Please enter a number smaller than 100");
            continue;
        }
        etchASketch.innerHTML = "";
        createEmptyGrid(newDimensions);
        break;
    }
});
