var str="javascript";
for(var i=0;i<str.length;i++){
    for(var j=0;j<=i;j++){
        document.getElementById("result").innerHTML+=str[j];
    }
    document.getElementById("result").innerHTML+="<br>";
}
