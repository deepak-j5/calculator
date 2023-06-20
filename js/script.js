//Using Strict mode for coding  in JS
"use strict";

//defining necessary variables
let string = ''
const input = document.querySelector('.input-box')
const btn = document.querySelectorAll('.buttons')
const copy = document.getElementById('copy')
const clear1 = document.getElementById('clear1')
const copyText = document.querySelector('.copytxt')

//Hiding Text copied message by default
copyText.style.display = 'none'

//Event Listener for copying text in input box and displaying temporary message
input.addEventListener('click' , () => {
    if(input.innerText === '') {}
    else {
        navigator.clipboard.writeText(input.innerText)
        copyText.style.removeProperty('display')
        setTimeout(() => {copyText.style.display = 'none'} , 2000)
    }
}) 

//Event Listener for backspace button
clear1.addEventListener('click' , () => {
        string = string.slice(0,-1)
        input.innerText = string
})

// Looping through all the buttons and adding suitable functions to them
for(let i=0;i<btn.length;i++) {
    btn[i].addEventListener('click' , () => {
        let value = btn[i].value
        // For All Clear Button
        if(value === 'clearall') {
            string = ''
            input.innerText = string
        }

        //For Equal Button
        else if(value === 'equal') {
            string = Function('return ' + string)()
            input.innerText = string
        }

        //For Square Button
        else if(value === 'sqr') {
            if(string === '') {}
            else {
                string = parseFloat(string)
                string = string * string
                input.innerText = string  
            }
        }

        //For finding Square Root
        else if(value === 'sqrt') {
            if(string === '') {}
            else {
                string = parseFloat(string)
                string = Math.sqrt(string)
                input.innerText = string
            }
        }

        //For rest of the Numeric and Operator Buttons
        else {
            string = string + value
            input.innerText = string
        }
    })
}
