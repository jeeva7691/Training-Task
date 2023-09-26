function printText() {
    // Get a reference to the textbox
    var textbox = document.getElementById("out");

    // Set the text in the textbox
    textbox.value = "1";
}

// Attach the click event handler to the button
var button = document.getElementById("one");
button.addEventListener("click", printText);