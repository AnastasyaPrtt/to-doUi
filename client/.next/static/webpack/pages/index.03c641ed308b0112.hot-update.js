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

/***/ "./src/Layout/Main.tsx":
/*!*****************************!*\
  !*** ./src/Layout/Main.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Main: function() { return /* binding */ Main; }\n/* harmony export */ });\n/* harmony import */ var _home_user_Desktop_to_doUi_client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _components_ListItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ListItem */ \"./src/components/ListItem.tsx\");\n/* harmony import */ var _components_Menu_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Menu/Menu */ \"./src/components/Menu/Menu.tsx\");\n/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Modal */ \"./src/components/Modal.tsx\");\n/* harmony import */ var _components_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/style */ \"./src/components/style.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _public__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public */ \"./public/index.jsx\");\n/* harmony import */ var _DateNow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/DateNow */ \"./src/DateNow.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);\n\n\nvar _jsxFileName = \"/home/user/Desktop/to-doUi/client/src/Layout/Main.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_home_user_Desktop_to_doUi_client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\n\n\n\n\n\n\n\n\n\nvar Main = function Main() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)('none'),\n      modal = _useState[0],\n      setModal = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(''),\n      filter = _useState2[0],\n      setFilter = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(),\n      taskDelete = _useState3[0],\n      setTaskDelete = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({\n    title: '',\n    date: ''\n  }),\n      createTask = _useState4[0],\n      setCreateTask = _useState4[1]; // const [text, setText] = useState('')\n  // const [date, setDate] = useState('')\n\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([{\n    id: 1,\n    title: \"first task\",\n    date: \"2023-10-04\",\n    isChecked: false\n  }, {\n    id: 2,\n    title: \"second task\",\n    date: \"2023-10-03\",\n    isChecked: false\n  }]),\n      tasks = _useState5[0],\n      setTasks = _useState5[1];\n\n  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(tasks),\n      renderTasks = _useState6[0],\n      setRenderTasks = _useState6[1];\n\n  var handleCompleteStatusUpdate = function handleCompleteStatusUpdate(task) {\n    var newList = tasks.map(function (item) {\n      if (item.id === task.id) {\n        item.isChecked = task.isChecked;\n      }\n\n      return item;\n    });\n    setTasks(newList);\n  };\n\n  var createAddTask = function createAddTask() {\n    if (/^\\s+/.test(createTask.title)) {\n      console.log(/^\\s+/.test(createTask.title));\n    } // const newTask = {\n    // \tid: Date.now(),\n    // \ttitle: createTask.title,\n    // \tdate: createTask.date,\n    // \tisChecked: false\n    // }\n    // const newList = [...tasks, newTask]\n    // setTasks(newList)\n    // setCreateTask({ title: '', date: '' })\n    // setModal('none')\n\n  };\n\n  var handleClickEditTask = function handleClickEditTask(task, text) {\n    console.log(task);\n    setTasks(tasks.map(function (item) {\n      if (item.id == task.id) {\n        item.title = text;\n      }\n\n      return item;\n    }));\n  };\n\n  var handleCloseModal = function handleCloseModal() {\n    setModal('none');\n  };\n\n  var handleClickOpenModal = function handleClickOpenModal() {\n    setModal('add');\n  };\n\n  var handleOpenModalDelete = function handleOpenModalDelete(task) {\n    setModal('delete');\n    setTaskDelete(task.id);\n  };\n\n  var handleClickDelete = function handleClickDelete() {\n    setTasks(tasks.filter(function (item) {\n      return item.id !== taskDelete;\n    }));\n    setModal('none');\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {\n    filter == 'all' && setRenderTasks(tasks.filter(function (task) {\n      return task;\n    }));\n    filter == 'done' && setRenderTasks(tasks.filter(function (task) {\n      return task.isChecked;\n    }));\n    filter == 'undone' && setRenderTasks(tasks.filter(function (task) {\n      return !task.isChecked;\n    }));\n    if (filter == 'today') setRenderTasks(tasks.filter(function (task) {\n      return task.date === _DateNow__WEBPACK_IMPORTED_MODULE_7__.dateNow;\n    }));\n    if (filter == 'date') setRenderTasks(tasks.sort(function (task1, task2) {\n      if (task1.date > task2.date) return 1;\n      if (task1.date < task2.date) return -1;\n      return 0;\n    }).map(function (task) {\n      return task;\n    }));\n  }, [filter, tasks]);\n  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {\n    setRenderTasks(tasks);\n  }, [tasks]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_style__WEBPACK_IMPORTED_MODULE_4__.MainStyle, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_Menu_Menu__WEBPACK_IMPORTED_MODULE_2__.Menu, {\n        onClick: handleClickOpenModal,\n        filterToday: function filterToday() {\n          return setFilter('today');\n        },\n        filterAll: function filterAll() {\n          return setFilter('all');\n        },\n        filterDone: function filterDone() {\n          return setFilter('done');\n        },\n        filterUndone: function filterUndone() {\n          return setFilter('undone');\n        },\n        filterDate: function filterDate() {\n          return setFilter('date');\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 110,\n        columnNumber: 4\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_ListItem__WEBPACK_IMPORTED_MODULE_1__.ListItem, {\n        tasks: renderTasks,\n        handleOpenModalDelete: handleOpenModalDelete,\n        handleCompleteStatusUpdate: handleCompleteStatusUpdate,\n        handleClickEditTask: handleClickEditTask\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 117,\n        columnNumber: 4\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 3\n    }, _this), modal == 'add' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_Modal__WEBPACK_IMPORTED_MODULE_3__.Modal, {\n      title: 'Create task',\n      nameBtn: 'Save',\n      active: modal,\n      onClickClose: handleCloseModal,\n      onClickSave: createAddTask,\n      IconBtn: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_public__WEBPACK_IMPORTED_MODULE_6__.SaveIcon, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 126,\n        columnNumber: 134\n      }, _this),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"input\", {\n        type: \"text\",\n        placeholder: \"Enter text...\",\n        value: createTask.title,\n        onChange: function onChange(e) {\n          return setCreateTask(function (createTask) {\n            return _objectSpread(_objectSpread({}, createTask), {}, {\n              title: e.target.value\n            });\n          });\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 127,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"input\", {\n        type: \"date\",\n        value: createTask.date,\n        onChange: function onChange(e) {\n          return setCreateTask(function (createTask) {\n            return _objectSpread(_objectSpread({}, createTask), {}, {\n              date: e.target.value\n            });\n          });\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 128,\n        columnNumber: 5\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 4\n    }, _this), modal == 'delete' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_Modal__WEBPACK_IMPORTED_MODULE_3__.Modal, {\n      title: 'Delete task',\n      nameBtn: 'Delete',\n      active: modal,\n      onClickClose: handleCloseModal,\n      onClickSave: handleClickDelete,\n      IconBtn: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_public__WEBPACK_IMPORTED_MODULE_6__.DeleteIcon, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 133,\n        columnNumber: 140\n      }, _this),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"h3\", {\n        children: \"Are you sure about deleting this task?\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 134,\n        columnNumber: 5\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 133,\n      columnNumber: 4\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Main, \"v1PsZTx0aTh2fVExTOrbMjy6DK4=\");\n\n_c = Main;\n\nvar _c;\n\n$RefreshReg$(_c, \"Main\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUF0QztNQUFnRCxNQUFNLEVBQUVBLEtBQXhEO01BQStELFlBQVksRUFBRTJCLGdCQUE3RTtNQUErRixXQUFXLEVBQUVHLGlCQUE1RztNQUErSCxPQUFPLGVBQUUsOERBQUMsK0NBQUQ7UUFBQTtRQUFBO1FBQUE7TUFBQSxTQUF4STtNQUFBLHVCQUNDO1FBQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBREQ7TUFBQTtNQUFBO01BQUE7SUFBQSxTQXpCSztFQUFBLGdCQUFQO0FBK0JBLENBaElNOztHQUFNL0I7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9MYXlvdXQvTWFpbi50c3g/ZDNiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaXN0SXRlbSB9IGZyb20gJ0AvY29tcG9uZW50cy9MaXN0SXRlbSc7XG5pbXBvcnQgeyBNZW51IH0gZnJvbSAnQC9jb21wb25lbnRzL01lbnUvTWVudSc7XG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJ0AvY29tcG9uZW50cy9Nb2RhbCc7XG5pbXBvcnQgeyBUYXNrUHJvcHMgfSBmcm9tICdAL2NvbXBvbmVudHMvaW50ZXJmYWNlJztcbmltcG9ydCB7IE1haW5TdHlsZSB9IGZyb20gJ0AvY29tcG9uZW50cy9zdHlsZSc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IERlbGV0ZUljb24sIFNhdmVJY29uIH0gZnJvbSAnLi4vLi4vcHVibGljJztcbmltcG9ydCB7IGRhdGVOb3cgfSBmcm9tICdAL0RhdGVOb3cnO1xuXG5cbmV4cG9ydCBjb25zdCBNYWluOiBSZWFjdC5GQyA9ICgpID0+IHtcblx0Y29uc3QgW21vZGFsLCBzZXRNb2RhbF0gPSB1c2VTdGF0ZSgnbm9uZScpXG5cdGNvbnN0IFtmaWx0ZXIsIHNldEZpbHRlcl0gPSB1c2VTdGF0ZSgnJylcblxuXHRjb25zdCBbdGFza0RlbGV0ZSwgc2V0VGFza0RlbGV0ZV0gPSB1c2VTdGF0ZTxudW1iZXI+KClcblx0Y29uc3QgW2NyZWF0ZVRhc2ssIHNldENyZWF0ZVRhc2tdID0gdXNlU3RhdGUoeyB0aXRsZTogJycsIGRhdGU6ICcnIH0pXG5cblx0Ly8gY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoJycpXG5cdC8vIGNvbnN0IFtkYXRlLCBzZXREYXRlXSA9IHVzZVN0YXRlKCcnKVxuXHRjb25zdCBbdGFza3MsIHNldFRhc2tzXSA9IHVzZVN0YXRlKFxuXHRcdFtcblx0XHRcdHtcblx0XHRcdFx0aWQ6IDEsXG5cdFx0XHRcdHRpdGxlOiBcImZpcnN0IHRhc2tcIixcblx0XHRcdFx0ZGF0ZTogXCIyMDIzLTEwLTA0XCIsXG5cdFx0XHRcdGlzQ2hlY2tlZDogZmFsc2Vcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGlkOiAyLFxuXHRcdFx0XHR0aXRsZTogXCJzZWNvbmQgdGFza1wiLFxuXHRcdFx0XHRkYXRlOiBcIjIwMjMtMTAtMDNcIixcblx0XHRcdFx0aXNDaGVja2VkOiBmYWxzZVxuXHRcdFx0fSxcblx0XHRdXG5cdCk7XG5cdGNvbnN0IFtyZW5kZXJUYXNrcywgc2V0UmVuZGVyVGFza3NdID0gdXNlU3RhdGUodGFza3MpXG5cblx0Y29uc3QgaGFuZGxlQ29tcGxldGVTdGF0dXNVcGRhdGUgPSAodGFzazogVGFza1Byb3BzKSA9PiB7XG5cdFx0Y29uc3QgbmV3TGlzdCA9IHRhc2tzLm1hcChpdGVtID0+IHtcblx0XHRcdGlmIChpdGVtLmlkID09PSB0YXNrLmlkKSB7XG5cdFx0XHRcdGl0ZW0uaXNDaGVja2VkID0gdGFzay5pc0NoZWNrZWRcblx0XHRcdH1cblx0XHRcdHJldHVybiBpdGVtXG5cdFx0fSk7XG5cdFx0c2V0VGFza3MobmV3TGlzdClcblx0fVxuXG5cdGNvbnN0IGNyZWF0ZUFkZFRhc2sgPSAoKSA9PiB7XG5cdFx0aWYgKC9eXFxzKy8udGVzdChjcmVhdGVUYXNrLnRpdGxlKSkge1xuXHRcdFx0Y29uc29sZS5sb2coL15cXHMrLy50ZXN0KGNyZWF0ZVRhc2sudGl0bGUpKVxuXHRcdH1cblx0XHQvLyBjb25zdCBuZXdUYXNrID0ge1xuXHRcdC8vIFx0aWQ6IERhdGUubm93KCksXG5cdFx0Ly8gXHR0aXRsZTogY3JlYXRlVGFzay50aXRsZSxcblx0XHQvLyBcdGRhdGU6IGNyZWF0ZVRhc2suZGF0ZSxcblx0XHQvLyBcdGlzQ2hlY2tlZDogZmFsc2Vcblx0XHQvLyB9XG5cdFx0Ly8gY29uc3QgbmV3TGlzdCA9IFsuLi50YXNrcywgbmV3VGFza11cblx0XHQvLyBzZXRUYXNrcyhuZXdMaXN0KVxuXHRcdC8vIHNldENyZWF0ZVRhc2soeyB0aXRsZTogJycsIGRhdGU6ICcnIH0pXG5cdFx0Ly8gc2V0TW9kYWwoJ25vbmUnKVxuXG5cdH1cblx0Y29uc3QgaGFuZGxlQ2xpY2tFZGl0VGFzayA9ICh0YXNrOiBUYXNrUHJvcHMsIHRleHQ6IHN0cmluZykgPT4ge1xuXHRcdGNvbnNvbGUubG9nKHRhc2spO1xuXHRcdHNldFRhc2tzKHRhc2tzLm1hcChpdGVtID0+IHtcblx0XHRcdGlmIChpdGVtLmlkID09IHRhc2suaWQpIHtcblx0XHRcdFx0aXRlbS50aXRsZSA9IHRleHRcblx0XHRcdH1cblx0XHRcdHJldHVybiBpdGVtXG5cdFx0fSkpXG5cdH1cblx0Y29uc3QgaGFuZGxlQ2xvc2VNb2RhbCA9ICgpID0+IHtcblx0XHRzZXRNb2RhbCgnbm9uZScpXG5cdH1cblx0Y29uc3QgaGFuZGxlQ2xpY2tPcGVuTW9kYWwgPSAoKSA9PiB7XG5cdFx0c2V0TW9kYWwoJ2FkZCcpXG5cdH1cblx0Y29uc3QgaGFuZGxlT3Blbk1vZGFsRGVsZXRlID0gKHRhc2s6IFRhc2tQcm9wcykgPT4ge1xuXHRcdHNldE1vZGFsKCdkZWxldGUnKVxuXHRcdHNldFRhc2tEZWxldGUodGFzay5pZClcblx0fVxuXHRjb25zdCBoYW5kbGVDbGlja0RlbGV0ZSA9ICgpID0+IHtcblx0XHRzZXRUYXNrcyh0YXNrcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmlkICE9PSB0YXNrRGVsZXRlKSlcblx0XHRzZXRNb2RhbCgnbm9uZScpXG5cdH1cblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGZpbHRlciA9PSAnYWxsJyAmJiBzZXRSZW5kZXJUYXNrcyh0YXNrcy5maWx0ZXIodGFzayA9PiB0YXNrKSlcblx0XHRmaWx0ZXIgPT0gJ2RvbmUnICYmIHNldFJlbmRlclRhc2tzKHRhc2tzLmZpbHRlcih0YXNrID0+IHRhc2suaXNDaGVja2VkKSlcblx0XHRmaWx0ZXIgPT0gJ3VuZG9uZScgJiYgc2V0UmVuZGVyVGFza3ModGFza3MuZmlsdGVyKHRhc2sgPT4gIXRhc2suaXNDaGVja2VkKSlcblx0XHRpZiAoZmlsdGVyID09ICd0b2RheScpIHNldFJlbmRlclRhc2tzKHRhc2tzLmZpbHRlcih0YXNrID0+IHRhc2suZGF0ZSA9PT0gZGF0ZU5vdykpXG5cblx0XHRpZiAoZmlsdGVyID09ICdkYXRlJykgc2V0UmVuZGVyVGFza3ModGFza3Muc29ydCgodGFzazEsIHRhc2syKSA9PiB7XG5cdFx0XHRpZiAodGFzazEuZGF0ZSA+IHRhc2syLmRhdGUpIHJldHVybiAxXG5cdFx0XHRpZiAodGFzazEuZGF0ZSA8IHRhc2syLmRhdGUpIHJldHVybiAtMVxuXHRcdFx0cmV0dXJuIDBcblx0XHR9KS5tYXAodGFzayA9PiB0YXNrKSlcblxuXHR9LCBbZmlsdGVyLCB0YXNrc10pXG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRzZXRSZW5kZXJUYXNrcyh0YXNrcylcblx0fSwgW3Rhc2tzXSlcblxuXG5cblx0cmV0dXJuIDw+XG5cdFx0PE1haW5TdHlsZT5cblx0XHRcdDxNZW51XG5cdFx0XHRcdG9uQ2xpY2s9e2hhbmRsZUNsaWNrT3Blbk1vZGFsfVxuXHRcdFx0XHRmaWx0ZXJUb2RheT17KCkgPT4gc2V0RmlsdGVyKCd0b2RheScpfVxuXHRcdFx0XHRmaWx0ZXJBbGw9eygpID0+IHNldEZpbHRlcignYWxsJyl9XG5cdFx0XHRcdGZpbHRlckRvbmU9eygpID0+IHNldEZpbHRlcignZG9uZScpfVxuXHRcdFx0XHRmaWx0ZXJVbmRvbmU9eygpID0+IHNldEZpbHRlcigndW5kb25lJyl9XG5cdFx0XHRcdGZpbHRlckRhdGU9eygpID0+IHNldEZpbHRlcignZGF0ZScpfSAvPlxuXHRcdFx0PExpc3RJdGVtXG5cdFx0XHRcdHRhc2tzPXtyZW5kZXJUYXNrc31cblx0XHRcdFx0aGFuZGxlT3Blbk1vZGFsRGVsZXRlPXtoYW5kbGVPcGVuTW9kYWxEZWxldGV9XG5cdFx0XHRcdGhhbmRsZUNvbXBsZXRlU3RhdHVzVXBkYXRlPXtoYW5kbGVDb21wbGV0ZVN0YXR1c1VwZGF0ZX1cblx0XHRcdFx0aGFuZGxlQ2xpY2tFZGl0VGFzaz17aGFuZGxlQ2xpY2tFZGl0VGFza31cblx0XHRcdC8+XG5cdFx0PC9NYWluU3R5bGU+XG5cdFx0e1xuXHRcdFx0bW9kYWwgPT0gJ2FkZCcgJiZcblx0XHRcdDxNb2RhbCB0aXRsZT17J0NyZWF0ZSB0YXNrJ30gbmFtZUJ0bj17J1NhdmUnfSBhY3RpdmU9e21vZGFsfSBvbkNsaWNrQ2xvc2U9e2hhbmRsZUNsb3NlTW9kYWx9IG9uQ2xpY2tTYXZlPXtjcmVhdGVBZGRUYXNrfSBJY29uQnRuPXs8U2F2ZUljb24gLz59PlxuXHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj0nRW50ZXIgdGV4dC4uLicgdmFsdWU9e2NyZWF0ZVRhc2sudGl0bGV9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q3JlYXRlVGFzayhjcmVhdGVUYXNrID0+ICh7IC4uLmNyZWF0ZVRhc2ssIHRpdGxlOiBlLnRhcmdldC52YWx1ZSB9KSl9IC8+XG5cdFx0XHRcdDxpbnB1dCB0eXBlPVwiZGF0ZVwiIHZhbHVlPXtjcmVhdGVUYXNrLmRhdGV9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q3JlYXRlVGFzayhjcmVhdGVUYXNrID0+ICh7IC4uLmNyZWF0ZVRhc2ssIGRhdGU6IGUudGFyZ2V0LnZhbHVlIH0pKX0gLz5cblx0XHRcdDwvTW9kYWw+XG5cdFx0fVxuXHRcdHtcblx0XHRcdG1vZGFsID09ICdkZWxldGUnICYmXG5cdFx0XHQ8TW9kYWwgdGl0bGU9eydEZWxldGUgdGFzayd9IG5hbWVCdG49eydEZWxldGUnfSBhY3RpdmU9e21vZGFsfSBvbkNsaWNrQ2xvc2U9e2hhbmRsZUNsb3NlTW9kYWx9IG9uQ2xpY2tTYXZlPXtoYW5kbGVDbGlja0RlbGV0ZX0gSWNvbkJ0bj17PERlbGV0ZUljb24gLz59PlxuXHRcdFx0XHQ8aDM+QXJlIHlvdSBzdXJlIGFib3V0IGRlbGV0aW5nIHRoaXMgdGFzaz88L2gzPlxuXHRcdFx0PC9Nb2RhbD5cblx0XHR9XG5cdDwvPlxuXG59Il0sIm5hbWVzIjpbIkxpc3RJdGVtIiwiTWVudSIsIk1vZGFsIiwiTWFpblN0eWxlIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkRlbGV0ZUljb24iLCJTYXZlSWNvbiIsImRhdGVOb3ciLCJNYWluIiwibW9kYWwiLCJzZXRNb2RhbCIsImZpbHRlciIsInNldEZpbHRlciIsInRhc2tEZWxldGUiLCJzZXRUYXNrRGVsZXRlIiwidGl0bGUiLCJkYXRlIiwiY3JlYXRlVGFzayIsInNldENyZWF0ZVRhc2siLCJpZCIsImlzQ2hlY2tlZCIsInRhc2tzIiwic2V0VGFza3MiLCJyZW5kZXJUYXNrcyIsInNldFJlbmRlclRhc2tzIiwiaGFuZGxlQ29tcGxldGVTdGF0dXNVcGRhdGUiLCJ0YXNrIiwibmV3TGlzdCIsIm1hcCIsIml0ZW0iLCJjcmVhdGVBZGRUYXNrIiwidGVzdCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDbGlja0VkaXRUYXNrIiwidGV4dCIsImhhbmRsZUNsb3NlTW9kYWwiLCJoYW5kbGVDbGlja09wZW5Nb2RhbCIsImhhbmRsZU9wZW5Nb2RhbERlbGV0ZSIsImhhbmRsZUNsaWNrRGVsZXRlIiwic29ydCIsInRhc2sxIiwidGFzazIiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Layout/Main.tsx\n"));

/***/ })

});