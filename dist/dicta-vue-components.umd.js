(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["dicta-vue-components"] = factory();
	else
		root["dicta-vue-components"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0e63":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "203a":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "2439":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "37f3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_commonHeader_vue_vue_type_style_index_0_id_9358baf8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("501f");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_commonHeader_vue_vue_type_style_index_0_id_9358baf8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_commonHeader_vue_vue_type_style_index_0_id_9358baf8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_commonHeader_vue_vue_type_style_index_0_id_9358baf8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "3a54":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "501f":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "79db":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a574":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "afcf":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAABnBJREFUaAXdWl1IVkkYHs0KS6K/i6RCajUFMb3ZVrxYFFuXNahFoVjRi7pZiKSrJKGb8KaLJYhIpAyqq6h2oxt1JfAnMCELNwgWWzeN8IfISi3NfmafZ/LMnp855/s+v/NZ+MDrmXnnnfd93nNm5syZzyQRLtbD3XZIFuR7SAkkA0IMQzog3ZB/IIOQCUgoSArBSyZ8lEN+hORD0iHJkCB8QuMo5C/In5AWCJP7ItiNqDcgkxAZp9AHfdHnoqEIkVoh8ZL360/fjJEwpMHzb5BZiB+JsPSMwViMGSry4K0HEhbRaP0wJmOHgh/gZQwSbfCw7RibHOJCBXqHMZnjTY4cyGVB4AoyBYmXRFj9ySXmVS0Xnca/oiSsm0FO5BYVuFL0QqzOX9uV3KJazbjsfW3k3XzIMRDfoXUx3hNuYrHWyZFcNex7Le6P+FYt063zhbS0NLFp0yaH+t27d2JmZka8fPlSfPz40dFmqmzZskXk5+eL5ORkwb49PT1ienraZKp0mzdvFgUFBcp+YmJC3L17V3z6xC2aRjtKP0EcSraWQsjIc3cuXLgg37x545DXr1/L8fFx+eDBA3n+/HlZWlrq6Wf3deLECWnHrVu35PLly337NDU1aXMkLrOysty25ErOHvwBjdtY1dvb27XToMK1a9cknpzRx9atW+WTJ08c3Y8fP260JY8rV65o2w8fPsidO3eabMnZgW9Q831nXL9+XTuNVLhz545cs2aNKajcs2ePfP/+vXbBp1xUVGS0vXz5srZjn7y8PJMdOZO7Ri1KJkOly8jIkOXl5Q45cOCAPHXqlBweHtYBrUJ9fb2vr9OnT1tm6vrw4UO5du1aj32UibAfuWvww8bjLBodJrG8d++eg9zAwIBctWqV0R/1fGp2cD64Y9mHVsATYT9yV1iPvyMQj7NodSUlJZLj2AIDY8Ux+mMinEt2YNWT+/fvd9jfvHlTm8zOzsodO3Y42m3cyJ05iG8hxtUKer/ODv3q1avl0NCQDszC3r17HTb0xbnT2trqsLMqIyMjctu2bapPSkqKfPTokdUkx8bG5IYNGzz+5vmRO3MQv8wr/Awj6pOSkmRfX58OzEJNTY2n37lz5xw27kpLS4vEe0YePHhQ8ilZaGtrk4wRwJM5iKYAg6DOjrbe3l4rrroeOnTI0Z6bmys5RCxMTU3J2tpa+ezZM0ulriTN1cyOiooKhy8DX+Yg/jY0ROroaY+USF1dnZ2bPHnypPJRXV3t0Lsrzc3N6ilF4MgcxEwEIw9pk32kRK5evao5Ymsjc3JytN9Lly7pNqvw9u1beebMGbly5UptZ4o7r5uJdP4Eu3CQns7jrs8YHR0VT58+tari2LFj4vHjx7rOQkdHhzh69KjalzkafCpMhCeACUdqaqqOMTk5Kebm5nT9+fPn4vDhww4d9m5i37592iZCYZiJdEYwiqrZtTP13EmsOtoPd8sYQrrOwu3btwXe+lqHISXOnj0ruGuOAp0pMOqC/OpnjDVdVFVVCWz6jCYkRJLugJWVlWLjxo0Cb2i11Td2dikbGhpEcXGxKCwsVC2MyWToy32jXF2ZQ/ALEWPbsxxaEzKaa1lZmZqs9m3M/fv35bJly4yTmDsCfiLYceTIEaMtuFOvXogcWoMQftQbgYCeYWA09FHyiRIrVqzQFhw2fujv7xf4dnE0c8hh9+vQ2SrkPsgoPNrvh/y/rKBi4dWrV6Krq0tkZmZaqqivWEIFvkGU/cWLFwX2ZKrc3d0d+FXZ2Ngo+FW6a9cuZc85hb2cX1xyZw4Kgdt4WAQ92i/dprbx1lLCjxNmZjxm4bdzdna2yjiWPy9evBCdnZ1BdzMWdyZbfvQXQDg9NH5HyXN3+Ynqnnz2iRipjBXH49MUZ4E6clb4PBM/lxtx+RnCBUCDJx2cgAGTTdu6C5xf2BS61WHVeXpCzgrW0GKFCRiPg7jirFu3TnWI5Q+Pi/gWTxB8j4MYj4des5BEDocwfJMjuQZiSRyZMkOuXEviEJvJLImfFZgIsRvie2iHtjDGeiw+FvRDDxMh+HMXl51YAibClhzIJS4siR9DrTuQh0IPJBF3O8gnYzJ2qOBqxqV5Md4zjMFYjJkw8N8ruAMIupPxtNE3YywauKrdgISxGNAHfdHngmDfay3IATplQr74vzmFkYj9BqxHZTsk0j+e8RDrX4j+skM5LvwHoxnAmX7roScAAAAASUVORK5CYII="

/***/ }),

