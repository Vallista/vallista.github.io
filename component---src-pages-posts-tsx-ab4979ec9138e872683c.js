"use strict";(self.webpackChunk_vallista_land_blog=self.webpackChunk_vallista_land_blog||[]).push([[754],{4563:function(e,t,n){n.r(t);var r=n(3919),a=n(5196),s=n(2784),i=n(4965),u=n(7028),l=n(4213),o=n(5290),d=n(2322);var c=(0,r.Z)("section",{target:"e1qby5tb0"})({name:"167j9n6",styles:"margin:0 auto;width:100%;max-width:900px;padding:2rem"});t.default=function(e){var t=e.data.allMarkdownRemark.nodes,n=(0,s.useState)(""),r=n[0],m=n[1],f=(0,s.useMemo)((function(){return(0,o.IQ)(t).sort((function(e,t){var n=(0,o.ZU)(e.frontmatter.date);return(0,o.ZU)(t.frontmatter.date).getTime()-n.getTime()}))}),[t]),h=(0,s.useMemo)((function(){return f.map((function(e){var t=e.fields.slug,n=e.frontmatter,r=n.date,a=n.title,s=(0,o.hK)(r),i=s[1],u=s[2];return{time:(0,o.ZU)(r).getTime(),date:Number(i)+"월 "+u+"일",name:a,slug:t}}))}),[f]),g=(0,s.useMemo)((function(){var e=f.reduce((function(e,t){var n=t.fields.slug,r=t.frontmatter,a=r.date,s=r.title,i=(0,o.hK)(a),u=i[0],l=i[1],d=i[2];return e[u]||(e[u]=[]),e[u].push({name:s,date:Number(l)+"월 "+d+"일",slug:n}),e}),{}),t=Object.values(e);return Object.keys(e).map((function(e,n){return{year:e,posts:t[n]}})).sort((function(e,t){return Number(t.year)-Number(e.year)}))}),[t]),x=(0,s.useMemo)((function(){return h.filter((function(e){return e.name.includes(r)}))}),[h,r]),j=0!==r.length;return(0,d.jsxs)(a.W2,{children:[(0,d.jsx)(l.p,{name:"글 목록"}),(0,d.jsxs)(c,{children:[(0,d.jsxs)(a.W2,{children:[(0,d.jsx)(u.R,{value:r,onSearch:m,size:"large",placeholder:"검색할 텍스트를 입력하세요."}),(0,d.jsx)(a.LZ,{y:2})]}),j?0===x.length?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a.xv,{size:20,weight:600,children:"검색된 결과가 없어요 :("}),(0,d.jsx)(a.xv,{size:20,weight:600,children:"다른 결과를 검색해보시겠어요?"})]}):(0,d.jsx)(i.e,{underline:!0,title:"검색결과",list:x}):g.map((function(e){return(0,d.jsxs)(a.W2,{children:[(0,d.jsx)("div",{children:(0,d.jsx)(i.e,{title:e.year,list:e.posts,underline:!0})}),(0,d.jsx)(a.LZ,{y:2})]},e.year)}))]})]})}}}]);
//# sourceMappingURL=component---src-pages-posts-tsx-ab4979ec9138e872683c.js.map