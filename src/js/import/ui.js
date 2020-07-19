import Choices from 'choices.js';
import SimpleBar from 'simplebar';
import noUiSlider from 'nouislider';
import wNumb from 'wnumb';

$(document).ready(function() {

	// Счетчики

	(function () {
		const counter = document.querySelectorAll('.counter');

		if (counter) {
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
		}
		
	})();

	(function () {
		const elements = document.querySelectorAll('.dropdown');

		for (let n = 0; n < elements.length; n++) {
			const choices = new Choices(elements[n], {
				silent: false,
				items: [],
				choices: [],
				renderChoiceLimit: -1,
				maxItemCount: -1,
				addItems: true,
				addItemFilter: null,
				removeItems: false,
				removeItemButton: false,
				editItems: false,
				duplicateItemsAllowed: true,
				delimiter: ',',
				paste: true,
				placeholder: false,
				placeholderValue: null,
				searchPlaceholderValue: null,
				prependValue: null,
				appendValue: null,
				renderSelectedChoices: 'auto',
				loadingText: 'Загрузка...',
				noResultsText: 'No results found',
				noChoicesText: 'No choices to choose from',
				itemSelectText: '123',
				classNames: {
					containerOuter: 'sort-price__dropdown',
					containerInner: 'sort-price__inner',
					input: 'sort-price__input',
					inputCloned: 'sort-price__input--cloned',
					list: 'sort-price__list',
					listItems: 'sort-price__list--multiple',
					listSingle: 'sort-price__list--single',
					listDropdown: 'sort-price__list--dropdown',
					item: 'sort-price__item',
					itemSelectable: 'sort-price__item--selectable',
					itemDisabled: 'sort-price__item--disabled',
					itemChoice: 'sort-price__item--choice',
					placeholder: 'sort-price__placeholder',
					group: 'sort-price__group',
					groupHeading: 'sort-price__heading',
					button: 'sort-price__button',
					activeState: 'sort-price__list--is-active',
					focusState: 'sort-price__dropdown--is-focused',
					openState: 'sort-price__dropdown--is-open',
					disabledState: 'sort-price__dropdown--is-disabled',
					highlightedState: 'sort-price__item--is-highlighted',
					selectedState: 'sort-price__item--is-selected',
					flippedState: 'sort-price__dropdown--is-flipped',
					loadingState: 'sort-price__dropdown--is-loading',
					noResults: 'has-no-results',
					noChoices: 'has-no-choices'
				},
			});
		}
	})();

	(function () {
		const elements = document.querySelectorAll('.filter-dropdown');

		for (let n = 0; n < elements.length; n++) {
			const choices = new Choices(elements[n], {
				silent: false,
				items: [],
				choices: [],
				renderChoiceLimit: -1,
				maxItemCount: -1,
				addItems: true,
				addItemFilter: null,
				removeItems: false,
				removeItemButton: false,
				editItems: false,
				duplicateItemsAllowed: true,
				delimiter: ',',
				paste: true,
				placeholder: false,
				placeholderValue: null,
				searchPlaceholderValue: null,
				prependValue: null,
				appendValue: null,
				renderSelectedChoices: 'auto',
				loadingText: 'Загрузка...',
				noResultsText: 'No results found',
				noChoicesText: 'No choices to choose from',
				itemSelectText: '123',
				classNames: {
					containerOuter: 'filter-dropdown',
					containerInner: 'filter-dropdown__inner',
					input: 'filter-dropdown__input',
					inputCloned: 'filter-dropdown__input--cloned',
					list: 'filter-dropdown__list',
					listItems: 'filter-dropdown__list--multiple',
					listSingle: 'filter-dropdown__list--single',
					listDropdown: 'filter-dropdown__list--dropdown',
					item: 'filter-dropdown__item',
					itemSelectable: 'filter-dropdown__item--selectable',
					itemDisabled: 'filter-dropdown__item--disabled',
					itemChoice: 'filter-dropdown__item--choice',
					placeholder: 'filter-dropdown__placeholder',
					group: 'filter-dropdown__group',
					groupHeading: 'filter-dropdown__heading',
					button: 'filter-dropdown__button',
					activeState: 'filter-dropdown__list--is-active',
					focusState: 'filter-dropdown--is-focused',
					openState: 'filter-dropdown--is-open',
					disabledState: 'filter-dropdown--is-disabled',
					highlightedState: 'filter-dropdown__item--is-highlighted',
					selectedState: 'filter-dropdown__item--is-selected',
					flippedState: 'filter-dropdown--is-flipped',
					loadingState: 'filter-dropdown--is-loading',
					noResults: 'has-no-results',
					noChoices: 'has-no-choices'
				},
			});
		}
	})();

	// Выпадашки фильтра

	(function toggleFilterDrop(){
		const drops = document.querySelectorAll('.filter-drop__header');

		if (drops) {
			for (let i = 0; i < drops.length; i++) {
				drops[i].addEventListener('click', toggle);
			}
		}

		function toggle(event) {
			if (event.target.tagName !== 'BUTTON') {
				this.parentNode.classList.toggle('filter-drop--opened');
			}
		}
	})();

	(function toggleFilterDrop(){
		const drops = document.querySelectorAll('.filter-subdrop__header');

		if (drops) {
			for (let i = 0; i < drops.length; i++) {
				drops[i].addEventListener('click', toggle);
			}
		}

		function toggle(event) {
			this.parentNode.classList.toggle('filter-subdrop--opened');
		}
	})();

	(function initRangeSlider(){
		let slider = document.querySelectorAll('.range-slider');

		for (let i = 0; i < slider.length; i++) {
			noUiSlider.create(slider[i], {
				start: [minPrice, maxPrice],
				connect: true,
				step: 1,
				range: {
					'min': minPrice,
					'max': maxPrice
				},
				format: wNumb({
					decimals: 0
				}),
			});

			slider[i].noUiSlider.on('update', function (values) {
				slider[i].parentNode.parentNode.querySelector('.filter-range__input--start').value = values[0];
				slider[i].parentNode.parentNode.querySelector('.filter-range__input--end').value = values[1];
			});
		}
	})();

	// Сброс фильтра

	(function resetFilter(){
		const btns = document.querySelectorAll('.filter__btn-all');

		for (let i = 0; i < btns.length; i++) {
			btns[i].addEventListener('click', reset);
		}

		function reset(e) {
			console.log(this)
		}
	})();

	(function resize(){
		const resized = document.querySelectorAll('.resized');

		if (resized) {
			window.addEventListener('resize', function(){
				for (let i = 0; i < resized.length; i++) {
					resized[i].setAttribute("style","height:" + resized[i].offsetWidth + 'px');
				}
			});

			window.addEventListener('load', function(){
				for (let i = 0; i < resized.length; i++) {
					resized[i].setAttribute("style","height:" + resized[i].offsetWidth + 'px');
				}
			});
		}
	})();

	// Кастомный скролл
	(function initScrollbars(){

		let isMobile;
		let scrollbar1;
		let scrollbar2;
		let init = false;


		function checkMobile() {
			if (document.documentElement.clientWidth > 1200) {
				isMobile = false;
				initLibs();
			} else {
				isMobile = true;
				destroyLibs();
			}
		}

		function initLibs() {
			if (init == false && isMobile == false) {
				scrollbar1 = new SimpleBar(document.querySelector('#scrollbar-1'));
				scrollbar2 = new SimpleBar(document.querySelector('#scrollbar-2'));
				init = true;
				console.log(scrollbar1);
				console.log(scrollbar2);
			}
		}

		function destroyLibs() {
			if (init == true && isMobile == true) {
				scrollbar1.unMount();
				scrollbar2.unMount();
				init = false;
			}
		}

		checkMobile();
		initLibs();

		// function destroyLibs() {
		// 	const scrollbars = document.querySelectorAll('.custom-scrollbar');

		// 	for (let i = 0; i < scrollbars.length; i++) {

		// 	}
		// }

		window.addEventListener('resize', checkMobile);
	
	})();
});


