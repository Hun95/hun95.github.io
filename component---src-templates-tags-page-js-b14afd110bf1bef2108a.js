(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"0Wn5":function(n,e,t){"use strict";var a=t("MUpH"),r=t("q1tI"),i=t.n(r),o=t("vOnD"),l=t("GgBC"),c=t.n(l);function s(){var n=Object(a.a)(["\n  margin: 2rem 0;\n  width: 100%;\n\n  height: auto;\n"]);return s=function(){return n},n}e.a=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(m,{src:c.a}))};var m=o.b.img(s())},"7oih":function(n,e,t){"use strict";var a=t("MUpH"),r=t("q1tI"),i=t.n(r),o=(t("0Wn5"),t("Wbzz")),l=t("vOnD"),c=t("ATp1"),s=t.n(c),m=t("+jxT"),g=t("X13+"),f=t("iNdW"),d=[{title:i.a.createElement(f.a,{style:{color:"black",fontSize:"1.5rem",verticalAign:"middle",marginTop:"2px"}}),link:"/tag"},{title:i.a.createElement(m.a,{style:{color:"black",fontSize:"1.5rem",verticalAign:"middle"}}),link:"/together"},{title:i.a.createElement(g.a,{style:{color:"black",fontSize:"1.5rem",verticalAign:"middle"}}),link:"/chat"}];function p(){var n=Object(a.a)(["\n  width: 50px;\n  height: 20px;\n  position: relavie;\n"]);return p=function(){return n},n}function u(){var n=Object(a.a)(["\n  display: flex;\n  align-items: center;\n\n  @media screen and (max-width: 768px) {\n    margin-right: 15px;\n  }\n  @media screen and (max-width: 500px) {\n    margin-right: auto;\n    display: none;\n  }\n"]);return u=function(){return n},n}function h(){var n=Object(a.a)(["\n  justify-content: space-between;\n  padding: 0 1rem;\n"]);return h=function(){return n},n}function v(){var n=Object(a.a)(["\n  margin-right: 10px;\n  width: 40px;\n  height: 40px;\n  z-index: 0;\n  @media screen and (max-width: 768px) {\n    width: 1.5rem;\n    height: 1.5rem;\n  }\n"]);return v=function(){return n},n}function b(){var n=Object(a.a)([""]);return b=function(){return n},n}function x(){var n=Object(a.a)(["\n  color: #000;\n\n  display: flex;\n\n  align-items: center;\n  text-decoration: none;\n  padding: 0 1rem;\n  height: 100%;\n  font-size: 1.2rem;\n  font-weight: bold;\n"]);return x=function(){return n},n}function y(){var n=Object(a.a)(["\n  background-color: #ffffff;\n  max-width: 100%;\n  display: flex;\n\n  position: relative;\n  border: none;\n  box-shadow: 0 20px 10px -15px rgba(197, 192, 249, 0.2);\n  text-decoration: none;\n  justify-content: space-between;\n  padding: 0.5rem calc((100vw - 1000px) / 2);\n"]);return y=function(){return n},n}var w=function(n){var e=n.siteTitle,t=Object(r.useState)(),a=t[0],o=(t[1],Object(r.useState)(d)),l=o[0],c=(o[1],l.filter((function(n){if("/tag"===n.link)return n.title})));return i.a.createElement(z,null,i.a.createElement(k,{to:"/"},i.a.createElement(S,{src:s.a}),e),i.a.createElement(O,null,d.map((function(n,e){return i.a.createElement(j,{onClick:c,to:n.link,key:e,style:{backgroundColor:a}},n.title)}))))},z=l.b.div(y()),k=Object(l.b)(o.Link)(x()),S=(l.b.div(b()),l.b.img(v())),j=Object(l.b)(o.Link)(h()),O=l.b.div(u());l.b.div(p());function E(){var n=Object(a.a)(['\n@font-face {\n    font-family: \'GmarketSansMedium\';\n    src: url(\'https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansBold.woff\') format(\'woff\');\n    font-weight: normal;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: \'MapoGoldenPier\';\n    src: url(\'https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/MapoGoldenPierA.woff\') format(\'woff\');\n    font-weight: normal;\n    font-style: normal;\n}\n\n * {\n     font-family: \'MapoGoldenPier\', sans-serif;\n     margin: 0;\n     padding: 0;\n\n    \n }\n /* CSS Custom Properties Definitions */\n\n:root {\n  --maxWidth-none: "none";\n  --maxWidth-xs: 20rem;\n  --maxWidth-sm: 24rem;\n  --maxWidth-md: 28rem;\n  --maxWidth-lg: 32rem;\n  --maxWidth-xl: 36rem;\n  --maxWidth-2xl: 42rem;\n  --maxWidth-3xl: 48rem;\n  --maxWidth-4xl: 56rem;\n  --maxWidth-full: "100%";\n  --maxWidth-wrapper: var(--maxWidth-2xl);\n  --spacing-px: "1px";\n  --spacing-0: 0;\n  --spacing-1: 0.25rem;\n  --spacing-2: 0.5rem;\n  --spacing-3: 0.75rem;\n  --spacing-4: 1rem;\n  --spacing-5: 1.25rem;\n  --spacing-6: 1.5rem;\n  --spacing-8: 2rem;\n  --spacing-10: 2.5rem;\n  --spacing-12: 3rem;\n  --spacing-16: 4rem;\n  --spacing-20: 5rem;\n  --spacing-24: 6rem;\n  --spacing-32: 8rem;\n  --fontFamily-sans: Montserrat, system-ui, -apple-system, BlinkMacSystemFont,\n    "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,\n    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  --fontFamily-serif: "Merriweather", "Georgia", Cambria, "Times New Roman",\n    Times, serif;\n  --font-body: var(--fontFamily-serif);\n  --font-heading: var(--fontFamily-sans);\n  --fontWeight-normal: 400;\n  --fontWeight-medium: 500;\n  --fontWeight-semibold: 600;\n  --fontWeight-bold: 700;\n  --fontWeight-extrabold: 800;\n  --fontWeight-black: 900;\n  --fontSize-root: 16px;\n  --lineHeight-none: 1;\n  --lineHeight-tight: 1.1;\n  --lineHeight-normal: 1.5;\n  --lineHeight-relaxed: 1.625;\n  /* 1.200 Minor Third Type Scale */\n  --fontSize-0: 0.833rem;\n  --fontSize-1: 1rem;\n  --fontSize-2: 1.1rem;\n  --fontSize-3: 1.15rem;\n  --fontSize-4: 1.2rem;\n  --fontSize-5: 1.3rem;\n  --fontSize-6: 1.5rem;\n  --fontSize-7: 2rem;\n  --color-primary: #005b99;\n  --color-text: #2e353f;\n  --color-text-light: #4f5969;\n  --color-heading: #1a202c;\n  --color-heading-black: black;\n  --color-accent: #d1dce5;\n}\n\n/* HTML elements */\n\n*,\n:after,\n:before {\n  box-sizing: border-box;\n}\n\nhtml {\n  line-height: var(--lineHeight-normal);\n  font-size: var(--fontSize-root);\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n       background: #fcfcff;\n}\n\nbody {\n  font-family: var(--font-body);\n  font-size: var(--fontSize-1);\n  color: var(--color-text);\n}\n\nfooter {\n  padding: var(--spacing-6) var(--spacing-0);\n}\n\nhr {\n  background: var(--color-accent);\n  height: 1px;\n  border: 0;\n}\n\n/* Heading */\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-family: MapoGoldenPier;\n  margin-top: var(--spacing-12);\n  margin-bottom: var(--spacing-6);\n  line-height: var(--lineHeight-tight);\n  letter-spacing: -0.025em;\n}\n\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: var(--fontWeight-bold);\n  color: var(--color-heading);\n}\n\nh1 {\n  font-weight: var(--fontWeight-black);\n  font-size: var(--fontSize-6);\n  color: var(--color-heading-black);\n}\n\nh2 {\n  font-size: var(--fontSize-5);\n}\n\nh3 {\n  font-size: var(--fontSize-4);\n}\n\nh4 {\n  font-size: var(--fontSize-3);\n}\n\nh5 {\n  font-size: var(--fontSize-2);\n}\n\nh6 {\n  font-size: var(--fontSize-1);\n}\n\nh1 > a {\n  color: inherit;\n  text-decoration: none;\n}\nh2 > a,\nh3 > a,\nh4 > a,\nh5 > a,\nh6 > a {\n  text-decoration: none;\n  color: inherit;\n}\n\n/* Prose */\n\np {\n  line-height: var(--lineHeight-relaxed);\n  --baseline-multiplier: 0.179;\n  --x-height-multiplier: 0.35;\n  margin: var(--spacing-0) var(--spacing-0) var(--spacing-8) var(--spacing-0);\n  padding: var(--spacing-0);\n}\n\nul,\nol {\n  margin-left: 1.5rem;\n  margin-right: var(--spacing-0);\n  padding: var(--spacing-0);\n  margin-bottom: var(--spacing-8);\n  list-style-position: outside;\n  list-style-image: none;\n}\n\nul li,\nol li {\n  padding-left: var(--spacing-0);\n  margin-bottom: calc(var(--spacing-8) / 2);\n}\n\nli > p {\n  margin-bottom: calc(var(--spacing-8) / 2);\n}\n\nli *:last-child {\n  margin-bottom: var(--spacing-0);\n}\n\nli > ul {\n  margin-left: var(--spacing-8);\n  margin-top: calc(var(--spacing-8) / 2);\n}\n\nblockquote {\n  color: var(--color-text-light);\n  margin-left: 1rem;\n  margin-right: var(--spacing-8);\n  padding: var(--spacing-0) var(--spacing-0) var(--spacing-0) var(--spacing-6);\n  border-left: var(--spacing-1) solid var(--color-primary);\n  font-size: var(--fontSize-2);\n  font-style: italic;\n  margin-bottom: var(--spacing-8);\n\n  \n}\n\nblockquote > :last-child {\n  margin-bottom: var(--spacing-0);\n  \n}\n\nblockquote > ul,\nblockquote > ol {\n  list-style-position: inside;\n}\n\ntable {\n  width: 100%;\n  margin-bottom: var(--spacing-8);\n  border-collapse: collapse;\n  border-spacing: 0.25rem;\n}\n\ntable thead tr th {\n  border-bottom: 1px solid var(--color-accent);\n}\n\n/* Link */\n\na {\n  color: inherit;\n  text-decoration: none;\n}\n\n/* Media queries */\n\n@media (max-width: 42rem) {\n  blockquote {\n    padding: var(--spacing-0) var(--spacing-0) var(--spacing-0) var(--spacing-4);\n    margin-left: var(--spacing-0);\n  }\n  ul,\n  ol {\n    list-style-position: inside;\n  }\n}\n\n \n']);return E=function(){return n},n}var W=Object(l.a)(E());function C(){var n=Object(a.a)(["\n  padding: 0.5rem calc((100vw - 970px) / 2);\n"]);return C=function(){return n},n}e.a=function(n){var e,t=n.children,a=Object(o.useStaticQuery)("3649515864");return i.a.createElement(i.a.Fragment,null,i.a.createElement(W,null),i.a.createElement(w,{siteTitle:(null===(e=a.site.siteMetadata)||void 0===e?void 0:e.title)||"Title"}),i.a.createElement(M,null,t))};var M=l.b.div(C())},ATp1:function(n,e,t){n.exports=t.p+"static/logo-b1b5cf91cca5ec88a7f1437b06f16e6f.png"},GgBC:function(n,e,t){n.exports=t.p+"static/banner2-806ee9daaaaa0a2062da02f00690d579.jpg"},Lnxd:function(n,e,t){"use strict";t.d(e,"a",(function(){return s}));var a=t("q1tI"),r=t.n(a),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=r.a.createContext&&r.a.createContext(i),l=function(){return(l=Object.assign||function(n){for(var e,t=1,a=arguments.length;t<a;t++)for(var r in e=arguments[t])Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}).apply(this,arguments)},c=function(n,e){var t={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&e.indexOf(a)<0&&(t[a]=n[a]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(n);r<a.length;r++)e.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(n,a[r])&&(t[a[r]]=n[a[r]])}return t};function s(n){return function(e){return r.a.createElement(m,l({attr:l({},n.attr)},e),function n(e){return e&&e.map((function(e,t){return r.a.createElement(e.tag,l({key:t},e.attr),n(e.child))}))}(n.child))}}function m(n){var e=function(e){var t,a=n.attr,i=n.size,o=n.title,s=c(n,["attr","size","title"]),m=i||e.size||"1em";return e.className&&(t=e.className),n.className&&(t=(t?t+" ":"")+n.className),r.a.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,a,s,{className:t,style:l(l({color:n.color||e.color},e.style),n.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),o&&r.a.createElement("title",null,o),n.children)};return void 0!==o?r.a.createElement(o.Consumer,null,(function(n){return e(n)})):e(i)}},dunR:function(n,e,t){"use strict";t.r(e),t.d(e,"pageQuery",(function(){return l}));var a=t("q1tI"),r=t.n(a),i=t("7oih"),o=t("Wbzz");e.default=function(n){var e=n.pageContext,t=n.data,a=e.tag,l=t.allMdx,c=l.edges,s=l.totalCount,m=s+" post"+(1===s?"":"s")+' tagged with "'+a+'"';return r.a.createElement(i.a,null,r.a.createElement("h1",null,m),r.a.createElement("ul",null,c.map((function(n){var e=n.node,t=e.fields.slug,a=e.frontmatter.title;return r.a.createElement("li",{key:t},r.a.createElement(o.Link,{to:t},a))}))),r.a.createElement(o.Link,{to:"/tag"},"All tags"))};var l="747443251"}}]);
//# sourceMappingURL=component---src-templates-tags-page-js-b14afd110bf1bef2108a.js.map