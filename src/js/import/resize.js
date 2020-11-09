function resizeImage (){
	const resized = document.querySelectorAll('.resized');

	if (resized) {
		window.addEventListener('resize', function(){
			change();
		});

		window.addEventListener('load', function(){
			change();
		});
	}

	function change() {
		for (let i = 0; i < resized.length; i++) {
			resized[i].setAttribute("style","height:" + resized[i].offsetWidth + 'px');
		}
	}
};