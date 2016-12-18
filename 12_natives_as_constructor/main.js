'use strict';

var str = new String("some text");
console.log(str);
console.log(Object.prototype.toString.call(str));
console.log(typeof str);
console.log(str instanceof String);
str = "some text";
console.log(str);
console.log(Object.prototype.toString.call(str));
console.log(typeof str);
console.log(str instanceof String);

var obj = {
	'property': 71
}
console.log(obj);