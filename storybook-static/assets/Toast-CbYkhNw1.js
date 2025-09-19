import{j as h,c as W,a as X}from"./cn-BIubIUvQ.js";import{r as c}from"./index-l2PZgWEW.js";import{X as G}from"./x-DqKXAehi.js";import{c as _}from"./createLucideIcon-C3m4BMJg.js";import{A as J}from"./alert-circle-uMwXuvtt.js";/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee=_("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const te=_("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae=_("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);let re={data:""},se=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||re,ie=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,oe=/\/\*[^]*?\*\/|  +/g,F=/\n+/g,w=(e,t)=>{let a="",s="",o="";for(let i in e){let r=e[i];i[0]=="@"?i[1]=="i"?a=i+" "+r+";":s+=i[1]=="f"?w(r,i):i+"{"+w(r,i[1]=="k"?"":t)+"}":typeof r=="object"?s+=w(r,t?t.replace(/([^,])+/g,n=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,n):n?n+" "+l:l)):i):r!=null&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=w.p?w.p(i,r):i+":"+r+";")}return a+(t&&o?t+"{"+o+"}":o)+s},x={},H=e=>{if(typeof e=="object"){let t="";for(let a in e)t+=a+H(e[a]);return t}return e},ne=(e,t,a,s,o)=>{let i=H(e),r=x[i]||(x[i]=(l=>{let u=0,p=11;for(;u<l.length;)p=101*p+l.charCodeAt(u++)>>>0;return"go"+p})(i));if(!x[r]){let l=i!==e?e:(u=>{let p,d,m=[{}];for(;p=ie.exec(u.replace(oe,""));)p[4]?m.shift():p[3]?(d=p[3].replace(F," ").trim(),m.unshift(m[0][d]=m[0][d]||{})):m[0][p[1]]=p[2].replace(F," ").trim();return m[0]})(e);x[r]=w(o?{["@keyframes "+r]:l}:l,a?"":"."+r)}let n=a&&x.g?x.g:null;return a&&(x.g=x[r]),((l,u,p,d)=>{d?u.data=u.data.replace(d,l):u.data.indexOf(l)===-1&&(u.data=p?l+u.data:u.data+l)})(x[r],t,s,n),r},le=(e,t,a)=>e.reduce((s,o,i)=>{let r=t[i];if(r&&r.call){let n=r(a),l=n&&n.props&&n.props.className||/^go/.test(n)&&n;r=l?"."+l:n&&typeof n=="object"?n.props?"":w(n,""):n===!1?"":n}return s+o+(r??"")},"");function I(e){let t=this||{},a=e.call?e(t.p):e;return ne(a.unshift?a.raw?le(a,[].slice.call(arguments,1),t.p):a.reduce((s,o)=>Object.assign(s,o&&o.call?o(t.p):o),{}):a,se(t.target),t.g,t.o,t.k)}let V,z,M;I.bind({g:1});let v=I.bind({k:1});function ce(e,t,a,s){w.p=t,V=e,z=a,M=s}function k(e,t){let a=this||{};return function(){let s=arguments;function o(i,r){let n=Object.assign({},i),l=n.className||o.className;a.p=Object.assign({theme:z&&z()},n),a.o=/ *go\d+/.test(l),n.className=I.apply(a,s)+(l?" "+l:"");let u=e;return e[0]&&(u=n.as||e,delete n.as),M&&u[0]&&M(n),V(u,n)}return t?t(o):o}}var de=e=>typeof e=="function",A=(e,t)=>de(e)?e(t):e,ue=(()=>{let e=0;return()=>(++e).toString()})(),Z=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),pe=20,P="default",q=(e,t)=>{let{toastLimit:a}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,a)};case 1:return{...e,toasts:e.toasts.map(r=>r.id===t.toast.id?{...r,...t.toast}:r)};case 2:let{toast:s}=t;return q(e,{type:e.toasts.find(r=>r.id===s.id)?1:0,toast:s});case 3:let{toastId:o}=t;return{...e,toasts:e.toasts.map(r=>r.id===o||o===void 0?{...r,dismissed:!0,visible:!1}:r)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(r=>r.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(r=>({...r,pauseDuration:r.pauseDuration+i}))}}},N=[],B={toasts:[],pausedAt:void 0,settings:{toastLimit:pe}},b={},U=(e,t=P)=>{b[t]=q(b[t]||B,e),N.forEach(([a,s])=>{a===t&&s(b[t])})},Y=e=>Object.keys(b).forEach(t=>U(e,t)),me=e=>Object.keys(b).find(t=>b[t].toasts.some(a=>a.id===e)),O=(e=P)=>t=>{U(t,e)},fe={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},ge=(e={},t=P)=>{let[a,s]=c.useState(b[t]||B),o=c.useRef(b[t]);c.useEffect(()=>(o.current!==b[t]&&s(b[t]),N.push([t,s]),()=>{let r=N.findIndex(([n])=>n===t);r>-1&&N.splice(r,1)}),[t]);let i=a.toasts.map(r=>{var n,l,u;return{...e,...e[r.type],...r,removeDelay:r.removeDelay||((n=e[r.type])==null?void 0:n.removeDelay)||(e==null?void 0:e.removeDelay),duration:r.duration||((l=e[r.type])==null?void 0:l.duration)||(e==null?void 0:e.duration)||fe[r.type],style:{...e.style,...(u=e[r.type])==null?void 0:u.style,...r.style}}});return{...a,toasts:i}},ye=(e,t="blank",a)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(a==null?void 0:a.id)||ue()}),E=e=>(t,a)=>{let s=ye(t,e,a);return O(s.toasterId||me(s.id))({type:2,toast:s}),s.id},f=(e,t)=>E("blank")(e,t);f.error=E("error");f.success=E("success");f.loading=E("loading");f.custom=E("custom");f.dismiss=(e,t)=>{let a={type:3,toastId:e};t?O(t)(a):Y(a)};f.dismissAll=e=>f.dismiss(void 0,e);f.remove=(e,t)=>{let a={type:4,toastId:e};t?O(t)(a):Y(a)};f.removeAll=e=>f.remove(void 0,e);f.promise=(e,t,a)=>{let s=f.loading(t.loading,{...a,...a==null?void 0:a.loading});return typeof e=="function"&&(e=e()),e.then(o=>{let i=t.success?A(t.success,o):void 0;return i?f.success(i,{id:s,...a,...a==null?void 0:a.success}):f.dismiss(s),o}).catch(o=>{let i=t.error?A(t.error,o):void 0;i?f.error(i,{id:s,...a,...a==null?void 0:a.error}):f.dismiss(s)}),e};var he=1e3,be=(e,t="default")=>{let{toasts:a,pausedAt:s}=ge(e,t),o=c.useRef(new Map).current,i=c.useCallback((d,m=he)=>{if(o.has(d))return;let g=setTimeout(()=>{o.delete(d),r({type:4,toastId:d})},m);o.set(d,g)},[]);c.useEffect(()=>{if(s)return;let d=Date.now(),m=a.map(g=>{if(g.duration===1/0)return;let C=(g.duration||0)+g.pauseDuration-(d-g.createdAt);if(C<0){g.visible&&f.dismiss(g.id);return}return setTimeout(()=>f.dismiss(g.id,t),C)});return()=>{m.forEach(g=>g&&clearTimeout(g))}},[a,s,t]);let r=c.useCallback(O(t),[t]),n=c.useCallback(()=>{r({type:5,time:Date.now()})},[r]),l=c.useCallback((d,m)=>{r({type:1,toast:{id:d,height:m}})},[r]),u=c.useCallback(()=>{s&&r({type:6,time:Date.now()})},[s,r]),p=c.useCallback((d,m)=>{let{reverseOrder:g=!1,gutter:C=8,defaultPosition:L}=m||{},T=a.filter(y=>(y.position||L)===(d.position||L)&&y.height),Q=T.findIndex(y=>y.id===d.id),S=T.filter((y,D)=>D<Q&&y.visible).length;return T.filter(y=>y.visible).slice(...g?[S+1]:[0,S]).reduce((y,D)=>y+(D.height||0)+C,0)},[a]);return c.useEffect(()=>{a.forEach(d=>{if(d.dismissed)i(d.id,d.removeDelay);else{let m=o.get(d.id);m&&(clearTimeout(m),o.delete(d.id))}})},[a,i]),{toasts:a,handlers:{updateHeight:l,startPause:n,endPause:u,calculateOffset:p}}},xe=v`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,ve=v`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,we=v`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,ke=k("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${xe} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${ve} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${we} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,je=v`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Ee=k("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${je} 1s linear infinite;
`,Ce=v`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,$e=v`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,Ne=k("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Ce} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${$e} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Ae=k("div")`
  position: absolute;
`,Ie=k("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Oe=v`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Te=k("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Oe} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,De=({toast:e})=>{let{icon:t,type:a,iconTheme:s}=e;return t!==void 0?typeof t=="string"?c.createElement(Te,null,t):t:a==="blank"?null:c.createElement(Ie,null,c.createElement(Ee,{...s}),a!=="loading"&&c.createElement(Ae,null,a==="error"?c.createElement(ke,{...s}):c.createElement(Ne,{...s})))},ze=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Me=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,_e="0%{opacity:0;} 100%{opacity:1;}",Pe="0%{opacity:1;} 100%{opacity:0;}",Le=k("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Se=k("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Fe=(e,t)=>{let a=e.includes("top")?1:-1,[s,o]=Z()?[_e,Pe]:[ze(a),Me(a)];return{animation:t?`${v(s)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${v(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},K=c.memo(({toast:e,position:t,style:a,children:s})=>{let o=e.height?Fe(e.position||t||"top-center",e.visible):{opacity:0},i=c.createElement(De,{toast:e}),r=c.createElement(Se,{...e.ariaProps},A(e.message,e));return c.createElement(Le,{className:e.className,style:{...o,...a,...e.style}},typeof s=="function"?s({icon:i,message:r}):c.createElement(c.Fragment,null,i,r))});ce(c.createElement);var Re=({id:e,className:t,style:a,onHeightUpdate:s,children:o})=>{let i=c.useCallback(r=>{if(r){let n=()=>{let l=r.getBoundingClientRect().height;s(e,l)};n(),new MutationObserver(n).observe(r,{subtree:!0,childList:!0,characterData:!0})}},[e,s]);return c.createElement("div",{ref:i,className:t,style:a},o)},He=(e,t)=>{let a=e.includes("top"),s=a?{top:0}:{bottom:0},o=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:Z()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(a?1:-1)}px)`,...s,...o}},Ve=I`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,$=16,Ze=({reverseOrder:e,position:t="top-center",toastOptions:a,gutter:s,children:o,toasterId:i,containerStyle:r,containerClassName:n})=>{let{toasts:l,handlers:u}=be(a,i);return c.createElement("div",{"data-rht-toaster":i||"",style:{position:"fixed",zIndex:9999,top:$,left:$,right:$,bottom:$,pointerEvents:"none",...r},className:n,onMouseEnter:u.startPause,onMouseLeave:u.endPause},l.map(p=>{let d=p.position||t,m=u.calculateOffset(p,{reverseOrder:e,gutter:s,defaultPosition:t}),g=He(d,m);return c.createElement(Re,{id:p.id,key:p.id,onHeightUpdate:u.updateHeight,className:p.visible?Ve:"",style:g},p.type==="custom"?A(p.message,p):o?o(p):c.createElement(K,{toast:p,position:d}))}))},j=f;const qe=X("flex items-center gap-2 p-4 rounded-lg shadow-lg border max-w-md",{variants:{variant:{default:"bg-white border-gray-200 text-gray-900",success:"bg-success-50 border-success-200 text-success-800",error:"bg-danger-50 border-danger-200 text-danger-800",warning:"bg-warning-50 border-warning-200 text-warning-800",info:"bg-primary-50 border-primary-200 text-primary-800"}},defaultVariants:{variant:"default"}}),Be=e=>{switch(e){case"success":return h.jsx(te,{className:"h-5 w-5 text-success-600"});case"error":return h.jsx(J,{className:"h-5 w-5 text-danger-600"});case"warning":return h.jsx(ee,{className:"h-5 w-5 text-warning-600"});case"info":return h.jsx(ae,{className:"h-5 w-5 text-primary-600"});default:return null}},Xe={success:(e,t)=>j.success(e,{duration:(t==null?void 0:t.duration)||4e3}),error:(e,t)=>j.error(e,{duration:(t==null?void 0:t.duration)||5e3}),warning:(e,t)=>j(e,{icon:"⚠️",duration:(t==null?void 0:t.duration)||4e3}),info:(e,t)=>j(e,{icon:"ℹ️",duration:(t==null?void 0:t.duration)||4e3}),default:(e,t)=>j(e,{duration:(t==null?void 0:t.duration)||4e3})},R=()=>h.jsx(Ze,{position:"top-right",toastOptions:{duration:4e3,className:"",style:{background:"transparent",boxShadow:"none",padding:0}},children:e=>h.jsx(K,{toast:e,children:({icon:t,message:a})=>h.jsxs("div",{className:W(qe({variant:e.type==="success"?"success":e.type==="error"?"error":"default"})),children:[Be(e.type==="success"?"success":e.type==="error"?"error":"default")||t,h.jsx("div",{className:"flex-1 text-sm font-medium",children:a}),h.jsx("button",{onClick:()=>j.dismiss(e.id),className:"inline-flex h-5 w-5 items-center justify-center rounded-full hover:bg-black/10",children:h.jsx(G,{className:"h-3 w-3"})})]})})});try{R.displayName="Toast",R.__docgenInfo={description:"",displayName:"Toast",props:{}}}catch{}export{te as C,R as T,Xe as s};
