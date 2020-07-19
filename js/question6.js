function check(){
    var len=document.getElementById("size").value;
    var str=document.getElementById("txt1").value;
    
    if(str.length>len){
        str=str.substr(0, len-1)
    }
 console.log(str);
 document.getElementById("result").innerHTML="ENTERED STRING IS :<p1>"+str+"</p1>";
}