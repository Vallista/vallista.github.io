"use strict";(self.webpackChunk_vallista_land_blog=self.webpackChunk_vallista_land_blog||[]).push([[371],{1279:function(e,t,r){r.d(t,{Y:function(){return d}});var o=r(3919),i=r(8778),n=r(4541),s=r(4408),a=r(8447),l=r(2784),c=r(2322);var d=function(e){var t=e.posts,r=e.fold,o=(0,n.useLocation)(),i=(0,l.useState)((function(){return"undefined"==typeof window?"":window.localStorage.getItem("search")||""})),d=i[0],h=i[1],u=(0,l.useState)((function(){return"undefined"==typeof window?"list":window.localStorage.getItem("viewType")||"list"})),A=u[0],C=u[1],M=(0,l.useRef)(null),I=(0,l.useState)(!1),z=I[0],P=I[1],T=d.length>0,L=(0,l.useMemo)((function(){return t.filter((function(e){return e.name.includes(d)}))}),[d,t]);(0,l.useEffect)((function(){var e,t,r,o;P((null!==(e=null===(t=M.current)||void 0===t?void 0:t.scrollHeight)&&void 0!==e?e:0)>(null!==(r=null===(o=M.current)||void 0===o?void 0:o.clientHeight)&&void 0!==r?r:0))}),[d,t,A]);var N=(0,l.useMemo)((function(){return"card"===A?k:j}),[A]),_=(0,l.useMemo)((function(){return"card"===A?R:y}),[A]);return(0,c.jsxs)(g,{ref:M,hasVerticalScrollbar:z,fold:r,children:[(0,c.jsxs)(p,{children:[(0,c.jsxs)(f,{children:[(0,c.jsxs)(s.xv,{children:["글"," ",(0,c.jsxs)(s.xv,{as:"span",color:s.wL.PRIMARY.ACCENT_4,children:["(",t.length," 개)"]})]}),(0,c.jsx)(x,{onClick:function(){var e="card"===A?"list":"card";window.localStorage.setItem("viewType",e),C(e)},children:"card"===A?(0,c.jsxs)("svg",{viewBox:"0 0 24 24",width:"20",height:"20",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",shapeRendering:"geometricPrecision",children:[(0,c.jsx)("path",{d:"M21 10H3"}),(0,c.jsx)("path",{d:"M21 6H3"}),(0,c.jsx)("path",{d:"M21 14H3"}),(0,c.jsx)("path",{d:"M21 18H3"})]}):(0,c.jsxs)("svg",{viewBox:"0 0 24 24",width:"20",height:"20",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",shapeRendering:"geometricPrecision",children:[(0,c.jsx)("rect",{x:"1",y:"4",width:"20",height:"16",rx:"2",ry:"2"}),(0,c.jsx)("path",{d:"M1 10h20"})]})})]}),(0,c.jsx)(v,{children:(0,c.jsxs)(m,{hasSearchText:T,children:[(0,c.jsx)(b,{value:d,onChange:function(e){return t=e.currentTarget.value,h(t),void window.localStorage.setItem("search",t);var t}}),(0,c.jsxs)("svg",{viewBox:"0 0 24 24",width:"15",height:"15",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",shapeRendering:"geometricPrecision",children:[(0,c.jsx)("path",{d:"M11 17.25a6.25 6.25 0 110-12.5 6.25 6.25 0 010 12.5z"}),(0,c.jsx)("path",{d:"M16 16l4.5 4.5"})]}),(0,c.jsxs)("svg",{onClick:function(){h(""),window.localStorage.setItem("search","")},viewBox:"0 0 24 24",width:"15",height:"15",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",shapeRendering:"geometricPrecision",children:[(0,c.jsx)("path",{d:"M21 4H8l-7 8 7 8h13a2 2 0 002-2V6a2 2 0 00-2-2z"}),(0,c.jsx)("path",{d:"M18 9l-6 6"}),(0,c.jsx)("path",{d:"M12 9l6 6"})]})]})})]}),(0,c.jsx)(w,{children:(0,c.jsx)(s.W2,{children:(0,c.jsx)(N,{children:L.map((function(e){return(0,c.jsxs)(_,{onClick:function(){return t=e.slug,void(0,a.c4)(t);var t},image:e.image,text:e.name,isActive:(t=e.slug,decodeURIComponent(o.pathname).includes(t.slice(0,-1))),children:[(0,c.jsx)("div",{children:"list"===A&&(0,c.jsxs)("svg",{viewBox:"0 0 24 24",width:"20",height:"20",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",shapeRendering:"geometricPrecision",children:[(0,c.jsx)("path",{d:"M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z"}),(0,c.jsx)("path",{d:"M13 2v7h7"})]})}),"list"===A&&(0,c.jsx)(s.xv,{children:e.name})]},e.name);var t}))})})})]})},h={name:"1mv50vz",styles:"left:-320px"},u={name:"d3ovaa",styles:"&:hover>div:last-of-type{margin-right:-8px;}"},g=(0,o.Z)("aside",{target:"egi1qz11"})("position:fixed;width:320px;height:100vh;top:0;left:80px;overflow-x:hidden;overflow-y:hidden;",(function(e){var t=e.theme,r=e.hasVerticalScrollbar,o=e.fold;return(0,i.iv)("z-index:",t.layers.AFTER_STANDARD-1,";background:",t.colors.PRIMARY.ACCENT_1,";box-shadow:",t.shadows.SMALL,";",r&&u," ",o&&h,";","")}),"@media screen and (max-width: 1000px){left:-320px;}&:hover{overflow-y:auto;}&::-webkit-scrollbar{background:var(--scrollbar-background);height:8px;width:8px;}&::-webkit-scrollbar-thumb{background:var(--scrollbar-thumb);border-radius:0;}"),p=(0,o.Z)("div",{target:"egi1qz10"})("display:flex;flex-direction:column;position:fixed;top:0;width:320px;",(function(e){var t=e.theme;return(0,i.iv)("z-index:",t.layers.AFTER_STANDARD-2,";background:",t.colors.PRIMARY.ACCENT_1,";","")}),";"),x=(0,o.Z)("button",{target:"egi1qz9"})("border:none;background:none;outline:none;cursor:pointer;padding:0;transition:color 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);",(function(e){var t=e.theme;return(0,i.iv)("color:",t.colors.PRIMARY.ACCENT_4,";&:hover{color:",t.colors.PRIMARY.FOREGROUND,";}","")}),";"),f=(0,o.Z)("div",{target:"egi1qz8"})({name:"43ln0f",styles:"display:flex;justify-content:space-between;align-items:flex-end;height:35px;font-weight:600;font-size:0.85rem;padding:0 1.7rem"}),v=(0,o.Z)("div",{target:"egi1qz7"})({name:"7ng9km",styles:"display:flex;align-items:flex-end;height:38px;padding:0 1.5rem"}),m=(0,o.Z)("label",{target:"egi1qz6"})("position:relative;width:100%;height:30px;border-radius:15px;",(function(e){var t=e.theme;return(0,i.iv)("background:",t.colors.PRIMARY.ACCENT_2,";","")})," &>svg{position:absolute;top:50%;transform:translateY(-50%);}",(function(e){var t=e.theme,r=e.hasSearchText;return(0,i.iv)("border:1px solid transparent;transition:border 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);&:focus-within{border:1px solid ",t.colors.PRIMARY.ACCENT_3,";}&>svg:first-of-type{left:12px;color:",t.colors.PRIMARY.ACCENT_4,";}&>svg:last-of-type{cursor:pointer;opacity:",r?1:0,";right:12px;color:",t.colors.ERROR.DARK,";}","")}),";"),b=(0,o.Z)("input",{target:"egi1qz5"})({name:"1rc4kw7",styles:"width:calc(100% - 85px);position:relative;left:40px;top:50%;transform:translateY(-50%);border:none;background:none;outline:none;:focus{background:none;}"}),w=(0,o.Z)("div",{target:"egi1qz4"})({name:"1sfdsy1",styles:"margin-top:73px;padding:1rem 1.5rem 2rem"}),k=(0,o.Z)("nav",{target:"egi1qz3"})({name:"4n65xp",styles:"display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center"}),R=(0,o.Z)("a",{target:"egi1qz2"})("position:relative;display:flex;justify-content:flex-end;align-items:flex-end;width:130px;height:130px;margin-bottom:12px;border-radius:12px;cursor:pointer;overflow:hidden;transform:scale(1, 1);transition:transform 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);",(function(e){var t=e.theme,r=e.image,o=e.text,n=e.isActive;return(0,i.iv)("background-image:url(",r,");background-size:cover;background-repeat:no-repeat;background-position:center;box-shadow:",t.shadows.SMALL,";color:",t.colors.PRIMARY.BACKGROUND,";&::before{content:'';position:absolute;left:0;top:0;width:inherit;height:inherit;background:",n?t.colors.HIGHLIGHT.PINK:t.colors.PRIMARY.FOREGROUND,";opacity:",n?.5:.3,";}&::after{content:'",o,"';position:absolute;right:0;bottom:0;font-size:1rem;font-weight:600;line-height:1.1;color:",t.colors.PRIMARY.BACKGROUND,";text-align:right;margin:6px 6px 12px;word-break:normal;word-spacing:normal;letter-spacing:-0.02rem;}","")})," &:hover{transform:scale(1.1, 1.1);}"),j=(0,o.Z)("nav",{target:"egi1qz1"})({name:"1fttcpj",styles:"display:flex;flex-direction:column"}),y=(0,o.Z)("a",{target:"egi1qz0"})("position:relative;display:flex;justify-content:flex-start;align-items:center;cursor:pointer;padding:6px 12px;margin:0 -12px;border-radius:6px;transition:border 0.2s ease;",(function(e){var t=e.theme,r=e.isActive;return(0,i.iv)(r&&(0,i.iv)("border-left:6px solid ",t.colors.HIGHLIGHT.PINK,";padding-left:12px;",""),";&>div{display:flex;justify-content:center;align-items:center;margin-right:6px;color:",t.colors.PRIMARY.ACCENT_4,";}&:hover{background-color:",t.colors.PRIMARY.ACCENT_2,";}","")})," &>svg{width:20px;height:20px;}")}}]);
//# sourceMappingURL=464eac91-b46c7e4fa92d70871361.js.map