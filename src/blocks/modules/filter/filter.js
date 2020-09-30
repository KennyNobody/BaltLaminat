window.addEventListener('load', function(){
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

		(function sort(){
			const toolbar = document.querySelector('.toolbar');

			if (toolbar) {
				const inputs = toolbar.querySelectorAll('input');

				const selects = toolbar.querySelectorAll('select');

				for (let i = 0; i < inputs.length; i++) {
					inputs[i].addEventListener('change', changeState);
				}

				for (let n = 0; n < selects.length; n++) {
					selects[n].addEventListener('change', changeState);
				}
			}

			// http://194.67.90.164/catalog/6256/?sort=catalog_PRICE_1&order=asc

			function changeState() {
				let type = toolbar.elements["layout"].value;
				let sort = toolbar.elements["sort"].value;
				let quanity = toolbar.elements["item-quality"].value;
				
				let params = "?display=" + type + "&sort=" + sort + "&elementcount=" + quanity;

				setUrl(params);
			}

			function setUrl(params) {
				let oldUrl = window.location.href;
				url = trimToLastForwardslash(oldUrl);

				window.location.href = window.location.href + params;
				// console.log(url);
			}

			function trimToLastForwardslash(input) {
				var lastBackSlash = input.lastIndexOf('/');
				return lastBackSlash != -1 && lastBackSlash != input.length - 1 ? input.substring(0, lastBackSlash + 1) : input;
			}

		})();
	})();
});