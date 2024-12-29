"use strict";
(self["webpackChunk_vallista_blog"] = self["webpackChunk_vallista_blog"] || []).push([[212],{

/***/ 7782:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4235);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2803);
/* harmony import */ var _vallista_design_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3109);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1855);
/* harmony import */ var _components_ListTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2184);
/* harmony import */ var _components_Seo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5539);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(392);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3159);



function _EMOTION_STRINGIFIED_CSS_ERROR__() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}






const PostsPage = props => {
  const {
    data
  } = props;
  const {
    nodes
  } = data.allMarkdownRemark;
  const {
    0: search,
    1: setSearch
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('');
  const posts = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .filteredByDraft */ .KF)(nodes).sort((a, b) => {
    const base = (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .toDate */ .ay)(a.frontmatter.date);
    const target = (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .toDate */ .ay)(b.frontmatter.date);
    return target.getTime() - base.getTime();
  }), [nodes]);
  const sortPosts = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => posts.map(it => {
    const {
      slug
    } = it.fields;
    const {
      date,
      title: name
    } = it.frontmatter;
    const [, month, day] = (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .getTime */ .WB)(date);
    const time = (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .toDate */ .ay)(date);
    return {
      time: time.getTime(),
      date: Number(month) + "\uC6D4 " + Number(day) + "\uC77C",
      name,
      slug
    };
  }), [posts]);
  const views = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
    const remake = posts.reduce((acc, curr) => {
      const {
        slug
      } = curr.fields;
      const {
        date,
        title: name
      } = curr.frontmatter;
      const [year, month, day] = (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .getTime */ .WB)(date);
      if (!acc[year]) acc[year] = [];
      acc[year].push({
        name,
        date: Number(month) + "\uC6D4 " + Number(day) + "\uC77C",
        slug
      });
      return acc;
    }, {});
    const values = Object.values(remake);
    return Object.keys(remake).map((it, idx) => ({
      year: it,
      posts: values[idx]
    })).sort((a, b) => Number(b.year) - Number(a.year));
  }, [nodes]);
  const filteredSearchPosts = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => sortPosts.filter(it => it.name.toLocaleUpperCase().includes(search.toLocaleUpperCase())), [sortPosts, search]);
  const hasSearchText = search.length !== 0;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_2__/* .Container */ .mc, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_Seo__WEBPACK_IMPORTED_MODULE_5__/* .Seo */ .G, {
      name: "\uAE00 \uBAA9\uB85D"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(Wrapper, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_2__/* .Container */ .mc, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_2__/* .SearchInput */ .DO, {
            value: search,
            onChange: setSearch,
            size: "large",
            placeholder: "\uAC80\uC0C9\uD560 \uD14D\uC2A4\uD2B8\uB97C \uC785\uB825\uD558\uC138\uC694."
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_2__/* .Spacer */ .hK, {
          y: 2
        })]
      }), hasSearchText ? filteredSearchPosts.length === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_2__/* .Text */ .EY, {
          size: 20,
          weight: 600,
          children: "\uAC80\uC0C9\uB41C \uACB0\uACFC\uAC00 \uC5C6\uC5B4\uC694 :("
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_2__/* .Text */ .EY, {
          size: 20,
          weight: 600,
          children: "\uB2E4\uB978 \uACB0\uACFC\uB97C \uAC80\uC0C9\uD574\uBCF4\uC2DC\uACA0\uC5B4\uC694?"
        })]
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_ListTable__WEBPACK_IMPORTED_MODULE_4__/* .ListTable */ .V, {
        underline: true,
        title: "\uAC80\uC0C9\uACB0\uACFC",
        list: filteredSearchPosts
      }) : views.map(it => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_2__/* .Container */ .mc, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_ListTable__WEBPACK_IMPORTED_MODULE_4__/* .ListTable */ .V, {
            title: it.year,
            list: it.posts,
            underline: true
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_2__/* .Spacer */ .hK, {
          y: 2
        })]
      }, it.year))]
    })]
  });
};
const Wrapper = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)("section",  true ? {
  target: "ef8makw0"
} : 0)( true ? {
  name: "167j9n6",
  styles: "margin:0 auto;width:100%;max-width:900px;padding:2rem"
} : 0);
/* harmony default export */ __webpack_exports__["default"] = (PostsPage);
const pageQuery = "1384431657";

/***/ }),

/***/ 2929:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var fails = __webpack_require__(5014);

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call -- required for testing
    method.call(null, argument || function () { return 1; }, 1);
  });
};


/***/ }),

/***/ 5389:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(3317);

module.exports = uncurryThis([].slice);


/***/ }),

/***/ 3315:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var arraySlice = __webpack_require__(5389);

var floor = Math.floor;

var sort = function (array, comparefn) {
  var length = array.length;

  if (length < 8) {
    // insertion sort
    var i = 1;
    var element, j;

    while (i < length) {
      j = i;
      element = array[i];
      while (j && comparefn(array[j - 1], element) > 0) {
        array[j] = array[--j];
      }
      if (j !== i++) array[j] = element;
    }
  } else {
    // merge sort
    var middle = floor(length / 2);
    var left = sort(arraySlice(array, 0, middle), comparefn);
    var right = sort(arraySlice(array, middle), comparefn);
    var llength = left.length;
    var rlength = right.length;
    var lindex = 0;
    var rindex = 0;

    while (lindex < llength || rindex < rlength) {
      array[lindex + rindex] = (lindex < llength && rindex < rlength)
        ? comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++]
        : lindex < llength ? left[lindex++] : right[rindex++];
    }
  }

  return array;
};

