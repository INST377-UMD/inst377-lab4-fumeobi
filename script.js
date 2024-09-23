function alertNameFunction() {
    var name = document.getElementById('alertName').value;
    if(name) {
        alert('Hi ' + name + '!');
    }
}

let isRed = true;
function changeColor() {
    if(isRed) {
        document.body.style.backgroundColor = 'green';
        isRed = false;
    } else {
        document.body.style.backgroundColor = 'red';
        isRed = true;
    }
}

function validateText() {
    var inputText = document.getElementById('textInput').value;
    var validation = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if(validation.test(inputText)) {
        alert('You have entered a special character!');
    } else {
        alert('No special characters detected.');
    }
}

function addText() {
    var header = document.querySelector('header h1');
    header.textContent += ' Add Text';
}
