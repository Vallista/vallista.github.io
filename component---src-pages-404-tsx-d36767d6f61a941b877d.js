"use strict";
(self["webpackChunk_vallista_blog"] = self["webpackChunk_vallista_blog"] || []).push([[453],{

/***/ 1205:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _404; }
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@emotion+styled@11.14.0_@emotion+react@11.14.0_@types+react@18.3.18_react@18.2.0__@types+react@18.3.18_react@18.2.0/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js + 1 modules
var emotion_styled_base_browser_esm = __webpack_require__(2803);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@gatsbyjs+reach-router@2.0.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@gatsbyjs/reach-router/dist/index.modern.mjs
var index_modern = __webpack_require__(4092);
// EXTERNAL MODULE: ../../packages/design-system/dist/index.js + 112 modules
var dist = __webpack_require__(3109);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 9 modules
var gatsby_browser_entry = __webpack_require__(3862);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(1855);
;// ./src/assets/images/failure.gif
/* harmony default export */ var failure = (__webpack_require__.p + "static/failure-c8fee5d12dd160f4be5138d98ae354f0.gif");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(3159);
;// ./src/pages/404.tsx

function _EMOTION_STRINGIFIED_CSS_ERROR__() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}






const NotFoundPage = () => {
  const location = (0,index_modern.useLocation)();
  (0,react.useEffect)(() => {
    const normalizeUrlArr = location.pathname.split('/').filter(it => !!it).map(it => {
      const result = Number(it);
      if (isNaN(result)) return it;
      return result;
    });
    const count = normalizeUrlArr.reduce((acc, curr) => {
      if (typeof curr === 'number') acc += 1;
      return acc;
    }, 0);
    if (count > 2) {
      window.location.href = location.origin + "/" + normalizeUrlArr.slice(3).join('/') + "/";
    }
  }, []);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Center, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(dist/* Image */._V, {
      src: failure,
      width: 400,
      height: 400
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(dist/* Text */.EY, {
      size: 16,
      children: "\uD398\uC774\uC9C0\uB97C \uCC3E\uC9C0 \uBABB\uD588\uC5B4\uC694 :("
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(dist/* Spacer */.hK, {
      y: 0.5
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(gatsby_browser_entry.Link, {
      to: "/",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(dist/* Text */.EY, {
        size: 16,
        children: "\uD648\uC73C\uB85C \uAC00\uAE30"
      })
    })]
  });
};
const Center = /*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)("div",  true ? {
  target: "e1wn3oo10"
} : 0)( true ? {
  name: "1yxf6qu",
  styles: "display:flex;flex-direction:column;justify-content:center;align-items:center"
} : 0);
/* harmony default export */ var _404 = (NotFoundPage);

/***/ })

}]);
//# sourceMappingURL=component---src-pages-404-tsx-d36767d6f61a941b877d.js.map