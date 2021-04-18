webpackHotUpdate_N_E("pages/dashboard/settings",{

/***/ "./utils/backend-api.ts":
/*!******************************!*\
  !*** ./utils/backend-api.ts ***!
  \******************************/
/*! exports provided: BackendApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BackendApi\", function() { return BackendApi; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nvar API_PREURL = 'http://localhost:3005';\naxios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.withCredentials = true; // axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';\n\nvar BackendApi = {\n  getSellixProductCache: function getSellixProductCache() {\n    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(API_PREURL + '/sellix/cache/products');\n  },\n  getAccounts: function getAccounts() {\n    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(API_PREURL + '/accounts');\n  },\n  getAccount: function getAccount(id) {\n    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(API_PREURL + '/accounts/' + id);\n  },\n  createAccount: function createAccount(body) {\n    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(API_PREURL + '/accounts', body);\n  },\n  editAccount: function editAccount(id, body) {\n    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(API_PREURL + '/accounts/' + id, body);\n  },\n  deleteAccount: function deleteAccount(id) {\n    return axios__WEBPACK_IMPORTED_MODULE_0___default.a[\"delete\"](API_PREURL + '/accounts/' + id);\n  },\n  getServices: function getServices() {\n    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(API_PREURL + '/services');\n  },\n  getService: function getService(id) {\n    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(API_PREURL + '/services/' + id);\n  },\n  createService: function createService(body) {\n    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(API_PREURL + '/services', body);\n  },\n  editService: function editService(id, body) {\n    // {\n    // \t// headers: {\n    // \t// \t// 'Access-Control-Allow-Origin': '*',\n    // \t// \t// 'Content-Type': 'application/x-www-form-urlencoded',\n    // \t// },\n    // \t// headers: {\n    // \t// \tAccept: 'application/json',\n    // \t// \t'Content-Type': 'application/json',\n    // \t// },\n    // }\n    {// headers: {\n      // \t'Content-Type': 'application/x-www-form-urlencoded',\n      // \tAccept: 'text/json',\n      // },\n      // headers: {\n      // \t'Content-Type': 'application/x-www-form-urlencoded',\n      // },\n      // crossdomain: true,\n    }\n    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(API_PREURL + '/services/' + id, body);\n  },\n  deleteService: function deleteService(id) {\n    return axios__WEBPACK_IMPORTED_MODULE_0___default.a[\"delete\"](API_PREURL + '/services/' + id);\n  },\n  getCMSPath: function getCMSPath(path) {\n    console.log('getcmspath', path);\n    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(API_PREURL + '/cms/', {\n      params: {\n        path: path\n      }\n    });\n  },\n  editCMSPath: function editCMSPath(path, subPathData) {\n    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(API_PREURL + '/cms/?path=' + path, {\n      // params: { path: path },\n      subPaths: subPathData\n    });\n  },\n  getUsers: function getUsers() {\n    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(API_PREURL + '/users/');\n  },\n  getUser: function getUser(id) {\n    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(API_PREURL + '/users/' + id);\n  },\n  editUser: function editUser(id, data) {\n    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(API_PREURL + '/users/' + id, data);\n  },\n  generateAuthCode: function generateAuthCode(cookie) {\n    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(API_PREURL + '/auth/generate-code', {\n      headers: {\n        cookie: cookie\n      }\n    });\n  },\n  getAuthInfo: function getAuthInfo(cookie) {\n    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(API_PREURL + '/auth/info', {\n      headers: {\n        cookie: cookie\n      }\n    });\n  },\n  authLogout: function authLogout(cookie) {\n    // var cookie = ctx.req.headers.cookie || '';\n    // removeCookies(ctx, 'trendtubes.session');\n    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(API_PREURL + '/auth/logout', {\n      headers: {\n        cookie: cookie\n      }\n    });\n  },\n  isAuthenticated: function isAuthenticated() {\n    return true;\n  }\n};\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvYmFja2VuZC1hcGkudHM/MzQyMSJdLCJuYW1lcyI6WyJBUElfUFJFVVJMIiwiYXhpb3MiLCJkZWZhdWx0cyIsIndpdGhDcmVkZW50aWFscyIsIkJhY2tlbmRBcGkiLCJnZXRTZWxsaXhQcm9kdWN0Q2FjaGUiLCJnZXQiLCJnZXRBY2NvdW50cyIsImdldEFjY291bnQiLCJpZCIsImNyZWF0ZUFjY291bnQiLCJib2R5IiwicG9zdCIsImVkaXRBY2NvdW50IiwiZGVsZXRlQWNjb3VudCIsImdldFNlcnZpY2VzIiwiZ2V0U2VydmljZSIsImNyZWF0ZVNlcnZpY2UiLCJlZGl0U2VydmljZSIsImRlbGV0ZVNlcnZpY2UiLCJnZXRDTVNQYXRoIiwicGF0aCIsImNvbnNvbGUiLCJsb2ciLCJwYXJhbXMiLCJlZGl0Q01TUGF0aCIsInN1YlBhdGhEYXRhIiwic3ViUGF0aHMiLCJnZXRVc2VycyIsImdldFVzZXIiLCJlZGl0VXNlciIsImRhdGEiLCJnZW5lcmF0ZUF1dGhDb2RlIiwiY29va2llIiwiaGVhZGVycyIsImdldEF1dGhJbmZvIiwiYXV0aExvZ291dCIsImlzQXV0aGVudGljYXRlZCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBLElBQU1BLFVBQVUsR0FBRyx1QkFBbkI7QUFDQUMsNENBQUssQ0FBQ0MsUUFBTixDQUFlQyxlQUFmLEdBQWlDLElBQWpDLEMsQ0FDQTs7QUFFQSxJQUFNQyxVQUFVLEdBQUc7QUFDbEJDLHVCQUFxQixFQUFFLGlDQUFNO0FBQzVCLFdBQU9KLDRDQUFLLENBQUNLLEdBQU4sQ0FBVU4sVUFBVSxHQUFHLHdCQUF2QixDQUFQO0FBQ0EsR0FIaUI7QUFJbEJPLGFBQVcsRUFBRSx1QkFBTTtBQUNsQixXQUFPTiw0Q0FBSyxDQUFDSyxHQUFOLENBQVVOLFVBQVUsR0FBRyxXQUF2QixDQUFQO0FBQ0EsR0FOaUI7QUFPbEJRLFlBQVUsRUFBRSxvQkFBQ0MsRUFBRCxFQUFR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QlMsRUFBcEMsRUFBd0NzQixJQUF4QyxDQUFQO0FBQ0EsR0F6RWlCO0FBMEVsQkMsa0JBQWdCLEVBQUUsMEJBQUNDLE1BQUQsRUFBb0I7QUFDckMsV0FBT2hDLDRDQUFLLENBQUNLLEdBQU4sQ0FBVU4sVUFBVSxHQUFHLHFCQUF2QixFQUE4QztBQUNwRGtDLGFBQU8sRUFBRTtBQUNSRCxjQUFNLEVBQUVBO0FBREE7QUFEMkMsS0FBOUMsQ0FBUDtBQUtBLEdBaEZpQjtBQWlGbEJFLGFBQVcsRUFBRSxxQkFBQ0YsTUFBRCxFQUFvQjtBQUNoQyxXQUFPaEMsNENBQUssQ0FBQ0ssR0FBTixDQUFVTixVQUFVLEdBQUcsWUFBdkIsRUFBcUM7QUFDM0NrQyxhQUFPLEVBQUU7QUFDUkQsY0FBTSxFQUFFQTtBQURBO0FBRGtDLEtBQXJDLENBQVA7QUFLQSxHQXZGaUI7QUF3RmxCRyxZQUFVLEVBQUUsb0JBQUNILE1BQUQsRUFBWTtBQUN2QjtBQUNBO0FBQ0EsV0FBT2hDLDRDQUFLLENBQUNLLEdBQU4sQ0FBVU4sVUFBVSxHQUFHLGNBQXZCLEVBQXVDO0FBQzdDa0MsYUFBTyxFQUFFO0FBQ1JELGNBQU0sRUFBRUE7QUFEQTtBQURvQyxLQUF2QyxDQUFQO0FBS0EsR0FoR2lCO0FBaUdsQkksaUJBQWUsRUFBRSwyQkFBTTtBQUN0QixXQUFPLElBQVA7QUFDQTtBQW5HaUIsQ0FBbkI7QUFzR0EiLCJmaWxlIjoiLi91dGlscy9iYWNrZW5kLWFwaS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcywgeyBBeGlvc1JlcXVlc3RDb25maWcgfSBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyByZW1vdmVDb29raWVzIH0gZnJvbSAnY29va2llcy1uZXh0JztcblxuY29uc3QgQVBJX1BSRVVSTCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDUnO1xuYXhpb3MuZGVmYXVsdHMud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbi8vIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMucG9zdFsnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJ10gPSAnKic7XG5cbmNvbnN0IEJhY2tlbmRBcGkgPSB7XG5cdGdldFNlbGxpeFByb2R1Y3RDYWNoZTogKCkgPT4ge1xuXHRcdHJldHVybiBheGlvcy5nZXQoQVBJX1BSRVVSTCArICcvc2VsbGl4L2NhY2hlL3Byb2R1Y3RzJyk7XG5cdH0sXG5cdGdldEFjY291bnRzOiAoKSA9PiB7XG5cdFx0cmV0dXJuIGF4aW9zLmdldChBUElfUFJFVVJMICsgJy9hY2NvdW50cycpO1xuXHR9LFxuXHRnZXRBY2NvdW50OiAoaWQpID0+IHtcblx0XHRyZXR1cm4gYXhpb3MuZ2V0KEFQSV9QUkVVUkwgKyAnL2FjY291bnRzLycgKyBpZCk7XG5cdH0sXG5cdGNyZWF0ZUFjY291bnQ6IChib2R5KSA9PiB7XG5cdFx0cmV0dXJuIGF4aW9zLnBvc3QoQVBJX1BSRVVSTCArICcvYWNjb3VudHMnLCBib2R5KTtcblx0fSxcblx0ZWRpdEFjY291bnQ6IChpZCwgYm9keSkgPT4ge1xuXHRcdHJldHVybiBheGlvcy5wb3N0KEFQSV9QUkVVUkwgKyAnL2FjY291bnRzLycgKyBpZCwgYm9keSk7XG5cdH0sXG5cdGRlbGV0ZUFjY291bnQ6IChpZCkgPT4ge1xuXHRcdHJldHVybiBheGlvcy5kZWxldGUoQVBJX1BSRVVSTCArICcvYWNjb3VudHMvJyArIGlkKTtcblx0fSxcblx0Z2V0U2VydmljZXM6ICgpID0+IHtcblx0XHRyZXR1cm4gYXhpb3MuZ2V0KEFQSV9QUkVVUkwgKyAnL3NlcnZpY2VzJyk7XG5cdH0sXG5cdGdldFNlcnZpY2U6IChpZCkgPT4ge1xuXHRcdHJldHVybiBheGlvcy5nZXQoQVBJX1BSRVVSTCArICcvc2VydmljZXMvJyArIGlkKTtcblx0fSxcblx0Y3JlYXRlU2VydmljZTogKGJvZHkpID0+IHtcblx0XHRyZXR1cm4gYXhpb3MucG9zdChBUElfUFJFVVJMICsgJy9zZXJ2aWNlcycsIGJvZHkpO1xuXHR9LFxuXHRlZGl0U2VydmljZTogKGlkLCBib2R5KSA9PiB7XG5cdFx0Ly8ge1xuXHRcdC8vIFx0Ly8gaGVhZGVyczoge1xuXHRcdC8vIFx0Ly8gXHQvLyAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonLFxuXHRcdC8vIFx0Ly8gXHQvLyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG5cdFx0Ly8gXHQvLyB9LFxuXHRcdC8vIFx0Ly8gaGVhZGVyczoge1xuXHRcdC8vIFx0Ly8gXHRBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcblx0XHQvLyBcdC8vIFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcblx0XHQvLyBcdC8vIH0sXG5cdFx0Ly8gfVxuXG5cdFx0e1xuXHRcdFx0Ly8gaGVhZGVyczoge1xuXHRcdFx0Ly8gXHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG5cdFx0XHQvLyBcdEFjY2VwdDogJ3RleHQvanNvbicsXG5cdFx0XHQvLyB9LFxuXHRcdFx0Ly8gaGVhZGVyczoge1xuXHRcdFx0Ly8gXHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG5cdFx0XHQvLyB9LFxuXHRcdFx0Ly8gY3Jvc3Nkb21haW46IHRydWUsXG5cdFx0fVxuXHRcdHJldHVybiBheGlvcy5wb3N0KEFQSV9QUkVVUkwgKyAnL3NlcnZpY2VzLycgKyBpZCwgYm9keSk7XG5cdH0sXG5cdGRlbGV0ZVNlcnZpY2U6IChpZCkgPT4ge1xuXHRcdHJldHVybiBheGlvcy5kZWxldGUoQVBJX1BSRVVSTCArICcvc2VydmljZXMvJyArIGlkKTtcblx0fSxcblx0Z2V0Q01TUGF0aDogKHBhdGgpID0+IHtcblx0XHRjb25zb2xlLmxvZygnZ2V0Y21zcGF0aCcsIHBhdGgpO1xuXHRcdHJldHVybiBheGlvcy5nZXQoQVBJX1BSRVVSTCArICcvY21zLycsIHsgcGFyYW1zOiB7IHBhdGg6IHBhdGggfSB9KTtcblx0fSxcblx0ZWRpdENNU1BhdGg6IChwYXRoLCBzdWJQYXRoRGF0YSkgPT4ge1xuXHRcdHJldHVybiBheGlvcy5wb3N0KEFQSV9QUkVVUkwgKyAnL2Ntcy8/cGF0aD0nICsgcGF0aCwge1xuXHRcdFx0Ly8gcGFyYW1zOiB7IHBhdGg6IHBhdGggfSxcblx0XHRcdHN1YlBhdGhzOiBzdWJQYXRoRGF0YSxcblx0XHR9KTtcblx0fSxcblx0Z2V0VXNlcnM6ICgpID0+IHtcblx0XHRyZXR1cm4gYXhpb3MuZ2V0KEFQSV9QUkVVUkwgKyAnL3VzZXJzLycpO1xuXHR9LFxuXHRnZXRVc2VyOiAoaWQpID0+IHtcblx0XHRyZXR1cm4gYXhpb3MuZ2V0KEFQSV9QUkVVUkwgKyAnL3VzZXJzLycgKyBpZCk7XG5cdH0sXG5cdGVkaXRVc2VyOiAoaWQsIGRhdGEpID0+IHtcblx0XHRyZXR1cm4gYXhpb3MucG9zdChBUElfUFJFVVJMICsgJy91c2Vycy8nICsgaWQsIGRhdGEpO1xuXHR9LFxuXHRnZW5lcmF0ZUF1dGhDb2RlOiAoY29va2llOiBzdHJpbmcpID0+IHtcblx0XHRyZXR1cm4gYXhpb3MuZ2V0KEFQSV9QUkVVUkwgKyAnL2F1dGgvZ2VuZXJhdGUtY29kZScsIHtcblx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0Y29va2llOiBjb29raWUsXG5cdFx0XHR9LFxuXHRcdH0pO1xuXHR9LFxuXHRnZXRBdXRoSW5mbzogKGNvb2tpZTogc3RyaW5nKSA9PiB7XG5cdFx0cmV0dXJuIGF4aW9zLmdldChBUElfUFJFVVJMICsgJy9hdXRoL2luZm8nLCB7XG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdGNvb2tpZTogY29va2llLFxuXHRcdFx0fSxcblx0XHR9KTtcblx0fSxcblx0YXV0aExvZ291dDogKGNvb2tpZSkgPT4ge1xuXHRcdC8vIHZhciBjb29raWUgPSBjdHgucmVxLmhlYWRlcnMuY29va2llIHx8ICcnO1xuXHRcdC8vIHJlbW92ZUNvb2tpZXMoY3R4LCAndHJlbmR0dWJlcy5zZXNzaW9uJyk7XG5cdFx0cmV0dXJuIGF4aW9zLmdldChBUElfUFJFVVJMICsgJy9hdXRoL2xvZ291dCcsIHtcblx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0Y29va2llOiBjb29raWUsXG5cdFx0XHR9LFxuXHRcdH0pO1xuXHR9LFxuXHRpc0F1dGhlbnRpY2F0ZWQ6ICgpID0+IHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSxcbn07XG5cbmV4cG9ydCB7IEJhY2tlbmRBcGkgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/backend-api.ts\n");

/***/ })

})