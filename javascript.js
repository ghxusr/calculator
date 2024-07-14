function add(a, b) {
    return parseFloat(a) + parseFloat(b);
};

function subtract(a, b) {
    return parseFloat(a) - parseFloat(b);
};

function multiply(a, b) {
    return parseFloat(a) * parseFloat(b);
};

function divide(a, b) {
    if (parseFloat(b) === 0) {
        return "You know cannot do that";
    }
    else return parseFloat(a) / parseFloat(b);
};

let firstNumber = "";
let secondNumber = "";
let operator = "";

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
                displayValue = (displayValue + "1").substring(0, 25);
                currentDisplay.textContent = displayValue;
                break;
            case "two-btn":
                displayValue = (displayValue + "2").substring(0, 25);
                currentDisplay.textContent = displayValue;
                break;
            case "three-btn":
                displayValue = (displayValue + "3").substring(0, 25);
                currentDisplay.textContent = displayValue;
                break;
            case "four-btn":
                displayValue = (displayValue + "4").substring(0, 25);
                currentDisplay.textContent = displayValue;
                break;
            case "five-btn":
                displayValue = (displayValue + "5").substring(0, 25);
                currentDisplay.textContent = displayValue;
                break;
            case "six-btn":
                displayValue = (displayValue + "6").substring(0, 25);
                currentDisplay.textContent = displayValue;
                break;
            case "seven-btn":
                displayValue = (displayValue + "7").substring(0, 25);
                currentDisplay.textContent = displayValue;
                break;
            case "eight-btn":
                displayValue = (displayValue + "8").substring(0, 25);
                currentDisplay.textContent = displayValue;
                break;
            case "nine-btn":
                displayValue = (displayValue + "9").substring(0, 25);
                currentDisplay.textContent = displayValue;
                break;
            case "zero-btn":
                displayValue = (displayValue + "0").substring(0, 25);
                currentDisplay.textContent = displayValue;
                break;
            //Call functions for respective buttons pressed
            case "divide-btn":
                operator = "/";
                if (firstNumber === "") {
                    firstNumber = displayValue;
                }
                displayValue = "";
                break;
            case "multiply-btn":
                operator = "*";
                if (firstNumber === "") {
                    firstNumber = displayValue;
                }
                displayValue = "";
                break;
            case "subtract-btn":
                operator = "-";
                if (firstNumber === "") {
                    firstNumber = displayValue;
                }
                displayValue = "";
                break;
            case "add-btn":
                operator = "+";
                if (firstNumber === "") {
                    firstNumber = displayValue;
                }
                displayValue = "";
                break;
            case "equal-btn":
                if (firstNumber != "") {
                    secondNumber = displayValue;
                }
                if (firstNumber != "" && secondNumber != "" && operator != "") {
                    displayValue = (operate(firstNumber, secondNumber, operator)).toString().substring(0, 25);
                    currentDisplay.textContent = displayValue;
                    firstNumber = "";
                    secondNumber = "";
                    operator = "";
                    //Clear stored value when  dividing by zero
                    if (displayValue === "You know cannot do that") {
                    displayValue = "";
                    }
                }
                break;
            case "clear-btn":
                firstNumber = "";
                secondNumber = "";
                operator = "";
                displayValue  = "";
                currentDisplay.textContent = displayValue;
        };
    });
});


