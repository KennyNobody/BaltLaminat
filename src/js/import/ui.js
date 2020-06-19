import Choices from 'choices.js';

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
		const element = document.querySelector('.dropdown');
		// const choices = new Choices(element);

		const choices = new Choices(element, {
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
	})();

	

});