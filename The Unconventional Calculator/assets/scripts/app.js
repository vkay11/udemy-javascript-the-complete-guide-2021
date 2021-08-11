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

// add function
function add() {
    const enteredNumber = getInputNumber();
    const initialResult = currentResult;
    currentResult += enteredNumber;
    writeOutput('+', initialResult, enteredNumber);
    writeToLog('ADD', initialResult, enteredNumber, currentResult);
}

// subtract function
function subtract() {
    const enteredNumber = getInputNumber();
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    writeOutput('-', initialResult, enteredNumber);
    writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult);
}

// multiply function
function multiply() {
    const enteredNumber = getInputNumber();
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    writeOutput('x', initialResult, enteredNumber);
    writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult);
}

// divide function
function divide() {
    const enteredNumber = getInputNumber();
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    writeOutput('/', initialResult, enteredNumber);
    writeToLog('DIVIDE', initialResult, enteredNumber, currentResult);
}

// event listeners
addBtn.addEventListener('click', add);

subtractBtn.addEventListener('click', subtract);

multiplyBtn.addEventListener('click', multiply);

divideBtn.addEventListener('click', divide);