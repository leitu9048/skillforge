var Vc=Object.defineProperty;var Qc=(e,t,n)=>t in e?Vc(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var ns=(e,t,n)=>Qc(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function wl(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Sl={exports:{}},mi={},kl={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ir=Symbol.for("react.element"),Wc=Symbol.for("react.portal"),Hc=Symbol.for("react.fragment"),Kc=Symbol.for("react.strict_mode"),Yc=Symbol.for("react.profiler"),Xc=Symbol.for("react.provider"),Zc=Symbol.for("react.context"),Jc=Symbol.for("react.forward_ref"),ed=Symbol.for("react.suspense"),td=Symbol.for("react.memo"),nd=Symbol.for("react.lazy"),rs=Symbol.iterator;function rd(e){return e===null||typeof e!="object"?null:(e=rs&&e[rs]||e["@@iterator"],typeof e=="function"?e:null)}var Pl={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_l=Object.assign,Il={};function pn(e,t,n){this.props=e,this.context=t,this.refs=Il,this.updater=n||Pl}pn.prototype.isReactComponent={};pn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};pn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Cl(){}Cl.prototype=pn.prototype;function sa(e,t,n){this.props=e,this.context=t,this.refs=Il,this.updater=n||Pl}var la=sa.prototype=new Cl;la.constructor=sa;_l(la,pn.prototype);la.isPureReactComponent=!0;var is=Array.isArray,El=Object.prototype.hasOwnProperty,ua={current:null},Nl={key:!0,ref:!0,__self:!0,__source:!0};function jl(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)El.call(t,r)&&!Nl.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:ir,type:e,key:o,ref:a,props:i,_owner:ua.current}}function id(e,t){return{$$typeof:ir,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ca(e){return typeof e=="object"&&e!==null&&e.$$typeof===ir}function od(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var os=/\/+/g;function zi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?od(""+e.key):t.toString(36)}function Or(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case ir:case Wc:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+zi(a,0):r,is(i)?(n="",e!=null&&(n=e.replace(os,"$&/")+"/"),Or(i,t,n,"",function(u){return u})):i!=null&&(ca(i)&&(i=id(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(os,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",is(e))for(var s=0;s<e.length;s++){o=e[s];var l=r+zi(o,s);a+=Or(o,t,n,l,i)}else if(l=rd(e),typeof l=="function")for(e=l.call(e),s=0;!(o=e.next()).done;)o=o.value,l=r+zi(o,s++),a+=Or(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function mr(e,t,n){if(e==null)return e;var r=[],i=0;return Or(e,r,"","",function(o){return t.call(n,o,i++)}),r}function ad(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ce={current:null},zr={transition:null},sd={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:zr,ReactCurrentOwner:ua};function Ol(){throw Error("act(...) is not supported in production builds of React.")}z.Children={map:mr,forEach:function(e,t,n){mr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return mr(e,function(){t++}),t},toArray:function(e){return mr(e,function(t){return t})||[]},only:function(e){if(!ca(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};z.Component=pn;z.Fragment=Hc;z.Profiler=Yc;z.PureComponent=sa;z.StrictMode=Kc;z.Suspense=ed;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sd;z.act=Ol;z.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=_l({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=ua.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)El.call(t,l)&&!Nl.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:ir,type:e.type,key:i,ref:o,props:r,_owner:a}};z.createContext=function(e){return e={$$typeof:Zc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Xc,_context:e},e.Consumer=e};z.createElement=jl;z.createFactory=function(e){var t=jl.bind(null,e);return t.type=e,t};z.createRef=function(){return{current:null}};z.forwardRef=function(e){return{$$typeof:Jc,render:e}};z.isValidElement=ca;z.lazy=function(e){return{$$typeof:nd,_payload:{_status:-1,_result:e},_init:ad}};z.memo=function(e,t){return{$$typeof:td,type:e,compare:t===void 0?null:t}};z.startTransition=function(e){var t=zr.transition;zr.transition={};try{e()}finally{zr.transition=t}};z.unstable_act=Ol;z.useCallback=function(e,t){return ce.current.useCallback(e,t)};z.useContext=function(e){return ce.current.useContext(e)};z.useDebugValue=function(){};z.useDeferredValue=function(e){return ce.current.useDeferredValue(e)};z.useEffect=function(e,t){return ce.current.useEffect(e,t)};z.useId=function(){return ce.current.useId()};z.useImperativeHandle=function(e,t,n){return ce.current.useImperativeHandle(e,t,n)};z.useInsertionEffect=function(e,t){return ce.current.useInsertionEffect(e,t)};z.useLayoutEffect=function(e,t){return ce.current.useLayoutEffect(e,t)};z.useMemo=function(e,t){return ce.current.useMemo(e,t)};z.useReducer=function(e,t,n){return ce.current.useReducer(e,t,n)};z.useRef=function(e){return ce.current.useRef(e)};z.useState=function(e){return ce.current.useState(e)};z.useSyncExternalStore=function(e,t,n){return ce.current.useSyncExternalStore(e,t,n)};z.useTransition=function(){return ce.current.useTransition()};z.version="18.3.1";kl.exports=z;var J=kl.exports;const zl=wl(J);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ld=J,ud=Symbol.for("react.element"),cd=Symbol.for("react.fragment"),dd=Object.prototype.hasOwnProperty,fd=ld.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,md={key:!0,ref:!0,__self:!0,__source:!0};function Al(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)dd.call(t,r)&&!md.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:ud,type:e,key:o,ref:a,props:i,_owner:fd.current}}mi.Fragment=cd;mi.jsx=Al;mi.jsxs=Al;Sl.exports=mi;var d=Sl.exports,lo={},bl={exports:{}},Se={},Dl={exports:{}},Tl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(S,j){var O=S.length;S.push(j);e:for(;0<O;){var Q=O-1>>>1,X=S[Q];if(0<i(X,j))S[Q]=j,S[O]=X,O=Q;else break e}}function n(S){return S.length===0?null:S[0]}function r(S){if(S.length===0)return null;var j=S[0],O=S.pop();if(O!==j){S[0]=O;e:for(var Q=0,X=S.length,dr=X>>>1;Q<dr;){var St=2*(Q+1)-1,Oi=S[St],kt=St+1,fr=S[kt];if(0>i(Oi,O))kt<X&&0>i(fr,Oi)?(S[Q]=fr,S[kt]=O,Q=kt):(S[Q]=Oi,S[St]=O,Q=St);else if(kt<X&&0>i(fr,O))S[Q]=fr,S[kt]=O,Q=kt;else break e}}return j}function i(S,j){var O=S.sortIndex-j.sortIndex;return O!==0?O:S.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var l=[],u=[],v=1,g=null,p=3,y=!1,h=!1,w=!1,A=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(S){for(var j=n(u);j!==null;){if(j.callback===null)r(u);else if(j.startTime<=S)r(u),j.sortIndex=j.expirationTime,t(l,j);else break;j=n(u)}}function $(S){if(w=!1,m(S),!h)if(n(l)!==null)h=!0,wt(_);else{var j=n(u);j!==null&&ye($,j.startTime-S)}}function _(S,j){h=!1,w&&(w=!1,f(N),N=-1),y=!0;var O=p;try{for(m(j),g=n(l);g!==null&&(!(g.expirationTime>j)||S&&!D());){var Q=g.callback;if(typeof Q=="function"){g.callback=null,p=g.priorityLevel;var X=Q(g.expirationTime<=j);j=e.unstable_now(),typeof X=="function"?g.callback=X:g===n(l)&&r(l),m(j)}else r(l);g=n(l)}if(g!==null)var dr=!0;else{var St=n(u);St!==null&&ye($,St.startTime-j),dr=!1}return dr}finally{g=null,p=O,y=!1}}var k=!1,E=null,N=-1,G=5,C=-1;function D(){return!(e.unstable_now()-C<G)}function je(){if(E!==null){var S=e.unstable_now();C=S;var j=!0;try{j=E(!0,S)}finally{j?Le():(k=!1,E=null)}}else k=!1}var Le;if(typeof c=="function")Le=function(){c(je)};else if(typeof MessageChannel<"u"){var ur=new MessageChannel,cr=ur.port2;ur.port1.onmessage=je,Le=function(){cr.postMessage(null)}}else Le=function(){A(je,0)};function wt(S){E=S,k||(k=!0,Le())}function ye(S,j){N=A(function(){S(e.unstable_now())},j)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(S){S.callback=null},e.unstable_continueExecution=function(){h||y||(h=!0,wt(_))},e.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<S?Math.floor(1e3/S):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(S){switch(p){case 1:case 2:case 3:var j=3;break;default:j=p}var O=p;p=j;try{return S()}finally{p=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(S,j){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var O=p;p=S;try{return j()}finally{p=O}},e.unstable_scheduleCallback=function(S,j,O){var Q=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?Q+O:Q):O=Q,S){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=O+X,S={id:v++,callback:j,priorityLevel:S,startTime:O,expirationTime:X,sortIndex:-1},O>Q?(S.sortIndex=O,t(u,S),n(l)===null&&S===n(u)&&(w?(f(N),N=-1):w=!0,ye($,O-Q))):(S.sortIndex=X,t(l,S),h||y||(h=!0,wt(_))),S},e.unstable_shouldYield=D,e.unstable_wrapCallback=function(S){var j=p;return function(){var O=p;p=j;try{return S.apply(this,arguments)}finally{p=O}}}})(Tl);Dl.exports=Tl;var gd=Dl.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pd=J,we=gd;function x(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Rl=new Set,Bn={};function Lt(e,t){sn(e,t),sn(e+"Capture",t)}function sn(e,t){for(Bn[e]=t,e=0;e<t.length;e++)Rl.add(t[e])}var Ye=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),uo=Object.prototype.hasOwnProperty,vd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,as={},ss={};function yd(e){return uo.call(ss,e)?!0:uo.call(as,e)?!1:vd.test(e)?ss[e]=!0:(as[e]=!0,!1)}function $d(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function xd(e,t,n,r){if(t===null||typeof t>"u"||$d(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function de(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){re[e]=new de(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];re[t]=new de(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){re[e]=new de(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){re[e]=new de(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){re[e]=new de(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){re[e]=new de(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){re[e]=new de(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){re[e]=new de(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){re[e]=new de(e,5,!1,e.toLowerCase(),null,!1,!1)});var da=/[\-:]([a-z])/g;function fa(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(da,fa);re[t]=new de(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(da,fa);re[t]=new de(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(da,fa);re[t]=new de(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){re[e]=new de(e,1,!1,e.toLowerCase(),null,!1,!1)});re.xlinkHref=new de("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){re[e]=new de(e,1,!1,e.toLowerCase(),null,!0,!0)});function ma(e,t,n,r){var i=re.hasOwnProperty(t)?re[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(xd(t,n,i,r)&&(n=null),r||i===null?yd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var et=pd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,gr=Symbol.for("react.element"),Ft=Symbol.for("react.portal"),qt=Symbol.for("react.fragment"),ga=Symbol.for("react.strict_mode"),co=Symbol.for("react.profiler"),Ll=Symbol.for("react.provider"),Ml=Symbol.for("react.context"),pa=Symbol.for("react.forward_ref"),fo=Symbol.for("react.suspense"),mo=Symbol.for("react.suspense_list"),va=Symbol.for("react.memo"),nt=Symbol.for("react.lazy"),Gl=Symbol.for("react.offscreen"),ls=Symbol.iterator;function xn(e){return e===null||typeof e!="object"?null:(e=ls&&e[ls]||e["@@iterator"],typeof e=="function"?e:null)}var U=Object.assign,Ai;function Cn(e){if(Ai===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ai=t&&t[1]||""}return`
`+Ai+e}var bi=!1;function Di(e,t){if(!e||bi)return"";bi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(a!==1||s!==1)do if(a--,s--,0>s||i[a]!==o[s]){var l=`
`+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=s);break}}}finally{bi=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Cn(e):""}function hd(e){switch(e.tag){case 5:return Cn(e.type);case 16:return Cn("Lazy");case 13:return Cn("Suspense");case 19:return Cn("SuspenseList");case 0:case 2:case 15:return e=Di(e.type,!1),e;case 11:return e=Di(e.type.render,!1),e;case 1:return e=Di(e.type,!0),e;default:return""}}function go(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case qt:return"Fragment";case Ft:return"Portal";case co:return"Profiler";case ga:return"StrictMode";case fo:return"Suspense";case mo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ml:return(e.displayName||"Context")+".Consumer";case Ll:return(e._context.displayName||"Context")+".Provider";case pa:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case va:return t=e.displayName||null,t!==null?t:go(e.type)||"Memo";case nt:t=e._payload,e=e._init;try{return go(e(t))}catch{}}return null}function wd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return go(t);case 8:return t===ga?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function vt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Bl(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Sd(e){var t=Bl(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function pr(e){e._valueTracker||(e._valueTracker=Sd(e))}function Fl(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Bl(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function qr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function po(e,t){var n=t.checked;return U({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function us(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=vt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ql(e,t){t=t.checked,t!=null&&ma(e,"checked",t,!1)}function vo(e,t){ql(e,t);var n=vt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?yo(e,t.type,n):t.hasOwnProperty("defaultValue")&&yo(e,t.type,vt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function cs(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function yo(e,t,n){(t!=="number"||qr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var En=Array.isArray;function en(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+vt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function $o(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(x(91));return U({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ds(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(x(92));if(En(n)){if(1<n.length)throw Error(x(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:vt(n)}}function Ul(e,t){var n=vt(t.value),r=vt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function fs(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Vl(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Vl(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var vr,Ql=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(vr=vr||document.createElement("div"),vr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=vr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Fn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var On={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kd=["Webkit","ms","Moz","O"];Object.keys(On).forEach(function(e){kd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),On[t]=On[e]})});function Wl(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||On.hasOwnProperty(e)&&On[e]?(""+t).trim():t+"px"}function Hl(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Wl(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Pd=U({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ho(e,t){if(t){if(Pd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(x(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(x(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(x(61))}if(t.style!=null&&typeof t.style!="object")throw Error(x(62))}}function wo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var So=null;function ya(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ko=null,tn=null,nn=null;function ms(e){if(e=sr(e)){if(typeof ko!="function")throw Error(x(280));var t=e.stateNode;t&&(t=$i(t),ko(e.stateNode,e.type,t))}}function Kl(e){tn?nn?nn.push(e):nn=[e]:tn=e}function Yl(){if(tn){var e=tn,t=nn;if(nn=tn=null,ms(e),t)for(e=0;e<t.length;e++)ms(t[e])}}function Xl(e,t){return e(t)}function Zl(){}var Ti=!1;function Jl(e,t,n){if(Ti)return e(t,n);Ti=!0;try{return Xl(e,t,n)}finally{Ti=!1,(tn!==null||nn!==null)&&(Zl(),Yl())}}function qn(e,t){var n=e.stateNode;if(n===null)return null;var r=$i(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(x(231,t,typeof n));return n}var Po=!1;if(Ye)try{var hn={};Object.defineProperty(hn,"passive",{get:function(){Po=!0}}),window.addEventListener("test",hn,hn),window.removeEventListener("test",hn,hn)}catch{Po=!1}function _d(e,t,n,r,i,o,a,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(v){this.onError(v)}}var zn=!1,Ur=null,Vr=!1,_o=null,Id={onError:function(e){zn=!0,Ur=e}};function Cd(e,t,n,r,i,o,a,s,l){zn=!1,Ur=null,_d.apply(Id,arguments)}function Ed(e,t,n,r,i,o,a,s,l){if(Cd.apply(this,arguments),zn){if(zn){var u=Ur;zn=!1,Ur=null}else throw Error(x(198));Vr||(Vr=!0,_o=u)}}function Mt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function eu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function gs(e){if(Mt(e)!==e)throw Error(x(188))}function Nd(e){var t=e.alternate;if(!t){if(t=Mt(e),t===null)throw Error(x(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return gs(i),e;if(o===r)return gs(i),t;o=o.sibling}throw Error(x(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?e:t}function tu(e){return e=Nd(e),e!==null?nu(e):null}function nu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=nu(e);if(t!==null)return t;e=e.sibling}return null}var ru=we.unstable_scheduleCallback,ps=we.unstable_cancelCallback,jd=we.unstable_shouldYield,Od=we.unstable_requestPaint,W=we.unstable_now,zd=we.unstable_getCurrentPriorityLevel,$a=we.unstable_ImmediatePriority,iu=we.unstable_UserBlockingPriority,Qr=we.unstable_NormalPriority,Ad=we.unstable_LowPriority,ou=we.unstable_IdlePriority,gi=null,Fe=null;function bd(e){if(Fe&&typeof Fe.onCommitFiberRoot=="function")try{Fe.onCommitFiberRoot(gi,e,void 0,(e.current.flags&128)===128)}catch{}}var De=Math.clz32?Math.clz32:Rd,Dd=Math.log,Td=Math.LN2;function Rd(e){return e>>>=0,e===0?32:31-(Dd(e)/Td|0)|0}var yr=64,$r=4194304;function Nn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Wr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~i;s!==0?r=Nn(s):(o&=a,o!==0&&(r=Nn(o)))}else a=n&~i,a!==0?r=Nn(a):o!==0&&(r=Nn(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-De(t),i=1<<n,r|=e[n],t&=~i;return r}function Ld(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Md(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-De(o),s=1<<a,l=i[a];l===-1?(!(s&n)||s&r)&&(i[a]=Ld(s,t)):l<=t&&(e.expiredLanes|=s),o&=~s}}function Io(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function au(){var e=yr;return yr<<=1,!(yr&4194240)&&(yr=64),e}function Ri(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function or(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-De(t),e[t]=n}function Gd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-De(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function xa(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-De(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var T=0;function su(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var lu,ha,uu,cu,du,Co=!1,xr=[],lt=null,ut=null,ct=null,Un=new Map,Vn=new Map,it=[],Bd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function vs(e,t){switch(e){case"focusin":case"focusout":lt=null;break;case"dragenter":case"dragleave":ut=null;break;case"mouseover":case"mouseout":ct=null;break;case"pointerover":case"pointerout":Un.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vn.delete(t.pointerId)}}function wn(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=sr(t),t!==null&&ha(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Fd(e,t,n,r,i){switch(t){case"focusin":return lt=wn(lt,e,t,n,r,i),!0;case"dragenter":return ut=wn(ut,e,t,n,r,i),!0;case"mouseover":return ct=wn(ct,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Un.set(o,wn(Un.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Vn.set(o,wn(Vn.get(o)||null,e,t,n,r,i)),!0}return!1}function fu(e){var t=It(e.target);if(t!==null){var n=Mt(t);if(n!==null){if(t=n.tag,t===13){if(t=eu(n),t!==null){e.blockedOn=t,du(e.priority,function(){uu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ar(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Eo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);So=r,n.target.dispatchEvent(r),So=null}else return t=sr(n),t!==null&&ha(t),e.blockedOn=n,!1;t.shift()}return!0}function ys(e,t,n){Ar(e)&&n.delete(t)}function qd(){Co=!1,lt!==null&&Ar(lt)&&(lt=null),ut!==null&&Ar(ut)&&(ut=null),ct!==null&&Ar(ct)&&(ct=null),Un.forEach(ys),Vn.forEach(ys)}function Sn(e,t){e.blockedOn===t&&(e.blockedOn=null,Co||(Co=!0,we.unstable_scheduleCallback(we.unstable_NormalPriority,qd)))}function Qn(e){function t(i){return Sn(i,e)}if(0<xr.length){Sn(xr[0],e);for(var n=1;n<xr.length;n++){var r=xr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(lt!==null&&Sn(lt,e),ut!==null&&Sn(ut,e),ct!==null&&Sn(ct,e),Un.forEach(t),Vn.forEach(t),n=0;n<it.length;n++)r=it[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<it.length&&(n=it[0],n.blockedOn===null);)fu(n),n.blockedOn===null&&it.shift()}var rn=et.ReactCurrentBatchConfig,Hr=!0;function Ud(e,t,n,r){var i=T,o=rn.transition;rn.transition=null;try{T=1,wa(e,t,n,r)}finally{T=i,rn.transition=o}}function Vd(e,t,n,r){var i=T,o=rn.transition;rn.transition=null;try{T=4,wa(e,t,n,r)}finally{T=i,rn.transition=o}}function wa(e,t,n,r){if(Hr){var i=Eo(e,t,n,r);if(i===null)Wi(e,t,r,Kr,n),vs(e,r);else if(Fd(i,e,t,n,r))r.stopPropagation();else if(vs(e,r),t&4&&-1<Bd.indexOf(e)){for(;i!==null;){var o=sr(i);if(o!==null&&lu(o),o=Eo(e,t,n,r),o===null&&Wi(e,t,r,Kr,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Wi(e,t,r,null,n)}}var Kr=null;function Eo(e,t,n,r){if(Kr=null,e=ya(r),e=It(e),e!==null)if(t=Mt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=eu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Kr=e,null}function mu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(zd()){case $a:return 1;case iu:return 4;case Qr:case Ad:return 16;case ou:return 536870912;default:return 16}default:return 16}}var at=null,Sa=null,br=null;function gu(){if(br)return br;var e,t=Sa,n=t.length,r,i="value"in at?at.value:at.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return br=i.slice(e,1<r?1-r:void 0)}function Dr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function hr(){return!0}function $s(){return!1}function ke(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?hr:$s,this.isPropagationStopped=$s,this}return U(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=hr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=hr)},persist:function(){},isPersistent:hr}),t}var vn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ka=ke(vn),ar=U({},vn,{view:0,detail:0}),Qd=ke(ar),Li,Mi,kn,pi=U({},ar,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==kn&&(kn&&e.type==="mousemove"?(Li=e.screenX-kn.screenX,Mi=e.screenY-kn.screenY):Mi=Li=0,kn=e),Li)},movementY:function(e){return"movementY"in e?e.movementY:Mi}}),xs=ke(pi),Wd=U({},pi,{dataTransfer:0}),Hd=ke(Wd),Kd=U({},ar,{relatedTarget:0}),Gi=ke(Kd),Yd=U({},vn,{animationName:0,elapsedTime:0,pseudoElement:0}),Xd=ke(Yd),Zd=U({},vn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Jd=ke(Zd),ef=U({},vn,{data:0}),hs=ke(ef),tf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function of(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=rf[e])?!!t[e]:!1}function Pa(){return of}var af=U({},ar,{key:function(e){if(e.key){var t=tf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Dr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?nf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pa,charCode:function(e){return e.type==="keypress"?Dr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Dr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),sf=ke(af),lf=U({},pi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ws=ke(lf),uf=U({},ar,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pa}),cf=ke(uf),df=U({},vn,{propertyName:0,elapsedTime:0,pseudoElement:0}),ff=ke(df),mf=U({},pi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),gf=ke(mf),pf=[9,13,27,32],_a=Ye&&"CompositionEvent"in window,An=null;Ye&&"documentMode"in document&&(An=document.documentMode);var vf=Ye&&"TextEvent"in window&&!An,pu=Ye&&(!_a||An&&8<An&&11>=An),Ss=" ",ks=!1;function vu(e,t){switch(e){case"keyup":return pf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ut=!1;function yf(e,t){switch(e){case"compositionend":return yu(t);case"keypress":return t.which!==32?null:(ks=!0,Ss);case"textInput":return e=t.data,e===Ss&&ks?null:e;default:return null}}function $f(e,t){if(Ut)return e==="compositionend"||!_a&&vu(e,t)?(e=gu(),br=Sa=at=null,Ut=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return pu&&t.locale!=="ko"?null:t.data;default:return null}}var xf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ps(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!xf[e.type]:t==="textarea"}function $u(e,t,n,r){Kl(r),t=Yr(t,"onChange"),0<t.length&&(n=new ka("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var bn=null,Wn=null;function hf(e){Nu(e,0)}function vi(e){var t=Wt(e);if(Fl(t))return e}function wf(e,t){if(e==="change")return t}var xu=!1;if(Ye){var Bi;if(Ye){var Fi="oninput"in document;if(!Fi){var _s=document.createElement("div");_s.setAttribute("oninput","return;"),Fi=typeof _s.oninput=="function"}Bi=Fi}else Bi=!1;xu=Bi&&(!document.documentMode||9<document.documentMode)}function Is(){bn&&(bn.detachEvent("onpropertychange",hu),Wn=bn=null)}function hu(e){if(e.propertyName==="value"&&vi(Wn)){var t=[];$u(t,Wn,e,ya(e)),Jl(hf,t)}}function Sf(e,t,n){e==="focusin"?(Is(),bn=t,Wn=n,bn.attachEvent("onpropertychange",hu)):e==="focusout"&&Is()}function kf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return vi(Wn)}function Pf(e,t){if(e==="click")return vi(t)}function _f(e,t){if(e==="input"||e==="change")return vi(t)}function If(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Re=typeof Object.is=="function"?Object.is:If;function Hn(e,t){if(Re(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!uo.call(t,i)||!Re(e[i],t[i]))return!1}return!0}function Cs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Es(e,t){var n=Cs(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Cs(n)}}function wu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?wu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Su(){for(var e=window,t=qr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=qr(e.document)}return t}function Ia(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Cf(e){var t=Su(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&wu(n.ownerDocument.documentElement,n)){if(r!==null&&Ia(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Es(n,o);var a=Es(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ef=Ye&&"documentMode"in document&&11>=document.documentMode,Vt=null,No=null,Dn=null,jo=!1;function Ns(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;jo||Vt==null||Vt!==qr(r)||(r=Vt,"selectionStart"in r&&Ia(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Dn&&Hn(Dn,r)||(Dn=r,r=Yr(No,"onSelect"),0<r.length&&(t=new ka("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Vt)))}function wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Qt={animationend:wr("Animation","AnimationEnd"),animationiteration:wr("Animation","AnimationIteration"),animationstart:wr("Animation","AnimationStart"),transitionend:wr("Transition","TransitionEnd")},qi={},ku={};Ye&&(ku=document.createElement("div").style,"AnimationEvent"in window||(delete Qt.animationend.animation,delete Qt.animationiteration.animation,delete Qt.animationstart.animation),"TransitionEvent"in window||delete Qt.transitionend.transition);function yi(e){if(qi[e])return qi[e];if(!Qt[e])return e;var t=Qt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ku)return qi[e]=t[n];return e}var Pu=yi("animationend"),_u=yi("animationiteration"),Iu=yi("animationstart"),Cu=yi("transitionend"),Eu=new Map,js="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $t(e,t){Eu.set(e,t),Lt(t,[e])}for(var Ui=0;Ui<js.length;Ui++){var Vi=js[Ui],Nf=Vi.toLowerCase(),jf=Vi[0].toUpperCase()+Vi.slice(1);$t(Nf,"on"+jf)}$t(Pu,"onAnimationEnd");$t(_u,"onAnimationIteration");$t(Iu,"onAnimationStart");$t("dblclick","onDoubleClick");$t("focusin","onFocus");$t("focusout","onBlur");$t(Cu,"onTransitionEnd");sn("onMouseEnter",["mouseout","mouseover"]);sn("onMouseLeave",["mouseout","mouseover"]);sn("onPointerEnter",["pointerout","pointerover"]);sn("onPointerLeave",["pointerout","pointerover"]);Lt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Lt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Lt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Lt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Lt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Lt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var jn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Of=new Set("cancel close invalid load scroll toggle".split(" ").concat(jn));function Os(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Ed(r,t,void 0,e),e.currentTarget=null}function Nu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==o&&i.isPropagationStopped())break e;Os(i,s,u),o=l}else for(a=0;a<r.length;a++){if(s=r[a],l=s.instance,u=s.currentTarget,s=s.listener,l!==o&&i.isPropagationStopped())break e;Os(i,s,u),o=l}}}if(Vr)throw e=_o,Vr=!1,_o=null,e}function L(e,t){var n=t[Do];n===void 0&&(n=t[Do]=new Set);var r=e+"__bubble";n.has(r)||(ju(t,e,2,!1),n.add(r))}function Qi(e,t,n){var r=0;t&&(r|=4),ju(n,e,r,t)}var Sr="_reactListening"+Math.random().toString(36).slice(2);function Kn(e){if(!e[Sr]){e[Sr]=!0,Rl.forEach(function(n){n!=="selectionchange"&&(Of.has(n)||Qi(n,!1,e),Qi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Sr]||(t[Sr]=!0,Qi("selectionchange",!1,t))}}function ju(e,t,n,r){switch(mu(t)){case 1:var i=Ud;break;case 4:i=Vd;break;default:i=wa}n=i.bind(null,t,n,e),i=void 0,!Po||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Wi(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;a=a.return}for(;s!==null;){if(a=It(s),a===null)return;if(l=a.tag,l===5||l===6){r=o=a;continue e}s=s.parentNode}}r=r.return}Jl(function(){var u=o,v=ya(n),g=[];e:{var p=Eu.get(e);if(p!==void 0){var y=ka,h=e;switch(e){case"keypress":if(Dr(n)===0)break e;case"keydown":case"keyup":y=sf;break;case"focusin":h="focus",y=Gi;break;case"focusout":h="blur",y=Gi;break;case"beforeblur":case"afterblur":y=Gi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=xs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Hd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=cf;break;case Pu:case _u:case Iu:y=Xd;break;case Cu:y=ff;break;case"scroll":y=Qd;break;case"wheel":y=gf;break;case"copy":case"cut":case"paste":y=Jd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=ws}var w=(t&4)!==0,A=!w&&e==="scroll",f=w?p!==null?p+"Capture":null:p;w=[];for(var c=u,m;c!==null;){m=c;var $=m.stateNode;if(m.tag===5&&$!==null&&(m=$,f!==null&&($=qn(c,f),$!=null&&w.push(Yn(c,$,m)))),A)break;c=c.return}0<w.length&&(p=new y(p,h,null,n,v),g.push({event:p,listeners:w}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",p&&n!==So&&(h=n.relatedTarget||n.fromElement)&&(It(h)||h[Xe]))break e;if((y||p)&&(p=v.window===v?v:(p=v.ownerDocument)?p.defaultView||p.parentWindow:window,y?(h=n.relatedTarget||n.toElement,y=u,h=h?It(h):null,h!==null&&(A=Mt(h),h!==A||h.tag!==5&&h.tag!==6)&&(h=null)):(y=null,h=u),y!==h)){if(w=xs,$="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(w=ws,$="onPointerLeave",f="onPointerEnter",c="pointer"),A=y==null?p:Wt(y),m=h==null?p:Wt(h),p=new w($,c+"leave",y,n,v),p.target=A,p.relatedTarget=m,$=null,It(v)===u&&(w=new w(f,c+"enter",h,n,v),w.target=m,w.relatedTarget=A,$=w),A=$,y&&h)t:{for(w=y,f=h,c=0,m=w;m;m=Gt(m))c++;for(m=0,$=f;$;$=Gt($))m++;for(;0<c-m;)w=Gt(w),c--;for(;0<m-c;)f=Gt(f),m--;for(;c--;){if(w===f||f!==null&&w===f.alternate)break t;w=Gt(w),f=Gt(f)}w=null}else w=null;y!==null&&zs(g,p,y,w,!1),h!==null&&A!==null&&zs(g,A,h,w,!0)}}e:{if(p=u?Wt(u):window,y=p.nodeName&&p.nodeName.toLowerCase(),y==="select"||y==="input"&&p.type==="file")var _=wf;else if(Ps(p))if(xu)_=_f;else{_=kf;var k=Sf}else(y=p.nodeName)&&y.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(_=Pf);if(_&&(_=_(e,u))){$u(g,_,n,v);break e}k&&k(e,p,u),e==="focusout"&&(k=p._wrapperState)&&k.controlled&&p.type==="number"&&yo(p,"number",p.value)}switch(k=u?Wt(u):window,e){case"focusin":(Ps(k)||k.contentEditable==="true")&&(Vt=k,No=u,Dn=null);break;case"focusout":Dn=No=Vt=null;break;case"mousedown":jo=!0;break;case"contextmenu":case"mouseup":case"dragend":jo=!1,Ns(g,n,v);break;case"selectionchange":if(Ef)break;case"keydown":case"keyup":Ns(g,n,v)}var E;if(_a)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Ut?vu(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(pu&&n.locale!=="ko"&&(Ut||N!=="onCompositionStart"?N==="onCompositionEnd"&&Ut&&(E=gu()):(at=v,Sa="value"in at?at.value:at.textContent,Ut=!0)),k=Yr(u,N),0<k.length&&(N=new hs(N,e,null,n,v),g.push({event:N,listeners:k}),E?N.data=E:(E=yu(n),E!==null&&(N.data=E)))),(E=vf?yf(e,n):$f(e,n))&&(u=Yr(u,"onBeforeInput"),0<u.length&&(v=new hs("onBeforeInput","beforeinput",null,n,v),g.push({event:v,listeners:u}),v.data=E))}Nu(g,t)})}function Yn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Yr(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=qn(e,n),o!=null&&r.unshift(Yn(e,o,i)),o=qn(e,t),o!=null&&r.push(Yn(e,o,i))),e=e.return}return r}function Gt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function zs(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,i?(l=qn(n,o),l!=null&&a.unshift(Yn(n,l,s))):i||(l=qn(n,o),l!=null&&a.push(Yn(n,l,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var zf=/\r\n?/g,Af=/\u0000|\uFFFD/g;function As(e){return(typeof e=="string"?e:""+e).replace(zf,`
`).replace(Af,"")}function kr(e,t,n){if(t=As(t),As(e)!==t&&n)throw Error(x(425))}function Xr(){}var Oo=null,zo=null;function Ao(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var bo=typeof setTimeout=="function"?setTimeout:void 0,bf=typeof clearTimeout=="function"?clearTimeout:void 0,bs=typeof Promise=="function"?Promise:void 0,Df=typeof queueMicrotask=="function"?queueMicrotask:typeof bs<"u"?function(e){return bs.resolve(null).then(e).catch(Tf)}:bo;function Tf(e){setTimeout(function(){throw e})}function Hi(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Qn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Qn(t)}function dt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ds(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var yn=Math.random().toString(36).slice(2),Be="__reactFiber$"+yn,Xn="__reactProps$"+yn,Xe="__reactContainer$"+yn,Do="__reactEvents$"+yn,Rf="__reactListeners$"+yn,Lf="__reactHandles$"+yn;function It(e){var t=e[Be];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Xe]||n[Be]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ds(e);e!==null;){if(n=e[Be])return n;e=Ds(e)}return t}e=n,n=e.parentNode}return null}function sr(e){return e=e[Be]||e[Xe],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Wt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(x(33))}function $i(e){return e[Xn]||null}var To=[],Ht=-1;function xt(e){return{current:e}}function M(e){0>Ht||(e.current=To[Ht],To[Ht]=null,Ht--)}function R(e,t){Ht++,To[Ht]=e.current,e.current=t}var yt={},se=xt(yt),ge=xt(!1),At=yt;function ln(e,t){var n=e.type.contextTypes;if(!n)return yt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function pe(e){return e=e.childContextTypes,e!=null}function Zr(){M(ge),M(se)}function Ts(e,t,n){if(se.current!==yt)throw Error(x(168));R(se,t),R(ge,n)}function Ou(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(x(108,wd(e)||"Unknown",i));return U({},n,r)}function Jr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||yt,At=se.current,R(se,e),R(ge,ge.current),!0}function Rs(e,t,n){var r=e.stateNode;if(!r)throw Error(x(169));n?(e=Ou(e,t,At),r.__reactInternalMemoizedMergedChildContext=e,M(ge),M(se),R(se,e)):M(ge),R(ge,n)}var Ve=null,xi=!1,Ki=!1;function zu(e){Ve===null?Ve=[e]:Ve.push(e)}function Mf(e){xi=!0,zu(e)}function ht(){if(!Ki&&Ve!==null){Ki=!0;var e=0,t=T;try{var n=Ve;for(T=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ve=null,xi=!1}catch(i){throw Ve!==null&&(Ve=Ve.slice(e+1)),ru($a,ht),i}finally{T=t,Ki=!1}}return null}var Kt=[],Yt=0,ei=null,ti=0,Pe=[],_e=0,bt=null,Qe=1,We="";function Pt(e,t){Kt[Yt++]=ti,Kt[Yt++]=ei,ei=e,ti=t}function Au(e,t,n){Pe[_e++]=Qe,Pe[_e++]=We,Pe[_e++]=bt,bt=e;var r=Qe;e=We;var i=32-De(r)-1;r&=~(1<<i),n+=1;var o=32-De(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Qe=1<<32-De(t)+i|n<<i|r,We=o+e}else Qe=1<<o|n<<i|r,We=e}function Ca(e){e.return!==null&&(Pt(e,1),Au(e,1,0))}function Ea(e){for(;e===ei;)ei=Kt[--Yt],Kt[Yt]=null,ti=Kt[--Yt],Kt[Yt]=null;for(;e===bt;)bt=Pe[--_e],Pe[_e]=null,We=Pe[--_e],Pe[_e]=null,Qe=Pe[--_e],Pe[_e]=null}var he=null,xe=null,B=!1,be=null;function bu(e,t){var n=Ie(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ls(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,he=e,xe=dt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,he=e,xe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=bt!==null?{id:Qe,overflow:We}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ie(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,he=e,xe=null,!0):!1;default:return!1}}function Ro(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Lo(e){if(B){var t=xe;if(t){var n=t;if(!Ls(e,t)){if(Ro(e))throw Error(x(418));t=dt(n.nextSibling);var r=he;t&&Ls(e,t)?bu(r,n):(e.flags=e.flags&-4097|2,B=!1,he=e)}}else{if(Ro(e))throw Error(x(418));e.flags=e.flags&-4097|2,B=!1,he=e}}}function Ms(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;he=e}function Pr(e){if(e!==he)return!1;if(!B)return Ms(e),B=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ao(e.type,e.memoizedProps)),t&&(t=xe)){if(Ro(e))throw Du(),Error(x(418));for(;t;)bu(e,t),t=dt(t.nextSibling)}if(Ms(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(x(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){xe=dt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}xe=null}}else xe=he?dt(e.stateNode.nextSibling):null;return!0}function Du(){for(var e=xe;e;)e=dt(e.nextSibling)}function un(){xe=he=null,B=!1}function Na(e){be===null?be=[e]:be.push(e)}var Gf=et.ReactCurrentBatchConfig;function Pn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var r=n.stateNode}if(!r)throw Error(x(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var s=i.refs;a===null?delete s[o]:s[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,e))}return e}function _r(e,t){throw e=Object.prototype.toString.call(t),Error(x(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Gs(e){var t=e._init;return t(e._payload)}function Tu(e){function t(f,c){if(e){var m=f.deletions;m===null?(f.deletions=[c],f.flags|=16):m.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function i(f,c){return f=pt(f,c),f.index=0,f.sibling=null,f}function o(f,c,m){return f.index=m,e?(m=f.alternate,m!==null?(m=m.index,m<c?(f.flags|=2,c):m):(f.flags|=2,c)):(f.flags|=1048576,c)}function a(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,c,m,$){return c===null||c.tag!==6?(c=no(m,f.mode,$),c.return=f,c):(c=i(c,m),c.return=f,c)}function l(f,c,m,$){var _=m.type;return _===qt?v(f,c,m.props.children,$,m.key):c!==null&&(c.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===nt&&Gs(_)===c.type)?($=i(c,m.props),$.ref=Pn(f,c,m),$.return=f,$):($=Fr(m.type,m.key,m.props,null,f.mode,$),$.ref=Pn(f,c,m),$.return=f,$)}function u(f,c,m,$){return c===null||c.tag!==4||c.stateNode.containerInfo!==m.containerInfo||c.stateNode.implementation!==m.implementation?(c=ro(m,f.mode,$),c.return=f,c):(c=i(c,m.children||[]),c.return=f,c)}function v(f,c,m,$,_){return c===null||c.tag!==7?(c=jt(m,f.mode,$,_),c.return=f,c):(c=i(c,m),c.return=f,c)}function g(f,c,m){if(typeof c=="string"&&c!==""||typeof c=="number")return c=no(""+c,f.mode,m),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case gr:return m=Fr(c.type,c.key,c.props,null,f.mode,m),m.ref=Pn(f,null,c),m.return=f,m;case Ft:return c=ro(c,f.mode,m),c.return=f,c;case nt:var $=c._init;return g(f,$(c._payload),m)}if(En(c)||xn(c))return c=jt(c,f.mode,m,null),c.return=f,c;_r(f,c)}return null}function p(f,c,m,$){var _=c!==null?c.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return _!==null?null:s(f,c,""+m,$);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case gr:return m.key===_?l(f,c,m,$):null;case Ft:return m.key===_?u(f,c,m,$):null;case nt:return _=m._init,p(f,c,_(m._payload),$)}if(En(m)||xn(m))return _!==null?null:v(f,c,m,$,null);_r(f,m)}return null}function y(f,c,m,$,_){if(typeof $=="string"&&$!==""||typeof $=="number")return f=f.get(m)||null,s(c,f,""+$,_);if(typeof $=="object"&&$!==null){switch($.$$typeof){case gr:return f=f.get($.key===null?m:$.key)||null,l(c,f,$,_);case Ft:return f=f.get($.key===null?m:$.key)||null,u(c,f,$,_);case nt:var k=$._init;return y(f,c,m,k($._payload),_)}if(En($)||xn($))return f=f.get(m)||null,v(c,f,$,_,null);_r(c,$)}return null}function h(f,c,m,$){for(var _=null,k=null,E=c,N=c=0,G=null;E!==null&&N<m.length;N++){E.index>N?(G=E,E=null):G=E.sibling;var C=p(f,E,m[N],$);if(C===null){E===null&&(E=G);break}e&&E&&C.alternate===null&&t(f,E),c=o(C,c,N),k===null?_=C:k.sibling=C,k=C,E=G}if(N===m.length)return n(f,E),B&&Pt(f,N),_;if(E===null){for(;N<m.length;N++)E=g(f,m[N],$),E!==null&&(c=o(E,c,N),k===null?_=E:k.sibling=E,k=E);return B&&Pt(f,N),_}for(E=r(f,E);N<m.length;N++)G=y(E,f,N,m[N],$),G!==null&&(e&&G.alternate!==null&&E.delete(G.key===null?N:G.key),c=o(G,c,N),k===null?_=G:k.sibling=G,k=G);return e&&E.forEach(function(D){return t(f,D)}),B&&Pt(f,N),_}function w(f,c,m,$){var _=xn(m);if(typeof _!="function")throw Error(x(150));if(m=_.call(m),m==null)throw Error(x(151));for(var k=_=null,E=c,N=c=0,G=null,C=m.next();E!==null&&!C.done;N++,C=m.next()){E.index>N?(G=E,E=null):G=E.sibling;var D=p(f,E,C.value,$);if(D===null){E===null&&(E=G);break}e&&E&&D.alternate===null&&t(f,E),c=o(D,c,N),k===null?_=D:k.sibling=D,k=D,E=G}if(C.done)return n(f,E),B&&Pt(f,N),_;if(E===null){for(;!C.done;N++,C=m.next())C=g(f,C.value,$),C!==null&&(c=o(C,c,N),k===null?_=C:k.sibling=C,k=C);return B&&Pt(f,N),_}for(E=r(f,E);!C.done;N++,C=m.next())C=y(E,f,N,C.value,$),C!==null&&(e&&C.alternate!==null&&E.delete(C.key===null?N:C.key),c=o(C,c,N),k===null?_=C:k.sibling=C,k=C);return e&&E.forEach(function(je){return t(f,je)}),B&&Pt(f,N),_}function A(f,c,m,$){if(typeof m=="object"&&m!==null&&m.type===qt&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case gr:e:{for(var _=m.key,k=c;k!==null;){if(k.key===_){if(_=m.type,_===qt){if(k.tag===7){n(f,k.sibling),c=i(k,m.props.children),c.return=f,f=c;break e}}else if(k.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===nt&&Gs(_)===k.type){n(f,k.sibling),c=i(k,m.props),c.ref=Pn(f,k,m),c.return=f,f=c;break e}n(f,k);break}else t(f,k);k=k.sibling}m.type===qt?(c=jt(m.props.children,f.mode,$,m.key),c.return=f,f=c):($=Fr(m.type,m.key,m.props,null,f.mode,$),$.ref=Pn(f,c,m),$.return=f,f=$)}return a(f);case Ft:e:{for(k=m.key;c!==null;){if(c.key===k)if(c.tag===4&&c.stateNode.containerInfo===m.containerInfo&&c.stateNode.implementation===m.implementation){n(f,c.sibling),c=i(c,m.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=ro(m,f.mode,$),c.return=f,f=c}return a(f);case nt:return k=m._init,A(f,c,k(m._payload),$)}if(En(m))return h(f,c,m,$);if(xn(m))return w(f,c,m,$);_r(f,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,c!==null&&c.tag===6?(n(f,c.sibling),c=i(c,m),c.return=f,f=c):(n(f,c),c=no(m,f.mode,$),c.return=f,f=c),a(f)):n(f,c)}return A}var cn=Tu(!0),Ru=Tu(!1),ni=xt(null),ri=null,Xt=null,ja=null;function Oa(){ja=Xt=ri=null}function za(e){var t=ni.current;M(ni),e._currentValue=t}function Mo(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function on(e,t){ri=e,ja=Xt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(me=!0),e.firstContext=null)}function Ee(e){var t=e._currentValue;if(ja!==e)if(e={context:e,memoizedValue:t,next:null},Xt===null){if(ri===null)throw Error(x(308));Xt=e,ri.dependencies={lanes:0,firstContext:e}}else Xt=Xt.next=e;return t}var Ct=null;function Aa(e){Ct===null?Ct=[e]:Ct.push(e)}function Lu(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Aa(t)):(n.next=i.next,i.next=n),t.interleaved=n,Ze(e,r)}function Ze(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var rt=!1;function ba(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Mu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ke(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ft(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,b&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Ze(e,n)}return i=r.interleaved,i===null?(t.next=t,Aa(r)):(t.next=i.next,i.next=t),r.interleaved=t,Ze(e,n)}function Tr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,xa(e,n)}}function Bs(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ii(e,t,n,r){var i=e.updateQueue;rt=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,u=l.next;l.next=null,a===null?o=u:a.next=u,a=l;var v=e.alternate;v!==null&&(v=v.updateQueue,s=v.lastBaseUpdate,s!==a&&(s===null?v.firstBaseUpdate=u:s.next=u,v.lastBaseUpdate=l))}if(o!==null){var g=i.baseState;a=0,v=u=l=null,s=o;do{var p=s.lane,y=s.eventTime;if((r&p)===p){v!==null&&(v=v.next={eventTime:y,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var h=e,w=s;switch(p=t,y=n,w.tag){case 1:if(h=w.payload,typeof h=="function"){g=h.call(y,g,p);break e}g=h;break e;case 3:h.flags=h.flags&-65537|128;case 0:if(h=w.payload,p=typeof h=="function"?h.call(y,g,p):h,p==null)break e;g=U({},g,p);break e;case 2:rt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[s]:p.push(s))}else y={eventTime:y,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},v===null?(u=v=y,l=g):v=v.next=y,a|=p;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(v===null&&(l=g),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=v,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Tt|=a,e.lanes=a,e.memoizedState=g}}function Fs(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(x(191,i));i.call(r)}}}var lr={},qe=xt(lr),Zn=xt(lr),Jn=xt(lr);function Et(e){if(e===lr)throw Error(x(174));return e}function Da(e,t){switch(R(Jn,t),R(Zn,e),R(qe,lr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:xo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=xo(t,e)}M(qe),R(qe,t)}function dn(){M(qe),M(Zn),M(Jn)}function Gu(e){Et(Jn.current);var t=Et(qe.current),n=xo(t,e.type);t!==n&&(R(Zn,e),R(qe,n))}function Ta(e){Zn.current===e&&(M(qe),M(Zn))}var F=xt(0);function oi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Yi=[];function Ra(){for(var e=0;e<Yi.length;e++)Yi[e]._workInProgressVersionPrimary=null;Yi.length=0}var Rr=et.ReactCurrentDispatcher,Xi=et.ReactCurrentBatchConfig,Dt=0,q=null,K=null,Z=null,ai=!1,Tn=!1,er=0,Bf=0;function ie(){throw Error(x(321))}function La(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Re(e[n],t[n]))return!1;return!0}function Ma(e,t,n,r,i,o){if(Dt=o,q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Rr.current=e===null||e.memoizedState===null?Vf:Qf,e=n(r,i),Tn){o=0;do{if(Tn=!1,er=0,25<=o)throw Error(x(301));o+=1,Z=K=null,t.updateQueue=null,Rr.current=Wf,e=n(r,i)}while(Tn)}if(Rr.current=si,t=K!==null&&K.next!==null,Dt=0,Z=K=q=null,ai=!1,t)throw Error(x(300));return e}function Ga(){var e=er!==0;return er=0,e}function Ge(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Z===null?q.memoizedState=Z=e:Z=Z.next=e,Z}function Ne(){if(K===null){var e=q.alternate;e=e!==null?e.memoizedState:null}else e=K.next;var t=Z===null?q.memoizedState:Z.next;if(t!==null)Z=t,K=e;else{if(e===null)throw Error(x(310));K=e,e={memoizedState:K.memoizedState,baseState:K.baseState,baseQueue:K.baseQueue,queue:K.queue,next:null},Z===null?q.memoizedState=Z=e:Z=Z.next=e}return Z}function tr(e,t){return typeof t=="function"?t(e):t}function Zi(e){var t=Ne(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=K,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=a=null,l=null,u=o;do{var v=u.lane;if((Dt&v)===v)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var g={lane:v,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=g,a=r):l=l.next=g,q.lanes|=v,Tt|=v}u=u.next}while(u!==null&&u!==o);l===null?a=r:l.next=s,Re(r,t.memoizedState)||(me=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,q.lanes|=o,Tt|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ji(e){var t=Ne(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);Re(o,t.memoizedState)||(me=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Bu(){}function Fu(e,t){var n=q,r=Ne(),i=t(),o=!Re(r.memoizedState,i);if(o&&(r.memoizedState=i,me=!0),r=r.queue,Ba(Vu.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Z!==null&&Z.memoizedState.tag&1){if(n.flags|=2048,nr(9,Uu.bind(null,n,r,i,t),void 0,null),ee===null)throw Error(x(349));Dt&30||qu(n,t,i)}return i}function qu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=q.updateQueue,t===null?(t={lastEffect:null,stores:null},q.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Uu(e,t,n,r){t.value=n,t.getSnapshot=r,Qu(t)&&Wu(e)}function Vu(e,t,n){return n(function(){Qu(t)&&Wu(e)})}function Qu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Re(e,n)}catch{return!0}}function Wu(e){var t=Ze(e,1);t!==null&&Te(t,e,1,-1)}function qs(e){var t=Ge();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:tr,lastRenderedState:e},t.queue=e,e=e.dispatch=Uf.bind(null,q,e),[t.memoizedState,e]}function nr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=q.updateQueue,t===null?(t={lastEffect:null,stores:null},q.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Hu(){return Ne().memoizedState}function Lr(e,t,n,r){var i=Ge();q.flags|=e,i.memoizedState=nr(1|t,n,void 0,r===void 0?null:r)}function hi(e,t,n,r){var i=Ne();r=r===void 0?null:r;var o=void 0;if(K!==null){var a=K.memoizedState;if(o=a.destroy,r!==null&&La(r,a.deps)){i.memoizedState=nr(t,n,o,r);return}}q.flags|=e,i.memoizedState=nr(1|t,n,o,r)}function Us(e,t){return Lr(8390656,8,e,t)}function Ba(e,t){return hi(2048,8,e,t)}function Ku(e,t){return hi(4,2,e,t)}function Yu(e,t){return hi(4,4,e,t)}function Xu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Zu(e,t,n){return n=n!=null?n.concat([e]):null,hi(4,4,Xu.bind(null,t,e),n)}function Fa(){}function Ju(e,t){var n=Ne();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&La(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ec(e,t){var n=Ne();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&La(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function tc(e,t,n){return Dt&21?(Re(n,t)||(n=au(),q.lanes|=n,Tt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,me=!0),e.memoizedState=n)}function Ff(e,t){var n=T;T=n!==0&&4>n?n:4,e(!0);var r=Xi.transition;Xi.transition={};try{e(!1),t()}finally{T=n,Xi.transition=r}}function nc(){return Ne().memoizedState}function qf(e,t,n){var r=gt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},rc(e))ic(t,n);else if(n=Lu(e,t,n,r),n!==null){var i=ue();Te(n,e,r,i),oc(n,t,r)}}function Uf(e,t,n){var r=gt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(rc(e))ic(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,s=o(a,n);if(i.hasEagerState=!0,i.eagerState=s,Re(s,a)){var l=t.interleaved;l===null?(i.next=i,Aa(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Lu(e,t,i,r),n!==null&&(i=ue(),Te(n,e,r,i),oc(n,t,r))}}function rc(e){var t=e.alternate;return e===q||t!==null&&t===q}function ic(e,t){Tn=ai=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function oc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,xa(e,n)}}var si={readContext:Ee,useCallback:ie,useContext:ie,useEffect:ie,useImperativeHandle:ie,useInsertionEffect:ie,useLayoutEffect:ie,useMemo:ie,useReducer:ie,useRef:ie,useState:ie,useDebugValue:ie,useDeferredValue:ie,useTransition:ie,useMutableSource:ie,useSyncExternalStore:ie,useId:ie,unstable_isNewReconciler:!1},Vf={readContext:Ee,useCallback:function(e,t){return Ge().memoizedState=[e,t===void 0?null:t],e},useContext:Ee,useEffect:Us,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Lr(4194308,4,Xu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Lr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Lr(4,2,e,t)},useMemo:function(e,t){var n=Ge();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ge();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=qf.bind(null,q,e),[r.memoizedState,e]},useRef:function(e){var t=Ge();return e={current:e},t.memoizedState=e},useState:qs,useDebugValue:Fa,useDeferredValue:function(e){return Ge().memoizedState=e},useTransition:function(){var e=qs(!1),t=e[0];return e=Ff.bind(null,e[1]),Ge().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=q,i=Ge();if(B){if(n===void 0)throw Error(x(407));n=n()}else{if(n=t(),ee===null)throw Error(x(349));Dt&30||qu(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Us(Vu.bind(null,r,o,e),[e]),r.flags|=2048,nr(9,Uu.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Ge(),t=ee.identifierPrefix;if(B){var n=We,r=Qe;n=(r&~(1<<32-De(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=er++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Bf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Qf={readContext:Ee,useCallback:Ju,useContext:Ee,useEffect:Ba,useImperativeHandle:Zu,useInsertionEffect:Ku,useLayoutEffect:Yu,useMemo:ec,useReducer:Zi,useRef:Hu,useState:function(){return Zi(tr)},useDebugValue:Fa,useDeferredValue:function(e){var t=Ne();return tc(t,K.memoizedState,e)},useTransition:function(){var e=Zi(tr)[0],t=Ne().memoizedState;return[e,t]},useMutableSource:Bu,useSyncExternalStore:Fu,useId:nc,unstable_isNewReconciler:!1},Wf={readContext:Ee,useCallback:Ju,useContext:Ee,useEffect:Ba,useImperativeHandle:Zu,useInsertionEffect:Ku,useLayoutEffect:Yu,useMemo:ec,useReducer:Ji,useRef:Hu,useState:function(){return Ji(tr)},useDebugValue:Fa,useDeferredValue:function(e){var t=Ne();return K===null?t.memoizedState=e:tc(t,K.memoizedState,e)},useTransition:function(){var e=Ji(tr)[0],t=Ne().memoizedState;return[e,t]},useMutableSource:Bu,useSyncExternalStore:Fu,useId:nc,unstable_isNewReconciler:!1};function ze(e,t){if(e&&e.defaultProps){t=U({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Go(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:U({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var wi={isMounted:function(e){return(e=e._reactInternals)?Mt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ue(),i=gt(e),o=Ke(r,i);o.payload=t,n!=null&&(o.callback=n),t=ft(e,o,i),t!==null&&(Te(t,e,i,r),Tr(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ue(),i=gt(e),o=Ke(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=ft(e,o,i),t!==null&&(Te(t,e,i,r),Tr(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ue(),r=gt(e),i=Ke(n,r);i.tag=2,t!=null&&(i.callback=t),t=ft(e,i,r),t!==null&&(Te(t,e,r,n),Tr(t,e,r))}};function Vs(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Hn(n,r)||!Hn(i,o):!0}function ac(e,t,n){var r=!1,i=yt,o=t.contextType;return typeof o=="object"&&o!==null?o=Ee(o):(i=pe(t)?At:se.current,r=t.contextTypes,o=(r=r!=null)?ln(e,i):yt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=wi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Qs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&wi.enqueueReplaceState(t,t.state,null)}function Bo(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},ba(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ee(o):(o=pe(t)?At:se.current,i.context=ln(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Go(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&wi.enqueueReplaceState(i,i.state,null),ii(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function fn(e,t){try{var n="",r=t;do n+=hd(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function eo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Fo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Hf=typeof WeakMap=="function"?WeakMap:Map;function sc(e,t,n){n=Ke(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ui||(ui=!0,Zo=r),Fo(e,t)},n}function lc(e,t,n){n=Ke(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Fo(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Fo(e,t),typeof r!="function"&&(mt===null?mt=new Set([this]):mt.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Ws(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Hf;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=l1.bind(null,e,t,n),t.then(e,e))}function Hs(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ks(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ke(-1,1),t.tag=2,ft(n,t,1))),n.lanes|=1),e)}var Kf=et.ReactCurrentOwner,me=!1;function le(e,t,n,r){t.child=e===null?Ru(t,null,n,r):cn(t,e.child,n,r)}function Ys(e,t,n,r,i){n=n.render;var o=t.ref;return on(t,i),r=Ma(e,t,n,r,o,i),n=Ga(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Je(e,t,i)):(B&&n&&Ca(t),t.flags|=1,le(e,t,r,i),t.child)}function Xs(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Ya(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,uc(e,t,o,r,i)):(e=Fr(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Hn,n(a,r)&&e.ref===t.ref)return Je(e,t,i)}return t.flags|=1,e=pt(o,r),e.ref=t.ref,e.return=t,t.child=e}function uc(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Hn(o,r)&&e.ref===t.ref)if(me=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(me=!0);else return t.lanes=e.lanes,Je(e,t,i)}return qo(e,t,n,r,i)}function cc(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},R(Jt,$e),$e|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,R(Jt,$e),$e|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,R(Jt,$e),$e|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,R(Jt,$e),$e|=r;return le(e,t,i,n),t.child}function dc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function qo(e,t,n,r,i){var o=pe(n)?At:se.current;return o=ln(t,o),on(t,i),n=Ma(e,t,n,r,o,i),r=Ga(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Je(e,t,i)):(B&&r&&Ca(t),t.flags|=1,le(e,t,n,i),t.child)}function Zs(e,t,n,r,i){if(pe(n)){var o=!0;Jr(t)}else o=!1;if(on(t,i),t.stateNode===null)Mr(e,t),ac(t,n,r),Bo(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ee(u):(u=pe(n)?At:se.current,u=ln(t,u));var v=n.getDerivedStateFromProps,g=typeof v=="function"||typeof a.getSnapshotBeforeUpdate=="function";g||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||l!==u)&&Qs(t,a,r,u),rt=!1;var p=t.memoizedState;a.state=p,ii(t,r,a,i),l=t.memoizedState,s!==r||p!==l||ge.current||rt?(typeof v=="function"&&(Go(t,n,v,r),l=t.memoizedState),(s=rt||Vs(t,n,s,r,p,l,u))?(g||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=u,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Mu(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:ze(t.type,s),a.props=u,g=t.pendingProps,p=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ee(l):(l=pe(n)?At:se.current,l=ln(t,l));var y=n.getDerivedStateFromProps;(v=typeof y=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==g||p!==l)&&Qs(t,a,r,l),rt=!1,p=t.memoizedState,a.state=p,ii(t,r,a,i);var h=t.memoizedState;s!==g||p!==h||ge.current||rt?(typeof y=="function"&&(Go(t,n,y,r),h=t.memoizedState),(u=rt||Vs(t,n,u,r,p,h,l)||!1)?(v||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,h,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,h,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),a.props=r,a.state=h,a.context=l,r=u):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Uo(e,t,n,r,o,i)}function Uo(e,t,n,r,i,o){dc(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Rs(t,n,!1),Je(e,t,o);r=t.stateNode,Kf.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=cn(t,e.child,null,o),t.child=cn(t,null,s,o)):le(e,t,s,o),t.memoizedState=r.state,i&&Rs(t,n,!0),t.child}function fc(e){var t=e.stateNode;t.pendingContext?Ts(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ts(e,t.context,!1),Da(e,t.containerInfo)}function Js(e,t,n,r,i){return un(),Na(i),t.flags|=256,le(e,t,n,r),t.child}var Vo={dehydrated:null,treeContext:null,retryLane:0};function Qo(e){return{baseLanes:e,cachePool:null,transitions:null}}function mc(e,t,n){var r=t.pendingProps,i=F.current,o=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),R(F,i&1),e===null)return Lo(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Pi(a,r,0,null),e=jt(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Qo(n),t.memoizedState=Vo,e):qa(t,a));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Yf(e,t,a,r,s,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,s=i.sibling;var l={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=pt(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=pt(s,o):(o=jt(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?Qo(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Vo,r}return o=e.child,e=o.sibling,r=pt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function qa(e,t){return t=Pi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ir(e,t,n,r){return r!==null&&Na(r),cn(t,e.child,null,n),e=qa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Yf(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=eo(Error(x(422))),Ir(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Pi({mode:"visible",children:r.children},i,0,null),o=jt(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&cn(t,e.child,null,a),t.child.memoizedState=Qo(a),t.memoizedState=Vo,o);if(!(t.mode&1))return Ir(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(x(419)),r=eo(o,r,void 0),Ir(e,t,a,r)}if(s=(a&e.childLanes)!==0,me||s){if(r=ee,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Ze(e,i),Te(r,e,i,-1))}return Ka(),r=eo(Error(x(421))),Ir(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=u1.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,xe=dt(i.nextSibling),he=t,B=!0,be=null,e!==null&&(Pe[_e++]=Qe,Pe[_e++]=We,Pe[_e++]=bt,Qe=e.id,We=e.overflow,bt=t),t=qa(t,r.children),t.flags|=4096,t)}function el(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Mo(e.return,t,n)}function to(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function gc(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(le(e,t,r.children,n),r=F.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&el(e,n,t);else if(e.tag===19)el(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(R(F,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&oi(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),to(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&oi(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}to(t,!0,n,null,o);break;case"together":to(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Mr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Je(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Tt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(x(153));if(t.child!==null){for(e=t.child,n=pt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=pt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Xf(e,t,n){switch(t.tag){case 3:fc(t),un();break;case 5:Gu(t);break;case 1:pe(t.type)&&Jr(t);break;case 4:Da(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;R(ni,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(R(F,F.current&1),t.flags|=128,null):n&t.child.childLanes?mc(e,t,n):(R(F,F.current&1),e=Je(e,t,n),e!==null?e.sibling:null);R(F,F.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return gc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),R(F,F.current),r)break;return null;case 22:case 23:return t.lanes=0,cc(e,t,n)}return Je(e,t,n)}var pc,Wo,vc,yc;pc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Wo=function(){};vc=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Et(qe.current);var o=null;switch(n){case"input":i=po(e,i),r=po(e,r),o=[];break;case"select":i=U({},i,{value:void 0}),r=U({},r,{value:void 0}),o=[];break;case"textarea":i=$o(e,i),r=$o(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Xr)}ho(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Bn.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Bn.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&L("scroll",e),o||s===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};yc=function(e,t,n,r){n!==r&&(t.flags|=4)};function _n(e,t){if(!B)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Zf(e,t,n){var r=t.pendingProps;switch(Ea(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oe(t),null;case 1:return pe(t.type)&&Zr(),oe(t),null;case 3:return r=t.stateNode,dn(),M(ge),M(se),Ra(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Pr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,be!==null&&(ta(be),be=null))),Wo(e,t),oe(t),null;case 5:Ta(t);var i=Et(Jn.current);if(n=t.type,e!==null&&t.stateNode!=null)vc(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(x(166));return oe(t),null}if(e=Et(qe.current),Pr(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Be]=t,r[Xn]=o,e=(t.mode&1)!==0,n){case"dialog":L("cancel",r),L("close",r);break;case"iframe":case"object":case"embed":L("load",r);break;case"video":case"audio":for(i=0;i<jn.length;i++)L(jn[i],r);break;case"source":L("error",r);break;case"img":case"image":case"link":L("error",r),L("load",r);break;case"details":L("toggle",r);break;case"input":us(r,o),L("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},L("invalid",r);break;case"textarea":ds(r,o),L("invalid",r)}ho(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&kr(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&kr(r.textContent,s,e),i=["children",""+s]):Bn.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&L("scroll",r)}switch(n){case"input":pr(r),cs(r,o,!0);break;case"textarea":pr(r),fs(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Xr)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Vl(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Be]=t,e[Xn]=r,pc(e,t,!1,!1),t.stateNode=e;e:{switch(a=wo(n,r),n){case"dialog":L("cancel",e),L("close",e),i=r;break;case"iframe":case"object":case"embed":L("load",e),i=r;break;case"video":case"audio":for(i=0;i<jn.length;i++)L(jn[i],e);i=r;break;case"source":L("error",e),i=r;break;case"img":case"image":case"link":L("error",e),L("load",e),i=r;break;case"details":L("toggle",e),i=r;break;case"input":us(e,r),i=po(e,r),L("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=U({},r,{value:void 0}),L("invalid",e);break;case"textarea":ds(e,r),i=$o(e,r),L("invalid",e);break;default:i=r}ho(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="style"?Hl(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Ql(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Fn(e,l):typeof l=="number"&&Fn(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Bn.hasOwnProperty(o)?l!=null&&o==="onScroll"&&L("scroll",e):l!=null&&ma(e,o,l,a))}switch(n){case"input":pr(e),cs(e,r,!1);break;case"textarea":pr(e),fs(e);break;case"option":r.value!=null&&e.setAttribute("value",""+vt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?en(e,!!r.multiple,o,!1):r.defaultValue!=null&&en(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Xr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return oe(t),null;case 6:if(e&&t.stateNode!=null)yc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(x(166));if(n=Et(Jn.current),Et(qe.current),Pr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Be]=t,(o=r.nodeValue!==n)&&(e=he,e!==null))switch(e.tag){case 3:kr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&kr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Be]=t,t.stateNode=r}return oe(t),null;case 13:if(M(F),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(B&&xe!==null&&t.mode&1&&!(t.flags&128))Du(),un(),t.flags|=98560,o=!1;else if(o=Pr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(x(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(x(317));o[Be]=t}else un(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;oe(t),o=!1}else be!==null&&(ta(be),be=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||F.current&1?Y===0&&(Y=3):Ka())),t.updateQueue!==null&&(t.flags|=4),oe(t),null);case 4:return dn(),Wo(e,t),e===null&&Kn(t.stateNode.containerInfo),oe(t),null;case 10:return za(t.type._context),oe(t),null;case 17:return pe(t.type)&&Zr(),oe(t),null;case 19:if(M(F),o=t.memoizedState,o===null)return oe(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)_n(o,!1);else{if(Y!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=oi(e),a!==null){for(t.flags|=128,_n(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return R(F,F.current&1|2),t.child}e=e.sibling}o.tail!==null&&W()>mn&&(t.flags|=128,r=!0,_n(o,!1),t.lanes=4194304)}else{if(!r)if(e=oi(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),_n(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!B)return oe(t),null}else 2*W()-o.renderingStartTime>mn&&n!==1073741824&&(t.flags|=128,r=!0,_n(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=W(),t.sibling=null,n=F.current,R(F,r?n&1|2:n&1),t):(oe(t),null);case 22:case 23:return Ha(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?$e&1073741824&&(oe(t),t.subtreeFlags&6&&(t.flags|=8192)):oe(t),null;case 24:return null;case 25:return null}throw Error(x(156,t.tag))}function Jf(e,t){switch(Ea(t),t.tag){case 1:return pe(t.type)&&Zr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return dn(),M(ge),M(se),Ra(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ta(t),null;case 13:if(M(F),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(x(340));un()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return M(F),null;case 4:return dn(),null;case 10:return za(t.type._context),null;case 22:case 23:return Ha(),null;case 24:return null;default:return null}}var Cr=!1,ae=!1,e1=typeof WeakSet=="function"?WeakSet:Set,I=null;function Zt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){V(e,t,r)}else n.current=null}function Ho(e,t,n){try{n()}catch(r){V(e,t,r)}}var tl=!1;function t1(e,t){if(Oo=Hr,e=Su(),Ia(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,s=-1,l=-1,u=0,v=0,g=e,p=null;t:for(;;){for(var y;g!==n||i!==0&&g.nodeType!==3||(s=a+i),g!==o||r!==0&&g.nodeType!==3||(l=a+r),g.nodeType===3&&(a+=g.nodeValue.length),(y=g.firstChild)!==null;)p=g,g=y;for(;;){if(g===e)break t;if(p===n&&++u===i&&(s=a),p===o&&++v===r&&(l=a),(y=g.nextSibling)!==null)break;g=p,p=g.parentNode}g=y}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(zo={focusedElem:e,selectionRange:n},Hr=!1,I=t;I!==null;)if(t=I,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,I=e;else for(;I!==null;){t=I;try{var h=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(h!==null){var w=h.memoizedProps,A=h.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?w:ze(t.type,w),A);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch($){V(t,t.return,$)}if(e=t.sibling,e!==null){e.return=t.return,I=e;break}I=t.return}return h=tl,tl=!1,h}function Rn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Ho(t,n,o)}i=i.next}while(i!==r)}}function Si(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ko(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function $c(e){var t=e.alternate;t!==null&&(e.alternate=null,$c(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Be],delete t[Xn],delete t[Do],delete t[Rf],delete t[Lf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function xc(e){return e.tag===5||e.tag===3||e.tag===4}function nl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||xc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Yo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Xr));else if(r!==4&&(e=e.child,e!==null))for(Yo(e,t,n),e=e.sibling;e!==null;)Yo(e,t,n),e=e.sibling}function Xo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Xo(e,t,n),e=e.sibling;e!==null;)Xo(e,t,n),e=e.sibling}var te=null,Ae=!1;function tt(e,t,n){for(n=n.child;n!==null;)hc(e,t,n),n=n.sibling}function hc(e,t,n){if(Fe&&typeof Fe.onCommitFiberUnmount=="function")try{Fe.onCommitFiberUnmount(gi,n)}catch{}switch(n.tag){case 5:ae||Zt(n,t);case 6:var r=te,i=Ae;te=null,tt(e,t,n),te=r,Ae=i,te!==null&&(Ae?(e=te,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):te.removeChild(n.stateNode));break;case 18:te!==null&&(Ae?(e=te,n=n.stateNode,e.nodeType===8?Hi(e.parentNode,n):e.nodeType===1&&Hi(e,n),Qn(e)):Hi(te,n.stateNode));break;case 4:r=te,i=Ae,te=n.stateNode.containerInfo,Ae=!0,tt(e,t,n),te=r,Ae=i;break;case 0:case 11:case 14:case 15:if(!ae&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Ho(n,t,a),i=i.next}while(i!==r)}tt(e,t,n);break;case 1:if(!ae&&(Zt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){V(n,t,s)}tt(e,t,n);break;case 21:tt(e,t,n);break;case 22:n.mode&1?(ae=(r=ae)||n.memoizedState!==null,tt(e,t,n),ae=r):tt(e,t,n);break;default:tt(e,t,n)}}function rl(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new e1),t.forEach(function(r){var i=c1.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Oe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:te=s.stateNode,Ae=!1;break e;case 3:te=s.stateNode.containerInfo,Ae=!0;break e;case 4:te=s.stateNode.containerInfo,Ae=!0;break e}s=s.return}if(te===null)throw Error(x(160));hc(o,a,i),te=null,Ae=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){V(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)wc(t,e),t=t.sibling}function wc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Oe(t,e),Me(e),r&4){try{Rn(3,e,e.return),Si(3,e)}catch(w){V(e,e.return,w)}try{Rn(5,e,e.return)}catch(w){V(e,e.return,w)}}break;case 1:Oe(t,e),Me(e),r&512&&n!==null&&Zt(n,n.return);break;case 5:if(Oe(t,e),Me(e),r&512&&n!==null&&Zt(n,n.return),e.flags&32){var i=e.stateNode;try{Fn(i,"")}catch(w){V(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&ql(i,o),wo(s,a);var u=wo(s,o);for(a=0;a<l.length;a+=2){var v=l[a],g=l[a+1];v==="style"?Hl(i,g):v==="dangerouslySetInnerHTML"?Ql(i,g):v==="children"?Fn(i,g):ma(i,v,g,u)}switch(s){case"input":vo(i,o);break;case"textarea":Ul(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?en(i,!!o.multiple,y,!1):p!==!!o.multiple&&(o.defaultValue!=null?en(i,!!o.multiple,o.defaultValue,!0):en(i,!!o.multiple,o.multiple?[]:"",!1))}i[Xn]=o}catch(w){V(e,e.return,w)}}break;case 6:if(Oe(t,e),Me(e),r&4){if(e.stateNode===null)throw Error(x(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){V(e,e.return,w)}}break;case 3:if(Oe(t,e),Me(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Qn(t.containerInfo)}catch(w){V(e,e.return,w)}break;case 4:Oe(t,e),Me(e);break;case 13:Oe(t,e),Me(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Qa=W())),r&4&&rl(e);break;case 22:if(v=n!==null&&n.memoizedState!==null,e.mode&1?(ae=(u=ae)||v,Oe(t,e),ae=u):Oe(t,e),Me(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!v&&e.mode&1)for(I=e,v=e.child;v!==null;){for(g=I=v;I!==null;){switch(p=I,y=p.child,p.tag){case 0:case 11:case 14:case 15:Rn(4,p,p.return);break;case 1:Zt(p,p.return);var h=p.stateNode;if(typeof h.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,h.props=t.memoizedProps,h.state=t.memoizedState,h.componentWillUnmount()}catch(w){V(r,n,w)}}break;case 5:Zt(p,p.return);break;case 22:if(p.memoizedState!==null){ol(g);continue}}y!==null?(y.return=p,I=y):ol(g)}v=v.sibling}e:for(v=null,g=e;;){if(g.tag===5){if(v===null){v=g;try{i=g.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=g.stateNode,l=g.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=Wl("display",a))}catch(w){V(e,e.return,w)}}}else if(g.tag===6){if(v===null)try{g.stateNode.nodeValue=u?"":g.memoizedProps}catch(w){V(e,e.return,w)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;v===g&&(v=null),g=g.return}v===g&&(v=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Oe(t,e),Me(e),r&4&&rl(e);break;case 21:break;default:Oe(t,e),Me(e)}}function Me(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(xc(n)){var r=n;break e}n=n.return}throw Error(x(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Fn(i,""),r.flags&=-33);var o=nl(e);Xo(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,s=nl(e);Yo(e,s,a);break;default:throw Error(x(161))}}catch(l){V(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function n1(e,t,n){I=e,Sc(e)}function Sc(e,t,n){for(var r=(e.mode&1)!==0;I!==null;){var i=I,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Cr;if(!a){var s=i.alternate,l=s!==null&&s.memoizedState!==null||ae;s=Cr;var u=ae;if(Cr=a,(ae=l)&&!u)for(I=i;I!==null;)a=I,l=a.child,a.tag===22&&a.memoizedState!==null?al(i):l!==null?(l.return=a,I=l):al(i);for(;o!==null;)I=o,Sc(o),o=o.sibling;I=i,Cr=s,ae=u}il(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,I=o):il(e)}}function il(e){for(;I!==null;){var t=I;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ae||Si(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ae)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ze(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Fs(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Fs(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var v=u.memoizedState;if(v!==null){var g=v.dehydrated;g!==null&&Qn(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}ae||t.flags&512&&Ko(t)}catch(p){V(t,t.return,p)}}if(t===e){I=null;break}if(n=t.sibling,n!==null){n.return=t.return,I=n;break}I=t.return}}function ol(e){for(;I!==null;){var t=I;if(t===e){I=null;break}var n=t.sibling;if(n!==null){n.return=t.return,I=n;break}I=t.return}}function al(e){for(;I!==null;){var t=I;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Si(4,t)}catch(l){V(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){V(t,i,l)}}var o=t.return;try{Ko(t)}catch(l){V(t,o,l)}break;case 5:var a=t.return;try{Ko(t)}catch(l){V(t,a,l)}}}catch(l){V(t,t.return,l)}if(t===e){I=null;break}var s=t.sibling;if(s!==null){s.return=t.return,I=s;break}I=t.return}}var r1=Math.ceil,li=et.ReactCurrentDispatcher,Ua=et.ReactCurrentOwner,Ce=et.ReactCurrentBatchConfig,b=0,ee=null,H=null,ne=0,$e=0,Jt=xt(0),Y=0,rr=null,Tt=0,ki=0,Va=0,Ln=null,fe=null,Qa=0,mn=1/0,Ue=null,ui=!1,Zo=null,mt=null,Er=!1,st=null,ci=0,Mn=0,Jo=null,Gr=-1,Br=0;function ue(){return b&6?W():Gr!==-1?Gr:Gr=W()}function gt(e){return e.mode&1?b&2&&ne!==0?ne&-ne:Gf.transition!==null?(Br===0&&(Br=au()),Br):(e=T,e!==0||(e=window.event,e=e===void 0?16:mu(e.type)),e):1}function Te(e,t,n,r){if(50<Mn)throw Mn=0,Jo=null,Error(x(185));or(e,n,r),(!(b&2)||e!==ee)&&(e===ee&&(!(b&2)&&(ki|=n),Y===4&&ot(e,ne)),ve(e,r),n===1&&b===0&&!(t.mode&1)&&(mn=W()+500,xi&&ht()))}function ve(e,t){var n=e.callbackNode;Md(e,t);var r=Wr(e,e===ee?ne:0);if(r===0)n!==null&&ps(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ps(n),t===1)e.tag===0?Mf(sl.bind(null,e)):zu(sl.bind(null,e)),Df(function(){!(b&6)&&ht()}),n=null;else{switch(su(r)){case 1:n=$a;break;case 4:n=iu;break;case 16:n=Qr;break;case 536870912:n=ou;break;default:n=Qr}n=jc(n,kc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function kc(e,t){if(Gr=-1,Br=0,b&6)throw Error(x(327));var n=e.callbackNode;if(an()&&e.callbackNode!==n)return null;var r=Wr(e,e===ee?ne:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=di(e,r);else{t=r;var i=b;b|=2;var o=_c();(ee!==e||ne!==t)&&(Ue=null,mn=W()+500,Nt(e,t));do try{a1();break}catch(s){Pc(e,s)}while(!0);Oa(),li.current=o,b=i,H!==null?t=0:(ee=null,ne=0,t=Y)}if(t!==0){if(t===2&&(i=Io(e),i!==0&&(r=i,t=ea(e,i))),t===1)throw n=rr,Nt(e,0),ot(e,r),ve(e,W()),n;if(t===6)ot(e,r);else{if(i=e.current.alternate,!(r&30)&&!i1(i)&&(t=di(e,r),t===2&&(o=Io(e),o!==0&&(r=o,t=ea(e,o))),t===1))throw n=rr,Nt(e,0),ot(e,r),ve(e,W()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(x(345));case 2:_t(e,fe,Ue);break;case 3:if(ot(e,r),(r&130023424)===r&&(t=Qa+500-W(),10<t)){if(Wr(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ue(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=bo(_t.bind(null,e,fe,Ue),t);break}_t(e,fe,Ue);break;case 4:if(ot(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-De(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=W()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*r1(r/1960))-r,10<r){e.timeoutHandle=bo(_t.bind(null,e,fe,Ue),r);break}_t(e,fe,Ue);break;case 5:_t(e,fe,Ue);break;default:throw Error(x(329))}}}return ve(e,W()),e.callbackNode===n?kc.bind(null,e):null}function ea(e,t){var n=Ln;return e.current.memoizedState.isDehydrated&&(Nt(e,t).flags|=256),e=di(e,t),e!==2&&(t=fe,fe=n,t!==null&&ta(t)),e}function ta(e){fe===null?fe=e:fe.push.apply(fe,e)}function i1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Re(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ot(e,t){for(t&=~Va,t&=~ki,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-De(t),r=1<<n;e[n]=-1,t&=~r}}function sl(e){if(b&6)throw Error(x(327));an();var t=Wr(e,0);if(!(t&1))return ve(e,W()),null;var n=di(e,t);if(e.tag!==0&&n===2){var r=Io(e);r!==0&&(t=r,n=ea(e,r))}if(n===1)throw n=rr,Nt(e,0),ot(e,t),ve(e,W()),n;if(n===6)throw Error(x(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,_t(e,fe,Ue),ve(e,W()),null}function Wa(e,t){var n=b;b|=1;try{return e(t)}finally{b=n,b===0&&(mn=W()+500,xi&&ht())}}function Rt(e){st!==null&&st.tag===0&&!(b&6)&&an();var t=b;b|=1;var n=Ce.transition,r=T;try{if(Ce.transition=null,T=1,e)return e()}finally{T=r,Ce.transition=n,b=t,!(b&6)&&ht()}}function Ha(){$e=Jt.current,M(Jt)}function Nt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,bf(n)),H!==null)for(n=H.return;n!==null;){var r=n;switch(Ea(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Zr();break;case 3:dn(),M(ge),M(se),Ra();break;case 5:Ta(r);break;case 4:dn();break;case 13:M(F);break;case 19:M(F);break;case 10:za(r.type._context);break;case 22:case 23:Ha()}n=n.return}if(ee=e,H=e=pt(e.current,null),ne=$e=t,Y=0,rr=null,Va=ki=Tt=0,fe=Ln=null,Ct!==null){for(t=0;t<Ct.length;t++)if(n=Ct[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}Ct=null}return e}function Pc(e,t){do{var n=H;try{if(Oa(),Rr.current=si,ai){for(var r=q.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ai=!1}if(Dt=0,Z=K=q=null,Tn=!1,er=0,Ua.current=null,n===null||n.return===null){Y=1,rr=t,H=null;break}e:{var o=e,a=n.return,s=n,l=t;if(t=ne,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,v=s,g=v.tag;if(!(v.mode&1)&&(g===0||g===11||g===15)){var p=v.alternate;p?(v.updateQueue=p.updateQueue,v.memoizedState=p.memoizedState,v.lanes=p.lanes):(v.updateQueue=null,v.memoizedState=null)}var y=Hs(a);if(y!==null){y.flags&=-257,Ks(y,a,s,o,t),y.mode&1&&Ws(o,u,t),t=y,l=u;var h=t.updateQueue;if(h===null){var w=new Set;w.add(l),t.updateQueue=w}else h.add(l);break e}else{if(!(t&1)){Ws(o,u,t),Ka();break e}l=Error(x(426))}}else if(B&&s.mode&1){var A=Hs(a);if(A!==null){!(A.flags&65536)&&(A.flags|=256),Ks(A,a,s,o,t),Na(fn(l,s));break e}}o=l=fn(l,s),Y!==4&&(Y=2),Ln===null?Ln=[o]:Ln.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=sc(o,l,t);Bs(o,f);break e;case 1:s=l;var c=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(mt===null||!mt.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var $=lc(o,s,t);Bs(o,$);break e}}o=o.return}while(o!==null)}Cc(n)}catch(_){t=_,H===n&&n!==null&&(H=n=n.return);continue}break}while(!0)}function _c(){var e=li.current;return li.current=si,e===null?si:e}function Ka(){(Y===0||Y===3||Y===2)&&(Y=4),ee===null||!(Tt&268435455)&&!(ki&268435455)||ot(ee,ne)}function di(e,t){var n=b;b|=2;var r=_c();(ee!==e||ne!==t)&&(Ue=null,Nt(e,t));do try{o1();break}catch(i){Pc(e,i)}while(!0);if(Oa(),b=n,li.current=r,H!==null)throw Error(x(261));return ee=null,ne=0,Y}function o1(){for(;H!==null;)Ic(H)}function a1(){for(;H!==null&&!jd();)Ic(H)}function Ic(e){var t=Nc(e.alternate,e,$e);e.memoizedProps=e.pendingProps,t===null?Cc(e):H=t,Ua.current=null}function Cc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Jf(n,t),n!==null){n.flags&=32767,H=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Y=6,H=null;return}}else if(n=Zf(n,t,$e),n!==null){H=n;return}if(t=t.sibling,t!==null){H=t;return}H=t=e}while(t!==null);Y===0&&(Y=5)}function _t(e,t,n){var r=T,i=Ce.transition;try{Ce.transition=null,T=1,s1(e,t,n,r)}finally{Ce.transition=i,T=r}return null}function s1(e,t,n,r){do an();while(st!==null);if(b&6)throw Error(x(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(x(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Gd(e,o),e===ee&&(H=ee=null,ne=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Er||(Er=!0,jc(Qr,function(){return an(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ce.transition,Ce.transition=null;var a=T;T=1;var s=b;b|=4,Ua.current=null,t1(e,n),wc(n,e),Cf(zo),Hr=!!Oo,zo=Oo=null,e.current=n,n1(n),Od(),b=s,T=a,Ce.transition=o}else e.current=n;if(Er&&(Er=!1,st=e,ci=i),o=e.pendingLanes,o===0&&(mt=null),bd(n.stateNode),ve(e,W()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ui)throw ui=!1,e=Zo,Zo=null,e;return ci&1&&e.tag!==0&&an(),o=e.pendingLanes,o&1?e===Jo?Mn++:(Mn=0,Jo=e):Mn=0,ht(),null}function an(){if(st!==null){var e=su(ci),t=Ce.transition,n=T;try{if(Ce.transition=null,T=16>e?16:e,st===null)var r=!1;else{if(e=st,st=null,ci=0,b&6)throw Error(x(331));var i=b;for(b|=4,I=e.current;I!==null;){var o=I,a=o.child;if(I.flags&16){var s=o.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(I=u;I!==null;){var v=I;switch(v.tag){case 0:case 11:case 15:Rn(8,v,o)}var g=v.child;if(g!==null)g.return=v,I=g;else for(;I!==null;){v=I;var p=v.sibling,y=v.return;if($c(v),v===u){I=null;break}if(p!==null){p.return=y,I=p;break}I=y}}}var h=o.alternate;if(h!==null){var w=h.child;if(w!==null){h.child=null;do{var A=w.sibling;w.sibling=null,w=A}while(w!==null)}}I=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,I=a;else e:for(;I!==null;){if(o=I,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Rn(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,I=f;break e}I=o.return}}var c=e.current;for(I=c;I!==null;){a=I;var m=a.child;if(a.subtreeFlags&2064&&m!==null)m.return=a,I=m;else e:for(a=c;I!==null;){if(s=I,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Si(9,s)}}catch(_){V(s,s.return,_)}if(s===a){I=null;break e}var $=s.sibling;if($!==null){$.return=s.return,I=$;break e}I=s.return}}if(b=i,ht(),Fe&&typeof Fe.onPostCommitFiberRoot=="function")try{Fe.onPostCommitFiberRoot(gi,e)}catch{}r=!0}return r}finally{T=n,Ce.transition=t}}return!1}function ll(e,t,n){t=fn(n,t),t=sc(e,t,1),e=ft(e,t,1),t=ue(),e!==null&&(or(e,1,t),ve(e,t))}function V(e,t,n){if(e.tag===3)ll(e,e,n);else for(;t!==null;){if(t.tag===3){ll(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(mt===null||!mt.has(r))){e=fn(n,e),e=lc(t,e,1),t=ft(t,e,1),e=ue(),t!==null&&(or(t,1,e),ve(t,e));break}}t=t.return}}function l1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ue(),e.pingedLanes|=e.suspendedLanes&n,ee===e&&(ne&n)===n&&(Y===4||Y===3&&(ne&130023424)===ne&&500>W()-Qa?Nt(e,0):Va|=n),ve(e,t)}function Ec(e,t){t===0&&(e.mode&1?(t=$r,$r<<=1,!($r&130023424)&&($r=4194304)):t=1);var n=ue();e=Ze(e,t),e!==null&&(or(e,t,n),ve(e,n))}function u1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ec(e,n)}function c1(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(t),Ec(e,n)}var Nc;Nc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ge.current)me=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return me=!1,Xf(e,t,n);me=!!(e.flags&131072)}else me=!1,B&&t.flags&1048576&&Au(t,ti,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Mr(e,t),e=t.pendingProps;var i=ln(t,se.current);on(t,n),i=Ma(null,t,r,e,i,n);var o=Ga();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,pe(r)?(o=!0,Jr(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ba(t),i.updater=wi,t.stateNode=i,i._reactInternals=t,Bo(t,r,e,n),t=Uo(null,t,r,!0,o,n)):(t.tag=0,B&&o&&Ca(t),le(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Mr(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=f1(r),e=ze(r,e),i){case 0:t=qo(null,t,r,e,n);break e;case 1:t=Zs(null,t,r,e,n);break e;case 11:t=Ys(null,t,r,e,n);break e;case 14:t=Xs(null,t,r,ze(r.type,e),n);break e}throw Error(x(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ze(r,i),qo(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ze(r,i),Zs(e,t,r,i,n);case 3:e:{if(fc(t),e===null)throw Error(x(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Mu(e,t),ii(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=fn(Error(x(423)),t),t=Js(e,t,r,n,i);break e}else if(r!==i){i=fn(Error(x(424)),t),t=Js(e,t,r,n,i);break e}else for(xe=dt(t.stateNode.containerInfo.firstChild),he=t,B=!0,be=null,n=Ru(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(un(),r===i){t=Je(e,t,n);break e}le(e,t,r,n)}t=t.child}return t;case 5:return Gu(t),e===null&&Lo(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,Ao(r,i)?a=null:o!==null&&Ao(r,o)&&(t.flags|=32),dc(e,t),le(e,t,a,n),t.child;case 6:return e===null&&Lo(t),null;case 13:return mc(e,t,n);case 4:return Da(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=cn(t,null,r,n):le(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ze(r,i),Ys(e,t,r,i,n);case 7:return le(e,t,t.pendingProps,n),t.child;case 8:return le(e,t,t.pendingProps.children,n),t.child;case 12:return le(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,R(ni,r._currentValue),r._currentValue=a,o!==null)if(Re(o.value,a)){if(o.children===i.children&&!ge.current){t=Je(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){a=o.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Ke(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var v=u.pending;v===null?l.next=l:(l.next=v.next,v.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Mo(o.return,n,t),s.lanes|=n;break}l=l.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(x(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Mo(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}le(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,on(t,n),i=Ee(i),r=r(i),t.flags|=1,le(e,t,r,n),t.child;case 14:return r=t.type,i=ze(r,t.pendingProps),i=ze(r.type,i),Xs(e,t,r,i,n);case 15:return uc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ze(r,i),Mr(e,t),t.tag=1,pe(r)?(e=!0,Jr(t)):e=!1,on(t,n),ac(t,r,i),Bo(t,r,i,n),Uo(null,t,r,!0,e,n);case 19:return gc(e,t,n);case 22:return cc(e,t,n)}throw Error(x(156,t.tag))};function jc(e,t){return ru(e,t)}function d1(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ie(e,t,n,r){return new d1(e,t,n,r)}function Ya(e){return e=e.prototype,!(!e||!e.isReactComponent)}function f1(e){if(typeof e=="function")return Ya(e)?1:0;if(e!=null){if(e=e.$$typeof,e===pa)return 11;if(e===va)return 14}return 2}function pt(e,t){var n=e.alternate;return n===null?(n=Ie(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Fr(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")Ya(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case qt:return jt(n.children,i,o,t);case ga:a=8,i|=8;break;case co:return e=Ie(12,n,t,i|2),e.elementType=co,e.lanes=o,e;case fo:return e=Ie(13,n,t,i),e.elementType=fo,e.lanes=o,e;case mo:return e=Ie(19,n,t,i),e.elementType=mo,e.lanes=o,e;case Gl:return Pi(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ll:a=10;break e;case Ml:a=9;break e;case pa:a=11;break e;case va:a=14;break e;case nt:a=16,r=null;break e}throw Error(x(130,e==null?e:typeof e,""))}return t=Ie(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function jt(e,t,n,r){return e=Ie(7,e,r,t),e.lanes=n,e}function Pi(e,t,n,r){return e=Ie(22,e,r,t),e.elementType=Gl,e.lanes=n,e.stateNode={isHidden:!1},e}function no(e,t,n){return e=Ie(6,e,null,t),e.lanes=n,e}function ro(e,t,n){return t=Ie(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function m1(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ri(0),this.expirationTimes=Ri(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ri(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Xa(e,t,n,r,i,o,a,s,l){return e=new m1(e,t,n,s,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ie(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ba(o),e}function g1(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ft,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Oc(e){if(!e)return yt;e=e._reactInternals;e:{if(Mt(e)!==e||e.tag!==1)throw Error(x(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(pe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(x(171))}if(e.tag===1){var n=e.type;if(pe(n))return Ou(e,n,t)}return t}function zc(e,t,n,r,i,o,a,s,l){return e=Xa(n,r,!0,e,i,o,a,s,l),e.context=Oc(null),n=e.current,r=ue(),i=gt(n),o=Ke(r,i),o.callback=t??null,ft(n,o,i),e.current.lanes=i,or(e,i,r),ve(e,r),e}function _i(e,t,n,r){var i=t.current,o=ue(),a=gt(i);return n=Oc(n),t.context===null?t.context=n:t.pendingContext=n,t=Ke(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ft(i,t,a),e!==null&&(Te(e,i,a,o),Tr(e,i,a)),a}function fi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ul(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Za(e,t){ul(e,t),(e=e.alternate)&&ul(e,t)}function p1(){return null}var Ac=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ja(e){this._internalRoot=e}Ii.prototype.render=Ja.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(x(409));_i(e,t,null,null)};Ii.prototype.unmount=Ja.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Rt(function(){_i(null,e,null,null)}),t[Xe]=null}};function Ii(e){this._internalRoot=e}Ii.prototype.unstable_scheduleHydration=function(e){if(e){var t=cu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<it.length&&t!==0&&t<it[n].priority;n++);it.splice(n,0,e),n===0&&fu(e)}};function es(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ci(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function cl(){}function v1(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=fi(a);o.call(u)}}var a=zc(t,r,e,0,null,!1,!1,"",cl);return e._reactRootContainer=a,e[Xe]=a.current,Kn(e.nodeType===8?e.parentNode:e),Rt(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=fi(l);s.call(u)}}var l=Xa(e,0,!1,null,null,!1,!1,"",cl);return e._reactRootContainer=l,e[Xe]=l.current,Kn(e.nodeType===8?e.parentNode:e),Rt(function(){_i(t,l,n,r)}),l}function Ei(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var s=i;i=function(){var l=fi(a);s.call(l)}}_i(t,a,e,i)}else a=v1(n,t,e,i,r);return fi(a)}lu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Nn(t.pendingLanes);n!==0&&(xa(t,n|1),ve(t,W()),!(b&6)&&(mn=W()+500,ht()))}break;case 13:Rt(function(){var r=Ze(e,1);if(r!==null){var i=ue();Te(r,e,1,i)}}),Za(e,1)}};ha=function(e){if(e.tag===13){var t=Ze(e,134217728);if(t!==null){var n=ue();Te(t,e,134217728,n)}Za(e,134217728)}};uu=function(e){if(e.tag===13){var t=gt(e),n=Ze(e,t);if(n!==null){var r=ue();Te(n,e,t,r)}Za(e,t)}};cu=function(){return T};du=function(e,t){var n=T;try{return T=e,t()}finally{T=n}};ko=function(e,t,n){switch(t){case"input":if(vo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=$i(r);if(!i)throw Error(x(90));Fl(r),vo(r,i)}}}break;case"textarea":Ul(e,n);break;case"select":t=n.value,t!=null&&en(e,!!n.multiple,t,!1)}};Xl=Wa;Zl=Rt;var y1={usingClientEntryPoint:!1,Events:[sr,Wt,$i,Kl,Yl,Wa]},In={findFiberByHostInstance:It,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},$1={bundleType:In.bundleType,version:In.version,rendererPackageName:In.rendererPackageName,rendererConfig:In.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:et.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=tu(e),e===null?null:e.stateNode},findFiberByHostInstance:In.findFiberByHostInstance||p1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Nr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Nr.isDisabled&&Nr.supportsFiber)try{gi=Nr.inject($1),Fe=Nr}catch{}}Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=y1;Se.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!es(t))throw Error(x(200));return g1(e,t,null,n)};Se.createRoot=function(e,t){if(!es(e))throw Error(x(299));var n=!1,r="",i=Ac;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Xa(e,1,!1,null,null,n,!1,r,i),e[Xe]=t.current,Kn(e.nodeType===8?e.parentNode:e),new Ja(t)};Se.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(x(188)):(e=Object.keys(e).join(","),Error(x(268,e)));return e=tu(t),e=e===null?null:e.stateNode,e};Se.flushSync=function(e){return Rt(e)};Se.hydrate=function(e,t,n){if(!Ci(t))throw Error(x(200));return Ei(null,e,t,!0,n)};Se.hydrateRoot=function(e,t,n){if(!es(e))throw Error(x(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=Ac;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=zc(t,null,e,1,n??null,i,!1,o,a),e[Xe]=t.current,Kn(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ii(t)};Se.render=function(e,t,n){if(!Ci(t))throw Error(x(200));return Ei(null,e,t,!1,n)};Se.unmountComponentAtNode=function(e){if(!Ci(e))throw Error(x(40));return e._reactRootContainer?(Rt(function(){Ei(null,null,e,!1,function(){e._reactRootContainer=null,e[Xe]=null})}),!0):!1};Se.unstable_batchedUpdates=Wa;Se.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ci(n))throw Error(x(200));if(e==null||e._reactInternals===void 0)throw Error(x(38));return Ei(e,t,n,!1,r)};Se.version="18.3.1-next-f1338f8080-20240426";function bc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bc)}catch(e){console.error(e)}}bc(),bl.exports=Se;var x1=bl.exports,dl=x1;lo.createRoot=dl.createRoot,lo.hydrateRoot=dl.hydrateRoot;const h1={},fl=e=>{let t;const n=new Set,r=(v,g)=>{const p=typeof v=="function"?v(t):v;if(!Object.is(p,t)){const y=t;t=g??(typeof p!="object"||p===null)?p:Object.assign({},t,p),n.forEach(h=>h(t,y))}},i=()=>t,l={setState:r,getState:i,getInitialState:()=>u,subscribe:v=>(n.add(v),()=>n.delete(v)),destroy:()=>{(h1?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},u=t=e(r,i,l);return l},w1=e=>e?fl(e):fl;var Dc={exports:{}},Tc={},Rc={exports:{}},Lc={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gn=J;function S1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var k1=typeof Object.is=="function"?Object.is:S1,P1=gn.useState,_1=gn.useEffect,I1=gn.useLayoutEffect,C1=gn.useDebugValue;function E1(e,t){var n=t(),r=P1({inst:{value:n,getSnapshot:t}}),i=r[0].inst,o=r[1];return I1(function(){i.value=n,i.getSnapshot=t,io(i)&&o({inst:i})},[e,n,t]),_1(function(){return io(i)&&o({inst:i}),e(function(){io(i)&&o({inst:i})})},[e]),C1(n),n}function io(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!k1(e,n)}catch{return!0}}function N1(e,t){return t()}var j1=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?N1:E1;Lc.useSyncExternalStore=gn.useSyncExternalStore!==void 0?gn.useSyncExternalStore:j1;Rc.exports=Lc;var O1=Rc.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ni=J,z1=O1;function A1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var b1=typeof Object.is=="function"?Object.is:A1,D1=z1.useSyncExternalStore,T1=Ni.useRef,R1=Ni.useEffect,L1=Ni.useMemo,M1=Ni.useDebugValue;Tc.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var o=T1(null);if(o.current===null){var a={hasValue:!1,value:null};o.current=a}else a=o.current;o=L1(function(){function l(y){if(!u){if(u=!0,v=y,y=r(y),i!==void 0&&a.hasValue){var h=a.value;if(i(h,y))return g=h}return g=y}if(h=g,b1(v,y))return h;var w=r(y);return i!==void 0&&i(h,w)?(v=y,h):(v=y,g=w)}var u=!1,v,g,p=n===void 0?null:n;return[function(){return l(t())},p===null?void 0:function(){return l(p())}]},[t,n,r,i]);var s=D1(e,o[0],o[1]);return R1(function(){a.hasValue=!0,a.value=s},[s]),M1(s),s};Dc.exports=Tc;var G1=Dc.exports;const B1=wl(G1),Mc={},{useDebugValue:F1}=zl,{useSyncExternalStoreWithSelector:q1}=B1;let ml=!1;const U1=e=>e;function V1(e,t=U1,n){(Mc?"production":void 0)!=="production"&&n&&!ml&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),ml=!0);const r=q1(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return F1(r),r}const gl=e=>{(Mc?"production":void 0)!=="production"&&typeof e!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const t=typeof e=="function"?w1(e):e,n=(r,i)=>V1(t,r,i);return Object.assign(n,t),n},ts=e=>e?gl(e):gl,na=(e,t)=>t.some(n=>e instanceof n);let pl,vl;function Q1(){return pl||(pl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function W1(){return vl||(vl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ra=new WeakMap,oo=new WeakMap,ji=new WeakMap;function H1(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",a)},o=()=>{n(Ot(e.result)),i()},a=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",a)});return ji.set(t,e),t}function K1(e){if(ra.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",a),e.removeEventListener("abort",a)},o=()=>{n(),i()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",a),e.addEventListener("abort",a)});ra.set(e,t)}let ia={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return ra.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ot(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Gc(e){ia=e(ia)}function Y1(e){return W1().includes(e)?function(...t){return e.apply(oa(this),t),Ot(this.request)}:function(...t){return Ot(e.apply(oa(this),t))}}function X1(e){return typeof e=="function"?Y1(e):(e instanceof IDBTransaction&&K1(e),na(e,Q1())?new Proxy(e,ia):e)}function Ot(e){if(e instanceof IDBRequest)return H1(e);if(oo.has(e))return oo.get(e);const t=X1(e);return t!==e&&(oo.set(e,t),ji.set(t,e)),t}const oa=e=>ji.get(e);function Z1(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const a=indexedDB.open(e,t),s=Ot(a);return r&&a.addEventListener("upgradeneeded",l=>{r(Ot(a.result),l.oldVersion,l.newVersion,Ot(a.transaction),l)}),n&&a.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),s.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),s}const J1=["get","getKey","getAll","getAllKeys","count"],em=["put","add","delete","clear"],ao=new Map;function yl(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ao.get(t))return ao.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=em.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||J1.includes(n)))return;const o=async function(a,...s){const l=this.transaction(a,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(s.shift())),(await Promise.all([u[n](...s),i&&l.done]))[0]};return ao.set(t,o),o}Gc(e=>({...e,get:(t,n,r)=>yl(t,n)||e.get(t,n,r),has:(t,n)=>!!yl(t,n)||e.has(t,n)}));const tm=["continue","continuePrimaryKey","advance"],$l={},aa=new WeakMap,Bc=new WeakMap,nm={get(e,t){if(!tm.includes(t))return e[t];let n=$l[t];return n||(n=$l[t]=function(...r){aa.set(this,Bc.get(this)[t](...r))}),n}};async function*rm(...e){let t=this;if(t instanceof IDBCursor||(t=await t.openCursor(...e)),!t)return;t=t;const n=new Proxy(t,nm);for(Bc.set(n,t),ji.set(n,oa(t));t;)yield n,t=await(aa.get(n)||t.continue()),aa.delete(n)}function xl(e,t){return t===Symbol.asyncIterator&&na(e,[IDBIndex,IDBObjectStore,IDBCursor])||t==="iterate"&&na(e,[IDBIndex,IDBObjectStore])}Gc(e=>({...e,get(t,n,r){return xl(t,n)?rm:e.get(t,n,r)},has(t,n){return xl(t,n)||e.has(t,n)}}));const im="skillforge-db",om=1;let so=null;function $n(){return so||(so=Z1(im,om,{upgrade(e){e.createObjectStore("studentProfiles",{keyPath:"id"});const t=e.createObjectStore("diagnosticRecords",{keyPath:"id"});t.createIndex("by-student","studentId"),t.createIndex("by-knowledge-point","knowledgePointId"),e.createObjectStore("teachingSessions",{keyPath:"id"}).createIndex("by-student","studentId");const r=e.createObjectStore("progressRecords",{keyPath:"id"});r.createIndex("by-student","studentId"),r.createIndex("by-knowledge-point","knowledgePointId")}})),so}async function am(){return(await $n()).getAll("studentProfiles")}async function hl(e){await(await $n()).put("studentProfiles",e)}async function sm(){return(await $n()).getAll("diagnosticRecords")}async function lm(e){await(await $n()).put("diagnosticRecords",e)}async function um(){return(await $n()).getAll("progressRecords")}async function Bt(e){await(await $n()).put("progressRecords",e)}const Fc=ts(e=>({currentStudent:null,students:[],setCurrentStudent:t=>e({currentStudent:t}),addStudent:(t,n)=>{const r={id:crypto.randomUUID(),name:t,grade:n,createdAt:new Date().toISOString()};e(i=>({students:[...i.students,r],currentStudent:r})),hl(r).catch(console.error)},initDemo:()=>{const t={id:"demo-001",name:"小明（演示）",grade:7,createdAt:new Date().toISOString()};e({students:[t],currentStudent:t}),hl(t).catch(console.error)}}));am().then(e=>{e.length>0&&Fc.setState({students:e,currentStudent:e[0]})}).catch(e=>{console.error("Failed to load students from IndexedDB:",e)});const zt=[{id:"7a-1-1",name:"正数与负数",parentId:null,grade:7,semester:"上",unit:"第一章 有理数",difficulty:1},{id:"7a-1-2",name:"数轴",parentId:null,grade:7,semester:"上",unit:"第一章 有理数",difficulty:1},{id:"7a-1-3",name:"相反数",parentId:null,grade:7,semester:"上",unit:"第一章 有理数",difficulty:1},{id:"7a-1-4",name:"绝对值",parentId:null,grade:7,semester:"上",unit:"第一章 有理数",difficulty:2},{id:"7a-1-5",name:"有理数加法",parentId:null,grade:7,semester:"上",unit:"第一章 有理数",difficulty:2},{id:"7a-1-6",name:"有理数减法",parentId:null,grade:7,semester:"上",unit:"第一章 有理数",difficulty:2},{id:"7a-1-7",name:"有理数乘法",parentId:null,grade:7,semester:"上",unit:"第一章 有理数",difficulty:2},{id:"7a-1-8",name:"有理数除法",parentId:null,grade:7,semester:"上",unit:"第一章 有理数",difficulty:2},{id:"7a-1-9",name:"有理数乘方",parentId:null,grade:7,semester:"上",unit:"第一章 有理数",difficulty:3},{id:"7a-1-10",name:"科学记数法",parentId:null,grade:7,semester:"上",unit:"第一章 有理数",difficulty:2},{id:"7a-2-1",name:"用字母表示数",parentId:null,grade:7,semester:"上",unit:"第二章 整式的加减",difficulty:1},{id:"7a-2-2",name:"单项式",parentId:null,grade:7,semester:"上",unit:"第二章 整式的加减",difficulty:1},{id:"7a-2-3",name:"多项式",parentId:null,grade:7,semester:"上",unit:"第二章 整式的加减",difficulty:2},{id:"7a-2-4",name:"合并同类项",parentId:null,grade:7,semester:"上",unit:"第二章 整式的加减",difficulty:2},{id:"7a-2-5",name:"去括号",parentId:null,grade:7,semester:"上",unit:"第二章 整式的加减",difficulty:2},{id:"7a-2-6",name:"整式加减运算",parentId:null,grade:7,semester:"上",unit:"第二章 整式的加减",difficulty:3},{id:"7a-3-1",name:"方程的概念",parentId:null,grade:7,semester:"上",unit:"第三章 一元一次方程",difficulty:1},{id:"7a-3-2",name:"等式的性质",parentId:null,grade:7,semester:"上",unit:"第三章 一元一次方程",difficulty:1},{id:"7a-3-3",name:"移项",parentId:null,grade:7,semester:"上",unit:"第三章 一元一次方程",difficulty:2},{id:"7a-3-4",name:"去括号解方程",parentId:null,grade:7,semester:"上",unit:"第三章 一元一次方程",difficulty:2},{id:"7a-3-5",name:"去分母解方程",parentId:null,grade:7,semester:"上",unit:"第三章 一元一次方程",difficulty:3},{id:"7a-3-6",name:"一元一次方程应用题",parentId:null,grade:7,semester:"上",unit:"第三章 一元一次方程",difficulty:3},{id:"7a-4-1",name:"立体图形与平面图形",parentId:null,grade:7,semester:"上",unit:"第四章 几何图形初步",difficulty:1},{id:"7a-4-2",name:"点线面体",parentId:null,grade:7,semester:"上",unit:"第四章 几何图形初步",difficulty:1},{id:"7a-4-3",name:"直线射线线段",parentId:null,grade:7,semester:"上",unit:"第四章 几何图形初步",difficulty:2},{id:"7a-4-4",name:"角的概念",parentId:null,grade:7,semester:"上",unit:"第四章 几何图形初步",difficulty:2},{id:"7a-4-5",name:"角的度量与计算",parentId:null,grade:7,semester:"上",unit:"第四章 几何图形初步",difficulty:3}];function cm(e){return zt.find(t=>t.id===e)}function dm(e){return zt.filter(t=>t.unit===e)}function qc(){return[...new Set(zt.map(e=>e.unit))]}const He=ts((e,t)=>({records:[],diagnosticHistory:[],updateFromDiagnostic:n=>{const r=t().records.find(a=>a.knowledgePointId===n.knowledgePointId);let i;switch(n.result){case"mastered":i="verified";break;case"unverified":i="unverified";break;case"partial":case"not_mastered":i="learning";break;default:i="learning"}const o=r?{...r,status:i,lastReviewDate:new Date().toISOString(),reviewCount:r.reviewCount+1}:{id:crypto.randomUUID(),studentId:n.studentId,knowledgePointId:n.knowledgePointId,status:i,reviewCount:1,streakCorrect:n.result==="mastered"?1:0};e(a=>({records:r?a.records.map(s=>s.knowledgePointId===n.knowledgePointId?o:s):[...a.records,o],diagnosticHistory:[...a.diagnosticHistory,n]})),Bt(o).catch(console.error),lm(n).catch(console.error)},markAsLearning:n=>{e(r=>{const i=r.records.map(a=>a.knowledgePointId===n?{...a,status:"learning"}:a),o=i.find(a=>a.knowledgePointId===n);return o&&Bt(o).catch(console.error),{records:i}})},markAsVerified:n=>{e(r=>{const i=r.records.map(a=>a.knowledgePointId===n?{...a,status:"verified",lastReviewDate:new Date().toISOString(),streakCorrect:a.streakCorrect+1}:a),o=i.find(a=>a.knowledgePointId===n);return o&&Bt(o).catch(console.error),{records:i}})},markAsMastered:n=>{e(r=>{const i=r.records.map(a=>a.knowledgePointId===n?{...a,status:"mastered",lastReviewDate:new Date().toISOString(),streakCorrect:a.streakCorrect+1}:a),o=i.find(a=>a.knowledgePointId===n);return o&&Bt(o).catch(console.error),{records:i}})},downgradeToNeedsReview:n=>{e(r=>{const i=r.records.map(a=>a.knowledgePointId===n?{...a,status:"needs_review",lastReviewDate:new Date().toISOString()}:a),o=i.find(a=>a.knowledgePointId===n);return o&&Bt(o).catch(console.error),{records:i}})},recordReviewSuccess:n=>{e(r=>{const i=r.records.map(a=>a.knowledgePointId===n?{...a,lastReviewDate:new Date().toISOString(),streakCorrect:a.streakCorrect+1}:a),o=i.find(a=>a.knowledgePointId===n);return o&&Bt(o).catch(console.error),{records:i}})},getStatus:n=>{var r;return((r=t().records.find(i=>i.knowledgePointId===n))==null?void 0:r.status)||"unverified"}}));Promise.all([um(),sm()]).then(([e,t])=>{He.setState({records:e,diagnosticHistory:t})}).catch(e=>{console.error("Failed to load progress from IndexedDB:",e)});const fm={mastered:"已掌握",verified:"已验证",learning:"学习中",unverified:"未诊断",needs_review:"需复习"},mm={mastered:"badge-mastered",verified:"badge-verified",learning:"badge-learning",unverified:"badge-unverified",needs_review:"badge-needs-review"};function gm({level:e}){return d.jsxs("span",{className:"difficulty-dots",children:["★".repeat(e),"☆".repeat(3-e)]})}function pm({onStartDiagnostic:e}){const t=qc(),n=He(r=>r.getStatus);return d.jsxs("div",{children:[d.jsxs("div",{className:"card",children:[d.jsx("h2",{children:"知识地图"}),d.jsx("p",{style:{fontSize:13,color:"var(--text-secondary)"},children:"点击任意知识点开始诊断。系统会根据你的答题和思路追问，判断是否真正掌握。"})]}),d.jsx("div",{className:"units-grid",children:t.map(r=>{const i=dm(r);return d.jsxs("div",{className:"unit-card",children:[d.jsxs("div",{className:"unit-header",children:[d.jsx("span",{children:r}),d.jsxs("span",{style:{fontSize:12,color:"var(--text-secondary)"},children:[i.length," 个知识点"]})]}),d.jsx("div",{className:"unit-kps",children:i.map(o=>{const a=n(o.id);return d.jsxs("div",{className:"kp-item",onClick:()=>e(o),children:[d.jsx("span",{children:o.name}),d.jsxs("span",{style:{display:"flex",alignItems:"center",gap:6},children:[d.jsx("span",{className:`badge ${mm[a]||"badge-unverified"}`,children:fm[a]||"未诊断"}),d.jsx(gm,{level:o.difficulty})]})]},o.id)})})]},r)})})]})}const Uc=[{id:"q-7a14-d1",knowledgePointId:"7a-1-4",type:"diagnostic",difficulty:1,stem:"| -5 | 等于多少？",options:["-5","0","5","±5"],answer:"5",solution:"一个负数的绝对值是它的相反数，所以 | -5 | = 5。",variantGroup:"abs-v1"},{id:"q-7a14-d2",knowledgePointId:"7a-1-4",type:"diagnostic",difficulty:2,stem:"若 | x | = 3，则 x 等于多少？",options:["3","-3","3 或 -3","0"],answer:"3 或 -3",solution:"绝对值等于3的数有两个：3和-3，因为 |3| = 3，|-3| = 3。",variantGroup:"abs-v2"},{id:"q-7a14-d3",knowledgePointId:"7a-1-4",type:"diagnostic",difficulty:2,stem:"比较 | -7 | 和 | 5 | 的大小。",options:["| -7 | > | 5 |","| -7 | < | 5 |","| -7 | = | 5 |","无法比较"],answer:"| -7 | > | 5 |",solution:"| -7 | = 7，| 5 | = 5，7 > 5，所以 | -7 | > | 5 |。",variantGroup:"abs-v3"},{id:"q-7a14-v1",knowledgePointId:"7a-1-4",type:"verify",difficulty:1,stem:"| -9 | 的值是多少？",answer:"9",solution:"| -9 | = 9，负数的绝对值是它的相反数。",variantGroup:"abs-v1"},{id:"q-7a14-v2",knowledgePointId:"7a-1-4",type:"verify",difficulty:2,stem:"如果 | a | = 5，那么 a 可能的值有哪些？请全部写出。",answer:"5 或 -5",solution:"绝对值等于5的数有两个：5和-5。",variantGroup:"abs-v2"},{id:"q-7a24-d1",knowledgePointId:"7a-2-4",type:"diagnostic",difficulty:1,stem:"3x + 5x 合并后的结果是？",options:["8x","8","15x","8x²"],answer:"8x",solution:"3x 和 5x 是同类项（字母部分都是 x），系数相加：3+5=8，结果为 8x。",variantGroup:"merge-v1"},{id:"q-7a24-d2",knowledgePointId:"7a-2-4",type:"diagnostic",difficulty:1,stem:"7a² - 3a² 合并后的结果是？",options:["4","4a","4a²","10a²"],answer:"4a²",solution:"7a² 和 3a² 是同类项，系数相减：7-3=4，结果为 4a²。注意 a² 不能和 a 合并。",variantGroup:"merge-v2"},{id:"q-7a24-d3",knowledgePointId:"7a-2-4",type:"diagnostic",difficulty:2,stem:"2x + 3y - x + 2y 合并同类项后的结果是？",options:["x + 5y","5xy","x + y","无法合并"],answer:"x + 5y",solution:"2x 和 -x 是同类项合并得 x；3y 和 2y 合并得 5y。结果为 x + 5y。x 和 y 不是同类项不能合并。",variantGroup:"merge-v3"},{id:"q-7a24-v1",knowledgePointId:"7a-2-4",type:"verify",difficulty:1,stem:"4m + 9m 合并后的结果是？",answer:"13m",solution:"4m 和 9m 是同类项，系数相加：4+9=13，结果为 13m。",variantGroup:"merge-v1"},{id:"q-7a24-v3",knowledgePointId:"7a-2-4",type:"verify",difficulty:2,stem:"5p - 2q + 3p + 4q 合并同类项后的结果是？",answer:"8p + 2q",solution:"5p 和 3p 合并得 8p；-2q 和 4q 合并得 2q。",variantGroup:"merge-v3"},{id:"q-7a33-d1",knowledgePointId:"7a-3-3",type:"diagnostic",difficulty:1,stem:"解方程 x + 3 = 7，x 等于多少？",options:["10","4","-4","3"],answer:"4",solution:"把 +3 移到右边变成 -3：x = 7 - 3 = 4。",variantGroup:"transpose-v1"},{id:"q-7a33-d2",knowledgePointId:"7a-3-3",type:"diagnostic",difficulty:2,stem:"解方程 2x - 5 = 9，x 等于多少？",options:["2","7","14","-2"],answer:"7",solution:"移项：2x = 9 + 5 = 14，两边除以 2：x = 7。",variantGroup:"transpose-v2"},{id:"q-7a33-d3",knowledgePointId:"7a-3-3",type:"diagnostic",difficulty:2,stem:"解方程 5x = 3x + 8，x 等于多少？",options:["8","4","2","-4"],answer:"4",solution:"移项：5x - 3x = 8，2x = 8，x = 4。",variantGroup:"transpose-v3"},{id:"q-7a33-v1",knowledgePointId:"7a-3-3",type:"verify",difficulty:1,stem:"解方程 y + 5 = 12，y 等于多少？",answer:"7",solution:"移项：y = 12 - 5 = 7。",variantGroup:"transpose-v1"},{id:"q-7a33-v2",knowledgePointId:"7a-3-3",type:"verify",difficulty:2,stem:"解方程 3y - 4 = 11，y 等于多少？",answer:"5",solution:"移项：3y = 11 + 4 = 15，y = 5。",variantGroup:"transpose-v2"},{id:"q-7a15-d1",knowledgePointId:"7a-1-5",type:"diagnostic",difficulty:1,stem:"(-3) + (-4) 等于多少？",options:["-1","1","-7","7"],answer:"-7",solution:"同号两数相加，取相同的符号，并把绝对值相加：3+4=7，结果为 -7。",variantGroup:"add-v1"},{id:"q-7a15-d2",knowledgePointId:"7a-1-5",type:"diagnostic",difficulty:1,stem:"(-5) + 8 等于多少？",options:["-3","3","13","-13"],answer:"3",solution:"异号两数相加，取绝对值较大的符号，并用较大的绝对值减去较小的：8-5=3，8的绝对值更大且为正，结果为 +3。",variantGroup:"add-v2"},{id:"q-7a15-d3",knowledgePointId:"7a-1-5",type:"diagnostic",difficulty:2,stem:"(-2) + 5 + (-3) 等于多少？",options:["0","6","-6","10"],answer:"0",solution:"(-2) + 5 = 3，3 + (-3) = 0。",variantGroup:"add-v3"},{id:"q-7a15-v1",knowledgePointId:"7a-1-5",type:"verify",difficulty:1,stem:"(-6) + (-2) 等于多少？",answer:"-8",solution:"同号相加：6+2=8，结果为 -8。",variantGroup:"add-v1"},{id:"q-7a15-v2",knowledgePointId:"7a-1-5",type:"verify",difficulty:1,stem:"(-8) + 3 等于多少？",answer:"-5",solution:"异号相加，绝对值大的符号取负：8-3=5，结果为 -5。",variantGroup:"add-v2"},{id:"q-7a11-d1",knowledgePointId:"7a-1-1",type:"diagnostic",difficulty:1,stem:"下列各数中，是负数的是？",options:["0","+3","-2","5"],answer:"-2",solution:"-2 是负数（小于 0）。0 既不是正数也不是负数，+3 和 5 是正数。",variantGroup:"pn-v1"},{id:"q-7a11-d2",knowledgePointId:"7a-1-1",type:"diagnostic",difficulty:1,stem:"如果收入 100 元记作 +100 元，那么支出 50 元记作什么？",options:["+50","-50","50","-100"],answer:"-50",solution:"具有相反意义的量：收入为正则支出为负，所以支出 50 元记作 -50 元。",variantGroup:"pn-v2"},{id:"q-7a11-d3",knowledgePointId:"7a-1-1",type:"diagnostic",difficulty:2,stem:"下列说法正确的是？",options:["0 是正数","负数都小于 0","正数前面加负号还是正数","所有带负号的数都是负数"],answer:"负数都小于 0",solution:"负数都小于 0 是负数的定义。A 错：0 既不是正数也不是负数。C 错：正数加负号变负数。D 错：-(-5)=5 带负号但是正数。",variantGroup:"pn-v3"},{id:"q-7a11-v1",knowledgePointId:"7a-1-1",type:"verify",difficulty:1,stem:"下列各数 -7、0、+5、-0.3、100 中，负数有几个？",answer:"2 个（-7 和 -0.3）",solution:"-7 和 -0.3 是负数；0 不是；+5 和 100 是正数。共 2 个负数。",variantGroup:"pn-v1"},{id:"q-7a11-v2",knowledgePointId:"7a-1-1",type:"verify",difficulty:1,stem:"如果向北走 200 米记作 +200 米，那么向南走 300 米记作什么？",answer:"-300 米",solution:"向北为正则向南为负，-300 米表示向南走 300 米。",variantGroup:"pn-v2"},{id:"q-7a12-d1",knowledgePointId:"7a-1-2",type:"diagnostic",difficulty:1,stem:"数轴的三要素不包括以下哪项？",options:["原点","正方向","单位长度","对称轴"],answer:"对称轴",solution:"数轴三要素：原点、正方向、单位长度。对称轴不是数轴的要素。",variantGroup:"nl-v1"},{id:"q-7a12-d2",knowledgePointId:"7a-1-2",type:"diagnostic",difficulty:1,stem:"在数轴上，原点右边的点表示什么数？",options:["负数","正数","0","无法确定"],answer:"正数",solution:"规定向右为正方向，所以原点右边的点表示正数。原点左边的点表示负数。",variantGroup:"nl-v2"},{id:"q-7a12-d3",knowledgePointId:"7a-1-2",type:"diagnostic",difficulty:2,stem:"在数轴上，点 A 表示 -3，点 B 表示 2，则 A 和 B 之间的距离是多少？",options:["1","5","-1","-5"],answer:"5",solution:"数轴上两点距离 = |2 - (-3)| = |2 + 3| = 5。距离是非负数。",variantGroup:"nl-v3"},{id:"q-7a12-v1",knowledgePointId:"7a-1-2",type:"verify",difficulty:1,stem:"以下哪项是数轴必须具备的要素？（多选：原点、正方向、单位长度）",answer:"原点、正方向、单位长度",solution:"数轴三要素缺一不可：原点、正方向、单位长度。",variantGroup:"nl-v1"},{id:"q-7a12-v3",knowledgePointId:"7a-1-2",type:"verify",difficulty:2,stem:"在数轴上，点 C 表示 -5，点 D 表示 3，C 和 D 之间的距离是多少？",answer:"8",solution:"距离 = |3 - (-5)| = |3 + 5| = 8。",variantGroup:"nl-v3"},{id:"q-7a13-d1",knowledgePointId:"7a-1-3",type:"diagnostic",difficulty:1,stem:"6 的相反数是多少？",options:["6","-6","0","1/6"],answer:"-6",solution:"6 的相反数是 -6。只有符号不同的两个数互为相反数。",variantGroup:"opp-v1"},{id:"q-7a13-d2",knowledgePointId:"7a-1-3",type:"diagnostic",difficulty:1,stem:"-(-4) 化简后等于多少？",options:["-4","4","0","±4"],answer:"4",solution:"-(-4) 表示 -4 的相反数，即 4。",variantGroup:"opp-v2"},{id:"q-7a13-d3",knowledgePointId:"7a-1-3",type:"diagnostic",difficulty:2,stem:"若 a 和 b 互为相反数，且 a = -7，则 b 等于多少？",options:["7","-7","0","14"],answer:"7",solution:"a = -7，相反数 b = -(-7) = 7。互为相反数的两个数之和为 0：-7 + 7 = 0。",variantGroup:"opp-v3"},{id:"q-7a13-v1",knowledgePointId:"7a-1-3",type:"verify",difficulty:1,stem:"-9 的相反数是多少？",answer:"9",solution:"-9 的相反数是 9。负数的相反数是正数。",variantGroup:"opp-v1"},{id:"q-7a13-v3",knowledgePointId:"7a-1-3",type:"verify",difficulty:2,stem:"如果 x 和 y 互为相反数，且 x = 12，那么 y 的值是多少？x + y 的值呢？",answer:"y = -12，x + y = 0",solution:"y = -12，互为相反数之和为 0，所以 12 + (-12) = 0。",variantGroup:"opp-v3"},{id:"q-7a16-d1",knowledgePointId:"7a-1-6",type:"diagnostic",difficulty:1,stem:"5 - 8 等于多少？",options:["3","-3","13","-13"],answer:"-3",solution:"5 - 8 = 5 + (-8) = -3。减去一个数等于加上它的相反数。",variantGroup:"sub-v1"},{id:"q-7a16-d2",knowledgePointId:"7a-1-6",type:"diagnostic",difficulty:1,stem:"(-3) - (-5) 等于多少？",options:["-8","2","-2","8"],answer:"2",solution:"(-3) - (-5) = (-3) + 5 = 2。减去 -5 等于加上 +5。",variantGroup:"sub-v2"},{id:"q-7a16-d3",knowledgePointId:"7a-1-6",type:"diagnostic",difficulty:2,stem:"计算：(-2) - 3 - (-4) 等于多少？",options:["-1","5","-9","3"],answer:"-1",solution:"(-2) - 3 - (-4) = (-2) + (-3) + 4 = -5 + 4 = -1。全部转化为加法。",variantGroup:"sub-v3"},{id:"q-7a16-v1",knowledgePointId:"7a-1-6",type:"verify",difficulty:1,stem:"7 - 12 等于多少？",answer:"-5",solution:"7 - 12 = 7 + (-12) = -5。",variantGroup:"sub-v1"},{id:"q-7a16-v3",knowledgePointId:"7a-1-6",type:"verify",difficulty:2,stem:"计算：(-4) - 5 - (-6) 等于多少？",answer:"-3",solution:"(-4) - 5 - (-6) = (-4) + (-5) + 6 = -9 + 6 = -3。",variantGroup:"sub-v3"},{id:"q-7a17-d1",knowledgePointId:"7a-1-7",type:"diagnostic",difficulty:1,stem:"(-4) × 5 等于多少？",options:["20","-20","9","-9"],answer:"-20",solution:"异号相乘得负：(-4) × 5 = -(4 × 5) = -20。",variantGroup:"mul-v1"},{id:"q-7a17-d2",knowledgePointId:"7a-1-7",type:"diagnostic",difficulty:1,stem:"(-3) × (-6) 等于多少？",options:["-18","18","-9","9"],answer:"18",solution:"同号相乘得正：(-3) × (-6) = 3 × 6 = 18。",variantGroup:"mul-v2"},{id:"q-7a17-d3",knowledgePointId:"7a-1-7",type:"diagnostic",difficulty:2,stem:"(-2) × 3 × (-5) 等于多少？",options:["-30","30","-10","10"],answer:"30",solution:"两个负数因子使结果为正：(-2) × 3 = -6，-6 × (-5) = 30。",variantGroup:"mul-v3"},{id:"q-7a17-v1",knowledgePointId:"7a-1-7",type:"verify",difficulty:1,stem:"(-7) × 2 等于多少？",answer:"-14",solution:"(-7) × 2 = -14。异号得负。",variantGroup:"mul-v1"},{id:"q-7a17-v3",knowledgePointId:"7a-1-7",type:"verify",difficulty:2,stem:"(-1) × (-2) × (-3) × 4 等于多少？",answer:"-24",solution:"三个负号（奇数），积为负：-(1×2×3×4) = -24。",variantGroup:"mul-v3"},{id:"q-7a18-d1",knowledgePointId:"7a-1-8",type:"diagnostic",difficulty:1,stem:"(-12) ÷ 3 等于多少？",options:["4","-4","9","-9"],answer:"-4",solution:"异号相除得负：(-12) ÷ 3 = -4。",variantGroup:"div-v1"},{id:"q-7a18-d2",knowledgePointId:"7a-1-8",type:"diagnostic",difficulty:1,stem:"(-15) ÷ (-5) 等于多少？",options:["-3","3","-10","10"],answer:"3",solution:"同号相除得正：(-15) ÷ (-5) = 3。",variantGroup:"div-v2"},{id:"q-7a18-d3",knowledgePointId:"7a-1-8",type:"diagnostic",difficulty:2,stem:"(-24) ÷ (-6) ÷ (-2) 的结果是多少？",options:["-2","2","4","-4"],answer:"-2",solution:"(-24) ÷ (-6) = 4（同号得正），4 ÷ (-2) = -2（异号得负）。",variantGroup:"div-v3"},{id:"q-7a18-v1",knowledgePointId:"7a-1-8",type:"verify",difficulty:1,stem:"20 ÷ (-4) 等于多少？",answer:"-5",solution:"20 ÷ (-4) = -5。异号得负。",variantGroup:"div-v1"},{id:"q-7a18-v3",knowledgePointId:"7a-1-8",type:"verify",difficulty:2,stem:"(-36) ÷ 4 ÷ (-3) 的结果是多少？",answer:"3",solution:"(-36) ÷ 4 = -9（异号得负），-9 ÷ (-3) = 3（同号得正）。",variantGroup:"div-v3"},{id:"q-7a19-d1",knowledgePointId:"7a-1-9",type:"diagnostic",difficulty:1,stem:"(-2)³ 等于多少？",options:["-8","8","-6","6"],answer:"-8",solution:"(-2)³ = (-2)×(-2)×(-2) = 4×(-2) = -8。奇次幂为负。",variantGroup:"pow-v1"},{id:"q-7a19-d2",knowledgePointId:"7a-1-9",type:"diagnostic",difficulty:1,stem:"(-3)² 等于多少？",options:["-9","9","-6","6"],answer:"9",solution:"(-3)² = (-3)×(-3) = 9。偶次幂为正。注意 (-3)² ≠ -3²。",variantGroup:"pow-v2"},{id:"q-7a19-d3",knowledgePointId:"7a-1-9",type:"diagnostic",difficulty:2,stem:"-4² 等于多少？",options:["16","-16","8","-8"],answer:"-16",solution:"-4² = -(4²) = -16。负号不在括号内，先算 4² 再取相反数。与 (-4)²=16 不同！",variantGroup:"pow-v3"},{id:"q-7a19-v1",knowledgePointId:"7a-1-9",type:"verify",difficulty:1,stem:"(-1)⁵ 等于多少？",answer:"-1",solution:"(-1)⁵ = -1。奇次幂为负。",variantGroup:"pow-v1"},{id:"q-7a19-v3",knowledgePointId:"7a-1-9",type:"verify",difficulty:2,stem:"-5² 和 (-5)² 哪个大？",answer:"(-5)² > -5²，因为 (-5)² = 25，-5² = -25",solution:"(-5)² = 25，-5² = -25。25 > -25，所以 (-5)² 更大。",variantGroup:"pow-v3"},{id:"q-7a1a-d1",knowledgePointId:"7a-1-10",type:"diagnostic",difficulty:1,stem:"5670000 用科学记数法表示为？",options:["5.67×10⁶","56.7×10⁵","5.67×10⁵","0.567×10⁷"],answer:"5.67×10⁶",solution:"5670000 有 7 位数，n = 7-1 = 6，a 在 1~10 之间：5.67×10⁶。",variantGroup:"sci-v1"},{id:"q-7a1a-d2",knowledgePointId:"7a-1-10",type:"diagnostic",difficulty:1,stem:"3.2 × 10⁴ 表示的原数是多少？",options:["3200","32000","320000","32"],answer:"32000",solution:"3.2 × 10⁴ = 3.2 × 10000 = 32000。",variantGroup:"sci-v2"},{id:"q-7a1a-d3",knowledgePointId:"7a-1-10",type:"diagnostic",difficulty:2,stem:"下列哪个不是科学记数法的正确表示？",options:["2.5 × 10³","1.0 × 10⁸","10.3 × 10⁵","9.9 × 10²"],answer:"10.3 × 10⁵",solution:"科学记数法中 a 必须满足 1 ≤ a < 10。10.3 > 10，不符合要求。正确应为 1.03 × 10⁶。",variantGroup:"sci-v3"},{id:"q-7a1a-v1",knowledgePointId:"7a-1-10",type:"verify",difficulty:1,stem:"820000000 用科学记数法表示为？",answer:"8.2 × 10⁸",solution:"820000000 有 9 位数，n = 9-1 = 8。a = 8.2。",variantGroup:"sci-v1"},{id:"q-7a1a-v3",knowledgePointId:"7a-1-10",type:"verify",difficulty:2,stem:"把 4.06 × 10⁷ 写成原数。",answer:"40600000",solution:"4.06 × 10⁷ = 40600000。小数点向右移 7 位。",variantGroup:"sci-v3"},{id:"q-7a21-d1",knowledgePointId:"7a-2-1",type:"diagnostic",difficulty:1,stem:"a 的 3 倍用代数式表示为？",options:["a3","3a","3+a","a+3"],answer:"3a",solution:"a 的 3 倍写作 3a，数字在前、字母在后，乘号省略。a3 书写不规范。",variantGroup:"lett-v1"},{id:"q-7a21-d2",knowledgePointId:"7a-2-1",type:"diagnostic",difficulty:1,stem:'"x 与 5 的和的一半" 用代数式表示为？',options:["(x+5)/2","x+5/2","x/2+5","2/(x+5)"],answer:"(x+5)/2",solution:"先求和 x+5，再取一半：(x+5)/2。注意括号不能省略。",variantGroup:"lett-v2"},{id:"q-7a21-d3",knowledgePointId:"7a-2-1",type:"diagnostic",difficulty:2,stem:"下列代数式书写规范的是？",options:["a×b","1a","a÷b","2ab"],answer:"2ab",solution:"2ab 规范（数字在前，乘号省略）。a×b 不应保留乘号；1a 应省略 1 写 a；a÷b 应写成分数形式。",variantGroup:"lett-v3"},{id:"q-7a21-v1",knowledgePointId:"7a-2-1",type:"verify",difficulty:1,stem:"b 的 5 倍减去 2 用代数式表示为？",answer:"5b - 2",solution:"b 的五倍 = 5b，减去 2 → 5b - 2。",variantGroup:"lett-v1"},{id:"q-7a21-v3",knowledgePointId:"7a-2-1",type:"verify",difficulty:2,stem:"下列：a×3、b÷c、1x、-1y，哪些书写不规范？请改正。",answer:"都不规范。应改为 3a、b/c、x、-y。",solution:"a×3 → 3a；b÷c 写成 b/c；1x 省略 1 → x；-1y 省略 1 → -y。",variantGroup:"lett-v3"},{id:"q-7a22-d1",knowledgePointId:"7a-2-2",type:"diagnostic",difficulty:1,stem:"下列哪个是单项式？",options:["x + y","3a²b","a - b","x/y"],answer:"3a²b",solution:"单项式是数与字母的积。3a²b 只有乘法，是单项式。x+y 和 a-b 含加减，x/y 含除法，不是单项式。",variantGroup:"mono-v1"},{id:"q-7a22-d2",knowledgePointId:"7a-2-2",type:"diagnostic",difficulty:1,stem:"单项式 -3x²y 的次数是？",options:["1","2","3","4"],answer:"3",solution:"次数 = 所有字母的指数和。x 的指数 2 + y 的指数 1 = 3。",variantGroup:"mono-v2"},{id:"q-7a22-d3",knowledgePointId:"7a-2-2",type:"diagnostic",difficulty:2,stem:"单项式 -xy²z 的系数和次数分别是？",options:["系数 -1，次数 4","系数 1，次数 3","系数 -1，次数 3","系数 1，次数 4"],answer:"系数 -1，次数 4",solution:"次数 = x(1) + y²(2) + z(1) = 4。系数包括符号，为 -1。",variantGroup:"mono-v3"},{id:"q-7a22-v1",knowledgePointId:"7a-2-2",type:"verify",difficulty:1,stem:"下列：5、x、-2ab、x+y、a²、m/n、0 中，哪些是单项式？",answer:"5、x、-2ab、a²、0 是单项式；x+y 和 m/n 不是。",solution:"单项式判断标准：只含乘法（包括乘方），不含加减和分母中的字母。单独的数或字母也是。",variantGroup:"mono-v1"},{id:"q-7a22-v3",knowledgePointId:"7a-2-2",type:"verify",difficulty:2,stem:"单项式 4a³b²c 的系数和次数分别是？",answer:"系数 4，次数 6",solution:"系数 = 4，次数 = 3+2+1 = 6。",variantGroup:"mono-v3"},{id:"q-7a23-d1",knowledgePointId:"7a-2-3",type:"diagnostic",difficulty:1,stem:"多项式 2x - 3 有几项？",options:["1 项","2 项","3 项","4 项"],answer:"2 项",solution:"2x 和 -3 是两项。项包括前面的符号，所以是 2x 和 -3，共两项（二项式）。",variantGroup:"poly-v1"},{id:"q-7a23-d2",knowledgePointId:"7a-2-3",type:"diagnostic",difficulty:1,stem:"多项式 x² - 3x + 2 的次数是多少？",options:["1","2","3","0"],answer:"2",solution:"多项式的次数 = 次数最高的项的次数。x² 次数为 2，-3x 为 1，2 为 0。最高为 2。",variantGroup:"poly-v2"},{id:"q-7a23-d3",knowledgePointId:"7a-2-3",type:"diagnostic",difficulty:2,stem:"多项式 4x³ - 2x² + x - 7 是几次几项式？",options:["二次四项式","三次四项式","三次三项式","四次三项式"],answer:"三次四项式",solution:"最高次数 = 3（4x³ 项），项数 = 4（4x³, -2x², x, -7）。所以是三次四项式。",variantGroup:"poly-v3"},{id:"q-7a23-v1",knowledgePointId:"7a-2-3",type:"verify",difficulty:1,stem:"多项式 5a + 2b - 1 有几项？",answer:"3 项（5a, 2b, -1）",solution:"三项：5a、2b、-1。注意 -1 也是一项（常数项）。",variantGroup:"poly-v1"},{id:"q-7a23-v3",knowledgePointId:"7a-2-3",type:"verify",difficulty:2,stem:"多项式 -x²y + 3xy² - 5 是几次几项式？",answer:"三次三项式",solution:"各项次数：-x²y(3)、3xy²(3)、-5(0)，最高 3，共 3 项。三次三项式。",variantGroup:"poly-v3"},{id:"q-7a25-d1",knowledgePointId:"7a-2-5",type:"diagnostic",difficulty:1,stem:"a + (b - c) 去括号后等于？",options:["a + b - c","a - b + c","a + b + c","a - b - c"],answer:"a + b - c",solution:"括号前是 + 号，去掉括号，各项符号不变：a + (b - c) = a + b - c。",variantGroup:"bracket-v1"},{id:"q-7a25-d2",knowledgePointId:"7a-2-5",type:"diagnostic",difficulty:1,stem:"a - (b - c) 去括号后等于？",options:["a - b - c","a - b + c","a + b - c","a + b + c"],answer:"a - b + c",solution:"括号前是 - 号，去掉括号，各项变号：a - (b - c) = a - b + c。",variantGroup:"bracket-v2"},{id:"q-7a25-d3",knowledgePointId:"7a-2-5",type:"diagnostic",difficulty:2,stem:"3(2x - 1) - 2(x + 4) 去括号后等于？",options:["6x - 3 - 2x - 8","6x - 3 - 2x + 8","6x - 1 - 2x - 8","6x + 3 - 2x - 8"],answer:"6x - 3 - 2x - 8",solution:"3(2x-1)=6x-3，-2(x+4)=-2x-8。注意后一项系数 -2 要乘到 +4 上得 -8。",variantGroup:"bracket-v3"},{id:"q-7a25-v1",knowledgePointId:"7a-2-5",type:"verify",difficulty:1,stem:"x + (y + z - w) 去括号后等于？",answer:"x + y + z - w",solution:"括号前是 +，各项符号不变。",variantGroup:"bracket-v1"},{id:"q-7a25-v3",knowledgePointId:"7a-2-5",type:"verify",difficulty:2,stem:"5(a - 2) - 3(a + 1) 去括号后等于？",answer:"5a - 10 - 3a - 3",solution:"5(a-2) = 5a-10，-3(a+1) = -3a-3。结果为 5a-10-3a-3。",variantGroup:"bracket-v3"},{id:"q-7a26-d1",knowledgePointId:"7a-2-6",type:"diagnostic",difficulty:2,stem:"(3x + 2y) + (x - y) 的结果是？",options:["4x + y","4x + 3y","3x + y","4x - y"],answer:"4x + y",solution:"(3x+2y)+(x-y) = 3x+2y+x-y = 4x+y。x 合并：3+1=4；y 合并：2-1=1。",variantGroup:"expr-v1"},{id:"q-7a26-d2",knowledgePointId:"7a-2-6",type:"diagnostic",difficulty:2,stem:"(2a - 3b) - (a - 2b) 的结果是？",options:["a - b","a - 5b","3a - b","a + b"],answer:"a - b",solution:"(2a-3b)-(a-2b) = 2a-3b-a+2b = a-b。去括号时 -(-2b) = +2b。",variantGroup:"expr-v2"},{id:"q-7a26-d3",knowledgePointId:"7a-2-6",type:"diagnostic",difficulty:3,stem:"(2x² + 3x - 1) - (x² - x + 2) 的结果是？",options:["x² + 4x - 3","x² + 2x + 1","3x² + 2x - 3","x² + 4x + 1"],answer:"x² + 4x - 3",solution:"(2x²+3x-1)-(x²-x+2) = 2x²+3x-1-x²+x-2 = x²+4x-3。注意 -(-x)=+x 和 -(2)=-2。",variantGroup:"expr-v3"},{id:"q-7a26-v1",knowledgePointId:"7a-2-6",type:"verify",difficulty:2,stem:"(5m - 2n) + (3m + n) 的结果是？",answer:"8m - n",solution:"5m+3m=8m，-2n+n=-n。结果为 8m-n。",variantGroup:"expr-v1"},{id:"q-7a26-v3",knowledgePointId:"7a-2-6",type:"verify",difficulty:3,stem:"(3a² - a + 4) - (2a² + 2a - 1) 的结果是？",answer:"a² - 3a + 5",solution:"3a²-2a²=a²，-a-2a=-3a，4-(-1)=5。",variantGroup:"expr-v3"},{id:"q-7a31-d1",knowledgePointId:"7a-3-1",type:"diagnostic",difficulty:1,stem:"下列哪个是方程？",options:["3x + 2","3x + 2 = 8","3 + 2 = 5","3x"],answer:"3x + 2 = 8",solution:"方程是含有未知数的等式。3x+2=8 有未知数 x 且是等式。3x+2 不是等式，3+2=5 没有未知数。",variantGroup:"eqn-v1"},{id:"q-7a31-d2",knowledgePointId:"7a-3-1",type:"diagnostic",difficulty:1,stem:"下列哪个是一元一次方程？",options:["x + y = 5","x² = 4","2x - 3 = 7","x + 3"],answer:"2x - 3 = 7",solution:"一元一次方程：一个未知数（一元），未知数次数为 1（一次）。2x-3=7 满足。x+y=5 有两个未知数，x²=4 次数为 2。",variantGroup:"eqn-v2"},{id:"q-7a31-d3",knowledgePointId:"7a-3-1",type:"diagnostic",difficulty:2,stem:"x = 2 是下列哪个方程的解？",options:["2x + 1 = 5","x + 3 = 6","3x - 2 = 8","x - 2 = 1"],answer:"2x + 1 = 5",solution:"代入 x=2：2×2+1=5 ✓。x+3=5≠6；3×2-2=4≠8；2-2=0≠1。",variantGroup:"eqn-v3"},{id:"q-7a31-v1",knowledgePointId:"7a-3-1",type:"verify",difficulty:1,stem:"下列式子中，哪些是方程？① 2x=6 ② x-3 ③ 5+7=12 ④ y²=9",answer:"①和④是方程",solution:"方程 = 含有未知数的等式。①有未知数x且是等式 ✓；②不完整不是等式 ✗；③没有未知数 ✗；④有未知数y且是等式 ✓。",variantGroup:"eqn-v1"},{id:"q-7a31-v3",knowledgePointId:"7a-3-1",type:"verify",difficulty:2,stem:"x = -1 是方程 3x + 4 = kx + 2 的解，求 k 的值。",answer:"k = 3",solution:"代入 x=-1：3(-1)+4 = k(-1)+2 → 1 = -k+2 → k = 1。",variantGroup:"eqn-v3"},{id:"q-7a32-d1",knowledgePointId:"7a-3-2",type:"diagnostic",difficulty:1,stem:"下列变形中，正确的是？",options:["若 a=b，则 a+c=b-c","若 a=b，则 a/c=b/c（c≠0）","若 a=b，则 a×0=b×1","若 a=b，则 a-c=b+c"],answer:"若 a=b，则 a/c=b/c（c≠0）",solution:"等式性质 2：等式两边同除以一个不为 0 的数，结果仍相等。其他选项两边操作不一致。",variantGroup:"eqprop-v1"},{id:"q-7a32-d2",knowledgePointId:"7a-3-2",type:"diagnostic",difficulty:1,stem:"由 x - 3 = 5 得到 x = 8，运用了等式的什么性质？",options:["性质1：两边加同一个数","性质2：两边乘同一个数","性质1：两边减同一个数","性质2：两边除以同一个数"],answer:"性质1：两边加同一个数",solution:"x-3=5，两边加 3 得 x=8。这是等式性质 1：两边同时加同一个数。",variantGroup:"eqprop-v2"},{id:"q-7a32-d3",knowledgePointId:"7a-3-2",type:"diagnostic",difficulty:2,stem:"下列变形错误的是？",options:["由 2x=6 得 x=3","由 x+2=5 得 x=3","由 3x=2x+1 得 3x-2x=1","由 x=3 得 x²=6"],answer:"由 x=3 得 x²=6",solution:"等式两边乘 x → x²=3x≠6（除非 x=3 时 3x=9≠6）。其它选项均正确运用了等式性质。",variantGroup:"eqprop-v3"},{id:"q-7a32-v1",knowledgePointId:"7a-3-2",type:"verify",difficulty:1,stem:"若 a=b，下列哪个不一定成立？A. a+2=b+2  B. a-2=b-2  C. a/2=b/2  D. a/0=b/0",answer:"D 不成立，因为除数不能为 0",solution:"等式性质中，除以同一个数要求该数不为 0。D 除以 0 无意义。",variantGroup:"eqprop-v1"},{id:"q-7a32-v3",knowledgePointId:"7a-3-2",type:"verify",difficulty:2,stem:"从 4x = 20 得到 x = 5 是等式两边同时____；从 x/3 = 2 得到 x = 6 是两边同时____。（填空）",answer:"除以 4；乘 3",solution:"4x=20 → 两边除以 4 得 x=5。x/3=2 → 两边乘 3 得 x=6。",variantGroup:"eqprop-v3"},{id:"q-7a34-d1",knowledgePointId:"7a-3-4",type:"diagnostic",difficulty:2,stem:"解方程 2(x + 3) = 10，x 的值为？",options:["2","4","7","8"],answer:"2",solution:"去括号：2x+6=10 → 移项：2x=10-6=4 → 系数化1：x=2。",variantGroup:"beqn-v1"},{id:"q-7a34-d2",knowledgePointId:"7a-3-4",type:"diagnostic",difficulty:2,stem:"解方程 3(x - 1) = 2(x + 2)，x 的值为？",options:["1","5","7","3"],answer:"7",solution:"3x-3=2x+4 → 3x-2x=4+3 → x=7。",variantGroup:"beqn-v2"},{id:"q-7a34-d3",knowledgePointId:"7a-3-4",type:"diagnostic",difficulty:2,stem:"解方程 -(x - 5) = 3，x 的值为？",options:["2","8","-2","-8"],answer:"2",solution:"-(x-5)=3 → -x+5=3 → -x=3-5=-2 → x=2。注意负号去括号时各项变号。",variantGroup:"beqn-v3"},{id:"q-7a34-v1",knowledgePointId:"7a-3-4",type:"verify",difficulty:2,stem:"解方程 3(y + 2) = 15，y 的值为？",answer:"3",solution:"3y+6=15 → 3y=9 → y=3。",variantGroup:"beqn-v1"},{id:"q-7a34-v3",knowledgePointId:"7a-3-4",type:"verify",difficulty:2,stem:"解方程 -(2y - 3) = 7，y 的值为？",answer:"-2",solution:"-(2y-3)=7 → -2y+3=7 → -2y=4 → y=-2。",variantGroup:"beqn-v3"},{id:"q-7a35-d1",knowledgePointId:"7a-3-5",type:"diagnostic",difficulty:2,stem:"解方程 x/2 + x/3 = 5，x 的值为？",options:["5","6","10","30"],answer:"6",solution:"分母 LCM=6，两边乘6：3x+2x=30 → 5x=30 → x=6。",variantGroup:"deqn-v1"},{id:"q-7a35-d2",knowledgePointId:"7a-3-5",type:"diagnostic",difficulty:2,stem:"解方程 (x+1)/2 = (x-1)/3，x 的值为？",options:["-1","1","-5","5"],answer:"-5",solution:"分母 LCM=6，两边乘6：3(x+1)=2(x-1) → 3x+3=2x-2 → x=-5。",variantGroup:"deqn-v2"},{id:"q-7a35-d3",knowledgePointId:"7a-3-5",type:"diagnostic",difficulty:3,stem:"解方程 x/3 + 1 = x/2 - 1，x 的值为？",options:["6","12","-12","0"],answer:"12",solution:"分母 LCM=6，两边乘6：2x+6=3x-6 → 2x-3x=-6-6 → -x=-12 → x=12。注意整数项也要乘！",variantGroup:"deqn-v3"},{id:"q-7a35-v1",knowledgePointId:"7a-3-5",type:"verify",difficulty:2,stem:"解方程 y/4 + y/5 = 9，y 的值为？",answer:"20",solution:"分母 LCM=20，两边乘20：5y+4y=180 → 9y=180 → y=20。",variantGroup:"deqn-v1"},{id:"q-7a35-v3",knowledgePointId:"7a-3-5",type:"verify",difficulty:3,stem:"解方程 y/2 - 3 = y/3 + 1，y 的值为？",answer:"24",solution:"分母 LCM=6，两边乘6：3y-18=2y+6 → 3y-2y=6+18 → y=24。",variantGroup:"deqn-v3"},{id:"q-7a36-d1",knowledgePointId:"7a-3-6",type:"diagnostic",difficulty:3,stem:"小明买了3支笔和2个本子共花了17元，每个本子比每支笔贵1元。设每支笔 x 元，可列方程为？",options:["3x + 2(x+1) = 17","3x + 2(x-1) = 17","3x + 2x + 1 = 17","3(x+1) + 2x = 17"],answer:"3x + 2(x+1) = 17",solution:"笔 x 元，本子 (x+1) 元。3 支笔 + 2 个本子 = 17：3x+2(x+1)=17。",variantGroup:"app-v1"},{id:"q-7a36-d2",knowledgePointId:"7a-3-6",type:"diagnostic",difficulty:3,stem:"甲、乙两人从相距 36 km 的两地相向而行，甲的速度是 4 km/h，乙的速度是 5 km/h。设 x 小时后相遇，可列方程？",options:["4x + 5x = 36","4x - 5x = 36","5x - 4x = 36","4x = 5x + 36"],answer:"4x + 5x = 36",solution:"相遇问题：甲路程 + 乙路程 = 总路程。4x + 5x = 36。",variantGroup:"app-v2"},{id:"q-7a36-d3",knowledgePointId:"7a-3-6",type:"diagnostic",difficulty:3,stem:"一个两位数，十位数字是个位数字的 2 倍。如果把十位和个位交换，得到的新数比原数小 36。设个位数字为 x，可列方程？",options:["10x+2x = 10·2x+x-36","10·2x+x = 10x+2x+36","10·2x+x = 10x+2x-36","2x·x = 36"],answer:"10·2x+x = 10x+2x+36",solution:"原数=10·(2x)+x=21x，新数=10x+2x=12x。原数-新数=36 → 21x-12x=36 → 9x=36 → x=4。方程：10·2x+x = 10x+2x+36。",variantGroup:"app-v3"},{id:"q-7a36-v1",knowledgePointId:"7a-3-6",type:"verify",difficulty:3,stem:"小红买 4 支铅笔和 3 块橡皮共花 11 元，每块橡皮比每支铅笔贵 0.5 元。设每支铅笔 x 元，列方程并求解。",answer:"4x + 3(x+0.5) = 11，x = 1.25 元/支",solution:"铅笔 x 元，橡皮 (x+0.5) 元。4x+3(x+0.5)=11 → 7x+1.5=11 → 7x=9.5 → x≈1.36。",variantGroup:"app-v1"},{id:"q-7a36-v2",knowledgePointId:"7a-3-6",type:"verify",difficulty:3,stem:"甲、乙两人从相距 24 km 的两地相向而行，甲步行速度 4 km/h，乙骑自行车速度 8 km/h。设 x 小时后相遇，列方程并求解。",answer:"4x + 8x = 24，x = 2 小时",solution:"甲的路程+乙的路程=总路程：4x+8x=24 → 12x=24 → x=2。2 小时后相遇。",variantGroup:"app-v2"},{id:"q-7a41-d1",knowledgePointId:"7a-4-1",type:"diagnostic",difficulty:1,stem:"下列哪个是立体图形？",options:["三角形","圆","正方体","长方形"],answer:"正方体",solution:"正方体有长宽高三个维度，是立体图形。三角形、圆、长方形都是平面图形（二维）。",variantGroup:"solid-v1"},{id:"q-7a41-d2",knowledgePointId:"7a-4-1",type:"diagnostic",difficulty:1,stem:"从正面看一个圆柱体，看到的形状是？",options:["圆形","长方形","三角形","梯形"],answer:"长方形",solution:"圆柱从正面看是一个长方形。从上面看才是圆形。三视图中不同方向看到的不同。",variantGroup:"solid-v2"},{id:"q-7a41-d3",knowledgePointId:"7a-4-1",type:"diagnostic",difficulty:2,stem:"下列哪个图形不可能是正方体的展开图？",options:["由6个正方形组成的十字形",'由6个正方形组成的 "T" 形（含4个连成一排）',"由6个正方形排成一排",'由6个正方形组成的 "田" 字形'],answer:'由6个正方形组成的 "田" 字形',solution:'正方体展开图有 11 种，"田"字形不在其中——因为展开后不能折叠成正方体（会有重叠面）。',variantGroup:"solid-v3"},{id:"q-7a41-v1",knowledgePointId:"7a-4-1",type:"verify",difficulty:1,stem:"下列：球、圆、长方体、正方形 中，哪些是立体图形？",answer:"球 和 长方体 是立体图形",solution:"球和长方体有三维，是立体图形；圆和正方形是二维平面图形。",variantGroup:"solid-v1"},{id:"q-7a41-v3",knowledgePointId:"7a-4-1",type:"verify",difficulty:2,stem:"正方体的表面展开后，一共有几个正方形面？",answer:"6 个",solution:"正方体有 6 个面，展开后得到 6 个正方形。",variantGroup:"solid-v3"},{id:"q-7a42-d1",knowledgePointId:"7a-4-2",type:"diagnostic",difficulty:1,stem:'"点动成线"可以用下列哪个现象来说明？',options:["雨滴落在地面","笔尖在纸上划过","旋转硬币","翻开书页"],answer:"笔尖在纸上划过",solution:"笔尖是点，划过纸面留下痕迹形成线 → 点动成线。雨滴成点是点本身。",variantGroup:"plsf-v1"},{id:"q-7a42-d2",knowledgePointId:"7a-4-2",type:"diagnostic",difficulty:1,stem:"长方体有几个顶点？",options:["4 个","6 个","8 个","12 个"],answer:"8 个",solution:"长方体有 8 个顶点、12 条棱、6 个面。不要混淆！",variantGroup:"plsf-v2"},{id:"q-7a42-d3",knowledgePointId:"7a-4-2",type:"diagnostic",difficulty:2,stem:"长方体中，面与面相交得到什么？",options:["点","线段","面","体"],answer:"线段",solution:"面与面相交得线（棱）。如长方体中相邻两个面相交于一条棱。线与线相交得点（顶点）。",variantGroup:"plsf-v3"},{id:"q-7a42-v1",knowledgePointId:"7a-4-2",type:"verify",difficulty:1,stem:'"线动成面"可以用什么例子来说明？',answer:"旋转筷子扫过桌面形成扇面，或推拉门划过形成平面",solution:"一条线段沿某个方向平移扫过的区域就是一个面。",variantGroup:"plsf-v1"},{id:"q-7a42-v3",knowledgePointId:"7a-4-2",type:"verify",difficulty:2,stem:"三棱柱有几个面？几条棱？几个顶点？",answer:"5 个面，9 条棱，6 个顶点",solution:"三棱柱：2 个三角形底面 + 3 个矩形侧面 = 5 面；3×3 = 9 条棱；2×3 = 6 个顶点。",variantGroup:"plsf-v3"},{id:"q-7a43-d1",knowledgePointId:"7a-4-3",type:"diagnostic",difficulty:1,stem:"下列哪个图形有两个端点？",options:["直线","射线","线段","曲线"],answer:"线段",solution:"线段有两个端点，长度是确定的。直线无端点，射线有一个端点。",variantGroup:"lrs-v1"},{id:"q-7a43-d2",knowledgePointId:"7a-4-3",type:"diagnostic",difficulty:1,stem:'"经过两点有且只有一条直线"说明了直线的什么性质？',options:["无限性","确定性","弯曲性","可测量性"],answer:"确定性",solution:"两点确定一条直线——这是直线的基本性质。给定两个不同的点，只能画出一条经过它们的直线。",variantGroup:"lrs-v2"},{id:"q-7a43-d3",knowledgePointId:"7a-4-3",type:"diagnostic",difficulty:2,stem:"平面上有三个点 A、B、C，共可以画出几条线段？（三点不共线）",options:["1 条","2 条","3 条","6 条"],answer:"3 条",solution:"不共线的三点可连出 AB、BC、AC 三条线段（构成三角形）。如果加上射线和直线会更多。",variantGroup:"lrs-v3"},{id:"q-7a43-v1",knowledgePointId:"7a-4-3",type:"verify",difficulty:1,stem:"下列表述中，哪个是射线？A. 从手电筒射出的光  B. 一条绳子  C. 铁轨  D. 桌边",answer:"A. 从手电筒射出的光",solution:"射线有一个端点并向一方无限延伸。手电筒光从灯口射出向远处延伸。",variantGroup:"lrs-v1"},{id:"q-7a43-v3",knowledgePointId:"7a-4-3",type:"verify",difficulty:2,stem:"四个点（任意三点不共线）共可画出几条线段？",answer:"6 条",solution:"4 个点两两相连：组合数 C(4,2) = 6 条线段。",variantGroup:"lrs-v3"},{id:"q-7a44-d1",knowledgePointId:"7a-4-4",type:"diagnostic",difficulty:1,stem:"下列哪个角是直角？",options:["30°","90°","120°","180°"],answer:"90°",solution:"直角 = 90°。30° 是锐角，120° 是钝角，180° 是平角。",variantGroup:"angle-v1"},{id:"q-7a44-d2",knowledgePointId:"7a-4-4",type:"diagnostic",difficulty:1,stem:"一个角由什么组成？",options:["一条射线","一条线段","两条有公共端点的射线","两条平行线"],answer:"两条有公共端点的射线",solution:"角 = 有公共端点的两条射线。公共端点叫顶点，两条射线叫边。",variantGroup:"angle-v2"},{id:"q-7a44-d3",knowledgePointId:"7a-4-4",type:"diagnostic",difficulty:2,stem:"3 点整时，钟面上时针和分针的夹角是多少度？",options:["30°","60°","90°","120°"],answer:"90°",solution:"3 点整时，时针指向 3，分针指向 12，夹角为 3×30° = 90°（直角）。",variantGroup:"angle-v3"},{id:"q-7a44-v1",knowledgePointId:"7a-4-4",type:"verify",difficulty:1,stem:"75° 的角是什么角？",answer:"锐角（0° < 75° < 90°）",solution:"锐角范围：大于 0° 且小于 90°。75° 在此范围内。",variantGroup:"angle-v1"},{id:"q-7a44-v3",knowledgePointId:"7a-4-4",type:"verify",difficulty:2,stem:"6 点整时，钟面上时针和分针的夹角是多少度？属于什么角？",answer:"180°，平角",solution:"6 点整时，时针指向 6，分针指向 12，夹角 = 6×30° = 180°。平角。",variantGroup:"angle-v3"},{id:"q-7a45-d1",knowledgePointId:"7a-4-5",type:"diagnostic",difficulty:2,stem:"1.5° 等于多少分？",options:["15′","30′","90′","150′"],answer:"90′",solution:"1° = 60′，1.5° = 1.5 × 60′ = 90′。",variantGroup:"amc-v1"},{id:"q-7a45-d2",knowledgePointId:"7a-4-5",type:"diagnostic",difficulty:2,stem:"35° 角的余角是多少度？",options:["55°","145°","35°","65°"],answer:"55°",solution:"互余：两角之和 = 90°。余角 = 90° - 35° = 55°。",variantGroup:"amc-v2"},{id:"q-7a45-d3",knowledgePointId:"7a-4-5",type:"diagnostic",difficulty:3,stem:"计算：28°35′ + 42°46′ 等于？",options:["70°81′","71°21′","70°21′","69°81′"],answer:"71°21′",solution:"28°+42°=70°，35′+46′=81′=1°21′。70°+1°21′=71°21′。满 60 进 1。",variantGroup:"amc-v3"},{id:"q-7a45-v1",knowledgePointId:"7a-4-5",type:"verify",difficulty:2,stem:"2.25° = ___°___′",answer:"2°15′",solution:"0.25° × 60 = 15′，所以 2.25° = 2°15′。",variantGroup:"amc-v1"},{id:"q-7a45-v3",knowledgePointId:"7a-4-5",type:"verify",difficulty:3,stem:"计算：52°18′ - 35°42′ 等于？",answer:"16°36′",solution:"18′ < 42′，向度借 1 (60′)：51°78′ - 35°42′ = 16°36′。",variantGroup:"amc-v3"}],vm={"7a-1-4":{abstract_first:`## 绝对值的定义

**绝对值**：一个数在数轴上到原点的距离，记作 |a|。

**规则**：
- 正数的绝对值是它本身：|5| = 5
- 零的绝对值是零：|0| = 0
- 负数的绝对值是它的相反数：|-5| = 5

> 记住：绝对值永远是 **非负数**。

**例题**：计算下列各式的值：
(1) |8| = ?  
(2) |-12| = ?  
(3) |0| = ?`,concrete_first:`## 从"距离"理解绝对值

小华从家出发。向东走300米到学校，这个距离是300米。向西走300米到超市，这个距离也是300米。

**不管往东还是往西，走的距离都是300米。**

在数轴上也是一样：
- 数字5在原点右边5个单位 → 距离是5 → |5| = 5
- 数字-5在原点左边5个单位 → 距离也是5 → |-5| = 5

> 绝对值就是"从原点到这个点的距离"。距离永远是正的（或零）。

**想一想**：你家到学校是2公里，学校到你家的距离是多少？也是2公里。距离和方向无关！`,error_discovery:`## 找出错误

下面是三位同学的答案，请找出谁算错了，错在哪里：

**小明**：| -7 | = 7  
**小红**：| -7 | = -7  
**小刚**：| 10 | = 10

---

<details>
<summary>点击查看答案</summary>

**小红错了。** 她以为绝对值就是"去掉负号变成正数再带上负号"——这是一个常见的误解。

实际上，|-7| 表示 -7 到原点的距离，距离不可能是负数。

如果你也犯了这个错误，没关系——这说明你需要记住：**绝对值的结果永远 ≥ 0**。
</details>`},"7a-2-4":{abstract_first:`## 合并同类项规则

**同类项**：字母部分完全相同的项。如 3x 和 5x，7a² 和 -2a²。

**合并规则**：系数相加，字母部分不变。

**例题**：
(1) 3x + 5x = (3+5)x = 8x
(2) 7a² - 3a² = (7-3)a² = 4a²
(3) 2x + 3y - x + 2y = (2-1)x + (3+2)y = x + 5y

> x 和 y 不是同类项，不能合并！`,concrete_first:`## 水果店的合并

水果店进货：
- 上午进了3箱苹果，下午又进了5箱苹果 → 一共 **8箱苹果**
- 上午进了7箱橘子，卖出3箱 → 还剩 **4箱橘子**

苹果和橘子能"合并"吗？不能——你不能说"我有8箱苹果和4箱橘子，所以我有12箱苹果橘子"。它们是不同的东西，要分开记。

合并同类项也是一样：
- 3x + 5x → 苹果加苹果 = 8x
- 7a² - 3a² → 橘子减橘子 = 4a²
- 2x + 3y → x 和 y 是不同的"水果"，不能合并！

**想一想**：3x + 3y 能合并成 6xy 吗？不能！就像3箱苹果加3箱橘子不能说成6箱"苹果橘子"。`,error_discovery:`## 找出错误

下面是小李做的合并同类项练习，请找出哪里错了：

(1) 4x + 2x = 6x²  ← 正确吗？  
(2) 5a + 3b = 8ab  ← 正确吗？  
(3) 7m² - 2m² = 5  ← 正确吗？

---

<details>
<summary>点击查看答案</summary>

**三道全部错误！**

(1) 4x + 2x = 6x，不是 6x²。合并同类项时指数不变。
(2) 5a + 3b 不能合并！a 和 b 是不同的字母，不是同类项。
(3) 7m² - 2m² = 5m²，不是 5。字母部分 m² 要保留！

> 最容易犯的错误：合并同类项时把字母部分也"合并"或"丢掉"了。记住——字母部分是 **不变的**。
</details>`},"7a-3-3":{abstract_first:`## 移项法则

**移项**：把方程一边的项移到另一边，同时改变符号。

把方程看作一个天平：
- 左边去掉什么，右边也要去掉什么
- 效果等价于"把一项从一边搬到另一边，符号取反"

**例题**：
(1) x + 3 = 7 → x = 7 - 3 = 4
(2) 2x - 5 = 9 → 2x = 9 + 5 → 2x = 14 → x = 7
(3) 5x = 3x + 8 → 5x - 3x = 8 → 2x = 8 → x = 4`,concrete_first:`## 天平游戏

想象一个天平，左边放了一个"x 千克的箱子"和一个"3千克的砝码"，右边放了"7千克的砝码"。天平是平衡的。

问题：x 千克的箱子有多重？

解法：左边拿走3千克砝码，天平会倾斜——所以右边也要拿走3千克砝码来保持平衡。

x + 3 = 7  
左右各减3：x + 3 - 3 = 7 - 3  
x = 4

**这就是"移项"的本质**：不是魔法般地"搬过去变号"，而是在天平两边做同样的操作。

> 移项不是死记"搬过去变号"，而是"两边同时做同样的事"的结果。`,error_discovery:`## 找出错误

小张解了下面三道方程，请检查：

(1) x + 3 = 7 → x = 7 + 3 = 10  ← 对吗？  
(2) 2x - 5 = 9 → 2x = 9 - 5 = 4 → x = 2  ← 对吗？  
(3) 5x = 3x + 8 → 5x + 3x = 8 → 8x = 8 → x = 1  ← 对吗？

---

<details>
<summary>点击查看答案</summary>

全部有错。

(1) x + 3 = 7，移项应该是 x = 7 - 3 = 4。+3 移过去要变 -3！
(2) 2x - 5 = 9，移项：2x = 9 + 5 = 14，x = 7。-5 移过去变 +5，不是 -5。
(3) 5x = 3x + 8，3x 在右边是正的，移到左边要变 -3x：5x - 3x = 8，2x = 8，x = 4。

> 移项铁律：**从等号一边搬到另一边，符号必须改变！**
</details>`},"7a-1-5":{abstract_first:`## 有理数加法法则

**同号两数相加**：取相同的符号，并把绝对值相加。
例：(-3) + (-4) = -(3+4) = -7

**异号两数相加**：取绝对值较大的符号，并用较大的绝对值减去较小的绝对值。
例：(-5) + 8 = +(8-5) = +3

**互为相反数相加**：和为 0。
例：(-6) + 6 = 0

**一个数与 0 相加**：仍得这个数。`,concrete_first:`## 用"赚赔钱"理解有理数加法

把正数看作**赚钱**，负数看作**赔钱**。

**今天上午赔了3元，下午又赔了4元** → (-3) + (-4)  
一共赔了7元 → 结果是 -7

**上午赔了5元，下午赚了8元** → (-5) + 8  
赔5赚8，净赚3元 → 结果是 +3

**赚6元，赔6元** → 6 + (-6)  
不赚不赔 → 结果是 0

> 两个朋友合伙做生意：一起赚就算总赚多少，一起赔就算总赔多少，一个赚一个赔就看谁金额大。`,error_discovery:`## 找出错误

小王算了四道题，结果如下。请找出哪里错了：

(1) (-3) + (-2) = 1  ← 对吗？  
(2) 5 + (-3) = -2  ← 对吗？  
(3) (-7) + 4 = -3  ← 对吗？  
(4) 8 + (-8) = 16  ← 对吗？

---

<details>
<summary>点击查看答案</summary>

(1) 错。(-3)+(-2) = -5。同号相加，取相同符号，绝不可能变正号。
(2) 错。5+(-3) = 2。5的绝对值更大且为正，结果应取正号。
(3) 对。(-7)+4 = -3。|-7|>|4|，取负号，7-4=3。
(4) 错。8+(-8) = 0。互为相反数，和为0。

> 验证妙招：用"赚赔钱"验算。赔3赔2一共赔5，不可能是赚1。
</details>`},"7a-1-1":{abstract_first:`## 正数和负数的定义

**正数**：大于 0 的数，如 3、+5、1.2、$\frac{1}{3}$。

**负数**：小于 0 的数，在正数前面加上"-"号，如 -3、-5、-1.2、$-\frac{1}{3}$。

**0 既不是正数也不是负数**，它是正负数的分界。

**例题**：
(1) 下列各数中哪些是正数、哪些是负数？
+6、-8、0、75、-0.4、$\frac{3}{5}$、-2.5

> 正数：+6、75、$\frac{3}{5}$
> 负数：-8、-0.4、-2.5
> 0 既不是正数也不是负数`,concrete_first:`## 从"温度计"理解正负数

冬天到了，天气预报说：

- 北京今天最高气温 **5°C**，最低气温 **-3°C**
- 哈尔滨最高气温 **-12°C**，最低气温 **-25°C**

**5°C 和 -3°C 有什么区别？**

5°C 是零上 5 度（比冰的温度高），-3°C 是零下 3 度（比冰的温度低）。温度计上，0°C 以上是正的，0°C 以下是负的。

生活中还有：
- 海拔：珠穆朗玛峰 +8848 米，吐鲁番盆地 -154 米
- 财务：收入 +500 元，支出 -300 元
- 记账：存入 1000 元记 +1000，取出 500 元记 -500

> 正数和负数就像温度计的"零上"和"零下"，以 0 为分界线。`,error_discovery:`## 找出错误

下面是三位同学对数的分类，请找出错误：

**小明**：0 是正数。  
**小红**：-(-5) 是负数。  
**小刚**：$\frac{1}{2}$ 是正数。

---

<details>
<summary>点击查看答案</summary>

**小明和小红都错了。**

小明：**0 既不是正数也不是负数**。0 是正负数的分界线。

小红：-(-5) = 5，它是正数。-(-5) 的意思是"负 5 的相反数"，等于正 5。

小刚正确。$\frac{1}{2}$ > 0，所以是正数。

> 陷阱：看到负号不一定就是负数！要看化简后的值。
</details>`},"7a-1-2":{abstract_first:`## 数轴的定义

**数轴三要素**：原点、正方向、单位长度。

1. 画一条水平直线
2. 在直线上取一点表示 0（原点）
3. 规定向右为正方向
4. 选取适当的长度作为单位长度

**例题**：把下列各数在数轴上表示出来：
-2、1.5、-0.5、3

~~~
  -2  -0.5   0   1.5     3
---+---+---+---+---+---+---+--->
~~~

> 数轴上右边的数总比左边的数大。`,concrete_first:`## 从"车站站牌"理解数轴

想象一条公交线路：从市中心出发，向西有三个站，向东有四个站。

我们把市中心当作 **原点（0）**，向东是正方向，向西是负方向。

~~~
西三站  西二站  西一站  市中心  东一站  东二站  东三站  东四站
  -3      -2     -1      0       1       2       3       4
~~~

- 西二站在 -2 的位置
- 东三站在 3 的位置
- 从西二站走到东三站，要经过 5 个站

这就是数轴——用一条直线和上面的刻度来表示所有的数。

> 数轴把抽象的数字变成了具体的位置，右边的数总比左边的大。`,error_discovery:`## 找出错误

下面是三位同学画的数轴，请找出问题：

**小明画的**：
~~~
0  1  3  5  7
~~~

**小红画的**：
~~~
-3  -2  -1  1  2  3
~~~

**小刚画的**：
~~~
-2  -1  0  1  2  3
~~~

---

<details>
<summary>点击查看答案</summary>

**小明**：缺少原点左侧的负数部分。数轴应该向两侧延伸。

**小红**：**跳过了 0**！0 是原点，数轴上必须有 0。

**小刚**：单位长度不一致，-2 到 -1 的间隔和 -1 到 0 的间隔应该相等。

> 数轴三要素缺一不可：原点、正方向、单位长度。
</details>`},"7a-1-3":{abstract_first:`## 相反数的定义

**相反数**：只有符号不同的两个数互为相反数。

- 5 的相反数是 -5
- -3 的相反数是 3
- 0 的相反数是 0

**表示方法**：a 的相反数是 -a。

**几何意义**：在数轴上，互为相反数的两个数位于原点的两侧，且到原点的距离相等。

**例题**：
(1) +7 的相反数是 -7
(2) -(+7) = -7
(3) -(-7) = +7

> 负数前面加"负号"变成正数，正数前面加"负号"变成负数。`,concrete_first:`## 从"照镜子"理解相反数

站在镜子前面，你举起右手，镜子里的人举起的是左手。你和镜子里的你，"对称"但"相反"。

数轴上的相反数也是一样的道理：

~~~
    -3          0          3
-----+----------+----------+----->
  <--3个单位--><--3个单位-->
~~~

3 和 -3 到原点 0 的距离都是 3 个单位，只是方向相反——一个在右边，一个在左边。

> 相反数 = 数轴上的"镜像"：以原点为镜面，翻到另一边去。

**想一想**：如果你在数轴上站在 +5 的位置，你的"镜子里的自己"站在哪里？站在 -5！`,error_discovery:`## 找出错误

请判断以下说法是否正确：

(1) 0 没有相反数。  
(2) -(-8) = -8  
(3) 相反数等于本身的数只有 0。

---

<details>
<summary>点击查看答案</summary>

(1) **错**。0 的相反数是 0。0 比较特殊，它的相反数就是它自己。

(2) **错**。-(-8) = 8。负负得正。-8 的相反数是 8，所以 -(-8) = 8。

(3) **对**。如果一个数等于它的相反数，即 a = -a，那么 2a = 0，a = 0。只有 0 满足。

> 最容易错的是 -(-a) 的化简：负负得正，结果是 +a。
</details>`},"7a-1-6":{abstract_first:`## 有理数减法法则

**减法法则**：减去一个数，等于加上这个数的相反数。

**公式**：$a - b = a + (-b)$

**例题**：
(1) $3 - 5 = 3 + (-5) = -2$
(2) $(-3) - 5 = (-3) + (-5) = -8$
(3) $(-3) - (-5) = (-3) + 5 = 2$
(4) $0 - 7 = 0 + (-7) = -7$

> 减法转化为加法后，用加法法则求解。`,concrete_first:`## 从"温度变化"理解减法

早上温度是 3°C，晚上降到 -2°C。温度变化了多少？

变化量 = 晚上温度 - 早上温度 = (-2) - 3

这等于"从 -2 再降 3 度"：(-2) - 3 = (-2) + (-3) = -5

温度下降了 5°C。

**换个场景**：今天赚了 50 元，花了 80 元，还欠多少钱？

还欠 = 80 - 50 = 30 元，但表达为损失：50 - 80 = 50 + (-80) = -30

> 减法就是"加上相反数"——去掉减法，全部变成加法来做。`,error_discovery:`## 找出错误

下面是三位同学的计算，请找出错误：

(1) 5 - (-3) = 5 - 3 = 2  
(2) (-4) - 6 = 4 - 6 = -2  
(3) (-2) - (-7) = (-2) + 7 = -9

---

<details>
<summary>点击查看答案</summary>

全部有错。

(1) 5 - (-3) = 5 + 3 = 8。减去 -3 等于加上 +3，不是减 3！

(2) (-4) - 6 = (-4) + (-6) = -10。-4 变成 -(-4) 是错的！减 6 = 加 -6。

(3) (-2) - (-7) = (-2) + 7 = 5，不是 -9。异号相加：|7|>|2|，取正，7-2=5。

> 核心口诀：**减去一个数 = 加上它的相反数**。
</details>`},"7a-1-7":{abstract_first:`## 有理数乘法法则

**两数相乘**：同号得正，异号得负，并把绝对值相乘。

**多个有理数相乘**：
- 负因数的个数为奇数时，积为负
- 负因数的个数为偶数时，积为正

**任何数与 0 相乘都得 0**。

**例题**：
(1) $(-3) 	imes 4 = -12$（异号得负）
(2) $(-5) 	imes (-2) = 10$（同号得正）
(3) $(-2) 	imes 3 	imes (-1) = 6$（两个负数，积为正）
(4) $(-1) 	imes (-2) 	imes (-3) = -6$（三个负数，积为负）`,concrete_first:`## 从"反复涨跌"理解乘法

股票连续涨跌：

- **涨 3 天，每天涨 2 元**：$3 	imes 2 = 6$ 元（涨 6 元）
- **跌 3 天，每天跌 2 元**：$3 	imes (-2) = -6$ 元（跌 6 元）
- **"往回倒退" 3 天，每天跌 2 元**（即问 3 天前的价格比现在高多少）：
  $(-3) 	imes (-2) = 6$ 元（高 6 元）

**记忆口诀**：
- 朋友的朋友是朋友 → 正 × 正 = 正
- 朋友的敌人是敌人 → 正 × 负 = 负
- 敌人的朋友是敌人 → 负 × 正 = 负
- 敌人的敌人是朋友 → 负 × 负 = 正

> 负负得正，是乘法最反直觉但也最重要的规则。`,error_discovery:`## 找出错误

下面是三位同学的计算，请找出错误：

(1) $(-3) 	imes (-4) = -12$  
(2) $6 	imes (-2) = 12$  
(3) $(-1) 	imes (-2) 	imes (-3) 	imes 4 = 24$

---

<details>
<summary>点击查看答案</summary>

全部有错。

(1) $(-3) 	imes (-4) = 12$。负负得正，两个负数相乘结果是正数！

(2) $6 	imes (-2) = -12$。异号得负，不是正数。

(3) 这里有 3 个负数（奇数），所以结果是负的：$= -(1 	imes 2 	imes 3 	imes 4) = -24$。

> 多数相乘的判号技巧：**数负号的个数**，奇数个→负，偶数个→正。
</details>`},"7a-1-8":{abstract_first:`## 有理数除法法则

**法则一**：除以一个不等于 0 的数，等于乘这个数的倒数。

$ a div b = a 	imes \frac{1}{b} quad (b 
eq 0)$

**法则二**：两数相除，同号得正，异号得负，并把绝对值相除。

**0 除以任何一个不等于 0 的数都得 0。但 0 不能做除数！**

**例题**：
(1) $(-12) div 3 = -4$（异号得负）
(2) $(-15) div (-5) = 3$（同号得正）
(3) $0 div (-7) = 0$
(4) $\frac{1}{2} div (-\frac{2}{3}) = \frac{1}{2} 	imes (-\frac{3}{2}) = -\frac{3}{4}$`,concrete_first:`## 从"分钱"理解除法

你和两个朋友合伙亏了 180 元。三人平摊，每人亏损多少？

$(-180) div 3 = -60$ → 每人亏 60 元。

换个场景：把一段长 12 米的绳子，每次剪掉 3 米，能剪几次？

$12 div 3 = 4$ → 能剪 4 次。

但如果"倒着剪"（从终点往回量），每次往后退 3 米：

$(-12) div (-3) = 4$ → 还是 4 次！

> 除法和乘法共享"同号得正、异号得负"的规则。除以一个数 = 乘以它的倒数。`,error_discovery:`## 找出错误

下面是三位同学的计算，请找出错误：

(1) $(-8) div (-2) = -4$  
(2) $15 div (-3) = 5$  
(3) $0 div 5$ 没有意义

---

<details>
<summary>点击查看答案</summary>

全部有错。

(1) $(-8) div (-2) = 4$。同号得正！负数除以负数结果是正数。

(2) $15 div (-3) = -5$。异号得负，正数除以负数结果是负数。

(3) $0 div 5 = 0$。0 除以非 0 数都有意义（结果 = 0）。是 $5 div 0$ 才没有意义！

> 核心口诀：**除以一个数 = 乘以它的倒数**，符号规则与乘法一致。
</details>`},"7a-1-9":{abstract_first:`## 有理数的乘方

**乘方**：求 n 个相同因数 a 的积的运算，记作 $a^n$。

- a 叫做**底数**
- n 叫做**指数**
- $a^n$ 读作"a 的 n 次方"或"a 的 n 次幂"

**符号规则**：
- 正数的任何次幂都是正数
- 负数的奇次幂是负数，偶次幂是正数

**注意**：$(-3)^2 = 9$，但 $-3^2 = -9$（-3² 表示 3² 的相反数！）

**例题**：
(1) $(-2)^3 = (-2) 	imes (-2) 	imes (-2) = -8$
(2) $(-2)^4 = (-2) 	imes (-2) 	imes (-2) 	imes (-2) = 16$
(3) $(-1)^{100} = 1$，$(-1)^{101} = -1$`,concrete_first:`## 从"折纸"理解乘方

一张纸对折 1 次有 2 层，对折 2 次有 $2 	imes 2 = 4$ 层，对折 3 次有 $2 	imes 2 	imes 2 = 8$ 层……

对折 10 次：$2^{10} = 1024$ 层 ≈ 一本字典那么厚！

反过来，如果每折一次纸的厚度"减少"（我们用 -2 来做比喻）：  
折 1 次：-2，折 2 次：$(-2)^2 = 4$（又变厚了！），折 3 次：$(-2)^3 = -8$……

**规律**：乘方的结果（幂）在正负之间"跳动"——偶数次幂是正，奇数次幂保留负号。

> 这就是为什么 $(-1)^{100} = 1$（100 是偶数），而 $(-1)^{101} = -1$（101 是奇数）。`,error_discovery:`## 找出错误

下面是三位同学的计算，请找出错误：

(1) $(-3)^2 = -9$  
(2) $-4^2 = 16$  
(3) $(-1)^{2024} = -1$

---

<details>
<summary>点击查看答案</summary>

全部有错。

(1) $(-3)^2 = 9$。(-3)² 是两个 (-3) 相乘：$(-3) 	imes (-3) = 9$，不是 -9。

(2) $-4^2 = -16$。这里指数 2 只作用在 4 上，算出 16 后再取相反数得 -16。和 $(-4)^2$ 完全不同！

(3) $(-1)^{2024} = 1$。2024 是偶数，负数的偶数次幂是正数！

> 最重要陷阱：$(-a)^n$ 和 $-a^n$ 是完全不同的！括号包不包"负号"是关键。
</details>`},"7a-1-10":{abstract_first:`## 科学记数法

**科学记数法**：把一个大于 10 的数表示成 $a 	imes 10^n$ 的形式。

其中：$1 leq a < 10$，n 是正整数。

**规则**：
- a 的整数部分只有 1 位
- n = 原数的整数位数 - 1

**例题**：
(1) $567000000 = 5.67 	imes 10^8$
   （9 位数 → n = 9 - 1 = 8）
(2) $120000 = 1.2 	imes 10^5$
(3) $3.05 	imes 10^4 = 30500$

> 反过来看：$10^n$ 就是 1 后面跟 n 个 0。`,concrete_first:`## 从"大数简化"理解科学记数法

地球到太阳的距离 ≈ **149600000000 米**

这个数字太长了，容易写错。科学家发明了"科学记数法"：

$149600000000 = 1.496 	imes 10^{11}$

- 把小数点移到第一个非零数字后面：1.496
- 数一数移了几位：11 位 → 写成 $10^{11}$

**其他例子**：
- 光速 ≈ $3 	imes 10^8$ 米/秒
- 地球质量 ≈ $5.97 	imes 10^{24}$ 千克
- 阿伏伽德罗常数 ≈ $6.02 	imes 10^{23}$

> 科学记数法 = 把大数写成"一个 1~10 之间的小数 × 10 的幂"。`,error_discovery:`## 找出错误

下面是三位同学的表示，请找出错误：

(1) $56700000 = 56.7 	imes 10^6$  
(2) $2300000 = 2.3 	imes 10^5$  
(3) $9.8 	imes 10^3 = 98000$

---

<details>
<summary>点击查看答案</summary>

全部有错。

(1) a 必须是 $1 leq a < 10$，56.7 不满足。正确：$5.67 	imes 10^7$。

(2) 指数 n 算错了。2300000 有 7 位数，n = 7 - 1 = 6。正确：$2.3 	imes 10^6$。

(3) $9.8 	imes 10^3 = 9.8 	imes 1000 = 9800$，不是 98000。多了一个 0！

> 检查方法：$a 	imes 10^n$ = 把 a 的小数点向右移 n 位。
</details>`},"7a-2-1":{abstract_first:`## 用字母表示数

**用字母表示数的意义**：用一个字母或含有字母的式子，简明地表示数量关系和运算规律。

**运算律用字母表示**：
- 加法交换律：$a + b = b + a$
- 乘法分配律：$a(b + c) = ab + ac$

**书写规范**：
1. 数字与字母相乘，数字写在前面，乘号可省略：$3a$（不是 $a3$）
2. 字母与字母相乘，按字母表顺序写：$ab$（不是 $ba$，除非特殊）
3. 系数为 1 或 -1 时，1 省略：$a$（不是 $1a$），$-a$（不是 $-1a$）
4. 除法写成分数形式：$\frac{a}{b}$（不是 $a div b$）

**例题**：
(1) n 的 3 倍：$3n$
(2) a 与 b 的差：$a - b$
(3) x 的一半：$\frac{x}{2}$`,concrete_first:`## 从"猜数字游戏"理解字母

小明说："我想了一个数，把它乘以 3，再加 5，结果是 20。你猜是什么数？"

如果我们用 $x$ 来代表"那个未知的数"：

$3x + 5 = 20$

这比"某个数乘以 3 再加 5 等于 20"简洁多了。

**字母就像"占位符"**：
- 不知道的数 → 用字母来"占座"
- 通用的规律 → 用字母来"表达"

比如"买 3 个苹果"和"每个苹果 y 元"，总价是 $3y$ 元。不管苹果多少钱一斤，这个式子都适用。

> 字母不是可怕的东西——它就是"等等看，先占个位置"的工具。`,error_discovery:`## 找出错误

请判断以下书写是否正确：

(1) a 的 2 倍写作 $a2$  
(2) x 与 3 的差写作 $x3$  
(3) a 除以 b 写作 $a div b$

---

<details>
<summary>点击查看答案</summary>

全部不规范。

(1) 数字与字母相乘，数字应写在前面。应写作 $2a$。

(2) x 与 3 的差应写作 $x - 3$，不是 $x3$。$x3$ 看起来像是"x 乘以 3"，容易混淆。

(3) a 除以 b 应该写成分数形式 $\frac{a}{b}$，在代数中不用除号。

> 代数的书写规范就是代数的"语法"，写错了别人就看不懂了。
</details>`},"7a-2-2":{abstract_first:`## 单项式的定义

**单项式**：由数与字母的积组成的代数式。单独的一个数或一个字母也是单项式。

**单项式的系数**：单项式中的数字因数（包括符号）。

**单项式的次数**：单项式中所有字母的指数之和。

**例题**：
(1) $3x^2y$：系数是 3，次数是 2+1 = 3
(2) $-5a^3$：系数是 -5，次数是 3
(3) $\frac{2}{3}xy$：系数是 $\frac{2}{3}$，次数是 1+1 = 2
(4) $7$：系数是 7，次数是 0（常数项）
(5) $-m$：系数是 -1，次数是 1

> 注意：$pi$ 是常数不是字母！$pi r^2$ 的次数是 2 不是 3。`,concrete_first:`## 从"商品标签"理解单项式

超市里的商品标签：

- 苹果：**3 元/斤**。买 x 斤花 $3x$ 元。
- 笔记本：**5 元/本**。买 a 本花 $5a$ 元。

$3x$ 和 $5a$ 就是单项式——"一个数字 × 一个或多个字母"。

标签上有"单价"和"数量"：
- 单价 → **系数**（数字部分）
- 数量单位 → **字母部分**（代表变化的量）
- 如果买"每斤苹果每袋包装费"……嗯，字母的个数就是**次数**。

比如一个长方体：长 a，宽 b，高 c，体积是 $abc$——这就是一个次数为 3 的单项式。

> 单项式 = 一个数字和若干字母"捆绑"在一起。`,error_discovery:`## 找出错误

请判断以下说法是否正确：

(1) $x + y$ 是单项式。  
(2) $-2a^2b$ 的次数是 2。  
(3) $0$ 不是单项式。

---

<details>
<summary>点击查看答案</summary>

全部有错。

(1) $x + y$ 是多项式，不是单项式。单项式只包含乘法（含乘方），不含加减法。

(2) $-2a^2b$ 的次数是 2 + 1 = 3。a 的指数 2 加 b 的指数 1 = 3。

(3) **0 是单项式**！单独的一个数也是单项式，次数为 0。

> 判定单项式：看有没有加减号。有加减号 → 不是单项式。
</details>`},"7a-2-3":{abstract_first:`## 多项式的定义

**多项式**：几个单项式的和。

**多项式的项**：多项式中的每个单项式。每个项包括它前面的符号。

**多项式的次数**：次数最高的项的次数。

**多项式的命名**：
- 一项 → 单项式
- 二项 → 二项式（如 $2x + 3$）
- 三项 → 三项式（如 $x^2 + 2x - 1$）

**例题**：
(1) $3x^2 + 2x - 5$：有三项，次数是 2，是二次三项式
(2) $2a - b + 3c$：有三项，次数是 1，是一次三项式
(3) $x^3 + 1$：有二项，次数是 3，是三次二项式`,concrete_first:`## 从"套餐价格"理解多项式

外卖套餐：
- 汉堡：**x 元**
- 可乐：**y 元**
- 薯条：**z 元**
- 配送费：**5 元**

总价 = $x + y + z + 5$

这就是一个多项式！每一项代表一个独立的费用：
- $x$ 是一次项（汉堡）
- $y$ 是一次项（可乐）
- $z$ 是一次项（薯条）
- 5 是常数项（配送费）

总共有 4 项，最高次数是 1 → 一次四项式。

> 多项式 = 多个"不能合并的东西"用加减号连在一起，就像总价 = 各项费用的和。`,error_discovery:`## 找出错误

请判断以下说法：

(1) $x^2 + x + 1$ 是三次三项式。  
(2) $2a + 3a$ 是二项式。  
(3) $4x^3 - x^2 + 2x - 7$ 的次数是 4。

---

<details>
<summary>点击查看答案</summary>

全部有错。

(1) 最高次数是 2（$x^2$ 项），是二次三项式。说"三次"是看错了。

(2) $2a + 3a = 5a$，两项合并后是一个单项式。判断多项式的项数要先看是否可合并同类项。

(3) 各项次数分别为 3、2、1、0，最高次数是 3，所以是三次四项式。次数就看最高次项。

> 多项式的次数 = 最高次项的次数，不是项数也不是系数。
</details>`},"7a-2-5":{abstract_first:`## 去括号法则

**法则**：
- 括号前是"+"号：去掉括号，括号内各项符号**不变**
- 括号前是"-"号：去掉括号，括号内各项符号**全变**

**依据**：乘法分配律

**例题**：
(1) $a + (b - c) = a + b - c$
(2) $a - (b - c) = a - b + c$
(3) $3(2x - 1) = 6x - 3$
(4) $-2(x - y + 3) = -2x + 2y - 6$

> 括号前有系数时，系数要**分别乘**括号内的每一项！`,concrete_first:`## 从"拆包裹"理解去括号

你收到一个包裹，上面写着：

**"给我朋友小明（书 + 文具 - 欠款）"**

- 如果老师说"把包裹里的东西都给小明"：什么都不变 → $a + (b + c - d) = a + b + c - d$
- 如果老师说"把包裹里的东西都拿走"：东西没了 → 相当于每样都取反 → $a - (b + c - d) = a - b - c + d$

**括号就像"包裹"**：前面是 + 号，拆开不变；前面是 - 号，拆开全翻。

括号前有数字时：
$3(2x - 1)$ → "3 份同样的包裹"，每份 2x 和 -1 → $6x - 3$

> 去括号 = 拆包裹：+ 号开箱不变，- 号开箱翻面。`,error_discovery:`## 找出错误

下面是三位同学的去括号，请找出错误：

(1) $x - (y - z) = x - y - z$  
(2) $-2(a + 3) = -2a + 3$  
(3) $3(2x - 1) - 2(x + 1) = 6x - 3 - 2x + 1$

---

<details>
<summary>点击查看答案</summary>

(1) $x - (y - z) = x - y + z$。-z 前面有两个负号：括号前的 - 号遇到括号内的 -z，变成 +z。

(2) $-2(a + 3) = -2a - 6$。-2 要乘以括号内的每一项：$(-2) 	imes 3 = -6$，不是 +3。

(3) 最后一项错了。$-2(x + 1) = -2x - 2$，不是 $-2x + 1$。系数 -2 要乘到 +1 上。

> 去括号最常见错误：忘记把系数乘到括号内的**每一项**。
</details>`},"7a-2-6":{abstract_first:`## 整式的加减运算步骤

**步骤**：
1. **去括号**：按去括号法则去掉所有括号
2. **找同类项**：找出字母部分完全相同的项
3. **合并同类项**：系数相加，字母部分不变

**例题**：
$(3x^2 + 2x - 1) + (2x^2 - 3x + 4)$
$= 3x^2 + 2x - 1 + 2x^2 - 3x + 4$
$= (3x^2 + 2x^2) + (2x - 3x) + (-1 + 4)$
$= 5x^2 - x + 3$

$(2a - 3b) - (a - 2b + 1)$
$= 2a - 3b - a + 2b - 1$
$= (2a - a) + (-3b + 2b) - 1$
$= a - b - 1$`,concrete_first:`## 从"仓库整理"理解整式加减

仓库里有几批货物：

- 第一间房：3 箱苹果 + 2 箱橘子 - 1 箱坏果
- 第二间房：2 箱苹果 - 3 箱橘子 + 4 箱梨

要把两间房合并整理：

~~~
苹果：3 + 2 = 5 箱
橘子：2 + (-3) = -1 箱（少一箱）
梨：  0 + 4 = 4 箱
坏果：-1 + 0 = -1 箱
~~~

合并后：5 箱苹果 - 1 箱橘子 + 4 箱梨 - 1 箱坏果。

这就是 $5x^2 - x + 3$——先拆开所有"房间"（去括号），再把"同类货物"放到一起（合并同类项）。

> 整式加减 = 仓库大盘点：开门 → 分类 → 合并。`,error_discovery:`## 找出错误

下面是三位同学的计算，请找出错误：

(1) $(2x + 3) - (x - 1) = 2x + 3 - x - 1 = x + 2$  
(2) $(a^2 + a) + (a^2 - 1) = a^2 + a + a^2 - 1 = a^2 + a - 1$  
(3) $(3m - 2n) - (m + n) = 3m - 2n - m + n = 2m - n$

---

<details>
<summary>点击查看答案</summary>

(1) $x + 2$ 正确。(2) 和(3) 有错。

(2) $a^2 + a^2 = 2a^2$，正确结果：$2a^2 + a - 1$。漏掉了 $a^2$ 的合并。

(3) $(3m - 2n) - (m + n) = 3m - 2n - m - n = 2m - 3n$。$-(m + n) = -m - n$，n 要变号！

> 减法去括号是最容易出错的地方：括号前的 - 号让里面每一项都变号。
</details>`},"7a-3-1":{abstract_first:`## 方程的概念

**方程**：含有未知数的等式。

**一元一次方程**：只含有一个未知数（元），且未知数的次数是 1 的方程。

标准形式：$ax + b = 0$（$a 
eq 0$）

**方程的解**：使方程左右两边相等的未知数的值。

**解方程**：求方程的解的过程。

**例题**：判断下列哪些是一元一次方程：
(1) $2x + 3 = 7$  ✓
(2) $x^2 - 1 = 0$  ✗（次数是 2）
(3) $x + y = 5$  ✗（两个未知数）
(4) $x + 3$  ✗（不是等式）`,concrete_first:`## 从"猜数字"理解方程

小红想了一个数，她对小明说：

"这个数加 3 等于 10，你猜是什么数？"

小明想：$x + 3 = 10$ → x = 7。猜中了！

**方程 = 已知条件和未知答案之间的"等式"**。

- 未知数：$x$（小红想的数）
- 等式：$x + 3 = 10$
- 方程的解：$x = 7$（解出来就是"猜中"了）

> 方程就像一道"藏了答案的数学题"。解方程就是把藏起来的答案"挖"出来。`,error_discovery:`## 找出错误

请判断以下说法是否正确：

(1) $x + 2$ 是一个方程。  
(2) $x^2 - 4 = 0$ 是一元一次方程。  
(3) 方程一定是等式。

---

<details>
<summary>点击查看答案</summary>

(1) **错**。$x + 2$ 只是一个代数式，不是等式。方程必须含有**等号**。

(2) **错**。$x^2$ 的次数是 2，这是一元二次方程，不是一次方程。

(3) **对**。方程必须是等式。但不是所有等式都是方程——$2 + 3 = 5$ 是等式，但不是方程（没有未知数）。

> 方程三要素：①有未知数 ②是等式 ③未知数次数为 1→一元一次。
</details>`},"7a-3-2":{abstract_first:`## 等式的性质

**性质 1**：等式两边同时加（或减）同一个数（或式子），结果仍相等。
若 $a = b$，则 $a pm c = b pm c$

**性质 2**：等式两边同时乘（或除以）同一个不为 0 的数，结果仍相等。
若 $a = b$，则 $ac = bc$，$\frac{a}{c} = \frac{b}{c}$（$c 
eq 0$）

**这两个性质是解方程的依据**。

**例题**：利用等式性质解 $x + 5 = 12$
解：$x + 5 - 5 = 12 - 5$（性质 1）
$x = 7$`,concrete_first:`## 从"天平"理解等式的性质

一个天平，左边放了一个未知重量的砝码 x 和一个 5kg 的砝码，右边放了 12kg 的砝码。天平平衡：

$x + 5 = 12$

问题：x 多重？

**操作 1**：两边各拿走 5kg → 天平仍然平衡 → $x = 7$

这就是**等式的性质**：在天平（等式）两边做**相同的操作**，天平（等式）仍然平衡。

你可以：
- 两边加同样的重量（同加）
- 两边减同样的重量（同减）
- 两边乘同样的倍数（同乘）
- 两边除以同样的数（同除，但不能除以 0）

> 解方程的全部操作，都来自于"天平不变"这个最直观的道理。`,error_discovery:`## 找出错误

下面是三位同学的解法，请找出错误：

(1) $x + 3 = 7$ → 两边加 3：$x + 6 = 10$ → $x = 4$  
(2) $2x = 10$ → 两边除以 0.5：$x = 5$  
(3) $x - 5 = 8$ → 两边加 5：$x = 13$

---

<details>
<summary>点击查看答案</summary>

(1) 做法正确但绕弯路了。$x + 3 = 7$ 应两边减 3：$x = 4$。虽然加 3 再解也对，但不直接。

(2) 解法错。$2x$ 除以 0.5 得到 $4x$，不是 $x$。应该两边除以 2：$x = 5$。凑巧答案对但过程错了。

(3) **正确**。$x - 5 = 8$ → 两边加 5 → $x = 13$。

> 等式性质的核心：两边做同样的操作。操作的对象必须是整个左边和整个右边。
</details>`},"7a-3-4":{abstract_first:`## 去括号解方程

**步骤**：
1. 去括号：用乘法分配律展开
2. 移项：把所有含 x 的项移到左边，常数项移到右边
3. 合并同类项
4. 系数化为 1

**例题**：
(1) $2(x + 3) = 14$
去括号：$2x + 6 = 14$
移项：$2x = 14 - 6 = 8$
系数化 1：$x = 4$

(2) $3(x - 1) = 2(x + 2)$
$3x - 3 = 2x + 4$
$3x - 2x = 4 + 3$
$x = 7$`,concrete_first:`## 从"分套餐"理解去括号解方程

两份一模一样的套餐，每份 = (汉堡 + 3元饮料) = 14 元。汉堡多少钱？

设汉堡 x 元 → 每份 = $x + 3$ 元 → 两份 = $2(x + 3) = 14$ 元。

解法：
1. 拆开：$2x + 6 = 14$（两份汉堡 + 两份饮料 = 14 元）
2. 去掉两份饮料：$2x = 14 - 6 = 8$（两份汉堡 = 8 元）
3. 每份汉堡：$x = 4$（汉堡 4 元）

> 有括号的方程就像"套餐"——先把套餐拆开，再一样一样地解开。`,error_discovery:`## 找出错误

下面是三位同学的解法，请找出错误：

(1) $3(x + 4) = 21$ → $3x + 4 = 21$ → $3x = 17$ → $x = \frac{17}{3}$  
(2) $2(x - 1) = x + 3$ → $2x - 1 = x + 3$ → $2x - x = 3 + 1$ → $x = 4$  
(3) $-(x + 5) = 3$ → $-x + 5 = 3$ → $-x = -2$ → $x = 2$

---

<details>
<summary>点击查看答案</summary>

全部有错。

(1) $3(x + 4) = 3x + 12$，不是 $3x + 4$。漏乘了 3×4=12。

(2) $2(x - 1) = 2x - 2$，不是 $2x - 1$。系数 2 要乘到每一项。

(3) $-(x + 5) = -x - 5$，不是 $-x + 5$。括号前的 - 号让每一项变号。

> 去括号解方程，最容易错在括号前有系数或负号时漏乘、漏变号。
</details>`},"7a-3-5":{abstract_first:`## 去分母解方程

**去分母**：当方程中含有分母时，方程两边同乘各分母的最小公倍数（LCM），去掉分母。

**步骤**：
1. 找到所有分母的最小公倍数（LCM）
2. 方程两边同时乘以 LCM
3. 去括号 → 移项 → 合并 → 系数化 1

**例题**：
$\frac{x}{2} + \frac{x}{3} = 5$

分母 LCM = 6，两边乘 6：
$6 	imes \frac{x}{2} + 6 	imes \frac{x}{3} = 6 	imes 5$
$3x + 2x = 30$
$5x = 30$ → $x = 6$

> 注意：整数项也要乘！$6 	imes 5 = 30$，不是 5。`,concrete_first:`## 从"统一单位"理解去分母

你的零花钱：一半存银行（$\frac{x}{2}$），三分之一买零食（$\frac{x}{3}$），剩下 5 元买文具。

总零花钱是多少？

方程：$\frac{x}{2} + \frac{x}{3} = 5$

这就像一个是 $\frac{1}{2}$ 元，一个是 $\frac{1}{3}$ 元——"单位不统一"。

**统一单位**：都变成 $\frac{1}{6}$（分母 2 和 3 的最小公倍数是 6）。

$\frac{x}{2} = \frac{3x}{6}$，$\frac{x}{3} = \frac{2x}{6}$

$\frac{3x}{6} + \frac{2x}{6} = 5$ → $\frac{5x}{6} = 5$ → $5x = 30$ → $x = 6$

> 去分母 = 把分数"统一单位"，消除分母让方程变整洁。关键是**每一项都要乘**。`,error_discovery:`## 找出错误

下面是三位同学的解法，请找出错误：

(1) $\frac{x}{2} + 3 = 5$，两边乘 2：$x + 3 = 10$ → $x = 7$  
(2) $\frac{x+1}{2} = \frac{x}{3}$，两边乘 6：$3x + 1 = 2x$ → $x = -1$  
(3) $\frac{x}{2} = \frac{x}{3} + 1$，两边乘 6：$3x = 2x + 1$ → $x = 1$

---

<details>
<summary>点击查看答案</summary>

全部有错。

(1) 整数 3 没有乘 2！正确：$x + 6 = 10$ → $x = 4$。

(2) $\frac{x+1}{2}$ 乘 6 得 $3(x+1) = 3x + 3$，不是 $3x + 1$。正确：$3x + 3 = 2x$ → $x = -3$。

(3) 整数 1 没有乘 6！正确：$3x = 2x + 6$ → $x = 6$。

> 去分母最大陷阱：**忘记给整数项也乘 LCM**。
</details>`},"7a-3-6":{abstract_first:`## 一元一次方程应用题解题步骤

**五步法**：
1. **设**：设未知数（直接设或间接设）
2. **找**：找等量关系
3. **列**：根据等量关系列方程
4. **解**：解方程
5. **答**：检验并写出答语

**常见类型**：
- 行程问题：路程 = 速度 × 时间
- 工程问题：工作总量 = 工作效率 × 时间
- 利润问题：利润 = 售价 - 进价
- 数字问题：利用数位关系

**例题**：甲、乙两人从相距 36 km 的两地相向而行，甲的速度是 4 km/h，乙的速度是 5 km/h。几小时后相遇？

设 x 小时后相遇：
$4x + 5x = 36$ → $9x = 36$ → $x = 4$

答：4 小时后相遇。`,concrete_first:`## 从"追公交车"理解方程应用题

你和小伙伴约在电影院，他骑自行车先走，时速 12 km/h。你 30 分钟后骑电动车出发，时速 20 km/h。你多久能追上他？

**思路**：
1. 设你出发 x 小时后追上他
2. 你的路程 = $20x$
3. 他的路程 = $12 	imes (x + 0.5)$（他比你多走了 30 分钟）
4. 追上的条件：两人路程相等！→ $20x = 12(x + 0.5)$

$20x = 12x + 6$ → $8x = 6$ → $x = 0.75$（小时）= 45 分钟

答：45 分钟后追上。

> 解应用题的关键不是列方程本身，而是**找到"什么等于什么"**——那个关键的等量关系。`,error_discovery:`## 找出错误

题目：小明买了 3 支笔和 2 个本子共花了 17 元。已知每支笔 x 元，每个本子比每支笔贵 1 元。求每支笔多少钱？

下面是三位同学的列式，请找出错误：

(1) $3x + 2(x + 1) = 17$  
(2) $3x + 2x + 1 = 17$  
(3) $3x + 2(x - 1) = 17$

---

<details>
<summary>点击查看答案</summary>

(1) **正确！** 笔 x 元，本子 (x+1) 元。3 支笔 + 2 个本子 = 17。

(2) 错。$2(x+1) = 2x + 2$，不是 $2x + 1$。漏乘了系数。

(3) 错。本子比笔贵 1 元，所以是本子 (x+1) 元，不是 (x-1)。关系反了。

> 应用题的致命错误：①等量关系找错 ②代数式化简出错。建议列完方程后代入检验。
</details>`},"7a-4-1":{abstract_first:`## 立体图形与平面图形

**立体图形**：各部分不都在同一平面内的图形（三维）。

常见立体图形：
- **柱体**：圆柱、棱柱（长方体、正方体、三棱柱等）
- **锥体**：圆锥、棱锥
- **球体**：球

**平面图形**：各部分都在同一平面内的图形（二维）。

常见平面图形：线段、角、三角形、长方形、圆等。

**三视图**：从正面、上面、左面三个方向看立体图形得到的平面图形。

**展开图**：将立体图形的表面展开得到的平面图形。`,concrete_first:`## 从"看箱子"理解立体与平面

你的手机包装盒放在桌上：

- 从正面看 → 一个长方形（正面视图）
- 从上面看 → 一个长方形（俯视图）
- 从左面看 → 一个长方形（左视图）

这三个长方形就是盒子的**三视图**。

把包装盒拆开摊平 → 变成了 6 个长方形连在一起的十字形——这是正方体的**展开图**。

生活中我们时刻在做"立体→平面"的转换：
- 地图就是地球的"俯视图"
- 建筑图纸就是房子的"三视图"

> 立体图形和平面图形的核心关系：**立体图形可以从不同方向"投影"为平面图形**。`,error_discovery:`## 找出错误

请判断以下说法是否正确：

(1) 球从任何方向看都是圆形。  
(2) 正方体有 8 个面。  
(3) 圆锥的展开图包含一个扇形和一个矩形。

---

<details>
<summary>点击查看答案</summary>

(1) **对**。球从任何角度看都是大小相同的圆。

(2) **错**。正方体有 6 个面（上、下、前、后、左、右），不是 8 个。8 是顶点数。

(3) **错**。圆锥的展开图 = 一个扇形（侧面）+ 一个圆（底面），不是矩形。圆柱的展开图才有矩形。

> 常见混淆：正方体→6 面 8 顶点 12 棱；圆锥→扇形+圆；圆柱→矩形+两个圆。
</details>`},"7a-4-2":{abstract_first:`## 点、线、面、体

**几何图形的构成要素**：
- **点**：没有大小，只有位置
- **线**：点动成线（直线、曲线）
- **面**：线动成面（平面、曲面）
- **体**：面动成体（立体图形）

**关系**：
- 点动成线（笔尖在纸上划过 → 线）
- 线动成面（一根筷子扫过 → 扇面）
- 面动成体（一张纸旋转 → 圆柱）

**线与线相交得点**，**面与面相交得线**。

**例题**：长方体有几个顶点？几条棱？几个面？
答：8 个顶点，12 条棱，6 个面。`,concrete_first:`## 从"动画"理解点线面体

想象一支笔：
- **笔尖**是一个**点**——位置精确，但没大小
- 笔尖在纸上划过→留下了**线**（点动成线）
- 一张白纸平放在桌上→是一个**面**（线密布而成）
- 一摞纸→有了厚度，变成了**体**（面堆叠而成）

换个方式：
- 下雨时，雨滴落在地面留下湿**点**
- 雨滴连成一条线→湿**线**
- 旋转一把直尺→扫出一个圆形**面**
- 旋转一个长方形纸板→变成一个圆柱**体**

> 点→线→面→体，维度从 0→1→2→3，层层递进。`,error_discovery:`## 找出错误

请判断以下说法是否正确：

(1) 长方体有 6 个顶点。  
(2) 两个平面相交得到一条直线。  
(3) 线与线相交得到一个面。

---

<details>
<summary>点击查看答案</summary>

(1) **错**。长方体有 8 个顶点。6 是面数，不是顶点数。

(2) **对**。两个平面（如墙和地面）相交于一条直线。

(3) **错**。线与线相交得到一个**点**（如十字路口两条路交叉于一个点）。面与面相交才得线。

> 口诀：线线得点，面面得线。记住维度：每相交一次降一维。
</details>`},"7a-4-3":{abstract_first:`## 直线、射线、线段

**直线**：
- 没有端点，向两方无限延伸
- 表示：直线 AB 或直线 l
- 公理：过两点有且只有一条直线

**射线**：
- 一个端点，向一方无限延伸
- 表示：射线 OA（O 为端点）

**线段**：
- 两个端点，有确定长度
- 表示：线段 AB 或线段 a
- 公理：两点之间线段最短

**例题**：
(1) 下图中有几条线段？
A---B---C
答：3 条（AB、BC、AC）`,concrete_first:`## 从"手电筒"理解直线射线线段

晚上打手电筒：
- 光从手电筒射出，一直往前照，无穷无尽 → **射线**（一个端点，向一方延伸）
- 如果两端都有人打手电筒对着照 → 光线贯通 → **直线**（没有端点，向两方延伸）
- 一根竹竿，两头被截断 → **线段**（两个端点，有限长度）

生活中的例子：
- 激光笔的光 → 射线
- 铁路轨道（理想状态）→ 直线
- 课桌的边 → 线段

> 区分口诀：直线无端点，射线一头尖，线段两头封。`,error_discovery:`## 找出错误

请判断以下说法是否正确：

(1) 射线 AB 和射线 BA 是同一条射线。  
(2) 在直线上取两点，它们之间的部分是线段。  
(3) 经过三点一定能画一条直线。

---

<details>
<summary>点击查看答案</summary>

(1) **错**。射线 AB 的端点是 A，向 B 方向延伸。射线 BA 的端点是 B，向 A 方向延伸。方向不同！

(2) **对**。直线上任意两点之间的部分就是线段。

(3) **错**。经过两点有且只有一条直线。三点不一定共线（可能构成三角形）。

> 射线命名注意：端点在前面。直线公理注意：**两点**确定一条直线，不是三点。
</details>`},"7a-4-4":{abstract_first:`## 角的概念

**角的定义**：
- **静态定义**：有公共端点的两条射线组成的图形
- **动态定义**：一条射线绕端点旋转形成的图形

**角的组成**：
- 顶点：公共端点 O
- 边：两条射线 OA 和 OB

**角的表示**：∠AOB 或 ∠O（顶点处只有一个角时）

**角的分类**：
- 锐角：0° < α < 90°
- 直角：α = 90°
- 钝角：90° < α < 180°
- 平角：α = 180°
- 周角：α = 360°

**例题**：∠AOB = 45°，∠BOC = 30°，求 ∠AOC。
若 OC 在 ∠AOB 内：∠AOC = 45° - 30° = 15°
若 OC 在 ∠AOB 外：∠AOC = 45° + 30° = 75°`,concrete_first:`## 从"时钟指针"理解角

看墙上的钟：

- 3 点整：时针和分针形成 **90° 角**（直角）
- 1 点整：时针和分针形成 **30° 角**（锐角）
- 4 点整：时针和分针形成 **120° 角**（钝角）
- 6 点整：时针和分针形成 **180° 角**（平角）

**角 = 两条射线"张开"的程度**。

就像打开一把扇子：
- 刚打开一点 → 锐角
- 打开一半 → 直角
- 打开超过一半 → 钝角
- 完全打开 → 平角

> 角的大小和边长无关，只看"张开"的大小。扇子柄再长也不影响张开角度。`,error_discovery:`## 找出错误

请判断以下说法是否正确：

(1) 大于 90° 的角是钝角。  
(2) 平角是一条直线。  
(3) 两个锐角相加一定是钝角。

---

<details>
<summary>点击查看答案</summary>

全部有错。

(1) 大于 90° 且**小于 180°** 才是钝角。180° 是平角，大于 180° 的角也有（如 200°）。

(2) 平角 = 两条方向相反的射线（180°），有顶点。直线没有顶点。两者不同！

(3) $30° + 40° = 70°$，仍然是锐角。两个锐角相加可能是锐角、直角或钝角，不一定。

> 角的分类看范围：锐角(0,90)，直角[90]，钝角(90,180)，平角[180]，周角[360]。
</details>`},"7a-4-5":{abstract_first:`## 角的度量与计算

**度量单位**：
- 度（°）、分（′）、秒（″）
- $1° = 60′$，$1′ = 60″$
- $1° = 3600″$

**角度换算**：
- 度化分：乘以 60
- 分化秒：乘以 60
- 分化度：除以 60
- 秒化度：除以 3600

**角度的加减**：
- 同单位对齐，分和秒满 60 进 1

**余角和补角**：
- 互余：两角之和 = 90°
- 互补：两角之和 = 180°

**例题**：
(1) $2.5° = 2°30′$
(2) $35°42′ + 24°36′ = 60°18′$
(3) 30° 角的余角 = 60°，补角 = 150°`,concrete_first:`## 从"时间计算"理解角度

角度的时间制：

1 小时 = 60 分钟，1 分钟 = 60 秒。

角度也一样：**1° = 60′，1′ = 60″**。

就像 1.5 小时 = 1 小时 30 分钟 → 1.5° = 1°30′

**角度加减法 = 时间加减法**：

$35°42′ + 24°36′$
$= 35° + 24° + 42′ + 36′$
$= 59° + 78′$
$= 59° + 1°18′$（因为 78′ = 1°18′）
$= 60°18′$

> 记住：角度的 60 进制和时间的 60 进制完全一样！`,error_discovery:`## 找出错误

下面是三位同学的计算，请找出错误：

(1) $1.2° = 1°2′$  
(2) $30°45′ + 45°30′ = 75°75′ = 75°15′$  
(3) 50° 角的余角 = 40°，补角 = 130°

---

<details>
<summary>点击查看答案</summary>

(1) 错。$0.2° 	imes 60 = 12′$，所以 $1.2° = 1°12′$，不是 $1°2′$。

(2) $75°75′ = 75° + 60′ + 15′ = 76°15′$，不是 $75°15′$。75′ = 1°15′，要进位！

(3) **正确！** 余角 = $90° - 50° = 40°$，补角 = $180° - 50° = 130°$。

> 角度计算最容易错：①小数化分要乘 60 ②满 60 必须进位（和时钟一样）。
</details>`}};function Gn(e,t){let n=Uc.filter(r=>r.knowledgePointId===e);return n=n.filter(r=>r.type===t),n}function jr(e){return Uc.find(t=>t.id===e)}const ym=ts((e,t)=>({currentKp:null,currentQuestions:[],currentIndex:0,phase:"idle",showReasoningPrompt:!1,reasoningText:"",ambushQuestionId:null,ambushKpId:null,startDiagnostic:(n,r,i)=>{const o=zt.find(l=>l.id===n);if(!o)return;const a=Gn(n,"diagnostic").slice(0,3);let s=a;r&&i&&(s=[a[0],r,a[1],a[2]]),e({currentKp:o,currentQuestions:s.map(l=>({questionId:l.id,studentAnswer:"",isCorrect:!1,timeSpent:0,correctAnswer:l.answer})),currentIndex:0,phase:s.length>0?"answering":"idle",showReasoningPrompt:!1,reasoningText:"",ambushQuestionId:(r==null?void 0:r.id)??null,ambushKpId:i??null})},submitAnswer:n=>{const r=t();if(r.phase!=="answering")return;const i=[...r.currentQuestions];i[r.currentIndex]={...i[r.currentIndex],studentAnswer:n,isCorrect:!1},e({currentQuestions:i,phase:"reasoning",reasoningText:""})},submitReasoning:n=>{const r=t();if(r.phase!=="reasoning")return;const i=[...r.currentQuestions],o={...i[r.currentIndex]};o.reasoningText=n;const a=o.correctAnswer??(()=>{var v;const u=r.ambushQuestionId&&o.questionId===r.ambushQuestionId?r.ambushKpId:r.currentKp.id;return(v=Gn(u,"diagnostic").find(g=>g.id===o.questionId))==null?void 0:v.answer})();o.isCorrect=o.studentAnswer.trim()===(a==null?void 0:a.trim()),i[r.currentIndex]=o;const s=r.currentIndex+1;s>=i.length?e({currentQuestions:i,phase:"completed"}):e({currentQuestions:i,currentIndex:s,phase:"answering",reasoningText:""})},skipReasoning:()=>{const n=t();if(n.phase!=="reasoning")return;const r=[...n.currentQuestions],i={...r[n.currentIndex]},o=i.correctAnswer??(()=>{var u;const l=n.ambushQuestionId&&i.questionId===n.ambushQuestionId?n.ambushKpId:n.currentKp.id;return(u=Gn(l,"diagnostic").find(v=>v.id===i.questionId))==null?void 0:u.answer})();i.isCorrect=i.studentAnswer.trim()===(o==null?void 0:o.trim()),r[n.currentIndex]=i;const a=n.currentIndex+1;a>=r.length?e({currentQuestions:r,phase:"completed"}):e({currentQuestions:r,currentIndex:a,phase:"answering",reasoningText:""})},completeDiagnostic:()=>{const n=t();if(n.phase!=="completed"||!n.currentKp)return null;const r=n.ambushQuestionId?n.currentQuestions.filter(g=>g.questionId!==n.ambushQuestionId):n.currentQuestions,i=n.ambushQuestionId?n.currentQuestions.find(g=>g.questionId===n.ambushQuestionId):null,o=r.every(g=>g.isCorrect),a=r.every(g=>!g.isCorrect),s=r.every(g=>g.reasoningText&&g.reasoningText.trim().length>0);let l;a?l="not_mastered":o&&s?l="mastered":o&&!s?l="unverified":l="partial";const v={record:{id:crypto.randomUUID(),studentId:"demo-001",knowledgePointId:n.currentKp.id,date:new Date().toISOString(),questions:r,result:l}};return i&&n.ambushKpId&&(v.ambush={kpId:n.ambushKpId,passed:i.isCorrect}),v},reset:()=>e({currentKp:null,currentQuestions:[],currentIndex:0,phase:"idle",showReasoningPrompt:!1,reasoningText:"",ambushQuestionId:null,ambushKpId:null})})),$m=.3,xm=7;function hm(e,t){const n=Date.now(),r=xm*24*60*60*1e3,i=e.filter(l=>{if(l.status!=="mastered"||l.knowledgePointId===t)return!1;if(l.lastReviewDate){const v=new Date(l.lastReviewDate).getTime();if(n-v<r)return!1}return Gn(l.knowledgePointId,"diagnostic").length>0});if(i.length===0)return{triggered:!1,ambushQuestion:null,ambushKpId:null};if(Math.random()>$m)return{triggered:!1,ambushQuestion:null,ambushKpId:null};const o=i[Math.floor(Math.random()*i.length)],a=Gn(o.knowledgePointId,"diagnostic");return{triggered:!0,ambushQuestion:a[Math.floor(Math.random()*a.length)],ambushKpId:o.knowledgePointId}}function wm({kp:e,onComplete:t,onBack:n}){var _,k,E,N,G;const r=ym(),i=He(C=>C.records),o=He(C=>C.updateFromDiagnostic),a=He(C=>C.downgradeToNeedsReview),s=He(C=>C.recordReviewSuccess),[l,u]=J.useState(""),[v,g]=J.useState(""),[p,y]=J.useState(null),h=J.useMemo(()=>hm(i,e.id),[e.id]);if(r.phase==="idle"||((_=r.currentKp)==null?void 0:_.id)!==e.id)return r.startDiagnostic(e.id,h.triggered?h.ambushQuestion:void 0,h.triggered?h.ambushKpId:void 0),d.jsx("div",{className:"card",children:d.jsx("p",{children:"加载中..."})});const w=(k=r.currentQuestions[r.currentIndex])==null?void 0:k.questionId,A=w?jr(w):void 0,f=()=>{l&&r.submitAnswer(l)},c=()=>{v.trim()?r.submitReasoning(v):r.skipReasoning(),u(""),g("")},m=()=>{r.skipReasoning(),u(""),g("")};if(p||r.phase==="completed"){const C=p||r.completeDiagnostic();if(!C)return null;p||(o(C.record),C.ambush&&(C.ambush.passed?s(C.ambush.kpId):a(C.ambush.kpId)),y(C));const D=C.record,je=D.questions.filter(S=>S.isCorrect).length,Le=D.questions.filter(S=>{var j;return(j=S.reasoningText)==null?void 0:j.trim()}).length,ur=D.questions.length,cr=r.ambushQuestionId,wt=r.ambushKpId,ye=cr?r.currentQuestions.find(S=>S.questionId===cr):null;return d.jsxs("div",{children:[d.jsx("button",{className:"btn-back",onClick:n,children:"← 返回知识地图"}),d.jsxs("div",{className:"card",children:[d.jsxs("h2",{children:["诊断结果：",e.name]}),d.jsxs("div",{className:`result-badge result-${D.result}`,children:[D.result==="mastered"&&"已掌握",D.result==="partial"&&"部分掌握",D.result==="unverified"&&"未验证",D.result==="not_mastered"&&"未掌握"]}),d.jsxs("p",{className:"result-exp",children:["答对 ",je,"/",ur," 题，其中 ",Le," 题提供了思路说明。"]}),ye&&wt&&d.jsxs("div",{style:{padding:"12px 16px",marginBottom:12,borderRadius:8,background:ye.isCorrect?"#eff6ff":"#fef3c7",border:`1px solid ${ye.isCorrect?"#bfdbfe":"#fde68a"}`},children:[d.jsxs("p",{style:{fontSize:13,fontWeight:600,marginBottom:4},children:["⚡ 回顾偷袭",ye.isCorrect?" ✓ 通过":" ✗ 失败",d.jsxs("span",{style:{fontSize:11,color:"var(--text-secondary)",fontWeight:400},children:[" ","— 来自知识点「",((E=cm(wt))==null?void 0:E.name)||wt,"」"]})]}),d.jsx("p",{style:{fontSize:13,color:"var(--text-secondary)",marginBottom:4},children:(N=jr(ye.questionId))==null?void 0:N.stem}),d.jsxs("p",{style:{fontSize:12,color:"var(--text-secondary)"},children:["你的答案：",ye.studentAnswer||"未作答",!ye.isCorrect&&d.jsxs(d.Fragment,{children:[" | 正确答案：",(G=jr(ye.questionId))==null?void 0:G.answer]})]}),!ye.isCorrect&&d.jsx("p",{style:{fontSize:12,color:"#d97706",marginTop:4},children:"偷袭失败！该知识点已从「已掌握」降级为「需复习」。"})]}),D.questions.map((S,j)=>{const O=jr(S.questionId);return d.jsxs("div",{style:{padding:"12px 16px",marginBottom:8,borderRadius:8,background:S.isCorrect?"#f0fdf4":"#fef2f2",border:`1px solid ${S.isCorrect?"#bbf7d0":"#fecaca"}`},children:[d.jsxs("p",{style:{fontSize:13,fontWeight:600,marginBottom:4},children:["第 ",j+1," 题 ",S.isCorrect?"✓ 正确":"✗ 错误"]}),d.jsx("p",{style:{fontSize:13,color:"var(--text-secondary)",marginBottom:4},children:O==null?void 0:O.stem}),d.jsxs("p",{style:{fontSize:12,color:"var(--text-secondary)"},children:["你的答案：",S.studentAnswer||"未作答",!S.isCorrect&&d.jsxs(d.Fragment,{children:[" | 正确答案：",O==null?void 0:O.answer]})]}),S.reasoningText&&d.jsxs("p",{style:{fontSize:12,color:"var(--primary)",marginTop:4,fontStyle:"italic"},children:["「",S.reasoningText,"」"]}),!S.reasoningText&&d.jsx("p",{style:{fontSize:11,color:"var(--warning)",marginTop:4},children:"未提供思路说明 —— 即使答对也不足以确认真正理解"})]},j)}),D.result==="mastered"&&d.jsxs("div",{style:{marginTop:16},children:[d.jsx("p",{className:"feedback-correct",children:"诊断通过！你已经理解了这个知识点。可以进入教学模块进行换皮验证。"}),d.jsxs("div",{className:"result-actions",children:[d.jsx("button",{className:"btn btn-accent",onClick:()=>t("teaching"),children:"进入教学验证"}),d.jsx("button",{className:"btn",onClick:n,children:"返回知识地图"})]})]}),D.result==="unverified"&&d.jsxs("div",{style:{marginTop:16},children:[d.jsx("p",{className:"feedback-wrong",children:"你答对了所有题，但没有提供思路说明。无法确认是真正理解还是靠猜测或套路答题。"}),d.jsx("p",{style:{fontSize:13,color:"var(--text-secondary)",marginBottom:16},children:"建议重新诊断并提供思路，或进入教学模块做换皮验证。"}),d.jsxs("div",{className:"result-actions",children:[d.jsx("button",{className:"btn btn-accent",onClick:()=>{r.startDiagnostic(e.id),y(null)},children:"重新诊断"}),d.jsx("button",{className:"btn",onClick:n,children:"返回知识地图"})]})]}),(D.result==="partial"||D.result==="not_mastered")&&d.jsxs("div",{style:{marginTop:16},children:[d.jsx("p",{className:"feedback-wrong",children:D.result==="not_mastered"?"这个知识点你尚未掌握。别担心，这正是系统存在的意义——发现漏洞并补上。":"部分题目需要加强。来看看不同的讲解方式吧。"}),d.jsxs("div",{className:"result-actions",children:[d.jsx("button",{className:"btn btn-accent",onClick:()=>t("teaching"),children:"开始补强教学"}),d.jsx("button",{className:"btn",onClick:n,children:"返回知识地图"})]})]})]})]})}const $=r.ambushQuestionId&&w===r.ambushQuestionId;return d.jsxs("div",{children:[d.jsx("button",{className:"btn-back",onClick:n,children:"← 返回知识地图"}),d.jsxs("div",{className:"card",children:[d.jsxs("h2",{children:["知识点：",e.name]}),d.jsx("div",{className:"diag-progress",children:Array.from({length:r.currentQuestions.length}).map((C,D)=>{var Le;let je="";return D<r.currentIndex?je=(Le=r.currentQuestions[D])!=null&&Le.isCorrect?"passed":"failed":D===r.currentIndex&&(je="active"),d.jsx("div",{className:`diag-dot ${je}`},D)})}),d.jsxs("p",{style:{fontSize:12,color:"var(--text-secondary)",marginBottom:16},children:["诊断题 ",r.currentIndex+1," / ",r.currentQuestions.length,$&&d.jsx("span",{style:{color:"#d97706",fontWeight:600},children:"（回顾偷袭）"})]}),r.phase==="answering"&&A&&d.jsxs(d.Fragment,{children:[d.jsx("p",{className:"question-stem",children:A.stem}),A.options&&d.jsx("div",{className:"options-grid",children:A.options.map(C=>d.jsx("button",{className:`option-btn ${l===C?"selected":""}`,onClick:()=>u(C),children:C},C))}),!A.options&&d.jsx("input",{type:"text",value:l,onChange:C=>u(C.target.value),placeholder:"输入你的答案",style:{width:"100%",padding:"12px",border:"2px solid var(--border)",borderRadius:"8px",fontSize:"15px",marginBottom:16,outline:"none"},onKeyDown:C=>{C.key==="Enter"&&f()}}),d.jsx("button",{className:"btn btn-accent",onClick:f,disabled:!l,children:"提交答案"})]}),r.phase==="reasoning"&&A&&d.jsxs(d.Fragment,{children:[d.jsx("p",{className:"question-stem",children:A.stem}),d.jsxs("p",{style:{fontSize:13,color:"var(--primary)",marginBottom:12,fontWeight:500},children:["你的答案：",l]}),d.jsxs("p",{className:"reasoning-hint",children:["你是怎么想的？简单写一下你的解题思路 —— 不需要很正式，用你自己的话说就行。",d.jsx("br",{}),d.jsx("span",{style:{fontSize:11,color:"var(--warning)"},children:'（跳过追问将导致诊断结果标记为"未验证"——即使答对了也不能确认真正理解）'})]}),d.jsx("textarea",{className:"reasoning-box",value:v,onChange:C=>g(C.target.value),placeholder:"例如：我先把-5移到右边变成+5，然后...",autoFocus:!0}),d.jsxs("div",{className:"reasoning-actions",children:[d.jsx("button",{className:"btn btn-accent",onClick:c,children:"提交思路"}),d.jsx("button",{className:"btn",onClick:m,children:"跳过（不推荐）"})]})]})]})]})}class Sm{constructor(t){ns(this,"state");this.state=t|0}next(){let t=this.state+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}int(t,n){return Math.floor(this.next()*(n-t+1))+t}pick(t){return t[this.int(0,t.length-1)]}shuffle(t){for(let n=t.length-1;n>0;n--){const r=this.int(0,n);[t[n],t[r]]=[t[r],t[n]]}return t}}function P(e,t=4){const n=new Set,r=[];for(const i of e)n.has(i)||(n.add(i),r.push(i));for(;r.length<t;)r.push("无法确定");return r.slice(0,t)}function km(e,t){const n=Date.now().toString(36),r=t.int(1e3,9999);return`gen-${e}-${n}-${r}`}const Pm=[{knowledgePointId:"7a-1-1",variantGroup:"pn-v1",difficulty:1,type:"diagnostic",generateParams:e=>{const t=-e.int(1,15),n=e.int(1,20),r=e.int(1,20);return{neg:t,pos:n,pos2:r}},generateStem:e=>"下列各数中，是负数的是？",generateOptions:(e,t)=>{const n=String(e.neg),r=["0",`+${e.pos}`,n,String(e.pos2)];return P(r)},computeAnswer:e=>String(e.neg),generateSolution:e=>`${e.neg} 是负数（小于 0）。0 既不是正数也不是负数，+${e.pos} 和 ${e.pos2} 是正数。`},{knowledgePointId:"7a-1-1",variantGroup:"pn-v2",difficulty:1,type:"diagnostic",generateParams:e=>{const t=[{pos:"收入",neg:"支出",unit:"元"},{pos:"向北走",neg:"向南走",unit:"米"},{pos:"上升",neg:"下降",unit:"米"},{pos:"盈利",neg:"亏损",unit:"万元"}],n=e.pick(t),r=e.int(30,200),i=e.int(20,150);return{posVal:r,negVal:i,...n,__tag:0}},generateStem:e=>{const t=String(e.pos||"收入"),n=String(e.neg||"支出"),r=String(e.unit||"元");return`如果${t} ${e.posVal} ${r}记作 +${e.posVal} ${r}，那么${n} ${e.negVal} ${r}记作什么？`},generateOptions:(e,t)=>[`+${e.negVal}`,`-${e.negVal}`,String(e.negVal),`-${e.posVal}`],computeAnswer:e=>`-${e.negVal}`,generateSolution:e=>{const t=String(e.neg||"支出");return`具有相反意义的量：${String(e.pos||"收入")}为正则${t}为负，所以${t} ${e.negVal} ${String(e.unit||"元")}记作 -${e.negVal} ${String(e.unit||"元")}。`}},{knowledgePointId:"7a-1-1",variantGroup:"pn-v3",difficulty:2,type:"diagnostic",generateParams:e=>({__tag:e.int(0,2)}),generateStem:()=>"下列说法正确的是？",generateOptions:(e,t)=>["0 是正数","负数都小于 0","正数前面加负号还是正数","所有带负号的数都是负数"],computeAnswer:()=>"负数都小于 0",generateSolution:()=>"负数都小于 0 是负数的定义。A 错：0 既不是正数也不是负数。C 错：正数加负号变负数。D 错：-(-5)=5 带负号但是正数。"}],_m=[{knowledgePointId:"7a-1-2",variantGroup:"nl-v1",difficulty:1,type:"diagnostic",generateParams:()=>({}),generateStem:()=>"数轴的三要素不包括以下哪项？",generateOptions:()=>["原点","正方向","单位长度","对称轴"],computeAnswer:()=>"对称轴",generateSolution:()=>"数轴三要素：原点、正方向、单位长度。对称轴不是数轴的要素。"},{knowledgePointId:"7a-1-2",variantGroup:"nl-v2",difficulty:1,type:"diagnostic",generateParams:()=>({}),generateStem:()=>"在数轴上，原点右边的点表示什么数？",generateOptions:()=>["负数","正数","0","无法确定"],computeAnswer:()=>"正数",generateSolution:()=>"规定向右为正方向，所以原点右边的点表示正数。原点左边的点表示负数。"},{knowledgePointId:"7a-1-2",variantGroup:"nl-v3",difficulty:2,type:"diagnostic",generateParams:e=>{const t=-e.int(2,9),n=e.int(1,8);return{a:t,b:n}},generateStem:e=>`在数轴上，点 A 表示 ${e.a}，点 B 表示 ${e.b}，则 A 和 B 之间的距离是多少？`,generateOptions:(e,t)=>{const n=Number(t);return P([String(n),String(-n),String(n-1),String(n+1)])},computeAnswer:e=>String(Math.abs(e.b-e.a)),generateSolution:e=>{const t=Math.abs(e.b-e.a);return`数轴上两点距离 = |${e.b} - (${e.a})| = |${e.b} + ${-e.a}| = ${t}。距离是非负数。`}}],Im=[{knowledgePointId:"7a-1-3",variantGroup:"opp-v1",difficulty:1,type:"diagnostic",generateParams:e=>({a:e.int(2,20)}),generateStem:e=>`${e.a} 的相反数是多少？`,generateOptions:(e,t)=>P([t,String(e.a),"0",`1/${e.a}`]),computeAnswer:e=>String(-e.a),generateSolution:e=>`${e.a} 的相反数是 ${-e.a}。只有符号不同的两个数互为相反数。`},{knowledgePointId:"7a-1-3",variantGroup:"opp-v2",difficulty:1,type:"diagnostic",generateParams:e=>({a:e.int(2,15)}),generateStem:e=>`-(-${e.a}) 化简后等于多少？`,generateOptions:(e,t)=>P([t,`-${e.a}`,"0",`±${e.a}`]),computeAnswer:e=>String(e.a),generateSolution:e=>`-(-${e.a}) 表示 -${e.a} 的相反数，即 ${e.a}。`},{knowledgePointId:"7a-1-3",variantGroup:"opp-v3",difficulty:2,type:"diagnostic",generateParams:e=>({a:-e.int(3,15)}),generateStem:e=>`若 a 和 b 互为相反数，且 a = ${e.a}，则 b 等于多少？`,generateOptions:(e,t)=>P([t,String(e.a),"0",String(-e.a*2)]),computeAnswer:e=>String(-e.a),generateSolution:e=>`a = ${e.a}，相反数 b = -(${e.a}) = ${-e.a}。互为相反数的两个数之和为 0：${e.a} + ${-e.a} = 0。`}],Cm=[{knowledgePointId:"7a-1-4",variantGroup:"abs-v1",difficulty:1,type:"diagnostic",generateParams:e=>({a:-e.int(2,20)}),generateStem:e=>`| ${e.a} | 等于多少？`,generateOptions:(e,t)=>P([String(e.a),"0",t,`±${-e.a}`]),computeAnswer:e=>String(-e.a),generateSolution:e=>`一个负数的绝对值是它的相反数，所以 | ${e.a} | = ${-e.a}。`},{knowledgePointId:"7a-1-4",variantGroup:"abs-v2",difficulty:2,type:"diagnostic",generateParams:e=>({a:e.int(2,10)}),generateStem:e=>`若 | x | = ${e.a}，则 x 等于多少？`,generateOptions:(e,t)=>{const n=e.a;return P([String(n),String(-n),`${n} 或 ${-n}`,"0"])},computeAnswer:e=>`${e.a} 或 ${-e.a}`,generateSolution:e=>`绝对值等于 ${e.a} 的数有两个：${e.a} 和 ${-e.a}，因为 |${e.a}| = ${e.a}，|${-e.a}| = ${e.a}。`},{knowledgePointId:"7a-1-4",variantGroup:"abs-v3",difficulty:2,type:"diagnostic",generateParams:e=>{const t=-e.int(3,15),n=e.int(1,Math.abs(t)-1);return{a:t,b:n}},generateStem:e=>`比较 | ${e.a} | 和 | ${e.b} | 的大小。`,generateOptions:(e,t)=>{const n=-e.a,r=e.b,i=n>r?`| ${e.a} | > | ${e.b} |`:n<r?`| ${e.a} | < | ${e.b} |`:`| ${e.a} | = | ${e.b} |`;return P([i,`| ${e.a} | < | ${e.b} |`,`| ${e.a} | = | ${e.b} |`,"无法比较"])},computeAnswer:e=>{const t=-e.a,n=e.b;return t>n?`| ${e.a} | > | ${e.b} |`:t<n?`| ${e.a} | < | ${e.b} |`:`| ${e.a} | = | ${e.b} |`},generateSolution:e=>{const t=-e.a,n=e.b,r=t>n?">":t<n?"<":"=";return`| ${e.a} | = ${t}，| ${e.b} | = ${n}，${t} ${r} ${n}，所以 | ${e.a} | ${r} | ${e.b} |。`}}],Em=[{knowledgePointId:"7a-1-5",variantGroup:"add-v1",difficulty:1,type:"diagnostic",generateParams:e=>{const t=-e.int(2,12),n=-e.int(1,10);return{a:t,b:n}},generateStem:e=>`(${e.a}) + (${e.b}) 等于多少？`,generateOptions:(e,t)=>{const n=String(-e.a-e.b),r=String(-e.a+e.b);return P([t,n,r,String(e.a-e.b)])},computeAnswer:e=>String(e.a+e.b),generateSolution:e=>{const t=e.a+e.b;return`同号两数相加，取相同的符号，并把绝对值相加：${-e.a}+${-e.b}=${-t}，结果为 ${t}。`}},{knowledgePointId:"7a-1-5",variantGroup:"add-v2",difficulty:1,type:"diagnostic",generateParams:e=>{const t=e.int(2,8),n=e.int(t+1,t+8);return{a:-t,b:n}},generateStem:e=>`(${e.a}) + ${e.b} 等于多少？`,generateOptions:(e,t)=>{const n=String(-e.b-e.a),r=String(e.a-e.b);return P([t,n,r,String(e.a+e.a)])},computeAnswer:e=>String(e.a+e.b),generateSolution:e=>{const t=e.a+e.b;return`异号两数相加，取绝对值较大的符号，并用较大的绝对值减去较小的：${e.b}-${-e.a}=${t}，${e.b} 的绝对值更大且为正，结果为 +${t}。`}},{knowledgePointId:"7a-1-5",variantGroup:"add-v3",difficulty:2,type:"diagnostic",generateParams:e=>{const t=-e.int(1,6),n=e.int(3,9),r=-e.int(1,5);return{a:t,b:n,c:r}},generateStem:e=>`(${e.a}) + ${e.b} + (${e.c}) 等于多少？`,generateOptions:(e,t)=>{const n=String(e.a+e.b-e.c),r=String(-e.a-e.b+e.c);return P([t,n,r,String(e.a-e.b-e.c)])},computeAnswer:e=>String(e.a+e.b+e.c),generateSolution:e=>{const t=e.a+e.b,n=t+e.c;return`(${e.a}) + ${e.b} = ${t}，${t} + (${e.c}) = ${n}。`}}],Nm=[{knowledgePointId:"7a-1-6",variantGroup:"sub-v1",difficulty:1,type:"diagnostic",generateParams:e=>{const t=e.int(3,9),n=e.int(t+1,t+10);return{a:t,b:n}},generateStem:e=>`${e.a} - ${e.b} 等于多少？`,generateOptions:(e,t)=>{const n=String(e.b-e.a),r=String(e.a+e.b);return P([t,n,r,String(-e.a-e.b)])},computeAnswer:e=>String(e.a-e.b),generateSolution:e=>{const t=e.a-e.b;return`${e.a} - ${e.b} = ${e.a} + (${-e.b}) = ${t}。减去一个数等于加上它的相反数。`}},{knowledgePointId:"7a-1-6",variantGroup:"sub-v2",difficulty:1,type:"diagnostic",generateParams:e=>{const t=-e.int(2,10),n=-e.int(1,8);return{a:t,b:n}},generateStem:e=>`(${e.a}) - (${e.b}) 等于多少？`,generateOptions:(e,t)=>{const n=String(e.a+e.b),r=String(e.a-e.b);return P([t,n,r,String(-e.a-e.b)])},computeAnswer:e=>String(e.a-e.b),generateSolution:e=>{const t=e.a-e.b;return`(${e.a}) - (${e.b}) = (${e.a}) + ${-e.b} = ${t}。减去 ${e.b} 等于加上 +${-e.b}。`}},{knowledgePointId:"7a-1-6",variantGroup:"sub-v3",difficulty:2,type:"diagnostic",generateParams:e=>{const t=-e.int(1,6),n=e.int(2,7),r=-e.int(2,7);return{a:t,b:n,c:r}},generateStem:e=>`计算：(${e.a}) - ${e.b} - (${e.c}) 等于多少？`,generateOptions:(e,t)=>{const n=e.a-e.b-e.c,r=String(n+2),i=String(n-2);return P([t,r,i,String(-n)])},computeAnswer:e=>String(e.a-e.b-e.c),generateSolution:e=>{const n=e.a-e.b-e.c;return`(${e.a}) - ${e.b} - (${e.c}) = (${e.a}) + (${-e.b}) + ${-e.c} = ${e.a-e.b} + ${-e.c} = ${n}。全部转化为加法。`}}],jm=[{knowledgePointId:"7a-1-7",variantGroup:"mul-v1",difficulty:1,type:"diagnostic",generateParams:e=>{const t=-e.int(2,9),n=e.int(2,8);return{a:t,b:n}},generateStem:e=>`(${e.a}) × ${e.b} 等于多少？`,generateOptions:(e,t)=>{const n=-e.a*e.b;return P([t,String(n),String(e.a+e.b),String(e.a-e.b)])},computeAnswer:e=>String(e.a*e.b),generateSolution:e=>`异号相乘得负：(${e.a}) × ${e.b} = -(${-e.a} × ${e.b}) = ${e.a*e.b}。`},{knowledgePointId:"7a-1-7",variantGroup:"mul-v2",difficulty:1,type:"diagnostic",generateParams:e=>{const t=-e.int(2,9),n=-e.int(2,8);return{a:t,b:n}},generateStem:e=>`(${e.a}) × (${e.b}) 等于多少？`,generateOptions:(e,t)=>{const n=-e.a*-e.b;return P([t,String(-n),String(e.a+e.b),String(e.a-e.b)])},computeAnswer:e=>String(e.a*e.b),generateSolution:e=>`同号相乘得正：(${e.a}) × (${e.b}) = ${-e.a} × ${-e.b} = ${e.a*e.b}。`},{knowledgePointId:"7a-1-7",variantGroup:"mul-v3",difficulty:2,type:"diagnostic",generateParams:e=>{const t=-e.int(1,5),n=e.int(2,6),r=-e.int(2,6);return{a:t,b:n,c:r}},generateStem:e=>`(${e.a}) × ${e.b} × (${e.c}) 等于多少？`,generateOptions:(e,t)=>{const n=Math.abs(e.a*e.b*e.c);return P([t,String(-n),String(e.a*e.b+e.c),String(e.a+e.b+e.c)])},computeAnswer:e=>String(e.a*e.b*e.c),generateSolution:e=>{const t=e.a*e.b,n=t*e.c;return`两个负数因子使结果为正：(${e.a}) × ${e.b} = ${t}，${t} × (${e.c}) = ${n}。`}}],Om=[{knowledgePointId:"7a-1-8",variantGroup:"div-v1",difficulty:1,type:"diagnostic",generateParams:e=>{const t=e.int(2,6);return{a:-(t*e.int(2,5)),b:t}},generateStem:e=>`(${e.a}) ÷ ${e.b} 等于多少？`,generateOptions:(e,t)=>{const n=String(e.a*e.b),r=String(-e.a/e.b);return P([t,n,r,String(e.a+e.b)])},computeAnswer:e=>String(e.a/e.b),generateSolution:e=>`异号相除得负：(${e.a}) ÷ ${e.b} = ${e.a/e.b}。`},{knowledgePointId:"7a-1-8",variantGroup:"div-v2",difficulty:1,type:"diagnostic",generateParams:e=>{const t=-e.int(2,6);return{a:t*e.int(2,5),b:t}},generateStem:e=>`(${e.a}) ÷ (${e.b}) 等于多少？`,generateOptions:(e,t)=>P([t,String(-e.a/e.b),String(e.a+e.b),String(e.a*e.b)]),computeAnswer:e=>String(e.a/e.b),generateSolution:e=>`同号相除得正：(${e.a}) ÷ (${e.b}) = ${e.a/e.b}。`},{knowledgePointId:"7a-1-8",variantGroup:"div-v3",difficulty:2,type:"diagnostic",generateParams:e=>{const t=-e.int(2,5),n=-e.int(2,4);return{a:t*n*e.int(1,3),b:t,c:n}},generateStem:e=>`(${e.a}) ÷ (${e.b}) ÷ (${e.c}) 的结果是多少？`,generateOptions:(e,t)=>{const n=String(-Number(t)),r=String(Number(t)+1);return P([t,n,r,String(Number(t)-1)])},computeAnswer:e=>{const t=e.a/e.b;return String(t/e.c)},generateSolution:e=>{const t=e.a/e.b,n=t/e.c;return`(${e.a}) ÷ (${e.b}) = ${t}（同号得正），${t} ÷ (${e.c}) = ${n}（异号得负）。`}}],zm=[{knowledgePointId:"7a-1-9",variantGroup:"pow-v1",difficulty:1,type:"diagnostic",generateParams:e=>{const t=-e.int(2,4),n=e.pick([3,5]);return{a:t,n}},generateStem:e=>`(${e.a})^${e.n} 等于多少？`,generateOptions:(e,t)=>{const n=Math.pow(-e.a,e.n);return P([t,String(n),String(-n),String(e.a*e.n)])},computeAnswer:e=>{const t=Math.pow(e.a,e.n);return String(t)},generateSolution:e=>{const t=Array(e.n).fill(`(${e.a})`).join("×"),n=Math.pow(e.a,e.n);return`(${e.a})^${e.n} = ${t} = ${n}。奇次幂为负。`}},{knowledgePointId:"7a-1-9",variantGroup:"pow-v2",difficulty:1,type:"diagnostic",generateParams:e=>{const t=-e.int(2,5),n=e.pick([2,4]);return{a:t,n}},generateStem:e=>`(${e.a})^${e.n} 等于多少？`,generateOptions:(e,t)=>{const n=String(-Number(t)),r=String(e.a*e.n);return P([t,n,r,String(e.a+e.n)])},computeAnswer:e=>String(Math.pow(e.a,e.n)),generateSolution:e=>{const t=Math.pow(e.a,e.n);return`(${e.a})^${e.n} = ${t}。偶次幂为正。注意 (${e.a})^${e.n} ≠ ${e.a}^${e.n}。`}},{knowledgePointId:"7a-1-9",variantGroup:"pow-v3",difficulty:2,type:"diagnostic",generateParams:e=>({a:e.int(2,6)}),generateStem:e=>`-${e.a}² 等于多少？`,generateOptions:(e,t)=>{const n=String(e.a*e.a),r=String(-e.a*2);return P([t,n,r,String(e.a*2)])},computeAnswer:e=>String(-(e.a*e.a)),generateSolution:e=>`-${e.a}² = -(${e.a}²) = -${e.a*e.a}。负号不在括号内，先算 ${e.a}² 再取相反数。与 (-${e.a})²=${e.a*e.a} 不同！`}],Am=[{knowledgePointId:"7a-1-10",variantGroup:"sci-v1",difficulty:1,type:"diagnostic",generateParams:e=>{const t=e.int(5,9),n=e.int(1,9),r=e.int(10,99);return{value:n*Math.pow(10,t-1)+r*Math.pow(10,t-3),digits:t,a:n+r/100,n:t-1}},generateStem:e=>`${e.value} 用科学记数法表示为？`,generateOptions:(e,t)=>{const n=e.a,r=e.n,i=`${n}×10^${r}`,o=`${(n*10).toFixed(2)}×10^${r-1}`,a=`${n}×10^${r-1}`,s=`${(n/10).toFixed(3)}×10^${r+1}`;return[i,o,a,s]},computeAnswer:e=>`${e.a}×10^${e.n}`,generateSolution:e=>`${e.value} 有 ${e.digits} 位数，n = ${e.digits}-1 = ${e.n}，a 在 1~10 之间：${e.a}×10^${e.n}。`},{knowledgePointId:"7a-1-10",variantGroup:"sci-v2",difficulty:1,type:"diagnostic",generateParams:e=>{const t=e.int(10,99)/10,n=e.int(3,7),r=Math.round(t*Math.pow(10,n));return{a:t,n,value:r}},generateStem:e=>`${e.a} × 10^${e.n} 表示的原数是多少？`,generateOptions:(e,t)=>{const n=e.value;return P([String(n),String(n/10),String(n*10),String(Math.round(n/100))])},computeAnswer:e=>String(e.value),generateSolution:e=>`${e.a} × 10^${e.n} = ${e.a} × ${Math.pow(10,e.n)} = ${e.value}。`},{knowledgePointId:"7a-1-10",variantGroup:"sci-v3",difficulty:2,type:"diagnostic",generateParams:e=>{const t=e.int(1,9)+e.int(1,9)/10,n=e.int(2,5);return{a:t,n}},generateStem:()=>"下列哪个不是科学记数法的正确表示？",generateOptions:(e,t)=>{const n=e.a,r=e.n,i=`${(n*10).toFixed(1)} × 10^${r-1}`;return P([`${n} × 10^${r}`,`1.0 × 10^${r+1}`,i,`9.9 × 10^${r}`])},computeAnswer:e=>`${(e.a*10).toFixed(1)} × 10^${e.n-1}`,generateSolution:e=>`科学记数法中 a 必须满足 1 ≤ a < 10。${(e.a*10).toFixed(1)} > 10，不符合要求。`}],bm=[{knowledgePointId:"7a-2-1",variantGroup:"lan-v1",difficulty:1,type:"diagnostic",generateParams:e=>{const t=e.int(2,5),n=e.int(2,5);return{m:t,n}},generateStem:e=>`a 的 ${e.m} 倍加上 b 的 ${e.n} 倍，用代数式表示为？`,generateOptions:(e,t)=>{const n=`${e.m}a+${e.n}b`;return P([n,`${e.m+e.n}ab`,`${e.m}/a+${e.n}/b`,`${e.m}a${e.n}b`])},computeAnswer:e=>`${e.m}a+${e.n}b`,generateSolution:e=>`a 的 ${e.m} 倍写成 ${e.m}a，b 的 ${e.n} 倍写成 ${e.n}b，和为 ${e.m}a+${e.n}b。`},{knowledgePointId:"7a-2-1",variantGroup:"lan-v2",difficulty:2,type:"diagnostic",generateParams:e=>{const t=e.int(2,8),n=e.int(1,t-1);return{a:t,b:n}},generateStem:e=>`用代数式表示：${e.a} 与 ${e.b} 的平方差。`,generateOptions:(e,t)=>{const n=e.a,r=e.b;return P([`${n}²-${r}²`,`(${n}-${r})²`,`${n}²+${r}²`,`(${n}+${r})²`])},computeAnswer:e=>`${e.a}²-${e.b}²`,generateSolution:e=>`${e.a} 与 ${e.b} 的平方差 = ${e.a}² - ${e.b}²，注意平方差和差的平方的区别。`},{knowledgePointId:"7a-2-1",variantGroup:"lan-v3",difficulty:3,type:"diagnostic",generateParams:e=>{const t=e.int(2,5),n=e.int(1,5);return{a:t,b:n}},generateStem:e=>`甲数为 x，比乙数的 ${e.a} 倍多 ${e.b}，则乙数用代数式表示为？`,generateOptions:(e,t)=>{const n=e.a,r=e.b;return P([`(x-${r})/${n}`,`${n}x+${r}`,`(x+${r})/${n}`,`${n}x-${r}`])},computeAnswer:e=>`(x-${e.b})/${e.a}`,generateSolution:e=>`设乙数为 y，则 ${e.a}y+${e.b}=x，解得 y=(x-${e.b})/${e.a}。注意是"除以${e.a}"而非"乘以${e.a}"。`}],Dm=[{knowledgePointId:"7a-2-2",variantGroup:"mon-v1",difficulty:1,type:"diagnostic",generateParams:e=>{const t=e.int(2,8),n=e.int(2,4);return{coeff:t,deg:n}},generateStem:e=>`单项式 ${e.coeff}x^${e.deg} 的系数和次数分别是？`,generateOptions:(e,t)=>{const n=e.coeff,r=e.deg;return P([`系数${n}，次数${r}`,`系数${r}，次数${n}`,`系数${n+r}，次数${n}`,`系数${n}，次数${n+r}`])},computeAnswer:e=>`系数${e.coeff}，次数${e.deg}`,generateSolution:e=>`单项式的系数是数字因数 ${e.coeff}，次数是所有字母的指数和 ${e.deg}。`},{knowledgePointId:"7a-2-2",variantGroup:"mon-v2",difficulty:2,type:"diagnostic",generateParams:e=>{const t=e.int(2,5),n=e.int(2,5),r=e.int(2,4);return{a:t,b:n,n:r}},generateStem:()=>"下列哪个是单项式？",generateOptions:(e,t)=>{const n=e.a,r=e.b,i=e.n,o=`${n}x^${i}`;return P([o,`${n}x+${r}`,`${n}/x`,`${n}x²-${r}`])},computeAnswer:e=>`${e.a}x^${e.n}`,generateSolution:e=>`${e.a}+${e.b} 和 ${e.a}x²-${e.b} 都是多项式（含加减号），${e.a}/x 中字母在分母上，只有 ${e.a}x^${e.n} 是数与字母乘积，是单项式。`},{knowledgePointId:"7a-2-2",variantGroup:"mon-v3",difficulty:3,type:"diagnostic",generateParams:e=>{const n=e.int(2,4),r=2+n;return{m:2,n,p:r}},generateStem:e=>`若单项式 a x^${e.m} y^n 的次数为 ${e.p}，则 n = ?`,generateOptions:(e,t)=>{const n=e.n,r=e.p,i=e.m;return P([String(n),String(r),String(i),String(i*n)])},computeAnswer:e=>String(e.n),generateSolution:e=>`次数 = 所有字母指数之和 = ${e.m} + n = ${e.p}，解得 n = ${e.n}。`}],Tm=[{knowledgePointId:"7a-2-3",variantGroup:"pol-v1",difficulty:1,type:"diagnostic",generateParams:e=>({deg:e.int(3,5)}),generateStem:e=>`多项式 x^${e.deg} - 2x^${e.deg-1} + 1 是几次几项式？`,generateOptions:(e,t)=>{const n=e.deg;return P([`${n}次三项式`,`${n}次二项式`,`${n-1}次三项式`,`${n+1}次三项式`])},computeAnswer:e=>`${e.deg}次三项式`,generateSolution:e=>`最高项 x^${e.deg} 的次数为 ${e.deg}，一共有 3 项，所以是 ${e.deg} 次三项式。`},{knowledgePointId:"7a-2-3",variantGroup:"pol-v2",difficulty:2,type:"diagnostic",generateParams:e=>{const t=e.int(2,4),n=e.int(2,4),r=t+n;return{m:t,n,deg:r}},generateStem:e=>`多项式 a x^${e.m} y^${e.n} - b x^${e.m-1} y^${e.n+1} + c 的次数是？`,generateOptions:(e,t)=>{const n=e.deg;return P([String(n),String(e.m),String(e.n),String(n-1)])},computeAnswer:e=>String(e.deg),generateSolution:e=>`第一项次数=${e.m}+${e.n}=${e.deg}，第二项次数=${e.m-1}+${e.n+1}=${e.deg}，取最高次项次数 ${e.deg}。`},{knowledgePointId:"7a-2-3",variantGroup:"pol-v3",difficulty:3,type:"diagnostic",generateParams:e=>({c:e.int(3,7)}),generateStem:e=>`若多项式 3x² + (a-${e.c})x + 2 是二次二项式，则 a = ?`,generateOptions:(e,t)=>{const n=e.c;return P([String(n),String(-n),`±${n}`,String(0)])},computeAnswer:e=>String(e.c),generateSolution:e=>`二次二项式只有两项，中间项系数为 0：a-${e.c}=0，解得 a=${e.c}。`}],Rm=[{knowledgePointId:"7a-2-4",variantGroup:"br-v1",difficulty:1,type:"diagnostic",generateParams:e=>{const t=e.int(2,9),n=e.int(1,6),r=e.int(2,5);return{a:t,b:n,c:r}},generateStem:e=>`a + (${e.b} - ${e.c}) 去括号后等于？`,generateOptions:(e,t)=>{e.a;const n=e.b,r=e.c;return P([`a+${n}-${r}`,`a+${n}+${r}`,`a-${n}-${r}`,`a-${n}+${r}`])},computeAnswer:e=>`a+${e.b}-${e.c}`,generateSolution:e=>`括号前是 "+"，括号内各项符号不变：a+(${e.b}-${e.c}) = a+${e.b}-${e.c}。`},{knowledgePointId:"7a-2-4",variantGroup:"br-v2",difficulty:2,type:"diagnostic",generateParams:e=>{const t=e.int(2,9),n=e.int(2,6),r=e.int(3,7);return{a:t,b:n,c:r}},generateStem:e=>`a - (${e.b} - ${e.c}) 去括号后等于？`,generateOptions:(e,t)=>{e.a;const n=e.b,r=e.c;return P([`a-${n}+${r}`,`a-${n}-${r}`,`a+${n}-${r}`,`a+${n}+${r}`])},computeAnswer:e=>`a-${e.b}+${e.c}`,generateSolution:e=>`括号前是 "-"，括号内各项都变号：a-(${e.b}-${e.c}) = a-${e.b}+${e.c}。-${e.b} 变 -${e.b}，-${e.c} 的相反数是 +${e.c}。`},{knowledgePointId:"7a-2-4",variantGroup:"br-v3",difficulty:3,type:"diagnostic",generateParams:e=>{const t=-e.int(2,5),n=e.int(2,6),r=e.int(1,5),i=e.int(2,5);return{k:t,a:n,b:r,c:i}},generateStem:e=>`${e.k}(${e.a}x - ${e.b}y + ${e.c}) 去括号后等于？`,generateOptions:(e,t)=>{const n=e.k,r=e.a,i=e.b,o=e.c,a=`${n*r}x+${-n*i}y${n*o}`;return P([a,`${n*r}x-${n*i}y+${n*o}`,`${Math.abs(n*r)}x-${Math.abs(n*i)}y+${Math.abs(n*o)}`,`${n*r}x-${-n*i}y-${-n*o}`])},computeAnswer:e=>{const t=e.k,n=e.a,r=e.b,i=e.c;let o=`${t*n}x`;return-t*r>=0?o+=`+${-t*r}y`:o+=`${-t*r}y`,t*i>=0?o+=`+${t*i}`:o+=`${t*i}`,o},generateSolution:e=>{const t=e.k,n=e.a,r=e.b,i=e.c;return`${t}×${n}x = ${t*n}x，${t}×(-${r}y) = +${-t*r}y，${t}×${i} = ${t*i}。括号前系数 ${t} 要分配到每一项，负号也要分配。`}}],Lm=[{knowledgePointId:"7a-2-5",variantGroup:"ie-v1",difficulty:1,type:"diagnostic",generateParams:e=>{const t=e.int(2,6),n=e.int(1,5),r=e.int(3,7),i=e.int(2,5);return{a:t,b:n,c:r,d:i}},generateStem:e=>`(${e.a}a+${e.b}b)+(${e.c}a-${e.d}b) 合并后的结果是？`,generateOptions:(e,t)=>{const n=e.a,r=e.b,i=e.c,o=e.d;return P([`${n+i}a+${r-o}b`,`${n+i}a+${r+o}b`,`${n-i}a+${r-o}b`,`${n+i}a${r-o>=0?"+":""}${Math.abs(r-o)}b`])},computeAnswer:e=>{const t=e.a+e.c,n=e.b-e.d;return n>=0?`${t}a+${n}b`:`${t}a${n}b`},generateSolution:e=>{const t=e.a+e.c,n=e.b-e.d;return`a 项合并：${e.a}a+${e.c}a=${t}a；b 项合并：${e.b}b-${e.d}b=${n}b。结果为 ${t}a${n>=0?"+":""}${n}b。`}},{knowledgePointId:"7a-2-5",variantGroup:"ie-v2",difficulty:2,type:"diagnostic",generateParams:e=>{const t=e.int(3,6),n=e.int(1,4),r=e.int(2,5),i=e.int(2,5),o=e.int(3,7);return{a:t,b:n,c:r,d:i,e:o}},generateStem:e=>`(${e.a}x²+${e.b}x-${e.c})-(${e.d}x²-${e.e}x+2) 的结果是？`,generateOptions:(e,t)=>{const n=e.a,r=e.b,i=e.c,o=e.d,a=e.e,s=n-o,l=r+a,u=-i-2,v=`${s}x²${l>=0?"+":""}${l}x${u>=0?"+":""}${u}`;return P([v,`${n-o}x²+${r-a}x${-i-2}`,`${n+o}x²+${r+a}x${-i+2}`,`${n-o}x²${r-a>=0?"+":""}${r-a}x${-i-2>=0?"+":""}${-i-2}`])},computeAnswer:e=>{const t=e.a-e.d,n=e.b+e.e,r=-e.c-2;let i=`${t}x²`;return i+=n>=0?`+${n}x`:`${n}x`,i+=r>=0?`+${r}`:`${r}`,i},generateSolution:e=>{const t=e.a-e.d,n=e.b+e.e,r=-e.c-2;return`(${e.a}x²+${e.b}x-${e.c})-(${e.d}x²-${e.e}x+2) = ${e.a}x²+${e.b}x-${e.c}${-e.d}x²+${e.e}x-2 = ${t}x²${n>=0?"+":""}${n}x${r>=0?"+":""}${r}。`}},{knowledgePointId:"7a-2-5",variantGroup:"ie-v3",difficulty:3,type:"diagnostic",generateParams:e=>{const t=e.int(2,5),n=e.int(2,5),r=e.int(1,4),i=e.int(3,6),o=e.int(1,3),a=e.int(2,5);return{a:t,b:n,c:r,d:i,e:o,f:a}},generateStem:e=>`计算：(${e.a}a-${e.b}b+${e.c})-(${e.d}a+${e.e}b-${e.f})+(${e.b}a-${e.e}b)`,generateOptions:(e,t)=>{const n=e.a-e.d+e.b,r=-e.b-e.e-e.e,i=e.c+e.f,o=`${n}a${r>=0?"+":""}${r}b${i>=0?"+":""}${i}`;return P([o,`${n}a${-r>=0?"+":""}${-r}b${i>=0?"+":""}${i}`,`${n+1}a${r>=0?"+":""}${r}b${i>=0?"+":""}${i}`,`${n-1}a${r>=0?"+":""}${r}b${i>=0?"+":""}${i}`])},computeAnswer:e=>{const t=e.a-e.d+e.b,n=-e.b-e.e-e.e,r=e.c+e.f;let i=`${t}a`;return i+=n>=0?`+${n}b`:`${n}b`,i+=r>=0?`+${r}`:`${r}`,i},generateSolution:e=>{const t=e.a-e.d+e.b,n=-e.b-e.e-e.e,r=e.c+e.f;return`a 项：${e.a}-${e.d}+${e.b}=${t}；b 项：-${e.b}-${e.e}-${e.e}=${n}；常数项：${e.c}+${e.f}=${r}。结果=${t}a${n>=0?"+":""}${n}b${r>=0?"+":""}${r}。`}}],Mm=[{knowledgePointId:"7a-3-1",variantGroup:"eqc-v1",difficulty:1,type:"diagnostic",generateParams:e=>{const t=e.int(2,5),n=e.int(3,7),r=e.int(1,3);return{a:t,b:n,c:r}},generateStem:()=>"下列哪个是一元一次方程？",generateOptions:(e,t)=>{const n=e.a,r=e.b;e.c;const i=`${n}x+${r}=0`;return P([i,`${n}x+${r}`,"x²+1=0",`${n}x+${r}y=0`])},computeAnswer:e=>`${e.a}x+${e.b}=0`,generateSolution:e=>`一元一次方程要求：含有一个未知数、未知数次数为 1、是等式。${e.a}x+${e.b} 不是等式；x²+1=0 次数为 2；${e.a}x+${e.b}y=0 含有两个未知数。${e.a}x+${e.b}=0 符合所有条件。`},{knowledgePointId:"7a-3-1",variantGroup:"eqc-v2",difficulty:2,type:"diagnostic",generateParams:e=>{const t=e.int(2,5),n=e.int(3,8),r=e.pick([2,3,4,5]),i=t*r+n;return{a:t,b:n,x:r,rhs:i}},generateStem:e=>`x = ${e.x} 是否是方程 ${e.a}x+${e.b}=${e.rhs} 的解？`,generateOptions:(e,t)=>["是","否"],computeAnswer:e=>"是",generateSolution:e=>`将 x=${e.x} 代入左边：${e.a}×${e.x}+${e.b}=${e.rhs}=右边，所以 x=${e.x} 是方程的解。`},{knowledgePointId:"7a-3-1",variantGroup:"eqc-v3",difficulty:3,type:"diagnostic",generateParams:e=>{const t=e.int(2,5),n=e.int(2,4);return{m:t,a:n}},generateStem:e=>`若 (${e.m}-1)x^${e.m-1}+${e.a}=0 是一元一次方程，则 m = ?`,generateOptions:(e,t)=>P(["2",String(e.m),"1",String(e.m+1)]),computeAnswer:e=>"2",generateSolution:e=>`一元一次方程要求 x 的次数为 1，即 ${e.m}-1=1，解得 ${e.m}=2。此时系数 ${e.m}-1=1≠0，方程有意义。`}],Gm=[{knowledgePointId:"7a-3-2",variantGroup:"ep-v1",difficulty:1,type:"diagnostic",generateParams:e=>{const t=e.int(2,6),n=e.int(1,4);return{a:t,b:n}},generateStem:()=>"若 a = b，则下列等式一定成立的是？",generateOptions:(e,t)=>{const n=e.a,r=e.b;return P([`a+${n}=b+${n}`,`a-${r}=b-${n}`,`a/${n}=b/${r}`,`${n}a=${r}b`])},computeAnswer:e=>`a+${e.a}=b+${e.a}`,generateSolution:e=>`根据等式性质 1：等号两边加上同一个数，等式仍成立。a+${e.a}=b+${e.a} 就是在两边加 ${e.a}。`},{knowledgePointId:"7a-3-2",variantGroup:"ep-v2",difficulty:2,type:"diagnostic",generateParams:e=>{const t=e.int(2,5),n=e.int(3,7),r=e.int(3,6),i=t*r+n;return{a:t,b:n,x:r,rhs:i}},generateStem:e=>`解方程 ${e.a}x+${e.b}=${e.rhs}，第一步应该？`,generateOptions:(e,t)=>P([`方程两边同时减去${e.b}`,`方程两边同时除以${e.a}`,`方程两边同时加上${e.b}`,`方程两边同时乘以${e.a}`]),computeAnswer:e=>`方程两边同时减去${e.b}`,generateSolution:e=>`${e.a}x+${e.b}=${e.rhs}，根据等式性质 1，两边同时减去 ${e.b}，得 ${e.a}x=${e.rhs-e.b}。再用性质 2，两边除以 ${e.a} 得解。`},{knowledgePointId:"7a-3-2",variantGroup:"ep-v3",difficulty:3,type:"diagnostic",generateParams:e=>{const t=e.int(2,5),n=e.int(3,7),r=e.int(2,5);return{a:t,b:n,c:r}},generateStem:e=>`已知 ${e.a}x-${e.b}=${e.a}y-${e.b}，能得到 x=y 吗？`,generateOptions:(e,t)=>["能，依据等式性质","不能，缺少条件","能，因为系数为正","不一定"],computeAnswer:e=>"能，依据等式性质",generateSolution:e=>`${e.a}x-${e.b}=${e.a}y-${e.b}，两边同时加 ${e.b}：${e.a}x=${e.a}y，两边同时除以 ${e.a}（≠0）：x=y。都使用了等式性质。`}],Bm=[{knowledgePointId:"7a-3-3",variantGroup:"be-v1",difficulty:1,type:"diagnostic",generateParams:e=>{const t=e.int(2,4),n=e.int(2,6),r=e.int(3,7),i=t*(r+n);return{a:t,b:n,x:r,rhs:i}},generateStem:e=>`解方程：${e.a}(x+${e.b})=${e.rhs}，x = ?`,generateOptions:(e,t)=>{const n=e.x;return P([String(n),String(n+1),String(n-1),String(n+2)])},computeAnswer:e=>String(e.x),generateSolution:e=>`${e.a}(x+${e.b})=${e.rhs}，去括号：${e.a}x+${e.a*e.b}=${e.rhs}，${e.a}x=${e.a}x+${e.a*e.b}-${e.a*e.b}=${e.rhs}-${e.a*e.b}=${e.a*e.x}，x=${e.x}。`},{knowledgePointId:"7a-3-3",variantGroup:"be-v2",difficulty:2,type:"diagnostic",generateParams:e=>{const t=e.int(3,5),n=e.int(1,t-2),r=e.int(1,4),i=e.int(2,8),o=(t*r+i*(t-n))/n;return{a:t,b:r,c:n,d:o,x:i}},generateStem:e=>`解方程：${e.a}(x+${e.b})=${e.c}(x+${e.d})，x = ?`,generateOptions:(e,t)=>P([String(e.x),String(e.x+1),String(e.x-1),String(e.x+2)]),computeAnswer:e=>String(e.x),generateSolution:e=>`${e.a}(x+${e.b})=${e.c}(x+${e.d})，去括号：${e.a}x+${e.a*e.b}=${e.c}x+${e.c*e.d}，移项：${e.a}x-${e.c}x=${e.c*e.d}-${e.a*e.b}，${e.a-e.c}x=${e.c*e.d-e.a*e.b}，x=${e.x}。`},{knowledgePointId:"7a-3-3",variantGroup:"be-v3",difficulty:3,type:"diagnostic",generateParams:e=>{const t=e.int(2,4),n=e.int(2,5),r=e.int(2,6),i=5-t*(r-n);return{a:t,b:n,x:r,c:i}},generateStem:e=>`解方程：5-${e.a}(x-${e.b})=${e.c}，x = ?`,generateOptions:(e,t)=>{const n=e.x;return P([String(n),String(n+1),String(n-1),String(n+2)])},computeAnswer:e=>String(e.x),generateSolution:e=>`5-${e.a}(x-${e.b})=${e.c}，去括号：5-${e.a}x+${e.a*e.b}=${e.c}，-${e.a}x=${e.c}-5-${e.a*e.b}，${e.a}x=5+${e.a*e.b}-${e.c}，x=${e.x}。注意负号去括号时 -${e.a}×(-${e.b}) = +${e.a*e.b}。`}],Fm=[{knowledgePointId:"7a-3-4",variantGroup:"de-v1",difficulty:1,type:"diagnostic",generateParams:e=>{const t=e.pick([2,3,5]),n=e.pick([3,4,5].filter(s=>s!==t)),r=t*n,i=e.int(1,3),o=r*i,a=o/t+o/n;return{a:t,b:n,x:o,lhs:a}},generateStem:e=>`解方程：x/${e.a} + x/${e.b} = ${e.lhs}，x = ?`,generateOptions:(e,t)=>P([String(e.x),String(e.x-1),String(e.x+1),String(e.x+2)]),computeAnswer:e=>String(e.x),generateSolution:e=>{const t=e.a*e.b,n=e.lhs*t;return`两边同乘 ${t}：${e.b}x+${e.a}x=${n}，${e.a+e.b}x=${n}，x=${e.x}。`}},{knowledgePointId:"7a-3-4",variantGroup:"de-v2",difficulty:2,type:"diagnostic",generateParams:e=>{const t=e.pick([3,4,5]),n=e.pick([2,3].filter(a=>a!==t)),r=e.int(1,4);let i=e.int(2,10);for(let a=0;a<30;a++){const s=(n*(i+r)-t*i)/t;if(Number.isInteger(s)&&s>0)break;i=e.int(2,10)}const o=(n*(i+r)-t*i)/t;return{a:t,b:n,k:r,d:Math.round(o),x:i}},generateStem:e=>`解方程：(x+${e.k})/${e.a} = (x+${e.d})/${e.b}，x = ?`,generateOptions:(e,t)=>P([String(e.x),String(e.x+1),String(e.x-1),String(e.x+2)]),computeAnswer:e=>String(e.x),generateSolution:e=>`交叉相乘：${e.b}(x+${e.k})=${e.a}(x+${e.d})，${e.b}x+${e.b*e.k}=${e.a}x+${e.a*e.d}，${e.b}x-${e.a}x=${e.a*e.d}-${e.b*e.k}，${e.b-e.a}x=${e.a*e.d-e.b*e.k}，x=${e.x}。`},{knowledgePointId:"7a-3-4",variantGroup:"de-v3",difficulty:3,type:"diagnostic",generateParams:e=>{const t=e.pick([3,4,5]),n=e.int(3,8),r=e.int(2,4),i=e.int(1,4),o=((r-1)*n-i)/t;return{a:r,b:i,c:t,x:n,k:o}},generateStem:e=>`解方程：(${e.a}x-${e.b})/${e.c} - x/${e.c} = ${e.k}，x = ?`,generateOptions:(e,t)=>P([String(e.x),String(e.x+1),String(e.x-1),String(e.x+2)]),computeAnswer:e=>String(e.x),generateSolution:e=>`通分：(${e.a}x-${e.b}-x)/${e.c}=${e.k}，(${e.a-1}x-${e.b})/${e.c}=${e.k}，${e.a-1}x-${e.b}=${e.k*e.c}，${e.a-1}x=${e.k*e.c+e.b}，x=${e.x}。`}],qm=[{knowledgePointId:"7a-3-5",variantGroup:"app-v1",difficulty:1,type:"diagnostic",generateParams:e=>{const t=e.int(3,8),n=e.int(25,45),r=t%2===0?n:n+1,i=(r+t)/2;return{diff:t,sum:r,x:i}},generateStem:e=>`甲比乙大 ${e.diff} 岁，两人年龄和为 ${e.sum}，甲多少岁？`,generateOptions:(e,t)=>{const n=e.x;return P([String(n),String(e.sum-n),String(n-e.diff),String(n+e.diff)])},computeAnswer:e=>String(e.x),generateSolution:e=>`设甲 x 岁，则乙 x-${e.diff} 岁。x+(x-${e.diff})=${e.sum}，2x=${e.sum+e.diff}，x=${e.x}。`},{knowledgePointId:"7a-3-5",variantGroup:"app-v2",difficulty:2,type:"diagnostic",generateParams:e=>{const t=e.int(3,5),n=e.int(1,t-2),r=e.int(3,10),i=r*(t-n),o=e.int(1,i-2),a=i-o;return{a:t,b:o,c:n,d:a,x:r}},generateStem:e=>`某数的 ${e.a} 倍减去 ${e.b}，等于该数的 ${e.c} 倍加上 ${e.d}，求该数。`,generateOptions:(e,t)=>{const n=e.x;return P([String(n),String(n+1),String(n-1),String(n*2)])},computeAnswer:e=>String(e.x),generateSolution:e=>`设该数为 x：${e.a}x-${e.b}=${e.c}x+${e.d}，${e.a}x-${e.c}x=${e.b}+${e.d}，${e.a-e.c}x=${e.b+e.d}，x=${e.x}。`},{knowledgePointId:"7a-3-5",variantGroup:"app-v3",difficulty:3,type:"diagnostic",generateParams:e=>{const t=e.int(40,80),n=e.int(30,60),r=e.int(2,5),i=r*(t+n);return{v1:t,v2:n,dist:i,t:r}},generateStem:e=>`两地相距 ${e.dist} km，甲车从 A 地出发时速 ${e.v1} km/h，乙车从 B 地出发时速 ${e.v2} km/h，相向而行，几小时后相遇？`,generateOptions:(e,t)=>{const n=e.t;return P([String(n),String(n+1),String(n-1),String(n*2)])},computeAnswer:e=>String(e.t),generateSolution:e=>`设 x 小时后相遇：${e.v1}x+${e.v2}x=${e.dist}，${e.v1+e.v2}x=${e.dist}，x=${e.t}。`}],Um=[{knowledgePointId:"7a-4-1",variantGroup:"geo-v1",difficulty:1,type:"diagnostic",generateParams:e=>({_:e.int(1,10)}),generateStem:()=>"下列图形中属于立体图形的是？",generateOptions:()=>P(["球","圆","三角形","长方形"]),computeAnswer:()=>"球",generateSolution:()=>"球是立体图形（有体积），圆、三角形、长方形都是平面图形。"},{knowledgePointId:"7a-4-1",variantGroup:"geo-v2",difficulty:2,type:"diagnostic",generateParams:e=>({_:e.int(1,10)}),generateStem:()=>"正方体有几个面？几个顶点？几条棱？",generateOptions:()=>P(["6个面，8个顶点，12条棱","8个面，6个顶点，12条棱","6个面，12个顶点，8条棱","4个面，8个顶点，12条棱"]),computeAnswer:()=>"6个面，8个顶点，12条棱",generateSolution:()=>"正方体有 6 个面（上下左右前后）、8 个顶点、12 条棱。"},{knowledgePointId:"7a-4-1",variantGroup:"geo-v3",difficulty:3,type:"diagnostic",generateParams:e=>({_:e.int(1,10)}),generateStem:()=>"下列图形中，不是正方体展开图的是？",generateOptions:()=>["141型（1-4-1排列）","231型（2-3-1排列）","222型（2-2-2排列）","田字形（2×2排列）"],computeAnswer:()=>"田字形（2×2排列）",generateSolution:()=>"正方体展开图共 11 种，分为 141、231、222、33 四种类型。田字形不是正方体的展开图。"}],Vm=[{knowledgePointId:"7a-4-2",variantGroup:"pls-v1",difficulty:1,type:"diagnostic",generateParams:e=>({_:e.int(1,10)}),generateStem:()=>"长方体由几个面围成？",generateOptions:()=>P(["6","4","8","12"]),computeAnswer:()=>"6",generateSolution:()=>"长方体有 6 个面（每个面都是长方形），与正方体相同。"},{knowledgePointId:"7a-4-2",variantGroup:"pls-v2",difficulty:2,type:"diagnostic",generateParams:e=>({_:e.int(1,10)}),generateStem:()=>"线与线相交得到___，面与面相交得到___。",generateOptions:()=>P(["点，线","线，面","面，体","点，点"]),computeAnswer:()=>"点，线",generateSolution:()=>"线与线相交得到点，面与面相交得到线。点动成线，线动成面，面动成体。"},{knowledgePointId:"7a-4-2",variantGroup:"pls-v3",difficulty:3,type:"diagnostic",generateParams:e=>{const t=e.int(3,6),n=t+2,r=2*t,i=3*t;return{n:t,faces:n,vertices:r,edges:i}},generateStem:e=>`${e.n} 棱柱有多少个面？多少个顶点？多少条棱？`,generateOptions:(e,t)=>{const n=e.n;return P([`${n+2}个面，${2*n}个顶点，${3*n}条棱`,`${n}个面，${2*n}个顶点，${2*n}条棱`,`${n+2}个面，${n}个顶点，${3*n}条棱`,`${n}个面，${3*n}个顶点，${2*n}条棱`])},computeAnswer:e=>`${e.faces}个面，${e.vertices}个顶点，${e.edges}条棱`,generateSolution:e=>`n 棱柱有 n+2 个面（n 个侧面 + 2 个底面）、2n 个顶点、3n 条棱。代入 n=${e.n}：${e.n}+2=${e.faces} 个面、2×${e.n}=${e.vertices} 个顶点、3×${e.n}=${e.edges} 条棱。`}],Qm=[{knowledgePointId:"7a-4-3",variantGroup:"lrs-v1",difficulty:1,type:"diagnostic",generateParams:e=>({_:e.int(1,10)}),generateStem:()=>"两点确定___条直线。",generateOptions:()=>P(["1","2","3","无数"]),computeAnswer:()=>"1",generateSolution:()=>"经过两点有且只有一条直线，这是直线的基本性质（两点确定一条直线）。"},{knowledgePointId:"7a-4-3",variantGroup:"lrs-v2",difficulty:2,type:"diagnostic",generateParams:e=>{const t=e.int(3,5),n=t*(t-1)/2;return{n:t,lines:n}},generateStem:e=>`平面上有 ${e.n} 个不共线的点，最多可以确定几条直线？`,generateOptions:(e,t)=>{const n=e.n,r=n*(n-1)/2;return P([String(r),String(n),String(n*2),String(n+r)])},computeAnswer:e=>String(e.lines),generateSolution:e=>`从 ${e.n} 个点中任选 2 个确定一条直线：C(${e.n},2) = ${e.n}×${e.n-1}/2 = ${e.lines} 条。`},{knowledgePointId:"7a-4-3",variantGroup:"lrs-v3",difficulty:3,type:"diagnostic",generateParams:e=>{const t=e.int(4,7),n=t*(t-1)/2;return{n:t,segs:n}},generateStem:e=>`一条线段上有 ${e.n} 个点（含端点），共有多少条线段？`,generateOptions:(e,t)=>{const n=e.n,r=n*(n-1)/2;return P([String(r),String(n),String(n-1),String(n*2)])},computeAnswer:e=>String(e.segs),generateSolution:e=>`从 ${e.n} 个点中任选 2 个端点确定一条线段：C(${e.n},2) = ${e.n}×${e.n-1}/2 = ${e.segs} 条。`}],Wm=[{knowledgePointId:"7a-4-4",variantGroup:"ang-v1",difficulty:1,type:"diagnostic",generateParams:e=>({deg:e.pick([30,45,60,75,89,91,120,150])}),generateStem:e=>`${e.deg}° 是___角。`,generateOptions:(e,t)=>{const n=e.deg<90?"锐角":e.deg===90?"直角":e.deg<180?"钝角":"平角";return P([n,"锐角","直角","钝角"])},computeAnswer:e=>e.deg<90?"锐角":e.deg===90?"直角":e.deg<180?"钝角":"平角",generateSolution:e=>e.deg<90?`0° < ${e.deg}° < 90°，属于锐角。`:e.deg===90?`${e.deg}° = 90°，属于直角。`:`90° < ${e.deg}° < 180°，属于钝角。`},{knowledgePointId:"7a-4-4",variantGroup:"ang-v2",difficulty:2,type:"diagnostic",generateParams:e=>{const t=e.int(20,50),n=e.int(15,40),r=t+n;return{a:t,b:n,sum:r}},generateStem:e=>`已知 ∠AOB = ${e.a}°，∠BOC = ${e.b}°，且射线 OC 在 ∠AOB 内部，则 ∠AOC = ?`,generateOptions:(e,t)=>P([String(e.a-e.b),String(e.a+e.b),String(e.a),String(e.b)]),computeAnswer:e=>String(e.a-e.b),generateSolution:e=>`∠AOC = ∠AOB - ∠BOC = ${e.a}° - ${e.b}° = ${e.a-e.b}°。`},{knowledgePointId:"7a-4-4",variantGroup:"ang-v3",difficulty:3,type:"diagnostic",generateParams:e=>{const t=e.int(1,11),n=e.pick([15,20,30,40,45]),r=Math.abs(30*t-5.5*n),i=r>180?360-r:r;return{h:t,m:n,angle:i}},generateStem:e=>`${e.h}:${String(e.m).padStart(2,"0")} 时，时针与分针的夹角为多少度？`,generateOptions:(e,t)=>{const n=Math.round(e.angle);return P([`${n}°`,`${n+15}°`,`${Math.abs(n-15)}°`,`${n*2}°`])},computeAnswer:e=>`${Math.round(e.angle)}°`,generateSolution:e=>{const t=Math.abs(30*e.h-5.5*e.m),n=t>180?360-t:t;return`${e.h} 点时，时针在 ${e.h}×30°=${e.h*30}° 的基础上再加 ${e.m}×0.5°=${e.m*.5}°，故时针角度 = ${e.h*30+e.m*.5}°；分针角度 = ${e.m}×6°=${e.m*6}°。夹角 = |${e.h*30+e.m*.5}°-${e.m*6}°| = ${t}°，取 0~180° 为 ${Math.round(n)}°。`}}],Hm=[{knowledgePointId:"7a-4-5",variantGroup:"am-v1",difficulty:1,type:"diagnostic",generateParams:e=>{const t=e.int(20,50),n=e.pick([12,18,24,30,36,42,48]),r=t+n/60;return{deg:t,min:n,decimal:Math.round(r*100)/100}},generateStem:e=>`${e.deg}°${e.min}' 用度表示为？`,generateOptions:(e,t)=>{const n=e.decimal;return P([`${n}°`,`${e.deg+e.min}°`,`${e.deg}.${e.min}°`,`${e.deg+e.min/100}°`])},computeAnswer:e=>`${e.decimal}°`,generateSolution:e=>`${e.min}' = ${e.min} ÷ 60 = ${e.min/60}°，所以 ${e.deg}°${e.min}' = ${e.decimal}°。`},{knowledgePointId:"7a-4-5",variantGroup:"am-v2",difficulty:2,type:"diagnostic",generateParams:e=>{const t=e.int(30,60),n=e.pick([12,24,36,48]),r=e.int(20,40),i=e.pick([12,24,36,48]);let o=n+i,a=0;o>=60&&(a=1,o-=60);const s=t+r+a;return{d1:t,m1:n,d2:r,m2:i,totalDeg:s,totalMin:o}},generateStem:e=>`计算：${e.d1}°${e.m1}' + ${e.d2}°${e.m2}' = ?`,generateOptions:(e,t)=>{const n=e.totalDeg,r=e.totalMin;return P([`${n}°${r}'`,`${e.d1+e.d2}°${e.m1+e.m2}'`,`${n+1}°${r}'`,`${n}°${r+60}'`])},computeAnswer:e=>`${e.totalDeg}°${e.totalMin}'`,generateSolution:e=>{const t=e.m1+e.m2;return t>=60?`${e.d1}°${e.m1}' + ${e.d2}°${e.m2}' = ${e.d1+e.d2}°${t}' = ${e.d1+e.d2}°${t-60}'+60' = ${e.totalDeg}°${e.totalMin}'`:`${e.d1}°${e.m1}' + ${e.d2}°${e.m2}' = ${e.d1+e.d2}°${t}' = ${e.totalDeg}°${e.totalMin}'`}},{knowledgePointId:"7a-4-5",variantGroup:"am-v3",difficulty:3,type:"diagnostic",generateParams:e=>{e.int(10,40);const t=e.pick([6,8,10,12,14,16]);return{angle:(90+t)/2,k:t}},generateStem:e=>`一个角的补角比它的余角的 3 倍多 ${e.k}°，这个角是多少度？`,generateOptions:(e,t)=>{const n=e.angle;return P([`${n}°`,`${n+10}°`,`${n-10}°`,`${90-n}°`])},computeAnswer:e=>`${e.angle}°`,generateSolution:e=>{const t=e.angle,n=90-t,r=180-t;return`设这个角为 x°：余角 = 90°-x，补角 = 180°-x。180°-x = 3(90°-x) + ${e.k}°，180-x = 270-3x + ${e.k}，2x = 90+${e.k}，x = ${t}°。验证：余角=${n}°，补角=${r}°，3×${n}°+${e.k}°=${r}°。`}}],Km=[{knowledgePointId:"7a-2-6",variantGroup:"7a26-v1",difficulty:1,type:"diagnostic",generateParams:e=>{const t=e.int(2,9),n=e.int(1,20),r=e.int(1,7),i=e.int(1,15),o=e.int(0,1);return o===0?{ax:t,b:n,cx:r,d:i,opNum:o,resultX:t+r,resultConst:n+i}:{ax:t,b:n,cx:r,d:i,opNum:o,resultX:t-r,resultConst:n-i}},generateStem:e=>{const t=e.opNum===0?"+":"-";return`计算：(${e.ax}x + ${e.b}) ${t} (${e.cx}x + ${e.d}) = ?`},generateOptions:(e,t)=>{const n=e.resultX,r=e.resultConst,i=r>=0?`+ ${r}`:`- ${Math.abs(r)}`,o=n===0?`${r}`:n===1?`x ${i}`:n===-1?`-x ${i}`:`${n}x ${i}`,a=[`${e.ax+e.cx}x + ${e.b+e.d}`,`${e.ax-e.cx}x + ${e.b+e.d}`,`${e.ax+e.cx}x - ${e.b+e.d}`,`${e.opNum===0?e.ax-e.cx:e.ax+e.cx}x + ${e.b+e.d}`];return P([o,...a])},computeAnswer:e=>{const t=e.resultX,n=e.resultConst,r=n>=0?`+ ${n}`:`- ${Math.abs(n)}`;return t===0?`${n}`:t===1?`x ${r}`:t===-1?`-x ${r}`:`${t}x ${r}`},generateSolution:e=>{if(e.opNum===0)return`去括号：${e.ax}x + ${e.b} + ${e.cx}x + ${e.d} = (${e.ax}+${e.cx})x + (${e.b}+${e.d}) = ${e.ax+e.cx}x + ${e.b+e.d}`;const t=e.b-e.d;return`去括号：${e.ax}x + ${e.b} - ${e.cx}x - ${e.d} = (${e.ax}-${e.cx})x + (${e.b}-${e.d}) = ${e.ax-e.cx}x ${t>=0?"+ "+t:"- "+Math.abs(t)}`}},{knowledgePointId:"7a-2-6",variantGroup:"7a26-v2",difficulty:2,type:"diagnostic",generateParams:e=>{const t=e.int(2,6),n=e.int(1,8),r=e.int(2,5),i=e.int(1,6),o=e.int(1,7),a=t-r+o;return{a:t,b:n,c:r,d:i,e:o,rx2:a,rx:n,rc:i}},generateStem:e=>`化简：(${e.a}x² + ${e.b}x) - (${e.c}x² - ${e.d}) + ${e.e}x² = ?`,generateOptions:(e,t)=>{const n=[];e.rx2!==0&&n.push(`${e.rx2===1?"":e.rx2===-1?"-":e.rx2}x²`),e.rx!==0&&n.push(`${e.rx>=0&&n.length>0?"+ ":""}${e.rx===1&&n.length>0?"":e.rx}x`);const r=e.rc>0?`+ ${e.rc}`:"",i=n.join(" ")+(r?` ${r}`:""),o=[`${e.a+e.c+e.e}x² + ${e.b}x + ${e.d}`,`${e.a-e.c+e.e}x² + ${e.b}x - ${e.d}`,`${e.a-e.c-e.e}x² + ${e.b}x + ${e.d}`,`${e.a+e.c-e.e}x² - ${e.b}x + ${e.d}`];return P([i,...o])},computeAnswer:e=>{const t=[];e.rx2!==0&&t.push(`${e.rx2===1?"":e.rx2===-1?"-":e.rx2}x²`),e.rx!==0&&t.push(`${e.rx>=0&&t.length>0?"+ ":""}${e.rx===1&&t.length>0?"":e.rx}x`);const n=e.rc>0?`+ ${e.rc}`:"";return(t.join(" ")+(n?` ${n}`:"")).trim()},generateSolution:e=>`去括号后合并：x²项 = ${e.a}x² - ${e.c}x² + ${e.e}x² = ${e.a-e.c+e.e}x²；x项 = ${e.b}x；常数项 = +${e.d}。结果 = ${e.a-e.c+e.e}x² + ${e.b}x + ${e.d}。`},{knowledgePointId:"7a-2-6",variantGroup:"7a26-v3",difficulty:3,type:"diagnostic",generateParams:e=>{const t=e.int(2,4),n=e.int(2,5),r=e.int(2,3),i=e.int(1,4),o=t-1+r,a=n+t,s=2-i;return{a:t,b:n,c:r,d:i,rx2:o,rx:a,rc:s}},generateStem:e=>`化简：(${e.a}x² + ${e.b}x + 3) - (x² - ${e.a}x + 1) + (${e.c}x² - ${e.d}) = ?`,generateOptions:(e,t)=>{const n=`${e.rx2}x² + ${e.rx}x + ${e.rc}`,r=[`${e.a+1+e.c}x² + ${e.b-e.a}x + 2 - p.d`,`${e.a-1+e.c}x² + ${e.b-e.a}x + ${2-e.d}`,`${e.a+1-e.c}x² + ${e.b+e.a}x + 4 - p.d`,`${e.a-1-e.c}x² + ${e.b+e.a}x + 2 + p.d`];return P([n,...r])},computeAnswer:e=>`${e.rx2}x² + ${e.rx}x + ${e.rc}`,generateSolution:e=>`去括号后合并：${e.a}x² - x² + ${e.c}x² = ${e.a-1+e.c}x²（二次项）；${e.b}x + ${e.a}x = ${e.b+e.a}x（一次项）；3 - 1 - ${e.d} = ${2-e.d}（常数项）。结果为 ${e.rx2}x² + ${e.rx}x + ${e.rc}。`}],Ym=[{knowledgePointId:"7a-3-6",variantGroup:"7a36-v1",difficulty:1,type:"diagnostic",generateParams:e=>{const t=[[36,12],[40,13],[44,14],[32,10],[28,8]],n=e.int(0,t.length-1),[r,i]=t[n],o=Math.round((4*i-r)/3);return{age:r,childAge:i,x:o,multiple:4}},generateStem:e=>`今年父亲 ${e.age} 岁，孩子 ${e.childAge} 岁。多少年前父亲的年龄是孩子的 ${e.multiple} 倍？设 x 年前，列方程求解。`,generateOptions:(e,t)=>P([`${e.x}`,`${e.x+1}`,`${e.x+2}`,`${e.x-1}`]),computeAnswer:e=>`${e.x}`,generateSolution:e=>`设 x 年前，则 ${e.age} - x = ${e.multiple}(${e.childAge} - x)，${e.age} - x = ${e.multiple*e.childAge} - ${e.multiple}x，${e.multiple-1}x = ${e.multiple*e.childAge-e.age}，x = ${e.x}。验证：${e.x} 年前父亲 ${e.age-e.x} 岁，孩子 ${e.childAge-e.x} 岁，${e.age-e.x} ÷ ${e.childAge-e.x} = ${e.multiple}。`},{knowledgePointId:"7a-3-6",variantGroup:"7a36-v2",difficulty:2,type:"diagnostic",generateParams:e=>{const t=e.pick([40,50,60,80]),n=e.pick([2,3,4,5]),r=e.int(10,30),i=(t*n+r)/2,o=2*i;return{speed:t,time:n,extraDist:r,d:o,mid:i}},generateStem:e=>`一辆汽车从 A 地到 B 地，以 ${e.speed} km/h 的速度行驶 ${e.time} 小时后，距离中点还有 ${e.extraDist} km。求 A、B 两地的距离。`,generateOptions:(e,t)=>{const n=e.d;return P([`${n} km`,`${n-20} km`,`${n+20} km`,`${n/2} km`])},computeAnswer:e=>`${e.d} km`,generateSolution:e=>`已行驶 ${e.speed}×${e.time}=${e.speed*e.time} km。设 AB 距离为 x km，则中点为 x/2 km。已行驶距离 + 剩余到中点距离 = 中点：${e.speed*e.time} + ${e.extraDist} = x/2，x = 2(${e.speed*e.time+e.extraDist}) = ${e.d} km。`},{knowledgePointId:"7a-3-6",variantGroup:"7a36-v3",difficulty:3,type:"diagnostic",generateParams:e=>{const t=[[6,3,1],[5,3,1],[6,4,2],[8,4,2],[12,6,3]],n=e.int(0,t.length-1),[r,i,o]=t[n];return{t1:r,t2:i,x:o}},generateStem:e=>`一项工程，甲单独完成需要 ${e.t1} 天，乙单独完成需要 ${e.t2} 天。甲先单独做了 2 天，然后乙加入合作。问还需要多少天才能完成全部工程？`,generateOptions:(e,t)=>P([`${e.x} 天`,`${e.x+1} 天`,`${e.x-1} 天`,`${e.x+2} 天`]),computeAnswer:e=>`${e.x} 天`,generateSolution:e=>`甲效率 = 1/${e.t1}，乙效率 = 1/${e.t2}。甲先做 2 天完成 2/${e.t1}。设还需 x 天，则 2/${e.t1} + x(1/${e.t1} + 1/${e.t2}) = 1。x(${e.t1+e.t2}/${e.t1*e.t2}) = 1 - 2/${e.t1} = (${e.t1-2})/${e.t1}。x = (${e.t1-2})/${e.t1} × ${e.t1*e.t2}/${e.t1+e.t2} = (${e.t1-2})×${e.t2}/${e.t1+e.t2} = ${(e.t1-2)*e.t2}/${e.t1+e.t2} = ${e.x} 天。`}],Xm={"7a-1-1":Pm,"7a-1-2":_m,"7a-1-3":Im,"7a-1-4":Cm,"7a-1-5":Em,"7a-1-6":Nm,"7a-1-7":jm,"7a-1-8":Om,"7a-1-9":zm,"7a-1-10":Am,"7a-2-1":bm,"7a-2-2":Dm,"7a-2-3":Tm,"7a-2-4":Rm,"7a-2-5":Lm,"7a-2-6":Km,"7a-3-1":Mm,"7a-3-2":Gm,"7a-3-3":Bm,"7a-3-4":Fm,"7a-3-5":qm,"7a-3-6":Ym,"7a-4-1":Um,"7a-4-2":Vm,"7a-4-3":Qm,"7a-4-4":Wm,"7a-4-5":Hm};function Zm(e,t,n,r="verify"){const i=Xm[e];if(!i||i.length===0)throw new Error(`知识点 ${e} 没有注册模板`);const o=new Sm(Date.now()),a=i.filter(y=>y.difficulty===t);if(a.length===0)throw new Error(`知识点 ${e} 没有难度 ${t} 的模板`);const s=o.pick(a),l=s.generateParams(o),u=s.generateStem(l),v=s.computeAnswer(l),g=s.generateSolution(l),p=s.generateOptions?s.generateOptions(l,v):void 0;return{id:km(e,o),knowledgePointId:e,type:r,difficulty:t,stem:u,options:p,answer:v,solution:g,variantGroup:s.variantGroup}}function Jm({kp:e,onComplete:t,onBack:n}){const r=vm[e.id],{markAsVerified:i,markAsMastered:o}=He(),[a,s]=J.useState(0),[l,u]=J.useState("teaching"),[v,g]=J.useState(""),[p,y]=J.useState(null),h=J.useRef(null),[w,A]=J.useState(null),f=["abstract_first","concrete_first","error_discovery"],c={abstract_first:"公式优先",concrete_first:"场景优先",error_discovery:"错误发现"},m=J.useCallback(()=>{const k=Zm(e.id,e.difficulty);h.current=k,A(k),g(""),y(null),u("verifying")},[e.id,e.difficulty]),$=()=>{u("done"),i(e.id),o(e.id)},_=()=>{if(!w)return;const k=v.trim()===w.answer.trim();y(k?"correct":"wrong"),k&&(i(e.id),setTimeout(()=>u("done"),1500))};return r?d.jsxs("div",{children:[d.jsx("button",{className:"btn-back",onClick:n,children:"← 返回知识地图"}),l==="teaching"&&d.jsxs("div",{className:"card",children:[d.jsxs("h2",{children:["补强教学：",e.name]}),d.jsx("p",{style:{fontSize:13,color:"var(--text-secondary)",marginBottom:16},children:"有三种不同的讲解方式。如果第一种没理解，换一种试试——不是重复讲同样的东西，而是换一条完全不同的认知路径。"}),d.jsx("div",{className:"teaching-approach-tabs",children:f.map((k,E)=>d.jsx("button",{className:a===E?"active":"",onClick:()=>s(E),children:c[k]},k))}),d.jsx("div",{className:"teaching-content",dangerouslySetInnerHTML:{__html:r[f[a]].replace(/\n/g,"<br/>").replace(/## (.+)/g,"<h2>$1</h2>").replace(/### (.+)/g,"<h3>$1</h3>").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/`(.+?)`/g,"<code>$1</code>")}}),d.jsxs("div",{style:{marginTop:24,display:"flex",gap:8},children:[d.jsx("button",{className:"btn btn-accent",onClick:m,children:"开始换皮验证"}),d.jsx("button",{className:"btn",onClick:()=>{s((a+1)%3)},children:"换一种讲法"})]})]}),l==="verifying"&&w&&d.jsxs("div",{className:"card",children:[d.jsx("h2",{children:"换皮验证"}),d.jsxs("p",{className:"verify-hint",children:["这是和教学例题",d.jsx("strong",{children:"表面不同但本质相同"}),"的题目。如果只记住了例题的套路而不是真正理解，这道题就会暴露出来。"]}),d.jsxs("div",{className:"verify-section",children:[d.jsx("p",{className:"question-stem",children:w.stem}),d.jsx("input",{type:"text",value:v,onChange:k=>g(k.target.value),placeholder:"输入你的答案",style:{width:"100%",padding:"12px",border:"2px solid var(--border)",borderRadius:"8px",fontSize:"15px",marginBottom:12,outline:"none"},onKeyDown:k=>{k.key==="Enter"&&_()}}),d.jsx("button",{className:"btn btn-accent",onClick:_,disabled:!v,children:"提交验证"}),p==="correct"&&d.jsx("p",{className:"feedback-correct",style:{marginTop:12},children:"换皮题通过！你不是在背答案，你是真正理解了。"}),p==="wrong"&&d.jsxs("div",{style:{marginTop:12},children:[d.jsxs("p",{className:"feedback-wrong",children:["换皮题未通过。正确答案是：",w.answer]}),d.jsx("p",{style:{fontSize:13,color:"var(--text-secondary)",marginTop:4,marginBottom:8},children:w.solution}),d.jsx("button",{className:"btn",onClick:()=>{u("teaching"),y(null)},children:"返回教学"})]})]})]}),l==="verifying"&&!w&&d.jsxs("div",{className:"card",children:[d.jsx("p",{children:"该知识点暂无换皮验证题。视为已验证通过。"}),d.jsx("button",{className:"btn btn-accent",onClick:$,children:"确认"})]}),l==="done"&&d.jsxs("div",{className:"card",children:[d.jsx("div",{className:"result-badge result-mastered",children:"已掌握"}),d.jsxs("h2",{children:[e.name," —— 已完成"]}),d.jsx("p",{className:"result-exp",children:"诊断 + 多路径教学 + 换皮验证全部通过。你已经真正理解了这个知识点，不是只背了答案。"}),d.jsx("div",{className:"result-actions",children:d.jsx("button",{className:"btn btn-accent",onClick:t,children:"返回知识地图"})})]})]}):d.jsxs("div",{children:[d.jsx("button",{className:"btn-back",onClick:n,children:"← 返回知识地图"}),d.jsxs("div",{className:"card",children:[d.jsx("p",{children:"该知识点暂无教学内容。"}),d.jsx("button",{className:"btn",onClick:n,children:"返回"})]})]})}const eg={mastered:"已掌握",verified:"已验证",learning:"学习中",unverified:"未诊断",needs_review:"需复习"},tg={mastered:"badge-mastered",verified:"badge-verified",learning:"badge-learning",unverified:"badge-unverified",needs_review:"badge-needs-review"};function ng({onSelectKp:e}){const{records:t,diagnosticHistory:n}=He(),r=zt.length,i=t.filter(g=>g.status==="mastered").length,o=t.filter(g=>g.status==="verified").length,a=t.filter(g=>g.status==="learning").length,s=t.filter(g=>g.status==="needs_review").length,l=r-i-o-a-s,u=He(g=>g.getStatus),v=qc();return d.jsxs("div",{children:[d.jsx("div",{className:"card",children:d.jsx("h2",{children:"学习进度总览"})}),d.jsxs("div",{className:"progress-summary",children:[d.jsxs("div",{className:"stat-card",children:[d.jsx("div",{className:"stat-num",children:i}),d.jsx("div",{className:"stat-label",children:"已掌握"})]}),d.jsxs("div",{className:"stat-card",children:[d.jsx("div",{className:"stat-num",children:o}),d.jsx("div",{className:"stat-label",children:"已验证"})]}),d.jsxs("div",{className:"stat-card",children:[d.jsx("div",{className:"stat-num",children:a}),d.jsx("div",{className:"stat-label",children:"学习中"})]}),d.jsxs("div",{className:"stat-card",children:[d.jsx("div",{className:"stat-num",children:l}),d.jsx("div",{className:"stat-label",children:"未诊断"})]}),s>0&&d.jsxs("div",{className:"stat-card",style:{borderColor:"#fda4af"},children:[d.jsx("div",{className:"stat-num",style:{color:"#9f1239"},children:s}),d.jsx("div",{className:"stat-label",children:"需复习"})]})]}),d.jsxs("div",{className:"card",children:[d.jsxs("div",{style:{height:12,borderRadius:6,background:"var(--border)",display:"flex",overflow:"hidden",marginBottom:16},children:[i>0&&d.jsx("div",{style:{width:`${i/r*100}%`,background:"var(--success)",transition:"width .5s"}}),o>0&&d.jsx("div",{style:{width:`${o/r*100}%`,background:"var(--primary)",transition:"width .5s"}}),a>0&&d.jsx("div",{style:{width:`${a/r*100}%`,background:"var(--warning)",transition:"width .5s"}})]}),d.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:12,color:"var(--text-secondary)"},children:[d.jsxs("span",{children:["总计 ",r," 个知识点"]}),d.jsxs("span",{children:["完成率 ",Math.round((i+o)/r*100),"%"]})]})]}),v.map(g=>d.jsxs("div",{className:"card",style:{marginBottom:12},children:[d.jsx("h3",{style:{fontSize:14,marginBottom:12},children:g}),d.jsx("div",{className:"progress-list",children:zt.filter(p=>p.unit===g).map(p=>{const y=u(p.id);return d.jsxs("div",{className:"progress-row",onClick:()=>e(p),children:[d.jsx("span",{className:"kp-name",children:p.name}),d.jsx("span",{className:`badge ${tg[y]||"badge-unverified"}`,children:eg[y]||"未诊断"})]},p.id)})})]},g)),n.length>0&&d.jsxs("div",{className:"card",children:[d.jsx("h3",{style:{fontSize:14,marginBottom:12},children:"最近诊断记录"}),n.slice(-5).reverse().map(g=>{const p=zt.find(h=>h.id===g.knowledgePointId),y=g.questions.filter(h=>h.isCorrect).length;return d.jsxs("div",{style:{padding:"8px 12px",marginBottom:4,borderRadius:6,background:"var(--bg)",fontSize:13,display:"flex",justifyContent:"space-between"},children:[d.jsx("span",{children:(p==null?void 0:p.name)||g.knowledgePointId}),d.jsxs("span",{style:{color:"var(--text-secondary)"},children:[y,"/3 正确 · ",new Date(g.date).toLocaleDateString("zh-CN")]})]},g.id)})]}),n.length===0&&d.jsx("div",{className:"empty-state",children:d.jsx("p",{children:"还没有任何诊断记录。"})})]})}function rg(){const{currentStudent:e,initDemo:t}=Fc(),[n,r]=J.useState("dashboard"),[i,o]=J.useState(null);return e?d.jsxs("div",{className:"app",children:[d.jsxs("header",{className:"app-header",children:[d.jsxs("div",{className:"header-left",onClick:()=>{r("dashboard"),o(null)},children:[d.jsx("span",{className:"logo",children:"SkillForge"}),d.jsx("span",{className:"student-name",children:e.name})]}),d.jsxs("nav",{className:"header-nav",children:[d.jsx("button",{className:n==="dashboard"?"active":"",onClick:()=>{r("dashboard"),o(null)},children:"知识地图"}),d.jsx("button",{className:n==="progress"?"active":"",onClick:()=>{r("progress"),o(null)},children:"学习进度"})]})]}),d.jsxs("main",{className:"app-main",children:[n==="dashboard"&&d.jsx(pm,{onStartDiagnostic:a=>{o(a),r("diagnostic")}}),n==="diagnostic"&&i&&d.jsx(wm,{kp:i,onComplete:a=>{r(a==="teaching"?"teaching":"dashboard")},onBack:()=>{r("dashboard"),o(null)}}),n==="teaching"&&i&&d.jsx(Jm,{kp:i,onComplete:()=>{r("dashboard"),o(null)},onBack:()=>{r("dashboard"),o(null)}}),n==="progress"&&d.jsx(ng,{onSelectKp:a=>{o(a),r("diagnostic")}})]})]}):d.jsx("div",{className:"welcome-screen",children:d.jsxs("div",{className:"welcome-card",children:[d.jsx("h1",{children:"SkillForge"}),d.jsx("p",{className:"subtitle",children:"AI 自适应学习引擎 · 人教版七年级数学"}),d.jsx("p",{className:"desc",children:'基于费曼"反自欺"原则设计：不假装学会，不放过漏洞。'}),d.jsx("button",{className:"btn-primary",onClick:t,children:"开始演示"})]})})}lo.createRoot(document.getElementById("root")).render(d.jsx(zl.StrictMode,{children:d.jsx(rg,{})}));
