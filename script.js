function insert_Row() {

 let table = document.getElementById("sampleTable");
let newRow = table.insertRow(0);

let celli = newRow.insertCell(0);

let cell2 = newRow.insertCell(1);

celli.textContent = "New Celll";

cell2.textContent = "New Cell2";

}