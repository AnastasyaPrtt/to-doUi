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

/***/ "./src/DateNow.ts":
/*!************************!*\
  !*** ./src/DateNow.ts ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   dateNow: function() { return /* binding */ dateNow; }\n/* harmony export */ });\nvar dateNow = String(new Date().getFullYear() + '-' + (new Date().getMonth() + 1 < 10 ? '0' + new Date().getMonth() + 1 : new Date().getMonth() + 1) + '-' + (new Date().getDate() < 10 ? '0' + new Date().getDate() : new Date().getDate()));\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvRGF0ZU5vdy50cyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sSUFBTUEsT0FBYyxHQUFHQyxNQUFNLENBQUMsSUFBSUMsSUFBSixHQUFXQyxXQUFYLEtBQTJCLEdBQTNCLElBQWtDLElBQUlELElBQUosR0FBV0UsUUFBWCxLQUF3QixDQUF4QixHQUE0QixFQUE1QixHQUFpQyxNQUFNLElBQUlGLElBQUosR0FBV0UsUUFBWCxFQUFOLEdBQThCLENBQS9ELEdBQW1FLElBQUlGLElBQUosR0FBV0UsUUFBWCxLQUF3QixDQUE3SCxJQUFrSSxHQUFsSSxJQUF5SSxJQUFJRixJQUFKLEdBQVdHLE9BQVgsS0FBdUIsRUFBdkIsR0FBNEIsTUFBTSxJQUFJSCxJQUFKLEdBQVdHLE9BQVgsRUFBbEMsR0FBeUQsSUFBSUgsSUFBSixHQUFXRyxPQUFYLEVBQWxNLENBQUQsQ0FBN0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0RhdGVOb3cudHM/NzNhZiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZGF0ZU5vdzpzdHJpbmcgPSBTdHJpbmcobmV3IERhdGUoKS5nZXRGdWxsWWVhcigpICsgJy0nICsgKG5ldyBEYXRlKCkuZ2V0TW9udGgoKSArIDEgPCAxMCA/ICcwJyArIG5ldyBEYXRlKCkuZ2V0TW9udGgoKSArIDEgOiBuZXcgRGF0ZSgpLmdldE1vbnRoKCkgKyAxKSArICctJyArIChuZXcgRGF0ZSgpLmdldERhdGUoKSA8IDEwID8gJzAnICsgbmV3IERhdGUoKS5nZXREYXRlKCkgOiBuZXcgRGF0ZSgpLmdldERhdGUoKSkpOyJdLCJuYW1lcyI6WyJkYXRlTm93IiwiU3RyaW5nIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/DateNow.ts\n"));

/***/ }),

