
group = ["Sujatha, Peter <br> and Sid", "   Ania and <br> Krzys   "];

var data2 = [];
window.addEventListener("load", function(){

    const xhr = new XMLHttpRequest();

    xhr.open("GET", "myData.txt", true);
    xhr.onload = function() {
    if(this.status == 200) {
        var text =  this.responseText;
        console.log("text = " + text);
        console.log(typeof text);
        data2 = JSON.parse(text);
        console.log("data2 = " + data2);
        console.log(typeof data2);
        console.log(data2[0]);
        function4(data2);
        }
    }
    xhr.send();



function function4(data2){
  // DRAW HTML TABLE
table = document.createElement("table"),
table.setAttribute("ID", "tableID")
row = table.insertRow();
cell = row.insertCell();
cell.innerHTML = "<b>Item Name</b>";
for (var i of group) {
   var cell = row.insertCell();
   cell.innerHTML = "<b>"+i+"</b>";
}

console.log(data2);
console.log(data2.length);
console.log(data2);
for (var i of data2) {
    console.log(i);
    if (data2.indexOf(i) % 3 == 0) {
        row = table.insertRow();
        cell = row.insertCell();
        cell.innerHTML = i;
     }
     else {
        var cell = row.insertCell();
        if (i != "") {
            cell.innerHTML = "&#10004;";
            cell.bgColor = 'a9fffd';
        }
        else {
            cell.innerHTML = "";
        }
    }
  }
  // ATTACH TABLE TO CONTAINER
  document.getElementById("container").appendChild(table);

  var table = document.getElementById("tableID");

  if (table != null) {
      for (var i = 1; i < table.rows.length; i++) {
          for (var j = 1; j < table.rows[i].cells.length; j++)
          table.rows[i].cells[j].onclick = function () {
              tableText(this);
          };
      }
  }

  function tableText(tableCell) {

      if (tableCell.innerHTML == "") {
          tableCell.bgColor = 'a9fffd';
          tableCell.innerHTML = "&#10004;"

      }
      else if (tableCell.innerHTML != "") {
         tableCell.innerHTML = "";
         tableCell.bgColor = "White";
      }
  //    console.log('row index is:' + tableCell.parentNode.rowIndex + ", " + tableCell.cellIndex);
  }
}
});
// if (data.length > 0) {

var row = "myTR1";
function myFunction(){
    //players = [];
    var name = document.getElementById("myText").value
    if (name != ""){
    var i;
    for (i = 0; i<group.length+1; i++) {
        var x = document.createElement("TR");
        x.setAttribute("id", row);
        console.log(document.getElementById("tableID"))
        document.getElementById("tableID").appendChild(x);
        var y = document.createElement("TD");
        y.width = "30px"
        y.height = "30px"
        if (i == 0) {
            var t = document.createTextNode(name);
        }
        else {
            var t = document.createTextNode("");
        }
    y.appendChild(t);
    document.getElementById(row).appendChild(y);
    document.getElementById("myText").value = "";
    }
    row += 1;

    var table = document.getElementById("tableID");

    if (table != null) {
        for (var i = 1; i < table.rows.length; i++) {
            for (var j = 1; j < table.rows[i].cells.length; j++)
            table.rows[i].cells[j].onclick = function () {
                tableText(this);
            };
        }
    }

    function tableText(tableCell) {

        if (tableCell.innerHTML == "") {
            tableCell.bgColor = 'a9fffd';
            tableCell.innerHTML = "&#10004;"

        }
        else if (tableCell.innerHTML != "") {
           tableCell.innerHTML = "";
           tableCell.bgColor = "White";
        }
    //    console.log('row index is:' + tableCell.parentNode.rowIndex + ", " + tableCell.cellIndex);
    }


  }
  else {
      alert("There is no item");
  }

    //console.log(table.getElementByTagName("tr"));
}
function myFunction2(){
    data = [];

    var table = document.getElementById("tableID");
    if (table != null) {
        for (var i = 1; i < table.rows.length; i++) {
            for (var j = 0; j < table.rows[i].cells.length; j++)
                data.push(table.rows[i].cells[j].innerHTML);

                //console.log(x);
            };
        }
    console.log(data);

    const jsonString = JSON.stringify(data);
    console.log(jsonString);
    const xhr = new XMLHttpRequest();
	xhr.open("POST", "receive.php");
	xhr.setRequestHeader("Content-Type",  "application/json");
	xhr.send(jsonString);

    }