module.exports = sort;


/***/ }),

/***/ 8506:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var TO_STRING_TAG_SUPPORT = __webpack_require__(381);
var isCallable = __webpack_require__(1112);
var classofRaw = __webpack_require__(2285);
var wellKnownSymbol = __webpack_require__(4438);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var $Object = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) === 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) === 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};


/***/ }),

/***/ 5717:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var tryToString = __webpack_require__(9850);

var $TypeError = TypeError;

module.exports = function (O, P) {
  if (!delete O[P]) throw new $TypeError('Cannot delete property ' + tryToString(P) + ' of ' + tryToString(O));
};


/***/ }),

/***/ 8578:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var userAgent = __webpack_require__(9136);

var firefox = userAgent.match(/firefox\/(\d+)/i);

module.exports = !!firefox && +firefox[1];


/***/ }),

/***/ 2546:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var UA = __webpack_require__(9136);

module.exports = /MSIE|Trident/.test(UA);


/***/ }),

/***/ 1384:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var userAgent = __webpack_require__(9136);

var webkit = userAgent.match(/AppleWebKit\/(\d+)\./);

module.exports = !!webkit && +webkit[1];


/***/ }),

/***/ 381:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var wellKnownSymbol = __webpack_require__(4438);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ 9390:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var classof = __webpack_require__(8506);

var $String = String;

module.exports = function (argument) {
  if (classof(argument) === 'Symbol') throw new TypeError('Cannot convert a Symbol value to a string');
  return $String(argument);
};


/***/ }),

/***/ 4235:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(5761);
var uncurryThis = __webpack_require__(3317);
var aCallable = __webpack_require__(5477);
var toObject = __webpack_require__(5136);
var lengthOfArrayLike = __webpack_require__(3481);
var deletePropertyOrThrow = __webpack_require__(5717);
var toString = __webpack_require__(9390);
var fails = __webpack_require__(5014);
var internalSort = __webpack_require__(3315);
var arrayMethodIsStrict = __webpack_require__(2929);
var FF = __webpack_require__(8578);
var IE_OR_EDGE = __webpack_require__(2546);
var V8 = __webpack_require__(780);
var WEBKIT = __webpack_require__(1384);

var test = [];
var nativeSort = uncurryThis(test.sort);
var push = uncurryThis(test.push);

// IE8-
var FAILS_ON_UNDEFINED = fails(function () {
  test.sort(undefined);
});
// V8 bug
var FAILS_ON_NULL = fails(function () {
  test.sort(null);
});
// Old WebKit
var STRICT_METHOD = arrayMethodIsStrict('sort');

var STABLE_SORT = !fails(function () {
  // feature detection can be too slow, so check engines versions
  if (V8) return V8 < 70;
  if (FF && FF > 3) return;
  if (IE_OR_EDGE) return true;
  if (WEBKIT) return WEBKIT < 603;

  var result = '';
  var code, chr, value, index;

  // generate an array with more 512 elements (Chakra and old V8 fails only in this case)
  for (code = 65; code < 76; code++) {
    chr = String.fromCharCode(code);

    switch (code) {
      case 66: case 69: case 70: case 72: value = 3; break;
      case 68: case 71: value = 4; break;
      default: value = 2;
    }

    for (index = 0; index < 47; index++) {
      test.push({ k: chr + index, v: value });
    }
  }

  test.sort(function (a, b) { return b.v - a.v; });

  for (index = 0; index < test.length; index++) {
    chr = test[index].k.charAt(0);
    if (result.charAt(result.length - 1) !== chr) result += chr;
  }

  return result !== 'DGBEFHACIJK';
});

var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD || !STABLE_SORT;

var getSortCompare = function (comparefn) {
  return function (x, y) {
    if (y === undefined) return -1;
    if (x === undefined) return 1;
    if (comparefn !== undefined) return +comparefn(x, y) || 0;
    return toString(x) > toString(y) ? 1 : -1;
  };
};

// `Array.prototype.sort` method
// https://tc39.es/ecma262/#sec-array.prototype.sort
$({ target: 'Array', proto: true, forced: FORCED }, {
  sort: function sort(comparefn) {
    if (comparefn !== undefined) aCallable(comparefn);

    var array = toObject(this);

    if (STABLE_SORT) return comparefn === undefined ? nativeSort(array) : nativeSort(array, comparefn);

    var items = [];
    var arrayLength = lengthOfArrayLike(array);
    var itemsLength, index;

    for (index = 0; index < arrayLength; index++) {
      if (index in array) push(items, array[index]);
    }

    internalSort(items, getSortCompare(comparefn));

    itemsLength = lengthOfArrayLike(items);
    index = 0;

    while (index < itemsLength) array[index] = items[index++];
    while (index < arrayLength) deletePropertyOrThrow(array, index++);

    return array;
  }
});


/***/ })

}]);
//# sourceMappingURL=component---src-pages-posts-tsx-07a72210e1a57f027168.js.map