'use strict';

/**
 * What is the DOM?
 *- DOM is Document Object Model: it allows JS to access HTML elements and styles to manipulate them. (Change text, HTML attributes, and even CSS style).

- DOM methods and properties for DOM manipulation is not part of JS.
- DOM methods and Properties are web APIs. (Libraries).

 */

//Getting the content of element.
console.log(document.querySelector('.message').textContent);

//Setting the content of element.
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
