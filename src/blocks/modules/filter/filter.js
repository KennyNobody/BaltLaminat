(function toggleDropdownLink(){
	let dropdown = document.querySelectorAll('.select-sort');

	for (let i = 0; i < dropdown.length; i++) {
		dropdown[i].addEventListener('change', function(){
			toggleLink(this);
		})
	}

	function toggleLink(item) {
		let selected = item.options[item.selectedIndex].value;
		window.location.href = selected;
	}

})();

