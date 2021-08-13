function sayHello(name) {
  console.log("Hi " + name);
}

sayHello();

/**********__TASK 1__**********/

const sayHi = (name) => console.log(`Hi ${name}`);
sayHi("Vinay");

/**********__TASK 2__**********/

// const sayHiRevised = (name, phrase) => {
//   const outputString = phrase + ' ' + name;
//   return outputString;
// };

// function writeOutputToConsole(name, phrase) {
//   outputString = sayHiRevised(name, phrase);
//   console.log(outputString);
// }

// writeOutputToConsole('Yo', 'Vinay');

/**********__TASK 3__**********/

const sayHiRevised = (name, phrase = "Hello") => {
  const outputString = phrase + " " + name;
  return outputString;
};

function writeOutputToConsole(name, phrase) {
  outputString = sayHiRevised(name, phrase);
  console.log(outputString);
}

writeOutputToConsole("Vinay");

/**********__TASK 4__**********/

function callbackFunction() {
  console.log("Callback Function was executed.!");
}

function checkInput(callbackFunc, ...args) {
  let checkForEmptyString = false;
  for (string of args) {
    if (!string) {
      checkForEmptyString = true;
      break;
    }
  }
  if (checkForEmptyString) {
    callbackFunc();
  } else {
    console.log("Callback Function was not executed.!");
  }
}

checkInput(callbackFunction, "Hello", "World");
checkInput(callbackFunction, "", "I'm", "Vinay");
