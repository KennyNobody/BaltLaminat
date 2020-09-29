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

/***/ "./src/blocks/modules/filter/filter.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/filter/filter.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  (function toggleDropdownLink() {
    var dropdown = document.querySelectorAll('.select-sort');

    for (var i = 0; i < dropdown.length; i++) {
      dropdown[i].addEventListener('change', function () {
        toggleLink(this);
      });
    }

    function toggleLink(item) {
      var selected = item.options[item.selectedIndex].value;
      window.location.href = selected;
    }
  })();

  (function selectAll() {
    var btns = document.querySelectorAll('.filter__btn-all');

    if (btns) {
      for (var i = 0; i < btns.length; i++) {
        initSection(btns[i]);
      }
    }

    function initSection(item) {
      var checked = false;
      var inputArray = item.parentNode.parentNode.querySelectorAll('.filter-checkbox__input');
      item.addEventListener('click', function () {
        if (checked == false) {
          for (var _i = 0; _i < inputArray.length; _i++) {
            inputArray[_i].checked = true;
          }

          checked = true;
        } else {
          for (var _i2 = 0; _i2 < inputArray.length; _i2++) {
            inputArray[_i2].checked = false;
          }

          checked = false;
        }
      });
    }
  })();
})();

/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function hideAccentLine() {
  var block = document.querySelector('.accent-line');
  var btn = document.querySelector('.accent-line__close');

  if (sessionStorage.getItem('accentLineHidden') == null) {
    block.classList.remove('accent-line--hidden');
  }

  btn.addEventListener('click', function () {
    sessionStorage.setItem('accentLineHidden', 'true');
    block.classList.add('accent-line--hidden');
  });
})();

/***/ }),

/***/ "./src/blocks/modules/lk-auth/lk-auth.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/lk-auth/lk-auth.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function toggleAuthName() {
  var input = document.querySelectorAll('.lk-auth-form__input');

  for (var i = 0; i < input.length; i++) {
    input[i].addEventListener('focusin', function () {
      this.parentNode.classList.add('lk-auth-form__label--focus');
    });
    input[i].addEventListener('focusout', function () {
      if (this.value == false) {
        this.parentNode.classList.remove('lk-auth-form__label--focus');
      }
    });
  }
})();

/***/ }),

/***/ "./src/blocks/modules/map/map.js":
/*!***************************************!*\
  !*** ./src/blocks/modules/map/map.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tippy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tippy.js */ "./node_modules/tippy.js/dist/tippy.esm.js");


