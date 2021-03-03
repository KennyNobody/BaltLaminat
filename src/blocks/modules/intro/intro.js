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
		slideActiveClass: 'intro__slide--active',
		pagination: {
			el: '.intro__pagination',
			clickable: true,
			bulletClass: 'intro__bullet',
			bulletActiveClass: 'intro__bullet--active',
			renderBullet: function (index, className) {
				return '<div class="' + className + '"><p class="intro__bullet-text">' + this.slides[index].getAttribute('data-title') + '</p><div class="intro__progress-line"></div></div>';
			},
		},
	});
})