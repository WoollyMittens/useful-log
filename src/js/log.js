/*
	Source:
	van Creij, Maurice (2018). "log.js: Improvised Debug Console.", http://www.woollymittens.nl/.

	License:
	This work is licensed under a Creative Commons Attribution 3.0 Unported License.
*/

var log = function () {
	var a, b, message;
	window.log_popup = window.log_popup || null;
	window.log_messages = window.log_messages || [];
	// for all arguments
	for (a = 0, b = arguments.length; a < b; a += 1) {
		// add the log entry to the top
		message = (arguments[a] !== null && arguments[a] !== undefined) ? JSON.stringify(arguments[a]) : arguments[a];
		log_messages.push(message);
	}
	// if the log window exists
	if (log_popup && /div/i.test(log_popup.nodeName)) {
		// write to the log
		log_popup.innerHTML = log_messages.reverse().join('<br/>');
	}
	// else create one
	else {
		log_popup = document.createElement('div');
		log_popup.style.position = 'fixed';
		log_popup.style.right = '0px';
		log_popup.style.bottom = '0px';
		log_popup.style.width = '320px';
		log_popup.style.height = '240px';
		log_popup.style.color = 'Black';
		log_popup.style.backgroundColor = 'Yellow';
		log_popup.style.opacity = 0.7;
		log_popup.style.padding = '1em';
		log_popup.style.zIndex = 100000;
		log_popup.style.overflow = 'auto';
		log_popup.innerHTML = log_messages.reverse().join('<br/>');
		document.body.appendChild(log_popup);
	}
};

// return as a require.js module
if (typeof define != 'undefined') define(['log'], function () { return log });
if (typeof module != 'undefined') module.exports = log;
