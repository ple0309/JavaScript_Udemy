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


/*
//Continue function
//Function declaration
const age1 = calcAge1(1991); //can access before initialized.

function calcAge1(birthYear) {
    return 2037 - birthYear;
}

//Function expression
const calcAge2 = function (birthYear) { //Anonymous function
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);

console.log(age1, age2);
*/



/*
//Next lesson
//Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years.`;
}

console.log(yearsUntilRetirement(1991, 'Jaden'));
console.log(yearsUntilRetirement(1980, 'Bob'));
*/



//Next lesson
//Functions Calling other Functions
