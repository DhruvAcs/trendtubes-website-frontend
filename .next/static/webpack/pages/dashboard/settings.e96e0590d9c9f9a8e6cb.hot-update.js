webpackHotUpdate_N_E("pages/dashboard/settings",{

/***/ "./components/dashboard/settings/dashboard-settings-tabs.tsx":
/*!*******************************************************************!*\
  !*** ./components/dashboard/settings/dashboard-settings-tabs.tsx ***!
  \*******************************************************************/
/*! exports provided: DashboardContentStaffTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DashboardContentStaffTab\", function() { return DashboardContentStaffTab; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _dashboard_settings_tabs_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard-settings-tabs-data */ \"./components/dashboard/settings/dashboard-settings-tabs-data.ts\");\n\n\nvar _jsxFileName = \"/home/trevorb/Documents/VSCode Projects/trendtubes-new/trendtubes/components/dashboard/settings/dashboard-settings-tabs.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar DashboardContentStaffTab = function DashboardContentStaffTab(_ref) {\n  _s();\n\n  var user = _ref.user;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(false),\n      isLoaded = _useState[0],\n      setIsLoaded = _useState[1];\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    if (!router.isReady) return; // codes using router.query\n\n    setIsLoaded(true);\n    console.log(router.query);\n  }, [router.isReady]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"space-y-4\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"w-full bg-secondary-bg rounded-lg\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_dashboard_settings_tabs_data__WEBPACK_IMPORTED_MODULE_5__[\"UsersData\"], {\n          children: function children(_ref2) {\n            var isPending = _ref2.isPending,\n                data = _ref2.data,\n                error = _ref2.error;\n            if (isPending) return 'Loading...';\n            if (error) return 'Error loading staff accounts: ' + error.toString();\n\n            if (data) {\n              return data.map(function (staffUser, index) {\n                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                  className: \"last:border-0 border-b-2 border-primary-border p-4 flex items-center justify-between\",\n                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                    className: \"flex items-center space-x-4\",\n                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                      className: \"w-9 h-9 bg-tertiary-bg rounded-full bg-cover\",\n                      style: {\n                        backgroundImage: \"url(\\\"https://cdn.discordapp.com/avatars/\".concat(staffUser.discord.id, \"/\").concat(staffUser.discord.avatar, \".png\\\")\")\n                      }\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 43,\n                      columnNumber: 13\n                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                      className: \"font-medium text-primary-text\",\n                      children: [staffUser.discord.username, \"#\", staffUser.discord.discriminator]\n                    }, void 0, true, {\n                      fileName: _jsxFileName,\n                      lineNumber: 49,\n                      columnNumber: 13\n                    }, _this)]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 42,\n                    columnNumber: 12\n                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                      className: \"flex items-center space-x-8\",\n                      children: [user._id != staffUser._id && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                        className: \"space-x-2 text-primary-color\",\n                        href: \"/dashboard/settings/staff/delete?id=\".concat(staffUser._id),\n                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__[\"FontAwesomeIcon\"], {\n                          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__[\"faTrash\"]\n                        }, void 0, false, {\n                          fileName: _jsxFileName,\n                          lineNumber: 61,\n                          columnNumber: 16\n                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                          children: \"Remove\"\n                        }, void 0, false, {\n                          fileName: _jsxFileName,\n                          lineNumber: 62,\n                          columnNumber: 16\n                        }, _this)]\n                      }, void 0, true, {\n                        fileName: _jsxFileName,\n                        lineNumber: 57,\n                        columnNumber: 15\n                      }, _this), user._id != staffUser._id && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                        className: \"space-x-2 text-secondary-text\",\n                        href: \"/dashboard/settings/staff/\".concat(staffUser._id),\n                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__[\"FontAwesomeIcon\"], {\n                          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__[\"faEdit\"]\n                        }, void 0, false, {\n                          fileName: _jsxFileName,\n                          lineNumber: 70,\n                          columnNumber: 16\n                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                          children: \"Edit\"\n                        }, void 0, false, {\n                          fileName: _jsxFileName,\n                          lineNumber: 71,\n                          columnNumber: 16\n                        }, _this)]\n                      }, void 0, true, {\n                        fileName: _jsxFileName,\n                        lineNumber: 66,\n                        columnNumber: 15\n                      }, _this), user._id == staffUser._id && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                        className: \"space-x-2 text-secondary-text\",\n                        children: \"YOUR ACCOUNT\"\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 76,\n                        columnNumber: 15\n                      }, _this)]\n                    }, void 0, true, {\n                      fileName: _jsxFileName,\n                      lineNumber: 55,\n                      columnNumber: 13\n                    }, _this)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 54,\n                    columnNumber: 12\n                  }, _this)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 41,\n                  columnNumber: 11\n                }, _this);\n              });\n            }\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 6\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 5\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 4\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 3\n  }, _this);\n};\n\n_s(DashboardContentStaffTab, \"y6Em9l4bFtPd5uTdSZJGayH87MY=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"]];\n});\n\n_c = DashboardContentStaffTab;\n\n\nvar _c;\n\n$RefreshReg$(_c, \"DashboardContentStaffTab\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kYXNoYm9hcmQvc2V0dGluZ3MvZGFzaGJvYXJkLXNldHRpbmdzLXRhYnMudHN4P2YyZDkiXSwibmFtZXMiOlsiRGFzaGJvYXJkQ29udGVudFN0YWZmVGFiIiwidXNlciIsInVzZVN0YXRlIiwiaXNMb2FkZWQiLCJzZXRJc0xvYWRlZCIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsImlzUmVhZHkiLCJjb25zb2xlIiwibG9nIiwicXVlcnkiLCJpc1BlbmRpbmciLCJkYXRhIiwiZXJyb3IiLCJ0b1N0cmluZyIsIm1hcCIsInN0YWZmVXNlciIsImluZGV4IiwiYmFja2dyb3VuZEltYWdlIiwiZGlzY29yZCIsImlkIiwiYXZhdGFyIiwidXNlcm5hbWUiLCJkaXNjcmltaW5hdG9yIiwiX2lkIiwiZmFUcmFzaCIsImZhRWRpdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsd0JBQXdCLEdBQUcsU0FBM0JBLHdCQUEyQixPQUFjO0FBQUE7O0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXOztBQUFBLGtCQUNkQyxzREFBUSxDQUFVLEtBQVYsQ0FETTtBQUFBLE1BQ3ZDQyxRQUR1QztBQUFBLE1BQzdCQyxXQUQ2Qjs7QUFFOUMsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBQyx5REFBUyxDQUFDLFlBQU07QUFDZixRQUFJLENBQUNGLE1BQU0sQ0FBQ0csT0FBWixFQUFxQixPQUROLENBR2Y7O0FBQ0FKLGVBQVcsQ0FBQyxJQUFELENBQVg7QUFDQUssV0FBTyxDQUFDQyxHQUFSLENBQVlMLE1BQU0sQ0FBQ00sS0FBbkI7QUFDQSxHQU5RLEVBTU4sQ0FBQ04sTUFBTSxDQUFDRyxPQUFSLENBTk0sQ0FBVDtBQVFBLHNCQUNDO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQSwyQkFDQztBQUFLLGVBQVMsRUFBQyxtQ0FBZjtBQUFBLDZCQVdDO0FBQUEsK0JBQ0MscUVBQUMsdUVBQUQ7QUFBQSxvQkFDRSx5QkFBZ0M7QUFBQSxnQkFBN0JJLFNBQTZCLFNBQTdCQSxTQUE2QjtBQUFBLGdCQUFsQkMsSUFBa0IsU0FBbEJBLElBQWtCO0FBQUEsZ0JBQVpDLEtBQVksU0FBWkEsS0FBWTtBQUNoQyxnQkFBSUYsU0FBSixFQUFlLE9BQU8sWUFBUDtBQUNmLGdCQUFJRSxLQUFKLEVBQ0MsT0FBTyxtQ0FBbUNBLEtBQUssQ0FBQ0MsUUFBTixFQUExQzs7QUFDRCxnQkFBSUYsSUFBSixFQUFVO0FBQ1QscUJBQU9BLElBQUksQ0FBQ0csR0FBTCxDQUFTLFVBQUNDLFNBQUQsRUFBWUMsS0FBWixFQUFzQjtBQUNyQyxvQ0FDQztBQUFJLDJCQUFTLEVBQUMsc0ZBQWQ7QUFBQSwwQ0FDQztBQUFLLDZCQUFTLEVBQUMsNkJBQWY7QUFBQSw0Q0FDQztBQUNDLCtCQUFTLEVBQUMsOENBRFg7QUFFQywyQkFBSyxFQUFFO0FBQ05DLHVDQUFlLHFEQUE2Q0YsU0FBUyxDQUFDRyxPQUFWLENBQWtCQyxFQUEvRCxjQUFxRUosU0FBUyxDQUFDRyxPQUFWLENBQWtCRSxNQUF2RjtBQURUO0FBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFERCxlQU9DO0FBQUcsK0JBQVMsRUFBQywrQkFBYjtBQUFBLGlDQUNFTCxTQUFTLENBQUNHLE9BQVYsQ0FBa0JHLFFBRHBCLE9BRUVOLFNBQVMsQ0FBQ0csT0FBVixDQUFrQkksYUFGcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQVBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERCxlQWFDO0FBQUEsMkNBQ0M7QUFBSywrQkFBUyxFQUFDLDZCQUFmO0FBQUEsaUNBQ0V2QixJQUFJLENBQUN3QixHQUFMLElBQVlSLFNBQVMsQ0FBQ1EsR0FBdEIsaUJBQ0E7QUFDQyxpQ0FBUyxFQUFDLDhCQURYO0FBRUMsNEJBQUksZ0RBQXlDUixTQUFTLENBQUNRLEdBQW5ELENBRkw7QUFBQSxnREFJQyxxRUFBQyw4RUFBRDtBQUFpQiw4QkFBSSxFQUFFQyx5RUFBT0E7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FKRCxlQUtDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQUxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFGRixFQVVFekIsSUFBSSxDQUFDd0IsR0FBTCxJQUFZUixTQUFTLENBQUNRLEdBQXRCLGlCQUNBO0FBQ0MsaUNBQVMsRUFBQywrQkFEWDtBQUVDLDRCQUFJLHNDQUErQlIsU0FBUyxDQUFDUSxHQUF6QyxDQUZMO0FBQUEsZ0RBSUMscUVBQUMsOEVBQUQ7QUFBaUIsOEJBQUksRUFBRUUsd0VBQU1BO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBSkQsZUFLQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FMRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBWEYsRUFvQkUxQixJQUFJLENBQUN3QixHQUFMLElBQVlSLFNBQVMsQ0FBQ1EsR0FBdEIsaUJBQ0E7QUFBRyxpQ0FBUyxFQUFDLCtCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQXJCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQWJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERDtBQTRDQSxlQTdDTSxDQUFQO0FBOENBO0FBQ0Q7QUFyREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFYRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBeUVBLENBcEZEOztHQUFNekIsd0I7VUFFVU0scUQ7OztLQUZWTix3QjtBQXNGTiIsImZpbGUiOiIuL2NvbXBvbmVudHMvZGFzaGJvYXJkL3NldHRpbmdzL2Rhc2hib2FyZC1zZXR0aW5ncy10YWJzLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZhRWRpdCwgZmFUcmFzaCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVXNlcnNEYXRhIH0gZnJvbSAnLi9kYXNoYm9hcmQtc2V0dGluZ3MtdGFicy1kYXRhJztcblxuY29uc3QgRGFzaGJvYXJkQ29udGVudFN0YWZmVGFiID0gKHsgdXNlciB9KSA9PiB7XG5cdGNvbnN0IFtpc0xvYWRlZCwgc2V0SXNMb2FkZWRdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRpZiAoIXJvdXRlci5pc1JlYWR5KSByZXR1cm47XG5cblx0XHQvLyBjb2RlcyB1c2luZyByb3V0ZXIucXVlcnlcblx0XHRzZXRJc0xvYWRlZCh0cnVlKTtcblx0XHRjb25zb2xlLmxvZyhyb3V0ZXIucXVlcnkpO1xuXHR9LCBbcm91dGVyLmlzUmVhZHldKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBiZy1zZWNvbmRhcnktYmcgcm91bmRlZC1sZ1wiPlxuXHRcdFx0XHR7LyogPGRpdj5cblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJmb250LW1lZGl1bSB0ZXh0LXByaW1hcnktdGV4dFwiPkhvbWUgSGVybyBUaXRsZTwvcD5cblx0XHRcdFx0XHQ8dGV4dGFyZWEgY2xhc3NOYW1lPVwiYmctdGVydGlhcnktYmcgYm9yZGVyLW5vbmUgcm91bmRlZC1tZCBiZy10cmFuc3BhcmVudCB3LWZ1bGwgbXQtMiBwbGFjZWhvbGRlci1zZWNvbmRhcnktdGV4dFwiPlxuXHRcdFx0XHRcdFx0VGhlIFBsYWNlIEZvciBQcm9mZXNzaW9uYWwgU29jaWFsIE1lZGlhIFNlcnZpY2VzXG5cdFx0XHRcdFx0PC90ZXh0YXJlYT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibXQtNFwiPlxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIHRleHQtcHJpbWFyeS10ZXh0XCI+SG9tZSBIZXJvIERlc2NyaXB0aW9uPC9wPlxuXHRcdFx0XHRcdDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJiZy10ZXJ0aWFyeS1iZyBib3JkZXItbm9uZSByb3VuZGVkLW1kIGJnLXRyYW5zcGFyZW50IHctZnVsbCBtdC0yIHBsYWNlaG9sZGVyLXNlY29uZGFyeS10ZXh0XCIgLz5cblx0XHRcdFx0PC9kaXY+ICovfVxuXHRcdFx0XHQ8dWw+XG5cdFx0XHRcdFx0PFVzZXJzRGF0YT5cblx0XHRcdFx0XHRcdHsoeyBpc1BlbmRpbmcsIGRhdGEsIGVycm9yIH0pID0+IHtcblx0XHRcdFx0XHRcdFx0aWYgKGlzUGVuZGluZykgcmV0dXJuICdMb2FkaW5nLi4uJztcblx0XHRcdFx0XHRcdFx0aWYgKGVycm9yKVxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiAnRXJyb3IgbG9hZGluZyBzdGFmZiBhY2NvdW50czogJyArIGVycm9yLnRvU3RyaW5nKCk7XG5cdFx0XHRcdFx0XHRcdGlmIChkYXRhKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGRhdGEubWFwKChzdGFmZlVzZXIsIGluZGV4KSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwibGFzdDpib3JkZXItMCBib3JkZXItYi0yIGJvcmRlci1wcmltYXJ5LWJvcmRlciBwLTQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwidy05IGgtOSBiZy10ZXJ0aWFyeS1iZyByb3VuZGVkLWZ1bGwgYmctY292ZXJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmRJbWFnZTogYHVybChcImh0dHBzOi8vY2RuLmRpc2NvcmRhcHAuY29tL2F2YXRhcnMvJHtzdGFmZlVzZXIuZGlzY29yZC5pZH0vJHtzdGFmZlVzZXIuZGlzY29yZC5hdmF0YXJ9LnBuZ1wiKWAsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gdGV4dC1wcmltYXJ5LXRleHRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3N0YWZmVXNlci5kaXNjb3JkLnVzZXJuYW1lfSNcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3N0YWZmVXNlci5kaXNjb3JkLmRpc2NyaW1pbmF0b3J9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC04XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHt1c2VyLl9pZCAhPSBzdGFmZlVzZXIuX2lkICYmIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwic3BhY2UteC0yIHRleHQtcHJpbWFyeS1jb2xvclwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRocmVmPXtgL2Rhc2hib2FyZC9zZXR0aW5ncy9zdGFmZi9kZWxldGU/aWQ9JHtzdGFmZlVzZXIuX2lkfWB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVRyYXNofSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+UmVtb3ZlPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3VzZXIuX2lkICE9IHN0YWZmVXNlci5faWQgJiYgKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJzcGFjZS14LTIgdGV4dC1zZWNvbmRhcnktdGV4dFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRocmVmPXtgL2Rhc2hib2FyZC9zZXR0aW5ncy9zdGFmZi8ke3N0YWZmVXNlci5faWR9YH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhRWRpdH0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuPkVkaXQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpfVxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHt1c2VyLl9pZCA9PSBzdGFmZlVzZXIuX2lkICYmIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJzcGFjZS14LTIgdGV4dC1zZWNvbmRhcnktdGV4dFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0WU9VUiBBQ0NPVU5UXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdDwvVXNlcnNEYXRhPlxuXHRcdFx0XHQ8L3VsPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgeyBEYXNoYm9hcmRDb250ZW50U3RhZmZUYWIgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/dashboard/settings/dashboard-settings-tabs.tsx\n");

/***/ })

})