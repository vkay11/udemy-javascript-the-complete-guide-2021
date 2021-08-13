const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

/**************__TASK 1__**************/

if (randomNumber > 0.7) {
    // alert('The random number is greater than 0.7.!');
}


/**************__TASK 2__**************/

let numberArray = [1, 2, 3, 4, 5];

// way 1
console.log('TASK 2 --->')
console.log('WAY 1:');
for (let i = 0; i < numberArray.length; i++) {
    console.log(numberArray[i]);
}

// way 2
console.log('WAY 2:');
for (const number of numberArray) {
    console.log(number);
}


/**************__TASK 3__**************/

console.log('TASK 3 --->');
startIndex = numberArray.length - 1;
for (let i = startIndex; i >= 0; i--) {
    console.log(numberArray[i]);
}


/**************__TASK 4__**************/

anotherRandomNumber = Math.random();

if (randomNumber > 0.7 && anotherRandomNumber > 0.7 || (randomNumber < 0.2 || anotherRandomNumber < 0.2)) {
    alert('Task 4 Alert.!');
    console.log(`first number = ${randomNumber}, second number = ${anotherRandomNumber}`);
}