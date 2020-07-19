var numbers=[3, 3,10,25,1,5, 2, 4, 9]; 

var sum=0;

var item;
var output="<table class='table  table-striped table-hover'><tr><th>No</th><th>Item</th></tr>";
for(var i=0;i<numbers.length;i++){
output+="<tr><td>"+(i+1)+"</td><td>"+numbers[i]+"</td></tr>";

}
output+="</table>";
document.getElementById("col1").innerHTML=output;
for(var i=0;i<numbers.length;i++){
    var sum=sum+(numbers[i]*numbers[i]);
    
    }
document.getElementById("result").innerHTML="<b>Sum Of Squares Of The Elements </b><h2>"+sum+"</h2>";