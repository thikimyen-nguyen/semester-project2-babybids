// table html
 export function createTable(tableData) {
  // table header
  const table = document.createElement("table");
  table.classList.add("table", "table-striped");

  var thead = document.createElement("thead");
  thead.classList.add("table-light");

  const headerRow = document.createElement("tr");

  const headers = ["#", "Username", "Bid at (NOK)", "Date"];

  headers.forEach(function (headerText) {
    const th = document.createElement("th");
    th.scope = "col";
    th.textContent = headerText;
    headerRow.append(th);
  });

  thead.append(headerRow);
  table.append(thead);

  // table body
  const tbody = document.createElement("tbody");

  
  tableData.forEach(function (rowData, index) {
    const row = document.createElement("tr");

    // Add the first column with the number order
    const orderCell = document.createElement('th');
    orderCell.scope = 'row';
    orderCell.textContent = index + 1; 
    row.append(orderCell);

    // Loop through array and create cells
    Object.values(rowData).forEach(function (cellData, index) {
      const cell = document.createElement(index === 0 ? "th" : "td");
      cell.textContent = cellData;
      row.append(cell);
    });

    // Append row to tbody
    tbody.append(row);
  });

 
  table.append(tbody);

  return table
}

