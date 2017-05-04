'use strict';

var canvas = document.getElementById('canvas-element');

var COLORS = {
  red: 'rgb(200, 0, 0)'
};

function findFreeNumber(array) {
  var setsNumbersArray = [];

  for (var i = array.length - 1; i >= 0; i--) {
    if (array[i].set) {
      setsNumbersArray.push(array[i].set);
      var setsExist = true;
    }
  }

  if (setsExist == true) {
    var max = Math.max.apply(null, setsNumbersArray);
  } else {
    return 1;
  }

  return  max + 1;
}

function Maze() {
  this.ctx = canvas.getContext('2d');
  this.XMAX = $(canvas).attr('width');
  this.YMAX = $(canvas).attr('height');


  this.cellsCount = 0;
  this.rowsCount = 20;
  this.UNIT = this.XMAX / this.rowsCount;

  this.initCells();
  this.drawCells();
}

Maze.prototype.initCells = function () {
  this.cells = [];
  var cell;

  //create first row
  var row = [];
  for (var i = 0; i < this.rowsCount; i++) {
    cell = {};
    row.push(cell);
  }

  //create maze
  for (var j = 0; j < this.rowsCount; j++) {

    for (var i = 0; i < this.rowsCount; i++) {
      row[i].x = i * this.UNIT;
      row[i].y = j * this.UNIT;
    }

    if (j != 0) {
      for (var i = 0; i < this.rowsCount; i++) {
        row[i].rightBorder = 0;
        if (row[i].lowerBorder) {
          row[i].set = null;
          row[i].lowerBorder = 0
        }
      }

    }

    //assign set number
    for (var i = 0; i < this.rowsCount; i++) {
      if (!row[i].set) {
        row[i].set = findFreeNumber(row);
      }
    }

    //create right border
    for (var i = 0; i < this.rowsCount - 1; i++) {

      //if two cell's in one set we have to create border between them;
      if (row[i].set == row[i + 1].set) {
        row[i].rightBorder = 1;
      } else {
        row[i].rightBorder = Math.round(Math.random());
      }

      if (!row[i].rightBorder) {
        row[i + 1].set = row[i].set;
      }
    }

    //create lower border
    for (var i = 0; i < this.rowsCount; i++) {
      var currentSet = row[i].set;
      var cellsInSetWithoutLowerBorder = 0;


      for (var k = 0; k < this.rowsCount; k++) {
        if (row[k].set == currentSet && !row[k].lowerBorder) {
          cellsInSetWithoutLowerBorder++;
        }
      }

      if (cellsInSetWithoutLowerBorder > 1) {
        row[i].lowerBorder = Math.round(Math.random());
      }
    }

    if (j == this.rowsCount - 1) {

      for (var i = 0; i < this.rowsCount - 1; i++) {
        if (row[i].set != row[i + 1].set) {
          row[i].rightBorder = 0;
          row[i + 1].set = row[i].set;
        }
      }

    }
    var newArr = JSON.parse(JSON.stringify(row));
    this.cells.push(newArr);
  }

  //create outer borders;
  for (var i = 0; i < this.rowsCount; i++) {
    this.cells[0][i].upperBorder = 1;
    this.cells[this.rowsCount - 1][i].lowerBorder = 1;

    this.cells[i][0].leftBorder = 1;
    this.cells[i][this.rowsCount - 1].rightBorder = 1;
  }


};

Maze.prototype.drawCells = function () {
  for (var j = 0; j < this.rowsCount; j++) {
    for (var i = 0; i < this.rowsCount; i++) {
      var cell = this.cells[j][i];
      this.drawCellSet(cell);
      if (cell.upperBorder) this.drawCellBorder(cell, 'upper');
      if (cell.leftBorder) this.drawCellBorder(cell, 'left');
      if (cell.rightBorder) this.drawCellBorder(cell, 'right');
      if (cell.lowerBorder) this.drawCellBorder(cell, 'lower');
    }
  }
};

Maze.prototype.drawCellSet = function (cell) {
  this.ctx.font = "10px Arial";
  this.ctx.fillText(cell.set, cell.x + 5, cell.y + 15);
};

Maze.prototype.drawCellBorder = function (cell, borderType) {
  this.ctx.strokeStyle = COLORS.red;
  this.ctx.lineWidth = 3;
  switch (borderType) {
    case 'upper':
      this.ctx.beginPath();
      this.ctx.moveTo(cell.x, cell.y);
      this.ctx.lineTo(cell.x + this.UNIT, cell.y);
      this.ctx.closePath();
      this.ctx.stroke();
      break;
    case 'lower':
      this.ctx.beginPath();
      this.ctx.moveTo(cell.x, cell.y + this.UNIT);
      this.ctx.lineTo(cell.x + this.UNIT, cell.y + this.UNIT);
      this.ctx.closePath();
      this.ctx.stroke();
      break;

    case 'left':
      this.ctx.beginPath();
      this.ctx.moveTo(cell.x, cell.y);
      this.ctx.lineTo(cell.x, cell.y + this.UNIT);
      this.ctx.closePath();
      this.ctx.stroke();
      break;
    case 'right':
      this.ctx.beginPath();
      this.ctx.moveTo(cell.x + this.UNIT, cell.y);
      this.ctx.lineTo(cell.x + this.UNIT, cell.y + this.UNIT);
      this.ctx.closePath();
      this.ctx.stroke();
      break;
  }
};

var newMaze = new Maze();


