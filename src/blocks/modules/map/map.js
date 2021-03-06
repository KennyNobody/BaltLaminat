import tippy from 'tippy.js';

// let tenantArrs = [
// [[7, 9], "ART FLEX", "Описание магазина ART FLEX", "https://placehold.it/1800x400", "/tenants/art_flex/", [2, 1]],
// [[2], "ASCONA", "Описание магазина ASCONA", "https://placehold.it/1800x400", "/tenants/askona/", [9, 4, 2, 1]],
// [[3], "BOXX", "Описание магазина BOXX", "https://placehold.it/1800x400", "/tenants/boxx/", [2, 1]],
// [[1], "Hilding Anders", "Описание магазина ART FLEX", "https://placehold.it/1800x400", "/tenants/hilding-anders/", 3],
// [[2], "Lalala", "Описание магазина Lalala", "https://placehold.it/1800x400", "/tenants/lalala/", 1],
// [[5], "Test Test", "Описание магазина TestTest", "https://placehold.it/1800x400", "/tenants/TestTest/", 5]
// ];


window.addEventListener('load', function(){
	(function initMapSlider() {
		let tenantArrs = BX.message('tenants');
		window.tenantArrs = tenantArrs;

		const map = document.querySelector('.map');
		const button = document.querySelectorAll('.map__change-floor');
		const layers = document.querySelectorAll('[data-floor]');
		const checkbox = document.querySelectorAll('[data-type]');
		const partner = document.querySelectorAll('[data-partner-type]');
		const fields = document.querySelectorAll('.map__room');
		const floorNavs = document.querySelectorAll('[data-floorNavs]');

		// let tenantArrs = window.tenants;

		if (tenantArrs) {
			for (let [index, block] of tenantArrs.entries()) {
				setAttrubutes(index, block);
			}
		}

		for (let i = 0; i < button.length; i++) {
			button[i].addEventListener('click', toggleFloor);
		}

		for (let i = 0; i < checkbox.length; i++) {
			checkbox[i].addEventListener('click', toggleTypeField);
		}

		function setAttrubutes(index, block) {
			let content = "<div class='map-tippy'><img src='"+ block[3] +"' alt='"+ block[1] +"' class='map-tippy__logo'><p class='map-tippy__title'>"+ block[1] +"</p><p class='map-tippy__content'>"+ block[2] +"</p><a href='"+ block[4] +"' class='btn btn--dark map-tippy__btn'>Подробнее</a></div>";

			let pointArray = block[0];

			for (let i = 0; i < block[0].length; i++) {
				let field = map.querySelector("#field-" + (block[0][i]));
				field.setAttribute('data-tippy-content', content);
				field.setAttribute('data-map-field', block[5]);
			}
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

			compareArray(this, activeType);
		}

		function compareArray(item, id) {
			for (let i = 0; i < partner.length; i++) {

				let itemCategories = partner[i].getAttribute('data-partner-type');
				let itemCategoriesArray = itemCategories.split(',');

				if (checkSubcat(id, itemCategoriesArray)) {
					partner[i].classList.add('map__list-item--active');
				} else {
					partner[i].classList.remove('map__list-item--active');
				}

				console.log(checkSubcat(id, itemCategoriesArray));
			}
		}

		function checkSubcat(id, itemCategoriesArray) {
			for (let n = 0; n < itemCategoriesArray.length; n++) {
				if (itemCategoriesArray[n] == id) {
					return true;
					break;
				}
			}
		}

	})();
});

