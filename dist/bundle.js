/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/widget.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/widget.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body, html {\r\n    margin: 0;\r\n    padding: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n.chat-window, .chat-window * {\r\n    font-family: Arial, sans-serif;\r\n    font-weight: normal;\r\n}\r\n\r\n.chat-widget-icon {\r\n    position: fixed;\r\n    bottom: 25px;\r\n    right: 25px;\r\n    color: white;\r\n    border-radius: 50%;\r\n    width: 85px;\r\n    height: 85px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    cursor: pointer;\r\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\r\n    font-size: 36px;\r\n    z-index: 999998 !important;\r\n    animation: pulse 2s infinite;\r\n    padding-bottom: 3px;\r\n}\r\n\r\n@keyframes pulse {\r\n    0% {\r\n        transform: scale(1);\r\n    }\r\n    50% {\r\n        transform: scale(1.1);\r\n    }\r\n    100% {\r\n        transform: scale(1);\r\n    }\r\n}\r\n\r\n.chat-title {\r\n    font-size: 18px;\r\n}\r\n\r\n.chat-window {\r\n    position: fixed;\r\n    bottom: 20px;\r\n    right: 20px;\r\n    width: 400px;\r\n    height: 550px;\r\n    background-color: transparent;\r\n    border: none;\r\n    border-radius: 16px;\r\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\r\n    display: flex !important;\r\n    flex-direction: column;\r\n    z-index: 10000000 !important;\r\n    opacity: 0;\r\n    transform: translateY(100%);\r\n    transition: opacity 0.5s ease, transform 0.5s ease;\r\n}\r\n\r\n.chat-window.show {\r\n    opacity: 1;\r\n    transform: translateY(0);\r\n}\r\n\r\n.hidden {\r\n    display: none;\r\n}\r\n\r\n.chat-header {\r\n    color: white;\r\n    padding: 15px;\r\n    border-radius: 16px 16px 0px 0px;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.chat-header-title {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.close-btn {\r\n    background: none;\r\n    border: none;\r\n    color: white;\r\n    cursor: pointer;\r\n    margin: 0;\r\n    padding: 0;\r\n    outline: none;\r\n}\r\n\r\n.close-chat-widget-icon {\r\n    font-size: 20px;\r\n}\r\n\r\n.chat-body {\r\n    flex: 1;\r\n    padding: 10px;\r\n    overflow-y: auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n    background-color: white;\r\n}\r\n\r\n.chat-footer {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 10px;\r\n    background-color: white;\r\n    gap: 10px;\r\n}\r\n\r\n.powered-by {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.powered-by-text {\r\n    font-size: 10px;\r\n    color: rgb(146, 146, 146);\r\n    cursor: pointer;\r\n    text-decoration: underline;\r\n}\r\n\r\n.input-send-container {\r\n    display: flex;\r\n    border-top: 1px solid #ccc;\r\n    padding-top: 10px;\r\n}\r\n\r\n.chat-footer input {\r\n    flex: 1;\r\n    padding: 7px;\r\n    border: 1px solid #ccc;\r\n    border-radius: 8px;\r\n    outline: none;\r\n    font-size: 16px;\r\n}\r\n\r\n.chat-footer button {\r\n    margin-left: 10px;\r\n    padding: 5px 10px;\r\n    color: white;\r\n    border: none;\r\n    border-radius: 8px;\r\n    cursor: pointer;\r\n}\r\n\r\n.chat-footer button:hover {\r\n    background-color: #0595d3;\r\n}\r\n\r\n.widget-message {\r\n    max-width: 80%;\r\n    margin: 5px 0;\r\n    padding: 5px;\r\n    border-radius: 10px;\r\n    display: inline-block;\r\n}\r\n\r\n.widget-user-message {\r\n    align-self: flex-end;\r\n    color: white;\r\n    border-radius: 8px;\r\n    padding: 8px;\r\n    font-size: 16px;\r\n}\r\n\r\n.widget-user-message > :first-child {\r\n    padding: 0px;\r\n    margin: 0px;\r\n}\r\n\r\n.widget-user-message > :last-child {\r\n    padding: 0px;\r\n    margin: 0px;\r\n}\r\n\r\n.widget-bot-message {\r\n    align-self: flex-start;\r\n    background-color: #ffffff;\r\n    color: rgb(64, 64, 64);\r\n    border-radius: 8px;\r\n    font-size: 16px;\r\n}\r\n\r\n.widget-bot-message > :first-child {\r\n    padding: 0px;\r\n    margin: 0px;\r\n}\r\n\r\n.widget-bot-message > :last-child {\r\n    padding: 0px;\r\n    margin: 0px;\r\n}\r\n\r\n.widget-send-icon {\r\n    font-size: 16px;\r\n    font-style: normal;\r\n}\r\n\r\n/* Loading dots */\r\n.loading-dots {\r\n    display: flex;\r\n    justify-content: left;\r\n    align-items: center;\r\n    height: 40px;\r\n    margin-top: 10px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.loading-dots div {\r\n    width: 8px;\r\n    height: 8px;\r\n    margin: 0 4px;\r\n    border-radius: 50%;\r\n    animation: loading 0.6s infinite alternate;\r\n}\r\n\r\n@keyframes loading {\r\nto {\r\n    opacity: 0.3;\r\n    transform: translateY(-8px);\r\n}\r\n}\r\n\r\n.loading-dots div:nth-child(2) {\r\n    animation-delay: 0.2s;\r\n}\r\n\r\n.loading-dots div:nth-child(3) {\r\n    animation-delay: 0.4s;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    .chat-overlay {\r\n        position: fixed;\r\n        top: 0;\r\n        left: 0;\r\n        width: 100%;\r\n        height: 100%;\r\n        background-color: rgba(0, 0, 0, 0.65);\r\n        z-index: 999999;\r\n    }\r\n\r\n    .chat-window {\r\n        position: fixed;\r\n        left: 4%;\r\n        bottom: 1%;\r\n        width: 92%;\r\n        height: 90%;\r\n        border-radius: 16px;\r\n    }\r\n\r\n    body.no-scroll {\r\n        overflow: hidden;\r\n    }\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://swiss_bot_widget/./src/widget.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://swiss_bot_widget/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://swiss_bot_widget/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/widget.css":
/*!************************!*\
  !*** ./src/widget.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_widget_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./widget.css */ \"./node_modules/css-loader/dist/cjs.js!./src/widget.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_widget_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_widget_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_widget_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_widget_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://swiss_bot_widget/./src/widget.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://swiss_bot_widget/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://swiss_bot_widget/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://swiss_bot_widget/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://swiss_bot_widget/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://swiss_bot_widget/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://swiss_bot_widget/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _widget_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widget.css */ \"./src/widget.css\");\n\r\n\r\nfunction getBrowserLanguage() {\r\n    return navigator.language || navigator.userLanguage || 'en';\r\n}\r\n\r\nfunction initializeChatWidget() {\r\n    const container = document.getElementById('chat-widget-container');\r\n    if (!container) {\r\n        console.error('Chat widget container not found');\r\n        return;\r\n    }\r\n\r\n    const botId = container.getAttribute('data-user-id');\r\n    const themeColor = container.getAttribute('data-theme-color') || '#0082ba';\r\n    const hoverColor = container.getAttribute('data-hover-color') || '#0595d3';\r\n    if (!botId) {\r\n        console.error('User ID not found');\r\n        return;\r\n    }\r\n\r\n    const browserLanguage = getBrowserLanguage();\r\n    console.log(browserLanguage)\r\n\r\n    const chatWidgetIcon = document.createElement('div');\r\n    chatWidgetIcon.className = 'chat-widget-icon';\r\n    chatWidgetIcon.innerHTML = `<img src=\"https://robert-kloepsch.github.io/swiss_bot_widget/dist/cloud.png\" style=\"height: 92px; width: 125px; margin-top: 8px; max-width: 200%;\">`;\r\n\r\n    const chatOverlay = document.createElement('div');\r\n    chatOverlay.className = 'chat-overlay hidden';\r\n\r\n    const chatWindow = document.createElement('div');\r\n    chatWindow.className = 'chat-window hidden';\r\n\r\n    chatWindow.innerHTML = `\r\n        <div class=\"chat-header\">\r\n            <div class=\"chat-header-title\">\r\n                <span class=\"chat-title\">Chat with us!</span>\r\n                <button class=\"close-btn close-chat-widget-icon\">X</button>\r\n            </div>\r\n        </div>\r\n        <div class=\"chat-body\"></div>\r\n        <div class=\"chat-footer\">\r\n            <div class=\"powered-by\">\r\n                <span class=\"powered-by-text\" onclick=\"window.open('http://swiss-bot.com/', '_blank')\">Powered by Swiss AI Chatbot Factory</span>\r\n            </div>\r\n            <div class=\"input-send-container\">\r\n                <input type=\"text\" class=\"chat-input\" placeholder=\"Type your message...\">\r\n                <button class=\"send-message\"><i class=\"widget-send-icon\">Send</i></button>\r\n            </div>\r\n        </div>\r\n    `;\r\n\r\n    // Inject dynamic styles\r\n    const style = document.createElement('style');\r\n    style.innerHTML = `\r\n        .chat-widget-icon {\r\n            background-color: ${themeColor};\r\n        }\r\n\r\n        .chat-header {\r\n            background-color: ${themeColor};\r\n        }\r\n\r\n        .chat-footer button {\r\n            background-color: ${themeColor};\r\n        }\r\n\r\n        .widget-user-message {\r\n            background-color: ${themeColor};\r\n        }\r\n\r\n        .loading-dots div {\r\n            background-color: ${themeColor};\r\n        }\r\n\r\n        .chat-footer button:hover {\r\n            background-color: ${hoverColor};\r\n        }\r\n    `;\r\n    document.head.appendChild(style);\r\n\r\n    container.appendChild(chatWidgetIcon);\r\n    container.appendChild(chatOverlay);\r\n    container.appendChild(chatWindow);\r\n\r\n    const closeChatBtn = chatWindow.querySelector('.close-btn');\r\n    const chatBody = chatWindow.querySelector('.chat-body');\r\n    const chatInput = chatWindow.querySelector('.chat-footer input');\r\n    const sendMessageBtn = chatWindow.querySelector('.send-message');\r\n    let sessionId = generateSessionId();\r\n    let currentBotMessage = '';\r\n\r\n    chatWidgetIcon.addEventListener('click', function () {\r\n        chatWindow.classList.remove('hidden');\r\n        forceReflow(chatWindow);\r\n        chatWindow.classList.add('show');\r\n        chatOverlay.classList.remove('hidden');\r\n        document.body.classList.add('no-scroll');\r\n        if (chatBody.childElementCount === 0) {\r\n            fetchWelcomeMessage();\r\n        }\r\n    });\r\n\r\n    closeChatBtn.addEventListener('click', function () {\r\n        chatWindow.classList.remove('show');\r\n        chatOverlay.classList.add('hidden');\r\n        document.body.classList.remove('no-scroll');\r\n        setTimeout(() => chatWindow.classList.add('hidden'), 500);\r\n    });\r\n\r\n    chatOverlay.addEventListener('click', function () {\r\n        chatWindow.classList.remove('show');\r\n        chatOverlay.classList.add('hidden');\r\n        document.body.classList.remove('no-scroll');\r\n        setTimeout(() => chatWindow.classList.add('hidden'), 500);\r\n    });\r\n\r\n    sendMessageBtn.addEventListener('click', function () {\r\n        sendMessage();\r\n    });\r\n\r\n    chatInput.addEventListener('keypress', function (e) {\r\n        if (e.key === 'Enter') {\r\n            sendMessage();\r\n        }\r\n    });\r\n\r\n    function forceReflow(element) {\r\n        element.offsetHeight;\r\n    }\r\n\r\n    function generateSessionId() {\r\n        const timestamp = new Date().getTime();\r\n        const randomNum = Math.floor(Math.random() * 10000) + 1;\r\n        return `${timestamp}-${randomNum}`;\r\n    }\r\n\r\n    async function fetchWelcomeMessage() {\r\n        try {\r\n            const response = await fetch(`https://chat.swiss-bot.com/api/widget_configuration/${botId}`);\r\n            const data = await response.json();\r\n            const welcomeMessage = data.welcome_message || \"Welcome to your virtual assistant! 😊 How can I assist you today?\";\r\n            appendMessage(welcomeMessage, 'bot');\r\n        } catch (error) {\r\n            console.error('Error fetching welcome message:', error);\r\n            appendMessage(\"Failed to load welcome message from server.\", 'bot');\r\n        }\r\n    }\r\n\r\n    async function sendMessage() {\r\n        const message = chatInput.value.trim();\r\n        if (message) {\r\n            appendMessage(message, 'user');\r\n            chatInput.value = '';\r\n            setLoading(true);\r\n            let currentBotMessage = '';\r\n\r\n            const maxRetries = 3;\r\n            let retryCount = 0;\r\n\r\n            const attemptConnection = () => {\r\n                return new Promise((resolve, reject) => {\r\n                    const eventSource = new EventSource(`https://chat.swiss-bot.com/api/chatbot_response?user_input=${encodeURIComponent(message)}&session_id=${sessionId}&bot_id=${botId}&language=english`);\r\n\r\n                    let isFirstMessage = true;\r\n                    let timeoutId;\r\n\r\n                    eventSource.onmessage = (event) => {\r\n                        const chunk = event.data;\r\n                        if (chunk !== 'end of response') {\r\n                            if (isFirstMessage) {\r\n                                setLoading(false);\r\n                                isFirstMessage = false;\r\n                                clearTimeout(timeoutId);\r\n                            }\r\n                            const parsedChunk = chunk.replace(/<newline>/g, '\\n');\r\n                            currentBotMessage += parsedChunk;\r\n                            updateBotMessage(currentBotMessage);\r\n                            scrollToBottom();\r\n                        }\r\n                    };\r\n\r\n                    eventSource.onerror = (error) => {\r\n                        console.error('Error fetching response:', error);\r\n                        if (isFirstMessage) {\r\n                            reject(new Error('Failed to get response from server.'));\r\n                        }\r\n                        eventSource.close();\r\n                    };\r\n\r\n                    eventSource.addEventListener('end', () => {\r\n                        updateBotMessage(currentBotMessage);\r\n                        eventSource.close();\r\n                        setLoading(false);\r\n                        scrollToBottom();\r\n                        resolve();\r\n                    });\r\n\r\n                    timeoutId = setTimeout(() => {\r\n                        if (isFirstMessage) {\r\n                            eventSource.close();\r\n                            reject(new Error('No response received from server.'));\r\n                        }\r\n                    }, 8000);\r\n                });\r\n            };\r\n\r\n            const retryConnection = async () => {\r\n                while (retryCount < maxRetries) {\r\n                    try {\r\n                        await attemptConnection();\r\n                        return;\r\n                    } catch (error) {\r\n                        retryCount++;\r\n                        console.log(`Attempt ${retryCount} failed. Retrying...`);\r\n                        if (retryCount >= maxRetries) {\r\n                            setLoading(false);\r\n                            appendMessage(`Failed to get response after ${maxRetries} attempts.`, 'bot');\r\n                            throw error;\r\n                        }\r\n                    }\r\n                }\r\n            };\r\n\r\n            try {\r\n                await retryConnection();\r\n            } catch (error) {\r\n                console.error('Error fetching response:', error);\r\n                setLoading(false);\r\n            }\r\n        }\r\n    }\r\n\r\n    function updateBotMessage(text) {\r\n        const lastMessage = chatBody.lastElementChild;\r\n        if (lastMessage && lastMessage.classList.contains('widget-bot-message')) {\r\n            lastMessage.innerHTML = marked.parse(text);\r\n        } else {\r\n            appendMessage(text, 'bot');\r\n        }\r\n    }\r\n\r\n    function appendMessage(text, sender) {\r\n        const messageElement = document.createElement('div');\r\n        messageElement.className = `widget-message widget-${sender}-message`;\r\n\r\n        // Render Markdown for bot messages\r\n        if (sender === 'bot') {\r\n            messageElement.innerHTML = marked.parse(text);\r\n        } else {\r\n            messageElement.textContent = text;\r\n        }\r\n\r\n        chatBody.appendChild(messageElement);\r\n        scrollToBottom();\r\n    }\r\n\r\n    function scrollToBottom() {\r\n        chatBody.scrollTop = chatBody.scrollHeight;\r\n    }\r\n\r\n    function setLoading(isLoading) {\r\n        if (isLoading) {\r\n            const loadingDots = document.createElement('div');\r\n            loadingDots.className = 'loading-dots';\r\n            loadingDots.innerHTML = '<div></div><div></div><div></div>';\r\n            chatBody.appendChild(loadingDots);\r\n            scrollToBottom();\r\n        } else {\r\n            const loadingDots = document.querySelector('.loading-dots');\r\n            if (loadingDots) {\r\n                loadingDots.remove();\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\ninitializeChatWidget();\r\n\n\n//# sourceURL=webpack://swiss_bot_widget/./src/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;