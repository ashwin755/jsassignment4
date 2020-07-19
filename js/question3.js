
function swap()
{
var testString=document.getElementById("txt1").value;


var newString  = '';
for(var i =0; i< testString.length; i++){
    if(/^[A-Z]/.test(testString[i])){
         newString+= testString[i].toLowerCase();
    } else {
         newString+= testString[i].toUpperCase();
    }
}
  
    document.getElementById("result").innerHTML=newString;
  

}

 
