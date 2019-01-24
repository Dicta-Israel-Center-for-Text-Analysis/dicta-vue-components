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

/***/ "02f4":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("4588");
var defined = __webpack_require__("be13");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "0390":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var at = __webpack_require__("02f4")(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),

/***/ "0676":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "0bfb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__("cb7c");
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "0e63":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "12e6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_commonHeader_vue_vue_type_style_index_1_id_0c171ac8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9ff6");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_commonHeader_vue_vue_type_style_index_1_id_0c171ac8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_commonHeader_vue_vue_type_style_index_1_id_0c171ac8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_commonHeader_vue_vue_type_style_index_1_id_0c171ac8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "203a":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "214f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__("b0c5");
var redefine = __webpack_require__("2aba");
var hide = __webpack_require__("32e9");
var fails = __webpack_require__("79e5");
var defined = __webpack_require__("be13");
var wks = __webpack_require__("2b4c");
var regexpExec = __webpack_require__("520a");

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ "230e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var document = __webpack_require__("7726").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "23c6":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("2d95");
var TAG = __webpack_require__("2b4c")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "2439":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "2599":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_common_header_css_vue_type_style_index_0_id_0c171ac8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0676");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_common_header_css_vue_type_style_index_0_id_0c171ac8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_common_header_css_vue_type_style_index_0_id_0c171ac8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_common_header_css_vue_type_style_index_0_id_0c171ac8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "2aba":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var hide = __webpack_require__("32e9");
var has = __webpack_require__("69a8");
var SRC = __webpack_require__("ca5a")('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("8378").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "2b4c":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("5537")('wks');
var uid = __webpack_require__("ca5a");
var Symbol = __webpack_require__("7726").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "2d00":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "2d95":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "32e9":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var createDesc = __webpack_require__("4630");
module.exports = __webpack_require__("9e1e") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "4588":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "4630":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "4917":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__("cb7c");
var toLength = __webpack_require__("9def");
var advanceStringIndex = __webpack_require__("0390");
var regExpExec = __webpack_require__("5f1b");

// @@match logic
__webpack_require__("214f")('match', 1, function (defined, MATCH, $match, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[MATCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative($match, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      if (!rx.global) return regExpExec(rx, S);
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),

/***/ "520a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__("0bfb");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "5537":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("8378");
var global = __webpack_require__("7726");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("2d00") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "5ca1":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var core = __webpack_require__("8378");
var hide = __webpack_require__("32e9");
var redefine = __webpack_require__("2aba");
var ctx = __webpack_require__("9b43");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "5f1b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__("23c6");
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),

/***/ "69a8":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "6a99":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("d3f4");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "6c10":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "75b1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_commonFooter_vue_vue_type_style_index_1_id_3c3c07aa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e96e");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_commonFooter_vue_vue_type_style_index_1_id_3c3c07aa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_commonFooter_vue_vue_type_style_index_1_id_3c3c07aa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_commonFooter_vue_vue_type_style_index_1_id_3c3c07aa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "7726":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "79e5":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "8378":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.2' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "852e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "86cc":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("cb7c");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var toPrimitive = __webpack_require__("6a99");
var dP = Object.defineProperty;

exports.f = __webpack_require__("9e1e") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "8b98":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAHCAYAAADebrddAAAAAXNSR0IArs4c6QAAAFlJREFUGBljYGBgmAnE/wngJ0B5cSBmYAPiY0CMS8MPoJwZEMOBJJD1DIixaUiGq0JiWAHZP9E0TEOSx2CmIyk+AmSzYqhAE5gN5D8FYgk0caxckId1sMkAAGCsIZx06hI1AAAAAElFTkSuQmCC"

/***/ }),

