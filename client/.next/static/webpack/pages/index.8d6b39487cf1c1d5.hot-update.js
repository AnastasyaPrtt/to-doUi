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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Main: function() { return /* binding */ Main; }\n/* harmony export */ });\n/* harmony import */ var _home_user_Desktop_to_doUi_client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _home_user_Desktop_to_doUi_client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _components_ListItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ListItem */ \"./src/components/ListItem.tsx\");\n/* harmony import */ var _components_Menu_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Menu/Menu */ \"./src/components/Menu/Menu.tsx\");\n/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Modal */ \"./src/components/Modal.tsx\");\n/* harmony import */ var _components_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/style */ \"./src/components/style.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _public__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public */ \"./public/index.jsx\");\n/* harmony import */ var _DateNow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/DateNow */ \"./src/DateNow.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\nvar _jsxFileName = \"/home/user/Desktop/to-doUi/client/src/Layout/Main.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_home_user_Desktop_to_doUi_client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\n\n\n\n\n\n\n\n\n\nvar Main = function Main() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)('none'),\n      modal = _useState[0],\n      setModal = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(''),\n      filter = _useState2[0],\n      setFilter = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(),\n      taskDelete = _useState3[0],\n      setTaskDelete = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)({\n    title: '',\n    date: _DateNow__WEBPACK_IMPORTED_MODULE_8__.dateNow\n  }),\n      createTask = _useState4[0],\n      setCreateTask = _useState4[1]; // const [text, setText] = useState('')\n  // const [date, setDate] = useState('')\n\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([{\n    id: 1,\n    title: \"first task\",\n    date: \"2023-10-04\",\n    isChecked: false\n  }, {\n    id: 2,\n    title: \"second task\",\n    date: \"2023-10-03\",\n    isChecked: false\n  }]),\n      tasks = _useState5[0],\n      setTasks = _useState5[1];\n\n  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(tasks),\n      renderTasks = _useState6[0],\n      setRenderTasks = _useState6[1];\n\n  var handleCompleteStatusUpdate = function handleCompleteStatusUpdate(task) {\n    var newList = tasks.map(function (item) {\n      if (item.id === task.id) {\n        item.isChecked = task.isChecked;\n      }\n\n      return item;\n    });\n    setTasks(newList);\n  };\n\n  var createAddTask = function createAddTask() {\n    if (createTask.title == '') return;\n    var newTask = {\n      id: Date.now(),\n      title: createTask.title,\n      date: createTask.date,\n      isChecked: false\n    };\n    var newList = [].concat((0,_home_user_Desktop_to_doUi_client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(tasks), [newTask]);\n    setTasks(newList);\n    setCreateTask({\n      title: '',\n      date: ''\n    });\n    setModal('none');\n  };\n\n  var handleClickEditTask = function handleClickEditTask(task, text) {\n    console.log(task);\n    setTasks(tasks.map(function (item) {\n      if (item.id == task.id) {\n        item.title = text;\n      }\n\n      return item;\n    }));\n  };\n\n  var handleCloseModal = function handleCloseModal() {\n    setModal('none');\n  };\n\n  var handleClickOpenModal = function handleClickOpenModal() {\n    setModal('add');\n  };\n\n  var handleOpenModalDelete = function handleOpenModalDelete(task) {\n    setModal('delete');\n    setTaskDelete(task.id);\n  };\n\n  var handleClickDelete = function handleClickDelete() {\n    setTasks(tasks.filter(function (item) {\n      return item.id !== taskDelete;\n    }));\n    setModal('none');\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function () {\n    filter == 'all' && setRenderTasks(tasks.filter(function (task) {\n      return task;\n    }));\n    filter == 'done' && setRenderTasks(tasks.filter(function (task) {\n      return task.isChecked;\n    }));\n    filter == 'undone' && setRenderTasks(tasks.filter(function (task) {\n      return !task.isChecked;\n    }));\n    if (filter == 'today') setRenderTasks(tasks.filter(function (task) {\n      return task.date === _DateNow__WEBPACK_IMPORTED_MODULE_8__.dateNow;\n    }));\n    if (filter == 'date') setRenderTasks(tasks.sort(function (task1, task2) {\n      if (task1.date > task2.date) return 1;\n      if (task1.date < task2.date) return -1;\n      return 0;\n    }).map(function (task) {\n      return task;\n    }));\n  }, [filter, tasks]);\n  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function () {\n    setRenderTasks(tasks);\n  }, [tasks]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_style__WEBPACK_IMPORTED_MODULE_5__.MainStyle, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_Menu_Menu__WEBPACK_IMPORTED_MODULE_3__.Menu, {\n        onClick: handleClickOpenModal,\n        filterToday: function filterToday() {\n          return setFilter('today');\n        },\n        filterAll: function filterAll() {\n          return setFilter('all');\n        },\n        filterDone: function filterDone() {\n          return setFilter('done');\n        },\n        filterUndone: function filterUndone() {\n          return setFilter('undone');\n        },\n        filterDate: function filterDate() {\n          return setFilter('date');\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 109,\n        columnNumber: 4\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_ListItem__WEBPACK_IMPORTED_MODULE_2__.ListItem, {\n        tasks: renderTasks,\n        handleOpenModalDelete: handleOpenModalDelete,\n        handleCompleteStatusUpdate: handleCompleteStatusUpdate,\n        handleClickEditTask: handleClickEditTask\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 116,\n        columnNumber: 4\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 3\n    }, _this), modal == 'add' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_Modal__WEBPACK_IMPORTED_MODULE_4__.Modal, {\n      title: 'Create task',\n      nameBtn: 'Save',\n      active: modal,\n      onClickClose: handleCloseModal,\n      onClickSave: createAddTask,\n      IconBtn: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_public__WEBPACK_IMPORTED_MODULE_7__.SaveIcon, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 125,\n        columnNumber: 134\n      }, _this),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"input\", {\n        type: \"text\",\n        placeholder: \"Enter text...\",\n        value: createTask.title,\n        onChange: function onChange(e) {\n          return setCreateTask(function (createTask) {\n            return _objectSpread(_objectSpread({}, createTask), {}, {\n              title: e.target.value\n            });\n          });\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 126,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"input\", {\n        type: \"date\",\n        value: createTask.date,\n        onChange: function onChange(e) {\n          return setCreateTask(function (createTask) {\n            return _objectSpread(_objectSpread({}, createTask), {}, {\n              date: e.target.value\n            });\n          });\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 127,\n        columnNumber: 5\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 4\n    }, _this), modal == 'delete' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_Modal__WEBPACK_IMPORTED_MODULE_4__.Modal, {\n      title: 'Delete task',\n      nameBtn: 'Delete',\n      active: modal,\n      onClickClose: handleCloseModal,\n      onClickSave: handleClickDelete,\n      IconBtn: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_public__WEBPACK_IMPORTED_MODULE_7__.DeleteIcon, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 132,\n        columnNumber: 140\n      }, _this),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"h3\", {\n        children: \"Are you sure about deleting this task?\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 133,\n        columnNumber: 5\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 132,\n      columnNumber: 4\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Main, \"xPncAYLkML4F4RWJd12JKElU3fY=\");\n\n_c = Main;\n\nvar _c;\n\n$RefreshReg$(_c, \"Main\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsQ0FBQ0MsTUFBRixDQUFTQztZQUFyQztVQUFBLENBQVgsQ0FBcEI7UUFBQTtNQUFyRDtRQUFBO1FBQUE7UUFBQTtNQUFBLFNBRkQ7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBLFNBbEJLLEVBd0JMdEMsS0FBSyxJQUFJLFFBQVQsaUJBQ0EsOERBQUMsb0RBQUQ7TUFBTyxLQUFLLEVBQUUsYUFBZDtNQUE2QixPQUFPLEVBQUUsUUFBdEM7TUFBZ0QsTUFBTSxFQUFFQSxLQUF4RDtNQUErRCxZQUFZLEVBQUU2QixnQkFBN0U7TUFBK0YsV0FBVyxFQUFFRyxpQkFBNUc7TUFBK0gsT0FBTyxlQUFFLDhEQUFDLCtDQUFEO1FBQUE7UUFBQTtRQUFBO01BQUEsU0FBeEk7TUFBQSx1QkFDQztRQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUREO01BQUE7TUFBQTtNQUFBO0lBQUEsU0F6Qks7RUFBQSxnQkFBUDtBQStCQSxDQS9ITTs7R0FBTWpDOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvTGF5b3V0L01haW4udHN4P2QzYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGlzdEl0ZW0gfSBmcm9tICdAL2NvbXBvbmVudHMvTGlzdEl0ZW0nO1xuaW1wb3J0IHsgTWVudSB9IGZyb20gJ0AvY29tcG9uZW50cy9NZW51L01lbnUnO1xuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICdAL2NvbXBvbmVudHMvTW9kYWwnO1xuaW1wb3J0IHsgVGFza1Byb3BzIH0gZnJvbSAnQC9jb21wb25lbnRzL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBNYWluU3R5bGUgfSBmcm9tICdAL2NvbXBvbmVudHMvc3R5bGUnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBEZWxldGVJY29uLCBTYXZlSWNvbiB9IGZyb20gJy4uLy4uL3B1YmxpYyc7XG5pbXBvcnQgeyBkYXRlTm93IH0gZnJvbSAnQC9EYXRlTm93JztcblxuXG5leHBvcnQgY29uc3QgTWFpbjogUmVhY3QuRkMgPSAoKSA9PiB7XG5cdGNvbnN0IFttb2RhbCwgc2V0TW9kYWxdID0gdXNlU3RhdGUoJ25vbmUnKVxuXHRjb25zdCBbZmlsdGVyLCBzZXRGaWx0ZXJdID0gdXNlU3RhdGUoJycpXG5cblx0Y29uc3QgW3Rhc2tEZWxldGUsIHNldFRhc2tEZWxldGVdID0gdXNlU3RhdGU8bnVtYmVyPigpXG5cdGNvbnN0IFtjcmVhdGVUYXNrLCBzZXRDcmVhdGVUYXNrXSA9IHVzZVN0YXRlKHsgdGl0bGU6ICcnLCBkYXRlOiBkYXRlTm93IH0pXG5cblx0Ly8gY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoJycpXG5cdC8vIGNvbnN0IFtkYXRlLCBzZXREYXRlXSA9IHVzZVN0YXRlKCcnKVxuXHRjb25zdCBbdGFza3MsIHNldFRhc2tzXSA9IHVzZVN0YXRlKFxuXHRcdFtcblx0XHRcdHtcblx0XHRcdFx0aWQ6IDEsXG5cdFx0XHRcdHRpdGxlOiBcImZpcnN0IHRhc2tcIixcblx0XHRcdFx0ZGF0ZTogXCIyMDIzLTEwLTA0XCIsXG5cdFx0XHRcdGlzQ2hlY2tlZDogZmFsc2Vcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGlkOiAyLFxuXHRcdFx0XHR0aXRsZTogXCJzZWNvbmQgdGFza1wiLFxuXHRcdFx0XHRkYXRlOiBcIjIwMjMtMTAtMDNcIixcblx0XHRcdFx0aXNDaGVja2VkOiBmYWxzZVxuXHRcdFx0fSxcblx0XHRdXG5cdCk7XG5cdGNvbnN0IFtyZW5kZXJUYXNrcywgc2V0UmVuZGVyVGFza3NdID0gdXNlU3RhdGUodGFza3MpXG5cblx0Y29uc3QgaGFuZGxlQ29tcGxldGVTdGF0dXNVcGRhdGUgPSAodGFzazogVGFza1Byb3BzKSA9PiB7XG5cdFx0Y29uc3QgbmV3TGlzdCA9IHRhc2tzLm1hcChpdGVtID0+IHtcblx0XHRcdGlmIChpdGVtLmlkID09PSB0YXNrLmlkKSB7XG5cdFx0XHRcdGl0ZW0uaXNDaGVja2VkID0gdGFzay5pc0NoZWNrZWRcblx0XHRcdH1cblx0XHRcdHJldHVybiBpdGVtXG5cdFx0fSk7XG5cdFx0c2V0VGFza3MobmV3TGlzdClcblx0fVxuXG5cdGNvbnN0IGNyZWF0ZUFkZFRhc2sgPSAoKSA9PiB7XG5cdFx0aWYgKGNyZWF0ZVRhc2sudGl0bGUgPT0gJycpIHJldHVybjtcblxuXHRcdGNvbnN0IG5ld1Rhc2sgPSB7XG5cdFx0XHRpZDogRGF0ZS5ub3coKSxcblx0XHRcdHRpdGxlOiBjcmVhdGVUYXNrLnRpdGxlLFxuXHRcdFx0ZGF0ZTogY3JlYXRlVGFzay5kYXRlLFxuXHRcdFx0aXNDaGVja2VkOiBmYWxzZVxuXHRcdH1cblx0XHRjb25zdCBuZXdMaXN0ID0gWy4uLnRhc2tzLCBuZXdUYXNrXVxuXHRcdHNldFRhc2tzKG5ld0xpc3QpXG5cdFx0c2V0Q3JlYXRlVGFzayh7IHRpdGxlOiAnJywgZGF0ZTogJycgfSlcblx0XHRzZXRNb2RhbCgnbm9uZScpXG5cblx0fVxuXHRjb25zdCBoYW5kbGVDbGlja0VkaXRUYXNrID0gKHRhc2s6IFRhc2tQcm9wcywgdGV4dDogc3RyaW5nKSA9PiB7XG5cdFx0Y29uc29sZS5sb2codGFzayk7XG5cdFx0c2V0VGFza3ModGFza3MubWFwKGl0ZW0gPT4ge1xuXHRcdFx0aWYgKGl0ZW0uaWQgPT0gdGFzay5pZCkge1xuXHRcdFx0XHRpdGVtLnRpdGxlID0gdGV4dFxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGl0ZW1cblx0XHR9KSlcblx0fVxuXHRjb25zdCBoYW5kbGVDbG9zZU1vZGFsID0gKCkgPT4ge1xuXHRcdHNldE1vZGFsKCdub25lJylcblx0fVxuXHRjb25zdCBoYW5kbGVDbGlja09wZW5Nb2RhbCA9ICgpID0+IHtcblx0XHRzZXRNb2RhbCgnYWRkJylcblx0fVxuXHRjb25zdCBoYW5kbGVPcGVuTW9kYWxEZWxldGUgPSAodGFzazogVGFza1Byb3BzKSA9PiB7XG5cdFx0c2V0TW9kYWwoJ2RlbGV0ZScpXG5cdFx0c2V0VGFza0RlbGV0ZSh0YXNrLmlkKVxuXHR9XG5cdGNvbnN0IGhhbmRsZUNsaWNrRGVsZXRlID0gKCkgPT4ge1xuXHRcdHNldFRhc2tzKHRhc2tzLmZpbHRlcihpdGVtID0+IGl0ZW0uaWQgIT09IHRhc2tEZWxldGUpKVxuXHRcdHNldE1vZGFsKCdub25lJylcblx0fVxuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0ZmlsdGVyID09ICdhbGwnICYmIHNldFJlbmRlclRhc2tzKHRhc2tzLmZpbHRlcih0YXNrID0+IHRhc2spKVxuXHRcdGZpbHRlciA9PSAnZG9uZScgJiYgc2V0UmVuZGVyVGFza3ModGFza3MuZmlsdGVyKHRhc2sgPT4gdGFzay5pc0NoZWNrZWQpKVxuXHRcdGZpbHRlciA9PSAndW5kb25lJyAmJiBzZXRSZW5kZXJUYXNrcyh0YXNrcy5maWx0ZXIodGFzayA9PiAhdGFzay5pc0NoZWNrZWQpKVxuXHRcdGlmIChmaWx0ZXIgPT0gJ3RvZGF5Jykgc2V0UmVuZGVyVGFza3ModGFza3MuZmlsdGVyKHRhc2sgPT4gdGFzay5kYXRlID09PSBkYXRlTm93KSlcblxuXHRcdGlmIChmaWx0ZXIgPT0gJ2RhdGUnKSBzZXRSZW5kZXJUYXNrcyh0YXNrcy5zb3J0KCh0YXNrMSwgdGFzazIpID0+IHtcblx0XHRcdGlmICh0YXNrMS5kYXRlID4gdGFzazIuZGF0ZSkgcmV0dXJuIDFcblx0XHRcdGlmICh0YXNrMS5kYXRlIDwgdGFzazIuZGF0ZSkgcmV0dXJuIC0xXG5cdFx0XHRyZXR1cm4gMFxuXHRcdH0pLm1hcCh0YXNrID0+IHRhc2spKVxuXG5cdH0sIFtmaWx0ZXIsIHRhc2tzXSlcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdHNldFJlbmRlclRhc2tzKHRhc2tzKVxuXHR9LCBbdGFza3NdKVxuXG5cblxuXHRyZXR1cm4gPD5cblx0XHQ8TWFpblN0eWxlPlxuXHRcdFx0PE1lbnVcblx0XHRcdFx0b25DbGljaz17aGFuZGxlQ2xpY2tPcGVuTW9kYWx9XG5cdFx0XHRcdGZpbHRlclRvZGF5PXsoKSA9PiBzZXRGaWx0ZXIoJ3RvZGF5Jyl9XG5cdFx0XHRcdGZpbHRlckFsbD17KCkgPT4gc2V0RmlsdGVyKCdhbGwnKX1cblx0XHRcdFx0ZmlsdGVyRG9uZT17KCkgPT4gc2V0RmlsdGVyKCdkb25lJyl9XG5cdFx0XHRcdGZpbHRlclVuZG9uZT17KCkgPT4gc2V0RmlsdGVyKCd1bmRvbmUnKX1cblx0XHRcdFx0ZmlsdGVyRGF0ZT17KCkgPT4gc2V0RmlsdGVyKCdkYXRlJyl9IC8+XG5cdFx0XHQ8TGlzdEl0ZW1cblx0XHRcdFx0dGFza3M9e3JlbmRlclRhc2tzfVxuXHRcdFx0XHRoYW5kbGVPcGVuTW9kYWxEZWxldGU9e2hhbmRsZU9wZW5Nb2RhbERlbGV0ZX1cblx0XHRcdFx0aGFuZGxlQ29tcGxldGVTdGF0dXNVcGRhdGU9e2hhbmRsZUNvbXBsZXRlU3RhdHVzVXBkYXRlfVxuXHRcdFx0XHRoYW5kbGVDbGlja0VkaXRUYXNrPXtoYW5kbGVDbGlja0VkaXRUYXNrfVxuXHRcdFx0Lz5cblx0XHQ8L01haW5TdHlsZT5cblx0XHR7XG5cdFx0XHRtb2RhbCA9PSAnYWRkJyAmJlxuXHRcdFx0PE1vZGFsIHRpdGxlPXsnQ3JlYXRlIHRhc2snfSBuYW1lQnRuPXsnU2F2ZSd9IGFjdGl2ZT17bW9kYWx9IG9uQ2xpY2tDbG9zZT17aGFuZGxlQ2xvc2VNb2RhbH0gb25DbGlja1NhdmU9e2NyZWF0ZUFkZFRhc2t9IEljb25CdG49ezxTYXZlSWNvbiAvPn0+XG5cdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPSdFbnRlciB0ZXh0Li4uJyB2YWx1ZT17Y3JlYXRlVGFzay50aXRsZX0gb25DaGFuZ2U9eyhlKSA9PiBzZXRDcmVhdGVUYXNrKGNyZWF0ZVRhc2sgPT4gKHsgLi4uY3JlYXRlVGFzaywgdGl0bGU6IGUudGFyZ2V0LnZhbHVlIH0pKX0gLz5cblx0XHRcdFx0PGlucHV0IHR5cGU9XCJkYXRlXCIgdmFsdWU9e2NyZWF0ZVRhc2suZGF0ZX0gb25DaGFuZ2U9eyhlKSA9PiBzZXRDcmVhdGVUYXNrKGNyZWF0ZVRhc2sgPT4gKHsgLi4uY3JlYXRlVGFzaywgZGF0ZTogZS50YXJnZXQudmFsdWUgfSkpfSAvPlxuXHRcdFx0PC9Nb2RhbD5cblx0XHR9XG5cdFx0e1xuXHRcdFx0bW9kYWwgPT0gJ2RlbGV0ZScgJiZcblx0XHRcdDxNb2RhbCB0aXRsZT17J0RlbGV0ZSB0YXNrJ30gbmFtZUJ0bj17J0RlbGV0ZSd9IGFjdGl2ZT17bW9kYWx9IG9uQ2xpY2tDbG9zZT17aGFuZGxlQ2xvc2VNb2RhbH0gb25DbGlja1NhdmU9e2hhbmRsZUNsaWNrRGVsZXRlfSBJY29uQnRuPXs8RGVsZXRlSWNvbiAvPn0+XG5cdFx0XHRcdDxoMz5BcmUgeW91IHN1cmUgYWJvdXQgZGVsZXRpbmcgdGhpcyB0YXNrPzwvaDM+XG5cdFx0XHQ8L01vZGFsPlxuXHRcdH1cblx0PC8+XG5cbn0iXSwibmFtZXMiOlsiTGlzdEl0ZW0iLCJNZW51IiwiTW9kYWwiLCJNYWluU3R5bGUiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiRGVsZXRlSWNvbiIsIlNhdmVJY29uIiwiZGF0ZU5vdyIsIk1haW4iLCJtb2RhbCIsInNldE1vZGFsIiwiZmlsdGVyIiwic2V0RmlsdGVyIiwidGFza0RlbGV0ZSIsInNldFRhc2tEZWxldGUiLCJ0aXRsZSIsImRhdGUiLCJjcmVhdGVUYXNrIiwic2V0Q3JlYXRlVGFzayIsImlkIiwiaXNDaGVja2VkIiwidGFza3MiLCJzZXRUYXNrcyIsInJlbmRlclRhc2tzIiwic2V0UmVuZGVyVGFza3MiLCJoYW5kbGVDb21wbGV0ZVN0YXR1c1VwZGF0ZSIsInRhc2siLCJuZXdMaXN0IiwibWFwIiwiaXRlbSIsImNyZWF0ZUFkZFRhc2siLCJuZXdUYXNrIiwiRGF0ZSIsIm5vdyIsImhhbmRsZUNsaWNrRWRpdFRhc2siLCJ0ZXh0IiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNsb3NlTW9kYWwiLCJoYW5kbGVDbGlja09wZW5Nb2RhbCIsImhhbmRsZU9wZW5Nb2RhbERlbGV0ZSIsImhhbmRsZUNsaWNrRGVsZXRlIiwic29ydCIsInRhc2sxIiwidGFzazIiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Layout/Main.tsx\n"));

/***/ })

});