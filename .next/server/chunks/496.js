exports.id = 496;
exports.ids = [496];
exports.modules = {

/***/ 998:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "Header_header__182Qc",
	"medium": "Header_medium__1gUWl",
	"large": "Header_large__1-hIO",
	"small": "Header_small__3-0c3",
	"bg": "Header_bg__jwClU",
	"flipped": "Header_flipped__UOMPW",
	"bg_overlay": "Header_bg_overlay__3hWeZ",
	"header_content": "Header_header_content__14hd3",
	"header_buttons": "Header_header_buttons__36ugu"
};


/***/ }),

/***/ 8496:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(998);
/* harmony import */ var _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_1__);


const StaticHeader = ({ bgStyle , children , overlayColor , size ='medium' , flipped =false  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
        className: `${(_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_1___default().header)} ${(_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_1___default())[size]}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `${(_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_1___default().bg)} ${bgStyle} ${flipped ? (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_1___default().flipped) : ''}`,
                children: overlayColor ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_1___default().bg_overlay),
                    style: {
                        backgroundColor: overlayColor
                    }
                }) : ''
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_1___default().header_content),
                children: children
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StaticHeader);


/***/ })

};
;