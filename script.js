'use strict';

// User can see a display showing the current number entered or the result of the last operation.
// User can see an entry pad containing buttons for the digits 0-9, operations - '+', '-', '/', and '=', a 'C' button (for clear), and an 'AC' button (for clear all).
// User can enter numbers as sequences up to 8 digits long by clicking on digits in the entry pad. Entry of any digits more than 8 will be ignored.
// User can click on an operation button to display the result of that operation on:
// the result of the preceding operation and the last number entered OR
// the last two numbers entered OR
// the last number entered
// User can click the 'C' button to clear the last number or the last operation. If the users last entry was an operation the display will be updated to the value that preceded it.
// User can click the 'AC' button to clear all internal work areas and to set the display to 0.
// User can see 'ERR' displayed if any operation would exceed the 8 digit maximum.

// Display
const history = document.querySelector('.history');
const current = document.querySelector('.current');

const btnSum = document.querySelector('.btn-sum');
const btnSubtract = document.querySelector('.btn-subtract');
const btnMultiply = document.querySelector('.btn-multiply');
const btnDivide = document.querySelector('.btn-divide');

const btnDecimal = document.querySelector('.btn-decimal');
const btnClear = document.querySelector('.btn-clear');
const btnEquals = document.querySelector('.btn-equals');

const getHistory = function() {
    return history.innerText;
}

const getCurrent = function() {
    return current.innerText;
}

console.log(getHistory());
console.log(getCurrent());