/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pages/index/index.js":
/*!**********************************!*\
  !*** ./src/pages/index/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lazysizes */ \"./node_modules/lazysizes/lazysizes.js\");\n/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lazysizes__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ \"./src/pages/index/index.scss\");\n\n\n\n//# sourceURL=webpack://websitev2/./src/pages/index/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/index/index.scss":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/index/index.scss ***!
  \*****************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/AERIAL.TTF */ \"./src/assets/fonts/AERIAL.TTF\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/novasquare.ttf */ \"./src/assets/fonts/novasquare.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/images/default/BG layer 1.png */ \"./src/assets/images/default/BG layer 1.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n  --max-width: 1440px;\\n  --default-font-size: 1.3rem;\\n  --default-heading-font-size: 2.5rem;\\n}\\n\\n@font-face {\\n  font-family: Aerial;\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n}\\n@font-face {\\n  font-family: NovaSquare;\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n}\\nbody {\\n  margin: 0;\\n  padding: 0;\\n  width: 100%;\\n  opacity: 1;\\n  max-width: var(--max-width);\\n  margin: auto;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\n  background-attachment: fixed;\\n  font-family: NovaSquare;\\n  font-size: var(--default-font-size);\\n}\\n\\nh1,\\nh2,\\nh3,\\nh4 {\\n  font-family: Aerial;\\n  font-weight: 400;\\n}\\n\\nh2 {\\n  font-size: var(--default-heading-font-size);\\n}\\n\\na {\\n  appearance: none;\\n  color: unset;\\n  text-decoration: unset;\\n}\\n\\n.lazyload,\\n.lazyloading {\\n  opacity: 0;\\n}\\n\\n.lazyloaded {\\n  opacity: 1;\\n  transition: opacity 300ms;\\n}\\n\\nli,\\nul,\\np {\\n  margin: 0;\\n  padding: 0;\\n  list-style: none;\\n}\\n\\n.Image {\\n  height: 100%;\\n  width: 100%;\\n  object-fit: contain;\\n  user-select: none;\\n}\\n\\n.Main {\\n  height: 100%;\\n  width: 100%;\\n  max-width: 1440px;\\n  margin: 32px auto 0;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n\\n.-Show {\\n  opacity: 1 !important;\\n}\\n\\n.-VisuallyHidden {\\n  opacity: 0 !important;\\n}\\n\\n.-Hidden {\\n  display: none !important;\\n}\\n\\n.Main.Index {\\n  margin: 0;\\n}\\n\\n.ContentList {\\n  height: fit-content;\\n  width: 80%;\\n  max-width: 1440px;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  margin: 32px auto;\\n}\\n.ContentList::after {\\n  content: \\\"\\\";\\n  position: fixed;\\n  bottom: 0;\\n  left: 0;\\n  right: 0;\\n  height: 50px;\\n  background-color: white;\\n  background: linear-gradient(0deg, rgb(255, 255, 255), transparent 88%);\\n}\\n@media (max-width: 640px) {\\n  .ContentList {\\n    width: 100%;\\n    justify-content: space-evenly;\\n    margin: 0;\\n  }\\n}\\n\\n.ListItem {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-evenly;\\n  width: 100%;\\n}\\n@media (max-width: 640px) {\\n  .ListItem {\\n    flex-direction: column-reverse;\\n  }\\n}\\n.ListItem:hover .ListItem__Text {\\n  --after-right: 0;\\n}\\n.ListItem__Container {\\n  width: 100%;\\n  margin-bottom: 24px;\\n  background-color: rgba(255, 255, 255, 0.5);\\n  backdrop-filter: blur(5px);\\n}\\n@media (min-width: 640px) {\\n  .ListItem__Container:nth-child(even) .ListItem {\\n    flex-direction: row-reverse;\\n  }\\n}\\n.ListItem__Container:last-child {\\n  margin-bottom: 50px;\\n}\\n.ListItem__Text {\\n  width: 50%;\\n  text-align: center;\\n  font-size: 200%;\\n  width: fit-content;\\n  margin: auto;\\n  position: relative;\\n}\\n.ListItem__Text[item-state=active] {\\n  --after-right: 0;\\n}\\n.ListItem__Text[item-state=not-active] {\\n  --after-right: 100%;\\n}\\n.ListItem__Text::after {\\n  position: absolute;\\n  content: \\\"\\\";\\n  bottom: 18%;\\n  left: 0;\\n  right: var(--after-right);\\n  height: 2px;\\n  background-color: black;\\n  transition: right 400ms ease-in-out;\\n}\\n.ListItem__Text:hover::after {\\n  right: 0;\\n}\\n@media (max-width: 640px) {\\n  .ListItem__Text {\\n    font-size: 16px;\\n  }\\n}\\n.ListItem__Text:hover::after {\\n  right: var(--after-right);\\n}\\n.ListItem__Text:after {\\n  bottom: 0;\\n}\\n.ListItem__Image {\\n  width: 50%;\\n}\\n.ListItem__Image .Image {\\n  height: 100%;\\n  width: 100%;\\n  object-fit: contain;\\n}\\n.ListItem:hover .ListItem__Image {\\n  filter: brightness(1.1);\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://websitev2/./src/pages/index/index.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\r\n\r\n/*\r\n  MIT License http://www.opensource.org/licenses/mit-license.php\r\n  Author Tobias Koppers @sokra\r\n*/\r\nmodule.exports = function (cssWithMappingToString) {\r\n  var list = []; // return the list of modules as css string\r\n\r\n  list.toString = function toString() {\r\n    return this.map(function (item) {\r\n      var content = \"\";\r\n      var needLayer = typeof item[5] !== \"undefined\";\r\n\r\n      if (item[4]) {\r\n        content += \"@supports (\".concat(item[4], \") {\");\r\n      }\r\n\r\n      if (item[2]) {\r\n        content += \"@media \".concat(item[2], \" {\");\r\n      }\r\n\r\n      if (needLayer) {\r\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\r\n      }\r\n\r\n      content += cssWithMappingToString(item);\r\n\r\n      if (needLayer) {\r\n        content += \"}\";\r\n      }\r\n\r\n      if (item[2]) {\r\n        content += \"}\";\r\n      }\r\n\r\n      if (item[4]) {\r\n        content += \"}\";\r\n      }\r\n\r\n      return content;\r\n    }).join(\"\");\r\n  }; // import a list of modules into the list\r\n\r\n\r\n  list.i = function i(modules, media, dedupe, supports, layer) {\r\n    if (typeof modules === \"string\") {\r\n      modules = [[null, modules, undefined]];\r\n    }\r\n\r\n    var alreadyImportedModules = {};\r\n\r\n    if (dedupe) {\r\n      for (var k = 0; k < this.length; k++) {\r\n        var id = this[k][0];\r\n\r\n        if (id != null) {\r\n          alreadyImportedModules[id] = true;\r\n        }\r\n      }\r\n    }\r\n\r\n    for (var _k = 0; _k < modules.length; _k++) {\r\n      var item = [].concat(modules[_k]);\r\n\r\n      if (dedupe && alreadyImportedModules[item[0]]) {\r\n        continue;\r\n      }\r\n\r\n      if (typeof layer !== \"undefined\") {\r\n        if (typeof item[5] === \"undefined\") {\r\n          item[5] = layer;\r\n        } else {\r\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\r\n          item[5] = layer;\r\n        }\r\n      }\r\n\r\n      if (media) {\r\n        if (!item[2]) {\r\n          item[2] = media;\r\n        } else {\r\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\r\n          item[2] = media;\r\n        }\r\n      }\r\n\r\n      if (supports) {\r\n        if (!item[4]) {\r\n          item[4] = \"\".concat(supports);\r\n        } else {\r\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\r\n          item[4] = supports;\r\n        }\r\n      }\r\n\r\n      list.push(item);\r\n    }\r\n  };\r\n\r\n  return list;\r\n};\n\n//# sourceURL=webpack://websitev2/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\r\n\r\nmodule.exports = function (url, options) {\r\n  if (!options) {\r\n    options = {};\r\n  }\r\n\r\n  if (!url) {\r\n    return url;\r\n  }\r\n\r\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\r\n\r\n  if (/^['\"].*['\"]$/.test(url)) {\r\n    url = url.slice(1, -1);\r\n  }\r\n\r\n  if (options.hash) {\r\n    url += options.hash;\r\n  } // Should url be wrapped?\r\n  // See https://drafts.csswg.org/css-values-3/#urls\r\n\r\n\r\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\r\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\r\n  }\r\n\r\n  return url;\r\n};\n\n//# sourceURL=webpack://websitev2/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\r\n\r\nmodule.exports = function (i) {\r\n  return i[1];\r\n};\n\n//# sourceURL=webpack://websitev2/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/lazysizes/lazysizes.js":
