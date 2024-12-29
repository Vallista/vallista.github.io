"use strict";
(self["webpackChunk_vallista_blog"] = self["webpackChunk_vallista_blog"] || []).push([[477],{

/***/ 2184:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  V: function() { return /* binding */ ListTable; }
});

// EXTERNAL MODULE: ../../packages/design-system/dist/index.js + 112 modules
var dist = __webpack_require__(3109);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 9 modules
var gatsby_browser_entry = __webpack_require__(3862);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@emotion+styled@11.14.0_@emotion+react@11.14.0_@types+react@18.3.18_react@18.2.0__@types+react@18.3.18_react@18.2.0/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js + 1 modules
var emotion_styled_base_browser_esm = __webpack_require__(2803);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@emotion+react@11.14.0_@types+react@18.3.18_react@18.2.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js
var emotion_react_browser_esm = __webpack_require__(814);
;// ./src/components/ListTable/ListTable.style.tsx
const _TitleWrapper=/*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)("header",{target:"e1f3h4lz2"})(_ref=>{let{theme,underline}=_ref;return/*#__PURE__*//*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)(underline&&/*#__PURE__*//*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)("border-bottom:1px solid ",theme.colors.PRIMARY.ACCENT_4,";"+( true?"":0), true?"":0),";"+( true?"":0), true?"":0);},";"+( true?"":0));const _List=/*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)("div",{target:"e1f3h4lz1"})( true?"":0);const _ListItem=/*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)("a",{target:"e1f3h4lz0"})("display:flex;justify-content:space-between;align-items:center;border:none!important;border-radius:6px;padding:0.625rem 1.5rem;margin:0 -1.5rem;",_ref2=>{let{theme}=_ref2;return/*#__PURE__*//*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)("color:",theme.colors.PRIMARY.ACCENT_6,"!important;&:hover{background:",theme.colors.PRIMARY.ACCENT_2,"!important;color:",theme.colors.PRIMARY.FOREGROUND,"!important;}&>span:first-of-type{max-width:85%;}&>span:last-of-type{max-width:15%;white-space:nowrap;}&:last-of-type{color:",theme.colors.PRIMARY.ACCENT_3,";}"+( true?"":0), true?"":0);},";"+( true?"":0));
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(3159);
;// ./src/components/ListTable/index.tsx
const ListTable=props=>{const{title,list,underline=false}=props;return/*#__PURE__*/(0,jsx_runtime.jsxs)(dist/* Container */.mc,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(_TitleWrapper,{underline:underline,children:/*#__PURE__*/(0,jsx_runtime.jsx)(dist/* Text */.EY,{as:"h3",size:32,weight:800,children:title})}),/*#__PURE__*/(0,jsx_runtime.jsx)(dist/* Spacer */.hK,{y:1}),/*#__PURE__*/(0,jsx_runtime.jsx)(_List,{children:list.map(it=>/*#__PURE__*/(0,jsx_runtime.jsxs)(_ListItem,{onClick:()=>moveToLocation(it.slug),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(dist/* Text */.EY,{as:"span",size:16,weight:600,children:it.name}),/*#__PURE__*/(0,jsx_runtime.jsx)(dist/* Text */.EY,{as:"span",size:14,weight:300,children:it.date})]},it.slug))})]});function moveToLocation(target){(0,gatsby_browser_entry.navigate)(target);}};

/***/ })

}]);
//# sourceMappingURL=24527fd91f09a965b3de7675dd3d25f3404ee39d-8c098493b872c88672c5.js.map