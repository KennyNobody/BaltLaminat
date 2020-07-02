import Choices from 'choices.js';
import SimpleBar from 'simplebar';
import noUiSlider from 'nouislider';
import wNumb from 'wnumb';

$(document).ready(function() {

	// Счетчики

	(function () {
		const counter = document.querySelectorAll('.counter');

		if (counter) {
			for (let i = 0; i < counter.length; i++) {
				let btnPrev = counter[i].querySelector('.counter__btn--minus');
				let btnNext = counter[i].querySelector('.counter__btn--plus');
				let input = counter[i].querySelector('.counter__input input');

				btnPrev.addEventListener('click', function(e){
					e.preventDefault();
					if (input.value > 1) {
						input.value = +input.value - 1;
					}
				});

				btnNext.addEventListener('click', function(e){
					e.preventDefault();
					input.value = +input.value + 1;
				})
			}
		}
		
	})();

	(function () {
		const elements = document.querySelectorAll('.dropdown');

		for (let n = 0; n < elements.length; n++) {
			const choices = new Choices(elements[n], {
				silent: false,
				items: [],
				choices: [],
				renderChoiceLimit: -1,
				maxItemCount: -1,
				addItems: true,
				addItemFilter: null,
				removeItems: false,
				removeItemButton: false,
				editItems: false,
				duplicateItemsAllowed: true,
				delimiter: ',',
				paste: true,
				// searchEnabled: true,
				// searchChoices: true,
				// searchFloor: 1,
				// searchResultLimit: 4,
				// searchFields: ['label', 'value'],
				// position: 'auto',
				// resetScrollPosition: true,
				// shouldSort: true,
				// shouldSortItems: false,
				placeholder: false,
				placeholderValue: null,
				searchPlaceholderValue: null,
				prependValue: null,
				appendValue: null,
				renderSelectedChoices: 'auto',
				loadingText: 'Загрузка...',
				noResultsText: 'No results found',
				noChoicesText: 'No choices to choose from',
				itemSelectText: '123',
				classNames: {
					containerOuter: 'sort-price__dropdown',
					containerInner: 'sort-price__inner',
					input: 'sort-price__input',
					inputCloned: 'sort-price__input--cloned',
					list: 'sort-price__list',
					listItems: 'sort-price__list--multiple',
					listSingle: 'sort-price__list--single',
					listDropdown: 'sort-price__list--dropdown',
					item: 'sort-price__item',
					itemSelectable: 'sort-price__item--selectable',
					itemDisabled: 'sort-price__item--disabled',
					itemChoice: 'sort-price__item--choice',
					placeholder: 'sort-price__placeholder',
					group: 'sort-price__group',
					groupHeading: 'sort-price__heading',
					button: 'sort-price__button',
					activeState: 'sort-price__list--is-active',
					focusState: 'sort-price__dropdown--is-focused',
					openState: 'sort-price__dropdown--is-open',
					disabledState: 'sort-price__dropdown--is-disabled',
					highlightedState: 'sort-price__item--is-highlighted',
					selectedState: 'sort-price__item--is-selected',
					flippedState: 'sort-price__dropdown--is-flipped',
					loadingState: 'sort-price__dropdown--is-loading',
					noResults: 'has-no-results',
					noChoices: 'has-no-choices'
				},
			});
		}

		
	})();

	(function () {
		const elements = document.querySelectorAll('.filter-dropdown');

		for (let n = 0; n < elements.length; n++) {
			const choices = new Choices(elements[n], {
				silent: false,
				items: [],
				choices: [],
				renderChoiceLimit: -1,
				maxItemCount: -1,
				addItems: true,
				addItemFilter: null,
				removeItems: false,
				removeItemButton: false,
				editItems: false,
				duplicateItemsAllowed: true,
				delimiter: ',',
				paste: true,
				// searchEnabled: true,
				// searchChoices: true,
				// searchFloor: 1,
				// searchResultLimit: 4,
				// searchFields: ['label', 'value'],
				// position: 'auto',
				// resetScrollPosition: true,
				// shouldSort: true,
				// shouldSortItems: false,
				placeholder: false,
				placeholderValue: null,
				searchPlaceholderValue: null,
				prependValue: null,
				appendValue: null,
				renderSelectedChoices: 'auto',
				loadingText: 'Загрузка...',
				noResultsText: 'No results found',
				noChoicesText: 'No choices to choose from',
				itemSelectText: '123',
				classNames: {
					containerOuter: 'filter-dropdown',
					containerInner: 'filter-dropdown__inner',
					input: 'filter-dropdown__input',
					inputCloned: 'filter-dropdown__input--cloned',
					list: 'filter-dropdown__list',
					listItems: 'filter-dropdown__list--multiple',
					listSingle: 'filter-dropdown__list--single',
					listDropdown: 'filter-dropdown__list--dropdown',
					item: 'filter-dropdown__item',
					itemSelectable: 'filter-dropdown__item--selectable',
					itemDisabled: 'filter-dropdown__item--disabled',
					itemChoice: 'filter-dropdown__item--choice',
					placeholder: 'filter-dropdown__placeholder',
					group: 'filter-dropdown__group',
					groupHeading: 'filter-dropdown__heading',
					button: 'filter-dropdown__button',
					activeState: 'filter-dropdown__list--is-active',
					focusState: 'filter-dropdown--is-focused',
					openState: 'filter-dropdown--is-open',
					disabledState: 'filter-dropdown--is-disabled',
					highlightedState: 'filter-dropdown__item--is-highlighted',
					selectedState: 'filter-dropdown__item--is-selected',
					flippedState: 'filter-dropdown--is-flipped',
					loadingState: 'filter-dropdown--is-loading',
					noResults: 'has-no-results',
					noChoices: 'has-no-choices'
				},
			});
		}

		
	})();

	// Выпадашки фильтра

	(function toggleFilterDrop(){
		const drops = document.querySelectorAll('.filter-drop__header');

		if (drops) {
			for (let i = 0; i < drops.length; i++) {
				drops[i].addEventListener('click', toggle);
			}
		}

		function toggle(event) {
			this.parentNode.classList.toggle('filter-drop--opened');
		}
	})();

	(function toggleFilterDrop(){
		const drops = document.querySelectorAll('.filter-subdrop__header');

		if (drops) {
			for (let i = 0; i < drops.length; i++) {
				drops[i].addEventListener('click', toggle);
			}
		}

		function toggle(event) {
			this.parentNode.classList.toggle('filter-subdrop--opened');
		}
	})();

	(function initRangeSlider(){
		let slider = document.querySelectorAll('.range-slider');

		for (let i = 0; i < slider.length; i++) {
			noUiSlider.create(slider[i], {
				start: [minPrice, maxPrice],
				connect: true,
				step: 1,
				range: {
					'min': minPrice,
					'max': maxPrice
				},
			});

			

			slider[i].noUiSlider.on('update', function (values) {
				slider[i].parentNode.parentNode.querySelector('.filter-range__input--start').value = values[0];
				slider[i].parentNode.parentNode.querySelector('.filter-range__input--end').value = values[1];
			});
		}
	})();

	(function resetFilter(){
		const btns = document.querySelectorAll('.filter__btn-all');
	})();

});