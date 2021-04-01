(function(){
	const columnsGrid = document.querySelectorAll('.mobile--unwrap');
	const columnsService = document.querySelectorAll('.service__column--editable');

	var cachedWidth = $(window).width();
    $(window).resize(function(){
        var newWidth = $(window).width();
        if(newWidth !== cachedWidth){
            //DO RESIZE HERE
            document.location.reload();
            cachedWidth = newWidth;
        }
    });

	window.addEventListener('load', toggle);

	function toggle() {
		if (document.body.clientWidth > 1200) {
			initSlider();
		} else if (document.body.clientWidth < 1200) {
			if (columnsGrid) {
				for (let i = 0; i < columnsGrid.length; i++) {
					unwrap(columnsGrid[i]);
				}
			}

			if (columnsService) {
				for (let i = 0; i < columnsService.length; i++) {
					unwrap(columnsService[i]);
				}
			}

			function unwrap(node) {
				node.replaceWith(...node.childNodes);
			};
			initSlider();
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

(function showMore() {
	const parent = document.querySelector('.product-info');

	if (parent) {
		const content = parent.querySelector('.product-info__content');

		const btn = parent.querySelector('.product-info__more');

		btn.addEventListener('click', function() {
			content.classList.toggle('product-info__content--full');
		})
	}
})();