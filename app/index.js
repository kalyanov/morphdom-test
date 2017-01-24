'use strict';

/**
 * Initialize test.
 * @param {Event} event
 */
var init = function (event) {
	console.log('Window is loaded!');
	console.log(event);
};

window.addEventListener('load', init);