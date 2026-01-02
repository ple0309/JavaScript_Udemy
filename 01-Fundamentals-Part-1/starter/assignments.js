//Value and Variables
const country = "USA";
const continet = "North America";
let population = 10;

// console.log(country);
// console.log(continet);
// console.log(population);

/*
    ObJects and Primitives

    Value will have object and primitive:

    Object: let me = {
                name : 'Jaden'
            };

    Primitive: let firstName = 'Jaden';
               let age = 30;

    7 Primitive Data Types:
        1. Number: let age = 23;
        2. String: let firstName = 'Jaden';
        3. Boolean: let fullAge = true;
        4. Undefined: let children; (empty value)
        5. Null: (also means 'empty value')
        6. Symbol (ES2015): Value that is unique and cannot be changed. (not useful for now)
        7. BigInt(ES2020): Larger integers than the Number type can hold.

    JavaScript has dynamic typing: we do not have to manually define the data type of the value stored in a variable. Instead, date types are determined automatically.



//Data types
let finland = 600;
let isIsland = true;
isIsland = false;
const language = 'English';
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

console.log("1. Population in half: ", population / 2);
console.log("2. Population increase 1: ", population + 1);
console.log("3. Compare: ", population > finland);

const description = country + ' is in ' + continet + ' and its 11 millition people speak ' + language;
console.log(description);


//Assignment if/else statements
if (population > 33) {
    console.log(`${country}'s population is above average`);
} else {
    console.log(`${country}'s population is ${33 - population} million below average`);
}

*/




// ********** CHALLENGE #3 ************
// There are two gymnastics teams: Dolphins and Koalas.They compete against each other 3 times.The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data included below.The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.
// 2. Compare the team's average scores to determine the winner of the competition, and print to the console:
// "Dolphins win the trophy" if Dolphins win, or
// "Koalas win the trophy" if Koalas win, or
// "Both win the trophy" if their average scores are equal.
// TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.

//Code:
// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;

// if(scoreDolphins === scoreKoalas)
// {
//     console.log('Both win the trophy');
// }else if (scoreDolphins > scoreKoalas)
// {
//     console.log('Dolphins win the trophy');
// }
// else
// {
//     console.log('Koalas win the trophy');
// }





// ********** CHALLENGE #4 ************
// Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

// Your tasks:

// Calculate the tip, depending on the bill value. Create a variable called tip for this. It's not allowed to use an if...else statement (if it's easier for you, you can start with an if...else statement, and then try to convert it to a ternary operator).

// Print a string to the console containing the bill value, the tip, and the final value (bill + tip).

// Example: The bill was 275, the tip was 41.25, and the total value 316.25.

// Note: Use the values of the bill and tip variables to construct this string. Don't hard-code them 🙂

// TEST DATA: Test with different bill values: 275, 40, and 430

// HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2

// HINT 2: Value X is between 50 and 300, if it's >= 50 && <= 300 😉
//Code:
// const bill = 275;

// /* Write your code below. Good luck! 🙂 */
// const tip = (bill >= 50 && bill <= 300) ? ((15/100) * bill) : ((20/100)*bill);

// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);