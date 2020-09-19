(function (){
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

	(function selectAll(){
		const btns = document.querySelectorAll('.filter__btn-all');

		if (btns) {
			for (let i = 0; i < btns.length; i++) {
				initSection(btns[i]);
			}
		}

		function initSection(item) {
			let checked = false;

			let inputArray = item.parentNode.parentNode.querySelectorAll('.filter-checkbox__input');

			item.addEventListener('click', function() {
				if (checked == false) {
					
					for (let i = 0; i < inputArray.length; i++) {
						inputArray[i].checked = true;
					}

					checked = true;

				} else {
					for (let i = 0; i < inputArray.length; i++) {
						inputArray[i].checked = false;
					}
					checked = false;
				}
			});
		}
	})();
})();



