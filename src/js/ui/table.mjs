// table html
function createTable(tableData) {
  // Create table element
  const table = document.createElement("table");
  table.classList.add("table", "table-striped");

  // Create thead element
  var thead = document.createElement("thead");
  thead.classList.add("table-light");

  // Create header row
  var headerRow = document.createElement("tr");

  // Define headers
  var headers = ["#", "Username", "Bid at (NOK)", "Date"];

  // Append headers to header row
  headers.forEach(function (headerText) {
    var th = document.createElement("th");
    th.scope = "col";
    th.textContent = headerText;
    headerRow.appendChild(th);
  });

  // Append header row to thead
  thead.appendChild(headerRow);

  // Append thead to table
  table.appendChild(thead);

  // Create tbody element
  var tbody = document.createElement("tbody");

  // Loop through data and create rows
  tableData.forEach(function (rowData) {
    var row = document.createElement("tr");

    // Loop through row data and create cells
    Object.values(rowData).forEach(function (cellData, index) {
      var cell = document.createElement(index === 0 ? "th" : "td");
      cell.scope = index === 0 ? "row" : "col";
      cell.textContent = cellData;
      row.appendChild(cell);
    });

    // Append row to tbody
    tbody.appendChild(row);
  });

  // Append tbody to table
  table.appendChild(tbody);

  // Append table to the document body
  document.body.appendChild(table);
}

document.addEventListener("DOMContentLoaded", function () {
  // Data for the table
  var tableData = [
    { id: 1, username: "Mark", bid: 100, date: "date" },
    { id: 2, username: "Jacob", bid: 80, date: "date" },
    { id: 3, username: "Larry the Bird", bid: 10, date: "date" },
  ];

  // Call the function with the data
  createTable(tableData);
});
