  function tota(){

    var a = document.getElementById("mat").value;
    var b = document.getElementById("eng").value;
    var c = document.getElementById("bio").value;
    var d = document.getElementById("phy").value;
    var e = document.getElementById("chem").value;
    var total = Number(a)+Number(b)+Number(c)+Number(d)+Number(e);
    var name = document.getElementById("nam").value;
    // var app = document.createTextNode(total)
   
    var crat = document.createTextNode('Hello,').nodeValue;
    var colu = document.createTextNode(" your score is ").nodeValue;
    var comb = crat +  name + colu + total;
    var op = document.createTextNode(comb);
    document.getElementById("tot").value = comb;  
 
     if(total >= 500){
        document.getElementById("tot").value = "OPPS!"+ "ERROR"
     }
}
function avera(){
    var f = document.getElementById("mat").value;
    var g = document.getElementById("eng").value;
    var h = document.getElementById("bio").value;
    var i = document.getElementById("phy").value;
    var j = document.getElementById("chem").value;
    var final = (Number(f)+Number(g)+Number(h)+Number(i)+Number(j)/5);
   

    var kkk = document.createTextNode("Your avarage score is ").nodeValue;
    var pp = document.createTextNode(":").nodeValue;
    var com = kkk + pp + final;
    document.getElementById('avag').value = com;
    
    // if(final>500){
    //     var over = document.createTextNode("Opps,there's an ERROR");
    //     var anz = document.getElementById("avag").value;
    //     anz.appendChild(over);
    // }

    if(total >= 500){
        document.getElementById("avag").value = "OPPS!"+ "ERROR"
    }
}

function grad(){
    
    var a = document.getElementById("mat").value;
    var b = document.getElementById("eng").value;
    var c = document.getElementById("bio").value;
    var d = document.getElementById("phy").value;
    var e = document.getElementById("chem").value;
    var total = Number(a)+Number(b)+Number(c)+Number(d)+Number(e);
    // var name = document.getElementById("nam").value;

  if(total <= 500){
    document.getElementById("gra").value = "A+ " + "this "+ "is " + "an "+ "Excellent " + " result"
  }
  else if(total >= 500){
    document.getElementById("gra").value = "OPPS!"+ "ERROR"
  }
  if(total <= 400){
    document.getElementById("gra").value = "B+" +  " ," + "keep " + "it " + " up"
  }
  if(total <= 300){
    document.getElementById("gra").value = "C " +   " ," +" buckle" + " up"
  }
  
  if(toatl <= 200){
    document.getElementById("gra").value = " D " +  "," + "this " + "is " + "a " + "poor " + "result "
  }
  if(toatl <= 100){
    document.getElementById("gra").value = "E " + ", " + "you " + " are" + " advice" + "to " + "withdraw "
  }
  
  


   
    }
