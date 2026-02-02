'use strict';
//------------------------- Scoping in Practice 1 ---------------------
//---------------------------------------------------------------------
// function calcAge(birthYear) {
//   const age = 2037 - birthYear;
//   console.log(firstName);
//   return age;
// }

// const firstName = 'Jaden';

// calcAge(1999);

//****************************** NOTE *************************** */
// // The function is called after firstName global variable in the global execution variable environment.
// // That is why the code worked and printed out firstName is the function although it is not declared in it.
//---------------------------------------------------------------------
//---------------------------------------------------------------------

//------------------------- Scoping in Practice 2 ---------------------
//---------------------------------------------------------------------
// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     const output = `${firstName}, You are ${age}, born in ${birthYear}`;
//     console.log(output);
//   }

//   printAge();

//   return age;
// }

// const firstName = 'Jaden';
// calcAge(1999);

//****************************** NOTE *************************** */
// //We can not do the below code because outer scope.:
// console.log(age);

// //The same with printAge(); we can not access it.
// printAge();
//---------------------------------------------------------------------
//---------------------------------------------------------------------

//------------------------- Scoping in Practice 3 ---------------------
//---------------------------------------------------------------------
// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     const output = `${firstName}, You are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       // //Creating NEW variable with same name as outer scope's variable.
//       // //firstName if current scope will be go first. If there is not firstName variable in current scope, it will look up the variable.
//       //   const firstName = 'Steven';

//       // //Reassigning outer scope's variable
//       //   output = 'NEW OUTPUT';

//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);

//       //   function add(a, b) {
//       //     return a + b;
//       //   }
//     }
//     // // Cant not do outside of block because const and let are in block scoped.
//     // console.log(str);

//     //However, with var we can do it:
//     console.log(millenial);

//     // //We also can not call add function right here because it is also in block if; And if we turn off the strict mode it will work.
//     // add(2, 3);
//   }

//   printAge();

//   return age;
// }

// const firstName = 'Jaden';
// calcAge(1991);
//---------------------------------------------------------------------

//----------------------  Hoisting and TDZ in Practice ----------------
// //NOTE************** ********************/
// //var can be print out but it will be undefined because it is initialized after console.
// //but let and const will be shown the error.
// //************************************ */
// // Variables
// console.log(me);
// // console.log(job);
// // console.log(year);

// var me = 'Jonas';
// // let job = 'teacher';
// // const year = 1991;

// // Functions
// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   //This one will be work when console before declare the function because it is hoisted.
//   return a + b;
// }
// const addExpr = function (a, b) {
//   //However const and let can not be hoisted, so it will show the error.
//   return a + b;
// };
// const addArrow = (a, b) => a + b; //This one is also can not access.

// //If we change them into var like:
// //var addExpr = function(a,b){return a+b}; //it means that 'undefined(2,3)' so is not function.
//------------------------------------------------------------------------

//------------------------ this Keyword in Practice ------------------
// console.log(this); //This will return window

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   // console.log(this); //It will be undefined.(get its own this keywords)
// };

// calcAge(1991);

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   // console.log(this); //This will return window because it does not get its own this keyword.
// };

// calcAgeArrow(1980);

// const jonas = {
//   year: 1991,

//   calcAge: function () {
//     console.log(this); //point to this jonas object.
//     console.log(2037 - this.year);
//   },
// };
// jonas.calcAge();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = jonas.calcAge; //borrowed method.
// matilda.calcAge();

// //Because f copy jonas's function only without year. => undefined.
// const f = jonas.calcAge;
// f();

//------------------------ Regular Function and Arrow Function ------------------

// var firstName = 'Matilda'; //this keyword in greet arrow method will get this firstName from window.

// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,
//   calcAge: function () {
//     // console.log(this);
//     console.log(2037 - this.year);

//     //Solution 1
//     // //Function in the function can not call this keyword.
//     // //To do it we have to do other way.
//     // //First:
//     // const self = this;

//     // const isMillenial = function () {
//     //   //Cannot work.
//     //   // console.log(this);
//     //   // console.log(this.year >= 1991 && this.year <= 1996);

//     //   console.log(self);
//     //   console.log(self.year >= 1981 && self.year <= 1996);
//     // };

//     //Solution 2
//     //Arrow function inherits the this keyword from the parent scope
//     const isMillenial = () => {
//       console.log(this); //Uses the this keyword from its parent scope.
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };

//     isMillenial();
//   },

//   //Arrow Function
//   // greet: () => {
//   //   console.log(this); //This keyword point to window object.
//   //   console.log(`Hey ${this.firstName}`);
//   // }, //this will use the this keyword from the global scope. so undefined.

//   greet: function () {
//     console.log(this); //This keyword point to window object.
//     console.log(`Hey ${this.firstName}`);
//   }, //this will use the this keyword from the global scope. so undefined.
// };
// //Calling with arrow function
// // jonas.greet(); //Hey undefined. (Why not Hey Jonas)? Because arrow function does not get its own this keyword.
// // console.log(this.firstName); //window object then undefined.

// //Calling with regular function
// jonas.greet(); //Hey Jonas.

// //Trying.....
// jonas.calcAge();

// //Arguments keyword only exist in regular functions.
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };

// addExpr(2, 5);
// addExpr(2, 5, 8, 12);

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// addArrow(2, 5, 8);

//------------------------ Memory Management: Primitives vs. Objects ------------------
/*
//How and where are variables created in JavaScript?
//Unlike other langues, memory is automatically managed by JavaScript behind the scenes.
//Every value we create in JavaScript goes through a memory lifecycle.

//1. Allocate memory
let temp = 23.7;
//Whenever we assign a value to a new variable, the engine automatically allocates (reserves) a piece of memory to store the value.

//2. Use memory
temp = temp + 5;
round(temp);
//While code is running, the value is written, read, and updated in the allocated piece of memory

//3. Release memory
// temp is removed from memory
//When no longer needed, the value is deleted from memory to free up resources. The released memory is used for new values.
*/
//Primitives Or Objects
//1. Primitives: number, string, boolean, undefined, null, symbol, BigInt.
//2. Objects: Object literals, Arrays, Functions, Many more.

//Primitives stored in call stack.
//Objects stored in heap.

/*
//References to object stored in call stack.
const location = {
  city: 'Faro',
  country: 'Portugal',
};
const newLocation = location;
newLocation.city = 'Lisbon'; //will change the object from location and newLocation.
// variable location in call stack but reference pointing city = "Faro" and country = "Portugal" in heap.
// newLocation copy from location also pointing the same in heap with city and country.
*/

////////////////////////////////////////////////////////////////////////////////
//Object References in Practice(Shallow vs. Deep Copies)

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

function marryPerson(originalPerson, newLastName) {
  originalPerson.lastName = newLastName;
  return originalPerson;
}
const marriedJessica = marryPerson(jessica, 'Davis');

// const marriedJessica = jessica;
// marriedJessica.lastName = 'Davis';

console.log('Before:', jessica);
console.log('After:', marriedJessica);

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

//Shallow copy
//... operator can make lastName to change in only jessicaCopy, but jessicaCopy.family.push() something it will affect jessica2 and jessicaCopy at the same time.
//Because both point to the same pbject reference in the heap that is family.
const jessicaCopy = { ...jessica2 };
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');
console.log('Before:', jessica2);
console.log('After:', jessicaCopy);

//Deep copy/clone
const jessicaClone = structuredClone(jessica2);
jessicaClone.family.push('Jake');
jessicaClone.family.push('Dave');
console.log('Original:', jessica2);
console.log('Clone:', jessicaClone);
