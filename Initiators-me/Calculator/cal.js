function printText() {
    var textbox = document.getElementById("out");
    textbox.value = "1";
}
var button = document.getElementById("one");
button.addEventListener("click", printText);
function printText1() {
    var textbox = document.getElementById("out");
    textbox.value="";
}
var button = document.getElementById("AC");
button.addEventListener("click", printText1);
function printText2() {
    var textbox = document.getElementById("out");
    textbox.value="2";
}
var button = document.getElementById("Two");
button.addEventListener("click", printText2);

function getInputValue() {
    let inputVal = document.getElementById("out").value;
    var n1 = Number(inputVal);
    console.log(n1);
    // document.getElementById("out").value  = n1 + n2;
    // console.log(n1 + n2);
    // out.value="";  
 }


function plus(){
    
    let inputVal2 = document.getElementById("out").value;
    var n2 = Number(inputVal2);
    console.log(n2);
    // let add = inputval + inputVal;
    // alert(add);

}