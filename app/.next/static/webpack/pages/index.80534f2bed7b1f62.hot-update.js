"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/AvailableBets.tsx":
/*!******************************************!*\
  !*** ./src/components/AvailableBets.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _EnterBetForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EnterBetForm */ \"./src/components/EnterBetForm.tsx\");\n/* harmony import */ var _hooks_useFetchAvailableBets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useFetchAvailableBets */ \"./src/hooks/useFetchAvailableBets.tsx\");\n/* harmony import */ var _hooks_useClaimBet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useClaimBet */ \"./src/hooks/useClaimBet.tsx\");\n/* harmony import */ var _hooks_useEnterBet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useEnterBet */ \"./src/hooks/useEnterBet.tsx\");\n// app/src/components/AvailableBets.tsx\n\nvar _s = $RefreshSig$();\n\n // Import the EnterBetForm component\n // Ensure the correct path is used\n // Import the useClaimBet hook\n // Import the useEnterBet hook\nconst AvailableBets = (param)=>{\n    let { connectedWalletAddress } = param;\n    _s();\n    const { bets, isLoading } = (0,_hooks_useFetchAvailableBets__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    const { enterBet, loading: enteringBet, error } = (0,_hooks_useEnterBet__WEBPACK_IMPORTED_MODULE_5__.useEnterBet)(); // Use the useEnterBet hook\n    const { claimBet, loading: claimingBet, error: claimError } = (0,_hooks_useClaimBet__WEBPACK_IMPORTED_MODULE_4__.useClaimBet)(); // Use the useClaimBet hook\n    const [selectedBetId, setSelectedBetId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    // Function to open the EnterBetForm for a specific bet\n    const openEnterBetForm = (betId)=>{\n        setSelectedBetId(betId);\n    };\n    const handleBetEntry = async (betId, betPrice)=>{\n        await enterBet(betId, parseFloat(betPrice));\n        if (!error) {\n            // Close the form and possibly refresh the bets list or show a success message\n            setSelectedBetId(null);\n        } else {\n            // Handle the error case, e.g., show an error message\n            console.error(\"Failed to enter bet:\", error.message);\n        }\n    };\n    const handleClaimBet = async (betId)=>{\n        try {\n            await claimBet(betId);\n        // Optionally handle success\n        } catch (error) {\n            console.error(\"Failed to claim bet:\", error);\n        // Handle the error case, e.g., show an error message\n        }\n    };\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading bets...\"\n    }, void 0, false, {\n        fileName: \"/Users/ekinburak/Desktop/Web3/predictions-dapp/app/src/components/AvailableBets.tsx\",\n        lineNumber: 45,\n        columnNumber: 25\n    }, undefined);\n    const currentTimestamp = Math.floor(Date.now() / 1000);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"w-full py-8 md:py-16 lg:py-24 xl:py-32\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container px-8 md:px-12 lg:px-24 xl:px-32 mx-auto\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-3xl font-bold tracking-tighter mb-6\",\n                    children: \"Available Bets\"\n                }, void 0, false, {\n                    fileName: \"/Users/ekinburak/Desktop/Web3/predictions-dapp/app/src/components/AvailableBets.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"overflow-x-auto\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                        className: \"w-full text-sm\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                                className: \"text-left text-gray-500 dark:text-gray-400\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            className: \"px-4 py-2\",\n                                            children: \"ID\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ekinburak/Desktop/Web3/predictions-dapp/app/src/components/AvailableBets.tsx\",\n                                            lineNumber: 57,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            className: \"px-4 py-2\",\n                                            children: \"Pair\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ekinburak/Desktop/Web3/predictions-dapp/app/src/components/AvailableBets.tsx\",\n                                            lineNumber: 58,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            className: \"px-4 py-2\",\n                                            children: \"Pot Volume\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ekinburak/Desktop/Web3/predictions-dapp/app/src/components/AvailableBets.tsx\",\n                                            lineNumber: 59,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            className: \"px-4 py-2\",\n                                            children: \"Duration (Seconds)\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ekinburak/Desktop/Web3/predictions-dapp/app/src/components/AvailableBets.tsx\",\n                                            lineNumber: 60,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            className: \"px-4 py-2\",\n                                            children: \"Status\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ekinburak/Desktop/Web3/predictions-dapp/app/src/components/AvailableBets.tsx\",\n                                            lineNumber: 61,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            className: \"px-4 py-2\",\n                                            children: \"Actions\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ekinburak/Desktop/Web3/predictions-dapp/app/src/components/AvailableBets.tsx\",\n                                            lineNumber: 62,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ekinburak/Desktop/Web3/predictions-dapp/app/src/components/AvailableBets.tsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/ekinburak/Desktop/Web3/predictions-dapp/app/src/components/AvailableBets.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                                children: bets.map((bet)=>{\n                                    var _bet_predictionA;\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                        className: \"border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                className: \"px-4 py-2\",\n                                                children: bet.id\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ekinburak/Desktop/Web3/predictions-dapp/app/src/components/AvailableBets.tsx\",\n                                                lineNumber: 68,\n                                                columnNumber: 21\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                className: \"px-4 py-2\",\n                                                children: bet.pair\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ekinburak/Desktop/Web3/predictions-dapp/app/src/components/AvailableBets.tsx\",\n                                                lineNumber: 69,\n                                                columnNumber: 21\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                className: \"px-4 py-2\",\n                                                children: bet.potVolume\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ekinburak/Desktop/Web3/predictions-dapp/app/src/components/AvailableBets.tsx\",\n                                                lineNumber: 70,\n                                                columnNumber: 21\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                className: \"px-4 py-2\",\n                                                children: Math.max(bet.duration, 0)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ekinburak/Desktop/Web3/predictions-dapp/app/src/components/AvailableBets.tsx\",\n                                                lineNumber: 71,\n                                                columnNumber: 21\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                className: \"px-4 py-2\",\n                                                children: bet.status\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ekinburak/Desktop/Web3/predictions-dapp/app/src/components/AvailableBets.tsx\",\n                                                lineNumber: 72,\n                                                columnNumber: 21\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                className: \"px-4 py-2\",\n                                                children: [\n                                                    (((_bet_predictionA = bet.predictionA) === null || _bet_predictionA === void 0 ? void 0 : _bet_predictionA.player) === connectedWalletAddress || bet.predictionB && bet.predictionB.player === connectedWalletAddress) && currentTimestamp > bet.expiryTs && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                        onClick: ()=>handleClaimBet(bet.id),\n                                                        children: \"Claim Bet\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/ekinburak/Desktop/Web3/predictions-dapp/app/src/components/AvailableBets.tsx\",\n                                                        lineNumber: 76,\n                                                        columnNumber: 27\n                                                    }, undefined),\n                                                    bet.status !== \"Expired\" && bet.duration > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                        onClick: ()=>openEnterBetForm(bet.id),\n                                                        children: \"Enter Bet\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/ekinburak/Desktop/Web3/predictions-dapp/app/src/components/AvailableBets.tsx\",\n                                                        lineNumber: 82,\n                                                        columnNumber: 25\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/ekinburak/Desktop/Web3/predictions-dapp/app/src/components/AvailableBets.tsx\",\n                                                lineNumber: 73,\n                                                columnNumber: 21\n                                            }, undefined)\n                                        ]\n                                    }, bet.id, true, {\n                                        fileName: \"/Users/ekinburak/Desktop/Web3/predictions-dapp/app/src/components/AvailableBets.tsx\",\n                                        lineNumber: 67,\n                                        columnNumber: 17\n                                    }, undefined);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/Users/ekinburak/Desktop/Web3/predictions-dapp/app/src/components/AvailableBets.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ekinburak/Desktop/Web3/predictions-dapp/app/src/components/AvailableBets.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/ekinburak/Desktop/Web3/predictions-dapp/app/src/components/AvailableBets.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, undefined),\n                selectedBetId && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_EnterBetForm__WEBPACK_IMPORTED_MODULE_2__.EnterBetForm, {\n                    betId: selectedBetId,\n                    onSubmit: handleBetEntry,\n                    onClose: ()=>setSelectedBetId(null)\n                }, void 0, false, {\n                    fileName: \"/Users/ekinburak/Desktop/Web3/predictions-dapp/app/src/components/AvailableBets.tsx\",\n                    lineNumber: 93,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/ekinburak/Desktop/Web3/predictions-dapp/app/src/components/AvailableBets.tsx\",\n            lineNumber: 51,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/ekinburak/Desktop/Web3/predictions-dapp/app/src/components/AvailableBets.tsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AvailableBets, \"3j/YA3CSWKu3EJ/JI8VF9jWNCUY=\", false, function() {\n    return [\n        _hooks_useFetchAvailableBets__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        _hooks_useEnterBet__WEBPACK_IMPORTED_MODULE_5__.useEnterBet,\n        _hooks_useClaimBet__WEBPACK_IMPORTED_MODULE_4__.useClaimBet\n    ];\n});\n_c = AvailableBets;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AvailableBets);\nvar _c;\n$RefreshReg$(_c, \"AvailableBets\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxpQkFBaUJTLE1BQU0sTUFBSzdDLDBCQUEyQm9DLElBQUlVLFdBQVcsSUFBSVYsSUFBSVUsV0FBVyxDQUFDRCxNQUFNLEtBQUs3QyxzQkFBc0IsS0FDekhxQixtQkFBbUJlLElBQUlXLFFBQVEsa0JBQzdCLDhEQUFDQzt3REFBT0MsU0FBUyxJQUFNOUIsZUFBZWlCLElBQUlFLEVBQUU7a0VBQUc7Ozs7OztvREFLbERGLElBQUlPLE1BQU0sS0FBSyxhQUFhUCxJQUFJTSxRQUFRLEdBQUcsbUJBQzFDLDhEQUFDTTt3REFBT0MsU0FBUyxJQUFNckMsaUJBQWlCd0IsSUFBSUUsRUFBRTtrRUFBRzs7Ozs7Ozs7Ozs7Ozt1Q0FmaERGLElBQUlFLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBeUJ0QjVCLCtCQUNDLDhEQUFDZix1REFBWUE7b0JBQUNrQixPQUFPSDtvQkFBZXdDLFVBQVVwQztvQkFBZ0JxQyxTQUFTLElBQU14QyxpQkFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3hHO0dBckZNWjs7UUFDd0JILG9FQUFxQkE7UUFDQ0UsMkRBQVdBO1FBQ0NELDJEQUFXQTs7O0tBSHJFRTtBQXVGTiwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9BdmFpbGFibGVCZXRzLnRzeD9mNWEwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGFwcC9zcmMvY29tcG9uZW50cy9BdmFpbGFibGVCZXRzLnRzeFxuXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEVudGVyQmV0Rm9ybSB9IGZyb20gJy4vRW50ZXJCZXRGb3JtJzsgLy8gSW1wb3J0IHRoZSBFbnRlckJldEZvcm0gY29tcG9uZW50XG5pbXBvcnQgdXNlRmV0Y2hBdmFpbGFibGVCZXRzIGZyb20gJy4uL2hvb2tzL3VzZUZldGNoQXZhaWxhYmxlQmV0cyc7IC8vIEVuc3VyZSB0aGUgY29ycmVjdCBwYXRoIGlzIHVzZWRcbmltcG9ydCB7IHVzZUNsYWltQmV0IH0gZnJvbSAnLi4vaG9va3MvdXNlQ2xhaW1CZXQnOyAvLyBJbXBvcnQgdGhlIHVzZUNsYWltQmV0IGhvb2tcbmltcG9ydCB7IHVzZUVudGVyQmV0IH0gZnJvbSAnLi4vaG9va3MvdXNlRW50ZXJCZXQnOyAvLyBJbXBvcnQgdGhlIHVzZUVudGVyQmV0IGhvb2tcblxuaW50ZXJmYWNlIEF2YWlsYWJsZUJldHNQcm9wcyB7XG4gIGNvbm5lY3RlZFdhbGxldEFkZHJlc3M6IHN0cmluZzsgLy8gRGVjbGFyZSB0aGUgdHlwZSBvZiBjb25uZWN0ZWRXYWxsZXRBZGRyZXNzIGFzIHN0cmluZ1xufVxuXG5jb25zdCBBdmFpbGFibGVCZXRzOiBSZWFjdC5GQzxBdmFpbGFibGVCZXRzUHJvcHM+ID0gKHsgY29ubmVjdGVkV2FsbGV0QWRkcmVzcyB9KSA9PiB7XG4gIGNvbnN0IHsgYmV0cywgaXNMb2FkaW5nIH0gPSB1c2VGZXRjaEF2YWlsYWJsZUJldHMoKTtcbiAgY29uc3QgeyBlbnRlckJldCwgbG9hZGluZzogZW50ZXJpbmdCZXQsIGVycm9yIH0gPSB1c2VFbnRlckJldCgpOyAvLyBVc2UgdGhlIHVzZUVudGVyQmV0IGhvb2tcbiAgY29uc3QgeyBjbGFpbUJldCwgbG9hZGluZzogY2xhaW1pbmdCZXQsIGVycm9yOiBjbGFpbUVycm9yIH0gPSB1c2VDbGFpbUJldCgpOyAvLyBVc2UgdGhlIHVzZUNsYWltQmV0IGhvb2tcbiAgY29uc3QgW3NlbGVjdGVkQmV0SWQsIHNldFNlbGVjdGVkQmV0SWRdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG5cbiAgLy8gRnVuY3Rpb24gdG8gb3BlbiB0aGUgRW50ZXJCZXRGb3JtIGZvciBhIHNwZWNpZmljIGJldFxuICBjb25zdCBvcGVuRW50ZXJCZXRGb3JtID0gKGJldElkOiBzdHJpbmcpID0+IHtcbiAgICBzZXRTZWxlY3RlZEJldElkKGJldElkKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVCZXRFbnRyeSA9IGFzeW5jIChiZXRJZDogc3RyaW5nLCBiZXRQcmljZTogc3RyaW5nKSA9PiB7XG4gICAgYXdhaXQgZW50ZXJCZXQoYmV0SWQsIHBhcnNlRmxvYXQoYmV0UHJpY2UpKTtcbiAgICBpZiAoIWVycm9yKSB7XG4gICAgICAvLyBDbG9zZSB0aGUgZm9ybSBhbmQgcG9zc2libHkgcmVmcmVzaCB0aGUgYmV0cyBsaXN0IG9yIHNob3cgYSBzdWNjZXNzIG1lc3NhZ2VcbiAgICAgIHNldFNlbGVjdGVkQmV0SWQobnVsbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEhhbmRsZSB0aGUgZXJyb3IgY2FzZSwgZS5nLiwgc2hvdyBhbiBlcnJvciBtZXNzYWdlXG4gICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGVudGVyIGJldDpcIiwgZXJyb3IubWVzc2FnZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNsYWltQmV0ID0gYXN5bmMgKGJldElkOiBzdHJpbmcpID0+IHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgY2xhaW1CZXQoYmV0SWQpO1xuICAgICAgLy8gT3B0aW9uYWxseSBoYW5kbGUgc3VjY2Vzc1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGNsYWltIGJldDpcIiwgZXJyb3IpO1xuICAgICAgLy8gSGFuZGxlIHRoZSBlcnJvciBjYXNlLCBlLmcuLCBzaG93IGFuIGVycm9yIG1lc3NhZ2VcbiAgICB9XG4gIH07XG5cbiAgaWYgKGlzTG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcgYmV0cy4uLjwvcD47XG5cbiAgY29uc3QgY3VycmVudFRpbWVzdGFtcCA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApO1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidy1mdWxsIHB5LTggbWQ6cHktMTYgbGc6cHktMjQgeGw6cHktMzJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHB4LTggbWQ6cHgtMTIgbGc6cHgtMjQgeGw6cHgtMzIgbXgtYXV0b1wiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIHRyYWNraW5nLXRpZ2h0ZXIgbWItNlwiPkF2YWlsYWJsZSBCZXRzPC9oMj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy14LWF1dG9cIj5cbiAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtc21cIj5cbiAgICAgICAgICAgIDx0aGVhZCBjbGFzc05hbWU9XCJ0ZXh0LWxlZnQgdGV4dC1ncmF5LTUwMCBkYXJrOnRleHQtZ3JheS00MDBcIj5cbiAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweC00IHB5LTJcIj5JRDwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB4LTQgcHktMlwiPlBhaXI8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweC00IHB5LTJcIj5Qb3QgVm9sdW1lPC90aD5cbiAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHgtNCBweS0yXCI+RHVyYXRpb24gKFNlY29uZHMpPC90aD5cbiAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHgtNCBweS0yXCI+U3RhdHVzPC90aD5cbiAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHgtNCBweS0yXCI+QWN0aW9uczwvdGg+IHsvKiBBZGQgYSBjb2x1bW4gZm9yIGFjdGlvbnMgKi99XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICB7YmV0cy5tYXAoKGJldCkgPT4gKFxuICAgICAgICAgICAgICAgIDx0ciBrZXk9e2JldC5pZH0gY2xhc3NOYW1lPVwiYm9yZGVyLWIgZGFyazpib3JkZXItZ3JheS03MDAgaG92ZXI6YmctZ3JheS01MCBkYXJrOmhvdmVyOmJnLWdyYXktNjAwXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC00IHB5LTJcIj57YmV0LmlkfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC00IHB5LTJcIj57YmV0LnBhaXJ9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTQgcHktMlwiPntiZXQucG90Vm9sdW1lfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC00IHB5LTJcIj57TWF0aC5tYXgoYmV0LmR1cmF0aW9uLCAwKX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNCBweS0yXCI+e2JldC5zdGF0dXN9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTQgcHktMlwiPlxuICAgICAgICAgICAgICAgICAgICB7KGJldC5wcmVkaWN0aW9uQT8ucGxheWVyID09PSBjb25uZWN0ZWRXYWxsZXRBZGRyZXNzIHx8IChiZXQucHJlZGljdGlvbkIgJiYgYmV0LnByZWRpY3Rpb25CLnBsYXllciA9PT0gY29ubmVjdGVkV2FsbGV0QWRkcmVzcykpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50VGltZXN0YW1wID4gYmV0LmV4cGlyeVRzICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGFpbUJldChiZXQuaWQpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDbGFpbSBCZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHtiZXQuc3RhdHVzICE9PSAnRXhwaXJlZCcgJiYgYmV0LmR1cmF0aW9uID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG9wZW5FbnRlckJldEZvcm0oYmV0LmlkKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIEVudGVyIEJldFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge3NlbGVjdGVkQmV0SWQgJiYgKFxuICAgICAgICAgIDxFbnRlckJldEZvcm0gYmV0SWQ9e3NlbGVjdGVkQmV0SWR9IG9uU3VibWl0PXtoYW5kbGVCZXRFbnRyeX0gb25DbG9zZT17KCkgPT4gc2V0U2VsZWN0ZWRCZXRJZChudWxsKX0gLz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEF2YWlsYWJsZUJldHM7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkVudGVyQmV0Rm9ybSIsInVzZUZldGNoQXZhaWxhYmxlQmV0cyIsInVzZUNsYWltQmV0IiwidXNlRW50ZXJCZXQiLCJBdmFpbGFibGVCZXRzIiwiY29ubmVjdGVkV2FsbGV0QWRkcmVzcyIsImJldHMiLCJpc0xvYWRpbmciLCJlbnRlckJldCIsImxvYWRpbmciLCJlbnRlcmluZ0JldCIsImVycm9yIiwiY2xhaW1CZXQiLCJjbGFpbWluZ0JldCIsImNsYWltRXJyb3IiLCJzZWxlY3RlZEJldElkIiwic2V0U2VsZWN0ZWRCZXRJZCIsIm9wZW5FbnRlckJldEZvcm0iLCJiZXRJZCIsImhhbmRsZUJldEVudHJ5IiwiYmV0UHJpY2UiLCJwYXJzZUZsb2F0IiwiY29uc29sZSIsIm1lc3NhZ2UiLCJoYW5kbGVDbGFpbUJldCIsInAiLCJjdXJyZW50VGltZXN0YW1wIiwiTWF0aCIsImZsb29yIiwiRGF0ZSIsIm5vdyIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJoMiIsInRhYmxlIiwidGhlYWQiLCJ0ciIsInRoIiwidGJvZHkiLCJtYXAiLCJiZXQiLCJ0ZCIsImlkIiwicGFpciIsInBvdFZvbHVtZSIsIm1heCIsImR1cmF0aW9uIiwic3RhdHVzIiwicHJlZGljdGlvbkEiLCJwbGF5ZXIiLCJwcmVkaWN0aW9uQiIsImV4cGlyeVRzIiwiYnV0dG9uIiwib25DbGljayIsIm9uU3VibWl0Iiwib25DbG9zZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/AvailableBets.tsx\n"));

/***/ })

});