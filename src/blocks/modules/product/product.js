// Выполнять на мобилке

(function(){
	const columnsGrid = document.querySelectorAll('.grid__column');
	const columnsService = document.querySelectorAll('.service__column');

	let mobile = false;

	function checkMobile() {
		if (window.innerWidth > 1200) {
			mobile = false;
			// console.log('Десктоп');
		} else {
			mobile = true;
			// console.log('Мобилка');
		}
	}

	window.addEventListener('resize', checkMobile);
	window.addEventListener('resize', toggle);

	function toggle() {
		console.log(window.innerWidth > 1200 );
		if (window.innerWidth > 1200 && mobile == false) {
			mobile = false;
			window.location.reload();
			console.log('Релоад');

		} else if (window.innerWidth < 1200 && mobile == true) {
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
			console.log('Анврап');
		} else {
			console.log('Ничего');
			return false;
		}
	}

	
})();

(function () {
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