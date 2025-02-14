function insert_Row() {
    const table = document.getElementById("sampleTable");
    const newRow = table.insertRow();

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);

    // ✅ Correcting the text
    cell1.innerText = "New Cell1"; // Fix typo (if it was "New Celll")
    cell2.innerText = "New Cell2";
}
