'use strict';

var a = 42;
var b = 'abc';
var c;
var d = null;

if ((a && d) || c) {
	console.log('yep');
} else {
	console.log('none');
}