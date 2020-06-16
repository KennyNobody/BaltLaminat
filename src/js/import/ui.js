$(document).ready(function() {

	// Счетчики

	const counter = document.querySelectorAll('.counter');

	for (let i = 0; i < counter.length; i++) {
		let btnPrev = counter[i].querySelector('.counter__btn--minus');
		let btnNext = counter[i].querySelector('.counter__btn--plus');
		let input = counter[i].querySelector('.counter__input input');

		btnPrev.addEventListener('click', function(e){
			e.preventDefault();
			if (input.value > 1) {
				input.value = +input.value - 1;
			}
		});

		btnNext.addEventListener('click', function(e){
			e.preventDefault();
			input.value = +input.value + 1;
		})

	}

});