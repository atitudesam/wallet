/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "../node_modules/next/app.js":
/*!***********************************!*\
  !*** ../node_modules/next/app.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__(/*! ./dist/pages/_app */ \"../node_modules/next/dist/pages/_app.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vbm9kZV9tb2R1bGVzL25leHQvYXBwLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBLHdHQUE2QyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanM/ODEyMiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9wYWdlcy9fYXBwJylcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../node_modules/next/app.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ \"../node_modules/next/app.js\");\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_base_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/base.css */ \"./assets/base.css\");\n/* harmony import */ var _assets_base_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_base_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux */ \"./redux/index.js\");\n/* harmony import */ var _redux_actions_errorActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/actions/errorActions */ \"./redux/actions/errorActions.js\");\n\n\n\n\n\nclass MyApp extends (next_app__WEBPACK_IMPORTED_MODULE_1___default()) {\n    static async getInitialProps({ Component , ctx  }) {\n        ctx.store.dispatch((0,_redux_actions_errorActions__WEBPACK_IMPORTED_MODULE_4__.removeError)());\n        return {\n            pageProps: {\n                ...Component.getInitialProps ? await Component.getInitialProps(ctx) : {}\n            }\n        };\n    }\n    render() {\n        const { Component , pageProps  } = this.props;\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/mubashirsiddiqui/Projects/mubaggresive/wallet/frontend/pages/_app.js\",\n            lineNumber: 20,\n            columnNumber: 12\n        }, this));\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_redux__WEBPACK_IMPORTED_MODULE_3__.wrapper.withRedux(MyApp));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDQztBQUNPO0FBQ3lCO01BRXJERyxLQUFLLFNBQVNILGlEQUFHO2lCQUNSSSxlQUFlLENBQUMsQ0FBQyxDQUFDQyxTQUFTLEdBQUVDLEdBQUcsRUFBQyxDQUFDLEVBQUUsQ0FBQztRQUNoREEsR0FBRyxDQUFDQyxLQUFLLENBQUNDLFFBQVEsQ0FBQ04sd0VBQVc7UUFDOUIsTUFBTSxDQUFDLENBQUM7WUFDTk8sU0FBUyxFQUFFLENBQUM7bUJBQ05KLFNBQVMsQ0FBQ0QsZUFBZSxHQUN6QixLQUFLLENBQUNDLFNBQVMsQ0FBQ0QsZUFBZSxDQUFDRSxHQUFHLElBQ25DLENBQUMsQ0FBQztZQUNSLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVESSxNQUFNLEdBQUcsQ0FBQztRQUNSLEtBQUssQ0FBQyxDQUFDLENBQUNMLFNBQVMsR0FBRUksU0FBUyxFQUFDLENBQUMsR0FBRyxJQUFJLENBQUNFLEtBQUs7UUFDM0MsTUFBTSw2RUFBRU4sU0FBUztlQUFLSSxTQUFTOzs7Ozs7SUFDakMsQ0FBQzs7QUFHSCxpRUFBZVIscURBQWlCLENBQUNFLEtBQUssQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHAgZnJvbSAnbmV4dC9hcHAnO1xuaW1wb3J0ICcuLi9hc3NldHMvYmFzZS5jc3MnO1xuaW1wb3J0IHsgd3JhcHBlciB9IGZyb20gJy4uL3JlZHV4JztcbmltcG9ydCB7IHJlbW92ZUVycm9yIH0gZnJvbSAnLi4vcmVkdXgvYWN0aW9ucy9lcnJvckFjdGlvbnMnO1xuXG5jbGFzcyBNeUFwcCBleHRlbmRzIEFwcCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyBDb21wb25lbnQsIGN0eCB9KSB7XG4gICAgY3R4LnN0b3JlLmRpc3BhdGNoKHJlbW92ZUVycm9yKCkpO1xuICAgIHJldHVybiB7XG4gICAgICBwYWdlUHJvcHM6IHtcbiAgICAgICAgLi4uKENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgICAgICAgICA/IGF3YWl0IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuICAgICAgICAgIDoge30pLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz47XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoTXlBcHApO1xuIl0sIm5hbWVzIjpbIkFwcCIsIndyYXBwZXIiLCJyZW1vdmVFcnJvciIsIk15QXBwIiwiZ2V0SW5pdGlhbFByb3BzIiwiQ29tcG9uZW50IiwiY3R4Iiwic3RvcmUiLCJkaXNwYXRjaCIsInBhZ2VQcm9wcyIsInJlbmRlciIsInByb3BzIiwid2l0aFJlZHV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./redux/actions/errorActions.js":
