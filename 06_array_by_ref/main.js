'use strict';
var array = [5, 8, 15, 3, 65, 25, 12];

simpleSort(array);
function simpleSort(arr) {
	arr.sort(function (a, b) { return b-a})
}

var array2 = ['f', 'o', 'o'];

simpleConcat(array2);
function simpleConcat(arr) {
	arr.concat(['b','a','r']);
}



console.log(array);
console.log(array2);