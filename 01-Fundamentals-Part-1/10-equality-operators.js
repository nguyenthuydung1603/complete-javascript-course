// Equality Operators: == vs. ===

const age = 18;
if (age === 18) console.log('You just became an adult :D (strict)');

// === both values are the same. it's strict
// == loose equality -> does not coersion
// '18' === 18 -> false
// '18' == 18 -> true

if (age === 18) console.log('You just became an adult :D (loose');
// clean code => ADVOID loose equality

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log('Cool! 23 iis an amazing number')
} else if (favourite === 7) {
  console.log('7 is also a cool number')
} else if (favourite === 9) {
  console.log('9 is also a cool number')
} else {
  console.log('Number is not 23 or 7 or 9')
}

if (favourite !== 23) console.log('Why not 23?');