/*!*********************************************!*\
  !*** ./node_modules/lazysizes/lazysizes.js ***!
  \*********************************************/
/***/ ((module) => {

eval("(function(window, factory) {\r\n\tvar lazySizes = factory(window, window.document, Date);\r\n\twindow.lazySizes = lazySizes;\r\n\tif( true && module.exports){\r\n\t\tmodule.exports = lazySizes;\r\n\t}\r\n}(typeof window != 'undefined' ?\r\n      window : {}, \r\n/**\r\n * import(\"./types/global\")\r\n * @typedef { import(\"./types/lazysizes-config\").LazySizesConfigPartial } LazySizesConfigPartial\r\n */\r\nfunction l(window, document, Date) { // Pass in the window Date function also for SSR because the Date class can be lost\r\n\t'use strict';\r\n\t/*jshint eqnull:true */\r\n\r\n\tvar lazysizes,\r\n\t\t/**\r\n\t\t * @type { LazySizesConfigPartial }\r\n\t\t */\r\n\t\tlazySizesCfg;\r\n\r\n\t(function(){\r\n\t\tvar prop;\r\n\r\n\t\tvar lazySizesDefaults = {\r\n\t\t\tlazyClass: 'lazyload',\r\n\t\t\tloadedClass: 'lazyloaded',\r\n\t\t\tloadingClass: 'lazyloading',\r\n\t\t\tpreloadClass: 'lazypreload',\r\n\t\t\terrorClass: 'lazyerror',\r\n\t\t\t//strictClass: 'lazystrict',\r\n\t\t\tautosizesClass: 'lazyautosizes',\r\n\t\t\tfastLoadedClass: 'ls-is-cached',\r\n\t\t\tiframeLoadMode: 0,\r\n\t\t\tsrcAttr: 'data-src',\r\n\t\t\tsrcsetAttr: 'data-srcset',\r\n\t\t\tsizesAttr: 'data-sizes',\r\n\t\t\t//preloadAfterLoad: false,\r\n\t\t\tminSize: 40,\r\n\t\t\tcustomMedia: {},\r\n\t\t\tinit: true,\r\n\t\t\texpFactor: 1.5,\r\n\t\t\thFac: 0.8,\r\n\t\t\tloadMode: 2,\r\n\t\t\tloadHidden: true,\r\n\t\t\tricTimeout: 0,\r\n\t\t\tthrottleDelay: 125,\r\n\t\t};\r\n\r\n\t\tlazySizesCfg = window.lazySizesConfig || window.lazysizesConfig || {};\r\n\r\n\t\tfor(prop in lazySizesDefaults){\r\n\t\t\tif(!(prop in lazySizesCfg)){\r\n\t\t\t\tlazySizesCfg[prop] = lazySizesDefaults[prop];\r\n\t\t\t}\r\n\t\t}\r\n\t})();\r\n\r\n\tif (!document || !document.getElementsByClassName) {\r\n\t\treturn {\r\n\t\t\tinit: function () {},\r\n\t\t\t/**\r\n\t\t\t * @type { LazySizesConfigPartial }\r\n\t\t\t */\r\n\t\t\tcfg: lazySizesCfg,\r\n\t\t\t/**\r\n\t\t\t * @type { true }\r\n\t\t\t */\r\n\t\t\tnoSupport: true,\r\n\t\t};\r\n\t}\r\n\r\n\tvar docElem = document.documentElement;\r\n\r\n\tvar supportPicture = window.HTMLPictureElement;\r\n\r\n\tvar _addEventListener = 'addEventListener';\r\n\r\n\tvar _getAttribute = 'getAttribute';\r\n\r\n\t/**\r\n\t * Update to bind to window because 'this' becomes null during SSR\r\n\t * builds.\r\n\t */\r\n\tvar addEventListener = window[_addEventListener].bind(window);\r\n\r\n\tvar setTimeout = window.setTimeout;\r\n\r\n\tvar requestAnimationFrame = window.requestAnimationFrame || setTimeout;\r\n\r\n\tvar requestIdleCallback = window.requestIdleCallback;\r\n\r\n\tvar regPicture = /^picture$/i;\r\n\r\n\tvar loadEvents = ['load', 'error', 'lazyincluded', '_lazyloaded'];\r\n\r\n\tvar regClassCache = {};\r\n\r\n\tvar forEach = Array.prototype.forEach;\r\n\r\n\t/**\r\n\t * @param ele {Element}\r\n\t * @param cls {string}\r\n\t */\r\n\tvar hasClass = function(ele, cls) {\r\n\t\tif(!regClassCache[cls]){\r\n\t\t\tregClassCache[cls] = new RegExp('(\\\\s|^)'+cls+'(\\\\s|$)');\r\n\t\t}\r\n\t\treturn regClassCache[cls].test(ele[_getAttribute]('class') || '') && regClassCache[cls];\r\n\t};\r\n\r\n\t/**\r\n\t * @param ele {Element}\r\n\t * @param cls {string}\r\n\t */\r\n\tvar addClass = function(ele, cls) {\r\n\t\tif (!hasClass(ele, cls)){\r\n\t\t\tele.setAttribute('class', (ele[_getAttribute]('class') || '').trim() + ' ' + cls);\r\n\t\t}\r\n\t};\r\n\r\n\t/**\r\n\t * @param ele {Element}\r\n\t * @param cls {string}\r\n\t */\r\n\tvar removeClass = function(ele, cls) {\r\n\t\tvar reg;\r\n\t\tif ((reg = hasClass(ele,cls))) {\r\n\t\t\tele.setAttribute('class', (ele[_getAttribute]('class') || '').replace(reg, ' '));\r\n\t\t}\r\n\t};\r\n\r\n\tvar addRemoveLoadEvents = function(dom, fn, add){\r\n\t\tvar action = add ? _addEventListener : 'removeEventListener';\r\n\t\tif(add){\r\n\t\t\taddRemoveLoadEvents(dom, fn);\r\n\t\t}\r\n\t\tloadEvents.forEach(function(evt){\r\n\t\t\tdom[action](evt, fn);\r\n\t\t});\r\n\t};\r\n\r\n\t/**\r\n\t * @param elem { Element }\r\n\t * @param name { string }\r\n\t * @param detail { any }\r\n\t * @param noBubbles { boolean }\r\n\t * @param noCancelable { boolean }\r\n\t * @returns { CustomEvent }\r\n\t */\r\n\tvar triggerEvent = function(elem, name, detail, noBubbles, noCancelable){\r\n\t\tvar event = document.createEvent('Event');\r\n\r\n\t\tif(!detail){\r\n\t\t\tdetail = {};\r\n\t\t}\r\n\r\n\t\tdetail.instance = lazysizes;\r\n\r\n\t\tevent.initEvent(name, !noBubbles, !noCancelable);\r\n\r\n\t\tevent.detail = detail;\r\n\r\n\t\telem.dispatchEvent(event);\r\n\t\treturn event;\r\n\t};\r\n\r\n\tvar updatePolyfill = function (el, full){\r\n\t\tvar polyfill;\r\n\t\tif( !supportPicture && ( polyfill = (window.picturefill || lazySizesCfg.pf) ) ){\r\n\t\t\tif(full && full.src && !el[_getAttribute]('srcset')){\r\n\t\t\t\tel.setAttribute('srcset', full.src);\r\n\t\t\t}\r\n\t\t\tpolyfill({reevaluate: true, elements: [el]});\r\n\t\t} else if(full && full.src){\r\n\t\t\tel.src = full.src;\r\n\t\t}\r\n\t};\r\n\r\n\tvar getCSS = function (elem, style){\r\n\t\treturn (getComputedStyle(elem, null) || {})[style];\r\n\t};\r\n\r\n\t/**\r\n\t *\r\n\t * @param elem { Element }\r\n\t * @param parent { Element }\r\n\t * @param [width] {number}\r\n\t * @returns {number}\r\n\t */\r\n\tvar getWidth = function(elem, parent, width){\r\n\t\twidth = width || elem.offsetWidth;\r\n\r\n\t\twhile(width < lazySizesCfg.minSize && parent && !elem._lazysizesWidth){\r\n\t\t\twidth =  parent.offsetWidth;\r\n\t\t\tparent = parent.parentNode;\r\n\t\t}\r\n\r\n\t\treturn width;\r\n\t};\r\n\r\n\tvar rAF = (function(){\r\n\t\tvar running, waiting;\r\n\t\tvar firstFns = [];\r\n\t\tvar secondFns = [];\r\n\t\tvar fns = firstFns;\r\n\r\n\t\tvar run = function(){\r\n\t\t\tvar runFns = fns;\r\n\r\n\t\t\tfns = firstFns.length ? secondFns : firstFns;\r\n\r\n\t\t\trunning = true;\r\n\t\t\twaiting = false;\r\n\r\n\t\t\twhile(runFns.length){\r\n\t\t\t\trunFns.shift()();\r\n\t\t\t}\r\n\r\n\t\t\trunning = false;\r\n\t\t};\r\n\r\n\t\tvar rafBatch = function(fn, queue){\r\n\t\t\tif(running && !queue){\r\n\t\t\t\tfn.apply(this, arguments);\r\n\t\t\t} else {\r\n\t\t\t\tfns.push(fn);\r\n\r\n\t\t\t\tif(!waiting){\r\n\t\t\t\t\twaiting = true;\r\n\t\t\t\t\t(document.hidden ? setTimeout : requestAnimationFrame)(run);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t};\r\n\r\n\t\trafBatch._lsFlush = run;\r\n\r\n\t\treturn rafBatch;\r\n\t})();\r\n\r\n\tvar rAFIt = function(fn, simple){\r\n\t\treturn simple ?\r\n\t\t\tfunction() {\r\n\t\t\t\trAF(fn);\r\n\t\t\t} :\r\n\t\t\tfunction(){\r\n\t\t\t\tvar that = this;\r\n\t\t\t\tvar args = arguments;\r\n\t\t\t\trAF(function(){\r\n\t\t\t\t\tfn.apply(that, args);\r\n\t\t\t\t});\r\n\t\t\t}\r\n\t\t;\r\n\t};\r\n\r\n\tvar throttle = function(fn){\r\n\t\tvar running;\r\n\t\tvar lastTime = 0;\r\n\t\tvar gDelay = lazySizesCfg.throttleDelay;\r\n\t\tvar rICTimeout = lazySizesCfg.ricTimeout;\r\n\t\tvar run = function(){\r\n\t\t\trunning = false;\r\n\t\t\tlastTime = Date.now();\r\n\t\t\tfn();\r\n\t\t};\r\n\t\tvar idleCallback = requestIdleCallback && rICTimeout > 49 ?\r\n\t\t\tfunction(){\r\n\t\t\t\trequestIdleCallback(run, {timeout: rICTimeout});\r\n\r\n\t\t\t\tif(rICTimeout !== lazySizesCfg.ricTimeout){\r\n\t\t\t\t\trICTimeout = lazySizesCfg.ricTimeout;\r\n\t\t\t\t}\r\n\t\t\t} :\r\n\t\t\trAFIt(function(){\r\n\t\t\t\tsetTimeout(run);\r\n\t\t\t}, true)\r\n\t\t;\r\n\r\n\t\treturn function(isPriority){\r\n\t\t\tvar delay;\r\n\r\n\t\t\tif((isPriority = isPriority === true)){\r\n\t\t\t\trICTimeout = 33;\r\n\t\t\t}\r\n\r\n\t\t\tif(running){\r\n\t\t\t\treturn;\r\n\t\t\t}\r\n\r\n\t\t\trunning =  true;\r\n\r\n\t\t\tdelay = gDelay - (Date.now() - lastTime);\r\n\r\n\t\t\tif(delay < 0){\r\n\t\t\t\tdelay = 0;\r\n\t\t\t}\r\n\r\n\t\t\tif(isPriority || delay < 9){\r\n\t\t\t\tidleCallback();\r\n\t\t\t} else {\r\n\t\t\t\tsetTimeout(idleCallback, delay);\r\n\t\t\t}\r\n\t\t};\r\n\t};\r\n\r\n\t//based on http://modernjavascript.blogspot.de/2013/08/building-better-debounce.html\r\n\tvar debounce = function(func) {\r\n\t\tvar timeout, timestamp;\r\n\t\tvar wait = 99;\r\n\t\tvar run = function(){\r\n\t\t\ttimeout = null;\r\n\t\t\tfunc();\r\n\t\t};\r\n\t\tvar later = function() {\r\n\t\t\tvar last = Date.now() - timestamp;\r\n\r\n\t\t\tif (last < wait) {\r\n\t\t\t\tsetTimeout(later, wait - last);\r\n\t\t\t} else {\r\n\t\t\t\t(requestIdleCallback || run)(run);\r\n\t\t\t}\r\n\t\t};\r\n\r\n\t\treturn function() {\r\n\t\t\ttimestamp = Date.now();\r\n\r\n\t\t\tif (!timeout) {\r\n\t\t\t\ttimeout = setTimeout(later, wait);\r\n\t\t\t}\r\n\t\t};\r\n\t};\r\n\r\n\tvar loader = (function(){\r\n\t\tvar preloadElems, isCompleted, resetPreloadingTimer, loadMode, started;\r\n\r\n\t\tvar eLvW, elvH, eLtop, eLleft, eLright, eLbottom, isBodyHidden;\r\n\r\n\t\tvar regImg = /^img$/i;\r\n\t\tvar regIframe = /^iframe$/i;\r\n\r\n\t\tvar supportScroll = ('onscroll' in window) && !(/(gle|ing)bot/.test(navigator.userAgent));\r\n\r\n\t\tvar shrinkExpand = 0;\r\n\t\tvar currentExpand = 0;\r\n\r\n\t\tvar isLoading = 0;\r\n\t\tvar lowRuns = -1;\r\n\r\n\t\tvar resetPreloading = function(e){\r\n\t\t\tisLoading--;\r\n\t\t\tif(!e || isLoading < 0 || !e.target){\r\n\t\t\t\tisLoading = 0;\r\n\t\t\t}\r\n\t\t};\r\n\r\n\t\tvar isVisible = function (elem) {\r\n\t\t\tif (isBodyHidden == null) {\r\n\t\t\t\tisBodyHidden = getCSS(document.body, 'visibility') == 'hidden';\r\n\t\t\t}\r\n\r\n\t\t\treturn isBodyHidden || !(getCSS(elem.parentNode, 'visibility') == 'hidden' && getCSS(elem, 'visibility') == 'hidden');\r\n\t\t};\r\n\r\n\t\tvar isNestedVisible = function(elem, elemExpand){\r\n\t\t\tvar outerRect;\r\n\t\t\tvar parent = elem;\r\n\t\t\tvar visible = isVisible(elem);\r\n\r\n\t\t\teLtop -= elemExpand;\r\n\t\t\teLbottom += elemExpand;\r\n\t\t\teLleft -= elemExpand;\r\n\t\t\teLright += elemExpand;\r\n\r\n\t\t\twhile(visible && (parent = parent.offsetParent) && parent != document.body && parent != docElem){\r\n\t\t\t\tvisible = ((getCSS(parent, 'opacity') || 1) > 0);\r\n\r\n\t\t\t\tif(visible && getCSS(parent, 'overflow') != 'visible'){\r\n\t\t\t\t\touterRect = parent.getBoundingClientRect();\r\n\t\t\t\t\tvisible = eLright > outerRect.left &&\r\n\t\t\t\t\t\teLleft < outerRect.right &&\r\n\t\t\t\t\t\teLbottom > outerRect.top - 1 &&\r\n\t\t\t\t\t\teLtop < outerRect.bottom + 1\r\n\t\t\t\t\t;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\treturn visible;\r\n\t\t};\r\n\r\n\t\tvar checkElements = function() {\r\n\t\t\tvar eLlen, i, rect, autoLoadElem, loadedSomething, elemExpand, elemNegativeExpand, elemExpandVal,\r\n\t\t\t\tbeforeExpandVal, defaultExpand, preloadExpand, hFac;\r\n\t\t\tvar lazyloadElems = lazysizes.elements;\r\n\r\n\t\t\tif((loadMode = lazySizesCfg.loadMode) && isLoading < 8 && (eLlen = lazyloadElems.length)){\r\n\r\n\t\t\t\ti = 0;\r\n\r\n\t\t\t\tlowRuns++;\r\n\r\n\t\t\t\tfor(; i < eLlen; i++){\r\n\r\n\t\t\t\t\tif(!lazyloadElems[i] || lazyloadElems[i]._lazyRace){continue;}\r\n\r\n\t\t\t\t\tif(!supportScroll || (lazysizes.prematureUnveil && lazysizes.prematureUnveil(lazyloadElems[i]))){unveilElement(lazyloadElems[i]);continue;}\r\n\r\n\t\t\t\t\tif(!(elemExpandVal = lazyloadElems[i][_getAttribute]('data-expand')) || !(elemExpand = elemExpandVal * 1)){\r\n\t\t\t\t\t\telemExpand = currentExpand;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\tif (!defaultExpand) {\r\n\t\t\t\t\t\tdefaultExpand = (!lazySizesCfg.expand || lazySizesCfg.expand < 1) ?\r\n\t\t\t\t\t\t\tdocElem.clientHeight > 500 && docElem.clientWidth > 500 ? 500 : 370 :\r\n\t\t\t\t\t\t\tlazySizesCfg.expand;\r\n\r\n\t\t\t\t\t\tlazysizes._defEx = defaultExpand;\r\n\r\n\t\t\t\t\t\tpreloadExpand = defaultExpand * lazySizesCfg.expFactor;\r\n\t\t\t\t\t\thFac = lazySizesCfg.hFac;\r\n\t\t\t\t\t\tisBodyHidden = null;\r\n\r\n\t\t\t\t\t\tif(currentExpand < preloadExpand && isLoading < 1 && lowRuns > 2 && loadMode > 2 && !document.hidden){\r\n\t\t\t\t\t\t\tcurrentExpand = preloadExpand;\r\n\t\t\t\t\t\t\tlowRuns = 0;\r\n\t\t\t\t\t\t} else if(loadMode > 1 && lowRuns > 1 && isLoading < 6){\r\n\t\t\t\t\t\t\tcurrentExpand = defaultExpand;\r\n\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\tcurrentExpand = shrinkExpand;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\tif(beforeExpandVal !== elemExpand){\r\n\t\t\t\t\t\teLvW = innerWidth + (elemExpand * hFac);\r\n\t\t\t\t\t\telvH = innerHeight + elemExpand;\r\n\t\t\t\t\t\telemNegativeExpand = elemExpand * -1;\r\n\t\t\t\t\t\tbeforeExpandVal = elemExpand;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\trect = lazyloadElems[i].getBoundingClientRect();\r\n\r\n\t\t\t\t\tif ((eLbottom = rect.bottom) >= elemNegativeExpand &&\r\n\t\t\t\t\t\t(eLtop = rect.top) <= elvH &&\r\n\t\t\t\t\t\t(eLright = rect.right) >= elemNegativeExpand * hFac &&\r\n\t\t\t\t\t\t(eLleft = rect.left) <= eLvW &&\r\n\t\t\t\t\t\t(eLbottom || eLright || eLleft || eLtop) &&\r\n\t\t\t\t\t\t(lazySizesCfg.loadHidden || isVisible(lazyloadElems[i])) &&\r\n\t\t\t\t\t\t((isCompleted && isLoading < 3 && !elemExpandVal && (loadMode < 3 || lowRuns < 4)) || isNestedVisible(lazyloadElems[i], elemExpand))){\r\n\t\t\t\t\t\tunveilElement(lazyloadElems[i]);\r\n\t\t\t\t\t\tloadedSomething = true;\r\n\t\t\t\t\t\tif(isLoading > 9){break;}\r\n\t\t\t\t\t} else if(!loadedSomething && isCompleted && !autoLoadElem &&\r\n\t\t\t\t\t\tisLoading < 4 && lowRuns < 4 && loadMode > 2 &&\r\n\t\t\t\t\t\t(preloadElems[0] || lazySizesCfg.preloadAfterLoad) &&\r\n\t\t\t\t\t\t(preloadElems[0] || (!elemExpandVal && ((eLbottom || eLright || eLleft || eLtop) || lazyloadElems[i][_getAttribute](lazySizesCfg.sizesAttr) != 'auto')))){\r\n\t\t\t\t\t\tautoLoadElem = preloadElems[0] || lazyloadElems[i];\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\r\n\t\t\t\tif(autoLoadElem && !loadedSomething){\r\n\t\t\t\t\tunveilElement(autoLoadElem);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t};\r\n\r\n\t\tvar throttledCheckElements = throttle(checkElements);\r\n\r\n\t\tvar switchLoadingClass = function(e){\r\n\t\t\tvar elem = e.target;\r\n\r\n\t\t\tif (elem._lazyCache) {\r\n\t\t\t\tdelete elem._lazyCache;\r\n\t\t\t\treturn;\r\n\t\t\t}\r\n\r\n\t\t\tresetPreloading(e);\r\n\t\t\taddClass(elem, lazySizesCfg.loadedClass);\r\n\t\t\tremoveClass(elem, lazySizesCfg.loadingClass);\r\n\t\t\taddRemoveLoadEvents(elem, rafSwitchLoadingClass);\r\n\t\t\ttriggerEvent(elem, 'lazyloaded');\r\n\t\t};\r\n\t\tvar rafedSwitchLoadingClass = rAFIt(switchLoadingClass);\r\n\t\tvar rafSwitchLoadingClass = function(e){\r\n\t\t\trafedSwitchLoadingClass({target: e.target});\r\n\t\t};\r\n\r\n\t\tvar changeIframeSrc = function(elem, src){\r\n\t\t\tvar loadMode = elem.getAttribute('data-load-mode') || lazySizesCfg.iframeLoadMode;\r\n\r\n\t\t\t// loadMode can be also a string!\r\n\t\t\tif (loadMode == 0) {\r\n\t\t\t\telem.contentWindow.location.replace(src);\r\n\t\t\t} else if (loadMode == 1) {\r\n\t\t\t\telem.src = src;\r\n\t\t\t}\r\n\t\t};\r\n\r\n\t\tvar handleSources = function(source){\r\n\t\t\tvar customMedia;\r\n\r\n\t\t\tvar sourceSrcset = source[_getAttribute](lazySizesCfg.srcsetAttr);\r\n\r\n\t\t\tif( (customMedia = lazySizesCfg.customMedia[source[_getAttribute]('data-media') || source[_getAttribute]('media')]) ){\r\n\t\t\t\tsource.setAttribute('media', customMedia);\r\n\t\t\t}\r\n\r\n\t\t\tif(sourceSrcset){\r\n\t\t\t\tsource.setAttribute('srcset', sourceSrcset);\r\n\t\t\t}\r\n\t\t};\r\n\r\n\t\tvar lazyUnveil = rAFIt(function (elem, detail, isAuto, sizes, isImg){\r\n\t\t\tvar src, srcset, parent, isPicture, event, firesLoad;\r\n\r\n\t\t\tif(!(event = triggerEvent(elem, 'lazybeforeunveil', detail)).defaultPrevented){\r\n\r\n\t\t\t\tif(sizes){\r\n\t\t\t\t\tif(isAuto){\r\n\t\t\t\t\t\taddClass(elem, lazySizesCfg.autosizesClass);\r\n\t\t\t\t\t} else {\r\n\t\t\t\t\t\telem.setAttribute('sizes', sizes);\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\r\n\t\t\t\tsrcset = elem[_getAttribute](lazySizesCfg.srcsetAttr);\r\n\t\t\t\tsrc = elem[_getAttribute](lazySizesCfg.srcAttr);\r\n\r\n\t\t\t\tif(isImg) {\r\n\t\t\t\t\tparent = elem.parentNode;\r\n\t\t\t\t\tisPicture = parent && regPicture.test(parent.nodeName || '');\r\n\t\t\t\t}\r\n\r\n\t\t\t\tfiresLoad = detail.firesLoad || (('src' in elem) && (srcset || src || isPicture));\r\n\r\n\t\t\t\tevent = {target: elem};\r\n\r\n\t\t\t\taddClass(elem, lazySizesCfg.loadingClass);\r\n\r\n\t\t\t\tif(firesLoad){\r\n\t\t\t\t\tclearTimeout(resetPreloadingTimer);\r\n\t\t\t\t\tresetPreloadingTimer = setTimeout(resetPreloading, 2500);\r\n\t\t\t\t\taddRemoveLoadEvents(elem, rafSwitchLoadingClass, true);\r\n\t\t\t\t}\r\n\r\n\t\t\t\tif(isPicture){\r\n\t\t\t\t\tforEach.call(parent.getElementsByTagName('source'), handleSources);\r\n\t\t\t\t}\r\n\r\n\t\t\t\tif(srcset){\r\n\t\t\t\t\telem.setAttribute('srcset', srcset);\r\n\t\t\t\t} else if(src && !isPicture){\r\n\t\t\t\t\tif(regIframe.test(elem.nodeName)){\r\n\t\t\t\t\t\tchangeIframeSrc(elem, src);\r\n\t\t\t\t\t} else {\r\n\t\t\t\t\t\telem.src = src;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\r\n\t\t\t\tif(isImg && (srcset || isPicture)){\r\n\t\t\t\t\tupdatePolyfill(elem, {src: src});\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\tif(elem._lazyRace){\r\n\t\t\t\tdelete elem._lazyRace;\r\n\t\t\t}\r\n\t\t\tremoveClass(elem, lazySizesCfg.lazyClass);\r\n\r\n\t\t\trAF(function(){\r\n\t\t\t\t// Part of this can be removed as soon as this fix is older: https://bugs.chromium.org/p/chromium/issues/detail?id=7731 (2015)\r\n\t\t\t\tvar isLoaded = elem.complete && elem.naturalWidth > 1;\r\n\r\n\t\t\t\tif( !firesLoad || isLoaded){\r\n\t\t\t\t\tif (isLoaded) {\r\n\t\t\t\t\t\taddClass(elem, lazySizesCfg.fastLoadedClass);\r\n\t\t\t\t\t}\r\n\t\t\t\t\tswitchLoadingClass(event);\r\n\t\t\t\t\telem._lazyCache = true;\r\n\t\t\t\t\tsetTimeout(function(){\r\n\t\t\t\t\t\tif ('_lazyCache' in elem) {\r\n\t\t\t\t\t\t\tdelete elem._lazyCache;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}, 9);\r\n\t\t\t\t}\r\n\t\t\t\tif (elem.loading == 'lazy') {\r\n\t\t\t\t\tisLoading--;\r\n\t\t\t\t}\r\n\t\t\t}, true);\r\n\t\t});\r\n\r\n\t\t/**\r\n\t\t *\r\n\t\t * @param elem { Element }\r\n\t\t */\r\n\t\tvar unveilElement = function (elem){\r\n\t\t\tif (elem._lazyRace) {return;}\r\n\t\t\tvar detail;\r\n\r\n\t\t\tvar isImg = regImg.test(elem.nodeName);\r\n\r\n\t\t\t//allow using sizes=\"auto\", but don't use. it's invalid. Use data-sizes=\"auto\" or a valid value for sizes instead (i.e.: sizes=\"80vw\")\r\n\t\t\tvar sizes = isImg && (elem[_getAttribute](lazySizesCfg.sizesAttr) || elem[_getAttribute]('sizes'));\r\n\t\t\tvar isAuto = sizes == 'auto';\r\n\r\n\t\t\tif( (isAuto || !isCompleted) && isImg && (elem[_getAttribute]('src') || elem.srcset) && !elem.complete && !hasClass(elem, lazySizesCfg.errorClass) && hasClass(elem, lazySizesCfg.lazyClass)){return;}\r\n\r\n\t\t\tdetail = triggerEvent(elem, 'lazyunveilread').detail;\r\n\r\n\t\t\tif(isAuto){\r\n\t\t\t\t autoSizer.updateElem(elem, true, elem.offsetWidth);\r\n\t\t\t}\r\n\r\n\t\t\telem._lazyRace = true;\r\n\t\t\tisLoading++;\r\n\r\n\t\t\tlazyUnveil(elem, detail, isAuto, sizes, isImg);\r\n\t\t};\r\n\r\n\t\tvar afterScroll = debounce(function(){\r\n\t\t\tlazySizesCfg.loadMode = 3;\r\n\t\t\tthrottledCheckElements();\r\n\t\t});\r\n\r\n\t\tvar altLoadmodeScrollListner = function(){\r\n\t\t\tif(lazySizesCfg.loadMode == 3){\r\n\t\t\t\tlazySizesCfg.loadMode = 2;\r\n\t\t\t}\r\n\t\t\tafterScroll();\r\n\t\t};\r\n\r\n\t\tvar onload = function(){\r\n\t\t\tif(isCompleted){return;}\r\n\t\t\tif(Date.now() - started < 999){\r\n\t\t\t\tsetTimeout(onload, 999);\r\n\t\t\t\treturn;\r\n\t\t\t}\r\n\r\n\r\n\t\t\tisCompleted = true;\r\n\r\n\t\t\tlazySizesCfg.loadMode = 3;\r\n\r\n\t\t\tthrottledCheckElements();\r\n\r\n\t\t\taddEventListener('scroll', altLoadmodeScrollListner, true);\r\n\t\t};\r\n\r\n\t\treturn {\r\n\t\t\t_: function(){\r\n\t\t\t\tstarted = Date.now();\r\n\r\n\t\t\t\tlazysizes.elements = document.getElementsByClassName(lazySizesCfg.lazyClass);\r\n\t\t\t\tpreloadElems = document.getElementsByClassName(lazySizesCfg.lazyClass + ' ' + lazySizesCfg.preloadClass);\r\n\r\n\t\t\t\taddEventListener('scroll', throttledCheckElements, true);\r\n\r\n\t\t\t\taddEventListener('resize', throttledCheckElements, true);\r\n\r\n\t\t\t\taddEventListener('pageshow', function (e) {\r\n\t\t\t\t\tif (e.persisted) {\r\n\t\t\t\t\t\tvar loadingElements = document.querySelectorAll('.' + lazySizesCfg.loadingClass);\r\n\r\n\t\t\t\t\t\tif (loadingElements.length && loadingElements.forEach) {\r\n\t\t\t\t\t\t\trequestAnimationFrame(function () {\r\n\t\t\t\t\t\t\t\tloadingElements.forEach( function (img) {\r\n\t\t\t\t\t\t\t\t\tif (img.complete) {\r\n\t\t\t\t\t\t\t\t\t\tunveilElement(img);\r\n\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t});\r\n\t\t\t\t\t\t\t});\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t});\r\n\r\n\t\t\t\tif(window.MutationObserver){\r\n\t\t\t\t\tnew MutationObserver( throttledCheckElements ).observe( docElem, {childList: true, subtree: true, attributes: true} );\r\n\t\t\t\t} else {\r\n\t\t\t\t\tdocElem[_addEventListener]('DOMNodeInserted', throttledCheckElements, true);\r\n\t\t\t\t\tdocElem[_addEventListener]('DOMAttrModified', throttledCheckElements, true);\r\n\t\t\t\t\tsetInterval(throttledCheckElements, 999);\r\n\t\t\t\t}\r\n\r\n\t\t\t\taddEventListener('hashchange', throttledCheckElements, true);\r\n\r\n\t\t\t\t//, 'fullscreenchange'\r\n\t\t\t\t['focus', 'mouseover', 'click', 'load', 'transitionend', 'animationend'].forEach(function(name){\r\n\t\t\t\t\tdocument[_addEventListener](name, throttledCheckElements, true);\r\n\t\t\t\t});\r\n\r\n\t\t\t\tif((/d$|^c/.test(document.readyState))){\r\n\t\t\t\t\tonload();\r\n\t\t\t\t} else {\r\n\t\t\t\t\taddEventListener('load', onload);\r\n\t\t\t\t\tdocument[_addEventListener]('DOMContentLoaded', throttledCheckElements);\r\n\t\t\t\t\tsetTimeout(onload, 20000);\r\n\t\t\t\t}\r\n\r\n\t\t\t\tif(lazysizes.elements.length){\r\n\t\t\t\t\tcheckElements();\r\n\t\t\t\t\trAF._lsFlush();\r\n\t\t\t\t} else {\r\n\t\t\t\t\tthrottledCheckElements();\r\n\t\t\t\t}\r\n\t\t\t},\r\n\t\t\tcheckElems: throttledCheckElements,\r\n\t\t\tunveil: unveilElement,\r\n\t\t\t_aLSL: altLoadmodeScrollListner,\r\n\t\t};\r\n\t})();\r\n\r\n\r\n\tvar autoSizer = (function(){\r\n\t\tvar autosizesElems;\r\n\r\n\t\tvar sizeElement = rAFIt(function(elem, parent, event, width){\r\n\t\t\tvar sources, i, len;\r\n\t\t\telem._lazysizesWidth = width;\r\n\t\t\twidth += 'px';\r\n\r\n\t\t\telem.setAttribute('sizes', width);\r\n\r\n\t\t\tif(regPicture.test(parent.nodeName || '')){\r\n\t\t\t\tsources = parent.getElementsByTagName('source');\r\n\t\t\t\tfor(i = 0, len = sources.length; i < len; i++){\r\n\t\t\t\t\tsources[i].setAttribute('sizes', width);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\tif(!event.detail.dataAttr){\r\n\t\t\t\tupdatePolyfill(elem, event.detail);\r\n\t\t\t}\r\n\t\t});\r\n\t\t/**\r\n\t\t *\r\n\t\t * @param elem {Element}\r\n\t\t * @param dataAttr\r\n\t\t * @param [width] { number }\r\n\t\t */\r\n\t\tvar getSizeElement = function (elem, dataAttr, width){\r\n\t\t\tvar event;\r\n\t\t\tvar parent = elem.parentNode;\r\n\r\n\t\t\tif(parent){\r\n\t\t\t\twidth = getWidth(elem, parent, width);\r\n\t\t\t\tevent = triggerEvent(elem, 'lazybeforesizes', {width: width, dataAttr: !!dataAttr});\r\n\r\n\t\t\t\tif(!event.defaultPrevented){\r\n\t\t\t\t\twidth = event.detail.width;\r\n\r\n\t\t\t\t\tif(width && width !== elem._lazysizesWidth){\r\n\t\t\t\t\t\tsizeElement(elem, parent, event, width);\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t};\r\n\r\n\t\tvar updateElementsSizes = function(){\r\n\t\t\tvar i;\r\n\t\t\tvar len = autosizesElems.length;\r\n\t\t\tif(len){\r\n\t\t\t\ti = 0;\r\n\r\n\t\t\t\tfor(; i < len; i++){\r\n\t\t\t\t\tgetSizeElement(autosizesElems[i]);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t};\r\n\r\n\t\tvar debouncedUpdateElementsSizes = debounce(updateElementsSizes);\r\n\r\n\t\treturn {\r\n\t\t\t_: function(){\r\n\t\t\t\tautosizesElems = document.getElementsByClassName(lazySizesCfg.autosizesClass);\r\n\t\t\t\taddEventListener('resize', debouncedUpdateElementsSizes);\r\n\t\t\t},\r\n\t\t\tcheckElems: debouncedUpdateElementsSizes,\r\n\t\t\tupdateElem: getSizeElement\r\n\t\t};\r\n\t})();\r\n\r\n\tvar init = function(){\r\n\t\tif(!init.i && document.getElementsByClassName){\r\n\t\t\tinit.i = true;\r\n\t\t\tautoSizer._();\r\n\t\t\tloader._();\r\n\t\t}\r\n\t};\r\n\r\n\tsetTimeout(function(){\r\n\t\tif(lazySizesCfg.init){\r\n\t\t\tinit();\r\n\t\t}\r\n\t});\r\n\r\n\tlazysizes = {\r\n\t\t/**\r\n\t\t * @type { LazySizesConfigPartial }\r\n\t\t */\r\n\t\tcfg: lazySizesCfg,\r\n\t\tautoSizer: autoSizer,\r\n\t\tloader: loader,\r\n\t\tinit: init,\r\n\t\tuP: updatePolyfill,\r\n\t\taC: addClass,\r\n\t\trC: removeClass,\r\n\t\thC: hasClass,\r\n\t\tfire: triggerEvent,\r\n\t\tgW: getWidth,\r\n\t\trAF: rAF,\r\n\t};\r\n\r\n\treturn lazysizes;\r\n}\r\n));\r\n\n\n//# sourceURL=webpack://websitev2/./node_modules/lazysizes/lazysizes.js?");

/***/ }),

