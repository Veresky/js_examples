'use strict';

var str = "2131232 112 312 sdad viagra ";

function ucFirst (argument) {
	if (typeof argument != 'string') return 'Ошибка: в функцию передана не строка'; 
	if (argument.length == 0) return 'Ошибка: строка пустая';
var firstLetter = argument[0];

return firstLetter.toUpperCase() + argument.slice(1);
}



function checkSpan (argument) {
	if (typeof argument != 'string') return 'Ошибка: в функцию передана не строка'; 
	if (argument.length == 0) return 'Ошибка: строка пустая';

	argument = argument.toLowerCase();
	if (~argument.indexOf('viagra', 0) || ~argument.indexOf('xxx', 0)) {
			return true;
	}

	return false;
}



function truncateStr (str, maxLength) {
	maxLength = maxLength || 20;
	if (typeof str != 'string') return 'Ошибка: в функцию передана не строка'; 
	if (str.length == 0) return 'Ошибка: строка пустая';

	if (str.length - 1 > maxLength) {
		return str.slice(0, maxLength - 3) + "...";
	}

	return str;

}

console.log(truncateStr("Очень длинная строка, которую необходимо обрезать"));