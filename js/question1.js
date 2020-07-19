function add(){
    var size=document.getElementById("txt1").value;
    var inputArray = [];
  

for(var i=0; i<size; i++) {
	
	
	inputArray[i] = prompt('Enter Element ' + (i+1));
}
    var num=inputArray[0];
    var flag=0;

    for(var i=2 ; i < num/2 ; i++) {
        if(num%i == 0) {
          document.getElementById("prime").innerHTML=num+" is not a Prime Number";
          console.log(" not prime");
          flag = 1;
           break;
        }
     }
     if(flag == 0) {
        document.getElementById("prime").innerHTML=num+" is a Prime Number";
     }


console.log(inputArray);

var output="<table class='table  table-striped table-hover'><tr><th>no</th><th>Array Item</th></tr>";
for(var i=0;i<size;i++){
output+="<tr><td>"+(i+1)+"</td><td>"+inputArray[i]+"</td></tr>";

}
output+="</table>";
document.getElementById("result").innerHTML=output;
}