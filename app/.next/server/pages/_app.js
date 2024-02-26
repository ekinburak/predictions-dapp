"use strict";
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

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @solana/wallet-adapter-react */ \"@solana/wallet-adapter-react\");\n/* harmony import */ var _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @solana/wallet-adapter-react-ui */ \"@solana/wallet-adapter-react-ui\");\n/* harmony import */ var _solana_wallet_adapter_phantom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @solana/wallet-adapter-phantom */ \"@solana/wallet-adapter-phantom\");\n/* harmony import */ var _solana_wallet_adapter_react_ui_styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @solana/wallet-adapter-react-ui/styles.css */ \"./node_modules/@solana/wallet-adapter-react-ui/styles.css\");\n/* harmony import */ var _solana_wallet_adapter_react_ui_styles_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_solana_wallet_adapter_react_ui_styles_css__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__, _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_3__, _solana_wallet_adapter_phantom__WEBPACK_IMPORTED_MODULE_4__]);\n([_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__, _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_3__, _solana_wallet_adapter_phantom__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// app/src/pages/_app.tsx\n\n\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    const [mounted, setMounted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // Define an array of wallet adapters\n    const wallets = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>[\n            new _solana_wallet_adapter_phantom__WEBPACK_IMPORTED_MODULE_4__.PhantomWalletAdapter()\n        ], []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setMounted(true);\n    }, []);\n    // Custom RPC endpoint\n    const CUSTOM_RPC_ENDPOINT = \"https://devnet.helius-rpc.com/?api-key=d8751f30-6597-493e-a14d-b079088d4fb7\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__.ConnectionProvider, {\n        endpoint: CUSTOM_RPC_ENDPOINT,\n        config: {\n            commitment: \"confirmed\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__.WalletProvider, {\n            wallets: wallets,\n            autoConnect: true,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_3__.WalletModalProvider, {\n                children: mounted && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/Users/ekinburak/Desktop/Web3/predictions-dapp/app/src/pages/_app.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 27\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ekinburak/Desktop/Web3/predictions-dapp/app/src/pages/_app.tsx\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/ekinburak/Desktop/Web3/predictions-dapp/app/src/pages/_app.tsx\",\n            lineNumber: 32,\n            columnNumber: 11\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/ekinburak/Desktop/Web3/predictions-dapp/app/src/pages/_app.tsx\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlCQUF5Qjs7QUFFdUM7QUFJVDtBQUtmO0FBQzZCO0FBQ2xCO0FBR3BDLFNBQVNRLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQVk7SUFDNUQsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdULCtDQUFRQSxDQUFDO0lBRXZDLHFDQUFxQztJQUNyQyxNQUFNVSxVQUFVWCw4Q0FBT0EsQ0FBQyxJQUFNO1lBQUMsSUFBSUssZ0ZBQW9CQTtTQUFHLEVBQUUsRUFBRTtJQUU5RE4sZ0RBQVNBLENBQUM7UUFDTlcsV0FBVztJQUNmLEdBQUcsRUFBRTtJQUVMLHNCQUFzQjtJQUN0QixNQUFNRSxzQkFBc0I7SUFFNUIscUJBQ0ksOERBQUNWLDRFQUFrQkE7UUFBQ1csVUFBVUQ7UUFBcUJFLFFBQVE7WUFBRUMsWUFBWTtRQUFZO2tCQUNuRiw0RUFBQ1osd0VBQWNBO1lBQUNRLFNBQVNBO1lBQVNLLFdBQVc7c0JBQzNDLDRFQUFDWixnRkFBbUJBOzBCQUNqQksseUJBQVcsOERBQUNGO29CQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUs5QyIsInNvdXJjZXMiOlsid2VicGFjazovL3NvbGFuYS1kYXBwLWxlYXJuaW5nLy4vc3JjL3BhZ2VzL19hcHAudHN4P2Y5ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gYXBwL3NyYy9wYWdlcy9fYXBwLnRzeFxuXG5pbXBvcnQgUmVhY3QsIHsgRkMsIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnXG5pbXBvcnQgeyBcbiAgICBDb25uZWN0aW9uUHJvdmlkZXIsIFxuICAgIFdhbGxldFByb3ZpZGVyfSBmcm9tIFwiQHNvbGFuYS93YWxsZXQtYWRhcHRlci1yZWFjdFwiXG5pbXBvcnQgeyAgICAgXG4gICAgV2FsbGV0TW9kYWxQcm92aWRlcixcbiAgICBXYWxsZXREaXNjb25uZWN0QnV0dG9uLFxuICAgIFdhbGxldE11bHRpQnV0dG9uIFxufSBmcm9tIFwiQHNvbGFuYS93YWxsZXQtYWRhcHRlci1yZWFjdC11aVwiXG5pbXBvcnQgeyBQaGFudG9tV2FsbGV0QWRhcHRlciB9IGZyb20gXCJAc29sYW5hL3dhbGxldC1hZGFwdGVyLXBoYW50b21cIlxuaW1wb3J0IFwiQHNvbGFuYS93YWxsZXQtYWRhcHRlci1yZWFjdC11aS9zdHlsZXMuY3NzXCJcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gICAgY29uc3QgW21vdW50ZWQsIHNldE1vdW50ZWRdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgICAvLyBEZWZpbmUgYW4gYXJyYXkgb2Ygd2FsbGV0IGFkYXB0ZXJzXG4gICAgY29uc3Qgd2FsbGV0cyA9IHVzZU1lbW8oKCkgPT4gW25ldyBQaGFudG9tV2FsbGV0QWRhcHRlcigpXSwgW10pXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRNb3VudGVkKHRydWUpXG4gICAgfSwgW10pXG5cbiAgICAvLyBDdXN0b20gUlBDIGVuZHBvaW50XG4gICAgY29uc3QgQ1VTVE9NX1JQQ19FTkRQT0lOVCA9ICdodHRwczovL2Rldm5ldC5oZWxpdXMtcnBjLmNvbS8/YXBpLWtleT1kODc1MWYzMC02NTk3LTQ5M2UtYTE0ZC1iMDc5MDg4ZDRmYjcnO1xuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDxDb25uZWN0aW9uUHJvdmlkZXIgZW5kcG9pbnQ9e0NVU1RPTV9SUENfRU5EUE9JTlR9IGNvbmZpZz17eyBjb21taXRtZW50OiAnY29uZmlybWVkJyB9fT5cbiAgICAgICAgICA8V2FsbGV0UHJvdmlkZXIgd2FsbGV0cz17d2FsbGV0c30gYXV0b0Nvbm5lY3Q+XG4gICAgICAgICAgICA8V2FsbGV0TW9kYWxQcm92aWRlcj5cbiAgICAgICAgICAgICAge21vdW50ZWQgJiYgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPn1cbiAgICAgICAgICAgIDwvV2FsbGV0TW9kYWxQcm92aWRlcj5cbiAgICAgICAgICA8L1dhbGxldFByb3ZpZGVyPlxuICAgICAgICA8L0Nvbm5lY3Rpb25Qcm92aWRlcj5cbiAgICAgICk7XG4gICAgfVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlTWVtbyIsInVzZVN0YXRlIiwiQ29ubmVjdGlvblByb3ZpZGVyIiwiV2FsbGV0UHJvdmlkZXIiLCJXYWxsZXRNb2RhbFByb3ZpZGVyIiwiUGhhbnRvbVdhbGxldEFkYXB0ZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIm1vdW50ZWQiLCJzZXRNb3VudGVkIiwid2FsbGV0cyIsIkNVU1RPTV9SUENfRU5EUE9JTlQiLCJlbmRwb2ludCIsImNvbmZpZyIsImNvbW1pdG1lbnQiLCJhdXRvQ29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@solana/wallet-adapter-phantom":
/*!*************************************************!*\
  !*** external "@solana/wallet-adapter-phantom" ***!
  \*************************************************/
/***/ ((module) => {

module.exports = import("@solana/wallet-adapter-phantom");;

/***/ }),

/***/ "@solana/wallet-adapter-react":
/*!***********************************************!*\
  !*** external "@solana/wallet-adapter-react" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = import("@solana/wallet-adapter-react");;

/***/ }),

/***/ "@solana/wallet-adapter-react-ui":
/*!**************************************************!*\
  !*** external "@solana/wallet-adapter-react-ui" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = import("@solana/wallet-adapter-react-ui");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/@solana"], () => (__webpack_exec__("./src/pages/_app.tsx")));
module.exports = __webpack_exports__;

})();