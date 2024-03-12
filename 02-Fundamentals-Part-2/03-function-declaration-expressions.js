'use strict';

// Function Declarations vs. Expressions

// Function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(1991);
// Parameter is local variable in function
// is the kind of placeholder in the function
// Argument is actual value that we use to fill in that parameter

// Function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age1, age2);


