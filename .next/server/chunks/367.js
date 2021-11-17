exports.id = 367;
exports.ids = [367];
exports.modules = {

/***/ 3566:
/***/ ((module) => {

// Exports
module.exports = {
	"card": "Card_card__2cXDm",
	"card-header": "Card_card-header__3byFK",
	"card-body": "Card_card-body__2PryF",
	"card-img-top": "Card_card-img-top__3fQvU"
};


/***/ }),

/***/ 367:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ products)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./lib/api.js
var api = __webpack_require__(4626);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./lib/AppContext.js
var AppContext = __webpack_require__(1721);
// EXTERNAL MODULE: ./lib/util.js
var util = __webpack_require__(9713);
// EXTERNAL MODULE: ./styles/Card.module.css
var Card_module = __webpack_require__(3566);
var Card_module_default = /*#__PURE__*/__webpack_require__.n(Card_module);
;// CONCATENATED MODULE: ./components/product.js






const Product = ({ product  })=>{
    const { addToCart  } = (0,external_react_.useContext)(AppContext/* AppContext */.I);
    const { slug , name , image , regularPrice , salePrice  } = product;
    const _addToCart = (e)=>{
        e.preventDefault();
        addToCart(product);
        (0,util/* toast */.A)("Added to cart!", 'success');
    };
    const discount = ((0,util/* parseCurrency */.z)(salePrice) / (0,util/* parseCurrency */.z)(regularPrice) * 100).toFixed();
    return(/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
        href: `/product/${slug}`,
        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Card_module_default()).card,
                style: {
                    width: '18rem'
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: (image === null || image === void 0 ? void 0 : image.sourceUrl) || '/images/placeholder.png',
                        width: "300",
                        height: "250",
                        className: (Card_module_default())["card-img-top"],
                        alt: "..."
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Card_module_default())["card-body"],
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: "card-title",
                                children: name
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                children: salePrice ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                    children: [
                                        salePrice,
                                        " ",
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("small", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    style: {
                                                        textDecoration: 'line-through'
                                                    },
                                                    children: regularPrice
                                                }),
                                                " (",
                                                discount,
                                                "% off)"
                                            ]
                                        })
                                    ]
                                }) : regularPrice
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "btn btn-primary",
                                onClick: _addToCart,
                                children: "Add to Cart"
                            })
                        ]
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const product = (Product);

;// CONCATENATED MODULE: ./components/products.js




const fakeProducts = [
    {
        id: 1,
        name: 'Sample Product 1',
        shortDescription: 'Lorem impsum dalor consit'
    },
    {
        id: 2,
        name: 'Sample Product 2',
        shortDescription: 'Lorem impsum dalor consit'
    },
    {
        id: 3,
        name: 'Sample Product 3',
        shortDescription: 'Lorem impsum dalor consit'
    },
    {
        id: 4,
        name: 'Sample Product 4',
        shortDescription: 'Lorem impsum dalor consit'
    }
];
const Products = ({ search , tags , excludeTags , limit  })=>{
    const { 0: productsData , 1: setProductsData  } = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        async function loadProducts() {
            const products = await (0,api/* getAllProducts */.Dg)();
            setProductsData(products.nodes);
        }
        loadProducts();
    }, []);
    let filteredProducts = productsData || fakeProducts;
    if (search) {
        search = search.toLowerCase();
        filteredProducts = filteredProducts.filter((p)=>p.name.toLowerCase().includes(search) || p.description.toLowerCase().includes(search)
        );
    }
    if (tags) filteredProducts = filteredProducts.filter((p)=>{
        var ref;
        return ((ref = p.productTags) === null || ref === void 0 ? void 0 : ref.nodes.map((t)=>t.name
        ).filter((t)=>tags.includes(t)
        ).length) > 0;
    });
    if (excludeTags) filteredProducts = filteredProducts.filter((p)=>{
        var ref;
        return ((ref = p.productTags) === null || ref === void 0 ? void 0 : ref.nodes.map((t)=>t.name
        ).filter((t)=>excludeTags.includes(t)
        ).length) === 0;
    });
    filteredProducts = filteredProducts.slice(0, limit);
    const products1 = filteredProducts.map((p)=>{
        return(/*#__PURE__*/ jsx_runtime_.jsx(product, {
            product: p
        }, p.id));
    });
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: products1
    }));
};
/* harmony default export */ const products = (Products);


/***/ })

};
;