/*!***************************************!*\
  !*** ./redux/actions/errorActions.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createError\": () => (/* binding */ createError),\n/* harmony export */   \"removeError\": () => (/* binding */ removeError),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _types_errorTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/errorTypes */ \"./redux/types/errorTypes.js\");\n\nconst createError = (message)=>{\n    return (dispatch)=>{\n        dispatch({\n            type: _types_errorTypes__WEBPACK_IMPORTED_MODULE_0__.ERROR,\n            payload: message\n        });\n    };\n};\nconst removeError = ()=>{\n    return (dispatch)=>{\n        dispatch({\n            type: _types_errorTypes__WEBPACK_IMPORTED_MODULE_0__.REMOVE_ERROR\n        });\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    createError,\n    removeError\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9hY3Rpb25zL2Vycm9yQWN0aW9ucy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXlEO0FBRWxELEtBQUssQ0FBQ0UsV0FBVyxJQUFHQyxPQUFPLEdBQUksQ0FBQztJQUNyQyxNQUFNLEVBQUNDLFFBQVEsR0FBSSxDQUFDO1FBQ2xCQSxRQUFRLENBQUMsQ0FBQztZQUFDQyxJQUFJLEVBQUVMLG9EQUFLO1lBQUVNLE9BQU8sRUFBRUgsT0FBTztRQUFDLENBQUM7SUFDNUMsQ0FBQztBQUNILENBQUM7QUFFTSxLQUFLLENBQUNJLFdBQVcsT0FBUyxDQUFDO0lBQ2hDLE1BQU0sRUFBQ0gsUUFBUSxHQUFJLENBQUM7UUFDbEJBLFFBQVEsQ0FBQyxDQUFDO1lBQUNDLElBQUksRUFBRUosMkRBQVk7UUFBQyxDQUFDO0lBQ2pDLENBQUM7QUFDSCxDQUFDO0FBRUQsaUVBQWUsQ0FBQztJQUNkQyxXQUFXO0lBQ1hLLFdBQVc7QUFDYixDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zL2Vycm9yQWN0aW9ucy5qcz8wMDUxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVSUk9SLCBSRU1PVkVfRVJST1IgfSBmcm9tICcuLi90eXBlcy9lcnJvclR5cGVzJztcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUVycm9yID0gbWVzc2FnZSA9PiB7XG4gIHJldHVybiBkaXNwYXRjaCA9PiB7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiBFUlJPUiwgcGF5bG9hZDogbWVzc2FnZSB9KTtcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCByZW1vdmVFcnJvciA9ICgpID0+IHtcbiAgcmV0dXJuIGRpc3BhdGNoID0+IHtcbiAgICBkaXNwYXRjaCh7IHR5cGU6IFJFTU9WRV9FUlJPUiB9KTtcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY3JlYXRlRXJyb3IsXG4gIHJlbW92ZUVycm9yLFxufTtcbiJdLCJuYW1lcyI6WyJFUlJPUiIsIlJFTU9WRV9FUlJPUiIsImNyZWF0ZUVycm9yIiwibWVzc2FnZSIsImRpc3BhdGNoIiwidHlwZSIsInBheWxvYWQiLCJyZW1vdmVFcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./redux/actions/errorActions.js\n");

/***/ }),

