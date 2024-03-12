'use strict';
/*
//Function
function describeCountry(country, population, capitalCity) {
  const describeCountry = `${country} has ${population} million people and its capital city is ${capitalCity}`;
  return describeCountry;
}

const describeVietNam = describeCountry('VietNam', 100, 'HaNoi');
const describeJapan = describeCountry('Japan', 50, 'Tokyo');
const describeKorea = describeCountry('Korea', 45, 'Seoul');

console.log(describeVietNam,describeJapan, describeKorea);
*/

/*
//Function Declarations vs Expressions
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const percentageOfWorld2 = function (population){
  return (population / 7900) * 100;
}

const percPortugal1 = percentageOfWorld1(10);
const percChina1 = percentageOfWorld1(1441);
const percUSA1 = percentageOfWorld1(332);4

console.log(percPortugal1, percChina1, percUSA1);
*/

/*
//Arrow Funtions
const percentageOfWorld3 = population => (population / 7900) * 100;
const percPortugal3 = percentageOfWorld3(10);
const percChina3 = percentageOfWorld3(1441);
const percUSA3 = percentageOfWorld3(332);

console.log(percPortugal3, percChina3, percUSA3);

*/

/*
//Functions Calling Other Funtions
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

function describePopulation(country, population) {
  const perc = percentageOfWorld1(population);
  return `${country} has ${population} million people, which is about ${perc} of the world`;
}
console.log(describePopulation('Portugal', 10));
console.log(describePopulation('China', 1441));
console.log(describePopulation('USA', 332));
*/

/*
//Introduction to Arrays
const populations = [100, 80, 70, 50];
console.log(populations.length === 4);

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];
console.log(percentages);
*/

/*
// Basic Array Operations (Methods)
const neighbours = ['Laos', 'Cambodia', 'Thailand'];
neighbours.push('Utopia');
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (!neighbours.includes('Germany')) {
  console.log('Probably not a central european country :D')
}

neighbours[neighbours.indexOf('Thailand')] = 'China';
console.log(neighbours);
*/

/*
//Introduction to Objects
const myCountry = {
  country: 'VietNam',
  capital: 'HaNoi',
  language: 'Vietnamese',
  population: 100,
  neighbours: ['Laos', 'Cambodia', 'Thailand']
};
*/

/*
//Dot bs Bracket Notation
const myCountry = {
  country: 'VietNam',
  capital: 'HaNoi',
  language: 'Vietnamese',
  population: 100,
  neighbours: ['Laos', 'Cambodia', 'Thailand']
};

console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
);

myCountry.population += 2;
console.log(myCountry.population);
myCountry['population'] -= 2;
console.log(myCountry.population);
*/

/*
//Object Methods
const myCountry = {
  country: 'VietNam',
  capital: 'HaNoi',
  language: 'Vietnamese',
  population: 100,
  neighbours: ['Laos', 'Cambodia', 'Thailand'],
  describe: function () {
    console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`);
  },
  checkIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
    // return this.isIsland;
  }
};
myCountry.describe();
myCountry.checkIsland();

console.log(myCountry);
*/

/*
//Loop
for (let i = 1; i <= 50; i++) {
  console.log(`Voter number ${i} is currently voting`);
}
*/

/*
// Looping arrays, breaking and continuing
const populations = [100, 80, 70, 50];

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const percentages2 = [];
for (let i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld1(populations[i]));
}

console.log(percentages2);
*/

/*
// Looping backwards and loops in loops
const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let j = 0; j < listOfNeighbours[0].length; j++) {
    console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
  }
}
*/

/*
// The while Loop
const percentages3 = [];

let i = 0;
while (i < populations.length) {
  const perc = percentageOfWorld1(populations[i]);
  percentages3.push(perc);
  i++;
}

console.log(percentages3);
*/