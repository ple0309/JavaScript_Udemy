/*
'use strict'; //activated strict mode 
//always put strict mode to avoid accidental errors.
//it will help to show the errors in console.

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive ');

const private = 534;

//both of these code below will show the error because they are reserved words.
// const interface = 'Audio';
// const if = 23;
*/



/*
//How to create function
function logger() {
    console.log('My name is Jaden');
}

//calling / running / invoking function
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/