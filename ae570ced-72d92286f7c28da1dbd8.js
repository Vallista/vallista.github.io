"use strict";
(self["webpackChunk_vallista_blog"] = self["webpackChunk_vallista_blog"] || []).push([[785],{

/***/ 4798:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2803);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(814);
/* harmony import */ var _vallista_design_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3109);
/* harmony import */ var _components_Seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5539);
/* harmony import */ var _hooks_useConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9427);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3159);

function _EMOTION_STRINGIFIED_CSS_ERROR__() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}





const ResumePage = () => {
  const {
    resume
  } = (0,_hooks_useConfig__WEBPACK_IMPORTED_MODULE_3__/* .useConfig */ .U)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Container */ .mc, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_Seo__WEBPACK_IMPORTED_MODULE_2__/* .Seo */ .G, {
      name: "\uC774\uB825\uC11C",
      image: "/resume.png"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Header, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Wrapper, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Container */ .mc, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Title, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Container */ .mc, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .EY, {
                as: "h2",
                size: 48,
                weight: 800,
                children: resume.config.name
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .EY, {
                as: "h2",
                size: 32,
                weight: 800,
                children: resume.config.role
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Spacer */ .hK, {
            y: 1
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(SubTitle, {
            children: [resume.config.bio.map(it => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .EY, {
              as: "p",
              size: 20,
              weight: 400,
              lineHeight: 40,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                dangerouslySetInnerHTML: {
                  __html: it
                }
              })
            }, it)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Container */ .mc, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Spacer */ .hK, {
                y: 1.5
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Container */ .mc, {
              row: true,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Button */ .$n, {
                size: "large",
                width: 220,
                onClick: () => openNewPage(resume.config.github),
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Container */ .mc, {
                  row: true,
                  center: true,
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("svg", {
                    viewBox: "0 0 24 24",
                    width: "30",
                    height: "30",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    fill: "none",
                    shapeRendering: "geometricPrecision",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
                      d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Spacer */ .hK, {
                    x: 0.3
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .EY, {
                    size: 16,
                    weight: 600,
                    children: "GitHub \uBC29\uBB38\uD558\uAE30"
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Button */ .$n, {
                size: "large",
                width: 240,
                onClick: () => openNewPage(resume.config.github),
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Container */ .mc, {
                  row: true,
                  center: true,
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("svg", {
                    viewBox: "0 0 24 24",
                    width: "30",
                    height: "30",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    fill: "none",
                    shapeRendering: "geometricPrecision",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
                      d: "M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
                      d: "M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Spacer */ .hK, {
                    x: 0.3
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .EY, {
                    size: 16,
                    weight: 600,
                    children: "\uC774\uC804 \uBE14\uB85C\uADF8 \uBC29\uBB38\uD558\uAE30"
                  })]
                })
              })]
            })]
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Spacer */ .hK, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Box, {
      id: "career",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Contents, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Container */ .mc, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .EY, {
            size: 40,
            weight: 800,
            children: resume.careers.title
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Spacer */ .hK, {
            y: 1.5
          }), resume.careers.list.map(it => {
            var _it$descriptions, _it$projects;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(TwoColumn, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Container */ .mc, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .EY, {
                    as: "h3",
                    size: 24,
                    weight: 500,
                    children: it.name
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Spacer */ .hK, {
                    y: 1
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .EY, {
                    as: "span",
                    size: 16,
                    children: [it.startDate, " ~ ", it.endDate]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .EY, {
                    as: "span",
                    size: 16,
                    children: it.position
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .EY, {
                    as: "span",
                    size: 16,
                    children: it.department
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Spacer */ .hK, {
                    y: 1
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                    children: (_it$descriptions = it.descriptions) === null || _it$descriptions === void 0 ? void 0 : _it$descriptions.map((it_, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .EY, {
                      children: it_
                    }, idx))
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Container */ .mc, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  children: (_it$projects = it.projects) === null || _it$projects === void 0 ? void 0 : _it$projects.map((it_, idx) => {
                    var _it_$descriptions, _it_$which;
                    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Container */ .mc, {
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .EY, {
                        size: 24,
                        weight: 600,
                        as: "h3",
                        children: it_.name
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Spacer */ .hK, {
                        y: 1
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .EY, {
                        size: 16,
                        children: [it_.startDate, " ~ ", it_.endDate]
                      }), (_it_$descriptions = it_.descriptions) === null || _it_$descriptions === void 0 ? void 0 : _it_$descriptions.map((it__, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .EY, {
                        size: 16,
                        children: it__
                      }, idx)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Spacer */ .hK, {
                        y: 1
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("ul", {
                        children: (_it_$which = it_.which) === null || _it_$which === void 0 ? void 0 : _it_$which.map((it__, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li", {
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .EY, {
                            size: 14,
                            children: it__
                          })
                        }, idx))
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Spacer */ .hK, {
                        y: 2
                      })]
                    }, idx);
                  })
                })
              })]
            }, it.name);
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Box, {
      id: "skills",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Contents, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Container */ .mc, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .EY, {
            size: 40,
            weight: 800,
            children: resume.skills.title
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Spacer */ .hK, {
            y: 1.5
          }), resume.skills.list.map((it, idx) => {
            var _it$descriptions2;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Container */ .mc, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .EY, {
                as: "h3",
                size: 24,
                weight: 600,
                children: it.title
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                children: (_it$descriptions2 = it.descriptions) === null || _it$descriptions2 === void 0 ? void 0 : _it$descriptions2.map((it_, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("ul", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li", {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Container */ .mc, {
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .EY, {
                        size: 16,
                        children: it_.title
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(SubTitleText, {
                        children: it_.subTitle.map((it__, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .EY, {
                          size: 14,
                          children: it__
                        }, idx))
                      })]
                    })
                  })
                }, idx))
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Spacer */ .hK, {
                y: 1
              })]
            }, idx);
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Box, {
      id: "hobby",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Contents, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Container */ .mc, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .EY, {
            size: 40,
            weight: 800,
            children: resume.hobby.description
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Spacer */ .hK, {
            y: 1.5
          }), resume.hobby.list.map((it, idx) => {
            var _it$descriptions3;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Container */ .mc, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .EY, {
                as: "h3",
                size: 24,
                weight: 600,
                children: it.title
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                children: (_it$descriptions3 = it.descriptions) === null || _it$descriptions3 === void 0 ? void 0 : _it$descriptions3.map((it_, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("ul", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li", {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Container */ .mc, {
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .EY, {
                        size: 16,
                        children: it_
                      })
                    })
                  })
                }, idx))
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Spacer */ .hK, {
                y: 1
              })]
            }, idx);
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Box, {
      id: "speaker",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Contents, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Container */ .mc, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .EY, {
            size: 40,
            weight: 800,
            children: resume.speaker.description
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Spacer */ .hK, {
            y: 1.5
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("ul", {
            children: resume.speaker.list.map((it, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .EY, {
                size: 16,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
                  onClick: () => openNewPage(it.url),
                  children: it.title
                })
              })
            }, idx))
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Box, {
      id: "activities",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Contents, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Container */ .mc, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .EY, {
            size: 40,
            weight: 800,
            children: resume.activities.description
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Spacer */ .hK, {
            y: 1.5
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("ul", {
            children: resume.activities.list.map((it, idx) => it.url !== null ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .EY, {
                size: 16,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
                  onClick: () => openNewPage(it.url),
                  children: it.title
                })
              })
            }, idx) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .EY, {
                size: 16,
                children: it.title
              })
            }, idx))
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Box, {
      id: "lectures",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Contents, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Container */ .mc, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .EY, {
            size: 40,
            weight: 800,
            children: resume.lectures.description
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Spacer */ .hK, {
            y: 1.5
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("ul", {
            children: resume.lectures.list.map((it, idx) => it.url !== null ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .EY, {
                size: 16,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
                  onClick: () => openNewPage(it.url),
                  children: it.title
                })
              })
            }, idx) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .EY, {
                size: 16,
                children: it.title
              })
            }, idx))
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Box, {
      id: "awards",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Contents, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Container */ .mc, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .EY, {
            size: 40,
            weight: 800,
            children: resume.awards.description
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Spacer */ .hK, {
            y: 1.5
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("ul", {
            children: resume.awards.list.map((it, idx) => it.url !== null ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .EY, {
                size: 16,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
                  onClick: () => openNewPage(it.url),
                  children: it.title
                })
              })
            }, idx) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .EY, {
                size: 16,
                children: it.title
              })
            }, idx))
          })]
        })
      })
    })]
  });
  function openNewPage(target) {
    window.open(target, '_blink');
  }
};
const Wrapper = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("div",  true ? {
  target: "ew4nyrw7"
} : 0)( true ? {
  name: "8iutvn",
  styles: "margin-left:auto;margin-right:auto;max-width:900px;padding:2rem"
} : 0);
const Box = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("div",  true ? {
  target: "ew4nyrw6"
} : 0)( true ? "" : 0);
const Header = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("header",  true ? {
  target: "ew4nyrw5"
} : 0)( true ? {
  name: "1j66vkv",
  styles: "padding:2rem 0"
} : 0);
const Title = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("div",  true ? {
  target: "ew4nyrw4"
} : 0)( true ? {
  name: "y82dxu",
  styles: "max-width:550px"
} : 0);
const SubTitle = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("div",  true ? {
  target: "ew4nyrw3"
} : 0)( true ? {
  name: "57shld",
  styles: "max-width:550px;@media screen and (max-width: 1024px){&>div:last-of-type{flex-direction:column!important;&>*{margin-left:0;margin-bottom:1rem;}}}"
} : 0);
const Contents = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("div",  true ? {
  target: "ew4nyrw2"
} : 0)("margin-left:auto;margin-right:auto;max-width:900px;padding:2rem;ul{list-style:disc;padding-left:1.2rem;}li{margin-bottom:0.5rem;padding:0.2rem 0;line-height:1.4;&::marker{", _ref => {
  let {
    theme
  } = _ref;
  return /*#__PURE__*/ /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__/* .css */ .AH)("color:", theme.colors.HIGHLIGHT.PINK, ";" + ( true ? "" : 0),  true ? "" : 0,  true ? "" : 0,  true ? "" : 0);
}, ";}}" + ( true ? "" : 0));
const TwoColumn = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("div",  true ? {
  target: "ew4nyrw1"
} : 0)("display:flex;margin-bottom:2rem;&>div:first-of-type{height:auto;box-sizing:border-box;flex:3;padding-right:2rem;&>div{display:flex;flex-direction:column;gap:0;position:sticky;top:85px;&>div:last-of-type{", _ref2 => {
  let {
    theme
  } = _ref2;
  return /*#__PURE__*/ /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__/* .css */ .AH)("color:", theme.colors.PRIMARY.ACCENT_5, ";&>p{margin-bottom:0.5rem!important;}" + ( true ? "" : 0),  true ? "" : 0,  true ? "" : 0,  true ? "" : 0);
}, ";}}}&>div:last-of-type{flex:7;}@media screen and (max-width: 1024px){flex-direction:column;&>div:last-of-type{padding-left:1rem;", _ref3 => {
  let {
    theme
  } = _ref3;
  return /*#__PURE__*/ /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__/* .css */ .AH)("border-left:3px solid ", theme.colors.HIGHLIGHT.PINK, ";" + ( true ? "" : 0),  true ? "" : 0,  true ? "" : 0,  true ? "" : 0);
}, ";}}" + ( true ? "" : 0));
const SubTitleText = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("div",  true ? {
  target: "ew4nyrw0"
} : 0)(_ref4 => {
  let {
    theme
  } = _ref4;
  return /*#__PURE__*/ /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__/* .css */ .AH)("color:", theme.colors.PRIMARY.ACCENT_5, ";" + ( true ? "" : 0),  true ? "" : 0,  true ? "" : 0,  true ? "" : 0);
}, ";" + ( true ? "" : 0));
/* harmony default export */ __webpack_exports__["default"] = (ResumePage);

/***/ })

}]);
//# sourceMappingURL=ae570ced-72d92286f7c28da1dbd8.js.map