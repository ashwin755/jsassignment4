var colors=[3, 3, 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9]; //array

var sum=1;
var sum2=0;
var item;
var output="<table class='table  table-striped table-hover'><tr><th>No</th><th>Item</th></tr>";
for(var i=0;i<colors.length;i++){
output+="<tr><td>"+(i+1)+"</td><td>"+colors[i]+"</td></tr>";

}
output+="</table>";
document.getElementById("col1").innerHTML=output;
 

var max = 1; //default maximum frequency
var sum2 = 0;  //counter
var item;  //to store item with maximum frequency
for (var i=0; i<colors.length; i++)    //select element (current element)
{
        for (var j=i; j<colors.length; j++)   //loop through next elements in array to compare calculate frequency of current element
        {
                if (colors[i] == colors[j])    //see if element occurs again in the array
                 sum++;   //increment counter if it does
                if (max<sum)   //compare current items frequency with maximum frequency
                {
                  max=sum;      //if m>mf store m in mf for upcoming elements
                  item = colors[i];   // store the current element.
                }
        }
        sum=0;   // make counter 0 for next element.
}


document.getElementById("result").innerHTML="<b>most frequently occured item </b><h2>"+item+"</h2>";//