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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ts/background/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ts/background/index.ts":
/*!************************************!*\
  !*** ./src/ts/background/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nconst blackList = [/.*youtube\\.com.*/g, /.*reddit\\/.com*/g];\nchrome.tabs.query({}, tabs => {\n    tabs.forEach((tab) => {\n        const url = tab.url;\n        if (!tab || !url) {\n            return;\n        }\n        if (blackList.some(element => url.match(element))) {\n            if (tab.id) {\n                chrome.tabs.remove(tab.id);\n            }\n        }\n    });\n});\nchrome.webRequest.onBeforeRequest.addListener(() => {\n    return {\n        redirectUrl: \"https://www.google.com\"\n    };\n}, { urls: [\"*://www.youtube.com/*\"] }, [\"blocking\"]);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvYmFja2dyb3VuZC9pbmRleC50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvdHMvYmFja2dyb3VuZC9pbmRleC50cz85YWZkIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGJsYWNrTGlzdCA9IFsvLip5b3V0dWJlXFwuY29tLiovZywgLy4qcmVkZGl0XFwvLmNvbSovZ107XG5cbmNocm9tZS50YWJzLnF1ZXJ5KHt9LCB0YWJzID0+IHtcbiAgdGFicy5mb3JFYWNoKCh0YWI6IGNocm9tZS50YWJzLlRhYikgPT4ge1xuICAgIGNvbnN0IHVybCA9IHRhYi51cmw7XG5cbiAgICBpZiAoIXRhYiB8fCAhdXJsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGJsYWNrTGlzdC5zb21lKGVsZW1lbnQgPT4gdXJsLm1hdGNoKGVsZW1lbnQpKSkge1xuICAgICAgaWYgKHRhYi5pZCkge1xuICAgICAgICBjaHJvbWUudGFicy5yZW1vdmUodGFiLmlkKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufSk7XG5cbmNocm9tZS53ZWJSZXF1ZXN0Lm9uQmVmb3JlUmVxdWVzdC5hZGRMaXN0ZW5lcihcbiAgKCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICByZWRpcmVjdFVybDogXCJodHRwczovL3d3dy5nb29nbGUuY29tXCJcbiAgICB9O1xuICB9LFxuICB7IHVybHM6IFtcIio6Ly93d3cueW91dHViZS5jb20vKlwiXSB9LFxuICBbXCJibG9ja2luZ1wiXVxuKTtcbiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ts/background/index.ts\n");

/***/ })

/******/ });