/***/ "9752":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9b43":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("d8e8");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "9def":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("4588");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "9e1e":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("79e5")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "9ff6":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a525":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_radio_vue_vue_type_style_index_0_id_2c2e0668_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9752");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_radio_vue_vue_type_style_index_0_id_2c2e0668_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_radio_vue_vue_type_style_index_0_id_2c2e0668_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_radio_vue_vue_type_style_index_0_id_2c2e0668_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "a574":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAABf9JREFUaAXdWttLVVkc/ilmWZIgFQhm6hiFNcxAiDCBUDPOqNBDUQ/+A1EQmBRCPgj54EPNS9FlgjQCiR4ckUBjRqaLxTRBEJHCxJQhljqYgt28dFnzfXtci732OXt7jmeXJ3/wsfdav8v61trr8tv7nBQJV7IRrhBYD5QB24B1AGUAuA70AI+BJ8A4EIqkhBClCDGqgJ+Ab4AcIBUIko9QDgMPgN+ALoCdWxD5Aa22AS8BlSAYg7EY87PJd2jpKpAoeT9/xmYbn0wyEflnYArwIxFWPdtgW2wzVPka0f4EwiIaaxy2ybZDkXJEGQFibTxsO7ZNDgnJLniHsZgT7Rw5kMu8hDvIKyBREmH5k0vcu9omOP2bRJ3Qg0FO5BaTcKf4C9DOyXYlt5h2M257yUbey4ccA6UU2s9xTniJxVsmR3KNKsyPmPfEG3Sh7MnV5HTupPF7KH53K3GfkKxZs0YaGxtl+fLlTpxnz55JU1OTvH792jduaWmp7N+/X1JTU+X9+/dy4sQJefCAuWWEMPH8EfjDq2lHRaijW1BQoKamppRbzp49G9jGsWPH3OaqoaEhyJ6cHdGP5iuUEj49Z2Oay9OnT6W2ttaUebN3717Zs2ePVecufPjwwV2Ujx858L5CzuRu5hjfJ2La0ugUj5w7d07a283AOVOG0yU/Pz+eMH625EzupiOVfpasT0lJkZUrVxpkZmZKenp6kIvRcURrampkcHDQ1OXk5Mjp06clLS3N1CVw43Dn1MoGvg0KVF1dLQ8fPpTe3l4HvL9//750dnZKXV2d5OXlBbkLF/m+fftkcnLS2FVVVcnBgwdNWd9w0OIUcmcfpATgxPRdVFxwQTI0NKR2797t68/YW7duVS9evLDCYPdS2KUsvzNnzlg2hw4dsvRReJI7+yDVUZSWc2Vlperp6VG3b99Wt27dUnfv3lXPnz+3Gnzz5k0EKR13x44damJiwrLXBTxZlZWVZdq7du2aVjlXbAxGp+NFubIP8ksUxZzOq1atUocPH1YzMzOm4ba2tgi/4uJiNTY2Zmyi3Zw6dcrxKysrUxwQLW/fvlVFRUURMaPwZR/k7yiKWJwdm5aWFt2uGh4eVtnZ2ZbvpUuXjJ43/f396vz581YdDj51/PhxhbVk1Xd0dCisGSueD1f2QbgCYzGOarNz507T+PT0tNq4caOxw+6kxsfHjZ5Pr6KiwtF7p5Axmr0ZHR1VmzdvNrHm4OjsIgl1hNNBCw4ztWXLFtN4eXm5VjnXO3fumBHesGFDxOLXxlx/27dvN3Hm6ATtJrn9DgChiXv7RIpixUVHBGSdukePHjlbt2WAQl9fn2BwBE/MqwoqD7AjN4IsEtFhN7Lc3YciFRcuXJDLly9bNkw0dZJpKYILN9iRm8E289d6T273gciofDrMxZiTaVm9erU0NzfLihUrdFUs15vsCL+5BmZmQZG8SZ63HORL3cjIiBw4cMBJ2bVtSUmJHD16VBfnupL7Y3bkCcCXel9hnlVYWCic817k5uZafkxXaB+PdHV1ycmTJy0X5mdMY2IQcmcfHOHXcN9d4uLFi4qHEw8rLzBd9GbjXPn+gbnvxKqvr7d0eGHybQOJqLp3755ljymnMFC+PrOcyd1kv1dZ8BOOckZGhrMIuRDdWLZsmeW2dOlSWbt2rVPHNzy3eMtuHd8amVi+esXPV/8LU/0jR47oot/V4a7zaPaqCYj6TtLa2urMZb9I3vru7m6nCqe6vHv3TpYsWSI4DOXKlSteU6uMJyI4MAUJpvPqQCXyO8vGU+A7s/NE3PW/ojDXY0w2PTlHCD8+MCVONrJ+fMiVnCOEOxg/sfg5Jls9uZJzVClF7RSQbKS9fMiRXAOFnyO9jslWJsc5hTvXoviIzZ4uip8V9CPjjypf/A89ujO7cPMSWOg1Qg7kkpAsih9D9Qgsip+ndWe4m3Hb+xznDNtgW2zzk8kX/xcO78hwV2sDwtgMGIOxGHNekjIvL9upCEW+yi3o35zC6Ii7W9koFALrgTJgG7AOoAwA14Ee4B+gHxgHQpH/AN3EcjXJvqY2AAAAAElFTkSuQmCC"

