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

var slides = document.getElementsByClassName("ow-slide");
var siguiente = document.querySelector('.siguiente');
var atras = document.querySelector('.atras');
var index = 1;

function slider(p) {
  var i;

  if (p > slides.length) {
    index = 1;
  }

  if (p < 1) {
    index = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  return slides[index - 1].style.display = "block";
}

atras.addEventListener('click', function () {
  slider(index += 1);
});
siguiente.addEventListener('click', function () {
  slider(index -= 1);
});
slider(index);

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9idW5kbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jb21wb25lbnRzL29zYXdpbGQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jb21wb25lbnRzL293LXNsaWRlci5qcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImFwcGVuZCIsImFkZENsYXNzIiwiaW5kZXgiLCJqUXVlcnkiLCJpbml0IiwidmlkRGVmZXIiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImkiLCJsZW5ndGgiLCJnZXRBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJ3aW5kb3ciLCJvbmxvYWQiLCJzbGlkZXMiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwic2lndWllbnRlIiwicXVlcnlTZWxlY3RvciIsImF0cmFzIiwic2xpZGVyIiwicCIsInN0eWxlIiwiZGlzcGxheSIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7QUNBQSxDQUFDLFVBQVVBLENBQVYsRUFBYTtBQUNaOztBQUNBQSxHQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxLQUFaLENBQWtCLFlBQVk7QUFDNUI7QUFDQUYsS0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0JHLE1BQXBCLENBQ0UsdWdCQURGO0FBSUE7O0FBQ0FILEtBQUMsQ0FBQyw4QkFBRCxDQUFELENBQWtDSSxRQUFsQyxDQUEyQyxVQUFVQyxLQUFWLEVBQWlCO0FBQzFELGFBQU8sVUFBVUEsS0FBakI7QUFDRCxLQUZELEVBUDRCLENBVzVCO0FBQ0E7QUFDQTtBQUNELEdBZEQ7QUFlRCxDQWpCRCxFQWlCR0MsTUFqQkg7O0FBbUJBLFNBQVNDLElBQVQsR0FBZ0I7QUFDZCxNQUFJQyxRQUFRLEdBQUdQLFFBQVEsQ0FBQ1Esb0JBQVQsQ0FBOEIsUUFBOUIsQ0FBZjs7QUFDQSxPQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdGLFFBQVEsQ0FBQ0csTUFBN0IsRUFBcUNELENBQUMsRUFBdEMsRUFBMEM7QUFDeEMsUUFBSUYsUUFBUSxDQUFDRSxDQUFELENBQVIsQ0FBWUUsWUFBWixDQUF5QixVQUF6QixDQUFKLEVBQTBDO0FBQ3hDSixjQUFRLENBQUNFLENBQUQsQ0FBUixDQUFZRyxZQUFaLENBQXlCLEtBQXpCLEVBQWdDTCxRQUFRLENBQUNFLENBQUQsQ0FBUixDQUFZRSxZQUFaLENBQXlCLFVBQXpCLENBQWhDO0FBQ0Q7QUFDRjtBQUNGOztBQUNERSxNQUFNLENBQUNDLE1BQVAsR0FBZ0JSLElBQWhCLEM7Ozs7OztBQzNCQSxJQUFNUyxNQUFNLEdBQUdmLFFBQVEsQ0FBQ2dCLHNCQUFULENBQWdDLFVBQWhDLENBQWY7QUFDQSxJQUFNQyxTQUFTLEdBQUdqQixRQUFRLENBQUNrQixhQUFULENBQXVCLFlBQXZCLENBQWxCO0FBQ0EsSUFBTUMsS0FBSyxHQUFHbkIsUUFBUSxDQUFDa0IsYUFBVCxDQUF1QixRQUF2QixDQUFkO0FBRUEsSUFBSWQsS0FBSyxHQUFHLENBQVo7O0FBRUEsU0FBU2dCLE1BQVQsQ0FBZ0JDLENBQWhCLEVBQW1CO0FBQ2pCLE1BQUlaLENBQUo7O0FBRUEsTUFBSVksQ0FBQyxHQUFHTixNQUFNLENBQUNMLE1BQWYsRUFBdUI7QUFDckJOLFNBQUssR0FBRyxDQUFSO0FBQ0Q7O0FBQ0QsTUFBSWlCLENBQUMsR0FBRyxDQUFSLEVBQVc7QUFDVGpCLFNBQUssR0FBR1csTUFBTSxDQUFDTCxNQUFmO0FBQ0Q7O0FBRUQsT0FBS0QsQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHTSxNQUFNLENBQUNMLE1BQXZCLEVBQStCRCxDQUFDLEVBQWhDLEVBQW9DO0FBQ2xDTSxVQUFNLENBQUNOLENBQUQsQ0FBTixDQUFVYSxLQUFWLENBQWdCQyxPQUFoQixHQUEwQixNQUExQjtBQUNEOztBQUVELFNBQ0dSLE1BQU0sQ0FBQ1gsS0FBSyxHQUFHLENBQVQsQ0FBTixDQUFrQmtCLEtBQWxCLENBQXdCQyxPQUF4QixHQUFrQyxPQURyQztBQUdEOztBQUdESixLQUFLLENBQUNLLGdCQUFOLENBQXVCLE9BQXZCLEVBQWdDLFlBQVU7QUFDdENKLFFBQU0sQ0FBRWhCLEtBQUssSUFBSSxDQUFYLENBQU47QUFDSCxDQUZEO0FBSUFhLFNBQVMsQ0FBQ08sZ0JBQVYsQ0FBMkIsT0FBM0IsRUFBb0MsWUFBVTtBQUMxQ0osUUFBTSxDQUFFaEIsS0FBSyxJQUFJLENBQVgsQ0FBTjtBQUNILENBRkQ7QUFJQWdCLE1BQU0sQ0FBQ2hCLEtBQUQsQ0FBTixDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCAnLi9jb21wb25lbnRzL29zYXdpbGQnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9vdy1zbGlkZXInO1xyXG4iLCIoZnVuY3Rpb24gKCQpIHtcclxuICAndXNlIHN0cmljdCc7XHJcbiAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgLyogUmVkZXMgRm9vdGVyICoqL1xyXG4gICAgJCgnLmFkZHJlc3MtYmxvY2snKS5hcHBlbmQoXHJcbiAgICAgICc8bGk+PHNwYW4gY2xhc3M9XCJpY29uLWZhY2Vib29rXCI+PC9zcGFuPjxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vb3Nhd2lsZHRyYXZlbC9cIj5GYWNlYm9vazwvYT48L2xpPjxsaT48c3BhbiBjbGFzcz1cImljb24taW5zdGFncmFtXCI+PC9zcGFuPjxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL29zYXdpbGQvXCI+SW5zdGFncmFtPC9hPjwvbGk+PGxpPjxzcGFuIGNsYXNzPVwiaWNvbi1nb29nbGUtcGx1c1wiPjwvc3Bhbj48YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9wbHVzLmdvb2dsZS5jb20vK09zYVdpbGRQdWVydG9KaW0lQzMlQTluZXpcIj5Hb29nbGUgUGx1czwvYT48L2xpPjxsaT48c3BhbiBjbGFzcz1cImljb24teW91dHViZVwiPjwvc3Bhbj48YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vY2hhbm5lbC9VQ0VIM2lBY3ZSMnlWTzN6Q0VjR0hWMEFcIj5Zb3VUdWJlPC9hPjwvbGk+J1xyXG4gICAgKTtcclxuXHJcbiAgICAvKiBMaXN0YSBJY29ub3MgSG9tZSAqL1xyXG4gICAgJCgnLmZlYXR1cmUtYmxvY2sgLmhvbGRlciB1bCBsaScpLmFkZENsYXNzKGZ1bmN0aW9uIChpbmRleCkge1xyXG4gICAgICByZXR1cm4gJ2l0ZW0tJyArIGluZGV4O1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluZGV4T2YoJ2Jvb2stbm93JykgPiAtMSkge1xyXG4gICAgLy8gICBhbGVydChcImJvb2tpbmdcIik7XHJcbiAgICAvLyB9XHJcbiAgfSk7XHJcbn0pKGpRdWVyeSk7XHJcblxyXG5mdW5jdGlvbiBpbml0KCkge1xyXG4gIHZhciB2aWREZWZlciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpZnJhbWUnKTtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IHZpZERlZmVyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAodmlkRGVmZXJbaV0uZ2V0QXR0cmlidXRlKCdkYXRhLXNyYycpKSB7XHJcbiAgICAgIHZpZERlZmVyW2ldLnNldEF0dHJpYnV0ZSgnc3JjJywgdmlkRGVmZXJbaV0uZ2V0QXR0cmlidXRlKCdkYXRhLXNyYycpKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxud2luZG93Lm9ubG9hZCA9IGluaXQ7XHJcbiIsImNvbnN0IHNsaWRlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJvdy1zbGlkZVwiKTtcclxuY29uc3Qgc2lndWllbnRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZ3VpZW50ZScpO1xyXG5jb25zdCBhdHJhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdHJhcycpO1xyXG5cclxubGV0IGluZGV4ID0gMTtcclxuXHJcbmZ1bmN0aW9uIHNsaWRlcihwKSB7XHJcbiAgbGV0IGk7XHJcblxyXG4gIGlmIChwID4gc2xpZGVzLmxlbmd0aCkge1xyXG4gICAgaW5kZXggPSAxO1xyXG4gIH1cclxuICBpZiAocCA8IDEpIHtcclxuICAgIGluZGV4ID0gc2xpZGVzLmxlbmd0aDtcclxuICB9XHJcblxyXG4gIGZvciAoaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpKyspIHtcclxuICAgIHNsaWRlc1tpXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgKHNsaWRlc1tpbmRleCAtIDFdLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCIpXHJcbiAgKTtcclxufVxyXG5cclxuXHJcbmF0cmFzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIHNsaWRlcigoaW5kZXggKz0gMSkpO1xyXG59KVxyXG5cclxuc2lndWllbnRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIHNsaWRlcigoaW5kZXggLT0gMSkpO1xyXG59KVxyXG5cclxuc2xpZGVyKGluZGV4KTtcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=