/***/ "./redux/index.js":
/*!************************!*\
  !*** ./redux/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"wrapper\": () => (/* binding */ wrapper)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers */ \"./redux/reducers/index.js\");\n\n\n\n\nconst initStore = ()=>{\n    return (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(_reducers__WEBPACK_IMPORTED_MODULE_3__[\"default\"], (0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)((redux_thunk__WEBPACK_IMPORTED_MODULE_2___default())));\n};\nconst wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__.createWrapper)(initStore, {\n    debug: false\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFvRDtBQUNGO0FBQ25CO0FBQ0M7QUFFaEMsS0FBSyxDQUFDSyxTQUFTLE9BQVMsQ0FBQztJQUN2QixNQUFNLENBQUNMLGtEQUFXLENBQUNJLGlEQUFPLEVBQUVILHNEQUFlLENBQUNFLG9EQUFLO0FBQ25ELENBQUM7QUFFTSxLQUFLLENBQUNHLE9BQU8sR0FBR0osaUVBQWEsQ0FBQ0csU0FBUyxFQUFFLENBQUM7SUFBQ0UsS0FBSyxFQUFFLEtBQUs7QUFBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVkdXgvaW5kZXguanM/NDdiNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi9yZWR1Y2Vycyc7XG5cbmNvbnN0IGluaXRTdG9yZSA9ICgpID0+IHtcbiAgcmV0dXJuIGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGFwcGx5TWlkZGxld2FyZSh0aHVuaykpO1xufTtcblxuZXhwb3J0IGNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKGluaXRTdG9yZSwgeyBkZWJ1ZzogZmFsc2UgfSk7XG4iXSwibmFtZXMiOlsiY3JlYXRlU3RvcmUiLCJhcHBseU1pZGRsZXdhcmUiLCJjcmVhdGVXcmFwcGVyIiwidGh1bmsiLCJyZWR1Y2VyIiwiaW5pdFN0b3JlIiwid3JhcHBlciIsImRlYnVnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./redux/index.js\n");

/***/ }),

/***/ "./redux/reducers/authReducer.js":
/*!***************************************!*\
  !*** ./redux/reducers/authReducer.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _types_authTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/authTypes */ \"./redux/types/authTypes.js\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst initialState = {\n    token: null\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((state = initialState, action)=>{\n    switch(action.type){\n        case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__.HYDRATE:\n            return {\n                ...state,\n                ...action.payload.authentication\n            };\n        case _types_authTypes__WEBPACK_IMPORTED_MODULE_0__.AUTHENTICATE:\n            return {\n                ...state,\n                token: action.payload\n            };\n        case _types_authTypes__WEBPACK_IMPORTED_MODULE_0__.DEAUTHENTICATE:\n            return {\n                ...state,\n                token: null\n            };\n        default:\n            return state;\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9yZWR1Y2Vycy9hdXRoUmVkdWNlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWlFO0FBQ3JCO0FBRTVDLEtBQUssQ0FBQ0csWUFBWSxHQUFHLENBQUM7SUFDcEJDLEtBQUssRUFBRSxJQUFJO0FBQ2IsQ0FBQztBQUVELGlFQUFnQixDQUFBQyxLQUFLLEdBQUdGLFlBQVksRUFBRUcsTUFBTSxHQUFLLENBQUM7SUFDaEQsTUFBTSxDQUFFQSxNQUFNLENBQUNDLElBQUk7UUFDakIsSUFBSSxDQUFDTCx1REFBTztZQUNWLE1BQU0sQ0FBQyxDQUFDO21CQUFJRyxLQUFLO21CQUFLQyxNQUFNLENBQUNFLE9BQU8sQ0FBQ0MsY0FBYztZQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDVCwwREFBWTtZQUNmLE1BQU0sQ0FBQyxDQUFDO21CQUFJSyxLQUFLO2dCQUFFRCxLQUFLLEVBQUVFLE1BQU0sQ0FBQ0UsT0FBTztZQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDUCw0REFBYztZQUNqQixNQUFNLENBQUMsQ0FBQzttQkFBSUksS0FBSztnQkFBRUQsS0FBSyxFQUFFLElBQUk7WUFBQyxDQUFDOztZQUVoQyxNQUFNLENBQUNDLEtBQUs7O0FBRWxCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy9hdXRoUmVkdWNlci5qcz8yZjcxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFVVEhFTlRJQ0FURSwgREVBVVRIRU5USUNBVEUgfSBmcm9tICcuLi90eXBlcy9hdXRoVHlwZXMnO1xuaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgdG9rZW46IG51bGwsXG59O1xuXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBIWURSQVRFOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIC4uLmFjdGlvbi5wYXlsb2FkLmF1dGhlbnRpY2F0aW9uIH07XG4gICAgY2FzZSBBVVRIRU5USUNBVEU6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgdG9rZW46IGFjdGlvbi5wYXlsb2FkIH07XG4gICAgY2FzZSBERUFVVEhFTlRJQ0FURTpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB0b2tlbjogbnVsbCB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG4iXSwibmFtZXMiOlsiQVVUSEVOVElDQVRFIiwiREVBVVRIRU5USUNBVEUiLCJIWURSQVRFIiwiaW5pdGlhbFN0YXRlIiwidG9rZW4iLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJwYXlsb2FkIiwiYXV0aGVudGljYXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./redux/reducers/authReducer.js\n");

