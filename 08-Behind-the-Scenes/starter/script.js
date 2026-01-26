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
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // //Creating NEW variable with same name as outer scope's variable.
      // //firstName if current scope will be go first. If there is not firstName variable in current scope, it will look up the variable.
      //   const firstName = 'Steven';

      // //Reassigning outer scope's variable
      //   output = 'NEW OUTPUT';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      //   function add(a, b) {
      //     return a + b;
      //   }
    }
    // // Cant not do outside of block because const and let are in block scoped.
    // console.log(str);

    //However, with var we can do it:
    console.log(millenial);

    // //We also can not call add function right here because it is also in block if; And if we turn off the strict mode it will work.
    // add(2, 3);
  }

  printAge();

  return age;
}

const firstName = 'Jaden';
calcAge(1991);
