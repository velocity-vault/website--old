var app=function(){"use strict";function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function s(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function i(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}function u(t,n,e,o){if(t){const r=l(t,n,e,o);return t[0](r)}}function l(t,e,o,r){return t[1]&&r?n(o.ctx.slice(),t[1](r(e))):o.ctx}function a(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}function f(t,n,e,o,r,s){if(r){const c=l(n,e,o,s);t.p(c,r)}}function d(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let t=0;t<e;t++)n[t]=-1;return n}return-1}function p(t,n){t.appendChild(n)}function $(t,n,e){t.insertBefore(n,e||null)}function h(t){t.parentNode&&t.parentNode.removeChild(t)}function m(t){return document.createElement(t)}function g(t){return document.createTextNode(t)}function y(){return g(" ")}function b(){return g("")}function x(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function v(t,n){return new t(n)}let w;function E(t){w=t}function _(){if(!w)throw new Error("Function called outside component initialization");return w}function k(){const t=_();return(n,e,{cancelable:o=!1}={})=>{const r=t.$$.callbacks[n];if(r){const s=function(t,n,{bubbles:e=!1,cancelable:o=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,e,o,n),r}(n,e,{cancelable:o});return r.slice().forEach((n=>{n.call(t,s)})),!s.defaultPrevented}return!0}}function j(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach((t=>t.call(this,n)))}!function(){const t={VV_API_BASE_URL:"https://api.invalid"};try{if(process)return process.env=Object.assign({},process.env),void Object.assign(process.env,t)}catch(t){}globalThis.process={env:t}}();const C=[],S=[],O=[],A=[],P=Promise.resolve();let q=!1;function L(){q||(q=!0,P.then(T))}function N(t){O.push(t)}const R=new Set;let I=0;function T(){if(0!==I)return;const t=w;do{try{for(;I<C.length;){const t=C[I];I++,E(t),D(t.$$)}}catch(t){throw C.length=0,I=0,t}for(E(null),C.length=0,I=0;S.length;)S.pop()();for(let t=0;t<O.length;t+=1){const n=O[t];R.has(n)||(R.add(n),n())}O.length=0}while(C.length);for(;A.length;)A.pop()();q=!1,R.clear(),E(t)}function D(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(N)}}const M=new Set;let U;function V(){U={r:0,c:[],p:U}}function z(){U.r||r(U.c),U=U.p}function B(t,n){t&&t.i&&(M.delete(t),t.i(n))}function F(t,n,e,o){if(t&&t.o){if(M.has(t))return;M.add(t),U.c.push((()=>{M.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}else o&&o()}function H(t,n){const e={},o={},r={$$scope:1};let s=t.length;for(;s--;){const c=t[s],i=n[s];if(i){for(const t in c)t in i||(o[t]=1);for(const t in i)r[t]||(e[t]=i[t],r[t]=1);t[s]=i}else for(const t in c)r[t]=1}for(const t in o)t in e||(e[t]=void 0);return e}function Y(t){return"object"==typeof t&&null!==t?t:{}}function W(t){t&&t.c()}function X(t,n,o,c){const{fragment:i,after_update:u}=t.$$;i&&i.m(n,o),c||N((()=>{const n=t.$$.on_mount.map(e).filter(s);t.$$.on_destroy?t.$$.on_destroy.push(...n):r(n),t.$$.on_mount=[]})),u.forEach(N)}function G(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function J(n,e,s,c,i,u,l,a=[-1]){const f=w;E(n);const d=n.$$={fragment:null,ctx:[],props:u,update:t,not_equal:i,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(f?f.$$.context:[])),callbacks:o(),dirty:a,skip_bound:!1,root:e.target||f.$$.root};l&&l(d.root);let p=!1;if(d.ctx=s?s(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return d.ctx&&i(d.ctx[t],d.ctx[t]=r)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](r),p&&function(t,n){-1===t.$$.dirty[0]&&(C.push(t),L(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}(n,t)),e})):[],d.update(),p=!0,r(d.before_update),d.fragment=!!c&&c(d.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target);d.fragment&&d.fragment.l(t),t.forEach(h)}else d.fragment&&d.fragment.c();e.intro&&B(n.$$.fragment),X(n,e.target,e.anchor,e.customElement),T()}E(f)}class K{$destroy(){G(this,1),this.$destroy=t}$on(n,e){if(!s(e))return t;const o=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return o.push(e),()=>{const t=o.indexOf(e);-1!==t&&o.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Q=[];function Z(t,n){return{subscribe:tt(t,n).subscribe}}function tt(n,e=t){let o;const r=new Set;function s(t){if(c(n,t)&&(n=t,o)){const t=!Q.length;for(const t of r)t[1](),Q.push(t,n);if(t){for(let t=0;t<Q.length;t+=2)Q[t][0](Q[t+1]);Q.length=0}}}return{set:s,update:function(t){s(t(n))},subscribe:function(c,i=t){const u=[c,i];return r.add(u),1===r.size&&(o=e(s)||t),c(n),()=>{r.delete(u),0===r.size&&(o(),o=null)}}}}function nt(n,e,o){const c=!Array.isArray(n),u=c?[n]:n,l=e.length<2;return Z(o,(n=>{let o=!1;const a=[];let f=0,d=t;const p=()=>{if(f)return;d();const o=e(c?a[0]:a,n);l?n(o):d=s(o)?o:t},$=u.map(((t,n)=>i(t,(t=>{a[n]=t,f&=~(1<<n),o&&p()}),(()=>{f|=1<<n}))));return o=!0,p(),function(){r($),d()}}))}function et(t){let e,o,r;const s=[t[2]];var c=t[0];function i(t){let e={};for(let t=0;t<s.length;t+=1)e=n(e,s[t]);return{props:e}}return c&&(e=v(c,i()),e.$on("routeEvent",t[7])),{c(){e&&W(e.$$.fragment),o=b()},m(t,n){e&&X(e,t,n),$(t,o,n),r=!0},p(t,n){const r=4&n?H(s,[Y(t[2])]):{};if(c!==(c=t[0])){if(e){V();const t=e;F(t.$$.fragment,1,0,(()=>{G(t,1)})),z()}c?(e=v(c,i()),e.$on("routeEvent",t[7]),W(e.$$.fragment),B(e.$$.fragment,1),X(e,o.parentNode,o)):e=null}else c&&e.$set(r)},i(t){r||(e&&B(e.$$.fragment,t),r=!0)},o(t){e&&F(e.$$.fragment,t),r=!1},d(t){t&&h(o),e&&G(e,t)}}}function ot(t){let e,o,r;const s=[{params:t[1]},t[2]];var c=t[0];function i(t){let e={};for(let t=0;t<s.length;t+=1)e=n(e,s[t]);return{props:e}}return c&&(e=v(c,i()),e.$on("routeEvent",t[6])),{c(){e&&W(e.$$.fragment),o=b()},m(t,n){e&&X(e,t,n),$(t,o,n),r=!0},p(t,n){const r=6&n?H(s,[2&n&&{params:t[1]},4&n&&Y(t[2])]):{};if(c!==(c=t[0])){if(e){V();const t=e;F(t.$$.fragment,1,0,(()=>{G(t,1)})),z()}c?(e=v(c,i()),e.$on("routeEvent",t[6]),W(e.$$.fragment),B(e.$$.fragment,1),X(e,o.parentNode,o)):e=null}else c&&e.$set(r)},i(t){r||(e&&B(e.$$.fragment,t),r=!0)},o(t){e&&F(e.$$.fragment,t),r=!1},d(t){t&&h(o),e&&G(e,t)}}}function rt(t){let n,e,o,r;const s=[ot,et],c=[];function i(t,n){return t[1]?0:1}return n=i(t),e=c[n]=s[n](t),{c(){e.c(),o=b()},m(t,e){c[n].m(t,e),$(t,o,e),r=!0},p(t,[r]){let u=n;n=i(t),n===u?c[n].p(t,r):(V(),F(c[u],1,1,(()=>{c[u]=null})),z(),e=c[n],e?e.p(t,r):(e=c[n]=s[n](t),e.c()),B(e,1),e.m(o.parentNode,o))},i(t){r||(B(e),r=!0)},o(t){F(e),r=!1},d(t){c[n].d(t),t&&h(o)}}}function st(){const t=window.location.href.indexOf("#/");let n=t>-1?window.location.href.substr(t+1):"/";const e=n.indexOf("?");let o="";return e>-1&&(o=n.substr(e+1),n=n.substr(0,e)),{location:n,querystring:o}}const ct=Z(null,(function(t){t(st());const n=()=>{t(st())};return window.addEventListener("hashchange",n,!1),function(){window.removeEventListener("hashchange",n,!1)}})),it=nt(ct,(t=>t.location));nt(ct,(t=>t.querystring));function ut(t,n,e){let{routes:o={}}=n,{prefix:r=""}=n,{restoreScrollState:s=!1}=n;class c{constructor(t,n){if(!n||"function"!=typeof n&&("object"!=typeof n||!0!==n._sveltesparouter))throw Error("Invalid component object");if(!t||"string"==typeof t&&(t.length<1||"/"!=t.charAt(0)&&"*"!=t.charAt(0))||"object"==typeof t&&!(t instanceof RegExp))throw Error('Invalid value for "path" argument');const{pattern:e,keys:o}=function(t,n){if(t instanceof RegExp)return{keys:!1,pattern:t};var e,o,r,s,c=[],i="",u=t.split("/");for(u[0]||u.shift();r=u.shift();)"*"===(e=r[0])?(c.push("wild"),i+="/(.*)"):":"===e?(o=r.indexOf("?",1),s=r.indexOf(".",1),c.push(r.substring(1,~o?o:~s?s:r.length)),i+=~o&&!~s?"(?:/([^/]+?))?":"/([^/]+?)",~s&&(i+=(~o?"?":"")+"\\"+r.substring(s))):i+="/"+r;return{keys:c,pattern:new RegExp("^"+i+(n?"(?=$|/)":"/?$"),"i")}}(t);this.path=t,"object"==typeof n&&!0===n._sveltesparouter?(this.component=n.component,this.conditions=n.conditions||[],this.userData=n.userData,this.props=n.props||{}):(this.component=()=>Promise.resolve(n),this.conditions=[],this.props={}),this._pattern=e,this._keys=o}match(t){if(r)if("string"==typeof r&&t.startsWith(r))t=t.substr(r.length)||"/";else if(r instanceof RegExp){const n=t.match(r);n&&n[0]&&(t=t.substr(n[0].length)||"/")}const n=this._pattern.exec(t);if(null===n)return null;if(!1===this._keys)return n;const e={};let o=0;for(;o<this._keys.length;){try{e[this._keys[o]]=decodeURIComponent(n[o+1]||"")||null}catch(t){e[this._keys[o]]=null}o++}return e}async checkConditions(t){for(let n=0;n<this.conditions.length;n++)if(!await this.conditions[n](t))return!1;return!0}}const i=[];o instanceof Map?o.forEach(((t,n)=>{i.push(new c(n,t))})):Object.keys(o).forEach((t=>{i.push(new c(t,o[t]))}));let u=null,l=null,a={};const f=k();async function d(t,n){await(L(),P),f(t,n)}let p=null;var $;s&&(window.addEventListener("popstate",(t=>{p=t.state&&t.state.scrollY?t.state:null})),$=()=>{p?window.scrollTo(p.scrollX,p.scrollY):window.scrollTo(0,0)},_().$$.after_update.push($));let h=null,m=null;return ct.subscribe((async t=>{h=t;let n=0;for(;n<i.length;){const o=i[n].match(t.location);if(!o){n++;continue}const r={route:i[n].path,location:t.location,querystring:t.querystring,userData:i[n].userData};if(!await i[n].checkConditions(r))return e(0,u=null),m=null,void d("conditionsFailed",r);d("routeLoading",Object.assign({},r));const s=i[n].component;if(m!=s){s.loading?(e(0,u=s.loading),m=s,e(1,l=s.loadingParams),e(2,a={}),d("routeLoaded",Object.assign({},r,{component:u,name:u.name}))):(e(0,u=null),m=null);const n=await s();if(t!=h)return;e(0,u=n&&n.default||n),m=s}return o&&"object"==typeof o&&Object.keys(o).length?e(1,l=o):e(1,l=null),e(2,a=i[n].props),void d("routeLoaded",Object.assign({},r,{component:u,name:u.name}))}e(0,u=null),m=null})),t.$$set=t=>{"routes"in t&&e(3,o=t.routes),"prefix"in t&&e(4,r=t.prefix),"restoreScrollState"in t&&e(5,s=t.restoreScrollState)},t.$$.update=()=>{32&t.$$.dirty&&(history.scrollRestoration=s?"manual":"auto")},[u,l,a,o,r,s,function(n){j.call(this,t,n)},function(n){j.call(this,t,n)}]}class lt extends K{constructor(t){super(),J(this,t,ut,rt,c,{routes:3,prefix:4,restoreScrollState:5})}}function at(t,n,e){const o=t.slice();return o[1]=n[e],o}function ft(n){let e,o,r,s,c,i,u;return{c(){e=m("h1"),e.textContent="Hello, world!",o=y(),r=m("p"),r.textContent=`API is located at: ${n[0]}`,s=y(),c=m("p"),c.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\t\tUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure\n\t\tdolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n\t\tproident, sunt in culpa qui officia deserunt mollit anim id est laborum.",i=y(),u=m("hr")},m(t,n){$(t,e,n),$(t,o,n),$(t,r,n),$(t,s,n),$(t,c,n),$(t,i,n),$(t,u,n)},p:t,d(t){t&&h(e),t&&h(o),t&&h(r),t&&h(s),t&&h(c),t&&h(i),t&&h(u)}}}function dt(n){let e,o={length:15},r=[];for(let t=0;t<o.length;t+=1)r[t]=ft(at(n,o,t));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=b()},m(t,n){for(let e=0;e<r.length;e+=1)r[e].m(t,n);$(t,e,n)},p(t,[n]){if(1&n){let s;for(o={length:15},s=0;s<o.length;s+=1){const c=at(t,o,s);r[s]?r[s].p(c,n):(r[s]=ft(c),r[s].c(),r[s].m(e.parentNode,e))}for(;s<r.length;s+=1)r[s].d(1);r.length=o.length}},i:t,o:t,d(t){!function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(r,t),t&&h(e)}}}function pt(t){const{VV_API_BASE_URL:n}=process.env;return document.documentElement.style.setProperty("--hue-rotate","0deg"),[n]}function $t(n){let e,o,r,s,c,i,u,l,a,f;return{c(){e=m("h1"),e.textContent="Maps!",o=y(),r=m("p"),r.textContent="There are currently no maps in here, but you can play cookie clicker if you like.",s=y(),c=m("p"),i=m("button"),u=g("Cookies: "),l=g(n[0])},m(t,d){var h,m,g,y;$(t,e,d),$(t,o,d),$(t,r,d),$(t,s,d),$(t,c,d),p(c,i),p(i,u),p(i,l),a||(h=i,m="click",g=n[1],h.addEventListener(m,g,y),f=()=>h.removeEventListener(m,g,y),a=!0)},p(t,[n]){1&n&&function(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}(l,t[0])},i:t,o:t,d(t){t&&h(e),t&&h(o),t&&h(r),t&&h(s),t&&h(c),a=!1,f()}}}function ht(t,n,e){let o=0;return document.documentElement.style.setProperty("--hue-rotate","45deg"),[o,function(){e(0,o++,o)}]}function mt(n){let e,o,r;return{c(){e=m("h1"),e.textContent="Rankings!",o=y(),r=m("p"),r.textContent="It is what it is."},m(t,n){$(t,e,n),$(t,o,n),$(t,r,n)},p:t,i:t,o:t,d(t){t&&h(e),t&&h(o),t&&h(r)}}}function gt(t){return document.documentElement.style.setProperty("--hue-rotate","90deg"),[]}function yt(n){let e,o,r;return{c(){e=m("h1"),e.textContent="Servers!",o=y(),r=m("p"),r.textContent="It do be servers."},m(t,n){$(t,e,n),$(t,o,n),$(t,r,n)},p:t,i:t,o:t,d(t){t&&h(e),t&&h(o),t&&h(r)}}}function bt(t){return document.documentElement.style.setProperty("--hue-rotate","135deg"),[]}function xt(n){let e,o,r;return{c(){e=m("h1"),e.textContent="Not Found",o=y(),r=m("p"),r.textContent="This route doesn't exist."},m(t,n){$(t,e,n),$(t,o,n),$(t,r,n)},p:t,i:t,o:t,d(t){t&&h(e),t&&h(o),t&&h(r)}}}function vt(t){return document.documentElement.style.setProperty("--hue-rotate","180deg"),[]}var wt={"/":class extends K{constructor(t){super(),J(this,t,pt,dt,c,{})}},"/maps":class extends K{constructor(t){super(),J(this,t,ht,$t,c,{})}},"/rankings":class extends K{constructor(t){super(),J(this,t,gt,mt,c,{})}},"/servers":class extends K{constructor(t){super(),J(this,t,bt,yt,c,{})}},"*":class extends K{constructor(t){super(),J(this,t,vt,xt,c,{})}}};function Et(t){let n,e;const o=t[1].default,r=u(o,t,t[0],null);return{c(){n=m("nav"),r&&r.c(),x(n,"class","svelte-srqmdd")},m(t,o){$(t,n,o),r&&r.m(n,null),e=!0},p(t,[n]){r&&r.p&&(!e||1&n)&&f(r,o,t,t[0],e?a(o,t[0],n,null):d(t[0]),null)},i(t){e||(B(r,t),e=!0)},o(t){F(r,t),e=!1},d(t){t&&h(n),r&&r.d(t)}}}function _t(t,n,e){let{$$slots:o={},$$scope:r}=n;return t.$$set=t=>{"$$scope"in t&&e(0,r=t.$$scope)},[r,o]}class kt extends K{constructor(t){super(),J(this,t,_t,Et,c,{})}}function jt(t){let n,e;const o=t[3].default,r=u(o,t,t[2],null);return{c(){n=m("a"),r&&r.c(),x(n,"href",t[0]),x(n,"class","current svelte-1ovjub0")},m(t,o){$(t,n,o),r&&r.m(n,null),e=!0},p(t,s){r&&r.p&&(!e||4&s)&&f(r,o,t,t[2],e?a(o,t[2],s,null):d(t[2]),null),(!e||1&s)&&x(n,"href",t[0])},i(t){e||(B(r,t),e=!0)},o(t){F(r,t),e=!1},d(t){t&&h(n),r&&r.d(t)}}}function Ct(t){let n,e;const o=t[3].default,r=u(o,t,t[2],null);return{c(){n=m("a"),r&&r.c(),x(n,"href",t[0]),x(n,"class","svelte-1ovjub0")},m(t,o){$(t,n,o),r&&r.m(n,null),e=!0},p(t,s){r&&r.p&&(!e||4&s)&&f(r,o,t,t[2],e?a(o,t[2],s,null):d(t[2]),null),(!e||1&s)&&x(n,"href",t[0])},i(t){e||(B(r,t),e=!0)},o(t){F(r,t),e=!1},d(t){t&&h(n),r&&r.d(t)}}}function St(t){let n,e,o,r;const s=[Ct,jt],c=[];function i(t,n){return"#"+t[1]!==t[0]?0:1}return n=i(t),e=c[n]=s[n](t),{c(){e.c(),o=b()},m(t,e){c[n].m(t,e),$(t,o,e),r=!0},p(t,[r]){let u=n;n=i(t),n===u?c[n].p(t,r):(V(),F(c[u],1,1,(()=>{c[u]=null})),z(),e=c[n],e?e.p(t,r):(e=c[n]=s[n](t),e.c()),B(e,1),e.m(o.parentNode,o))},i(t){r||(B(e),r=!0)},o(t){F(e),r=!1},d(t){c[n].d(t),t&&h(o)}}}function Ot(t,n,e){let o;var r,s;r=it,s=t=>e(1,o=t),t.$$.on_destroy.push(i(r,s));let{$$slots:c={},$$scope:u}=n,{href:l="#"}=n;return t.$$set=t=>{"href"in t&&e(0,l=t.href),"$$scope"in t&&e(2,u=t.$$scope)},[l,o,u,c]}class At extends K{constructor(t){super(),J(this,t,Ot,St,c,{href:0})}}function Pt(t){let n;return{c(){n=g("Home")},m(t,e){$(t,n,e)},d(t){t&&h(n)}}}function qt(t){let n;return{c(){n=g("Maps")},m(t,e){$(t,n,e)},d(t){t&&h(n)}}}function Lt(t){let n;return{c(){n=g("Rankings")},m(t,e){$(t,n,e)},d(t){t&&h(n)}}}function Nt(t){let n;return{c(){n=g("Servers")},m(t,e){$(t,n,e)},d(t){t&&h(n)}}}function Rt(t){let n,e,o,r,s,c,i,u;return n=new At({props:{href:"#/",$$slots:{default:[Pt]},$$scope:{ctx:t}}}),o=new At({props:{href:"#/maps",$$slots:{default:[qt]},$$scope:{ctx:t}}}),s=new At({props:{href:"#/rankings",$$slots:{default:[Lt]},$$scope:{ctx:t}}}),i=new At({props:{href:"#/servers",$$slots:{default:[Nt]},$$scope:{ctx:t}}}),{c(){W(n.$$.fragment),e=y(),W(o.$$.fragment),r=y(),W(s.$$.fragment),c=y(),W(i.$$.fragment)},m(t,l){X(n,t,l),$(t,e,l),X(o,t,l),$(t,r,l),X(s,t,l),$(t,c,l),X(i,t,l),u=!0},p(t,e){const r={};1&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r);const c={};1&e&&(c.$$scope={dirty:e,ctx:t}),o.$set(c);const u={};1&e&&(u.$$scope={dirty:e,ctx:t}),s.$set(u);const l={};1&e&&(l.$$scope={dirty:e,ctx:t}),i.$set(l)},i(t){u||(B(n.$$.fragment,t),B(o.$$.fragment,t),B(s.$$.fragment,t),B(i.$$.fragment,t),u=!0)},o(t){F(n.$$.fragment,t),F(o.$$.fragment,t),F(s.$$.fragment,t),F(i.$$.fragment,t),u=!1},d(t){G(n,t),t&&h(e),G(o,t),t&&h(r),G(s,t),t&&h(c),G(i,t)}}}function It(t){let n,e,o,r;return o=new kt({props:{$$slots:{default:[Rt]},$$scope:{ctx:t}}}),{c(){n=m("header"),e=m("div"),W(o.$$.fragment),x(e,"class","container svelte-1snhjj9"),x(n,"class","svelte-1snhjj9")},m(t,s){$(t,n,s),p(n,e),X(o,e,null),r=!0},p(t,[n]){const e={};1&n&&(e.$$scope={dirty:n,ctx:t}),o.$set(e)},i(t){r||(B(o.$$.fragment,t),r=!0)},o(t){F(o.$$.fragment,t),r=!1},d(t){t&&h(n),G(o)}}}class Tt extends K{constructor(t){super(),J(this,t,null,It,c,{})}}function Dt(n){let e,o,r,s,c;return e=new Tt({}),s=new lt({props:{routes:wt}}),{c(){W(e.$$.fragment),o=y(),r=m("main"),W(s.$$.fragment),x(r,"class","svelte-1pogml5")},m(t,n){X(e,t,n),$(t,o,n),$(t,r,n),X(s,r,null),c=!0},p:t,i(t){c||(B(e.$$.fragment,t),B(s.$$.fragment,t),c=!0)},o(t){F(e.$$.fragment,t),F(s.$$.fragment,t),c=!1},d(t){G(e,t),t&&h(o),t&&h(r),G(s)}}}return new class extends K{constructor(t){super(),J(this,t,null,Dt,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map