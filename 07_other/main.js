'use strict';

var message;
var login = 'Директор';

message = (login == 'Вася') ? 'Привет' : (login == 'Директор') ? 'Здравствуйте' : (login == '') ? 'Нет логина' : '';

console.log(message);

console.log('----');

for (var i = 0; i <= 10; i++) {
	if ((i % 2) == 0) {
		console.log(i, '\n');
	}
}

i = -1;
while (i++ < 2) {
	console.log( "номер " + i + "!" );
}
var a1 = "somestring";
console.log(a1.sayHello);