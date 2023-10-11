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

/***/ "./src/components/Item.tsx":
/*!*********************************!*\
  !*** ./src/components/Item.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Item: function() { return /* binding */ Item; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../public */ \"./public/index.jsx\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ \"./src/components/style.ts\");\n/* harmony import */ var _useOnClickOutside__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useOnClickOutside */ \"./src/components/useOnClickOutside.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/home/user/Desktop/to-doUi/client/src/components/Item.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Item = function Item(_ref) {\n  _s();\n\n  var handleCompleteStatusUpdate = _ref.handleCompleteStatusUpdate,\n      handleClickEditTask = _ref.handleClickEditTask,\n      _onClick = _ref.onClick,\n      task = _ref.task;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),\n      isEdited = _useState[0],\n      setIsEdited = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(task.isChecked),\n      isComplete = _useState2[0],\n      setIsComplete = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      isDropdown = _useState3[0],\n      setDropdown = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(task.title),\n      text = _useState4[0],\n      setText = _useState4[1];\n\n  var handleCheckBox = function handleCheckBox() {\n    setIsComplete(!isComplete);\n    task.isChecked = !isComplete;\n    handleCompleteStatusUpdate(task);\n  };\n\n  var handleEditClick = function handleEditClick() {\n    setIsEdited(!isEdited);\n  };\n\n  var handleEditText = function handleEditText(event) {\n    setText(event.target.value);\n    handleClickEditTask(task, text);\n  };\n\n  var handleKeyDown = function handleKeyDown(event) {\n    if (event.key === 'Enter') {\n      setIsEdited(!isEdited);\n    }\n  };\n\n  var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();\n  (0,_useOnClickOutside__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(ref, function () {\n    return setDropdown(false);\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_2__.ItemStyle, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"label\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"span\", {\n          className: isComplete ? 'icon active' : 'icon',\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"input\", {\n            type: \"checkbox\",\n            checked: isComplete,\n            onChange: handleCheckBox\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 40,\n            columnNumber: 6\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_public__WEBPACK_IMPORTED_MODULE_1__.CheckedIcon, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 6\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 5\n        }, _this), !isEdited ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"input\", {\n          type: \"text\",\n          onChange: handleEditText,\n          onKeyDown: handleKeyDown,\n          value: text,\n          autoFocus: true\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 6\n        }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"h3\", {\n          onClick: handleEditClick,\n          children: text\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 6\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 4\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n        className: \"task-info\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n          children: task.date\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 5\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n          onClick: function onClick() {\n            return setDropdown(true);\n          },\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_public__WEBPACK_IMPORTED_MODULE_1__.InfoIcon, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 6\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_2__.DropdownBtnStyled, {\n            ref: ref,\n            className: isDropdown ? 'active' : '',\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"button\", {\n              onClick: handleEditClick,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_public__WEBPACK_IMPORTED_MODULE_1__.EditIcon, {}, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 62,\n                columnNumber: 8\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 61,\n              columnNumber: 7\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"button\", {\n              onClick: function onClick() {\n                return _onClick(task);\n              },\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_public__WEBPACK_IMPORTED_MODULE_1__.DeleteIcon, {}, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 65,\n                columnNumber: 8\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 64,\n              columnNumber: 7\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 60,\n            columnNumber: 6\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 5\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 4\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 3\n    }, _this)\n  }, void 0, false);\n};\n\n_s(Item, \"ie/pAG/SzmcIlQOyT593RsTd31U=\", false, function () {\n  return [_useOnClickOutside__WEBPACK_IMPORTED_MODULE_3__[\"default\"]];\n});\n\n_c = Item;\n\nvar _c;\n\n$RefreshReg$(_c, \"Item\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1FBQVQ7VUFBQTtVQUFBO1VBQUE7UUFBQSxTQURELGVBRUM7VUFBSyxPQUFPLEVBQUU7WUFBQSxPQUFNYixXQUFXLENBQUMsSUFBRCxDQUFqQjtVQUFBLENBQWQ7VUFBQSx3QkFDQyw4REFBQyw2Q0FBRDtZQUFBO1lBQUE7WUFBQTtVQUFBLFNBREQsZUFHQyw4REFBQyxxREFBRDtZQUFtQixHQUFHLEVBQUVZLEdBQXhCO1lBQTZCLFNBQVMsRUFBRWIsVUFBVSxHQUFHLFFBQUgsR0FBYyxFQUFoRTtZQUFBLHdCQUNDO2NBQVEsT0FBTyxFQUFFTSxlQUFqQjtjQUFBLHVCQUNDLDhEQUFDLDZDQUFEO2dCQUFBO2dCQUFBO2dCQUFBO2NBQUE7WUFERDtjQUFBO2NBQUE7Y0FBQTtZQUFBLFNBREQsZUFJQztjQUFRLE9BQU8sRUFBRTtnQkFBQSxPQUFNYixRQUFPLENBQUNDLElBQUQsQ0FBYjtjQUFBLENBQWpCO2NBQUEsdUJBQ0MsOERBQUMsK0NBQUQ7Z0JBQUE7Z0JBQUE7Z0JBQUE7Y0FBQTtZQUREO2NBQUE7Y0FBQTtjQUFBO1lBQUEsU0FKRDtVQUFBO1lBQUE7WUFBQTtZQUFBO1VBQUEsU0FIRDtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUEsU0FGRDtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUEsU0FsQkQ7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBRE0saUJBQVA7QUF1Q0EsQ0FuRU07O0dBQU1KO1VBMEJaRDs7O0tBMUJZQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9JdGVtLnRzeD9lNWZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ2hlY2tlZEljb24sIERlbGV0ZUljb24sIEVkaXRJY29uLCBJbmZvSWNvbiB9IGZyb20gJy4uLy4uL3B1YmxpYyc7XG5pbXBvcnQgeyBUYXNrSXRlbVByb3BzIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRHJvcGRvd25CdG5TdHlsZWQsIEl0ZW1TdHlsZSB9IGZyb20gJy4vc3R5bGUnO1xuaW1wb3J0IHVzZU9uQ2xpY2tPdXRzaWRlIGZyb20gJy4vdXNlT25DbGlja091dHNpZGUnO1xuXG5cbmV4cG9ydCBjb25zdCBJdGVtOiBSZWFjdC5GQzxUYXNrSXRlbVByb3BzPiA9ICh7IGhhbmRsZUNvbXBsZXRlU3RhdHVzVXBkYXRlLCBoYW5kbGVDbGlja0VkaXRUYXNrLCBvbkNsaWNrLCB0YXNrIH0pID0+IHtcblxuXHRjb25zdCBbaXNFZGl0ZWQsIHNldElzRWRpdGVkXSA9IHVzZVN0YXRlKHRydWUpO1xuXHRjb25zdCBbaXNDb21wbGV0ZSwgc2V0SXNDb21wbGV0ZV0gPSB1c2VTdGF0ZSh0YXNrLmlzQ2hlY2tlZClcblx0Y29uc3QgW2lzRHJvcGRvd24sIHNldERyb3Bkb3duXSA9IHVzZVN0YXRlKGZhbHNlKVxuXHRjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZSh0YXNrLnRpdGxlKVxuXG5cblx0Y29uc3QgaGFuZGxlQ2hlY2tCb3ggPSAoKSA9PiB7XG5cdFx0c2V0SXNDb21wbGV0ZSghaXNDb21wbGV0ZSk7XG5cdFx0dGFzay5pc0NoZWNrZWQgPSAhaXNDb21wbGV0ZTtcblx0XHRoYW5kbGVDb21wbGV0ZVN0YXR1c1VwZGF0ZSh0YXNrKVxuXHR9XG5cdGNvbnN0IGhhbmRsZUVkaXRDbGljayA9ICgpID0+IHtcblx0XHRzZXRJc0VkaXRlZCghaXNFZGl0ZWQpXG5cdH1cblx0Y29uc3QgaGFuZGxlRWRpdFRleHQgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG5cdFx0c2V0VGV4dChldmVudC50YXJnZXQudmFsdWUpXG5cdFx0aGFuZGxlQ2xpY2tFZGl0VGFzayh0YXNrLCB0ZXh0KVxuXHR9XG5cdGNvbnN0IGhhbmRsZUtleURvd24gPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG5cdFx0aWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xuXHRcdFx0c2V0SXNFZGl0ZWQoIWlzRWRpdGVkKVxuXHRcdH1cblx0fVxuXHRjb25zdCByZWYgPSB1c2VSZWYoKTtcblx0dXNlT25DbGlja091dHNpZGUocmVmLCAoKSA9PiBzZXREcm9wZG93bihmYWxzZSkpO1xuXG5cdHJldHVybiA8PlxuXHRcdDxJdGVtU3R5bGU+XG5cdFx0XHQ8bGFiZWw+XG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17aXNDb21wbGV0ZSA/ICdpY29uIGFjdGl2ZScgOiAnaWNvbid9PlxuXHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXtpc0NvbXBsZXRlfSBvbkNoYW5nZT17aGFuZGxlQ2hlY2tCb3h9IC8+XG5cdFx0XHRcdFx0PENoZWNrZWRJY29uIC8+XG5cdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0eyFpc0VkaXRlZCA/XG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVFZGl0VGV4dH1cblx0XHRcdFx0XHRcdG9uS2V5RG93bj17aGFuZGxlS2V5RG93bn1cblx0XHRcdFx0XHRcdHZhbHVlPXt0ZXh0fVxuXHRcdFx0XHRcdFx0YXV0b0ZvY3VzIC8+XG5cdFx0XHRcdFx0OlxuXHRcdFx0XHRcdDxoMyBvbkNsaWNrPXtoYW5kbGVFZGl0Q2xpY2t9PlxuXHRcdFx0XHRcdFx0e3RleHR9XG5cdFx0XHRcdFx0PC9oMz59XG5cdFx0XHQ8L2xhYmVsPlxuXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndGFzay1pbmZvJz5cblx0XHRcdFx0PHA+e3Rhc2suZGF0ZX08L3A+XG5cdFx0XHRcdDxkaXYgb25DbGljaz17KCkgPT4gc2V0RHJvcGRvd24odHJ1ZSl9PlxuXHRcdFx0XHRcdDxJbmZvSWNvbiAvPlxuXG5cdFx0XHRcdFx0PERyb3Bkb3duQnRuU3R5bGVkIHJlZj17cmVmfSBjbGFzc05hbWU9e2lzRHJvcGRvd24gPyAnYWN0aXZlJyA6ICcnfT5cblx0XHRcdFx0XHRcdDxidXR0b24gb25DbGljaz17aGFuZGxlRWRpdENsaWNrfT5cblx0XHRcdFx0XHRcdFx0PEVkaXRJY29uIC8+XG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdDxidXR0b24gb25DbGljaz17KCkgPT4gb25DbGljayh0YXNrKX0+XG5cdFx0XHRcdFx0XHRcdDxEZWxldGVJY29uIC8+XG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHQ8L0Ryb3Bkb3duQnRuU3R5bGVkPlxuXG5cdFx0XHRcdDwvZGl2PlxuXG5cblx0XHRcdDwvZGl2PlxuXHRcdDwvSXRlbVN0eWxlPlxuXHQ8Lz5cbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkNoZWNrZWRJY29uIiwiRGVsZXRlSWNvbiIsIkVkaXRJY29uIiwiSW5mb0ljb24iLCJEcm9wZG93bkJ0blN0eWxlZCIsIkl0ZW1TdHlsZSIsInVzZU9uQ2xpY2tPdXRzaWRlIiwiSXRlbSIsImhhbmRsZUNvbXBsZXRlU3RhdHVzVXBkYXRlIiwiaGFuZGxlQ2xpY2tFZGl0VGFzayIsIm9uQ2xpY2siLCJ0YXNrIiwiaXNFZGl0ZWQiLCJzZXRJc0VkaXRlZCIsImlzQ2hlY2tlZCIsImlzQ29tcGxldGUiLCJzZXRJc0NvbXBsZXRlIiwiaXNEcm9wZG93biIsInNldERyb3Bkb3duIiwidGl0bGUiLCJ0ZXh0Iiwic2V0VGV4dCIsImhhbmRsZUNoZWNrQm94IiwiaGFuZGxlRWRpdENsaWNrIiwiaGFuZGxlRWRpdFRleHQiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlS2V5RG93biIsImtleSIsInJlZiIsImRhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Item.tsx\n"));

/***/ })

});