'use strict';

// {
//   let c= 0;
//   console.log(c);
//
//
// }

var simpleArray = [2, 4, 5, 6, 8, 15];

var [a, b, ...other] = simpleArray;

console.log(a);
console.log(b);
console.log(other);