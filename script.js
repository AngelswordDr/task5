let lastOperand = 0;
let operation = null;

const inputWindow = document.getElementById('inputWindow');

document.getElementById('btn_1').addEventListener('click', function () {
    inputWindow.value += '1';
});

document.getElementById('btn_2').addEventListener('click', function () {
    inputWindow.value += '2';
});

document.getElementById('btn_3').addEventListener('click', function () {
    inputWindow.value += '3';
});

document.getElementById('btn_4').addEventListener('click', function () {
    inputWindow.value += '4';
});

document.getElementById('btn_5').addEventListener('click', function () {
    inputWindow.value += '5';
});

document.getElementById('btn_6').addEventListener('click', function () {
    inputWindow.value += '6';
});

document.getElementById('btn_7').addEventListener('click', function () {
    inputWindow.value += '7';
});

document.getElementById('btn_8').addEventListener('click', function () {
    inputWindow.value += '8';
});

document.getElementById('btn_9').addEventListener('click', function () {
    inputWindow.value += '9';
});

document.getElementById('btn_0').addEventListener('click', function () {
    inputWindow.value += '0';
});

document.getElementById('btn_sum').addEventListener('click', function () {
    let value = parseInt(inputWindow.value);
    if (operation != null && operation != 'sum') {
        lastOperand = calc(lastOperand, operation, value);
    } else {
        if (operation != null){
            lastOperand = lastOperand + value;
        } else {
            lastOperand = value;
        }
    }
    operation = 'sum';
    inputWindow.value = '';
    value = '';
});

document.getElementById('btn_diff').addEventListener('click', function () {
    let value = parseInt(inputWindow.value);
    if (operation != null && operation != 'diff') {
        lastOperand = calc(lastOperand, operation, value);
    } else { 
        if (operation != null){
            lastOperand = lastOperand - value;
        } else {
            lastOperand = value;
        }
    }
    operation = 'diff';
    inputWindow.value = '';
    value = '';
});

document.getElementById('btn_multiply').addEventListener('click', function () {
    let value = parseInt(inputWindow.value);
    if (operation != null && operation != 'multiply') {
        lastOperand = calc(lastOperand, operation, value);
    } else {
        if (operation != null) {
            lastOperand = lastOperand * value;
        } else {
            lastOperand = value;
        }
    }
    operation = 'multiply';
    inputWindow.value = '';
    value = '';
});

document.getElementById('btn_div').addEventListener('click', function () {
    let value = parseInt(inputWindow.value);
    if (operation != null && operation != 'div') {
        lastOperand = calc(lastOperand, operation, value);
    } else {
        if (operation != null){
            lastOperand = lastOperand / value;
        } else {
            lastOperand = value;
        }
    }
    operation = 'div';
    inputWindow.value = '';
});

document.getElementById('btn_root').addEventListener('click', function () {
    const result = Math.sqrt(parseInt(inputWindow.value));
    operation = null;
    lastOperand = 0;
    inputWindow.value = result;
});

document.getElementById('btn_calc').addEventListener('click', function () {
    if (operation === 'sum') {
        const result = lastOperand + parseInt(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
    }
    if (operation === 'diff') {
        const result = lastOperand - parseInt(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
    }
    if (operation === 'multiply') {
        const result = lastOperand * parseInt(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
    }
    if (operation === 'div') {
        const result = lastOperand / parseInt(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
    }
});

document.getElementById('btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '';
});

function calc (lastOperand, operation, value) {
    switch (operation) {
        case 'sum':
            lastOperand = lastOperand + value;
            break;
        case 'diff':
            lastOperand = lastOperand - value;
            break;
        case 'multiply':
            lastOperand = lastOperand * value;
            break;
        case 'div':
            lastOperand = lastOperand / value;
            break;
    }
    return lastOperand;
}

