(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"9eSz":function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),s=r(a("VbXa")),l=r(a("8OQS")),o=r(a("pVnL")),c=r(a("q1tI")),d=r(a("17x9")),u=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed,r=p(t||a||[]);return r&&r.src},p=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},g=Object.create({}),h=function(e){var t=u(e),a=m(t);return g[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,E=v&&window.IntersectionObserver,y=new WeakMap;function S(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},r&&c.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),a&&c.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function O(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function N(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function R(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var j=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},x=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?R(e,!0):"")+R(e)})).join("")+"<img "+c+s+l+a+r+t+n+i+o+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},L=c.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,s=e.ariaHidden,l=c.default.createElement(k,(0,o.default)({ref:t,src:a},n,{ariaHidden:s}));return r.length>1?c.default.createElement("picture",null,i(r),l):l})),k=c.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,d=e.onError,u=e.loading,f=e.draggable,m=e.ariaHidden,p=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return c.default.createElement("img",(0,o.default)({"aria-hidden":m,sizes:a,srcSet:r,src:i},p,{onLoad:s,onError:d,ref:t,loading:u,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));k.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var z=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=v&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&E&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||v&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=c.default.createRef(),a.placeholderRef=t.placeholderRef||c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:v}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=j(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),(a=m(t))&&(g[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,l=void 0===s?{}:s,d=e.placeholderStyle,f=void 0===d?{}:d,m=e.placeholderClassName,g=e.fluid,h=e.fixed,b=e.backgroundColor,v=e.durationFadeIn,E=e.Tag,y=e.itemProp,w=e.loading,R=e.draggable,j=g||h;if(!j)return null;var z=!1===this.state.fadeIn||this.state.imgLoaded,I=!0===this.state.fadeIn&&!this.state.imgCached,M=(0,o.default)({opacity:z?1:0,transition:I?"opacity "+v+"ms":"none"},l),P="boolean"==typeof b?"lightgray":b,V={transitionDelay:v+"ms"},C=(0,o.default)({opacity:this.state.imgLoaded?0:1},I&&V,l,f),H={title:t,alt:this.state.isVisible?"":a,style:C,className:m,itemProp:y},T=this.state.isHydrated?p(j):j[0];if(g)return c.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden",maxWidth:T.maxWidth?T.maxWidth+"px":null,maxHeight:T.maxHeight?T.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(T.srcSet)},c.default.createElement(E,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/T.aspectRatio+"%"}}),P&&c.default.createElement(E,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:P,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},I&&V)}),T.base64&&c.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:T.base64,spreadProps:H,imageVariants:j,generateSources:N}),T.tracedSVG&&c.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:T.tracedSVG,spreadProps:H,imageVariants:j,generateSources:O}),this.state.isVisible&&c.default.createElement("picture",null,S(j),c.default.createElement(k,{alt:a,title:t,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:M,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:w,draggable:R})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,o.default)({alt:a,title:t,loading:w},T,{imageVariants:j}))}}));if(h){var q=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:T.width,height:T.height},n);return"inherit"===n.display&&delete q.display,c.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:q,ref:this.handleRef,key:"fixed-"+JSON.stringify(T.srcSet)},P&&c.default.createElement(E,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:P,width:T.width,opacity:this.state.imgLoaded?0:1,height:T.height},I&&V)}),T.base64&&c.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:T.base64,spreadProps:H,imageVariants:j,generateSources:N}),T.tracedSVG&&c.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:T.tracedSVG,spreadProps:H,imageVariants:j,generateSources:O}),this.state.isVisible&&c.default.createElement("picture",null,S(j),c.default.createElement(k,{alt:a,title:t,width:T.width,height:T.height,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:M,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:w,draggable:R})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,o.default)({alt:a,title:t,loading:w},T,{imageVariants:j}))}}))}return null},t}(c.default.Component);z.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var I=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),M=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string,maxWidth:d.default.number,maxHeight:d.default.number});function P(e){return function(t,a,r){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");d.default.checkPropTypes(((i={})[a]=e,i),t,"prop",r)}}z.propTypes={resolutions:I,sizes:M,fixed:P(d.default.oneOfType([I,d.default.arrayOf(I)])),fluid:P(d.default.oneOfType([M,d.default.arrayOf(M)])),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var V=z;t.default=V},RXBc:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),i=a.n(r),n=a("Wbzz"),s=a("Bl7J"),l=a("wx14"),o=a("zLVn"),c=a("TSYQ"),d=a.n(c),u=a("33Jr"),f=function(e){var t=e.className,a=e.cssModule,r=e.color,n=e.body,s=e.inverse,c=e.outline,f=e.tag,m=e.innerRef,p=Object(o.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),g=Object(u.e)(d()(t,"card",!!s&&"text-white",!!n&&"card-body",!!r&&(c?"border":"bg")+"-"+r),a);return i.a.createElement(f,Object(l.a)({},p,{className:g,ref:m}))};f.defaultProps={tag:"div"};var m=f,p=function(e){var t=e.className,a=e.cssModule,r=e.innerRef,n=e.tag,s=Object(o.a)(e,["className","cssModule","innerRef","tag"]),c=Object(u.e)(d()(t,"card-body"),a);return i.a.createElement(n,Object(l.a)({},s,{className:c,ref:r}))};p.defaultProps={tag:"div"};var g=p,h=function(e){var t=e.className,a=e.cssModule,r=e.tag,n=Object(o.a)(e,["className","cssModule","tag"]),s=Object(u.e)(d()(t,"card-title"),a);return i.a.createElement(r,Object(l.a)({},n,{className:s}))};h.defaultProps={tag:"div"};var b=h,v=function(e){var t=e.className,a=e.cssModule,r=e.tag,n=Object(o.a)(e,["className","cssModule","tag"]),s=Object(u.e)(d()(t,"card-subtitle"),a);return i.a.createElement(r,Object(l.a)({},n,{className:s}))};v.defaultProps={tag:"div"};var E=v,y=function(e){var t=e.className,a=e.cssModule,r=e.tag,n=Object(o.a)(e,["className","cssModule","tag"]),s=Object(u.e)(d()(t,"card-text"),a);return i.a.createElement(r,Object(l.a)({},n,{className:s}))};y.defaultProps={tag:"p"};var S=y,w=function(e){var t=e.className,a=e.cssModule,r=e.color,n=e.innerRef,s=e.pill,c=e.tag,f=Object(o.a)(e,["className","cssModule","color","innerRef","pill","tag"]),m=Object(u.e)(d()(t,"badge","badge-"+r,!!s&&"badge-pill"),a);return f.href&&"span"===c&&(c="a"),i.a.createElement(c,Object(l.a)({},f,{className:m,ref:n}))};w.defaultProps={color:"secondary",pill:!1,tag:"span"};var O=w,N=a("9eSz"),R=a.n(N),j=function(e){var t=e.title,a=e.slug,r=e.date,s=e.body,l=e.fluid,o=e.tags;return i.a.createElement(m,null,i.a.createElement(n.Link,{to:a},i.a.createElement(R.a,{className:"card-image-top",fluid:l})),i.a.createElement(g,null,i.a.createElement(n.Link,{to:a},i.a.createElement(b,null,t)),i.a.createElement(E,null,i.a.createElement("span",{className:"text-info"},r)," by"," "),i.a.createElement(S,null,s),i.a.createElement("ul",{className:"post-tags"},o.map((function(e){return i.a.createElement("li",null,i.a.createElement(n.Link,{to:"/tag/"+e},i.a.createElement(O,{color:"primary",className:"text-uppercase"},e)))}))),i.a.createElement(n.Link,{to:a,className:"btn btn-outline-primary float-right"},"Read More")))},x=a("vrFN"),L=a("JX7q"),k=a("dI71"),z=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(L.a)(a)),a.submit=a.submit.bind(Object(L.a)(a)),a}Object(k.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,r=e.inline,n=e.tag,s=e.innerRef,c=Object(o.a)(e,["className","cssModule","inline","tag","innerRef"]),f=Object(u.e)(d()(t,!!r&&"form-inline"),a);return i.a.createElement(n,Object(l.a)({},c,{ref:s,className:f}))},t}(r.Component);z.defaultProps={tag:"form"};var I=z,M=function(e){var t=e.className,a=e.cssModule,r=e.row,n=e.disabled,s=e.check,c=e.inline,f=e.tag,m=Object(o.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),p=Object(u.e)(d()(t,!!r&&"row",s?"form-check":"form-group",!(!s||!c)&&"form-check-inline",!(!s||!n)&&"disabled"),a);return"fieldset"===f&&(m.disabled=n),i.a.createElement(f,Object(l.a)({},m,{className:p}))};M.defaultProps={tag:"div"};var P=M,V=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(L.a)(a)),a.focus=a.focus.bind(Object(L.a)(a)),a}Object(k.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,r=e.type,n=e.bsSize,s=e.valid,c=e.invalid,f=e.tag,m=e.addon,p=e.plaintext,g=e.innerRef,h=Object(o.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),b=["radio","checkbox"].indexOf(r)>-1,v=new RegExp("\\D","g"),E=f||("select"===r||"textarea"===r?r:"input"),y="form-control";p?(y+="-plaintext",E=f||"input"):"file"===r?y+="-file":"range"===r?y+="-range":b&&(y=m?null:"form-check-input"),h.size&&v.test(h.size)&&(Object(u.h)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),n=h.size,delete h.size);var S=Object(u.e)(d()(t,c&&"is-invalid",s&&"is-valid",!!n&&"form-control-"+n,y),a);return("input"===E||f&&"function"==typeof f)&&(h.type=r),h.children&&!p&&"select"!==r&&"string"==typeof E&&"select"!==E&&(Object(u.h)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete h.children),i.a.createElement(E,Object(l.a)({},h,{ref:g,className:S,"aria-invalid":c}))},t}(i.a.Component);V.defaultProps={type:"text"};var C=V,H="979176408",T=function(){return i.a.createElement("div",null,i.a.createElement(m,null,i.a.createElement(g,null,i.a.createElement(b,{className:"text-center text-uppercase mb-3"},"뉴스레터"),i.a.createElement(I,{className:"text-center"},i.a.createElement(P,null,i.a.createElement(C,{type:"email",name:"email",placeholder:"Your Email"})),i.a.createElement("button",{className:"btn btn-outline-success text-uppercase"},"구독")))),i.a.createElement(m,null,i.a.createElement(g,null,i.a.createElement(b,{className:"text-center text-uppercase"},"광고"),i.a.createElement("img",{src:"https://via.placeholder.com/320x200",alt:"Advert",style:{width:"100%"}}))),i.a.createElement(m,null,i.a.createElement(g,null,i.a.createElement(b,{className:"text-center text-uppercase"},"최신글"),i.a.createElement(n.StaticQuery,{query:H,render:function(e){return i.a.createElement("div",null,e.allMarkdownRemark.edges.map((function(e){var t=e.node;return i.a.createElement(m,{key:t.id},i.a.createElement(n.Link,{to:t.fields.slug},i.a.createElement(R.a,{className:"card-image-top",fluid:t.frontmatter.image.childImageSharp.fluid})),i.a.createElement(g,null,i.a.createElement(b,null,i.a.createElement(n.Link,{to:t.fields.slug},t.frontmatter.title))))})))}}))))},q=function(){return i.a.createElement("div",{className:"site-footer"},i.a.createElement("h4",{className:"text-center"},"수염난친구"),i.a.createElement("p",{className:"text-center"},"소셜"),i.a.createElement("div",{className:"footer-social-links"},i.a.createElement("ul",{className:"social-links-list"},i.a.createElement("li",null,i.a.createElement("a",{href:"https://www.facebook.com",target:"_blank",rel:"noreferrer"},i.a.createElement("i",{class:"fab fa-facebook-f fa-2x"}))))))},W=function(e){var t=e.className,a=e.cssModule,r=e.noGutters,n=e.tag,s=e.form,c=e.widths,f=Object(o.a)(e,["className","cssModule","noGutters","tag","form","widths"]),m=[];c.forEach((function(t,a){var r=e[t];if(delete f[t],r){var i=!a;m.push(i?"row-cols-"+r:"row-cols-"+t+"-"+r)}}));var p=Object(u.e)(d()(t,r?"no-gutters":null,s?"form-row":"row",m),a);return i.a.createElement(n,Object(l.a)({},f,{className:p}))};W.defaultProps={tag:"div",widths:["xs","sm","md","lg","xl"]};var G=W,J=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},_=function(e){var t=e.className,a=e.cssModule,r=e.widths,n=e.tag,s=Object(o.a)(e,["className","cssModule","widths","tag"]),c=[];r.forEach((function(t,r){var i=e[t];if(delete s[t],i||""===i){var n=!r;if(Object(u.d)(i)){var l,o=n?"-":"-"+t+"-",f=J(n,t,i.size);c.push(Object(u.e)(d()(((l={})[f]=i.size||""===i.size,l["order"+o+i.order]=i.order||0===i.order,l["offset"+o+i.offset]=i.offset||0===i.offset,l)),a))}else{var m=J(n,t,i);c.push(m)}}})),c.length||c.push("col");var f=Object(u.e)(d()(t,c),a);return i.a.createElement(n,Object(l.a)({},s,{className:f}))};_.defaultProps={tag:"div",widths:["xs","sm","md","lg","xl"]};var B=_,F="3255588109";t.default=function(){return i.a.createElement(s.a,null,i.a.createElement(x.a,{title:"Home"}),i.a.createElement("h1",null,"홈"),i.a.createElement(G,null,i.a.createElement(B,{md:"8"},i.a.createElement(n.StaticQuery,{query:F,render:function(e){return i.a.createElement("div",null,e.allMarkdownRemark.edges.map((function(e){var t=e.node;return i.a.createElement(j,{title:t.frontmatter.title,slug:t.fields.slug,date:t.frontmatter.date,body:t.excerpt,fluid:t.frontmatter.image.childImageSharp.fluid,tags:t.frontmatter.tags})})))}})),i.a.createElement(B,{md:"4"},i.a.createElement("div",{style:{width:"100%",height:"100%",backgroundColor:"rgba(0,0,0,0.4)"}},i.a.createElement(T,null)))),i.a.createElement(q,null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-994993e9ccc234749c66.js.map