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




/************************** Array ***************************************
 * **********************************************************************

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

//Creating new Array
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

//Creating new Array
const y = new Array(1991, 1984, 2008, 2020);

//Accessing the index of array.
console.log(friends[0]);
console.log(friends[2]);

//Getting length of Array
console.log(friends.length);
console.log(friends[friends.length - 1]);

//Replace the element of the array
friends[2] = 'Jay';
console.log(friends);

//Can not do this
//friends = ['Bob', 'Alice'];


const jonas = ['Jonas', 'Schmedtmann', 2037 - 1991]; //This works fine.
//OR
const firstName = 'Jaden';
const test1 = [firstName, 'Schmedtmann', 2037 - 1991, 'student', friends];
console.log(test1);
console.log(test1.length);

//**********************************************************************
//Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear; //expect single value can not pass array in it.
}

const years = [1990, 1967, 2002, 2010, 2018];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[2]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);

 */

/*
// **********************************************************************
//Basics Array Operations (Methods)
const friends = ['Michael', 'Steven', 'Peter'];

//Adding new element last array.
const newLength = friends.push('Jay'); //push method will push element in array and return the length of new array.

console.log(friends);
console.log(newLength);

//Adding new element in front of array.
friends.unshift('John');
console.log(friends);

//Remove elements
friends.pop(); //Last
const popped = friends.pop(); //Return the popped element in variable
console.log(popped);
console.log(friends);

friends.shift(); //Remove element in front of the array.
console.log(friends);

//Return the index of element.
console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob')); //Not in there will return -1.


//Includes method will return true or false in element in array or not.
friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));
//But will return False if '23' string instead of number 23.
console.log(friends.includes('23'));

if (friends.includes('Peter')) {
    console.log('You have a friend called Peter');
}
*/



/********************** CHALLENGE #2 ************************************
 * **********************************************************************
Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

Your tasks:

Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

And now let's use arrays! So, create an array called bills containing the test data below.

Create an array called tips containing the tip value for each bill, calculated from the function you created before.

BONUS: Create an array totals containing the total values, so the bill + tip.

TEST DATA: 125, 555, and 44.

//My Code:
/* Write your code below. Good luck! 🙂

const calcTip = (bill) => (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;

const bills = [125,55, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const totals = [bills[0] + tips[0], bills[1] + tips[1],bills[2] + tips[2]];

*/






/************************** Object ***************************************/
/********************************************************************** */
//Array
//Using array for more order data.
/*
const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

//Object
//Using objects for more unstructured data.
//5 key pairs with values.
const jonas = {
    firstName: 'Jonas', //property firstName and value 'Jonas'
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'student',
    friends: ['Michael', 'Peter', 'Steven']
};
*/
/********************************************************************** */
//Dot vs. Bracket Notation.
/*
console.log(jonas);

console.log(jonas.lastName);        //Dot
console.log(jonas['firstName']);    // Bracket

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// console.log(jonas.'last' + nameKey); //We can not do it in dot notation.
const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

//Difference between dot and bracket.
// console.log(jonas.interestedIn); // jonas doesnot have interestedIn property that is why it showed undefined.

console.log(jonas[interestedIn]);

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
}
else { //when false or undefined input
    console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}

//The way to add more key and value in the object.
jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);

//Challenge
//"Jonas has 3 friends, and his best friends is called Michael"
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friends is called ${jonas.friends[0]}`);
*/
/********************************************************************** */
//Object Method
/*
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1999,
    job: 'student',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    //First way!
    // calcAge: function (birthYear) { //function expression cannot use declaration.
    //     return 2037 - birthYear;
    // }

    //Second way!
    // calcAge: function () {
    //     console.log(this);
    //     return 2037 - this.birthYear;
    // }

    //Third way
    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}. and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license `;
    }
};

console.log(jonas.calcAge());
// console.log(jonas['calcAge'](1999));
console.log(jonas.age);


//Challenge
//"Jonas is a 46-year old teacher. and he has a driver's license"
console.log(jonas.getSummary());
*/
/********************************************************************** */
/********************************************************************** */




/*
/* ************************* CHALLENGE #3 ********************************
Let's go back to Mark and John comparing their BMIs!

This time, let's use objects to implement the calculations! Remember: BMI = mass / (height * height) (mass in kg and height in meters).

Your tasks:

For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as fullName, mass and height.

Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property called bmi (lowercase), and also return it from the method.

Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.
//My code:
/* Write your code below. Good luck! 🙂

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  
  calcBMI: function () {
     this.bmi = this.mass / (this.height * this.height);
     return this.bmi;
  }
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  
  calcBMI: function () {
     this.bmi = this.mass / (this.height * this.height);
     return this.bmi;
  }
};

mark.calcBMI();
john.calcBMI();

if(mark.bmi > john.bmi)
{
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi}!`);
}
else
{
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi}!`);
}



*/