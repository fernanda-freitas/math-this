'use strict';

let display = document.querySelector('.display');
let buttons = Array.from(document.querySelectorAll('.button'));

buttons.map(button => {
    button.addEventListener('click', (e) => {
        let buttonContent = e.target.innerHTML;
        buttonContent != '=' ? display.innerHTML += buttonContent : '';

        if(buttonContent == 'C') {
            display.innerHTML = '';
        } else if (buttonContent == '=') {
            display.innerHTML = eval(display.innerHTML);
        }
    })
})