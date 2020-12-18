import Mmenu from 'mmenu-js';

(function initMmenu(){
	let menuArray = mobileLinks || null;

	new Mmenu( "#mmenu", {
		"extensions": [
		"pagedim-black",
		"fx-menu-slide"
		],
		"counters": true,
		"navbars": [
		{
			"position": "top",
			"content": [
			"searchfield"
			]
		},
		{
			"position": "bottom",
			"content": mobileContacts
		},
		{
			"position": "bottom",
			"content": mobileAdress
		},
		{
			"position": "bottom",
			"content": mobileLinks
		}
		],
	}, {
		"language": "ru"
	});
})();