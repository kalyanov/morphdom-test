'use strict';

/**
 * Import styles
 */
import styles from './styles.css';

import items from './items.json';

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
	let itemsString = '';

	for (let i = 1; i <= 2 * STEP; i++) {
		const articleId = offset + i;
		const article = items[Math.abs(articleId % 10)];

		itemsString +=
			`<li class="list__item">
				<div class="article">
					<h2 class="article__title">${articleId}. Article</h2>
					<div class="article__text">${article.text}</div>
				</div>
			</li>`;
	}

	return `<ul class="list js-list">${itemsString}</ul>`;
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
