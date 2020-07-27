(function initMapSlider() {
	const button = document.querySelectorAll('.map__change-floor');
	const layers = document.querySelectorAll('[data-floor]');

	for (let i = 0; i < button.length; i++) {
		button[i].addEventListener('click', toggleFloor);
	}

	function toggleFloor () {
		let activeFloor = +this.getAttribute('data-btn-floor');
		console.log (activeFloor);
		toggleActiveClass(activeFloor);
		hidePreviousFloors(activeFloor);
	}

	function toggleActiveClass (number) {

		// for (let i = 0; i < layers.length; i++) {
		// 	layers[i].classList.remove('map__slide--active');
		// }

		for (let i = 0; i < layers.length; i++) {
			if (layers[i].getAttribute('data-floor') == number) {
				layers[i].classList.add('map__slide--active');
			} else {
				layers[i].classList.remove('map__slide--active');
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

})();