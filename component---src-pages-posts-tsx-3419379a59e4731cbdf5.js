"use strict";(self.webpackChunk_vallista_land_blog=self.webpackChunk_vallista_land_blog||[]).push([[754],{4563:function(e,t,r){r.r(t);var n=r(3919),a=r(8808),s=r(2784),i=r(4965),u=r(4213),l=r(5290),o=r(2322);var d=(0,n.Z)("section",{target:"e1qby5tb0"})({name:"167j9n6",styles:"margin:0 auto;width:100%;max-width:900px;padding:2rem"});t.default=function(e){var t=e.data.allMarkdownRemark.nodes,r=(0,s.useState)(""),n=r[0],c=r[1],m=(0,s.useMemo)((function(){return(0,l.IQ)(t).sort((function(e,t){var r=(0,l.ZU)(e.frontmatter.date);return(0,l.ZU)(t.frontmatter.date).getTime()-r.getTime()}))}),[t]),f=(0,s.useMemo)((function(){return m.map((function(e){var t=e.fields.slug,r=e.frontmatter,n=r.date,a=r.title,s=(0,l.hK)(n),i=s[1],u=s[2];return{time:(0,l.ZU)(n).getTime(),date:Number(i)+"월 "+Number(u)+"일",name:a,slug:t}}))}),[m]),h=(0,s.useMemo)((function(){var e=m.reduce((function(e,t){var r=t.fields.slug,n=t.frontmatter,a=n.date,s=n.title,i=(0,l.hK)(a),u=i[0],o=i[1],d=i[2];return e[u]||(e[u]=[]),e[u].push({name:s,date:Number(o)+"월 "+Number(d)+"일",slug:r}),e}),{}),t=Object.values(e);return Object.keys(e).map((function(e,r){return{year:e,posts:t[r]}})).sort((function(e,t){return Number(t.year)-Number(e.year)}))}),[t]),g=(0,s.useMemo)((function(){return f.filter((function(e){return e.name.toLocaleUpperCase().includes(n.toLocaleUpperCase())}))}),[f,n]),j=0!==n.length;return(0,o.jsxs)(a.W2,{children:[(0,o.jsx)(u.p,{name:"글 목록"}),(0,o.jsxs)(d,{children:[(0,o.jsxs)(a.W2,{children:[(0,o.jsx)("div",{children:(0,o.jsx)(a.Mj,{value:n,onChange:c,size:"large",placeholder:"검색할 텍스트를 입력하세요."})}),(0,o.jsx)(a.LZ,{y:2})]}),j?0===g.length?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.xv,{size:20,weight:600,children:"검색된 결과가 없어요 :("}),(0,o.jsx)(a.xv,{size:20,weight:600,children:"다른 결과를 검색해보시겠어요?"})]}):(0,o.jsx)(i.e,{underline:!0,title:"검색결과",list:g}):h.map((function(e){return(0,o.jsxs)(a.W2,{children:[(0,o.jsx)("div",{children:(0,o.jsx)(i.e,{title:e.year,list:e.posts,underline:!0})}),(0,o.jsx)(a.LZ,{y:2})]},e.year)}))]})]})}}}]);
//# sourceMappingURL=component---src-pages-posts-tsx-3419379a59e4731cbdf5.js.map