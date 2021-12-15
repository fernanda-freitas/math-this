'use strict';

let display = document.querySelector('.display');
let displayHistory = document.querySelector('.display-history');
let buttons = Array.from(document.querySelectorAll('.button'));

buttons.map(button => {
    button.addEventListener('click', (e) => {
        let buttonContent = e.target.innerHTML;
        buttonContent != '=' ? display.innerHTML += buttonContent : '';

        if(buttonContent == 'C') {
            displayHistory.innerHTML = '';
            display.innerHTML = '';
        } else if (buttonContent == '=') {
            displayHistory.innerHTML = display.innerHTML;
            display.innerHTML = eval(display.innerHTML);
        }
    })
})