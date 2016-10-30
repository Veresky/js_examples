'use strict';
var array = [5, 8, 15, 3, 65, 25, 12];

simpleSort(array);
function simpleSort(arr) {
	arr.sort(function (a, b) { return b-a})
}



console.log(array);