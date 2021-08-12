const defaultResult = 0;
let currentResult = defaultResult;
logEntries = [];

// gets input from input field
function getInputNumber() {
    return parseInt(userInput.value);
}

// writes output to output field
function writeOutput(operator, initialNumber, inputNumber) {
    calculationDescription = `${initialNumber} ${operator} ${inputNumber}`;
    outputResult(currentResult, calculationDescription);
}

// stores and writes the calculations in console log
function writeToLog(operationIdentifier, previousResult, operationNumber, newResult) {
    const logEntry = {
        operation: operationIdentifier,
        previousResult: previousResult,
        enteredNumber: operationNumber,
        result: newResult
    };

    logEntries.push(logEntry);
    console.log(logEntries);
}

// calculates the result
function calculateResult(calculationType) {
    const enteredNumber = getInputNumber();
    const initialResult = currentResult;

    if (calculationType == 'ADD') {
        currentResult += enteredNumber;
        writeOutput('+', initialResult, enteredNumber);
    } else if (calculationType == 'SUBTRACT') {
        currentResult -= enteredNumber;
        writeOutput('-', initialResult, enteredNumber);
    } else if (calculationType == 'MULTIPLY') {
        currentResult *= enteredNumber;
        writeOutput('*', initialResult, enteredNumber);
    } else {
        currentResult /= enteredNumber;
        writeOutput('/', initialResult, enteredNumber);
    }

    writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}


// add function
function add() {
    calculateResult('ADD');
}

// subtract function
function subtract() {
    calculateResult('SUBTRACT');
}

// multiply function
function multiply() {
    calculateResult('MULTIPLY');
}

// divide function
function divide() {
    calculateResult('DIVIDE');
}

// event listeners
addBtn.addEventListener('click', add);

subtractBtn.addEventListener('click', subtract);

multiplyBtn.addEventListener('click', multiply);

divideBtn.addEventListener('click', divide);