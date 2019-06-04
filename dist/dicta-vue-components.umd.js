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

/***/ "1152":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Logo Synoptic_Blue_Circle.f914da62.png";

/***/ }),

/***/ "2a2c":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "2cbe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contactUs_vue_vue_type_style_index_0_id_9f864c52_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4d4d");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contactUs_vue_vue_type_style_index_0_id_9f864c52_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contactUs_vue_vue_type_style_index_0_id_9f864c52_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contactUs_vue_vue_type_style_index_0_id_9f864c52_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "3b4f":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Logo Classify_Blue_Circle.34411b2e.png";

/***/ }),

/***/ "4d4d":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "6c8f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DDropdown_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2a2c");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DDropdown_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DDropdown_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DDropdown_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "9897":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Logo Segmentation_Blue_Circle.0de1eb30.png";

/***/ }),

/***/ "a14c":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Logo Search_Blue_Circle.9540de4d.png";

/***/ }),

/***/ "a48b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "b0bf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_toolFooter_vue_vue_type_style_index_0_id_64607ea8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("bb95");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_toolFooter_vue_vue_type_style_index_0_id_64607ea8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_toolFooter_vue_vue_type_style_index_0_id_64607ea8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_toolFooter_vue_vue_type_style_index_0_id_64607ea8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "b53d":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Logo Pasuk Finder_Blue_Circle.f04ff16d.png";

/***/ }),

/***/ "b5ce":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Logo Nakdan_Blue_Circle.f56bde4e.png";

/***/ }),

/***/ "bb95":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "d3ca":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_commonHeader_vue_vue_type_style_index_0_id_384c641d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a48b");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_commonHeader_vue_vue_type_style_index_0_id_384c641d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_commonHeader_vue_vue_type_style_index_0_id_384c641d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_commonHeader_vue_vue_type_style_index_0_id_384c641d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

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

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"6fbca591-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/commonHeader.vue?vue&type=template&id=384c641d&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"dir":_vm.computedHebrew ? 'rtl' : 'ltr'}},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"top-bar"},[_c('span',{staticClass:"top-bar-left"},[_c('a',{attrs:{"href":"http://dicta.org.il/index.html"}},[_c('span',{staticClass:"dicta"},[_vm._v("DICTA")]),_c('span',{staticClass:"dicta-tagline"},[_vm._v("\n          "+_vm._s(_vm.computedHebrew ?
          'כלים דיגיטליים לעיבוד טקסטים בעברית' :
          ' Analytical tools for Hebrew texts')+"\n        ")])])]),_c('span',{staticClass:"top-bar-right"},[_vm._t("endContent"),(_vm.hebrewSupported && _vm.englishSupported)?_c('span',[_c('a',{attrs:{"href":"#"},on:{"click":_vm.changeLanguage}},[_vm._v(_vm._s(_vm.computedHebrew ? 'English' : 'עברית'))]),_c('span',{staticClass:"spacer"},[_vm._v("|")])]):_vm._e(),_c('a',{directives:[{name:"b-modal",rawName:"v-b-modal.contact-us",modifiers:{"contact-us":true}}],staticClass:"a-hover"},[_vm._v(_vm._s(_vm.computedHebrew ? 'צור קשר' : 'Contact Us'))]),_c('span',{staticClass:"spacer"},[_vm._v("|")]),_c('a',{attrs:{"href":"#"},on:{"click":_vm.toggleDropDown,"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"esc",27,$event.key,["Esc","Escape"])){ return null; }return _vm.toggleDropDown($event)}}},[_vm._v("\n        "+_vm._s(_vm.computedHebrew ? 'הכלים של DICTA' : 'DICTA Tools')+"  "),_c('i',{staticClass:"fas fa-caret-down"})])],2)]),_c('contact-us',{attrs:{"hebrew":_vm.computedHebrew}})],1),_c('div',[(_vm.menuOpen)?_c('div',{staticClass:"popup"},[_c('div',{staticClass:"popup-back",on:{"click":_vm.toggleDropDown}}),_c('div',{staticClass:"tool-bar",on:{"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"esc",27,$event.key,["Esc","Escape"])){ return null; }return _vm.toggleDropDown($event)}}},[_c('ul',{staticClass:"tool-list"},_vm._l((_vm.tools),function(tool,index){return _c('li',{key:index,staticClass:"tool"},[_c('a',{staticClass:"tool-link",attrs:{"href":tool.hasOwnProperty('href') ? tool.href : (_vm.computedHebrew ? tool.hebHref : tool.engHref),"target":"_blank"}},[_c('img',{staticClass:"logo",attrs:{"alt":"logo","src":tool.logo}}),_c('div',{staticClass:"description"},[_c('div',[_c('span',{staticClass:"title"},[_vm._v(_vm._s(_vm.computedHebrew ? tool.hebTitle : tool.engTitle))])]),_c('div',{staticClass:"subtitle"},[_vm._v(_vm._s(_vm.computedHebrew ? tool.hebSubtitle : tool.engSubtitle))])])])])}),0),_c('tool-footer')],1)]):_vm._e()])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/commonHeader.vue?vue&type=template&id=384c641d&scoped=true&