(function initMapSlider() {
  var button = document.querySelectorAll('.map__change-floor');
  var layers = document.querySelectorAll('[data-floor]');
  var checkbox = document.querySelectorAll('[data-type]');
  var partner = document.querySelectorAll('[data-partner-type]');
  var fields = document.querySelectorAll('.map__room');
  var floorNavs = document.querySelectorAll('[data-floorNavs]');

  for (var i = 0; i < button.length; i++) {
    button[i].addEventListener('click', toggleFloor);
  }

  for (var _i = 0; _i < checkbox.length; _i++) {
    checkbox[_i].addEventListener('click', toggleTypeField);
  }

  initTippy();

  function initTippy() {
    Object(tippy_js__WEBPACK_IMPORTED_MODULE_0__["default"])(fields, {
      trigger: 'click',
      allowHTML: true
    });
  }

  function toggleFloor() {
    for (var _i2 = 0; _i2 < button.length; _i2++) {
      button[_i2].classList.remove('map__change-floor--active');
    }

    var activeFloor = +this.getAttribute('data-btn-floor');
    this.classList.add('map__change-floor--active');
    toggleActiveClass(activeFloor);
    hidePreviousFloors(activeFloor);
    toggleNavs(activeFloor);
  }

  function toggleActiveClass(number) {
    for (var _i3 = 0; _i3 < layers.length; _i3++) {
      if (layers[_i3].getAttribute('data-floor') == number) {
        layers[_i3].classList.add('map__slide--active');
      } else {
        layers[_i3].classList.remove('map__slide--active');
      }
    }
  }

  function toggleNavs(number) {
    for (var _i4 = 0; _i4 < floorNavs.length; _i4++) {
      if (floorNavs[_i4].getAttribute('data-floorNavs') == number) {
        floorNavs[_i4].classList.remove('map-hidden');
      } else {
        floorNavs[_i4].classList.add('map-hidden');
      }
    }
  }

  function hidePreviousFloors(number) {
    for (var _i5 = 0; _i5 < layers.length; _i5++) {
      if (layers[_i5].getAttribute('data-floor') > number) {
        layers[_i5].classList.add('map__slide--hide');
      } else {
        layers[_i5].classList.remove('map__slide--hide');
      }
    }
  }

  function toggleTypeField(number) {
    var activeType = +this.getAttribute('data-type');

    for (var _i6 = 0; _i6 < fields.length; _i6++) {
      if (fields[_i6].getAttribute('data-map-field') == activeType) {
        fields[_i6].classList.add('map__room--active');
      } else {
        fields[_i6].classList.remove('map__room--active');
      }
    }

    for (var _i7 = 0; _i7 < partner.length; _i7++) {
      if (partner[_i7].getAttribute('data-partner-type') == activeType) {
        partner[_i7].classList.add('map__list-item--active');
      } else {
        partner[_i7].classList.remove('map__list-item--active');
      }
    }
  }
})();

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


