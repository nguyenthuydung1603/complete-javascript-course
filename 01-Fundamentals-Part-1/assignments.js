// https://codingheroes.io/assignments/javascript-fundamentals-part-1.html

/*
//Values and Variables
let country = "VietNam";
let contient = "Asia";
let population = 100;

console.log(country);
console.log(contient);
console.log(population);
*/

/*
//Data types
let isIsland = false;
let language;

console.log(isIsland);
console.log(population);
console.log(country);
console.log(language);
*/

/*
//let, const and var
language = 'Vietnamese';
const country = "VietName";
const contient = "Asia";
const isIsland = false;
// isIsland = true;
*/

/*
//Basic operators
let populationVietNam = 100;
let halfPopulationVietNam = 100 / 2;
console.log(halfPopulationVietNam);

populationVietNam++;
console.log(populationVietNam);

let populationFinland = 6;
const isVNHaveMorePeopleThanFinland = populationVietNam > populationFinland;
console.log(isVNHaveMorePeopleThanFinland)

let populationAverageCountry = 33;
const isVNHaveLessPeopleThanAverageCountry = populationVietNam < populationAverageCountry;
console.log(isVNHaveLessPeopleThanAverageCountry);

let description = country + ' is in ' + contient + ', and its ' + population + ' million people speak ' + language;
console.log(description);
*/

/*
//Strings and Template Literals
let descriptionNew = `${country} is in ${contient}, and its ${population} million people speak ${language}`;
console.log(descriptionNew);
*/

/*
//Taking Decisions: if / else Statements
if (population > 33) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(`${country}'s population is ${(33 - population) / 2} below average`);
};
*/

/*
//Type conversion and coersion
console.log('9' - '5'); // -> 4
console.log('19' - '13' + '17'); // -> '617
console.log('19' - '13' + 17); // -> 23
console.log('123' < 57); // -> false
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 1143
*/

/*
//Equality operators: == vs ===

let numNeighbours = Number(prompt('How many neighbour countries does your contry have?'));
if (numNeighbours === 1) {
  console.log('Only 1 border!')
} else if (numNeighbours > 1) {
  console.log('More than 1 border')
} else {
  console.log('No borders'); 1
}
*/

/*
//Logical Operators

const country = "Viet Nam";
const language = "Vietnamese";
let population = 100;
const isIsland = false;

if (language === "English" && population < 50 && isIsland
  === false) {
  console.log(`You should live in ${country}`);
} else {
  console.log(`${country} does not meet your criteria :(`)
}
*/

/*
//The switch Statement
const language = 'english';
switch (language) {
  case 'chinese':
  case 'mandarin':
    console.log('MOST number of native speakers!');
    break;
  case 'spanish':
    console.log('2nd place in number of native speakers');
    break;
  case 'english':
    console.log('3rd place');
    break;
  case 'hindi':
    console.log('Number 4');
    break;
  case 'arabic':
    console.log('5th most spoken language');
    break;
  default:
    console.log('Great language too :D')
}
*/

/*
//Ternary operator
const country = 'VietNam';
let population = 100;
population > 33 ? console.log(`${country}'s population is above average`) : console.log(`${country}'s population is below average`)

console.log(
  `${country}'s population is ${population > 33 ? 'above' : 'below'} average`
);
*/