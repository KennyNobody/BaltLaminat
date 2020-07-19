/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/case/case.js":
/*!*****************************************!*\
  !*** ./src/blocks/modules/case/case.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  var links = document.querySelectorAll('.case__title');

  function removeClasses() {
    for (var i = 0; i < links.length; i++) {
      links[i].classList.remove('case__title--active');
    }
  }

  if (links) {
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', function () {
        removeClasses();
        this.classList.add('case__title--active');
      });
    }
  }
})();

/***/ }),

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/gallery/gallery.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/gallery/gallery.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _fancyapps_fancybox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fancyapps/fancybox */ "./node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js");
/* harmony import */ var _fancyapps_fancybox__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fancyapps_fancybox__WEBPACK_IMPORTED_MODULE_0__);

$(document).ready(function () {
  $('[data-fancybox="gallery"]').fancybox({});
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/mmenu/mmenu.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/mmenu/mmenu.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mmenu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mmenu-js */ "./node_modules/mmenu-js/src/mmenu.js");
 // (function initMmenu(){
// 	new Mmenu( "#mmenu", {
// 		"extensions": [
// 		"pagedim-black"
// 		],
// 		"counters": true,
// 		"navbars": [
// 		{
// 			"position": "top",
// 			"content": [
// 			"searchfield"
// 			]
// 		},
// 		{
// 			"position": "bottom",
// 			"content": [
// 			"<a class='fa fa-envelope' href='#/'></a>",
// 			"<a class='fa fa-twitter' href='#/'></a>",
// 			"<a class='fa fa-facebook' href='#/'></a>"
// 			]
// 		}
// 		],
// 	});
// })();

(function initMmenu() {
  new mmenu_js__WEBPACK_IMPORTED_MODULE_0__["default"]("#mmenu", {
    "extensions": ["pagedim-black", "fx-menu-slide"],
    "counters": true,
    "navbars": [{
      "position": "top",
      "content": ["searchfield"]
    }, {
      "position": "bottom",
      "content": ["<a class='fa fa-envelope' href='#/'></a>", "<a class='fa fa-twitter' href='#/'></a>", "<a class='fa fa-facebook' href='#/'></a>"]
    }]
  }, {
    "language": "ru"
  });
})();

/***/ }),

/***/ "./src/blocks/modules/modal/modal.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/modal/modal.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dropzone */ "./node_modules/dropzone/dist/dropzone.js");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dropzone__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fancyapps_fancybox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fancyapps/fancybox */ "./node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js");
/* harmony import */ var _fancyapps_fancybox__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fancyapps_fancybox__WEBPACK_IMPORTED_MODULE_1__);


$(document).ready(function () {
  $('[data-fancybox="modal"]').fancybox({});
  $('[data-fancybox="filter-modal"]').fancybox({
    slideClass: "filter-fancybox",
    touch: false
  });
  $('[data-fancybox="service-modal"]').fancybox({
    onActivate: function onActivate(instance, current) {
      console.info('Clicked element:');
      console.info(current.opts.$orig);
    }
  });
});

(function () {
  var myDropzone = new dropzone__WEBPACK_IMPORTED_MODULE_0___default.a(".dropfile", {
    url: pathToScript
  });
  dropzone__WEBPACK_IMPORTED_MODULE_0___default.a.clickable = true;
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/blocks/modules/product/product.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/product/product.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// Выполнять на мобилке
(function () {
  var columnsGrid = document.querySelectorAll('.grid__column');
  var columnsService = document.querySelectorAll('.service__column');
  var mobile = false;

  function checkMobile() {
    if (window.innerWidth > 1200) {
      mobile = false; // console.log('Десктоп');
    } else {
      mobile = true; // console.log('Мобилка');
    }
  }

  window.addEventListener('resize', checkMobile);
  window.addEventListener('resize', toggle);

  function toggle() {
    console.log(window.innerWidth > 1200);

    if (window.innerWidth > 1200 && mobile == false) {
      mobile = false;
      window.location.reload();
      console.log('Релоад');
    } else if (window.innerWidth < 1200 && mobile == true) {
      var unwrap = function unwrap(node) {
        node.replaceWith.apply(node, _toConsumableArray(node.childNodes));
      };

      if (columnsGrid) {
        for (var i = 0; i < columnsGrid.length; i++) {
          unwrap(columnsGrid[i]);
        }
      }

      if (columnsService) {
        for (var _i = 0; _i < columnsService.length; _i++) {
          unwrap(columnsService[_i]);
        }
      }

      ;
      console.log('Анврап');
    } else {
      console.log('Ничего');
      return false;
    }
  }
})();

(function () {
  var stickyCard = document.querySelector('.grid__block--product-card');

  if (stickyCard) {
    var startPosition = stickyCard.offsetTop;
    var title = stickyCard.querySelector('.product-card__title');
    window.addEventListener("scroll", function () {
      var nowPosition = stickyCard.offsetTop;

      if (startPosition != nowPosition) {
        title.classList.add('product-card__title--visible');
      } else {
        title.classList.remove('product-card__title--visible');
      }
    });
  }
})();

/***/ }),

