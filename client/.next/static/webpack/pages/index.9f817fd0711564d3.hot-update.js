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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Main: function() { return /* binding */ Main; }\n/* harmony export */ });\n/* harmony import */ var _home_user_Desktop_to_doUi_client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _home_user_Desktop_to_doUi_client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _home_user_Desktop_to_doUi_client_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_user_Desktop_to_doUi_client_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_user_Desktop_to_doUi_client_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _components_ListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ListItem */ \"./src/components/ListItem.tsx\");\n/* harmony import */ var _components_Menu_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Menu/Menu */ \"./src/components/Menu/Menu.tsx\");\n/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Modal */ \"./src/components/Modal.tsx\");\n/* harmony import */ var _components_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/style */ \"./src/components/style.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _public__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../public */ \"./public/index.jsx\");\n/* harmony import */ var _DateNow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/DateNow */ \"./src/DateNow.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\nvar _jsxFileName = \"/home/user/Desktop/to-doUi/client/src/Layout/Main.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_home_user_Desktop_to_doUi_client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\n\n\n\n\n\n\n\n\n\n\nvar Main = function Main() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)([{\n    id: 1,\n    title: \"first task\",\n    date: \"2023-10-04\",\n    isChecked: false\n  }, {\n    id: 2,\n    title: \"second task\",\n    date: \"2023-10-03\",\n    isChecked: false\n  }]),\n      tasks = _useState[0],\n      setTasks = _useState[1]; //TODO получение задач по id\n\n\n  function getUser() {\n    return _getUser.apply(this, arguments);\n  }\n\n  function _getUser() {\n    _getUser = (0,_home_user_Desktop_to_doUi_client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_home_user_Desktop_to_doUi_client_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {\n      var response;\n      return _home_user_Desktop_to_doUi_client_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return axios__WEBPACK_IMPORTED_MODULE_11__[\"default\"].get('http://localhost:5001/api/tasks/4');\n\n            case 3:\n              response = _context.sent;\n              setTasks(response.data);\n              console.log(response.data);\n              _context.next = 11;\n              break;\n\n            case 8:\n              _context.prev = 8;\n              _context.t0 = _context[\"catch\"](0);\n              console.error(_context.t0);\n\n            case 11:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 8]]);\n    }));\n    return _getUser.apply(this, arguments);\n  }\n\n  function createUser() {\n    return _createUser.apply(this, arguments);\n  }\n\n  function _createUser() {\n    _createUser = (0,_home_user_Desktop_to_doUi_client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_home_user_Desktop_to_doUi_client_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {\n      return _home_user_Desktop_to_doUi_client_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              try {\n                console.log({\n                  createTask: createTask\n                }); // const response = await axios.post('http://localhost:5001/api/tasks/4', { createTask });\n                // console.log(response)\n              } catch (error) {\n                console.error(error);\n              }\n\n            case 1:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n    return _createUser.apply(this, arguments);\n  }\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)('none'),\n      modal = _useState2[0],\n      setModal = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(''),\n      filter = _useState3[0],\n      setFilter = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(),\n      taskDelete = _useState4[0],\n      setTaskDelete = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)({\n    title: '',\n    date: _DateNow__WEBPACK_IMPORTED_MODULE_9__.dateNow\n  }),\n      createTask = _useState5[0],\n      setCreateTask = _useState5[1];\n\n  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(tasks),\n      renderTasks = _useState6[0],\n      setRenderTasks = _useState6[1];\n\n  var handleCompleteStatusUpdate = function handleCompleteStatusUpdate(task) {\n    var newList = tasks.map(function (item) {\n      if (item.id === task.id) {\n        item.isChecked = task.isChecked;\n      }\n\n      return item;\n    });\n    setTasks(newList);\n  };\n\n  var createAddTask = function createAddTask() {\n    if (createTask.title == '') return;\n    createUser(); // const newTask = {\n    // \tid: Date.now(),\n    // \ttitle: createTask.title,\n    // \tdate: createTask.date,\n    // \tisChecked: false\n    // }\n    // const newList = [...tasks, newTask]\n    // // setTasks(newList)\n    // setCreateTask({ title: '', date: '' })\n\n    setModal('none');\n  };\n\n  var handleClickEditTask = function handleClickEditTask(task, text) {\n    console.log(task);\n    setTasks(tasks.map(function (item) {\n      if (item.id == task.id) {\n        item.title = text;\n      }\n\n      return item;\n    }));\n  };\n\n  var handleOpenModalDelete = function handleOpenModalDelete(task) {\n    setModal('delete');\n    setTaskDelete(task.id);\n  };\n\n  var handleClickDelete = function handleClickDelete() {\n    setTasks(tasks.filter(function (item) {\n      return item.id !== taskDelete;\n    }));\n    setModal('none');\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(function () {\n    filter == 'all' && setRenderTasks(tasks.filter(function (task) {\n      return task;\n    }));\n    filter == 'done' && setRenderTasks(tasks.filter(function (task) {\n      return task.isChecked;\n    }));\n    filter == 'undone' && setRenderTasks(tasks.filter(function (task) {\n      return !task.isChecked;\n    }));\n    if (filter == 'today') setRenderTasks(tasks.filter(function (task) {\n      return task.date === _DateNow__WEBPACK_IMPORTED_MODULE_9__.dateNow;\n    }));\n    if (filter == 'date') setRenderTasks(tasks.sort(function (task1, task2) {\n      if (task1.date > task2.date) return 1;\n      if (task1.date < task2.date) return -1;\n      return 0;\n    }).map(function (task) {\n      return task;\n    }));\n  }, [filter, tasks]);\n  (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(function () {\n    setRenderTasks(tasks);\n  }, [tasks]);\n  (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(function () {\n    getUser();\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_style__WEBPACK_IMPORTED_MODULE_6__.MainStyle, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_Menu_Menu__WEBPACK_IMPORTED_MODULE_4__.Menu, {\n        onClick: function onClick() {\n          return setModal('add');\n        },\n        filterToday: function filterToday() {\n          return setFilter('today');\n        },\n        filterAll: function filterAll() {\n          return setFilter('all');\n        },\n        filterDone: function filterDone() {\n          return setFilter('done');\n        },\n        filterUndone: function filterUndone() {\n          return setFilter('undone');\n        },\n        filterDate: function filterDate() {\n          return setFilter('date');\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 126,\n        columnNumber: 4\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_ListItem__WEBPACK_IMPORTED_MODULE_3__.ListItem, {\n        tasks: renderTasks,\n        handleOpenModalDelete: handleOpenModalDelete,\n        handleCompleteStatusUpdate: handleCompleteStatusUpdate,\n        handleClickEditTask: handleClickEditTask\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 133,\n        columnNumber: 4\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 3\n    }, _this), modal == 'add' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_Modal__WEBPACK_IMPORTED_MODULE_5__.Modal, {\n      title: 'Create task',\n      nameBtn: 'Save',\n      active: modal,\n      onClickClose: function onClickClose() {\n        return setModal('none');\n      },\n      onClickSave: createAddTask,\n      IconBtn: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_public__WEBPACK_IMPORTED_MODULE_8__.SaveIcon, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 142,\n        columnNumber: 140\n      }, _this),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"input\", {\n        type: \"text\",\n        placeholder: \"Enter text...\",\n        value: createTask.title,\n        onChange: function onChange(e) {\n          return setCreateTask(function (createTask) {\n            return _objectSpread(_objectSpread({}, createTask), {}, {\n              title: e.target.value\n            });\n          });\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 143,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"input\", {\n        type: \"date\",\n        value: createTask.date,\n        onChange: function onChange(e) {\n          return setCreateTask(function (createTask) {\n            return _objectSpread(_objectSpread({}, createTask), {}, {\n              date: e.target.value\n            });\n          });\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 144,\n        columnNumber: 5\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 142,\n      columnNumber: 4\n    }, _this), modal == 'delete' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_Modal__WEBPACK_IMPORTED_MODULE_5__.Modal, {\n      title: 'Delete task',\n      nameBtn: 'Delete',\n      active: modal,\n      onClickClose: function onClickClose() {\n        return setModal('none');\n      },\n      onClickSave: handleClickDelete,\n      IconBtn: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_public__WEBPACK_IMPORTED_MODULE_8__.DeleteIcon, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 149,\n        columnNumber: 146\n      }, _this),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"h3\", {\n        children: \"Are you sure about deleting this task?\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 150,\n        columnNumber: 5\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 149,\n      columnNumber: 4\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Main, \"mnnlhB2OL+pbbwmw22rBxHlIXKg=\");\n\n_c = Main;\n\nvar _c;\n\n$RefreshReg$(_c, \"Main\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmltcG9ydCB7IExpc3RJdGVtIH0gZnJvbSAnQC9jb21wb25lbnRzL0xpc3RJdGVtJztcbmltcG9ydCB7IE1lbnUgfSBmcm9tICdAL2NvbXBvbmVudHMvTWVudS9NZW51JztcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSAnQC9jb21wb25lbnRzL01vZGFsJztcbmltcG9ydCB7IFRhc2tQcm9wcyB9IGZyb20gJ0AvY29tcG9uZW50cy9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgTWFpblN0eWxlIH0gZnJvbSAnQC9jb21wb25lbnRzL3N0eWxlJztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRGVsZXRlSWNvbiwgU2F2ZUljb24gfSBmcm9tICcuLi8uLi9wdWJsaWMnO1xuaW1wb3J0IHsgZGF0ZU5vdyB9IGZyb20gJ0AvRGF0ZU5vdyc7XG5cblxuZXhwb3J0IGNvbnN0IE1haW46IFJlYWN0LkZDID0gKCkgPT4ge1xuXHRjb25zdCBbdGFza3MsIHNldFRhc2tzXSA9IHVzZVN0YXRlKFxuXHRcdFtcblx0XHRcdHtcblx0XHRcdFx0aWQ6IDEsXG5cdFx0XHRcdHRpdGxlOiBcImZpcnN0IHRhc2tcIixcblx0XHRcdFx0ZGF0ZTogXCIyMDIzLTEwLTA0XCIsXG5cdFx0XHRcdGlzQ2hlY2tlZDogZmFsc2Vcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGlkOiAyLFxuXHRcdFx0XHR0aXRsZTogXCJzZWNvbmQgdGFza1wiLFxuXHRcdFx0XHRkYXRlOiBcIjIwMjMtMTAtMDNcIixcblx0XHRcdFx0aXNDaGVja2VkOiBmYWxzZVxuXHRcdFx0fSxcblx0XHRdXG5cdCk7XG5cblx0Ly9UT0RPINC/0L7Qu9GD0YfQtdC90LjQtSDQt9Cw0LTQsNGHINC/0L4gaWRcblx0YXN5bmMgZnVuY3Rpb24gZ2V0VXNlcigpIHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMS9hcGkvdGFza3MvNCcpO1xuXHRcdFx0c2V0VGFza3MocmVzcG9uc2UuZGF0YSlcblx0XHRcdGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKGVycm9yKTtcblx0XHR9XG5cdH1cblx0YXN5bmMgZnVuY3Rpb24gY3JlYXRlVXNlcigpIHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc29sZS5sb2coeyBjcmVhdGVUYXNrIH0pXG5cdFx0XHQvLyBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMS9hcGkvdGFza3MvNCcsIHsgY3JlYXRlVGFzayB9KTtcblx0XHRcdC8vIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKGVycm9yKTtcblx0XHR9XG5cdH1cblxuXHRjb25zdCBbbW9kYWwsIHNldE1vZGFsXSA9IHVzZVN0YXRlKCdub25lJylcblx0Y29uc3QgW2ZpbHRlciwgc2V0RmlsdGVyXSA9IHVzZVN0YXRlKCcnKVxuXG5cdGNvbnN0IFt0YXNrRGVsZXRlLCBzZXRUYXNrRGVsZXRlXSA9IHVzZVN0YXRlPG51bWJlcj4oKVxuXHRjb25zdCBbY3JlYXRlVGFzaywgc2V0Q3JlYXRlVGFza10gPSB1c2VTdGF0ZSh7IHRpdGxlOiAnJywgZGF0ZTogZGF0ZU5vdyB9KVxuXG5cdGNvbnN0IFtyZW5kZXJUYXNrcywgc2V0UmVuZGVyVGFza3NdID0gdXNlU3RhdGUodGFza3MpXG5cblx0Y29uc3QgaGFuZGxlQ29tcGxldGVTdGF0dXNVcGRhdGUgPSAodGFzazogVGFza1Byb3BzKSA9PiB7XG5cdFx0Y29uc3QgbmV3TGlzdCA9IHRhc2tzLm1hcChpdGVtID0+IHtcblx0XHRcdGlmIChpdGVtLmlkID09PSB0YXNrLmlkKSB7XG5cdFx0XHRcdGl0ZW0uaXNDaGVja2VkID0gdGFzay5pc0NoZWNrZWRcblx0XHRcdH1cblx0XHRcdHJldHVybiBpdGVtXG5cdFx0fSk7XG5cdFx0c2V0VGFza3MobmV3TGlzdClcblx0fVxuXG5cdGNvbnN0IGNyZWF0ZUFkZFRhc2sgPSAoKSA9PiB7XG5cdFx0aWYgKGNyZWF0ZVRhc2sudGl0bGUgPT0gJycpIHJldHVybjtcblx0XHRjcmVhdGVVc2VyKClcblx0XHQvLyBjb25zdCBuZXdUYXNrID0ge1xuXHRcdC8vIFx0aWQ6IERhdGUubm93KCksXG5cdFx0Ly8gXHR0aXRsZTogY3JlYXRlVGFzay50aXRsZSxcblx0XHQvLyBcdGRhdGU6IGNyZWF0ZVRhc2suZGF0ZSxcblx0XHQvLyBcdGlzQ2hlY2tlZDogZmFsc2Vcblx0XHQvLyB9XG5cdFx0Ly8gY29uc3QgbmV3TGlzdCA9IFsuLi50YXNrcywgbmV3VGFza11cblx0XHQvLyAvLyBzZXRUYXNrcyhuZXdMaXN0KVxuXHRcdC8vIHNldENyZWF0ZVRhc2soeyB0aXRsZTogJycsIGRhdGU6ICcnIH0pXG5cdFx0c2V0TW9kYWwoJ25vbmUnKVxuXG5cdH1cblx0Y29uc3QgaGFuZGxlQ2xpY2tFZGl0VGFzayA9ICh0YXNrOiBUYXNrUHJvcHMsIHRleHQ6IHN0cmluZykgPT4ge1xuXHRcdGNvbnNvbGUubG9nKHRhc2spO1xuXHRcdHNldFRhc2tzKHRhc2tzLm1hcChpdGVtID0+IHtcblx0XHRcdGlmIChpdGVtLmlkID09IHRhc2suaWQpIHtcblx0XHRcdFx0aXRlbS50aXRsZSA9IHRleHRcblx0XHRcdH1cblx0XHRcdHJldHVybiBpdGVtXG5cdFx0fSkpXG5cdH1cblx0Y29uc3QgaGFuZGxlT3Blbk1vZGFsRGVsZXRlID0gKHRhc2s6IFRhc2tQcm9wcykgPT4ge1xuXHRcdHNldE1vZGFsKCdkZWxldGUnKVxuXHRcdHNldFRhc2tEZWxldGUodGFzay5pZClcblx0fVxuXHRjb25zdCBoYW5kbGVDbGlja0RlbGV0ZSA9ICgpID0+IHtcblx0XHRzZXRUYXNrcyh0YXNrcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmlkICE9PSB0YXNrRGVsZXRlKSlcblx0XHRzZXRNb2RhbCgnbm9uZScpXG5cdH1cblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGZpbHRlciA9PSAnYWxsJyAmJiBzZXRSZW5kZXJUYXNrcyh0YXNrcy5maWx0ZXIodGFzayA9PiB0YXNrKSlcblx0XHRmaWx0ZXIgPT0gJ2RvbmUnICYmIHNldFJlbmRlclRhc2tzKHRhc2tzLmZpbHRlcih0YXNrID0+IHRhc2suaXNDaGVja2VkKSlcblx0XHRmaWx0ZXIgPT0gJ3VuZG9uZScgJiYgc2V0UmVuZGVyVGFza3ModGFza3MuZmlsdGVyKHRhc2sgPT4gIXRhc2suaXNDaGVja2VkKSlcblx0XHRpZiAoZmlsdGVyID09ICd0b2RheScpIHNldFJlbmRlclRhc2tzKHRhc2tzLmZpbHRlcih0YXNrID0+IHRhc2suZGF0ZSA9PT0gZGF0ZU5vdykpXG5cblx0XHRpZiAoZmlsdGVyID09ICdkYXRlJykgc2V0UmVuZGVyVGFza3ModGFza3Muc29ydCgodGFzazEsIHRhc2syKSA9PiB7XG5cdFx0XHRpZiAodGFzazEuZGF0ZSA+IHRhc2syLmRhdGUpIHJldHVybiAxXG5cdFx0XHRpZiAodGFzazEuZGF0ZSA8IHRhc2syLmRhdGUpIHJldHVybiAtMVxuXHRcdFx0cmV0dXJuIDBcblx0XHR9KS5tYXAodGFzayA9PiB0YXNrKSlcblxuXHR9LCBbZmlsdGVyLCB0YXNrc10pXG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRzZXRSZW5kZXJUYXNrcyh0YXNrcylcblx0fSwgW3Rhc2tzXSlcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGdldFVzZXIoKVxuXHR9LCBbXSlcblxuXHRyZXR1cm4gPD5cblx0XHQ8TWFpblN0eWxlPlxuXHRcdFx0PE1lbnVcblx0XHRcdFx0b25DbGljaz17KCkgPT4gc2V0TW9kYWwoJ2FkZCcpfVxuXHRcdFx0XHRmaWx0ZXJUb2RheT17KCkgPT4gc2V0RmlsdGVyKCd0b2RheScpfVxuXHRcdFx0XHRmaWx0ZXJBbGw9eygpID0+IHNldEZpbHRlcignYWxsJyl9XG5cdFx0XHRcdGZpbHRlckRvbmU9eygpID0+IHNldEZpbHRlcignZG9uZScpfVxuXHRcdFx0XHRmaWx0ZXJVbmRvbmU9eygpID0+IHNldEZpbHRlcigndW5kb25lJyl9XG5cdFx0XHRcdGZpbHRlckRhdGU9eygpID0+IHNldEZpbHRlcignZGF0ZScpfSAvPlxuXHRcdFx0PExpc3RJdGVtXG5cdFx0XHRcdHRhc2tzPXtyZW5kZXJUYXNrc31cblx0XHRcdFx0aGFuZGxlT3Blbk1vZGFsRGVsZXRlPXtoYW5kbGVPcGVuTW9kYWxEZWxldGV9XG5cdFx0XHRcdGhhbmRsZUNvbXBsZXRlU3RhdHVzVXBkYXRlPXtoYW5kbGVDb21wbGV0ZVN0YXR1c1VwZGF0ZX1cblx0XHRcdFx0aGFuZGxlQ2xpY2tFZGl0VGFzaz17aGFuZGxlQ2xpY2tFZGl0VGFza31cblx0XHRcdC8+XG5cdFx0PC9NYWluU3R5bGU+XG5cdFx0e1xuXHRcdFx0bW9kYWwgPT0gJ2FkZCcgJiZcblx0XHRcdDxNb2RhbCB0aXRsZT17J0NyZWF0ZSB0YXNrJ30gbmFtZUJ0bj17J1NhdmUnfSBhY3RpdmU9e21vZGFsfSBvbkNsaWNrQ2xvc2U9eygpID0+IHNldE1vZGFsKCdub25lJyl9IG9uQ2xpY2tTYXZlPXtjcmVhdGVBZGRUYXNrfSBJY29uQnRuPXs8U2F2ZUljb24gLz59PlxuXHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj0nRW50ZXIgdGV4dC4uLicgdmFsdWU9e2NyZWF0ZVRhc2sudGl0bGV9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q3JlYXRlVGFzayhjcmVhdGVUYXNrID0+ICh7IC4uLmNyZWF0ZVRhc2ssIHRpdGxlOiBlLnRhcmdldC52YWx1ZSB9KSl9IC8+XG5cdFx0XHRcdDxpbnB1dCB0eXBlPVwiZGF0ZVwiIHZhbHVlPXtjcmVhdGVUYXNrLmRhdGV9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q3JlYXRlVGFzayhjcmVhdGVUYXNrID0+ICh7IC4uLmNyZWF0ZVRhc2ssIGRhdGU6IGUudGFyZ2V0LnZhbHVlIH0pKX0gLz5cblx0XHRcdDwvTW9kYWw+XG5cdFx0fVxuXHRcdHtcblx0XHRcdG1vZGFsID09ICdkZWxldGUnICYmXG5cdFx0XHQ8TW9kYWwgdGl0bGU9eydEZWxldGUgdGFzayd9IG5hbWVCdG49eydEZWxldGUnfSBhY3RpdmU9e21vZGFsfSBvbkNsaWNrQ2xvc2U9eygpID0+IHNldE1vZGFsKCdub25lJyl9IG9uQ2xpY2tTYXZlPXtoYW5kbGVDbGlja0RlbGV0ZX0gSWNvbkJ0bj17PERlbGV0ZUljb24gLz59PlxuXHRcdFx0XHQ8aDM+QXJlIHlvdSBzdXJlIGFib3V0IGRlbGV0aW5nIHRoaXMgdGFzaz88L2gzPlxuXHRcdFx0PC9Nb2RhbD5cblx0XHR9XG5cdDwvPlxuXG59Il0sIm5hbWVzIjpbImF4aW9zIiwiTGlzdEl0ZW0iLCJNZW51IiwiTW9kYWwiLCJNYWluU3R5bGUiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiRGVsZXRlSWNvbiIsIlNhdmVJY29uIiwiZGF0ZU5vdyIsIk1haW4iLCJpZCIsInRpdGxlIiwiZGF0ZSIsImlzQ2hlY2tlZCIsInRhc2tzIiwic2V0VGFza3MiLCJnZXRVc2VyIiwiZ2V0IiwicmVzcG9uc2UiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiY3JlYXRlVXNlciIsImNyZWF0ZVRhc2siLCJtb2RhbCIsInNldE1vZGFsIiwiZmlsdGVyIiwic2V0RmlsdGVyIiwidGFza0RlbGV0ZSIsInNldFRhc2tEZWxldGUiLCJzZXRDcmVhdGVUYXNrIiwicmVuZGVyVGFza3MiLCJzZXRSZW5kZXJUYXNrcyIsImhhbmRsZUNvbXBsZXRlU3RhdHVzVXBkYXRlIiwidGFzayIsIm5ld0xpc3QiLCJtYXAiLCJpdGVtIiwiY3JlYXRlQWRkVGFzayIsImhhbmRsZUNsaWNrRWRpdFRhc2siLCJ0ZXh0IiwiaGFuZGxlT3Blbk1vZGFsRGVsZXRlIiwiaGFuZGxlQ2xpY2tEZWxldGUiLCJzb3J0IiwidGFzazEiLCJ0YXNrMiIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Layout/Main.tsx\n"));

/***/ })

});