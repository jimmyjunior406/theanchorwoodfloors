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
/******/ 		"App": 0
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
/******/ 	__webpack_require__.p = "";
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
/******/ 	deferredModules.push(["./src/index.js","vendors~App"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/CarouselData.js":
/*!****************************************!*\
  !*** ./src/components/CarouselData.js ***!
  \****************************************/
/*! exports provided: CarouselData */
/*! exports used: CarouselData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return CarouselData; });\n\nconst CarouselData = [{\n  image: 'https://i.imgur.com/aKttwXi.jpg'\n}, {\n  image: 'https://i.imgur.com/4f5CbzI.png'\n}, {\n  image: 'https://i.imgur.com/QE8ykfK.png'\n}, {\n  image: 'https://i.imgur.com/8Ug4NKa.png'\n}];\n\n//# sourceURL=webpack:///./src/components/CarouselData.js?");

/***/ }),

/***/ "./src/components/ImageCarousel.js":
/*!*****************************************!*\
  !*** ./src/components/ImageCarousel.js ***!
  \*****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _CarouselData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CarouselData */ \"./src/components/CarouselData.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n\n\n\n\n\nconst ImageCarousel = (_ref) => {\n  let {\n    items\n  } = _ref;\n  const [current, setCurrent] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0);\n  const length = items.length;\n\n  const nextItem = () => {\n    setCurrent(current === length - 1 ? 0 : current + 1);\n  };\n\n  const prevItem = () => {\n    setCurrent(current === 0 ? length - 1 : current - 1);\n  };\n\n  if (!Array.isArray(items) || items.length <= 0) {\n    return null;\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", {\n    className: \"slider\"\n  }, _CarouselData__WEBPACK_IMPORTED_MODULE_1__[/* CarouselData */ \"a\"].map((item, index) => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: index === current ? 'slide active relative show' : 'slide ',\n      key: index\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[/* Link */ \"b\"], {\n      to: \"/about\"\n    }, index === current && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n      src: item.image,\n      className: \"image\"\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__[/* FaArrowLeft */ \"a\"], {\n      className: \"left\",\n      onClick: prevItem\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__[/* FaArrowRight */ \"b\"], {\n      className: \"right\",\n      onClick: nextItem\n    }));\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (ImageCarousel);\n\n//# sourceURL=webpack:///./src/components/ImageCarousel.js?");

/***/ }),

/***/ "./src/components/NavBar.js":
/*!**********************************!*\
  !*** ./src/components/NavBar.js ***!
  \**********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n\n\n\nconst NavBar = props => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"nav\", {\n    className: \"static mx-auto bg-gray-200\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"py-3 px-6 flex justify-around text-gray-700\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    class: \"absolute m-11 left-0 max-w-xlg max-h-20\",\n    src: \"https://i.imgur.com/QlP6I3t.png\"\n  }), \"603-598-2332\", props.routes.map((_ref) => {\n    let {\n      key,\n      path\n    } = _ref;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[/* Link */ \"b\"], {\n      key: key,\n      to: path\n    }, key);\n  }))));\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (NavBar);\n\n//# sourceURL=webpack:///./src/components/NavBar.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router */ \"./src/router/index.js\");\n\n\n\nconst app = document.getElementById('app');\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_router__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"], null), app);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/pages/About.js":
/*!****************************!*\
  !*** ./src/pages/About.js ***!
  \****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return About; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction About(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    class: \"container mt-28 ml-14 flex justify-center\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    class: \"-mt-14 text-4xl absolute mb-4\"\n  }, \"What We Do Differently\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    class: \"relative m-8 border-solid rounded-md border-4 border-gray-400 -ml-50px w-6/12 h-full\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: \"https://i.imgur.com/5eiUyDX.jpg\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    class: \"relative m-8 -ml-50px w-5/12 h-3/4 text-xl\"\n  }, \"It doesn't make sense to us that you should have to determine what color your entire floor will be stained based on a tiny 4x4 sample. We offer a unique stain test that allows you to see the true color of the stain on your floor, along with other samples that you might have a hard time deciding on. Spend the weekend looking at larger 1'x4' samples to make your choice with a little more confidence.\"));\n}\n\n//# sourceURL=webpack:///./src/pages/About.js?");

/***/ }),

/***/ "./src/pages/Home.js":
/*!***************************!*\
  !*** ./src/pages/Home.js ***!
  \***************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Home; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_CarouselData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/CarouselData */ \"./src/components/CarouselData.js\");\n/* harmony import */ var _components_ImageCarousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ImageCarousel */ \"./src/components/ImageCarousel.js\");\n\n\n\nfunction Home() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ImageCarousel__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"], {\n    items: _components_CarouselData__WEBPACK_IMPORTED_MODULE_1__[/* CarouselData */ \"a\"]\n  });\n}\n\n//# sourceURL=webpack:///./src/pages/Home.js?");

/***/ }),

