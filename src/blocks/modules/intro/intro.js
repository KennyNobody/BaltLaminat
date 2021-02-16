import Swiper from 'swiper';

document.addEventListener('DOMContentLoaded', () => {
	let mySwiperTop = new Swiper ('.intro__slider', {
		slidesPerView: 1,
		observer: true,
		observeParents: true,
		autoHeight: true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		// pagination: {
		// 	el: '.slider-top__pagination',
		// 	type: 'fraction',
		// },
		// navigation: {
		// 	nextEl: '.slider-top__btn--next',
		// 	prevEl: '.slider-top__btn--prev',
		// 	disabledClass: 'slider-top__btn--disabled'
		// },
	});
})