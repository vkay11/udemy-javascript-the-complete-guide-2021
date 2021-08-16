const task3Element = document.getElementById('task-3');


//Task 1
function func1() {
    alert('Hello, world!');
}

function func2(name) {
    alert(`Hey, ${name}`);
}


//Task 2
func1();
func2('Vinay');


//Task 3
task3Element.addEventListener('click', func1);


//Task 4
function concatenate(string1, string2, string3) {
    const concatenatedString = string1 + ' ' + string2 + ' ' + string3;
    return concatenatedString;
}


//Task 5
string = concatenate('I', 'love', 'Anime');
alert(string);