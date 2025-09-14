const DEFAULT_GRID_DIMENSIONS = 16;
const etchASketch = document.querySelector("#etch-a-sketch");

function createEmptyGrid(dimensions) {
    for (let i = 0; i < dimensions; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        etchASketch.appendChild(row);

        for (let i = 0; i < dimensions; i++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.addEventListener("mouseenter", () => {
                cell.style.backgroundColor = "black";
                console.log("touched a div");
            });
            row.appendChild(cell);
        }
    }
}

createEmptyGrid(DEFAULT_GRID_DIMENSIONS);