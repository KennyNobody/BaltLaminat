// Выполнять на мобилке

// const columns = document.querySelectorAll('.grid__column');

// if (columns) {
// 	for (let i = 0; i < columns.length; i++) {
// 		unwrap(columns[i]);
// 	}
// }

// function unwrap(node) {
//     node.replaceWith(...node.childNodes);
// }

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