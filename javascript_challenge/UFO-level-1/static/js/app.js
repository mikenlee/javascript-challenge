// from data.js
var tableData = data;

// YOUR CODE HERE!

// Get a reference to the table body
var tbody = d3.select("tbody")

//Refactor to use Arrow Functions!
tableData.forEach((sighting) => {
    console.log(sighting);
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      console.log(value)
      var cell = row.append("td");
      cell.text(value);
    });
  });