  const grid = document.getElementById("grid");
  let gridSize = 16;

  const setupGrid = () => {
    for (let i = 0; i < gridSize * gridSize; i++) {
      const gridElement = document.createElement("div");
      gridElement.classList.add("grid-element");
      grid.appendChild(gridElement);
    }
    updateGridSize();
  
    document.querySelectorAll('.grid-element').forEach(element => {
      element.addEventListener('mouseenter', changeBackgroundColor);
    });
  };

const updateGridSize = () => {
  const gridStyle = getComputedStyle(grid);
  const gridWidth = parseInt(gridStyle.width);
  const gridHeight = parseInt(gridStyle.height);
  const gridElementSize = Math.min(gridWidth / gridSize, gridHeight / gridSize);

  document.querySelectorAll('.grid-element').forEach(element => {
    element.style.width = `${gridElementSize}px`;
    element.style.height = `${gridElementSize}px`;
  });
};

const changeBackgroundColor = (event) => {
  let coloredGrid = event.target;
  coloredGrid.style.backgroundColor = 'black';
};

window.changeGridSize = () => {
  const newSize = parseInt(document.getElementById("gridSizeInput").value);
  if (!isNaN(newSize) && newSize > 0) {
    gridSize = newSize;
    grid.innerHTML = '';
    setupGrid();
  } else {
    alert('Please enter a valid grid size.');
  }
};

setupGrid();