/***/ }),

/***/ "./redux/reducers/errorReducer.js":
/*!****************************************!*\
  !*** ./redux/reducers/errorReducer.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _types_errorTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/errorTypes */ \"./redux/types/errorTypes.js\");\n\nconst initialState = {\n    message: null\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((state = initialState, action)=>{\n    switch(action.type){\n        case _types_errorTypes__WEBPACK_IMPORTED_MODULE_0__.ERROR:\n            return {\n                ...state,\n                message: action.payload\n            };\n        case _types_errorTypes__WEBPACK_IMPORTED_MODULE_0__.REMOVE_ERROR:\n            return {\n                ...state,\n                message: null\n            };\n        default:\n            return state;\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9yZWR1Y2Vycy9lcnJvclJlZHVjZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBeUQ7QUFFekQsS0FBSyxDQUFDRSxZQUFZLEdBQUcsQ0FBQztJQUNwQkMsT0FBTyxFQUFFLElBQUk7QUFDZixDQUFDO0FBRUQsaUVBQWdCLENBQUFDLEtBQUssR0FBR0YsWUFBWSxFQUFFRyxNQUFNLEdBQUssQ0FBQztJQUNoRCxNQUFNLENBQUVBLE1BQU0sQ0FBQ0MsSUFBSTtRQUNqQixJQUFJLENBQUNOLG9EQUFLO1lBQ1IsTUFBTSxDQUFDLENBQUM7bUJBQUlJLEtBQUs7Z0JBQUVELE9BQU8sRUFBRUUsTUFBTSxDQUFDRSxPQUFPO1lBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUNOLDJEQUFZO1lBQ2YsTUFBTSxDQUFDLENBQUM7bUJBQUlHLEtBQUs7Z0JBQUVELE9BQU8sRUFBRSxJQUFJO1lBQUMsQ0FBQzs7WUFFbEMsTUFBTSxDQUFDQyxLQUFLOztBQUVsQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVkdXgvcmVkdWNlcnMvZXJyb3JSZWR1Y2VyLmpzP2U4ZDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRVJST1IsIFJFTU9WRV9FUlJPUiB9IGZyb20gJy4uL3R5cGVzL2Vycm9yVHlwZXMnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIG1lc3NhZ2U6IG51bGwsXG59O1xuXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBFUlJPUjpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBtZXNzYWdlOiBhY3Rpb24ucGF5bG9hZCB9O1xuICAgIGNhc2UgUkVNT1ZFX0VSUk9SOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIG1lc3NhZ2U6IG51bGwgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuIl0sIm5hbWVzIjpbIkVSUk9SIiwiUkVNT1ZFX0VSUk9SIiwiaW5pdGlhbFN0YXRlIiwibWVzc2FnZSIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./redux/reducers/errorReducer.js\n");

/***/ }),

/***/ "./redux/reducers/index.js":
/*!*********************************!*\
  !*** ./redux/reducers/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _authReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authReducer */ \"./redux/reducers/authReducer.js\");\n/* harmony import */ var _errorReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./errorReducer */ \"./redux/reducers/errorReducer.js\");\n\n\n\nconst rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({\n    authentication: _authReducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    error: _errorReducer__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rootReducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9yZWR1Y2Vycy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF1QztBQUNBO0FBQ0U7QUFFekMsS0FBSyxDQUFDRyxXQUFXLEdBQUdILHNEQUFlLENBQUMsQ0FBQztJQUNuQ0ksY0FBYyxFQUFFSCxvREFBVztJQUMzQkksS0FBSyxFQUFFSCxxREFBWTtBQUNyQixDQUFDO0FBRUQsaUVBQWVDLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3JlZHV4L3JlZHVjZXJzL2luZGV4LmpzP2ZjNjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IGF1dGhSZWR1Y2VyIGZyb20gJy4vYXV0aFJlZHVjZXInO1xuaW1wb3J0IGVycm9yUmVkdWNlciBmcm9tICcuL2Vycm9yUmVkdWNlcic7XG5cbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgYXV0aGVudGljYXRpb246IGF1dGhSZWR1Y2VyLFxuICBlcnJvcjogZXJyb3JSZWR1Y2VyLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xuIl0sIm5hbWVzIjpbImNvbWJpbmVSZWR1Y2VycyIsImF1dGhSZWR1Y2VyIiwiZXJyb3JSZWR1Y2VyIiwicm9vdFJlZHVjZXIiLCJhdXRoZW50aWNhdGlvbiIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./redux/reducers/index.js\n");