// CONCATENATED MODULE: ./src/components/toolList.js
var tools = [{
  href: 'https://nakdan.dicta.org.il/',
  logo: __webpack_require__("b5ce"),
  engTitle: 'Nakdan',
  engSubtitle: 'Add nikud to Modern / Rabbinic / Poetry text',
  hebTitle: 'נקדן אוטומטי',
  hebSubtitle: 'ניקוד טקסט מודרני / רבני / שירה'
}, {
  href: 'https://classify.dicta.org.il',
  logo: __webpack_require__("3b4f"),
  engTitle: 'Bible Classification',
  engSubtitle: 'Categorization, based on key styles markers',
  hebTitle: 'סיווג טקסטים',
  hebSubtitle: 'השוואת טקסטים בהתבסס על מאפיינים סיגונוניים'
}, {
  href: 'https://synoptic.dicta.org.il/',
  logo: __webpack_require__("1152"),
  engTitle: 'Synopsis Builder',
  engSubtitle: 'Aligns versions of the same text',
  hebTitle: 'השוואת גרסאות',
  hebSubtitle: 'השוואה בין גרסאות של אותו טקסט'
}, {
  engHref: 'https://search.dicta.org.il/',
  hebHref: 'https://search.dicta.org.il/he',
  logo: __webpack_require__("a14c"),
  engTitle: 'Search the Bible',
  engSubtitle: 'Easily search in the Bible',
  hebTitle: 'חיפוש בתנ״ך',
  hebSubtitle: 'מנוע חיפוש אינטואיטיבי לתנ״ך'
}, {
  href: 'https://pasuk.dicta.org.il/',
  logo: __webpack_require__("b53d"),
  engTitle: 'Pasuk Finder',
  engSubtitle: 'Find biblical references in texts',
  hebTitle: 'איזכורים תנ״כיים',
  hebSubtitle: 'איתור איזכורים תנ״כיים בכל טקסט נתון'
}, {
  href: 'https://nakdanpro.dicta.org.il/',
  logo: __webpack_require__("b5ce"),
  engTitle: 'Professional Nakdan',
  engSubtitle: 'Add and edit nikud in Modern / Rabbinic / Poetry texts',
  hebTitle: 'נקדן מקצועי',
  hebSubtitle: 'הוספה ועריכה של ניקוד בטקסט מודרני / רבני / שירה'
}, {
  href: 'https://segment.dicta.org.il/',
  logo: __webpack_require__("9897"),
  engTitle: 'Source Criticism',
  engSubtitle: 'Josh will decide',
  hebTitle: 'ג\'וש יחליט',
  hebSubtitle: 'ג\'וש יחליט'
}];
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"6fbca591-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/contactUs.vue?vue&type=template&id=9f864c52&scoped=true&
var contactUsvue_type_template_id_9f864c52_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('b-modal',{ref:"contact-modal",staticClass:"contact-us",attrs:{"id":"contact-us","centered":"","ok-title":_vm.hebrew ? 'שלח' : 'Send',"cancel-title":_vm.hebrew ? 'ביטול' : 'Cancel'},on:{"ok":_vm.submit}},[_c('template',{slot:"modal-header"},[_c('div',[_c('i-envelope'),_vm._v(" "+_vm._s(_vm.hebrew ? 'צור קשר' : 'Contact Us'))],1)]),_c('form',{ref:"contact-form",staticClass:"form",class:{'was-validated': _vm.submitted},attrs:{"id":"contact-form","action":"https://formspree.io/dicta@dicta.org.il","method":"POST"}},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-12"},[_c('b-form-group',{attrs:{"label":_vm.hebrew ? 'שם' : 'Name',"label-for":"name"}},[_c('b-form-input',{attrs:{"required":"","name":"name"}}),_c('b-form-invalid-feedback',[_vm._v(_vm._s(_vm.hebrew ? 'שדה חובה' : 'Required field'))])],1)],1)]),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-12"},[_c('b-form-group',{attrs:{"label":_vm.hebrew ? 'דואר אלקטרוני' : 'Email',"label-for":"_replyto"}},[_c('b-form-input',{attrs:{"required":"","name":"_replyto","type":"email"}}),_c('b-form-invalid-feedback',[_vm._v(_vm._s(_vm.hebrew ? 'שדה חובה' : 'Required field'))])],1)],1)]),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-12"},[_c('b-form-group',{attrs:{"label":_vm.hebrew ? 'תואר' : 'Description',"label-for":"message"}},[_c('b-textarea',{attrs:{"name":"message","rows":"4","required":""}}),_c('b-form-invalid-feedback',[_vm._v(_vm._s(_vm.hebrew ? 'שדה חובה' : 'Required field'))])],1)],1)])])],2)}
var contactUsvue_type_template_id_9f864c52_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/contactUs.vue?vue&type=template&id=9f864c52&scoped=true&

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
//
//
//
//
//
/* harmony default export */ var contactUsvue_type_script_lang_js_ = ({
  name: 'contactUs',
  props: ['hebrew'],
  data: function data() {
    return {
      submitted: false
    };
  },
  methods: {
    submit: function submit(bvModalEvt) {
      var _this = this;

      bvModalEvt.preventDefault();
      this.submitted = true;

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
// EXTERNAL MODULE: ./src/components/contactUs.vue?vue&type=style&index=0&id=9f864c52&scoped=true&lang=css&
var contactUsvue_type_style_index_0_id_9f864c52_scoped_true_lang_css_ = __webpack_require__("2cbe");

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

// CONCATENATED MODULE: ./src/components/contactUs.vue






/* normalize component */

var component = normalizeComponent(
  components_contactUsvue_type_script_lang_js_,
  contactUsvue_type_template_id_9f864c52_scoped_true_render,
  contactUsvue_type_template_id_9f864c52_scoped_true_staticRenderFns,
  false,
  null,
  "9f864c52",
  null
  
)

component.options.__file = "contactUs.vue"
/* harmony default export */ var contactUs = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"6fbca591-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/toolFooter.vue?vue&type=template&id=64607ea8&scoped=true&
var toolFootervue_type_template_id_64607ea8_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"footer",class:{he: _vm.computedHebrew},attrs:{"dir":_vm.computedHebrew ? 'rtl' : 'ltr'}},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"footer-content"},[(_vm.computedHebrew)?_c('a',{staticClass:"footer-item",attrs:{"href":"http://dicta.org.il/aboutus-he.html","target":"_blank"}},[_vm._v("אודות")]):_c('a',{staticClass:"footer-item",attrs:{"href":"http://dicta.org.il/aboutus-en.html","target":"_blank"}},[_vm._v("About")]),_c('a',{staticClass:"footer-item",attrs:{"href":"http://dicta.org.il/tos.html","target":"_blank"}},[_vm._v(_vm._s(_vm.computedHebrew ? 'תנאים ושרותים' : 'Terms of service'))]),_vm._m(0),_vm._m(1),_vm._m(2)])])])}
var toolFootervue_type_template_id_64607ea8_scoped_true_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{staticClass:"footer-item footer-icon",attrs:{"href":"https://www.facebook.com/dictatools","target":"_blank"}},[_c('i',{staticClass:"social-icon fab fa-facebook-f"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{staticClass:"footer-item footer-icon",attrs:{"href":"https://twitter.com/DictaTools?lang=he","target":"_blank"}},[_c('i',{staticClass:"social-icon fab fa-twitter"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{staticClass:"footer-item footer-icon",attrs:{"href":"https://www.youtube.com/channel/UC4ickfqPHtDMAKIGvMBMQyw","target":"_blank"}},[_c('i',{staticClass:"social-icon fab fa-youtube"})])}]


// CONCATENATED MODULE: ./src/components/toolFooter.vue?vue&type=template&id=64607ea8&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/toolFooter.vue?vue&type=script&lang=js&
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
/* harmony default export */ var toolFootervue_type_script_lang_js_ = ({
  name: 'tool-footer',
  props: ['hebrew'],
  data: function data() {
    return {};
  },
  computed: {
    computedHebrew: function computedHebrew() {
      if (this.hebrew !== undefined) {
        return this.hebrew;
      }

      return this.$settings.hebrew;
    }
  }
});
// CONCATENATED MODULE: ./src/components/toolFooter.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_toolFootervue_type_script_lang_js_ = (toolFootervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/toolFooter.vue?vue&type=style&index=0&id=64607ea8&scoped=true&lang=css&
var toolFootervue_type_style_index_0_id_64607ea8_scoped_true_lang_css_ = __webpack_require__("b0bf");

// CONCATENATED MODULE: ./src/components/toolFooter.vue






/* normalize component */

var toolFooter_component = normalizeComponent(
  components_toolFootervue_type_script_lang_js_,
  toolFootervue_type_template_id_64607ea8_scoped_true_render,
  toolFootervue_type_template_id_64607ea8_scoped_true_staticRenderFns,
  false,
  null,
  "64607ea8",
  null
  
)

toolFooter_component.options.__file = "toolFooter.vue"
/* harmony default export */ var toolFooter = (toolFooter_component.exports);
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
//
//
//



/* harmony default export */ var commonHeadervue_type_script_lang_js_ = ({
  name: 'dicta-header',
  components: {
    ToolFooter: toolFooter,
    ContactUs: contactUs
  },
  props: {
    hebrew: {},
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

      if (this.hebrew !== undefined) {
        return this.hebrew;
      }

      return this.$settings.hebrew;
    }
  },
  methods: {
    changeLanguage: function changeLanguage() {
      if (this.hebrew !== undefined) {
        this.$emit('lang-changed', this.hebrew ? 'en' : 'he');
      } else {
        this.$settings.hebrew = !this.$settings.hebrew;
      }
    },
    toggleDropDown: function toggleDropDown() {
      this.menuOpen = !this.menuOpen;
    }
  }
});
// CONCATENATED MODULE: ./src/components/commonHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_commonHeadervue_type_script_lang_js_ = (commonHeadervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/commonHeader.vue?vue&type=style&index=0&id=384c641d&scoped=true&lang=css&
var commonHeadervue_type_style_index_0_id_384c641d_scoped_true_lang_css_ = __webpack_require__("d3ca");

// CONCATENATED MODULE: ./src/components/commonHeader.vue






/* normalize component */

var commonHeader_component = normalizeComponent(
  components_commonHeadervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "384c641d",
  null
  
)

commonHeader_component.options.__file = "commonHeader.vue"
/* harmony default export */ var commonHeader = (commonHeader_component.exports);
// EXTERNAL MODULE: ./src/css/custom.scss
var custom = __webpack_require__("eac2");
var custom_default = /*#__PURE__*/__webpack_require__.n(custom);

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
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"6fbca591-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/DDropdown.vue?vue&type=template&id=0ee1b613&
var DDropdownvue_type_template_id_0ee1b613_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('b-dropdown',{staticClass:"d-dropdown",attrs:{"no-caret":"","menu-class":"w-100","variant":"outline-dropdown"}},[_c('template',{slot:"button-content"},[_c('div',{staticClass:"row justify-content-between"},[_c('div',{staticClass:"col-auto"},[_vm._v(_vm._s(_vm.display(_vm.value)))]),_c('div',{staticClass:"col-auto"},[_c('i-angle-down')],1)])]),_vm._l((_vm.options),function(option){return _c('b-dropdown-item',{key:_vm.display(option),on:{"click":function($event){return _vm.$emit('change', option)}}},[_c('span',{staticClass:"dropdown-check"},[(_vm.display(_vm.value) === _vm.display(option))?_c('small',[_c('i-check')],1):_vm._e()]),_vm._v(_vm._s(_vm.display(option))+"\n  ")])})],2)}
var DDropdownvue_type_template_id_0ee1b613_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/DDropdown.vue?vue&type=template&id=0ee1b613&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/DDropdown.vue?vue&type=script&lang=js&
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
/* harmony default export */ var DDropdownvue_type_script_lang_js_ = ({
  name: 'dicta-dropdown',
  props: {
    value: {},
    options: {},
    displayField: {}
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  methods: {
    display: function display(item) {
      return this.displayField ? item[this.displayField] : item;
    }
  }
});
// CONCATENATED MODULE: ./src/components/DDropdown.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_DDropdownvue_type_script_lang_js_ = (DDropdownvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/DDropdown.vue?vue&type=style&index=0&lang=scss&
var DDropdownvue_type_style_index_0_lang_scss_ = __webpack_require__("6c8f");

// CONCATENATED MODULE: ./src/components/DDropdown.vue






/* normalize component */

var DDropdown_component = normalizeComponent(
  components_DDropdownvue_type_script_lang_js_,
  DDropdownvue_type_template_id_0ee1b613_render,
  DDropdownvue_type_template_id_0ee1b613_staticRenderFns,
  false,
  null,
  null,
  null
  
)

DDropdown_component.options.__file = "DDropdown.vue"
/* harmony default export */ var DDropdown = (DDropdown_component.exports);
// CONCATENATED MODULE: ./src/export.js





function export_install(Vue) {
  components_icons.install(Vue);
  Vue.prototype.$settings = Vue.observable({
    hebrew: false
  });
  Vue.component('dicta-header', commonHeader);
  Vue.component('dicta-dropdown', DDropdown);
}

/* harmony default export */ var src_export = ({
  install: export_install,
  dHeader: commonHeader,
  dBootstrap: custom_default.a,
  dDropdown: DDropdown
});
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src_export);



/***/ })

/******/ });
});
//# sourceMappingURL=dicta-vue-components.umd.js.map