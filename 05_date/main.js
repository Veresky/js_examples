'use strict';
var date = new Date();
date.setFullYear(2012, 1, 19);
date.setHours(3, 12);

var div = document.getElementById("date");
div.textContent = date;
