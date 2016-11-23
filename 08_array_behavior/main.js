'use strict';

var a = new Array(3);
var b = [undefined, undefined, undefined];
var c = [];
c.length = 3;
console.log(a);
console.log(b);
console.log(c);

console.log('array comparison:')

var a = new Array([1]);
var b = new Array([1]);

console.log(a + ""== b + "", a + "", b + "");

var q = new Boolean(false);
var w = new Number(0);
var e = new String("");

console.log( q && w && e);