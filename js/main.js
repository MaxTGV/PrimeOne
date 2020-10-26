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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _responsive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);



window.addEventListener('DOMContentLoaded', () => {

    Object(_responsive__WEBPACK_IMPORTED_MODULE_0__["default"])();
    Object(_script__WEBPACK_IMPORTED_MODULE_1__["default"])();




});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//Адаптив
function burgerMenu() {

    window.addEventListener('resize', () => {
        

        const parentLang = document.querySelector('.header-top'),
            headerMenu = document.querySelector('.header-menu'),
            headerLang = document.querySelector('.header-top-lang'),
            headerBottomMenu = document.querySelector('.header-bottom-menu'),
            headerBottomMenuAll = document.querySelectorAll('.header-bottom-menu'),
            headerBottomColumns = document.querySelectorAll('.header-bottom__column');
            let width = window.innerWidth;

            if(width < 767) {
                if(!headerLang.classList.contains('done')) {
                    headerLang.classList.add('done');
                    headerMenu.append(headerLang);
                } 
            } else {
                if(headerLang.classList.contains('done')) {
                    headerLang.classList.remove('done');
                    parentLang.prepend(headerLang);
                }
            } 


            if(width < 767) {
                
                if(!headerBottomMenu.classList.contains('done')) {
                    headerBottomMenu.classList.add('done');
                    headerMenu.append(headerBottomMenu);
                }

            } else {
                headerBottomMenuAll.forEach(item => {
                if(item.classList.contains('header-bottom-menu--right')) {
                    item.classList.remove('done');
                        headerBottomColumns[2].prepend(item);
                }else {
                    item.classList.remove('done');
                        headerBottomColumns[0].prepend(item);
                }
            });    
        }
    });
}

/* harmony default export */ __webpack_exports__["default"] = (burgerMenu);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function showBurgerMenu() {
    const icon = document.querySelector('.header-menu__icon'),
          menu = document.querySelector('.header-menu');

    icon.addEventListener('click', (event) => {
        const target = event.target;

        if(target) {
            icon.classList.toggle('active');
            menu.classList.toggle('active');
        }

    });
}

/* harmony default export */ __webpack_exports__["default"] = (showBurgerMenu);

/***/ })
/******/ ]);