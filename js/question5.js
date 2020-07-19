var number=[90,24,30,49,50,60,72,80,99,11,22,33,44,55,66,];
var output="<table class='table  table-striped table-hover'><tr><th>no</th><th>Array Item</th></tr>";

for(var i=0;i<15;i++){
    if(number[i]%2==0){
        output+="<tr><td>"+(i+1)+"</td><td>"+number[i]+"</td><td>Even</td></tr>";
    }
    else{
        output+="<tr><td>"+(i+1)+"</td><td>"+number[i]+"</td><td>Odd</td></tr>";
    } 
    
}
output+="</table>";
document.getElementById("result").innerHTML=output;