/***/ "./src/blocks/modules/slider/slider.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/slider/slider.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/js/swiper.esm.bundle.js");

$(document).ready(function () {
  (function () {
    var sliderTop = document.querySelectorAll('.slider-top');
    var sliderBottom = document.querySelectorAll('.slider-bottom');

    for (var i = 0; i < sliderTop.length; i++) {
      var mySwiperThumbs = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](sliderBottom[i], {
        slidesPerView: 'auto',
        spaceBetween: 32,
        freeMode: true,
        observer: true,
        observeParents: true
      });
      var mySwiperTop = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](sliderTop[i], {
        slidesPerView: 1,
        observer: true,
        observeParents: true,
        navigation: {
          nextEl: '.slider-bottom__btn--right',
          prevEl: '.slider-bottom__btn--left'
        },
        thumbs: {
          swiper: mySwiperThumbs,
          slideThumbActiveClass: 'slider-bottom__slide--active'
        }
      });
    }
  })();
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ "./src/js/import/ui.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_modal_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/modal/modal */ "./src/blocks/modules/modal/modal.js");
/* harmony import */ var _modules_product_product__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/product/product */ "./src/blocks/modules/product/product.js");
/* harmony import */ var _modules_product_product__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modules_product_product__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _modules_gallery_gallery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %modules%/gallery/gallery */ "./src/blocks/modules/gallery/gallery.js");
/* harmony import */ var _modules_slider_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! %modules%/slider/slider */ "./src/blocks/modules/slider/slider.js");
/* harmony import */ var _modules_case_case__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! %modules%/case/case */ "./src/blocks/modules/case/case.js");
/* harmony import */ var _modules_case_case__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_modules_case_case__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _modules_mmenu_mmenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! %modules%/mmenu/mmenu */ "./src/blocks/modules/mmenu/mmenu.js");











/***/ }),

/***/ "./src/js/import/ui.js":
/*!*****************************!*\
  !*** ./src/js/import/ui.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! choices.js */ "./node_modules/choices.js/public/assets/scripts/choices.js");
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(choices_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var simplebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! simplebar */ "./node_modules/simplebar/dist/simplebar.esm.js");
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nouislider */ "./node_modules/nouislider/distribute/nouislider.js");
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nouislider__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var wnumb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wnumb */ "./node_modules/wnumb/wNumb.js");
/* harmony import */ var wnumb__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(wnumb__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }





