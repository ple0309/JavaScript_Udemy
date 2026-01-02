/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Jaden');
console.log(23);

let firstName = "Jaden"
console.log(firstName)

let jaden_le = "JL";
let $function = 27;
//not let Persion = 'Jaden' shoudl be camelCase like: firstName,....

let PI = 3.1415; //full upper case is constant variable.

let myFirstJob = 'Programmer';
let myCurrentJob = 'Student';

let job1 = 'programmer';
let job2 = 'student';

console.log(myFirstJob);


//Data Type
let javaScriptIsFun = true;
console.log(true);

// console.log(typeof true);
console.log(typeof javaScriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jaden');

javaScriptIsFun = 'YES';
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);



//With 'let' can change values later;(mutable)
let age = 30;
age = 31;

//const cannot be changed.(immutable)
const birthYear = 1991;
//birthYear = 1990;
// const job;

var job = 'programmer';
job = 'teacher';

lastName = 'Le';
console.log(lastName);


//math operator
const now = 2037;
const ageJaden = now - 1999;
const ageSarah = now - 2018;
console.log(ageJaden, ageSarah);


console.log(ageJaden * 2, ageJaden / 2, 2 ** 3);
// 2 ** 3 mean 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jaden';
const lastName = 'Le';
console.log(firstName + ' ' + lastName);

//Assignemt operator
let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
x--;
console.log(x);


//comparison operators
console.log(ageJaden > ageSarah); // >, <, >= , <=
console.log(ageJaden >= 18);

const isFullAge = ageJaden >= 18;

console.log(now - 1991 > now - 2018);
console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (15 + 25) / 2;
console.log(averageAge);


const firstName = 'Phuc';
const job = 'student';
const birthYear = 1999;
const year = 2025;


const phuc = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';

console.log(phuc);

//backstick to use with variable.
const phucNew = `I'm ${firstName}, a ${year - birthYear} year olds ${job}!`;
console.log(phucNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple\n\
lines');

console.log(`String
multiple
lines`);

*/

/*const age = 15;

if (age >= 18) {
    console.log('Sarah can start driving license 🚗');
}
else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 1991;
let century;

if (birthYear <= 2000) {
    century = 20;
}
else {
    century = 21;
}

console.log(century);*/





/*Converting string into number.
//Type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear); //Number will change string into int.
console.log(inputYear + 18); // 18 should be string not int in this time.
console.log(Number(inputYear) + 18); // 18 should be int in this time.
console.log(Number('Jaden'));
console.log(typeof NaN);

console.log(String(23), 23); //String() change into string.

//type coercion
//JS will behind the scence change it.
console.log('I am ' + 23 + ' years old'); //JS automatically change 23 into string.
console.log('23' - '10' - 3); //JS automatically change 23 and 10 into int.
console.log('23' * '2'); //JS automatically transfer into number.
console.log('23' / '2'); //JS automatically transfer into number.

let n = '1' + 1; //'11'
n = n - 1; //10
console.log(n);

let a = 2 + 3 + 4 + '5'; //2 + 3 + 4 will be number 9 + '5' changing them into string.
console.log(a);

let b = '10' - '4' - '3' - 2 + '5'; //JS will go over the datatype from left to right.
console.log(b);*/




/*
//5 falsy values: 0, '', undefined, null, NaN
//5 of these will be change into false when converting to a boolean.
//Everything else will be true.

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jaden'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) { //money will be converted into boolean into if/else statement
    console.log("Don't spend it all ;)");
} else {
    console.log("You should get a job!");
}

let height;
if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED');
}
*/




/*
//Equality operator == vs ===.
const age = '18';
if (age === 18) console.log('You just became an adult (strict)');

//IMPORTANT: '18' == 18 will be true type coercion will change 18 into number.
//However: '18' === 18 will be false.

if (age == 18) console.log('You just became an adult (loose)');

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) { // '23' == 23 and change promt into number then 23 === 23
    console.log('Cool! 23 is an amazing number!');
} else if (favourite === 7) {
    console.log('7 is also a cool number');
} else {
    console.log('Number is not 23 or 7');
}

if (favourite !== 23) {
    console.log('Why not 23?');
}
*/



/*
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//     console.log('Jaden is able to drive!');
// }
// else {
//     console.log('Someone else should drive...');
// }

const isTired = true; // C
console.log(hasDriversLicense && hasGoodVision && !isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Jaden is able to drive!');
} else {
    console.log('Someone else should drive...');
}
*/



//the switch statement
// const day = 'thursday';

// switch (day) {
//     case 'monday': // day === 'monday'
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//         break; //if not having break it will run the code in this case too.
//     case 'tuesday':
//         console.log('Prepare theory videos');
//         break;
//     case 'wednesday': //this trick to combine both days. wed and thurs
//     case 'thursday':
//         console.log('Write code example');
//         break;
//     case 'friday':
//         console.log('Record videos');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy the weekend');
//         break;
//     default:
//         console.log('Not a valid day!');
// }

// if (day === 'monday') {
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
// } else if (day === 'tuesday') {
//     console.log('Prepare theory videos');
// }
// else if (day === 'wednesday' || day === 'thursday') {
//     console.log('Write code example');
// }
// else if (day === 'friday') {
//     console.log('Record videos');
// }
// else if (day === 'saturday' || day === 'sunday') {
//     console.log('Enjoy the weekend');
// }
// else {
//     console.log('Not a valid day!');
// }




//Statement and expression
// 3 + 4
// 1991
// true && false && !false

// if (23 > 10) {
//     const str = '23 is bigger';
// }

// const me = 'Jaden';
// console.log(`I'm ${2037 - 1991} years old. ${me}`);



/*
//**** Conditional (Ternary) Operator
const age = 15;
age >= 18 ? console.log('I like to drink wine.') : console.log('I like to drink water.');


const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine';
}
else {
    drink2 = 'water';
}

console.log(drink2);


console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);
*/