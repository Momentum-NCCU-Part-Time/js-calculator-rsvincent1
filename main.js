
function clearScreen(){
  document.getElementById("result").value = ""
}

function display(value){
  document.getElementById("result").value += value;
}

function solve(){
  let outputWindow = document.getElementById("result").value
  let eqa = eval(outputWindow)
  document.getElementById('result').value = eqa
}

