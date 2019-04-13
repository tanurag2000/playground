var nodelist=document.getElementsByTagName('li');

var close=document.getElementsByClassName("close");
var i;

for (i=0;i<nodelist.length;i++)
{
    var span=document.createElement("span");
    var txt=document.createTextNode("\u00D7");
    span.className="close";
    span.appendChild(txt);
    nodelist[i].appendChild(span);
}

function newElement(){
    var li=document.createElement("li");
    var inputValue=document.getElementById("myInput").value;
    console.log(inputValue);
    var t=document.createTextNode(inputValue);
     li.appendChild(t)
     if( inputValue==="  "){
         alert("you must write something") ;
     }
        else{
            document.getElementById("myUL").appendChild(li);
  }
document.getElementById("myInput").vlaue="";
var span=document.createElement("span");
var txt=document.createTextNode("\u00D7");
span.className="close";
span.appendChild(txt);
li.appendChild(span);
for(i=0;i<close.length;i++){
    close[i].onclick=function(){
        var div =this.parentElement;
        div.style.display="none";
    }
}
}












