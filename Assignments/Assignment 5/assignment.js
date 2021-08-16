/***********__TASK 1__***********/

// way 1
const task1 = document.getElementById('task-1');

function changeTask1Style() {
    task1.style.color = 'white';
    task1.style.backgroundColor = 'black';
}

// task1.addEventListener('click', changeTask1Style);

// way 2
const taskOne = document.querySelector('li');

function changeTask1StyleAgain() {
    task1.style.color = 'white';
    task1.style.backgroundColor = 'black';
}

task1.addEventListener('click', changeTask1StyleAgain);


/***********__TASK 2__***********/

// way 1
const title1 = document.querySelector('title');
const listItems = document.querySelectorAll('li');
const task2 = listItems[1];

function changeTitle() {
    title1.textContent = 'Assignment - Solved!';
}

// task2.addEventListener('click', changeTitle);

// way 2
const head = document.querySelector('head');
const title2 = head.querySelector('title');

function changeTitleAgain() {
    title1.textContent = 'Assignment - Solved!';
}

task2.addEventListener('click', changeTitleAgain);


/***********__TASK 3__***********/

const task3 = listItems[2];
const h1 = document.querySelector('h1');

function changeH1() {
    h1.textContent = 'Assignment - Solved!';
}

task3.addEventListener('click', changeH1);