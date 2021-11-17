"use strict";
exports.id = 721;
exports.ids = [721];
exports.modules = {

/***/ 1721:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ AppContext),
/* harmony export */   "w": () => (/* binding */ AppProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4626);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9713);




const AppContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)([
    {
    },
    ()=>{
        console.log('hula hoo');
    }
]);
const cartHistory = [];
const AppProvider = (props)=>{
    const { 0: cart , 1: setCart  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    });
    const { 0: cartDrawer , 1: setCartDrawer  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: user , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const addToCart = (product)=>{
        cartHistory.push(cart);
        const quantity = cart[product.databaseId] ? cart[product.databaseId].quantity + 1 : 1;
        setCart({
            ...cart,
            [product.databaseId]: {
                product: {
                    node: product
                },
                quantity
            }
        });
        (0,_api__WEBPACK_IMPORTED_MODULE_2__/* .addToWPCart */ .tL)(product.databaseId);
    };
    // TODO: sync with WP
    const undo = ()=>{
        const lastState = cartHistory.pop() || {
        };
        setCart(lastState);
        (0,_util__WEBPACK_IMPORTED_MODULE_3__/* .toast */ .A)("Undo successful!");
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        window.onkeydown = (e)=>{
            if ((e.ctrlKey || e.metaKey) && e.key === 'z') undo();
        };
        async function init() {
            const cartContents = await (0,_api__WEBPACK_IMPORTED_MODULE_2__/* .getWPCart */ .Pv)();
            setCart(cartContents);
            setUser(JSON.parse(localStorage.getItem('user')));
        }
        init();
    }, []);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AppContext.Provider, {
        value: {
            cart,
            addToCart,
            cartDrawer,
            setCartDrawer,
            user,
            setUser
        },
        children: props.children
    }));
};


/***/ }),

/***/ 4626:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h9": () => (/* binding */ getAllPostsWithSlug),
/* harmony export */   "Dg": () => (/* binding */ getAllProducts),
/* harmony export */   "wv": () => (/* binding */ getProduct),
/* harmony export */   "ds": () => (/* binding */ getPostAndMorePosts),
/* harmony export */   "tL": () => (/* binding */ addToWPCart),
/* harmony export */   "Pv": () => (/* binding */ getWPCart),
/* harmony export */   "pH": () => (/* binding */ loginUser)
/* harmony export */ });
/* unused harmony exports getPreviewPost, getAllPostsForHome, registerUser */
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2979);

