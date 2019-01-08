document.getElementById("key-1").addEventListener("click", appendValue);

document.getElementById("key-2").addEventListener("click", appendValue);

document.getElementById("key-3").addEventListener("click", appendValue);

document.getElementById("key-4").addEventListener("click", appendValue);

document.getElementById("key-5").addEventListener("click", appendValue);

document.getElementById("key-6").addEventListener("click", appendValue);

document.getElementById("key-7").addEventListener("click", appendValue);

document.getElementById("key-8").addEventListener("click", appendValue);

document.getElementById("key-9").addEventListener("click", appendValue);

document.getElementById("key-0").addEventListener("click", appendValue);

document.getElementById("key-dot").addEventListener("click", appendValue);

document.getElementById("opening-bracket").addEventListener("click", appendValue);

document.getElementById("closing-bracket").addEventListener("click", appendValue);

document.getElementById("add").addEventListener("click", appendValue);
document.getElementById("substract").addEventListener("click", appendValue);
document.getElementById("multiply").addEventListener("click", appendValue);
document.getElementById("divide").addEventListener("click", appendValue);
document.getElementById("to-chips").addEventListener("click", convertToChips);
document.getElementById("equals").addEventListener("click", calculateEquation);
document.getElementById("remove").addEventListener("click", removeValue);

function appendValue() {
document.getElementById('display').innerHTML += this.innerHTML;
  console.log("you clicked: ", this.innerHTML)
}

function removeValue() {
  var displayValue = document.getElementById('display').innerHTML
displayValue = displayValue.slice(0, -1);
  document.getElementById('display').innerHTML = displayValue
  console.log("trim ", displayValue)
}

function calculateEquation() {
var displayValue = document.getElementById('display').innerHTML
  console.log("you clicked: ", displayValue)
  //send query with this displayValue to calculate and display the response
}

function convertToChips() {
  var displayValue = document.getElementById('display').innerHTML
    console.log("value to convert: ", displayValue)
  //send query with this displayValue to convert to Chips and display the response
}