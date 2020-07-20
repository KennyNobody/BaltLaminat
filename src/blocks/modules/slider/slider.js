import Swiper from 'swiper';

(function () {
	function initSlider() {

		const sliderTop = document.querySelectorAll('.slider-top');
		const sliderBottom = document.querySelectorAll('.slider-bottom');

		if (window.innerWidth > 1200) {
			console.log('Декстоп');
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
		} else {
			console.log('Мобилка');
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

	window.addEventListener('load', initSlider);
})();

(function initCaseSlider(){

	let caseSlider = new Swiper ('.case__slider-container', {
		slidesPerView: 1,
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

})();

(function() {

	window.addEventListener("resize", resizeThrottler);

	let resizeTimeout;

	function resizeThrottler() {

		if ( !resizeTimeout ) {
			resizeTimeout = setTimeout(function() {
				resizeTimeout = null;
				actualResizeHandler();
			}, 500);
		}
	}

	function actualResizeHandler() {
		console.log('Что-то происходит');
	}

}());