// Type Conversion and Coercion

// Type conversion

const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);
//JS can cicert only 3 type: string, number, boolean

// Type coercion: 2 values have different type
console.log('I am' + 23 + 'years old');
console.log('23' - '10' - 3);
console.log('23' * 2);

let n = '1' + 1; //'11'
n = n - 1;
console.log(n);
