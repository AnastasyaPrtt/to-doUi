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

/***/ "./src/Layout/Content.tsx":
/*!********************************!*\
  !*** ./src/Layout/Content.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Content: function() { return /* binding */ Content; }\n/* harmony export */ });\n/* harmony import */ var _components_ListItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/ListItem */ \"./src/components/ListItem.tsx\");\n/* harmony import */ var _components_Menu_Menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Menu/Menu */ \"./src/components/Menu/Menu.tsx\");\n/* harmony import */ var _components_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/style */ \"./src/components/style.ts\");\n/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/pages/_app */ \"./src/pages/_app.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"D:\\\\to-doUI\\\\client\\\\src\\\\Layout\\\\Content.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Content = function Content() {\n  _s();\n\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_pages_app__WEBPACK_IMPORTED_MODULE_3__.Context),\n      task = _useContext.task;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(task.tasks),\n      renderTasks = _useState[0],\n      setRenderTask = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('none'),\n      modal = _useState2[0],\n      setModal = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),\n      filter = _useState3[0],\n      setFilter = _useState3[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {\n    setRenderTask(task.tasks);\n  }, [task.tasks]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_style__WEBPACK_IMPORTED_MODULE_2__.MainStyle, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_Menu_Menu__WEBPACK_IMPORTED_MODULE_1__.Menu, {\n      onClick: function onClick() {\n        return setModal('add');\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 4\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_ListItem__WEBPACK_IMPORTED_MODULE_0__.ListItem, {\n      tasks: renderTasks\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 4\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 3\n  }, _this);\n};\n\n_s(Content, \"9HIooTviEs5Uaxo2RwghPCvrTQU=\");\n\n_c = Content;\n\nvar _c;\n\n$RefreshReg$(_c, \"Content\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvTGF5b3V0L0NvbnRlbnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVPLElBQU1RLE9BQWlCLEdBQUcsU0FBcEJBLE9BQW9CLEdBQU07RUFBQTs7RUFDdEMsa0JBQWlCSCxpREFBVSxDQUFDRiwrQ0FBRCxDQUEzQjtFQUFBLElBQVFNLElBQVIsZUFBUUEsSUFBUjs7RUFDQSxnQkFBcUNGLCtDQUFRLENBQUNFLElBQUksQ0FBQ0MsS0FBTixDQUE3QztFQUFBLElBQU9DLFdBQVA7RUFBQSxJQUFvQkMsYUFBcEI7O0VBQ0EsaUJBQTBCTCwrQ0FBUSxDQUFDLE1BQUQsQ0FBbEM7RUFBQSxJQUFPTSxLQUFQO0VBQUEsSUFBY0MsUUFBZDs7RUFDQSxpQkFBNEJQLCtDQUFRLENBQUMsRUFBRCxDQUFwQztFQUFBLElBQU9RLE1BQVA7RUFBQSxJQUFlQyxTQUFmOztFQUVBVixnREFBUyxDQUFDLFlBQU07SUFDZk0sYUFBYSxDQUFDSCxJQUFJLENBQUNDLEtBQU4sQ0FBYjtFQUNBLENBRlEsRUFFTixDQUFDRCxJQUFJLENBQUNDLEtBQU4sQ0FGTSxDQUFUO0VBR0Esb0JBQ0MsOERBQUMsd0RBQUQ7SUFBQSx3QkFDQyw4REFBQyx1REFBRDtNQUNDLE9BQU8sRUFBRTtRQUFBLE9BQU1JLFFBQVEsQ0FBQyxLQUFELENBQWQ7TUFBQTtJQURWO01BQUE7TUFBQTtNQUFBO0lBQUEsU0FERCxlQUlDLDhEQUFDLDBEQUFEO01BQVUsS0FBSyxFQUFFSDtJQUFqQjtNQUFBO01BQUE7TUFBQTtJQUFBLFNBSkQ7RUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBLFNBREQ7QUFRQSxDQWpCTTs7R0FBTUg7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9MYXlvdXQvQ29udGVudC50c3g/ZjM0YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaXN0SXRlbSB9IGZyb20gJ0AvY29tcG9uZW50cy9MaXN0SXRlbSdcclxuaW1wb3J0IHsgTWVudSB9IGZyb20gJ0AvY29tcG9uZW50cy9NZW51L01lbnUnXHJcbmltcG9ydCB7IFRhc2tQcm9wcyB9IGZyb20gJ0AvY29tcG9uZW50cy9pbnRlcmZhY2UnXHJcbmltcG9ydCB7IE1haW5TdHlsZSB9IGZyb20gJ0AvY29tcG9uZW50cy9zdHlsZSdcclxuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gJ0AvcGFnZXMvX2FwcCdcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBjb25zdCBDb250ZW50OiBSZWFjdC5GQyA9ICgpID0+IHtcclxuXHRjb25zdCB7IHRhc2sgfSA9IHVzZUNvbnRleHQoQ29udGV4dCk7XHJcblx0Y29uc3QgW3JlbmRlclRhc2tzLCBzZXRSZW5kZXJUYXNrXSA9IHVzZVN0YXRlKHRhc2sudGFza3MpXHJcblx0Y29uc3QgW21vZGFsLCBzZXRNb2RhbF0gPSB1c2VTdGF0ZSgnbm9uZScpXHJcblx0Y29uc3QgW2ZpbHRlciwgc2V0RmlsdGVyXSA9IHVzZVN0YXRlKCcnKVxyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0c2V0UmVuZGVyVGFzayh0YXNrLnRhc2tzKVxyXG5cdH0sIFt0YXNrLnRhc2tzXSlcclxuXHRyZXR1cm4gKFxyXG5cdFx0PE1haW5TdHlsZT5cclxuXHRcdFx0PE1lbnVcclxuXHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBzZXRNb2RhbCgnYWRkJyl9XHJcblx0XHRcdC8+XHJcblx0XHRcdDxMaXN0SXRlbSB0YXNrcz17cmVuZGVyVGFza3N9IC8+XHJcblx0XHQ8L01haW5TdHlsZT5cclxuXHQpXHJcbn1cclxuIl0sIm5hbWVzIjpbIkxpc3RJdGVtIiwiTWVudSIsIk1haW5TdHlsZSIsIkNvbnRleHQiLCJSZWFjdCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNvbnRlbnQiLCJ0YXNrIiwidGFza3MiLCJyZW5kZXJUYXNrcyIsInNldFJlbmRlclRhc2siLCJtb2RhbCIsInNldE1vZGFsIiwiZmlsdGVyIiwic2V0RmlsdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Layout/Content.tsx\n"));

/***/ })

});