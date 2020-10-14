webpackHotUpdate_N_E("pages/blog",{

/***/ "./pages/blog/index.tsx":
/*!******************************!*\
  !*** ./pages/blog/index.tsx ***!
  \******************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/utils */ "./helpers/utils.js");
var _jsxFileName = "C:\\Desenvolvedor\\nextjs\\next-firebase-test\\pages\\blog\\index.tsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // Only fetch the title and blurb.

var FirestoreBlogPostsURL = "https://firestore.googleapis.com/v1/projects/".concat("nextjs-teste", "/databases/(default)/documents/posts?mask.fieldPaths=blurb&mask.fieldPaths=title");

var fetcher = function fetcher(url) {
  return fetch(url).then(function (r) {
    return r.json();
  });
};

function Blog(props) {
  _s();

  var _this = this;

  var initialData = props.posts;

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_1__["default"])(FirestoreBlogPostsURL, fetcher, {
    initialData: initialData
  }),
      data = _useSWR.data; // initialData is already transformed, so only transform refetches


  var posts = data.documents ? Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_3__["generatePosts"])(data) : data;
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 3
    }
  }, data && posts.map(function (post) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "blog/[pid]",
      as: "/blog/".concat(post.pid),
      key: "".concat(post.pid),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 11
      }
    }, __jsx("a", {
      style: {
        boder: "1px solid"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 13
      }
    }, __jsx("h3", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 15
      }
    }, post.title, " \u2192"), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 15
      }
    }, post.blurb)));
  }));
}

_s(Blog, "Bw9uScf/xQBWZKhLCWSR33xISM4=", false, function () {
  return [swr__WEBPACK_IMPORTED_MODULE_1__["default"]];
});

_c = Blog;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Blog);

var _c;

