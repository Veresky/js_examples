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


// function defer(f, ms) {
//   return function() {
//     setTimeout(() => f.apply(this, arguments), ms)
//   }
// }

// function defer(f, ms) {
//   return function() {
//     let args = arguments;
//     let ctx = this;
//     setTimeout(function() {
//       return f.apply(ctx, args);
//     }, ms);
//   }
// }


function defer(f, ms) {
  return function() {
    let args = arguments;
    let ctx = this;
    setTimeout(function() {
      f.apply(ctx, args);
    }, ms);
  }
}

function sayHi(who) {
  alert('Привет, ' + who);
}

debugger;
let sayHiDeferred = defer(sayHi, 2000);
sayHiDeferred("Вася"); // Привет, Вася через 2 секунды
