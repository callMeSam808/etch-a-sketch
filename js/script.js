function createGrid(number = 16) {
  const container = document.querySelector('#container');
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
  const boxes = document.querySelectorAll('#box');
  for (const box of boxes) {
    box.addEventListener('mouseover', function(e) {
    e.target.classList.add('hover');
  });
  }
}

createGrid();

const button = document.querySelector('#reset');
button.addEventListener('click', resetSketch);

function resetSketch() {
  const body = document.querySelector('body');
  const container = document.querySelector('#container');
  container.remove();
  let newContainer = document.createElement('div');
  newContainer.id = 'container';
  body.insertBefore(newContainer, body.lastChild);
  let number = prompt("How big would you like your grid? (Max value is 100)");
  if (!isNaN(number) && number > 0 && number < 101) {
    createGrid(number);
  } else {
    number = prompt("Please enter a valid number (1-100)");
  }
}