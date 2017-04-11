'use strict';

var tmpl = _.template(document.getElementById('table-template').innerHTML);

var result = tmpl({count: 5});
document.write( result );