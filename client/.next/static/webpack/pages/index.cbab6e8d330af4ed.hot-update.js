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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Main: function() { return /* binding */ Main; }\n/* harmony export */ });\n/* harmony import */ var _home_user_Desktop_to_doUi_client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _components_ListItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ListItem */ \"./src/components/ListItem.tsx\");\n/* harmony import */ var _components_Menu_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Menu/Menu */ \"./src/components/Menu/Menu.tsx\");\n/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Modal */ \"./src/components/Modal.tsx\");\n/* harmony import */ var _components_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/style */ \"./src/components/style.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _public__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public */ \"./public/index.jsx\");\n/* harmony import */ var _DateNow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/DateNow */ \"./src/DateNow.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);\n\n\nvar _jsxFileName = \"/home/user/Desktop/to-doUi/client/src/Layout/Main.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar Main = function Main() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),\n      modalAdd = _useState[0],\n      setModalAdd = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),\n      modalDelete = _useState2[0],\n      setModalDelete = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(''),\n      filter = _useState3[0],\n      setFilter = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(),\n      taskDelete = _useState4[0],\n      setTaskDelete = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(''),\n      text = _useState5[0],\n      setText = _useState5[1];\n\n  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(''),\n      date = _useState6[0],\n      setDate = _useState6[1];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([{\n    id: 1,\n    title: \"first task\",\n    date: \"2023-10-04\",\n    isChecked: false\n  }, {\n    id: 2,\n    title: \"second task\",\n    date: \"2023-10-03\",\n    isChecked: false\n  }]),\n      tasks = _useState7[0],\n      setTasks = _useState7[1];\n\n  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(tasks),\n      renderTasks = _useState8[0],\n      setRenderTasks = _useState8[1];\n\n  var handleCompleteStatusUpdate = function handleCompleteStatusUpdate(task) {\n    var newList = tasks.map(function (item) {\n      if (item.id === task.id) {\n        item.isChecked = task.isChecked;\n      }\n\n      return item;\n    });\n    setTasks(newList);\n  };\n\n  var createAddTask = function createAddTask() {\n    if (text == '' || text == ' ') {\n      return;\n    }\n\n    var newTask = {\n      id: Date.now(),\n      title: text,\n      date: date,\n      isChecked: false\n    };\n    var newList = [].concat((0,_home_user_Desktop_to_doUi_client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(tasks), [newTask]);\n    setTasks(newList);\n    setText('');\n    setDate('');\n    setModalAdd(false);\n  };\n\n  var handleClickEditTask = function handleClickEditTask(task, text) {\n    console.log(task);\n    setTasks(tasks.map(function (item) {\n      if (item.id == task.id) {\n        item.title = text;\n      }\n\n      return item;\n    }));\n  };\n\n  var handleCloseModal = function handleCloseModal() {\n    setModalAdd(false);\n    setModalDelete(false);\n  };\n\n  var handleClickOpenModal = function handleClickOpenModal() {\n    setModalAdd(true);\n  };\n\n  var handleOpenModalDelete = function handleOpenModalDelete(task) {\n    setModalDelete(true);\n    setTaskDelete(task.id);\n  };\n\n  var handleClickDelete = function handleClickDelete() {\n    setTasks(tasks.filter(function (item) {\n      return item.id !== taskDelete;\n    }));\n    setModalDelete(false);\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {\n    filter == 'all' && setRenderTasks(tasks.filter(function (task) {\n      return task;\n    }));\n    filter == 'done' && setRenderTasks(tasks.filter(function (task) {\n      return task.isChecked;\n    }));\n    filter == 'undone' && setRenderTasks(tasks.filter(function (task) {\n      return !task.isChecked;\n    }));\n    if (filter == 'today') setRenderTasks(tasks.filter(function (task) {\n      return task.date === _DateNow__WEBPACK_IMPORTED_MODULE_7__.dateNow;\n    }));\n    if (filter == 'date') setRenderTasks(tasks.sort(function (task1, task2) {\n      if (task1.date > task2.date) return 1;\n      if (task1.date < task2.date) return -1;\n      return 0;\n    }).map(function (task) {\n      return task;\n    }));\n  }, [filter]);\n  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {\n    setRenderTasks(tasks);\n  }, [tasks]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_style__WEBPACK_IMPORTED_MODULE_4__.MainStyle, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_Menu_Menu__WEBPACK_IMPORTED_MODULE_2__.Menu, {\n        onClick: handleClickOpenModal,\n        filterToday: function filterToday() {\n          return setFilter('today');\n        },\n        filterAll: function filterAll() {\n          return setFilter('all');\n        },\n        filterDone: function filterDone() {\n          return setFilter('done');\n        },\n        filterUndone: function filterUndone() {\n          return setFilter('undone');\n        },\n        filterDate: function filterDate() {\n          return setFilter('date');\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 110,\n        columnNumber: 4\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_ListItem__WEBPACK_IMPORTED_MODULE_1__.ListItem, {\n        tasks: renderTasks,\n        handleOpenModalDelete: handleOpenModalDelete,\n        handleCompleteStatusUpdate: handleCompleteStatusUpdate,\n        handleClickEditTask: handleClickEditTask\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 117,\n        columnNumber: 4\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 3\n    }, _this), modalAdd ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_Modal__WEBPACK_IMPORTED_MODULE_3__.Modal, {\n      title: 'Create task',\n      nameBtn: 'Save',\n      active: modalAdd,\n      onClickClose: handleCloseModal,\n      onClickSave: createAddTask,\n      IconBtn: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_public__WEBPACK_IMPORTED_MODULE_6__.SaveIcon, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 125,\n        columnNumber: 148\n      }, _this),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"input\", {\n        type: \"text\",\n        placeholder: \"Enter text...\",\n        value: text,\n        onChange: function onChange(e) {\n          return setText(e.target.value);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 126,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"input\", {\n        type: \"date\",\n        value: date,\n        onChange: function onChange(e) {\n          return setDate(e.target.value);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 127,\n        columnNumber: 5\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 15\n    }, _this) : null, modalDelete ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_Modal__WEBPACK_IMPORTED_MODULE_3__.Modal, {\n      title: 'Delete task',\n      nameBtn: 'Delete',\n      active: modalDelete,\n      onClickClose: handleCloseModal,\n      onClickSave: handleClickDelete,\n      IconBtn: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_public__WEBPACK_IMPORTED_MODULE_6__.DeleteIcon, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 131,\n        columnNumber: 160\n      }, _this),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"h3\", {\n        children: \"Are you sure about deleting this task?\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 132,\n        columnNumber: 5\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 131,\n      columnNumber: 18\n    }, _this) : null]\n  }, void 0, true);\n};\n\n_s(Main, \"EcnL6TGe7IdyZpBwsrd59HGTx/g=\");\n\n_c = Main;\n\nvar _c;\n\n$RefreshReg$(_c, \"Main\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvTGF5b3V0L01haW4udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHTyxJQUFNVSxJQUFjLEdBQUcsU0FBakJBLElBQWlCLEdBQU07RUFBQTs7RUFDbkMsZ0JBQWdDSiwrQ0FBUSxDQUFDLEtBQUQsQ0FBeEM7RUFBQSxJQUFPSyxRQUFQO0VBQUEsSUFBaUJDLFdBQWpCOztFQUNBLGlCQUFzQ04sK0NBQVEsQ0FBQyxLQUFELENBQTlDO0VBQUEsSUFBT08sV0FBUDtFQUFBLElBQW9CQyxjQUFwQjs7RUFDQSxpQkFBNEJSLCtDQUFRLENBQUMsRUFBRCxDQUFwQztFQUFBLElBQU9TLE1BQVA7RUFBQSxJQUFlQyxTQUFmOztFQUNBLGlCQUFvQ1YsK0NBQVEsRUFBNUM7RUFBQSxJQUFPVyxVQUFQO0VBQUEsSUFBbUJDLGFBQW5COztFQUNBLGlCQUF3QlosK0NBQVEsQ0FBQyxFQUFELENBQWhDO0VBQUEsSUFBT2EsSUFBUDtFQUFBLElBQWFDLE9BQWI7O0VBQ0EsaUJBQXdCZCwrQ0FBUSxDQUFDLEVBQUQsQ0FBaEM7RUFBQSxJQUFPZSxJQUFQO0VBQUEsSUFBYUMsT0FBYjs7RUFDQSxpQkFBMEJoQiwrQ0FBUSxDQUNqQyxDQUNDO0lBQ0NpQixFQUFFLEVBQUUsQ0FETDtJQUVDQyxLQUFLLEVBQUUsWUFGUjtJQUdDSCxJQUFJLEVBQUUsWUFIUDtJQUlDSSxTQUFTLEVBQUU7RUFKWixDQURELEVBT0M7SUFDQ0YsRUFBRSxFQUFFLENBREw7SUFFQ0MsS0FBSyxFQUFFLGFBRlI7SUFHQ0gsSUFBSSxFQUFFLFlBSFA7SUFJQ0ksU0FBUyxFQUFFO0VBSlosQ0FQRCxDQURpQyxDQUFsQztFQUFBLElBQU9DLEtBQVA7RUFBQSxJQUFjQyxRQUFkOztFQWdCQSxpQkFBc0NyQiwrQ0FBUSxDQUFDb0IsS0FBRCxDQUE5QztFQUFBLElBQU9FLFdBQVA7RUFBQSxJQUFvQkMsY0FBcEI7O0VBRUEsSUFBTUMsMEJBQTBCLEdBQUcsU0FBN0JBLDBCQUE2QixDQUFDQyxJQUFELEVBQXFCO0lBQ3ZELElBQU1DLE9BQU8sR0FBR04sS0FBSyxDQUFDTyxHQUFOLENBQVUsVUFBQUMsSUFBSSxFQUFJO01BQ2pDLElBQUlBLElBQUksQ0FBQ1gsRUFBTCxLQUFZUSxJQUFJLENBQUNSLEVBQXJCLEVBQXlCO1FBQ3hCVyxJQUFJLENBQUNULFNBQUwsR0FBaUJNLElBQUksQ0FBQ04sU0FBdEI7TUFDQTs7TUFDRCxPQUFPUyxJQUFQO0lBQ0EsQ0FMZSxDQUFoQjtJQU1BUCxRQUFRLENBQUNLLE9BQUQsQ0FBUjtFQUNBLENBUkQ7O0VBVUEsSUFBTUcsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0lBQzNCLElBQUloQixJQUFJLElBQUksRUFBUixJQUFjQSxJQUFJLElBQUksR0FBMUIsRUFBK0I7TUFDOUI7SUFDQTs7SUFDRCxJQUFNaUIsT0FBTyxHQUFHO01BQ2ZiLEVBQUUsRUFBRWMsSUFBSSxDQUFDQyxHQUFMLEVBRFc7TUFFZmQsS0FBSyxFQUFFTCxJQUZRO01BR2ZFLElBQUksRUFBRUEsSUFIUztNQUlmSSxTQUFTLEVBQUU7SUFKSSxDQUFoQjtJQU1BLElBQU1PLE9BQU8sMEtBQU9OLEtBQVAsSUFBY1UsT0FBZCxFQUFiO0lBQ0FULFFBQVEsQ0FBQ0ssT0FBRCxDQUFSO0lBQ0FaLE9BQU8sQ0FBQyxFQUFELENBQVA7SUFDQUUsT0FBTyxDQUFDLEVBQUQsQ0FBUDtJQUNBVixXQUFXLENBQUMsS0FBRCxDQUFYO0VBRUEsQ0FoQkQ7O0VBaUJBLElBQU0yQixtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUNSLElBQUQsRUFBT1osSUFBUCxFQUFnQjtJQUMzQ3FCLE9BQU8sQ0FBQ0MsR0FBUixDQUFZVixJQUFaO0lBQ0FKLFFBQVEsQ0FBQ0QsS0FBSyxDQUFDTyxHQUFOLENBQVUsVUFBQUMsSUFBSSxFQUFJO01BQzFCLElBQUlBLElBQUksQ0FBQ1gsRUFBTCxJQUFXUSxJQUFJLENBQUNSLEVBQXBCLEVBQXdCO1FBQ3ZCVyxJQUFJLENBQUNWLEtBQUwsR0FBYUwsSUFBYjtNQUNBOztNQUNELE9BQU9lLElBQVA7SUFDQSxDQUxRLENBQUQsQ0FBUjtFQU1BLENBUkQ7O0VBU0EsSUFBTVEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0lBQzlCOUIsV0FBVyxDQUFDLEtBQUQsQ0FBWDtJQUNBRSxjQUFjLENBQUMsS0FBRCxDQUFkO0VBQ0EsQ0FIRDs7RUFJQSxJQUFNNkIsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixHQUFNO0lBQ2xDL0IsV0FBVyxDQUFDLElBQUQsQ0FBWDtFQUNBLENBRkQ7O0VBR0EsSUFBTWdDLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsQ0FBQ2IsSUFBRCxFQUFxQjtJQUNsRGpCLGNBQWMsQ0FBQyxJQUFELENBQWQ7SUFDQUksYUFBYSxDQUFDYSxJQUFJLENBQUNSLEVBQU4sQ0FBYjtFQUNBLENBSEQ7O0VBSUEsSUFBTXNCLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtJQUMvQmxCLFFBQVEsQ0FBQ0QsS0FBSyxDQUFDWCxNQUFOLENBQWEsVUFBQW1CLElBQUk7TUFBQSxPQUFJQSxJQUFJLENBQUNYLEVBQUwsS0FBWU4sVUFBaEI7SUFBQSxDQUFqQixDQUFELENBQVI7SUFDQUgsY0FBYyxDQUFDLEtBQUQsQ0FBZDtFQUNBLENBSEQ7O0VBS0FULGdEQUFTLENBQUMsWUFBTTtJQUNmVSxNQUFNLElBQUksS0FBVixJQUFtQmMsY0FBYyxDQUFDSCxLQUFLLENBQUNYLE1BQU4sQ0FBYSxVQUFBZ0IsSUFBSTtNQUFBLE9BQUlBLElBQUo7SUFBQSxDQUFqQixDQUFELENBQWpDO0lBQ0FoQixNQUFNLElBQUksTUFBVixJQUFvQmMsY0FBYyxDQUFDSCxLQUFLLENBQUNYLE1BQU4sQ0FBYSxVQUFBZ0IsSUFBSTtNQUFBLE9BQUlBLElBQUksQ0FBQ04sU0FBVDtJQUFBLENBQWpCLENBQUQsQ0FBbEM7SUFDQVYsTUFBTSxJQUFJLFFBQVYsSUFBc0JjLGNBQWMsQ0FBQ0gsS0FBSyxDQUFDWCxNQUFOLENBQWEsVUFBQWdCLElBQUk7TUFBQSxPQUFJLENBQUNBLElBQUksQ0FBQ04sU0FBVjtJQUFBLENBQWpCLENBQUQsQ0FBcEM7SUFDQSxJQUFJVixNQUFNLElBQUksT0FBZCxFQUF1QmMsY0FBYyxDQUFDSCxLQUFLLENBQUNYLE1BQU4sQ0FBYSxVQUFBZ0IsSUFBSTtNQUFBLE9BQUlBLElBQUksQ0FBQ1YsSUFBTCxLQUFjWiw2Q0FBbEI7SUFBQSxDQUFqQixDQUFELENBQWQ7SUFFdkIsSUFBSU0sTUFBTSxJQUFJLE1BQWQsRUFBc0JjLGNBQWMsQ0FBQ0gsS0FBSyxDQUFDb0IsSUFBTixDQUFXLFVBQUNDLEtBQUQsRUFBUUMsS0FBUixFQUFrQjtNQUNqRSxJQUFJRCxLQUFLLENBQUMxQixJQUFOLEdBQWEyQixLQUFLLENBQUMzQixJQUF2QixFQUE2QixPQUFPLENBQVA7TUFDN0IsSUFBSTBCLEtBQUssQ0FBQzFCLElBQU4sR0FBYTJCLEtBQUssQ0FBQzNCLElBQXZCLEVBQTZCLE9BQU8sQ0FBQyxDQUFSO01BQzdCLE9BQU8sQ0FBUDtJQUNBLENBSm9DLEVBSWxDWSxHQUprQyxDQUk5QixVQUFBRixJQUFJO01BQUEsT0FBSUEsSUFBSjtJQUFBLENBSjBCLENBQUQsQ0FBZDtFQU10QixDQVpRLEVBWU4sQ0FBQ2hCLE1BQUQsQ0FaTSxDQUFUO0VBY0FWLGdEQUFTLENBQUMsWUFBTTtJQUNmd0IsY0FBYyxDQUFDSCxLQUFELENBQWQ7RUFDQSxDQUZRLEVBRU4sQ0FBQ0EsS0FBRCxDQUZNLENBQVQ7RUFNQSxvQkFBTztJQUFBLHdCQUNOLDhEQUFDLHdEQUFEO01BQUEsd0JBQ0MsOERBQUMsdURBQUQ7UUFDQyxPQUFPLEVBQUVpQixvQkFEVjtRQUVDLFdBQVcsRUFBRTtVQUFBLE9BQU0zQixTQUFTLENBQUMsT0FBRCxDQUFmO1FBQUEsQ0FGZDtRQUdDLFNBQVMsRUFBRTtVQUFBLE9BQU1BLFNBQVMsQ0FBQyxLQUFELENBQWY7UUFBQSxDQUhaO1FBSUMsVUFBVSxFQUFFO1VBQUEsT0FBTUEsU0FBUyxDQUFDLE1BQUQsQ0FBZjtRQUFBLENBSmI7UUFLQyxZQUFZLEVBQUU7VUFBQSxPQUFNQSxTQUFTLENBQUMsUUFBRCxDQUFmO1FBQUEsQ0FMZjtRQU1DLFVBQVUsRUFBRTtVQUFBLE9BQU1BLFNBQVMsQ0FBQyxNQUFELENBQWY7UUFBQTtNQU5iO1FBQUE7UUFBQTtRQUFBO01BQUEsU0FERCxlQVFDLDhEQUFDLDBEQUFEO1FBQ0MsS0FBSyxFQUFFWSxXQURSO1FBRUMscUJBQXFCLEVBQUVnQixxQkFGeEI7UUFHQywwQkFBMEIsRUFBRWQsMEJBSDdCO1FBSUMsbUJBQW1CLEVBQUVTO01BSnRCO1FBQUE7UUFBQTtRQUFBO01BQUEsU0FSRDtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUEsU0FETSxFQWlCTDVCLFFBQVEsZ0JBQUcsOERBQUMsb0RBQUQ7TUFBTyxLQUFLLEVBQUUsYUFBZDtNQUE2QixPQUFPLEVBQUUsTUFBdEM7TUFBOEMsTUFBTSxFQUFFQSxRQUF0RDtNQUFnRSxZQUFZLEVBQUUrQixnQkFBOUU7TUFBZ0csV0FBVyxFQUFFUCxhQUE3RztNQUE0SCxPQUFPLGVBQUUsOERBQUMsNkNBQUQ7UUFBQTtRQUFBO1FBQUE7TUFBQSxTQUFySTtNQUFBLHdCQUNWO1FBQU8sSUFBSSxFQUFDLE1BQVo7UUFBbUIsV0FBVyxFQUFDLGVBQS9CO1FBQStDLEtBQUssRUFBRWhCLElBQXREO1FBQTRELFFBQVEsRUFBRSxrQkFBQzhCLENBQUQ7VUFBQSxPQUFPN0IsT0FBTyxDQUFDNkIsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBZDtRQUFBO01BQXRFO1FBQUE7UUFBQTtRQUFBO01BQUEsU0FEVSxlQUVWO1FBQU8sSUFBSSxFQUFDLE1BQVo7UUFBbUIsS0FBSyxFQUFFOUIsSUFBMUI7UUFBZ0MsUUFBUSxFQUFFLGtCQUFDNEIsQ0FBRDtVQUFBLE9BQU8zQixPQUFPLENBQUMyQixDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFkO1FBQUE7TUFBMUM7UUFBQTtRQUFBO1FBQUE7TUFBQSxTQUZVO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQSxTQUFILEdBR0csSUFwQk4sRUF1Qkx0QyxXQUFXLGdCQUFHLDhEQUFDLG9EQUFEO01BQU8sS0FBSyxFQUFFLGFBQWQ7TUFBNkIsT0FBTyxFQUFFLFFBQXRDO01BQWdELE1BQU0sRUFBRUEsV0FBeEQ7TUFBcUUsWUFBWSxFQUFFNkIsZ0JBQW5GO01BQXFHLFdBQVcsRUFBRUcsaUJBQWxIO01BQXFJLE9BQU8sZUFBRSw4REFBQywrQ0FBRDtRQUFBO1FBQUE7UUFBQTtNQUFBLFNBQTlJO01BQUEsdUJBQ2I7UUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFEYTtNQUFBO01BQUE7TUFBQTtJQUFBLFNBQUgsR0FFQSxJQXpCTjtFQUFBLGdCQUFQO0FBNkJBLENBOUhNOztHQUFNbkM7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9MYXlvdXQvTWFpbi50c3g/ZDNiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaXN0SXRlbSB9IGZyb20gJ0AvY29tcG9uZW50cy9MaXN0SXRlbSc7XG5pbXBvcnQgeyBNZW51IH0gZnJvbSAnQC9jb21wb25lbnRzL01lbnUvTWVudSc7XG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJ0AvY29tcG9uZW50cy9Nb2RhbCc7XG5pbXBvcnQgeyBUYXNrUHJvcHMgfSBmcm9tICdAL2NvbXBvbmVudHMvaW50ZXJmYWNlJztcbmltcG9ydCB7IE1haW5TdHlsZSB9IGZyb20gJ0AvY29tcG9uZW50cy9zdHlsZSc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IERlbGV0ZUljb24sIFNhdmVJY29uIH0gZnJvbSAnLi4vLi4vcHVibGljJztcbmltcG9ydCB7IGRhdGVOb3cgfSBmcm9tICdAL0RhdGVOb3cnO1xuXG5cbmV4cG9ydCBjb25zdCBNYWluOiBSZWFjdC5GQyA9ICgpID0+IHtcblx0Y29uc3QgW21vZGFsQWRkLCBzZXRNb2RhbEFkZF0gPSB1c2VTdGF0ZShmYWxzZSlcblx0Y29uc3QgW21vZGFsRGVsZXRlLCBzZXRNb2RhbERlbGV0ZV0gPSB1c2VTdGF0ZShmYWxzZSlcblx0Y29uc3QgW2ZpbHRlciwgc2V0RmlsdGVyXSA9IHVzZVN0YXRlKCcnKVxuXHRjb25zdCBbdGFza0RlbGV0ZSwgc2V0VGFza0RlbGV0ZV0gPSB1c2VTdGF0ZSgpXG5cdGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKCcnKVxuXHRjb25zdCBbZGF0ZSwgc2V0RGF0ZV0gPSB1c2VTdGF0ZSgnJylcblx0Y29uc3QgW3Rhc2tzLCBzZXRUYXNrc10gPSB1c2VTdGF0ZShcblx0XHRbXG5cdFx0XHR7XG5cdFx0XHRcdGlkOiAxLFxuXHRcdFx0XHR0aXRsZTogXCJmaXJzdCB0YXNrXCIsXG5cdFx0XHRcdGRhdGU6IFwiMjAyMy0xMC0wNFwiLFxuXHRcdFx0XHRpc0NoZWNrZWQ6IGZhbHNlXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRpZDogMixcblx0XHRcdFx0dGl0bGU6IFwic2Vjb25kIHRhc2tcIixcblx0XHRcdFx0ZGF0ZTogXCIyMDIzLTEwLTAzXCIsXG5cdFx0XHRcdGlzQ2hlY2tlZDogZmFsc2Vcblx0XHRcdH0sXG5cdFx0XVxuXHQpO1xuXHRjb25zdCBbcmVuZGVyVGFza3MsIHNldFJlbmRlclRhc2tzXSA9IHVzZVN0YXRlKHRhc2tzKVxuXG5cdGNvbnN0IGhhbmRsZUNvbXBsZXRlU3RhdHVzVXBkYXRlID0gKHRhc2s6IFRhc2tQcm9wcykgPT4ge1xuXHRcdGNvbnN0IG5ld0xpc3QgPSB0YXNrcy5tYXAoaXRlbSA9PiB7XG5cdFx0XHRpZiAoaXRlbS5pZCA9PT0gdGFzay5pZCkge1xuXHRcdFx0XHRpdGVtLmlzQ2hlY2tlZCA9IHRhc2suaXNDaGVja2VkXG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gaXRlbVxuXHRcdH0pO1xuXHRcdHNldFRhc2tzKG5ld0xpc3QpXG5cdH1cblxuXHRjb25zdCBjcmVhdGVBZGRUYXNrID0gKCkgPT4ge1xuXHRcdGlmICh0ZXh0ID09ICcnIHx8IHRleHQgPT0gJyAnKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IG5ld1Rhc2sgPSB7XG5cdFx0XHRpZDogRGF0ZS5ub3coKSxcblx0XHRcdHRpdGxlOiB0ZXh0LFxuXHRcdFx0ZGF0ZTogZGF0ZSxcblx0XHRcdGlzQ2hlY2tlZDogZmFsc2Vcblx0XHR9XG5cdFx0Y29uc3QgbmV3TGlzdCA9IFsuLi50YXNrcywgbmV3VGFza11cblx0XHRzZXRUYXNrcyhuZXdMaXN0KVxuXHRcdHNldFRleHQoJycpXG5cdFx0c2V0RGF0ZSgnJylcblx0XHRzZXRNb2RhbEFkZChmYWxzZSlcblxuXHR9XG5cdGNvbnN0IGhhbmRsZUNsaWNrRWRpdFRhc2sgPSAodGFzaywgdGV4dCkgPT4ge1xuXHRcdGNvbnNvbGUubG9nKHRhc2spO1xuXHRcdHNldFRhc2tzKHRhc2tzLm1hcChpdGVtID0+IHtcblx0XHRcdGlmIChpdGVtLmlkID09IHRhc2suaWQpIHtcblx0XHRcdFx0aXRlbS50aXRsZSA9IHRleHRcblx0XHRcdH1cblx0XHRcdHJldHVybiBpdGVtXG5cdFx0fSkpXG5cdH1cblx0Y29uc3QgaGFuZGxlQ2xvc2VNb2RhbCA9ICgpID0+IHtcblx0XHRzZXRNb2RhbEFkZChmYWxzZSlcblx0XHRzZXRNb2RhbERlbGV0ZShmYWxzZSlcblx0fVxuXHRjb25zdCBoYW5kbGVDbGlja09wZW5Nb2RhbCA9ICgpID0+IHtcblx0XHRzZXRNb2RhbEFkZCh0cnVlKVxuXHR9XG5cdGNvbnN0IGhhbmRsZU9wZW5Nb2RhbERlbGV0ZSA9ICh0YXNrOiBUYXNrUHJvcHMpID0+IHtcblx0XHRzZXRNb2RhbERlbGV0ZSh0cnVlKVxuXHRcdHNldFRhc2tEZWxldGUodGFzay5pZClcblx0fVxuXHRjb25zdCBoYW5kbGVDbGlja0RlbGV0ZSA9ICgpID0+IHtcblx0XHRzZXRUYXNrcyh0YXNrcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmlkICE9PSB0YXNrRGVsZXRlKSlcblx0XHRzZXRNb2RhbERlbGV0ZShmYWxzZSlcblx0fVxuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0ZmlsdGVyID09ICdhbGwnICYmIHNldFJlbmRlclRhc2tzKHRhc2tzLmZpbHRlcih0YXNrID0+IHRhc2spKVxuXHRcdGZpbHRlciA9PSAnZG9uZScgJiYgc2V0UmVuZGVyVGFza3ModGFza3MuZmlsdGVyKHRhc2sgPT4gdGFzay5pc0NoZWNrZWQpKVxuXHRcdGZpbHRlciA9PSAndW5kb25lJyAmJiBzZXRSZW5kZXJUYXNrcyh0YXNrcy5maWx0ZXIodGFzayA9PiAhdGFzay5pc0NoZWNrZWQpKVxuXHRcdGlmIChmaWx0ZXIgPT0gJ3RvZGF5Jykgc2V0UmVuZGVyVGFza3ModGFza3MuZmlsdGVyKHRhc2sgPT4gdGFzay5kYXRlID09PSBkYXRlTm93KSlcblxuXHRcdGlmIChmaWx0ZXIgPT0gJ2RhdGUnKSBzZXRSZW5kZXJUYXNrcyh0YXNrcy5zb3J0KCh0YXNrMSwgdGFzazIpID0+IHtcblx0XHRcdGlmICh0YXNrMS5kYXRlID4gdGFzazIuZGF0ZSkgcmV0dXJuIDFcblx0XHRcdGlmICh0YXNrMS5kYXRlIDwgdGFzazIuZGF0ZSkgcmV0dXJuIC0xXG5cdFx0XHRyZXR1cm4gMFxuXHRcdH0pLm1hcCh0YXNrID0+IHRhc2spKVxuXG5cdH0sIFtmaWx0ZXJdKVxuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0c2V0UmVuZGVyVGFza3ModGFza3MpXG5cdH0sIFt0YXNrc10pXG5cblxuXG5cdHJldHVybiA8PlxuXHRcdDxNYWluU3R5bGU+XG5cdFx0XHQ8TWVudVxuXHRcdFx0XHRvbkNsaWNrPXtoYW5kbGVDbGlja09wZW5Nb2RhbH1cblx0XHRcdFx0ZmlsdGVyVG9kYXk9eygpID0+IHNldEZpbHRlcigndG9kYXknKX1cblx0XHRcdFx0ZmlsdGVyQWxsPXsoKSA9PiBzZXRGaWx0ZXIoJ2FsbCcpfVxuXHRcdFx0XHRmaWx0ZXJEb25lPXsoKSA9PiBzZXRGaWx0ZXIoJ2RvbmUnKX1cblx0XHRcdFx0ZmlsdGVyVW5kb25lPXsoKSA9PiBzZXRGaWx0ZXIoJ3VuZG9uZScpfVxuXHRcdFx0XHRmaWx0ZXJEYXRlPXsoKSA9PiBzZXRGaWx0ZXIoJ2RhdGUnKX0gLz5cblx0XHRcdDxMaXN0SXRlbVxuXHRcdFx0XHR0YXNrcz17cmVuZGVyVGFza3N9XG5cdFx0XHRcdGhhbmRsZU9wZW5Nb2RhbERlbGV0ZT17aGFuZGxlT3Blbk1vZGFsRGVsZXRlfVxuXHRcdFx0XHRoYW5kbGVDb21wbGV0ZVN0YXR1c1VwZGF0ZT17aGFuZGxlQ29tcGxldGVTdGF0dXNVcGRhdGV9XG5cdFx0XHRcdGhhbmRsZUNsaWNrRWRpdFRhc2s9e2hhbmRsZUNsaWNrRWRpdFRhc2t9XG5cdFx0XHQvPlxuXHRcdDwvTWFpblN0eWxlPlxuXHRcdHtcblx0XHRcdG1vZGFsQWRkID8gPE1vZGFsIHRpdGxlPXsnQ3JlYXRlIHRhc2snfSBuYW1lQnRuPXsnU2F2ZSd9IGFjdGl2ZT17bW9kYWxBZGR9IG9uQ2xpY2tDbG9zZT17aGFuZGxlQ2xvc2VNb2RhbH0gb25DbGlja1NhdmU9e2NyZWF0ZUFkZFRhc2t9IEljb25CdG49ezxTYXZlSWNvbiAvPn0+XG5cdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPSdFbnRlciB0ZXh0Li4uJyB2YWx1ZT17dGV4dH0gb25DaGFuZ2U9eyhlKSA9PiBzZXRUZXh0KGUudGFyZ2V0LnZhbHVlKX0gLz5cblx0XHRcdFx0PGlucHV0IHR5cGU9XCJkYXRlXCIgdmFsdWU9e2RhdGV9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0RGF0ZShlLnRhcmdldC52YWx1ZSl9IC8+XG5cdFx0XHQ8L01vZGFsPiA6IG51bGxcblx0XHR9XG5cdFx0e1xuXHRcdFx0bW9kYWxEZWxldGUgPyA8TW9kYWwgdGl0bGU9eydEZWxldGUgdGFzayd9IG5hbWVCdG49eydEZWxldGUnfSBhY3RpdmU9e21vZGFsRGVsZXRlfSBvbkNsaWNrQ2xvc2U9e2hhbmRsZUNsb3NlTW9kYWx9IG9uQ2xpY2tTYXZlPXtoYW5kbGVDbGlja0RlbGV0ZX0gSWNvbkJ0bj17PERlbGV0ZUljb24gLz59PlxuXHRcdFx0XHQ8aDM+QXJlIHlvdSBzdXJlIGFib3V0IGRlbGV0aW5nIHRoaXMgdGFzaz88L2gzPlxuXHRcdFx0PC9Nb2RhbD4gOiBudWxsXG5cdFx0fVxuXHQ8Lz5cblxufSJdLCJuYW1lcyI6WyJMaXN0SXRlbSIsIk1lbnUiLCJNb2RhbCIsIk1haW5TdHlsZSIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJEZWxldGVJY29uIiwiU2F2ZUljb24iLCJkYXRlTm93IiwiTWFpbiIsIm1vZGFsQWRkIiwic2V0TW9kYWxBZGQiLCJtb2RhbERlbGV0ZSIsInNldE1vZGFsRGVsZXRlIiwiZmlsdGVyIiwic2V0RmlsdGVyIiwidGFza0RlbGV0ZSIsInNldFRhc2tEZWxldGUiLCJ0ZXh0Iiwic2V0VGV4dCIsImRhdGUiLCJzZXREYXRlIiwiaWQiLCJ0aXRsZSIsImlzQ2hlY2tlZCIsInRhc2tzIiwic2V0VGFza3MiLCJyZW5kZXJUYXNrcyIsInNldFJlbmRlclRhc2tzIiwiaGFuZGxlQ29tcGxldGVTdGF0dXNVcGRhdGUiLCJ0YXNrIiwibmV3TGlzdCIsIm1hcCIsIml0ZW0iLCJjcmVhdGVBZGRUYXNrIiwibmV3VGFzayIsIkRhdGUiLCJub3ciLCJoYW5kbGVDbGlja0VkaXRUYXNrIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNsb3NlTW9kYWwiLCJoYW5kbGVDbGlja09wZW5Nb2RhbCIsImhhbmRsZU9wZW5Nb2RhbERlbGV0ZSIsImhhbmRsZUNsaWNrRGVsZXRlIiwic29ydCIsInRhc2sxIiwidGFzazIiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Layout/Main.tsx\n"));

/***/ })

});