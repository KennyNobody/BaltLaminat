(function(){
	const columnsGrid = document.querySelectorAll('.grid__column');
	const columnsService = document.querySelectorAll('.service__column');

	window.addEventListener('load', toggle);
	// window.addEventListener('resize', function(){
		
	// });

	(function() {

		var width = $(window).width();
		$(window).on('resize', function() {
			if ($(this).width() !== width) {
				width = $(this).width();
				resizeThrottler();
				console.log('Изменили ширину')
			}
		});



		// window.addEventListener("resize", );

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
			document.location.reload(true);
		}

	}());

	function toggle() {
		if (window.innerWidth > 1200) {
			initSlider();
		} else if (window.innerWidth < 1200) {
			if (columnsGrid) {
				for (let i = 0; i < columnsGrid.length; i++) {
					unwrap(columnsGrid[i]);
					initSlider();
				}
			}

			if (columnsService) {
				for (let i = 0; i < columnsService.length; i++) {
					unwrap(columnsService[i]);
					initSlider();
				}
			}

			function unwrap(node) {
				node.replaceWith(...node.childNodes);
			};
		} else {
			return false;
		}
	}
	
})();

(function toggleCardTitle() {
	const stickyCard = document.querySelector('.grid__block--product-card');

	if (stickyCard) {
		const startPosition = stickyCard.offsetTop;
		const title = stickyCard.querySelector('.product-card__title')

		window.addEventListener("scroll", function() {
			let nowPosition = stickyCard.offsetTop;
			if (startPosition != nowPosition) {
				title.classList.add('product-card__title--visible');
			} else {
				title.classList.remove('product-card__title--visible');
			}
		});
	}
	
})();