/***/ "b5ca":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkbox_vue_vue_type_style_index_0_id_5dce0433_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("79db");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkbox_vue_vue_type_style_index_0_id_5dce0433_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkbox_vue_vue_type_style_index_0_id_5dce0433_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkbox_vue_vue_type_style_index_0_id_5dce0433_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "c35f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_commonFooter_vue_vue_type_style_index_0_id_5c3e5b96_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3a54");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_commonFooter_vue_vue_type_style_index_0_id_5c3e5b96_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_commonFooter_vue_vue_type_style_index_0_id_5c3e5b96_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_commonFooter_vue_vue_type_style_index_0_id_5c3e5b96_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "eac2":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"22550d4c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/commonHeader.vue?vue&type=template&id=9358baf8&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"dir":_vm.computedHebrew ? 'rtl' : 'ltr'}},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"top-bar"},[_c('span',{staticClass:"top-bar-left"},[_c('a',{attrs:{"href":"http://dicta.org.il/index.html"}},[_c('span',{staticClass:"dicta"},[_vm._v("DICTA")]),_vm._v("\n         \n        "),_c('span',{staticClass:"dicta-tagline"},[_vm._v("\n          "+_vm._s(_vm.computedHebrew ?
          'כלים דיגיטליים לעיבוד טקסטים בעברית' :
          'Analytical tools for Hebrew texts')+"\n        ")])])]),_c('span',{staticClass:"top-bar-right"},[_vm._t("endContent"),(_vm.hebrewSupported && _vm.englishSupported)?_c('span',[_c('a',{attrs:{"href":"#"},on:{"click":_vm.changeLanguage}},[_vm._v(_vm._s(_vm.computedHebrew ? 'English' : 'עברית'))]),_vm._v("\n        |\n      ")]):_vm._e(),_c('a',{attrs:{"href":"#"},on:{"click":_vm.toggleDropDown,"keyup":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"esc",27,$event.key,["Esc","Escape"])){ return null; }return _vm.toggleDropDown($event)}}},[_vm._v("\n        "+_vm._s(_vm.computedHebrew ? 'הכלים של DICTA' : 'DICTA Tools')+"  "),_c('i',{staticClass:"fas fa-caret-down"})])],2)])]),_c('div',[(_vm.menuOpen)?_c('div',{staticClass:"popup"},[_c('div',{staticClass:"popup-back",on:{"click":_vm.toggleDropDown}}),_c('div',{staticClass:"tool-bar",on:{"keyup":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"esc",27,$event.key,["Esc","Escape"])){ return null; }return _vm.toggleDropDown($event)}}},[_c('ul',{staticClass:"tool-list"},_vm._l((_vm.tools),function(tool){return _c('li',{key:tool.logo,staticClass:"tool"},[_c('a',{staticClass:"tool-link",attrs:{"href":tool.href,"target":"_blank"}},[_c('img',{staticClass:"logo",attrs:{"alt":"logo","src":tool.logo}}),_c('div',{staticClass:"description"},[_c('div',{staticClass:"title"},[_vm._v(_vm._s(_vm.computedHebrew ? tool.hebTitle : tool.engTitle))]),_c('div',{staticClass:"subtitle"},[_vm._v(_vm._s(_vm.computedHebrew ? tool.hebSubtitle : tool.engSubtitle))])])])])}),0)])]):_vm._e()])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/commonHeader.vue?vue&type=template&id=9358baf8&scoped=true&