/***/ "./src/pages/index/index.scss":
/*!************************************!*\
  !*** ./src/pages/index/index.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./index.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/index/index.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://websitev2/./src/pages/index/index.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\r\n\r\nvar stylesInDOM = [];\r\n\r\nfunction getIndexByIdentifier(identifier) {\r\n  var result = -1;\r\n\r\n  for (var i = 0; i < stylesInDOM.length; i++) {\r\n    if (stylesInDOM[i].identifier === identifier) {\r\n      result = i;\r\n      break;\r\n    }\r\n  }\r\n\r\n  return result;\r\n}\r\n\r\nfunction modulesToDom(list, options) {\r\n  var idCountMap = {};\r\n  var identifiers = [];\r\n\r\n  for (var i = 0; i < list.length; i++) {\r\n    var item = list[i];\r\n    var id = options.base ? item[0] + options.base : item[0];\r\n    var count = idCountMap[id] || 0;\r\n    var identifier = \"\".concat(id, \" \").concat(count);\r\n    idCountMap[id] = count + 1;\r\n    var indexByIdentifier = getIndexByIdentifier(identifier);\r\n    var obj = {\r\n      css: item[1],\r\n      media: item[2],\r\n      sourceMap: item[3],\r\n      supports: item[4],\r\n      layer: item[5]\r\n    };\r\n\r\n    if (indexByIdentifier !== -1) {\r\n      stylesInDOM[indexByIdentifier].references++;\r\n      stylesInDOM[indexByIdentifier].updater(obj);\r\n    } else {\r\n      var updater = addElementStyle(obj, options);\r\n      options.byIndex = i;\r\n      stylesInDOM.splice(i, 0, {\r\n        identifier: identifier,\r\n        updater: updater,\r\n        references: 1\r\n      });\r\n    }\r\n\r\n    identifiers.push(identifier);\r\n  }\r\n\r\n  return identifiers;\r\n}\r\n\r\nfunction addElementStyle(obj, options) {\r\n  var api = options.domAPI(options);\r\n  api.update(obj);\r\n\r\n  var updater = function updater(newObj) {\r\n    if (newObj) {\r\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\r\n        return;\r\n      }\r\n\r\n      api.update(obj = newObj);\r\n    } else {\r\n      api.remove();\r\n    }\r\n  };\r\n\r\n  return updater;\r\n}\r\n\r\nmodule.exports = function (list, options) {\r\n  options = options || {};\r\n  list = list || [];\r\n  var lastIdentifiers = modulesToDom(list, options);\r\n  return function update(newList) {\r\n    newList = newList || [];\r\n\r\n    for (var i = 0; i < lastIdentifiers.length; i++) {\r\n      var identifier = lastIdentifiers[i];\r\n      var index = getIndexByIdentifier(identifier);\r\n      stylesInDOM[index].references--;\r\n    }\r\n\r\n    var newLastIdentifiers = modulesToDom(newList, options);\r\n\r\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\r\n      var _identifier = lastIdentifiers[_i];\r\n\r\n      var _index = getIndexByIdentifier(_identifier);\r\n\r\n      if (stylesInDOM[_index].references === 0) {\r\n        stylesInDOM[_index].updater();\r\n\r\n        stylesInDOM.splice(_index, 1);\r\n      }\r\n    }\r\n\r\n    lastIdentifiers = newLastIdentifiers;\r\n  };\r\n};\n\n//# sourceURL=webpack://websitev2/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\r\n\r\nvar memo = {};\r\n/* istanbul ignore next  */\r\n\r\nfunction getTarget(target) {\r\n  if (typeof memo[target] === \"undefined\") {\r\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\r\n\r\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\r\n      try {\r\n        // This will throw an exception if access to iframe is blocked\r\n        // due to cross-origin restrictions\r\n        styleTarget = styleTarget.contentDocument.head;\r\n      } catch (e) {\r\n        // istanbul ignore next\r\n        styleTarget = null;\r\n      }\r\n    }\r\n\r\n    memo[target] = styleTarget;\r\n  }\r\n\r\n  return memo[target];\r\n}\r\n/* istanbul ignore next  */\r\n\r\n\r\nfunction insertBySelector(insert, style) {\r\n  var target = getTarget(insert);\r\n\r\n  if (!target) {\r\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\r\n  }\r\n\r\n  target.appendChild(style);\r\n}\r\n\r\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://websitev2/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction insertStyleElement(options) {\r\n  var element = document.createElement(\"style\");\r\n  options.setAttributes(element, options.attributes);\r\n  options.insert(element, options.options);\r\n  return element;\r\n}\r\n\r\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://websitev2/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction setAttributesWithoutAttributes(styleElement) {\r\n  var nonce =  true ? __webpack_require__.nc : 0;\r\n\r\n  if (nonce) {\r\n    styleElement.setAttribute(\"nonce\", nonce);\r\n  }\r\n}\r\n\r\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://websitev2/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction apply(styleElement, options, obj) {\r\n  var css = \"\";\r\n\r\n  if (obj.supports) {\r\n    css += \"@supports (\".concat(obj.supports, \") {\");\r\n  }\r\n\r\n  if (obj.media) {\r\n    css += \"@media \".concat(obj.media, \" {\");\r\n  }\r\n\r\n  var needLayer = typeof obj.layer !== \"undefined\";\r\n\r\n  if (needLayer) {\r\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\r\n  }\r\n\r\n  css += obj.css;\r\n\r\n  if (needLayer) {\r\n    css += \"}\";\r\n  }\r\n\r\n  if (obj.media) {\r\n    css += \"}\";\r\n  }\r\n\r\n  if (obj.supports) {\r\n    css += \"}\";\r\n  }\r\n\r\n  var sourceMap = obj.sourceMap;\r\n\r\n  if (sourceMap && typeof btoa !== \"undefined\") {\r\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\r\n  } // For old IE\r\n\r\n  /* istanbul ignore if  */\r\n\r\n\r\n  options.styleTagTransform(css, styleElement, options.options);\r\n}\r\n\r\nfunction removeStyleElement(styleElement) {\r\n  // istanbul ignore if\r\n  if (styleElement.parentNode === null) {\r\n    return false;\r\n  }\r\n\r\n  styleElement.parentNode.removeChild(styleElement);\r\n}\r\n/* istanbul ignore next  */\r\n\r\n\r\nfunction domAPI(options) {\r\n  var styleElement = options.insertStyleElement(options);\r\n  return {\r\n    update: function update(obj) {\r\n      apply(styleElement, options, obj);\r\n    },\r\n    remove: function remove() {\r\n      removeStyleElement(styleElement);\r\n    }\r\n  };\r\n}\r\n\r\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://websitev2/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction styleTagTransform(css, styleElement) {\r\n  if (styleElement.styleSheet) {\r\n    styleElement.styleSheet.cssText = css;\r\n  } else {\r\n    while (styleElement.firstChild) {\r\n      styleElement.removeChild(styleElement.firstChild);\r\n    }\r\n\r\n    styleElement.appendChild(document.createTextNode(css));\r\n  }\r\n}\r\n\r\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://websitev2/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/assets/fonts/AERIAL.TTF":
/*!*************************************!*\
  !*** ./src/assets/fonts/AERIAL.TTF ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"51e9d442a369f87d2489.TTF\";\n\n//# sourceURL=webpack://websitev2/./src/assets/fonts/AERIAL.TTF?");

/***/ }),

/***/ "./src/assets/fonts/novasquare.ttf":
/*!*****************************************!*\
  !*** ./src/assets/fonts/novasquare.ttf ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"3a4e420dc7d2845e3691.ttf\";\n\n//# sourceURL=webpack://websitev2/./src/assets/fonts/novasquare.ttf?");

/***/ }),

/***/ "./src/assets/images/default/BG layer 1.png":
/*!**************************************************!*\
  !*** ./src/assets/images/default/BG layer 1.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"0148c120c867c5ba71b3.png\";\n\n//# sourceURL=webpack://websitev2/./src/assets/images/default/BG_layer_1.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/pages/index/index.js");
/******/ 	
/******/ })()
;