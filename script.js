function insert_Row() {
    let table = document.getElementById("sampleTable");

    // ✅ Ensure new row is added at the top
    let newRow = table.insertRow(0);  

    // Insert cells
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);

    // ✅ Ensure correct text is set
    cell1.innerText = "New Cell1";
    cell2.innerText = "New Cell2";
}
