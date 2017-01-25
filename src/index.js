'use strict';

/**
 * Import styles
 */
import styles from './styles.css'

/**
 * Require libraries
 */
const morphdom = require('morphdom');

const STEP = 5;
const ITEM_HEIGHT = 300;
const ITEM_GAP = 50;
const SCROLL_POSITION_DELTA = STEP * (ITEM_HEIGHT + ITEM_GAP);

let offset = 0;

const getNewList = offset => {
	let list = '<ul class="list js-list">';
	for (let i = 1; i <= 2 * STEP; i++) {
		list += `<li class="list__item">${offset + i}</li>`;
	}
	list += '</ul>';

	return list;
};

const listWrap = document.documentElement.querySelector('.js-list-wrap');

listWrap.innerHTML = getNewList(offset);

const list = document.documentElement.querySelector('.js-list');

// Handle next button
const nextButton = document.documentElement.querySelector('.js-button-next');
nextButton.addEventListener('click', () => {
	offset = offset + STEP;

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
