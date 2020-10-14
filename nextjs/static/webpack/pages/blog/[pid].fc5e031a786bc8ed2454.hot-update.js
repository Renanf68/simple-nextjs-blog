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


var FirestoreBlogPostsURL = "https://firestore.googleapis.com/v1/projects/".concat("nextjs-teste", "/databases/(default)/documents/posts");
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
        lineNumber: 10,
        columnNumber: 10
      }
    });
  }

  if (isFallback) {
    return __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 12
      }
    }, "Carregando...");
  }

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, post.title), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, post.blurb), __jsx("div", {
    dangerouslySetInnerHTML: {
      __html: post.content
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy9bcGlkXS50c3giXSwibmFtZXMiOlsiRmlyZXN0b3JlQmxvZ1Bvc3RzVVJMIiwicHJvY2VzcyIsIlBvc3QiLCJ1c2VyIiwidXNlUm91dGVyIiwiaXNGYWxsYmFjayIsInBvc3QiLCJ0aXRsZSIsImJsdXJiIiwiX19odG1sIiwiY29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVBLElBQU1BLHFCQUFxQiwwREFBbURDLGNBQW5ELHlDQUEzQjs7QUFFZSxTQUFTQyxJQUFULE9BQXdCO0FBQUE7O0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFROztBQUFBLG1CQUNkQyw2REFBUyxFQURLO0FBQUEsTUFDN0JDLFVBRDZCLGNBQzdCQSxVQUQ2Qjs7QUFFcEMsTUFBSSxDQUFDQSxVQUFELElBQWUsQ0FBQ0MsSUFBcEIsRUFBMEI7QUFDM0IsV0FBTyxNQUFDLGlEQUFEO0FBQU8sZ0JBQVUsRUFBRSxHQUFuQjtBQUF3QixXQUFLLEVBQUMsbUNBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBUDtBQUNBOztBQUNBLE1BQUlELFVBQUosRUFBZ0I7QUFDZCxXQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQVA7QUFDRDs7QUFDRCxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtDLElBQUksQ0FBQ0MsS0FBVixDQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJRCxJQUFJLENBQUNFLEtBQVQsQ0FGRixFQUdFO0FBQUssMkJBQXVCLEVBQUU7QUFBRUMsWUFBTSxFQUFFSCxJQUFJLENBQUNJO0FBQWYsS0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLENBREY7QUFPRDs7R0FmdUJSLEk7VUFDQ0UscUQ7OztLQURERixJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Jsb2cvW3BpZF0uZmM1ZTAzMWE3ODZiYzhlZDI0NTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdldFN0YXRpY1BhdGhzLCBHZXRTdGF0aWNQcm9wcyB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgRXJyb3IgZnJvbSBcIm5leHQvZXJyb3JcIjtcclxuXHJcbmNvbnN0IEZpcmVzdG9yZUJsb2dQb3N0c1VSTCA9IGBodHRwczovL2ZpcmVzdG9yZS5nb29nbGVhcGlzLmNvbS92MS9wcm9qZWN0cy8ke3Byb2Nlc3MuZW52LkZJUkVCQVNFX1BST0pFQ1RfSUR9L2RhdGFiYXNlcy8oZGVmYXVsdCkvZG9jdW1lbnRzL3Bvc3RzYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3QoeyB1c2VyIH0pIHtcclxuICBjb25zdCB7IGlzRmFsbGJhY2sgfSA9IHVzZVJvdXRlcigpO1xyXG4gIFx0aWYgKCFpc0ZhbGxiYWNrICYmICFwb3N0KSB7XHJcblx0XHRyZXR1cm4gPEVycm9yIHN0YXR1c0NvZGU9ezQwNH0gdGl0bGU9XCJObyBCbG9nIFBvc3Qgd2l0aCB0aGUgcHJvdmlkZWQgSURcIiAvPjtcclxuXHR9XHJcbiAgaWYgKGlzRmFsbGJhY2spIHtcclxuICAgIHJldHVybiA8cD5DYXJyZWdhbmRvLi4uPC9wPjtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMT57cG9zdC50aXRsZX08L2gxPlxyXG4gICAgICA8cD57cG9zdC5ibHVyYn08L3A+XHJcbiAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwb3N0LmNvbnRlbnQgfX0gLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRoczogR2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzOiBbXSxcclxuICAgIGZhbGxiYWNrOiB0cnVlLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKGNvbnRleHQpID0+IHtcclxuICBjb25zdCB7IHBpZCB9ID0gY29udGV4dC5wYXJhbXNcclxuICBjb25zb2xlLmxvZyhwaWQpXHJcbiAgLyp0cnkge1xyXG5cdFx0Ly8gQ2FsbCBhbiBleHRlcm5hbCBBUEkgZW5kcG9pbnQgdG8gZ2V0IHBvc3RzLlxyXG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7RmlyZXN0b3JlQmxvZ1Bvc3RzVVJMfS8ke3BpZH1gKTsgLy8gZ3JhYnMgdGhlIHdob2xlIGRvY3VtZW50IHdpdGggdGhlIHByb3ZpZGVkIGRvY3VtZW50IGlkIChpbiB0aGlzIGNhc2UgcGlkKVxyXG5cdFx0Y29uc3QgcG9zdCA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblx0XHRjb25zb2xlLmxvZyhwb3N0KVxyXG4gICAgLy8gQnkgcmV0dXJuaW5nIHsgcHJvcHM6IHBvc3RzIH0sIHRoZSBCbG9nIGNvbXBvbmVudFxyXG5cdFx0Ly8gd2lsbCByZWNlaXZlIGBwb3N0c2AgYXMgYSBwcm9wIGF0IGJ1aWxkIHRpbWVcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHByb3BzOiB7XHJcblx0XHRcdFx0cG9zdDoge1xyXG5cdFx0XHRcdFx0cGlkOiBwYXJhbXMucGlkLFxyXG5cdFx0XHRcdFx0dGl0bGU6IHBvc3QuZmllbGRzLnRpdGxlLnN0cmluZ1ZhbHVlLFxyXG5cdFx0XHRcdFx0Ymx1cmI6IHBvc3QuZmllbGRzLmJsdXJiLnN0cmluZ1ZhbHVlLFxyXG5cdFx0XHRcdFx0Y29udGVudDogcG9zdC5maWVsZHMuY29udGVudC5zdHJpbmdWYWx1ZSwgLy8gaHRtbCBjb250ZW50IHNob3VsZCBiZSBzYW5pdGl6ZWQgYmVmb3JlIHVzaW5nIFJlYWN0J3MgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUxcclxuXHRcdFx0XHR9LFxyXG4gICAgICAgIHJldmFsaWRhdGU6IDEwMDAsXHJcblx0XHRcdH0sXHJcblx0XHR9O1xyXG5cdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHRcdHJldHVybiB7IHByb3BzOiB7fSB9O1xyXG5cdH0qL1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9