"use strict";(self.webpackChunk_vallista_land_blog=self.webpackChunk_vallista_land_blog||[]).push([[371],{1279:function(e,t,r){r.d(t,{Y:function(){return c}});var i=r(3919),o=r(8778),n=r(4541),a=r(3367),s=r(8447),l=r(2784),d=r(2322);var c=function(e){var t=(0,n.useLocation)(),r=e.posts,i=e.fold,o=(0,l.useState)((function(){return"undefined"==typeof window?"":window.localStorage.getItem("search")||""})),c=o[0],p=o[1],h=(0,l.useState)((function(){return"undefined"==typeof window?"card":window.localStorage.getItem("viewType")||"card"})),u=h[0],k=h[1],A=(0,l.useRef)(null),C=(0,l.useState)(!1),M=C[0],I=C[1],z=(0,l.useMemo)((function(){return r.filter((function(e){return e.name.toLocaleUpperCase().includes(c.toLocaleUpperCase())}))}),[c,r]);(0,l.useEffect)((function(){var e,t,r,i;I((null!==(e=null===(t=A.current)||void 0===t?void 0:t.scrollHeight)&&void 0!==e?e:0)>(null!==(r=null===(i=A.current)||void 0===i?void 0:i.clientHeight)&&void 0!==r?r:0))}),[c,r,u]);var L=(0,l.useMemo)((function(){return"card"===u?b:R}),[u]),P=(0,l.useMemo)((function(){return"card"===u?y:j}),[u]);return(0,d.jsxs)(x,{ref:A,hasVerticalScrollbar:M,fold:i,children:[(0,d.jsxs)(g,{children:[(0,d.jsxs)(v,{children:[(0,d.jsxs)(a.xv,{children:["글"," ",(0,d.jsxs)(a.xv,{as:"span",color:a.wL.PRIMARY.ACCENT_4,children:["(",r.length,")"]})]}),(0,d.jsx)(f,{onClick:function(){var e="card"===u?"list":"card";window.localStorage.setItem("viewType",e),k(e)},children:"card"===u?(0,d.jsxs)("svg",{viewBox:"0 0 24 24",width:"20",height:"20",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",shapeRendering:"geometricPrecision",children:[(0,d.jsx)("path",{d:"M21 10H3"}),(0,d.jsx)("path",{d:"M21 6H3"}),(0,d.jsx)("path",{d:"M21 14H3"}),(0,d.jsx)("path",{d:"M21 18H3"})]}):(0,d.jsxs)("svg",{viewBox:"0 0 24 24",width:"20",height:"20",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",shapeRendering:"geometricPrecision",children:[(0,d.jsx)("rect",{x:"1",y:"4",width:"20",height:"16",rx:"2",ry:"2"}),(0,d.jsx)("path",{d:"M1 10h20"})]})})]}),(0,d.jsx)(m,{children:(0,d.jsx)(a.Mj,{value:c,onReset:function(){p(""),window.localStorage.setItem("search","")},onChange:function(e){p(e),window.localStorage.setItem("search",e)},size:"small",placeholder:"검색.."})})]}),(0,d.jsx)(w,{children:(0,d.jsx)(a.W2,{children:(0,d.jsx)(L,{children:z.map((function(e){return(0,d.jsxs)(P,{onClick:function(){return t=e.slug,void(0,s.navigate)(t);var t},image:e.image,text:e.name,isActive:(r=e.slug,decodeURIComponent(t.pathname).includes(r.slice(0,-1))),children:[(0,d.jsx)("div",{children:"list"===u&&(0,d.jsxs)("svg",{viewBox:"0 0 24 24",width:"20",height:"20",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",shapeRendering:"geometricPrecision",children:[(0,d.jsx)("path",{d:"M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z"}),(0,d.jsx)("path",{d:"M13 2v7h7"})]})}),"list"===u&&(0,d.jsx)(a.xv,{children:e.name})]},e.name);var r}))})})})]})},p={name:"1w03y9z",styles:"&:hover>div:last-of-type{margin-right:0;}"},h={name:"1cv2wih",styles:"left:-320px;&>div:first-of-type{left:-320px;}"},u={name:"d3ovaa",styles:"&:hover>div:last-of-type{margin-right:-8px;}"},x=(0,i.Z)("aside",{target:"egi1qz9"})("position:fixed;width:320px;height:100vh;top:0;left:80px;overflow-x:hidden;overflow-y:hidden;",(function(e){var t=e.theme,r=e.hasVerticalScrollbar,i=e.fold;return(0,o.iv)("z-index:",t.layers.AFTER_STANDARD-1,";background:",t.colors.PRIMARY.ACCENT_1,";box-shadow:",t.shadows.SMALL,";",r&&u," ",i&&h,"@media only screen and (min-device-width: 768px) and (max-device-width: 1024px){overflow-y:auto;",r&&p,";}","")}),"@media screen and (max-width: 1024px){left:-320px;&>div:first-of-type{left:-320px;}}&:hover{overflow-y:auto;}scrollbar-width:8px;scrollbar-color:var(--scrollbar-thumb) var(--scrollbar-background);&::-webkit-scrollbar{background:var(--scrollbar-background);height:8px;width:8px;}&::-webkit-scrollbar-thumb{background:var(--scrollbar-thumb);border-radius:0;}"),g=(0,i.Z)("div",{target:"egi1qz8"})("display:flex;flex-direction:column;position:fixed;top:0;left:80px;transform:translate3d(0, 0, 1);width:320px;padding-bottom:14px;",(function(e){var t=e.theme;return(0,o.iv)("z-index:",t.layers.AFTER_STANDARD-2,";background:",t.colors.PRIMARY.ACCENT_1,";","")}),";"),f=(0,i.Z)("button",{target:"egi1qz7"})("border:none;background:none;outline:none;cursor:pointer;padding:0;transition:color 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);",(function(e){var t=e.theme;return(0,o.iv)("color:",t.colors.PRIMARY.ACCENT_4,";&:hover{color:",t.colors.PRIMARY.FOREGROUND,";}","")}),";"),v=(0,i.Z)("div",{target:"egi1qz6"})({name:"148s3zu",styles:"display:flex;justify-content:space-between;align-items:flex-end;height:35px;font-weight:600;font-size:14px;padding:0 28px 2px;&>button{margin:0;}"}),m=(0,i.Z)("div",{target:"egi1qz5"})({name:"5d5urt",styles:"display:flex;align-items:flex-end;height:38px;padding:0 24px;max-width:100%;&>div{width:100%;}"}),w=(0,i.Z)("div",{target:"egi1qz4"})({name:"1vp4tqx",styles:"margin-top:73px;padding:16px 24px 32px"}),b=(0,i.Z)("nav",{target:"egi1qz3"})({name:"4n65xp",styles:"display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center"}),y=(0,i.Z)("a",{target:"egi1qz2"})("position:relative;display:flex;justify-content:flex-end;align-items:flex-end;width:130px;height:130px;margin-bottom:12px;border-radius:12px;cursor:pointer;overflow:hidden;transform:scale(1, 1);transition:transform 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);",(function(e){var t=e.theme,r=e.image,i=e.text,n=e.isActive;return(0,o.iv)("background-image:url(",r,");background-size:cover;background-repeat:no-repeat;background-position:center;box-shadow:",t.shadows.SMALL,";color:",t.colors.PRIMARY.BACKGROUND,";&::before{content:'';position:absolute;left:0;top:0;width:inherit;height:inherit;background:",n?t.colors.HIGHLIGHT.PINK:t.colors.PRIMARY.FOREGROUND,";opacity:",n?.5:.3,";border-radius:12px;}&::after{content:'",i,"';position:absolute;right:0;bottom:0;font-size:16px;font-weight:600;line-height:1.1;color:",t.colors.PRIMARY.BACKGROUND,";text-align:right;margin:6px 6px 12px;word-break:keep-all;letter-spacing:-0.02rem;}","")})," &:hover{transform:scale(1.1, 1.1);}"),R=(0,i.Z)("nav",{target:"egi1qz1"})({name:"1fttcpj",styles:"display:flex;flex-direction:column"}),j=(0,i.Z)("a",{target:"egi1qz0"})("position:relative;display:flex;justify-content:flex-start;align-items:center;cursor:pointer;padding:6px 12px;margin:0 -12px;border-radius:6px;transition:border 0.2s ease;",(function(e){var t=e.theme,r=e.isActive;return(0,o.iv)(r&&(0,o.iv)("border-left:6px solid ",t.colors.HIGHLIGHT.PINK,";padding-left:12px;",""),";&>div{display:flex;justify-content:center;align-items:center;margin-right:6px;color:",t.colors.PRIMARY.ACCENT_4,";}&:hover{background-color:",t.colors.PRIMARY.ACCENT_2,";}","")})," &>svg{width:20px;height:20px;}")}}]);
//# sourceMappingURL=464eac91-fd7d3f50f22483c3490b.js.map