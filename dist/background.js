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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/ts/background/utils.ts\");\n\nconst { storage, webRequest, runtime } = chrome;\nconst redirectUrl = runtime.getURL('/blockPage.html');\nlet closedTabs = [];\nconst redirectToBlockPage = () => {\n    return {\n        redirectUrl,\n    };\n};\nconst startDeepZone = () => {\n    storage.sync.get(['blacklisted'], result => {\n        const urlBlacklist = result.blacklisted;\n        if (!urlBlacklist.length) {\n            return;\n        }\n        const formatedBlacklist = urlBlacklist.map((url) => `*://*.${url}/*`);\n        storage.local.set({ deepZoneActive: true });\n        Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"closeTabs\"])(formatedBlacklist, list => {\n            closedTabs = list;\n        });\n        webRequest.onBeforeRequest.addListener(redirectToBlockPage, { urls: formatedBlacklist, types: ['main_frame'] }, ['blocking']);\n    });\n};\nconst stopDeepZone = () => {\n    storage.local.set({ deepZoneActive: false });\n    webRequest.onBeforeRequest.removeListener(redirectToBlockPage);\n    Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"restoreTabs\"])(closedTabs);\n};\nruntime.onMessage.addListener(request => {\n    switch (request.message) {\n        case 'start':\n            startDeepZone();\n            break;\n        case 'stop':\n            stopDeepZone();\n            break;\n        default:\n            break;\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvYmFja2dyb3VuZC9pbmRleC50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvdHMvYmFja2dyb3VuZC9pbmRleC50cz85YWZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNsb3NlVGFicywgcmVzdG9yZVRhYnMgfSBmcm9tICcuL3V0aWxzJ1xuXG5jb25zdCB7IHN0b3JhZ2UsIHdlYlJlcXVlc3QsIHJ1bnRpbWUgfSA9IGNocm9tZVxuY29uc3QgcmVkaXJlY3RVcmwgPSBydW50aW1lLmdldFVSTCgnL2Jsb2NrUGFnZS5odG1sJylcbmxldCBjbG9zZWRUYWJzOiBzdHJpbmdbXSA9IFtdXG5cbmNvbnN0IHJlZGlyZWN0VG9CbG9ja1BhZ2UgPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgcmVkaXJlY3RVcmwsXG4gIH1cbn1cblxuY29uc3Qgc3RhcnREZWVwWm9uZSA9ICgpID0+IHtcbiAgc3RvcmFnZS5zeW5jLmdldChbJ2JsYWNrbGlzdGVkJ10sIHJlc3VsdCA9PiB7XG4gICAgY29uc3QgdXJsQmxhY2tsaXN0ID0gcmVzdWx0LmJsYWNrbGlzdGVkXG5cbiAgICBpZiAoIXVybEJsYWNrbGlzdC5sZW5ndGgpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGZvcm1hdGVkQmxhY2tsaXN0ID0gdXJsQmxhY2tsaXN0Lm1hcChcbiAgICAgICh1cmw6IHN0cmluZykgPT4gYCo6Ly8qLiR7dXJsfS8qYFxuICAgIClcblxuICAgIHN0b3JhZ2UubG9jYWwuc2V0KHsgZGVlcFpvbmVBY3RpdmU6IHRydWUgfSlcblxuICAgIGNsb3NlVGFicyhmb3JtYXRlZEJsYWNrbGlzdCwgbGlzdCA9PiB7XG4gICAgICBjbG9zZWRUYWJzID0gbGlzdFxuICAgIH0pXG5cbiAgICB3ZWJSZXF1ZXN0Lm9uQmVmb3JlUmVxdWVzdC5hZGRMaXN0ZW5lcihcbiAgICAgIHJlZGlyZWN0VG9CbG9ja1BhZ2UsXG4gICAgICB7IHVybHM6IGZvcm1hdGVkQmxhY2tsaXN0LCB0eXBlczogWydtYWluX2ZyYW1lJ10gfSxcbiAgICAgIFsnYmxvY2tpbmcnXVxuICAgIClcbiAgfSlcbn1cblxuY29uc3Qgc3RvcERlZXBab25lID0gKCkgPT4ge1xuICBzdG9yYWdlLmxvY2FsLnNldCh7IGRlZXBab25lQWN0aXZlOiBmYWxzZSB9KVxuICB3ZWJSZXF1ZXN0Lm9uQmVmb3JlUmVxdWVzdC5yZW1vdmVMaXN0ZW5lcihyZWRpcmVjdFRvQmxvY2tQYWdlKVxuICByZXN0b3JlVGFicyhjbG9zZWRUYWJzKVxufVxuXG5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihyZXF1ZXN0ID0+IHtcbiAgc3dpdGNoIChyZXF1ZXN0Lm1lc3NhZ2UpIHtcbiAgICBjYXNlICdzdGFydCc6XG4gICAgICBzdGFydERlZXBab25lKClcbiAgICAgIGJyZWFrXG5cbiAgICBjYXNlICdzdG9wJzpcbiAgICAgIHN0b3BEZWVwWm9uZSgpXG4gICAgICBicmVha1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIGJyZWFrXG4gIH1cbn0pXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ts/background/index.ts\n");

