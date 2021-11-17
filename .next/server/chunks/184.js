exports.id = 184;
exports.ids = [184];
exports.modules = {

/***/ 4063:
/***/ ((module) => {

// Exports
module.exports = {
	"cart_drawer": "CartDrawer_cart_drawer__Pvt5U"
};


/***/ }),

/***/ 9448:
/***/ ((module) => {

// Exports
module.exports = {
	"navbar": "Layout_navbar__3AH7-",
	"footer": "Layout_footer__3-iLi"
};


/***/ }),

/***/ 7399:
/***/ ((module) => {

// Exports
module.exports = {
	"navbar": "Navbar_navbar__3KWoz",
	"nav": "Navbar_nav__1Oql8",
	"active": "Navbar_active__2UOQa",
	"nav_item": "Navbar_nav_item__rEKGW"
};


/***/ }),

/***/ 5184:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./lib/AppContext.js
var AppContext = __webpack_require__(1721);
// EXTERNAL MODULE: ./styles/CartDrawer.module.css
var CartDrawer_module = __webpack_require__(4063);
var CartDrawer_module_default = /*#__PURE__*/__webpack_require__.n(CartDrawer_module);
;// CONCATENATED MODULE: ./components/cartDrawer.js





const CartDrawer = ()=>{
    const { cart , setCartDrawer  } = (0,external_react_.useContext)(AppContext/* AppContext */.I);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (CartDrawer_module_default()).cart_drawer,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                className: `fa fa-close`,
                onClick: ()=>{
                    setCartDrawer(false);
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                children: "Cart"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("thead", {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                    children: "Name"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                    children: "Price"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                    children: "Quantity"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("tbody", {
                        children: Object.values(cart).map((cartItem)=>{
                            return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                        children: cartItem.product.node.name
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                        children: cartItem.product.node.price
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                        children: cartItem.quantity
                                    })
                                ]
                            }, cartItem.product.node.databaseId));
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: "/checkout",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: "btn btn-success",
                    children: "Checkout"
                })
            })
        ]
    }));
};
/* harmony default export */ const components_cartDrawer = (CartDrawer);

// EXTERNAL MODULE: ./lib/constants.js
var constants = __webpack_require__(2979);
// EXTERNAL MODULE: ./styles/Navbar.module.css
var Navbar_module = __webpack_require__(7399);
var Navbar_module_default = /*#__PURE__*/__webpack_require__.n(Navbar_module);
;// CONCATENATED MODULE: ./components/navbar.js







const Navbar = ({ cartPage =false  })=>{
    const { cart , cartDrawer , setCartDrawer  } = (0,external_react_.useContext)(AppContext/* AppContext */.I);
    const { 0: active , 1: setActive  } = (0,external_react_.useState)(false);
    const cartIcon = /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                className: "fa fa-shopping-cart",
                style: {
                    width: '18px'
                }
            }),
            " (",
            Object.keys(cart).length,
            ")"
        ]
    });
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        className: (Navbar_module_default()).navbar,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                className: `fa fa-bars`,
                onClick: ()=>{
                    setActive(!active);
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: "/",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        children: constants/* SITE_TITLE */.jG
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `${(Navbar_module_default()).nav} ${active ? (Navbar_module_default()).active : ''}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: `fa fa-close ${(Navbar_module_default()).nav_item}`,
                        style: {
                            alignSelf: 'center'
                        },
                        onClick: ()=>{
                            setActive(!active);
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: (Navbar_module_default()).nav_item,
                            children: "Home"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/shop",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: (Navbar_module_default()).nav_item,
                            children: "Shop"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/login",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: (Navbar_module_default()).nav_item,
                            children: "Login"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/blog",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: (Navbar_module_default()).nav_item,
                            children: "Blog"
                        })
                    })
                ]
            }),
            cartPage ? /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: "/cart",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    children: cartIcon
                })
            }) : /*#__PURE__*/ jsx_runtime_.jsx("a", {
                onClick: ()=>setCartDrawer(!cartDrawer)
                ,
                children: cartIcon
            }),
            cartDrawer ? /*#__PURE__*/ jsx_runtime_.jsx(components_cartDrawer, {
            }) : ''
        ]
    }));
};
/* harmony default export */ const navbar = (Navbar);

// EXTERNAL MODULE: ./styles/Layout.module.css
var Layout_module = __webpack_require__(9448);
var Layout_module_default = /*#__PURE__*/__webpack_require__.n(Layout_module);
;// CONCATENATED MODULE: ./components/layout.js





const Layout = ({ title , metaDescription , children  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: title || constants/* SITE_TITLE */.jG
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: metaDescription || constants/* SITE_DESCRIPTION */.vk
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(navbar, {
            }),
            children,
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
                className: (Layout_module_default()).footer,
                children: [
                    "\xa9 Copyright ",
                    new Date().getFullYear(),
                    ". All rights reserved. Made with ",
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        style: {
                            color: 'red'
                        },
                        children: "♥"
                    }),
                    " at ",
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "https://nezuco.com",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "Nezuco Inc."
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const layout = (Layout);


/***/ })

};
;