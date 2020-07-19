function add(){
    var size=document.getElementById("txt1").value;
    var inputArray = [];
  

for(var i=0; i<size; i++) {
	
	
	inputArray[i] = prompt('Enter Element ' + (i+1));
}
    



var output="<h3>user entered array</h3><br><table class='table  table-striped table-hover'><tr><th>no</th><th>Array Item</th></tr>";
for(var i=0;i<size;i++){
output+="<tr><td>"+(i+1)+"</td><td>"+inputArray[i]+"</td></tr>";

}
output+="</table>";
document.getElementById("result").innerHTML=output;
var sorted=inputArray.sort();
var output2="<h3>sorted array</h3><br><table class='table  table-striped table-hover'><tr><th>no</th><th>Array Item</th></tr>";
for(var i=0; i<size; i++) {
    output2+="<tr><td>"+(i+1)+"</td><td>"+sorted[i]+"</td></tr>";

}
output2+="</table>";
document.getElementById("sorted").innerHTML=output2;
console.log(sorted);
}