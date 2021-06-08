var display = document.getElementById("display");
var equals = document.getElementById("submit");
var clear = document.getElementById("clear");
var equation = "";
var opSymbols = "+-*/";

 const Parser = require('expr-eval').Parser;
function remove_linebreaks(str) {
    return str.replace( /[\r\n]+/gm, "" );
}
clear.addEventListener("click",function(){
  equation = "";
  display.innerText = "";
});
equals.addEventListener("click",function(){
  if(opSymbols.includes(equation.substring(equation.length-1,equation.length))){
    display.innerText = "Illegal Operation: Equation Cleared";
    equation = "";
  }
  equation = remove_linebreaks(equation);
  var expression = new Parser.parse(equation);
  var result = expression.evaluate();
  display.innerText = result;
  equation = "" + result;
});
document.querySelectorAll('.operation').forEach(item => {
  item.addEventListener('click', event => {
    if(equation.length!=0){
      if(opSymbols.includes(equation.substring(equation.length-1,equation.length))){
        display.innerText = "Illegal Operation: Equation Cleared";
        equation = "";
      }
      else{
        equation = equation+ "" + item.id;
        display.innerText =equation;
      }
    }
  })
});

document.querySelectorAll('.number').forEach(item => {
  item.addEventListener('click', event => {
    if(equation.length==0){
      equation= equation + item.innerText;
    }
    else{
      equation = equation + "" + item.innerText;
    }
    display.innerText =equation;
  })
});
