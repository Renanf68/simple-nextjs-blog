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

  var user = _ref.user;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy9bcGlkXS50c3giXSwibmFtZXMiOlsiUG9zdCIsInVzZXIiLCJ1c2VSb3V0ZXIiLCJpc0ZhbGxiYWNrIiwicG9zdCIsInRpdGxlIiwiYmx1cmIiLCJfX2h0bWwiLCJjb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBOztBQU1lLFNBQVNBLElBQVQsT0FBd0I7QUFBQTs7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7O0FBQUEsbUJBQ2RDLDZEQUFTLEVBREs7QUFBQSxNQUM3QkMsVUFENkIsY0FDN0JBLFVBRDZCOztBQUVwQyxNQUFJLENBQUNBLFVBQUQsSUFBZSxDQUFDQyxJQUFwQixFQUEwQjtBQUMzQixXQUFPLE1BQUMsaURBQUQ7QUFBTyxnQkFBVSxFQUFFLEdBQW5CO0FBQXdCLFdBQUssRUFBQyxtQ0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFQO0FBQ0E7O0FBQ0EsTUFBSUQsVUFBSixFQUFnQjtBQUNkLFdBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBUDtBQUNEOztBQUNELFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS0MsSUFBSSxDQUFDQyxLQUFWLENBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUlELElBQUksQ0FBQ0UsS0FBVCxDQUZGLEVBR0U7QUFBSywyQkFBdUIsRUFBRTtBQUFFQyxZQUFNLEVBQUVILElBQUksQ0FBQ0k7QUFBZixLQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsQ0FERjtBQU9EOztHQWZ1QlIsSTtVQUNDRSxxRDs7O0tBRERGLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYmxvZy9bcGlkXS41YjJlOTk5Zjk3ZmM0NWQyMDJmNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2V0U3RhdGljUGF0aHMsIEdldFN0YXRpY1Byb3BzIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBFcnJvciBmcm9tIFwibmV4dC9lcnJvclwiO1xyXG5cclxuY29uc3QgRmlyZXN0b3JlQmxvZ1Bvc3RzVVJMID0gYGh0dHBzOi8vZmlyZXN0b3JlLmdvb2dsZWFwaXMuY29tL3YxL3Byb2plY3RzLyR7cHJvY2Vzcy5lbnYuRklSRUJBU0VfUFJPSkVDVF9JRH0vZGF0YWJhc2VzLyhkZWZhdWx0KS9kb2N1bWVudHMvcG9zdHNgO1xyXG5jb25zdCBmZXRjaGVyID0gKHVybCkgPT4gZmV0Y2godXJsKS50aGVuKChyKSA9PiByLmpzb24oKSk7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdCh7IHVzZXIgfSkge1xyXG4gIGNvbnN0IHsgaXNGYWxsYmFjayB9ID0gdXNlUm91dGVyKCk7XHJcbiAgXHRpZiAoIWlzRmFsbGJhY2sgJiYgIXBvc3QpIHtcclxuXHRcdHJldHVybiA8RXJyb3Igc3RhdHVzQ29kZT17NDA0fSB0aXRsZT1cIk5vIEJsb2cgUG9zdCB3aXRoIHRoZSBwcm92aWRlZCBJRFwiIC8+O1xyXG5cdH1cclxuICBpZiAoaXNGYWxsYmFjaykge1xyXG4gICAgcmV0dXJuIDxwPkNhcnJlZ2FuZG8uLi48L3A+O1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgxPntwb3N0LnRpdGxlfTwvaDE+XHJcbiAgICAgIDxwPntwb3N0LmJsdXJifTwvcD5cclxuICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHBvc3QuY29udGVudCB9fSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzOiBHZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHM6IFtdLFxyXG4gICAgZmFsbGJhY2s6IHRydWUsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xyXG4gIGNvbnN0IHsgcGlkIH0gPSBjb250ZXh0LnBhcmFtc1xyXG4gIGNvbnNvbGUubG9nKHBpZClcclxuICB0cnkge1xyXG5cdFx0Ly8gQ2FsbCBhbiBleHRlcm5hbCBBUEkgZW5kcG9pbnQgdG8gZ2V0IHBvc3RzLlxyXG5cdFx0Y29uc3QgcG9zdCA9IGF3YWl0IGZldGNoZXIoYCR7RmlyZXN0b3JlQmxvZ1Bvc3RzVVJMfS8ke3BpZH1gKTsgLy8gZ3JhYnMgdGhlIHdob2xlIGRvY3VtZW50IHdpdGggdGhlIHByb3ZpZGVkIGRvY3VtZW50IGlkIChpbiB0aGlzIGNhc2UgcGlkKVxyXG5cdFx0Y29uc29sZS5sb2cocG9zdClcclxuICAgIC8vIEJ5IHJldHVybmluZyB7IHByb3BzOiBwb3N0cyB9LCB0aGUgQmxvZyBjb21wb25lbnRcclxuXHRcdC8vIHdpbGwgcmVjZWl2ZSBgcG9zdHNgIGFzIGEgcHJvcCBhdCBidWlsZCB0aW1lXHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRwcm9wczoge1xyXG5cdFx0XHRcdHBvc3Q6IHtcclxuXHRcdFx0XHRcdHBpZDogcGFyYW1zLnBpZCxcclxuXHRcdFx0XHRcdHRpdGxlOiBwb3N0LmZpZWxkcy50aXRsZS5zdHJpbmdWYWx1ZSxcclxuXHRcdFx0XHRcdGJsdXJiOiBwb3N0LmZpZWxkcy5ibHVyYi5zdHJpbmdWYWx1ZSxcclxuXHRcdFx0XHRcdGNvbnRlbnQ6IHBvc3QuZmllbGRzLmNvbnRlbnQuc3RyaW5nVmFsdWUsIC8vIGh0bWwgY29udGVudCBzaG91bGQgYmUgc2FuaXRpemVkIGJlZm9yZSB1c2luZyBSZWFjdCdzIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MXHJcblx0XHRcdFx0fSxcclxuICAgICAgICByZXZhbGlkYXRlOiAxMDAwMCxcclxuXHRcdFx0fSxcclxuXHRcdH07XHJcblx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdFx0cmV0dXJuIHsgcHJvcHM6IHt9IH07XHJcblx0fVxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9