(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(7743)}])},8496:function(e,r,n){"use strict";var t=n(5893),i=n(6202),s=n.n(i);r.Z=function(e){var r=e.bgStyle,n=e.children,i=e.overlayColor,a=e.size,o=void 0===a?"medium":a,l=e.flipped,c=void 0!==l&&l;return(0,t.jsxs)("header",{className:"".concat(s().header," ").concat(s()[o]),children:[(0,t.jsx)("div",{className:"".concat(s().bg," ").concat(r," ").concat(c?s().flipped:""),children:i?(0,t.jsx)("div",{className:s().bg_overlay,style:{backgroundColor:i}}):""}),(0,t.jsx)("div",{className:s().header_content,children:n})]})}},367:function(e,r,n){"use strict";n.d(r,{Z:function(){return g}});var t=n(5666),i=n.n(t),s=n(5893),a=n(7294),o=n(4626),l=n(1664),c=n(1721),d=n(9713),u=n(3410),h=n.n(u),m=function(e){var r=e.product,n=(0,a.useContext)(c.I).addToCart,t=r.slug,i=r.name,o=r.image,u=r.regularPrice,m=r.salePrice,p=((0,d.z)(m)/(0,d.z)(u)*100).toFixed();return(0,s.jsx)(l.default,{href:"/product/".concat(t),children:(0,s.jsx)("a",{children:(0,s.jsxs)("div",{className:h().card,style:{width:"18rem"},children:[(0,s.jsx)("img",{src:(null===o||void 0===o?void 0:o.sourceUrl)||"/images/placeholder.png",width:"300",height:"250",className:h()["card-img-top"],alt:"..."}),(0,s.jsxs)("div",{className:h()["card-body"],children:[(0,s.jsx)("h3",{className:"card-title",children:i}),(0,s.jsx)("h4",{children:m?(0,s.jsxs)(s.Fragment,{children:[m," ",(0,s.jsxs)("small",{children:[(0,s.jsx)("span",{style:{textDecoration:"line-through"},children:u})," (",p,"% off)"]})]}):u}),(0,s.jsx)("button",{className:"btn btn-primary",onClick:function(e){e.preventDefault(),n(r),(0,d.A)("Added to cart!","success")},children:"Add to Cart"})]})]})})})};function p(e,r,n,t,i,s,a){try{var o=e[s](a),l=o.value}catch(c){return void n(c)}o.done?r(l):Promise.resolve(l).then(t,i)}function f(e){return function(){var r=this,n=arguments;return new Promise((function(t,i){var s=e.apply(r,n);function a(e){p(s,t,i,a,o,"next",e)}function o(e){p(s,t,i,a,o,"throw",e)}a(void 0)}))}}var x=[{id:1,name:"Sample Product 1",shortDescription:"Lorem impsum dalor consit"},{id:2,name:"Sample Product 2",shortDescription:"Lorem impsum dalor consit"},{id:3,name:"Sample Product 3",shortDescription:"Lorem impsum dalor consit"},{id:4,name:"Sample Product 4",shortDescription:"Lorem impsum dalor consit"}],g=function(e){var r=e.search,n=e.tags,t=e.excludeTags,l=e.limit,c=(0,a.useState)(null),d=c[0],u=c[1];(0,a.useEffect)((function(){function e(){return(e=f(i().mark((function e(){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.Dg)();case 2:r=e.sent,u(r.nodes);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var h=d||x;r&&(r=r.toLowerCase(),h=h.filter((function(e){return e.name.toLowerCase().includes(r)||e.description.toLowerCase().includes(r)}))),n&&(h=h.filter((function(e){var r;return(null===(r=e.productTags)||void 0===r?void 0:r.nodes.map((function(e){return e.name})).filter((function(e){return n.includes(e)})).length)>0}))),t&&(h=h.filter((function(e){var r;return 0===(null===(r=e.productTags)||void 0===r?void 0:r.nodes.map((function(e){return e.name})).filter((function(e){return t.includes(e)})).length)})));var p=(h=h.slice(0,l)).map((function(e){return(0,s.jsx)(m,{product:e},e.id)}));return(0,s.jsx)(s.Fragment,{children:p})}},7743:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return p}});var t=n(5893),i=n(1664),s=n(5184),a=n(367),o=n(7294),l=function(e){var r=e.children,n=e.controls,i=void 0===n||n,s=(0,o.useRef)(null);return(0,t.jsxs)(t.Fragment,{children:[i?(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"center",gap:"20px",margin:"15px 0"},children:[(0,t.jsx)("i",{className:"fa fa-arrow-circle-left fa-2x",onClick:function(){s.current.scrollBy({top:0,left:-250,behavior:"smooth"})}}),(0,t.jsx)("i",{className:"fa fa-arrow-circle-right fa-2x",onClick:function(){s.current.scrollBy({top:0,left:250,behavior:"smooth"})}})]}):"",(0,t.jsx)("div",{ref:s,style:{display:"flex",flexWrap:"nowrap",gap:"20px",overflowX:"scroll"},children:r})]})},c=n(8496),d=n(7852),u=n.n(d),h=n(6202),m=[{link:"/images/apple-logo.webp",alt:"Apple Inc."},{link:"/images/microsoft-logo.webp",alt:"Microsoft Corporation"},{link:"/images/amazon-logo.webp",alt:"Amazon"},{link:"/images/google-logo.webp",alt:"Google, Alphabet"}];function p(){var e=m.map((function(e,r){return(0,t.jsx)("img",{src:e.link,alt:e.alt,height:"150",width:"150",style:{objectFit:"contain"}},r)}));return(0,t.jsx)(s.Z,{title:"Tundra","meta-desctription":"A modern, minimalist ecommerce theme.",children:(0,t.jsxs)("main",{children:[(0,t.jsx)(c.Z,{bgStyle:u().header_bg,overlayColor:"rgba(255, 192, 203, 0.499)",flipped:!0,children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h1",{children:"Tundra"}),(0,t.jsx)("p",{children:"Redefine Fashion. Modern & Elegant Designs."}),(0,t.jsxs)("div",{className:h.header_buttons,children:[(0,t.jsx)(i.default,{href:"/shop",children:(0,t.jsx)("button",{className:"btn btn-primary",children:"Shop Now"})}),(0,t.jsx)(i.default,{href:"/shop",children:(0,t.jsx)("button",{className:"btn btn-outline-info",children:"Learn More"})})]})]})}),(0,t.jsxs)("section",{style:{textAlign:"center"},children:[(0,t.jsx)("h2",{children:"Our Customers"}),(0,t.jsx)("div",{children:e})]}),(0,t.jsxs)("section",{style:{textAlign:"center"},children:[(0,t.jsxs)("h2",{children:["Fall ",(new Date).getFullYear()," Collection"]}),(0,t.jsx)("p",{}),(0,t.jsx)(l,{children:(0,t.jsx)(a.Z,{tags:["gidle"]})})]}),(0,t.jsxs)("section",{style:{textAlign:"center"},children:[(0,t.jsxs)("h2",{children:["Summer ",(new Date).getFullYear()," Collection"]}),(0,t.jsx)("p",{children:"Keep your cool in this scorching heat with our specialy crafted summer wear"}),(0,t.jsx)(l,{children:(0,t.jsx)(a.Z,{excludeTags:["gidle"]})})]}),(0,t.jsxs)("section",{style:{textAlign:"center"},children:[(0,t.jsxs)("h2",{children:["Spring ",(new Date).getFullYear()," Collection"]}),(0,t.jsx)("p",{children:"Flow with the exquisite beauty of this season, with our colorful spring designs"}),(0,t.jsx)(l,{children:(0,t.jsx)(a.Z,{excludeTags:["gidle"]})})]})]})})}},3410:function(e){e.exports={card:"Card_card__2cXDm","card-header":"Card_card-header__3byFK","card-body":"Card_card-body__2PryF","card-img-top":"Card_card-img-top__3fQvU"}},6202:function(e){e.exports={header:"Header_header__182Qc",medium:"Header_medium__1gUWl",large:"Header_large__1-hIO",small:"Header_small__3-0c3",bg:"Header_bg__jwClU",flipped:"Header_flipped__UOMPW",bg_overlay:"Header_bg_overlay__3hWeZ",header_content:"Header_header_content__14hd3",header_buttons:"Header_header_buttons__36ugu"}},7852:function(e){e.exports={header_bg:"Home_header_bg__12j93"}}},function(e){e.O(0,[184,774,888,179],(function(){return r=8581,e(e.s=r);var r}));var r=e.O();_N_E=r}]);