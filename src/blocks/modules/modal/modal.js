import Dropzone from 'dropzone';

import fancybox from '@fancyapps/fancybox';

$(document).ready(function() {

	$('[data-modal]').click(function(e){
		$.fancybox.close();
		e.preventDefault();
		$.fancybox.open({
			src  : this.attributes[0].nodeValue,
			type : 'inline',
			opts : {
				arrows: false,
				touch: false,
				beforeShow : function( instance, current ) {
					$('.head-nav__link').removeClass('head-nav__link--active');
					$('a[href|="' + this.src + '"]').addClass('head-nav__link--active');
				},
				beforeClose : function( ) {
					$('.head-nav__link').removeClass('head-nav__link--active');
				},
				baseTpl:
				'<div class="fancybox-container fancybox-container--menu" role="dialog" tabindex="-1">' +
				'<div class="fancybox-bg"></div>' +
				'<div class="fancybox-inner">' +
				'<div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div>' +
				'<div class="fancybox-toolbar">{{buttons}}</div>' +
				'<div class="fancybox-navigation">{{arrows}}</div>' +
				'<div class="fancybox-stage"></div>' +
				'<div class="fancybox-caption"><div class=""fancybox-caption__body"></div></div>' +
				'</div>' +
				'</div>',
			}
		});
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
});

