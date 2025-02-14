function insert_Row() {
    //Write your code here
	//access table first 
	//first create new row using insertRow
	//create new cell using insertcell
	//give innerText new cell

    let table = document.getElementById("sampleTable");

    let newRow = table.insertRow();

    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);

    cell1.innerText = "Row1 Cell1";
    cell2.innerText = "Row2 Cell2";
  
}