// CONCATENATED MODULE: ./src/components/toolList.js
var tools = [{
  href: 'http://nakdan.dicta.org.il/',
  logo: __webpack_require__("2439"),
  engTitle: 'Nakdan',
  engSubtitle: 'Add nikud to Modern / Rabbinic / Poetry text',
  hebTitle: 'נקדן אוטומטי',
  hebSubtitle: 'ניקוד טקסט מודרני / רבני / שירה'
}, {
  href: 'http://classify.dicta.org.il',
  logo: __webpack_require__("a574"),
  engTitle: 'Bible Classification',
  engSubtitle: 'Categorization, based on key styles markers',
  hebTitle: 'סיווג טקסטים',
  hebSubtitle: 'השוואת טקסטים בהתבסס על מאפיינים סיגונוניים'
}, {
  href: 'http://synoptic.dicta.org.il/',
  logo: __webpack_require__("203a"),
  engTitle: 'Synopsis Builder',
  engSubtitle: 'Aligns versions of the same text',
  hebTitle: 'השוואת גרסאות',
  hebSubtitle: 'השוואה בין גרסאות של אותו טקסט'
}, {
  href: 'http://search.dicta.org.il/',
  logo: __webpack_require__("0e63"),
  engTitle: 'Search the Bible',
  engSubtitle: 'Easily search in the Bible',
  hebTitle: 'חיפוש בתנ״ך',
  hebSubtitle: 'מנוע חיפוש אינטואיטיבי לתנ״ך'
}, {
  href: 'http://pasuk.dicta.org.il/',
  logo: __webpack_require__("afcf"),
  engTitle: 'Pasuk Finder',
  engSubtitle: 'Find biblical references in texts',
  hebTitle: 'איזכורים תנ״כיים',
  hebSubtitle: 'איתור איזכורים תנ״כיים בכל טקסט נתון'
}];
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/commonHeader.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var commonHeadervue_type_script_lang_js_ = ({
  name: 'dicta-header',
  props: {
    hebrew: {
      default: false
    },
    hebrewSupported: {
      default: true
    },
    englishSupported: {
      default: true
    }
  },
  data: function data() {
    return {
      menuOpen: false,
      tools: tools
    };
  },
  computed: {
    computedHebrew: function computedHebrew() {
      if (!this.englishSupported) {
        return true;
      }

      if (!this.hebrewSupported) {
        return false;
      }

      return this.hebrew;
    }
  },
  methods: {
    changeLanguage: function changeLanguage() {
      // this.hebrew = !this.hebrew
      this.$emit('lang-changed', this.hebrew ? 'en' : 'he');
    },
    toggleDropDown: function toggleDropDown() {
      this.menuOpen = !this.menuOpen;
    }
  }
});
// CONCATENATED MODULE: ./src/components/commonHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_commonHeadervue_type_script_lang_js_ = (commonHeadervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/commonHeader.vue?vue&type=style&index=0&id=9358baf8&scoped=true&lang=css&
var commonHeadervue_type_style_index_0_id_9358baf8_scoped_true_lang_css_ = __webpack_require__("37f3");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/commonHeader.vue






/* normalize component */