const API_URL = _constants__WEBPACK_IMPORTED_MODULE_0__/* .GQL_URL */ .TH;
let localStorage;
async function fetchAPI(query, { variables  } = {
}) {
    const wooSession = localStorage === null || localStorage === void 0 ? void 0 : localStorage.getItem('woo-session');
    const headers = {
        'Content-Type': 'application/json'
    };
    if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
        headers['Authorization'] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
    }
    if (wooSession) headers['woocommerce-session'] = `Session ${wooSession}`;
    const res = await fetch(API_URL, {
        method: 'POST',
        headers,
        body: JSON.stringify({
            query,
            variables
        })
    });
    const temp = res.headers.get('woocommerce-session');
    if (temp && temp != wooSession) {
        localStorage === null || localStorage === void 0 ? void 0 : localStorage.setItem('woo-session', temp);
    }
    const json = await res.json();
    if (json.errors) {
        console.error(json.errors);
        throw new Error('Failed to fetch API');
    }
    return json.data;
}
async function getPreviewPost(id, idType = 'DATABASE_ID') {
    const data = await fetchAPI(`
    query PreviewPost($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        databaseId
        slug
        status
      }
    }`, {
        variables: {
            id,
            idType
        }
    });
    return data.post;
}
async function getAllPostsWithSlug() {
    const data = await fetchAPI(`
    {
      posts(first: 10000) {
        edges {
          node {
            slug,
            title
          }
        }
      }
    }
  `);
    return data === null || data === void 0 ? void 0 : data.posts;
}
async function getAllProducts() {
    const data = await fetchAPI(`
    {
      products(first: 10000) {
          nodes {
            id
            databaseId
            slug
            name
            shortDescription
            description
            productTags {
              nodes {
                name
              }
            }
            image {
              mediaItemUrl
              sourceUrl
              srcSet
            }
            ... on SimpleProduct {
              id
              price
              salePrice
              regularPrice
            }
          }
      }
    }
  `);
    return data === null || data === void 0 ? void 0 : data.products;
}
async function getProduct(slug) {
    const data = await fetchAPI(`
    query ProductQuery($slug: ID!) {
      product(id: $slug, idType: SLUG) {
        description
        id
        databaseId
        image {
          mediaItemUrl
          sourceUrl
          srcSet
        }
        name
        reviews {
          nodes {
            content
            date
          }
        }
        status
        productTags {
          nodes {
            name
          }
        }
        productCategories {
          nodes {
            name
          }
        }
        ... on SimpleProduct {
          id
          price
          salePrice
          regularPrice
        }
      }
    }
  `, {
        variables: {
            slug
        }
    });
    return data === null || data === void 0 ? void 0 : data.product;
}
async function getAllPostsForHome(preview) {
    const data = await fetchAPI(`
    query AllPosts {
      posts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            title
            excerpt
            slug
            date
            featuredImage {
              node {
                sourceUrl
              }
            }
            author {
              node {
                name
                firstName
                lastName
                avatar {
                  url
                }
              }
            }
          }
        }
      }
    }
  `, {
        variables: {
            onlyEnabled: !preview,
            preview
        }
    });
    return data === null || data === void 0 ? void 0 : data.posts;
}
async function getPostAndMorePosts(slug, preview, previewData) {
    const postPreview = preview && (previewData === null || previewData === void 0 ? void 0 : previewData.post);
    // The slug may be the id of an unpublished post
    const isId = Number.isInteger(Number(slug));
    const isSamePost = isId ? Number(slug) === postPreview.id : slug === postPreview.slug;
    const isDraft = isSamePost && (postPreview === null || postPreview === void 0 ? void 0 : postPreview.status) === 'draft';
    const isRevision = isSamePost && (postPreview === null || postPreview === void 0 ? void 0 : postPreview.status) === 'publish';
    const data = await fetchAPI(`
    fragment AuthorFields on User {
      name
      firstName
      lastName
      avatar {
        url
      }
    }
    fragment PostFields on Post {
      title
      excerpt
      slug
      date
      featuredImage {
        node {
          sourceUrl
        }
      }
      author {
        node {
          ...AuthorFields
        }
      }
      categories {
        edges {
          node {
            name
          }
        }
      }
      tags {
        edges {
          node {
            name
          }
        }
      }
    }
    query PostBySlug($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        ...PostFields
        content
        ${// Only some of the fields of a revision are considered as there are some inconsistencies
    isRevision ? `
        revisions(first: 1, where: { orderby: { field: MODIFIED, order: DESC } }) {
          edges {
            node {
              title
              excerpt
              content
              author {
                node {
                  ...AuthorFields
                }
              }
            }
          }
        }
        ` : ''}
      }
      posts(first: 3, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            ...PostFields
          }
        }
      }
    }
  `, {
        variables: {
            id: isDraft ? postPreview.id : slug,
            idType: isDraft ? 'DATABASE_ID' : 'SLUG'
        }
    });
    // Draft posts may not have an slug
    if (isDraft) data.post.slug = postPreview.id;
    // Apply a revision (changes in a published post)
    if (isRevision && data.post.revisions) {
        var ref;
        const revision = (ref = data.post.revisions.edges[0]) === null || ref === void 0 ? void 0 : ref.node;
        if (revision) Object.assign(data.post, revision);
        delete data.post.revisions;
    }
    // Filter out the main post
    data.posts.edges = data.posts.edges.filter(({ node  })=>node.slug !== slug
    );
    // If there are still 3 posts, remove the last one
    if (data.posts.edges.length > 2) data.posts.edges.pop();
    return data;
}
const addToWPCart = async (productId, clientMutationId)=>{
    const data = await fetchAPI(`
    mutation AddToCartMutation {
      addToCart(input: {productId: ${productId}}) {
        clientMutationId
      }
    }
    `);
    return data;
};
const getWPCart = async ()=>{
    const data = await fetchAPI(`
    query {
      cart {
        contents {
          nodes {
            product {
              node {
                databaseId
                name
                ... on SimpleProduct {
                  id
                  name
                  price
                }
              }
            }
            quantity
            subtotal
          }
        }
      }
    }
    `);
    return data === null || data === void 0 ? void 0 : data.cart.contents.nodes;
};
async function registerUser() {
    const data = await fetchAPI(`
    mutation RegisterUser {
      registerUser(
        input: {
            clientMutationId: "uniqueId",
            username: "${username}",
            password: "${password}",
            email: "${email}"
        }) {
        user {
          jwtAuthToken
          jwtRefreshToken
        }
      }
    }
    `);
    return data;
}
async function loginUser(username, password) {
    const data = await fetchAPI(`
    mutation LoginUser {
      login( input: {
        clientMutationId: "uniqueId",
        username: "${username}",
        password: "${password}"
      } ) {
        authToken
        user {
          id
          name
          email
        }
      }
    }    
    `);
    return data === null || data === void 0 ? void 0 : data.login;
}


/***/ }),

/***/ 2979:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "jG": () => (/* binding */ SITE_TITLE),
/* harmony export */   "vk": () => (/* binding */ SITE_DESCRIPTION),
/* harmony export */   "TH": () => (/* binding */ GQL_URL)
/* harmony export */ });
const SITE_TITLE = "Tundra";
const SITE_DESCRIPTION = "A modern, minimalist ecommerce theme.";
const GQL_URL = "https://tundra.pk/graphql";


/***/ }),

/***/ 9713:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ parseCurrency),
/* harmony export */   "A": () => (/* binding */ toast)
/* harmony export */ });
function parseCurrency(str) {
    if (!str) return 0;
    return parseFloat(str.replaceAll(/(?!\.)(\D+)/g, ''));
}
function toast(msg, type = 'info', container = 'body') {
    const iconMap = {
        success: 'fa-check',
        info: 'fa-exclamation',
        warning: 'fa-warning',
        danger: 'fa-skull-crossbones'
    };
    const i = document.createElement('i');
    i.className = `fa ${iconMap[type]}`;
    const m = document.createElement('p');
    m.innerHTML = msg;
    const t = document.createElement('div');
    t.className = `toast ${type}`;
    t.append(i);
    t.append(m);
    document.querySelector(container).append(t);
    setTimeout(()=>{
        t.remove();
    }, 2500);
}


/***/ })

};
;