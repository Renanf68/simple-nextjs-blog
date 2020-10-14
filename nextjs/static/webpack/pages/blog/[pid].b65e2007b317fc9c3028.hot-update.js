webpackHotUpdate_N_E("pages/blog/[pid]",{

/***/ "./pages/blog/[pid].tsx":
/*!******************************!*\
  !*** ./pages/blog/[pid].tsx ***!
  \******************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Post; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/error */ "./node_modules/next/error.js");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Desenvolvedor\\nextjs\\next-firebase-test\\pages\\blog\\[pid].tsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var __N_SSG = true;
function Post(_ref) {
  _s();

  var post = _ref.post;

  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])(),
      isFallback = _useRouter.isFallback;

  if (!isFallback && !post) {
    return __jsx(next_error__WEBPACK_IMPORTED_MODULE_2___default.a, {
      statusCode: 404,
      title: "No Blog Post with the provided ID",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 10
      }
    });
  }

  if (isFallback) {
    return __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 12
      }
    }, "Carregando...");
  }

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, post.title), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, post.blurb), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, post.content));
} // <div dangerouslySetInnerHTML={{ __html: post.content }} />

_s(Post, "Ch/bV+mPq0h+JIhwQrjzTmaO/YQ=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"]];
});

_c = Post;

var _c;

$RefreshReg$(_c, "Post");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy9bcGlkXS50c3giXSwibmFtZXMiOlsiUG9zdCIsInBvc3QiLCJ1c2VSb3V0ZXIiLCJpc0ZhbGxiYWNrIiwidGl0bGUiLCJibHVyYiIsImNvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7O0FBTWUsU0FBU0EsSUFBVCxPQUF3QjtBQUFBOztBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTs7QUFBQSxtQkFDZEMsNkRBQVMsRUFESztBQUFBLE1BQzdCQyxVQUQ2QixjQUM3QkEsVUFENkI7O0FBRXBDLE1BQUksQ0FBQ0EsVUFBRCxJQUFlLENBQUNGLElBQXBCLEVBQTBCO0FBQzNCLFdBQU8sTUFBQyxpREFBRDtBQUFPLGdCQUFVLEVBQUUsR0FBbkI7QUFBd0IsV0FBSyxFQUFDLG1DQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQVA7QUFDQTs7QUFDQSxNQUFJRSxVQUFKLEVBQWdCO0FBQ2QsV0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUFQO0FBQ0Q7O0FBQ0QsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLRixJQUFJLENBQUNHLEtBQVYsQ0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSUgsSUFBSSxDQUFDSSxLQUFULENBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUlKLElBQUksQ0FBQ0ssT0FBVCxDQUhGLENBREY7QUFPRCxDLENBaUNEOztHQWhEd0JOLEk7VUFDQ0UscUQ7OztLQURERixJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Jsb2cvW3BpZF0uYjY1ZTIwMDdiMzE3ZmM5YzMwMjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdldFN0YXRpY1BhdGhzLCBHZXRTdGF0aWNQcm9wcyB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgRXJyb3IgZnJvbSBcIm5leHQvZXJyb3JcIjtcclxuXHJcbmNvbnN0IEZpcmVzdG9yZUJsb2dQb3N0c1VSTCA9IGBodHRwczovL2ZpcmVzdG9yZS5nb29nbGVhcGlzLmNvbS92MS9wcm9qZWN0cy8ke3Byb2Nlc3MuZW52LkZJUkVCQVNFX1BST0pFQ1RfSUR9L2RhdGFiYXNlcy8oZGVmYXVsdCkvZG9jdW1lbnRzL3Bvc3RzYDtcclxuY29uc3QgZmV0Y2hlciA9ICh1cmwpID0+IGZldGNoKHVybCkudGhlbigocikgPT4gci5qc29uKCkpO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3QoeyBwb3N0IH0pIHtcclxuICBjb25zdCB7IGlzRmFsbGJhY2sgfSA9IHVzZVJvdXRlcigpO1xyXG4gIFx0aWYgKCFpc0ZhbGxiYWNrICYmICFwb3N0KSB7XHJcblx0XHRyZXR1cm4gPEVycm9yIHN0YXR1c0NvZGU9ezQwNH0gdGl0bGU9XCJObyBCbG9nIFBvc3Qgd2l0aCB0aGUgcHJvdmlkZWQgSURcIiAvPjtcclxuXHR9XHJcbiAgaWYgKGlzRmFsbGJhY2spIHtcclxuICAgIHJldHVybiA8cD5DYXJyZWdhbmRvLi4uPC9wPjtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMT57cG9zdC50aXRsZX08L2gxPlxyXG4gICAgICA8cD57cG9zdC5ibHVyYn08L3A+XHJcbiAgICAgIDxwPntwb3N0LmNvbnRlbnR9PC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzOiBHZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHM6IFtdLFxyXG4gICAgZmFsbGJhY2s6IHRydWUsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoe3BhcmFtc30pID0+IHtcclxuICB0cnkge1xyXG5cdFx0Ly8gQ2FsbCBhbiBleHRlcm5hbCBBUEkgZW5kcG9pbnQgdG8gZ2V0IHBvc3RzLlxyXG5cdFx0Y29uc3QgcG9zdCA9IGF3YWl0IGZldGNoZXIoYCR7RmlyZXN0b3JlQmxvZ1Bvc3RzVVJMfS8ke3BhcmFtcy5waWR9YCk7IC8vIGdyYWJzIHRoZSB3aG9sZSBkb2N1bWVudCB3aXRoIHRoZSBwcm92aWRlZCBkb2N1bWVudCBpZCAoaW4gdGhpcyBjYXNlIHBpZClcclxuXHRcdGNvbnNvbGUubG9nKHBvc3QpXHJcbiAgICAvLyBCeSByZXR1cm5pbmcgeyBwcm9wczogcG9zdHMgfSwgdGhlIEJsb2cgY29tcG9uZW50XHJcblx0XHQvLyB3aWxsIHJlY2VpdmUgYHBvc3RzYCBhcyBhIHByb3AgYXQgYnVpbGQgdGltZVxyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0cHJvcHM6IHtcclxuXHRcdFx0XHRwb3N0OiB7XHJcblx0XHRcdFx0XHRwaWQ6IHBhcmFtcy5waWQsXHJcblx0XHRcdFx0XHR0aXRsZTogcG9zdC5maWVsZHMudGl0bGUuc3RyaW5nVmFsdWUsXHJcblx0XHRcdFx0XHRibHVyYjogcG9zdC5maWVsZHMuYmx1cmIuc3RyaW5nVmFsdWUsXHJcblx0XHRcdFx0XHRjb250ZW50OiBwb3N0LmZpZWxkcy5jb250ZW50LnN0cmluZ1ZhbHVlLCAvLyBodG1sIGNvbnRlbnQgc2hvdWxkIGJlIHNhbml0aXplZCBiZWZvcmUgdXNpbmcgUmVhY3QncyBkYW5nZXJvdXNseVNldElubmVySFRNTFxyXG5cdFx0XHRcdH0sXHJcbiAgICAgICAgcmV2YWxpZGF0ZTogMTAwMDAsXHJcblx0XHRcdH0sXHJcblx0XHR9O1xyXG5cdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHRcdHJldHVybiB7IHByb3BzOiB7fSB9O1xyXG5cdH1cclxufTtcclxuXHJcbi8vIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwb3N0LmNvbnRlbnQgfX0gLz5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==