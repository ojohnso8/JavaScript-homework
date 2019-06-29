// from data.js
var tableData = data;
var tbody = d3.select("tbody");

function writeTable(data) {
  // First, clear out any existing data
  tbody.html("");

  //append data
  data.forEach((dataRow) => {
    var row = tbody.append("tr");
    Object.values(dataRow).forEach((val) => {
      var cell = row.append("td");
        cell.text(val);
      }
    );
  });
}

// write table
writeTable(tableData);