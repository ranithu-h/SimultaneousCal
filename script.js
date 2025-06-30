let body = document.querySelector('body');
let rectangle = document.querySelector('.rectangle');
let formElements = document.querySelectorAll('input[type="text"], input[type="form"]');
let rectangles = document.querySelectorAll('.rectangle');

let currentIndex = 0;

function saveColorScheme(color) {
    localStorage.setItem('selectedColor', color);
}

function getSavedColorScheme() {
    return localStorage.getItem('selectedColor');
}

function updateFormStyles(backgroundColor, textcolor) {
    formElements.forEach(element => {
        element.style.backgroundColor = backgroundColor;
        element.style.color = textcolor;
    });
    body.style.backgroundColor = backgroundColor;
    body.style.color = textcolor;
    document.querySelectorAll('.rectangle').forEach(rectangle => {
        rectangle.style.color = textcolor;
    });
}

function applyColorScheme(color) {
    if (color === 'red') {
        body.className = 'red';
        updateFormStyles('#f04300', 'blanchedalmond');
    } else if (color === 'blue') {
        body.className = 'blue';
        updateFormStyles('#8AF6FF', '#131417');
    } else if (color === 'dark') {
        body.className = 'dark';
        updateFormStyles('#131417', 'blanchedalmond');
    } else if (color === 'light') {
        body.className = 'light';
        updateFormStyles('blanchedalmond', '#131417');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const savedColor = getSavedColorScheme();
    if (savedColor) {
        applyColorScheme(savedColor);
    }
});

document.querySelector('#red').addEventListener('click', function() {
    const color = 'red';
    applyColorScheme(color);
    saveColorScheme(color);
});

document.querySelector('#blue').addEventListener('click', function() {
    const color = 'blue';
    applyColorScheme(color);
    saveColorScheme(color);
});

document.querySelector('#dark').addEventListener('click', function() {
    const color = 'dark';
    applyColorScheme(color);
    saveColorScheme(color);
});

document.querySelector('#light').addEventListener('click', function() {
    const color = 'light';
    applyColorScheme(color);
    saveColorScheme(color);});

document.querySelector('form').addEventListener('input', function(event) {
    let inputs = document.querySelectorAll('input[type="text"]');
    inputs.forEach(input => {
        input.style.width = (input.value.length + 2) + 'ch';
    });
});


document.querySelector('form').addEventListener('keydown', function(event) {
    const isArrowKey = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key);
    if (!isArrowKey) return;

    const direction = event.key.replace('Arrow', '');
    let nextIndex;
    const numInputs = formElements.length;

    switch (direction) {
        case 'Up':
            nextIndex = (currentIndex - 3 + numInputs) % numInputs;
            break;
        case 'Down':
            nextIndex = (currentIndex + 3) % numInputs;
            break;
        case 'Left':
            nextIndex = (currentIndex - 1 + numInputs) % numInputs;
            break;
        case 'Right':
            nextIndex = (currentIndex + 1) % numInputs;
            break;
        default:
            break;
    }

    formElements[currentIndex].blur();
    formElements[nextIndex].focus();
    currentIndex = nextIndex;
});

document.querySelector('form').addEventListener('keydown', function(event){
    if (event.key === 'Enter'){
        const submitButton = document.querySelector('input[type="submit"]');
        submitButton.clicked();
        event.preventDefault();
    }

});

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const submitButton = document.querySelector('input[type="submit"]');
    submitButton.classList.add('clicked');
    setTimeout(() => {
        submitButton.classList.remove('clicked');
    }, 100);
});