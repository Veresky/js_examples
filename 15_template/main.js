'use strict';

var users = [
  {name: "Вася", age: 10},
  {name: "Петя", age: 15},
  {name: "Женя", age: 20},
  {name: "Маша", age: 25},
  {name: "Даша", age: 30},
];

var tmpl = _.template(document.getElementById('table-template').innerHTML);

var result = tmpl({users: users});
document.write( result );