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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Main: function() { return /* binding */ Main; }\n/* harmony export */ });\n/* harmony import */ var D_to_doUI_client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var D_to_doUI_client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var D_to_doUI_client_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var D_to_doUI_client_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(D_to_doUI_client_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _components_ListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ListItem */ \"./src/components/ListItem.tsx\");\n/* harmony import */ var _components_Menu_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Menu/Menu */ \"./src/components/Menu/Menu.tsx\");\n/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Modal */ \"./src/components/Modal.tsx\");\n/* harmony import */ var _components_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/style */ \"./src/components/style.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _public__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../public */ \"./public/index.jsx\");\n/* harmony import */ var _DateNow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/DateNow */ \"./src/DateNow.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/next/dist/build/polyfills/process.js\");\n\n\n\nvar _jsxFileName = \"D:\\\\to-doUI\\\\client\\\\src\\\\Layout\\\\Main.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,D_to_doUI_client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\n\n\n\n\n\n\n\n\n\n\nvar Main = function Main() {\n  _s();\n\n  console.log(process.env.REACT_APP_API_URL);\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)([{\n    id: 1,\n    title: \"first task\",\n    date: \"2023-10-04\",\n    isChecked: false\n  }, {\n    id: 2,\n    title: \"second task\",\n    date: \"2023-10-03\",\n    isChecked: false\n  }]),\n      tasks = _useState[0],\n      setTasks = _useState[1]; //TODO получение задач по id\n\n\n  function getUser() {\n    return _getUser.apply(this, arguments);\n  }\n\n  function _getUser() {\n    _getUser = (0,D_to_doUI_client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/D_to_doUI_client_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {\n      var response;\n      return D_to_doUI_client_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return axios__WEBPACK_IMPORTED_MODULE_11__[\"default\"].get('http://localhost:5001/api/tasks/4');\n\n            case 3:\n              response = _context.sent;\n              setTasks(response.data);\n              console.log(response.data);\n              _context.next = 11;\n              break;\n\n            case 8:\n              _context.prev = 8;\n              _context.t0 = _context[\"catch\"](0);\n              console.error(_context.t0);\n\n            case 11:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 8]]);\n    }));\n    return _getUser.apply(this, arguments);\n  }\n\n  function createUser() {\n    return _createUser.apply(this, arguments);\n  }\n\n  function _createUser() {\n    _createUser = (0,D_to_doUI_client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/D_to_doUI_client_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {\n      var response;\n      return D_to_doUI_client_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.prev = 0;\n              _context2.next = 3;\n              return axios__WEBPACK_IMPORTED_MODULE_11__[\"default\"].post('http://localhost:5001/api/tasks/4', createTask);\n\n            case 3:\n              response = _context2.sent;\n              console.log(response);\n              _context2.next = 10;\n              break;\n\n            case 7:\n              _context2.prev = 7;\n              _context2.t0 = _context2[\"catch\"](0);\n              console.error(_context2.t0);\n\n            case 10:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2, null, [[0, 7]]);\n    }));\n    return _createUser.apply(this, arguments);\n  }\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)('none'),\n      modal = _useState2[0],\n      setModal = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(''),\n      filter = _useState3[0],\n      setFilter = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(),\n      taskDelete = _useState4[0],\n      setTaskDelete = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)({\n    title: '',\n    date: _DateNow__WEBPACK_IMPORTED_MODULE_9__.dateNow\n  }),\n      createTask = _useState5[0],\n      setCreateTask = _useState5[1];\n\n  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(tasks),\n      renderTasks = _useState6[0],\n      setRenderTasks = _useState6[1];\n\n  var handleCompleteStatusUpdate = function handleCompleteStatusUpdate(task) {\n    var newList = tasks.map(function (item) {\n      if (item.id === task.id) {\n        item.isChecked = task.isChecked;\n      }\n\n      return item;\n    });\n    setTasks(newList);\n  };\n\n  var createAddTask = function createAddTask() {\n    if (createTask.title == '') return;\n    createUser(); // const newTask = {\n    // \tid: Date.now(),\n    // \ttitle: createTask.title,\n    // \tdate: createTask.date,\n    // \tisChecked: false\n    // }\n    // const newList = [...tasks, newTask]\n    // // setTasks(newList)\n    // setCreateTask({ title: '', date: '' })\n\n    setModal('none');\n  };\n\n  var handleClickEditTask = function handleClickEditTask(task, text) {\n    console.log(task);\n    setTasks(tasks.map(function (item) {\n      if (item.id == task.id) {\n        item.title = text;\n      }\n\n      return item;\n    }));\n  };\n\n  var handleOpenModalDelete = function handleOpenModalDelete(task) {\n    setModal('delete');\n    setTaskDelete(task.id);\n  };\n\n  var handleClickDelete = function handleClickDelete() {\n    setTasks(tasks.filter(function (item) {\n      return item.id !== taskDelete;\n    }));\n    setModal('none');\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(function () {\n    filter == 'all' && setRenderTasks(tasks.filter(function (task) {\n      return task;\n    }));\n    filter == 'done' && setRenderTasks(tasks.filter(function (task) {\n      return task.isChecked;\n    }));\n    filter == 'undone' && setRenderTasks(tasks.filter(function (task) {\n      return !task.isChecked;\n    }));\n    if (filter == 'today') setRenderTasks(tasks.filter(function (task) {\n      return task.date === _DateNow__WEBPACK_IMPORTED_MODULE_9__.dateNow;\n    }));\n    if (filter == 'date') setRenderTasks(tasks.sort(function (task1, task2) {\n      if (task1.date > task2.date) return 1;\n      if (task1.date < task2.date) return -1;\n      return 0;\n    }).map(function (task) {\n      return task;\n    }));\n  }, [filter, tasks]);\n  (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(function () {\n    setRenderTasks(tasks);\n  }, [tasks]);\n  (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(function () {\n    getUser();\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_style__WEBPACK_IMPORTED_MODULE_6__.MainStyle, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_Menu_Menu__WEBPACK_IMPORTED_MODULE_4__.Menu, {\n        onClick: function onClick() {\n          return setModal('add');\n        },\n        filterToday: function filterToday() {\n          return setFilter('today');\n        },\n        filterAll: function filterAll() {\n          return setFilter('all');\n        },\n        filterDone: function filterDone() {\n          return setFilter('done');\n        },\n        filterUndone: function filterUndone() {\n          return setFilter('undone');\n        },\n        filterDate: function filterDate() {\n          return setFilter('date');\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 126,\n        columnNumber: 4\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_ListItem__WEBPACK_IMPORTED_MODULE_3__.ListItem, {\n        tasks: renderTasks,\n        handleOpenModalDelete: handleOpenModalDelete,\n        handleCompleteStatusUpdate: handleCompleteStatusUpdate,\n        handleClickEditTask: handleClickEditTask\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 133,\n        columnNumber: 4\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 3\n    }, _this), modal == 'add' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_Modal__WEBPACK_IMPORTED_MODULE_5__.Modal, {\n      title: 'Create task',\n      nameBtn: 'Save',\n      active: modal,\n      onClickClose: function onClickClose() {\n        return setModal('none');\n      },\n      onClickSave: createAddTask,\n      IconBtn: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_public__WEBPACK_IMPORTED_MODULE_8__.SaveIcon, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 142,\n        columnNumber: 140\n      }, _this),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"input\", {\n        type: \"text\",\n        placeholder: \"Enter text...\",\n        value: createTask.title,\n        onChange: function onChange(e) {\n          return setCreateTask(function (createTask) {\n            return _objectSpread(_objectSpread({}, createTask), {}, {\n              title: e.target.value\n            });\n          });\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 143,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"input\", {\n        type: \"date\",\n        value: createTask.date,\n        onChange: function onChange(e) {\n          return setCreateTask(function (createTask) {\n            return _objectSpread(_objectSpread({}, createTask), {}, {\n              date: e.target.value\n            });\n          });\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 144,\n        columnNumber: 5\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 142,\n      columnNumber: 4\n    }, _this), modal == 'delete' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_Modal__WEBPACK_IMPORTED_MODULE_5__.Modal, {\n      title: 'Delete task',\n      nameBtn: 'Delete',\n      active: modal,\n      onClickClose: function onClickClose() {\n        return setModal('none');\n      },\n      onClickSave: handleClickDelete,\n      IconBtn: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_public__WEBPACK_IMPORTED_MODULE_8__.DeleteIcon, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 149,\n        columnNumber: 146\n      }, _this),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"h3\", {\n        children: \"Are you sure about deleting this task?\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 150,\n        columnNumber: 5\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 149,\n      columnNumber: 4\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Main, \"qwfkHipFfl1zNuvY0zj6bc/K7iE=\");\n\n_c = Main;\n\nvar _c;\n\n$RefreshReg$(_c, \"Main\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TXRDOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvTGF5b3V0L01haW4udHN4P2QzYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmltcG9ydCB7IExpc3RJdGVtIH0gZnJvbSAnQC9jb21wb25lbnRzL0xpc3RJdGVtJztcclxuaW1wb3J0IHsgTWVudSB9IGZyb20gJ0AvY29tcG9uZW50cy9NZW51L01lbnUnO1xyXG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJ0AvY29tcG9uZW50cy9Nb2RhbCc7XHJcbmltcG9ydCB7IFRhc2tQcm9wcyB9IGZyb20gJ0AvY29tcG9uZW50cy9pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBNYWluU3R5bGUgfSBmcm9tICdAL2NvbXBvbmVudHMvc3R5bGUnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRGVsZXRlSWNvbiwgU2F2ZUljb24gfSBmcm9tICcuLi8uLi9wdWJsaWMnO1xyXG5pbXBvcnQgeyBkYXRlTm93IH0gZnJvbSAnQC9EYXRlTm93JztcclxuXHJcblxyXG5leHBvcnQgY29uc3QgTWFpbjogUmVhY3QuRkMgPSAoKSA9PiB7XHJcblx0Y29uc29sZS5sb2cocHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0FQSV9VUkwpXHJcblx0Y29uc3QgW3Rhc2tzLCBzZXRUYXNrc10gPSB1c2VTdGF0ZShcclxuXHRcdFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlkOiAxLFxyXG5cdFx0XHRcdHRpdGxlOiBcImZpcnN0IHRhc2tcIixcclxuXHRcdFx0XHRkYXRlOiBcIjIwMjMtMTAtMDRcIixcclxuXHRcdFx0XHRpc0NoZWNrZWQ6IGZhbHNlXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZDogMixcclxuXHRcdFx0XHR0aXRsZTogXCJzZWNvbmQgdGFza1wiLFxyXG5cdFx0XHRcdGRhdGU6IFwiMjAyMy0xMC0wM1wiLFxyXG5cdFx0XHRcdGlzQ2hlY2tlZDogZmFsc2VcclxuXHRcdFx0fSxcclxuXHRcdF1cclxuXHQpO1xyXG5cclxuXHQvL1RPRE8g0L/QvtC70YPRh9C10L3QuNC1INC30LDQtNCw0Ycg0L/QviBpZFxyXG5cdGFzeW5jIGZ1bmN0aW9uIGdldFVzZXIoKSB7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDo1MDAxL2FwaS90YXNrcy80Jyk7XHJcblx0XHRcdHNldFRhc2tzKHJlc3BvbnNlLmRhdGEpXHJcblx0XHRcdGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdFx0Y29uc29sZS5lcnJvcihlcnJvcik7XHJcblx0XHR9XHJcblx0fVxyXG5cdGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVVzZXIoKSB7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMS9hcGkvdGFza3MvNCcsIGNyZWF0ZVRhc2spO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y29uc3QgW21vZGFsLCBzZXRNb2RhbF0gPSB1c2VTdGF0ZSgnbm9uZScpXHJcblx0Y29uc3QgW2ZpbHRlciwgc2V0RmlsdGVyXSA9IHVzZVN0YXRlKCcnKVxyXG5cclxuXHRjb25zdCBbdGFza0RlbGV0ZSwgc2V0VGFza0RlbGV0ZV0gPSB1c2VTdGF0ZTxudW1iZXI+KClcclxuXHRjb25zdCBbY3JlYXRlVGFzaywgc2V0Q3JlYXRlVGFza10gPSB1c2VTdGF0ZSh7IHRpdGxlOiAnJywgZGF0ZTogZGF0ZU5vdyB9KVxyXG5cclxuXHRjb25zdCBbcmVuZGVyVGFza3MsIHNldFJlbmRlclRhc2tzXSA9IHVzZVN0YXRlKHRhc2tzKVxyXG5cclxuXHRjb25zdCBoYW5kbGVDb21wbGV0ZVN0YXR1c1VwZGF0ZSA9ICh0YXNrOiBUYXNrUHJvcHMpID0+IHtcclxuXHRcdGNvbnN0IG5ld0xpc3QgPSB0YXNrcy5tYXAoaXRlbSA9PiB7XHJcblx0XHRcdGlmIChpdGVtLmlkID09PSB0YXNrLmlkKSB7XHJcblx0XHRcdFx0aXRlbS5pc0NoZWNrZWQgPSB0YXNrLmlzQ2hlY2tlZFxyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBpdGVtXHJcblx0XHR9KTtcclxuXHRcdHNldFRhc2tzKG5ld0xpc3QpXHJcblx0fVxyXG5cclxuXHRjb25zdCBjcmVhdGVBZGRUYXNrID0gKCkgPT4ge1xyXG5cdFx0aWYgKGNyZWF0ZVRhc2sudGl0bGUgPT0gJycpIHJldHVybjtcclxuXHRcdGNyZWF0ZVVzZXIoKVxyXG5cdFx0Ly8gY29uc3QgbmV3VGFzayA9IHtcclxuXHRcdC8vIFx0aWQ6IERhdGUubm93KCksXHJcblx0XHQvLyBcdHRpdGxlOiBjcmVhdGVUYXNrLnRpdGxlLFxyXG5cdFx0Ly8gXHRkYXRlOiBjcmVhdGVUYXNrLmRhdGUsXHJcblx0XHQvLyBcdGlzQ2hlY2tlZDogZmFsc2VcclxuXHRcdC8vIH1cclxuXHRcdC8vIGNvbnN0IG5ld0xpc3QgPSBbLi4udGFza3MsIG5ld1Rhc2tdXHJcblx0XHQvLyAvLyBzZXRUYXNrcyhuZXdMaXN0KVxyXG5cdFx0Ly8gc2V0Q3JlYXRlVGFzayh7IHRpdGxlOiAnJywgZGF0ZTogJycgfSlcclxuXHRcdHNldE1vZGFsKCdub25lJylcclxuXHJcblx0fVxyXG5cdGNvbnN0IGhhbmRsZUNsaWNrRWRpdFRhc2sgPSAodGFzazogVGFza1Byb3BzLCB0ZXh0OiBzdHJpbmcpID0+IHtcclxuXHRcdGNvbnNvbGUubG9nKHRhc2spO1xyXG5cdFx0c2V0VGFza3ModGFza3MubWFwKGl0ZW0gPT4ge1xyXG5cdFx0XHRpZiAoaXRlbS5pZCA9PSB0YXNrLmlkKSB7XHJcblx0XHRcdFx0aXRlbS50aXRsZSA9IHRleHRcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gaXRlbVxyXG5cdFx0fSkpXHJcblx0fVxyXG5cdGNvbnN0IGhhbmRsZU9wZW5Nb2RhbERlbGV0ZSA9ICh0YXNrOiBUYXNrUHJvcHMpID0+IHtcclxuXHRcdHNldE1vZGFsKCdkZWxldGUnKVxyXG5cdFx0c2V0VGFza0RlbGV0ZSh0YXNrLmlkKVxyXG5cdH1cclxuXHRjb25zdCBoYW5kbGVDbGlja0RlbGV0ZSA9ICgpID0+IHtcclxuXHRcdHNldFRhc2tzKHRhc2tzLmZpbHRlcihpdGVtID0+IGl0ZW0uaWQgIT09IHRhc2tEZWxldGUpKVxyXG5cdFx0c2V0TW9kYWwoJ25vbmUnKVxyXG5cdH1cclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGZpbHRlciA9PSAnYWxsJyAmJiBzZXRSZW5kZXJUYXNrcyh0YXNrcy5maWx0ZXIodGFzayA9PiB0YXNrKSlcclxuXHRcdGZpbHRlciA9PSAnZG9uZScgJiYgc2V0UmVuZGVyVGFza3ModGFza3MuZmlsdGVyKHRhc2sgPT4gdGFzay5pc0NoZWNrZWQpKVxyXG5cdFx0ZmlsdGVyID09ICd1bmRvbmUnICYmIHNldFJlbmRlclRhc2tzKHRhc2tzLmZpbHRlcih0YXNrID0+ICF0YXNrLmlzQ2hlY2tlZCkpXHJcblx0XHRpZiAoZmlsdGVyID09ICd0b2RheScpIHNldFJlbmRlclRhc2tzKHRhc2tzLmZpbHRlcih0YXNrID0+IHRhc2suZGF0ZSA9PT0gZGF0ZU5vdykpXHJcblxyXG5cdFx0aWYgKGZpbHRlciA9PSAnZGF0ZScpIHNldFJlbmRlclRhc2tzKHRhc2tzLnNvcnQoKHRhc2sxLCB0YXNrMikgPT4ge1xyXG5cdFx0XHRpZiAodGFzazEuZGF0ZSA+IHRhc2syLmRhdGUpIHJldHVybiAxXHJcblx0XHRcdGlmICh0YXNrMS5kYXRlIDwgdGFzazIuZGF0ZSkgcmV0dXJuIC0xXHJcblx0XHRcdHJldHVybiAwXHJcblx0XHR9KS5tYXAodGFzayA9PiB0YXNrKSlcclxuXHJcblx0fSwgW2ZpbHRlciwgdGFza3NdKVxyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0c2V0UmVuZGVyVGFza3ModGFza3MpXHJcblx0fSwgW3Rhc2tzXSlcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGdldFVzZXIoKVxyXG5cdH0sIFtdKVxyXG5cclxuXHRyZXR1cm4gPD5cclxuXHRcdDxNYWluU3R5bGU+XHJcblx0XHRcdDxNZW51XHJcblx0XHRcdFx0b25DbGljaz17KCkgPT4gc2V0TW9kYWwoJ2FkZCcpfVxyXG5cdFx0XHRcdGZpbHRlclRvZGF5PXsoKSA9PiBzZXRGaWx0ZXIoJ3RvZGF5Jyl9XHJcblx0XHRcdFx0ZmlsdGVyQWxsPXsoKSA9PiBzZXRGaWx0ZXIoJ2FsbCcpfVxyXG5cdFx0XHRcdGZpbHRlckRvbmU9eygpID0+IHNldEZpbHRlcignZG9uZScpfVxyXG5cdFx0XHRcdGZpbHRlclVuZG9uZT17KCkgPT4gc2V0RmlsdGVyKCd1bmRvbmUnKX1cclxuXHRcdFx0XHRmaWx0ZXJEYXRlPXsoKSA9PiBzZXRGaWx0ZXIoJ2RhdGUnKX0gLz5cclxuXHRcdFx0PExpc3RJdGVtXHJcblx0XHRcdFx0dGFza3M9e3JlbmRlclRhc2tzfVxyXG5cdFx0XHRcdGhhbmRsZU9wZW5Nb2RhbERlbGV0ZT17aGFuZGxlT3Blbk1vZGFsRGVsZXRlfVxyXG5cdFx0XHRcdGhhbmRsZUNvbXBsZXRlU3RhdHVzVXBkYXRlPXtoYW5kbGVDb21wbGV0ZVN0YXR1c1VwZGF0ZX1cclxuXHRcdFx0XHRoYW5kbGVDbGlja0VkaXRUYXNrPXtoYW5kbGVDbGlja0VkaXRUYXNrfVxyXG5cdFx0XHQvPlxyXG5cdFx0PC9NYWluU3R5bGU+XHJcblx0XHR7XHJcblx0XHRcdG1vZGFsID09ICdhZGQnICYmXHJcblx0XHRcdDxNb2RhbCB0aXRsZT17J0NyZWF0ZSB0YXNrJ30gbmFtZUJ0bj17J1NhdmUnfSBhY3RpdmU9e21vZGFsfSBvbkNsaWNrQ2xvc2U9eygpID0+IHNldE1vZGFsKCdub25lJyl9IG9uQ2xpY2tTYXZlPXtjcmVhdGVBZGRUYXNrfSBJY29uQnRuPXs8U2F2ZUljb24gLz59PlxyXG5cdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPSdFbnRlciB0ZXh0Li4uJyB2YWx1ZT17Y3JlYXRlVGFzay50aXRsZX0gb25DaGFuZ2U9eyhlKSA9PiBzZXRDcmVhdGVUYXNrKGNyZWF0ZVRhc2sgPT4gKHsgLi4uY3JlYXRlVGFzaywgdGl0bGU6IGUudGFyZ2V0LnZhbHVlIH0pKX0gLz5cclxuXHRcdFx0XHQ8aW5wdXQgdHlwZT1cImRhdGVcIiB2YWx1ZT17Y3JlYXRlVGFzay5kYXRlfSBvbkNoYW5nZT17KGUpID0+IHNldENyZWF0ZVRhc2soY3JlYXRlVGFzayA9PiAoeyAuLi5jcmVhdGVUYXNrLCBkYXRlOiBlLnRhcmdldC52YWx1ZSB9KSl9IC8+XHJcblx0XHRcdDwvTW9kYWw+XHJcblx0XHR9XHJcblx0XHR7XHJcblx0XHRcdG1vZGFsID09ICdkZWxldGUnICYmXHJcblx0XHRcdDxNb2RhbCB0aXRsZT17J0RlbGV0ZSB0YXNrJ30gbmFtZUJ0bj17J0RlbGV0ZSd9IGFjdGl2ZT17bW9kYWx9IG9uQ2xpY2tDbG9zZT17KCkgPT4gc2V0TW9kYWwoJ25vbmUnKX0gb25DbGlja1NhdmU9e2hhbmRsZUNsaWNrRGVsZXRlfSBJY29uQnRuPXs8RGVsZXRlSWNvbiAvPn0+XHJcblx0XHRcdFx0PGgzPkFyZSB5b3Ugc3VyZSBhYm91dCBkZWxldGluZyB0aGlzIHRhc2s/PC9oMz5cclxuXHRcdFx0PC9Nb2RhbD5cclxuXHRcdH1cclxuXHQ8Lz5cclxuXHJcbn0iXSwibmFtZXMiOlsiYXhpb3MiLCJMaXN0SXRlbSIsIk1lbnUiLCJNb2RhbCIsIk1haW5TdHlsZSIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJEZWxldGVJY29uIiwiU2F2ZUljb24iLCJkYXRlTm93IiwiTWFpbiIsImNvbnNvbGUiLCJsb2ciLCJwcm9jZXNzIiwiZW52IiwiUkVBQ1RfQVBQX0FQSV9VUkwiLCJpZCIsInRpdGxlIiwiZGF0ZSIsImlzQ2hlY2tlZCIsInRhc2tzIiwic2V0VGFza3MiLCJnZXRVc2VyIiwiZ2V0IiwicmVzcG9uc2UiLCJkYXRhIiwiZXJyb3IiLCJjcmVhdGVVc2VyIiwicG9zdCIsImNyZWF0ZVRhc2siLCJtb2RhbCIsInNldE1vZGFsIiwiZmlsdGVyIiwic2V0RmlsdGVyIiwidGFza0RlbGV0ZSIsInNldFRhc2tEZWxldGUiLCJzZXRDcmVhdGVUYXNrIiwicmVuZGVyVGFza3MiLCJzZXRSZW5kZXJUYXNrcyIsImhhbmRsZUNvbXBsZXRlU3RhdHVzVXBkYXRlIiwidGFzayIsIm5ld0xpc3QiLCJtYXAiLCJpdGVtIiwiY3JlYXRlQWRkVGFzayIsImhhbmRsZUNsaWNrRWRpdFRhc2siLCJ0ZXh0IiwiaGFuZGxlT3Blbk1vZGFsRGVsZXRlIiwiaGFuZGxlQ2xpY2tEZWxldGUiLCJzb3J0IiwidGFzazEiLCJ0YXNrMiIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Layout/Main.tsx\n"));

/***/ })

});