/***/ "./src/pages/Installation.js":
/*!***********************************!*\
  !*** ./src/pages/Installation.js ***!
  \***********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Installation; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Installation(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    class: \"container mt-28 ml-14 flex justify-center\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    class: \"-mt-14 text-4xl absolute mb-4\"\n  }, \"Installation\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    class: \"relative m-8 border-solid rounded-md border-4 border-gray-400 -ml-50px w-5/12 h-3/4\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: \"https://i.imgur.com/Vfwb5Yy.png\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    class: \"relative m-8 -ml-50px w-5/12 h-3/4 text-xl\"\n  }, \"We take the time to do the job right. Covering New Hampshire and Massachusetts, Anchor Wood Flooring specializes hardwood installations for homes and offices. Since 2008, we have be working with the most respected brand names and long-lasting materials to ensure your home or office is protected for many years to come.\"));\n}\n{\n  /* <div class=\"container flex flex-wrap mt-59 justify-center\">\n  \t\t<div class=\"relative  border-solid rounded-md border-4 border-gray-400 -ml-50px w-5/12 h-3/4\">\n  \t\t\t<img src=\"https://i.imgur.com/Vfwb5Yy.png\" />\n  \t\t</div>\n  \t\t<div class=\"font-sans text-base top-28 m-4 -ml-50px w-5/12 h-3/4\">\n  \t\t\tThis is were the installion information is going to asdfasdf asdfasf\n  \t\t\tasdfa sdfa sdfa sdf asdf asdf asdf asd fasd fas dfa sdf asdf asdf asdf\n  \t\t\tasdf asdf asdf asdf asdf asdf asdf asd fasdf asd This is were the\n  \t\t\tinstallion information is going to asdfasdf asdfasf asdfa sdfa sdfa sdf\n  \t\t\tasdf asdf asdf asd fasd fas dfa sdf asdf asdf asdf asdf asdf asdf asdf\n  \t\t\tasdf asdf asdf asd fasdf asd This is were the installion information is\n  \t\t\tgoing to asdfasdf asdfasf asdfa sdfa sdfa sdf asdf asdf asdf asd fasd\n  \t\t\tfas dfa sdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asd fasdf\n  \t\t\tasd This is were the installion information is going to asdfasdf asdfasf\n  \t\t\tasdfa sdfa sdfa sdf asdf asdf asdf asd fasd fas dfa sdf asdf asdf asdf\n  \t\t</div>\n  \t</div> */\n}\n\n//# sourceURL=webpack:///./src/pages/Installation.js?");

/***/ }),

/***/ "./src/pages/Refinish.js":
/*!*******************************!*\
  !*** ./src/pages/Refinish.js ***!
  \*******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Contact; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Contact(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    class: \"container mt-28 ml-14 flex justify-center\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    class: \"-mt-14 text-4xl absolute mb-4\"\n  }, \"Refinish\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    class: \"relative m-8 border-solid rounded-md border-4 border-gray-400 -ml-50px w-5/12 h-3/4\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: \"https://i.imgur.com/gUZcfYP.png\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    class: \"relative m-8 -ml-50px w-5/12 h-3/4 text-xl\"\n  }, \"Make your existing wood flooring look new! We remove scratches and damages from the surface before applying a variety of high-end, commercially graded oil or waterbased finsihes. The end result is a flawless look with extreme durabity.\"));\n}\n\n//# sourceURL=webpack:///./src/pages/Refinish.js?");

/***/ }),

/***/ "./src/pages/Repair.js":
/*!*****************************!*\
  !*** ./src/pages/Repair.js ***!
  \*****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Repair; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Repair(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    class: \"container mt-28 ml-14 flex justify-center\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    class: \"-mt-14 text-4xl absolute mb-4\"\n  }, \"Repair\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    class: \"relative m-8 border-solid rounded-md border-4 border-gray-400 -ml-50px w-5/12 h-3/4\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: \"https://i.imgur.com/90HAOLY.png?1\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    class: \"relative m-8 -ml-50px w-5/12 h-3/4 text-xl\"\n  }, \"Our repair services are second to none. Anchor Wood Flooring can address any number of problems that may be affecting the look, quality and functionality of your hardwood floors. Cracks, pits, scratches, dents, water damage are our specialty.\"));\n}\n\n//# sourceURL=webpack:///./src/pages/Repair.js?");

/***/ }),

/***/ "./src/pages/Solid.js":
/*!****************************!*\
  !*** ./src/pages/Solid.js ***!
  \****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Solid; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Solid(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    class: \"container mt-28 ml-14 flex justify-center\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    class: \"-mt-14 text-4xl absolute mb-4\"\n  }, \"Solid\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    class: \"relative m-8 border-solid rounded-md border-4 border-gray-400 -ml-50px w-5/12 h-3/4\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: \"https://i.imgur.com/7pmqOdY.png\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    class: \"relative m-8 -ml-50px w-5/12 h-3/4 text-xl\"\n  }, \"Hardwood floors make a beautiful addition to your home. Consult with us on the variety of species to choose from to find the perfect match for your home. Anchor Wood Flooring offers a satisfaction garuntee on all solid floor installations.\"));\n}\n\n//# sourceURL=webpack:///./src/pages/Solid.js?");

/***/ }),

