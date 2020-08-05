import Choices from 'choices.js';
import SimpleBar from 'simplebar';
import noUiSlider from 'nouislider';
import wNumb from 'wnumb';
import datepicker from 'air-datepicker';

(function() {

	(function initCounters() {
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

	(function initDropdown() {
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

	(function initLkDropdown() {
		const elements = document.querySelectorAll('.lk-dropdown');

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
					containerOuter: 'lk-dropdown__dropdown',
					containerInner: 'lk-dropdown__inner',
					input: 'lk-dropdown__input',
					inputCloned: 'lk-dropdown__input--cloned',
					list: 'lk-dropdown__list',
					listItems: 'lk-dropdown__list--multiple',
					listSingle: 'lk-dropdown__list--single',
					listDropdown: 'lk-dropdown__list--dropdown',
					item: 'lk-dropdown__item',
					itemSelectable: 'lk-dropdown__item--selectable',
					itemDisabled: 'lk-dropdown__item--disabled',
					itemChoice: 'lk-dropdown__item--choice',
					placeholder: 'lk-dropdown__placeholder',
					group: 'lk-dropdown__group',
					groupHeading: 'lk-dropdown__heading',
					button: 'lk-dropdown__button',
					activeState: 'lk-dropdown__list--is-active',
					focusState: 'lk-dropdown__dropdown--is-focused',
					openState: 'lk-dropdown__dropdown--is-open',
					disabledState: 'lk-dropdown__dropdown--is-disabled',
					highlightedState: 'lk-dropdown__item--is-highlighted',
					selectedState: 'lk-dropdown__item--is-selected',
					flippedState: 'lk-dropdown__dropdown--is-flipped',
					loadingState: 'lk-dropdown__dropdown--is-loading',
					noResults: 'has-no-results',
					noChoices: 'has-no-choices'
				},
			});
		}
	})();

	(function initFilterDropdown() {
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

	(function toggleFilterDrop(){
		const drops = document.querySelectorAll('.filter-drop__header');

		if (drops) {
			for (let i = 0; i < drops.length; i++) {
				drops[i].addEventListener('click', toggle);
			}
		}

		function toggle(event) {
			if (event.target.tagName !== 'BUTTON') {
				this.parentNode.classList.toggle('filter-drop--opened');
			}
		}
	})();

	(function initRangeSlider(){
		let slider = document.querySelectorAll('.range-slider');

		if (slider) {
			for (let i = 0; i < slider.length; i++) {
				noUiSlider.create(slider[i], {
					start: [minPrice, maxPrice],
					connect: true,
					step: 1,
					range: {
						'min': minPrice,
						'max': maxPrice
					},
					format: wNumb({
						decimals: 0
					}),
				});

				slider[i].noUiSlider.on('update', function (values) {
					slider[i].parentNode.parentNode.querySelector('.filter-range__input--start').value = values[0];
					slider[i].parentNode.parentNode.querySelector('.filter-range__input--end').value = values[1];
				});
			}
		}
	})();

	(function resetFilter(){
		const btns = document.querySelectorAll('.filter__btn-all');

		for (let i = 0; i < btns.length; i++) {
			btns[i].addEventListener('click', reset);
		}

		function reset(e) {
			console.log(this)
		}
	})();

	// (function resize(){
	// 	const resized = document.querySelectorAll('.resized');

	// 	if (resized) {
	// 		window.addEventListener('resize', function(){
	// 			for (let i = 0; i < resized.length; i++) {
	// 				resized[i].setAttribute("style","height:" + resized[i].offsetWidth + 'px');
	// 			}
	// 		});

	// 		window.addEventListener('load', function(){
	// 			for (let i = 0; i < resized.length; i++) {
	// 				resized[i].setAttribute("style","height:" + resized[i].offsetWidth + 'px');
	// 			}
	// 		});
	// 	}
	// })();

	(function initScrollbars(){

		let isMobile;
		let scrollbar1;
		let scrollbar2;
		let init = false;


		function checkMobile() {
			if (document.documentElement.clientWidth > 1200) {
				isMobile = false;
				initLibs();
			} else {
				isMobile = true;
				destroyLibs();
			}
		}

		function initLibs() {
			if (init == false && isMobile == false) {
				if (document.querySelector('#scrollbar-1')) {
					scrollbar1 = new SimpleBar(document.querySelector('#scrollbar-1'));
				}
				if (document.querySelector('#scrollbar-2')) {
					scrollbar1 = new SimpleBar(document.querySelector('#scrollbar-2'));
				}
				init = true;
			}
		}

		function destroyLibs() {
			if (init == true && isMobile == true) {
				if (scrollbar1) {
					scrollbar1.unMount();
				}

				if (scrollbar2) {
					scrollbar2.unMount();
				}
				init = false;
			}
		}

		checkMobile();
		initLibs();

		window.addEventListener('resize', checkMobile);
	})();

	(function initDatePicker(){
		$('.lk-filter__datepicker').datepicker({
			range: true
		});

		console.log(datepicker)
	})();
})();
