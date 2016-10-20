'use strict';
var thumb = document.querySelector(".thumb");
var slider = document.getElementById("slider");

thumb.addEventListener("mousedown", function(e) {
	var thumbCoords = getCoords(thumb);
	var shiftX = e.pageX - thumbCoords.left;
	var sliderCoords = getCoords(slider);
	
	thumb.ondragstart = function(e) {
		e.preventDefault();
	}
	document.addEventListener("mousemove", moveRunner)
	function moveRunner(e) {
		var newLeft = e.pageX - shiftX - sliderCoords.left;
		if (newLeft < 0) {
      newLeft = 0;
    }
		thumb.style.left = newLeft + 'px';
	}
	
	document.onmouseup = function() {
		document.removeEventListener("mousemove", moveRunner);
	}
})

function getCoords(elem) { // кроме IE8-
  var box = elem.getBoundingClientRect();

  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };

}