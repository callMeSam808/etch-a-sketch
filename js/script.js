const container = document.querySelector('#container');

function createGrid(number = 16) {
  for (y = 1; y <= number; y++) {
    let row = document.createElement('div');
    row.id = 'row';
    container.appendChild(row);
    for (x = 1; x <= number; x++) {
      let gridDiv = document.createElement('div');
      gridDiv.id = 'box';
      row.appendChild(gridDiv);
    }
  }
}

createGrid();