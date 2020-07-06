import Dropzone from 'dropzone';

import fancybox from '@fancyapps/fancybox';

$( document ).ready(function() {
	$('[data-fancybox="modal"]').fancybox({
		
	});

	$('[data-fancybox="service-modal"]').fancybox({
		onActivate: function( instance, current ) {
			console.info( 'Clicked element:' );
			console.info( current.opts.$orig );
		}
	});
});

(function(){
	var myDropzone = new Dropzone(".dropfile", { 
		url: pathToScript,
	});
	Dropzone.clickable = true;

})();

