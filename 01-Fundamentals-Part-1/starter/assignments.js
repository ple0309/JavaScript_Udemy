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
*/


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