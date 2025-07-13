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
    if (operation != null && operation != 'sum') {
        if (operation === 'diff'){
            lastOperand = lastOperand - parseInt(inputWindow.value);
        }
        if (operation === 'multiply'){
            lastOperand = lastOperand * parseInt(inputWindow.value);
        }
        if (operation === 'div'){
            lastOperand = lastOperand / parseInt(inputWindow.value);
        }
    } else {
        if (operation != null){
            lastOperand = lastOperand + parseInt(inputWindow.value);
        } else {
            lastOperand = parseInt(inputWindow.value);
        }
    }
    operation = 'sum';
    inputWindow.value = '';
});

diff.addEventListener('click', function () {
    if (operation != null && operation != 'diff') {
        if (operation === 'sum'){
            lastOperand = lastOperand + parseInt(inputWindow.value);
        }
        if (operation === 'multiply'){
            lastOperand = lastOperand * parseInt(inputWindow.value);
        }
        if (operation === 'div'){
            lastOperand = lastOperand / parseInt(inputWindow.value);
        }
    } else { 
        if (operation != null){
            lastOperand = lastOperand - parseInt(inputWindow.value);
        } else {
            lastOperand = parseInt(inputWindow.value);
        }
    }
    operation = 'diff';
    inputWindow.value = '';
});

multiply.addEventListener('click', function () {
    if (operation != null && operation != 'multiply') {
        if (operation === 'sum'){
            lastOperand = lastOperand + parseInt(inputWindow.value);
        }
        if (operation === 'diff'){
            lastOperand = lastOperand - parseInt(inputWindow.value);
        }
        if (operation === 'div'){
            lastOperand = lastOperand / parseInt(inputWindow.value);
        }
    } else {
        if (operation != null) {
            lastOperand = lastOperand * parseInt(inputWindow.value);
        } else {
            lastOperand = parseInt(inputWindow.value);
        }
    }
    operation = 'multiply';
    inputWindow.value = '';
});

div.addEventListener('click', function () {
    if (operation != null && operation != 'div') {
        if (operation === 'sum'){
            lastOperand = lastOperand + parseInt(inputWindow.value);
        }
        if (operation === 'diff'){
            lastOperand = lastOperand - parseInt(inputWindow.value);
        }
        if (operation === 'multiply'){
            lastOperand = lastOperand * parseInt(inputWindow.value);
        }
    } else {
        if (operation != null){
            lastOperand = lastOperand / parseInt(inputWindow.value);
        } else {
            lastOperand = parseInt(inputWindow.value);
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