/***/ }),

/***/ "a66f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkbox_vue_vue_type_style_index_0_id_7195ef4e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6c10");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkbox_vue_vue_type_style_index_0_id_7195ef4e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkbox_vue_vue_type_style_index_0_id_7195ef4e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkbox_vue_vue_type_style_index_0_id_7195ef4e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "a829":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAICAYAAAAiJnXPAAAAAXNSR0IArs4c6QAAAHVJREFUGBljYMAOooHCR4FYBrs0pqgjUOgXEP8H4ttALAzEeAFIw1cgBml4B6UvAmmcGpE1zAYqlADia/g0omtgBCoGAZwaLYCSMCeBbIBpAGkCAXSNXCDBHiAG+QGbBpA8CCBrtAIJ8AKxHRCj2wCSQwZwdQBlhB8kSLzYFQAAAABJRU5ErkJggg=="

/***/ }),

/***/ "aa52":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_common_footer_css_vue_type_style_index_0_id_3c3c07aa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("852e");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_common_footer_css_vue_type_style_index_0_id_3c3c07aa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_common_footer_css_vue_type_style_index_0_id_3c3c07aa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_common_footer_css_vue_type_style_index_0_id_3c3c07aa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "afcf":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "b0c5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpExec = __webpack_require__("520a");
__webpack_require__("5ca1")({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),

/***/ "b140":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/blue-logo.74f0ff90.png";

/***/ }),