!(function (n) {
	var e = {};
	function t(o) {
		if (e[o]) return e[o].exports;
		var r = (e[o] = { i: o, l: !1, exports: {} });
		return n[o].call(r.exports, r, r.exports, t), (r.l = !0), r.exports;
	}
	(t.m = n),
	(t.c = e),
	(t.d = function (n, e, o) {
		t.o(n, e) || Object.defineProperty(n, e, { enumerable: !0, get: o });
	}),
	(t.r = function (n) {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(n, "__esModule", { value: !0 });
	}),
	(t.t = function (n, e) {
		if ((1 & e && (n = t(n)), 8 & e)) return n;
		if (4 & e && "object" == typeof n && n && n.__esModule) return n;
		var o = Object.create(null);
		if ((t.r(o), Object.defineProperty(o, "default", { enumerable: !0, value: n }), 2 & e && "string" != typeof n))
			for (var r in n)
				t.d(
					o,
					r,
					function (e) {
						return n[e];
					}.bind(null, r)
					);
			return o;
		}),
	(t.n = function (n) {
		var e =
		n && n.__esModule
		? function () {
			return n.default;
		}
		: function () {
			return n;
		};
		return t.d(e, "a", e), e;
	}),
	(t.o = function (n, e) {
		return Object.prototype.hasOwnProperty.call(n, e);
	}),
	(t.p = ""),
	t((t.s = 4));
})([
function (n, e, t) {
	var o = t(1);
	"string" == typeof o && (o = [[n.i, o, ""]]);
	var r = { insert: "head", singleton: !1 };
	t(3)(o, r);
	o.locals && (n.exports = o.locals);
},
function (n, e, t) {
	(n.exports = t(2)(!1)).push([
		n.i,
		'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n',
		"",
		]);
},
function (n, e, t) {
	"use strict";
	n.exports = function (n) {
		var e = [];
		return (
			(e.toString = function () {
				return this.map(function (e) {
					var t = (function (n, e) {
						var t = n[1] || "",
						o = n[3];
						if (!o) return t;
						if (e && "function" == typeof btoa) {
							var r = ((a = o), (s = btoa(unescape(encodeURIComponent(JSON.stringify(a))))), (c = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s)), "/*# ".concat(c, " */")),
							i = o.sources.map(function (n) {
								return "/*# sourceURL=".concat(o.sourceRoot).concat(n, " */");
							});
							return [t].concat(i).concat([r]).join("\n");
						}
						var a, s, c;
						return [t].join("\n");
					})(e, n);
					return e[2] ? "@media ".concat(e[2], "{").concat(t, "}") : t;
				}).join("");
			}),
			(e.i = function (n, t) {
				"string" == typeof n && (n = [[null, n, ""]]);
				for (var o = {}, r = 0; r < this.length; r++) {
					var i = this[r][0];
					null != i && (o[i] = !0);
				}
				for (var a = 0; a < n.length; a++) {
					var s = n[a];
					(null != s[0] && o[s[0]]) || (t && !s[2] ? (s[2] = t) : t && (s[2] = "(".concat(s[2], ") and (").concat(t, ")")), e.push(s));
				}
			}),
			e
			);
	};
},
function (n, e, t) {
	"use strict";
	var o,
	r = {},
	i = function () {
		return void 0 === o && (o = Boolean(window && document && document.all && !window.atob)), o;
	},
	a = (function () {
		var n = {};
		return function (e) {
			if (void 0 === n[e]) {
				var t = document.querySelector(e);
				if (window.HTMLIFrameElement && t instanceof window.HTMLIFrameElement)
					try {
						t = t.contentDocument.head;
					} catch (n) {
						t = null;
					}
					n[e] = t;
				}
				return n[e];
			};
		})();
		function s(n, e) {
			for (var t = [], o = {}, r = 0; r < n.length; r++) {
				var i = n[r],
				a = e.base ? i[0] + e.base : i[0],
				s = { css: i[1], media: i[2], sourceMap: i[3] };
				o[a] ? o[a].parts.push(s) : t.push((o[a] = { id: a, parts: [s] }));
			}
			return t;
		}
		function c(n, e) {
			for (var t = 0; t < n.length; t++) {
				var o = n[t],
				i = r[o.id],
				a = 0;
				if (i) {
					for (i.refs++; a < i.parts.length; a++) i.parts[a](o.parts[a]);
						for (; a < o.parts.length; a++) i.parts.push(b(o.parts[a], e));
					} else {
						for (var s = []; a < o.parts.length; a++) s.push(b(o.parts[a], e));
							r[o.id] = { id: o.id, refs: 1, parts: s };
					}
				}
			}
			function l(n) {
				var e = document.createElement("style");
				if (void 0 === n.attributes.nonce) {
					var o = t.nc;
					o && (n.attributes.nonce = o);
				}
				if (
					(Object.keys(n.attributes).forEach(function (t) {
						e.setAttribute(t, n.attributes[t]);
					}),
					"function" == typeof n.insert)
					)
					n.insert(e);
				else {
					var r = a(n.insert || "head");
					if (!r) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
					r.appendChild(e);
				}
				return e;
			}
			var d,
			u =
			((d = []),
				function (n, e) {
					return (d[n] = e), d.filter(Boolean).join("\n");
				});
			function p(n, e, t, o) {
				var r = t ? "" : o.css;
				if (n.styleSheet) n.styleSheet.cssText = u(e, r);
				else {
					var i = document.createTextNode(r),
					a = n.childNodes;
					a[e] && n.removeChild(a[e]), a.length ? n.insertBefore(i, a[e]) : n.appendChild(i);
				}
			}
			function f(n, e, t) {
				var o = t.css,
				r = t.media,
				i = t.sourceMap;
				if ((r && n.setAttribute("media", r), i && btoa && (o += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i)))), " */")), n.styleSheet)) n.styleSheet.cssText = o;
				else {
					for (; n.firstChild; ) n.removeChild(n.firstChild);
						n.appendChild(document.createTextNode(o));
				}
			}
			var m = null,
			h = 0;
			function b(n, e) {
				var t, o, r;
				if (e.singleton) {
					var i = h++;
					(t = m || (m = l(e))), (o = p.bind(null, t, i, !1)), (r = p.bind(null, t, i, !0));
				} else
				(t = l(e)),
				(o = f.bind(null, t, e)),
				(r = function () {
					!(function (n) {
						if (null === n.parentNode) return !1;
						n.parentNode.removeChild(n);
					})(t);
				});
				return (
					o(n),
					function (e) {
						if (e) {
							if (e.css === n.css && e.media === n.media && e.sourceMap === n.sourceMap) return;
							o((n = e));
						} else r();
					}
					);
			}
			n.exports = function (n, e) {
				((e = e || {}).attributes = "object" == typeof e.attributes ? e.attributes : {}), e.singleton || "boolean" == typeof e.singleton || (e.singleton = i());
				var t = s(n, e);
				return (
					c(t, e),
					function (n) {
						for (var o = [], i = 0; i < t.length; i++) {
							var a = t[i],
							l = r[a.id];
							l && (l.refs--, o.push(l));
						}
						n && c(s(n, e), e);
						for (var d = 0; d < o.length; d++) {
							var u = o[d];
							if (0 === u.refs) {
								for (var p = 0; p < u.parts.length; p++) u.parts[p]();
									delete r[u.id];
							}
						}
					}
					);
			};
		},
		function (n, e, t) {
			"use strict";
			t.r(e);
			t(0);
			const o = () => {
				const n = $(event.currentTarget);
				n.val() ? n.parent(".input-wrapper").addClass("input-wrapper--active") : n.parent(".input-wrapper").removeClass("input-wrapper--active");
			},
			r = $(".about-home__img"),
			i = $(".about-text--new"),
			a = $(".about-wrapper"),
			s = () => {
				if (r.length > 0) {
					const n = +i.height() + +i.css("padding-top").split("px")[0] + +i.css("padding-bottom").split("px")[0];
					a.height();
					pageYOffset > n ? r.css({ position: "absolute", top: "100%" }) : r.css({ position: "fixed", top: "auto" });
				}
			},
			c = () => {
				const n = $(".modal-wrapper-video"),
				e = $(event.currentTarget).attr("data-link");
				$("#video-modal").attr("src", `https://www.youtube.com/embed/${e}`), n.fadeIn("slow").css("display", "flex");
			},
			l = () => {
				$("#video-modal").attr("src", "https://www.youtube.com/embed/"), $(".modal-wrapper-video").fadeOut("slow");
			},
			d = () => {
				const n = $(".graph-wrapper"),
				e = $(event.currentTarget);
				let t = n.attr("data-count");
				const o = $(".statistics__coin-count--nav .nav .next"),
				r = $(".statistics__coin-count--nav .nav .prev");
				if (!e.hasClass("item--disabled"))
					if (e.hasClass("prev")) {
						const e = $(".statistics__graph").width(),
						i = 2e3,
						a = +t + 1;
						let s = i - (i / 23) * a;
						(s = s < e ? e : s), n.attr("data-count", a), n.css({ transform: `translateX(-${s}px)` }), o.removeClass("item--disabled"), (s < e || s === e) && r.addClass("item--disabled");
					} else {
						const e = $(".statistics__graph").width(),
						i = 2e3,
						a = +t - 1;
						let s = i - (i / 23) * a;
						(s = s < e ? e : s), n.attr("data-count", a), n.css({ transform: `translateX(-${s}px)` }), r.removeClass("item--disabled"), 0 === a && o.addClass("item--disabled");
					}
				},
				u = () => {
					const n = $(".team__slider .item"),
					e = $(event.currentTarget),
					t = $(".team").attr("data-count"),
					o = $(".team__slider__nav .next"),
					r = $(".team__slider__nav .prev");
					if (!e.hasClass("item-nav--disabled"))
						if (e.hasClass("next")) {
							const e = +t - 1,
							i = 310 * e;
							$(".team").attr("data-count", e), n.css({ transform: `translateX(${i}px` }), r.removeClass("item-nav--disabled");
							const a = $(window).width() > 991 ? 4 : $(window).width() > 640 ? 3 : 2;
							n.length - a < -1 * e && o.addClass("item-nav--disabled");
						} else {
							const e = +t + 1,
							i = 310 * e;
							$(".team").attr("data-count", e), n.css({ transform: `translateX(${i}px` }), o.removeClass("item-nav--disabled"), 0 === e && r.addClass("item-nav--disabled");
						}
					},
					p = () => {
						const n = $(".new-menu-modal"),
						e = $(event.currentTarget);
						e.hasClass("show") ? (e.removeClass("show"), n.css("top", "-150%")) : (e.addClass("show"), n.css("top", "0"));
					};
					$(document).ready(function () {
						s(),
						(() => {
							$(".rubricator .item ");
							let n = window.location.href;
							(n = n.split("/category/")).length > 1 && ((n = n[1].split("/")[0]), $(`#${n}`).addClass("item--active"));
						})(),
						$("input").on("input", o),
						$(".page-video__item").on("click", c),
						$(".modal-video__close").on("click", l),
						$(".statistics__coin-count--nav .nav .item").on("click", d),
						$(".team__slider__nav .item-nav").on("click", u),
						$(".mobile-menu-btn").on("click", p),
						$("#about-form").on("submit", function (n) {
							n.preventDefault(),
							$.ajax({
								url: "/wp-content/themes/ertc/mail.php",
								type: "POST",
								data: "name=" + $("#input-name").val() + "&tel=" + $("#input-tel").val() + "&comment=" + $("#input-comment").val(),
								success: function (n) {
									$("#input-name").val(""),
									$("#input-tel").val(""),
									$("#input-comment").val(""),
									$("#input-name").parent(".input-wrapper--active").removeClass("input-wrapper--active"),
									$("#input-tel").parent(".input-wrapper--active").removeClass("input-wrapper--active"),
									$("#input-comment").parent(".input-wrapper--active").removeClass("input-wrapper--active"),
									$(".modal-alert").fadeIn("slow").css("display", "flex");
								},
							});
						});
						$(".modal-alert__close").on("click", function(){
							$(".modal-alert").fadeOut("slow").css("display", "none");
						});
					}),
					$(window).resize(function () {}),
					$(window).scroll(() => {
						s();
					}),
					$(document).on("click", function (n) {
						let e = $(".modal-video"),
						t = $(".page-video__item");
						t.is(n.target) || 0 !== t.has(n.target).length || e.is(n.target) || 0 !== e.has(n.target).length || l();
					});
				},
				]);