(function initMmenu() {
  var menuArray = mobileLinks || null;
  new mmenu_js__WEBPACK_IMPORTED_MODULE_0__["default"]("#mmenu", {
    "extensions": ["pagedim-black", "fx-menu-slide"],
    "counters": true,
    "navbars": [{
      "position": "top",
      "content": ["searchfield"]
    }, {
      "position": "bottom",
      "content": mobileContacts
    }, {
      "position": "bottom",
      "content": mobileLinks
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
/* WEBPACK VAR INJECTION */(function($, __webpack_provided_window_dot_$) {/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dropzone */ "./node_modules/dropzone/dist/dropzone.js");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dropzone__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fancyapps_fancybox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fancyapps/fancybox */ "./node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js");
/* harmony import */ var _fancyapps_fancybox__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fancyapps_fancybox__WEBPACK_IMPORTED_MODULE_1__);
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



__webpack_provided_window_dot_$ = $;
$(document).ready(function () {
  $('[data-head-link]').click(function (e) {
    e.preventDefault();
    var linkNum = $(this).attr('data-head-link');
    var headerLinkArray = document.querySelectorAll('a[data-head-link]');
    var modalLinkArray = document.querySelectorAll('a[data-modal-link]');
    var modalSectionArray = document.querySelectorAll('div[data-modal-section]');
    $.fancybox.open({
      src: this.attributes[0].nodeValue,
      type: 'inline',
      hash: false,
      opts: {
        arrows: false,
        touch: false,
        beforeShow: function beforeShow(instance, current) {
          toggleActiveLink(linkNum);
          toggleTabs(linkNum);
        },
        beforeClose: function beforeClose() {
          toggleActiveLink();
          toggleTabs();
        },
        baseTpl: '<div class="fancybox-container fancybox-container--menu" role="dialog" tabindex="-1">' + '<div class="fancybox-bg"></div>' + '<div class="fancybox-inner">' + '<div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div>' + '<div class="fancybox-stage"></div>' + '<div class="fancybox-caption"><div class=""fancybox-caption__body"></div></div>' + '</div>' + '</div>'
      }
    });

    (function initModalLinks() {
      var dataItem;

      var _loop = function _loop(i) {
        modalLinkArray[i].addEventListener('click', function (e) {
          dataItem = modalLinkArray[i].getAttribute('data-modal-link');
          toggleActiveLink(dataItem);
          toggleTabs(dataItem);
        });
      };

      for (var i = 0; i < modalLinkArray.length; i++) {
        _loop(i);
      }
    })();

    function toggleActiveLink(activeItem) {
      var dataItem;

      for (var i = 0; i < modalLinkArray.length; i++) {
        dataItem = modalLinkArray[i].getAttribute('data-modal-link');

        if (dataItem == activeItem) {
          modalLinkArray[i].classList.add('head-nav__link--active');
        } else {
          modalLinkArray[i].classList.remove('head-nav__link--active');
        }
      }
    }

    function toggleTabs(activeItem) {
      var dataItem;

      for (var i = 0; i < modalSectionArray.length; i++) {
        dataItem = modalSectionArray[i].getAttribute('data-modal-section');

        if (dataItem == activeItem) {
          modalSectionArray[i].classList.add('modal-menu__content--active');
        } else {
          modalSectionArray[i].classList.remove('modal-menu__content--active');
        }
      }
    }
  });
  $('[data-fancybox="modal"]').fancybox({
    arrows: false
  });
  $('[data-fancybox="swiper-gallery"]').fancybox({});
  $('[data-fancybox="filter-modal"]').fancybox({
    slideClass: "filter-fancybox",
    touch: false
  });
  $('[data-fancybox="lk-menu-modal"]').fancybox({
    slideClass: "lk-menu-fancybox",
    touch: false
  });
  $('[data-fancybox="service-modal"]').fancybox({
    onActivate: function onActivate(instance, current) {
      console.info(current.opts.$orig);
    }
  });
  $('[data-fancybox="gallery"]').fancybox();
  var myDropzone = new dropzone__WEBPACK_IMPORTED_MODULE_0___default.a(".dropfile", {
    url: pathToScript
  });
  dropzone__WEBPACK_IMPORTED_MODULE_0___default.a.clickable = true;

  (function initEggs() {
    function runOnKeys(func) {
      for (var _len = arguments.length, codes = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        codes[_key - 1] = arguments[_key];
      }

      var pressed = new Set();
      document.addEventListener('keydown', function (event) {
        pressed.add(event.code);

        var _iterator = _createForOfIteratorHelper(codes),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var code = _step.value;

            if (!pressed.has(code)) {
              return;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        pressed.clear();
        func();
      });
      document.addEventListener('keyup', function (event) {
        pressed["delete"](event.code);
      });
    }

    runOnKeys(function () {
      return openHideModal();
    }, "KeyQ", "KeyW", "Enter");
  })();

  function openHideModal() {
    $.fancybox.open({
      src: '#modal-accent',
      opts: {
        afterShow: function afterShow(instance, current) {
          console.info('done!');
        }
      }
    });
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/blocks/modules/product/product.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/product/product.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

(function () {
  var columnsGrid = document.querySelectorAll('.grid__column--editable');
  var columnsService = document.querySelectorAll('.service__column--editable');
  var cachedWidth = $(window).width();
  $(window).resize(function () {
    var newWidth = $(window).width();

    if (newWidth !== cachedWidth) {
      //DO RESIZE HERE
      document.location.reload();
      cachedWidth = newWidth;
    }
  });
  window.addEventListener('load', toggle);

  function toggle() {
    if (document.body.clientWidth > 1200) {
      initSlider();
    } else if (document.body.clientWidth < 1200) {
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
      initSlider();
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

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
        loop: false,
        loopAdditionalSlides: 0,
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
};

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
})();

(function partnersSlider() {
  var caseSlider = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.partners__slider-container', {
    slidesPerView: 2,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    breakpoints: {
      480: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 30
      },
      980: {
        slidesPerView: 6,
        spaceBetween: 30
      },
      1200: {
        slidesPerView: 8,
        spaceBetween: 30
      }
    } // autoHeight: true,
    // pagination: {
    // 	el: '.case__header',
    // 	clickable: true,
    // 	bulletActiveClass: 'case__title--active',
    // 	bulletClass: 'case__title',
    // },

  });
})();

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_$) {/* harmony import */ var jquery_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery.cookie */ "./node_modules/jquery.cookie/jquery.cookie.js");
/* harmony import */ var jquery_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery_cookie__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ "./src/js/import/ui.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_modal_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/modal/modal */ "./src/blocks/modules/modal/modal.js");
/* harmony import */ var _modules_product_product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/product/product */ "./src/blocks/modules/product/product.js");
/* harmony import */ var _modules_product_product__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_product_product__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules_slider_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/slider/slider */ "./src/blocks/modules/slider/slider.js");
/* harmony import */ var _modules_map_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %modules%/map/map */ "./src/blocks/modules/map/map.js");
/* harmony import */ var _modules_filter_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! %modules%/filter/filter */ "./src/blocks/modules/filter/filter.js");
/* harmony import */ var _modules_filter_filter__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_modules_filter_filter__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _modules_mmenu_mmenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! %modules%/mmenu/mmenu */ "./src/blocks/modules/mmenu/mmenu.js");
/* harmony import */ var _modules_lk_auth_lk_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! %modules%/lk-auth/lk-auth */ "./src/blocks/modules/lk-auth/lk-auth.js");
/* harmony import */ var _modules_lk_auth_lk_auth__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_modules_lk_auth_lk_auth__WEBPACK_IMPORTED_MODULE_9__);
var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

