let operator = prompt('Please Enter operator you want to perform' +
'\n\n e.g +, -, *, /' + 
'\n\n Note: This calculator can only perform operations between two numbers');

let firstNumber = parseFloat(prompt('Enter First Number'));

let secondNumber = parseFloat(prompt(firstNumber + " " + operator ));

function addition(x, y) {
    alert("Result is " + (x +  y));

}

function subtraction(x, y) {
    alert("Result is " + (x -  y));

}

function multiplication(x, y) {
    alert("Result is " + (x *  y));

}

function division(x, y) {
    alert("Result is " + (x /  y));

}

function calculate(x, operator, y) {
    if (operator == "+") {
        addition(firstNumber, secondNumber);
    }
    else if (operator == "-") {
        subtraction(firstNumber, secondNumber);
    }
    else if (operator == "*") {
        multiplication(firstNumber, secondNumber);
    }
    else if (operator == "/") {
        division(firstNumber, secondNumber);
    }
    else {
        alert('Please enter a valid operator.');
    }

}
calculate(firstNumber, operator, secondNumber );
