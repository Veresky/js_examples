'use strict';

var h_step = 0.1;
var y0 = 1;
function baseFunc(x, y) {
  return x + y
}

function findNextY(xN, yN, h) {
  var k1 = baseFunc(xN, yN);
  var k2 = baseFunc(xN + h / 2, yN + h * k1 / 2);
  var k3 = baseFunc(xN + h / 2, yN + h * k2 / 2);
  var k4 = baseFunc(xN + h, yN + h * k3);
  return yN + h / 6 * (k1 + 2 * k2 + 2 * k3 + k4);
}

function findAllY(startX, endX, h, y0) {
  var yPrev = y0;
  for (var n = startX; n <= endX; n += h) {
    var yN = findNextY(n, yPrev, h);
    console.log(yN);
    yPrev = yN;
  }
}

findAllY(0, 0.5, h_step, y0);