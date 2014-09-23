/*
	Source:
	van Creij, Maurice (2014). "useful.log.js: Improvised Debug Console.", version 20140919, http://www.woollymittens.nl/.

	License:
	This work is licensed under a Creative Commons Attribution 3.0 Unported License.
*/

// public object
var useful = useful || {};

(function(){

	// invoke strict mode
	"use strict";

	// private functions
	var popup, messages = [];

	useful.log = function () {
		var a, b, message;
		// for all arguments
		for (a = 0, b = arguments.length; a < b; a += 1) {
			// add the log entry to the top
			message = (arguments[a] !== null && arguments[a] !== undefined) ? JSON.stringify(arguments[a]) : arguments[a];
			messages.push(message);
		}
		// if the log window exists
		if (popup && /div/i.test(popup.nodeName)) {
			// write to the log
			popup.innerHTML = messages.reverse().join('<br/>');
		}
		// else create one
		else {
			popup = document.createElement('div');
			popup.style.position = 'fixed';
			popup.style.right = '0px';
			popup.style.bottom = '0px';
			popup.style.width = '320px';
			popup.style.height = '240px';
			popup.style.color = 'Black';
			popup.style.backgroundColor = 'Yellow';
			popup.style.opacity = 0.7;
			popup.style.padding = '1em';
			popup.style.zIndex = 100000;
			popup.style.overflow = 'auto';
			popup.innerHTML = messages.reverse().join('<br/>');
			document.body.appendChild(popup);
		}
	};

	// return as a require.js module
	if (typeof module !== 'undefined') {
		exports = module.exports = useful.log;
	}

})();
