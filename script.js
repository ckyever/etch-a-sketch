const GRID_DIMENSIONS = 4;
const etchASketch = document.querySelector("#etch-a-sketch");

for (let i = 0; i < GRID_DIMENSIONS; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    etchASketch.appendChild(row);

    for (let i = 0; i < GRID_DIMENSIONS; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        row.appendChild(cell);
    }
}