import Dropzone from 'dropzone';

import fancybox from '@fancyapps/fancybox';

window.$ = $;

$(document).ready(function() {

	function toggleTabs() {
		let modalLinkArray = document.querySelectorAll('a[data-modal-link]');
		let modalSectionArray = document.querySelectorAll('div[data-modal-section]');

		(function initModalLinks(){
			let dataItem;
			for (let i = 0; i < modalLinkArray.length; i++) {

				modalLinkArray[i].addEventListener('click', function(e){
					e.preventDefault();
					dataItem = modalLinkArray[i].getAttribute('data-modal-link');
					toggleActiveLink(dataItem);
					toggleTabs(dataItem);
				})
			}
		})();

		function toggleActiveLink(activeItem){

			let dataItem;
			for (let i = 0; i < modalLinkArray.length; i++) {
				dataItem = modalLinkArray[i].getAttribute('data-modal-link');
				if (dataItem == activeItem) {
					modalLinkArray[i].classList.add('modal-menu__nav-link--active');
				} else {
					modalLinkArray[i].classList.remove('modal-menu__nav-link--active');
				}
			}
		}

		function toggleTabs(activeItem) {
			let dataItem;
			for (let i = 0; i < modalSectionArray.length; i++) {
				dataItem = modalSectionArray[i].getAttribute('data-modal-section');
				if (dataItem == activeItem) {
					modalSectionArray[i].classList.add('modal-menu__content--active');
				} else {
					modalSectionArray[i].classList.remove('modal-menu__content--active');
				}
			}
		}
	}

	toggleTabs();

	// $('[data-head-link]').click(function(e){
	// 	e.preventDefault();
	// 	let linkNum = $(this).attr('data-head-link');

	// 	let headerLinkArray = document.querySelectorAll('a[data-head-link]');
	// 	let modalLinkArray = document.querySelectorAll('a[data-modal-link]');
	// 	let modalSectionArray = document.querySelectorAll('div[data-modal-section]');

	// 	$.fancybox.open({
	// 		src  : this.attributes[0].nodeValue,
	// 		type : 'inline',
	// 		hash : false,
	// 		opts : {
	// 			arrows: false,
	// 			touch: false,
	// 			beforeShow : function( instance, current ) {
	// 				toggleActiveLink(linkNum);
	// 				toggleTabs(linkNum);
	// 			},
	// 			beforeClose : function( ) {
	// 				toggleActiveLink();
	// 				toggleTabs();
	// 			},
	// 			baseTpl:
	// 			'<div class="fancybox-container fancybox-container--menu" role="dialog" tabindex="-1">' +
	// 			'<div class="fancybox-bg"></div>' +
	// 			'<div class="fancybox-inner">' +
	// 			'<div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div>' +
	// 			'<div class="fancybox-stage"></div>' +
	// 			'<div class="fancybox-caption"><div class=""fancybox-caption__body"></div></div>' +
	// 			'</div>' +
	// 			'</div>',
	// 		}
	// 	});

	// 	(function initModalLinks(){
	// 		let dataItem;
	// 		for (let i = 0; i < modalLinkArray.length; i++) {

	// 			modalLinkArray[i].addEventListener('click', function(e){
	// 				dataItem = modalLinkArray[i].getAttribute('data-modal-link');
	// 				toggleActiveLink(dataItem);
	// 				toggleTabs(dataItem);
	// 			})
	// 		}
	// 	})();

	// 	function toggleActiveLink(activeItem){

	// 		let dataItem;
	// 		for (let i = 0; i < modalLinkArray.length; i++) {
	// 			dataItem = modalLinkArray[i].getAttribute('data-modal-link');
	// 			if (dataItem == activeItem) {
	// 				modalLinkArray[i].classList.add('head-nav__link--active');
	// 			} else {
	// 				modalLinkArray[i].classList.remove('head-nav__link--active');
	// 			}
	// 		}
	// 	}

	// 	function toggleTabs(activeItem) {
	// 		let dataItem;
	// 		for (let i = 0; i < modalSectionArray.length; i++) {
	// 			dataItem = modalSectionArray[i].getAttribute('data-modal-section');
	// 			if (dataItem == activeItem) {
	// 				modalSectionArray[i].classList.add('modal-menu__content--active');
	// 			} else {
	// 				modalSectionArray[i].classList.remove('modal-menu__content--active');
	// 			}
	// 		}
	// 	}
	// });

	$('[data-fancybox="menu"]').fancybox({
		type : 'inline',
		baseTpl:
		'<div class="fancybox-container fancybox-container--menu" role="dialog" tabindex="-1">' +
		'<div class="fancybox-bg"></div>' +
		'<div class="fancybox-inner">' +
		'<div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div>' +
		'<div class="fancybox-stage"></div>' +
		'<div class="fancybox-caption"><div class=""fancybox-caption__body"></div></div>' +
		'</div>' +
		'</div>',
	});
	
	$('[data-fancybox="modal"]').fancybox({
		arrows: false,
	});

	$('[data-fancybox="swiper-gallery"]').fancybox({
		
	});

	$('[data-fancybox="filter-modal"]').fancybox({
		slideClass: "filter-fancybox",
		touch: false,
	});

	$('[data-fancybox="lk-menu-modal"]').fancybox({
		slideClass: "lk-menu-fancybox",
		touch: false,
	});

	$('[data-fancybox="service-modal"]').fancybox({
		onActivate: function( instance, current ) {
			console.info( current.opts.$orig );
		}
	});

	$('[data-fancybox="gallery"]').fancybox();

	var myDropzone = new Dropzone(".dropfile", { 
		url: pathToScript,
	});
	Dropzone.clickable = true;

	(function initEggs(){
		function runOnKeys(func, ...codes) {
			let pressed = new Set();

			document.addEventListener('keydown', function(event) {
				pressed.add(event.code);

				for (let code of codes) {
					if (!pressed.has(code)) {
						return;
					}
				}

				pressed.clear();

				func();
			});

			document.addEventListener('keyup', function(event) {
				pressed.delete(event.code);
			});

		}

		runOnKeys(
			() => openHideModal(),
			"KeyQ",
			"KeyW",
			"Enter"
			);
	})();

	function openHideModal(){
		$.fancybox.open({
			src  : '#modal-accent',
			opts : {
				afterShow : function( instance, current ) {
					console.info( 'done!' );
				}
			}
		});
	}
});

