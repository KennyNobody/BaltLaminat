(function hideAccentLine(){
	const block = document.querySelector('.accent-line');
	const btn = document.querySelector('.accent-line__close');

	if (sessionStorage.getItem('accentLineHidden') == null) {
		block.classList.remove('accent-line--hidden');
	}

	btn.addEventListener('click', function(){
		sessionStorage.setItem('accentLineHidden', 'true');
		block.classList.remove('accent-line--hidden');
	});
})();