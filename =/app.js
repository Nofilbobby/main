var input = document.getElementById("input")
function meme(Val){
input.value += Val;
}
function calculate()
{
    input.value = eval(input.value);
}

              


function clearAll(){
    input.value = "";
}
function X2(){
    
     var VAR = input.value ;
    var result = VAR * VAR;
    input.value = result;
  }
function AC(){
    
var new2 =input.value;
new2.slice(0,1)
  }