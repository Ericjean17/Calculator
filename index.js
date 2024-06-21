const display = document.getElementById("display"); // update display
const operators = ["+", "-", "x", "/"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let calcStack = [];
display.value = "0";

function appendToDisplay(input) {
    if (numbers.includes(input)) {
        if (display.value === "0" || calcStack.length > 0) {
            display.value = input; // Replace initial 0 or previous result with new number
            calcStack = []; // Clear stack when a number is entered after calculation
        } else {
            display.value += input;
        }
    } else if (operators.includes(input)) {
        if (!operators.includes(display.value.slice(-1))) {
            display.value += input; // Append operator to the display
        }
    } else if (input === ".") {
        if (!display.value.includes(".")) {
            display.value += input; // Append decimal point
        }
    }
}

function clearDisplay() {
    display.value = "0";
    calcStack = [];
}

function calculate() {
    try {
        let expression = display.value.replace(/x/g, '*').replace(/\//g, '/');
        display.value = String(eval(expression));
        calcStack.push(display.value); // Store the result for further calculations
    } catch (error) {
        display.value = "Error";
    }
}
