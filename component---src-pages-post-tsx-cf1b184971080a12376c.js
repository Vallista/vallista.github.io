(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[256],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o},e.exports.default=e.exports,e.exports.__esModule=!0},3646:function(e,t,n){var o=n(7228);e.exports=function(e){if(Array.isArray(e))return o(e)},e.exports.default=e.exports,e.exports.__esModule=!0},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},319:function(e,t,n){var o=n(3646),r=n(6860),i=n(379),a=n(8206);e.exports=function(e){return o(e)||r(e)||i(e)||a()},e.exports.default=e.exports,e.exports.__esModule=!0},379:function(e,t,n){var o=n(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},6911:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return S}});var o=n(7294),r=n(5444),i=n(4332),a=n(9925),s=n(9694),l=n(6143),d=n(562),u=n(1158),c=n(8213),m=a.ZP.div.withConfig({displayName:"Series__Wrapper",componentId:"lqshbm-0"})(["display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;background-color:",";border-radius:6px;margin-bottom:48px;padding:24px;"],c.Il.GRAY_800),p=a.ZP.header.withConfig({displayName:"Series__Header",componentId:"lqshbm-1"})(["display:flex;flex-direction:column;font-size:1.5rem;font-weight:600;margin-bottom:24px;line-height:1.2;&:before{content:'시리즈 연재';font-size:0.9rem;color:",";margin-bottom:6px;}@media screen and (max-width:420px){font-size:1.0rem;&:before{font-size:0.7rem;margin-bottom:2px;}}"],c.Il.GRAY_500),f=a.ZP.div.withConfig({displayName:"Series__Contents",componentId:"lqshbm-2"})(["display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;"]),h=a.ZP.ol.withConfig({displayName:"Series__List",componentId:"lqshbm-3"})(["list-style:none;margin:0;padding:0;"]),g=a.ZP.li.withConfig({displayName:"Series__ListItem",componentId:"lqshbm-4"})(["color:",";font-weight:",";margin-bottom:2px;font-size:1rem;cursor:pointer;transition:opacity 0.3s;&:before{display:inline-block;width:1.5rem;content:'",".';margin-right:6px;}&:last-child{margin-bottom:0;}&:hover{opacity:0.5;}@media screen and (max-width:420px){font-size:0.8rem;&:before{width:1.0rem;}}"],(function(e){return e.isSelected?c.Il.PURPLE_100:c.Il.GRAY_300}),(function(e){return e.isSelected?700:400}),(function(e){return e.order})),w=function(e){var t=e.title,n=e.posts.sort((function(e,t){return e.priority-t.priority})).map((function(e){return Object.assign({},e,{name:a(e.name)})})),i=a(e.pageName);return o.createElement(m,null,o.createElement(p,null,t),o.createElement(f,null,o.createElement(h,null,n.map((function(e,t){return o.createElement(g,{isSelected:i===e.title,order:t+1,onClick:function(){return t=e.name,n=e.date,o=(0,c.hK)(n),i=o[0],a=o[1],s=o[2],l="/"===t[t.length-1]?t.slice(0,t.length-1):t,void(0,r.navigate)("/"+i+"/"+a+"/"+s+"/"+l);var t,n,o,i,a,s,l},key:t},e.title)})))));function a(e){var t=e.split("/");return 1===t.length?e:t.reduce((function(e,t,n,o){return 0===n||n===o.length-1||e.push(t),e}),[]).join("")}};var y=function(e){var t=e.allMarkdownRemark,n=e.markdownRemark;if(!n||!n.frontmatter.series)return{title:"",posts:[]};var o=t.edges.filter((function(e){return e.node.frontmatter.series===n.frontmatter.series})).map((function(e){return{title:e.node.frontmatter.title,name:e.node.fields.slug,priority:e.node.frontmatter.seriesPriority,date:e.node.frontmatter.date}})).sort((function(e,t){return e.priority>t.priority?-1:1}));return{title:n.frontmatter.series,posts:o,hasSeries:o.length>0}},b=a.ZP.header.withConfig({displayName:"post__PostHeader",componentId:"lhm49y-0"})(["width:100%;max-width:","px;min-height:240px;height:auto;color:",";padding:24px 50px;border-bottom:1px solid #e2e8f0;background-color:",";",""],c.Jk,c.Il.GRAY_400,c.Il.GRAY_900,(function(e){return e.backgroundImage?"\n  position: relative;\n  background-image: url("+e.backgroundImage+");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n\n  &:before {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.7);\n    z-index: 1;\n  }\n\n  & > div {\n    position: relative;\n    width: 100%;\n    height: 100%;\n    z-index: 2;\n    display: flex;\n    flex-direction: column;\n\n    & > h1 {\n      color: "+c.Il.GRAY_900+";\n    }\n\n    & > p {\n      color: "+c.Il.GRAY_600+";\n    }\n  }\n  ":""})),x=a.ZP.section.withConfig({displayName:"post__PostContents",componentId:"lhm49y-1"})(["width:100%;max-width:","px;height:auto;box-sizing:border-box;padding:24px 50px;"],c.Jk),v=a.ZP.div.withConfig({displayName:"post__Tags",componentId:"lhm49y-2"})([""]),_=a.ZP.span.withConfig({displayName:"post__Tag",componentId:"lhm49y-3"})(["width:auto;background-color:",";border-radius:12px;padding:2px 8px 3px;margin-right:6px;margin-bottom:6px;display:inline-block;color:",";font-weight:600;font-size:0.8rem;"],c.Il.PURPLE_200,c.Il.GRAY_900),I=a.ZP.h1.withConfig({displayName:"post__PostHeaderText",componentId:"lhm49y-4"})(["margin-top:0.5rem;margin-bottom:1.2rem;"]),S=function(e){var t=e.data,n=t.allMarkdownRemark,a=t.markdownRemark,m=a.html,p=a.frontmatter,f=a.excerpt,h=p.title,g=p.date,S=p.image,k=p.tags,E=(0,s.useLocation)().pathname,C=(0,o.useMemo)((function(){return(0,c.ZU)(g)}),[g]),q=C.getFullYear(),N=(C.getMonth()+1).toString().padStart(2,"0"),M=C.getDate().toString().padStart(2,"0"),P=(0,o.useMemo)((function(){return{url:"https://vallista.kr"+E,identifier:a.fields.slug,title:a.frontmatter.title}}),[E,a]),U=y({allMarkdownRemark:n,markdownRemark:a}),D=U.hasSeries;return o.createElement(o.Fragment,null,o.createElement(l.Z,{title:p.title,description:f,article:m}),o.createElement(d.Z,t,o.createElement(u.Z,{justifyContent:"center",overflow:"auto",padding:"0 48px",scrollBehavior:"smooth",id:"contents"},o.createElement(u.Z,{flexDirection:"column",width:"auto",height:"auto",backgroundColor:c.Il.GRAY_900,maxWidth:c.Jk+"px",id:"content"},o.createElement(b,{id:"post-header",backgroundImage:null==S?void 0:S.publicURL},o.createElement("div",null,o.createElement(I,null,h),o.createElement("p",{style:{marginTop:"6px",marginBottom:"0"}},q,".",N,".",M," - ",o.createElement(r.Link,{to:"/",style:{fontWeight:600}},"@Vallista")),o.createElement("p",{style:{marginTop:"-2px"}},"읽는데 약 ",a.timeToRead,"분 걸려요!"),o.createElement(v,null,k.map((function(e,t){return o.createElement(_,{key:t},e)}))))),o.createElement(x,{id:"post-contents"},D&&o.createElement(w,Object.assign({},U,{pageName:p.title})),o.createElement("div",{id:"post-markdown",dangerouslySetInnerHTML:{__html:m}}),o.createElement("hr",{style:{marginTop:"36px"}}),o.createElement("div",{style:{marginTop:"36px"}},o.createElement(i.h$,{config:P}))),o.createElement("div",{style:{paddingBottom:"30vh"}})))))}},9413:function(e,t,n){"use strict";var o=n(5318);t.__esModule=!0,t.default=void 0;var r=o(n(7154)),i=o(n(7316)),a=o(n(5354)),s=o(n(7294)),l=o(n(5697)),d=n(9462),u=(0,d.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1),c=function(e){function t(t){var n;return(n=e.call(this,t)||this).shortname="vallista-1",n}(0,a.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.loadInstance()},n.shouldComponentUpdate=function(e){return this.props!==e&&(0,d.shallowComparison)(this.props,e)},n.componentDidUpdate=function(){this.loadInstance()},n.componentWillUnmount=function(){this.cleanInstance()},n.loadInstance=function(){window.document.getElementById("dsq-count-scr")?u():(0,d.insertScript)("https://"+this.shortname+".disqus.com/count.js","dsq-count-scr",window.document.body)},n.cleanInstance=function(){(0,d.removeScript)("dsq-count-scr",window.document.body),window.DISQUSWIDGETS=void 0},n.render=function(){var e=this.props,t=e.config,n=e.placeholder,o=(0,i.default)(e,["config","placeholder"]);return s.default.createElement("span",(0,r.default)({className:"disqus-comment-count","data-disqus-identifier":t.identifier,"data-disqus-url":t.url},o,{__self:this,__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/CommentCount.jsx",lineNumber:53,columnNumber:7}}),n)},t}(s.default.Component);t.default=c,c.defaultProps={placeholder:"..."},c.propTypes={config:l.default.shape({identifier:l.default.string,title:l.default.string,url:l.default.string}),placeholder:l.default.string}},6748:function(e,t,n){"use strict";var o=n(5318);t.__esModule=!0,t.default=void 0;var r=o(n(5354)),i=o(n(7294)),a=o(n(5697)),s=function(e){function t(){return e.apply(this,arguments)||this}(0,r.default)(t,e);var n=t.prototype;return n.getSrc=function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")},n.render=function(){return i.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0",__self:this,__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/CommentEmbed.jsx",lineNumber:17,columnNumber:13}})},t}(i.default.Component);t.default=s,s.defaultProps={width:420,height:320,showMedia:!0,showParentComment:!0},s.propTypes={commentId:a.default.string.isRequired,width:a.default.number,height:a.default.number,showMedia:a.default.bool,showParentComment:a.default.bool}},4838:function(e,t,n){"use strict";var o=n(5318);t.__esModule=!0,t.default=void 0;var r=o(n(7154)),i=o(n(7316)),a=o(n(5354)),s=o(n(7294)),l=o(n(5697)),d=n(9462),u=function(e){function t(t){var n;return(n=e.call(this,t)||this).shortname="vallista-1",n.embedUrl="https://"+n.shortname+".disqus.com/embed.js",n}(0,a.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.loadInstance()},n.shouldComponentUpdate=function(e){return this.props!==e&&(0,d.shallowComparison)(this.props,e)},n.componentDidUpdate=function(){this.loadInstance()},n.componentWillUnmount=function(){this.cleanInstance()},n.getDisqusConfig=function(e){return function(){this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.page.remote_auth_s3=e.remoteAuthS3,this.page.api_key=e.apiKey,this.language=e.language}},n.loadInstance=function(){"undefined"!=typeof window&&window.document&&(window.disqus_config=this.getDisqusConfig(this.props.config),window.document.getElementById("dsq-embed-scr")?this.reloadInstance():(0,d.insertScript)(this.embedUrl,"dsq-embed-scr",window.document.body))},n.reloadInstance=function(){window&&window.DISQUS&&window.DISQUS.reset({reload:!0})},n.cleanInstance=function(){(0,d.removeScript)("dsq-embed-scr",window.document.body);try{delete window.DISQUS}catch(n){window.DISQUS=void 0}var e=window.document.getElementById("disqus_thread");if(e)for(;e.hasChildNodes();)e.removeChild(e.firstChild);if(window.document.querySelector('[id^="dsq-app"]')){var t=window.document.getElementById(window.document.querySelector('[id^="dsq-app"]').id);t.parentNode.removeChild(t)}},n.render=function(){var e=this.props,t=(e.config,(0,i.default)(e,["config"]));return s.default.createElement("div",(0,r.default)({id:"disqus_thread"},t,{__self:this,__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/Disqus.jsx",lineNumber:86,columnNumber:7}}))},t}(s.default.Component);t.default=u,u.propTypes={config:l.default.shape({identifier:l.default.string,title:l.default.string,url:l.default.string,language:l.default.string,remoteAuthS3:l.default.string,apiKey:l.default.string})}},4332:function(e,t,n){"use strict";var o=n(5318);var r=o(n(4838));t.h$=r.default,o(n(9413)).default,o(n(6748)).default,r.default},9462:function(e,t,n){"use strict";var o=n(5318);t.__esModule=!0,t.insertScript=function(e,t,n){var o=window.document.createElement("script");return o.async=!0,o.src=e,o.id=t,n.appendChild(o),o},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var o;return function(){var r=this,i=arguments,a=function(){o=null,n||e.apply(r,i)},s=n&&!o;window.clearTimeout(o),o=setTimeout(a,t),s&&e.apply(r,i)}},t.isReactElement=a,t.shallowComparison=function e(t,n){var o,i=new Set(Object.keys(t).concat(Object.keys(n)));return 0!==(o=[]).concat.apply(o,(0,r.default)(i)).filter((function(o){if("object"==typeof t[o]){if(e(t[o],n[o]))return!0}else if(t[o]!==n[o]&&!a(t[o]))return!0})).length};var r=o(n(319)),i=o(n(7294));function a(e){return!!i.default.isValidElement(e)||!!Array.isArray(e)&&e.some((function(e){return i.default.isValidElement(e)}))}}}]);
//# sourceMappingURL=component---src-pages-post-tsx-cf1b184971080a12376c.js.map