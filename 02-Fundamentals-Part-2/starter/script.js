/*
//****************** How to Use Strict Mode *****************************
//***********************************************************************
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
//***********************************************************************
//***********************************************************************







/*
//****************** How to create function *****************************
//***********************************************************************
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
//***********************************************************************
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
//***********************************************************************
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
//***********************************************************************
/*
//Next lesson
//Functions Calling other Functions
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2, 3));
*/
//***********************************************************************
//Reviewing Functions
/*
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = 2037 - birthYear;
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    }
    else {
        console.log(`${firstName} has already retired`);
        return -1;
    }
    // return retirement;
    // return `${firstName} retires in ${retirement} years.`;
}

console.log(yearsUntilRetirement(1991, 'Jaden'));
console.log(yearsUntilRetirement(1970, 'Mike'));
*/


/********************** CHALLENGE #1 ************************************
 * **********************************************************************
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.

Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!

Your tasks:

Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).

Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).

Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

Ignore draws this time. Instead, log No team wins... to the console if there is no winner.

TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.

TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27. 
//My Code:
/* Write your code below. Good luck! 🙂

function calcAverage(scoreA, scoreB, scoreC)
{
    return (scoreA + scoreB + scoreC) / 3;
}

function checkWinner(avgDolphins, avgKoalas){
    if(avgDolphins >= (avgKoalas * 2))
    {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    }
    else if(avgKoalas >= (avgDolphins * 2)){
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    }
    else{
        console.log('No team wins...');
    }
}

const scoreDolphins = calcAverage(85,54,41);
const scoreKoalas = calcAverage(23,34,27);

checkWinner(scoreDolphins,scoreKoalas);



//Lesson Code:
const calcAverage = (a,b,c) => (a+b+c) / 3;
console.log(calcAverage(3,4,5));

//Test1
const scoreDolphins = calcAverage(44,23,71);
const scoreKoalas = calcAverage(65,54,49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function(avgDolphins, avgKoalas){
    if(avgDolphins >= 2 * avgKoalas)
    {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    }
    else if (avgKoalas >= 2 * avgDolphins){
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    }
    else
    {
            
        console.log('No team wins...');
    }
}
checkWinner(scoreDolphins, scoreKoalas);

//Test2
scoreDolhins = calcAverage(85,54,41);
scoreKoalas = calcAverage(23,34,27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);
*/