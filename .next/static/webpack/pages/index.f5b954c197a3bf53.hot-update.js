"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/ui/RowContent/CardTextImg.js":
/*!*************************************************!*\
  !*** ./components/ui/RowContent/CardTextImg.js ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _CardTextImg_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CardTextImg.module.css */ \"./components/ui/RowContent/CardTextImg.module.css\");\n/* harmony import */ var _CardTextImg_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_CardTextImg_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction RowContentCard(props) {\n    const image = props.children.find((child)=>child.type === (next_image__WEBPACK_IMPORTED_MODULE_1___default()));\n    const content = props.children.filter((child)=>child.type !== (next_image__WEBPACK_IMPORTED_MODULE_1___default()));\n    return(// <div className={style.card}>\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat((_CardTextImg_module_css__WEBPACK_IMPORTED_MODULE_2___default().card), \" \").concat(imageFirst ? (_CardTextImg_module_css__WEBPACK_IMPORTED_MODULE_2___default().imageFirst) : (_CardTextImg_module_css__WEBPACK_IMPORTED_MODULE_2___default().contentFirst)),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_CardTextImg_module_css__WEBPACK_IMPORTED_MODULE_2___default().image),\n                children: image\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\hrncir\\\\OneDrive - TELES s.r.o\\\\Plocha\\\\React\\\\ArtMode\\\\components\\\\ui\\\\RowContent\\\\CardTextImg.js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_CardTextImg_module_css__WEBPACK_IMPORTED_MODULE_2___default().content),\n                children: content\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\hrncir\\\\OneDrive - TELES s.r.o\\\\Plocha\\\\React\\\\ArtMode\\\\components\\\\ui\\\\RowContent\\\\CardTextImg.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\hrncir\\\\OneDrive - TELES s.r.o\\\\Plocha\\\\React\\\\ArtMode\\\\components\\\\ui\\\\RowContent\\\\CardTextImg.js\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this));\n}\n_c = RowContentCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RowContentCard);\nvar _c;\n$RefreshReg$(_c, \"RowContentCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3VpL1Jvd0NvbnRlbnQvQ2FyZFRleHRJbWcuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBNkM7QUFDZDtBQUUvQixTQUFTRSxlQUFlQyxLQUFLO0lBQzNCLE1BQU1DLFFBQVFELE1BQU1FLFNBQVNDLEtBQUssQ0FBQ0MsUUFBVUEsTUFBTUMsU0FBU1AsbURBQUtBO0lBQ2pFLE1BQU1RLFVBQVVOLE1BQU1FLFNBQVNLLE9BQU8sQ0FBQ0gsUUFBVUEsTUFBTUMsU0FBU1AsbURBQUtBO0lBRXJFLE9BQ0UsK0JBQStCO2tCQUMvQiw4REFBQ1U7UUFDQ0MsV0FBVyxHQUNUQyxPQURZYixxRUFBVWMsRUFBQyxLQUV4QixPQURDRCxhQUFhYiwyRUFBZ0JhLEdBQUdiLDZFQUFrQmU7OzBCQUdwRCw4REFBQ0o7Z0JBQUlDLFdBQVdaLHNFQUFXSTswQkFBR0E7Ozs7OzswQkFDOUIsOERBQUNPO2dCQUFJQyxXQUFXWix3RUFBYVM7MEJBQUdBOzs7Ozs7Ozs7Ozs7QUFHdEM7S0FmU1A7QUFpQlQsK0RBQWVBLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91aS9Sb3dDb250ZW50L0NhcmRUZXh0SW1nLmpzP2ZlZjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlIGZyb20gXCIuL0NhcmRUZXh0SW1nLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcblxyXG5mdW5jdGlvbiBSb3dDb250ZW50Q2FyZChwcm9wcykge1xyXG4gIGNvbnN0IGltYWdlID0gcHJvcHMuY2hpbGRyZW4uZmluZCgoY2hpbGQpID0+IGNoaWxkLnR5cGUgPT09IEltYWdlKTtcclxuICBjb25zdCBjb250ZW50ID0gcHJvcHMuY2hpbGRyZW4uZmlsdGVyKChjaGlsZCkgPT4gY2hpbGQudHlwZSAhPT0gSW1hZ2UpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgLy8gPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNhcmR9PlxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e2Ake3N0eWxlLmNhcmR9ICR7XHJcbiAgICAgICAgaW1hZ2VGaXJzdCA/IHN0eWxlLmltYWdlRmlyc3QgOiBzdHlsZS5jb250ZW50Rmlyc3RcclxuICAgICAgfWB9XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5pbWFnZX0+e2ltYWdlfTwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY29udGVudH0+e2NvbnRlbnR9PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSb3dDb250ZW50Q2FyZDtcclxuIl0sIm5hbWVzIjpbInN0eWxlIiwiSW1hZ2UiLCJSb3dDb250ZW50Q2FyZCIsInByb3BzIiwiaW1hZ2UiLCJjaGlsZHJlbiIsImZpbmQiLCJjaGlsZCIsInR5cGUiLCJjb250ZW50IiwiZmlsdGVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1hZ2VGaXJzdCIsImNhcmQiLCJjb250ZW50Rmlyc3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ui/RowContent/CardTextImg.js\n"));

/***/ })

});