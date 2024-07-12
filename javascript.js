function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

let firstNumber;
let secondNumber;
let operator;

function operate(firstNumber, secondNumber, operator) {
    switch (operator) {
        case "+":
            return add(firstNumber, secondNumber);
            break;
        case "-":
            return subtract(firstNumber, secondNumber);
            break;
        case "*":
            return multiply(firstNumber, secondNumber);
            break;
        case "/":
            return divide(firstNumber, secondNumber);
    };
};

let displayValue = "";

const currentDisplay = document.querySelector(".display");

//Select all buttons on calculator
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    //Add event listener to all buttons
    button.addEventListener("click", () => {
        //Update current display value when number button is pressed
        switch(button.id) {
            case "one-btn":
                displayValue += "1";
                currentDisplay.textContent = displayValue;
                break;
            case "two-btn":
                displayValue += "2";
                currentDisplay.textContent = displayValue;
                break;
            case "three-btn":
                displayValue += "3";
                currentDisplay.textContent = displayValue;
                break;
            case "four-btn":
                displayValue += "4";
                currentDisplay.textContent = displayValue;
                break;
            case "five-btn":
                displayValue += "5";
                currentDisplay.textContent = displayValue;
                break;
            case "six-btn":
                displayValue += "6";
                currentDisplay.textContent = displayValue;
                break;
            case "seven-btn":
                displayValue += "7";
                currentDisplay.textContent = displayValue;
                break;
            case "eight-btn":
                displayValue += "8";
                currentDisplay.textContent = displayValue;
                break;
            case "nine-btn":
                displayValue += "9";
                currentDisplay.textContent = displayValue;
                break;
            case "zero-btn":
                displayValue += "0";
                currentDisplay.textContent = displayValue;
        };
    });
});


