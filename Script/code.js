// let dataEntry = document.querySelector('[data-entry]')
// function display (value) {
//     dataEntry.value = value

// }

let dataEntry = document.querySelector('[data-entry]');

function  display(value) {
    const output = document.getElementById('output');
    output.value += value;
}

function clearOutput() {
    const output = document.getElementById('output');
    output.value = '';
}

function clearLast() {
    const output = document.getElementById('output');
    output.value = output.value.slice(0, -1);
}

function toggleSign() {
    const output = document.getElementById('output');
    const currentValue = parseFloat(output.value);
    if (!isNaN(currentValue)) {
        output.value = -currentValue;
    }
}

function evaluateSum() {
    const output = document.getElementById('output');
    try {
        const result = eval(output.value);
        output.value = result;
    } catch (error) {
        output.value = 'Error';
    }
}

