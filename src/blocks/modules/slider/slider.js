import Swiper from 'swiper';

window.initSlider = function() {

	const sliderTop = document.querySelectorAll('.slider-top');
	const sliderBottom = document.querySelectorAll('.slider-bottom');

	if (window.innerWidth > 1200) {
		for (let i = 0; i < sliderTop.length; i++) {

			let mySwiperThumbs = new Swiper (sliderBottom[i], {
				slidesPerView: 'auto',
				spaceBetween: 32,
				freeMode: true,
				observer: true,
				observeParents: true,
			});

			let mySwiperTop = new Swiper (sliderTop[i], {
				slidesPerView: 1,
				observer: true,
				observeParents: true,
				loop: false,
				loopAdditionalSlides: 0,
				navigation: {
					nextEl: '.slider-bottom__btn--right',
					prevEl: '.slider-bottom__btn--left',
				},
				thumbs: {
					swiper: mySwiperThumbs,
					slideThumbActiveClass: 'slider-bottom__slide--active'
				}
			});

		}
	} else {
		for (let i = 0; i < sliderTop.length; i++) {

			let mySwiperTop = new Swiper (sliderTop[i], {
				slidesPerView: 1,
				observer: true,
				observeParents: true,
				autoHeight: true,
				pagination: {
					el: '.slider-top__pagination',
					type: 'fraction',
				},
				navigation: {
					nextEl: '.slider-top__btn--next',
					prevEl: '.slider-top__btn--prev',
					disabledClass: 'slider-top__btn--disabled'
				},
			});

		}
	}
};


(function initCaseSlider(){

	let caseSlider = new Swiper ('.case__articles', {
		slidesPerView: 1,
		autoHeight: true,
		pagination: {
			el: '.case__header',
			clickable: true,
			bulletActiveClass: 'case__title--active',
			bulletClass: 'case__title',
			// type: 'fraction',
			renderBullet: function (index, className) {
				return '<p class="' + className + '"><span>' + this.slides[index].dataset.name + '</span></p>';
			},
		},
	});

})();