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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* Data structures */

var serviceMeta = {
    "github": {
        "color": "#24292e",
        "url": "https://github.com/huangsam"
    },
    "facebook": {
        "color": "#3b5998",
        "url": "https://www.facebook.com/samuel.c.huang"
    },
    "linkedin": {
        "color": "#0077b5",
        "url": "https://www.linkedin.com/in/sambyte"
    },
    "wordpress": {
        "color": "#21759b",
        "url": "https://sambyte.wordpress.com"
    }

    /* Event handlers */

};function changeTheme(service) {
    var color = serviceMeta[service]["color"];

    $("body").css("background-color", color);
    $("p, h1").css("color", "white");
    $("a").css("color", "white");
    $("footer span").css("color", "white");
    $("code").css("color", "white");
}

function originalTheme() {
    $("body").css("background-color", "white");
    $("p, h1").css("color", "black");
    $("a").css("color", "#0275d8");
    $("footer span").css("color", "black");
    $("code").css("color", "black");
}

/* Event listeners */

$("#service").change(function () {
    var service = $(this).val();
    if (service === "default") {
        originalTheme();
    } else {
        changeTheme(service);
    }
});

$("#goto").click(function (e) {
    e.preventDefault();
    var service = $("#service").val();
    if (service !== "default") {
        window.location.href = serviceMeta[service]["url"];
    }
});

$(document).ready(function () {
    var currentYear = new Date().getFullYear();
    $("#current-year").text(currentYear);
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map