/***/ "be13":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "c69a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("9e1e") && !__webpack_require__("79e5")(function () {
  return Object.defineProperty(__webpack_require__("230e")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "ca5a":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "cb7c":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "d3f4":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "d8e8":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "e96e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"22550d4c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/commonHeader.vue?vue&type=template&id=0c171ac8&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('header',{staticClass:"navbar navbar-default top-header d-none d-lg-flex"},[_vm._m(0),_c('ul',{staticClass:"nav navbar-nav nav-mega"},[_c('li',[_c('a',{staticClass:"eng",attrs:{"href":"#"},on:{"click":_vm.changeLanguage}},[_vm._v("עברית")])]),_c('li',{staticClass:"dropdown header-dropdown"},[_c('a',{staticClass:"link mega-dropdown f black",attrs:{"href":"#","id":"dropdownMenu2"},on:{"click":_vm.openDropDown}},[_vm._v("\n            DICTA Tools"),_c('img',{staticClass:"link-icon",attrs:{"src":__webpack_require__("8b98")}})]),_c('ul',{staticClass:"dropdown-menu mega-menu",class:{show: _vm.menuOpen}},[_vm._m(1)])])]),_c('div',{staticClass:"mobile-header d-lg-none"},[_c('div',{staticClass:"container p-x-10"},[_c('div',{staticClass:"row no-gutters mobile-header-row"},[_vm._m(2),_c('div',{staticClass:"col-xs-4"},[_c('a',{staticClass:"mobile-link",on:{"click":_vm.changeLanguage}},[_vm._v("עברית ")])])])])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"navbar-nav mr-auto"},[_c('a',{attrs:{"href":"http://dicta.org.il/index.html"}},[_c('em',{staticClass:"f black title"},[_vm._v("DICTA")]),_c('span',{staticClass:"txt add f black"},[_vm._v("Analytical tools for Jewish texts")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('div',{staticClass:"row mega-menu-row"},[_c('div',{staticClass:"mega-menu-col col-lg-4 col-md-4 col-sm-6 col-xs-12"},[_c('a',{staticClass:"media",attrs:{"href":"http://nakdan.dicta.org.il/","target":"_blank"}},[_c('div',{staticClass:"media-left"},[_c('img',{staticClass:"img media-object",attrs:{"src":__webpack_require__("2439")}})]),_c('div',{staticClass:"media-body"},[_c('h4',{staticClass:"media-heading"},[_vm._v("Nakdan")]),_c('p',{staticClass:"sub-heading"},[_vm._v("Add nikud to Modern / Rabbinic / Poetry text")])])])]),_c('div',{staticClass:"mega-menu-col col-lg-4 col-md-4 col-sm-6 col-xs-12"},[_c('a',{staticClass:"media",attrs:{"href":"http://classify.dicta.org.il","target":"_blank"}},[_c('div',{staticClass:"media-left"},[_c('img',{staticClass:"img media-object",attrs:{"src":__webpack_require__("a574")}})]),_c('div',{staticClass:"media-body"},[_c('h4',{staticClass:"media-heading"},[_vm._v("Bible Classification")]),_c('p',{staticClass:"sub-heading"},[_vm._v("Categorization, based on key styles markers")])])])]),_c('div',{staticClass:"mega-menu-col col-lg-4 col-md-4 col-sm-6 col-xs-12"},[_c('a',{staticClass:"media",attrs:{"href":"http://classify.dicta.org.il/#/","target":"_blank"}},[_c('div',{staticClass:"media-left"},[_c('img',{staticClass:"img media-object",attrs:{"src":__webpack_require__("203a")}})]),_c('div',{staticClass:"media-body"},[_c('h4',{staticClass:"media-heading"},[_vm._v("Synopsis Builder")]),_c('p',{staticClass:"sub-heading"},[_vm._v("Aligns versions of the same text")])])])]),_c('div',{staticClass:"mega-menu-col col-lg-4 col-md-4 col-sm-6 col-xs-12"},[_c('a',{staticClass:"media",attrs:{"href":"http://search.dicta.org.il/","target":"_blank"}},[_c('div',{staticClass:"media-left"},[_c('img',{staticClass:"img media-object",attrs:{"src":__webpack_require__("0e63")}})]),_c('div',{staticClass:"media-body"},[_c('h4',{staticClass:"media-heading"},[_vm._v("Search the Bible")]),_c('p',{staticClass:"sub-heading"},[_vm._v("Easily search in the Bible")])])])]),_c('div',{staticClass:"mega-menu-col col-lg-4 col-md-4 col-sm-6 col-xs-12"},[_c('a',{staticClass:"media",attrs:{"href":"http://pasuk.dicta.org.il/","target":"_blank"}},[_c('div',{staticClass:"media-left"},[_c('img',{staticClass:"img media-object",attrs:{"src":__webpack_require__("afcf")}})]),_c('div',{staticClass:"media-body"},[_c('h4',{staticClass:"media-heading"},[_vm._v("Pasuk Finder")]),_c('p',{staticClass:"sub-heading"},[_vm._v("Find biblical references in texts")])])])])]),_c('div',{staticClass:"close-btn-div"},[_c('a',{staticClass:"common-close-btn"},[_c('i',{staticClass:"close-btn-icon fa fa-times"}),_vm._v("Close")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-xs-8"},[_c('div',{staticClass:"logo-header"},[_c('a',{staticClass:"logo-holder",attrs:{"href":"/"}},[_c('img',{staticClass:"logo-img",attrs:{"src":__webpack_require__("b140")}}),_c('span',{staticClass:"logo-text"},[_vm._v("Bible search")])])]),_c('a',{staticClass:"dicta-link",attrs:{"href":"#"}},[_vm._v("DICTA")])])}]


// CONCATENATED MODULE: ./src/components/commonHeader.vue?vue&type=template&id=0c171ac8&scoped=true&

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// import $ from 'jquery'
/* harmony default export */ var commonHeadervue_type_script_lang_js_ = ({
  name: 'Header',
  props: {
    hebrew: {
      default: false
    }
  },
  data: function data() {
    return {
      menuOpen: false
    };
  },
  methods: {
    changeLanguage: function changeLanguage() {
      this.$emit('lang', this.hebrew ? 'en' : 'he');
    },
    openDropDown: function openDropDown() {
      this.menuOpen = !this.menuOpen;
    }
  }
});
// CONCATENATED MODULE: ./src/components/commonHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_commonHeadervue_type_script_lang_js_ = (commonHeadervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/styles/common-header.css?vue&type=style&index=0&id=0c171ac8&scoped=true&lang=css&
var common_headervue_type_style_index_0_id_0c171ac8_scoped_true_lang_css_ = __webpack_require__("2599");

// EXTERNAL MODULE: ./src/components/commonHeader.vue?vue&type=style&index=1&id=0c171ac8&scoped=true&lang=css&
var commonHeadervue_type_style_index_1_id_0c171ac8_scoped_true_lang_css_ = __webpack_require__("12e6");

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
  "0c171ac8",
  null
  
)

component.options.__file = "commonHeader.vue"
/* harmony default export */ var commonHeader = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"22550d4c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/commonFooter.vue?vue&type=template&id=3c3c07aa&scoped=true&
var commonFootervue_type_template_id_3c3c07aa_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var commonFootervue_type_template_id_3c3c07aa_scoped_true_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bootstrap4"},[_c('div',{staticClass:"footer",attrs:{"id":"footer"}},[_c('div',{staticClass:"container desktop-footer"},[_c('div',{staticClass:"row no-gutters"},[_c('div',{staticClass:"col-lg-12 col-md-12 text-right"},[_c('ul',{staticClass:"list-inline pages-links"},[_c('li',[_c('a',{staticClass:"page-link",attrs:{"href":"http://dicta.org.il/aboutus-en.html","target":"_blank"}},[_vm._v("About")])]),_c('li',[_c('a',{staticClass:"page-link",attrs:{"data-toggle":"modal","href":"#contactus","data-backdrop":"false"}},[_vm._v("Contact Us")])]),_c('li',[_c('a',{staticClass:"page-link",attrs:{"href":"http://dicta.org.il/tos.html","target":"_blank"}},[_vm._v("Terms of service")])])]),_c('ul',{staticClass:"list-inline social-linkes"},[_c('li',{staticClass:"page-link-li"},[_c('a',{staticClass:"social-link",attrs:{"href":"https://www.facebook.com/dictatools","target":"_blank"}},[_c('i',{staticClass:"social-icon fab fa-facebook-f",attrs:{"aria-hidden":"true"}})])]),_c('li',{staticClass:"page-link-li"},[_c('a',{staticClass:"social-link",attrs:{"href":"https://twitter.com/DictaTools?lang=he","target":"_blank"}},[_c('i',{staticClass:"social-icon fab fa-twitter",attrs:{"aria-hidden":"true"}})])]),_c('li',{staticClass:"page-link-li"},[_c('a',{staticClass:"social-link",attrs:{"href":"https://www.youtube.com/channel/UC4ickfqPHtDMAKIGvMBMQyw","target":"_blank"}},[_c('i',{staticClass:"social-icon fab fa-youtube",attrs:{"aria-hidden":"true"}})])])])])])]),_c('div',{staticClass:"container mobile-footer"},[_c('div',{staticClass:"row no-gutters"},[_c('div',{staticClass:"col-xs-12"},[_c('a',{staticClass:"btn-top",attrs:{"href":"#"}},[_c('h3',{staticClass:"heading-h3 m-0"},[_c('img',{staticClass:"go-to-top-img",attrs:{"src":__webpack_require__("a829")}}),_vm._v("GO TO TOP")])])])]),_c('div',{staticClass:"row top-row"},[_c('div',{staticClass:"col-sm-12 p-0"},[_c('a',{staticClass:"page-link",attrs:{"href":"http://dicta.org.il/aboutus-en.html","data-toggle":"modal","data-target":"#about"}},[_vm._v("How\n            to use")])])]),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-12"},[_c('ul',{staticClass:"list-inline pages-links"},[_c('li',{staticClass:"page-link-li"},[_c('a',{staticClass:"page-link",attrs:{"href":"http://dicta.org.il/aboutus-en.html","target":"_blank"}},[_vm._v("About")])]),_c('li',{staticClass:"page-link-li"},[_c('a',{staticClass:"page-link",attrs:{"data-toggle":"modal","href":"#contactus","data-backdrop":"false"}},[_vm._v("Contact\n              Us")])]),_c('li',{staticClass:"page-link-li"},[_c('a',{staticClass:"page-link",attrs:{"href":"http://dicta.org.il/tos.html","target":"_blank"}},[_vm._v("Terms of\n              service")])])])]),_c('div',{staticClass:"col-sm-12"},[_c('ul',{staticClass:"list-inline social-linkes"},[_c('li',{staticClass:"page-link-li"},[_c('a',{staticClass:"social-link",attrs:{"href":"https://www.facebook.com/dictatools","target":"_blank"}},[_c('i',{staticClass:"social-icon fab fa-facebook",attrs:{"aria-hidden":"true"}})])]),_c('li',{staticClass:"page-link-li"},[_c('a',{staticClass:"social-link",attrs:{"href":"https://www.facebook.com/dictatools","target":"_blank"}},[_c('i',{staticClass:"social-icon fab fa-twitter",attrs:{"aria-hidden":"true"}})])]),_c('li',{staticClass:"page-link-li"},[_c('a',{staticClass:"social-link",attrs:{"href":"https://www.facebook.com/dictatools","target":"_blank"}},[_c('i',{staticClass:"social-icon fab fa-youtube-play",attrs:{"aria-hidden":"true"}})])])])])]),_c('div',{staticClass:"row bottom-row"},[_c('div',{staticClass:"col-xs-6"},[_c('h1',{staticClass:"heading-h1"},[_c('a',{attrs:{"href":"http://dicta.org.il","target":"_blank"}},[_vm._v("DICTA")])])]),_c('div',{staticClass:"col-xs-6 text-right"},[_c('div',{staticClass:"btn-group dropdown pull-right"},[_c('a',{staticClass:"footer-dropdown-link dropdown-toggle f black",attrs:{"href":"#","id":"dropdownMenu2","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[_vm._v("\n              DICTA Tools "),_c('i',{staticClass:"footer-dropdown-icon fa fa-bars",attrs:{"aria-hidden":"true"}})]),_c('ul',{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"dropdownMenu2"}},[_c('div',{staticClass:"row mobile-dropdown-header"},[_c('div',{staticClass:"col-sm-8 col-xs-8"},[_c('h2',[_vm._v("Dicta Tools")])]),_c('div',{staticClass:"col-sm-4 col-xs-4 text-right"},[_c('i',{staticClass:"fa fa-times"})])]),_c('li',[_c('a',{staticClass:"media",attrs:{"href":"http://search.dicta.org.il/","target":"_blank"}},[_c('div',{staticClass:"media-left"},[_c('img',{staticClass:"img media-object",attrs:{"src":__webpack_require__("0e63")}})]),_c('div',{staticClass:"media-body"},[_c('i',{staticClass:"fa fa-angle-right fa-lg pull-right media-icon",attrs:{"aria-hidden":"true"}}),_c('h3',{staticClass:"media-heading"},[_vm._v("Search the Bible")]),_c('p',{staticClass:"sub-heading"},[_vm._v("Easily search in the Bible")])])])]),_c('li',[_c('a',{staticClass:"media",attrs:{"href":"http://nakdan.dicta.org.il/","target":"_blank"}},[_c('div',{staticClass:"media-left"},[_c('img',{staticClass:"img media-object",attrs:{"src":__webpack_require__("2439")}})]),_c('div',{staticClass:"media-body"},[_c('i',{staticClass:"fa fa-angle-right fa-lg pull-right media-icon",attrs:{"aria-hidden":"true"}}),_c('h3',{staticClass:"media-heading"},[_vm._v("Nakdan")]),_c('p',{staticClass:"sub-heading"},[_vm._v("Add nikud to Modern / Rabbinic / Poetry text")])])])]),_c('li',[_c('a',{staticClass:"media",attrs:{"href":"http://classify.dicta.org.il","target":"_blank"}},[_c('div',{staticClass:"media-left"},[_c('img',{staticClass:"img media-object",attrs:{"src":__webpack_require__("a574")}})]),_c('div',{staticClass:"media-body"},[_c('i',{staticClass:"fa fa-angle-right fa-lg pull-right media-icon",attrs:{"aria-hidden":"true"}}),_c('h3',{staticClass:"media-heading"},[_vm._v("Bible Classification")]),_c('p',{staticClass:"sub-heading"},[_vm._v("Categorization, based on key styles markers")])])])]),_c('li',[_c('a',{staticClass:"media",attrs:{"href":"http://pasuk.dicta.org.il/","target":"_blank"}},[_c('div',{staticClass:"media-left"},[_c('img',{staticClass:"img media-object",attrs:{"src":__webpack_require__("afcf")}})]),_c('div',{staticClass:"media-body"},[_c('i',{staticClass:"fa fa-angle-right fa-lg pull-right media-icon",attrs:{"aria-hidden":"true"}}),_c('h3',{staticClass:"media-heading"},[_vm._v("Pasuk Finder")]),_c('p',{staticClass:"sub-heading"},[_vm._v("Find biblical references in texts")])])])]),_c('li',[_c('a',{staticClass:"media",attrs:{"href":"http://classify.dicta.org.il/#/","target":"_blank"}},[_c('div',{staticClass:"media-left"},[_c('img',{staticClass:"img media-object",attrs:{"src":__webpack_require__("203a")}})]),_c('div',{staticClass:"media-body"},[_c('i',{staticClass:"fa fa-angle-right fa-lg pull-right media-icon",attrs:{"aria-hidden":"true"}}),_c('h3',{staticClass:"media-heading"},[_vm._v("Synopsis Builder")]),_c('p',{staticClass:"sub-heading"},[_vm._v("Aligns versions of the same text")])])])])])])])])])])])}]


// CONCATENATED MODULE: ./src/components/commonFooter.vue?vue&type=template&id=3c3c07aa&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.match.js
var es6_regexp_match = __webpack_require__("4917");

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
//
//
//
//
//
//
//
//
/* harmony default export */ var commonFootervue_type_script_lang_js_ = ({
  name: 'Footer',
  data: function data() {
    return {
      mobile: this.detectmob()
    };
  },
  methods: {
    detectmob: function detectmob() {
      if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
        return true;
      } else {
        return false;
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/commonFooter.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_commonFootervue_type_script_lang_js_ = (commonFootervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/styles/common-footer.css?vue&type=style&index=0&id=3c3c07aa&scoped=true&lang=css&
var common_footervue_type_style_index_0_id_3c3c07aa_scoped_true_lang_css_ = __webpack_require__("aa52");

// EXTERNAL MODULE: ./src/components/commonFooter.vue?vue&type=style&index=1&id=3c3c07aa&scoped=true&lang=css&
var commonFootervue_type_style_index_1_id_3c3c07aa_scoped_true_lang_css_ = __webpack_require__("75b1");

// CONCATENATED MODULE: ./src/components/commonFooter.vue







/* normalize component */

var commonFooter_component = normalizeComponent(
  components_commonFootervue_type_script_lang_js_,
  commonFootervue_type_template_id_3c3c07aa_scoped_true_render,
  commonFootervue_type_template_id_3c3c07aa_scoped_true_staticRenderFns,
  false,
  null,
  "3c3c07aa",
  null
  
)

commonFooter_component.options.__file = "commonFooter.vue"
/* harmony default export */ var commonFooter = (commonFooter_component.exports);
// EXTERNAL MODULE: ./src/css/custom.scss
var custom = __webpack_require__("eac2");
var custom_default = /*#__PURE__*/__webpack_require__.n(custom);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"22550d4c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/checkbox.vue?vue&type=template&id=7195ef4e&scoped=true&
var checkboxvue_type_template_id_7195ef4e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"custom-control custom-checkbox"},[_c('input',{staticClass:"custom-control-input",attrs:{"type":"checkbox","id":_vm.id}}),_c('label',{staticClass:"custom-control-label",attrs:{"for":_vm.id}},[_vm._t("default")],2)])}
var checkboxvue_type_template_id_7195ef4e_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/checkbox.vue?vue&type=template&id=7195ef4e&scoped=true&

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
  props: ['checked', 'partial']
});
// CONCATENATED MODULE: ./src/components/checkbox.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_checkboxvue_type_script_lang_js_ = (checkboxvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/checkbox.vue?vue&type=style&index=0&id=7195ef4e&scoped=true&lang=css&
var checkboxvue_type_style_index_0_id_7195ef4e_scoped_true_lang_css_ = __webpack_require__("a66f");

// CONCATENATED MODULE: ./src/components/checkbox.vue






/* normalize component */

var checkbox_component = normalizeComponent(
  components_checkboxvue_type_script_lang_js_,
  checkboxvue_type_template_id_7195ef4e_scoped_true_render,
  checkboxvue_type_template_id_7195ef4e_scoped_true_staticRenderFns,
  false,
  null,
  "7195ef4e",
  null
  
)

checkbox_component.options.__file = "checkbox.vue"
/* harmony default export */ var components_checkbox = (checkbox_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"22550d4c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/radio.vue?vue&type=template&id=2c2e0668&scoped=true&
var radiovue_type_template_id_2c2e0668_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"custom-control custom-radio"},[_c('input',{staticClass:"custom-control-input",attrs:{"type":"radio","id":_vm.id,"name":"customRadio"}}),_c('label',{staticClass:"custom-control-label",attrs:{"for":_vm.id}},[_vm._t("default")],2)])}
var radiovue_type_template_id_2c2e0668_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/radio.vue?vue&type=template&id=2c2e0668&scoped=true&

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
var radiovue_type_script_lang_js_id = 0;
/* harmony default export */ var radiovue_type_script_lang_js_ = ({
  name: 'radio',
  beforeCreate: function beforeCreate() {
    this.id = 'radio' + radiovue_type_script_lang_js_id;
    radiovue_type_script_lang_js_id += 1;
  },
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: ['checked', 'partial', 'name', 'value']
});
// CONCATENATED MODULE: ./src/components/radio.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_radiovue_type_script_lang_js_ = (radiovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/radio.vue?vue&type=style&index=0&id=2c2e0668&scoped=true&lang=css&
var radiovue_type_style_index_0_id_2c2e0668_scoped_true_lang_css_ = __webpack_require__("a525");

// CONCATENATED MODULE: ./src/components/radio.vue






/* normalize component */

var radio_component = normalizeComponent(
  components_radiovue_type_script_lang_js_,
  radiovue_type_template_id_2c2e0668_scoped_true_render,
  radiovue_type_template_id_2c2e0668_scoped_true_staticRenderFns,
  false,
  null,
  "2c2e0668",
  null
  
)

radio_component.options.__file = "radio.vue"
/* harmony default export */ var components_radio = (radio_component.exports);
// CONCATENATED MODULE: ./src/export.js





/* harmony default export */ var src_export = ({
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