/***/ }),

/***/ "./redux/types/authTypes.js":
/*!**********************************!*\
  !*** ./redux/types/authTypes.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AUTHENTICATE\": () => (/* binding */ AUTHENTICATE),\n/* harmony export */   \"DEAUTHENTICATE\": () => (/* binding */ DEAUTHENTICATE)\n/* harmony export */ });\nconst AUTHENTICATE = 'AUTHENTICATE';\nconst DEAUTHENTICATE = 'DEAUTHENTICATE';\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC90eXBlcy9hdXRoVHlwZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBTyxLQUFLLENBQUNBLFlBQVksR0FBRyxDQUFjO0FBQ25DLEtBQUssQ0FBQ0MsY0FBYyxHQUFHLENBQWdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVkdXgvdHlwZXMvYXV0aFR5cGVzLmpzPzFiMDgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEFVVEhFTlRJQ0FURSA9ICdBVVRIRU5USUNBVEUnO1xuZXhwb3J0IGNvbnN0IERFQVVUSEVOVElDQVRFID0gJ0RFQVVUSEVOVElDQVRFJztcbiJdLCJuYW1lcyI6WyJBVVRIRU5USUNBVEUiLCJERUFVVEhFTlRJQ0FURSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./redux/types/authTypes.js\n");

/***/ }),

/***/ "./redux/types/errorTypes.js":
/*!***********************************!*\
  !*** ./redux/types/errorTypes.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ERROR\": () => (/* binding */ ERROR),\n/* harmony export */   \"REMOVE_ERROR\": () => (/* binding */ REMOVE_ERROR)\n/* harmony export */ });\nconst ERROR = 'ERROR';\nconst REMOVE_ERROR = 'REMOVE_ERROR';\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC90eXBlcy9lcnJvclR5cGVzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQU8sS0FBSyxDQUFDQSxLQUFLLEdBQUcsQ0FBTztBQUNyQixLQUFLLENBQUNDLFlBQVksR0FBRyxDQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVkdXgvdHlwZXMvZXJyb3JUeXBlcy5qcz8zZmU1Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBFUlJPUiA9ICdFUlJPUic7XG5leHBvcnQgY29uc3QgUkVNT1ZFX0VSUk9SID0gJ1JFTU9WRV9FUlJPUic7XG4iXSwibmFtZXMiOlsiRVJST1IiLCJSRU1PVkVfRVJST1IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./redux/types/errorTypes.js\n");

/***/ }),