$RefreshReg$(_c, "Blog");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy9pbmRleC50c3giXSwibmFtZXMiOlsiRmlyZXN0b3JlQmxvZ1Bvc3RzVVJMIiwicHJvY2VzcyIsImZldGNoZXIiLCJ1cmwiLCJmZXRjaCIsInRoZW4iLCJyIiwianNvbiIsIkJsb2ciLCJwcm9wcyIsImluaXRpYWxEYXRhIiwicG9zdHMiLCJ1c2VTV1IiLCJkYXRhIiwiZG9jdW1lbnRzIiwiZ2VuZXJhdGVQb3N0cyIsIm1hcCIsInBvc3QiLCJwaWQiLCJib2RlciIsInRpdGxlIiwiYmx1cmIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUlBOztBQUNBLElBQU1BLHFCQUFxQiwwREFBbURDLGNBQW5ELHFGQUEzQjs7QUFDQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxHQUFEO0FBQUEsU0FBU0MsS0FBSyxDQUFDRCxHQUFELENBQUwsQ0FBV0UsSUFBWCxDQUFnQixVQUFDQyxDQUFEO0FBQUEsV0FBT0EsQ0FBQyxDQUFDQyxJQUFGLEVBQVA7QUFBQSxHQUFoQixDQUFUO0FBQUEsQ0FBaEI7O0FBU0EsU0FBU0MsSUFBVCxDQUFjQyxLQUFkLEVBQXFCO0FBQUE7O0FBQUE7O0FBQ3BCLE1BQU1DLFdBQVcsR0FBR0QsS0FBSyxDQUFDRSxLQUExQjs7QUFEb0IsZ0JBRUhDLG1EQUFNLENBQUNaLHFCQUFELEVBQXdCRSxPQUF4QixFQUFpQztBQUFFUSxlQUFXLEVBQVhBO0FBQUYsR0FBakMsQ0FGSDtBQUFBLE1BRVpHLElBRlksV0FFWkEsSUFGWSxFQUdwQjs7O0FBQ0EsTUFBTUYsS0FBSyxHQUFHRSxJQUFJLENBQUNDLFNBQUwsR0FBaUJDLG9FQUFhLENBQUNGLElBQUQsQ0FBOUIsR0FBdUNBLElBQXJEO0FBRUEsU0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tBLElBQUksSUFDSEYsS0FBSyxDQUFDSyxHQUFOLENBQVUsVUFBQ0MsSUFBRDtBQUFBLFdBQ1IsTUFBQyxnREFBRDtBQUNFLFVBQUksRUFBQyxZQURQO0FBRUUsUUFBRSxrQkFBV0EsSUFBSSxDQUFDQyxHQUFoQixDQUZKO0FBR0UsU0FBRyxZQUFLRCxJQUFJLENBQUNDLEdBQVYsQ0FITDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BS0U7QUFBRyxXQUFLLEVBQUU7QUFBQ0MsYUFBSyxFQUFFO0FBQVIsT0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFLRixJQUFJLENBQUNHLEtBQVYsWUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSUgsSUFBSSxDQUFDSSxLQUFULENBRkYsQ0FMRixDQURRO0FBQUEsR0FBVixDQUZOLENBREQ7QUFpQkE7O0dBdkJRYixJO1VBRVNJLDJDOzs7S0FGVEosSTs7QUF5Qk1BLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Jsb2cuNDA0NDg0YjA2MjM2YmE1N2Q0NWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5pbXBvcnQgeyBnZW5lcmF0ZVBvc3RzIH0gZnJvbSBcIi4uLy4uL2hlbHBlcnMvdXRpbHNcIjtcclxuXHJcbi8vIE9ubHkgZmV0Y2ggdGhlIHRpdGxlIGFuZCBibHVyYi5cclxuY29uc3QgRmlyZXN0b3JlQmxvZ1Bvc3RzVVJMID0gYGh0dHBzOi8vZmlyZXN0b3JlLmdvb2dsZWFwaXMuY29tL3YxL3Byb2plY3RzLyR7cHJvY2Vzcy5lbnYuRklSRUJBU0VfUFJPSkVDVF9JRH0vZGF0YWJhc2VzLyhkZWZhdWx0KS9kb2N1bWVudHMvcG9zdHM/bWFzay5maWVsZFBhdGhzPWJsdXJiJm1hc2suZmllbGRQYXRocz10aXRsZWA7XHJcbmNvbnN0IGZldGNoZXIgPSAodXJsKSA9PiBmZXRjaCh1cmwpLnRoZW4oKHIpID0+IHIuanNvbigpKTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG5cdGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaGVyKEZpcmVzdG9yZUJsb2dQb3N0c1VSTCk7XHJcblx0Y29uc3QgcG9zdHMgPSBnZW5lcmF0ZVBvc3RzKGRhdGEpO1xyXG5cclxuXHRyZXR1cm4geyBwcm9wczogeyBwb3N0cyB9IH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEJsb2cocHJvcHMpIHtcclxuXHRjb25zdCBpbml0aWFsRGF0YSA9IHByb3BzLnBvc3RzO1xyXG5cdGNvbnN0IHsgZGF0YSB9ID0gdXNlU1dSKEZpcmVzdG9yZUJsb2dQb3N0c1VSTCwgZmV0Y2hlciwgeyBpbml0aWFsRGF0YSB9KTtcclxuXHQvLyBpbml0aWFsRGF0YSBpcyBhbHJlYWR5IHRyYW5zZm9ybWVkLCBzbyBvbmx5IHRyYW5zZm9ybSByZWZldGNoZXNcclxuXHRjb25zdCBwb3N0cyA9IGRhdGEuZG9jdW1lbnRzID8gZ2VuZXJhdGVQb3N0cyhkYXRhKSA6IGRhdGE7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2PlxyXG4gICAgICB7ZGF0YSAmJlxyXG4gICAgICAgIHBvc3RzLm1hcCgocG9zdCkgPT4gKFxyXG4gICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgaHJlZj1cImJsb2cvW3BpZF1cIlxyXG4gICAgICAgICAgICBhcz17YC9ibG9nLyR7cG9zdC5waWR9YH1cclxuICAgICAgICAgICAga2V5PXtgJHtwb3N0LnBpZH1gfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8YSBzdHlsZT17e2JvZGVyOiBcIjFweCBzb2xpZFwifX0+XHJcbiAgICAgICAgICAgICAgPGgzPntwb3N0LnRpdGxlfSAmcmFycjs8L2gzPlxyXG4gICAgICAgICAgICAgIDxwPntwb3N0LmJsdXJifTwvcD5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICkpfVxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmxvZztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==