import Swiper from 'swiper';



$(document).ready(function() {

	(function () {

		const sliderTop = document.querySelectorAll('.slider-top');
		const sliderBottom = document.querySelectorAll('.slider-bottom');

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

	})();

});