let lastOperand = 0;
let operation = null;
let currentOperation = null;
let sum = document.getElementById('btn_sum');
let diff = document.getElementById('btn_diff');
let div = document.getElementById('btn_div');
let multiply = document.getElementById('btn_multiply');

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

sum.addEventListener('click', function () {
    let value = parseInt(inputWindow.value);
    if (operation != null && operation != 'sum') {
        lastOperand = calc(lastOperand, operation, value);
        console.log(lastOperand);
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

diff.addEventListener('click', function () {
    let value = parseInt(inputWindow.value);
    if (operation != null && operation != 'diff') {
        lastOperand = calc(lastOperand, operation, value);
        console.log(lastOperand);
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

multiply.addEventListener('click', function () {
    let value = parseInt(inputWindow.value);
    if (operation != null && operation != 'multiply') {
        lastOperand = calc(lastOperand, operation, value);
        console.log(lastOperand);
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

div.addEventListener('click', function () {
    let value = parseInt(inputWindow.value);
    if (operation != null && operation != 'div') {
        lastOperand = calc(lastOperand, operation, value);
        console.log(lastOperand);
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
    if (operation === 'sum'){
        lastOperand = lastOperand + value;
        return lastOperand;
    }
    if (operation === 'diff'){
        lastOperand = lastOperand - value;
        return lastOperand;
    }
    if (operation === 'multiply'){
        lastOperand = lastOperand * value;
        return lastOperand;
    }
    if (operation === 'div'){
        lastOperand = lastOperand / value;
        return lastOperand;
    }
}

