(function toggleAuthName(){
	const input = document.querySelectorAll('.lk-auth-form__input');

	for (let i = 0; i < input.length; i++) {
		input[i].addEventListener('focusin', function(){
			this.parentNode.classList.add('lk-auth-form__label--focus');
		});

		input[i].addEventListener('focusout', function(){
			if ( this.value == false) {
				this.parentNode.classList.remove('lk-auth-form__label--focus');
			}
		});
	}

})();