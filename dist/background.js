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
eval("\nconst blackList = ['*://www.youtube.com/*'];\nconst redirectUrl = chrome.runtime.getURL('/blockPage.html');\nconst urlQuery = {\n    url: blackList,\n};\nconst redirectToBlockPage = () => {\n    return {\n        redirectUrl,\n    };\n};\nconst startDeepZone = () => {\n    chrome.tabs.query(urlQuery, tabs => {\n        tabs.forEach((tab) => {\n            const id = tab.id;\n            if (!tab || !id) {\n                return;\n            }\n            chrome.tabs.remove(id);\n        });\n    });\n    chrome.webRequest.onBeforeRequest.addListener(redirectToBlockPage, { urls: blackList, types: ['main_frame'] }, ['blocking']);\n};\nchrome.runtime.onMessage.addListener(request => {\n    if (!request) {\n        return;\n    }\n    switch (request.message) {\n        case 'start':\n            startDeepZone();\n            break;\n        case 'stop':\n            chrome.webRequest.onBeforeRequest.removeListener(redirectToBlockPage);\n            break;\n        default:\n            break;\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvYmFja2dyb3VuZC9pbmRleC50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvdHMvYmFja2dyb3VuZC9pbmRleC50cz85YWZkIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGJsYWNrTGlzdCA9IFsnKjovL3d3dy55b3V0dWJlLmNvbS8qJ11cbmNvbnN0IHJlZGlyZWN0VXJsID0gY2hyb21lLnJ1bnRpbWUuZ2V0VVJMKCcvYmxvY2tQYWdlLmh0bWwnKVxuXG5jb25zdCB1cmxRdWVyeSA9IHtcbiAgdXJsOiBibGFja0xpc3QsXG59XG5cbmNvbnN0IHJlZGlyZWN0VG9CbG9ja1BhZ2UgPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgcmVkaXJlY3RVcmwsXG4gIH1cbn1cblxuY29uc3Qgc3RhcnREZWVwWm9uZSA9ICgpID0+IHtcbiAgY2hyb21lLnRhYnMucXVlcnkodXJsUXVlcnksIHRhYnMgPT4ge1xuICAgIHRhYnMuZm9yRWFjaCgodGFiOiBjaHJvbWUudGFicy5UYWIpID0+IHtcbiAgICAgIGNvbnN0IGlkID0gdGFiLmlkXG5cbiAgICAgIGlmICghdGFiIHx8ICFpZCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGNocm9tZS50YWJzLnJlbW92ZShpZClcbiAgICB9KVxuICB9KVxuXG4gIGNocm9tZS53ZWJSZXF1ZXN0Lm9uQmVmb3JlUmVxdWVzdC5hZGRMaXN0ZW5lcihcbiAgICByZWRpcmVjdFRvQmxvY2tQYWdlLFxuICAgIHsgdXJsczogYmxhY2tMaXN0LCB0eXBlczogWydtYWluX2ZyYW1lJ10gfSxcbiAgICBbJ2Jsb2NraW5nJ11cbiAgKVxufVxuXG5jaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIocmVxdWVzdCA9PiB7XG4gIGlmICghcmVxdWVzdCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgc3dpdGNoIChyZXF1ZXN0Lm1lc3NhZ2UpIHtcbiAgICBjYXNlICdzdGFydCc6XG4gICAgICBzdGFydERlZXBab25lKClcbiAgICAgIGJyZWFrXG5cbiAgICBjYXNlICdzdG9wJzpcbiAgICAgIGNocm9tZS53ZWJSZXF1ZXN0Lm9uQmVmb3JlUmVxdWVzdC5yZW1vdmVMaXN0ZW5lcihyZWRpcmVjdFRvQmxvY2tQYWdlKVxuICAgICAgYnJlYWtcblxuICAgIGRlZmF1bHQ6XG4gICAgICBicmVha1xuICB9XG59KVxuIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ts/background/index.ts\n");

/***/ })

/******/ });