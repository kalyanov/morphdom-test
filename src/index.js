'use strict';

/**
 * Import styles
 */
import styles from './styles.css'

/**
 * Require libraries
 */
const morphdom = require('morphdom');

const STEP = 2;
const ITEM_HEIGHT = 500;
const ITEM_GAP = 50;
const SCROLL_POSITION_DELTA = STEP * (ITEM_HEIGHT + ITEM_GAP);

let offset = 0;

const list = document.documentElement.querySelector('.js-list');

const getNewList = offset =>
	`<ul class="list js-list">
		<li class="list__item">${offset + 1}</li>
		<li class="list__item">${offset + 2}</li>
		<li class="list__item">${offset + 3}</li>
		<li class="list__item">${offset + 4}</li>
	</ul>`;

// Handle next button
const nextButton = document.documentElement.querySelector('.js-button-next');
nextButton.addEventListener('click', () => {
	offset = offset + STEP;

	const list = document.documentElement.querySelector('.js-list');
	morphdom(list, getNewList(offset));

	window.document.body.scrollTop -= SCROLL_POSITION_DELTA;
});

// Handle prev button
const prevButton = document.documentElement.querySelector('.js-button-prev');
prevButton.addEventListener('click', () => {
	offset = offset - STEP;
	const newList = getNewList(offset);

	morphdom(list, newList);

	window.document.body.scrollTop += SCROLL_POSITION_DELTA;
});
