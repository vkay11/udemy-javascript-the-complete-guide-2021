/**************__TASK 1__**************/
const task1 = document.getElementById("task-1");
const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function task1Handler() {
    const filteredNumberArray = numberArray.filter((num) => num > 5);
    console.log(filteredNumberArray);

    const mappedNumberArray = numberArray.map((num) => ({ number: num }));
    console.log(mappedNumberArray);

    const productOfNumberArray = numberArray.reduce(
        (previousValue, currentValue) => {
            return previousValue * currentValue;
        },
        1
    );
    console.log(productOfNumberArray);
}

task1.addEventListener("click", task1Handler);


/**************__TASK 2__**************/
const task2 = document.getElementById("task-2");

function findMax(...numbers) {
    let maxNumber = numbers[0];
    for (const number of numbers) {
        if (number > maxNumber) {
            maxNumber = number;
        }
    }
    return maxNumber;
}

function task2Handler() {
    console.log(findMax(...numberArray));
}

task2.addEventListener("click", task2Handler);


/**************__TASK 3__**************/
const task3 = document.getElementById("task-3");

function tweakedFindMax(...numbers) {
    const sortedNumbers = numbers.sort((num1, num2) => {
        if (num1 > num2) {
            return 1;
        } else if (num1 === num2) {
            return 0;
        } else {
            return -1;
        }
    });
    console.log(sortedNumbers);
    const lastNumIndex = sortedNumbers.length - 1;
    const maxNumber = sortedNumbers[lastNumIndex];
    const minNumber = sortedNumbers[0];
    return [maxNumber, minNumber];
}

function task3Handler() {
    const [maximum, minimum] = tweakedFindMax(...numberArray);
    console.log(`Maximum Number: ${maximum} and Minimum Number: ${minimum}`);
}

task3.addEventListener("click", task3Handler);


/**************__TASK 4__**************/
const task4 = document.getElementById("task-4");

function task4Handler() {
    const listOfValues = new Set([1, 2, 3]);
    console.log(listOfValues);

    listOfValues.add(3);
    listOfValues.add(4);
    listOfValues.add(5);

    console.log(listOfValues);
}

task4.addEventListener("click", task4Handler);