/***/ }),

/***/ "./src/ts/background/utils.ts":
/*!************************************!*\
  !*** ./src/ts/background/utils.ts ***!
  \************************************/
/*! exports provided: closeTabs, restoreTabs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"closeTabs\", function() { return closeTabs; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"restoreTabs\", function() { return restoreTabs; });\nconst { tabs } = chrome;\nconst closeTabs = (blacklist, callback) => {\n    tabs.query({ url: blacklist }, result => {\n        let closedTabs = [];\n        result.forEach((tab) => {\n            const { id, url } = tab;\n            if (!id || !url) {\n                return;\n            }\n            tabs.remove(id);\n            closedTabs = [...closedTabs, url];\n        });\n        if (callback)\n            callback(closedTabs);\n    });\n};\nconst restoreTabs = (closedTabs) => {\n    closedTabs.forEach((url) => {\n        tabs.create({\n            url,\n        });\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvYmFja2dyb3VuZC91dGlscy50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvdHMvYmFja2dyb3VuZC91dGlscy50cz8xNGM4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRhYiB9IGZyb20gJy4uL3R5cGVzJ1xuXG5jb25zdCB7IHRhYnMgfSA9IGNocm9tZVxuXG4vKipcbiAqIEBwYXJhbSBibGFja2xpc3QgLSBhcnJheSBvZiBVUkwgcGF0dGVybnMgdG8gY2hlY2sgYW5kIGNsb3NlIHRhYnMgdGhhdCBtYXRjaFxuICogQHBhcmFtIGNhbGxiYWNrIC0gY2FsbGJhY2sgZnVuY3Rpb24gdG8gaGFuZGxlIGNsb3NlZCB0YWJzXG4gKi9cbmV4cG9ydCBjb25zdCBjbG9zZVRhYnMgPSAoXG4gIGJsYWNrbGlzdDogc3RyaW5nW10sXG4gIGNhbGxiYWNrPzogKGxpc3Q6IHN0cmluZ1tdKSA9PiB2b2lkXG4pID0+IHtcbiAgdGFicy5xdWVyeSh7IHVybDogYmxhY2tsaXN0IH0sIHJlc3VsdCA9PiB7XG4gICAgbGV0IGNsb3NlZFRhYnM6IHN0cmluZ1tdID0gW11cblxuICAgIHJlc3VsdC5mb3JFYWNoKCh0YWI6IFRhYikgPT4ge1xuICAgICAgY29uc3QgeyBpZCwgdXJsIH0gPSB0YWJcblxuICAgICAgaWYgKCFpZCB8fCAhdXJsKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICB0YWJzLnJlbW92ZShpZClcbiAgICAgIGNsb3NlZFRhYnMgPSBbLi4uY2xvc2VkVGFicywgdXJsXVxuICAgIH0pXG5cbiAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGNsb3NlZFRhYnMpXG4gIH0pXG59XG5cbi8qKlxuICogQHBhcmFtIGNsb3NlZFRhYnMgLSBhcnJheSBvZiBjbG9zZWQgdGFicyB0byByZXN0b3JlXG4gKi9cbmV4cG9ydCBjb25zdCByZXN0b3JlVGFicyA9IChjbG9zZWRUYWJzOiBzdHJpbmdbXSkgPT4ge1xuICBjbG9zZWRUYWJzLmZvckVhY2goKHVybDogc3RyaW5nKSA9PiB7XG4gICAgdGFicy5jcmVhdGUoe1xuICAgICAgdXJsLFxuICAgIH0pXG4gIH0pXG59XG4iXSwibWFwcGluZ3MiOiJBQUVBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ts/background/utils.ts\n");

/***/ })

/******/ });