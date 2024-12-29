"use strict";
(self["webpackChunk_vallista_blog"] = self["webpackChunk_vallista_blog"] || []).push([[245],{

/***/ 4839:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(189);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2803);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(814);
/* harmony import */ var _vallista_design_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3109);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3862);
/* harmony import */ var _components_ListTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2184);
/* harmony import */ var _components_Seo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5539);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(392);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3159);


var _templateObject;
function _EMOTION_STRINGIFIED_CSS_ERROR__() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}







const IndexPage = props => {
  const {
    data
  } = props;
  const {
    nodes
  } = data.allMarkdownRemark;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Container */ .mc, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_Seo__WEBPACK_IMPORTED_MODULE_4__/* .Seo */ .G, {
      name: "\uD648"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Header, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(Wrapper, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(Title, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .EY, {
            as: "span",
            size: 48,
            weight: 800,
            children: "\uC5B4\uC11C\uC624\uC138\uC694!"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .EY, {
            as: "h1",
            size: 48,
            weight: 800,
            lineHeight: 56,
            children: "\uC800\uB294 \uB9C8\uAD11\uD718\uC785\uB2C8\uB2E4."
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(SubTitle, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .EY, {
            as: "p",
            size: 20,
            weight: 400,
            lineHeight: 40,
            children: ["\uB300\uD55C\uBBFC\uAD6D \uC11C\uC6B8\uC5D0\uC11C ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("strong", {
              children: "\uC18C\uD504\uD2B8\uC6E8\uC5B4 \uC5D4\uC9C0\uB2C8\uC5B4"
            }), "\uB85C \uC77C\uD558\uACE0 \uC788\uC5B4\uC694. \uD55C \uBD84\uC57C\uC5D0 \uAD6D\uD55C\uB418\uC9C0 \uC54A\uB294 \uC5EC\uB7EC \uBB38\uC81C\uB97C \uD574\uACB0\uD558\uB294 \uAC83\uC5D0 \uC990\uAC70\uC6C0\uC744 \uB290\uB08D\uB2C8\uB2E4. \uACF5\uBD80\uD558\uACE0 \uB290\uB080\uC810\uC744 \uC704\uC8FC\uB85C \uBE14\uB85C\uADF8\uC5D0 \uAE00\uC744 \uC791\uC131\uD558\uACE0 \uC788\uC5B4\uC694. \uCD5C\uADFC\uC5D0\uB294 \uD504\uB860\uD2B8\uC5D4\uB4DC \uBB38\uC81C \uD574\uACB0\uC5D0 \uAD00\uC2EC\uC774 \uB9CE\uC544, \uB9CE\uC740 \uC2DC\uAC04\uC744 \uC3DF\uACE0 \uC788\uC5B4\uC694. \uB7EC\uC2A4\uD2B8\uB97C \uAE30\uBC18\uC73C\uB85C\uD55C \uC6F9 \uC0DD\uD0DC\uACC4\uAC00 \uAE30\uB300\uB3FC\uC694!"]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Button */ .$n, {
          size: "large",
          color: "alert",
          onClick: () => moveToLocation('/posts'),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .EY, {
            size: 16,
            weight: 800,
            children: "\uBE14\uB85C\uADF8 \uAE00 \uBCF4\uB7EC\uAC08\uAE4C\uC694?"
          })
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Contents, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_ListTable__WEBPACK_IMPORTED_MODULE_3__/* .ListTable */ .V, {
        title: "\uCD5C\uADFC \uAE00",
        list: filteredNewestPosts(nodes)
      })
    })]
  });
  function getSimpleDate(target) {
    const [, month, day] = (0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .getTime */ .WB)(target);
    return Number(month) + "\uC6D4 " + Number(day) + "\uC77C";
  }
  function moveToLocation(target) {
    (0,gatsby__WEBPACK_IMPORTED_MODULE_2__.navigate)(target);
  }
  function filteredNewestPosts(posts) {
    const cuttingCount = 5;
    return (0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .filteredByDraft */ .KF)(posts).filter((_, idx) => idx < cuttingCount + 1).map(it => ({
      name: it.frontmatter.title,
      slug: it.fields.slug,
      date: getSimpleDate(it.frontmatter.date)
    }));
  }
};
const HandAnimation = (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__/* .keyframes */ .i7)(_templateObject || (_templateObject = (0,_babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)(["\n  0% {\n    transform: rotateZ(0);\n  }\n\n  50% {\n    transform: rotateZ(30deg);\n  }\n\n  100% {\n    transform: rotateZ(0deg);\n  }\n"])));
const Wrapper = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("div",  true ? {
  target: "e1gk0zby4"
} : 0)( true ? {
  name: "8iutvn",
  styles: "margin-left:auto;margin-right:auto;max-width:900px;padding:2rem"
} : 0);
const Header = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("header",  true ? {
  target: "e1gk0zby3"
} : 0)( true ? {
  name: "1j66vkv",
  styles: "padding:2rem 0"
} : 0);
const Title = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("div",  true ? {
  target: "e1gk0zby2"
} : 0)("margin-bottom:1.5rem;max-width:550px;&>span:first-of-type{position:relative;&::after{position:absolute;right:-4rem;top:-0.5rem;content:'\u270B';display:block;animation:", HandAnimation, " 1s ease-in-out infinite;}}" + ( true ? "" : 0));
const SubTitle = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("div",  true ? {
  target: "e1gk0zby1"
} : 0)( true ? {
  name: "1i7yo1v",
  styles: "max-width:550px;margin-bottom:2rem"
} : 0);
const Contents = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("section",  true ? {
  target: "e1gk0zby0"
} : 0)( true ? {
  name: "1jwuio6",
  styles: "width:100%;margin-left:auto;margin-right:auto;max-width:900px;padding:2rem"
} : 0);
/* harmony default export */ __webpack_exports__["default"] = (IndexPage);
const pageQuery = "757159059";

/***/ })

}]);
//# sourceMappingURL=component---src-pages-index-tsx-a3a21087018d89432953.js.map