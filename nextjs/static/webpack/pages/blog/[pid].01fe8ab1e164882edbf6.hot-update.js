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
  }, post.blurb), __jsx("div", {
    dangerouslySetInnerHTML: {
      __html: post.content
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }));
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy9bcGlkXS50c3giXSwibmFtZXMiOlsiUG9zdCIsInBvc3QiLCJ1c2VSb3V0ZXIiLCJpc0ZhbGxiYWNrIiwidGl0bGUiLCJibHVyYiIsIl9faHRtbCIsImNvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7O0FBTWUsU0FBU0EsSUFBVCxPQUF3QjtBQUFBOztBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTs7QUFBQSxtQkFDZEMsNkRBQVMsRUFESztBQUFBLE1BQzdCQyxVQUQ2QixjQUM3QkEsVUFENkI7O0FBRXBDLE1BQUksQ0FBQ0EsVUFBRCxJQUFlLENBQUNGLElBQXBCLEVBQTBCO0FBQzNCLFdBQU8sTUFBQyxpREFBRDtBQUFPLGdCQUFVLEVBQUUsR0FBbkI7QUFBd0IsV0FBSyxFQUFDLG1DQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQVA7QUFDQTs7QUFDQSxNQUFJRSxVQUFKLEVBQWdCO0FBQ2QsV0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUFQO0FBQ0Q7O0FBQ0QsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLRixJQUFJLENBQUNHLEtBQVYsQ0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSUgsSUFBSSxDQUFDSSxLQUFULENBRkYsRUFHRTtBQUFLLDJCQUF1QixFQUFFO0FBQUVDLFlBQU0sRUFBRUwsSUFBSSxDQUFDTTtBQUFmLEtBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixDQURGO0FBT0Q7O0dBZnVCUCxJO1VBQ0NFLHFEOzs7S0FEREYsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ibG9nL1twaWRdLjAxZmU4YWIxZTE2NDg4MmVkYmY2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHZXRTdGF0aWNQYXRocywgR2V0U3RhdGljUHJvcHMgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IEVycm9yIGZyb20gXCJuZXh0L2Vycm9yXCI7XHJcblxyXG5jb25zdCBGaXJlc3RvcmVCbG9nUG9zdHNVUkwgPSBgaHR0cHM6Ly9maXJlc3RvcmUuZ29vZ2xlYXBpcy5jb20vdjEvcHJvamVjdHMvJHtwcm9jZXNzLmVudi5GSVJFQkFTRV9QUk9KRUNUX0lEfS9kYXRhYmFzZXMvKGRlZmF1bHQpL2RvY3VtZW50cy9wb3N0c2A7XHJcbmNvbnN0IGZldGNoZXIgPSAodXJsKSA9PiBmZXRjaCh1cmwpLnRoZW4oKHIpID0+IHIuanNvbigpKTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0KHsgcG9zdCB9KSB7XHJcbiAgY29uc3QgeyBpc0ZhbGxiYWNrIH0gPSB1c2VSb3V0ZXIoKTtcclxuICBcdGlmICghaXNGYWxsYmFjayAmJiAhcG9zdCkge1xyXG5cdFx0cmV0dXJuIDxFcnJvciBzdGF0dXNDb2RlPXs0MDR9IHRpdGxlPVwiTm8gQmxvZyBQb3N0IHdpdGggdGhlIHByb3ZpZGVkIElEXCIgLz47XHJcblx0fVxyXG4gIGlmIChpc0ZhbGxiYWNrKSB7XHJcbiAgICByZXR1cm4gPHA+Q2FycmVnYW5kby4uLjwvcD47XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDE+e3Bvc3QudGl0bGV9PC9oMT5cclxuICAgICAgPHA+e3Bvc3QuYmx1cmJ9PC9wPlxyXG4gICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcG9zdC5jb250ZW50IH19IC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHM6IEdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBwYXRoczogW10sXHJcbiAgICBmYWxsYmFjazogdHJ1ZSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jICh7cGFyYW1zfSkgPT4ge1xyXG4gIHRyeSB7XHJcblx0XHQvLyBDYWxsIGFuIGV4dGVybmFsIEFQSSBlbmRwb2ludCB0byBnZXQgcG9zdHMuXHJcblx0XHRjb25zdCBwb3N0ID0gYXdhaXQgZmV0Y2hlcihgJHtGaXJlc3RvcmVCbG9nUG9zdHNVUkx9LyR7cGFyYW1zLnBpZH1gKTsgLy8gZ3JhYnMgdGhlIHdob2xlIGRvY3VtZW50IHdpdGggdGhlIHByb3ZpZGVkIGRvY3VtZW50IGlkIChpbiB0aGlzIGNhc2UgcGlkKVxyXG5cdFx0Y29uc29sZS5sb2cocG9zdClcclxuICAgIC8vIEJ5IHJldHVybmluZyB7IHByb3BzOiBwb3N0cyB9LCB0aGUgQmxvZyBjb21wb25lbnRcclxuXHRcdC8vIHdpbGwgcmVjZWl2ZSBgcG9zdHNgIGFzIGEgcHJvcCBhdCBidWlsZCB0aW1lXHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRwcm9wczoge1xyXG5cdFx0XHRcdHBvc3Q6IHtcclxuXHRcdFx0XHRcdHBpZDogcGFyYW1zLnBpZCxcclxuXHRcdFx0XHRcdHRpdGxlOiBwb3N0LmZpZWxkcy50aXRsZS5zdHJpbmdWYWx1ZSxcclxuXHRcdFx0XHRcdGJsdXJiOiBwb3N0LmZpZWxkcy5ibHVyYi5zdHJpbmdWYWx1ZSxcclxuXHRcdFx0XHRcdGNvbnRlbnQ6IHBvc3QuZmllbGRzLmNvbnRlbnQuc3RyaW5nVmFsdWUsIC8vIGh0bWwgY29udGVudCBzaG91bGQgYmUgc2FuaXRpemVkIGJlZm9yZSB1c2luZyBSZWFjdCdzIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MXHJcblx0XHRcdFx0fSxcclxuICAgICAgICByZXZhbGlkYXRlOiAxMDAwMCxcclxuXHRcdFx0fSxcclxuXHRcdH07XHJcblx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdFx0cmV0dXJuIHsgcHJvcHM6IHt9IH07XHJcblx0fVxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9