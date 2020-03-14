class CreateTable {
  constructor(cellIndex, rowIndex, size) {
    this.cellIndex = cellIndex;
    this.rowIndex = rowIndex;
    this.size = size;
  }

  render() {
    const root = document.querySelector('#app');
    const tableEl = document.createElement('table');
    root.append(tableEl);

    for (let i = 0; i < this.rowIndex; i += 1) {
      const row = tableEl.insertRow();
      for (let j = 0; j < this.cellIndex; j += 1) {
        const cell = row.insertCell();
        cell.style = `width: ${this.size}px; height: ${this.size}px`;
        cell.tabIndex = 1;
      }
    }

    tableEl.addEventListener('click', (evt) => {
      const cell = evt.target.closest('td');
      const row = evt.target.closest('tr');

      if (cell && row) {
        console.log(cell.cellIndex, row.rowIndex);
      }
    });
  }
}

const table = new CreateTable(4, 4, 42);
table.render();
