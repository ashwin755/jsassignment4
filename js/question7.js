function findlarge(){
    var a=document.getElementById("txt1").value;
    var b=document.getElementById("txt2").value;
  if(a>b){
      document.getElementById("result").innerHTML="LARGEST NUMBER IS "+a;
  }
  else{
    document.getElementById("result").innerHTML="LARGEST NUMBER IS "+b;
  }
}