import Mmenu from 'mmenu-js';

(function initMmenu(){
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
			"content": [
			"<a class='fa fa-envelope' href='#/'></a>",
			"<a class='fa fa-twitter' href='#/'></a>",
			"<a class='fa fa-facebook' href='#/'></a>"
			]
		}
		],
	}, {
		"language": "ru"
	});
})();


