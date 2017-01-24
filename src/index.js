'use strict';

/**
 * Import styles
 */
import styles from './styles.css'

/**
 * Initialize test.
 * @param {Event} event
 */
const init = event => {
	console.log('Window is loaded!');
	console.log(event);
};

window.addEventListener('load', init);