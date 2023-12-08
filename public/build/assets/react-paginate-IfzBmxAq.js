import{R as x,r as me,a as Ka,f as Ja}from"../.vite/manifest.json";import{P}from"./index-v-lOFoFl.js";function Bt(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?Bt(Object(a),!0).forEach(function(n){U(e,n,a[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Bt(Object(a)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))})}return e}function rt(e){"@babel/helpers - typeof";return rt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},rt(e)}function Qa(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function qt(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Za(e,t,a){return t&&qt(e.prototype,t),a&&qt(e,a),Object.defineProperty(e,"prototype",{writable:!1}),e}function U(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function Tt(e,t){return tn(e)||nn(e,t)||ha(e,t)||on()}function He(e){return en(e)||an(e)||ha(e)||rn()}function en(e){if(Array.isArray(e))return ht(e)}function tn(e){if(Array.isArray(e))return e}function an(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function nn(e,t){var a=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(a!=null){var n=[],r=!0,i=!1,o,s;try{for(a=a.call(e);!(r=(o=a.next()).done)&&(n.push(o.value),!(t&&n.length===t));r=!0);}catch(f){i=!0,s=f}finally{try{!r&&a.return!=null&&a.return()}finally{if(i)throw s}}return n}}function ha(e,t){if(e){if(typeof e=="string")return ht(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);if(a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set")return Array.from(e);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return ht(e,t)}}function ht(e,t){(t==null||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function rn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function on(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Gt=function(){},_t={},ya={},ka=null,xa={mark:Gt,measure:Gt};try{typeof window<"u"&&(_t=window),typeof document<"u"&&(ya=document),typeof MutationObserver<"u"&&(ka=MutationObserver),typeof performance<"u"&&(xa=performance)}catch{}var sn=_t.navigator||{},Xt=sn.userAgent,Vt=Xt===void 0?"":Xt,pe=_t,T=ya,Kt=ka,Ge=xa;pe.document;var re=!!T.documentElement&&!!T.head&&typeof T.addEventListener=="function"&&typeof T.createElement=="function",wa=~Vt.indexOf("MSIE")||~Vt.indexOf("Trident/"),Xe,Ve,Ke,Je,Qe,te="___FONT_AWESOME___",yt=16,Pa="fa",Ca="svg-inline--fa",Pe="data-fa-i2svg",kt="data-fa-pseudo-element",ln="data-fa-pseudo-element-pending",Rt="data-prefix",Mt="data-icon",Jt="fontawesome-i2svg",fn="async",cn=["HTML","HEAD","STYLE","SCRIPT"],Aa=function(){try{return!0}catch{return!1}}(),I="classic",z="sharp",jt=[I,z];function Ue(e){return new Proxy(e,{get:function(a,n){return n in a?a[n]:a[I]}})}var De=Ue((Xe={},U(Xe,I,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),U(Xe,z,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),Xe)),ze=Ue((Ve={},U(Ve,I,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),U(Ve,z,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Ve)),Fe=Ue((Ke={},U(Ke,I,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),U(Ke,z,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Ke)),un=Ue((Je={},U(Je,I,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),U(Je,z,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),Je)),mn=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Ea="fa-layers-text",dn=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,pn=Ue((Qe={},U(Qe,I,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),U(Qe,z,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Qe)),Oa=[1,2,3,4,5,6,7,8,9,10],vn=Oa.concat([11,12,13,14,15,16,17,18,19,20]),gn=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ke={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ye=new Set;Object.keys(ze[I]).map(Ye.add.bind(Ye));Object.keys(ze[z]).map(Ye.add.bind(Ye));var bn=[].concat(jt,He(Ye),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ke.GROUP,ke.SWAP_OPACITY,ke.PRIMARY,ke.SECONDARY]).concat(Oa.map(function(e){return"".concat(e,"x")})).concat(vn.map(function(e){return"w-".concat(e)})),Me=pe.FontAwesomeConfig||{};function hn(e){var t=T.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function yn(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(T&&typeof T.querySelector=="function"){var kn=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];kn.forEach(function(e){var t=Tt(e,2),a=t[0],n=t[1],r=yn(hn(a));r!=null&&(Me[n]=r)})}var Na={styleDefault:"solid",familyDefault:"classic",cssPrefix:Pa,replacementClass:Ca,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Me.familyPrefix&&(Me.cssPrefix=Me.familyPrefix);var Le=d(d({},Na),Me);Le.autoReplaceSvg||(Le.observeMutations=!1);var p={};Object.keys(Na).forEach(function(e){Object.defineProperty(p,e,{enumerable:!0,set:function(a){Le[e]=a,je.forEach(function(n){return n(p)})},get:function(){return Le[e]}})});Object.defineProperty(p,"familyPrefix",{enumerable:!0,set:function(t){Le.cssPrefix=t,je.forEach(function(a){return a(p)})},get:function(){return Le.cssPrefix}});pe.FontAwesomeConfig=p;var je=[];function xn(e){return je.push(e),function(){je.splice(je.indexOf(e),1)}}var ue=yt,ee={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function wn(e){if(!(!e||!re)){var t=T.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var a=T.head.childNodes,n=null,r=a.length-1;r>-1;r--){var i=a[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(n=i)}return T.head.insertBefore(t,n),e}}var Pn="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function $e(){for(var e=12,t="";e-- >0;)t+=Pn[Math.random()*62|0];return t}function Ie(e){for(var t=[],a=(e||[]).length>>>0;a--;)t[a]=e[a];return t}function Dt(e){return e.classList?Ie(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Sa(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Cn(e){return Object.keys(e||{}).reduce(function(t,a){return t+"".concat(a,'="').concat(Sa(e[a]),'" ')},"").trim()}function lt(e){return Object.keys(e||{}).reduce(function(t,a){return t+"".concat(a,": ").concat(e[a].trim(),";")},"")}function zt(e){return e.size!==ee.size||e.x!==ee.x||e.y!==ee.y||e.rotate!==ee.rotate||e.flipX||e.flipY}function An(e){var t=e.transform,a=e.containerWidth,n=e.iconWidth,r={transform:"translate(".concat(a/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),f={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(n/2*-1," -256)")};return{outer:r,inner:f,path:c}}function En(e){var t=e.transform,a=e.width,n=a===void 0?yt:a,r=e.height,i=r===void 0?yt:r,o=e.startCentered,s=o===void 0?!1:o,f="";return s&&wa?f+="translate(".concat(t.x/ue-n/2,"em, ").concat(t.y/ue-i/2,"em) "):s?f+="translate(calc(-50% + ".concat(t.x/ue,"em), calc(-50% + ").concat(t.y/ue,"em)) "):f+="translate(".concat(t.x/ue,"em, ").concat(t.y/ue,"em) "),f+="scale(".concat(t.size/ue*(t.flipX?-1:1),", ").concat(t.size/ue*(t.flipY?-1:1),") "),f+="rotate(".concat(t.rotate,"deg) "),f}var On=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function La(){var e=Pa,t=Ca,a=p.cssPrefix,n=p.replacementClass,r=On;if(a!==e||n!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");r=r.replace(i,".".concat(a,"-")).replace(o,"--".concat(a,"-")).replace(s,".".concat(n))}return r}var Qt=!1;function dt(){p.autoAddCss&&!Qt&&(wn(La()),Qt=!0)}var Nn={mixout:function(){return{dom:{css:La,insertCss:dt}}},hooks:function(){return{beforeDOMElementCreation:function(){dt()},beforeI2svg:function(){dt()}}}},ae=pe||{};ae[te]||(ae[te]={});ae[te].styles||(ae[te].styles={});ae[te].hooks||(ae[te].hooks={});ae[te].shims||(ae[te].shims=[]);var Q=ae[te],Ia=[],Sn=function e(){T.removeEventListener("DOMContentLoaded",e),it=1,Ia.map(function(t){return t()})},it=!1;re&&(it=(T.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(T.readyState),it||T.addEventListener("DOMContentLoaded",Sn));function Ln(e){re&&(it?setTimeout(e,0):Ia.push(e))}function We(e){var t=e.tag,a=e.attributes,n=a===void 0?{}:a,r=e.children,i=r===void 0?[]:r;return typeof e=="string"?Sa(e):"<".concat(t," ").concat(Cn(n),">").concat(i.map(We).join(""),"</").concat(t,">")}function Zt(e,t,a){if(e&&e[t]&&e[t][a])return{prefix:t,iconName:a,icon:e[t][a]}}var In=function(t,a){return function(n,r,i,o){return t.call(a,n,r,i,o)}},pt=function(t,a,n,r){var i=Object.keys(t),o=i.length,s=r!==void 0?In(a,r):a,f,c,l;for(n===void 0?(f=1,l=t[i[0]]):(f=0,l=n);f<o;f++)c=i[f],l=s(l,t[c],c,t);return l};function Tn(e){for(var t=[],a=0,n=e.length;a<n;){var r=e.charCodeAt(a++);if(r>=55296&&r<=56319&&a<n){var i=e.charCodeAt(a++);(i&64512)==56320?t.push(((r&1023)<<10)+(i&1023)+65536):(t.push(r),a--)}else t.push(r)}return t}function xt(e){var t=Tn(e);return t.length===1?t[0].toString(16):null}function _n(e,t){var a=e.length,n=e.charCodeAt(t),r;return n>=55296&&n<=56319&&a>t+1&&(r=e.charCodeAt(t+1),r>=56320&&r<=57343)?(n-55296)*1024+r-56320+65536:n}function ea(e){return Object.keys(e).reduce(function(t,a){var n=e[a],r=!!n.icon;return r?t[n.iconName]=n.icon:t[a]=n,t},{})}function wt(e,t){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=a.skipHooks,r=n===void 0?!1:n,i=ea(t);typeof Q.hooks.addPack=="function"&&!r?Q.hooks.addPack(e,ea(t)):Q.styles[e]=d(d({},Q.styles[e]||{}),i),e==="fas"&&wt("fa",t)}var Ze,et,tt,Ee=Q.styles,Rn=Q.shims,Mn=(Ze={},U(Ze,I,Object.values(Fe[I])),U(Ze,z,Object.values(Fe[z])),Ze),Ft=null,Ta={},_a={},Ra={},Ma={},ja={},jn=(et={},U(et,I,Object.keys(De[I])),U(et,z,Object.keys(De[z])),et);function Dn(e){return~bn.indexOf(e)}function zn(e,t){var a=t.split("-"),n=a[0],r=a.slice(1).join("-");return n===e&&r!==""&&!Dn(r)?r:null}var Da=function(){var t=function(i){return pt(Ee,function(o,s,f){return o[f]=pt(s,i,{}),o},{})};Ta=t(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(f){return typeof f=="number"});s.forEach(function(f){r[f.toString(16)]=o})}return r}),_a=t(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(f){return typeof f=="string"});s.forEach(function(f){r[f]=o})}return r}),ja=t(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(f){r[f]=o}),r});var a="far"in Ee||p.autoFetchSvg,n=pt(Rn,function(r,i){var o=i[0],s=i[1],f=i[2];return s==="far"&&!a&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:f}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:f}),r},{names:{},unicodes:{}});Ra=n.names,Ma=n.unicodes,Ft=ft(p.styleDefault,{family:p.familyDefault})};xn(function(e){Ft=ft(e.styleDefault,{family:p.familyDefault})});Da();function Yt(e,t){return(Ta[e]||{})[t]}function Fn(e,t){return(_a[e]||{})[t]}function xe(e,t){return(ja[e]||{})[t]}function za(e){return Ra[e]||{prefix:null,iconName:null}}function Yn(e){var t=Ma[e],a=Yt("fas",e);return t||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function ve(){return Ft}var $t=function(){return{prefix:null,iconName:null,rest:[]}};function ft(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.family,n=a===void 0?I:a,r=De[n][e],i=ze[n][e]||ze[n][r],o=e in Q.styles?e:null;return i||o||null}var ta=(tt={},U(tt,I,Object.keys(Fe[I])),U(tt,z,Object.keys(Fe[z])),tt);function ct(e){var t,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.skipLookups,r=n===void 0?!1:n,i=(t={},U(t,I,"".concat(p.cssPrefix,"-").concat(I)),U(t,z,"".concat(p.cssPrefix,"-").concat(z)),t),o=null,s=I;(e.includes(i[I])||e.some(function(c){return ta[I].includes(c)}))&&(s=I),(e.includes(i[z])||e.some(function(c){return ta[z].includes(c)}))&&(s=z);var f=e.reduce(function(c,l){var m=zn(p.cssPrefix,l);if(Ee[l]?(l=Mn[s].includes(l)?un[s][l]:l,o=l,c.prefix=l):jn[s].indexOf(l)>-1?(o=l,c.prefix=ft(l,{family:s})):m?c.iconName=m:l!==p.replacementClass&&l!==i[I]&&l!==i[z]&&c.rest.push(l),!r&&c.prefix&&c.iconName){var k=o==="fa"?za(c.iconName):{},b=xe(c.prefix,c.iconName);k.prefix&&(o=null),c.iconName=k.iconName||b||c.iconName,c.prefix=k.prefix||c.prefix,c.prefix==="far"&&!Ee.far&&Ee.fas&&!p.autoFetchSvg&&(c.prefix="fas")}return c},$t());return(e.includes("fa-brands")||e.includes("fab"))&&(f.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(f.prefix="fad"),!f.prefix&&s===z&&(Ee.fass||p.autoFetchSvg)&&(f.prefix="fass",f.iconName=xe(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||o==="fa")&&(f.prefix=ve()||"fas"),f}var $n=function(){function e(){Qa(this,e),this.definitions={}}return Za(e,[{key:"add",value:function(){for(var a=this,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){a.definitions[s]=d(d({},a.definitions[s]||{}),o[s]),wt(s,o[s]);var f=Fe[I][s];f&&wt(f,o[s]),Da()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,n){var r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,f=o.iconName,c=o.icon,l=c[2];a[s]||(a[s]={}),l.length>0&&l.forEach(function(m){typeof m=="string"&&(a[s][m]=c)}),a[s][f]=c}),a}}]),e}(),aa=[],Oe={},Se={},Hn=Object.keys(Se);function Un(e,t){var a=t.mixoutsTo;return aa=e,Oe={},Object.keys(Se).forEach(function(n){Hn.indexOf(n)===-1&&delete Se[n]}),aa.forEach(function(n){var r=n.mixout?n.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(a[o]=r[o]),rt(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){a[o]||(a[o]={}),a[o][s]=r[o][s]})}),n.hooks){var i=n.hooks();Object.keys(i).forEach(function(o){Oe[o]||(Oe[o]=[]),Oe[o].push(i[o])})}n.provides&&n.provides(Se)}),a}function Pt(e,t){for(var a=arguments.length,n=new Array(a>2?a-2:0),r=2;r<a;r++)n[r-2]=arguments[r];var i=Oe[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(n))}),t}function Ce(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];var r=Oe[e]||[];r.forEach(function(i){i.apply(null,a)})}function ne(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Se[e]?Se[e].apply(null,t):void 0}function Ct(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,a=e.prefix||ve();if(t)return t=xe(a,t)||t,Zt(Fa.definitions,a,t)||Zt(Q.styles,a,t)}var Fa=new $n,Wn=function(){p.autoReplaceSvg=!1,p.observeMutations=!1,Ce("noAuto")},Bn={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return re?(Ce("beforeI2svg",t),ne("pseudoElements2svg",t),ne("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot;p.autoReplaceSvg===!1&&(p.autoReplaceSvg=!0),p.observeMutations=!0,Ln(function(){Gn({autoReplaceSvgRoot:a}),Ce("watch",t)})}},qn={icon:function(t){if(t===null)return null;if(rt(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:xe(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var a=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=ft(t[0]);return{prefix:n,iconName:xe(n,a)||a}}if(typeof t=="string"&&(t.indexOf("".concat(p.cssPrefix,"-"))>-1||t.match(mn))){var r=ct(t.split(" "),{skipLookups:!0});return{prefix:r.prefix||ve(),iconName:xe(r.prefix,r.iconName)||r.iconName}}if(typeof t=="string"){var i=ve();return{prefix:i,iconName:xe(i,t)||t}}}},G={noAuto:Wn,config:p,dom:Bn,parse:qn,library:Fa,findIconDefinition:Ct,toHtml:We},Gn=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot,n=a===void 0?T:a;(Object.keys(Q.styles).length>0||p.autoFetchSvg)&&re&&p.autoReplaceSvg&&G.dom.i2svg({node:n})};function ut(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(n){return We(n)})}}),Object.defineProperty(e,"node",{get:function(){if(re){var n=T.createElement("div");return n.innerHTML=e.html,n.children}}}),e}function Xn(e){var t=e.children,a=e.main,n=e.mask,r=e.attributes,i=e.styles,o=e.transform;if(zt(o)&&a.found&&!n.found){var s=a.width,f=a.height,c={x:s/f/2,y:.5};r.style=lt(d(d({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}function Vn(e){var t=e.prefix,a=e.iconName,n=e.children,r=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(p.cssPrefix,"-").concat(a):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:d(d({},r),{},{id:o}),children:n}]}]}function Ht(e){var t=e.icons,a=t.main,n=t.mask,r=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,f=e.title,c=e.maskId,l=e.titleId,m=e.extra,k=e.watchable,b=k===void 0?!1:k,A=n.found?n:a,_=A.width,R=A.height,M=r==="fak",S=[p.replacementClass,i?"".concat(p.cssPrefix,"-").concat(i):""].filter(function(D){return m.classes.indexOf(D)===-1}).filter(function(D){return D!==""||!!D}).concat(m.classes).join(" "),L={children:[],attributes:d(d({},m.attributes),{},{"data-prefix":r,"data-icon":i,class:S,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(_," ").concat(R)})},W=M&&!~m.classes.indexOf("fa-fw")?{width:"".concat(_/R*16*.0625,"em")}:{};b&&(L.attributes[Pe]=""),f&&(L.children.push({tag:"title",attributes:{id:L.attributes["aria-labelledby"]||"title-".concat(l||$e())},children:[f]}),delete L.attributes.title);var j=d(d({},L),{},{prefix:r,iconName:i,main:a,mask:n,maskId:c,transform:o,symbol:s,styles:d(d({},W),m.styles)}),X=n.found&&a.found?ne("generateAbstractMask",j)||{children:[],attributes:{}}:ne("generateAbstractIcon",j)||{children:[],attributes:{}},Y=X.children,ie=X.attributes;return j.children=Y,j.attributes=ie,s?Vn(j):Xn(j)}function na(e){var t=e.content,a=e.width,n=e.height,r=e.transform,i=e.title,o=e.extra,s=e.watchable,f=s===void 0?!1:s,c=d(d(d({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});f&&(c[Pe]="");var l=d({},o.styles);zt(r)&&(l.transform=En({transform:r,startCentered:!0,width:a,height:n}),l["-webkit-transform"]=l.transform);var m=lt(l);m.length>0&&(c.style=m);var k=[];return k.push({tag:"span",attributes:c,children:[t]}),i&&k.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),k}function Kn(e){var t=e.content,a=e.title,n=e.extra,r=d(d(d({},n.attributes),a?{title:a}:{}),{},{class:n.classes.join(" ")}),i=lt(n.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[t]}),a&&o.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),o}var vt=Q.styles;function At(e){var t=e[0],a=e[1],n=e.slice(4),r=Tt(n,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(p.cssPrefix,"-").concat(ke.GROUP)},children:[{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(ke.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(ke.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:a,icon:o}}var Jn={found:!1,width:512,height:512};function Qn(e,t){!Aa&&!p.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Et(e,t){var a=t;return t==="fa"&&p.styleDefault!==null&&(t=ve()),new Promise(function(n,r){if(ne("missingIconAbstract"),a==="fa"){var i=za(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&vt[t]&&vt[t][e]){var o=vt[t][e];return n(At(o))}Qn(e,t),n(d(d({},Jn),{},{icon:p.showMissingIcons&&e?ne("missingIconAbstract")||{}:{}}))})}var ra=function(){},Ot=p.measurePerformance&&Ge&&Ge.mark&&Ge.measure?Ge:{mark:ra,measure:ra},Re='FA "6.5.1"',Zn=function(t){return Ot.mark("".concat(Re," ").concat(t," begins")),function(){return Ya(t)}},Ya=function(t){Ot.mark("".concat(Re," ").concat(t," ends")),Ot.measure("".concat(Re," ").concat(t),"".concat(Re," ").concat(t," begins"),"".concat(Re," ").concat(t," ends"))},Ut={begin:Zn,end:Ya},at=function(){};function ia(e){var t=e.getAttribute?e.getAttribute(Pe):null;return typeof t=="string"}function er(e){var t=e.getAttribute?e.getAttribute(Rt):null,a=e.getAttribute?e.getAttribute(Mt):null;return t&&a}function tr(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(p.replacementClass)}function ar(){if(p.autoReplaceSvg===!0)return nt.replace;var e=nt[p.autoReplaceSvg];return e||nt.replace}function nr(e){return T.createElementNS("http://www.w3.org/2000/svg",e)}function rr(e){return T.createElement(e)}function $a(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.ceFn,n=a===void 0?e.tag==="svg"?nr:rr:a;if(typeof e=="string")return T.createTextNode(e);var r=n(e.tag);Object.keys(e.attributes||[]).forEach(function(o){r.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){r.appendChild($a(o,{ceFn:n}))}),r}function ir(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var nt={replace:function(t){var a=t[0];if(a.parentNode)if(t[1].forEach(function(r){a.parentNode.insertBefore($a(r),a)}),a.getAttribute(Pe)===null&&p.keepOriginalSource){var n=T.createComment(ir(a));a.parentNode.replaceChild(n,a)}else a.remove()},nest:function(t){var a=t[0],n=t[1];if(~Dt(a).indexOf(p.replacementClass))return nt.replace(t);var r=new RegExp("".concat(p.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){var i=n[0].attributes.class.split(" ").reduce(function(s,f){return f===p.replacementClass||f.match(r)?s.toSvg.push(f):s.toNode.push(f),s},{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",i.toNode.join(" "))}var o=n.map(function(s){return We(s)}).join(`
`);a.setAttribute(Pe,""),a.innerHTML=o}};function oa(e){e()}function Ha(e,t){var a=typeof t=="function"?t:at;if(e.length===0)a();else{var n=oa;p.mutateApproach===fn&&(n=pe.requestAnimationFrame||oa),n(function(){var r=ar(),i=Ut.begin("mutate");e.map(r),i(),a()})}}var Wt=!1;function Ua(){Wt=!0}function Nt(){Wt=!1}var ot=null;function sa(e){if(Kt&&p.observeMutations){var t=e.treeCallback,a=t===void 0?at:t,n=e.nodeCallback,r=n===void 0?at:n,i=e.pseudoElementsCallback,o=i===void 0?at:i,s=e.observeMutationsRoot,f=s===void 0?T:s;ot=new Kt(function(c){if(!Wt){var l=ve();Ie(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!ia(m.addedNodes[0])&&(p.searchPseudoElements&&o(m.target),a(m.target)),m.type==="attributes"&&m.target.parentNode&&p.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&ia(m.target)&&~gn.indexOf(m.attributeName))if(m.attributeName==="class"&&er(m.target)){var k=ct(Dt(m.target)),b=k.prefix,A=k.iconName;m.target.setAttribute(Rt,b||l),A&&m.target.setAttribute(Mt,A)}else tr(m.target)&&r(m.target)})}}),re&&ot.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function or(){ot&&ot.disconnect()}function sr(e){var t=e.getAttribute("style"),a=[];return t&&(a=t.split(";").reduce(function(n,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(n[o]=s.join(":").trim()),n},{})),a}function lr(e){var t=e.getAttribute("data-prefix"),a=e.getAttribute("data-icon"),n=e.innerText!==void 0?e.innerText.trim():"",r=ct(Dt(e));return r.prefix||(r.prefix=ve()),t&&a&&(r.prefix=t,r.iconName=a),r.iconName&&r.prefix||(r.prefix&&n.length>0&&(r.iconName=Fn(r.prefix,e.innerText)||Yt(r.prefix,xt(e.innerText))),!r.iconName&&p.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=e.firstChild.data)),r}function fr(e){var t=Ie(e.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),a=e.getAttribute("title"),n=e.getAttribute("data-fa-title-id");return p.autoA11y&&(a?t["aria-labelledby"]="".concat(p.replacementClass,"-title-").concat(n||$e()):(t["aria-hidden"]="true",t.focusable="false")),t}function cr(){return{iconName:null,title:null,titleId:null,prefix:null,transform:ee,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function la(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=lr(e),n=a.iconName,r=a.prefix,i=a.rest,o=fr(e),s=Pt("parseNodeAttributes",{},e),f=t.styleParser?sr(e):[];return d({iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:ee,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:f,attributes:o}},s)}var ur=Q.styles;function Wa(e){var t=p.autoReplaceSvg==="nest"?la(e,{styleParser:!1}):la(e);return~t.extra.classes.indexOf(Ea)?ne("generateLayersText",e,t):ne("generateSvgReplacementMutation",e,t)}var ge=new Set;jt.map(function(e){ge.add("fa-".concat(e))});Object.keys(De[I]).map(ge.add.bind(ge));Object.keys(De[z]).map(ge.add.bind(ge));ge=He(ge);function fa(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!re)return Promise.resolve();var a=T.documentElement.classList,n=function(m){return a.add("".concat(Jt,"-").concat(m))},r=function(m){return a.remove("".concat(Jt,"-").concat(m))},i=p.autoFetchSvg?ge:jt.map(function(l){return"fa-".concat(l)}).concat(Object.keys(ur));i.includes("fa")||i.push("fa");var o=[".".concat(Ea,":not([").concat(Pe,"])")].concat(i.map(function(l){return".".concat(l,":not([").concat(Pe,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Ie(e.querySelectorAll(o))}catch{}if(s.length>0)n("pending"),r("complete");else return Promise.resolve();var f=Ut.begin("onTree"),c=s.reduce(function(l,m){try{var k=Wa(m);k&&l.push(k)}catch(b){Aa||b.name==="MissingIcon"&&console.error(b)}return l},[]);return new Promise(function(l,m){Promise.all(c).then(function(k){Ha(k,function(){n("active"),n("complete"),r("pending"),typeof t=="function"&&t(),f(),l()})}).catch(function(k){f(),m(k)})})}function mr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Wa(e).then(function(a){a&&Ha([a],t)})}function dr(e){return function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=(t||{}).icon?t:Ct(t||{}),r=a.mask;return r&&(r=(r||{}).icon?r:Ct(r||{})),e(n,d(d({},a),{},{mask:r}))}}var pr=function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.transform,r=n===void 0?ee:n,i=a.symbol,o=i===void 0?!1:i,s=a.mask,f=s===void 0?null:s,c=a.maskId,l=c===void 0?null:c,m=a.title,k=m===void 0?null:m,b=a.titleId,A=b===void 0?null:b,_=a.classes,R=_===void 0?[]:_,M=a.attributes,S=M===void 0?{}:M,L=a.styles,W=L===void 0?{}:L;if(t){var j=t.prefix,X=t.iconName,Y=t.icon;return ut(d({type:"icon"},t),function(){return Ce("beforeDOMElementCreation",{iconDefinition:t,params:a}),p.autoA11y&&(k?S["aria-labelledby"]="".concat(p.replacementClass,"-title-").concat(A||$e()):(S["aria-hidden"]="true",S.focusable="false")),Ht({icons:{main:At(Y),mask:f?At(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:j,iconName:X,transform:d(d({},ee),r),symbol:o,title:k,maskId:l,titleId:A,extra:{attributes:S,styles:W,classes:R}})})}},vr={mixout:function(){return{icon:dr(pr)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=fa,a.nodeCallback=mr,a}}},provides:function(t){t.i2svg=function(a){var n=a.node,r=n===void 0?T:n,i=a.callback,o=i===void 0?function(){}:i;return fa(r,o)},t.generateSvgReplacementMutation=function(a,n){var r=n.iconName,i=n.title,o=n.titleId,s=n.prefix,f=n.transform,c=n.symbol,l=n.mask,m=n.maskId,k=n.extra;return new Promise(function(b,A){Promise.all([Et(r,s),l.iconName?Et(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(_){var R=Tt(_,2),M=R[0],S=R[1];b([a,Ht({icons:{main:M,mask:S},prefix:s,iconName:r,transform:f,symbol:c,maskId:m,title:i,titleId:o,extra:k,watchable:!0})])}).catch(A)})},t.generateAbstractIcon=function(a){var n=a.children,r=a.attributes,i=a.main,o=a.transform,s=a.styles,f=lt(s);f.length>0&&(r.style=f);var c;return zt(o)&&(c=ne("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),n.push(c||i.icon),{children:n,attributes:r}}}},gr={mixout:function(){return{layer:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.classes,i=r===void 0?[]:r;return ut({type:"layer"},function(){Ce("beforeDOMElementCreation",{assembler:a,params:n});var o=[];return a(function(s){Array.isArray(s)?s.map(function(f){o=o.concat(f.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(p.cssPrefix,"-layers")].concat(He(i)).join(" ")},children:o}]})}}}},br={mixout:function(){return{counter:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.title,i=r===void 0?null:r,o=n.classes,s=o===void 0?[]:o,f=n.attributes,c=f===void 0?{}:f,l=n.styles,m=l===void 0?{}:l;return ut({type:"counter",content:a},function(){return Ce("beforeDOMElementCreation",{content:a,params:n}),Kn({content:a.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(p.cssPrefix,"-layers-counter")].concat(He(s))}})})}}}},hr={mixout:function(){return{text:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?ee:r,o=n.title,s=o===void 0?null:o,f=n.classes,c=f===void 0?[]:f,l=n.attributes,m=l===void 0?{}:l,k=n.styles,b=k===void 0?{}:k;return ut({type:"text",content:a},function(){return Ce("beforeDOMElementCreation",{content:a,params:n}),na({content:a,transform:d(d({},ee),i),title:s,extra:{attributes:m,styles:b,classes:["".concat(p.cssPrefix,"-layers-text")].concat(He(c))}})})}}},provides:function(t){t.generateLayersText=function(a,n){var r=n.title,i=n.transform,o=n.extra,s=null,f=null;if(wa){var c=parseInt(getComputedStyle(a).fontSize,10),l=a.getBoundingClientRect();s=l.width/c,f=l.height/c}return p.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([a,na({content:a.innerHTML,width:s,height:f,transform:i,title:r,extra:o,watchable:!0})])}}},yr=new RegExp('"',"ug"),ca=[1105920,1112319];function kr(e){var t=e.replace(yr,""),a=_n(t,0),n=a>=ca[0]&&a<=ca[1],r=t.length===2?t[0]===t[1]:!1;return{value:xt(r?t[0]:t),isSecondary:n||r}}function ua(e,t){var a="".concat(ln).concat(t.replace(":","-"));return new Promise(function(n,r){if(e.getAttribute(a)!==null)return n();var i=Ie(e.children),o=i.filter(function(Y){return Y.getAttribute(kt)===t})[0],s=pe.getComputedStyle(e,t),f=s.getPropertyValue("font-family").match(dn),c=s.getPropertyValue("font-weight"),l=s.getPropertyValue("content");if(o&&!f)return e.removeChild(o),n();if(f&&l!=="none"&&l!==""){var m=s.getPropertyValue("content"),k=~["Sharp"].indexOf(f[2])?z:I,b=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?ze[k][f[2].toLowerCase()]:pn[k][c],A=kr(m),_=A.value,R=A.isSecondary,M=f[0].startsWith("FontAwesome"),S=Yt(b,_),L=S;if(M){var W=Yn(_);W.iconName&&W.prefix&&(S=W.iconName,b=W.prefix)}if(S&&!R&&(!o||o.getAttribute(Rt)!==b||o.getAttribute(Mt)!==L)){e.setAttribute(a,L),o&&e.removeChild(o);var j=cr(),X=j.extra;X.attributes[kt]=t,Et(S,b).then(function(Y){var ie=Ht(d(d({},j),{},{icons:{main:Y,mask:$t()},prefix:b,iconName:L,extra:X,watchable:!0})),D=T.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(D,e.firstChild):e.appendChild(D),D.outerHTML=ie.map(function(Te){return We(Te)}).join(`
`),e.removeAttribute(a),n()}).catch(r)}else n()}else n()})}function xr(e){return Promise.all([ua(e,"::before"),ua(e,"::after")])}function wr(e){return e.parentNode!==document.head&&!~cn.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(kt)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function ma(e){if(re)return new Promise(function(t,a){var n=Ie(e.querySelectorAll("*")).filter(wr).map(xr),r=Ut.begin("searchPseudoElements");Ua(),Promise.all(n).then(function(){r(),Nt(),t()}).catch(function(){r(),Nt(),a()})})}var Pr={hooks:function(){return{mutationObserverCallbacks:function(a){return a.pseudoElementsCallback=ma,a}}},provides:function(t){t.pseudoElements2svg=function(a){var n=a.node,r=n===void 0?T:n;p.searchPseudoElements&&ma(r)}}},da=!1,Cr={mixout:function(){return{dom:{unwatch:function(){Ua(),da=!0}}}},hooks:function(){return{bootstrap:function(){sa(Pt("mutationObserverCallbacks",{}))},noAuto:function(){or()},watch:function(a){var n=a.observeMutationsRoot;da?Nt():sa(Pt("mutationObserverCallbacks",{observeMutationsRoot:n}))}}}},pa=function(t){var a={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(n,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return n.flipX=!0,n;if(o&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(o){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},a)},Ar={mixout:function(){return{parse:{transform:function(a){return pa(a)}}}},hooks:function(){return{parseNodeAttributes:function(a,n){var r=n.getAttribute("data-fa-transform");return r&&(a.transform=pa(r)),a}}},provides:function(t){t.generateAbstractTransformGrouping=function(a){var n=a.main,r=a.transform,i=a.containerWidth,o=a.iconWidth,s={transform:"translate(".concat(i/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),l="rotate(".concat(r.rotate," 0 0)"),m={transform:"".concat(f," ").concat(c," ").concat(l)},k={transform:"translate(".concat(o/2*-1," -256)")},b={outer:s,inner:m,path:k};return{tag:"g",attributes:d({},b.outer),children:[{tag:"g",attributes:d({},b.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:d(d({},n.icon.attributes),b.path)}]}]}}}},gt={x:0,y:0,width:"100%",height:"100%"};function va(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Er(e){return e.tag==="g"?e.children:[e]}var Or={hooks:function(){return{parseNodeAttributes:function(a,n){var r=n.getAttribute("data-fa-mask"),i=r?ct(r.split(" ").map(function(o){return o.trim()})):$t();return i.prefix||(i.prefix=ve()),a.mask=i,a.maskId=n.getAttribute("data-fa-mask-id"),a}}},provides:function(t){t.generateAbstractMask=function(a){var n=a.children,r=a.attributes,i=a.main,o=a.mask,s=a.maskId,f=a.transform,c=i.width,l=i.icon,m=o.width,k=o.icon,b=An({transform:f,containerWidth:m,iconWidth:c}),A={tag:"rect",attributes:d(d({},gt),{},{fill:"white"})},_=l.children?{children:l.children.map(va)}:{},R={tag:"g",attributes:d({},b.inner),children:[va(d({tag:l.tag,attributes:d(d({},l.attributes),b.path)},_))]},M={tag:"g",attributes:d({},b.outer),children:[R]},S="mask-".concat(s||$e()),L="clip-".concat(s||$e()),W={tag:"mask",attributes:d(d({},gt),{},{id:S,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[A,M]},j={tag:"defs",children:[{tag:"clipPath",attributes:{id:L},children:Er(k)},W]};return n.push(j,{tag:"rect",attributes:d({fill:"currentColor","clip-path":"url(#".concat(L,")"),mask:"url(#".concat(S,")")},gt)}),{children:n,attributes:r}}}},Nr={provides:function(t){var a=!1;pe.matchMedia&&(a=pe.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var n=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:d(d({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=d(d({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:d(d({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return a||s.children.push({tag:"animate",attributes:d(d({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:d(d({},o),{},{values:"1;0;1;1;0;1;"})}),n.push(s),n.push({tag:"path",attributes:d(d({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:a?[]:[{tag:"animate",attributes:d(d({},o),{},{values:"1;0;0;0;0;1;"})}]}),a||n.push({tag:"path",attributes:d(d({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:d(d({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Sr={hooks:function(){return{parseNodeAttributes:function(a,n){var r=n.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return a.symbol=i,a}}}},Lr=[Nn,vr,gr,br,hr,Pr,Cr,Ar,Or,Nr,Sr];Un(Lr,{mixoutsTo:G});G.noAuto;G.config;G.library;G.dom;var St=G.parse;G.findIconDefinition;G.toHtml;var Ir=G.icon;G.layer;G.text;G.counter;function ga(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),a.push.apply(a,n)}return a}function de(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?ga(Object(a),!0).forEach(function(n){Ne(e,n,a[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ga(Object(a)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))})}return e}function st(e){"@babel/helpers - typeof";return st=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},st(e)}function Ne(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function Tr(e,t){if(e==null)return{};var a={},n=Object.keys(e),r,i;for(i=0;i<n.length;i++)r=n[i],!(t.indexOf(r)>=0)&&(a[r]=e[r]);return a}function _r(e,t){if(e==null)return{};var a=Tr(e,t),n,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function Lt(e){return Rr(e)||Mr(e)||jr(e)||Dr()}function Rr(e){if(Array.isArray(e))return It(e)}function Mr(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function jr(e,t){if(e){if(typeof e=="string")return It(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);if(a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set")return Array.from(e);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return It(e,t)}}function It(e,t){(t==null||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function Dr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function zr(e){var t,a=e.beat,n=e.fade,r=e.beatFade,i=e.bounce,o=e.shake,s=e.flash,f=e.spin,c=e.spinPulse,l=e.spinReverse,m=e.pulse,k=e.fixedWidth,b=e.inverse,A=e.border,_=e.listItem,R=e.flip,M=e.size,S=e.rotation,L=e.pull,W=(t={"fa-beat":a,"fa-fade":n,"fa-beat-fade":r,"fa-bounce":i,"fa-shake":o,"fa-flash":s,"fa-spin":f,"fa-spin-reverse":l,"fa-spin-pulse":c,"fa-pulse":m,"fa-fw":k,"fa-inverse":b,"fa-border":A,"fa-li":_,"fa-flip":R===!0,"fa-flip-horizontal":R==="horizontal"||R==="both","fa-flip-vertical":R==="vertical"||R==="both"},Ne(t,"fa-".concat(M),typeof M<"u"&&M!==null),Ne(t,"fa-rotate-".concat(S),typeof S<"u"&&S!==null&&S!==0),Ne(t,"fa-pull-".concat(L),typeof L<"u"&&L!==null),Ne(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(W).map(function(j){return W[j]?j:null}).filter(function(j){return j})}function Fr(e){return e=e-0,e===e}function Ba(e){return Fr(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,a){return a?a.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var Yr=["style"];function $r(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Hr(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,a){var n=a.indexOf(":"),r=Ba(a.slice(0,n)),i=a.slice(n+1).trim();return r.startsWith("webkit")?t[$r(r)]=i:t[r]=i,t},{})}function qa(e,t){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var n=(t.children||[]).map(function(f){return qa(e,f)}),r=Object.keys(t.attributes||{}).reduce(function(f,c){var l=t.attributes[c];switch(c){case"class":f.attrs.className=l,delete t.attributes.class;break;case"style":f.attrs.style=Hr(l);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?f.attrs[c.toLowerCase()]=l:f.attrs[Ba(c)]=l}return f},{attrs:{}}),i=a.style,o=i===void 0?{}:i,s=_r(a,Yr);return r.attrs.style=de(de({},r.attrs.style),o),e.apply(void 0,[t.tag,de(de({},r.attrs),s)].concat(Lt(n)))}var Ga=!1;try{Ga=!0}catch{}function Ur(){if(!Ga&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function ba(e){if(e&&st(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(St.icon)return St.icon(e);if(e===null)return null;if(e&&st(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function bt(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Ne({},e,t):{}}var we=x.forwardRef(function(e,t){var a=e.icon,n=e.mask,r=e.symbol,i=e.className,o=e.title,s=e.titleId,f=e.maskId,c=ba(a),l=bt("classes",[].concat(Lt(zr(e)),Lt(i.split(" ")))),m=bt("transform",typeof e.transform=="string"?St.transform(e.transform):e.transform),k=bt("mask",ba(n)),b=Ir(c,de(de(de(de({},l),m),k),{},{symbol:r,title:o,titleId:s,maskId:f}));if(!b)return Ur("Could not find icon",c),null;var A=b.abstract,_={ref:t};return Object.keys(e).forEach(function(R){we.defaultProps.hasOwnProperty(R)||(_[R]=e[R])}),Wr(A[0],_)});we.displayName="FontAwesomeIcon";we.propTypes={beat:P.bool,border:P.bool,beatFade:P.bool,bounce:P.bool,className:P.string,fade:P.bool,flash:P.bool,mask:P.oneOfType([P.object,P.array,P.string]),maskId:P.string,fixedWidth:P.bool,inverse:P.bool,flip:P.oneOf([!0,!1,"horizontal","vertical","both"]),icon:P.oneOfType([P.object,P.array,P.string]),listItem:P.bool,pull:P.oneOf(["right","left"]),pulse:P.bool,rotation:P.oneOf([0,90,180,270]),shake:P.bool,size:P.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:P.bool,spinPulse:P.bool,spinReverse:P.bool,symbol:P.oneOfType([P.bool,P.string]),title:P.string,titleId:P.string,transform:P.oneOfType([P.string,P.object]),swapOpacity:P.bool};we.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var Wr=qa.bind(null,x.createElement),Br={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"]},qr=Br,Gr={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]},Xr={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"]};const Vr=({handleSelect:e})=>{me.useState(""),me.useState("");const[t,a]=me.useState([]);return me.useState(!0),me.useEffect(()=>{},[]),x.createElement("div",{className:"table-responsive text-nowrap  mb-6"},x.createElement("table",{className:"table table-bordered text-center w-full"},x.createElement("thead",{className:"thead-dark"},x.createElement("tr",null,x.createElement("th",{scope:"col"},"#"),x.createElement("th",{scope:"col"},"Item"),x.createElement("th",{scope:"col"},"Quantity"),x.createElement("th",{scope:"col"},"Measure"),x.createElement("th",{scope:"col"},"Status"),x.createElement("th",{scope:"col"},"Action"))),x.createElement("tbody",null,t.map((n,r)=>x.createElement("tr",{key:r},x.createElement("th",null,r),x.createElement("td",null,n.item),x.createElement("td",null,n.quantity),x.createElement("td",null,n.measure),x.createElement("td",null,n.status===1?"complete":"incomplete"),x.createElement("td",null,x.createElement("button",{type:"button",className:"btn btn-sm",onClick:()=>e(n,"View"),title:"View"},x.createElement(we,{icon:Gr,className:"text-gray-500"})),x.createElement("button",{type:"button",className:"btn btn-sm ml-2",onClick:()=>e(n,"Edit"),title:"Edit"},x.createElement(we,{icon:qr,className:"text-blue-500"})),x.createElement("button",{type:"button",className:"btn btn-sm ml-2",onClick:()=>e(n),title:"Delete"},x.createElement(we,{icon:Xr,className:"text-red-500"}))))))))},ei=Vr,Kr=({showModal:e,setShowModal:t})=>{const[a,n]=me.useState({req_item:"",quantity:"",measure:""}),[r,i]=me.useState([]),o=f=>{n(c=>({...c,[f.target.name]:f.target.value}))},s=async()=>{try{const f=await Ka.post("http://localhost:8000/reqs",a);console.log("Form submitted successfully:",f.data),i(c=>[...c]),t(!1)}catch(f){console.error("Error submitting form:",f)}};return x.createElement("div",{className:"modal-full-height h-auto justify-center mx-4 md:mx-12 mt-6"},x.createElement("form",{className:"w-full bg-white rounded-md p-4",onSubmit:s},x.createElement("div",{className:"flex flex-wrap gap-4"},x.createElement("div",{className:"w-full md:w-1/3 mb-3 md:mr-2"},x.createElement("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",htmlFor:"req_item"},"Req Item"),x.createElement("textarea",{className:"w-full resize-none border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500",placeholder:"Enter text...",name:"req_item",value:a.req_item,onChange:o})),x.createElement("div",{className:"w-full md:w-1/5 mb-3 md:mr-2"},x.createElement("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",htmlFor:"quantity"},"Quantity"),x.createElement("input",{type:"text",className:"w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500",id:"quantity",name:"quantity",placeholder:"Quantity",required:!0,value:a.quantity,onChange:o})),x.createElement("div",{className:"w-full md:w-1/5 mb-3 "},x.createElement("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",htmlFor:"measure"},"Measure"),x.createElement("select",{className:"w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500",id:"measure",name:"measure",required:!0,value:a.measure,onChange:o},x.createElement("option",{value:"",disabled:!0},"Choose Measure"),x.createElement("option",{value:"units"},"Units"),x.createElement("option",{value:"kgs"},"Kilograms"))),x.createElement("div",{className:"m-4 mt-6"},x.createElement("button",{type:"button",className:`text-gray-500 bg-green-400 border border-gray-400 \r
            focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 py-1 px-4 rounded`,onClick:s},"Add")))))},ti=Kr;var Jr={exports:{}};(function(e,t){(function(a,n){e.exports=n(me)})(Ja,a=>(()=>{var n={703:(s,f,c)=>{var l=c(414);function m(){}function k(){}k.resetWarningCache=m,s.exports=function(){function b(R,M,S,L,W,j){if(j!==l){var X=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw X.name="Invariant Violation",X}}function A(){return b}b.isRequired=b;var _={array:b,bigint:b,bool:b,func:b,number:b,object:b,string:b,symbol:b,any:b,arrayOf:A,element:b,elementType:b,instanceOf:A,node:b,objectOf:A,oneOf:A,oneOfType:A,shape:A,exact:A,checkPropTypes:k,resetWarningCache:m};return _.PropTypes=_,_}},697:(s,f,c)=>{s.exports=c(703)()},414:s=>{s.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},98:s=>{s.exports=a}},r={};function i(s){var f=r[s];if(f!==void 0)return f.exports;var c=r[s]={exports:{}};return n[s](c,c.exports,i),c.exports}i.n=s=>{var f=s&&s.__esModule?()=>s.default:()=>s;return i.d(f,{a:f}),f},i.d=(s,f)=>{for(var c in f)i.o(f,c)&&!i.o(s,c)&&Object.defineProperty(s,c,{enumerable:!0,get:f[c]})},i.o=(s,f)=>Object.prototype.hasOwnProperty.call(s,f),i.r=s=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})};var o={};return(()=>{i.r(o),i.d(o,{default:()=>Xa});var s=i(98),f=i.n(s),c=i(697),l=i.n(c);function m(){return m=Object.assign?Object.assign.bind():function(g){for(var y=1;y<arguments.length;y++){var C=arguments[y];for(var E in C)Object.prototype.hasOwnProperty.call(C,E)&&(g[E]=C[E])}return g},m.apply(this,arguments)}var k=function(g){var y=g.pageClassName,C=g.pageLinkClassName,E=g.page,be=g.selected,he=g.activeClassName,J=g.activeLinkClassName,v=g.getEventListener,u=g.pageSelectedHandler,N=g.href,h=g.extraAriaContext,w=g.pageLabelBuilder,O=g.rel,$=g.ariaLabel||"Page "+E+(h?" "+h:""),B=null;return be&&(B="page",$=g.ariaLabel||"Page "+E+" is your current page",y=y!==void 0?y+" "+he:he,C!==void 0?J!==void 0&&(C=C+" "+J):C=J),f().createElement("li",{className:y},f().createElement("a",m({rel:O,role:N?void 0:"button",className:C,href:N,tabIndex:be?"-1":"0","aria-label":$,"aria-current":B,onKeyPress:u},v(u)),w(E)))};k.propTypes={pageSelectedHandler:l().func.isRequired,selected:l().bool.isRequired,pageClassName:l().string,pageLinkClassName:l().string,activeClassName:l().string,activeLinkClassName:l().string,extraAriaContext:l().string,href:l().string,ariaLabel:l().string,page:l().number.isRequired,getEventListener:l().func.isRequired,pageLabelBuilder:l().func.isRequired,rel:l().string};const b=k;function A(){return A=Object.assign?Object.assign.bind():function(g){for(var y=1;y<arguments.length;y++){var C=arguments[y];for(var E in C)Object.prototype.hasOwnProperty.call(C,E)&&(g[E]=C[E])}return g},A.apply(this,arguments)}var _=function(g){var y=g.breakLabel,C=g.breakAriaLabel,E=g.breakClassName,be=g.breakLinkClassName,he=g.breakHandler,J=g.getEventListener,v=E||"break";return f().createElement("li",{className:v},f().createElement("a",A({className:be,role:"button",tabIndex:"0","aria-label":C,onKeyPress:he},J(he)),y))};_.propTypes={breakLabel:l().oneOfType([l().string,l().node]),breakAriaLabel:l().string,breakClassName:l().string,breakLinkClassName:l().string,breakHandler:l().func.isRequired,getEventListener:l().func.isRequired};const R=_;function M(g){var y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return g??y}function S(g){return S=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(y){return typeof y}:function(y){return y&&typeof Symbol=="function"&&y.constructor===Symbol&&y!==Symbol.prototype?"symbol":typeof y},S(g)}function L(){return L=Object.assign?Object.assign.bind():function(g){for(var y=1;y<arguments.length;y++){var C=arguments[y];for(var E in C)Object.prototype.hasOwnProperty.call(C,E)&&(g[E]=C[E])}return g},L.apply(this,arguments)}function W(g,y){for(var C=0;C<y.length;C++){var E=y[C];E.enumerable=E.enumerable||!1,E.configurable=!0,"value"in E&&(E.writable=!0),Object.defineProperty(g,E.key,E)}}function j(g,y){return j=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(C,E){return C.__proto__=E,C},j(g,y)}function X(g,y){if(y&&(S(y)==="object"||typeof y=="function"))return y;if(y!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Y(g)}function Y(g){if(g===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return g}function ie(g){return ie=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(y){return y.__proto__||Object.getPrototypeOf(y)},ie(g)}function D(g,y,C){return y in g?Object.defineProperty(g,y,{value:C,enumerable:!0,configurable:!0,writable:!0}):g[y]=C,g}var Te=function(g){(function(v,u){if(typeof u!="function"&&u!==null)throw new TypeError("Super expression must either be null or a function");v.prototype=Object.create(u&&u.prototype,{constructor:{value:v,writable:!0,configurable:!0}}),Object.defineProperty(v,"prototype",{writable:!1}),u&&j(v,u)})(J,g);var y,C,E,be,he=(E=J,be=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var v,u=ie(E);if(be){var N=ie(this).constructor;v=Reflect.construct(u,arguments,N)}else v=u.apply(this,arguments);return X(this,v)});function J(v){var u,N;return function(h,w){if(!(h instanceof w))throw new TypeError("Cannot call a class as a function")}(this,J),D(Y(u=he.call(this,v)),"handlePreviousPage",function(h){var w=u.state.selected;u.handleClick(h,null,w>0?w-1:void 0,{isPrevious:!0})}),D(Y(u),"handleNextPage",function(h){var w=u.state.selected,O=u.props.pageCount;u.handleClick(h,null,w<O-1?w+1:void 0,{isNext:!0})}),D(Y(u),"handlePageSelected",function(h,w){if(u.state.selected===h)return u.callActiveCallback(h),void u.handleClick(w,null,void 0,{isActive:!0});u.handleClick(w,null,h)}),D(Y(u),"handlePageChange",function(h){u.state.selected!==h&&(u.setState({selected:h}),u.callCallback(h))}),D(Y(u),"getEventListener",function(h){return D({},u.props.eventListener,h)}),D(Y(u),"handleClick",function(h,w,O){var $=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},B=$.isPrevious,Z=B!==void 0&&B,Ae=$.isNext,_e=Ae!==void 0&&Ae,ye=$.isBreak,V=ye!==void 0&&ye,oe=$.isActive,se=oe!==void 0&&oe;h.preventDefault?h.preventDefault():h.returnValue=!1;var le=u.state.selected,F=u.props.onClick,K=O;if(F){var q=F({index:w,selected:le,nextSelectedPage:O,event:h,isPrevious:Z,isNext:_e,isBreak:V,isActive:se});if(q===!1)return;Number.isInteger(q)&&(K=q)}K!==void 0&&u.handlePageChange(K)}),D(Y(u),"handleBreakClick",function(h,w){var O=u.state.selected;u.handleClick(w,h,O<h?u.getForwardJump():u.getBackwardJump(),{isBreak:!0})}),D(Y(u),"callCallback",function(h){u.props.onPageChange!==void 0&&typeof u.props.onPageChange=="function"&&u.props.onPageChange({selected:h})}),D(Y(u),"callActiveCallback",function(h){u.props.onPageActive!==void 0&&typeof u.props.onPageActive=="function"&&u.props.onPageActive({selected:h})}),D(Y(u),"getElementPageRel",function(h){var w=u.state.selected,O=u.props,$=O.nextPageRel,B=O.prevPageRel,Z=O.selectedPageRel;return w-1===h?B:w===h?Z:w+1===h?$:void 0}),D(Y(u),"pagination",function(){var h=[],w=u.props,O=w.pageRangeDisplayed,$=w.pageCount,B=w.marginPagesDisplayed,Z=w.breakLabel,Ae=w.breakClassName,_e=w.breakLinkClassName,ye=w.breakAriaLabels,V=u.state.selected;if($<=O)for(var oe=0;oe<$;oe++)h.push(u.getPageElement(oe));else{var se=O/2,le=O-se;V>$-O/2?se=O-(le=$-V):V<O/2&&(le=O-(se=V));var F,K,q=function(fe){return u.getPageElement(fe)},H=[];for(F=0;F<$;F++){var Be=F+1;if(Be<=B)H.push({type:"page",index:F,display:q(F)});else if(Be>$-B)H.push({type:"page",index:F,display:q(F)});else if(F>=V-se&&F<=V+(V===0&&O>1?le-1:le))H.push({type:"page",index:F,display:q(F)});else if(Z&&H.length>0&&H[H.length-1].display!==K&&(O>0||B>0)){var mt=F<V?ye.backward:ye.forward;K=f().createElement(R,{key:F,breakAriaLabel:mt,breakLabel:Z,breakClassName:Ae,breakLinkClassName:_e,breakHandler:u.handleBreakClick.bind(null,F),getEventListener:u.getEventListener}),H.push({type:"break",index:F,display:K})}}H.forEach(function(fe,ce){var qe=fe;fe.type==="break"&&H[ce-1]&&H[ce-1].type==="page"&&H[ce+1]&&H[ce+1].type==="page"&&H[ce+1].index-H[ce-1].index<=2&&(qe={type:"page",index:fe.index,display:q(fe.index)}),h.push(qe.display)})}return h}),v.initialPage!==void 0&&v.forcePage!==void 0&&console.warn("(react-paginate): Both initialPage (".concat(v.initialPage,") and forcePage (").concat(v.forcePage,") props are provided, which is discouraged.")+` Use exclusively forcePage prop for a controlled component.
See https://reactjs.org/docs/forms.html#controlled-components`),N=v.initialPage?v.initialPage:v.forcePage?v.forcePage:0,u.state={selected:N},u}return y=J,(C=[{key:"componentDidMount",value:function(){var v=this.props,u=v.initialPage,N=v.disableInitialCallback,h=v.extraAriaContext,w=v.pageCount,O=v.forcePage;u===void 0||N||this.callCallback(u),h&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead."),Number.isInteger(w)||console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(w,"). Did you forget a Math.ceil()?")),u!==void 0&&u>w-1&&console.warn("(react-paginate): The initialPage prop provided is greater than the maximum page index from pageCount prop (".concat(u," > ").concat(w-1,").")),O!==void 0&&O>w-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(O," > ").concat(w-1,")."))}},{key:"componentDidUpdate",value:function(v){this.props.forcePage!==void 0&&this.props.forcePage!==v.forcePage&&(this.props.forcePage>this.props.pageCount-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(this.props.forcePage," > ").concat(this.props.pageCount-1,").")),this.setState({selected:this.props.forcePage})),Number.isInteger(v.pageCount)&&!Number.isInteger(this.props.pageCount)&&console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(this.props.pageCount,"). Did you forget a Math.ceil()?"))}},{key:"getForwardJump",value:function(){var v=this.state.selected,u=this.props,N=u.pageCount,h=v+u.pageRangeDisplayed;return h>=N?N-1:h}},{key:"getBackwardJump",value:function(){var v=this.state.selected-this.props.pageRangeDisplayed;return v<0?0:v}},{key:"getElementHref",value:function(v){var u=this.props,N=u.hrefBuilder,h=u.pageCount,w=u.hrefAllControls;if(N)return w||v>=0&&v<h?N(v+1,h,this.state.selected):void 0}},{key:"ariaLabelBuilder",value:function(v){var u=v===this.state.selected;if(this.props.ariaLabelBuilder&&v>=0&&v<this.props.pageCount){var N=this.props.ariaLabelBuilder(v+1,u);return this.props.extraAriaContext&&!u&&(N=N+" "+this.props.extraAriaContext),N}}},{key:"getPageElement",value:function(v){var u=this.state.selected,N=this.props,h=N.pageClassName,w=N.pageLinkClassName,O=N.activeClassName,$=N.activeLinkClassName,B=N.extraAriaContext,Z=N.pageLabelBuilder;return f().createElement(b,{key:v,pageSelectedHandler:this.handlePageSelected.bind(null,v),selected:u===v,rel:this.getElementPageRel(v),pageClassName:h,pageLinkClassName:w,activeClassName:O,activeLinkClassName:$,extraAriaContext:B,href:this.getElementHref(v),ariaLabel:this.ariaLabelBuilder(v),page:v+1,pageLabelBuilder:Z,getEventListener:this.getEventListener})}},{key:"render",value:function(){var v=this.props.renderOnZeroPageCount;if(this.props.pageCount===0&&v!==void 0)return v&&v(this.props);var u=this.props,N=u.disabledClassName,h=u.disabledLinkClassName,w=u.pageCount,O=u.className,$=u.containerClassName,B=u.previousLabel,Z=u.previousClassName,Ae=u.previousLinkClassName,_e=u.previousAriaLabel,ye=u.prevRel,V=u.nextLabel,oe=u.nextClassName,se=u.nextLinkClassName,le=u.nextAriaLabel,F=u.nextRel,K=this.state.selected,q=K===0,H=K===w-1,Be="".concat(M(Z)).concat(q?" ".concat(M(N)):""),mt="".concat(M(oe)).concat(H?" ".concat(M(N)):""),fe="".concat(M(Ae)).concat(q?" ".concat(M(h)):""),ce="".concat(M(se)).concat(H?" ".concat(M(h)):""),qe=q?"true":"false",Va=H?"true":"false";return f().createElement("ul",{className:O||$,role:"navigation","aria-label":"Pagination"},f().createElement("li",{className:Be},f().createElement("a",L({className:fe,href:this.getElementHref(K-1),tabIndex:q?"-1":"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":qe,"aria-label":_e,rel:ye},this.getEventListener(this.handlePreviousPage)),B)),this.pagination(),f().createElement("li",{className:mt},f().createElement("a",L({className:ce,href:this.getElementHref(K+1),tabIndex:H?"-1":"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":Va,"aria-label":le,rel:F},this.getEventListener(this.handleNextPage)),V)))}}])&&W(y.prototype,C),Object.defineProperty(y,"prototype",{writable:!1}),J}(s.Component);D(Te,"propTypes",{pageCount:l().number.isRequired,pageRangeDisplayed:l().number,marginPagesDisplayed:l().number,previousLabel:l().node,previousAriaLabel:l().string,prevPageRel:l().string,prevRel:l().string,nextLabel:l().node,nextAriaLabel:l().string,nextPageRel:l().string,nextRel:l().string,breakLabel:l().oneOfType([l().string,l().node]),breakAriaLabels:l().shape({forward:l().string,backward:l().string}),hrefBuilder:l().func,hrefAllControls:l().bool,onPageChange:l().func,onPageActive:l().func,onClick:l().func,initialPage:l().number,forcePage:l().number,disableInitialCallback:l().bool,containerClassName:l().string,className:l().string,pageClassName:l().string,pageLinkClassName:l().string,pageLabelBuilder:l().func,activeClassName:l().string,activeLinkClassName:l().string,previousClassName:l().string,nextClassName:l().string,previousLinkClassName:l().string,nextLinkClassName:l().string,disabledClassName:l().string,disabledLinkClassName:l().string,breakClassName:l().string,breakLinkClassName:l().string,extraAriaContext:l().string,ariaLabelBuilder:l().func,eventListener:l().string,renderOnZeroPageCount:l().func,selectedPageRel:l().string}),D(Te,"defaultProps",{pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevPageRel:"prev",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextPageRel:"next",nextRel:"next",breakLabel:"...",breakAriaLabels:{forward:"Jump forward",backward:"Jump backward"},disabledClassName:"disabled",disableInitialCallback:!1,pageLabelBuilder:function(g){return g},eventListener:"onClick",renderOnZeroPageCount:void 0,selectedPageRel:"canonical",hrefAllControls:!1});const Xa=Te})(),o})())})(Jr);export{we as F,ti as R,qr as a,Xr as b,ei as c,Gr as f};
