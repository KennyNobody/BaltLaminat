import Dropzone from 'dropzone';

import fancybox from '@fancyapps/fancybox';

$( document ).ready(function() {
	$('[data-fancybox="modal"]').fancybox({
		
	});
});

(function(){
	var myDropzone = new Dropzone(".dropfile", { 
		url: pathToScript,
	});
	Dropzone.clickable = true;

})();