/***/ "./src/pages/UnFinished.js":
/*!*********************************!*\
  !*** ./src/pages/UnFinished.js ***!
  \*********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return PreUnfinished; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction PreUnfinished(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    class: \"container mt-28 ml-14 flex justify-center\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    class: \"-mt-14 text-4xl absolute mb-4\"\n  }, \"Unfinished\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    class: \"relative m-8 border-solid rounded-md border-4 border-gray-400 -ml-50px w-5/12 h-3/4\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: \"https://i.imgur.com/TAA0QHa.png\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    class: \"relative m-8 -ml-50px w-5/12 h-3/4 text-xl\"\n  }, \"If your home is still under construction, an unfinished floor is the way to go. There's no worry about minor damage while the rest of the home is being built, and starting with an unfinished floors gives you a larger variety of finishes to choose from.\"));\n}\n\n//# sourceURL=webpack:///./src/pages/UnFinished.js?");

/***/ }),

/***/ "./src/pages/Vinyl.js":
/*!****************************!*\
  !*** ./src/pages/Vinyl.js ***!
  \****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Vinyl; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Vinyl(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    class: \"container mt-28 ml-14 flex justify-center\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    class: \"-mt-14 text-4xl absolute mb-4\"\n  }, \"Vinyl\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    class: \"relative m-8 border-solid rounded-md border-4 border-gray-400 -ml-50px w-5/12 h-3/4\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: \"https://i.imgur.com/Uei2Ptu.jpg\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    class: \"relative m-8 -ml-50px w-5/12 h-3/4 text-xl\"\n  }, \"If you're looking for flooring that will last up to 10 or 20 years... Vinyl is the way to go. It's also an excellent choice for any room that has high foot traffic. Its surface is easy to clean and resistance to minor scratches and stains.\"));\n}\n\n//# sourceURL=webpack:///./src/pages/Vinyl.js?");

/***/ }),

/***/ "./src/router/index.js":
/*!*****************************!*\
  !*** ./src/router/index.js ***!
  \*****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/NavBar */ \"./src/components/NavBar.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes */ \"./src/router/routes.js\");\n\n\n\n\n\nconst AppRouter = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[/* BrowserRouter */ \"a\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NavBar__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"], {\n    routes: _routes__WEBPACK_IMPORTED_MODULE_4__[/* default */ \"a\"]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[/* Switch */ \"c\"], null, _routes__WEBPACK_IMPORTED_MODULE_4__[/* default */ \"a\"].map((_ref) => {\n    let {\n      Component,\n      key,\n      path\n    } = _ref;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[/* Route */ \"a\"], {\n      key: key,\n      path: path,\n      component: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, {\n        page: key\n      })\n    });\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (AppRouter);\n\n//# sourceURL=webpack:///./src/router/index.js?");

/***/ }),

/***/ "./src/router/routes.js":
/*!******************************!*\
  !*** ./src/router/routes.js ***!
  \******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/Home */ \"./src/pages/Home.js\");\n/* harmony import */ var _pages_Installation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/Installation */ \"./src/pages/Installation.js\");\n/* harmony import */ var _pages_Refinish__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/Refinish */ \"./src/pages/Refinish.js\");\n/* harmony import */ var _pages_UnFinished_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/UnFinished.js */ \"./src/pages/UnFinished.js\");\n/* harmony import */ var _pages_Solid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/Solid */ \"./src/pages/Solid.js\");\n/* harmony import */ var _pages_Vinyl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pages/Vinyl */ \"./src/pages/Vinyl.js\");\n/* harmony import */ var _pages_Repair__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pages/Repair */ \"./src/pages/Repair.js\");\n/* harmony import */ var _pages_About__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pages/About */ \"./src/pages/About.js\");\n\n\n\n\n\n\n\n\n\nconst routes = [{\n  Component: _pages_Installation__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"],\n  key: 'Installation',\n  path: '/installation'\n}, {\n  Component: _pages_Refinish__WEBPACK_IMPORTED_MODULE_3__[/* default */ \"a\"],\n  key: 'Refinish',\n  path: '/refinish'\n}, {\n  Component: _pages_UnFinished_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ \"a\"],\n  key: 'Unfinished',\n  path: '/unfinished'\n}, {\n  Component: _pages_Solid__WEBPACK_IMPORTED_MODULE_5__[/* default */ \"a\"],\n  key: 'Solid',\n  path: '/solid'\n}, {\n  Component: _pages_Repair__WEBPACK_IMPORTED_MODULE_7__[/* default */ \"a\"],\n  key: 'Repair/Demolition',\n  path: '/repair'\n}, {\n  Component: _pages_Vinyl__WEBPACK_IMPORTED_MODULE_6__[/* default */ \"a\"],\n  key: 'Vinyl LVP',\n  path: '/vinyl'\n}, {\n  Component: _pages_About__WEBPACK_IMPORTED_MODULE_8__[/* default */ \"a\"],\n  key: 'About',\n  path: '/about'\n}, {\n  Component: _pages_Home__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"],\n  key: 'Home',\n  path: '/'\n}];\n/* harmony default export */ __webpack_exports__[\"a\"] = (routes);\n\n//# sourceURL=webpack:///./src/router/routes.js?");

/***/ })

/******/ });