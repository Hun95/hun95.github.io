(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"0Wn5":function(n,t,e){"use strict";var r=e("MUpH"),o=e("q1tI"),i=e.n(o),a=e("vOnD"),c=e("GgBC"),u=e.n(c);function l(){var n=Object(r.a)(["\n  margin: 2rem 0;\n  width: 100%;\n\n  height: auto;\n"]);return l=function(){return n},n}t.a=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(s,{src:u.a}))};var s=a.b.img(l())},"7evw":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"CommentCount",{enumerable:!0,get:function(){return r.CommentCount}}),Object.defineProperty(t,"CommentEmbed",{enumerable:!0,get:function(){return o.CommentEmbed}}),Object.defineProperty(t,"DiscussionEmbed",{enumerable:!0,get:function(){return i.DiscussionEmbed}}),t.default=void 0;var r=e("UZsz"),o=e("Bp/N"),i=e("HhXV"),a={CommentCount:r.CommentCount,CommentEmbed:o.CommentEmbed,DiscussionEmbed:i.DiscussionEmbed};t.default=a},"7oih":function(n,t,e){"use strict";var r=e("MUpH"),o=e("q1tI"),i=e.n(o),a=(e("0Wn5"),e("Wbzz")),c=e("vOnD"),u=e("ATp1"),l=e.n(u),s=e("+jxT"),f=e("X13+"),p=e("iNdW"),d=[{title:i.a.createElement(p.a,{style:{color:"black",fontSize:"1.5rem",verticalAign:"middle",marginTop:"2px"}}),link:"/tag"},{title:i.a.createElement(s.a,{style:{color:"black",fontSize:"1.5rem",verticalAign:"middle"}}),link:"/together"},{title:i.a.createElement(f.a,{style:{color:"black",fontSize:"1.5rem",verticalAign:"middle"}}),link:"/chat"}];function m(){var n=Object(r.a)(["\n  width: 50px;\n  height: 20px;\n  position: relavie;\n"]);return m=function(){return n},n}function h(){var n=Object(r.a)(["\n  display: flex;\n  align-items: center;\n\n  @media screen and (max-width: 768px) {\n    margin-right: 15px;\n  }\n  @media screen and (max-width: 500px) {\n    margin-right: auto;\n    display: none;\n  }\n"]);return h=function(){return n},n}function g(){var n=Object(r.a)(["\n  justify-content: space-between;\n  padding: 0 1rem;\n"]);return g=function(){return n},n}function y(){var n=Object(r.a)(["\n  margin-right: 10px;\n  width: 40px;\n  height: 40px;\n  z-index: 0;\n  @media screen and (max-width: 768px) {\n    width: 1.5rem;\n    height: 1.5rem;\n  }\n"]);return y=function(){return n},n}function b(){var n=Object(r.a)([""]);return b=function(){return n},n}function v(){var n=Object(r.a)(["\n  color: #000;\n\n  display: flex;\n\n  align-items: center;\n  text-decoration: none;\n  padding: 0 1rem;\n  height: 100%;\n  font-size: 1.2rem;\n  font-weight: bold;\n"]);return v=function(){return n},n}function w(){var n=Object(r.a)(["\n  background-color: #ffffff;\n  max-width: 100%;\n  display: flex;\n\n  position: relative;\n  border: none;\n  box-shadow: 0 20px 10px -15px rgba(197, 192, 249, 0.2);\n  text-decoration: none;\n  justify-content: space-between;\n  padding: 0.5rem calc((100vw - 1000px) / 2);\n"]);return w=function(){return n},n}var x=function(n){var t=n.siteTitle,e=Object(o.useState)(),r=e[0],a=(e[1],Object(o.useState)(d)),c=a[0],u=(a[1],c.filter((function(n){if("/tag"===n.link)return n.title})));return i.a.createElement(S,null,i.a.createElement(O,{to:"/"},i.a.createElement(j,{src:l.a}),t),i.a.createElement(k,null,d.map((function(n,t){return i.a.createElement(E,{onClick:u,to:n.link,key:t,style:{backgroundColor:r}},n.title)}))))},S=c.b.div(w()),O=Object(c.b)(a.Link)(v()),j=(c.b.div(b()),c.b.img(y())),E=Object(c.b)(a.Link)(g()),k=c.b.div(h());c.b.div(m());function C(){var n=Object(r.a)(['\n@font-face {\n    font-family: \'GmarketSansMedium\';\n    src: url(\'https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansBold.woff\') format(\'woff\');\n    font-weight: normal;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: \'MapoGoldenPier\';\n    src: url(\'https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/MapoGoldenPierA.woff\') format(\'woff\');\n    font-weight: normal;\n    font-style: normal;\n}\n\n * {\n     font-family: \'MapoGoldenPier\', sans-serif;\n     margin: 0;\n     padding: 0;\n\n    \n }\n /* CSS Custom Properties Definitions */\n\n:root {\n  --maxWidth-none: "none";\n  --maxWidth-xs: 20rem;\n  --maxWidth-sm: 24rem;\n  --maxWidth-md: 28rem;\n  --maxWidth-lg: 32rem;\n  --maxWidth-xl: 36rem;\n  --maxWidth-2xl: 42rem;\n  --maxWidth-3xl: 48rem;\n  --maxWidth-4xl: 56rem;\n  --maxWidth-full: "100%";\n  --maxWidth-wrapper: var(--maxWidth-2xl);\n  --spacing-px: "1px";\n  --spacing-0: 0;\n  --spacing-1: 0.25rem;\n  --spacing-2: 0.5rem;\n  --spacing-3: 0.75rem;\n  --spacing-4: 1rem;\n  --spacing-5: 1.25rem;\n  --spacing-6: 1.5rem;\n  --spacing-8: 2rem;\n  --spacing-10: 2.5rem;\n  --spacing-12: 3rem;\n  --spacing-16: 4rem;\n  --spacing-20: 5rem;\n  --spacing-24: 6rem;\n  --spacing-32: 8rem;\n  --fontFamily-sans: Montserrat, system-ui, -apple-system, BlinkMacSystemFont,\n    "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,\n    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  --fontFamily-serif: "Merriweather", "Georgia", Cambria, "Times New Roman",\n    Times, serif;\n  --font-body: var(--fontFamily-serif);\n  --font-heading: var(--fontFamily-sans);\n  --fontWeight-normal: 400;\n  --fontWeight-medium: 500;\n  --fontWeight-semibold: 600;\n  --fontWeight-bold: 700;\n  --fontWeight-extrabold: 800;\n  --fontWeight-black: 900;\n  --fontSize-root: 16px;\n  --lineHeight-none: 1;\n  --lineHeight-tight: 1.1;\n  --lineHeight-normal: 1.5;\n  --lineHeight-relaxed: 1.625;\n  /* 1.200 Minor Third Type Scale */\n  --fontSize-0: 0.833rem;\n  --fontSize-1: 1rem;\n  --fontSize-2: 1.1rem;\n  --fontSize-3: 1.15rem;\n  --fontSize-4: 1.2rem;\n  --fontSize-5: 1.3rem;\n  --fontSize-6: 1.5rem;\n  --fontSize-7: 2rem;\n  --color-primary: #005b99;\n  --color-text: #2e353f;\n  --color-text-light: #4f5969;\n  --color-heading: #1a202c;\n  --color-heading-black: black;\n  --color-accent: #d1dce5;\n}\n\n/* HTML elements */\n\n*,\n:after,\n:before {\n  box-sizing: border-box;\n}\n\nhtml {\n  line-height: var(--lineHeight-normal);\n  font-size: var(--fontSize-root);\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n       background: #fcfcff;\n}\n\nbody {\n  font-family: var(--font-body);\n  font-size: var(--fontSize-1);\n  color: var(--color-text);\n}\n\nfooter {\n  padding: var(--spacing-6) var(--spacing-0);\n}\n\nhr {\n  background: var(--color-accent);\n  height: 1px;\n  border: 0;\n}\n\n/* Heading */\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-family: MapoGoldenPier;\n  margin-top: var(--spacing-12);\n  margin-bottom: var(--spacing-6);\n  line-height: var(--lineHeight-tight);\n  letter-spacing: -0.025em;\n}\n\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: var(--fontWeight-bold);\n  color: var(--color-heading);\n}\n\nh1 {\n  font-weight: var(--fontWeight-black);\n  font-size: var(--fontSize-6);\n  color: var(--color-heading-black);\n}\n\nh2 {\n  font-size: var(--fontSize-5);\n}\n\nh3 {\n  font-size: var(--fontSize-4);\n}\n\nh4 {\n  font-size: var(--fontSize-3);\n}\n\nh5 {\n  font-size: var(--fontSize-2);\n}\n\nh6 {\n  font-size: var(--fontSize-1);\n}\n\nh1 > a {\n  color: inherit;\n  text-decoration: none;\n}\nh2 > a,\nh3 > a,\nh4 > a,\nh5 > a,\nh6 > a {\n  text-decoration: none;\n  color: inherit;\n}\n\n/* Prose */\n\np {\n  line-height: var(--lineHeight-relaxed);\n  --baseline-multiplier: 0.179;\n  --x-height-multiplier: 0.35;\n  margin: var(--spacing-0) var(--spacing-0) var(--spacing-8) var(--spacing-0);\n  padding: var(--spacing-0);\n}\n\nul,\nol {\n  margin-left: 1.5rem;\n  margin-right: var(--spacing-0);\n  padding: var(--spacing-0);\n  margin-bottom: var(--spacing-8);\n  list-style-position: outside;\n  list-style-image: none;\n}\n\nul li,\nol li {\n  padding-left: var(--spacing-0);\n  margin-bottom: calc(var(--spacing-8) / 2);\n}\n\nli > p {\n  margin-bottom: calc(var(--spacing-8) / 2);\n}\n\nli *:last-child {\n  margin-bottom: var(--spacing-0);\n}\n\nli > ul {\n  margin-left: var(--spacing-8);\n  margin-top: calc(var(--spacing-8) / 2);\n}\n\nblockquote {\n  color: var(--color-text-light);\n  margin-left: 1rem;\n  margin-right: var(--spacing-8);\n  padding: var(--spacing-0) var(--spacing-0) var(--spacing-0) var(--spacing-6);\n  border-left: var(--spacing-1) solid var(--color-primary);\n  font-size: var(--fontSize-2);\n  font-style: italic;\n  margin-bottom: var(--spacing-8);\n\n  \n}\n\nblockquote > :last-child {\n  margin-bottom: var(--spacing-0);\n  \n}\n\nblockquote > ul,\nblockquote > ol {\n  list-style-position: inside;\n}\n\ntable {\n  width: 100%;\n  margin-bottom: var(--spacing-8);\n  border-collapse: collapse;\n  border-spacing: 0.25rem;\n}\n\ntable thead tr th {\n  border-bottom: 1px solid var(--color-accent);\n}\n\n/* Link */\n\na {\n  color: inherit;\n  text-decoration: none;\n}\n\n/* Media queries */\n\n@media (max-width: 42rem) {\n  blockquote {\n    padding: var(--spacing-0) var(--spacing-0) var(--spacing-0) var(--spacing-4);\n    margin-left: var(--spacing-0);\n  }\n  ul,\n  ol {\n    list-style-position: inside;\n  }\n}\n\n \n']);return C=function(){return n},n}var I=Object(c.a)(C());function P(){var n=Object(r.a)(["\n  padding: 0.5rem calc((100vw - 970px) / 2);\n"]);return P=function(){return n},n}t.a=function(n){var t,e=n.children,r=Object(a.useStaticQuery)("3649515864");return i.a.createElement(i.a.Fragment,null,i.a.createElement(I,null),i.a.createElement(x,{siteTitle:(null===(t=r.site.siteMetadata)||void 0===t?void 0:t.title)||"Title"}),i.a.createElement(_,null,e))};var _=c.b.div(P())},"A2+M":function(n,t,e){var r=e("X8hv");n.exports={MDXRenderer:r}},ATp1:function(n,t,e){n.exports=e.p+"static/logo-b1b5cf91cca5ec88a7f1437b06f16e6f.png"},B3Td:function(n,t,e){"use strict";var r=e("MUpH"),o=e("q1tI"),i=e.n(o),a=e("vOnD"),c=[{id:1,name:"소식"},{id:2,name:"클론코딩"},{id:3,name:"공부하기"},{id:4,name:"에러해결"}];function u(){var n=Object(r.a)(["\n  margin-bottom: 10px;\n"]);return u=function(){return n},n}function l(){var n=Object(r.a)(["\n  margin: 10px 10px 10px 30px;\n"]);return l=function(){return n},n}function s(){var n=Object(r.a)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  position: sticky;\n  max-height: 200px;\n  margin-left: 1rem;\n  top: 100px;\n\n  bottom: 0;\n  left: 0;\n  right: 0;\n  p {\n    font-weight: bold;\n  }\n  @media only screen and (max-width: 768px) {\n    display: none;\n  }\n"]);return s=function(){return n},n}t.a=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(f,null,i.a.createElement(p,null,i.a.createElement("p",null,"Tool"),c.map((function(n){var t=n.id,e=n.name;return i.a.createElement(d,{key:t},"▫ ",e)})))))};var f=a.b.div(s()),p=a.b.div(l()),d=a.b.div(u())},Bnag:function(n,t){n.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},"Bp/N":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CommentEmbed=void 0;var r=i(e("q1tI")),o=i(e("17x9"));function i(n){return n&&n.__esModule?n:{default:n}}function a(n){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function c(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function u(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function l(n,t){return(l=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}function s(n){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var e,r=p(n);if(t){var o=p(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return f(this,e)}}function f(n,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):t}function p(n){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}var d=function(n){!function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&l(n,t)}(a,n);var t,e,o,i=s(a);function a(){return c(this,a),i.apply(this,arguments)}return t=a,(e=[{key:"getSrc",value:function(){var n=Number(this.props.commentId).toString(36),t=this.props.showParentComment?"1":"0",e=this.props.showMedia?"1":"0";return"https://embed.disqus.com/p/".concat(n,"?p=").concat(t,"&m=").concat(e)}},{key:"render",value:function(){return r.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0"})}}])&&u(t.prototype,e),o&&u(t,o),a}(r.default.Component);t.CommentEmbed=d,d.defaultProps={showMedia:!0,showParentComment:!0,width:420,height:320},d.propTypes={commentId:o.default.string.isRequired,showMedia:o.default.bool,showParentComment:o.default.bool,width:o.default.number,height:o.default.number}},EbDI:function(n,t){n.exports=function(n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}},GgBC:function(n,t,e){n.exports=e.p+"static/banner2-806ee9daaaaa0a2062da02f00690d579.jpg"},HhXV:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=void 0;var r=a(e("q1tI")),o=a(e("17x9")),i=e("ZMnY");function a(n){return n&&n.__esModule?n:{default:n}}function c(n){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function u(){return(u=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}function l(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function s(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function f(n,t){return(f=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}function p(n){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var e,r=m(n);if(t){var o=m(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return d(this,e)}}function d(n,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):t}function m(n){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}var h=["preData","preInit","onInit","onReady","afterRender","preReset","onIdentify","beforeComment","onNewComment","onPaginate"],g=function(n){!function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&f(n,t)}(c,n);var t,e,o,a=p(c);function c(){return l(this,c),a.apply(this,arguments)}return t=c,(e=[{key:"componentDidMount",value:function(){"undefined"!=typeof window&&window.disqus_shortname&&window.disqus_shortname!==this.props.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"shouldComponentUpdate",value:function(n){return this.props!==n&&(0,i.shallowComparison)(this.props,n)}},{key:"componentDidUpdate",value:function(n){this.props.shortname!==n.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"loadInstance",value:function(){var n=window.document;window&&window.DISQUS&&n.getElementById("dsq-embed-scr")?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.props.shortname,(0,i.insertScript)("https://".concat(this.props.shortname,".disqus.com/embed.js"),"dsq-embed-scr",n.body))}},{key:"cleanInstance",value:function(){var n=window.document;(0,i.removeScript)("dsq-embed-scr",n.body),window&&window.DISQUS&&window.DISQUS.reset({});try{delete window.DISQUS}catch(e){window.DISQUS=void 0}var t=n.getElementById("disqus_thread");if(t)for(;t.hasChildNodes();)t.removeChild(t.firstChild)}},{key:"getDisqusConfig",value:function(n){return function(){var t=this;this.page.identifier=n.identifier,this.page.url=n.url,this.page.title=n.title,this.page.category_id=n.categoryID,this.page.remote_auth_s3=n.remoteAuthS3,this.page.api_key=n.apiKey,n.language&&(this.language=n.language),h.forEach((function(e){t.callbacks[e]=[n[e]]}))}}},{key:"render",value:function(){return r.default.createElement("div",u({},this.props,{id:"disqus_thread"}))}}])&&s(t.prototype,e),o&&s(t,o),c}(r.default.Component);t.DiscussionEmbed=g,g.propTypes={shortname:o.default.string.isRequired,config:o.default.shape({identifier:o.default.string,url:o.default.string,title:o.default.string,language:o.default.string,categoryID:o.default.string,remoteAuthS3:o.default.string,apiKey:o.default.string,preData:o.default.func,preInit:o.default.func,onInit:o.default.func,onReady:o.default.func,afterRender:o.default.func,preReset:o.default.func,onIdentify:o.default.func,beforeComment:o.default.func,onNewComment:o.default.func,onPaginate:o.default.func}).isRequired}},Ijbi:function(n,t,e){var r=e("WkPL");n.exports=function(n){if(Array.isArray(n))return r(n)}},Lnxd:function(n,t,e){"use strict";e.d(t,"a",(function(){return l}));var r=e("q1tI"),o=e.n(r),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=o.a.createContext&&o.a.createContext(i),c=function(){return(c=Object.assign||function(n){for(var t,e=1,r=arguments.length;e<r;e++)for(var o in t=arguments[e])Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n}).apply(this,arguments)},u=function(n,t){var e={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.indexOf(r)<0&&(e[r]=n[r]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(n);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(n,r[o])&&(e[r[o]]=n[r[o]])}return e};function l(n){return function(t){return o.a.createElement(s,c({attr:c({},n.attr)},t),function n(t){return t&&t.map((function(t,e){return o.a.createElement(t.tag,c({key:e},t.attr),n(t.child))}))}(n.child))}}function s(n){var t=function(t){var e,r=n.attr,i=n.size,a=n.title,l=u(n,["attr","size","title"]),s=i||t.size||"1em";return t.className&&(e=t.className),n.className&&(e=(e?e+" ":"")+n.className),o.a.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,l,{className:e,style:c(c({color:n.color||t.color},t.style),n.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),a&&o.a.createElement("title",null,a),n.children)};return void 0!==a?o.a.createElement(a.Consumer,null,(function(n){return t(n)})):t(i)}},R4hV:function(n,t,e){"use strict";e.r(t),e.d(t,"pageQuery",(function(){return d}));var r=e("MUpH"),o=e("q1tI"),i=e.n(o),a=e("B3Td"),c=e("7oih"),u=e("7evw"),l=e("vOnD"),s=e("A2+M");function f(){var n=Object(r.a)(["\n  padding: 2rem;\n  background-color: #fff;\n\n  @media only screen and (max-width: 768px) {\n    padding: 0rem;\n    margin: 0 1rem;\n  }\n"]);return f=function(){return n},n}function p(){var n=Object(r.a)(["\n  display: grid;\n  grid-template-columns: 4fr 1fr;\n\n  @media only screen and (max-width: 768px) {\n    grid-template-columns: 1fr;\n  }\n"]);return p=function(){return n},n}t.default=function(n){var t,e=n.data,r=n.location,o=e.mdx,l=(null===(t=e.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",f={identifier:e.mdx.id,title:o.title,url:"https://hun95.github.io"};return i.a.createElement(c.a,{location:r,title:l},i.a.createElement(m,null,i.a.createElement(h,null,i.a.createElement(s.MDXRenderer,null,o.body)),i.a.createElement(a.a,null),i.a.createElement(u.DiscussionEmbed,{shortname:"hun95",config:f})))};var d="723160570",m=l.b.div(p()),h=l.b.div(f())},RIqP:function(n,t,e){var r=e("Ijbi"),o=e("EbDI"),i=e("ZhPi"),a=e("Bnag");n.exports=function(n){return r(n)||o(n)||i(n)||a()}},SksO:function(n,t){function e(t,r){return n.exports=e=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n},e(t,r)}n.exports=e},UZsz:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CommentCount=void 0;var r=a(e("q1tI")),o=a(e("17x9")),i=e("ZMnY");function a(n){return n&&n.__esModule?n:{default:n}}function c(n){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function u(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function l(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function s(n,t){return(s=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}function f(n){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var e,r=d(n);if(t){var o=d(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return p(this,e)}}function p(n,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):t}function d(n){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}var m=(0,i.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1),h=function(n){!function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&s(n,t)}(c,n);var t,e,o,a=f(c);function c(){return u(this,c),a.apply(this,arguments)}return t=c,(e=[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(n){return this.props!==n&&(0,i.shallowComparison)(this.props,n)}},{key:"componentDidUpdate",value:function(n){this.props.shortname!==n.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"loadInstance",value:function(){var n=window.document;n.getElementById("dsq-count-scr")?m():(0,i.insertScript)("https://".concat(this.props.shortname,".disqus.com/count.js"),"dsq-count-scr",n.body)}},{key:"cleanInstance",value:function(){var n=window.document.body;(0,i.removeScript)("dsq-count-scr",n),window.DISQUSWIDGETS=void 0}},{key:"render",value:function(){return r.default.createElement("span",{className:"disqus-comment-count","data-disqus-identifier":this.props.config.identifier,"data-disqus-url":this.props.config.url},this.props.children)}}])&&l(t.prototype,e),o&&l(t,o),c}(r.default.Component);t.CommentCount=h,h.propTypes={shortname:o.default.string.isRequired,config:o.default.shape({identifier:o.default.string,url:o.default.string,title:o.default.string}).isRequired}},WkPL:function(n,t){n.exports=function(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}},X8hv:function(n,t,e){var r=e("sXyB"),o=e("RIqP"),i=e("lSNA"),a=e("8OQS");function c(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function u(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?c(Object(e),!0).forEach((function(t){i(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):c(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}var l=e("q1tI"),s=e("7ljp").mdx,f=e("BfwJ").useMDXScope;n.exports=function(n){var t=n.scope,e=n.children,i=a(n,["scope","children"]),c=f(t),p=l.useMemo((function(){if(!e)return null;var n=u({React:l,mdx:s},c),t=Object.keys(n),i=t.map((function(t){return n[t]}));return r(Function,["_fn"].concat(o(t),[""+e])).apply(void 0,[{}].concat(o(i)))}),[e,t]);return l.createElement(p,u({},i))}},ZMnY:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.insertScript=function(n,t,e){var r=window.document.createElement("script");return r.async=!0,r.src=n,r.id=t,e.appendChild(r),r},t.removeScript=function(n,t){var e=window.document.getElementById(n);e&&t.removeChild(e)},t.debounce=function(n,t,e){var r;return function(){var o=this,i=arguments,a=function(){r=null,e||n.apply(o,i)},c=e&&!r;window.clearTimeout(r),r=setTimeout(a,t),c&&n.apply(o,i)}},t.isReactElement=c,t.shallowComparison=function n(t,e){var r,o=function(n){if("undefined"==typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(n=function(n,t){if(!n)return;if("string"==typeof n)return a(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e)return Array.from(n);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return a(n,t)}(n))){var t=0,e=function(){};return{s:e,n:function(){return t>=n.length?{done:!0}:{done:!1,value:n[t++]}},e:function(n){throw n},f:e}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o,i=!0,c=!1;return{s:function(){r=n[Symbol.iterator]()},n:function(){var n=r.next();return i=n.done,n},e:function(n){c=!0,o=n},f:function(){try{i||null==r.return||r.return()}finally{if(c)throw o}}}}(new Set(Object.keys(t),Object.keys(e)));try{for(o.s();!(r=o.n()).done;){var u=r.value;if("object"===i(t[u])){if(n(t[u],e[u]))return!0}else if(t[u]!==e[u]&&!c(t[u]))return!0}}catch(l){o.e(l)}finally{o.f()}return!1};var r,o=(r=e("q1tI"))&&r.__esModule?r:{default:r};function i(n){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function a(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function c(n){return!!o.default.isValidElement(n)||!!Array.isArray(n)&&n.some((function(n){return o.default.isValidElement(n)}))}},ZhPi:function(n,t,e){var r=e("WkPL");n.exports=function(n,t){if(n){if("string"==typeof n)return r(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(n,t):void 0}}},b48C:function(n,t){n.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}},sXyB:function(n,t,e){var r=e("SksO"),o=e("b48C");function i(t,e,a){return o()?n.exports=i=Reflect.construct:n.exports=i=function(n,t,e){var o=[null];o.push.apply(o,t);var i=new(Function.bind.apply(n,o));return e&&r(i,e.prototype),i},i.apply(null,arguments)}n.exports=i}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-623f8319c1298b4685ff.js.map