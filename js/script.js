window.addEventListener('load', function(){
	var el = document.getElementById('on');
	var checkbox = document.getElementById('checkbox');

	if ("onpropertychange" in checkbox) { // старый IE
	    checkbox.onpropertychange = function() {
	      el.classList.toggle("disabled");
	    };
	} else { // остальные браузеры
	    checkbox.onchange = function() {
	      el.classList.toggle("disabled");
	    };
	}
}, false);