var component = normalizeComponent(
  components_commonHeadervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "9358baf8",
  null
  
)

component.options.__file = "commonHeader.vue"
/* harmony default export */ var commonHeader = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"22550d4c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/commonFooter.vue?vue&type=template&id=5c3e5b96&scoped=true&
var commonFootervue_type_template_id_5c3e5b96_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"footer",class:{he: _vm.hebrew},attrs:{"dir":_vm.hebrew ? 'rtl' : 'ltr'}},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"footer-content"},[(_vm.hebrew)?_c('a',{staticClass:"footer-item",attrs:{"href":"http://dicta.org.il/aboutus-he.html","target":"_blank"}},[_vm._v("אודות")]):_c('a',{staticClass:"footer-item",attrs:{"href":"http://dicta.org.il/aboutus-en.html","target":"_blank"}},[_vm._v("About")]),_c('a',{directives:[{name:"b-modal",rawName:"v-b-modal.contact-us",modifiers:{"contact-us":true}}],staticClass:"footer-item",attrs:{"href":"#contactus"}},[_vm._v(_vm._s(_vm.hebrew ? 'צור קשר' : 'Contact Us'))]),_c('contact-us',{attrs:{"hebrew":_vm.hebrew}}),_c('a',{staticClass:"footer-item",attrs:{"href":"http://dicta.org.il/tos.html","target":"_blank"}},[_vm._v(_vm._s(_vm.hebrew ? 'תנאים ושרותים' : 'Terms of service'))]),_vm._m(0),_vm._m(1),_vm._m(2)],1)])])}
var commonFootervue_type_template_id_5c3e5b96_scoped_true_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{staticClass:"footer-item footer-icon",attrs:{"href":"https://www.facebook.com/dictatools","target":"_blank"}},[_c('i',{staticClass:"social-icon fab fa-facebook-f"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{staticClass:"footer-item footer-icon",attrs:{"href":"https://twitter.com/DictaTools?lang=he","target":"_blank"}},[_c('i',{staticClass:"social-icon fab fa-twitter"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{staticClass:"footer-item footer-icon",attrs:{"href":"https://www.youtube.com/channel/UC4ickfqPHtDMAKIGvMBMQyw","target":"_blank"}},[_c('i',{staticClass:"social-icon fab fa-youtube"})])}]


// CONCATENATED MODULE: ./src/components/commonFooter.vue?vue&type=template&id=5c3e5b96&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"22550d4c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/contactUs.vue?vue&type=template&id=544658e7&scoped=true&
var contactUsvue_type_template_id_544658e7_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('b-modal',{ref:"contact-modal",attrs:{"id":"contact-us","ok-title":_vm.hebrew ? 'שלח' : 'Send',"cancel-title":_vm.hebrew ? 'ביטול' : 'Cancel'},on:{"ok":_vm.submit}},[_c('template',{slot:"modal-header"},[_c('div',[_c('i-envelope'),_vm._v(" "+_vm._s(_vm.hebrew ? 'צור קשר' : 'Contact Us'))],1)]),_c('form',{ref:"contact-form",staticClass:"form",attrs:{"id":"contact-form","action":"https://localhost/formspree.io/dicta@dicta.org.il","method":"POST"}},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-12"},[_c('b-form-group',{attrs:{"label":_vm.hebrew ? 'שם' : 'Name',"label-for":"name"}},[_c('b-form-input',{attrs:{"required":"","name":"name"}})],1)],1)]),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-12"},[_c('b-form-group',{attrs:{"label":_vm.hebrew ? 'דואר אלקטרוני' : 'Email',"label-for":"_replyto"}},[_c('b-form-input',{attrs:{"required":"","name":"_replyto","type":"email"}})],1)],1)]),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-12"},[_c('b-form-group',{attrs:{"label":_vm.hebrew ? 'תואר' : 'Description',"label-for":"message"}},[_c('b-textarea',{attrs:{"name":"message","required":""}})],1)],1)])])],2)}
var contactUsvue_type_template_id_544658e7_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/contactUs.vue?vue&type=template&id=544658e7&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/contactUs.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var contactUsvue_type_script_lang_js_ = ({
  name: 'contactUs',
  props: ['hebrew'],
  data: function data() {
    return {};
  },
  methods: {
    submit: function submit(bvModalEvt) {
      var _this = this;

      bvModalEvt.preventDefault();

      if (this.$refs['contact-form'].checkValidity()) {
        this.$refs['contact-form'].submit();
        this.$nextTick(function () {
          _this.$refs['contact-modal'].hide();
        });
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/contactUs.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_contactUsvue_type_script_lang_js_ = (contactUsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/contactUs.vue





/* normalize component */

var contactUs_component = normalizeComponent(
  components_contactUsvue_type_script_lang_js_,
  contactUsvue_type_template_id_544658e7_scoped_true_render,
  contactUsvue_type_template_id_544658e7_scoped_true_staticRenderFns,
  false,
  null,
  "544658e7",
  null
  
)

contactUs_component.options.__file = "contactUs.vue"
/* harmony default export */ var contactUs = (contactUs_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/commonFooter.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var commonFootervue_type_script_lang_js_ = ({
  name: 'dicta-footer',
  components: {
    ContactUs: contactUs
  },
  props: ['hebrew'],
  data: function data() {
    return {};
  }
});
// CONCATENATED MODULE: ./src/components/commonFooter.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_commonFootervue_type_script_lang_js_ = (commonFootervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/commonFooter.vue?vue&type=style&index=0&id=5c3e5b96&scoped=true&lang=css&
var commonFootervue_type_style_index_0_id_5c3e5b96_scoped_true_lang_css_ = __webpack_require__("c35f");

// CONCATENATED MODULE: ./src/components/commonFooter.vue






/* normalize component */

var commonFooter_component = normalizeComponent(
  components_commonFootervue_type_script_lang_js_,
  commonFootervue_type_template_id_5c3e5b96_scoped_true_render,
  commonFootervue_type_template_id_5c3e5b96_scoped_true_staticRenderFns,
  false,
  null,
  "5c3e5b96",
  null
  
)

commonFooter_component.options.__file = "commonFooter.vue"
/* harmony default export */ var commonFooter = (commonFooter_component.exports);
// EXTERNAL MODULE: ./src/css/custom.scss
var custom = __webpack_require__("eac2");
var custom_default = /*#__PURE__*/__webpack_require__.n(custom);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"22550d4c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/checkbox.vue?vue&type=template&id=5dce0433&scoped=true&
var checkboxvue_type_template_id_5dce0433_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"custom-control",class:_vm.asSwitch ? 'custom-switch' : 'custom-checkbox'},[_c('input',{staticClass:"custom-control-input",attrs:{"type":"checkbox","id":_vm.id,"disabled":_vm.disabled},domProps:{"checked":_vm.checked,"indeterminate":_vm.indeterminate},on:{"change":function($event){_vm.$emit('change', $event.target.checked)}}}),_c('label',{staticClass:"custom-control-label",attrs:{"for":_vm.id}},[_vm._t("default")],2)])}
var checkboxvue_type_template_id_5dce0433_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/checkbox.vue?vue&type=template&id=5dce0433&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/checkbox.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var id = 0;
/* harmony default export */ var checkboxvue_type_script_lang_js_ = ({
  name: 'checkbox',
  beforeCreate: function beforeCreate() {
    this.id = 'checkbox' + id;
    id += 1;
  },
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: ['checked', 'indeterminate', 'disabled', 'asSwitch']
});
// CONCATENATED MODULE: ./src/components/checkbox.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_checkboxvue_type_script_lang_js_ = (checkboxvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/checkbox.vue?vue&type=style&index=0&id=5dce0433&scoped=true&lang=css&
var checkboxvue_type_style_index_0_id_5dce0433_scoped_true_lang_css_ = __webpack_require__("b5ca");

// CONCATENATED MODULE: ./src/components/checkbox.vue






/* normalize component */

var checkbox_component = normalizeComponent(
  components_checkboxvue_type_script_lang_js_,
  checkboxvue_type_template_id_5dce0433_scoped_true_render,
  checkboxvue_type_template_id_5dce0433_scoped_true_staticRenderFns,
  false,
  null,
  "5dce0433",
  null
  
)

checkbox_component.options.__file = "checkbox.vue"
/* harmony default export */ var components_checkbox = (checkbox_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"22550d4c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/radio.vue?vue&type=template&id=622915d6&scoped=true&
var radiovue_type_template_id_622915d6_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"custom-control custom-radio"},[_c('input',{staticClass:"custom-control-input",attrs:{"type":"radio","id":_vm.id,"disabled":_vm.disabled},domProps:{"value":_vm.value,"checked":_vm.internalChecked},on:{"change":function($event){_vm.$emit('change', $event.target.value)}}}),_c('label',{staticClass:"custom-control-label",attrs:{"for":_vm.id}},[_vm._t("default")],2)])}
var radiovue_type_template_id_622915d6_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/radio.vue?vue&type=template&id=622915d6&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/radio.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var radiovue_type_script_lang_js_id = 0;
/* harmony default export */ var radiovue_type_script_lang_js_ = ({
  name: 'radio',
  beforeCreate: function beforeCreate() {
    this.id = 'radio' + radiovue_type_script_lang_js_id;
    radiovue_type_script_lang_js_id += 1;
  },
  model: {
    prop: 'radioValue',
    event: 'change'
  },
  data: function data() {
    return {
      internalChecked: this.value === this.radioValue
    };
  },
  watch: {
    radioValue: function radioValue() {
      this.internalChecked = this.value === this.radioValue;
    }
  },
  props: ['radioValue', 'partial', 'value', 'disabled']
});
// CONCATENATED MODULE: ./src/components/radio.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_radiovue_type_script_lang_js_ = (radiovue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/radio.vue





/* normalize component */

var radio_component = normalizeComponent(
  components_radiovue_type_script_lang_js_,
  radiovue_type_template_id_622915d6_scoped_true_render,
  radiovue_type_template_id_622915d6_scoped_true_staticRenderFns,
  false,
  null,
  "622915d6",
  null
  
)

radio_component.options.__file = "radio.vue"
/* harmony default export */ var components_radio = (radio_component.exports);
// CONCATENATED MODULE: ./src/components/icons.js
// by default, we use icons from the font awesome solid set
// exceptions below
var icons = ['info-circle', 'download', 'upload', 'pencil-alt', 'share-square', 'search-plus', 'search-minus', 'reply', 'share', 'star', 'clone', 'keyboard', 'envelope', 'user', 'user-circle', 'cog', 'file', 'arrow-left', 'arrow-right', 'arrow-up', 'times', 'check', 'angle-down', 'arrow-alt-circle-left', 'angle-left', 'angle-right', 'caret-down', 'caret-up', 'caret-left', 'caret-right']; // these are the exceptions, and they come from the font awesome regular set

var regular = ['clone', 'keyboard', 'envelope', 'arrow-alt-circle-left', 'star'];

function install(Vue) {
  var _loop = function _loop() {
    var icon = icons[_i];
    Vue.component('i-' + icon, {
      functional: true,
      render: function render(createElement, context) {
        var solid = context.props && context.props.solid || !regular.includes(icon);
        var classes = [(solid ? 'fas' : 'far') + ' fa-' + icon, context.data.class, context.data.staticClass];

        if (context.props && context.props.size) {
          classes.push('icon-size-' + context.props.size);
        }

        return createElement('i', {
          class: classes,
          style: context.data.style,
          attrs: context.data.attrs,
          directives: context.data.directives,
          on: context.listeners
        });
      }
    });
  };

  for (var _i = 0; _i < icons.length; _i++) {
    _loop();
  }
}

/* harmony default export */ var components_icons = ({
  install: install
});
// CONCATENATED MODULE: ./src/export.js







function export_install(Vue) {
  components_icons.install(Vue);
  Vue.component('dicta-header', commonHeader);
  Vue.component('dicta-footer', commonFooter);
}

/* harmony default export */ var src_export = ({
  install: export_install,
  dHeader: commonHeader,
  dFooter: commonFooter,
  dBootstrap: custom_default.a,
  dCheckbox: components_checkbox,
  dRadio: components_radio
});
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src_export);



/***/ })

/******/ });
});
//# sourceMappingURL=dicta-vue-components.umd.js.map