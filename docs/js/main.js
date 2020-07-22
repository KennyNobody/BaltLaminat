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

/***/ "./src/blocks/modules/mmenu/mmenu.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/mmenu/mmenu.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mmenu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mmenu-js */ "./node_modules/mmenu-js/src/mmenu.js");


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
  $('[data-modal]').click(function (e) {
    $.fancybox.close();
    e.preventDefault();
    $.fancybox.open({
      src: this.attributes[0].nodeValue,
      type: 'inline',
      opts: {
        arrows: false,
        touch: false,
        beforeShow: function beforeShow(instance, current) {
          $('.head-nav__link').removeClass('head-nav__link--active');
          $('a[href|="' + this.src + '"]').addClass('head-nav__link--active');
        },
        beforeClose: function beforeClose() {
          $('.head-nav__link').removeClass('head-nav__link--active');
        },
        baseTpl: '<div class="fancybox-container fancybox-container--menu" role="dialog" tabindex="-1">' + '<div class="fancybox-bg"></div>' + '<div class="fancybox-inner">' + '<div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div>' + '<div class="fancybox-toolbar">{{buttons}}</div>' + '<div class="fancybox-navigation">{{arrows}}</div>' + '<div class="fancybox-stage"></div>' + '<div class="fancybox-caption"><div class=""fancybox-caption__body"></div></div>' + '</div>' + '</div>'
      }
    });
  });
  $('[data-fancybox="modal"]').fancybox({
    arrows: false
  });
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
  $('[data-fancybox="gallery"]').fancybox();
  var myDropzone = new dropzone__WEBPACK_IMPORTED_MODULE_0___default.a(".dropfile", {
    url: pathToScript
  });
  dropzone__WEBPACK_IMPORTED_MODULE_0___default.a.clickable = true;
});
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

(function () {
  var columnsGrid = document.querySelectorAll('.grid__column');
  var columnsService = document.querySelectorAll('.service__column');
  window.addEventListener('load', toggle); // window.addEventListener('resize', function(){
  // });

  (function () {
    window.addEventListener("resize", resizeThrottler);
    var resizeTimeout;

    function resizeThrottler() {
      if (!resizeTimeout) {
        resizeTimeout = setTimeout(function () {
          resizeTimeout = null;
          actualResizeHandler();
        }, 500);
      }
    }

    function actualResizeHandler() {
      document.location.reload(true);
    }
  })();

  function toggle() {
    if (window.innerWidth > 1200) {
      initSlider();
    } else if (window.innerWidth < 1200) {
      var unwrap = function unwrap(node) {
        node.replaceWith.apply(node, _toConsumableArray(node.childNodes));
      };

      if (columnsGrid) {
        for (var i = 0; i < columnsGrid.length; i++) {
          unwrap(columnsGrid[i]);
          initSlider();
        }
      }

      if (columnsService) {
        for (var _i = 0; _i < columnsService.length; _i++) {
          unwrap(columnsService[_i]);
          initSlider();
        }
      }

      ;
    } else {
      return false;
    }
  }
})();

(function toggleCardTitle() {
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
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/js/swiper.esm.bundle.js");


window.initSlider = function () {
  var sliderTop = document.querySelectorAll('.slider-top');
  var sliderBottom = document.querySelectorAll('.slider-bottom');

  if (window.innerWidth > 1200) {
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
  } else {
    for (var _i = 0; _i < sliderTop.length; _i++) {
      var _mySwiperTop = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](sliderTop[_i], {
        slidesPerView: 1,
        observer: true,
        observeParents: true,
        autoHeight: true,
        pagination: {
          el: '.slider-top__pagination',
          type: 'fraction'
        },
        navigation: {
          nextEl: '.slider-top__btn--next',
          prevEl: '.slider-top__btn--prev',
          disabledClass: 'slider-top__btn--disabled'
        }
      });
    }
  }
}; // window.addEventListener('load', initSlider);


(function initCaseSlider() {
  var caseSlider = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.case__articles', {
    slidesPerView: 1,
    autoHeight: true,
    pagination: {
      el: '.case__header',
      clickable: true,
      bulletActiveClass: 'case__title--active',
      bulletClass: 'case__title',
      // type: 'fraction',
      renderBullet: function renderBullet(index, className) {
        return '<p class="' + className + '"><span>' + this.slides[index].dataset.name + '</span></p>';
      }
    }
  });
})(); // (function() {
// 	window.addEventListener("resize", resizeThrottler);
// 	let resizeTimeout;
// 	function resizeThrottler() {
// 		if ( !resizeTimeout ) {
// 			resizeTimeout = setTimeout(function() {
// 				resizeTimeout = null;
// 				actualResizeHandler();
// 			}, 500);
// 		}
// 	}
// 	function actualResizeHandler() {
// 		console.log('Что-то происходит');
// 	}
// }());

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
/* harmony import */ var _modules_modal_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/modal/modal */ "./src/blocks/modules/modal/modal.js");
/* harmony import */ var _modules_product_product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/product/product */ "./src/blocks/modules/product/product.js");
/* harmony import */ var _modules_product_product__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_product_product__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_slider_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/slider/slider */ "./src/blocks/modules/slider/slider.js");
/* harmony import */ var _modules_mmenu_mmenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/mmenu/mmenu */ "./src/blocks/modules/mmenu/mmenu.js");

 // import "%modules%/header/header";
// import "%modules%/footer/footer";


 // Врап/анврап




/***/ }),

/***/ "./src/js/import/ui.js":
/*!*****************************!*\
  !*** ./src/js/import/ui.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! choices.js */ "./node_modules/choices.js/public/assets/scripts/choices.js");
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(choices_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var simplebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! simplebar */ "./node_modules/simplebar/dist/simplebar.esm.js");
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nouislider */ "./node_modules/nouislider/distribute/nouislider.js");
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nouislider__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var wnumb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wnumb */ "./node_modules/wnumb/wNumb.js");
/* harmony import */ var wnumb__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(wnumb__WEBPACK_IMPORTED_MODULE_3__);





(function () {
  (function initCounters() {
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

  (function initDropdown() {
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

  (function initFilterDropdown() {
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
  })();

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

  (function initRangeSlider() {
    var slider = document.querySelectorAll('.range-slider');

    if (slider) {
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
    }
  })();

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
  })();

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
        if (document.querySelector('#scrollbar-1')) {
          scrollbar1 = new simplebar__WEBPACK_IMPORTED_MODULE_1__["default"](document.querySelector('#scrollbar-1'));
        }

        if (document.querySelector('#scrollbar-2')) {
          scrollbar1 = new simplebar__WEBPACK_IMPORTED_MODULE_1__["default"](document.querySelector('#scrollbar-2'));
        }

        init = true;
      }
    }

    function destroyLibs() {
      if (init == true && isMobile == true) {
        if (scrollbar1) {
          scrollbar1.unMount();
        }

        if (scrollbar2) {
          scrollbar2.unMount();
        }

        init = false;
      }
    }

    checkMobile();
    initLibs();
    window.addEventListener('resize', checkMobile);
  })();
})();

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