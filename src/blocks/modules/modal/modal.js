import Dropzone from 'dropzone';

import fancybox from '@fancyapps/fancybox';

$(document).ready(function() {

	$('[data-modal]').click(function(e){
		$.fancybox.close();
		// $(this).addClass('head-nav__link--active');
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
				btnTpl: { 
					close: 
					'<button data-fancybox-close class ="custom fancybox-button fancybox-button - close "title =" {{CLOSE}} ">' +
					'<svg xmlns = "http://www.w3.org/2000/svg" viewBox = "0 0 24 24"> <path d = "M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z "/> </ svg> '+ 
					" </ button> ", 
				}
			}
		});
		
	});
	
	$('[data-fancybox="modal"]').fancybox({
		arrows: false,
	});

	$('[data-fancybox="filter-modal"]').fancybox({
		slideClass: "filter-fancybox",
		touch: false,
	});

	$('[data-fancybox="service-modal"]').fancybox({
		onActivate: function( instance, current ) {
			console.info( 'Clicked element:' );
			console.info( current.opts.$orig );
		}
	});

	$('[data-fancybox="gallery"]').fancybox();

	var myDropzone = new Dropzone(".dropfile", { 
		url: pathToScript,
	});
	Dropzone.clickable = true;
});

