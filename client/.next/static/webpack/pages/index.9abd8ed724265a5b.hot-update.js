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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Main: function() { return /* binding */ Main; }\n/* harmony export */ });\n/* harmony import */ var _home_user_Desktop_to_doUi_client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _components_ListItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ListItem */ \"./src/components/ListItem.tsx\");\n/* harmony import */ var _components_Menu_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Menu/Menu */ \"./src/components/Menu/Menu.tsx\");\n/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Modal */ \"./src/components/Modal.tsx\");\n/* harmony import */ var _components_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/style */ \"./src/components/style.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _public__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public */ \"./public/index.jsx\");\n/* harmony import */ var _DateNow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/DateNow */ \"./src/DateNow.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);\n\n\nvar _jsxFileName = \"/home/user/Desktop/to-doUi/client/src/Layout/Main.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar Main = function Main() {\n  _s();\n\n  // const [modalAdd, setModalAdd] = useState(false)\n  // const [modalDelete, setModalDelete] = useState(false)\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)('none'),\n      modal = _useState[0],\n      setModal = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(''),\n      filter = _useState2[0],\n      setFilter = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(),\n      taskDelete = _useState3[0],\n      setTaskDelete = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(''),\n      text = _useState4[0],\n      setText = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(''),\n      date = _useState5[0],\n      setDate = _useState5[1];\n\n  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([{\n    id: 1,\n    title: \"first task\",\n    date: \"2023-10-04\",\n    isChecked: false\n  }, {\n    id: 2,\n    title: \"second task\",\n    date: \"2023-10-03\",\n    isChecked: false\n  }]),\n      tasks = _useState6[0],\n      setTasks = _useState6[1];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(tasks),\n      renderTasks = _useState7[0],\n      setRenderTasks = _useState7[1];\n\n  var handleCompleteStatusUpdate = function handleCompleteStatusUpdate(task) {\n    var newList = tasks.map(function (item) {\n      if (item.id === task.id) {\n        item.isChecked = task.isChecked;\n      }\n\n      return item;\n    });\n    setTasks(newList);\n  };\n\n  var createAddTask = function createAddTask() {\n    if (text == '' || text == ' ') {\n      return;\n    }\n\n    var newTask = {\n      id: Date.now(),\n      title: text,\n      date: date,\n      isChecked: false\n    };\n    var newList = [].concat((0,_home_user_Desktop_to_doUi_client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(tasks), [newTask]);\n    setTasks(newList);\n    setText('');\n    setDate('');\n    setModal('none');\n  };\n\n  var handleClickEditTask = function handleClickEditTask(task, text) {\n    console.log(task);\n    setTasks(tasks.map(function (item) {\n      if (item.id == task.id) {\n        item.title = text;\n      }\n\n      return item;\n    }));\n  };\n\n  var handleCloseModal = function handleCloseModal() {\n    setModal('none');\n  };\n\n  var handleClickOpenModal = function handleClickOpenModal() {\n    setModal('add');\n  };\n\n  var handleOpenModalDelete = function handleOpenModalDelete(task) {\n    setModal('delete');\n    setTaskDelete(task.id);\n  }; // const handleClickDelete = () => {\n  // \tsetTasks(tasks.filter(item => item.id !== taskDelete))\n  // \tsetModalDelete(false)\n  // }\n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {\n    filter == 'all' && setRenderTasks(tasks.filter(function (task) {\n      return task;\n    }));\n    filter == 'done' && setRenderTasks(tasks.filter(function (task) {\n      return task.isChecked;\n    }));\n    filter == 'undone' && setRenderTasks(tasks.filter(function (task) {\n      return !task.isChecked;\n    }));\n    if (filter == 'today') setRenderTasks(tasks.filter(function (task) {\n      return task.date === _DateNow__WEBPACK_IMPORTED_MODULE_7__.dateNow;\n    }));\n    if (filter == 'date') setRenderTasks(tasks.sort(function (task1, task2) {\n      if (task1.date > task2.date) return 1;\n      if (task1.date < task2.date) return -1;\n      return 0;\n    }).map(function (task) {\n      return task;\n    }));\n  }, [filter, tasks]);\n  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {\n    setRenderTasks(tasks);\n  }, [tasks]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_style__WEBPACK_IMPORTED_MODULE_4__.MainStyle, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_Menu_Menu__WEBPACK_IMPORTED_MODULE_2__.Menu, {\n        onClick: handleClickOpenModal,\n        filterToday: function filterToday() {\n          return setFilter('today');\n        },\n        filterAll: function filterAll() {\n          return setFilter('all');\n        },\n        filterDone: function filterDone() {\n          return setFilter('done');\n        },\n        filterUndone: function filterUndone() {\n          return setFilter('undone');\n        },\n        filterDate: function filterDate() {\n          return setFilter('date');\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 110,\n        columnNumber: 4\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_ListItem__WEBPACK_IMPORTED_MODULE_1__.ListItem, {\n        tasks: renderTasks,\n        handleOpenModalDelete: handleOpenModalDelete,\n        handleCompleteStatusUpdate: handleCompleteStatusUpdate,\n        handleClickEditTask: handleClickEditTask\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 117,\n        columnNumber: 4\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 3\n    }, _this), modal == 'add' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_Modal__WEBPACK_IMPORTED_MODULE_3__.Modal, {\n      title: 'Create task',\n      nameBtn: 'Save',\n      active: modal,\n      onClickClose: handleCloseModal,\n      onClickSave: createAddTask,\n      IconBtn: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_public__WEBPACK_IMPORTED_MODULE_6__.SaveIcon, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 126,\n        columnNumber: 134\n      }, _this),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"input\", {\n        type: \"text\",\n        placeholder: \"Enter text...\",\n        value: text,\n        onChange: function onChange(e) {\n          return setText(e.target.value);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 127,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"input\", {\n        type: \"date\",\n        value: date,\n        onChange: function onChange(e) {\n          return setDate(e.target.value);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 128,\n        columnNumber: 5\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 4\n    }, _this), modal == 'delete' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_Modal__WEBPACK_IMPORTED_MODULE_3__.Modal, {\n      title: 'Delete task',\n      nameBtn: 'Delete',\n      active: modal,\n      onClickClose: handleCloseModal,\n      onClickSave: handleClickDelete,\n      IconBtn: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_public__WEBPACK_IMPORTED_MODULE_6__.DeleteIcon, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 133,\n        columnNumber: 140\n      }, _this),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"h3\", {\n        children: \"Are you sure about deleting this task?\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 134,\n        columnNumber: 5\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 133,\n      columnNumber: 4\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Main, \"uJb9nUbuhoZ0eVOayGJXu+5IrdI=\");\n\n_c = Main;\n\nvar _c;\n\n$RefreshReg$(_c, \"Main\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvTGF5b3V0L01haW4udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHTyxJQUFNVSxJQUFjLEdBQUcsU0FBakJBLElBQWlCLEdBQU07RUFBQTs7RUFDbkM7RUFDQTtFQUNBLGdCQUEwQkosK0NBQVEsQ0FBQyxNQUFELENBQWxDO0VBQUEsSUFBT0ssS0FBUDtFQUFBLElBQWNDLFFBQWQ7O0VBQ0EsaUJBQTRCTiwrQ0FBUSxDQUFDLEVBQUQsQ0FBcEM7RUFBQSxJQUFPTyxNQUFQO0VBQUEsSUFBZUMsU0FBZjs7RUFDQSxpQkFBb0NSLCtDQUFRLEVBQTVDO0VBQUEsSUFBT1MsVUFBUDtFQUFBLElBQW1CQyxhQUFuQjs7RUFDQSxpQkFBd0JWLCtDQUFRLENBQUMsRUFBRCxDQUFoQztFQUFBLElBQU9XLElBQVA7RUFBQSxJQUFhQyxPQUFiOztFQUNBLGlCQUF3QlosK0NBQVEsQ0FBQyxFQUFELENBQWhDO0VBQUEsSUFBT2EsSUFBUDtFQUFBLElBQWFDLE9BQWI7O0VBQ0EsaUJBQTBCZCwrQ0FBUSxDQUNqQyxDQUNDO0lBQ0NlLEVBQUUsRUFBRSxDQURMO0lBRUNDLEtBQUssRUFBRSxZQUZSO0lBR0NILElBQUksRUFBRSxZQUhQO0lBSUNJLFNBQVMsRUFBRTtFQUpaLENBREQsRUFPQztJQUNDRixFQUFFLEVBQUUsQ0FETDtJQUVDQyxLQUFLLEVBQUUsYUFGUjtJQUdDSCxJQUFJLEVBQUUsWUFIUDtJQUlDSSxTQUFTLEVBQUU7RUFKWixDQVBELENBRGlDLENBQWxDO0VBQUEsSUFBT0MsS0FBUDtFQUFBLElBQWNDLFFBQWQ7O0VBZ0JBLGlCQUFzQ25CLCtDQUFRLENBQUNrQixLQUFELENBQTlDO0VBQUEsSUFBT0UsV0FBUDtFQUFBLElBQW9CQyxjQUFwQjs7RUFFQSxJQUFNQywwQkFBMEIsR0FBRyxTQUE3QkEsMEJBQTZCLENBQUNDLElBQUQsRUFBcUI7SUFDdkQsSUFBTUMsT0FBTyxHQUFHTixLQUFLLENBQUNPLEdBQU4sQ0FBVSxVQUFBQyxJQUFJLEVBQUk7TUFDakMsSUFBSUEsSUFBSSxDQUFDWCxFQUFMLEtBQVlRLElBQUksQ0FBQ1IsRUFBckIsRUFBeUI7UUFDeEJXLElBQUksQ0FBQ1QsU0FBTCxHQUFpQk0sSUFBSSxDQUFDTixTQUF0QjtNQUNBOztNQUNELE9BQU9TLElBQVA7SUFDQSxDQUxlLENBQWhCO0lBTUFQLFFBQVEsQ0FBQ0ssT0FBRCxDQUFSO0VBQ0EsQ0FSRDs7RUFVQSxJQUFNRyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07SUFDM0IsSUFBSWhCLElBQUksSUFBSSxFQUFSLElBQWNBLElBQUksSUFBSSxHQUExQixFQUErQjtNQUM5QjtJQUNBOztJQUNELElBQU1pQixPQUFPLEdBQUc7TUFDZmIsRUFBRSxFQUFFYyxJQUFJLENBQUNDLEdBQUwsRUFEVztNQUVmZCxLQUFLLEVBQUVMLElBRlE7TUFHZkUsSUFBSSxFQUFFQSxJQUhTO01BSWZJLFNBQVMsRUFBRTtJQUpJLENBQWhCO0lBTUEsSUFBTU8sT0FBTywwS0FBT04sS0FBUCxJQUFjVSxPQUFkLEVBQWI7SUFDQVQsUUFBUSxDQUFDSyxPQUFELENBQVI7SUFDQVosT0FBTyxDQUFDLEVBQUQsQ0FBUDtJQUNBRSxPQUFPLENBQUMsRUFBRCxDQUFQO0lBQ0FSLFFBQVEsQ0FBQyxNQUFELENBQVI7RUFFQSxDQWhCRDs7RUFpQkEsSUFBTXlCLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQ1IsSUFBRCxFQUFPWixJQUFQLEVBQWdCO0lBQzNDcUIsT0FBTyxDQUFDQyxHQUFSLENBQVlWLElBQVo7SUFDQUosUUFBUSxDQUFDRCxLQUFLLENBQUNPLEdBQU4sQ0FBVSxVQUFBQyxJQUFJLEVBQUk7TUFDMUIsSUFBSUEsSUFBSSxDQUFDWCxFQUFMLElBQVdRLElBQUksQ0FBQ1IsRUFBcEIsRUFBd0I7UUFDdkJXLElBQUksQ0FBQ1YsS0FBTCxHQUFhTCxJQUFiO01BQ0E7O01BQ0QsT0FBT2UsSUFBUDtJQUNBLENBTFEsQ0FBRCxDQUFSO0VBTUEsQ0FSRDs7RUFTQSxJQUFNUSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07SUFDOUI1QixRQUFRLENBQUMsTUFBRCxDQUFSO0VBQ0EsQ0FGRDs7RUFHQSxJQUFNNkIsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixHQUFNO0lBQ2xDN0IsUUFBUSxDQUFDLEtBQUQsQ0FBUjtFQUNBLENBRkQ7O0VBR0EsSUFBTThCLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsQ0FBQ2IsSUFBRCxFQUFxQjtJQUNsRGpCLFFBQVEsQ0FBQyxRQUFELENBQVI7SUFDQUksYUFBYSxDQUFDYSxJQUFJLENBQUNSLEVBQU4sQ0FBYjtFQUNBLENBSEQsQ0FwRW1DLENBd0VuQztFQUNBO0VBQ0E7RUFDQTs7O0VBRUFoQixnREFBUyxDQUFDLFlBQU07SUFDZlEsTUFBTSxJQUFJLEtBQVYsSUFBbUJjLGNBQWMsQ0FBQ0gsS0FBSyxDQUFDWCxNQUFOLENBQWEsVUFBQWdCLElBQUk7TUFBQSxPQUFJQSxJQUFKO0lBQUEsQ0FBakIsQ0FBRCxDQUFqQztJQUNBaEIsTUFBTSxJQUFJLE1BQVYsSUFBb0JjLGNBQWMsQ0FBQ0gsS0FBSyxDQUFDWCxNQUFOLENBQWEsVUFBQWdCLElBQUk7TUFBQSxPQUFJQSxJQUFJLENBQUNOLFNBQVQ7SUFBQSxDQUFqQixDQUFELENBQWxDO0lBQ0FWLE1BQU0sSUFBSSxRQUFWLElBQXNCYyxjQUFjLENBQUNILEtBQUssQ0FBQ1gsTUFBTixDQUFhLFVBQUFnQixJQUFJO01BQUEsT0FBSSxDQUFDQSxJQUFJLENBQUNOLFNBQVY7SUFBQSxDQUFqQixDQUFELENBQXBDO0lBQ0EsSUFBSVYsTUFBTSxJQUFJLE9BQWQsRUFBdUJjLGNBQWMsQ0FBQ0gsS0FBSyxDQUFDWCxNQUFOLENBQWEsVUFBQWdCLElBQUk7TUFBQSxPQUFJQSxJQUFJLENBQUNWLElBQUwsS0FBY1YsNkNBQWxCO0lBQUEsQ0FBakIsQ0FBRCxDQUFkO0lBRXZCLElBQUlJLE1BQU0sSUFBSSxNQUFkLEVBQXNCYyxjQUFjLENBQUNILEtBQUssQ0FBQ21CLElBQU4sQ0FBVyxVQUFDQyxLQUFELEVBQVFDLEtBQVIsRUFBa0I7TUFDakUsSUFBSUQsS0FBSyxDQUFDekIsSUFBTixHQUFhMEIsS0FBSyxDQUFDMUIsSUFBdkIsRUFBNkIsT0FBTyxDQUFQO01BQzdCLElBQUl5QixLQUFLLENBQUN6QixJQUFOLEdBQWEwQixLQUFLLENBQUMxQixJQUF2QixFQUE2QixPQUFPLENBQUMsQ0FBUjtNQUM3QixPQUFPLENBQVA7SUFDQSxDQUpvQyxFQUlsQ1ksR0FKa0MsQ0FJOUIsVUFBQUYsSUFBSTtNQUFBLE9BQUlBLElBQUo7SUFBQSxDQUowQixDQUFELENBQWQ7RUFNdEIsQ0FaUSxFQVlOLENBQUNoQixNQUFELEVBQVNXLEtBQVQsQ0FaTSxDQUFUO0VBY0FuQixnREFBUyxDQUFDLFlBQU07SUFDZnNCLGNBQWMsQ0FBQ0gsS0FBRCxDQUFkO0VBQ0EsQ0FGUSxFQUVOLENBQUNBLEtBQUQsQ0FGTSxDQUFUO0VBTUEsb0JBQU87SUFBQSx3QkFDTiw4REFBQyx3REFBRDtNQUFBLHdCQUNDLDhEQUFDLHVEQUFEO1FBQ0MsT0FBTyxFQUFFaUIsb0JBRFY7UUFFQyxXQUFXLEVBQUU7VUFBQSxPQUFNM0IsU0FBUyxDQUFDLE9BQUQsQ0FBZjtRQUFBLENBRmQ7UUFHQyxTQUFTLEVBQUU7VUFBQSxPQUFNQSxTQUFTLENBQUMsS0FBRCxDQUFmO1FBQUEsQ0FIWjtRQUlDLFVBQVUsRUFBRTtVQUFBLE9BQU1BLFNBQVMsQ0FBQyxNQUFELENBQWY7UUFBQSxDQUpiO1FBS0MsWUFBWSxFQUFFO1VBQUEsT0FBTUEsU0FBUyxDQUFDLFFBQUQsQ0FBZjtRQUFBLENBTGY7UUFNQyxVQUFVLEVBQUU7VUFBQSxPQUFNQSxTQUFTLENBQUMsTUFBRCxDQUFmO1FBQUE7TUFOYjtRQUFBO1FBQUE7UUFBQTtNQUFBLFNBREQsZUFRQyw4REFBQywwREFBRDtRQUNDLEtBQUssRUFBRVksV0FEUjtRQUVDLHFCQUFxQixFQUFFZ0IscUJBRnhCO1FBR0MsMEJBQTBCLEVBQUVkLDBCQUg3QjtRQUlDLG1CQUFtQixFQUFFUztNQUp0QjtRQUFBO1FBQUE7UUFBQTtNQUFBLFNBUkQ7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBLFNBRE0sRUFpQkwxQixLQUFLLElBQUksS0FBVCxpQkFDQSw4REFBQyxvREFBRDtNQUFPLEtBQUssRUFBRSxhQUFkO01BQTZCLE9BQU8sRUFBRSxNQUF0QztNQUE4QyxNQUFNLEVBQUVBLEtBQXREO01BQTZELFlBQVksRUFBRTZCLGdCQUEzRTtNQUE2RixXQUFXLEVBQUVQLGFBQTFHO01BQXlILE9BQU8sZUFBRSw4REFBQyw2Q0FBRDtRQUFBO1FBQUE7UUFBQTtNQUFBLFNBQWxJO01BQUEsd0JBQ0M7UUFBTyxJQUFJLEVBQUMsTUFBWjtRQUFtQixXQUFXLEVBQUMsZUFBL0I7UUFBK0MsS0FBSyxFQUFFaEIsSUFBdEQ7UUFBNEQsUUFBUSxFQUFFLGtCQUFDNkIsQ0FBRDtVQUFBLE9BQU81QixPQUFPLENBQUM0QixDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFkO1FBQUE7TUFBdEU7UUFBQTtRQUFBO1FBQUE7TUFBQSxTQURELGVBRUM7UUFBTyxJQUFJLEVBQUMsTUFBWjtRQUFtQixLQUFLLEVBQUU3QixJQUExQjtRQUFnQyxRQUFRLEVBQUUsa0JBQUMyQixDQUFEO1VBQUEsT0FBTzFCLE9BQU8sQ0FBQzBCLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWQ7UUFBQTtNQUExQztRQUFBO1FBQUE7UUFBQTtNQUFBLFNBRkQ7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBLFNBbEJLLEVBd0JMckMsS0FBSyxJQUFJLFFBQVQsaUJBQ0EsOERBQUMsb0RBQUQ7TUFBTyxLQUFLLEVBQUUsYUFBZDtNQUE2QixPQUFPLEVBQUUsUUFBdEM7TUFBZ0QsTUFBTSxFQUFFQSxLQUF4RDtNQUErRCxZQUFZLEVBQUU2QixnQkFBN0U7TUFBK0YsV0FBVyxFQUFFUyxpQkFBNUc7TUFBK0gsT0FBTyxlQUFFLDhEQUFDLCtDQUFEO1FBQUE7UUFBQTtRQUFBO01BQUEsU0FBeEk7TUFBQSx1QkFDQztRQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUREO01BQUE7TUFBQTtNQUFBO0lBQUEsU0F6Qks7RUFBQSxnQkFBUDtBQStCQSxDQWhJTTs7R0FBTXZDOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvTGF5b3V0L01haW4udHN4P2QzYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGlzdEl0ZW0gfSBmcm9tICdAL2NvbXBvbmVudHMvTGlzdEl0ZW0nO1xuaW1wb3J0IHsgTWVudSB9IGZyb20gJ0AvY29tcG9uZW50cy9NZW51L01lbnUnO1xuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICdAL2NvbXBvbmVudHMvTW9kYWwnO1xuaW1wb3J0IHsgVGFza1Byb3BzIH0gZnJvbSAnQC9jb21wb25lbnRzL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBNYWluU3R5bGUgfSBmcm9tICdAL2NvbXBvbmVudHMvc3R5bGUnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBEZWxldGVJY29uLCBTYXZlSWNvbiB9IGZyb20gJy4uLy4uL3B1YmxpYyc7XG5pbXBvcnQgeyBkYXRlTm93IH0gZnJvbSAnQC9EYXRlTm93JztcblxuXG5leHBvcnQgY29uc3QgTWFpbjogUmVhY3QuRkMgPSAoKSA9PiB7XG5cdC8vIGNvbnN0IFttb2RhbEFkZCwgc2V0TW9kYWxBZGRdID0gdXNlU3RhdGUoZmFsc2UpXG5cdC8vIGNvbnN0IFttb2RhbERlbGV0ZSwgc2V0TW9kYWxEZWxldGVdID0gdXNlU3RhdGUoZmFsc2UpXG5cdGNvbnN0IFttb2RhbCwgc2V0TW9kYWxdID0gdXNlU3RhdGUoJ25vbmUnKVxuXHRjb25zdCBbZmlsdGVyLCBzZXRGaWx0ZXJdID0gdXNlU3RhdGUoJycpXG5cdGNvbnN0IFt0YXNrRGVsZXRlLCBzZXRUYXNrRGVsZXRlXSA9IHVzZVN0YXRlKClcblx0Y29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoJycpXG5cdGNvbnN0IFtkYXRlLCBzZXREYXRlXSA9IHVzZVN0YXRlKCcnKVxuXHRjb25zdCBbdGFza3MsIHNldFRhc2tzXSA9IHVzZVN0YXRlKFxuXHRcdFtcblx0XHRcdHtcblx0XHRcdFx0aWQ6IDEsXG5cdFx0XHRcdHRpdGxlOiBcImZpcnN0IHRhc2tcIixcblx0XHRcdFx0ZGF0ZTogXCIyMDIzLTEwLTA0XCIsXG5cdFx0XHRcdGlzQ2hlY2tlZDogZmFsc2Vcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGlkOiAyLFxuXHRcdFx0XHR0aXRsZTogXCJzZWNvbmQgdGFza1wiLFxuXHRcdFx0XHRkYXRlOiBcIjIwMjMtMTAtMDNcIixcblx0XHRcdFx0aXNDaGVja2VkOiBmYWxzZVxuXHRcdFx0fSxcblx0XHRdXG5cdCk7XG5cdGNvbnN0IFtyZW5kZXJUYXNrcywgc2V0UmVuZGVyVGFza3NdID0gdXNlU3RhdGUodGFza3MpXG5cblx0Y29uc3QgaGFuZGxlQ29tcGxldGVTdGF0dXNVcGRhdGUgPSAodGFzazogVGFza1Byb3BzKSA9PiB7XG5cdFx0Y29uc3QgbmV3TGlzdCA9IHRhc2tzLm1hcChpdGVtID0+IHtcblx0XHRcdGlmIChpdGVtLmlkID09PSB0YXNrLmlkKSB7XG5cdFx0XHRcdGl0ZW0uaXNDaGVja2VkID0gdGFzay5pc0NoZWNrZWRcblx0XHRcdH1cblx0XHRcdHJldHVybiBpdGVtXG5cdFx0fSk7XG5cdFx0c2V0VGFza3MobmV3TGlzdClcblx0fVxuXG5cdGNvbnN0IGNyZWF0ZUFkZFRhc2sgPSAoKSA9PiB7XG5cdFx0aWYgKHRleHQgPT0gJycgfHwgdGV4dCA9PSAnICcpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgbmV3VGFzayA9IHtcblx0XHRcdGlkOiBEYXRlLm5vdygpLFxuXHRcdFx0dGl0bGU6IHRleHQsXG5cdFx0XHRkYXRlOiBkYXRlLFxuXHRcdFx0aXNDaGVja2VkOiBmYWxzZVxuXHRcdH1cblx0XHRjb25zdCBuZXdMaXN0ID0gWy4uLnRhc2tzLCBuZXdUYXNrXVxuXHRcdHNldFRhc2tzKG5ld0xpc3QpXG5cdFx0c2V0VGV4dCgnJylcblx0XHRzZXREYXRlKCcnKVxuXHRcdHNldE1vZGFsKCdub25lJylcblxuXHR9XG5cdGNvbnN0IGhhbmRsZUNsaWNrRWRpdFRhc2sgPSAodGFzaywgdGV4dCkgPT4ge1xuXHRcdGNvbnNvbGUubG9nKHRhc2spO1xuXHRcdHNldFRhc2tzKHRhc2tzLm1hcChpdGVtID0+IHtcblx0XHRcdGlmIChpdGVtLmlkID09IHRhc2suaWQpIHtcblx0XHRcdFx0aXRlbS50aXRsZSA9IHRleHRcblx0XHRcdH1cblx0XHRcdHJldHVybiBpdGVtXG5cdFx0fSkpXG5cdH1cblx0Y29uc3QgaGFuZGxlQ2xvc2VNb2RhbCA9ICgpID0+IHtcblx0XHRzZXRNb2RhbCgnbm9uZScpXG5cdH1cblx0Y29uc3QgaGFuZGxlQ2xpY2tPcGVuTW9kYWwgPSAoKSA9PiB7XG5cdFx0c2V0TW9kYWwoJ2FkZCcpXG5cdH1cblx0Y29uc3QgaGFuZGxlT3Blbk1vZGFsRGVsZXRlID0gKHRhc2s6IFRhc2tQcm9wcykgPT4ge1xuXHRcdHNldE1vZGFsKCdkZWxldGUnKVxuXHRcdHNldFRhc2tEZWxldGUodGFzay5pZClcblx0fVxuXHQvLyBjb25zdCBoYW5kbGVDbGlja0RlbGV0ZSA9ICgpID0+IHtcblx0Ly8gXHRzZXRUYXNrcyh0YXNrcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmlkICE9PSB0YXNrRGVsZXRlKSlcblx0Ly8gXHRzZXRNb2RhbERlbGV0ZShmYWxzZSlcblx0Ly8gfVxuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0ZmlsdGVyID09ICdhbGwnICYmIHNldFJlbmRlclRhc2tzKHRhc2tzLmZpbHRlcih0YXNrID0+IHRhc2spKVxuXHRcdGZpbHRlciA9PSAnZG9uZScgJiYgc2V0UmVuZGVyVGFza3ModGFza3MuZmlsdGVyKHRhc2sgPT4gdGFzay5pc0NoZWNrZWQpKVxuXHRcdGZpbHRlciA9PSAndW5kb25lJyAmJiBzZXRSZW5kZXJUYXNrcyh0YXNrcy5maWx0ZXIodGFzayA9PiAhdGFzay5pc0NoZWNrZWQpKVxuXHRcdGlmIChmaWx0ZXIgPT0gJ3RvZGF5Jykgc2V0UmVuZGVyVGFza3ModGFza3MuZmlsdGVyKHRhc2sgPT4gdGFzay5kYXRlID09PSBkYXRlTm93KSlcblxuXHRcdGlmIChmaWx0ZXIgPT0gJ2RhdGUnKSBzZXRSZW5kZXJUYXNrcyh0YXNrcy5zb3J0KCh0YXNrMSwgdGFzazIpID0+IHtcblx0XHRcdGlmICh0YXNrMS5kYXRlID4gdGFzazIuZGF0ZSkgcmV0dXJuIDFcblx0XHRcdGlmICh0YXNrMS5kYXRlIDwgdGFzazIuZGF0ZSkgcmV0dXJuIC0xXG5cdFx0XHRyZXR1cm4gMFxuXHRcdH0pLm1hcCh0YXNrID0+IHRhc2spKVxuXG5cdH0sIFtmaWx0ZXIsIHRhc2tzXSlcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdHNldFJlbmRlclRhc2tzKHRhc2tzKVxuXHR9LCBbdGFza3NdKVxuXG5cblxuXHRyZXR1cm4gPD5cblx0XHQ8TWFpblN0eWxlPlxuXHRcdFx0PE1lbnVcblx0XHRcdFx0b25DbGljaz17aGFuZGxlQ2xpY2tPcGVuTW9kYWx9XG5cdFx0XHRcdGZpbHRlclRvZGF5PXsoKSA9PiBzZXRGaWx0ZXIoJ3RvZGF5Jyl9XG5cdFx0XHRcdGZpbHRlckFsbD17KCkgPT4gc2V0RmlsdGVyKCdhbGwnKX1cblx0XHRcdFx0ZmlsdGVyRG9uZT17KCkgPT4gc2V0RmlsdGVyKCdkb25lJyl9XG5cdFx0XHRcdGZpbHRlclVuZG9uZT17KCkgPT4gc2V0RmlsdGVyKCd1bmRvbmUnKX1cblx0XHRcdFx0ZmlsdGVyRGF0ZT17KCkgPT4gc2V0RmlsdGVyKCdkYXRlJyl9IC8+XG5cdFx0XHQ8TGlzdEl0ZW1cblx0XHRcdFx0dGFza3M9e3JlbmRlclRhc2tzfVxuXHRcdFx0XHRoYW5kbGVPcGVuTW9kYWxEZWxldGU9e2hhbmRsZU9wZW5Nb2RhbERlbGV0ZX1cblx0XHRcdFx0aGFuZGxlQ29tcGxldGVTdGF0dXNVcGRhdGU9e2hhbmRsZUNvbXBsZXRlU3RhdHVzVXBkYXRlfVxuXHRcdFx0XHRoYW5kbGVDbGlja0VkaXRUYXNrPXtoYW5kbGVDbGlja0VkaXRUYXNrfVxuXHRcdFx0Lz5cblx0XHQ8L01haW5TdHlsZT5cblx0XHR7XG5cdFx0XHRtb2RhbCA9PSAnYWRkJyAmJlxuXHRcdFx0PE1vZGFsIHRpdGxlPXsnQ3JlYXRlIHRhc2snfSBuYW1lQnRuPXsnU2F2ZSd9IGFjdGl2ZT17bW9kYWx9IG9uQ2xpY2tDbG9zZT17aGFuZGxlQ2xvc2VNb2RhbH0gb25DbGlja1NhdmU9e2NyZWF0ZUFkZFRhc2t9IEljb25CdG49ezxTYXZlSWNvbiAvPn0+XG5cdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPSdFbnRlciB0ZXh0Li4uJyB2YWx1ZT17dGV4dH0gb25DaGFuZ2U9eyhlKSA9PiBzZXRUZXh0KGUudGFyZ2V0LnZhbHVlKX0gLz5cblx0XHRcdFx0PGlucHV0IHR5cGU9XCJkYXRlXCIgdmFsdWU9e2RhdGV9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0RGF0ZShlLnRhcmdldC52YWx1ZSl9IC8+XG5cdFx0XHQ8L01vZGFsPlxuXHRcdH1cblx0XHR7XG5cdFx0XHRtb2RhbCA9PSAnZGVsZXRlJyAmJlxuXHRcdFx0PE1vZGFsIHRpdGxlPXsnRGVsZXRlIHRhc2snfSBuYW1lQnRuPXsnRGVsZXRlJ30gYWN0aXZlPXttb2RhbH0gb25DbGlja0Nsb3NlPXtoYW5kbGVDbG9zZU1vZGFsfSBvbkNsaWNrU2F2ZT17aGFuZGxlQ2xpY2tEZWxldGV9IEljb25CdG49ezxEZWxldGVJY29uIC8+fT5cblx0XHRcdFx0PGgzPkFyZSB5b3Ugc3VyZSBhYm91dCBkZWxldGluZyB0aGlzIHRhc2s/PC9oMz5cblx0XHRcdDwvTW9kYWw+XG5cdFx0fVxuXHQ8Lz5cblxufSJdLCJuYW1lcyI6WyJMaXN0SXRlbSIsIk1lbnUiLCJNb2RhbCIsIk1haW5TdHlsZSIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJEZWxldGVJY29uIiwiU2F2ZUljb24iLCJkYXRlTm93IiwiTWFpbiIsIm1vZGFsIiwic2V0TW9kYWwiLCJmaWx0ZXIiLCJzZXRGaWx0ZXIiLCJ0YXNrRGVsZXRlIiwic2V0VGFza0RlbGV0ZSIsInRleHQiLCJzZXRUZXh0IiwiZGF0ZSIsInNldERhdGUiLCJpZCIsInRpdGxlIiwiaXNDaGVja2VkIiwidGFza3MiLCJzZXRUYXNrcyIsInJlbmRlclRhc2tzIiwic2V0UmVuZGVyVGFza3MiLCJoYW5kbGVDb21wbGV0ZVN0YXR1c1VwZGF0ZSIsInRhc2siLCJuZXdMaXN0IiwibWFwIiwiaXRlbSIsImNyZWF0ZUFkZFRhc2siLCJuZXdUYXNrIiwiRGF0ZSIsIm5vdyIsImhhbmRsZUNsaWNrRWRpdFRhc2siLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2xvc2VNb2RhbCIsImhhbmRsZUNsaWNrT3Blbk1vZGFsIiwiaGFuZGxlT3Blbk1vZGFsRGVsZXRlIiwic29ydCIsInRhc2sxIiwidGFzazIiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVDbGlja0RlbGV0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Layout/Main.tsx\n"));

/***/ })

});