function func(){
    var a = document.createElement("div");
    var input = document.getElementById("myInput").value;
    a.className="selection";
    var t = document.createTextNode(input);
    a.appendChild(t);
    // a.innerHTML = input;
    if(input === ''){
        alert("enter the text");
    }
    else{
    document.getElementById("demo1").appendChild(a);
    // document.body.appendChild(a);
    }

    var span = document.createElement("span");
    var c = document.createTextNode("Delete");
    span.className="close";
    span.appendChild(c);
    a.appendChild(span);
   
    var close = document.getElementsByClassName("close");

    for (var i = 0; i<=close.length; i++) {
        close[i].onclick =function() {
           this.parentNode.remove();
          }
}
}