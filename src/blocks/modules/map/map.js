import tippy from 'tippy.js';

(function initMapSlider() {
	const button = document.querySelectorAll('.map__change-floor');
	const layers = document.querySelectorAll('[data-floor]');
	const checkbox = document.querySelectorAll('[data-type]');
	const fields = document.querySelectorAll('.map__room');
	const floorNavs = document.querySelectorAll('[data-floorNavs]');

	for (let i = 0; i < button.length; i++) {
		button[i].addEventListener('click', toggleFloor);
	}

	for (let i = 0; i < checkbox.length; i++) {
		checkbox[i].addEventListener('click', toggleTypeField);
	}

	initTippy();

	function initTippy() {
		tippy(fields, {
			trigger: 'click',
			allowHTML: true,
		});
	}

	function toggleFloor () {
		for(let i = 0; i < button.length; i++) {
			button[i].classList.remove('map__change-floor--active');
		}
		let activeFloor = +this.getAttribute('data-btn-floor');
		this.classList.add('map__change-floor--active');
		toggleActiveClass(activeFloor);
		hidePreviousFloors(activeFloor);
		toggleNavs(activeFloor);
	}

	function toggleActiveClass (number) {
		for (let i = 0; i < layers.length; i++) {
			if (layers[i].getAttribute('data-floor') == number) {
				layers[i].classList.add('map__slide--active');
			} else {
				layers[i].classList.remove('map__slide--active');
			}
		}
	}

	function toggleNavs (number) {
		for (let i = 0; i < floorNavs.length; i++) {
			if (floorNavs[i].getAttribute('data-floorNavs') == number) {
				floorNavs[i].classList.remove('map-hidden');
			} else {
				floorNavs[i].classList.add('map-hidden');
			}
		}
	}

	function hidePreviousFloors (number) {
		for (let i = 0; i < layers.length; i++) {
			if (layers[i].getAttribute('data-floor') > number) {
				layers[i].classList.add('map__slide--hide');
			} else {
				layers[i].classList.remove('map__slide--hide');
			}
		}
	}

	function toggleTypeField (number) {
		let activeType = +this.getAttribute('data-type');
		for (let i = 0; i < fields.length; i++) {
			if (fields[i].getAttribute('data-map-field') == activeType) {
				fields[i].classList.add('map__room--active');
			} else {
				fields[i].classList.remove('map__room--active');
			}
		}
	}

})();