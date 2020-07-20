import Dropzone from 'dropzone';

import fancybox from '@fancyapps/fancybox';

$(document).ready(function() {
	$('[data-fancybox="modal"]').fancybox();

	$('[data-fancybox="filter-modal"]').fancybox({
		slideClass: "filter-fancybox",
		touch: false
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

