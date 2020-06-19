import Swiper from 'swiper';



$(document).ready(function() {

	(function () {
		
		let mySwiperThumbs = new Swiper ('.slider-bottom', {
			slidesPerView: 'auto',
			spaceBetween: 32,
			freeMode: true,
		});

		let mySwiperTop = new Swiper ('.slider-top', {
			slidesPerView: 1,
			navigation: {
				nextEl: '.slider-bottom__btn--right',
				prevEl: '.slider-bottom__btn--left',
			},
			thumbs: {
				swiper: mySwiperThumbs,
				slideThumbActiveClass: 'slider-bottom__slide--active'
			}
		});

	})();

});