window.JQ = $;

console.log(jquery_cookie__WEBPACK_IMPORTED_MODULE_0___default.a);
__webpack_provided_window_dot_$ = $;
window.cookie = jquery_cookie__WEBPACK_IMPORTED_MODULE_0___default.a;
console.log($.cookie);

 // import "%modules%/footer/footer";


 // Врап/анврап






/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

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
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nouislider */ "./node_modules/nouislider/distribute/nouislider.js");
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nouislider__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var wnumb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wnumb */ "./node_modules/wnumb/wNumb.js");
/* harmony import */ var wnumb__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(wnumb__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var air_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! air-datepicker */ "./node_modules/air-datepicker/src/js/air-datepicker.js");
/* harmony import */ var air_datepicker__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(air_datepicker__WEBPACK_IMPORTED_MODULE_3__);





(function () {
  (function initCounters() {
    var counter = document.querySelectorAll('.counter');

    if (counter) {
      var _loop = function _loop(i) {
        var btnPrev = counter[i].querySelector('.counter__btn--minus');
        var btnNext = counter[i].querySelector('.counter__btn--plus');
        var input = counter[i].querySelector('.counter__input input');
        var maxValue = counter[i].querySelector('.counter__input input').max || +Infinity;
        btnPrev.addEventListener('click', function (e) {
          e.preventDefault();

          if (input.value > 1) {
            input.value = +input.value - 1;
          }
        });
        btnNext.addEventListener('click', function (e) {
          e.preventDefault();

          if (input.value < +maxValue) {
            input.value = +input.value + 1;
          }
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

  (function initLkDropdown() {
    var elements = document.querySelectorAll('.lk-dropdown');

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
          containerOuter: 'lk-dropdown__dropdown',
          containerInner: 'lk-dropdown__inner',
          input: 'lk-dropdown__input',
          inputCloned: 'lk-dropdown__input--cloned',
          list: 'lk-dropdown__list',
          listItems: 'lk-dropdown__list--multiple',
          listSingle: 'lk-dropdown__list--single',
          listDropdown: 'lk-dropdown__list--dropdown',
          item: 'lk-dropdown__item',
          itemSelectable: 'lk-dropdown__item--selectable',
          itemDisabled: 'lk-dropdown__item--disabled',
          itemChoice: 'lk-dropdown__item--choice',
          placeholder: 'lk-dropdown__placeholder',
          group: 'lk-dropdown__group',
          groupHeading: 'lk-dropdown__heading',
          button: 'lk-dropdown__button',
          activeState: 'lk-dropdown__list--is-active',
          focusState: 'lk-dropdown__dropdown--is-focused',
          openState: 'lk-dropdown__dropdown--is-open',
          disabledState: 'lk-dropdown__dropdown--is-disabled',
          highlightedState: 'lk-dropdown__item--is-highlighted',
          selectedState: 'lk-dropdown__item--is-selected',
          flippedState: 'lk-dropdown__dropdown--is-flipped',
          loadingState: 'lk-dropdown__dropdown--is-loading',
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

  (function toggleFilterDrop() {
    var drops = document.querySelectorAll('.filter-subdrop__header');

    if (drops) {
      for (var i = 0; i < drops.length; i++) {
        drops[i].addEventListener('click', toggle);
      }
    }

    function toggle(event) {
      if (event.target.tagName !== 'BUTTON') {
        this.parentNode.classList.toggle('filter-subdrop--opened');
      }
    }
  })();

  (function initRangeSlider() {
    var slider = document.querySelectorAll('.range-slider');

    if (slider) {
      var _loop2 = function _loop2(i) {
        nouislider__WEBPACK_IMPORTED_MODULE_1___default.a.create(slider[i], {
          start: [minPrice, maxPrice],
          connect: true,
          step: 1,
          range: {
            'min': minPrice,
            'max': maxPrice
          },
          format: wnumb__WEBPACK_IMPORTED_MODULE_2___default()({
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

  (function toggleInputEyes() {
    var all = document.querySelectorAll('.lk-field--password');

    var _loop3 = function _loop3(i) {
      var button = all[i].querySelector('.lk-field__toggle');
      var input = all[i].querySelector('.lk-field__input');
      button.addEventListener('click', function (e) {
        e.preventDefault();

        if (this.classList.contains('lk-field__toggle--visible')) {
          input.type = 'password';
          this.classList.remove('lk-field__toggle--visible');
          this.classList.add('lk-field__toggle--unvisible');
        } else {
          this.classList.add('lk-field__toggle--visible');
          this.classList.remove('lk-field__toggle--unvisible');
          input.type = 'text';
        }
      });
    };

    for (var i = 0; i < all.length; i++) {
      _loop3(i);
    }
  })();

  (function initDatePicker() {
    $('.lk-filter__datepicker').datepicker({
      range: true
    });
  })();

  (function initSearch() {
    var btn = document.querySelector('.footer-toolbar__link--search');

    if (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        toSearch();
      });
    }

    function toSearch(e) {
      var input = document.querySelector('.head-mobile__input');

      if (input) {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
        setTimeout(function () {
          input.focus();
        }, 1000);
      }
    }
  })();

  (function selectAllCart() {
    var btn = document.querySelectorAll('.select-all');

    if (btn) {
      var _loop4 = function _loop4(i) {
        var table = void 0;
        var flag = void 0;
        var itemsArray = void 0;
        table = btn[i].parentNode.parentNode.parentNode;
        itemsArray = table.querySelectorAll('.lk-checkbox__input');
        flag = table.querySelector('.lk-table-toolbar--head .lk-table-toolbar__col--checkbox .lk-checkbox__input');
        btn[i].addEventListener('click', function () {
          toggleFlag();
          selectAll(flag, itemsArray);
        });
        flag.addEventListener('change', function () {
          selectAll(flag, itemsArray);
        });

        function toggleFlag() {
          if (flag.checked == true) {
            flag.checked = false;
          } else {
            flag.checked = true;
          }
        }

        function selectAll(flag, itemsArray) {
          if (flag.checked == true) {
            for (var _i = 0; _i < itemsArray.length; _i++) {
              itemsArray[_i].checked = true;
            }
          } else {
            for (var _i2 = 0; _i2 < itemsArray.length; _i2++) {
              itemsArray[_i2].checked = false;
            }
          }
        }
      };

      for (var i = 0; i < btn.length; i++) {
        _loop4(i);
      }
    }
  })();
})();
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