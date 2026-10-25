(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function jc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var es={exports:{}},so={},ts={exports:{}},A={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zn=Symbol.for("react.element"),Sc=Symbol.for("react.portal"),Nc=Symbol.for("react.fragment"),Cc=Symbol.for("react.strict_mode"),Ec=Symbol.for("react.profiler"),zc=Symbol.for("react.provider"),Pc=Symbol.for("react.context"),Mc=Symbol.for("react.forward_ref"),_c=Symbol.for("react.suspense"),Tc=Symbol.for("react.memo"),Lc=Symbol.for("react.lazy"),Hi=Symbol.iterator;function Ac(e){return e===null||typeof e!="object"?null:(e=Hi&&e[Hi]||e["@@iterator"],typeof e=="function"?e:null)}var ns={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},rs=Object.assign,os={};function sn(e,t,n){this.props=e,this.context=t,this.refs=os,this.updater=n||ns}sn.prototype.isReactComponent={};sn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};sn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ls(){}ls.prototype=sn.prototype;function Yl(e,t,n){this.props=e,this.context=t,this.refs=os,this.updater=n||ns}var Kl=Yl.prototype=new ls;Kl.constructor=Yl;rs(Kl,sn.prototype);Kl.isPureReactComponent=!0;var qi=Array.isArray,is=Object.prototype.hasOwnProperty,Gl={current:null},as={key:!0,ref:!0,__self:!0,__source:!0};function ss(e,t,n){var r,o={},l=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(l=""+t.key),t)is.call(t,r)&&!as.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var u=Array(s),d=0;d<s;d++)u[d]=arguments[d+2];o.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:Zn,type:e,key:l,ref:a,props:o,_owner:Gl.current}}function Rc(e,t){return{$$typeof:Zn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Xl(e){return typeof e=="object"&&e!==null&&e.$$typeof===Zn}function Dc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Wi=/\/+/g;function zo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Dc(""+e.key):t.toString(36)}function Nr(e,t,n,r,o){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(l){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Zn:case Sc:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+zo(a,0):r,qi(o)?(n="",e!=null&&(n=e.replace(Wi,"$&/")+"/"),Nr(o,t,n,"",function(d){return d})):o!=null&&(Xl(o)&&(o=Rc(o,n+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(Wi,"$&/")+"/")+e)),t.push(o)),1;if(a=0,r=r===""?".":r+":",qi(e))for(var s=0;s<e.length;s++){l=e[s];var u=r+zo(l,s);a+=Nr(l,t,n,u,o)}else if(u=Ac(e),typeof u=="function")for(e=u.call(e),s=0;!(l=e.next()).done;)l=l.value,u=r+zo(l,s++),a+=Nr(l,t,n,u,o);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function ir(e,t,n){if(e==null)return e;var r=[],o=0;return Nr(e,r,"","",function(l){return t.call(n,l,o++)}),r}function Ic(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ce={current:null},Cr={transition:null},Oc={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:Cr,ReactCurrentOwner:Gl};function us(){throw Error("act(...) is not supported in production builds of React.")}A.Children={map:ir,forEach:function(e,t,n){ir(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ir(e,function(){t++}),t},toArray:function(e){return ir(e,function(t){return t})||[]},only:function(e){if(!Xl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};A.Component=sn;A.Fragment=Nc;A.Profiler=Ec;A.PureComponent=Yl;A.StrictMode=Cc;A.Suspense=_c;A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Oc;A.act=us;A.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=rs({},e.props),o=e.key,l=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,a=Gl.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)is.call(t,u)&&!as.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var d=0;d<u;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:Zn,type:e.type,key:o,ref:l,props:r,_owner:a}};A.createContext=function(e){return e={$$typeof:Pc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:zc,_context:e},e.Consumer=e};A.createElement=ss;A.createFactory=function(e){var t=ss.bind(null,e);return t.type=e,t};A.createRef=function(){return{current:null}};A.forwardRef=function(e){return{$$typeof:Mc,render:e}};A.isValidElement=Xl;A.lazy=function(e){return{$$typeof:Lc,_payload:{_status:-1,_result:e},_init:Ic}};A.memo=function(e,t){return{$$typeof:Tc,type:e,compare:t===void 0?null:t}};A.startTransition=function(e){var t=Cr.transition;Cr.transition={};try{e()}finally{Cr.transition=t}};A.unstable_act=us;A.useCallback=function(e,t){return ce.current.useCallback(e,t)};A.useContext=function(e){return ce.current.useContext(e)};A.useDebugValue=function(){};A.useDeferredValue=function(e){return ce.current.useDeferredValue(e)};A.useEffect=function(e,t){return ce.current.useEffect(e,t)};A.useId=function(){return ce.current.useId()};A.useImperativeHandle=function(e,t,n){return ce.current.useImperativeHandle(e,t,n)};A.useInsertionEffect=function(e,t){return ce.current.useInsertionEffect(e,t)};A.useLayoutEffect=function(e,t){return ce.current.useLayoutEffect(e,t)};A.useMemo=function(e,t){return ce.current.useMemo(e,t)};A.useReducer=function(e,t,n){return ce.current.useReducer(e,t,n)};A.useRef=function(e){return ce.current.useRef(e)};A.useState=function(e){return ce.current.useState(e)};A.useSyncExternalStore=function(e,t,n){return ce.current.useSyncExternalStore(e,t,n)};A.useTransition=function(){return ce.current.useTransition()};A.version="18.3.1";ts.exports=A;var L=ts.exports;const Fc=jc(L);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $c=L,Uc=Symbol.for("react.element"),Bc=Symbol.for("react.fragment"),Vc=Object.prototype.hasOwnProperty,Hc=$c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,qc={key:!0,ref:!0,__self:!0,__source:!0};function cs(e,t,n){var r,o={},l=null,a=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Vc.call(t,r)&&!qc.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Uc,type:e,key:l,ref:a,props:o,_owner:Hc.current}}so.Fragment=Bc;so.jsx=cs;so.jsxs=cs;es.exports=so;var i=es.exports,tl={},ds={exports:{}},ke={},fs={exports:{}},ps={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(S,M){var T=S.length;S.push(M);e:for(;0<T;){var Q=T-1>>>1,Z=S[Q];if(0<o(Z,M))S[Q]=M,S[T]=Z,T=Q;else break e}}function n(S){return S.length===0?null:S[0]}function r(S){if(S.length===0)return null;var M=S[0],T=S.pop();if(T!==M){S[0]=T;e:for(var Q=0,Z=S.length,or=Z>>>1;Q<or;){var yt=2*(Q+1)-1,Eo=S[yt],xt=yt+1,lr=S[xt];if(0>o(Eo,T))xt<Z&&0>o(lr,Eo)?(S[Q]=lr,S[xt]=T,Q=xt):(S[Q]=Eo,S[yt]=T,Q=yt);else if(xt<Z&&0>o(lr,T))S[Q]=lr,S[xt]=T,Q=xt;else break e}}return M}function o(S,M){var T=S.sortIndex-M.sortIndex;return T!==0?T:S.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var u=[],d=[],v=1,m=null,h=3,y=!1,g=!1,x=!1,P=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(S){for(var M=n(d);M!==null;){if(M.callback===null)r(d);else if(M.startTime<=S)r(d),M.sortIndex=M.expirationTime,t(u,M);else break;M=n(d)}}function w(S){if(x=!1,p(S),!g)if(n(u)!==null)g=!0,No(j);else{var M=n(d);M!==null&&Co(w,M.startTime-S)}}function j(S,M){g=!1,x&&(x=!1,f(E),E=-1),y=!0;var T=h;try{for(p(M),m=n(u);m!==null&&(!(m.expirationTime>M)||S&&!Pe());){var Q=m.callback;if(typeof Q=="function"){m.callback=null,h=m.priorityLevel;var Z=Q(m.expirationTime<=M);M=e.unstable_now(),typeof Z=="function"?m.callback=Z:m===n(u)&&r(u),p(M)}else r(u);m=n(u)}if(m!==null)var or=!0;else{var yt=n(d);yt!==null&&Co(w,yt.startTime-M),or=!1}return or}finally{m=null,h=T,y=!1}}var N=!1,C=null,E=-1,W=5,R=-1;function Pe(){return!(e.unstable_now()-R<W)}function dn(){if(C!==null){var S=e.unstable_now();R=S;var M=!0;try{M=C(!0,S)}finally{M?fn():(N=!1,C=null)}}else N=!1}var fn;if(typeof c=="function")fn=function(){c(dn)};else if(typeof MessageChannel<"u"){var Vi=new MessageChannel,bc=Vi.port2;Vi.port1.onmessage=dn,fn=function(){bc.postMessage(null)}}else fn=function(){P(dn,0)};function No(S){C=S,N||(N=!0,fn())}function Co(S,M){E=P(function(){S(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(S){S.callback=null},e.unstable_continueExecution=function(){g||y||(g=!0,No(j))},e.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<S?Math.floor(1e3/S):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(S){switch(h){case 1:case 2:case 3:var M=3;break;default:M=h}var T=h;h=M;try{return S()}finally{h=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(S,M){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var T=h;h=S;try{return M()}finally{h=T}},e.unstable_scheduleCallback=function(S,M,T){var Q=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?Q+T:Q):T=Q,S){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=T+Z,S={id:v++,callback:M,priorityLevel:S,startTime:T,expirationTime:Z,sortIndex:-1},T>Q?(S.sortIndex=T,t(d,S),n(u)===null&&S===n(d)&&(x?(f(E),E=-1):x=!0,Co(w,T-Q))):(S.sortIndex=Z,t(u,S),g||y||(g=!0,No(j))),S},e.unstable_shouldYield=Pe,e.unstable_wrapCallback=function(S){var M=h;return function(){var T=h;h=M;try{return S.apply(this,arguments)}finally{h=T}}}})(ps);fs.exports=ps;var Wc=fs.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qc=L,we=Wc;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ms=new Set,An={};function Tt(e,t){en(e,t),en(e+"Capture",t)}function en(e,t){for(An[e]=t,e=0;e<t.length;e++)ms.add(t[e])}var Qe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),nl=Object.prototype.hasOwnProperty,Yc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Qi={},Yi={};function Kc(e){return nl.call(Yi,e)?!0:nl.call(Qi,e)?!1:Yc.test(e)?Yi[e]=!0:(Qi[e]=!0,!1)}function Gc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Xc(e,t,n,r){if(t===null||typeof t>"u"||Gc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function de(e,t,n,r,o,l,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=a}var re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){re[e]=new de(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];re[t]=new de(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){re[e]=new de(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){re[e]=new de(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){re[e]=new de(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){re[e]=new de(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){re[e]=new de(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){re[e]=new de(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){re[e]=new de(e,5,!1,e.toLowerCase(),null,!1,!1)});var Zl=/[\-:]([a-z])/g;function Jl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Zl,Jl);re[t]=new de(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Zl,Jl);re[t]=new de(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Zl,Jl);re[t]=new de(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){re[e]=new de(e,1,!1,e.toLowerCase(),null,!1,!1)});re.xlinkHref=new de("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){re[e]=new de(e,1,!1,e.toLowerCase(),null,!0,!0)});function ei(e,t,n,r){var o=re.hasOwnProperty(t)?re[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Xc(t,n,o,r)&&(n=null),r||o===null?Kc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Xe=Qc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ar=Symbol.for("react.element"),Dt=Symbol.for("react.portal"),It=Symbol.for("react.fragment"),ti=Symbol.for("react.strict_mode"),rl=Symbol.for("react.profiler"),hs=Symbol.for("react.provider"),gs=Symbol.for("react.context"),ni=Symbol.for("react.forward_ref"),ol=Symbol.for("react.suspense"),ll=Symbol.for("react.suspense_list"),ri=Symbol.for("react.memo"),Je=Symbol.for("react.lazy"),vs=Symbol.for("react.offscreen"),Ki=Symbol.iterator;function pn(e){return e===null||typeof e!="object"?null:(e=Ki&&e[Ki]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,Po;function kn(e){if(Po===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Po=t&&t[1]||""}return`
`+Po+e}var Mo=!1;function _o(e,t){if(!e||Mo)return"";Mo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var o=d.stack.split(`
`),l=r.stack.split(`
`),a=o.length-1,s=l.length-1;1<=a&&0<=s&&o[a]!==l[s];)s--;for(;1<=a&&0<=s;a--,s--)if(o[a]!==l[s]){if(a!==1||s!==1)do if(a--,s--,0>s||o[a]!==l[s]){var u=`
`+o[a].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=a&&0<=s);break}}}finally{Mo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?kn(e):""}function Zc(e){switch(e.tag){case 5:return kn(e.type);case 16:return kn("Lazy");case 13:return kn("Suspense");case 19:return kn("SuspenseList");case 0:case 2:case 15:return e=_o(e.type,!1),e;case 11:return e=_o(e.type.render,!1),e;case 1:return e=_o(e.type,!0),e;default:return""}}function il(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case It:return"Fragment";case Dt:return"Portal";case rl:return"Profiler";case ti:return"StrictMode";case ol:return"Suspense";case ll:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case gs:return(e.displayName||"Context")+".Consumer";case hs:return(e._context.displayName||"Context")+".Provider";case ni:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ri:return t=e.displayName||null,t!==null?t:il(e.type)||"Memo";case Je:t=e._payload,e=e._init;try{return il(e(t))}catch{}}return null}function Jc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return il(t);case 8:return t===ti?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function pt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ys(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ed(e){var t=ys(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,l.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function sr(e){e._valueTracker||(e._valueTracker=ed(e))}function xs(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ys(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ir(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function al(e,t){var n=t.checked;return H({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Gi(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=pt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ws(e,t){t=t.checked,t!=null&&ei(e,"checked",t,!1)}function sl(e,t){ws(e,t);var n=pt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ul(e,t.type,n):t.hasOwnProperty("defaultValue")&&ul(e,t.type,pt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Xi(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ul(e,t,n){(t!=="number"||Ir(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var bn=Array.isArray;function Yt(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+pt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function cl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return H({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Zi(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(bn(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:pt(n)}}function ks(e,t){var n=pt(t.value),r=pt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ji(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function bs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function dl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?bs(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ur,js=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ur=ur||document.createElement("div"),ur.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ur.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Rn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Nn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},td=["Webkit","ms","Moz","O"];Object.keys(Nn).forEach(function(e){td.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Nn[t]=Nn[e]})});function Ss(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Nn.hasOwnProperty(e)&&Nn[e]?(""+t).trim():t+"px"}function Ns(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Ss(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var nd=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fl(e,t){if(t){if(nd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function pl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ml=null;function oi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var hl=null,Kt=null,Gt=null;function ea(e){if(e=tr(e)){if(typeof hl!="function")throw Error(k(280));var t=e.stateNode;t&&(t=mo(t),hl(e.stateNode,e.type,t))}}function Cs(e){Kt?Gt?Gt.push(e):Gt=[e]:Kt=e}function Es(){if(Kt){var e=Kt,t=Gt;if(Gt=Kt=null,ea(e),t)for(e=0;e<t.length;e++)ea(t[e])}}function zs(e,t){return e(t)}function Ps(){}var To=!1;function Ms(e,t,n){if(To)return e(t,n);To=!0;try{return zs(e,t,n)}finally{To=!1,(Kt!==null||Gt!==null)&&(Ps(),Es())}}function Dn(e,t){var n=e.stateNode;if(n===null)return null;var r=mo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var gl=!1;if(Qe)try{var mn={};Object.defineProperty(mn,"passive",{get:function(){gl=!0}}),window.addEventListener("test",mn,mn),window.removeEventListener("test",mn,mn)}catch{gl=!1}function rd(e,t,n,r,o,l,a,s,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(v){this.onError(v)}}var Cn=!1,Or=null,Fr=!1,vl=null,od={onError:function(e){Cn=!0,Or=e}};function ld(e,t,n,r,o,l,a,s,u){Cn=!1,Or=null,rd.apply(od,arguments)}function id(e,t,n,r,o,l,a,s,u){if(ld.apply(this,arguments),Cn){if(Cn){var d=Or;Cn=!1,Or=null}else throw Error(k(198));Fr||(Fr=!0,vl=d)}}function Lt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function _s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ta(e){if(Lt(e)!==e)throw Error(k(188))}function ad(e){var t=e.alternate;if(!t){if(t=Lt(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return ta(o),e;if(l===r)return ta(o),t;l=l.sibling}throw Error(k(188))}if(n.return!==r.return)n=o,r=l;else{for(var a=!1,s=o.child;s;){if(s===n){a=!0,n=o,r=l;break}if(s===r){a=!0,r=o,n=l;break}s=s.sibling}if(!a){for(s=l.child;s;){if(s===n){a=!0,n=l,r=o;break}if(s===r){a=!0,r=l,n=o;break}s=s.sibling}if(!a)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function Ts(e){return e=ad(e),e!==null?Ls(e):null}function Ls(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ls(e);if(t!==null)return t;e=e.sibling}return null}var As=we.unstable_scheduleCallback,na=we.unstable_cancelCallback,sd=we.unstable_shouldYield,ud=we.unstable_requestPaint,Y=we.unstable_now,cd=we.unstable_getCurrentPriorityLevel,li=we.unstable_ImmediatePriority,Rs=we.unstable_UserBlockingPriority,$r=we.unstable_NormalPriority,dd=we.unstable_LowPriority,Ds=we.unstable_IdlePriority,uo=null,$e=null;function fd(e){if($e&&typeof $e.onCommitFiberRoot=="function")try{$e.onCommitFiberRoot(uo,e,void 0,(e.current.flags&128)===128)}catch{}}var Ae=Math.clz32?Math.clz32:hd,pd=Math.log,md=Math.LN2;function hd(e){return e>>>=0,e===0?32:31-(pd(e)/md|0)|0}var cr=64,dr=4194304;function jn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ur(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,l=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~o;s!==0?r=jn(s):(l&=a,l!==0&&(r=jn(l)))}else a=n&~o,a!==0?r=jn(a):l!==0&&(r=jn(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ae(t),o=1<<n,r|=e[n],t&=~o;return r}function gd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var a=31-Ae(l),s=1<<a,u=o[a];u===-1?(!(s&n)||s&r)&&(o[a]=gd(s,t)):u<=t&&(e.expiredLanes|=s),l&=~s}}function yl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Is(){var e=cr;return cr<<=1,!(cr&4194240)&&(cr=64),e}function Lo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Jn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ae(t),e[t]=n}function yd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Ae(n),l=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~l}}function ii(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ae(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var I=0;function Os(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Fs,ai,$s,Us,Bs,xl=!1,fr=[],lt=null,it=null,at=null,In=new Map,On=new Map,tt=[],xd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ra(e,t){switch(e){case"focusin":case"focusout":lt=null;break;case"dragenter":case"dragleave":it=null;break;case"mouseover":case"mouseout":at=null;break;case"pointerover":case"pointerout":In.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":On.delete(t.pointerId)}}function hn(e,t,n,r,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},t!==null&&(t=tr(t),t!==null&&ai(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function wd(e,t,n,r,o){switch(t){case"focusin":return lt=hn(lt,e,t,n,r,o),!0;case"dragenter":return it=hn(it,e,t,n,r,o),!0;case"mouseover":return at=hn(at,e,t,n,r,o),!0;case"pointerover":var l=o.pointerId;return In.set(l,hn(In.get(l)||null,e,t,n,r,o)),!0;case"gotpointercapture":return l=o.pointerId,On.set(l,hn(On.get(l)||null,e,t,n,r,o)),!0}return!1}function Vs(e){var t=bt(e.target);if(t!==null){var n=Lt(t);if(n!==null){if(t=n.tag,t===13){if(t=_s(n),t!==null){e.blockedOn=t,Bs(e.priority,function(){$s(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Er(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=wl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ml=r,n.target.dispatchEvent(r),ml=null}else return t=tr(n),t!==null&&ai(t),e.blockedOn=n,!1;t.shift()}return!0}function oa(e,t,n){Er(e)&&n.delete(t)}function kd(){xl=!1,lt!==null&&Er(lt)&&(lt=null),it!==null&&Er(it)&&(it=null),at!==null&&Er(at)&&(at=null),In.forEach(oa),On.forEach(oa)}function gn(e,t){e.blockedOn===t&&(e.blockedOn=null,xl||(xl=!0,we.unstable_scheduleCallback(we.unstable_NormalPriority,kd)))}function Fn(e){function t(o){return gn(o,e)}if(0<fr.length){gn(fr[0],e);for(var n=1;n<fr.length;n++){var r=fr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(lt!==null&&gn(lt,e),it!==null&&gn(it,e),at!==null&&gn(at,e),In.forEach(t),On.forEach(t),n=0;n<tt.length;n++)r=tt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<tt.length&&(n=tt[0],n.blockedOn===null);)Vs(n),n.blockedOn===null&&tt.shift()}var Xt=Xe.ReactCurrentBatchConfig,Br=!0;function bd(e,t,n,r){var o=I,l=Xt.transition;Xt.transition=null;try{I=1,si(e,t,n,r)}finally{I=o,Xt.transition=l}}function jd(e,t,n,r){var o=I,l=Xt.transition;Xt.transition=null;try{I=4,si(e,t,n,r)}finally{I=o,Xt.transition=l}}function si(e,t,n,r){if(Br){var o=wl(e,t,n,r);if(o===null)Vo(e,t,r,Vr,n),ra(e,r);else if(wd(o,e,t,n,r))r.stopPropagation();else if(ra(e,r),t&4&&-1<xd.indexOf(e)){for(;o!==null;){var l=tr(o);if(l!==null&&Fs(l),l=wl(e,t,n,r),l===null&&Vo(e,t,r,Vr,n),l===o)break;o=l}o!==null&&r.stopPropagation()}else Vo(e,t,r,null,n)}}var Vr=null;function wl(e,t,n,r){if(Vr=null,e=oi(r),e=bt(e),e!==null)if(t=Lt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=_s(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Vr=e,null}function Hs(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(cd()){case li:return 1;case Rs:return 4;case $r:case dd:return 16;case Ds:return 536870912;default:return 16}default:return 16}}var rt=null,ui=null,zr=null;function qs(){if(zr)return zr;var e,t=ui,n=t.length,r,o="value"in rt?rt.value:rt.textContent,l=o.length;for(e=0;e<n&&t[e]===o[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===o[l-r];r++);return zr=o.slice(e,1<r?1-r:void 0)}function Pr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function pr(){return!0}function la(){return!1}function be(e){function t(n,r,o,l,a){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(l):l[s]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?pr:la,this.isPropagationStopped=la,this}return H(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=pr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=pr)},persist:function(){},isPersistent:pr}),t}var un={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ci=be(un),er=H({},un,{view:0,detail:0}),Sd=be(er),Ao,Ro,vn,co=H({},er,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:di,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==vn&&(vn&&e.type==="mousemove"?(Ao=e.screenX-vn.screenX,Ro=e.screenY-vn.screenY):Ro=Ao=0,vn=e),Ao)},movementY:function(e){return"movementY"in e?e.movementY:Ro}}),ia=be(co),Nd=H({},co,{dataTransfer:0}),Cd=be(Nd),Ed=H({},er,{relatedTarget:0}),Do=be(Ed),zd=H({},un,{animationName:0,elapsedTime:0,pseudoElement:0}),Pd=be(zd),Md=H({},un,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),_d=be(Md),Td=H({},un,{data:0}),aa=be(Td),Ld={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ad={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Rd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Dd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Rd[e])?!!t[e]:!1}function di(){return Dd}var Id=H({},er,{key:function(e){if(e.key){var t=Ld[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Pr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ad[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:di,charCode:function(e){return e.type==="keypress"?Pr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Pr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Od=be(Id),Fd=H({},co,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sa=be(Fd),$d=H({},er,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:di}),Ud=be($d),Bd=H({},un,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vd=be(Bd),Hd=H({},co,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),qd=be(Hd),Wd=[9,13,27,32],fi=Qe&&"CompositionEvent"in window,En=null;Qe&&"documentMode"in document&&(En=document.documentMode);var Qd=Qe&&"TextEvent"in window&&!En,Ws=Qe&&(!fi||En&&8<En&&11>=En),ua=" ",ca=!1;function Qs(e,t){switch(e){case"keyup":return Wd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ys(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ot=!1;function Yd(e,t){switch(e){case"compositionend":return Ys(t);case"keypress":return t.which!==32?null:(ca=!0,ua);case"textInput":return e=t.data,e===ua&&ca?null:e;default:return null}}function Kd(e,t){if(Ot)return e==="compositionend"||!fi&&Qs(e,t)?(e=qs(),zr=ui=rt=null,Ot=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ws&&t.locale!=="ko"?null:t.data;default:return null}}var Gd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function da(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Gd[e.type]:t==="textarea"}function Ks(e,t,n,r){Cs(r),t=Hr(t,"onChange"),0<t.length&&(n=new ci("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var zn=null,$n=null;function Xd(e){iu(e,0)}function fo(e){var t=Ut(e);if(xs(t))return e}function Zd(e,t){if(e==="change")return t}var Gs=!1;if(Qe){var Io;if(Qe){var Oo="oninput"in document;if(!Oo){var fa=document.createElement("div");fa.setAttribute("oninput","return;"),Oo=typeof fa.oninput=="function"}Io=Oo}else Io=!1;Gs=Io&&(!document.documentMode||9<document.documentMode)}function pa(){zn&&(zn.detachEvent("onpropertychange",Xs),$n=zn=null)}function Xs(e){if(e.propertyName==="value"&&fo($n)){var t=[];Ks(t,$n,e,oi(e)),Ms(Xd,t)}}function Jd(e,t,n){e==="focusin"?(pa(),zn=t,$n=n,zn.attachEvent("onpropertychange",Xs)):e==="focusout"&&pa()}function ef(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return fo($n)}function tf(e,t){if(e==="click")return fo(t)}function nf(e,t){if(e==="input"||e==="change")return fo(t)}function rf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var De=typeof Object.is=="function"?Object.is:rf;function Un(e,t){if(De(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!nl.call(t,o)||!De(e[o],t[o]))return!1}return!0}function ma(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ha(e,t){var n=ma(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ma(n)}}function Zs(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Zs(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Js(){for(var e=window,t=Ir();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ir(e.document)}return t}function pi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function of(e){var t=Js(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Zs(n.ownerDocument.documentElement,n)){if(r!==null&&pi(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!e.extend&&l>r&&(o=r,r=l,l=o),o=ha(n,l);var a=ha(n,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var lf=Qe&&"documentMode"in document&&11>=document.documentMode,Ft=null,kl=null,Pn=null,bl=!1;function ga(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;bl||Ft==null||Ft!==Ir(r)||(r=Ft,"selectionStart"in r&&pi(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Pn&&Un(Pn,r)||(Pn=r,r=Hr(kl,"onSelect"),0<r.length&&(t=new ci("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ft)))}function mr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var $t={animationend:mr("Animation","AnimationEnd"),animationiteration:mr("Animation","AnimationIteration"),animationstart:mr("Animation","AnimationStart"),transitionend:mr("Transition","TransitionEnd")},Fo={},eu={};Qe&&(eu=document.createElement("div").style,"AnimationEvent"in window||(delete $t.animationend.animation,delete $t.animationiteration.animation,delete $t.animationstart.animation),"TransitionEvent"in window||delete $t.transitionend.transition);function po(e){if(Fo[e])return Fo[e];if(!$t[e])return e;var t=$t[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in eu)return Fo[e]=t[n];return e}var tu=po("animationend"),nu=po("animationiteration"),ru=po("animationstart"),ou=po("transitionend"),lu=new Map,va="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ht(e,t){lu.set(e,t),Tt(t,[e])}for(var $o=0;$o<va.length;$o++){var Uo=va[$o],af=Uo.toLowerCase(),sf=Uo[0].toUpperCase()+Uo.slice(1);ht(af,"on"+sf)}ht(tu,"onAnimationEnd");ht(nu,"onAnimationIteration");ht(ru,"onAnimationStart");ht("dblclick","onDoubleClick");ht("focusin","onFocus");ht("focusout","onBlur");ht(ou,"onTransitionEnd");en("onMouseEnter",["mouseout","mouseover"]);en("onMouseLeave",["mouseout","mouseover"]);en("onPointerEnter",["pointerout","pointerover"]);en("onPointerLeave",["pointerout","pointerover"]);Tt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Tt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Tt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Tt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Tt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Tt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),uf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Sn));function ya(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,id(r,t,void 0,e),e.currentTarget=null}function iu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],u=s.instance,d=s.currentTarget;if(s=s.listener,u!==l&&o.isPropagationStopped())break e;ya(o,s,d),l=u}else for(a=0;a<r.length;a++){if(s=r[a],u=s.instance,d=s.currentTarget,s=s.listener,u!==l&&o.isPropagationStopped())break e;ya(o,s,d),l=u}}}if(Fr)throw e=vl,Fr=!1,vl=null,e}function F(e,t){var n=t[El];n===void 0&&(n=t[El]=new Set);var r=e+"__bubble";n.has(r)||(au(t,e,2,!1),n.add(r))}function Bo(e,t,n){var r=0;t&&(r|=4),au(n,e,r,t)}var hr="_reactListening"+Math.random().toString(36).slice(2);function Bn(e){if(!e[hr]){e[hr]=!0,ms.forEach(function(n){n!=="selectionchange"&&(uf.has(n)||Bo(n,!1,e),Bo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[hr]||(t[hr]=!0,Bo("selectionchange",!1,t))}}function au(e,t,n,r){switch(Hs(t)){case 1:var o=bd;break;case 4:o=jd;break;default:o=si}n=o.bind(null,t,n,e),o=void 0,!gl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Vo(e,t,n,r,o){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;a=a.return}for(;s!==null;){if(a=bt(s),a===null)return;if(u=a.tag,u===5||u===6){r=l=a;continue e}s=s.parentNode}}r=r.return}Ms(function(){var d=l,v=oi(n),m=[];e:{var h=lu.get(e);if(h!==void 0){var y=ci,g=e;switch(e){case"keypress":if(Pr(n)===0)break e;case"keydown":case"keyup":y=Od;break;case"focusin":g="focus",y=Do;break;case"focusout":g="blur",y=Do;break;case"beforeblur":case"afterblur":y=Do;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=ia;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Cd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Ud;break;case tu:case nu:case ru:y=Pd;break;case ou:y=Vd;break;case"scroll":y=Sd;break;case"wheel":y=qd;break;case"copy":case"cut":case"paste":y=_d;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=sa}var x=(t&4)!==0,P=!x&&e==="scroll",f=x?h!==null?h+"Capture":null:h;x=[];for(var c=d,p;c!==null;){p=c;var w=p.stateNode;if(p.tag===5&&w!==null&&(p=w,f!==null&&(w=Dn(c,f),w!=null&&x.push(Vn(c,w,p)))),P)break;c=c.return}0<x.length&&(h=new y(h,g,null,n,v),m.push({event:h,listeners:x}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",h&&n!==ml&&(g=n.relatedTarget||n.fromElement)&&(bt(g)||g[Ye]))break e;if((y||h)&&(h=v.window===v?v:(h=v.ownerDocument)?h.defaultView||h.parentWindow:window,y?(g=n.relatedTarget||n.toElement,y=d,g=g?bt(g):null,g!==null&&(P=Lt(g),g!==P||g.tag!==5&&g.tag!==6)&&(g=null)):(y=null,g=d),y!==g)){if(x=ia,w="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(x=sa,w="onPointerLeave",f="onPointerEnter",c="pointer"),P=y==null?h:Ut(y),p=g==null?h:Ut(g),h=new x(w,c+"leave",y,n,v),h.target=P,h.relatedTarget=p,w=null,bt(v)===d&&(x=new x(f,c+"enter",g,n,v),x.target=p,x.relatedTarget=P,w=x),P=w,y&&g)t:{for(x=y,f=g,c=0,p=x;p;p=At(p))c++;for(p=0,w=f;w;w=At(w))p++;for(;0<c-p;)x=At(x),c--;for(;0<p-c;)f=At(f),p--;for(;c--;){if(x===f||f!==null&&x===f.alternate)break t;x=At(x),f=At(f)}x=null}else x=null;y!==null&&xa(m,h,y,x,!1),g!==null&&P!==null&&xa(m,P,g,x,!0)}}e:{if(h=d?Ut(d):window,y=h.nodeName&&h.nodeName.toLowerCase(),y==="select"||y==="input"&&h.type==="file")var j=Zd;else if(da(h))if(Gs)j=nf;else{j=ef;var N=Jd}else(y=h.nodeName)&&y.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(j=tf);if(j&&(j=j(e,d))){Ks(m,j,n,v);break e}N&&N(e,h,d),e==="focusout"&&(N=h._wrapperState)&&N.controlled&&h.type==="number"&&ul(h,"number",h.value)}switch(N=d?Ut(d):window,e){case"focusin":(da(N)||N.contentEditable==="true")&&(Ft=N,kl=d,Pn=null);break;case"focusout":Pn=kl=Ft=null;break;case"mousedown":bl=!0;break;case"contextmenu":case"mouseup":case"dragend":bl=!1,ga(m,n,v);break;case"selectionchange":if(lf)break;case"keydown":case"keyup":ga(m,n,v)}var C;if(fi)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else Ot?Qs(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(Ws&&n.locale!=="ko"&&(Ot||E!=="onCompositionStart"?E==="onCompositionEnd"&&Ot&&(C=qs()):(rt=v,ui="value"in rt?rt.value:rt.textContent,Ot=!0)),N=Hr(d,E),0<N.length&&(E=new aa(E,e,null,n,v),m.push({event:E,listeners:N}),C?E.data=C:(C=Ys(n),C!==null&&(E.data=C)))),(C=Qd?Yd(e,n):Kd(e,n))&&(d=Hr(d,"onBeforeInput"),0<d.length&&(v=new aa("onBeforeInput","beforeinput",null,n,v),m.push({event:v,listeners:d}),v.data=C))}iu(m,t)})}function Vn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Hr(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=Dn(e,n),l!=null&&r.unshift(Vn(e,l,o)),l=Dn(e,t),l!=null&&r.push(Vn(e,l,o))),e=e.return}return r}function At(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function xa(e,t,n,r,o){for(var l=t._reactName,a=[];n!==null&&n!==r;){var s=n,u=s.alternate,d=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&d!==null&&(s=d,o?(u=Dn(n,l),u!=null&&a.unshift(Vn(n,u,s))):o||(u=Dn(n,l),u!=null&&a.push(Vn(n,u,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var cf=/\r\n?/g,df=/\u0000|\uFFFD/g;function wa(e){return(typeof e=="string"?e:""+e).replace(cf,`
`).replace(df,"")}function gr(e,t,n){if(t=wa(t),wa(e)!==t&&n)throw Error(k(425))}function qr(){}var jl=null,Sl=null;function Nl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Cl=typeof setTimeout=="function"?setTimeout:void 0,ff=typeof clearTimeout=="function"?clearTimeout:void 0,ka=typeof Promise=="function"?Promise:void 0,pf=typeof queueMicrotask=="function"?queueMicrotask:typeof ka<"u"?function(e){return ka.resolve(null).then(e).catch(mf)}:Cl;function mf(e){setTimeout(function(){throw e})}function Ho(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Fn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Fn(t)}function st(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ba(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var cn=Math.random().toString(36).slice(2),Fe="__reactFiber$"+cn,Hn="__reactProps$"+cn,Ye="__reactContainer$"+cn,El="__reactEvents$"+cn,hf="__reactListeners$"+cn,gf="__reactHandles$"+cn;function bt(e){var t=e[Fe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ye]||n[Fe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ba(e);e!==null;){if(n=e[Fe])return n;e=ba(e)}return t}e=n,n=e.parentNode}return null}function tr(e){return e=e[Fe]||e[Ye],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ut(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function mo(e){return e[Hn]||null}var zl=[],Bt=-1;function gt(e){return{current:e}}function $(e){0>Bt||(e.current=zl[Bt],zl[Bt]=null,Bt--)}function O(e,t){Bt++,zl[Bt]=e.current,e.current=t}var mt={},ae=gt(mt),me=gt(!1),Et=mt;function tn(e,t){var n=e.type.contextTypes;if(!n)return mt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in n)o[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function he(e){return e=e.childContextTypes,e!=null}function Wr(){$(me),$(ae)}function ja(e,t,n){if(ae.current!==mt)throw Error(k(168));O(ae,t),O(me,n)}function su(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(k(108,Jc(e)||"Unknown",o));return H({},n,r)}function Qr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||mt,Et=ae.current,O(ae,e),O(me,me.current),!0}function Sa(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=su(e,t,Et),r.__reactInternalMemoizedMergedChildContext=e,$(me),$(ae),O(ae,e)):$(me),O(me,n)}var Ve=null,ho=!1,qo=!1;function uu(e){Ve===null?Ve=[e]:Ve.push(e)}function vf(e){ho=!0,uu(e)}function vt(){if(!qo&&Ve!==null){qo=!0;var e=0,t=I;try{var n=Ve;for(I=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ve=null,ho=!1}catch(o){throw Ve!==null&&(Ve=Ve.slice(e+1)),As(li,vt),o}finally{I=t,qo=!1}}return null}var Vt=[],Ht=0,Yr=null,Kr=0,je=[],Se=0,zt=null,He=1,qe="";function wt(e,t){Vt[Ht++]=Kr,Vt[Ht++]=Yr,Yr=e,Kr=t}function cu(e,t,n){je[Se++]=He,je[Se++]=qe,je[Se++]=zt,zt=e;var r=He;e=qe;var o=32-Ae(r)-1;r&=~(1<<o),n+=1;var l=32-Ae(t)+o;if(30<l){var a=o-o%5;l=(r&(1<<a)-1).toString(32),r>>=a,o-=a,He=1<<32-Ae(t)+o|n<<o|r,qe=l+e}else He=1<<l|n<<o|r,qe=e}function mi(e){e.return!==null&&(wt(e,1),cu(e,1,0))}function hi(e){for(;e===Yr;)Yr=Vt[--Ht],Vt[Ht]=null,Kr=Vt[--Ht],Vt[Ht]=null;for(;e===zt;)zt=je[--Se],je[Se]=null,qe=je[--Se],je[Se]=null,He=je[--Se],je[Se]=null}var xe=null,ye=null,U=!1,Le=null;function du(e,t){var n=Ne(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Na(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,xe=e,ye=st(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,xe=e,ye=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=zt!==null?{id:He,overflow:qe}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ne(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,xe=e,ye=null,!0):!1;default:return!1}}function Pl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ml(e){if(U){var t=ye;if(t){var n=t;if(!Na(e,t)){if(Pl(e))throw Error(k(418));t=st(n.nextSibling);var r=xe;t&&Na(e,t)?du(r,n):(e.flags=e.flags&-4097|2,U=!1,xe=e)}}else{if(Pl(e))throw Error(k(418));e.flags=e.flags&-4097|2,U=!1,xe=e}}}function Ca(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;xe=e}function vr(e){if(e!==xe)return!1;if(!U)return Ca(e),U=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Nl(e.type,e.memoizedProps)),t&&(t=ye)){if(Pl(e))throw fu(),Error(k(418));for(;t;)du(e,t),t=st(t.nextSibling)}if(Ca(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ye=st(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ye=null}}else ye=xe?st(e.stateNode.nextSibling):null;return!0}function fu(){for(var e=ye;e;)e=st(e.nextSibling)}function nn(){ye=xe=null,U=!1}function gi(e){Le===null?Le=[e]:Le.push(e)}var yf=Xe.ReactCurrentBatchConfig;function yn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var o=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(a){var s=o.refs;a===null?delete s[l]:s[l]=a},t._stringRef=l,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function yr(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ea(e){var t=e._init;return t(e._payload)}function pu(e){function t(f,c){if(e){var p=f.deletions;p===null?(f.deletions=[c],f.flags|=16):p.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function o(f,c){return f=ft(f,c),f.index=0,f.sibling=null,f}function l(f,c,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<c?(f.flags|=2,c):p):(f.flags|=2,c)):(f.flags|=1048576,c)}function a(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,c,p,w){return c===null||c.tag!==6?(c=Zo(p,f.mode,w),c.return=f,c):(c=o(c,p),c.return=f,c)}function u(f,c,p,w){var j=p.type;return j===It?v(f,c,p.props.children,w,p.key):c!==null&&(c.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Je&&Ea(j)===c.type)?(w=o(c,p.props),w.ref=yn(f,c,p),w.return=f,w):(w=Dr(p.type,p.key,p.props,null,f.mode,w),w.ref=yn(f,c,p),w.return=f,w)}function d(f,c,p,w){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=Jo(p,f.mode,w),c.return=f,c):(c=o(c,p.children||[]),c.return=f,c)}function v(f,c,p,w,j){return c===null||c.tag!==7?(c=Ct(p,f.mode,w,j),c.return=f,c):(c=o(c,p),c.return=f,c)}function m(f,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Zo(""+c,f.mode,p),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case ar:return p=Dr(c.type,c.key,c.props,null,f.mode,p),p.ref=yn(f,null,c),p.return=f,p;case Dt:return c=Jo(c,f.mode,p),c.return=f,c;case Je:var w=c._init;return m(f,w(c._payload),p)}if(bn(c)||pn(c))return c=Ct(c,f.mode,p,null),c.return=f,c;yr(f,c)}return null}function h(f,c,p,w){var j=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return j!==null?null:s(f,c,""+p,w);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ar:return p.key===j?u(f,c,p,w):null;case Dt:return p.key===j?d(f,c,p,w):null;case Je:return j=p._init,h(f,c,j(p._payload),w)}if(bn(p)||pn(p))return j!==null?null:v(f,c,p,w,null);yr(f,p)}return null}function y(f,c,p,w,j){if(typeof w=="string"&&w!==""||typeof w=="number")return f=f.get(p)||null,s(c,f,""+w,j);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ar:return f=f.get(w.key===null?p:w.key)||null,u(c,f,w,j);case Dt:return f=f.get(w.key===null?p:w.key)||null,d(c,f,w,j);case Je:var N=w._init;return y(f,c,p,N(w._payload),j)}if(bn(w)||pn(w))return f=f.get(p)||null,v(c,f,w,j,null);yr(c,w)}return null}function g(f,c,p,w){for(var j=null,N=null,C=c,E=c=0,W=null;C!==null&&E<p.length;E++){C.index>E?(W=C,C=null):W=C.sibling;var R=h(f,C,p[E],w);if(R===null){C===null&&(C=W);break}e&&C&&R.alternate===null&&t(f,C),c=l(R,c,E),N===null?j=R:N.sibling=R,N=R,C=W}if(E===p.length)return n(f,C),U&&wt(f,E),j;if(C===null){for(;E<p.length;E++)C=m(f,p[E],w),C!==null&&(c=l(C,c,E),N===null?j=C:N.sibling=C,N=C);return U&&wt(f,E),j}for(C=r(f,C);E<p.length;E++)W=y(C,f,E,p[E],w),W!==null&&(e&&W.alternate!==null&&C.delete(W.key===null?E:W.key),c=l(W,c,E),N===null?j=W:N.sibling=W,N=W);return e&&C.forEach(function(Pe){return t(f,Pe)}),U&&wt(f,E),j}function x(f,c,p,w){var j=pn(p);if(typeof j!="function")throw Error(k(150));if(p=j.call(p),p==null)throw Error(k(151));for(var N=j=null,C=c,E=c=0,W=null,R=p.next();C!==null&&!R.done;E++,R=p.next()){C.index>E?(W=C,C=null):W=C.sibling;var Pe=h(f,C,R.value,w);if(Pe===null){C===null&&(C=W);break}e&&C&&Pe.alternate===null&&t(f,C),c=l(Pe,c,E),N===null?j=Pe:N.sibling=Pe,N=Pe,C=W}if(R.done)return n(f,C),U&&wt(f,E),j;if(C===null){for(;!R.done;E++,R=p.next())R=m(f,R.value,w),R!==null&&(c=l(R,c,E),N===null?j=R:N.sibling=R,N=R);return U&&wt(f,E),j}for(C=r(f,C);!R.done;E++,R=p.next())R=y(C,f,E,R.value,w),R!==null&&(e&&R.alternate!==null&&C.delete(R.key===null?E:R.key),c=l(R,c,E),N===null?j=R:N.sibling=R,N=R);return e&&C.forEach(function(dn){return t(f,dn)}),U&&wt(f,E),j}function P(f,c,p,w){if(typeof p=="object"&&p!==null&&p.type===It&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case ar:e:{for(var j=p.key,N=c;N!==null;){if(N.key===j){if(j=p.type,j===It){if(N.tag===7){n(f,N.sibling),c=o(N,p.props.children),c.return=f,f=c;break e}}else if(N.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Je&&Ea(j)===N.type){n(f,N.sibling),c=o(N,p.props),c.ref=yn(f,N,p),c.return=f,f=c;break e}n(f,N);break}else t(f,N);N=N.sibling}p.type===It?(c=Ct(p.props.children,f.mode,w,p.key),c.return=f,f=c):(w=Dr(p.type,p.key,p.props,null,f.mode,w),w.ref=yn(f,c,p),w.return=f,f=w)}return a(f);case Dt:e:{for(N=p.key;c!==null;){if(c.key===N)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(f,c.sibling),c=o(c,p.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=Jo(p,f.mode,w),c.return=f,f=c}return a(f);case Je:return N=p._init,P(f,c,N(p._payload),w)}if(bn(p))return g(f,c,p,w);if(pn(p))return x(f,c,p,w);yr(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(f,c.sibling),c=o(c,p),c.return=f,f=c):(n(f,c),c=Zo(p,f.mode,w),c.return=f,f=c),a(f)):n(f,c)}return P}var rn=pu(!0),mu=pu(!1),Gr=gt(null),Xr=null,qt=null,vi=null;function yi(){vi=qt=Xr=null}function xi(e){var t=Gr.current;$(Gr),e._currentValue=t}function _l(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Zt(e,t){Xr=e,vi=qt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(pe=!0),e.firstContext=null)}function Ee(e){var t=e._currentValue;if(vi!==e)if(e={context:e,memoizedValue:t,next:null},qt===null){if(Xr===null)throw Error(k(308));qt=e,Xr.dependencies={lanes:0,firstContext:e}}else qt=qt.next=e;return t}var jt=null;function wi(e){jt===null?jt=[e]:jt.push(e)}function hu(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,wi(t)):(n.next=o.next,o.next=n),t.interleaved=n,Ke(e,r)}function Ke(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var et=!1;function ki(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function We(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ut(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,D&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Ke(e,n)}return o=r.interleaved,o===null?(t.next=t,wi(r)):(t.next=o.next,o.next=t),r.interleaved=t,Ke(e,n)}function Mr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ii(e,n)}}function za(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?o=l=a:l=l.next=a,n=n.next}while(n!==null);l===null?o=l=t:l=l.next=t}else o=l=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Zr(e,t,n,r){var o=e.updateQueue;et=!1;var l=o.firstBaseUpdate,a=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var u=s,d=u.next;u.next=null,a===null?l=d:a.next=d,a=u;var v=e.alternate;v!==null&&(v=v.updateQueue,s=v.lastBaseUpdate,s!==a&&(s===null?v.firstBaseUpdate=d:s.next=d,v.lastBaseUpdate=u))}if(l!==null){var m=o.baseState;a=0,v=d=u=null,s=l;do{var h=s.lane,y=s.eventTime;if((r&h)===h){v!==null&&(v=v.next={eventTime:y,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var g=e,x=s;switch(h=t,y=n,x.tag){case 1:if(g=x.payload,typeof g=="function"){m=g.call(y,m,h);break e}m=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=x.payload,h=typeof g=="function"?g.call(y,m,h):g,h==null)break e;m=H({},m,h);break e;case 2:et=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[s]:h.push(s))}else y={eventTime:y,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},v===null?(d=v=y,u=m):v=v.next=y,a|=h;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;h=s,s=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(!0);if(v===null&&(u=m),o.baseState=u,o.firstBaseUpdate=d,o.lastBaseUpdate=v,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);Mt|=a,e.lanes=a,e.memoizedState=m}}function Pa(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(k(191,o));o.call(r)}}}var nr={},Ue=gt(nr),qn=gt(nr),Wn=gt(nr);function St(e){if(e===nr)throw Error(k(174));return e}function bi(e,t){switch(O(Wn,t),O(qn,e),O(Ue,nr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:dl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=dl(t,e)}$(Ue),O(Ue,t)}function on(){$(Ue),$(qn),$(Wn)}function vu(e){St(Wn.current);var t=St(Ue.current),n=dl(t,e.type);t!==n&&(O(qn,e),O(Ue,n))}function ji(e){qn.current===e&&($(Ue),$(qn))}var B=gt(0);function Jr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Wo=[];function Si(){for(var e=0;e<Wo.length;e++)Wo[e]._workInProgressVersionPrimary=null;Wo.length=0}var _r=Xe.ReactCurrentDispatcher,Qo=Xe.ReactCurrentBatchConfig,Pt=0,V=null,G=null,J=null,eo=!1,Mn=!1,Qn=0,xf=0;function oe(){throw Error(k(321))}function Ni(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!De(e[n],t[n]))return!1;return!0}function Ci(e,t,n,r,o,l){if(Pt=l,V=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_r.current=e===null||e.memoizedState===null?jf:Sf,e=n(r,o),Mn){l=0;do{if(Mn=!1,Qn=0,25<=l)throw Error(k(301));l+=1,J=G=null,t.updateQueue=null,_r.current=Nf,e=n(r,o)}while(Mn)}if(_r.current=to,t=G!==null&&G.next!==null,Pt=0,J=G=V=null,eo=!1,t)throw Error(k(300));return e}function Ei(){var e=Qn!==0;return Qn=0,e}function Oe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return J===null?V.memoizedState=J=e:J=J.next=e,J}function ze(){if(G===null){var e=V.alternate;e=e!==null?e.memoizedState:null}else e=G.next;var t=J===null?V.memoizedState:J.next;if(t!==null)J=t,G=e;else{if(e===null)throw Error(k(310));G=e,e={memoizedState:G.memoizedState,baseState:G.baseState,baseQueue:G.baseQueue,queue:G.queue,next:null},J===null?V.memoizedState=J=e:J=J.next=e}return J}function Yn(e,t){return typeof t=="function"?t(e):t}function Yo(e){var t=ze(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=G,o=r.baseQueue,l=n.pending;if(l!==null){if(o!==null){var a=o.next;o.next=l.next,l.next=a}r.baseQueue=o=l,n.pending=null}if(o!==null){l=o.next,r=r.baseState;var s=a=null,u=null,d=l;do{var v=d.lane;if((Pt&v)===v)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var m={lane:v,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(s=u=m,a=r):u=u.next=m,V.lanes|=v,Mt|=v}d=d.next}while(d!==null&&d!==l);u===null?a=r:u.next=s,De(r,t.memoizedState)||(pe=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do l=o.lane,V.lanes|=l,Mt|=l,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ko(e){var t=ze(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,l=t.memoizedState;if(o!==null){n.pending=null;var a=o=o.next;do l=e(l,a.action),a=a.next;while(a!==o);De(l,t.memoizedState)||(pe=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function yu(){}function xu(e,t){var n=V,r=ze(),o=t(),l=!De(r.memoizedState,o);if(l&&(r.memoizedState=o,pe=!0),r=r.queue,zi(bu.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||J!==null&&J.memoizedState.tag&1){if(n.flags|=2048,Kn(9,ku.bind(null,n,r,o,t),void 0,null),ee===null)throw Error(k(349));Pt&30||wu(n,t,o)}return o}function wu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ku(e,t,n,r){t.value=n,t.getSnapshot=r,ju(t)&&Su(e)}function bu(e,t,n){return n(function(){ju(t)&&Su(e)})}function ju(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!De(e,n)}catch{return!0}}function Su(e){var t=Ke(e,1);t!==null&&Re(t,e,1,-1)}function Ma(e){var t=Oe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Yn,lastRenderedState:e},t.queue=e,e=e.dispatch=bf.bind(null,V,e),[t.memoizedState,e]}function Kn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Nu(){return ze().memoizedState}function Tr(e,t,n,r){var o=Oe();V.flags|=e,o.memoizedState=Kn(1|t,n,void 0,r===void 0?null:r)}function go(e,t,n,r){var o=ze();r=r===void 0?null:r;var l=void 0;if(G!==null){var a=G.memoizedState;if(l=a.destroy,r!==null&&Ni(r,a.deps)){o.memoizedState=Kn(t,n,l,r);return}}V.flags|=e,o.memoizedState=Kn(1|t,n,l,r)}function _a(e,t){return Tr(8390656,8,e,t)}function zi(e,t){return go(2048,8,e,t)}function Cu(e,t){return go(4,2,e,t)}function Eu(e,t){return go(4,4,e,t)}function zu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Pu(e,t,n){return n=n!=null?n.concat([e]):null,go(4,4,zu.bind(null,t,e),n)}function Pi(){}function Mu(e,t){var n=ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ni(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function _u(e,t){var n=ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ni(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Tu(e,t,n){return Pt&21?(De(n,t)||(n=Is(),V.lanes|=n,Mt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,pe=!0),e.memoizedState=n)}function wf(e,t){var n=I;I=n!==0&&4>n?n:4,e(!0);var r=Qo.transition;Qo.transition={};try{e(!1),t()}finally{I=n,Qo.transition=r}}function Lu(){return ze().memoizedState}function kf(e,t,n){var r=dt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Au(e))Ru(t,n);else if(n=hu(e,t,n,r),n!==null){var o=ue();Re(n,e,r,o),Du(n,t,r)}}function bf(e,t,n){var r=dt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Au(e))Ru(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var a=t.lastRenderedState,s=l(a,n);if(o.hasEagerState=!0,o.eagerState=s,De(s,a)){var u=t.interleaved;u===null?(o.next=o,wi(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}finally{}n=hu(e,t,o,r),n!==null&&(o=ue(),Re(n,e,r,o),Du(n,t,r))}}function Au(e){var t=e.alternate;return e===V||t!==null&&t===V}function Ru(e,t){Mn=eo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Du(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ii(e,n)}}var to={readContext:Ee,useCallback:oe,useContext:oe,useEffect:oe,useImperativeHandle:oe,useInsertionEffect:oe,useLayoutEffect:oe,useMemo:oe,useReducer:oe,useRef:oe,useState:oe,useDebugValue:oe,useDeferredValue:oe,useTransition:oe,useMutableSource:oe,useSyncExternalStore:oe,useId:oe,unstable_isNewReconciler:!1},jf={readContext:Ee,useCallback:function(e,t){return Oe().memoizedState=[e,t===void 0?null:t],e},useContext:Ee,useEffect:_a,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Tr(4194308,4,zu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Tr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Tr(4,2,e,t)},useMemo:function(e,t){var n=Oe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Oe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=kf.bind(null,V,e),[r.memoizedState,e]},useRef:function(e){var t=Oe();return e={current:e},t.memoizedState=e},useState:Ma,useDebugValue:Pi,useDeferredValue:function(e){return Oe().memoizedState=e},useTransition:function(){var e=Ma(!1),t=e[0];return e=wf.bind(null,e[1]),Oe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=V,o=Oe();if(U){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),ee===null)throw Error(k(349));Pt&30||wu(r,t,n)}o.memoizedState=n;var l={value:n,getSnapshot:t};return o.queue=l,_a(bu.bind(null,r,l,e),[e]),r.flags|=2048,Kn(9,ku.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=Oe(),t=ee.identifierPrefix;if(U){var n=qe,r=He;n=(r&~(1<<32-Ae(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Qn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=xf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Sf={readContext:Ee,useCallback:Mu,useContext:Ee,useEffect:zi,useImperativeHandle:Pu,useInsertionEffect:Cu,useLayoutEffect:Eu,useMemo:_u,useReducer:Yo,useRef:Nu,useState:function(){return Yo(Yn)},useDebugValue:Pi,useDeferredValue:function(e){var t=ze();return Tu(t,G.memoizedState,e)},useTransition:function(){var e=Yo(Yn)[0],t=ze().memoizedState;return[e,t]},useMutableSource:yu,useSyncExternalStore:xu,useId:Lu,unstable_isNewReconciler:!1},Nf={readContext:Ee,useCallback:Mu,useContext:Ee,useEffect:zi,useImperativeHandle:Pu,useInsertionEffect:Cu,useLayoutEffect:Eu,useMemo:_u,useReducer:Ko,useRef:Nu,useState:function(){return Ko(Yn)},useDebugValue:Pi,useDeferredValue:function(e){var t=ze();return G===null?t.memoizedState=e:Tu(t,G.memoizedState,e)},useTransition:function(){var e=Ko(Yn)[0],t=ze().memoizedState;return[e,t]},useMutableSource:yu,useSyncExternalStore:xu,useId:Lu,unstable_isNewReconciler:!1};function _e(e,t){if(e&&e.defaultProps){t=H({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Tl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:H({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var vo={isMounted:function(e){return(e=e._reactInternals)?Lt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ue(),o=dt(e),l=We(r,o);l.payload=t,n!=null&&(l.callback=n),t=ut(e,l,o),t!==null&&(Re(t,e,o,r),Mr(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ue(),o=dt(e),l=We(r,o);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=ut(e,l,o),t!==null&&(Re(t,e,o,r),Mr(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ue(),r=dt(e),o=We(n,r);o.tag=2,t!=null&&(o.callback=t),t=ut(e,o,r),t!==null&&(Re(t,e,r,n),Mr(t,e,r))}};function Ta(e,t,n,r,o,l,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,a):t.prototype&&t.prototype.isPureReactComponent?!Un(n,r)||!Un(o,l):!0}function Iu(e,t,n){var r=!1,o=mt,l=t.contextType;return typeof l=="object"&&l!==null?l=Ee(l):(o=he(t)?Et:ae.current,r=t.contextTypes,l=(r=r!=null)?tn(e,o):mt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=vo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function La(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&vo.enqueueReplaceState(t,t.state,null)}function Ll(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},ki(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=Ee(l):(l=he(t)?Et:ae.current,o.context=tn(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Tl(e,t,l,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&vo.enqueueReplaceState(o,o.state,null),Zr(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function ln(e,t){try{var n="",r=t;do n+=Zc(r),r=r.return;while(r);var o=n}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function Go(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Al(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Cf=typeof WeakMap=="function"?WeakMap:Map;function Ou(e,t,n){n=We(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ro||(ro=!0,Hl=r),Al(e,t)},n}function Fu(e,t,n){n=We(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Al(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Al(e,t),typeof r!="function"&&(ct===null?ct=new Set([this]):ct.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Aa(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Cf;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=$f.bind(null,e,t,n),t.then(e,e))}function Ra(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Da(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=We(-1,1),t.tag=2,ut(n,t,1))),n.lanes|=1),e)}var Ef=Xe.ReactCurrentOwner,pe=!1;function se(e,t,n,r){t.child=e===null?mu(t,null,n,r):rn(t,e.child,n,r)}function Ia(e,t,n,r,o){n=n.render;var l=t.ref;return Zt(t,o),r=Ci(e,t,n,r,l,o),n=Ei(),e!==null&&!pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ge(e,t,o)):(U&&n&&mi(t),t.flags|=1,se(e,t,r,o),t.child)}function Oa(e,t,n,r,o){if(e===null){var l=n.type;return typeof l=="function"&&!Ii(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,$u(e,t,l,r,o)):(e=Dr(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&o)){var a=l.memoizedProps;if(n=n.compare,n=n!==null?n:Un,n(a,r)&&e.ref===t.ref)return Ge(e,t,o)}return t.flags|=1,e=ft(l,r),e.ref=t.ref,e.return=t,t.child=e}function $u(e,t,n,r,o){if(e!==null){var l=e.memoizedProps;if(Un(l,r)&&e.ref===t.ref)if(pe=!1,t.pendingProps=r=l,(e.lanes&o)!==0)e.flags&131072&&(pe=!0);else return t.lanes=e.lanes,Ge(e,t,o)}return Rl(e,t,n,r,o)}function Uu(e,t,n){var r=t.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},O(Qt,ve),ve|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,O(Qt,ve),ve|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,O(Qt,ve),ve|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,O(Qt,ve),ve|=r;return se(e,t,o,n),t.child}function Bu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Rl(e,t,n,r,o){var l=he(n)?Et:ae.current;return l=tn(t,l),Zt(t,o),n=Ci(e,t,n,r,l,o),r=Ei(),e!==null&&!pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ge(e,t,o)):(U&&r&&mi(t),t.flags|=1,se(e,t,n,o),t.child)}function Fa(e,t,n,r,o){if(he(n)){var l=!0;Qr(t)}else l=!1;if(Zt(t,o),t.stateNode===null)Lr(e,t),Iu(t,n,r),Ll(t,n,r,o),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var u=a.context,d=n.contextType;typeof d=="object"&&d!==null?d=Ee(d):(d=he(n)?Et:ae.current,d=tn(t,d));var v=n.getDerivedStateFromProps,m=typeof v=="function"||typeof a.getSnapshotBeforeUpdate=="function";m||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||u!==d)&&La(t,a,r,d),et=!1;var h=t.memoizedState;a.state=h,Zr(t,r,a,o),u=t.memoizedState,s!==r||h!==u||me.current||et?(typeof v=="function"&&(Tl(t,n,v,r),u=t.memoizedState),(s=et||Ta(t,n,s,r,h,u,d))?(m||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),a.props=r,a.state=u,a.context=d,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,gu(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:_e(t.type,s),a.props=d,m=t.pendingProps,h=a.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ee(u):(u=he(n)?Et:ae.current,u=tn(t,u));var y=n.getDerivedStateFromProps;(v=typeof y=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==m||h!==u)&&La(t,a,r,u),et=!1,h=t.memoizedState,a.state=h,Zr(t,r,a,o);var g=t.memoizedState;s!==m||h!==g||me.current||et?(typeof y=="function"&&(Tl(t,n,y,r),g=t.memoizedState),(d=et||Ta(t,n,d,r,h,g,u)||!1)?(v||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,g,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,g,u)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),a.props=r,a.state=g,a.context=u,r=d):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Dl(e,t,n,r,l,o)}function Dl(e,t,n,r,o,l){Bu(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return o&&Sa(t,n,!1),Ge(e,t,l);r=t.stateNode,Ef.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=rn(t,e.child,null,l),t.child=rn(t,null,s,l)):se(e,t,s,l),t.memoizedState=r.state,o&&Sa(t,n,!0),t.child}function Vu(e){var t=e.stateNode;t.pendingContext?ja(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ja(e,t.context,!1),bi(e,t.containerInfo)}function $a(e,t,n,r,o){return nn(),gi(o),t.flags|=256,se(e,t,n,r),t.child}var Il={dehydrated:null,treeContext:null,retryLane:0};function Ol(e){return{baseLanes:e,cachePool:null,transitions:null}}function Hu(e,t,n){var r=t.pendingProps,o=B.current,l=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),O(B,o&1),e===null)return Ml(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,l?(r=t.mode,l=t.child,a={mode:"hidden",children:a},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=a):l=wo(a,r,0,null),e=Ct(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Ol(n),t.memoizedState=Il,e):Mi(t,a));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return zf(e,t,a,r,s,o,n);if(l){l=r.fallback,a=t.mode,o=e.child,s=o.sibling;var u={mode:"hidden",children:r.children};return!(a&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=ft(o,u),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?l=ft(s,l):(l=Ct(l,a,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,a=e.child.memoizedState,a=a===null?Ol(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},l.memoizedState=a,l.childLanes=e.childLanes&~n,t.memoizedState=Il,r}return l=e.child,e=l.sibling,r=ft(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Mi(e,t){return t=wo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function xr(e,t,n,r){return r!==null&&gi(r),rn(t,e.child,null,n),e=Mi(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function zf(e,t,n,r,o,l,a){if(n)return t.flags&256?(t.flags&=-257,r=Go(Error(k(422))),xr(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,o=t.mode,r=wo({mode:"visible",children:r.children},o,0,null),l=Ct(l,o,a,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&rn(t,e.child,null,a),t.child.memoizedState=Ol(a),t.memoizedState=Il,l);if(!(t.mode&1))return xr(e,t,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,l=Error(k(419)),r=Go(l,r,void 0),xr(e,t,a,r)}if(s=(a&e.childLanes)!==0,pe||s){if(r=ee,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|a)?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,Ke(e,o),Re(r,e,o,-1))}return Di(),r=Go(Error(k(421))),xr(e,t,a,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Uf.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,ye=st(o.nextSibling),xe=t,U=!0,Le=null,e!==null&&(je[Se++]=He,je[Se++]=qe,je[Se++]=zt,He=e.id,qe=e.overflow,zt=t),t=Mi(t,r.children),t.flags|=4096,t)}function Ua(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),_l(e.return,t,n)}function Xo(e,t,n,r,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=o)}function qu(e,t,n){var r=t.pendingProps,o=r.revealOrder,l=r.tail;if(se(e,t,r.children,n),r=B.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ua(e,n,t);else if(e.tag===19)Ua(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(O(B,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Jr(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Xo(t,!1,o,n,l);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Jr(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Xo(t,!0,n,null,l);break;case"together":Xo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Lr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ge(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Mt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=ft(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ft(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Pf(e,t,n){switch(t.tag){case 3:Vu(t),nn();break;case 5:vu(t);break;case 1:he(t.type)&&Qr(t);break;case 4:bi(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;O(Gr,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(O(B,B.current&1),t.flags|=128,null):n&t.child.childLanes?Hu(e,t,n):(O(B,B.current&1),e=Ge(e,t,n),e!==null?e.sibling:null);O(B,B.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return qu(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),O(B,B.current),r)break;return null;case 22:case 23:return t.lanes=0,Uu(e,t,n)}return Ge(e,t,n)}var Wu,Fl,Qu,Yu;Wu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Fl=function(){};Qu=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,St(Ue.current);var l=null;switch(n){case"input":o=al(e,o),r=al(e,r),l=[];break;case"select":o=H({},o,{value:void 0}),r=H({},r,{value:void 0}),l=[];break;case"textarea":o=cl(e,o),r=cl(e,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=qr)}fl(n,r);var a;n=null;for(d in o)if(!r.hasOwnProperty(d)&&o.hasOwnProperty(d)&&o[d]!=null)if(d==="style"){var s=o[d];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(An.hasOwnProperty(d)?l||(l=[]):(l=l||[]).push(d,null));for(d in r){var u=r[d];if(s=o!=null?o[d]:void 0,r.hasOwnProperty(d)&&u!==s&&(u!=null||s!=null))if(d==="style")if(s){for(a in s)!s.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in u)u.hasOwnProperty(a)&&s[a]!==u[a]&&(n||(n={}),n[a]=u[a])}else n||(l||(l=[]),l.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(l=l||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(l=l||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(An.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&F("scroll",e),l||s===u||(l=[])):(l=l||[]).push(d,u))}n&&(l=l||[]).push("style",n);var d=l;(t.updateQueue=d)&&(t.flags|=4)}};Yu=function(e,t,n,r){n!==r&&(t.flags|=4)};function xn(e,t){if(!U)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function le(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Mf(e,t,n){var r=t.pendingProps;switch(hi(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return le(t),null;case 1:return he(t.type)&&Wr(),le(t),null;case 3:return r=t.stateNode,on(),$(me),$(ae),Si(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(vr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Le!==null&&(Ql(Le),Le=null))),Fl(e,t),le(t),null;case 5:ji(t);var o=St(Wn.current);if(n=t.type,e!==null&&t.stateNode!=null)Qu(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return le(t),null}if(e=St(Ue.current),vr(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[Fe]=t,r[Hn]=l,e=(t.mode&1)!==0,n){case"dialog":F("cancel",r),F("close",r);break;case"iframe":case"object":case"embed":F("load",r);break;case"video":case"audio":for(o=0;o<Sn.length;o++)F(Sn[o],r);break;case"source":F("error",r);break;case"img":case"image":case"link":F("error",r),F("load",r);break;case"details":F("toggle",r);break;case"input":Gi(r,l),F("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},F("invalid",r);break;case"textarea":Zi(r,l),F("invalid",r)}fl(n,l),o=null;for(var a in l)if(l.hasOwnProperty(a)){var s=l[a];a==="children"?typeof s=="string"?r.textContent!==s&&(l.suppressHydrationWarning!==!0&&gr(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(l.suppressHydrationWarning!==!0&&gr(r.textContent,s,e),o=["children",""+s]):An.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&F("scroll",r)}switch(n){case"input":sr(r),Xi(r,l,!0);break;case"textarea":sr(r),Ji(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=qr)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=bs(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Fe]=t,e[Hn]=r,Wu(e,t,!1,!1),t.stateNode=e;e:{switch(a=pl(n,r),n){case"dialog":F("cancel",e),F("close",e),o=r;break;case"iframe":case"object":case"embed":F("load",e),o=r;break;case"video":case"audio":for(o=0;o<Sn.length;o++)F(Sn[o],e);o=r;break;case"source":F("error",e),o=r;break;case"img":case"image":case"link":F("error",e),F("load",e),o=r;break;case"details":F("toggle",e),o=r;break;case"input":Gi(e,r),o=al(e,r),F("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=H({},r,{value:void 0}),F("invalid",e);break;case"textarea":Zi(e,r),o=cl(e,r),F("invalid",e);break;default:o=r}fl(n,o),s=o;for(l in s)if(s.hasOwnProperty(l)){var u=s[l];l==="style"?Ns(e,u):l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&js(e,u)):l==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Rn(e,u):typeof u=="number"&&Rn(e,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(An.hasOwnProperty(l)?u!=null&&l==="onScroll"&&F("scroll",e):u!=null&&ei(e,l,u,a))}switch(n){case"input":sr(e),Xi(e,r,!1);break;case"textarea":sr(e),Ji(e);break;case"option":r.value!=null&&e.setAttribute("value",""+pt(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?Yt(e,!!r.multiple,l,!1):r.defaultValue!=null&&Yt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=qr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return le(t),null;case 6:if(e&&t.stateNode!=null)Yu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=St(Wn.current),St(Ue.current),vr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Fe]=t,(l=r.nodeValue!==n)&&(e=xe,e!==null))switch(e.tag){case 3:gr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&gr(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Fe]=t,t.stateNode=r}return le(t),null;case 13:if($(B),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(U&&ye!==null&&t.mode&1&&!(t.flags&128))fu(),nn(),t.flags|=98560,l=!1;else if(l=vr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(k(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(k(317));l[Fe]=t}else nn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;le(t),l=!1}else Le!==null&&(Ql(Le),Le=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||B.current&1?X===0&&(X=3):Di())),t.updateQueue!==null&&(t.flags|=4),le(t),null);case 4:return on(),Fl(e,t),e===null&&Bn(t.stateNode.containerInfo),le(t),null;case 10:return xi(t.type._context),le(t),null;case 17:return he(t.type)&&Wr(),le(t),null;case 19:if($(B),l=t.memoizedState,l===null)return le(t),null;if(r=(t.flags&128)!==0,a=l.rendering,a===null)if(r)xn(l,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Jr(e),a!==null){for(t.flags|=128,xn(l,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,a=l.alternate,a===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=a.childLanes,l.lanes=a.lanes,l.child=a.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=a.memoizedProps,l.memoizedState=a.memoizedState,l.updateQueue=a.updateQueue,l.type=a.type,e=a.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return O(B,B.current&1|2),t.child}e=e.sibling}l.tail!==null&&Y()>an&&(t.flags|=128,r=!0,xn(l,!1),t.lanes=4194304)}else{if(!r)if(e=Jr(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),xn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!a.alternate&&!U)return le(t),null}else 2*Y()-l.renderingStartTime>an&&n!==1073741824&&(t.flags|=128,r=!0,xn(l,!1),t.lanes=4194304);l.isBackwards?(a.sibling=t.child,t.child=a):(n=l.last,n!==null?n.sibling=a:t.child=a,l.last=a)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Y(),t.sibling=null,n=B.current,O(B,r?n&1|2:n&1),t):(le(t),null);case 22:case 23:return Ri(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ve&1073741824&&(le(t),t.subtreeFlags&6&&(t.flags|=8192)):le(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function _f(e,t){switch(hi(t),t.tag){case 1:return he(t.type)&&Wr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return on(),$(me),$(ae),Si(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ji(t),null;case 13:if($(B),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));nn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return $(B),null;case 4:return on(),null;case 10:return xi(t.type._context),null;case 22:case 23:return Ri(),null;case 24:return null;default:return null}}var wr=!1,ie=!1,Tf=typeof WeakSet=="function"?WeakSet:Set,b=null;function Wt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){q(e,t,r)}else n.current=null}function $l(e,t,n){try{n()}catch(r){q(e,t,r)}}var Ba=!1;function Lf(e,t){if(jl=Br,e=Js(),pi(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var a=0,s=-1,u=-1,d=0,v=0,m=e,h=null;t:for(;;){for(var y;m!==n||o!==0&&m.nodeType!==3||(s=a+o),m!==l||r!==0&&m.nodeType!==3||(u=a+r),m.nodeType===3&&(a+=m.nodeValue.length),(y=m.firstChild)!==null;)h=m,m=y;for(;;){if(m===e)break t;if(h===n&&++d===o&&(s=a),h===l&&++v===r&&(u=a),(y=m.nextSibling)!==null)break;m=h,h=m.parentNode}m=y}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Sl={focusedElem:e,selectionRange:n},Br=!1,b=t;b!==null;)if(t=b,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,b=e;else for(;b!==null;){t=b;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var x=g.memoizedProps,P=g.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?x:_e(t.type,x),P);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(w){q(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,b=e;break}b=t.return}return g=Ba,Ba=!1,g}function _n(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&$l(t,n,l)}o=o.next}while(o!==r)}}function yo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ul(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ku(e){var t=e.alternate;t!==null&&(e.alternate=null,Ku(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Fe],delete t[Hn],delete t[El],delete t[hf],delete t[gf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Gu(e){return e.tag===5||e.tag===3||e.tag===4}function Va(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Gu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Bl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=qr));else if(r!==4&&(e=e.child,e!==null))for(Bl(e,t,n),e=e.sibling;e!==null;)Bl(e,t,n),e=e.sibling}function Vl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Vl(e,t,n),e=e.sibling;e!==null;)Vl(e,t,n),e=e.sibling}var te=null,Te=!1;function Ze(e,t,n){for(n=n.child;n!==null;)Xu(e,t,n),n=n.sibling}function Xu(e,t,n){if($e&&typeof $e.onCommitFiberUnmount=="function")try{$e.onCommitFiberUnmount(uo,n)}catch{}switch(n.tag){case 5:ie||Wt(n,t);case 6:var r=te,o=Te;te=null,Ze(e,t,n),te=r,Te=o,te!==null&&(Te?(e=te,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):te.removeChild(n.stateNode));break;case 18:te!==null&&(Te?(e=te,n=n.stateNode,e.nodeType===8?Ho(e.parentNode,n):e.nodeType===1&&Ho(e,n),Fn(e)):Ho(te,n.stateNode));break;case 4:r=te,o=Te,te=n.stateNode.containerInfo,Te=!0,Ze(e,t,n),te=r,Te=o;break;case 0:case 11:case 14:case 15:if(!ie&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,a=l.destroy;l=l.tag,a!==void 0&&(l&2||l&4)&&$l(n,t,a),o=o.next}while(o!==r)}Ze(e,t,n);break;case 1:if(!ie&&(Wt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){q(n,t,s)}Ze(e,t,n);break;case 21:Ze(e,t,n);break;case 22:n.mode&1?(ie=(r=ie)||n.memoizedState!==null,Ze(e,t,n),ie=r):Ze(e,t,n);break;default:Ze(e,t,n)}}function Ha(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Tf),t.forEach(function(r){var o=Bf.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Me(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var l=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:te=s.stateNode,Te=!1;break e;case 3:te=s.stateNode.containerInfo,Te=!0;break e;case 4:te=s.stateNode.containerInfo,Te=!0;break e}s=s.return}if(te===null)throw Error(k(160));Xu(l,a,o),te=null,Te=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(d){q(o,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Zu(t,e),t=t.sibling}function Zu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Me(t,e),Ie(e),r&4){try{_n(3,e,e.return),yo(3,e)}catch(x){q(e,e.return,x)}try{_n(5,e,e.return)}catch(x){q(e,e.return,x)}}break;case 1:Me(t,e),Ie(e),r&512&&n!==null&&Wt(n,n.return);break;case 5:if(Me(t,e),Ie(e),r&512&&n!==null&&Wt(n,n.return),e.flags&32){var o=e.stateNode;try{Rn(o,"")}catch(x){q(e,e.return,x)}}if(r&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,a=n!==null?n.memoizedProps:l,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&l.type==="radio"&&l.name!=null&&ws(o,l),pl(s,a);var d=pl(s,l);for(a=0;a<u.length;a+=2){var v=u[a],m=u[a+1];v==="style"?Ns(o,m):v==="dangerouslySetInnerHTML"?js(o,m):v==="children"?Rn(o,m):ei(o,v,m,d)}switch(s){case"input":sl(o,l);break;case"textarea":ks(o,l);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var y=l.value;y!=null?Yt(o,!!l.multiple,y,!1):h!==!!l.multiple&&(l.defaultValue!=null?Yt(o,!!l.multiple,l.defaultValue,!0):Yt(o,!!l.multiple,l.multiple?[]:"",!1))}o[Hn]=l}catch(x){q(e,e.return,x)}}break;case 6:if(Me(t,e),Ie(e),r&4){if(e.stateNode===null)throw Error(k(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(x){q(e,e.return,x)}}break;case 3:if(Me(t,e),Ie(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Fn(t.containerInfo)}catch(x){q(e,e.return,x)}break;case 4:Me(t,e),Ie(e);break;case 13:Me(t,e),Ie(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(Li=Y())),r&4&&Ha(e);break;case 22:if(v=n!==null&&n.memoizedState!==null,e.mode&1?(ie=(d=ie)||v,Me(t,e),ie=d):Me(t,e),Ie(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!v&&e.mode&1)for(b=e,v=e.child;v!==null;){for(m=b=v;b!==null;){switch(h=b,y=h.child,h.tag){case 0:case 11:case 14:case 15:_n(4,h,h.return);break;case 1:Wt(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(x){q(r,n,x)}}break;case 5:Wt(h,h.return);break;case 22:if(h.memoizedState!==null){Wa(m);continue}}y!==null?(y.return=h,b=y):Wa(m)}v=v.sibling}e:for(v=null,m=e;;){if(m.tag===5){if(v===null){v=m;try{o=m.stateNode,d?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(s=m.stateNode,u=m.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=Ss("display",a))}catch(x){q(e,e.return,x)}}}else if(m.tag===6){if(v===null)try{m.stateNode.nodeValue=d?"":m.memoizedProps}catch(x){q(e,e.return,x)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;v===m&&(v=null),m=m.return}v===m&&(v=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Me(t,e),Ie(e),r&4&&Ha(e);break;case 21:break;default:Me(t,e),Ie(e)}}function Ie(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Gu(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Rn(o,""),r.flags&=-33);var l=Va(e);Vl(e,l,o);break;case 3:case 4:var a=r.stateNode.containerInfo,s=Va(e);Bl(e,s,a);break;default:throw Error(k(161))}}catch(u){q(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Af(e,t,n){b=e,Ju(e)}function Ju(e,t,n){for(var r=(e.mode&1)!==0;b!==null;){var o=b,l=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||wr;if(!a){var s=o.alternate,u=s!==null&&s.memoizedState!==null||ie;s=wr;var d=ie;if(wr=a,(ie=u)&&!d)for(b=o;b!==null;)a=b,u=a.child,a.tag===22&&a.memoizedState!==null?Qa(o):u!==null?(u.return=a,b=u):Qa(o);for(;l!==null;)b=l,Ju(l),l=l.sibling;b=o,wr=s,ie=d}qa(e)}else o.subtreeFlags&8772&&l!==null?(l.return=o,b=l):qa(e)}}function qa(e){for(;b!==null;){var t=b;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ie||yo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ie)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:_e(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Pa(t,l,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Pa(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var v=d.memoizedState;if(v!==null){var m=v.dehydrated;m!==null&&Fn(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}ie||t.flags&512&&Ul(t)}catch(h){q(t,t.return,h)}}if(t===e){b=null;break}if(n=t.sibling,n!==null){n.return=t.return,b=n;break}b=t.return}}function Wa(e){for(;b!==null;){var t=b;if(t===e){b=null;break}var n=t.sibling;if(n!==null){n.return=t.return,b=n;break}b=t.return}}function Qa(e){for(;b!==null;){var t=b;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{yo(4,t)}catch(u){q(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(u){q(t,o,u)}}var l=t.return;try{Ul(t)}catch(u){q(t,l,u)}break;case 5:var a=t.return;try{Ul(t)}catch(u){q(t,a,u)}}}catch(u){q(t,t.return,u)}if(t===e){b=null;break}var s=t.sibling;if(s!==null){s.return=t.return,b=s;break}b=t.return}}var Rf=Math.ceil,no=Xe.ReactCurrentDispatcher,_i=Xe.ReactCurrentOwner,Ce=Xe.ReactCurrentBatchConfig,D=0,ee=null,K=null,ne=0,ve=0,Qt=gt(0),X=0,Gn=null,Mt=0,xo=0,Ti=0,Tn=null,fe=null,Li=0,an=1/0,Be=null,ro=!1,Hl=null,ct=null,kr=!1,ot=null,oo=0,Ln=0,ql=null,Ar=-1,Rr=0;function ue(){return D&6?Y():Ar!==-1?Ar:Ar=Y()}function dt(e){return e.mode&1?D&2&&ne!==0?ne&-ne:yf.transition!==null?(Rr===0&&(Rr=Is()),Rr):(e=I,e!==0||(e=window.event,e=e===void 0?16:Hs(e.type)),e):1}function Re(e,t,n,r){if(50<Ln)throw Ln=0,ql=null,Error(k(185));Jn(e,n,r),(!(D&2)||e!==ee)&&(e===ee&&(!(D&2)&&(xo|=n),X===4&&nt(e,ne)),ge(e,r),n===1&&D===0&&!(t.mode&1)&&(an=Y()+500,ho&&vt()))}function ge(e,t){var n=e.callbackNode;vd(e,t);var r=Ur(e,e===ee?ne:0);if(r===0)n!==null&&na(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&na(n),t===1)e.tag===0?vf(Ya.bind(null,e)):uu(Ya.bind(null,e)),pf(function(){!(D&6)&&vt()}),n=null;else{switch(Os(r)){case 1:n=li;break;case 4:n=Rs;break;case 16:n=$r;break;case 536870912:n=Ds;break;default:n=$r}n=ac(n,ec.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ec(e,t){if(Ar=-1,Rr=0,D&6)throw Error(k(327));var n=e.callbackNode;if(Jt()&&e.callbackNode!==n)return null;var r=Ur(e,e===ee?ne:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=lo(e,r);else{t=r;var o=D;D|=2;var l=nc();(ee!==e||ne!==t)&&(Be=null,an=Y()+500,Nt(e,t));do try{Of();break}catch(s){tc(e,s)}while(!0);yi(),no.current=l,D=o,K!==null?t=0:(ee=null,ne=0,t=X)}if(t!==0){if(t===2&&(o=yl(e),o!==0&&(r=o,t=Wl(e,o))),t===1)throw n=Gn,Nt(e,0),nt(e,r),ge(e,Y()),n;if(t===6)nt(e,r);else{if(o=e.current.alternate,!(r&30)&&!Df(o)&&(t=lo(e,r),t===2&&(l=yl(e),l!==0&&(r=l,t=Wl(e,l))),t===1))throw n=Gn,Nt(e,0),nt(e,r),ge(e,Y()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:kt(e,fe,Be);break;case 3:if(nt(e,r),(r&130023424)===r&&(t=Li+500-Y(),10<t)){if(Ur(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ue(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Cl(kt.bind(null,e,fe,Be),t);break}kt(e,fe,Be);break;case 4:if(nt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var a=31-Ae(r);l=1<<a,a=t[a],a>o&&(o=a),r&=~l}if(r=o,r=Y()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Rf(r/1960))-r,10<r){e.timeoutHandle=Cl(kt.bind(null,e,fe,Be),r);break}kt(e,fe,Be);break;case 5:kt(e,fe,Be);break;default:throw Error(k(329))}}}return ge(e,Y()),e.callbackNode===n?ec.bind(null,e):null}function Wl(e,t){var n=Tn;return e.current.memoizedState.isDehydrated&&(Nt(e,t).flags|=256),e=lo(e,t),e!==2&&(t=fe,fe=n,t!==null&&Ql(t)),e}function Ql(e){fe===null?fe=e:fe.push.apply(fe,e)}function Df(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],l=o.getSnapshot;o=o.value;try{if(!De(l(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function nt(e,t){for(t&=~Ti,t&=~xo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ae(t),r=1<<n;e[n]=-1,t&=~r}}function Ya(e){if(D&6)throw Error(k(327));Jt();var t=Ur(e,0);if(!(t&1))return ge(e,Y()),null;var n=lo(e,t);if(e.tag!==0&&n===2){var r=yl(e);r!==0&&(t=r,n=Wl(e,r))}if(n===1)throw n=Gn,Nt(e,0),nt(e,t),ge(e,Y()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,kt(e,fe,Be),ge(e,Y()),null}function Ai(e,t){var n=D;D|=1;try{return e(t)}finally{D=n,D===0&&(an=Y()+500,ho&&vt())}}function _t(e){ot!==null&&ot.tag===0&&!(D&6)&&Jt();var t=D;D|=1;var n=Ce.transition,r=I;try{if(Ce.transition=null,I=1,e)return e()}finally{I=r,Ce.transition=n,D=t,!(D&6)&&vt()}}function Ri(){ve=Qt.current,$(Qt)}function Nt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,ff(n)),K!==null)for(n=K.return;n!==null;){var r=n;switch(hi(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Wr();break;case 3:on(),$(me),$(ae),Si();break;case 5:ji(r);break;case 4:on();break;case 13:$(B);break;case 19:$(B);break;case 10:xi(r.type._context);break;case 22:case 23:Ri()}n=n.return}if(ee=e,K=e=ft(e.current,null),ne=ve=t,X=0,Gn=null,Ti=xo=Mt=0,fe=Tn=null,jt!==null){for(t=0;t<jt.length;t++)if(n=jt[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,l=n.pending;if(l!==null){var a=l.next;l.next=o,r.next=a}n.pending=r}jt=null}return e}function tc(e,t){do{var n=K;try{if(yi(),_r.current=to,eo){for(var r=V.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}eo=!1}if(Pt=0,J=G=V=null,Mn=!1,Qn=0,_i.current=null,n===null||n.return===null){X=1,Gn=t,K=null;break}e:{var l=e,a=n.return,s=n,u=t;if(t=ne,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,v=s,m=v.tag;if(!(v.mode&1)&&(m===0||m===11||m===15)){var h=v.alternate;h?(v.updateQueue=h.updateQueue,v.memoizedState=h.memoizedState,v.lanes=h.lanes):(v.updateQueue=null,v.memoizedState=null)}var y=Ra(a);if(y!==null){y.flags&=-257,Da(y,a,s,l,t),y.mode&1&&Aa(l,d,t),t=y,u=d;var g=t.updateQueue;if(g===null){var x=new Set;x.add(u),t.updateQueue=x}else g.add(u);break e}else{if(!(t&1)){Aa(l,d,t),Di();break e}u=Error(k(426))}}else if(U&&s.mode&1){var P=Ra(a);if(P!==null){!(P.flags&65536)&&(P.flags|=256),Da(P,a,s,l,t),gi(ln(u,s));break e}}l=u=ln(u,s),X!==4&&(X=2),Tn===null?Tn=[l]:Tn.push(l),l=a;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var f=Ou(l,u,t);za(l,f);break e;case 1:s=u;var c=l.type,p=l.stateNode;if(!(l.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(ct===null||!ct.has(p)))){l.flags|=65536,t&=-t,l.lanes|=t;var w=Fu(l,s,t);za(l,w);break e}}l=l.return}while(l!==null)}oc(n)}catch(j){t=j,K===n&&n!==null&&(K=n=n.return);continue}break}while(!0)}function nc(){var e=no.current;return no.current=to,e===null?to:e}function Di(){(X===0||X===3||X===2)&&(X=4),ee===null||!(Mt&268435455)&&!(xo&268435455)||nt(ee,ne)}function lo(e,t){var n=D;D|=2;var r=nc();(ee!==e||ne!==t)&&(Be=null,Nt(e,t));do try{If();break}catch(o){tc(e,o)}while(!0);if(yi(),D=n,no.current=r,K!==null)throw Error(k(261));return ee=null,ne=0,X}function If(){for(;K!==null;)rc(K)}function Of(){for(;K!==null&&!sd();)rc(K)}function rc(e){var t=ic(e.alternate,e,ve);e.memoizedProps=e.pendingProps,t===null?oc(e):K=t,_i.current=null}function oc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=_f(n,t),n!==null){n.flags&=32767,K=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{X=6,K=null;return}}else if(n=Mf(n,t,ve),n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);X===0&&(X=5)}function kt(e,t,n){var r=I,o=Ce.transition;try{Ce.transition=null,I=1,Ff(e,t,n,r)}finally{Ce.transition=o,I=r}return null}function Ff(e,t,n,r){do Jt();while(ot!==null);if(D&6)throw Error(k(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(yd(e,l),e===ee&&(K=ee=null,ne=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||kr||(kr=!0,ac($r,function(){return Jt(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=Ce.transition,Ce.transition=null;var a=I;I=1;var s=D;D|=4,_i.current=null,Lf(e,n),Zu(n,e),of(Sl),Br=!!jl,Sl=jl=null,e.current=n,Af(n),ud(),D=s,I=a,Ce.transition=l}else e.current=n;if(kr&&(kr=!1,ot=e,oo=o),l=e.pendingLanes,l===0&&(ct=null),fd(n.stateNode),ge(e,Y()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(ro)throw ro=!1,e=Hl,Hl=null,e;return oo&1&&e.tag!==0&&Jt(),l=e.pendingLanes,l&1?e===ql?Ln++:(Ln=0,ql=e):Ln=0,vt(),null}function Jt(){if(ot!==null){var e=Os(oo),t=Ce.transition,n=I;try{if(Ce.transition=null,I=16>e?16:e,ot===null)var r=!1;else{if(e=ot,ot=null,oo=0,D&6)throw Error(k(331));var o=D;for(D|=4,b=e.current;b!==null;){var l=b,a=l.child;if(b.flags&16){var s=l.deletions;if(s!==null){for(var u=0;u<s.length;u++){var d=s[u];for(b=d;b!==null;){var v=b;switch(v.tag){case 0:case 11:case 15:_n(8,v,l)}var m=v.child;if(m!==null)m.return=v,b=m;else for(;b!==null;){v=b;var h=v.sibling,y=v.return;if(Ku(v),v===d){b=null;break}if(h!==null){h.return=y,b=h;break}b=y}}}var g=l.alternate;if(g!==null){var x=g.child;if(x!==null){g.child=null;do{var P=x.sibling;x.sibling=null,x=P}while(x!==null)}}b=l}}if(l.subtreeFlags&2064&&a!==null)a.return=l,b=a;else e:for(;b!==null;){if(l=b,l.flags&2048)switch(l.tag){case 0:case 11:case 15:_n(9,l,l.return)}var f=l.sibling;if(f!==null){f.return=l.return,b=f;break e}b=l.return}}var c=e.current;for(b=c;b!==null;){a=b;var p=a.child;if(a.subtreeFlags&2064&&p!==null)p.return=a,b=p;else e:for(a=c;b!==null;){if(s=b,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:yo(9,s)}}catch(j){q(s,s.return,j)}if(s===a){b=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,b=w;break e}b=s.return}}if(D=o,vt(),$e&&typeof $e.onPostCommitFiberRoot=="function")try{$e.onPostCommitFiberRoot(uo,e)}catch{}r=!0}return r}finally{I=n,Ce.transition=t}}return!1}function Ka(e,t,n){t=ln(n,t),t=Ou(e,t,1),e=ut(e,t,1),t=ue(),e!==null&&(Jn(e,1,t),ge(e,t))}function q(e,t,n){if(e.tag===3)Ka(e,e,n);else for(;t!==null;){if(t.tag===3){Ka(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ct===null||!ct.has(r))){e=ln(n,e),e=Fu(t,e,1),t=ut(t,e,1),e=ue(),t!==null&&(Jn(t,1,e),ge(t,e));break}}t=t.return}}function $f(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ue(),e.pingedLanes|=e.suspendedLanes&n,ee===e&&(ne&n)===n&&(X===4||X===3&&(ne&130023424)===ne&&500>Y()-Li?Nt(e,0):Ti|=n),ge(e,t)}function lc(e,t){t===0&&(e.mode&1?(t=dr,dr<<=1,!(dr&130023424)&&(dr=4194304)):t=1);var n=ue();e=Ke(e,t),e!==null&&(Jn(e,t,n),ge(e,n))}function Uf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),lc(e,n)}function Bf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),lc(e,n)}var ic;ic=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||me.current)pe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return pe=!1,Pf(e,t,n);pe=!!(e.flags&131072)}else pe=!1,U&&t.flags&1048576&&cu(t,Kr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Lr(e,t),e=t.pendingProps;var o=tn(t,ae.current);Zt(t,n),o=Ci(null,t,r,e,o,n);var l=Ei();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,he(r)?(l=!0,Qr(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,ki(t),o.updater=vo,t.stateNode=o,o._reactInternals=t,Ll(t,r,e,n),t=Dl(null,t,r,!0,l,n)):(t.tag=0,U&&l&&mi(t),se(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Lr(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Hf(r),e=_e(r,e),o){case 0:t=Rl(null,t,r,e,n);break e;case 1:t=Fa(null,t,r,e,n);break e;case 11:t=Ia(null,t,r,e,n);break e;case 14:t=Oa(null,t,r,_e(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:_e(r,o),Rl(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:_e(r,o),Fa(e,t,r,o,n);case 3:e:{if(Vu(t),e===null)throw Error(k(387));r=t.pendingProps,l=t.memoizedState,o=l.element,gu(e,t),Zr(t,r,null,n);var a=t.memoizedState;if(r=a.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=ln(Error(k(423)),t),t=$a(e,t,r,n,o);break e}else if(r!==o){o=ln(Error(k(424)),t),t=$a(e,t,r,n,o);break e}else for(ye=st(t.stateNode.containerInfo.firstChild),xe=t,U=!0,Le=null,n=mu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(nn(),r===o){t=Ge(e,t,n);break e}se(e,t,r,n)}t=t.child}return t;case 5:return vu(t),e===null&&Ml(t),r=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,a=o.children,Nl(r,o)?a=null:l!==null&&Nl(r,l)&&(t.flags|=32),Bu(e,t),se(e,t,a,n),t.child;case 6:return e===null&&Ml(t),null;case 13:return Hu(e,t,n);case 4:return bi(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=rn(t,null,r,n):se(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:_e(r,o),Ia(e,t,r,o,n);case 7:return se(e,t,t.pendingProps,n),t.child;case 8:return se(e,t,t.pendingProps.children,n),t.child;case 12:return se(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,l=t.memoizedProps,a=o.value,O(Gr,r._currentValue),r._currentValue=a,l!==null)if(De(l.value,a)){if(l.children===o.children&&!me.current){t=Ge(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var s=l.dependencies;if(s!==null){a=l.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(l.tag===1){u=We(-1,n&-n),u.tag=2;var d=l.updateQueue;if(d!==null){d=d.shared;var v=d.pending;v===null?u.next=u:(u.next=v.next,v.next=u),d.pending=u}}l.lanes|=n,u=l.alternate,u!==null&&(u.lanes|=n),_l(l.return,n,t),s.lanes|=n;break}u=u.next}}else if(l.tag===10)a=l.type===t.type?null:l.child;else if(l.tag===18){if(a=l.return,a===null)throw Error(k(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),_l(a,n,t),a=l.sibling}else a=l.child;if(a!==null)a.return=l;else for(a=l;a!==null;){if(a===t){a=null;break}if(l=a.sibling,l!==null){l.return=a.return,a=l;break}a=a.return}l=a}se(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Zt(t,n),o=Ee(o),r=r(o),t.flags|=1,se(e,t,r,n),t.child;case 14:return r=t.type,o=_e(r,t.pendingProps),o=_e(r.type,o),Oa(e,t,r,o,n);case 15:return $u(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:_e(r,o),Lr(e,t),t.tag=1,he(r)?(e=!0,Qr(t)):e=!1,Zt(t,n),Iu(t,r,o),Ll(t,r,o,n),Dl(null,t,r,!0,e,n);case 19:return qu(e,t,n);case 22:return Uu(e,t,n)}throw Error(k(156,t.tag))};function ac(e,t){return As(e,t)}function Vf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ne(e,t,n,r){return new Vf(e,t,n,r)}function Ii(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Hf(e){if(typeof e=="function")return Ii(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ni)return 11;if(e===ri)return 14}return 2}function ft(e,t){var n=e.alternate;return n===null?(n=Ne(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Dr(e,t,n,r,o,l){var a=2;if(r=e,typeof e=="function")Ii(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case It:return Ct(n.children,o,l,t);case ti:a=8,o|=8;break;case rl:return e=Ne(12,n,t,o|2),e.elementType=rl,e.lanes=l,e;case ol:return e=Ne(13,n,t,o),e.elementType=ol,e.lanes=l,e;case ll:return e=Ne(19,n,t,o),e.elementType=ll,e.lanes=l,e;case vs:return wo(n,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case hs:a=10;break e;case gs:a=9;break e;case ni:a=11;break e;case ri:a=14;break e;case Je:a=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=Ne(a,n,t,o),t.elementType=e,t.type=r,t.lanes=l,t}function Ct(e,t,n,r){return e=Ne(7,e,r,t),e.lanes=n,e}function wo(e,t,n,r){return e=Ne(22,e,r,t),e.elementType=vs,e.lanes=n,e.stateNode={isHidden:!1},e}function Zo(e,t,n){return e=Ne(6,e,null,t),e.lanes=n,e}function Jo(e,t,n){return t=Ne(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function qf(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Lo(0),this.expirationTimes=Lo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Lo(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Oi(e,t,n,r,o,l,a,s,u){return e=new qf(e,t,n,s,u),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Ne(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ki(l),e}function Wf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Dt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function sc(e){if(!e)return mt;e=e._reactInternals;e:{if(Lt(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(he(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(he(n))return su(e,n,t)}return t}function uc(e,t,n,r,o,l,a,s,u){return e=Oi(n,r,!0,e,o,l,a,s,u),e.context=sc(null),n=e.current,r=ue(),o=dt(n),l=We(r,o),l.callback=t??null,ut(n,l,o),e.current.lanes=o,Jn(e,o,r),ge(e,r),e}function ko(e,t,n,r){var o=t.current,l=ue(),a=dt(o);return n=sc(n),t.context===null?t.context=n:t.pendingContext=n,t=We(l,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ut(o,t,a),e!==null&&(Re(e,o,a,l),Mr(e,o,a)),a}function io(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ga(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Fi(e,t){Ga(e,t),(e=e.alternate)&&Ga(e,t)}function Qf(){return null}var cc=typeof reportError=="function"?reportError:function(e){console.error(e)};function $i(e){this._internalRoot=e}bo.prototype.render=$i.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));ko(e,t,null,null)};bo.prototype.unmount=$i.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;_t(function(){ko(null,e,null,null)}),t[Ye]=null}};function bo(e){this._internalRoot=e}bo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Us();e={blockedOn:null,target:e,priority:t};for(var n=0;n<tt.length&&t!==0&&t<tt[n].priority;n++);tt.splice(n,0,e),n===0&&Vs(e)}};function Ui(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function jo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Xa(){}function Yf(e,t,n,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var d=io(a);l.call(d)}}var a=uc(t,r,e,0,null,!1,!1,"",Xa);return e._reactRootContainer=a,e[Ye]=a.current,Bn(e.nodeType===8?e.parentNode:e),_t(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var d=io(u);s.call(d)}}var u=Oi(e,0,!1,null,null,!1,!1,"",Xa);return e._reactRootContainer=u,e[Ye]=u.current,Bn(e.nodeType===8?e.parentNode:e),_t(function(){ko(t,u,n,r)}),u}function So(e,t,n,r,o){var l=n._reactRootContainer;if(l){var a=l;if(typeof o=="function"){var s=o;o=function(){var u=io(a);s.call(u)}}ko(t,a,e,o)}else a=Yf(n,t,e,o,r);return io(a)}Fs=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=jn(t.pendingLanes);n!==0&&(ii(t,n|1),ge(t,Y()),!(D&6)&&(an=Y()+500,vt()))}break;case 13:_t(function(){var r=Ke(e,1);if(r!==null){var o=ue();Re(r,e,1,o)}}),Fi(e,1)}};ai=function(e){if(e.tag===13){var t=Ke(e,134217728);if(t!==null){var n=ue();Re(t,e,134217728,n)}Fi(e,134217728)}};$s=function(e){if(e.tag===13){var t=dt(e),n=Ke(e,t);if(n!==null){var r=ue();Re(n,e,t,r)}Fi(e,t)}};Us=function(){return I};Bs=function(e,t){var n=I;try{return I=e,t()}finally{I=n}};hl=function(e,t,n){switch(t){case"input":if(sl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=mo(r);if(!o)throw Error(k(90));xs(r),sl(r,o)}}}break;case"textarea":ks(e,n);break;case"select":t=n.value,t!=null&&Yt(e,!!n.multiple,t,!1)}};zs=Ai;Ps=_t;var Kf={usingClientEntryPoint:!1,Events:[tr,Ut,mo,Cs,Es,Ai]},wn={findFiberByHostInstance:bt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Gf={bundleType:wn.bundleType,version:wn.version,rendererPackageName:wn.rendererPackageName,rendererConfig:wn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ts(e),e===null?null:e.stateNode},findFiberByHostInstance:wn.findFiberByHostInstance||Qf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var br=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!br.isDisabled&&br.supportsFiber)try{uo=br.inject(Gf),$e=br}catch{}}ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Kf;ke.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ui(t))throw Error(k(200));return Wf(e,t,null,n)};ke.createRoot=function(e,t){if(!Ui(e))throw Error(k(299));var n=!1,r="",o=cc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Oi(e,1,!1,null,null,n,!1,r,o),e[Ye]=t.current,Bn(e.nodeType===8?e.parentNode:e),new $i(t)};ke.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=Ts(t),e=e===null?null:e.stateNode,e};ke.flushSync=function(e){return _t(e)};ke.hydrate=function(e,t,n){if(!jo(t))throw Error(k(200));return So(null,e,t,!0,n)};ke.hydrateRoot=function(e,t,n){if(!Ui(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,o=!1,l="",a=cc;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=uc(t,null,e,1,n??null,o,!1,l,a),e[Ye]=t.current,Bn(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new bo(t)};ke.render=function(e,t,n){if(!jo(t))throw Error(k(200));return So(null,e,t,!1,n)};ke.unmountComponentAtNode=function(e){if(!jo(e))throw Error(k(40));return e._reactRootContainer?(_t(function(){So(null,null,e,!1,function(){e._reactRootContainer=null,e[Ye]=null})}),!0):!1};ke.unstable_batchedUpdates=Ai;ke.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!jo(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return So(e,t,n,!1,r)};ke.version="18.3.1-next-f1338f8080-20240426";function dc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(dc)}catch(e){console.error(e)}}dc(),ds.exports=ke;var Xf=ds.exports,Za=Xf;tl.createRoot=Za.createRoot,tl.hydrateRoot=Za.hydrateRoot;/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zf=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),fc=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Jf={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ep=L.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:l,iconNode:a,...s},u)=>L.createElement("svg",{ref:u,...Jf,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:fc("lucide",o),...s},[...a.map(([d,v])=>L.createElement(d,v)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=(e,t)=>{const n=L.forwardRef(({className:r,...o},l)=>L.createElement(ep,{ref:l,iconNode:t,className:fc(`lucide-${Zf(e)}`,r),...o}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rr=_("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tp=_("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pc=_("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const np=_("BookCheck",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["path",{d:"m9 9.5 2 2 4-4",key:"1dth82"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rp=_("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const op=_("CalendarCheck",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"m9 16 2 2 4-4",key:"19s6y9"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lp=_("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ip=_("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mc=_("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hc=_("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ap=_("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sp=_("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gc=_("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bi=_("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const up=_("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cp=_("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dp=_("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fp=_("HeartHandshake",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66",key:"4oyue0"}],["path",{d:"m18 15-2-2",key:"60u0ii"}],["path",{d:"m15 18-2-2",key:"6p76be"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pp=_("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mp=_("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hp=_("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gp=_("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vc=_("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yc=_("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vp=_("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yp=_("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xc=_("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xp=_("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wp=_("Navigation",[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ao=_("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kp=_("Quote",[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bp=_("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jp=_("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wc=_("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sp=_("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Np=_("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cp=_("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xn=_("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ep=_("Youtube",[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]]),z={name:"Aaroh Academy",tagline:"Learn Today, Lead Tomorrow",eyebrow:"PREMIER EDUCATIONAL COACHING INSTITUTE",shortBio:"Dedicated to building conceptual clarity, academic discipline, and personal confidence for students from Class 6 through Competitive Exams.",contact:{phone:"+91 98765 43210",phoneTel:"+919876543210",whatsappNumber:"919876543210",whatsappDefaultMessage:"Hello Aaroh Academy, I would like to enquire about your courses and book a free demo class.",email:"admissions@aarohacademy.edu.in",workingHours:"Mon – Sat: 8:00 AM – 8:00 PM | Sun: 9:00 AM – 2:00 PM"},location:{formattedAddress:"Plot 42, Institutional Area, Sector 62, Noida, Uttar Pradesh 201309",googleMapsEmbedUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14010.518606456094!2d77.355152!3d28.625078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce551491b3331%3A0x6d57b44ff9996c56!2sSector%2062%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",directionsUrl:"https://www.google.com/maps/dir/?api=1&destination=Sector+62+Noida+Uttar+Pradesh"},socialLinks:{instagram:"https://instagram.com/aarohacademy",facebook:"https://facebook.com/aarohacademy",youtube:"https://youtube.com/@aarohacademy"},stats:{studentsGuided:{value:2500,suffix:"+",label:"Students Guided",description:"Mentored across middle school, boards, and national entrances."},boardSuccessRate:{value:98.4,suffix:"%",label:"Board Exam Success Rate",description:"Students scoring 85%+ marks in CBSE & State Board exams."},competitiveSelections:{value:450,suffix:"+",label:"Selections in Competitive Exams",description:"Selections in JEE Main/Advanced, NEET-UG, and NTSE/Olympiads."}}};function zp({onEnquireClick:e}){const[t,n]=L.useState(!1),[r,o]=L.useState(!1),l=L.useRef(null),a=L.useRef(null);L.useEffect(()=>{const m=()=>{window.scrollY>30?n(!0):n(!1)};return window.addEventListener("scroll",m,{passive:!0}),()=>window.removeEventListener("scroll",m)},[]),L.useEffect(()=>{if(!r)return;const m=y=>{if(y.key==="Escape"){s();return}if(y.key==="Tab"&&a.current){const g=a.current.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])');if(g.length===0)return;const x=g[0],P=g[g.length-1];y.shiftKey&&document.activeElement===x?(y.preventDefault(),P.focus()):!y.shiftKey&&document.activeElement===P&&(y.preventDefault(),x.focus())}},h=setTimeout(()=>{var g;const y=(g=a.current)==null?void 0:g.querySelector("a, button");y==null||y.focus()},50);return document.body.style.overflow="hidden",window.addEventListener("keydown",m),()=>{document.body.style.overflow="",window.removeEventListener("keydown",m),clearTimeout(h)}},[r]);const s=()=>{o(!1),setTimeout(()=>{var m;(m=l.current)==null||m.focus()},50)},u=[{label:"Home",href:"#home"},{label:"About",href:"#about"},{label:"Courses",href:"#courses"},{label:"Results",href:"#results"},{label:"Gallery",href:"#gallery"},{label:"Contact",href:"#contact"}],d=(m,h)=>{m.preventDefault(),s();const y=document.querySelector(h);y&&y.scrollIntoView({behavior:"smooth"})},v=()=>{if(s(),e)e();else{const m=document.querySelector("#demo-form")||document.querySelector("#home");m==null||m.scrollIntoView({behavior:"smooth"})}};return i.jsxs(i.Fragment,{children:[i.jsx("header",{className:`navbar ${t?"navbar-scrolled":""}`,role:"banner",children:i.jsxs("div",{className:"container navbar-container",children:[i.jsxs("a",{href:"#home",className:"navbar-brand",onClick:m=>d(m,"#home"),"aria-label":`${z.name} Homepage`,children:[i.jsx("img",{src:"/aaroh-academy/images/logo.svg",alt:"Aaroh Academy Emblem",className:"navbar-logo",width:"44",height:"44"}),i.jsxs("div",{className:"brand-text",children:[i.jsx("span",{className:"brand-name",children:z.name}),i.jsx("span",{className:"brand-tagline",children:z.tagline})]})]}),i.jsx("nav",{className:"desktop-nav","aria-label":"Main Navigation",children:i.jsx("ul",{className:"nav-list",children:u.map(m=>i.jsx("li",{children:i.jsx("a",{href:m.href,className:"nav-link",onClick:h=>d(h,m.href),children:m.label})},m.label))})}),i.jsxs("div",{className:"navbar-actions",children:[i.jsxs("a",{href:`tel:${z.contact.phoneTel}`,className:"nav-phone-link","aria-label":`Call us at ${z.contact.phone}`,children:[i.jsx(ao,{className:"phone-icon",size:17,"aria-hidden":"true"}),i.jsx("span",{className:"phone-number",children:z.contact.phone})]}),i.jsx("button",{type:"button",className:"btn btn-primary btn-sm btn-enquire",onClick:v,children:"Enquire Now"}),i.jsx("button",{ref:l,type:"button",className:"mobile-menu-toggle","aria-expanded":r,"aria-controls":"mobile-navigation","aria-label":r?"Close navigation menu":"Open navigation menu",onClick:()=>o(!r),children:r?i.jsx(Xn,{size:26}):i.jsx(yp,{size:26})})]})]})}),r&&i.jsxs("div",{className:"mobile-menu-overlay",role:"dialog","aria-modal":"true","aria-label":"Mobile Navigation Menu",children:[i.jsx("div",{className:"mobile-menu-backdrop",onClick:s}),i.jsxs("div",{id:"mobile-navigation",ref:a,className:"mobile-menu-drawer",children:[i.jsxs("div",{className:"mobile-menu-header",children:[i.jsxs("div",{className:"brand-text",children:[i.jsx("span",{className:"brand-name",children:z.name}),i.jsx("span",{className:"brand-tagline",children:z.tagline})]}),i.jsx("button",{type:"button",className:"mobile-close-btn","aria-label":"Close navigation menu",onClick:s,children:i.jsx(Xn,{size:26})})]}),i.jsx("nav",{className:"mobile-nav-links",children:i.jsx("ul",{children:u.map(m=>i.jsx("li",{children:i.jsx("a",{href:m.href,className:"mobile-nav-link",onClick:h=>d(h,m.href),children:m.label})},m.label))})}),i.jsxs("div",{className:"mobile-menu-footer",children:[i.jsxs("button",{type:"button",className:"btn btn-primary btn-full-width",onClick:v,children:["Enquire Now ",i.jsx(rr,{size:16})]}),i.jsxs("div",{className:"mobile-contact-buttons",children:[i.jsxs("a",{href:`tel:${z.contact.phoneTel}`,className:"btn btn-secondary mobile-contact-btn",children:[i.jsx(ao,{size:18}),i.jsxs("span",{children:["Call ",z.contact.phone]})]}),i.jsxs("a",{href:`https://wa.me/${z.contact.whatsappNumber}?text=${encodeURIComponent(z.contact.whatsappDefaultMessage)}`,target:"_blank",rel:"noopener noreferrer",className:"btn btn-whatsapp mobile-contact-btn",children:[i.jsx(xc,{size:18}),i.jsx("span",{children:"WhatsApp Chat"})]})]})]})]})]}),i.jsx("style",{children:`
        .navbar {
          position: sticky;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          background-color: var(--color-bg-white);
          border-bottom: 1px solid var(--color-border);
          height: var(--navbar-height);
          display: flex;
          align-items: center;
          transition: height 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
        }

        .navbar-scrolled {
          height: var(--navbar-height-scrolled);
          box-shadow: 0 4px 18px rgba(10, 25, 47, 0.08);
          background-color: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(8px);
        }

        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        .navbar-brand {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }

        .navbar-logo {
          width: 44px;
          height: 44px;
          flex-shrink: 0;
          transition: transform 0.2s ease;
        }

        .navbar-brand:hover .navbar-logo {
          transform: scale(1.05);
        }

        .brand-text {
          display: flex;
          flex-direction: column;
        }

        .brand-name {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--color-navy);
          letter-spacing: -0.01em;
          line-height: 1.2;
        }

        .brand-tagline {
          font-size: 0.75rem;
          color: var(--color-text-muted);
          font-weight: 500;
          line-height: 1.2;
        }

        .desktop-nav .nav-list {
          display: flex;
          align-items: center;
          gap: 28px;
          list-style: none;
        }

        .nav-link {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--color-text-secondary);
          position: relative;
          padding: 6px 0;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: var(--color-yellow);
          transition: width 0.2s ease;
        }

        .nav-link:hover {
          color: var(--color-navy);
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .navbar-actions {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .nav-phone-link {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--color-navy);
          padding: 6px 10px;
          border-radius: var(--radius-sm);
          transition: background-color 0.2s ease;
        }

        .nav-phone-link:hover {
          background-color: var(--color-bg-light);
          color: var(--color-yellow-hover);
        }

        .phone-icon {
          color: var(--color-yellow);
        }

        .mobile-menu-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          color: var(--color-navy);
          padding: 8px;
          border-radius: var(--radius-sm);
        }

        /* Mobile Menu Styles */
        @media (max-width: 992px) {
          .desktop-nav,
          .nav-phone-link {
            display: none;
          }

          .mobile-menu-toggle {
            display: inline-flex;
            align-items: center;
            justify-content: center;
          }
        }

        .mobile-menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1100;
          display: flex;
        }

        .mobile-menu-backdrop {
          position: absolute;
          inset: 0;
          background: rgba(10, 25, 47, 0.6);
          backdrop-filter: blur(4px);
        }

        .mobile-menu-drawer {
          position: relative;
          width: 100%;
          max-width: 380px;
          height: 100%;
          background: #ffffff;
          display: flex;
          flex-direction: column;
          box-shadow: 4px 0 24px rgba(0,0,0,0.2);
          z-index: 2;
          overflow-y: auto;
          animation: slideIn 0.25s ease-out;
        }

        @keyframes slideIn {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }

        .mobile-menu-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 24px;
          border-bottom: 1px solid var(--color-border);
        }

        .mobile-close-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          color: var(--color-navy);
        }

        .mobile-nav-links {
          padding: 24px 0;
          flex: 1;
        }

        .mobile-nav-links ul {
          list-style: none;
        }

        .mobile-nav-link {
          display: block;
          padding: 14px 24px;
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--color-navy);
          border-left: 4px solid transparent;
          transition: all 0.2s ease;
        }

        .mobile-nav-link:hover,
        .mobile-nav-link:focus {
          background-color: var(--color-bg-light);
          border-left-color: var(--color-yellow);
          color: var(--color-yellow-hover);
        }

        .mobile-menu-footer {
          padding: 24px;
          border-top: 1px solid var(--color-border);
          display: flex;
          flex-direction: column;
          gap: 12px;
          background-color: var(--color-bg-light);
        }

        .btn-full-width {
          width: 100%;
        }

        .mobile-contact-buttons {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .mobile-contact-btn {
          width: 100%;
          font-size: 0.9rem;
          padding: 10px 14px;
        }

        .btn-whatsapp {
          background-color: #25d366;
          color: #ffffff;
          border: 1px solid #25d366;
        }

        .btn-whatsapp:hover {
          background-color: #1eb954;
          color: #ffffff;
        }
      `})]})}const jr="/aaroh-academy/",kc=[{id:"class-6-8",title:"Class 6–8 Foundation Program",badge:"Middle School Excellence",oneLineDescription:"Builds rock-solid fundamentals in Mathematics, Science, and Logical Reasoning with curiosity-driven learning.",batchTimingSummary:"Batch Timings: Mon, Wed, Fri | 4:30 PM – 6:30 PM (Regular Batch)",eligibility:"Students entering or studying in Classes 6, 7, and 8 (CBSE / ICSE / State Boards)",highlights:["Concept clarity with hands-on problem solving","Mental math & analytical thinking modules","Weekly assessments & monthly parent reviews","Small batch size of max 15 students"],image:`${jr}images/courses/course-class-6-8.svg`},{id:"class-9-10",title:"Class 9–10 Board Mastery",badge:"Board Preparation",oneLineDescription:"Intensive syllabus coverage, rigorous test series, and board exam answer-writing technique refinement.",batchTimingSummary:"Batch Timings: Tue, Thu, Sat | 4:30 PM – 7:30 PM (Evening Batch)",eligibility:"Students preparing for Class 9 and 10 Board Examinations",highlights:["Complete CBSE / ICSE curriculum alignment","Chapter-wise question banks & NCERT deep-dive","Bi-weekly board pattern simulated test series","Dedicated one-on-one doubt resolution clinics"],image:`${jr}images/courses/course-class-9-10.svg`},{id:"class-11-12",title:"Class 11–12 Senior Secondary Academic Program",badge:"Senior Secondary",oneLineDescription:"Comprehensive preparation for Physics, Chemistry, Mathematics, and Biology with synchronized board and entrance prep.",batchTimingSummary:"Batch Timings: Mon to Fri | 3:30 PM – 7:00 PM (Dual Track)",eligibility:"Students pursuing Science Stream (PCM / PCB / PCMB)",highlights:["Synchronized school board + entrance foundation","Advanced problem sheets & derivation workshops","Periodic cumulative mock exams with rank analysis","Personal academic mentor assigned per student"],image:`${jr}images/courses/course-class-11-12.svg`},{id:"competitive-prep",title:"Competitive Exam Preparation (JEE / NEET / Olympiads)",badge:"Entrance & Olympiads",oneLineDescription:"Rigorous test series, speed-accuracy drills, and top-tier mentorship for national competitive entrance exams.",batchTimingSummary:"Batch Timings: Mon to Sat | 9:00 AM – 2:00 PM (Morning Target Batch)",eligibility:"Aspirants aiming for JEE (Main & Advanced), NEET-UG, and National Olympiads",highlights:["National entrance pattern computerized mock tests","Negative marking reduction & time management techniques","Daily Practice Problem (DPP) sets with video solutions","Faculty-led error analysis sessions"],image:`${jr}images/courses/course-competitive.svg`}],Pp="http://localhost:5000",Mp=["Class 6","Class 7","Class 8","Class 9","Class 10","Class 11 (Science / PCM / PCB)","Class 12 (Science / PCM / PCB)","Competitive Exam (JEE / NEET / Olympiads)"];function _p({preselectedCourse:e}){const[t,n]=L.useState({studentName:"",studentClass:"",parentMobile:"",course:""}),[r,o]=L.useState({}),[l,a]=L.useState(!1),[s,u]=L.useState({type:null,message:""});L.useEffect(()=>{e&&n(y=>({...y,course:e}))},[e]);const d=(y,g)=>{switch(y){case"studentName":{const x=g.trim();return x?x.length<2?"Name must be at least 2 characters.":/^[a-zA-Z\s.'-]+$/.test(x)?"":"Only letters, spaces, and hyphens allowed.":"Student name is required."}case"studentClass":return g?"":"Please select a class.";case"parentMobile":{const x=g.replace(/[\s\-\(\)]/g,"");return x?/^[6-9]\d{9}$/.test(x)?"":"Enter a valid 10-digit mobile number starting with 6–9.":"Parent's mobile number is required."}case"course":return g?"":"Please select a course.";default:return""}},v=y=>{const{name:g,value:x}=y.target;n(P=>({...P,[g]:x})),r[g]&&o(P=>({...P,[g]:""})),s.type==="error"&&u({type:null,message:""})},m=y=>{const{name:g,value:x}=y.target,P=d(g,x);P&&o(f=>({...f,[g]:P}))},h=async y=>{y.preventDefault(),u({type:null,message:""});const g={};if(Object.keys(t).forEach(x=>{const P=d(x,t[x]);P&&(g[x]=P)}),Object.keys(g).length>0){o(g),u({type:"error",message:"Please correct the highlighted fields."});return}a(!0);try{const x=`${Pp}/api/enquiries`,P=typeof window<"u"&&window.location.hostname.endsWith("github.io"),f=await fetch(x,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(t)}),c=await f.json().catch(()=>({}));if(f.ok&&c.success)u({type:"success",message:c.message||"Your demo class enquiry has been submitted successfully."}),n({studentName:"",studentClass:"",parentMobile:"",course:""}),o({});else if(P&&f.status===404)u({type:"success",message:"Your demo class enquiry has been received in GitHub Pages live preview! (In full production, this saves directly to MongoDB via the Node.js API)."}),n({studentName:"",studentClass:"",parentMobile:"",course:""}),o({});else{const p=c.message||(f.status===429?"Too many attempts. Please try again after some time.":"Enquiry submission failed. Please check the fields and try again.");u({type:"error",message:p}),c.errors&&typeof c.errors=="object"&&o(c.errors)}}catch(x){console.error("Demo form submission network error:",x),typeof window<"u"&&window.location.hostname.endsWith("github.io"),u({type:"error",message:"Unable to reach the enquiry server. Please check your internet connection or call Aaroh Academy directly."})}finally{a(!1)}};return i.jsxs("div",{className:"demo-form-card",id:"demo-form",children:[i.jsxs("div",{className:"demo-form-header",children:[i.jsxs("div",{className:"demo-header-badge",children:[i.jsx(bp,{size:14,className:"badge-icon"}),i.jsx("span",{children:"Complimentary Session"})]}),i.jsx("h3",{className:"demo-form-title",children:"Book a Free Demo Class"}),i.jsx("p",{className:"demo-form-desc",children:"Experience our interactive classrooms and meet expert faculty with zero commitment."})]}),s.type==="success"&&i.jsxs("div",{className:"form-alert form-alert-success",role:"alert","aria-live":"polite",children:[i.jsx(gc,{size:20,className:"alert-icon"}),i.jsxs("div",{children:[i.jsx("strong",{children:"Enquiry Received!"}),i.jsx("p",{children:s.message})]})]}),s.type==="error"&&i.jsxs("div",{className:"form-alert form-alert-error",role:"alert","aria-live":"assertive",children:[i.jsx(ap,{size:20,className:"alert-icon"}),i.jsxs("div",{children:[i.jsx("strong",{children:"Submission Notice"}),i.jsx("p",{children:s.message})]})]}),i.jsxs("form",{onSubmit:h,noValidate:!0,className:"demo-form-body",children:[i.jsxs("div",{className:"form-group",children:[i.jsxs("label",{htmlFor:"studentName",className:"form-label",children:["Student Name ",i.jsx("span",{className:"req",children:"*"})]}),i.jsx("input",{type:"text",id:"studentName",name:"studentName",value:t.studentName,onChange:v,onBlur:m,disabled:l,placeholder:"e.g. Aarav Singhal",className:`form-input ${r.studentName?"input-error":""}`,"aria-invalid":!!r.studentName,"aria-describedby":r.studentName?"studentName-error":void 0,required:!0}),r.studentName&&i.jsx("p",{id:"studentName-error",className:"error-text",children:r.studentName})]}),i.jsxs("div",{className:"form-group",children:[i.jsxs("label",{htmlFor:"studentClass",className:"form-label",children:["Class ",i.jsx("span",{className:"req",children:"*"})]}),i.jsxs("select",{id:"studentClass",name:"studentClass",value:t.studentClass,onChange:v,onBlur:m,disabled:l,className:`form-select ${r.studentClass?"input-error":""}`,"aria-invalid":!!r.studentClass,"aria-describedby":r.studentClass?"studentClass-error":void 0,required:!0,children:[i.jsx("option",{value:"",children:"Select Student's Current Class"}),Mp.map(y=>i.jsx("option",{value:y,children:y},y))]}),r.studentClass&&i.jsx("p",{id:"studentClass-error",className:"error-text",children:r.studentClass})]}),i.jsxs("div",{className:"form-group",children:[i.jsxs("label",{htmlFor:"parentMobile",className:"form-label",children:["Parent's Mobile Number ",i.jsx("span",{className:"req",children:"*"})]}),i.jsxs("div",{className:"phone-input-wrapper",children:[i.jsx("span",{className:"phone-prefix",children:"+91"}),i.jsx("input",{type:"tel",id:"parentMobile",name:"parentMobile",value:t.parentMobile,onChange:v,onBlur:m,disabled:l,maxLength:10,placeholder:"9876543210",className:`form-input phone-input ${r.parentMobile?"input-error":""}`,"aria-invalid":!!r.parentMobile,"aria-describedby":r.parentMobile?"parentMobile-error":void 0,required:!0})]}),r.parentMobile&&i.jsx("p",{id:"parentMobile-error",className:"error-text",children:r.parentMobile})]}),i.jsxs("div",{className:"form-group",children:[i.jsxs("label",{htmlFor:"course",className:"form-label",children:["Course Interested In ",i.jsx("span",{className:"req",children:"*"})]}),i.jsxs("select",{id:"course",name:"course",value:t.course,onChange:v,onBlur:m,disabled:l,className:`form-select ${r.course?"input-error":""}`,"aria-invalid":!!r.course,"aria-describedby":r.course?"course-error":void 0,required:!0,children:[i.jsx("option",{value:"",children:"Select Desired Course Program"}),kc.map(y=>i.jsx("option",{value:y.title,children:y.title},y.id))]}),r.course&&i.jsx("p",{id:"course-error",className:"error-text",children:r.course})]}),i.jsx("button",{type:"submit",className:"btn btn-primary btn-submit-demo",disabled:l,children:l?i.jsxs(i.Fragment,{children:[i.jsx(hp,{size:18,className:"spinner"}),i.jsx("span",{children:"Processing Demo Booking..."})]}):i.jsx("span",{children:"Book My Free Demo"})}),i.jsxs("div",{className:"form-privacy-notice",children:[i.jsx(gp,{size:12,className:"lock-icon"}),i.jsx("span",{children:"We respect your privacy. No spam. Contacted only for demo confirmation."})]})]}),i.jsx("style",{children:`
        .demo-form-card {
          background: #ffffff;
          border-radius: var(--radius-xl);
          padding: 32px;
          box-shadow: 0 12px 36px rgba(10, 25, 47, 0.12);
          border: 1px solid var(--color-border);
          position: relative;
        }

        @media (max-width: 576px) {
          .demo-form-card {
            padding: 22px 18px;
            border-radius: var(--radius-lg);
          }
        }

        .demo-form-header {
          margin-bottom: 20px;
        }

        .demo-header-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-navy);
          background-color: var(--color-yellow-light);
          padding: 4px 10px;
          border-radius: var(--radius-full);
          margin-bottom: 8px;
          border: 1px solid var(--color-yellow-border);
        }

        .badge-icon {
          color: var(--color-yellow-hover);
        }

        .demo-form-title {
          font-size: 1.45rem;
          color: var(--color-navy);
          margin-bottom: 6px;
        }

        .demo-form-desc {
          font-size: 0.88rem;
          color: var(--color-text-muted);
          line-height: 1.45;
        }

        .form-alert {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 12px 14px;
          border-radius: var(--radius-md);
          margin-bottom: 18px;
          font-size: 0.85rem;
        }

        .form-alert-success {
          background-color: var(--color-success-bg);
          border: 1px solid #a7f3d0;
          color: #065f46;
        }

        .form-alert-error {
          background-color: var(--color-error-bg);
          border: 1px solid #fecaca;
          color: #991b1b;
        }

        .alert-icon {
          flex-shrink: 0;
          margin-top: 1px;
        }

        .demo-form-body {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-label {
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--color-navy);
        }

        .req {
          color: var(--color-error);
        }

        .form-input,
        .form-select {
          width: 100%;
          padding: 11px 14px;
          font-size: 0.92rem;
          color: var(--color-text-primary);
          background-color: #f8fafc;
          border: 1.5px solid var(--color-border);
          border-radius: var(--radius-md);
          transition: border-color 0.2s, background-color 0.2s, box-shadow 0.2s;
        }

        .form-input:focus,
        .form-select:focus {
          background-color: #ffffff;
          border-color: var(--color-navy);
          outline: none;
          box-shadow: 0 0 0 3px rgba(10, 25, 47, 0.1);
        }

        .phone-input-wrapper {
          display: flex;
          align-items: stretch;
          border-radius: var(--radius-md);
          overflow: hidden;
        }

        .phone-prefix {
          display: flex;
          align-items: center;
          padding: 0 12px;
          background-color: #e2e8f0;
          color: var(--color-text-secondary);
          font-weight: 600;
          font-size: 0.9rem;
          border: 1.5px solid var(--color-border);
          border-right: none;
          border-top-left-radius: var(--radius-md);
          border-bottom-left-radius: var(--radius-md);
        }

        .phone-input {
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
        }

        .input-error {
          border-color: var(--color-error) !important;
          background-color: #fffafb;
        }

        .error-text {
          font-size: 0.78rem;
          color: var(--color-error);
          font-weight: 500;
        }

        .btn-submit-demo {
          width: 100%;
          padding: 13px;
          font-size: 1rem;
          margin-top: 4px;
        }

        .spinner {
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .form-privacy-notice {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          font-size: 0.75rem;
          color: var(--color-text-muted);
          text-align: center;
          margin-top: 6px;
        }

        .lock-icon {
          flex-shrink: 0;
        }
      `})]})}function Tp({preselectedCourse:e}){const t=[{label:"Experienced Faculty",icon:pc},{label:"Small Batch Size",icon:Cp},{label:"Regular Progress Updates",icon:wc}];return i.jsxs("section",{className:"hero-section",id:"home","aria-label":"Hero Introduction",children:[i.jsxs("div",{className:"container hero-container",children:[i.jsxs("div",{className:"hero-left-column",children:[i.jsxs("div",{className:"hero-eyebrow",children:[i.jsx("span",{className:"eyebrow-dot"}),i.jsx("span",{children:z.eyebrow})]}),i.jsxs("h1",{className:"hero-title",children:["Stronger Foundation, Brighter ",i.jsx("span",{className:"text-highlight",children:"Future"})]}),i.jsx("p",{className:"hero-description",children:"Empowering students from Class 6 to 12 and competitive entrance aspirants with quality teaching, deep conceptual understanding, individual attention, and continuous academic growth."}),i.jsx("div",{className:"trust-chips-list","aria-label":"Key Academy Strengths",children:t.map((n,r)=>{const o=n.icon;return i.jsxs("div",{className:"trust-chip",children:[i.jsx("div",{className:"chip-icon-box",children:i.jsx(o,{size:16})}),i.jsx("span",{className:"chip-label",children:n.label})]},r)})}),i.jsxs("div",{className:"hero-image-wrapper",children:[i.jsx("img",{src:"/aaroh-academy/images/hero-illustration.svg",alt:"Students mastering concepts and formulas in modern smart classroom at Aaroh Academy",className:"hero-image",width:"600",height:"400",loading:"eager"}),i.jsxs("div",{className:"hero-floating-stat",children:[i.jsx(sp,{size:18,className:"stat-check-icon"}),i.jsxs("div",{children:[i.jsx("strong",{children:"Admissions Open 2026–27"}),i.jsx("span",{children:"Limited seats per batch for personal focus"})]})]})]})]}),i.jsx("div",{className:"hero-right-column",children:i.jsx(_p,{preselectedCourse:e})})]}),i.jsx("style",{children:`
        .hero-section {
          background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
          padding-top: 48px;
          padding-bottom: 72px;
          border-bottom: 1px solid var(--color-border);
          position: relative;
          overflow: hidden;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1.15fr 0.95fr;
          gap: 48px;
          align-items: start;
        }

        @media (max-width: 992px) {
          .hero-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .hero-section {
            padding-top: 36px;
            padding-bottom: 56px;
          }
        }

        .hero-left-column {
          display: flex;
          flex-direction: column;
        }

        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--color-navy);
          background-color: var(--color-bg-alt);
          padding: 6px 14px;
          border-radius: var(--radius-full);
          margin-bottom: 18px;
          border: 1px solid var(--color-border);
          align-self: flex-start;
        }

        .eyebrow-dot {
          width: 8px;
          height: 8px;
          background-color: var(--color-yellow);
          border-radius: 50%;
          display: inline-block;
        }

        .hero-title {
          font-size: clamp(2.3rem, 4.2vw, 3.4rem);
          line-height: 1.15;
          margin-bottom: 18px;
          letter-spacing: -0.02em;
        }

        .hero-title .text-highlight {
          color: var(--color-yellow);
          position: relative;
          display: inline-block;
        }

        .hero-description {
          font-size: 1.1rem;
          line-height: 1.65;
          color: var(--color-text-secondary);
          margin-bottom: 24px;
          max-width: 600px;
        }

        .trust-chips-list {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 32px;
        }

        .trust-chip {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #ffffff;
          padding: 8px 14px;
          border-radius: var(--radius-full);
          border: 1px solid var(--color-border);
          box-shadow: 0 2px 6px rgba(10, 25, 47, 0.04);
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--color-navy);
        }

        .chip-icon-box {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background-color: var(--color-yellow-light);
          color: var(--color-yellow-hover);
        }

        .hero-image-wrapper {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-md);
          border: 1px solid var(--color-border);
          background: #ffffff;
          margin-top: 10px;
        }

        .hero-image {
          width: 100%;
          height: auto;
          display: block;
        }

        .hero-floating-stat {
          position: absolute;
          bottom: 14px;
          left: 14px;
          right: 14px;
          background: rgba(10, 25, 47, 0.92);
          backdrop-filter: blur(6px);
          color: #ffffff;
          padding: 12px 16px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(245, 158, 11, 0.3);
        }

        .stat-check-icon {
          color: var(--color-yellow);
          flex-shrink: 0;
        }

        .hero-floating-stat strong {
          display: block;
          font-size: 0.88rem;
          color: #ffffff;
        }

        .hero-floating-stat span {
          display: block;
          font-size: 0.76rem;
          color: #cbd5e1;
        }

        .hero-right-column {
          position: sticky;
          top: calc(var(--navbar-height-scrolled) + 20px);
        }

        @media (max-width: 992px) {
          .hero-right-column {
            position: static;
          }
        }
      `})]})}function Lp({onSelectCourseForDemo:e}){const[t,n]=L.useState(null),r=l=>{n(l)},o=l=>{n(null),e&&e(l)};return i.jsxs("section",{className:"section section-light courses-section",id:"courses","aria-labelledby":"courses-heading",children:[i.jsxs("div",{className:"container",children:[i.jsxs("div",{className:"section-header",children:[i.jsx("span",{className:"section-eyebrow",children:"Academic Programs"}),i.jsx("h2",{id:"courses-heading",className:"section-title",children:"Choose Your Learning Path"}),i.jsx("p",{className:"section-subtitle",children:"Structured, curriculum-aligned academic courses meticulously crafted to build foundational mastery, score high in board examinations, and excel in competitive entrance tests."})]}),i.jsx("div",{className:"courses-grid",children:kc.map(l=>i.jsx(Ap,{course:l,onKnowMore:()=>r(l),onBookDemo:()=>o(l.title)},l.id))})]}),t&&i.jsxs("div",{className:"course-modal-overlay",role:"dialog","aria-modal":"true","aria-labelledby":"modal-course-title",children:[i.jsx("div",{className:"modal-backdrop",onClick:()=>n(null)}),i.jsxs("div",{className:"course-modal-content",children:[i.jsx("button",{type:"button",className:"modal-close-btn",onClick:()=>n(null),"aria-label":"Close course details",children:i.jsx(Xn,{size:22})}),i.jsx("div",{className:"modal-badge",children:t.badge}),i.jsx("h3",{id:"modal-course-title",className:"modal-title",children:t.title}),i.jsx("p",{className:"modal-desc",children:t.oneLineDescription}),i.jsxs("div",{className:"modal-meta-box",children:[i.jsxs("div",{className:"meta-item",children:[i.jsx(Bi,{size:16,className:"meta-icon"}),i.jsx("span",{children:t.batchTimingSummary})]}),i.jsxs("div",{className:"meta-item",children:[i.jsx(rp,{size:16,className:"meta-icon"}),i.jsxs("span",{children:[i.jsx("strong",{children:"Target:"})," ",t.eligibility]})]})]}),i.jsxs("div",{className:"modal-highlights",children:[i.jsx("h4",{children:"Program Highlights & Syllabus Features:"}),i.jsx("ul",{children:t.highlights.map((l,a)=>i.jsxs("li",{children:[i.jsx(lp,{size:16,className:"check-icon"}),i.jsx("span",{children:l})]},a))})]}),i.jsx("div",{className:"modal-actions",children:i.jsxs("button",{type:"button",className:"btn btn-primary btn-full-width",onClick:()=>o(t.title),children:[i.jsx("span",{children:"Book Free Demo for this Course"}),i.jsx(rr,{size:16})]})})]})]}),i.jsx("style",{children:`
        .courses-section {
          background-color: var(--color-bg-white);
          position: relative;
        }

        .courses-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        @media (max-width: 1100px) {
          .courses-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .courses-grid {
            grid-template-columns: 1fr;
          }
        }

        /* Course Card Component Styles */
        .course-card {
          background: #ffffff;
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 12px rgba(10, 25, 47, 0.04);
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
          height: 100%;
        }

        .course-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 32px rgba(10, 25, 47, 0.1);
          border-color: var(--color-yellow);
        }

        .course-image-holder {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          background: #0a192f;
          overflow: hidden;
        }

        .course-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .course-card:hover .course-image {
          transform: scale(1.04);
        }

        .course-badge {
          position: absolute;
          top: 12px;
          right: 12px;
          background: rgba(10, 25, 47, 0.88);
          color: var(--color-yellow);
          font-size: 0.72rem;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: var(--radius-full);
          border: 1px solid rgba(245, 158, 11, 0.4);
        }

        .course-card-content {
          padding: 22px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .course-title {
          font-size: 1.18rem;
          color: var(--color-navy);
          margin-bottom: 10px;
          line-height: 1.35;
        }

        .course-desc {
          font-size: 0.9rem;
          color: var(--color-text-secondary);
          line-height: 1.5;
          margin-bottom: 18px;
          flex: 1;
        }

        .course-timing-box {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          background: var(--color-bg-light);
          padding: 10px 12px;
          border-radius: var(--radius-sm);
          border: 1px solid var(--color-border);
          font-size: 0.8rem;
          color: var(--color-navy);
          font-weight: 500;
          margin-bottom: 18px;
        }

        .timing-icon {
          color: var(--color-yellow-hover);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .course-card-actions {
          display: flex;
          gap: 10px;
          margin-top: auto;
        }

        .btn-know-more {
          flex: 1;
          background-color: transparent;
          border: 1.5px solid var(--color-navy);
          color: var(--color-navy);
          padding: 10px 14px;
          font-size: 0.88rem;
          font-weight: 600;
          border-radius: var(--radius-md);
        }

        .btn-know-more:hover {
          background-color: var(--color-navy);
          color: #ffffff;
        }

        /* Modal Styles */
        .course-modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 1200;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .modal-backdrop {
          position: absolute;
          inset: 0;
          background: rgba(10, 25, 47, 0.65);
          backdrop-filter: blur(4px);
        }

        .course-modal-content {
          position: relative;
          background: #ffffff;
          border-radius: var(--radius-xl);
          max-width: 580px;
          width: 100%;
          padding: 32px;
          z-index: 2;
          box-shadow: 0 20px 40px rgba(0,0,0,0.25);
          animation: modalPop 0.25s ease-out;
        }

        @keyframes modalPop {
          from {
            opacity: 0;
            transform: scale(0.94);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .modal-close-btn {
          position: absolute;
          top: 18px;
          right: 18px;
          background: none;
          border: none;
          cursor: pointer;
          color: var(--color-text-muted);
          padding: 6px;
          border-radius: 50%;
          transition: background-color 0.2s;
        }

        .modal-close-btn:hover {
          background-color: var(--color-bg-light);
          color: var(--color-navy);
        }

        .modal-badge {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--color-yellow-hover);
          background-color: var(--color-yellow-light);
          padding: 4px 12px;
          border-radius: var(--radius-full);
          margin-bottom: 12px;
        }

        .modal-title {
          font-size: 1.45rem;
          color: var(--color-navy);
          margin-bottom: 10px;
        }

        .modal-desc {
          font-size: 0.95rem;
          color: var(--color-text-secondary);
          line-height: 1.6;
          margin-bottom: 18px;
        }

        .modal-meta-box {
          background: var(--color-bg-light);
          border-radius: var(--radius-md);
          padding: 14px;
          border: 1px solid var(--color-border);
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 20px;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.88rem;
          color: var(--color-navy);
        }

        .meta-icon {
          color: var(--color-yellow-hover);
          flex-shrink: 0;
        }

        .modal-highlights h4 {
          font-size: 0.95rem;
          color: var(--color-navy);
          margin-bottom: 10px;
        }

        .modal-highlights ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 24px;
        }

        .modal-highlights li {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 0.88rem;
          color: var(--color-text-secondary);
        }

        .check-icon {
          color: var(--color-success);
          flex-shrink: 0;
          margin-top: 3px;
        }
      `})]})}function Ap({course:e,onKnowMore:t,onBookDemo:n}){return i.jsxs("article",{className:"course-card",children:[i.jsxs("div",{className:"course-image-holder",children:[i.jsx("img",{src:e.image,alt:`Curriculum illustration for ${e.title}`,className:"course-image",loading:"lazy"}),i.jsx("span",{className:"course-badge",children:e.badge})]}),i.jsxs("div",{className:"course-card-content",children:[i.jsx("h3",{className:"course-title",children:e.title}),i.jsx("p",{className:"course-desc",children:e.oneLineDescription}),i.jsxs("div",{className:"course-timing-box",children:[i.jsx(Bi,{size:16,className:"timing-icon","aria-hidden":"true"}),i.jsx("span",{children:e.batchTimingSummary})]}),i.jsx("div",{className:"course-card-actions",children:i.jsx("button",{type:"button",className:"btn btn-know-more",onClick:t,"aria-label":`Know more about ${e.title}`,children:"Know More"})})]})]})}function Rp(){const[e,t]=L.useState(!1),[n,r]=L.useState({students:0,boardRate:0,selections:0}),[o,l]=L.useState(!1),a=L.useRef(null),s={students:z.stats.studentsGuided.value,boardRate:z.stats.boardSuccessRate.value,selections:z.stats.competitiveSelections.value};return L.useEffect(()=>{const u=new IntersectionObserver(d=>{const[v]=d;if(v.isIntersecting&&!e){if(t(!0),window.matchMedia("(prefers-reduced-motion: reduce)").matches){r({students:s.students,boardRate:s.boardRate,selections:s.selections});return}const h=1800,y=performance.now(),g=x=>{const P=x-y,f=Math.min(P/h,1),c=1-Math.pow(1-f,3);r({students:Math.floor(c*s.students),boardRate:parseFloat((c*s.boardRate).toFixed(1)),selections:Math.floor(c*s.selections)}),f<1?requestAnimationFrame(g):r({students:s.students,boardRate:s.boardRate,selections:s.selections})};requestAnimationFrame(g)}},{threshold:.25});return a.current&&u.observe(a.current),()=>u.disconnect()},[e]),i.jsxs("section",{ref:a,className:"section-navy results-section",id:"results","aria-labelledby":"results-heading",children:[i.jsxs("div",{className:"container results-container",children:[i.jsxs("div",{className:"results-left",children:[i.jsx("span",{className:"section-eyebrow",children:"Academic Milestones"}),i.jsx("h2",{id:"results-heading",className:"results-title",children:"Consistent Excellence & Verified Achievements"}),i.jsx("p",{className:"results-subtitle",children:"Our systematic concept-first pedagogy translates into dependable academic scores, strong board percentages, and remarkable competitive selections year after year."}),i.jsxs("button",{type:"button",className:"btn btn-primary btn-know-all-results",onClick:()=>l(!0),"aria-haspopup":"dialog",children:[i.jsx("span",{children:"Know All Results"}),i.jsx(rr,{size:17})]})]}),i.jsxs("div",{className:"results-right",children:[i.jsxs("div",{className:"stat-card",children:[i.jsx("div",{className:"stat-icon-wrapper",children:i.jsx(pc,{size:24,className:"stat-icon"})}),i.jsxs("div",{className:"stat-number",children:[n.students.toLocaleString(),i.jsx("span",{className:"stat-suffix",children:z.stats.studentsGuided.suffix})]}),i.jsx("h3",{className:"stat-label",children:z.stats.studentsGuided.label}),i.jsx("p",{className:"stat-desc",children:z.stats.studentsGuided.description})]}),i.jsxs("div",{className:"stat-card",children:[i.jsx("div",{className:"stat-icon-wrapper",children:i.jsx(wc,{size:24,className:"stat-icon"})}),i.jsxs("div",{className:"stat-number",children:[n.boardRate.toFixed(1),i.jsx("span",{className:"stat-suffix",children:z.stats.boardSuccessRate.suffix})]}),i.jsx("h3",{className:"stat-label",children:z.stats.boardSuccessRate.label}),i.jsx("p",{className:"stat-desc",children:z.stats.boardSuccessRate.description})]}),i.jsxs("div",{className:"stat-card",children:[i.jsx("div",{className:"stat-icon-wrapper",children:i.jsx(Sp,{size:24,className:"stat-icon"})}),i.jsxs("div",{className:"stat-number",children:[n.selections.toLocaleString(),i.jsx("span",{className:"stat-suffix",children:z.stats.competitiveSelections.suffix})]}),i.jsx("h3",{className:"stat-label",children:z.stats.competitiveSelections.label}),i.jsx("p",{className:"stat-desc",children:z.stats.competitiveSelections.description})]})]})]}),o&&i.jsxs("div",{className:"results-modal-overlay",role:"dialog","aria-modal":"true","aria-labelledby":"results-modal-title",children:[i.jsx("div",{className:"modal-backdrop",onClick:()=>l(!1)}),i.jsxs("div",{className:"results-modal-card",children:[i.jsx("button",{type:"button",className:"modal-close-btn",onClick:()=>l(!1),"aria-label":"Close results summary",children:i.jsx(Xn,{size:22})}),i.jsx("span",{className:"modal-badge",children:"Verified Performance Record"}),i.jsx("h3",{id:"results-modal-title",className:"results-modal-title",children:"Aaroh Academy Academic Achievements"}),i.jsx("p",{className:"results-modal-desc",children:"All results are audited and verified through student scorecards and board examination roll records."}),i.jsx("div",{className:"results-table-wrapper",children:i.jsxs("table",{className:"results-table",children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{children:"Academic Category"}),i.jsx("th",{children:"Students Enrolled"}),i.jsx("th",{children:"Distinction Rate (85%+)"}),i.jsx("th",{children:"Top Highlights"})]})}),i.jsxs("tbody",{children:[i.jsxs("tr",{children:[i.jsx("td",{children:i.jsx("strong",{children:"Class 10 CBSE / ICSE"})}),i.jsx("td",{children:"380+"}),i.jsx("td",{children:"98.4%"}),i.jsx("td",{children:"14 Students scored 98%+ aggregate"})]}),i.jsxs("tr",{children:[i.jsx("td",{children:i.jsx("strong",{children:"Class 12 Boards (Science)"})}),i.jsx("td",{children:"320+"}),i.jsx("td",{children:"96.2%"}),i.jsx("td",{children:"School toppers in Physics & Chemistry"})]}),i.jsxs("tr",{children:[i.jsx("td",{children:i.jsx("strong",{children:"JEE Main & Advanced"})}),i.jsx("td",{children:"185+"}),i.jsx("td",{children:"Qualified 82%"}),i.jsx("td",{children:"Highest percentile: 99.64"})]}),i.jsxs("tr",{children:[i.jsx("td",{children:i.jsx("strong",{children:"NEET-UG Medical"})}),i.jsx("td",{children:"140+"}),i.jsx("td",{children:"Government College Selection 74%"}),i.jsx("td",{children:"Top score: 685/720"})]})]})]})}),i.jsxs("div",{className:"modal-footer-note",children:[i.jsx(gc,{size:16,className:"check-icon"}),i.jsx("span",{children:"Full merit list with roll numbers and marksheets is available at our admissions office."})]})]})]}),i.jsx("style",{children:`
        .results-section {
          background-color: var(--color-navy);
          padding: 80px 0;
          position: relative;
          overflow: hidden;
        }

        .results-container {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 56px;
          align-items: center;
        }

        @media (max-width: 992px) {
          .results-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .results-section {
            padding: 56px 0;
          }
        }

        .results-left {
          display: flex;
          flex-direction: column;
        }

        .results-title {
          font-size: clamp(2rem, 3.2vw, 2.7rem);
          color: #ffffff;
          line-height: 1.2;
          margin-bottom: 16px;
        }

        .results-subtitle {
          font-size: 1.05rem;
          color: #cbd5e1;
          line-height: 1.65;
          margin-bottom: 28px;
        }

        .btn-know-all-results {
          align-self: flex-start;
          padding: 12px 24px;
        }

        .results-right {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        @media (max-width: 640px) {
          .results-right {
            grid-template-columns: 1fr;
            gap: 16px;
          }
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: var(--radius-lg);
          padding: 24px 20px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          transition: transform 0.25s ease, background-color 0.25s ease, border-color 0.25s ease;
        }

        .stat-card:hover {
          transform: translateY(-4px);
          background: rgba(255, 255, 255, 0.08);
          border-color: var(--color-yellow);
        }

        .stat-icon-wrapper {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          background: rgba(245, 158, 11, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }

        .stat-icon {
          color: var(--color-yellow);
        }

        .stat-number {
          font-family: var(--font-heading);
          font-size: clamp(1.8rem, 2.8vw, 2.4rem);
          font-weight: 800;
          color: #ffffff;
          line-height: 1.1;
          margin-bottom: 6px;
          display: flex;
          align-items: baseline;
        }

        .stat-suffix {
          color: var(--color-yellow);
          font-size: 1.6rem;
          margin-left: 2px;
        }

        .stat-label {
          font-size: 0.95rem;
          font-weight: 600;
          color: #f1f5f9;
          margin-bottom: 6px;
        }

        .stat-desc {
          font-size: 0.78rem;
          color: #94a3b8;
          line-height: 1.4;
        }

        /* Modal */
        .results-modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 1200;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .results-modal-card {
          position: relative;
          background: #ffffff;
          color: var(--color-navy);
          border-radius: var(--radius-xl);
          max-width: 720px;
          width: 100%;
          padding: 32px;
          z-index: 2;
          box-shadow: 0 24px 48px rgba(0,0,0,0.3);
          max-height: 90vh;
          overflow-y: auto;
          animation: modalPop 0.25s ease-out;
        }

        .results-modal-title {
          font-size: 1.5rem;
          color: var(--color-navy);
          margin-bottom: 6px;
        }

        .results-modal-desc {
          font-size: 0.9rem;
          color: var(--color-text-muted);
          margin-bottom: 20px;
        }

        .results-table-wrapper {
          overflow-x: auto;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          margin-bottom: 16px;
        }

        .results-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
          font-size: 0.88rem;
        }

        .results-table th {
          background-color: var(--color-bg-alt);
          color: var(--color-navy);
          padding: 12px 14px;
          font-weight: 700;
          border-bottom: 1px solid var(--color-border);
        }

        .results-table td {
          padding: 12px 14px;
          border-bottom: 1px solid var(--color-border);
          color: var(--color-text-secondary);
        }

        .results-table tr:last-child td {
          border-bottom: none;
        }

        .modal-footer-note {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.8rem;
          color: var(--color-text-muted);
        }
      `})]})}const Sr="/aaroh-academy/",Dp=[{id:"fac-1",name:"Er. Alok Sharma",qualification:"M.Tech, IIT Delhi (Ex-Visiting Faculty)",subject:"Senior Physics Faculty & Academic Director",experienceYears:"14+ Years Experience",bio:"Specialist in Mechanics, Electrodynamics, and problem decomposition for JEE Advanced and Boards.",image:`${Sr}images/faculty/faculty-alok-sharma.svg`,speciality:"Conceptual Physics & Olympiad Training"},{id:"fac-2",name:"Dr. Sunita Mehra",qualification:"Ph.D. in Organic Chemistry",subject:"Senior Chemistry Faculty",experienceYears:"12+ Years Experience",bio:"Known for demystifying organic reaction mechanisms and visual physical chemistry approaches.",image:`${Sr}images/faculty/faculty-sunita-mehra.svg`,speciality:"Organic & Inorganic Chemistry"},{id:"fac-3",name:"Prof. Rajesh Verma",qualification:"M.Sc. Mathematics, Gold Medalist",subject:"Senior Mathematics Faculty",experienceYears:"15+ Years Experience",bio:"Pioneer of step-by-step calculus mastery, trigonometry simplification, and competitive algebra.",image:`${Sr}images/faculty/faculty-rajesh-verma.svg`,speciality:"Calculus, Vectors & Algebra"},{id:"fac-4",name:"Dr. Neha Kapoor",qualification:"MBBS / M.Sc. Life Sciences",subject:"Senior Biology Faculty",experienceYears:"10+ Years Experience",bio:"Focuses on NCERT line-by-line synthesis, diagrams, mnemonics, and high-yield NEET biology prep.",image:`${Sr}images/faculty/faculty-neha-kapoor.svg`,speciality:"Cell Biology, Genetics & Human Physiology"}];function Ip({onEnquiryClick:e}){return i.jsxs("section",{className:"section section-alt faculty-section",id:"about","aria-labelledby":"faculty-heading",children:[i.jsxs("div",{className:"container faculty-container",children:[i.jsxs("div",{className:"faculty-left",children:[i.jsx("span",{className:"section-eyebrow",children:"Academic Mentors"}),i.jsx("h2",{id:"faculty-heading",className:"faculty-title",children:"Learn from Proven Mentors & Subject Specialists"}),i.jsx("p",{className:"faculty-desc",children:"At Aaroh Academy, our faculty members are not just tutors—they are passionate subject experts and mentors who have spent over a decade guiding students to board tops and competitive ranks."}),i.jsx("p",{className:"faculty-subdesc",children:"Every faculty member is dedicated to personal doubt clearance, conceptual breakdown of difficult topics, and fostering a disciplined yet highly supportive academic environment."}),i.jsxs("div",{className:"faculty-cta-box",children:[i.jsx("div",{className:"cta-icon-holder",children:i.jsx(np,{size:22,className:"cta-icon"})}),i.jsxs("div",{className:"cta-content",children:[i.jsx("h4",{children:"Meet Our Faculty in Person"}),i.jsx("p",{children:"Attend an interactive demo session and discuss your academic goals."}),i.jsxs("button",{type:"button",className:"btn btn-secondary btn-sm faculty-cta-btn",onClick:e,children:[i.jsx("span",{children:"Schedule a Faculty Interaction"}),i.jsx(rr,{size:15})]})]})]})]}),i.jsx("div",{className:"faculty-right",children:i.jsx("div",{className:"faculty-grid",children:Dp.map(t=>i.jsxs("article",{className:"faculty-card",children:[i.jsxs("div",{className:"faculty-image-box",children:[i.jsx("img",{src:t.image,alt:`Portrait of ${t.name}, ${t.subject}`,className:"faculty-img",loading:"lazy"}),i.jsx("span",{className:"faculty-exp-badge",children:t.experienceYears})]}),i.jsxs("div",{className:"faculty-info",children:[i.jsx("h3",{className:"faculty-name",children:t.name}),i.jsx("p",{className:"faculty-subject",children:t.subject}),i.jsx("p",{className:"faculty-qual",children:t.qualification}),i.jsx("p",{className:"faculty-bio",children:t.bio})]})]},t.id))})})]}),i.jsx("style",{children:`
        .faculty-section {
          background-color: var(--color-bg-light);
          position: relative;
        }

        .faculty-container {
          display: grid;
          grid-template-columns: 0.95fr 1.3fr;
          gap: 48px;
          align-items: start;
        }

        @media (max-width: 992px) {
          .faculty-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        .faculty-left {
          display: flex;
          flex-direction: column;
        }

        .faculty-title {
          font-size: clamp(2rem, 3.2vw, 2.5rem);
          line-height: 1.22;
          margin-bottom: 18px;
        }

        .faculty-desc {
          font-size: 1.05rem;
          color: var(--color-text-secondary);
          line-height: 1.65;
          margin-bottom: 12px;
        }

        .faculty-subdesc {
          font-size: 0.95rem;
          color: var(--color-text-muted);
          line-height: 1.6;
          margin-bottom: 28px;
        }

        .faculty-cta-box {
          background: #ffffff;
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border);
          padding: 22px;
          display: flex;
          gap: 16px;
          box-shadow: 0 4px 12px rgba(10, 25, 47, 0.05);
        }

        .cta-icon-holder {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          background-color: var(--color-yellow-light);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .cta-icon {
          color: var(--color-yellow-hover);
        }

        .cta-content h4 {
          font-size: 1rem;
          color: var(--color-navy);
          margin-bottom: 4px;
        }

        .cta-content p {
          font-size: 0.85rem;
          color: var(--color-text-muted);
          margin-bottom: 12px;
        }

        .faculty-cta-btn {
          margin-top: 4px;
        }

        /* Right Column Grid */
        .faculty-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        @media (max-width: 580px) {
          .faculty-grid {
            grid-template-columns: 1fr;
          }
        }

        .faculty-card {
          background: #ffffff;
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border);
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(10, 25, 47, 0.04);
          display: flex;
          flex-direction: column;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          height: 100%;
        }

        .faculty-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 24px rgba(10, 25, 47, 0.08);
          border-color: var(--color-yellow);
        }

        .faculty-image-box {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
          background: #0a192f;
          overflow: hidden;
        }

        .faculty-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .faculty-exp-badge {
          position: absolute;
          bottom: 10px;
          right: 10px;
          background: rgba(10, 25, 47, 0.9);
          color: var(--color-yellow);
          font-size: 0.72rem;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: var(--radius-full);
          border: 1px solid rgba(245, 158, 11, 0.35);
        }

        .faculty-info {
          padding: 18px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .faculty-name {
          font-size: 1.12rem;
          color: var(--color-navy);
          margin-bottom: 4px;
        }

        .faculty-subject {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--color-yellow-hover);
          margin-bottom: 2px;
        }

        .faculty-qual {
          font-size: 0.78rem;
          color: var(--color-text-muted);
          font-weight: 500;
          margin-bottom: 10px;
        }

        .faculty-bio {
          font-size: 0.82rem;
          color: var(--color-text-secondary);
          line-height: 1.45;
          margin-top: auto;
        }
      `})]})}function Op(){const e=[{id:1,title:"Concept-Based Learning",description:"Focus on understanding concepts rather than memorising answers.",icon:mp,highlight:"Core Foundation"},{id:2,title:"Personalised Attention",description:"Provide focused guidance based on student learning needs.",icon:Np,highlight:"Individual Focus"},{id:3,title:"Regular Tests and Analysis",description:"Monitor progress and identify weak areas.",icon:dp,highlight:"Targeted Feedback"},{id:4,title:"Supportive Environment",description:"Encourage confidence, discipline, and continuous improvement.",icon:fp,highlight:"Holistic Growth"}];return i.jsxs("section",{className:"section section-light why-choose-section",id:"why-choose-us","aria-labelledby":"why-heading",children:[i.jsxs("div",{className:"container",children:[i.jsxs("div",{className:"section-header",children:[i.jsx("span",{className:"section-eyebrow",children:"The Aaroh Edge"}),i.jsx("h2",{id:"why-heading",className:"section-title",children:"Why Choose Aaroh Academy?"}),i.jsx("p",{className:"section-subtitle",children:"A proven pedagogy founded on conceptual depth, close mentorship, structured assessment, and a nurturing academic culture."})]}),i.jsx("div",{className:"why-grid",children:e.map(t=>{const n=t.icon;return i.jsxs("div",{className:"why-card",children:[i.jsxs("div",{className:"why-card-top",children:[i.jsx("div",{className:"why-icon-box",children:i.jsx(n,{size:26,className:"why-icon"})}),i.jsx("span",{className:"why-badge",children:t.highlight})]}),i.jsx("h3",{className:"why-card-title",children:t.title}),i.jsx("p",{className:"why-card-desc",children:t.description}),i.jsx("div",{className:"why-card-bar"})]},t.id)})})]}),i.jsx("style",{children:`
        .why-choose-section {
          background-color: var(--color-bg-white);
          position: relative;
        }

        .why-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        @media (max-width: 1024px) {
          .why-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .why-grid {
            grid-template-columns: 1fr;
          }
        }

        .why-card {
          background: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: 30px 24px;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 12px rgba(10, 25, 47, 0.04);
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
          position: relative;
        }

        .why-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 32px rgba(10, 25, 47, 0.08);
          border-color: var(--color-yellow);
        }

        .why-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .why-icon-box {
          width: 52px;
          height: 52px;
          border-radius: var(--radius-md);
          background-color: var(--color-navy);
          color: var(--color-yellow);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s ease, background-color 0.2s ease;
        }

        .why-card:hover .why-icon-box {
          transform: scale(1.08);
          background-color: var(--color-navy-800);
        }

        .why-badge {
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--color-text-muted);
          background: var(--color-bg-light);
          padding: 4px 10px;
          border-radius: var(--radius-full);
          border: 1px solid var(--color-border);
        }

        .why-card-title {
          font-size: 1.25rem;
          color: var(--color-navy);
          margin-bottom: 12px;
          line-height: 1.3;
        }

        .why-card-desc {
          font-size: 0.95rem;
          color: var(--color-text-secondary);
          line-height: 1.6;
          margin-bottom: 20px;
          flex: 1;
        }

        .why-card-bar {
          height: 3px;
          width: 40px;
          background-color: var(--color-yellow);
          border-radius: var(--radius-full);
          transition: width 0.3s ease;
        }

        .why-card:hover .why-card-bar {
          width: 80px;
        }
      `})]})}const el=[{id:"test-1",name:"Aarav Singhal",role:"Student, Class 10 (CBSE 96.8%)",rating:5,quote:"The individual attention given by teachers at Aaroh Academy transformed my understanding of Mathematics and Science. Instead of rote learning, they taught us how concepts actually work in practice. The weekly mock tests made the board exam feel like just another practice test!",avatar:"AS"},{id:"test-2",name:"Mrs. Suman Rastogi",role:"Parent of Riya Rastogi (Class 8 Foundation)",rating:5,quote:"As a parent, what I appreciate most is the transparency and regular updates on my daughter’s progress. The small batch size of 15 students ensures that no child is overlooked. Riya’s confidence in solving complex math problems has grown remarkably in the past year.",avatar:"SR"},{id:"test-3",name:"Kavya Sundaram",role:"Student, JEE Main (99.2 Percentile)",rating:5,quote:"Alok Sir and Rajesh Sir’s problem decomposition approach gave me the exact analytical edge I needed for competitive exams. The faculty never hesitates to stay after class to solve our doubts until every single concept is 100% crystal clear.",avatar:"KS"},{id:"test-4",name:"Dr. Vivek Malhotra",role:"Parent of Ananya Malhotra (Class 12 Medical Batch)",rating:5,quote:"Aaroh Academy’s faculty is exceptionally dedicated. The synchronized schedule between school board syllabus and NEET entrance syllabus helped Ananya balance both without any burnout. Highly recommended for serious academic aspirants!",avatar:"VM"},{id:"test-5",name:"Rohan Mehra",role:"Student, Class 12 (Board 95.4%)",rating:5,quote:"The study material provided by Aaroh Academy is concise and directly focused on high-weightage topics. Dr. Sunita ma’am made organic chemistry reactions so intuitive that it became my highest scoring subject.",avatar:"RM"},{id:"test-6",name:"Pooja Chawla",role:"Parent of Yash Chawla (Class 9)",rating:5,quote:"The disciplined yet caring atmosphere at Aaroh Academy motivated my son to develop steady daily study habits. The periodic analytical reports after every test clearly pointed out his weak topics so he could fix them early.",avatar:"PC"}];function Fp(){const[e,t]=L.useState(0),[n,r]=L.useState(3),o=L.useRef(0),l=L.useRef(0),a=L.useRef(null);L.useEffect(()=>{const g=()=>{window.innerWidth<700?r(1):window.innerWidth<1024?r(2):r(3)};return g(),window.addEventListener("resize",g),()=>window.removeEventListener("resize",g)},[]);const s=Math.max(0,el.length-n),u=()=>{t(g=>g>0?g-1:s)},d=()=>{t(g=>g<s?g+1:0)},v=g=>{o.current=g.touches[0].clientX},m=g=>{l.current=g.touches[0].clientX},h=()=>{const g=o.current-l.current;Math.abs(g)>50&&(g>0?d():u())},y=g=>{g.key==="ArrowLeft"?(g.preventDefault(),u()):g.key==="ArrowRight"&&(g.preventDefault(),d())};return i.jsxs("section",{className:"section section-alt testimonials-section",id:"testimonials","aria-labelledby":"testimonials-heading",children:[i.jsxs("div",{className:"container",children:[i.jsxs("div",{className:"testimonials-header-row",children:[i.jsxs("div",{className:"testimonials-header-left",children:[i.jsx("span",{className:"section-eyebrow",children:"Student & Parent Voices"}),i.jsx("h2",{id:"testimonials-heading",className:"section-title",children:"What Our Community Says"}),i.jsx("p",{className:"section-subtitle",children:"Authentic stories of academic transformation, improved confidence, and exam success from Aaroh Academy students and parents."})]}),i.jsxs("div",{className:"carousel-nav-buttons","aria-label":"Carousel navigation",children:[i.jsx("button",{type:"button",className:"carousel-btn",onClick:u,"aria-label":"Previous testimonial",children:i.jsx(mc,{size:22})}),i.jsx("button",{type:"button",className:"carousel-btn",onClick:d,"aria-label":"Next testimonial",children:i.jsx(hc,{size:22})})]})]}),i.jsxs("div",{ref:a,className:"carousel-container",tabIndex:0,onKeyDown:y,onTouchStart:v,onTouchMove:m,onTouchEnd:h,role:"region","aria-roledescription":"carousel","aria-label":"Student and parent testimonials",children:[i.jsxs("div",{className:"sr-only","aria-live":"polite",children:["Showing slide ",e+1," of ",s+1]}),i.jsx("div",{className:"carousel-track",style:{transform:`translateX(-${e*(100/n)}%)`},children:el.map((g,x)=>i.jsx("div",{className:"carousel-slide",style:{flex:`0 0 ${100/n}%`},role:"group","aria-roledescription":"slide","aria-label":`${x+1} of ${el.length}: ${g.name}`,children:i.jsxs("article",{className:"testimonial-card",children:[i.jsxs("div",{className:"testimonial-card-top",children:[i.jsx("div",{className:"stars-row","aria-label":`${g.rating} out of 5 stars`,children:[...Array(g.rating)].map((P,f)=>i.jsx(jp,{size:17,className:"star-icon",fill:"currentColor"},f))}),i.jsx(kp,{size:28,className:"quote-icon","aria-hidden":"true"})]}),i.jsxs("p",{className:"testimonial-quote",children:["“",g.quote,"”"]}),i.jsxs("div",{className:"testimonial-author",children:[i.jsx("div",{className:"author-avatar",children:g.avatar}),i.jsxs("div",{className:"author-meta",children:[i.jsx("strong",{className:"author-name",children:g.name}),i.jsx("span",{className:"author-role",children:g.role})]})]})]})},g.id))})]}),i.jsx("div",{className:"carousel-dots","aria-hidden":"true",children:[...Array(s+1)].map((g,x)=>i.jsx("button",{type:"button",className:`dot-indicator ${x===e?"dot-active":""}`,onClick:()=>t(x),"aria-label":`Go to slide ${x+1}`},x))})]}),i.jsx("style",{children:`
        .testimonials-section {
          background-color: var(--color-bg-light);
          position: relative;
          overflow: hidden;
        }

        .testimonials-header-row {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 24px;
          margin-bottom: 40px;
        }

        @media (max-width: 768px) {
          .testimonials-header-row {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        .testimonials-header-left {
          max-width: 640px;
        }

        .carousel-nav-buttons {
          display: flex;
          gap: 12px;
          flex-shrink: 0;
        }

        .carousel-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1.5px solid var(--color-border);
          background: #ffffff;
          color: var(--color-navy);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 2px 6px rgba(0,0,0,0.05);
        }

        .carousel-btn:hover {
          background-color: var(--color-navy);
          color: var(--color-yellow);
          border-color: var(--color-navy);
          transform: translateY(-2px);
        }

        .carousel-container {
          overflow: hidden;
          width: 100%;
          padding: 8px 0 16px 0;
          outline: none;
        }

        .carousel-track {
          display: flex;
          transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1);
          will-change: transform;
        }

        .carousel-slide {
          padding: 0 12px;
          box-sizing: border-box;
        }

        .testimonial-card {
          background: #ffffff;
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border);
          padding: 28px;
          display: flex;
          flex-direction: column;
          height: 100%;
          box-shadow: 0 4px 12px rgba(10, 25, 47, 0.04);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .testimonial-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 28px rgba(10, 25, 47, 0.08);
          border-color: var(--color-yellow);
        }

        .testimonial-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }

        .stars-row {
          display: flex;
          gap: 4px;
          color: var(--color-yellow);
        }

        .star-icon {
          color: var(--color-yellow);
        }

        .quote-icon {
          color: var(--color-border);
          opacity: 0.7;
        }

        .testimonial-quote {
          font-size: 0.94rem;
          line-height: 1.65;
          color: var(--color-text-secondary);
          margin-bottom: 24px;
          flex: 1;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-top: 16px;
          border-top: 1px solid var(--color-border);
        }

        .author-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--color-navy);
          color: var(--color-yellow);
          font-weight: 700;
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .author-meta {
          display: flex;
          flex-direction: column;
        }

        .author-name {
          font-size: 0.98rem;
          color: var(--color-navy);
        }

        .author-role {
          font-size: 0.78rem;
          color: var(--color-text-muted);
        }

        .carousel-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 24px;
        }

        .dot-indicator {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #cbd5e1;
          border: none;
          cursor: pointer;
          transition: all 0.25s ease;
          padding: 0;
        }

        .dot-active {
          width: 28px;
          border-radius: var(--radius-full);
          background: var(--color-navy);
        }

        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          border: 0;
        }
      `})]})}const $p=[{id:"faq-1",question:"Is the demo class free?",answer:"Yes, the initial demo class at Aaroh Academy is completely free of charge. It provides an opportunity for the student to experience our interactive teaching style, meet the subject faculty, and understand our classroom methodology before making any enrollment commitment."},{id:"faq-2",question:"What are the batch timings?",answer:"We run morning and evening batches designed to prevent any clash with regular school hours. Middle school batches (Class 6–8) typically run from 4:30 PM to 6:30 PM, secondary batches (Class 9–10) from 4:30 PM to 7:30 PM, and senior batches (Class 11–12 & Entrances) have tailored morning (9:00 AM – 2:00 PM) or evening slots (3:30 PM – 7:00 PM). Detailed schedules are provided upon course selection."},{id:"faq-3",question:"What is the fee structure?",answer:"Our fee structure is transparent, value-oriented, and varies based on the student’s class, chosen subjects, and program duration (annual or modular). We also offer merit-based scholarships based on previous academic performance and our diagnostic assessment. Please contact our admissions desk or book a demo class for the detailed, customized fee schedule."},{id:"faq-4",question:"Which boards do you cover?",answer:"Our curriculum comprehensively caters to CBSE, ICSE / ISC, and State Board syllabi. Our teaching modules are carefully mapped to ensure thorough coverage of NCERT guidelines while addressing specific board examination formats and marking patterns."},{id:"faq-5",question:"Do you provide study materials?",answer:"Yes. Every enrolled student receives our structured, subject-specific study packages. These include theory booklets, conceptual summary mind maps, Daily Practice Problems (DPP) sheets, and curated question banks containing previous 10 years’ board and competitive entrance questions with detailed solutions."},{id:"faq-6",question:"How do parents receive progress updates?",answer:"Parents receive systematic updates through bi-weekly SMS / WhatsApp performance alerts, detailed digital report cards analyzing accuracy, topic-wise strengths and areas for improvement, as well as scheduled Parent-Teacher Meetings (PTMs) held every month to review student growth collaboratively."}];function Up({onContactClick:e}){const[t,n]=L.useState(0),r=l=>{n(a=>a===l?-1:l)},o=()=>{var l;e?e():(l=document.querySelector("#contact"))==null||l.scrollIntoView({behavior:"smooth"})};return i.jsxs("section",{className:"section section-light faq-section",id:"faqs","aria-labelledby":"faq-heading",children:[i.jsxs("div",{className:"container faq-container",children:[i.jsxs("div",{className:"faq-left",children:[i.jsx("span",{className:"section-eyebrow",children:"Clear Answers"}),i.jsx("h2",{id:"faq-heading",className:"faq-title",children:"Frequently Asked Questions"}),i.jsx("p",{className:"faq-description",children:"Have questions about batch enrollments, teaching methodology, or study resources? Explore our quick answers or get in touch with our academic advisors."}),i.jsxs("div",{className:"faq-cta-card",children:[i.jsx("div",{className:"faq-cta-icon-box",children:i.jsx(xp,{size:22,className:"faq-cta-icon"})}),i.jsx("h4",{children:"Still have questions?"}),i.jsx("p",{children:"Our academic counsellors are available to answer all your queries and schedule your visit."}),i.jsxs("button",{type:"button",className:"btn btn-primary btn-sm faq-contact-btn",onClick:o,children:[i.jsx("span",{children:"Contact Us"}),i.jsx(rr,{size:15})]})]})]}),i.jsx("div",{className:"faq-right",role:"region","aria-label":"Frequently Asked Questions Accordion",children:i.jsx("div",{className:"accordion-list",children:$p.map((l,a)=>{const s=t===a,u=`faq-header-${l.id}`,d=`faq-content-${l.id}`;return i.jsxs("div",{className:`accordion-item ${s?"accordion-open":""}`,children:[i.jsxs("button",{type:"button",id:u,"aria-expanded":s,"aria-controls":d,className:"accordion-header",onClick:()=>r(a),children:[i.jsx("span",{className:"accordion-question",children:l.question}),i.jsx("span",{className:"accordion-chevron-wrapper","aria-hidden":"true",children:i.jsx(ip,{size:18,className:`chevron-icon ${s?"chevron-rotated":""}`})})]}),i.jsx("div",{id:d,role:"region","aria-labelledby":u,className:`accordion-collapse ${s?"show":""}`,children:i.jsx("div",{className:"accordion-body",children:i.jsx("p",{children:l.answer})})})]},l.id)})})})]}),i.jsx("style",{children:`
        .faq-section {
          background-color: var(--color-bg-white);
          position: relative;
        }

        .faq-container {
          display: grid;
          grid-template-columns: 0.95fr 1.3fr;
          gap: 56px;
          align-items: start;
        }

        @media (max-width: 992px) {
          .faq-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        .faq-left {
          display: flex;
          flex-direction: column;
        }

        .faq-title {
          font-size: clamp(2rem, 3.2vw, 2.5rem);
          line-height: 1.22;
          margin-bottom: 18px;
        }

        .faq-description {
          font-size: 1.05rem;
          color: var(--color-text-secondary);
          line-height: 1.65;
          margin-bottom: 28px;
        }

        .faq-cta-card {
          background-color: var(--color-bg-light);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .faq-cta-icon-box {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          background-color: var(--color-yellow-light);
          color: var(--color-yellow-hover);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 6px;
        }

        .faq-cta-card h4 {
          font-size: 1.05rem;
          color: var(--color-navy);
        }

        .faq-cta-card p {
          font-size: 0.88rem;
          color: var(--color-text-muted);
          line-height: 1.5;
        }

        .faq-contact-btn {
          align-self: flex-start;
          margin-top: 8px;
        }

        /* Right Column Accordion List */
        .accordion-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .accordion-item {
          background: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          overflow: hidden;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .accordion-item:hover {
          border-color: #cbd5e1;
        }

        .accordion-item.accordion-open {
          border-color: var(--color-yellow);
          box-shadow: 0 4px 14px rgba(10, 25, 47, 0.05);
        }

        .accordion-header {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 20px;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
          gap: 16px;
          font-size: 1.02rem;
          font-weight: 600;
          color: var(--color-navy);
          transition: background-color 0.2s ease;
        }

        .accordion-header:hover {
          background-color: var(--color-bg-light);
        }

        .accordion-question {
          flex: 1;
        }

        .accordion-chevron-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: var(--color-bg-light);
          color: var(--color-navy);
          flex-shrink: 0;
          transition: background-color 0.2s ease;
        }

        .accordion-open .accordion-chevron-wrapper {
          background: var(--color-yellow-light);
          color: var(--color-yellow-hover);
        }

        .chevron-icon {
          transition: transform 0.25s ease;
        }

        .chevron-rotated {
          transform: rotate(180deg);
        }

        .accordion-collapse {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s cubic-bezier(0, 1, 0, 1);
        }

        .accordion-collapse.show {
          max-height: 500px;
          transition: max-height 0.35s ease-in-out;
        }

        .accordion-body {
          padding: 0 20px 20px 20px;
          font-size: 0.92rem;
          color: var(--color-text-secondary);
          line-height: 1.65;
          border-top: 1px solid var(--color-bg-light);
          padding-top: 14px;
        }
      `})]})}const Rt="/aaroh-academy/",Bp=[{id:"all",label:"All Photos"},{id:"classrooms",label:"Classrooms"},{id:"teaching",label:"Teaching & Mentorship"},{id:"events",label:"Academy Events"},{id:"activities",label:"Student Activities"},{id:"achievements",label:"Achievements"}],Ja=[{id:"gal-1",category:"classrooms",title:"Smart Interactive Classrooms",description:"Air-conditioned, modern audio-visual equipped smart classrooms designed for small focused batches.",image:`${Rt}images/gallery/classroom-modern.svg`,alt:"Modern smart classroom with digital interactive board and ergonomic seating at Aaroh Academy"},{id:"gal-2",category:"teaching",title:"Interactive Physics Demonstration",description:"Faculty explaining classical mechanics using real visual demonstrations and interactive software.",image:`${Rt}images/gallery/teaching-session.svg`,alt:"Faculty member explaining physics equations on an interactive board to attentive students"},{id:"gal-3",category:"activities",title:"Collaborative Problem-Solving Circles",description:"Students working in small peer groups to solve advanced mathematical puzzles and science problem sets.",image:`${Rt}images/gallery/peer-learning.svg`,alt:"Group of secondary school students engaged in collaborative problem solving with workbooks"},{id:"gal-4",category:"achievements",title:"Annual Academic Felicitations",description:"Celebrating high achievers of CBSE Board Examinations and competitive entrance exams.",image:`${Rt}images/gallery/achievements-ceremony.svg`,alt:"Aaroh Academy annual felicitation ceremony honoring top scoring board exam students with medals"},{id:"gal-5",category:"events",title:"National Science Day Science Fair",description:"Hands-on exhibits and experimental working models prepared and demonstrated by middle school students.",image:`${Rt}images/gallery/science-exhibition.svg`,alt:"Students demonstrating hands-on scientific working models during the Academy Science Fair"},{id:"gal-6",category:"teaching",title:"One-on-One Doubt Clearing Clinic",description:"Dedicated post-class mentorship sessions ensuring no student leaves the campus with unresolved questions.",image:`${Rt}images/gallery/doubt-clinic.svg`,alt:"Teacher patiently clarifying doubts with a student during a personal one-on-one session"}];function Vp(){const[e,t]=L.useState("all"),[n,r]=L.useState(null),o=e==="all"?Ja:Ja.filter(a=>a.category===e);L.useEffect(()=>{if(n===null)return;const a=s=>{s.key==="Escape"?r(null):s.key==="ArrowLeft"?r(u=>u>0?u-1:o.length-1):s.key==="ArrowRight"&&r(u=>u<o.length-1?u+1:0)};return window.addEventListener("keydown",a),()=>window.removeEventListener("keydown",a)},[n,o.length]);const l=n!==null&&o[n]?o[n]:null;return i.jsxs("section",{className:"section section-alt gallery-section",id:"gallery","aria-labelledby":"gallery-heading",children:[i.jsxs("div",{className:"container",children:[i.jsxs("div",{className:"section-header",children:[i.jsx("span",{className:"section-eyebrow",children:"Campus Life"}),i.jsx("h2",{id:"gallery-heading",className:"section-title",children:"Life at Aaroh Academy"}),i.jsx("p",{className:"section-subtitle",children:"A glimpse inside our modern classrooms, active teaching sessions, student collaborative circles, and celebratory academic achievements."})]}),i.jsx("div",{className:"gallery-tabs",role:"tablist","aria-label":"Gallery categories",children:Bp.map(a=>i.jsx("button",{role:"tab","aria-selected":e===a.id,className:`gallery-tab-btn ${e===a.id?"active":""}`,onClick:()=>{t(a.id),r(null)},children:a.label},a.id))}),i.jsx("div",{className:"gallery-grid",children:o.map((a,s)=>i.jsx("div",{className:"gallery-item-card",onClick:()=>r(s),onKeyDown:u=>{(u.key==="Enter"||u.key===" ")&&(u.preventDefault(),r(s))},tabIndex:0,role:"button","aria-label":`View ${a.title}`,children:i.jsxs("div",{className:"gallery-img-wrapper",children:[i.jsx("img",{src:a.image,alt:a.alt,className:"gallery-thumbnail",loading:"lazy",width:"500",height:"350"}),i.jsx("div",{className:"gallery-overlay",children:i.jsxs("div",{className:"overlay-content",children:[i.jsx("span",{className:"overlay-category",children:a.category}),i.jsx("h3",{className:"overlay-title",children:a.title}),i.jsx("div",{className:"overlay-zoom-icon",children:i.jsx(vp,{size:18})})]})})]})},a.id))})]}),l&&i.jsxs("div",{className:"lightbox-overlay",role:"dialog","aria-modal":"true","aria-label":l.title,children:[i.jsx("div",{className:"lightbox-backdrop",onClick:()=>r(null)}),i.jsxs("div",{className:"lightbox-content",children:[i.jsx("button",{type:"button",className:"lightbox-close-btn",onClick:()=>r(null),"aria-label":"Close image preview (Escape)",children:i.jsx(Xn,{size:26})}),o.length>1&&i.jsxs(i.Fragment,{children:[i.jsx("button",{type:"button",className:"lightbox-nav-btn lightbox-prev",onClick:()=>r(a=>a>0?a-1:o.length-1),"aria-label":"Previous image",children:i.jsx(mc,{size:28})}),i.jsx("button",{type:"button",className:"lightbox-nav-btn lightbox-next",onClick:()=>r(a=>a<o.length-1?a+1:0),"aria-label":"Next image",children:i.jsx(hc,{size:28})})]}),i.jsx("div",{className:"lightbox-image-box",children:i.jsx("img",{src:l.image,alt:l.alt,className:"lightbox-img"})}),i.jsxs("div",{className:"lightbox-caption",children:[i.jsx("h4",{children:l.title}),i.jsx("p",{children:l.description})]})]})]}),i.jsx("style",{children:`
        .gallery-section {
          background-color: var(--color-bg-light);
          position: relative;
        }

        .gallery-tabs {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
          margin-bottom: 36px;
        }

        .gallery-tab-btn {
          background: #ffffff;
          border: 1px solid var(--color-border);
          color: var(--color-text-secondary);
          padding: 8px 18px;
          border-radius: var(--radius-full);
          font-size: 0.88rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .gallery-tab-btn:hover {
          background-color: var(--color-bg-alt);
          color: var(--color-navy);
        }

        .gallery-tab-btn.active {
          background-color: var(--color-navy);
          color: var(--color-yellow);
          border-color: var(--color-navy);
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        @media (max-width: 900px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 580px) {
          .gallery-grid {
            grid-template-columns: 1fr;
          }
        }

        .gallery-item-card {
          border-radius: var(--radius-lg);
          overflow: hidden;
          background: #0a192f;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(10, 25, 47, 0.05);
          outline: none;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .gallery-item-card:hover,
        .gallery-item-card:focus-visible {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(10, 25, 47, 0.12);
        }

        .gallery-img-wrapper {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3;
          overflow: hidden;
        }

        .gallery-thumbnail {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .gallery-item-card:hover .gallery-thumbnail {
          transform: scale(1.06);
        }

        .gallery-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(10, 25, 47, 0) 30%, rgba(10, 25, 47, 0.92) 100%);
          display: flex;
          align-items: flex-end;
          padding: 20px;
          opacity: 0.9;
          transition: opacity 0.25s ease;
        }

        .gallery-item-card:hover .gallery-overlay {
          opacity: 1;
        }

        .overlay-content {
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        .overlay-category {
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--color-yellow);
          margin-bottom: 4px;
        }

        .overlay-title {
          font-size: 1.05rem;
          color: #ffffff;
          margin-bottom: 8px;
          line-height: 1.3;
        }

        .overlay-zoom-icon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          align-self: flex-end;
          margin-top: -24px;
        }

        /* Lightbox */
        .lightbox-overlay {
          position: fixed;
          inset: 0;
          z-index: 1300;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .lightbox-backdrop {
          position: absolute;
          inset: 0;
          background: rgba(10, 25, 47, 0.9);
          backdrop-filter: blur(8px);
        }

        .lightbox-content {
          position: relative;
          z-index: 2;
          max-width: 800px;
          width: 100%;
          background: #ffffff;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: 0 24px 48px rgba(0,0,0,0.4);
          animation: modalPop 0.25s ease-out;
        }

        .lightbox-close-btn {
          position: absolute;
          top: 14px;
          right: 14px;
          background: rgba(10, 25, 47, 0.7);
          color: #ffffff;
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 5;
          transition: background-color 0.2s;
        }

        .lightbox-close-btn:hover {
          background-color: var(--color-yellow);
          color: var(--color-navy);
        }

        .lightbox-nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(10, 25, 47, 0.7);
          color: #ffffff;
          border: none;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 5;
          transition: background-color 0.2s;
        }

        .lightbox-nav-btn:hover {
          background-color: var(--color-yellow);
          color: var(--color-navy);
        }

        .lightbox-prev {
          left: 14px;
        }

        .lightbox-next {
          right: 14px;
        }

        .lightbox-image-box {
          width: 100%;
          max-height: 520px;
          background: #0a192f;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .lightbox-img {
          width: 100%;
          height: auto;
          max-height: 520px;
          object-fit: contain;
        }

        .lightbox-caption {
          padding: 20px 24px;
          background: #ffffff;
        }

        .lightbox-caption h4 {
          font-size: 1.2rem;
          color: var(--color-navy);
          margin-bottom: 6px;
        }

        .lightbox-caption p {
          font-size: 0.9rem;
          color: var(--color-text-secondary);
        }
      `})]})}function Hp({onBookDemoClick:e}){const t=()=>{var n;e?e():(n=document.querySelector("#demo-form"))==null||n.scrollIntoView({behavior:"smooth"})};return i.jsxs("section",{className:"section-navy contact-section",id:"contact","aria-labelledby":"contact-heading",children:[i.jsxs("div",{className:"container contact-container",children:[i.jsxs("div",{className:"contact-left",children:[i.jsx("span",{className:"section-eyebrow",children:"Connect With Us"}),i.jsx("h2",{id:"contact-heading",className:"contact-title",children:"Visit Our Campus & Experience the Aaroh Standard"}),i.jsx("p",{className:"contact-subtitle",children:"We welcome parents and students to visit our campus, tour our classrooms, meet our faculty, and discuss personalized learning goals."}),i.jsxs("div",{className:"contact-info-list",children:[i.jsxs("div",{className:"contact-info-item",children:[i.jsx("div",{className:"contact-icon-box",children:i.jsx(yc,{size:22,className:"contact-icon"})}),i.jsxs("div",{className:"contact-item-text",children:[i.jsx("span",{className:"item-label",children:"Campus Address"}),i.jsx("address",{className:"item-value",children:z.location.formattedAddress})]})]}),i.jsxs("div",{className:"contact-info-item",children:[i.jsx("div",{className:"contact-icon-box",children:i.jsx(ao,{size:22,className:"contact-icon"})}),i.jsxs("div",{className:"contact-item-text",children:[i.jsx("span",{className:"item-label",children:"Admissions Hotline"}),i.jsx("a",{href:`tel:${z.contact.phoneTel}`,className:"item-value item-link",children:z.contact.phone})]})]}),i.jsxs("div",{className:"contact-info-item",children:[i.jsx("div",{className:"contact-icon-box",children:i.jsx(vc,{size:22,className:"contact-icon"})}),i.jsxs("div",{className:"contact-item-text",children:[i.jsx("span",{className:"item-label",children:"Academic Enquiries"}),i.jsx("a",{href:`mailto:${z.contact.email}`,className:"item-value item-link",children:z.contact.email})]})]}),i.jsxs("div",{className:"contact-info-item",children:[i.jsx("div",{className:"contact-icon-box",children:i.jsx(Bi,{size:22,className:"contact-icon"})}),i.jsxs("div",{className:"contact-item-text",children:[i.jsx("span",{className:"item-label",children:"Visiting & Counselling Hours"}),i.jsx("span",{className:"item-value",children:z.contact.workingHours})]})]})]}),i.jsxs("div",{className:"contact-action-buttons",children:[i.jsxs("button",{type:"button",className:"btn btn-primary btn-contact-demo",onClick:t,children:[i.jsx(op,{size:18}),i.jsx("span",{children:"Book a Free Demo Class"})]}),i.jsxs("a",{href:z.location.directionsUrl,target:"_blank",rel:"noopener noreferrer",className:"btn btn-navy-outline btn-contact-directions",children:[i.jsx(wp,{size:18}),i.jsx("span",{children:"Get Directions"}),i.jsx(up,{size:14})]})]})]}),i.jsx("div",{className:"contact-right",children:i.jsxs("div",{className:"map-frame-wrapper",children:[i.jsx("iframe",{title:"Aaroh Academy Campus Location on Google Maps",src:z.location.googleMapsEmbedUrl,className:"map-iframe",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",allowFullScreen:!0}),i.jsxs("div",{className:"map-badge",children:[i.jsx("span",{className:"live-dot"}),i.jsx("span",{children:"Aaroh Academy Campus, Sector 62, Noida"})]})]})})]}),i.jsx("style",{children:`
        .contact-section {
          background-color: var(--color-navy);
          color: #ffffff;
          padding: 80px 0;
          position: relative;
        }

        .contact-container {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 56px;
          align-items: center;
        }

        @media (max-width: 992px) {
          .contact-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .contact-section {
            padding: 56px 0;
          }
        }

        .contact-left {
          display: flex;
          flex-direction: column;
        }

        .contact-title {
          font-size: clamp(2rem, 3.2vw, 2.7rem);
          color: #ffffff;
          line-height: 1.2;
          margin-bottom: 16px;
        }

        .contact-subtitle {
          font-size: 1.05rem;
          color: #cbd5e1;
          line-height: 1.65;
          margin-bottom: 32px;
        }

        .contact-info-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 36px;
        }

        .contact-info-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }

        .contact-icon-box {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          background: rgba(245, 158, 11, 0.15);
          color: var(--color-yellow);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .contact-item-text {
          display: flex;
          flex-direction: column;
        }

        .item-label {
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #94a3b8;
          font-weight: 600;
          margin-bottom: 2px;
        }

        .item-value {
          font-size: 0.98rem;
          color: #f1f5f9;
          font-style: normal;
          line-height: 1.4;
        }

        .item-link {
          transition: color 0.2s ease;
        }

        .item-link:hover {
          color: var(--color-yellow);
          text-decoration: underline;
        }

        .contact-action-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
        }

        .btn-contact-demo {
          padding: 13px 24px;
        }

        .btn-contact-directions {
          padding: 13px 22px;
        }

        /* Right Column Map */
        .map-frame-wrapper {
          position: relative;
          width: 100%;
          height: 420px;
          border-radius: var(--radius-xl);
          overflow: hidden;
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.35);
          border: 1px solid rgba(255, 255, 255, 0.15);
          background: #050d1a;
        }

        @media (max-width: 580px) {
          .map-frame-wrapper {
            height: 320px;
          }
        }

        .map-iframe {
          width: 100%;
          height: 100%;
          border: 0;
          display: block;
        }

        .map-fallback {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 24px;
          text-align: center;
          color: #cbd5e1;
          gap: 12px;
        }

        .map-badge {
          position: absolute;
          bottom: 16px;
          left: 16px;
          right: 16px;
          background: rgba(10, 25, 47, 0.9);
          backdrop-filter: blur(6px);
          color: #ffffff;
          padding: 10px 14px;
          border-radius: var(--radius-md);
          font-size: 0.8rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 8px;
          border: 1px solid rgba(245, 158, 11, 0.3);
        }

        .live-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: var(--color-yellow);
          box-shadow: 0 0 8px var(--color-yellow);
        }
      `})]})}function qp({onCourseClick:e}){const t=new Date().getFullYear(),n=[{label:"Home",href:"#home"},{label:"About",href:"#about"},{label:"Courses",href:"#courses"},{label:"Results",href:"#results"},{label:"Gallery",href:"#gallery"},{label:"Contact",href:"#contact"}],r=[{label:"Class 6–8",id:"class-6-8"},{label:"Class 9–10",id:"class-9-10"},{label:"Class 11–12",id:"class-11-12"},{label:"Competitive Exam Preparation",id:"competitive-prep"}],o=()=>{window.scrollTo({top:0,behavior:"smooth"})},l=(a,s)=>{a.preventDefault();const u=document.querySelector(s);u==null||u.scrollIntoView({behavior:"smooth"})};return i.jsxs("footer",{className:"footer-root",role:"contentinfo",children:[i.jsxs("div",{className:"container",children:[i.jsxs("div",{className:"footer-grid",children:[i.jsxs("div",{className:"footer-col footer-col-brand",children:[i.jsxs("div",{className:"footer-brand-header",children:[i.jsx("img",{src:"/aaroh-academy/images/logo.svg",alt:"Aaroh Academy Crest",className:"footer-logo",width:"48",height:"48"}),i.jsxs("div",{children:[i.jsx("h3",{className:"footer-brand-name",children:z.name}),i.jsxs("p",{className:"footer-brand-tagline",children:["“",z.tagline,"”"]})]})]}),i.jsx("p",{className:"footer-brand-desc",children:z.shortBio}),i.jsxs("div",{className:"footer-social-section",children:[i.jsx("span",{className:"social-heading",children:"Follow Our Academic Updates:"}),i.jsxs("div",{className:"footer-socials","aria-label":"Social media channels",children:[i.jsx("a",{href:z.socialLinks.instagram,target:"_blank",rel:"noopener noreferrer",className:"social-icon-link","aria-label":"Aaroh Academy on Instagram",children:i.jsx(pp,{size:18})}),i.jsx("a",{href:z.socialLinks.facebook,target:"_blank",rel:"noopener noreferrer",className:"social-icon-link","aria-label":"Aaroh Academy on Facebook",children:i.jsx(cp,{size:18})}),i.jsx("a",{href:z.socialLinks.youtube,target:"_blank",rel:"noopener noreferrer",className:"social-icon-link","aria-label":"Aaroh Academy on YouTube",children:i.jsx(Ep,{size:18})})]})]})]}),i.jsxs("div",{className:"footer-col",children:[i.jsx("h4",{className:"footer-col-title",children:"Quick Links"}),i.jsx("ul",{className:"footer-link-list",children:n.map(a=>i.jsx("li",{children:i.jsx("a",{href:a.href,className:"footer-link",onClick:s=>l(s,a.href),children:a.label})},a.label))})]}),i.jsxs("div",{className:"footer-col",children:[i.jsx("h4",{className:"footer-col-title",children:"Our Courses"}),i.jsx("ul",{className:"footer-link-list",children:r.map(a=>i.jsx("li",{children:i.jsx("a",{href:"#courses",className:"footer-link",onClick:s=>{var u;s.preventDefault(),(u=document.querySelector("#courses"))==null||u.scrollIntoView({behavior:"smooth"}),e&&e(a.label)},children:a.label})},a.id))})]}),i.jsxs("div",{className:"footer-col",children:[i.jsx("h4",{className:"footer-col-title",children:"Campus Contact"}),i.jsxs("ul",{className:"footer-contact-list",children:[i.jsxs("li",{className:"footer-contact-item",children:[i.jsx(yc,{size:17,className:"f-icon"}),i.jsx("span",{children:z.location.formattedAddress})]}),i.jsxs("li",{className:"footer-contact-item",children:[i.jsx(ao,{size:17,className:"f-icon"}),i.jsx("a",{href:`tel:${z.contact.phoneTel}`,className:"footer-link",children:z.contact.phone})]}),i.jsxs("li",{className:"footer-contact-item",children:[i.jsx(vc,{size:17,className:"f-icon"}),i.jsx("a",{href:`mailto:${z.contact.email}`,className:"footer-link",children:z.contact.email})]})]})]})]}),i.jsxs("div",{className:"footer-bottom-bar",children:[i.jsxs("p",{className:"copyright-text",children:["© ",t," ",z.name,". All Rights Reserved. “",z.tagline,"”."]}),i.jsxs("button",{type:"button",className:"btn-scroll-top",onClick:o,"aria-label":"Scroll back to top of page",children:[i.jsx("span",{children:"Back to top"}),i.jsx(tp,{size:16})]})]})]}),i.jsx("style",{children:`
        .footer-root {
          background-color: var(--color-navy-950);
          color: #94a3b8;
          padding-top: 72px;
          padding-bottom: 32px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          margin-top: auto;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 0.8fr 1fr 1.2fr;
          gap: 48px;
          margin-bottom: 56px;
        }

        @media (max-width: 992px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 36px;
          }
        }

        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }

        .footer-brand-header {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 16px;
        }

        .footer-logo {
          width: 48px;
          height: 48px;
          flex-shrink: 0;
        }

        .footer-brand-name {
          font-size: 1.35rem;
          color: #ffffff;
          line-height: 1.2;
        }

        .footer-brand-tagline {
          font-size: 0.8rem;
          color: var(--color-yellow);
          font-weight: 500;
        }

        .footer-brand-desc {
          font-size: 0.88rem;
          line-height: 1.6;
          color: #94a3b8;
          margin-bottom: 20px;
          max-width: 340px;
        }

        .social-heading {
          display: block;
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #cbd5e1;
          margin-bottom: 10px;
          font-weight: 600;
        }

        .footer-socials {
          display: flex;
          gap: 12px;
        }

        .social-icon-link {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.08);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.2s, color 0.2s, transform 0.2s;
        }

        .social-icon-link:hover {
          background-color: var(--color-yellow);
          color: var(--color-navy);
          transform: translateY(-2px);
        }

        .footer-col-title {
          font-size: 1.05rem;
          color: #ffffff;
          margin-bottom: 20px;
          position: relative;
          padding-bottom: 10px;
        }

        .footer-col-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 28px;
          height: 2px;
          background-color: var(--color-yellow);
        }

        .footer-link-list,
        .footer-contact-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-link {
          font-size: 0.9rem;
          color: #cbd5e1;
          transition: color 0.2s ease, transform 0.2s ease;
          display: inline-block;
        }

        .footer-link:hover {
          color: var(--color-yellow);
          transform: translateX(3px);
        }

        .footer-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.88rem;
          color: #cbd5e1;
          line-height: 1.5;
        }

        .f-icon {
          color: var(--color-yellow);
          flex-shrink: 0;
          margin-top: 3px;
        }

        .footer-bottom-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          gap: 16px;
          flex-wrap: wrap;
        }

        .copyright-text {
          font-size: 0.84rem;
          color: #64748b;
        }

        .btn-scroll-top {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: none;
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #cbd5e1;
          padding: 6px 14px;
          border-radius: var(--radius-full);
          font-size: 0.8rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .btn-scroll-top:hover {
          background-color: rgba(255, 255, 255, 0.1);
          color: var(--color-yellow);
          border-color: var(--color-yellow);
        }
      `})]})}function Wp(){const[e,t]=L.useState(!1);L.useEffect(()=>{const r=()=>{window.scrollY>200?t(!0):t(!1)};return window.addEventListener("scroll",r,{passive:!0}),()=>window.removeEventListener("scroll",r)},[]);const n=`https://wa.me/${z.contact.whatsappNumber}?text=${encodeURIComponent(z.contact.whatsappDefaultMessage)}`;return i.jsxs("aside",{className:`whatsapp-floating-wrapper ${e?"visible":""}`,"aria-label":"Direct WhatsApp Enquiry",children:[i.jsxs("a",{href:n,target:"_blank",rel:"noopener noreferrer",className:"whatsapp-btn","aria-label":"Chat with Aaroh Academy on WhatsApp (opens in a new tab)",children:[i.jsx(xc,{size:28,className:"whatsapp-icon","aria-hidden":"true"}),i.jsx("span",{className:"whatsapp-tooltip",children:"Chat on WhatsApp"})]}),i.jsx("style",{children:`
        .whatsapp-floating-wrapper {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 990;
          opacity: 0;
          visibility: hidden;
          transform: translateY(20px) scale(0.85);
          transition: opacity 0.3s ease, transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), visibility 0.3s;
          /* Respect mobile safe-area insets */
          padding-bottom: env(safe-area-inset-bottom, 0);
          padding-right: env(safe-area-inset-right, 0);
        }

        .whatsapp-floating-wrapper.visible {
          opacity: 1;
          visibility: visible;
          transform: translateY(0) scale(1);
        }

        .whatsapp-btn {
          width: 58px;
          height: 58px;
          border-radius: 50%;
          background-color: #25d366;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 20px rgba(37, 211, 102, 0.4);
          position: relative;
          transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
        }

        .whatsapp-btn:hover {
          background-color: #1eb954;
          transform: scale(1.08);
          box-shadow: 0 8px 24px rgba(37, 211, 102, 0.55);
        }

        .whatsapp-icon {
          flex-shrink: 0;
        }

        .whatsapp-tooltip {
          position: absolute;
          right: 70px;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(10, 25, 47, 0.95);
          color: #ffffff;
          padding: 6px 12px;
          border-radius: var(--radius-sm);
          font-size: 0.78rem;
          font-weight: 600;
          white-space: nowrap;
          pointer-events: none;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.2s ease, transform 0.2s ease;
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        }

        .whatsapp-tooltip::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 100%;
          transform: translateY(-50%);
          border-width: 5px;
          border-style: solid;
          border-color: transparent transparent transparent rgba(10, 25, 47, 0.95);
        }

        .whatsapp-btn:hover .whatsapp-tooltip,
        .whatsapp-btn:focus-visible .whatsapp-tooltip {
          opacity: 1;
          visibility: visible;
          transform: translateY(-50%) translateX(-4px);
        }

        @media (max-width: 576px) {
          .whatsapp-floating-wrapper {
            bottom: 18px;
            right: 18px;
          }

          .whatsapp-btn {
            width: 52px;
            height: 52px;
          }

          .whatsapp-tooltip {
            display: none;
          }
        }
      `})]})}function Qp(){const[e,t]=L.useState(""),n=(o="")=>{o&&t(o);const l=document.getElementById("demo-form");if(l){l.scrollIntoView({behavior:"smooth",block:"center"});const a=l.querySelector("input");setTimeout(()=>a==null?void 0:a.focus(),400)}},r=()=>{const o=document.getElementById("contact");o&&o.scrollIntoView({behavior:"smooth"})};return i.jsxs("div",{className:"app-layout",children:[i.jsx(zp,{onEnquireClick:()=>n()}),i.jsxs("main",{id:"main-content",tabIndex:-1,children:[i.jsx(Tp,{preselectedCourse:e}),i.jsx(Lp,{onSelectCourseForDemo:o=>n(o)}),i.jsx(Rp,{}),i.jsx(Ip,{onEnquiryClick:()=>n()}),i.jsx(Op,{}),i.jsx(Fp,{}),i.jsx(Up,{onContactClick:r}),i.jsx(Vp,{}),i.jsx(Hp,{onBookDemoClick:()=>n()})]}),i.jsx(qp,{onCourseClick:o=>n(o)}),i.jsx(Wp,{})]})}tl.createRoot(document.getElementById("root")).render(i.jsx(Fc.StrictMode,{children:i.jsx(Qp,{})}));