/***/ "./src/Layout/Main.tsx":
/*!*****************************!*\
  !*** ./src/Layout/Main.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Main: function() { return /* binding */ Main; }\n/* harmony export */ });\n/* harmony import */ var _home_user_Desktop_to_doUi_client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _components_ListItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ListItem */ \"./src/components/ListItem.tsx\");\n/* harmony import */ var _components_Menu_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Menu/Menu */ \"./src/components/Menu/Menu.tsx\");\n/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Modal */ \"./src/components/Modal.tsx\");\n/* harmony import */ var _components_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/style */ \"./src/components/style.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _public__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public */ \"./public/index.jsx\");\n/* harmony import */ var _DateNow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/DateNow */ \"./src/DateNow.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);\n\n\nvar _jsxFileName = \"/home/user/Desktop/to-doUi/client/src/Layout/Main.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar Main = function Main() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),\n      modalAdd = _useState[0],\n      setModalAdd = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),\n      modalDelete = _useState2[0],\n      setModalDelete = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({\n    today: false,\n    status: 'all'\n  }),\n      filter = _useState3[0],\n      setFilter = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(),\n      taskDelete = _useState4[0],\n      setTaskDelete = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(''),\n      text = _useState5[0],\n      setText = _useState5[1];\n\n  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(''),\n      date = _useState6[0],\n      setDate = _useState6[1];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([{\n    id: 1,\n    title: \"first task\",\n    date: \"2023-10-04\",\n    isChecked: false\n  }, {\n    id: 2,\n    title: \"second task\",\n    date: \"2023-10-03\",\n    isChecked: false\n  }]),\n      tasks = _useState7[0],\n      setTasks = _useState7[1];\n\n  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(tasks),\n      renderTasks = _useState8[0],\n      setRenderTasks = _useState8[1];\n\n  var handleCompleteStatusUpdate = function handleCompleteStatusUpdate(task) {\n    var newList = tasks.map(function (item) {\n      if (item.id === task.id) {\n        item.isChecked = task.isChecked;\n      }\n\n      return item;\n    });\n    setTasks(newList);\n  };\n\n  var createAddTask = function createAddTask() {\n    if (text == '' || text == ' ') {\n      return;\n    }\n\n    var newTask = {\n      id: Date.now(),\n      title: text,\n      date: date,\n      isChecked: false\n    };\n    var newList = [].concat((0,_home_user_Desktop_to_doUi_client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(tasks), [newTask]);\n    setTasks(newList);\n    setText('');\n    setDate('');\n    setModalAdd(false);\n  };\n\n  var handleClickEditTask = function handleClickEditTask(task, text) {\n    console.log(task);\n    setTasks(tasks.map(function (item) {\n      if (item.id == task.id) {\n        item.title = text;\n      }\n\n      return item;\n    }));\n  };\n\n  var handleCloseModal = function handleCloseModal() {\n    setModalAdd(false);\n    setModalDelete(false);\n  };\n\n  var handleClickOpenModal = function handleClickOpenModal() {\n    setModalAdd(true);\n  };\n\n  var handleOpenModalDelete = function handleOpenModalDelete(task) {\n    setModalDelete(true);\n    setTaskDelete(task);\n  };\n\n  var handleClickDelete = function handleClickDelete() {\n    setTasks(tasks.filter(function (item) {\n      return item.id !== taskDelete;\n    }));\n    setModalDelete(false);\n  }; // const filterToday = () => {\n  // \tconst dateNow = String(new Date().getFullYear() + '-' + (new Date().getMonth() + 1 < 10 ? '0' + new Date().getMonth() + 1 : new Date().getMonth() + 1) + '-' + (new Date().getDate() < 10 ? '0' + new Date().getDate() : new Date().getDate()));\n  // \tsetRenderTasks(tasks.filter(task => task.date == dateNow))\n  // }\n\n\n  var filterDate = function filterDate() {\n    setRenderTasks(tasks.sort(function (task1, task2) {\n      if (task1.date > task2.date) return 1;\n      if (task1.date < task2.date) return -1;\n      return 0;\n    }).map(function (task) {\n      return task;\n    }));\n  };\n\n  var filterAll = function filterAll() {\n    setRenderTasks(tasks.filter(function (task) {\n      return task;\n    }));\n  };\n\n  var filterDone = function filterDone() {\n    setRenderTasks(tasks.filter(function (task) {\n      return task.isChecked;\n    }));\n  };\n\n  var filterUndone = function filterUndone() {\n    setRenderTasks(tasks.filter(function (task) {\n      return !task.isChecked;\n    }));\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {\n    filter.today && setRenderTasks(tasks.filter(function (task) {\n      return task.date == _DateNow__WEBPACK_IMPORTED_MODULE_7__.dateNow;\n    }));\n    filter.status == 'done' && setRenderTasks(tasks.filter(function (task) {\n      return task.isChecked;\n    }));\n    filter.status == 'undone' && setRenderTasks(tasks.filter(function (task) {\n      return !task.isChecked;\n    }));\n    setFilter({\n      today: false,\n      status: 'all'\n    });\n  }, [filter.status]);\n  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {\n    setRenderTasks(tasks);\n  }, [tasks]); // useEffect(()=>{\n  // \tconstg sortedTasks = [...tasks]\n  // \tif(filter.today){\n  // \t\tsortedTasks.filter(today)\n  // \t}\n  // \tif(filter.status !=='all') {\n  // \t\tsortedTasks.filter(filter.status)\n  // \t}\n  // \tsortedTask.sort(filter.date)\n  // },[\n  // \tfilter,tasks\n  // ])\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_style__WEBPACK_IMPORTED_MODULE_4__.MainStyle, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_Menu_Menu__WEBPACK_IMPORTED_MODULE_2__.Menu, {\n        onClick: handleClickOpenModal,\n        filterToday: function filterToday() {\n          return setFilter({\n            today: true,\n            status: 'all'\n          });\n        },\n        filterAll: filterAll,\n        filterDone: function filterDone() {\n          return setFilter({\n            status: 'done'\n          });\n        },\n        filterUndone: filterUndone,\n        filterDate: filterDate\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 136,\n        columnNumber: 4\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_ListItem__WEBPACK_IMPORTED_MODULE_1__.ListItem, {\n        tasks: renderTasks,\n        handleOpenModalDelete: handleOpenModalDelete,\n        handleCompleteStatusUpdate: handleCompleteStatusUpdate,\n        handleClickEditTask: handleClickEditTask\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 137,\n        columnNumber: 4\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 135,\n      columnNumber: 3\n    }, _this), modalAdd ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_Modal__WEBPACK_IMPORTED_MODULE_3__.Modal, {\n      title: 'Create task',\n      nameBtn: 'Save',\n      active: modalAdd,\n      onClickClose: handleCloseModal,\n      onClickSave: createAddTask,\n      IconBtn: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_public__WEBPACK_IMPORTED_MODULE_6__.SaveIcon, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 145,\n        columnNumber: 148\n      }, _this),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"input\", {\n        type: \"text\",\n        placeholder: \"Enter text...\",\n        value: text,\n        onChange: function onChange(e) {\n          return setText(e.target.value);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 146,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"input\", {\n        type: \"date\",\n        value: date,\n        onChange: function onChange(e) {\n          return setDate(e.target.value);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 147,\n        columnNumber: 5\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 145,\n      columnNumber: 15\n    }, _this) : null, modalDelete ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_Modal__WEBPACK_IMPORTED_MODULE_3__.Modal, {\n      title: 'Delete task',\n      nameBtn: 'Delete',\n      active: modalDelete,\n      onClickClose: handleCloseModal,\n      onClickSave: handleClickDelete,\n      IconBtn: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_public__WEBPACK_IMPORTED_MODULE_6__.DeleteIcon, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 151,\n        columnNumber: 160\n      }, _this),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"h3\", {\n        children: \"Are you sure about deleting this task?\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 152,\n        columnNumber: 5\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 151,\n      columnNumber: 18\n    }, _this) : null]\n  }, void 0, true);\n};\n\n_s(Main, \"8MqILNgjVZYTZ9HkQS1Ak9pXDeA=\");\n\n_c = Main;\n\nvar _c;\n\n$RefreshReg$(_c, \"Main\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TTs7R0FBTXJDOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvTGF5b3V0L01haW4udHN4P2QzYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGlzdEl0ZW0gfSBmcm9tICdAL2NvbXBvbmVudHMvTGlzdEl0ZW0nO1xuaW1wb3J0IHsgTWVudSB9IGZyb20gJ0AvY29tcG9uZW50cy9NZW51L01lbnUnO1xuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICdAL2NvbXBvbmVudHMvTW9kYWwnO1xuaW1wb3J0IHsgVGFza1Byb3BzIH0gZnJvbSAnQC9jb21wb25lbnRzL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBNYWluU3R5bGUgfSBmcm9tICdAL2NvbXBvbmVudHMvc3R5bGUnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBEZWxldGVJY29uLCBTYXZlSWNvbiB9IGZyb20gJy4uLy4uL3B1YmxpYyc7XG5pbXBvcnQgeyBkYXRlTm93IH0gZnJvbSAnQC9EYXRlTm93JztcblxuXG5leHBvcnQgY29uc3QgTWFpbjogUmVhY3QuRkMgPSAoKSA9PiB7XG5cdGNvbnN0IFttb2RhbEFkZCwgc2V0TW9kYWxBZGRdID0gdXNlU3RhdGUoZmFsc2UpXG5cdGNvbnN0IFttb2RhbERlbGV0ZSwgc2V0TW9kYWxEZWxldGVdID0gdXNlU3RhdGUoZmFsc2UpXG5cdGNvbnN0IFtmaWx0ZXIsIHNldEZpbHRlcl0gPSB1c2VTdGF0ZSh7IHRvZGF5OiBmYWxzZSwgc3RhdHVzOiAnYWxsJyB9KVxuXHRjb25zdCBbdGFza0RlbGV0ZSwgc2V0VGFza0RlbGV0ZV0gPSB1c2VTdGF0ZSgpXG5cdGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKCcnKVxuXHRjb25zdCBbZGF0ZSwgc2V0RGF0ZV0gPSB1c2VTdGF0ZSgnJylcblx0Y29uc3QgW3Rhc2tzLCBzZXRUYXNrc10gPSB1c2VTdGF0ZShcblx0XHRbXG5cdFx0XHR7XG5cdFx0XHRcdGlkOiAxLFxuXHRcdFx0XHR0aXRsZTogXCJmaXJzdCB0YXNrXCIsXG5cdFx0XHRcdGRhdGU6IFwiMjAyMy0xMC0wNFwiLFxuXHRcdFx0XHRpc0NoZWNrZWQ6IGZhbHNlXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRpZDogMixcblx0XHRcdFx0dGl0bGU6IFwic2Vjb25kIHRhc2tcIixcblx0XHRcdFx0ZGF0ZTogXCIyMDIzLTEwLTAzXCIsXG5cdFx0XHRcdGlzQ2hlY2tlZDogZmFsc2Vcblx0XHRcdH0sXG5cdFx0XVxuXHQpO1xuXHRjb25zdCBbcmVuZGVyVGFza3MsIHNldFJlbmRlclRhc2tzXSA9IHVzZVN0YXRlKHRhc2tzKVxuXG5cdGNvbnN0IGhhbmRsZUNvbXBsZXRlU3RhdHVzVXBkYXRlID0gKHRhc2s6IFRhc2tQcm9wcykgPT4ge1xuXHRcdGNvbnN0IG5ld0xpc3QgPSB0YXNrcy5tYXAoaXRlbSA9PiB7XG5cdFx0XHRpZiAoaXRlbS5pZCA9PT0gdGFzay5pZCkge1xuXHRcdFx0XHRpdGVtLmlzQ2hlY2tlZCA9IHRhc2suaXNDaGVja2VkXG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gaXRlbVxuXHRcdH0pO1xuXHRcdHNldFRhc2tzKG5ld0xpc3QpXG5cdH1cblxuXHRjb25zdCBjcmVhdGVBZGRUYXNrID0gKCkgPT4ge1xuXHRcdGlmICh0ZXh0ID09ICcnIHx8IHRleHQgPT0gJyAnKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IG5ld1Rhc2sgPSB7XG5cdFx0XHRpZDogRGF0ZS5ub3coKSxcblx0XHRcdHRpdGxlOiB0ZXh0LFxuXHRcdFx0ZGF0ZTogZGF0ZSxcblx0XHRcdGlzQ2hlY2tlZDogZmFsc2Vcblx0XHR9XG5cdFx0Y29uc3QgbmV3TGlzdCA9IFsuLi50YXNrcywgbmV3VGFza11cblx0XHRzZXRUYXNrcyhuZXdMaXN0KVxuXHRcdHNldFRleHQoJycpXG5cdFx0c2V0RGF0ZSgnJylcblx0XHRzZXRNb2RhbEFkZChmYWxzZSlcblxuXHR9XG5cdGNvbnN0IGhhbmRsZUNsaWNrRWRpdFRhc2sgPSAodGFzaywgdGV4dCkgPT4ge1xuXHRcdGNvbnNvbGUubG9nKHRhc2spO1xuXHRcdHNldFRhc2tzKHRhc2tzLm1hcChpdGVtID0+IHtcblx0XHRcdGlmIChpdGVtLmlkID09IHRhc2suaWQpIHtcblx0XHRcdFx0aXRlbS50aXRsZSA9IHRleHRcblx0XHRcdH1cblx0XHRcdHJldHVybiBpdGVtXG5cdFx0fSkpXG5cdH1cblx0Y29uc3QgaGFuZGxlQ2xvc2VNb2RhbCA9ICgpID0+IHtcblx0XHRzZXRNb2RhbEFkZChmYWxzZSlcblx0XHRzZXRNb2RhbERlbGV0ZShmYWxzZSlcblx0fVxuXHRjb25zdCBoYW5kbGVDbGlja09wZW5Nb2RhbCA9ICgpID0+IHtcblx0XHRzZXRNb2RhbEFkZCh0cnVlKVxuXHR9XG5cdGNvbnN0IGhhbmRsZU9wZW5Nb2RhbERlbGV0ZSA9ICh0YXNrKSA9PiB7XG5cdFx0c2V0TW9kYWxEZWxldGUodHJ1ZSlcblx0XHRzZXRUYXNrRGVsZXRlKHRhc2spXG5cdH1cblx0Y29uc3QgaGFuZGxlQ2xpY2tEZWxldGUgPSAoKSA9PiB7XG5cdFx0c2V0VGFza3ModGFza3MuZmlsdGVyKGl0ZW0gPT4gaXRlbS5pZCAhPT0gdGFza0RlbGV0ZSkpXG5cdFx0c2V0TW9kYWxEZWxldGUoZmFsc2UpXG5cdH1cblx0Ly8gY29uc3QgZmlsdGVyVG9kYXkgPSAoKSA9PiB7XG5cdC8vIFx0Y29uc3QgZGF0ZU5vdyA9IFN0cmluZyhuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkgKyAnLScgKyAobmV3IERhdGUoKS5nZXRNb250aCgpICsgMSA8IDEwID8gJzAnICsgbmV3IERhdGUoKS5nZXRNb250aCgpICsgMSA6IG5ldyBEYXRlKCkuZ2V0TW9udGgoKSArIDEpICsgJy0nICsgKG5ldyBEYXRlKCkuZ2V0RGF0ZSgpIDwgMTAgPyAnMCcgKyBuZXcgRGF0ZSgpLmdldERhdGUoKSA6IG5ldyBEYXRlKCkuZ2V0RGF0ZSgpKSk7XG5cdC8vIFx0c2V0UmVuZGVyVGFza3ModGFza3MuZmlsdGVyKHRhc2sgPT4gdGFzay5kYXRlID09IGRhdGVOb3cpKVxuXHQvLyB9XG5cdGNvbnN0IGZpbHRlckRhdGUgPSAoKSA9PiB7XG5cdFx0c2V0UmVuZGVyVGFza3ModGFza3Muc29ydCgodGFzazEsIHRhc2syKSA9PiB7XG5cdFx0XHRpZiAodGFzazEuZGF0ZSA+IHRhc2syLmRhdGUpIHJldHVybiAxXG5cdFx0XHRpZiAodGFzazEuZGF0ZSA8IHRhc2syLmRhdGUpIHJldHVybiAtMVxuXHRcdFx0cmV0dXJuIDBcblx0XHR9KS5tYXAodGFzayA9PiB0YXNrKSlcblx0fVxuXHRjb25zdCBmaWx0ZXJBbGwgPSAoKSA9PiB7XG5cdFx0c2V0UmVuZGVyVGFza3ModGFza3MuZmlsdGVyKHRhc2sgPT4gdGFzaykpXG5cdH1cblx0Y29uc3QgZmlsdGVyRG9uZSA9ICgpID0+IHtcblx0XHRzZXRSZW5kZXJUYXNrcyh0YXNrcy5maWx0ZXIodGFzayA9PiB0YXNrLmlzQ2hlY2tlZCkpXG5cdH1cblx0Y29uc3QgZmlsdGVyVW5kb25lID0gKCkgPT4ge1xuXHRcdHNldFJlbmRlclRhc2tzKHRhc2tzLmZpbHRlcih0YXNrID0+ICF0YXNrLmlzQ2hlY2tlZCkpXG5cdH1cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRmaWx0ZXIudG9kYXkgJiYgc2V0UmVuZGVyVGFza3ModGFza3MuZmlsdGVyKHRhc2sgPT4gdGFzay5kYXRlID09IGRhdGVOb3cpKVxuXHRcdGZpbHRlci5zdGF0dXMgPT0gJ2RvbmUnICYmIHNldFJlbmRlclRhc2tzKHRhc2tzLmZpbHRlcih0YXNrID0+IHRhc2suaXNDaGVja2VkKSlcblx0XHRmaWx0ZXIuc3RhdHVzID09ICd1bmRvbmUnICYmIHNldFJlbmRlclRhc2tzKHRhc2tzLmZpbHRlcih0YXNrID0+ICF0YXNrLmlzQ2hlY2tlZCkpXG5cblxuXHRcdHNldEZpbHRlcih7IHRvZGF5OiBmYWxzZSwgc3RhdHVzOiAnYWxsJyB9KVxuXG5cdH0sIFtmaWx0ZXIuc3RhdHVzXSlcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdHNldFJlbmRlclRhc2tzKHRhc2tzKVxuXHR9LCBbdGFza3NdKVxuXG5cdC8vIHVzZUVmZmVjdCgoKT0+e1xuXHQvLyBcdGNvbnN0ZyBzb3J0ZWRUYXNrcyA9IFsuLi50YXNrc11cblx0Ly8gXHRpZihmaWx0ZXIudG9kYXkpe1xuXHQvLyBcdFx0c29ydGVkVGFza3MuZmlsdGVyKHRvZGF5KVxuXHQvLyBcdH1cblx0Ly8gXHRpZihmaWx0ZXIuc3RhdHVzICE9PSdhbGwnKSB7XG5cdC8vIFx0XHRzb3J0ZWRUYXNrcy5maWx0ZXIoZmlsdGVyLnN0YXR1cylcblx0Ly8gXHR9XG5cdC8vIFx0c29ydGVkVGFzay5zb3J0KGZpbHRlci5kYXRlKVxuXHQvLyB9LFtcblx0Ly8gXHRmaWx0ZXIsdGFza3Ncblx0Ly8gXSlcblxuXHRyZXR1cm4gPD5cblx0XHQ8TWFpblN0eWxlPlxuXHRcdFx0PE1lbnUgb25DbGljaz17aGFuZGxlQ2xpY2tPcGVuTW9kYWx9IGZpbHRlclRvZGF5PXsoKSA9PiBzZXRGaWx0ZXIoeyB0b2RheTogdHJ1ZSwgc3RhdHVzOiAnYWxsJyB9KX0gZmlsdGVyQWxsPXtmaWx0ZXJBbGx9IGZpbHRlckRvbmU9eygpID0+IHNldEZpbHRlcih7IHN0YXR1czogJ2RvbmUnIH0pfSBmaWx0ZXJVbmRvbmU9e2ZpbHRlclVuZG9uZX0gZmlsdGVyRGF0ZT17ZmlsdGVyRGF0ZX0gLz5cblx0XHRcdDxMaXN0SXRlbVxuXHRcdFx0XHR0YXNrcz17cmVuZGVyVGFza3N9XG5cdFx0XHRcdGhhbmRsZU9wZW5Nb2RhbERlbGV0ZT17aGFuZGxlT3Blbk1vZGFsRGVsZXRlfVxuXHRcdFx0XHRoYW5kbGVDb21wbGV0ZVN0YXR1c1VwZGF0ZT17aGFuZGxlQ29tcGxldGVTdGF0dXNVcGRhdGV9XG5cdFx0XHRcdGhhbmRsZUNsaWNrRWRpdFRhc2s9e2hhbmRsZUNsaWNrRWRpdFRhc2t9XG5cdFx0XHQvPlxuXHRcdDwvTWFpblN0eWxlPlxuXHRcdHtcblx0XHRcdG1vZGFsQWRkID8gPE1vZGFsIHRpdGxlPXsnQ3JlYXRlIHRhc2snfSBuYW1lQnRuPXsnU2F2ZSd9IGFjdGl2ZT17bW9kYWxBZGR9IG9uQ2xpY2tDbG9zZT17aGFuZGxlQ2xvc2VNb2RhbH0gb25DbGlja1NhdmU9e2NyZWF0ZUFkZFRhc2t9IEljb25CdG49ezxTYXZlSWNvbiAvPn0+XG5cdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPSdFbnRlciB0ZXh0Li4uJyB2YWx1ZT17dGV4dH0gb25DaGFuZ2U9eyhlKSA9PiBzZXRUZXh0KGUudGFyZ2V0LnZhbHVlKX0gLz5cblx0XHRcdFx0PGlucHV0IHR5cGU9XCJkYXRlXCIgdmFsdWU9e2RhdGV9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0RGF0ZShlLnRhcmdldC52YWx1ZSl9IC8+XG5cdFx0XHQ8L01vZGFsPiA6IG51bGxcblx0XHR9XG5cdFx0e1xuXHRcdFx0bW9kYWxEZWxldGUgPyA8TW9kYWwgdGl0bGU9eydEZWxldGUgdGFzayd9IG5hbWVCdG49eydEZWxldGUnfSBhY3RpdmU9e21vZGFsRGVsZXRlfSBvbkNsaWNrQ2xvc2U9e2hhbmRsZUNsb3NlTW9kYWx9IG9uQ2xpY2tTYXZlPXtoYW5kbGVDbGlja0RlbGV0ZX0gSWNvbkJ0bj17PERlbGV0ZUljb24gLz59PlxuXHRcdFx0XHQ8aDM+QXJlIHlvdSBzdXJlIGFib3V0IGRlbGV0aW5nIHRoaXMgdGFzaz88L2gzPlxuXHRcdFx0PC9Nb2RhbD4gOiBudWxsXG5cdFx0fVxuXHQ8Lz5cblxufSJdLCJuYW1lcyI6WyJMaXN0SXRlbSIsIk1lbnUiLCJNb2RhbCIsIk1haW5TdHlsZSIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJEZWxldGVJY29uIiwiU2F2ZUljb24iLCJkYXRlTm93IiwiTWFpbiIsIm1vZGFsQWRkIiwic2V0TW9kYWxBZGQiLCJtb2RhbERlbGV0ZSIsInNldE1vZGFsRGVsZXRlIiwidG9kYXkiLCJzdGF0dXMiLCJmaWx0ZXIiLCJzZXRGaWx0ZXIiLCJ0YXNrRGVsZXRlIiwic2V0VGFza0RlbGV0ZSIsInRleHQiLCJzZXRUZXh0IiwiZGF0ZSIsInNldERhdGUiLCJpZCIsInRpdGxlIiwiaXNDaGVja2VkIiwidGFza3MiLCJzZXRUYXNrcyIsInJlbmRlclRhc2tzIiwic2V0UmVuZGVyVGFza3MiLCJoYW5kbGVDb21wbGV0ZVN0YXR1c1VwZGF0ZSIsInRhc2siLCJuZXdMaXN0IiwibWFwIiwiaXRlbSIsImNyZWF0ZUFkZFRhc2siLCJuZXdUYXNrIiwiRGF0ZSIsIm5vdyIsImhhbmRsZUNsaWNrRWRpdFRhc2siLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2xvc2VNb2RhbCIsImhhbmRsZUNsaWNrT3Blbk1vZGFsIiwiaGFuZGxlT3Blbk1vZGFsRGVsZXRlIiwiaGFuZGxlQ2xpY2tEZWxldGUiLCJmaWx0ZXJEYXRlIiwic29ydCIsInRhc2sxIiwidGFzazIiLCJmaWx0ZXJBbGwiLCJmaWx0ZXJEb25lIiwiZmlsdGVyVW5kb25lIiwiZSIsInRhcmdldCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Layout/Main.tsx\n"));

/***/ })

});