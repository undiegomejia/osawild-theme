/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_osawild__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _components_osawild__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_osawild__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ow_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _components_ow_slider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_ow_slider__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),
/* 2 */
/***/ (function(module, exports) {

(function ($) {
  'use strict';

  $(document).ready(function () {
    /* Redes Footer **/
    $('.address-block').append('<li><span class="icon-facebook"></span><a target="_blank" href="https://www.facebook.com/osawildtravel/">Facebook</a></li><li><span class="icon-instagram"></span><a target="_blank" href="https://www.instagram.com/osawild/">Instagram</a></li><li><span class="icon-google-plus"></span><a target="_blank" href="https://plus.google.com/+OsaWildPuertoJim%C3%A9nez">Google Plus</a></li><li><span class="icon-youtube"></span><a target="_blank" href="https://www.youtube.com/channel/UCEH3iAcvR2yVO3zCEcGHV0A">YouTube</a></li>');
    /* Lista Iconos Home */

    $('.feature-block .holder ul li').addClass(function (index) {
      return 'item-' + index;
    }); // if (window.location.href.indexOf('book-now') > -1) {
    //   alert("booking");
    // }
  });
})(jQuery);

function init() {
  var vidDefer = document.getElementsByTagName('iframe');

  for (var i = 0; i < vidDefer.length; i++) {
    if (vidDefer[i].getAttribute('data-src')) {
      vidDefer[i].setAttribute('src', vidDefer[i].getAttribute('data-src'));
    }
  }
}

window.onload = init;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var slides = document.getElementsByClassName("ow-slide");
var siguiente = document.querySelector('.siguiente');
var atras = document.querySelector('.atras');
var index = 1;

if (document.body.classList.contains('home')) {
  var slider = function slider(p) {
    var slidesArray = _toConsumableArray(slides);

    console.log(slidesArray);
    slidesArray.forEach(function (e) {
      e.style.display = "none";
    });

    if (p > slides.length) {
      index = 1;
    }

    if (p < 1) {
      index = slides.length;
    }

    return slides[index - 1].style.display = "block";
  };

  atras.addEventListener('click', function () {
    slider(index += 1);
  });
  siguiente.addEventListener('click', function () {
    slider(index -= 1);
  });
  slider(index);
}

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9idW5kbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jb21wb25lbnRzL29zYXdpbGQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jb21wb25lbnRzL293LXNsaWRlci5qcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImFwcGVuZCIsImFkZENsYXNzIiwiaW5kZXgiLCJqUXVlcnkiLCJpbml0IiwidmlkRGVmZXIiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImkiLCJsZW5ndGgiLCJnZXRBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJ3aW5kb3ciLCJvbmxvYWQiLCJzbGlkZXMiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwic2lndWllbnRlIiwicXVlcnlTZWxlY3RvciIsImF0cmFzIiwiYm9keSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwic2xpZGVyIiwicCIsInNsaWRlc0FycmF5IiwiY29uc29sZSIsImxvZyIsImZvckVhY2giLCJlIiwic3R5bGUiLCJkaXNwbGF5IiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7OztBQ0FBLENBQUMsVUFBVUEsQ0FBVixFQUFhO0FBQ1o7O0FBQ0FBLEdBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEtBQVosQ0FBa0IsWUFBWTtBQUM1QjtBQUNBRixLQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQkcsTUFBcEIsQ0FDRSx1Z0JBREY7QUFJQTs7QUFDQUgsS0FBQyxDQUFDLDhCQUFELENBQUQsQ0FBa0NJLFFBQWxDLENBQTJDLFVBQVVDLEtBQVYsRUFBaUI7QUFDMUQsYUFBTyxVQUFVQSxLQUFqQjtBQUNELEtBRkQsRUFQNEIsQ0FXNUI7QUFDQTtBQUNBO0FBQ0QsR0FkRDtBQWVELENBakJELEVBaUJHQyxNQWpCSDs7QUFtQkEsU0FBU0MsSUFBVCxHQUFnQjtBQUNkLE1BQUlDLFFBQVEsR0FBR1AsUUFBUSxDQUFDUSxvQkFBVCxDQUE4QixRQUE5QixDQUFmOztBQUNBLE9BQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0YsUUFBUSxDQUFDRyxNQUE3QixFQUFxQ0QsQ0FBQyxFQUF0QyxFQUEwQztBQUN4QyxRQUFJRixRQUFRLENBQUNFLENBQUQsQ0FBUixDQUFZRSxZQUFaLENBQXlCLFVBQXpCLENBQUosRUFBMEM7QUFDeENKLGNBQVEsQ0FBQ0UsQ0FBRCxDQUFSLENBQVlHLFlBQVosQ0FBeUIsS0FBekIsRUFBZ0NMLFFBQVEsQ0FBQ0UsQ0FBRCxDQUFSLENBQVlFLFlBQVosQ0FBeUIsVUFBekIsQ0FBaEM7QUFDRDtBQUNGO0FBQ0Y7O0FBQ0RFLE1BQU0sQ0FBQ0MsTUFBUCxHQUFnQlIsSUFBaEIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBLElBQU1TLE1BQU0sR0FBR2YsUUFBUSxDQUFDZ0Isc0JBQVQsQ0FBZ0MsVUFBaEMsQ0FBZjtBQUNBLElBQU1DLFNBQVMsR0FBR2pCLFFBQVEsQ0FBQ2tCLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBbEI7QUFDQSxJQUFNQyxLQUFLLEdBQUduQixRQUFRLENBQUNrQixhQUFULENBQXVCLFFBQXZCLENBQWQ7QUFFQSxJQUFJZCxLQUFLLEdBQUcsQ0FBWjs7QUFHQSxJQUFHSixRQUFRLENBQUNvQixJQUFULENBQWNDLFNBQWQsQ0FBd0JDLFFBQXhCLENBQWlDLE1BQWpDLENBQUgsRUFBNEM7QUFBQSxNQUNqQ0MsTUFEaUMsR0FDMUMsU0FBU0EsTUFBVCxDQUFnQkMsQ0FBaEIsRUFBbUI7QUFFakIsUUFBTUMsV0FBVyxzQkFBT1YsTUFBUCxDQUFqQjs7QUFFQVcsV0FBTyxDQUFDQyxHQUFSLENBQVlGLFdBQVo7QUFHTUEsZUFBVyxDQUFDRyxPQUFaLENBQW9CLFVBQUFDLENBQUMsRUFBRTtBQUN2QkEsT0FBQyxDQUFDQyxLQUFGLENBQVFDLE9BQVIsR0FBZ0IsTUFBaEI7QUFDRCxLQUZDOztBQUtOLFFBQUlQLENBQUMsR0FBR1QsTUFBTSxDQUFDTCxNQUFmLEVBQXVCO0FBQ3JCTixXQUFLLEdBQUcsQ0FBUjtBQUNEOztBQUNELFFBQUlvQixDQUFDLEdBQUcsQ0FBUixFQUFXO0FBQ1RwQixXQUFLLEdBQUdXLE1BQU0sQ0FBQ0wsTUFBZjtBQUNEOztBQUlBLFdBQ0dLLE1BQU0sQ0FBQ1gsS0FBSyxHQUFHLENBQVQsQ0FBTixDQUFrQjBCLEtBQWxCLENBQXdCQyxPQUF4QixHQUFrQyxPQURyQztBQUdGLEdBekJ5Qzs7QUE0QjFDWixPQUFLLENBQUNhLGdCQUFOLENBQXVCLE9BQXZCLEVBQWdDLFlBQVU7QUFDdENULFVBQU0sQ0FBRW5CLEtBQUssSUFBSSxDQUFYLENBQU47QUFDSCxHQUZEO0FBSUFhLFdBQVMsQ0FBQ2UsZ0JBQVYsQ0FBMkIsT0FBM0IsRUFBb0MsWUFBVTtBQUMxQ1QsVUFBTSxDQUFFbkIsS0FBSyxJQUFJLENBQVgsQ0FBTjtBQUNILEdBRkQ7QUFJQW1CLFFBQU0sQ0FBQ25CLEtBQUQsQ0FBTjtBQUNELEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0ICcuL2NvbXBvbmVudHMvb3Nhd2lsZCc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL293LXNsaWRlcic7XHJcbiIsIihmdW5jdGlvbiAoJCkge1xyXG4gICd1c2Ugc3RyaWN0JztcclxuICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAvKiBSZWRlcyBGb290ZXIgKiovXHJcbiAgICAkKCcuYWRkcmVzcy1ibG9jaycpLmFwcGVuZChcclxuICAgICAgJzxsaT48c3BhbiBjbGFzcz1cImljb24tZmFjZWJvb2tcIj48L3NwYW4+PGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9vc2F3aWxkdHJhdmVsL1wiPkZhY2Vib29rPC9hPjwvbGk+PGxpPjxzcGFuIGNsYXNzPVwiaWNvbi1pbnN0YWdyYW1cIj48L3NwYW4+PGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vb3Nhd2lsZC9cIj5JbnN0YWdyYW08L2E+PC9saT48bGk+PHNwYW4gY2xhc3M9XCJpY29uLWdvb2dsZS1wbHVzXCI+PC9zcGFuPjxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL3BsdXMuZ29vZ2xlLmNvbS8rT3NhV2lsZFB1ZXJ0b0ppbSVDMyVBOW5lelwiPkdvb2dsZSBQbHVzPC9hPjwvbGk+PGxpPjxzcGFuIGNsYXNzPVwiaWNvbi15b3V0dWJlXCI+PC9zcGFuPjxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9jaGFubmVsL1VDRUgzaUFjdlIyeVZPM3pDRWNHSFYwQVwiPllvdVR1YmU8L2E+PC9saT4nXHJcbiAgICApO1xyXG5cclxuICAgIC8qIExpc3RhIEljb25vcyBIb21lICovXHJcbiAgICAkKCcuZmVhdHVyZS1ibG9jayAuaG9sZGVyIHVsIGxpJykuYWRkQ2xhc3MoZnVuY3Rpb24gKGluZGV4KSB7XHJcbiAgICAgIHJldHVybiAnaXRlbS0nICsgaW5kZXg7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYuaW5kZXhPZignYm9vay1ub3cnKSA+IC0xKSB7XHJcbiAgICAvLyAgIGFsZXJ0KFwiYm9va2luZ1wiKTtcclxuICAgIC8vIH1cclxuICB9KTtcclxufSkoalF1ZXJ5KTtcclxuXHJcbmZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgdmFyIHZpZERlZmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lmcmFtZScpO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdmlkRGVmZXIubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmICh2aWREZWZlcltpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJykpIHtcclxuICAgICAgdmlkRGVmZXJbaV0uc2V0QXR0cmlidXRlKCdzcmMnLCB2aWREZWZlcltpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJykpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG53aW5kb3cub25sb2FkID0gaW5pdDtcclxuIiwiXHJcbmNvbnN0IHNsaWRlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJvdy1zbGlkZVwiKTtcclxuY29uc3Qgc2lndWllbnRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZ3VpZW50ZScpO1xyXG5jb25zdCBhdHJhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdHJhcycpO1xyXG5cclxubGV0IGluZGV4ID0gMTtcclxuXHJcblxyXG5pZihkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygnaG9tZScpKXtcclxuICBmdW5jdGlvbiBzbGlkZXIocCkge1xyXG5cclxuICAgIGNvbnN0IHNsaWRlc0FycmF5ID0gWy4uLnNsaWRlc11cclxuXHJcbiAgICBjb25zb2xlLmxvZyhzbGlkZXNBcnJheSlcclxuXHJcbiAgICBcclxuICAgICAgICAgIHNsaWRlc0FycmF5LmZvckVhY2goZT0+e1xyXG4gICAgICAgICAgZS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiXHJcbiAgICAgICAgfSlcclxuICBcclxuICBcclxuICAgIGlmIChwID4gc2xpZGVzLmxlbmd0aCkge1xyXG4gICAgICBpbmRleCA9IDE7XHJcbiAgICB9XHJcbiAgICBpZiAocCA8IDEpIHtcclxuICAgICAgaW5kZXggPSBzbGlkZXMubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgXHJcbiAgICAgcmV0dXJuIChcclxuICAgICAgIChzbGlkZXNbaW5kZXggLSAxXS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiKVxyXG4gICAgICk7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIGF0cmFzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgc2xpZGVyKChpbmRleCArPSAxKSk7XHJcbiAgfSlcclxuICBcclxuICBzaWd1aWVudGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICBzbGlkZXIoKGluZGV4IC09IDEpKTtcclxuICB9KVxyXG5cclxuICBzbGlkZXIoaW5kZXgpO1xyXG59XHJcblxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=