// from data.js
var tableData = data;

// Select the button
var button = d3.select("#filter-btn");

// Create event handlers 
button.on("click", runEnter);

function runEnter() {
  // Select the input element and get the raw HTML node
  var inputElement_datetime = d3.select("#datetime-form-input");
  // Get the value property of the input element
  var inputValue_datetime = inputElement_datetime.property("value");
  
  // city input
  var inputValue_city = d3.select("#city-form-input").property("value").toLowerCase();
  // state input
  var inputValue_state = d3.select("#state-form-input").property("value").toLowerCase();
  // country input
  var inputValue_country = d3.select("#country-form-input").property("value").toLowerCase();
  // shape input
  var inputValue_shape = d3.select("#shape-form-input").property("value").toLowerCase();

  
  // Use the form inputs to filter the data; check for falsy values
  var filteredData = data

  if (inputValue_datetime) {
  filteredData = filteredData.filter(data => data.datetime === inputValue_datetime)
  }
  if (inputValue_city) {
  filteredData = filteredData.filter(data => data.city === inputValue_city)
  }
  if (inputValue_state) {
    filteredData = filteredData.filter(data => data.state === inputValue_state)
  }
  if (inputValue_country) {
  filteredData = filteredData.filter(data => data.country === inputValue_country)
  }
  if (inputValue_shape) {
    filteredData = filteredData.filter(data => data.shape === inputValue_shape)
  }
  
  console.log(filteredData);
  
  // Get a reference to the table body
  var tbody = d3.select("tbody");
  tbody.html("");

  // Create table for filtered data
  filteredData.forEach((sighting) => {
    console.log(sighting);
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      console.log(value)
      var cell = row.append("td");
      cell.text(value);
    });
  });

}