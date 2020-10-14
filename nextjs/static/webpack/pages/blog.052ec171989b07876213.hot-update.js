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
      className: "card",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy9pbmRleC50c3giXSwibmFtZXMiOlsiRmlyZXN0b3JlQmxvZ1Bvc3RzVVJMIiwicHJvY2VzcyIsImZldGNoZXIiLCJ1cmwiLCJmZXRjaCIsInRoZW4iLCJyIiwianNvbiIsIkJsb2ciLCJwcm9wcyIsImluaXRpYWxEYXRhIiwicG9zdHMiLCJ1c2VTV1IiLCJkYXRhIiwiZG9jdW1lbnRzIiwiZ2VuZXJhdGVQb3N0cyIsIm1hcCIsInBvc3QiLCJwaWQiLCJ0aXRsZSIsImJsdXJiIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FJQTs7QUFDQSxJQUFNQSxxQkFBcUIsMERBQW1EQyxjQUFuRCxxRkFBM0I7O0FBQ0EsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsR0FBRDtBQUFBLFNBQVNDLEtBQUssQ0FBQ0QsR0FBRCxDQUFMLENBQVdFLElBQVgsQ0FBZ0IsVUFBQ0MsQ0FBRDtBQUFBLFdBQU9BLENBQUMsQ0FBQ0MsSUFBRixFQUFQO0FBQUEsR0FBaEIsQ0FBVDtBQUFBLENBQWhCOztBQVNBLFNBQVNDLElBQVQsQ0FBY0MsS0FBZCxFQUFxQjtBQUFBOztBQUFBOztBQUNwQixNQUFNQyxXQUFXLEdBQUdELEtBQUssQ0FBQ0UsS0FBMUI7O0FBRG9CLGdCQUVIQyxtREFBTSxDQUFDWixxQkFBRCxFQUF3QkUsT0FBeEIsRUFBaUM7QUFBRVEsZUFBVyxFQUFYQTtBQUFGLEdBQWpDLENBRkg7QUFBQSxNQUVaRyxJQUZZLFdBRVpBLElBRlksRUFHcEI7OztBQUNBLE1BQU1GLEtBQUssR0FBR0UsSUFBSSxDQUFDQyxTQUFMLEdBQWlCQyxvRUFBYSxDQUFDRixJQUFELENBQTlCLEdBQXVDQSxJQUFyRDtBQUVBLFNBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLQSxJQUFJLElBQ0hGLEtBQUssQ0FBQ0ssR0FBTixDQUFVLFVBQUNDLElBQUQ7QUFBQSxXQUNSLE1BQUMsZ0RBQUQ7QUFDRSxVQUFJLEVBQUMsWUFEUDtBQUVFLFFBQUUsa0JBQVdBLElBQUksQ0FBQ0MsR0FBaEIsQ0FGSjtBQUdFLFNBQUcsWUFBS0QsSUFBSSxDQUFDQyxHQUFWLENBSEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUtFO0FBQUcsZUFBUyxFQUFDLE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBS0QsSUFBSSxDQUFDRSxLQUFWLFlBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUlGLElBQUksQ0FBQ0csS0FBVCxDQUZGLENBTEYsQ0FEUTtBQUFBLEdBQVYsQ0FGTixDQUREO0FBaUJBOztHQXZCUVosSTtVQUVTSSwyQzs7O0tBRlRKLEk7O0FBeUJNQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ibG9nLjA1MmVjMTcxOTg5YjA3ODc2MjEzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuaW1wb3J0IHsgZ2VuZXJhdGVQb3N0cyB9IGZyb20gXCIuLi8uLi9oZWxwZXJzL3V0aWxzXCI7XHJcblxyXG4vLyBPbmx5IGZldGNoIHRoZSB0aXRsZSBhbmQgYmx1cmIuXHJcbmNvbnN0IEZpcmVzdG9yZUJsb2dQb3N0c1VSTCA9IGBodHRwczovL2ZpcmVzdG9yZS5nb29nbGVhcGlzLmNvbS92MS9wcm9qZWN0cy8ke3Byb2Nlc3MuZW52LkZJUkVCQVNFX1BST0pFQ1RfSUR9L2RhdGFiYXNlcy8oZGVmYXVsdCkvZG9jdW1lbnRzL3Bvc3RzP21hc2suZmllbGRQYXRocz1ibHVyYiZtYXNrLmZpZWxkUGF0aHM9dGl0bGVgO1xyXG5jb25zdCBmZXRjaGVyID0gKHVybCkgPT4gZmV0Y2godXJsKS50aGVuKChyKSA9PiByLmpzb24oKSk7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuXHRjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hlcihGaXJlc3RvcmVCbG9nUG9zdHNVUkwpO1xyXG5cdGNvbnN0IHBvc3RzID0gZ2VuZXJhdGVQb3N0cyhkYXRhKTtcclxuXHJcblx0cmV0dXJuIHsgcHJvcHM6IHsgcG9zdHMgfSB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBCbG9nKHByb3BzKSB7XHJcblx0Y29uc3QgaW5pdGlhbERhdGEgPSBwcm9wcy5wb3N0cztcclxuXHRjb25zdCB7IGRhdGEgfSA9IHVzZVNXUihGaXJlc3RvcmVCbG9nUG9zdHNVUkwsIGZldGNoZXIsIHsgaW5pdGlhbERhdGEgfSk7XHJcblx0Ly8gaW5pdGlhbERhdGEgaXMgYWxyZWFkeSB0cmFuc2Zvcm1lZCwgc28gb25seSB0cmFuc2Zvcm0gcmVmZXRjaGVzXHJcblx0Y29uc3QgcG9zdHMgPSBkYXRhLmRvY3VtZW50cyA/IGdlbmVyYXRlUG9zdHMoZGF0YSkgOiBkYXRhO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdj5cclxuICAgICAge2RhdGEgJiZcclxuICAgICAgICBwb3N0cy5tYXAoKHBvc3QpID0+IChcclxuICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgIGhyZWY9XCJibG9nL1twaWRdXCJcclxuICAgICAgICAgICAgYXM9e2AvYmxvZy8ke3Bvc3QucGlkfWB9XHJcbiAgICAgICAgICAgIGtleT17YCR7cG9zdC5waWR9YH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgIDxoMz57cG9zdC50aXRsZX0gJnJhcnI7PC9oMz5cclxuICAgICAgICAgICAgICA8cD57cG9zdC5ibHVyYn08L3A+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICApKX1cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJsb2c7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=