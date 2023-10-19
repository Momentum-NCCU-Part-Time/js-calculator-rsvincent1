
function clearScreen(){
  document.getElementById("result").value = ""
}

function display(value){
  document.getElementById("result").value += value;
}

function solve(){

  document.getElementById('result').value = eval(document.getElementById('result').value)
 
}