$(document).ready(function () {
  // Счетчики
  (function () {
    var counter = document.querySelectorAll('.counter');

    if (counter) {
      var _loop = function _loop(i) {
        var btnPrev = counter[i].querySelector('.counter__btn--minus');
        var btnNext = counter[i].querySelector('.counter__btn--plus');
        var input = counter[i].querySelector('.counter__input input');
        btnPrev.addEventListener('click', function (e) {
          e.preventDefault();

          if (input.value > 1) {
            input.value = +input.value - 1;
          }
        });
        btnNext.addEventListener('click', function (e) {
          e.preventDefault();
          input.value = +input.value + 1;
        });
      };

      for (var i = 0; i < counter.length; i++) {
        _loop(i);
      }
    }
  })();

  (function () {
    var elements = document.querySelectorAll('.dropdown');

    for (var n = 0; n < elements.length; n++) {
      var choices = new choices_js__WEBPACK_IMPORTED_MODULE_0___default.a(elements[n], {
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
        }
      });
    }
  })();

  (function () {
    var elements = document.querySelectorAll('.filter-dropdown');

    for (var n = 0; n < elements.length; n++) {
      var choices = new choices_js__WEBPACK_IMPORTED_MODULE_0___default.a(elements[n], {
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
        }
      });
    }
  })(); // Выпадашки фильтра


  (function toggleFilterDrop() {
    var drops = document.querySelectorAll('.filter-drop__header');

    if (drops) {
      for (var i = 0; i < drops.length; i++) {
        drops[i].addEventListener('click', toggle);
      }
    }

    function toggle(event) {
      if (event.target.tagName !== 'BUTTON') {
        this.parentNode.classList.toggle('filter-drop--opened');
      }
    }
  })();

  (function toggleFilterDrop() {
    var drops = document.querySelectorAll('.filter-subdrop__header');

    if (drops) {
      for (var i = 0; i < drops.length; i++) {
        drops[i].addEventListener('click', toggle);
      }
    }

    function toggle(event) {
      this.parentNode.classList.toggle('filter-subdrop--opened');
    }
  })();

  (function initRangeSlider() {
    var slider = document.querySelectorAll('.range-slider');

    var _loop2 = function _loop2(i) {
      nouislider__WEBPACK_IMPORTED_MODULE_2___default.a.create(slider[i], {
        start: [minPrice, maxPrice],
        connect: true,
        step: 1,
        range: {
          'min': minPrice,
          'max': maxPrice
        },
        format: wnumb__WEBPACK_IMPORTED_MODULE_3___default()({
          decimals: 0
        })
      });
      slider[i].noUiSlider.on('update', function (values) {
        slider[i].parentNode.parentNode.querySelector('.filter-range__input--start').value = values[0];
        slider[i].parentNode.parentNode.querySelector('.filter-range__input--end').value = values[1];
      });
    };

    for (var i = 0; i < slider.length; i++) {
      _loop2(i);
    }
  })(); // Сброс фильтра


  (function resetFilter() {
    var btns = document.querySelectorAll('.filter__btn-all');

    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener('click', reset);
    }

    function reset(e) {
      console.log(this);
    }
  })();

  (function resize() {
    var resized = document.querySelectorAll('.resized');

    if (resized) {
      window.addEventListener('resize', function () {
        for (var i = 0; i < resized.length; i++) {
          resized[i].setAttribute("style", "height:" + resized[i].offsetWidth + 'px');
        }
      });
      window.addEventListener('load', function () {
        for (var i = 0; i < resized.length; i++) {
          resized[i].setAttribute("style", "height:" + resized[i].offsetWidth + 'px');
        }
      });
    }
  })(); // Кастомный скролл


  (function initScrollbars() {
    var isMobile;
    var scrollbar1;
    var scrollbar2;
    var init = false;

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
        scrollbar1 = new simplebar__WEBPACK_IMPORTED_MODULE_1__["default"](document.querySelector('#scrollbar-1'));
        scrollbar2 = new simplebar__WEBPACK_IMPORTED_MODULE_1__["default"](document.querySelector('#scrollbar-2'));
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
    initLibs(); // function destroyLibs() {
    // 	const scrollbars = document.querySelectorAll('.custom-scrollbar');
    // 	for (let i = 0; i < scrollbars.length; i++) {
    // 	}
    // }

    window.addEventListener('resize', checkMobile);
  })();
});
!function (n) {
  var e = {};

  function t(o) {
    if (e[o]) return e[o].exports;
    var r = e[o] = {
      i: o,
      l: !1,
      exports: {}
    };
    return n[o].call(r.exports, r, r.exports, t), r.l = !0, r.exports;
  }

  t.m = n, t.c = e, t.d = function (n, e, o) {
    t.o(n, e) || Object.defineProperty(n, e, {
      enumerable: !0,
      get: o
    });
  }, t.r = function (n) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(n, "__esModule", {
      value: !0
    });
  }, t.t = function (n, e) {
    if (1 & e && (n = t(n)), 8 & e) return n;
    if (4 & e && "object" == _typeof(n) && n && n.__esModule) return n;
    var o = Object.create(null);
    if (t.r(o), Object.defineProperty(o, "default", {
      enumerable: !0,
      value: n
    }), 2 & e && "string" != typeof n) for (var r in n) {
      t.d(o, r, function (e) {
        return n[e];
      }.bind(null, r));
    }
    return o;
  }, t.n = function (n) {
    var e = n && n.__esModule ? function () {
      return n["default"];
    } : function () {
      return n;
    };
    return t.d(e, "a", e), e;
  }, t.o = function (n, e) {
    return Object.prototype.hasOwnProperty.call(n, e);
  }, t.p = "", t(t.s = 4);
}([function (n, e, t) {
  var o = t(1);
  "string" == typeof o && (o = [[n.i, o, ""]]);
  var r = {
    insert: "head",
    singleton: !1
  };
  t(3)(o, r);
  o.locals && (n.exports = o.locals);
}, function (n, e, t) {
  (n.exports = t(2)(!1)).push([n.i, '/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n', ""]);
}, function (n, e, t) {
  "use strict";

  n.exports = function (n) {
    var e = [];
    return e.toString = function () {
      return this.map(function (e) {
        var t = function (n, e) {
          var t = n[1] || "",
              o = n[3];
          if (!o) return t;

          if (e && "function" == typeof btoa) {
            var r = (a = o, s = btoa(unescape(encodeURIComponent(JSON.stringify(a)))), c = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s), "/*# ".concat(c, " */")),
                i = o.sources.map(function (n) {
              return "/*# sourceURL=".concat(o.sourceRoot).concat(n, " */");
            });
            return [t].concat(i).concat([r]).join("\n");
          }

          var a, s, c;
          return [t].join("\n");
        }(e, n);

        return e[2] ? "@media ".concat(e[2], "{").concat(t, "}") : t;
      }).join("");
    }, e.i = function (n, t) {
      "string" == typeof n && (n = [[null, n, ""]]);

      for (var o = {}, r = 0; r < this.length; r++) {
        var i = this[r][0];
        null != i && (o[i] = !0);
      }

      for (var a = 0; a < n.length; a++) {
        var s = n[a];
        null != s[0] && o[s[0]] || (t && !s[2] ? s[2] = t : t && (s[2] = "(".concat(s[2], ") and (").concat(t, ")")), e.push(s));
      }
    }, e;
  };
}, function (n, e, t) {
  "use strict";

  var o,
      r = {},
      i = function i() {
    return void 0 === o && (o = Boolean(window && document && document.all && !window.atob)), o;
  },
      a = function () {
    var n = {};
    return function (e) {
      if (void 0 === n[e]) {
        var t = document.querySelector(e);
        if (window.HTMLIFrameElement && t instanceof window.HTMLIFrameElement) try {
          t = t.contentDocument.head;
        } catch (n) {
          t = null;
        }
        n[e] = t;
      }

      return n[e];
    };
  }();

  function s(n, e) {
    for (var t = [], o = {}, r = 0; r < n.length; r++) {
      var i = n[r],
          a = e.base ? i[0] + e.base : i[0],
          s = {
        css: i[1],
        media: i[2],
        sourceMap: i[3]
      };
      o[a] ? o[a].parts.push(s) : t.push(o[a] = {
        id: a,
        parts: [s]
      });
    }

    return t;
  }

  function c(n, e) {
    for (var t = 0; t < n.length; t++) {
      var o = n[t],
          i = r[o.id],
          a = 0;

      if (i) {
        for (i.refs++; a < i.parts.length; a++) {
          i.parts[a](o.parts[a]);
        }

        for (; a < o.parts.length; a++) {
          i.parts.push(b(o.parts[a], e));
        }
      } else {
        for (var s = []; a < o.parts.length; a++) {
          s.push(b(o.parts[a], e));
        }

        r[o.id] = {
          id: o.id,
          refs: 1,
          parts: s
        };
      }
    }
  }

  function l(n) {
    var e = document.createElement("style");

    if (void 0 === n.attributes.nonce) {
      var o = t.nc;
      o && (n.attributes.nonce = o);
    }

    if (Object.keys(n.attributes).forEach(function (t) {
      e.setAttribute(t, n.attributes[t]);
    }), "function" == typeof n.insert) n.insert(e);else {
      var r = a(n.insert || "head");
      if (!r) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
      r.appendChild(e);
    }
    return e;
  }

  var d,
      u = (d = [], function (n, e) {
    return d[n] = e, d.filter(Boolean).join("\n");
  });

  function p(n, e, t, o) {
    var r = t ? "" : o.css;
    if (n.styleSheet) n.styleSheet.cssText = u(e, r);else {
      var i = document.createTextNode(r),
          a = n.childNodes;
      a[e] && n.removeChild(a[e]), a.length ? n.insertBefore(i, a[e]) : n.appendChild(i);
    }
  }

  function f(n, e, t) {
    var o = t.css,
        r = t.media,
        i = t.sourceMap;
    if (r && n.setAttribute("media", r), i && btoa && (o += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i)))), " */")), n.styleSheet) n.styleSheet.cssText = o;else {
      for (; n.firstChild;) {
        n.removeChild(n.firstChild);
      }

      n.appendChild(document.createTextNode(o));
    }
  }

  var m = null,
      h = 0;

  function b(n, e) {
    var t, o, r;

    if (e.singleton) {
      var i = h++;
      t = m || (m = l(e)), o = p.bind(null, t, i, !1), r = p.bind(null, t, i, !0);
    } else t = l(e), o = f.bind(null, t, e), r = function r() {
      !function (n) {
        if (null === n.parentNode) return !1;
        n.parentNode.removeChild(n);
      }(t);
    };

    return o(n), function (e) {
      if (e) {
        if (e.css === n.css && e.media === n.media && e.sourceMap === n.sourceMap) return;
        o(n = e);
      } else r();
    };
  }

  n.exports = function (n, e) {
    (e = e || {}).attributes = "object" == _typeof(e.attributes) ? e.attributes : {}, e.singleton || "boolean" == typeof e.singleton || (e.singleton = i());
    var t = s(n, e);
    return c(t, e), function (n) {
      for (var o = [], i = 0; i < t.length; i++) {
        var a = t[i],
            l = r[a.id];
        l && (l.refs--, o.push(l));
      }

      n && c(s(n, e), e);

      for (var d = 0; d < o.length; d++) {
        var u = o[d];

        if (0 === u.refs) {
          for (var p = 0; p < u.parts.length; p++) {
            u.parts[p]();
          }

          delete r[u.id];
        }
      }
    };
  };
}, function (n, e, t) {
  "use strict";

  t.r(e);
  t(0);

  var o = function o() {
    var n = $(event.currentTarget);
    n.val() ? n.parent(".input-wrapper").addClass("input-wrapper--active") : n.parent(".input-wrapper").removeClass("input-wrapper--active");
  },
      r = $(".about-home__img"),
      i = $(".about-text--new"),
      a = $(".about-wrapper"),
      s = function s() {
    if (r.length > 0) {
      var _n = +i.height() + +i.css("padding-top").split("px")[0] + +i.css("padding-bottom").split("px")[0];

      a.height();
      pageYOffset > _n ? r.css({
        position: "absolute",
        top: "100%"
      }) : r.css({
        position: "fixed",
        top: "auto"
      });
    }
  },
      c = function c() {
    var n = $(".modal-wrapper-video"),
        e = $(event.currentTarget).attr("data-link");
    $("#video-modal").attr("src", "https://www.youtube.com/embed/".concat(e)), n.fadeIn("slow").css("display", "flex");
  },
      l = function l() {
    $("#video-modal").attr("src", "https://www.youtube.com/embed/"), $(".modal-wrapper-video").fadeOut("slow");
  },
      d = function d() {
    var n = $(".graph-wrapper"),
        e = $(event.currentTarget);
    var t = n.attr("data-count");
    var o = $(".statistics__coin-count--nav .nav .next"),
        r = $(".statistics__coin-count--nav .nav .prev");
    if (!e.hasClass("item--disabled")) if (e.hasClass("prev")) {
      var _e = $(".statistics__graph").width(),
          _i = 2e3,
          _a = +t + 1;

      var _s = _i - _i / 23 * _a;

      _s = _s < _e ? _e : _s, n.attr("data-count", _a), n.css({
        transform: "translateX(-".concat(_s, "px)")
      }), o.removeClass("item--disabled"), (_s < _e || _s === _e) && r.addClass("item--disabled");
    } else {
      var _e2 = $(".statistics__graph").width(),
          _i2 = 2e3,
          _a2 = +t - 1;

      var _s2 = _i2 - _i2 / 23 * _a2;

      _s2 = _s2 < _e2 ? _e2 : _s2, n.attr("data-count", _a2), n.css({
        transform: "translateX(-".concat(_s2, "px)")
      }), r.removeClass("item--disabled"), 0 === _a2 && o.addClass("item--disabled");
    }
  },
      u = function u() {
    var n = $(".team__slider .item"),
        e = $(event.currentTarget),
        t = $(".team").attr("data-count"),
        o = $(".team__slider__nav .next"),
        r = $(".team__slider__nav .prev");
    if (!e.hasClass("item-nav--disabled")) if (e.hasClass("next")) {
      var _e3 = +t - 1,
          _i3 = 310 * _e3;

      $(".team").attr("data-count", _e3), n.css({
        transform: "translateX(".concat(_i3, "px")
      }), r.removeClass("item-nav--disabled");

      var _a3 = $(window).width() > 991 ? 4 : $(window).width() > 640 ? 3 : 2;

      n.length - _a3 < -1 * _e3 && o.addClass("item-nav--disabled");
    } else {
      var _e4 = +t + 1,
          _i4 = 310 * _e4;

      $(".team").attr("data-count", _e4), n.css({
        transform: "translateX(".concat(_i4, "px")
      }), o.removeClass("item-nav--disabled"), 0 === _e4 && r.addClass("item-nav--disabled");
    }
  },
      p = function p() {
    var n = $(".new-menu-modal"),
        e = $(event.currentTarget);
    e.hasClass("show") ? (e.removeClass("show"), n.css("top", "-150%")) : (e.addClass("show"), n.css("top", "0"));
  };

  $(document).ready(function () {
    s(), function () {
      $(".rubricator .item ");
      var n = window.location.href;
      (n = n.split("/category/")).length > 1 && (n = n[1].split("/")[0], $("#".concat(n)).addClass("item--active"));
    }(), $("input").on("input", o), $(".page-video__item").on("click", c), $(".modal-video__close").on("click", l), $(".statistics__coin-count--nav .nav .item").on("click", d), $(".team__slider__nav .item-nav").on("click", u), $(".mobile-menu-btn").on("click", p), $("#about-form").on("submit", function (n) {
      n.preventDefault(), $.ajax({
        url: "/wp-content/themes/ertc/mail.php",
        type: "POST",
        data: "name=" + $("#input-name").val() + "&tel=" + $("#input-tel").val() + "&comment=" + $("#input-comment").val(),
        success: function success(n) {
          $("#input-name").val(""), $("#input-tel").val(""), $("#input-comment").val(""), $("#input-name").parent(".input-wrapper--active").removeClass("input-wrapper--active"), $("#input-tel").parent(".input-wrapper--active").removeClass("input-wrapper--active"), $("#input-comment").parent(".input-wrapper--active").removeClass("input-wrapper--active"), $(".modal-alert").fadeIn("slow").css("display", "flex");
        }
      });
    });
    $(".modal-alert__close").on("click", function () {
      $(".modal-alert").fadeOut("slow").css("display", "none");
    });
  }), $(window).resize(function () {}), $(window).scroll(function () {
    s();
  }), $(document).on("click", function (n) {
    var e = $(".modal-video"),
        t = $(".page-video__item");
    t.is(n.target) || 0 !== t.has(n.target).length || e.is(n.target) || 0 !== e.has(n.target).length || l();
  });
}]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map