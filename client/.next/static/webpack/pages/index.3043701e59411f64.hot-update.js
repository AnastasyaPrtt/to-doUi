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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Main: function() { return /* binding */ Main; }\n/* harmony export */ });\n/* harmony import */ var _home_user_Desktop_to_doUi_client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _home_user_Desktop_to_doUi_client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _components_ListItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ListItem */ \"./src/components/ListItem.tsx\");\n/* harmony import */ var _components_Menu_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Menu/Menu */ \"./src/components/Menu/Menu.tsx\");\n/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Modal */ \"./src/components/Modal.tsx\");\n/* harmony import */ var _components_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/style */ \"./src/components/style.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _public__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public */ \"./public/index.jsx\");\n/* harmony import */ var _DateNow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/DateNow */ \"./src/DateNow.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\nvar _jsxFileName = \"/home/user/Desktop/to-doUi/client/src/Layout/Main.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_home_user_Desktop_to_doUi_client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\n\n\n\n\n\n\n\n\n\nvar Main = function Main() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)('none'),\n      modal = _useState[0],\n      setModal = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(''),\n      filter = _useState2[0],\n      setFilter = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(),\n      taskDelete = _useState3[0],\n      setTaskDelete = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)({\n    title: '',\n    date: ''\n  }),\n      createTask = _useState4[0],\n      setCreateTask = _useState4[1]; // const [text, setText] = useState('')\n  // const [date, setDate] = useState('')\n\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([{\n    id: 1,\n    title: \"first task\",\n    date: \"2023-10-04\",\n    isChecked: false\n  }, {\n    id: 2,\n    title: \"second task\",\n    date: \"2023-10-03\",\n    isChecked: false\n  }]),\n      tasks = _useState5[0],\n      setTasks = _useState5[1];\n\n  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(tasks),\n      renderTasks = _useState6[0],\n      setRenderTasks = _useState6[1];\n\n  var handleCompleteStatusUpdate = function handleCompleteStatusUpdate(task) {\n    var newList = tasks.map(function (item) {\n      if (item.id === task.id) {\n        item.isChecked = task.isChecked;\n      }\n\n      return item;\n    });\n    setTasks(newList);\n  };\n\n  var createAddTask = function createAddTask() {\n    if (createTask.title == '') return;\n    var newTask = {\n      id: Date.now(),\n      title: createTask.title,\n      date: createTask.date,\n      isChecked: false\n    };\n    var newList = [].concat((0,_home_user_Desktop_to_doUi_client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(tasks), [newTask]);\n    setTasks(newList);\n    setCreateTask({\n      title: '',\n      date: ''\n    });\n    setModal('none');\n  };\n\n  var handleClickEditTask = function handleClickEditTask(task, text) {\n    console.log(task);\n    setTasks(tasks.map(function (item) {\n      if (item.id == task.id) {\n        item.title = text;\n      }\n\n      return item;\n    }));\n  };\n\n  var handleCloseModal = function handleCloseModal() {\n    setModal('none');\n  };\n\n  var handleClickOpenModal = function handleClickOpenModal() {\n    setModal('add');\n  };\n\n  var handleOpenModalDelete = function handleOpenModalDelete(task) {\n    setModal('delete');\n    setTaskDelete(task.id);\n  };\n\n  var handleClickDelete = function handleClickDelete() {\n    setTasks(tasks.filter(function (item) {\n      return item.id !== taskDelete;\n    }));\n    setModal('none');\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function () {\n    filter == 'all' && setRenderTasks(tasks.filter(function (task) {\n      return task;\n    }));\n    filter == 'done' && setRenderTasks(tasks.filter(function (task) {\n      return task.isChecked;\n    }));\n    filter == 'undone' && setRenderTasks(tasks.filter(function (task) {\n      return !task.isChecked;\n    }));\n    if (filter == 'today') setRenderTasks(tasks.filter(function (task) {\n      return task.date === _DateNow__WEBPACK_IMPORTED_MODULE_8__.dateNow;\n    }));\n    if (filter == 'date') setRenderTasks(tasks.sort(function (task1, task2) {\n      if (task1.date > task2.date) return 1;\n      if (task1.date < task2.date) return -1;\n      return 0;\n    }).map(function (task) {\n      return task;\n    }));\n  }, [filter, tasks]);\n  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function () {\n    setRenderTasks(tasks);\n  }, [tasks]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_style__WEBPACK_IMPORTED_MODULE_5__.MainStyle, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_Menu_Menu__WEBPACK_IMPORTED_MODULE_3__.Menu, {\n        onClick: handleClickOpenModal,\n        filterToday: function filterToday() {\n          return setFilter('today');\n        },\n        filterAll: function filterAll() {\n          return setFilter('all');\n        },\n        filterDone: function filterDone() {\n          return setFilter('done');\n        },\n        filterUndone: function filterUndone() {\n          return setFilter('undone');\n        },\n        filterDate: function filterDate() {\n          return setFilter('date');\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 109,\n        columnNumber: 4\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_ListItem__WEBPACK_IMPORTED_MODULE_2__.ListItem, {\n        tasks: renderTasks,\n        handleOpenModalDelete: handleOpenModalDelete,\n        handleCompleteStatusUpdate: handleCompleteStatusUpdate,\n        handleClickEditTask: handleClickEditTask\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 116,\n        columnNumber: 4\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 3\n    }, _this), modal == 'add' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_Modal__WEBPACK_IMPORTED_MODULE_4__.Modal, {\n      title: 'Create task',\n      nameBtn: 'Save',\n      active: modal,\n      onClickClose: handleCloseModal,\n      onClickSave: createAddTask,\n      IconBtn: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_public__WEBPACK_IMPORTED_MODULE_7__.SaveIcon, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 125,\n        columnNumber: 134\n      }, _this),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"input\", {\n        type: \"text\",\n        placeholder: \"Enter text...\",\n        value: createTask.title,\n        onChange: function onChange(e) {\n          return setCreateTask(function (createTask) {\n            return _objectSpread(_objectSpread({}, createTask), {}, {\n              title: e.target.value\n            });\n          });\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 126,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"input\", {\n        type: \"date\",\n        value: _DateNow__WEBPACK_IMPORTED_MODULE_8__.dateNow,\n        onChange: function onChange(e) {\n          return setCreateTask(function (createTask) {\n            return _objectSpread(_objectSpread({}, createTask), {}, {\n              date: e.target.value\n            });\n          });\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 127,\n        columnNumber: 5\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 4\n    }, _this), modal == 'delete' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_Modal__WEBPACK_IMPORTED_MODULE_4__.Modal, {\n      title: 'Delete task',\n      nameBtn: 'Delete',\n      active: modal,\n      onClickClose: handleCloseModal,\n      onClickSave: handleClickDelete,\n      IconBtn: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_public__WEBPACK_IMPORTED_MODULE_7__.DeleteIcon, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 132,\n        columnNumber: 140\n      }, _this),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"h3\", {\n        children: \"Are you sure about deleting this task?\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 133,\n        columnNumber: 5\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 132,\n      columnNumber: 4\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Main, \"v1PsZTx0aTh2fVExTOrbMjy6DK4=\");\n\n_c = Main;\n\nvar _c;\n\n$RefreshReg$(_c, \"Main\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFTQztZQUFyQztVQUFBLENBQVgsQ0FBcEI7UUFBQTtNQUE3QztRQUFBO1FBQUE7UUFBQTtNQUFBLFNBRkQ7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBLFNBbEJLLEVBd0JMdEMsS0FBSyxJQUFJLFFBQVQsaUJBQ0EsOERBQUMsb0RBQUQ7TUFBTyxLQUFLLEVBQUUsYUFBZDtNQUE2QixPQUFPLEVBQUUsUUFBdEM7TUFBZ0QsTUFBTSxFQUFFQSxLQUF4RDtNQUErRCxZQUFZLEVBQUU2QixnQkFBN0U7TUFBK0YsV0FBVyxFQUFFRyxpQkFBNUc7TUFBK0gsT0FBTyxlQUFFLDhEQUFDLCtDQUFEO1FBQUE7UUFBQTtRQUFBO01BQUEsU0FBeEk7TUFBQSx1QkFDQztRQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUREO01BQUE7TUFBQTtNQUFBO0lBQUEsU0F6Qks7RUFBQSxnQkFBUDtBQStCQSxDQS9ITTs7R0FBTWpDOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvTGF5b3V0L01haW4udHN4P2QzYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGlzdEl0ZW0gfSBmcm9tICdAL2NvbXBvbmVudHMvTGlzdEl0ZW0nO1xuaW1wb3J0IHsgTWVudSB9IGZyb20gJ0AvY29tcG9uZW50cy9NZW51L01lbnUnO1xuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICdAL2NvbXBvbmVudHMvTW9kYWwnO1xuaW1wb3J0IHsgVGFza1Byb3BzIH0gZnJvbSAnQC9jb21wb25lbnRzL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBNYWluU3R5bGUgfSBmcm9tICdAL2NvbXBvbmVudHMvc3R5bGUnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBEZWxldGVJY29uLCBTYXZlSWNvbiB9IGZyb20gJy4uLy4uL3B1YmxpYyc7XG5pbXBvcnQgeyBkYXRlTm93IH0gZnJvbSAnQC9EYXRlTm93JztcblxuXG5leHBvcnQgY29uc3QgTWFpbjogUmVhY3QuRkMgPSAoKSA9PiB7XG5cdGNvbnN0IFttb2RhbCwgc2V0TW9kYWxdID0gdXNlU3RhdGUoJ25vbmUnKVxuXHRjb25zdCBbZmlsdGVyLCBzZXRGaWx0ZXJdID0gdXNlU3RhdGUoJycpXG5cblx0Y29uc3QgW3Rhc2tEZWxldGUsIHNldFRhc2tEZWxldGVdID0gdXNlU3RhdGU8bnVtYmVyPigpXG5cdGNvbnN0IFtjcmVhdGVUYXNrLCBzZXRDcmVhdGVUYXNrXSA9IHVzZVN0YXRlKHsgdGl0bGU6ICcnLCBkYXRlOiAnJyB9KVxuXG5cdC8vIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKCcnKVxuXHQvLyBjb25zdCBbZGF0ZSwgc2V0RGF0ZV0gPSB1c2VTdGF0ZSgnJylcblx0Y29uc3QgW3Rhc2tzLCBzZXRUYXNrc10gPSB1c2VTdGF0ZShcblx0XHRbXG5cdFx0XHR7XG5cdFx0XHRcdGlkOiAxLFxuXHRcdFx0XHR0aXRsZTogXCJmaXJzdCB0YXNrXCIsXG5cdFx0XHRcdGRhdGU6IFwiMjAyMy0xMC0wNFwiLFxuXHRcdFx0XHRpc0NoZWNrZWQ6IGZhbHNlXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRpZDogMixcblx0XHRcdFx0dGl0bGU6IFwic2Vjb25kIHRhc2tcIixcblx0XHRcdFx0ZGF0ZTogXCIyMDIzLTEwLTAzXCIsXG5cdFx0XHRcdGlzQ2hlY2tlZDogZmFsc2Vcblx0XHRcdH0sXG5cdFx0XVxuXHQpO1xuXHRjb25zdCBbcmVuZGVyVGFza3MsIHNldFJlbmRlclRhc2tzXSA9IHVzZVN0YXRlKHRhc2tzKVxuXG5cdGNvbnN0IGhhbmRsZUNvbXBsZXRlU3RhdHVzVXBkYXRlID0gKHRhc2s6IFRhc2tQcm9wcykgPT4ge1xuXHRcdGNvbnN0IG5ld0xpc3QgPSB0YXNrcy5tYXAoaXRlbSA9PiB7XG5cdFx0XHRpZiAoaXRlbS5pZCA9PT0gdGFzay5pZCkge1xuXHRcdFx0XHRpdGVtLmlzQ2hlY2tlZCA9IHRhc2suaXNDaGVja2VkXG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gaXRlbVxuXHRcdH0pO1xuXHRcdHNldFRhc2tzKG5ld0xpc3QpXG5cdH1cblxuXHRjb25zdCBjcmVhdGVBZGRUYXNrID0gKCkgPT4ge1xuXHRcdGlmIChjcmVhdGVUYXNrLnRpdGxlID09ICcnKSByZXR1cm47XG5cblx0XHRjb25zdCBuZXdUYXNrID0ge1xuXHRcdFx0aWQ6IERhdGUubm93KCksXG5cdFx0XHR0aXRsZTogY3JlYXRlVGFzay50aXRsZSxcblx0XHRcdGRhdGU6IGNyZWF0ZVRhc2suZGF0ZSxcblx0XHRcdGlzQ2hlY2tlZDogZmFsc2Vcblx0XHR9XG5cdFx0Y29uc3QgbmV3TGlzdCA9IFsuLi50YXNrcywgbmV3VGFza11cblx0XHRzZXRUYXNrcyhuZXdMaXN0KVxuXHRcdHNldENyZWF0ZVRhc2soeyB0aXRsZTogJycsIGRhdGU6ICcnIH0pXG5cdFx0c2V0TW9kYWwoJ25vbmUnKVxuXG5cdH1cblx0Y29uc3QgaGFuZGxlQ2xpY2tFZGl0VGFzayA9ICh0YXNrOiBUYXNrUHJvcHMsIHRleHQ6IHN0cmluZykgPT4ge1xuXHRcdGNvbnNvbGUubG9nKHRhc2spO1xuXHRcdHNldFRhc2tzKHRhc2tzLm1hcChpdGVtID0+IHtcblx0XHRcdGlmIChpdGVtLmlkID09IHRhc2suaWQpIHtcblx0XHRcdFx0aXRlbS50aXRsZSA9IHRleHRcblx0XHRcdH1cblx0XHRcdHJldHVybiBpdGVtXG5cdFx0fSkpXG5cdH1cblx0Y29uc3QgaGFuZGxlQ2xvc2VNb2RhbCA9ICgpID0+IHtcblx0XHRzZXRNb2RhbCgnbm9uZScpXG5cdH1cblx0Y29uc3QgaGFuZGxlQ2xpY2tPcGVuTW9kYWwgPSAoKSA9PiB7XG5cdFx0c2V0TW9kYWwoJ2FkZCcpXG5cdH1cblx0Y29uc3QgaGFuZGxlT3Blbk1vZGFsRGVsZXRlID0gKHRhc2s6IFRhc2tQcm9wcykgPT4ge1xuXHRcdHNldE1vZGFsKCdkZWxldGUnKVxuXHRcdHNldFRhc2tEZWxldGUodGFzay5pZClcblx0fVxuXHRjb25zdCBoYW5kbGVDbGlja0RlbGV0ZSA9ICgpID0+IHtcblx0XHRzZXRUYXNrcyh0YXNrcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmlkICE9PSB0YXNrRGVsZXRlKSlcblx0XHRzZXRNb2RhbCgnbm9uZScpXG5cdH1cblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGZpbHRlciA9PSAnYWxsJyAmJiBzZXRSZW5kZXJUYXNrcyh0YXNrcy5maWx0ZXIodGFzayA9PiB0YXNrKSlcblx0XHRmaWx0ZXIgPT0gJ2RvbmUnICYmIHNldFJlbmRlclRhc2tzKHRhc2tzLmZpbHRlcih0YXNrID0+IHRhc2suaXNDaGVja2VkKSlcblx0XHRmaWx0ZXIgPT0gJ3VuZG9uZScgJiYgc2V0UmVuZGVyVGFza3ModGFza3MuZmlsdGVyKHRhc2sgPT4gIXRhc2suaXNDaGVja2VkKSlcblx0XHRpZiAoZmlsdGVyID09ICd0b2RheScpIHNldFJlbmRlclRhc2tzKHRhc2tzLmZpbHRlcih0YXNrID0+IHRhc2suZGF0ZSA9PT0gZGF0ZU5vdykpXG5cblx0XHRpZiAoZmlsdGVyID09ICdkYXRlJykgc2V0UmVuZGVyVGFza3ModGFza3Muc29ydCgodGFzazEsIHRhc2syKSA9PiB7XG5cdFx0XHRpZiAodGFzazEuZGF0ZSA+IHRhc2syLmRhdGUpIHJldHVybiAxXG5cdFx0XHRpZiAodGFzazEuZGF0ZSA8IHRhc2syLmRhdGUpIHJldHVybiAtMVxuXHRcdFx0cmV0dXJuIDBcblx0XHR9KS5tYXAodGFzayA9PiB0YXNrKSlcblxuXHR9LCBbZmlsdGVyLCB0YXNrc10pXG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRzZXRSZW5kZXJUYXNrcyh0YXNrcylcblx0fSwgW3Rhc2tzXSlcblxuXG5cblx0cmV0dXJuIDw+XG5cdFx0PE1haW5TdHlsZT5cblx0XHRcdDxNZW51XG5cdFx0XHRcdG9uQ2xpY2s9e2hhbmRsZUNsaWNrT3Blbk1vZGFsfVxuXHRcdFx0XHRmaWx0ZXJUb2RheT17KCkgPT4gc2V0RmlsdGVyKCd0b2RheScpfVxuXHRcdFx0XHRmaWx0ZXJBbGw9eygpID0+IHNldEZpbHRlcignYWxsJyl9XG5cdFx0XHRcdGZpbHRlckRvbmU9eygpID0+IHNldEZpbHRlcignZG9uZScpfVxuXHRcdFx0XHRmaWx0ZXJVbmRvbmU9eygpID0+IHNldEZpbHRlcigndW5kb25lJyl9XG5cdFx0XHRcdGZpbHRlckRhdGU9eygpID0+IHNldEZpbHRlcignZGF0ZScpfSAvPlxuXHRcdFx0PExpc3RJdGVtXG5cdFx0XHRcdHRhc2tzPXtyZW5kZXJUYXNrc31cblx0XHRcdFx0aGFuZGxlT3Blbk1vZGFsRGVsZXRlPXtoYW5kbGVPcGVuTW9kYWxEZWxldGV9XG5cdFx0XHRcdGhhbmRsZUNvbXBsZXRlU3RhdHVzVXBkYXRlPXtoYW5kbGVDb21wbGV0ZVN0YXR1c1VwZGF0ZX1cblx0XHRcdFx0aGFuZGxlQ2xpY2tFZGl0VGFzaz17aGFuZGxlQ2xpY2tFZGl0VGFza31cblx0XHRcdC8+XG5cdFx0PC9NYWluU3R5bGU+XG5cdFx0e1xuXHRcdFx0bW9kYWwgPT0gJ2FkZCcgJiZcblx0XHRcdDxNb2RhbCB0aXRsZT17J0NyZWF0ZSB0YXNrJ30gbmFtZUJ0bj17J1NhdmUnfSBhY3RpdmU9e21vZGFsfSBvbkNsaWNrQ2xvc2U9e2hhbmRsZUNsb3NlTW9kYWx9IG9uQ2xpY2tTYXZlPXtjcmVhdGVBZGRUYXNrfSBJY29uQnRuPXs8U2F2ZUljb24gLz59PlxuXHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj0nRW50ZXIgdGV4dC4uLicgdmFsdWU9e2NyZWF0ZVRhc2sudGl0bGV9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q3JlYXRlVGFzayhjcmVhdGVUYXNrID0+ICh7IC4uLmNyZWF0ZVRhc2ssIHRpdGxlOiBlLnRhcmdldC52YWx1ZSB9KSl9IC8+XG5cdFx0XHRcdDxpbnB1dCB0eXBlPVwiZGF0ZVwiIHZhbHVlPXtkYXRlTm93fSBvbkNoYW5nZT17KGUpID0+IHNldENyZWF0ZVRhc2soY3JlYXRlVGFzayA9PiAoeyAuLi5jcmVhdGVUYXNrLCBkYXRlOiBlLnRhcmdldC52YWx1ZSB9KSl9IC8+XG5cdFx0XHQ8L01vZGFsPlxuXHRcdH1cblx0XHR7XG5cdFx0XHRtb2RhbCA9PSAnZGVsZXRlJyAmJlxuXHRcdFx0PE1vZGFsIHRpdGxlPXsnRGVsZXRlIHRhc2snfSBuYW1lQnRuPXsnRGVsZXRlJ30gYWN0aXZlPXttb2RhbH0gb25DbGlja0Nsb3NlPXtoYW5kbGVDbG9zZU1vZGFsfSBvbkNsaWNrU2F2ZT17aGFuZGxlQ2xpY2tEZWxldGV9IEljb25CdG49ezxEZWxldGVJY29uIC8+fT5cblx0XHRcdFx0PGgzPkFyZSB5b3Ugc3VyZSBhYm91dCBkZWxldGluZyB0aGlzIHRhc2s/PC9oMz5cblx0XHRcdDwvTW9kYWw+XG5cdFx0fVxuXHQ8Lz5cblxufSJdLCJuYW1lcyI6WyJMaXN0SXRlbSIsIk1lbnUiLCJNb2RhbCIsIk1haW5TdHlsZSIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJEZWxldGVJY29uIiwiU2F2ZUljb24iLCJkYXRlTm93IiwiTWFpbiIsIm1vZGFsIiwic2V0TW9kYWwiLCJmaWx0ZXIiLCJzZXRGaWx0ZXIiLCJ0YXNrRGVsZXRlIiwic2V0VGFza0RlbGV0ZSIsInRpdGxlIiwiZGF0ZSIsImNyZWF0ZVRhc2siLCJzZXRDcmVhdGVUYXNrIiwiaWQiLCJpc0NoZWNrZWQiLCJ0YXNrcyIsInNldFRhc2tzIiwicmVuZGVyVGFza3MiLCJzZXRSZW5kZXJUYXNrcyIsImhhbmRsZUNvbXBsZXRlU3RhdHVzVXBkYXRlIiwidGFzayIsIm5ld0xpc3QiLCJtYXAiLCJpdGVtIiwiY3JlYXRlQWRkVGFzayIsIm5ld1Rhc2siLCJEYXRlIiwibm93IiwiaGFuZGxlQ2xpY2tFZGl0VGFzayIsInRleHQiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2xvc2VNb2RhbCIsImhhbmRsZUNsaWNrT3Blbk1vZGFsIiwiaGFuZGxlT3Blbk1vZGFsRGVsZXRlIiwiaGFuZGxlQ2xpY2tEZWxldGUiLCJzb3J0IiwidGFzazEiLCJ0YXNrMiIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Layout/Main.tsx\n"));

/***/ })

});