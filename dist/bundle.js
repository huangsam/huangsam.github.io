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
/******/ ({

/***/ "./app/main.js":
/*!*********************!*\
  !*** ./app/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* Data structures */

var serviceMeta = {
  "github": {
    "color": "#24292e",
    "url": "https://github.com/huangsam/"
  },
  "facebook": {
    "color": "#3b5998",
    "url": "https://www.facebook.com/samuel.c.huang"
  },
  "linkedin": {
    "color": "#0077b5",
    "url": "https://www.linkedin.com/in/sambyte/"
  },
  "wordpress": {
    "color": "#21759b",
    "url": "https://sambyte.wordpress.com/"
  }
};

/* Helper routines */

function getServiceUrl(service) {
  return serviceMeta[service]["url"];
}

/* Event handlers */

function changeTheme(service) {
  var color = serviceMeta[service]["color"];

  $("body").css("background-color", color);
  $("p, h1").css("color", "white");
  $("a").css("color", "white");
  $("footer span").css("color", "white");
  $("pre").css("border", ".3em solid white");
}

function originalTheme() {
  $("body").css("background-color", "white");
  $("p, h1").css("color", "black");
  $("a").css("color", "#0275d8");
  $("footer span").css("color", "black");
  $("pre").css("border", ".3em solid hsl(0, 0%, 33%)");
}

/* Event listeners */

$("#service").change(function () {
  var service = $(this).val();
  if (service !== "default") {
    changeTheme(service);
  } else {
    originalTheme();
  }
});

$("#goto").click(function (e) {
  e.preventDefault();
  var service = $("select#service").val();
  if (service !== "default") {
    window.location.href = getServiceUrl(service);
  } else {
    alert("Please select a valid service from the dropdown.");
  }
});

$(document).ready(function () {
  var currentYear = new Date().getFullYear();
  $("#current-year").text(currentYear);
});

/***/ }),

/***/ "./scss/main.scss":
/*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!********************************************!*\
  !*** multi ./app/main.js ./scss/main.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./app/main.js */"./app/main.js");
module.exports = __webpack_require__(/*! ./scss/main.scss */"./scss/main.scss");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map