/***/ "../node_modules/next/dist/pages/_app.js":
/*!***********************************************!*\
  !*** ../node_modules/next/dist/pages/_app.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nObject.defineProperty(exports, \"AppInitialProps\", ({\n    enumerable: true,\n    get: function() {\n        return _utils.AppInitialProps;\n    }\n}));\nObject.defineProperty(exports, \"NextWebVitalsMetric\", ({\n    enumerable: true,\n    get: function() {\n        return _utils.NextWebVitalsMetric;\n    }\n}));\nexports[\"default\"] = void 0;\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\nvar _utils = __webpack_require__(/*! ../shared/lib/utils */ \"../shared/lib/utils\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : {\n        default: obj\n    };\n}\nfunction _appGetInitialProps() {\n    _appGetInitialProps = /**\n * `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.\n * This allows for keeping state between navigation, custom error handling, injecting additional data.\n */ _asyncToGenerator(function*({ Component , ctx  }) {\n        const pageProps = yield (0, _utils).loadGetInitialProps(Component, ctx);\n        return {\n            pageProps\n        };\n    });\n    return _appGetInitialProps.apply(this, arguments);\n}\nfunction appGetInitialProps(_) {\n    return _appGetInitialProps.apply(this, arguments);\n}\nclass App extends _react.default.Component {\n    render() {\n        const { Component , pageProps  } = this.props;\n        return(/*#__PURE__*/ _react.default.createElement(Component, Object.assign({}, pageProps)));\n    }\n}\nApp.origGetInitialProps = appGetInitialProps;\nApp.getInitialProps = appGetInitialProps;\nexports[\"default\"] = App; //# sourceMappingURL=_app.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFZO0FBQ1pBLDhDQUE2QyxDQUFDO0lBQzFDRyxLQUFLLEVBQUUsSUFBSTtBQUNmLENBQUMsRUFBQztBQUNGSCxtREFBa0QsQ0FBQztJQUMvQ0ksVUFBVSxFQUFFLElBQUk7SUFDaEJDLEdBQUcsRUFBRSxRQUFRLEdBQUcsQ0FBQztRQUNiLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDQyxlQUFlO0lBQ2pDLENBQUM7QUFDTCxDQUFDLEVBQUM7QUFDRlAsdURBQXNELENBQUM7SUFDbkRJLFVBQVUsRUFBRSxJQUFJO0lBQ2hCQyxHQUFHLEVBQUUsUUFBUSxHQUFHLENBQUM7UUFDYixNQUFNLENBQUNDLE1BQU0sQ0FBQ0UsbUJBQW1CO0lBQ3JDLENBQUM7QUFDTCxDQUFDLEVBQUM7QUFDRk4sa0JBQWUsR0FBRyxJQUFJLENBQUMsQ0FBQztBQUN4QixHQUFHLENBQUNRLE1BQU0sR0FBR0Msc0JBQXNCLENBQUNDLG1CQUFPLENBQUMsb0JBQU87QUFDbkQsR0FBRyxDQUFDTixNQUFNLEdBQUdNLG1CQUFPLENBQUMsZ0RBQXFCO1NBQ2pDQyxrQkFBa0IsQ0FBQ0MsR0FBRyxFQUFFQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxNQUFNLEVBQUVDLEdBQUcsRUFBRUMsR0FBRyxFQUFFLENBQUM7SUFDeEUsR0FBRyxDQUFDLENBQUM7UUFDRCxHQUFHLENBQUNDLElBQUksR0FBR1AsR0FBRyxDQUFDSyxHQUFHLEVBQUVDLEdBQUc7UUFDdkIsR0FBRyxDQUFDakIsS0FBSyxHQUFHa0IsSUFBSSxDQUFDbEIsS0FBSztJQUMxQixDQUFDLENBQUMsS0FBSyxFQUFFbUIsS0FBSyxFQUFFLENBQUM7UUFDYk4sTUFBTSxDQUFDTSxLQUFLO1FBQ1osTUFBTTtJQUNWLENBQUM7SUFDRCxFQUFFLEVBQUVELElBQUksQ0FBQ0UsSUFBSSxFQUFFLENBQUM7UUFDWlIsT0FBTyxDQUFDWixLQUFLO0lBQ2pCLENBQUMsTUFBTSxDQUFDO1FBQ0pxQixPQUFPLENBQUNULE9BQU8sQ0FBQ1osS0FBSyxFQUFFc0IsSUFBSSxDQUFDUixLQUFLLEVBQUVDLE1BQU07SUFDN0MsQ0FBQztBQUNMLENBQUM7U0FDUVEsaUJBQWlCLENBQUNDLEVBQUUsRUFBRSxDQUFDO0lBQzVCLE1BQU0sQ0FBQyxRQUFRLEdBQUcsQ0FBQztRQUNmLEdBQUcsQ0FBQ0MsSUFBSSxHQUFHLElBQUksRUFBRUMsSUFBSSxHQUFHQyxTQUFTO1FBQ2pDLE1BQU0sQ0FBQyxHQUFHLENBQUNOLE9BQU8sQ0FBQyxRQUFRLENBQUNULE9BQU8sRUFBRUMsTUFBTSxFQUFFLENBQUM7WUFDMUMsR0FBRyxDQUFDRixHQUFHLEdBQUdhLEVBQUUsQ0FBQ0ksS0FBSyxDQUFDSCxJQUFJLEVBQUVDLElBQUk7cUJBQ3BCWixLQUFLLENBQUNkLEtBQUssRUFBRSxDQUFDO2dCQUNuQlUsa0JBQWtCLENBQUNDLEdBQUcsRUFBRUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLEtBQUssRUFBRUMsTUFBTSxFQUFFLENBQU0sT0FBRWYsS0FBSztZQUN6RSxDQUFDO3FCQUNRZSxNQUFNLENBQUNjLEdBQUcsRUFBRSxDQUFDO2dCQUNsQm5CLGtCQUFrQixDQUFDQyxHQUFHLEVBQUVDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRSxDQUFPLFFBQUVjLEdBQUc7WUFDeEUsQ0FBQztZQUNEZixLQUFLLENBQUNnQixTQUFTO1FBQ25CLENBQUM7SUFDTCxDQUFDO0FBQ0wsQ0FBQztTQUNRdEIsc0JBQXNCLENBQUN1QixHQUFHLEVBQUUsQ0FBQztJQUNsQyxNQUFNLENBQUNBLEdBQUcsSUFBSUEsR0FBRyxDQUFDQyxVQUFVLEdBQUdELEdBQUcsR0FBRyxDQUFDO1FBQ2xDekIsT0FBTyxFQUFFeUIsR0FBRztJQUNoQixDQUFDO0FBQ0wsQ0FBQztTQUNRRSxtQkFBbUIsR0FBRyxDQUFDO0lBQzVCQSxtQkFBbUIsR0FBRyxFQUd2Qjs7O0NBQUEsR0FBQ1YsaUJBQWlCLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQ1csU0FBUyxHQUFHQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDL0MsS0FBSyxDQUFDQyxTQUFTLFVBQVUsQ0FBQyxFQUFFakMsTUFBTSxFQUFFa0MsbUJBQW1CLENBQUNILFNBQVMsRUFBRUMsR0FBRztRQUN0RSxNQUFNLENBQUMsQ0FBQztZQUNKQyxTQUFTO1FBQ2IsQ0FBQztJQUNMLENBQUM7SUFDRCxNQUFNLENBQUNILG1CQUFtQixDQUFDTCxLQUFLLENBQUMsSUFBSSxFQUFFRCxTQUFTO0FBQ3BELENBQUM7U0FDUVcsa0JBQWtCLENBQUNDLENBQUMsRUFBRSxDQUFDO0lBQzVCLE1BQU0sQ0FBQ04sbUJBQW1CLENBQUNMLEtBQUssQ0FBQyxJQUFJLEVBQUVELFNBQVM7QUFDcEQsQ0FBQztNQUNLYSxHQUFHLFNBQVNqQyxNQUFNLENBQUNELE9BQU8sQ0FBQzRCLFNBQVM7SUFDdENPLE1BQU0sR0FBRyxDQUFDO1FBQ04sS0FBSyxDQUFDLENBQUMsQ0FBQ1AsU0FBUyxHQUFHRSxTQUFTLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQ00sS0FBSztRQUM3QyxNQUFNLENBQUMsRUFBYSxZQUFDbkMsTUFBTSxDQUFDRCxPQUFPLENBQUNxQyxhQUFhLENBQUNULFNBQVMsRUFBRXJDLE1BQU0sQ0FBQytDLE1BQU0sQ0FBQyxDQUFDLENBQzNFLEVBQUVSLFNBQVM7SUFDaEIsQ0FBQzs7QUFFTEksR0FBRyxDQUFDSyxtQkFBbUIsR0FBR1Asa0JBQWtCO0FBQzVDRSxHQUFHLENBQUNNLGVBQWUsR0FBR1Isa0JBQWtCO0FBQ3hDdkMsa0JBQWUsR0FBR3lDLEdBQUcsQ0FFckIsQ0FBZ0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9wYWdlcy9fYXBwLmpzPzFlZjkiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJBcHBJbml0aWFsUHJvcHNcIiwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF91dGlscy5BcHBJbml0aWFsUHJvcHM7XG4gICAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJOZXh0V2ViVml0YWxzTWV0cmljXCIsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfdXRpbHMuTmV4dFdlYlZpdGFsc01ldHJpYztcbiAgICB9XG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4uL3NoYXJlZC9saWIvdXRpbHNcIik7XG5mdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgICAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgICByZXNvbHZlKHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gICAgfVxufVxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcywgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgICAgICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgICAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgICAgICB9KTtcbiAgICB9O1xufVxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuZnVuY3Rpb24gX2FwcEdldEluaXRpYWxQcm9wcygpIHtcbiAgICBfYXBwR2V0SW5pdGlhbFByb3BzID0gLyoqXG4gKiBgQXBwYCBjb21wb25lbnQgaXMgdXNlZCBmb3IgaW5pdGlhbGl6ZSBvZiBwYWdlcy4gSXQgYWxsb3dzIGZvciBvdmVyd3JpdGluZyBhbmQgZnVsbCBjb250cm9sIG9mIHRoZSBgcGFnZWAgaW5pdGlhbGl6YXRpb24uXG4gKiBUaGlzIGFsbG93cyBmb3Iga2VlcGluZyBzdGF0ZSBiZXR3ZWVuIG5hdmlnYXRpb24sIGN1c3RvbSBlcnJvciBoYW5kbGluZywgaW5qZWN0aW5nIGFkZGl0aW9uYWwgZGF0YS5cbiAqLyBfYXN5bmNUb0dlbmVyYXRvcihmdW5jdGlvbiooeyBDb21wb25lbnQgLCBjdHggIH0pIHtcbiAgICAgICAgY29uc3QgcGFnZVByb3BzID0geWllbGQgKDAsIF91dGlscykubG9hZEdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIGN0eCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwYWdlUHJvcHNcbiAgICAgICAgfTtcbiAgICB9KTtcbiAgICByZXR1cm4gX2FwcEdldEluaXRpYWxQcm9wcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuZnVuY3Rpb24gYXBwR2V0SW5pdGlhbFByb3BzKF8pIHtcbiAgICByZXR1cm4gX2FwcEdldEluaXRpYWxQcm9wcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuY2xhc3MgQXBwIGV4dGVuZHMgX3JlYWN0LmRlZmF1bHQuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgQ29tcG9uZW50ICwgcGFnZVByb3BzICB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICB9LCBwYWdlUHJvcHMpKSk7XG4gICAgfVxufVxuQXBwLm9yaWdHZXRJbml0aWFsUHJvcHMgPSBhcHBHZXRJbml0aWFsUHJvcHM7XG5BcHAuZ2V0SW5pdGlhbFByb3BzID0gYXBwR2V0SW5pdGlhbFByb3BzO1xuZXhwb3J0cy5kZWZhdWx0ID0gQXBwO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1fYXBwLmpzLm1hcCJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImVudW1lcmFibGUiLCJnZXQiLCJfdXRpbHMiLCJBcHBJbml0aWFsUHJvcHMiLCJOZXh0V2ViVml0YWxzTWV0cmljIiwiZGVmYXVsdCIsIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiZ2VuIiwicmVzb2x2ZSIsInJlamVjdCIsIl9uZXh0IiwiX3Rocm93Iiwia2V5IiwiYXJnIiwiaW5mbyIsImVycm9yIiwiZG9uZSIsIlByb21pc2UiLCJ0aGVuIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJmbiIsInNlbGYiLCJhcmdzIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJlcnIiLCJ1bmRlZmluZWQiLCJvYmoiLCJfX2VzTW9kdWxlIiwiX2FwcEdldEluaXRpYWxQcm9wcyIsIkNvbXBvbmVudCIsImN0eCIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJhcHBHZXRJbml0aWFsUHJvcHMiLCJfIiwiQXBwIiwicmVuZGVyIiwicHJvcHMiLCJjcmVhdGVFbGVtZW50IiwiYXNzaWduIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImdldEluaXRpYWxQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../node_modules/next/dist/pages/_app.js\n");

/***/ }),

/***/ "./assets/base.css":
/*!*************************!*\
  !*** ./assets/base.css ***!
  \*************************/
/***/ (() => {



/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "../shared/lib/utils":
/*!************************************************!*\
  !*** external "next/dist/shared/lib/utils.js" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-thunk");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();