var app=function(){"use strict";function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function s(t){return"function"==typeof t}function u(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}function l(t,e,n){t.$$.on_destroy.push(c(e,n))}function a(t,e,n,o){if(t){const r=i(t,e,n,o);return t[0](r)}}function i(t,n,o,r){return t[1]&&r?e(o.ctx.slice(),t[1](r(n))):o.ctx}function f(t,e,n,o){if(t[2]&&o){const r=t[2](o(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|r[o];return t}return e.dirty|r}return e.dirty}function p(t,e,n,o,r,s){if(r){const u=i(e,n,o,s);t.p(u,r)}}function m(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}function $(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function d(t,e){const n={};e=new Set(e);for(const o in t)e.has(o)||"$"===o[0]||(n[o]=t[o]);return n}function h(t,e){t.appendChild(e)}function y(t,e,n){t.insertBefore(e,n||null)}function v(t){t.parentNode.removeChild(t)}function b(t){return document.createElement(t)}function g(t){return document.createTextNode(t)}function x(){return g(" ")}function w(){return g("")}function _(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function k(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function E(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const o in e)null==e[o]?t.removeAttribute(o):"style"===o?t.style.cssText=e[o]:"__value"===o?t.value=t[o]=e[o]:n[o]&&n[o].set?t[o]=e[o]:k(t,o,e[o])}function C(t,e){t.value=null==e?"":e}function P(t,e,n){t.classList[n?"add":"remove"](e)}let j;function A(t){j=t}function S(){if(!j)throw new Error("Function called outside component initialization");return j}function O(){const t=S();return(e,n)=>{const o=t.$$.callbacks[e];if(o){const r=function(t,e,n=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n,!1,e),o}(e,n);o.slice().forEach((e=>{e.call(t,r)}))}}}function R(t,e){S().$$.context.set(t,e)}function L(t){return S().$$.context.get(t)}const N=[],M=[],B=[],K=[],z=Promise.resolve();let D=!1;function H(t){B.push(t)}let T=!1;const U=new Set;function I(){if(!T){T=!0;do{for(let t=0;t<N.length;t+=1){const e=N[t];A(e),q(e.$$)}for(A(null),N.length=0;M.length;)M.pop()();for(let t=0;t<B.length;t+=1){const e=B[t];U.has(e)||(U.add(e),e())}B.length=0}while(N.length);for(;K.length;)K.pop()();D=!1,T=!1,U.clear()}}function q(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(H)}}const F=new Set;let V;function G(){V={r:0,c:[],p:V}}function J(){V.r||r(V.c),V=V.p}function Q(t,e){t&&t.i&&(F.delete(t),t.i(e))}function W(t,e,n,o){if(t&&t.o){if(F.has(t))return;F.add(t),V.c.push((()=>{F.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function X(t,e){const n={},o={},r={$$scope:1};let s=t.length;for(;s--;){const u=t[s],c=e[s];if(c){for(const t in u)t in c||(o[t]=1);for(const t in c)r[t]||(n[t]=c[t],r[t]=1);t[s]=c}else for(const t in u)r[t]=1}for(const t in o)t in n||(n[t]=void 0);return n}function Y(t){return"object"==typeof t&&null!==t?t:{}}function Z(t){t&&t.c()}function tt(t,e,o,u){const{fragment:c,on_mount:l,on_destroy:a,after_update:i}=t.$$;c&&c.m(e,o),u||H((()=>{const e=l.map(n).filter(s);a?a.push(...e):r(e),t.$$.on_mount=[]})),i.forEach(H)}function et(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function nt(t,e){-1===t.$$.dirty[0]&&(N.push(t),D||(D=!0,z.then(I)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ot(e,n,s,u,c,l,a,i=[-1]){const f=j;A(e);const p=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:c,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:n.context||[]),callbacks:o(),dirty:i,skip_bound:!1,root:n.target||f.$$.root};a&&a(p.root);let m=!1;if(p.ctx=s?s(e,n.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return p.ctx&&c(p.ctx[t],p.ctx[t]=r)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](r),m&&nt(e,t)),n})):[],p.update(),m=!0,r(p.before_update),p.fragment=!!u&&u(p.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);p.fragment&&p.fragment.l(t),t.forEach(v)}else p.fragment&&p.fragment.c();n.intro&&Q(e.$$.fragment),tt(e,n.target,n.anchor,n.customElement),I()}A(f)}class rt{$destroy(){et(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const st=[];function ut(e,n=t){let o;const r=new Set;function s(t){if(u(e,t)&&(e=t,o)){const t=!st.length;for(const t of r)t[1](),st.push(t,e);if(t){for(let t=0;t<st.length;t+=2)st[t][0](st[t+1]);st.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(u,c=t){const l=[u,c];return r.add(l),1===r.size&&(o=n(s)||t),u(e),()=>{r.delete(l),0===r.size&&(o(),o=null)}}}}function ct(e,n,o){const u=!Array.isArray(e),l=u?[e]:e,a=n.length<2;return i=e=>{let o=!1;const i=[];let f=0,p=t;const m=()=>{if(f)return;p();const o=n(u?i[0]:i,e);a?e(o):p=s(o)?o:t},$=l.map(((t,e)=>c(t,(t=>{i[e]=t,f&=~(1<<e),o&&m()}),(()=>{f|=1<<e}))));return o=!0,m(),function(){r($),p()}},{subscribe:ut(o,i).subscribe};var i}const lt={},at={};function it(t){return{...t.location,state:t.history.state,key:t.history.state&&t.history.state.key||"initial"}}const ft=function(t,e){const n=[];let o=it(t);return{get location(){return o},listen(e){n.push(e);const r=()=>{o=it(t),e({location:o,action:"POP"})};return t.addEventListener("popstate",r),()=>{t.removeEventListener("popstate",r);const o=n.indexOf(e);n.splice(o,1)}},navigate(e,{state:r,replace:s=!1}={}){r={...r,key:Date.now()+""};try{s?t.history.replaceState(r,null,e):t.history.pushState(r,null,e)}catch(n){t.location[s?"replace":"assign"](e)}o=it(t),n.forEach((t=>t({location:o,action:"PUSH"})))}}}(Boolean("undefined"!=typeof window&&window.document&&window.document.createElement)?window:function(t="/"){let e=0;const n=[{pathname:t,search:""}],o=[];return{get location(){return n[e]},addEventListener(t,e){},removeEventListener(t,e){},history:{get entries(){return n},get index(){return e},get state(){return o[e]},pushState(t,r,s){const[u,c=""]=s.split("?");e++,n.push({pathname:u,search:c}),o.push(t)},replaceState(t,r,s){const[u,c=""]=s.split("?");n[e]={pathname:u,search:c},o[e]=t}}}}()),{navigate:pt}=ft,mt=/^:(.+)/;function $t(t,e){return t.substr(0,e.length)===e}function dt(t){return"*"===t[0]}function ht(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function yt(t){return t.replace(/(^\/+|\/+$)/g,"")}function vt(t,e){return{route:t,score:t.default?0:ht(t.path).reduce(((t,e)=>(t+=4,!function(t){return""===t}(e)?!function(t){return mt.test(t)}(e)?dt(e)?t-=5:t+=3:t+=2:t+=1,t)),0),index:e}}function bt(t,e){let n,o;const[r]=e.split("?"),s=ht(r),u=""===s[0],c=function(t){return t.map(vt).sort(((t,e)=>t.score<e.score?1:t.score>e.score?-1:t.index-e.index))}(t);for(let t=0,r=c.length;t<r;t++){const r=c[t].route;let l=!1;if(r.default){o={route:r,params:{},uri:e};continue}const a=ht(r.path),i={},f=Math.max(s.length,a.length);let p=0;for(;p<f;p++){const t=a[p],e=s[p];if(void 0!==t&&dt(t)){i["*"===t?"*":t.slice(1)]=s.slice(p).map(decodeURIComponent).join("/");break}if(void 0===e){l=!0;break}let n=mt.exec(t);if(n&&!u){const t=decodeURIComponent(e);i[n[1]]=t}else if(t!==e){l=!0;break}}if(!l){n={route:r,params:i,uri:"/"+s.slice(0,p).join("/")};break}}return n||o||null}function gt(t,e){return t+(e?`?${e}`:"")}function xt(t,e){return`${yt("/"===e?t:`${yt(t)}/${yt(e)}`)}/`}function wt(t){let e;const n=t[9].default,o=a(n,t,t[8],null);return{c(){o&&o.c()},m(t,n){o&&o.m(t,n),e=!0},p(t,[r]){o&&o.p&&(!e||256&r)&&p(o,n,t,t[8],e?f(n,t[8],r,null):m(t[8]),null)},i(t){e||(Q(o,t),e=!0)},o(t){W(o,t),e=!1},d(t){o&&o.d(t)}}}function _t(t,e,n){let o,r,s,{$$slots:u={},$$scope:c}=e,{basepath:a="/"}=e,{url:i=null}=e;const f=L(lt),p=L(at),m=ut([]);l(t,m,(t=>n(6,r=t)));const $=ut(null);let d=!1;const h=f||ut(i?{pathname:i}:ft.location);l(t,h,(t=>n(5,o=t)));const y=p?p.routerBase:ut({path:a,uri:a});l(t,y,(t=>n(7,s=t)));const v=ct([y,$],(([t,e])=>{if(null===e)return t;const{path:n}=t,{route:o,uri:r}=e;return{path:o.default?n:o.path.replace(/\*.*$/,""),uri:r}}));var b;return f||(b=()=>ft.listen((t=>{h.set(t.location)})),S().$$.on_mount.push(b),R(lt,h)),R(at,{activeRoute:$,base:y,routerBase:v,registerRoute:function(t){const{path:e}=s;let{path:n}=t;if(t._path=n,t.path=xt(e,n),"undefined"==typeof window){if(d)return;const e=function(t,e){return bt([t],e)}(t,o.pathname);e&&($.set(e),d=!0)}else m.update((e=>(e.push(t),e)))},unregisterRoute:function(t){m.update((e=>{const n=e.indexOf(t);return e.splice(n,1),e}))}}),t.$$set=t=>{"basepath"in t&&n(3,a=t.basepath),"url"in t&&n(4,i=t.url),"$$scope"in t&&n(8,c=t.$$scope)},t.$$.update=()=>{if(128&t.$$.dirty){const{path:t}=s;m.update((e=>(e.forEach((e=>e.path=xt(t,e._path))),e)))}if(96&t.$$.dirty){const t=bt(r,o.pathname);$.set(t)}},[m,h,y,a,i,o,r,s,c,u]}class kt extends rt{constructor(t){super(),ot(this,t,_t,wt,u,{basepath:3,url:4})}}const Et=t=>({params:4&t,location:16&t}),Ct=t=>({params:t[2],location:t[4]});function Pt(t){let e,n,o,r;const s=[At,jt],u=[];function c(t,e){return null!==t[0]?0:1}return e=c(t),n=u[e]=s[e](t),{c(){n.c(),o=w()},m(t,n){u[e].m(t,n),y(t,o,n),r=!0},p(t,r){let l=e;e=c(t),e===l?u[e].p(t,r):(G(),W(u[l],1,1,(()=>{u[l]=null})),J(),n=u[e],n?n.p(t,r):(n=u[e]=s[e](t),n.c()),Q(n,1),n.m(o.parentNode,o))},i(t){r||(Q(n),r=!0)},o(t){W(n),r=!1},d(t){u[e].d(t),t&&v(o)}}}function jt(t){let e;const n=t[10].default,o=a(n,t,t[9],Ct);return{c(){o&&o.c()},m(t,n){o&&o.m(t,n),e=!0},p(t,r){o&&o.p&&(!e||532&r)&&p(o,n,t,t[9],e?f(n,t[9],r,Et):m(t[9]),Ct)},i(t){e||(Q(o,t),e=!0)},o(t){W(o,t),e=!1},d(t){o&&o.d(t)}}}function At(t){let n,o,r;const s=[{location:t[4]},t[2],t[3]];var u=t[0];function c(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}return u&&(n=new u(c())),{c(){n&&Z(n.$$.fragment),o=w()},m(t,e){n&&tt(n,t,e),y(t,o,e),r=!0},p(t,e){const r=28&e?X(s,[16&e&&{location:t[4]},4&e&&Y(t[2]),8&e&&Y(t[3])]):{};if(u!==(u=t[0])){if(n){G();const t=n;W(t.$$.fragment,1,0,(()=>{et(t,1)})),J()}u?(n=new u(c()),Z(n.$$.fragment),Q(n.$$.fragment,1),tt(n,o.parentNode,o)):n=null}else u&&n.$set(r)},i(t){r||(n&&Q(n.$$.fragment,t),r=!0)},o(t){n&&W(n.$$.fragment,t),r=!1},d(t){t&&v(o),n&&et(n,t)}}}function St(t){let e,n,o=null!==t[1]&&t[1].route===t[7]&&Pt(t);return{c(){o&&o.c(),e=w()},m(t,r){o&&o.m(t,r),y(t,e,r),n=!0},p(t,[n]){null!==t[1]&&t[1].route===t[7]?o?(o.p(t,n),2&n&&Q(o,1)):(o=Pt(t),o.c(),Q(o,1),o.m(e.parentNode,e)):o&&(G(),W(o,1,1,(()=>{o=null})),J())},i(t){n||(Q(o),n=!0)},o(t){W(o),n=!1},d(t){o&&o.d(t),t&&v(e)}}}function Ot(t,n,o){let r,s,{$$slots:u={},$$scope:c}=n,{path:a=""}=n,{component:i=null}=n;const{registerRoute:f,unregisterRoute:p,activeRoute:m}=L(at);l(t,m,(t=>o(1,r=t)));const d=L(lt);l(t,d,(t=>o(4,s=t)));const h={path:a,default:""===a};let y={},v={};var b;return f(h),"undefined"!=typeof window&&(b=()=>{p(h)},S().$$.on_destroy.push(b)),t.$$set=t=>{o(13,n=e(e({},n),$(t))),"path"in t&&o(8,a=t.path),"component"in t&&o(0,i=t.component),"$$scope"in t&&o(9,c=t.$$scope)},t.$$.update=()=>{2&t.$$.dirty&&r&&r.route===h&&o(2,y=r.params);{const{path:t,component:e,...r}=n;o(3,v=r)}},n=$(n),[i,r,y,v,s,m,d,h,a,c,u]}class Rt extends rt{constructor(t){super(),ot(this,t,Ot,St,u,{path:8,component:0})}}function Lt(t){let n,o,r,s;const u=t[16].default,c=a(u,t,t[15],null);let l=[{href:t[0]},{"aria-current":t[2]},t[1],t[6]],i={};for(let t=0;t<l.length;t+=1)i=e(i,l[t]);return{c(){n=b("a"),c&&c.c(),E(n,i)},m(e,u){y(e,n,u),c&&c.m(n,null),o=!0,r||(s=_(n,"click",t[5]),r=!0)},p(t,[e]){c&&c.p&&(!o||32768&e)&&p(c,u,t,t[15],o?f(u,t[15],e,null):m(t[15]),null),E(n,i=X(l,[(!o||1&e)&&{href:t[0]},(!o||4&e)&&{"aria-current":t[2]},2&e&&t[1],64&e&&t[6]]))},i(t){o||(Q(c,t),o=!0)},o(t){W(c,t),o=!1},d(t){t&&v(n),c&&c.d(t),r=!1,s()}}}function Nt(t,n,o){let r;const s=["to","replace","state","getProps"];let u,c,a=d(n,s),{$$slots:i={},$$scope:f}=n,{to:p="#"}=n,{replace:m=!1}=n,{state:h={}}=n,{getProps:y=(()=>({}))}=n;const{base:v}=L(at);l(t,v,(t=>o(14,c=t)));const b=L(lt);l(t,b,(t=>o(13,u=t)));const g=O();let x,w,_,k;return t.$$set=t=>{n=e(e({},n),$(t)),o(6,a=d(n,s)),"to"in t&&o(7,p=t.to),"replace"in t&&o(8,m=t.replace),"state"in t&&o(9,h=t.state),"getProps"in t&&o(10,y=t.getProps),"$$scope"in t&&o(15,f=t.$$scope)},t.$$.update=()=>{16512&t.$$.dirty&&o(0,x="/"===p?c.uri:function(t,e){if($t(t,"/"))return t;const[n,o]=t.split("?"),[r]=e.split("?"),s=ht(n),u=ht(r);if(""===s[0])return gt(r,o);if(!$t(s[0],"."))return gt(("/"===r?"":"/")+u.concat(s).join("/"),o);const c=u.concat(s),l=[];return c.forEach((t=>{".."===t?l.pop():"."!==t&&l.push(t)})),gt("/"+l.join("/"),o)}(p,c.uri)),8193&t.$$.dirty&&o(11,w=$t(u.pathname,x)),8193&t.$$.dirty&&o(12,_=x===u.pathname),4096&t.$$.dirty&&o(2,r=_?"page":void 0),15361&t.$$.dirty&&o(1,k=y({location:u,href:x,isPartiallyCurrent:w,isCurrent:_}))},[x,k,r,v,b,function(t){if(g("click",t),function(t){return!t.defaultPrevented&&0===t.button&&!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}(t)){t.preventDefault();const e=u.pathname===x||m;pt(x,{state:h,replace:e})}},a,p,m,h,y,w,_,u,c,f,i]}class Mt extends rt{constructor(t){super(),ot(this,t,Nt,Lt,u,{to:7,replace:8,state:9,getProps:10})}}const Bt=[{symbol:"あ",value:"a"},{symbol:"い",value:"i"},{symbol:"う",value:"u"},{symbol:"え",value:"e"},{symbol:"お",value:"o"},{symbol:"か",value:"ka"},{symbol:"き",value:"ki"},{symbol:"く",value:"ku"},{symbol:"け",value:"ke"},{symbol:"こ",value:"ko"},{symbol:"さ",value:"sa"},{symbol:"し",value:"shi"},{symbol:"す",value:"su"},{symbol:"せ",value:"se"},{symbol:"そ",value:"so"},{symbol:"た",value:"ta"},{symbol:"ち",value:"chi"},{symbol:"つ",value:"tsu"},{symbol:"て",value:"te"},{symbol:"と",value:"to"},{symbol:"な",value:"na"},{symbol:"に",value:"ni"},{symbol:"ぬ",value:"nu"},{symbol:"ね",value:"ne"},{symbol:"の",value:"no"},{symbol:"は",value:"ha"},{symbol:"ひ",value:"hi"},{symbol:"ふ",value:"fu"},{symbol:"へ",value:"he"},{symbol:"ほ",value:"ho"},{symbol:"ま",value:"ma"},{symbol:"み",value:"mi"},{symbol:"む",value:"mu"},{symbol:"め",value:"me"},{symbol:"も",value:"mo"},{symbol:"や",value:"ya"},{symbol:"ゆ",value:"yu"},{symbol:"よ",value:"yo"},{symbol:"ら",value:"ra"},{symbol:"り",value:"ri"},{symbol:"る",value:"ru"},{symbol:"れ",value:"re"},{symbol:"ろ",value:"ro"},{symbol:"わ",value:"wa"},{symbol:"を",value:"wo"},{symbol:"ん",value:"n"}];function Kt(e){let n,o,s,u,c,l,a,i,f,p,m,$,d,w,E,j,A=e[1].symbol+"";return{c(){n=b("div"),o=b("div"),s=g(A),c=x(),l=b("div"),a=b("label"),a.textContent="Answer",i=x(),f=b("input"),p=x(),m=b("div"),$=b("div"),$.textContent="Help me",d=x(),w=b("div"),w.textContent="Verify",k(o,"class","symbol svelte-14hmh3f"),k(o,"name",u=e[1].value),k(a,"for","answer"),k(a,"class","svelte-14hmh3f"),k(f,"name","answer"),k(f,"type","text"),k(f,"placeholder","Answer"),k(f,"autocomplete","off"),k(f,"class","svelte-14hmh3f"),P(f,"invalid-input",e[0]),k(l,"class","answer-line svelte-14hmh3f"),k($,"class","svelte-14hmh3f"),k(w,"class","verify-button svelte-14hmh3f"),k(m,"class","button-line svelte-14hmh3f"),k(n,"class","kana-container svelte-14hmh3f")},m(t,r){y(t,n,r),h(n,o),h(o,s),h(n,c),h(n,l),h(l,a),h(l,i),h(l,f),C(f,e[2]),h(n,p),h(n,m),h(m,$),h(m,d),h(m,w),E||(j=[_(f,"input",e[6]),_(f,"keypress",e[5]),_($,"click",e[3]),_(w,"click",e[4])],E=!0)},p(t,[e]){2&e&&A!==(A=t[1].symbol+"")&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(s,A),2&e&&u!==(u=t[1].value)&&k(o,"name",u),4&e&&f.value!==t[2]&&C(f,t[2]),1&e&&P(f,"invalid-input",t[0])},i:t,o:t,d(t){t&&v(n),E=!1,r(j)}}}function zt(t,e,n){let o=!1;function r(){return Bt[Math.floor(Math.random()*Bt.length)]}let s,u=r();function c(){if(s===u.value){let t=!0;for(;t;){let e=r();e!=u&&(n(1,u=e),t=!1)}n(0,o=!1),n(2,s="")}else n(0,o=!0)}return[o,u,s,function(){n(2,s=u.value)},c,function(t){13===t.charCode&&c()},function(){s=this.value,n(2,s)}]}class Dt extends rt{constructor(t){super(),ot(this,t,zt,Kt,u,{})}}function Ht(t){let e;return{c(){e=g("Hiragana")},m(t,n){y(t,e,n)},d(t){t&&v(e)}}}function Tt(t){let e,n;return e=new Dt({}),{c(){Z(e.$$.fragment)},m(t,o){tt(e,t,o),n=!0},i(t){n||(Q(e.$$.fragment,t),n=!0)},o(t){W(e.$$.fragment,t),n=!1},d(t){et(e,t)}}}function Ut(t){let e,n,o,r,s,u;return n=new Mt({props:{to:"hiragana",$$slots:{default:[Ht]},$$scope:{ctx:t}}}),s=new Rt({props:{path:"hiragana",$$slots:{default:[Tt]},$$scope:{ctx:t}}}),{c(){e=b("nav"),Z(n.$$.fragment),o=x(),r=b("div"),Z(s.$$.fragment)},m(t,c){y(t,e,c),tt(n,e,null),y(t,o,c),y(t,r,c),tt(s,r,null),u=!0},p(t,e){const o={};2&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o);const r={};2&e&&(r.$$scope={dirty:e,ctx:t}),s.$set(r)},i(t){u||(Q(n.$$.fragment,t),Q(s.$$.fragment,t),u=!0)},o(t){W(n.$$.fragment,t),W(s.$$.fragment,t),u=!1},d(t){t&&v(e),et(n),t&&v(o),t&&v(r),et(s)}}}function It(t){let e,n;return e=new kt({props:{url:t[0],$$slots:{default:[Ut]},$$scope:{ctx:t}}}),{c(){Z(e.$$.fragment)},m(t,o){tt(e,t,o),n=!0},p(t,[n]){const o={};1&n&&(o.url=t[0]),2&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(Q(e.$$.fragment,t),n=!0)},o(t){W(e.$$.fragment,t),n=!1},d(t){et(e,t)}}}function qt(t,e,n){let{url:o=""}=e;return t.$$set=t=>{"url"in t&&n(0,o=t.url)},[o]}class Ft extends rt{constructor(t){super(),ot(this,t,qt,It,u,{url:0})}}function Vt(e){let n,o,r;return o=new Ft({}),{c(){n=b("main"),Z(o.$$.fragment),k(n,"class","svelte-1tky8bj")},m(t,e){y(t,n,e),tt(o,n,null),r=!0},p:t,i(t){r||(Q(o.$$.fragment,t),r=!0)},o(t){W(o.$$.fragment,t),r=!1},d(t){t&&v(n),et(o)}}}return new class extends rt{constructor(t){super(),ot(this,t,null,Vt,u,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
