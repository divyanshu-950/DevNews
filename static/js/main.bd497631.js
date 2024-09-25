/*! For license information please see main.bd497631.js.LICENSE.txt */
(()=>{"use strict";var e={219:(e,t,n)=>{var r=n(763),a={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},l={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},i={};function s(e){return r.isMemo(e)?l:i[e.$$typeof]||a}i[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},i[r.Memo]=l;var u=Object.defineProperty,c=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,m=Object.prototype;e.exports=function e(t,n,r){if("string"!==typeof n){if(m){var a=p(n);a&&a!==m&&e(t,a,r)}var l=c(n);f&&(l=l.concat(f(n)));for(var i=s(t),h=s(n),g=0;g<l.length;++g){var v=l[g];if(!o[v]&&(!r||!r[v])&&(!h||!h[v])&&(!i||!i[v])){var y=d(n,v);try{u(t,v,y)}catch(b){}}}}return t}},983:(e,t)=>{var n="function"===typeof Symbol&&Symbol.for,r=n?Symbol.for("react.element"):60103,a=n?Symbol.for("react.portal"):60106,o=n?Symbol.for("react.fragment"):60107,l=n?Symbol.for("react.strict_mode"):60108,i=n?Symbol.for("react.profiler"):60114,s=n?Symbol.for("react.provider"):60109,u=n?Symbol.for("react.context"):60110,c=n?Symbol.for("react.async_mode"):60111,f=n?Symbol.for("react.concurrent_mode"):60111,d=n?Symbol.for("react.forward_ref"):60112,p=n?Symbol.for("react.suspense"):60113,m=n?Symbol.for("react.suspense_list"):60120,h=n?Symbol.for("react.memo"):60115,g=n?Symbol.for("react.lazy"):60116,v=n?Symbol.for("react.block"):60121,y=n?Symbol.for("react.fundamental"):60117,b=n?Symbol.for("react.responder"):60118,w=n?Symbol.for("react.scope"):60119;function k(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case c:case f:case o:case i:case l:case p:return e;default:switch(e=e&&e.$$typeof){case u:case d:case g:case h:case s:return e;default:return t}}case a:return t}}}function x(e){return k(e)===f}t.AsyncMode=c,t.ConcurrentMode=f,t.ContextConsumer=u,t.ContextProvider=s,t.Element=r,t.ForwardRef=d,t.Fragment=o,t.Lazy=g,t.Memo=h,t.Portal=a,t.Profiler=i,t.StrictMode=l,t.Suspense=p,t.isAsyncMode=function(e){return x(e)||k(e)===c},t.isConcurrentMode=x,t.isContextConsumer=function(e){return k(e)===u},t.isContextProvider=function(e){return k(e)===s},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return k(e)===d},t.isFragment=function(e){return k(e)===o},t.isLazy=function(e){return k(e)===g},t.isMemo=function(e){return k(e)===h},t.isPortal=function(e){return k(e)===a},t.isProfiler=function(e){return k(e)===i},t.isStrictMode=function(e){return k(e)===l},t.isSuspense=function(e){return k(e)===p},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===o||e===f||e===i||e===l||e===p||e===m||"object"===typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===h||e.$$typeof===s||e.$$typeof===u||e.$$typeof===d||e.$$typeof===y||e.$$typeof===b||e.$$typeof===w||e.$$typeof===v)},t.typeOf=k},763:(e,t,n)=>{e.exports=n(983)},479:(e,t)=>{var n,r=Symbol.for("react.element"),a=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),u=Symbol.for("react.context"),c=Symbol.for("react.server_context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),m=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),g=Symbol.for("react.offscreen");function v(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case o:case i:case l:case d:case p:return e;default:switch(e=e&&e.$$typeof){case c:case u:case f:case h:case m:case s:return e;default:return t}}case a:return t}}}n=Symbol.for("react.module.reference"),t.isFragment=function(e){return v(e)===o}},163:(e,t,n)=>{e.exports=n(479)},730:(e,t,n)=>{var r=n(43),a=n(853);function o(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var l=new Set,i={};function s(e,t){u(e,t),u(e+"Capture",t)}function u(e,t){for(i[e]=t,e=0;e<t.length;e++)l.add(t[e])}var c=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),f=Object.prototype.hasOwnProperty,d=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},m={};function h(e,t,n,r,a,o,l){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){g[e]=new h(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];g[t]=new h(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){g[e]=new h(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){g[e]=new h(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){g[e]=new h(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){g[e]=new h(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){g[e]=new h(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){g[e]=new h(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){g[e]=new h(e,5,!1,e.toLowerCase(),null,!1,!1)}));var v=/[\-:]([a-z])/g;function y(e){return e[1].toUpperCase()}function b(e,t,n,r){var a=g.hasOwnProperty(t)?g[t]:null;(null!==a?0!==a.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null===t||"undefined"===typeof t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,a,r)&&(n=null),r||null===a?function(e){return!!f.call(m,e)||!f.call(p,e)&&(d.test(e)?m[e]=!0:(p[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=null===n?3!==a.type&&"":n:(t=a.attributeName,r=a.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(a=a.type)||4===a&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(v,y);g[t]=new h(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(v,y);g[t]=new h(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(v,y);g[t]=new h(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){g[e]=new h(e,1,!1,e.toLowerCase(),null,!1,!1)})),g.xlinkHref=new h("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){g[e]=new h(e,1,!1,e.toLowerCase(),null,!0,!0)}));var w=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,k=Symbol.for("react.element"),x=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),N=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),T=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),R=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var L=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var j=Symbol.iterator;function M(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=j&&e[j]||e["@@iterator"])?e:null}var F,I=Object.assign;function D(e){if(void 0===F)try{throw Error()}catch(dr){var t=dr.stack.trim().match(/\n( *(at )?)/);F=t&&t[1]||""}return"\n"+F+e}var $=!1;function U(e,t){if(!e||$)return"";$=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(pr){var r=pr}Reflect.construct(e,[],t)}else{try{t.call()}catch(pr){r=pr}e.call(t.prototype)}else{try{throw Error()}catch(pr){r=pr}e()}}catch(pr){if(pr&&r&&"string"===typeof pr.stack){for(var a=pr.stack.split("\n"),o=r.stack.split("\n"),l=a.length-1,i=o.length-1;1<=l&&0<=i&&a[l]!==o[i];)i--;for(;1<=l&&0<=i;l--,i--)if(a[l]!==o[i]){if(1!==l||1!==i)do{if(l--,0>--i||a[l]!==o[i]){var s="\n"+a[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}}while(1<=l&&0<=i);break}}}finally{$=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?D(e):""}function A(e){switch(e.tag){case 5:return D(e.type);case 16:return D("Lazy");case 13:return D("Suspense");case 19:return D("SuspenseList");case 0:case 2:case 15:return e=U(e.type,!1);case 11:return e=U(e.type.render,!1);case 1:return e=U(e.type,!0);default:return""}}function V(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case S:return"Fragment";case x:return"Portal";case C:return"Profiler";case E:return"StrictMode";case z:return"Suspense";case T:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case N:return(e.displayName||"Context")+".Consumer";case _:return(e._context.displayName||"Context")+".Provider";case P:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case O:return null!==(t=e.displayName||null)?t:V(e.type)||"Memo";case R:t=e._payload,e=e._init;try{return V(e(t))}catch(dr){}}return null}function B(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return V(t);case 8:return t===E?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof t)return t.displayName||t.name||null;if("string"===typeof t)return t}return null}function W(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function H(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function Q(e){e._valueTracker||(e._valueTracker=function(e){var t=H(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var a=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(e){r=""+e,o.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function Y(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=H(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function X(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function q(e,t){var n=t.checked;return I({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function K(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=W(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function G(e,t){null!=(t=t.checked)&&b(e,"checked",t,!1)}function J(e,t){G(e,t);var n=W(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,n):t.hasOwnProperty("defaultValue")&&ee(e,t.type,W(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function Z(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function ee(e,t,n){"number"===t&&X(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var te=Array.isArray;function ne(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+W(n),t=null,a=0;a<e.length;a++){if(e[a].value===n)return e[a].selected=!0,void(r&&(e[a].defaultSelected=!0));null!==t||e[a].disabled||(t=e[a])}null!==t&&(t.selected=!0)}}function re(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(o(91));return I({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ae(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(o(92));if(te(n)){if(1<n.length)throw Error(o(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:W(n)}}function oe(e,t){var n=W(t.value),r=W(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function le(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function ie(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function se(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?ie(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ue,ce,fe=(ce=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ue=ue||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ue.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction((function(){return ce(e,t)}))}:ce);function de(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var pe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},me=["Webkit","ms","Moz","O"];function he(e,t,n){return null==t||"boolean"===typeof t||""===t?"":n||"number"!==typeof t||0===t||pe.hasOwnProperty(e)&&pe[e]?(""+t).trim():t+"px"}function ge(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),a=he(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}Object.keys(pe).forEach((function(e){me.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),pe[t]=pe[e]}))}));var ve=I({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ye(e,t){if(t){if(ve[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(o(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(o(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(o(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(o(62))}}function be(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var we=null;function ke(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var xe=null,Se=null,Ee=null;function Ce(e){if(e=ka(e)){if("function"!==typeof xe)throw Error(o(280));var t=e.stateNode;t&&(t=Sa(t),xe(e.stateNode,e.type,t))}}function _e(e){Se?Ee?Ee.push(e):Ee=[e]:Se=e}function Ne(){if(Se){var e=Se,t=Ee;if(Ee=Se=null,Ce(e),t)for(e=0;e<t.length;e++)Ce(t[e])}}function Pe(e,t){return e(t)}function ze(){}var Te=!1;function Oe(e,t,n){if(Te)return e(t,n);Te=!0;try{return Pe(e,t,n)}finally{Te=!1,(null!==Se||null!==Ee)&&(ze(),Ne())}}function Re(e,t){var n=e.stateNode;if(null===n)return null;var r=Sa(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(o(231,t,typeof n));return n}var Le=!1;if(c)try{var je={};Object.defineProperty(je,"passive",{get:function(){Le=!0}}),window.addEventListener("test",je,je),window.removeEventListener("test",je,je)}catch(ce){Le=!1}function Me(e,t,n,r,a,o,l,i,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Fe=!1,Ie=null,De=!1,$e=null,Ue={onError:function(e){Fe=!0,Ie=e}};function Ae(e,t,n,r,a,o,l,i,s){Fe=!1,Ie=null,Me.apply(Ue,arguments)}function Ve(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function Be(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function We(e){if(Ve(e)!==e)throw Error(o(188))}function He(e){return e=function(e){var t=e.alternate;if(!t){if(null===(t=Ve(e)))throw Error(o(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(null===a)break;var l=a.alternate;if(null===l){if(null!==(r=a.return)){n=r;continue}break}if(a.child===l.child){for(l=a.child;l;){if(l===n)return We(a),e;if(l===r)return We(a),t;l=l.sibling}throw Error(o(188))}if(n.return!==r.return)n=a,r=l;else{for(var i=!1,s=a.child;s;){if(s===n){i=!0,n=a,r=l;break}if(s===r){i=!0,r=a,n=l;break}s=s.sibling}if(!i){for(s=l.child;s;){if(s===n){i=!0,n=l,r=a;break}if(s===r){i=!0,r=l,n=a;break}s=s.sibling}if(!i)throw Error(o(189))}}if(n.alternate!==r)throw Error(o(190))}if(3!==n.tag)throw Error(o(188));return n.stateNode.current===n?e:t}(e),null!==e?Qe(e):null}function Qe(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=Qe(e);if(null!==t)return t;e=e.sibling}return null}var Ye=a.unstable_scheduleCallback,Xe=a.unstable_cancelCallback,qe=a.unstable_shouldYield,Ke=a.unstable_requestPaint,Ge=a.unstable_now,Je=a.unstable_getCurrentPriorityLevel,Ze=a.unstable_ImmediatePriority,et=a.unstable_UserBlockingPriority,tt=a.unstable_NormalPriority,nt=a.unstable_LowPriority,rt=a.unstable_IdlePriority,at=null,ot=null;var lt=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(it(e)/st|0)|0},it=Math.log,st=Math.LN2;var ut=64,ct=4194304;function ft(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function dt(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,a=e.suspendedLanes,o=e.pingedLanes,l=268435455&n;if(0!==l){var i=l&~a;0!==i?r=ft(i):0!==(o&=l)&&(r=ft(o))}else 0!==(l=n&~a)?r=ft(l):0!==o&&(r=ft(o));if(0===r)return 0;if(0!==t&&t!==r&&0===(t&a)&&((a=r&-r)>=(o=t&-t)||16===a&&0!==(4194240&o)))return t;if(0!==(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)a=1<<(n=31-lt(t)),r|=e[n],t&=~a;return r}function pt(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function mt(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function ht(){var e=ut;return 0===(4194240&(ut<<=1))&&(ut=64),e}function gt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function vt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-lt(t)]=n}function yt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-lt(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var bt=0;function wt(e){return 1<(e&=-e)?4<e?0!==(268435455&e)?16:536870912:4:1}var kt,xt,St,Et,Ct,_t=!1,Nt=[],Pt=null,zt=null,Tt=null,Ot=new Map,Rt=new Map,Lt=[],jt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Mt(e,t){switch(e){case"focusin":case"focusout":Pt=null;break;case"dragenter":case"dragleave":zt=null;break;case"mouseover":case"mouseout":Tt=null;break;case"pointerover":case"pointerout":Ot.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rt.delete(t.pointerId)}}function Ft(e,t,n,r,a,o){return null===e||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[a]},null!==t&&(null!==(t=ka(t))&&xt(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==a&&-1===t.indexOf(a)&&t.push(a),e)}function It(e){var t=wa(e.target);if(null!==t){var n=Ve(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=Be(n)))return e.blockedOn=t,void Ct(e.priority,(function(){St(n)}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Dt(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=qt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=ka(n))&&xt(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);we=r,n.target.dispatchEvent(r),we=null,t.shift()}return!0}function $t(e,t,n){Dt(e)&&n.delete(t)}function Ut(){_t=!1,null!==Pt&&Dt(Pt)&&(Pt=null),null!==zt&&Dt(zt)&&(zt=null),null!==Tt&&Dt(Tt)&&(Tt=null),Ot.forEach($t),Rt.forEach($t)}function At(e,t){e.blockedOn===t&&(e.blockedOn=null,_t||(_t=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Ut)))}function Vt(e){function t(t){return At(t,e)}if(0<Nt.length){At(Nt[0],e);for(var n=1;n<Nt.length;n++){var r=Nt[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==Pt&&At(Pt,e),null!==zt&&At(zt,e),null!==Tt&&At(Tt,e),Ot.forEach(t),Rt.forEach(t),n=0;n<Lt.length;n++)(r=Lt[n]).blockedOn===e&&(r.blockedOn=null);for(;0<Lt.length&&null===(n=Lt[0]).blockedOn;)It(n),null===n.blockedOn&&Lt.shift()}var Bt=w.ReactCurrentBatchConfig,Wt=!0;function Ht(e,t,n,r){var a=bt,o=Bt.transition;Bt.transition=null;try{bt=1,Yt(e,t,n,r)}finally{bt=a,Bt.transition=o}}function Qt(e,t,n,r){var a=bt,o=Bt.transition;Bt.transition=null;try{bt=4,Yt(e,t,n,r)}finally{bt=a,Bt.transition=o}}function Yt(e,t,n,r){if(Wt){var a=qt(e,t,n,r);if(null===a)Qr(e,t,r,Xt,n),Mt(e,r);else if(function(e,t,n,r,a){switch(t){case"focusin":return Pt=Ft(Pt,e,t,n,r,a),!0;case"dragenter":return zt=Ft(zt,e,t,n,r,a),!0;case"mouseover":return Tt=Ft(Tt,e,t,n,r,a),!0;case"pointerover":var o=a.pointerId;return Ot.set(o,Ft(Ot.get(o)||null,e,t,n,r,a)),!0;case"gotpointercapture":return o=a.pointerId,Rt.set(o,Ft(Rt.get(o)||null,e,t,n,r,a)),!0}return!1}(a,e,t,n,r))r.stopPropagation();else if(Mt(e,r),4&t&&-1<jt.indexOf(e)){for(;null!==a;){var o=ka(a);if(null!==o&&kt(o),null===(o=qt(e,t,n,r))&&Qr(e,t,r,Xt,n),o===a)break;a=o}null!==a&&r.stopPropagation()}else Qr(e,t,r,null,n)}}var Xt=null;function qt(e,t,n,r){if(Xt=null,null!==(e=wa(e=ke(r))))if(null===(t=Ve(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=Be(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Xt=e,null}function Kt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Je()){case Ze:return 1;case et:return 4;case tt:case nt:return 16;case rt:return 536870912;default:return 16}default:return 16}}var Gt=null,Jt=null,Zt=null;function en(){if(Zt)return Zt;var e,t,n=Jt,r=n.length,a="value"in Gt?Gt.value:Gt.textContent,o=a.length;for(e=0;e<r&&n[e]===a[e];e++);var l=r-e;for(t=1;t<=l&&n[r-t]===a[o-t];t++);return Zt=a.slice(e,1<t?1-t:void 0)}function tn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function nn(){return!0}function rn(){return!1}function an(e){function t(t,n,r,a,o){for(var l in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=a,this.target=o,this.currentTarget=null,e)e.hasOwnProperty(l)&&(t=e[l],this[l]=t?t(a):a[l]);return this.isDefaultPrevented=(null!=a.defaultPrevented?a.defaultPrevented:!1===a.returnValue)?nn:rn,this.isPropagationStopped=rn,this}return I(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=nn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=nn)},persist:function(){},isPersistent:nn}),t}var on,ln,sn,un={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cn=an(un),fn=I({},un,{view:0,detail:0}),dn=an(fn),pn=I({},fn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sn&&(sn&&"mousemove"===e.type?(on=e.screenX-sn.screenX,ln=e.screenY-sn.screenY):ln=on=0,sn=e),on)},movementY:function(e){return"movementY"in e?e.movementY:ln}}),mn=an(pn),hn=an(I({},pn,{dataTransfer:0})),gn=an(I({},fn,{relatedTarget:0})),vn=an(I({},un,{animationName:0,elapsedTime:0,pseudoElement:0})),yn=I({},un,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),bn=an(yn),wn=an(I({},un,{data:0})),kn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function En(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=Sn[e])&&!!t[e]}function Cn(){return En}var _n=I({},fn,{key:function(e){if(e.key){var t=kn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=tn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?xn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cn,charCode:function(e){return"keypress"===e.type?tn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?tn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),Nn=an(_n),Pn=an(I({},pn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),zn=an(I({},fn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cn})),Tn=an(I({},un,{propertyName:0,elapsedTime:0,pseudoElement:0})),On=I({},pn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Rn=an(On),Ln=[9,13,27,32],jn=c&&"CompositionEvent"in window,Mn=null;c&&"documentMode"in document&&(Mn=document.documentMode);var Fn=c&&"TextEvent"in window&&!Mn,In=c&&(!jn||Mn&&8<Mn&&11>=Mn),Dn=String.fromCharCode(32),$n=!1;function Un(e,t){switch(e){case"keyup":return-1!==Ln.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function An(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Vn=!1;var Bn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Bn[e.type]:"textarea"===t}function Hn(e,t,n,r){_e(r),0<(t=Xr(t,"onChange")).length&&(n=new cn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Qn=null,Yn=null;function Xn(e){Ur(e,0)}function qn(e){if(Y(xa(e)))return e}function Kn(e,t){if("change"===e)return t}var Gn=!1;if(c){var Jn;if(c){var Zn="oninput"in document;if(!Zn){var er=document.createElement("div");er.setAttribute("oninput","return;"),Zn="function"===typeof er.oninput}Jn=Zn}else Jn=!1;Gn=Jn&&(!document.documentMode||9<document.documentMode)}function tr(){Qn&&(Qn.detachEvent("onpropertychange",nr),Yn=Qn=null)}function nr(e){if("value"===e.propertyName&&qn(Yn)){var t=[];Hn(t,Yn,e,ke(e)),Oe(Xn,t)}}function rr(e,t,n){"focusin"===e?(tr(),Yn=n,(Qn=t).attachEvent("onpropertychange",nr)):"focusout"===e&&tr()}function ar(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return qn(Yn)}function or(e,t){if("click"===e)return qn(t)}function lr(e,t){if("input"===e||"change"===e)return qn(t)}var ir="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function sr(e,t){if(ir(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!f.call(t,a)||!ir(e[a],t[a]))return!1}return!0}function ur(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cr(e,t){var n,r=ur(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=ur(r)}}function fr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?fr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function mr(){for(var e=window,t=X();t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=X((e=t.contentWindow).document)}return t}function hr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function gr(e){var t=mr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&fr(n.ownerDocument.documentElement,n)){if(null!==r&&hr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var a=n.textContent.length,o=Math.min(r.start,a);r=void 0===r.end?o:Math.min(r.end,a),!e.extend&&o>r&&(a=r,r=o,o=a),a=cr(n,o);var l=cr(n,r);a&&l&&(1!==e.rangeCount||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&((t=t.createRange()).setStart(a.node,a.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"===typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var vr=c&&"documentMode"in document&&11>=document.documentMode,yr=null,br=null,wr=null,kr=!1;function xr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;kr||null==yr||yr!==X(r)||("selectionStart"in(r=yr)&&hr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},wr&&sr(wr,r)||(wr=r,0<(r=Xr(br,"onSelect")).length&&(t=new cn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=yr)))}function Sr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Er={animationend:Sr("Animation","AnimationEnd"),animationiteration:Sr("Animation","AnimationIteration"),animationstart:Sr("Animation","AnimationStart"),transitionend:Sr("Transition","TransitionEnd")},Cr={},_r={};function Nr(e){if(Cr[e])return Cr[e];if(!Er[e])return e;var t,n=Er[e];for(t in n)if(n.hasOwnProperty(t)&&t in _r)return Cr[e]=n[t];return e}c&&(_r=document.createElement("div").style,"AnimationEvent"in window||(delete Er.animationend.animation,delete Er.animationiteration.animation,delete Er.animationstart.animation),"TransitionEvent"in window||delete Er.transitionend.transition);var Pr=Nr("animationend"),zr=Nr("animationiteration"),Tr=Nr("animationstart"),Or=Nr("transitionend"),Rr=new Map,Lr="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jr(e,t){Rr.set(e,t),s(t,[e])}for(var Mr=0;Mr<Lr.length;Mr++){var Fr=Lr[Mr];jr(Fr.toLowerCase(),"on"+(Fr[0].toUpperCase()+Fr.slice(1)))}jr(Pr,"onAnimationEnd"),jr(zr,"onAnimationIteration"),jr(Tr,"onAnimationStart"),jr("dblclick","onDoubleClick"),jr("focusin","onFocus"),jr("focusout","onBlur"),jr(Or,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),s("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),s("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),s("onBeforeInput",["compositionend","keypress","textInput","paste"]),s("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ir="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dr=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ir));function $r(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,a,l,i,s,u){if(Ae.apply(this,arguments),Fe){if(!Fe)throw Error(o(198));var c=Ie;Fe=!1,Ie=null,De||(De=!0,$e=c)}}(r,t,void 0,e),e.currentTarget=null}function Ur(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var i=r[l],s=i.instance,u=i.currentTarget;if(i=i.listener,s!==o&&a.isPropagationStopped())break e;$r(a,i,u),o=s}else for(l=0;l<r.length;l++){if(s=(i=r[l]).instance,u=i.currentTarget,i=i.listener,s!==o&&a.isPropagationStopped())break e;$r(a,i,u),o=s}}}if(De)throw e=$e,De=!1,$e=null,e}function Ar(e,t){var n=t[va];void 0===n&&(n=t[va]=new Set);var r=e+"__bubble";n.has(r)||(Hr(t,e,2,!1),n.add(r))}function Vr(e,t,n){var r=0;t&&(r|=4),Hr(n,e,r,t)}var Br="_reactListening"+Math.random().toString(36).slice(2);function Wr(e){if(!e[Br]){e[Br]=!0,l.forEach((function(t){"selectionchange"!==t&&(Dr.has(t)||Vr(t,!1,e),Vr(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Br]||(t[Br]=!0,Vr("selectionchange",!1,t))}}function Hr(e,t,n,r){switch(Kt(t)){case 1:var a=Ht;break;case 4:a=Qt;break;default:a=Yt}n=a.bind(null,t,n,e),a=void 0,!Le||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(a=!0),r?void 0!==a?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):void 0!==a?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Qr(e,t,n,r,a){var o=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var l=r.tag;if(3===l||4===l){var i=r.stateNode.containerInfo;if(i===a||8===i.nodeType&&i.parentNode===a)break;if(4===l)for(l=r.return;null!==l;){var s=l.tag;if((3===s||4===s)&&((s=l.stateNode.containerInfo)===a||8===s.nodeType&&s.parentNode===a))return;l=l.return}for(;null!==i;){if(null===(l=wa(i)))return;if(5===(s=l.tag)||6===s){r=o=l;continue e}i=i.parentNode}}r=r.return}Oe((function(){var r=o,a=ke(n),l=[];e:{var i=Rr.get(e);if(void 0!==i){var s=cn,u=e;switch(e){case"keypress":if(0===tn(n))break e;case"keydown":case"keyup":s=Nn;break;case"focusin":u="focus",s=gn;break;case"focusout":u="blur",s=gn;break;case"beforeblur":case"afterblur":s=gn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":s=mn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":s=hn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":s=zn;break;case Pr:case zr:case Tr:s=vn;break;case Or:s=Tn;break;case"scroll":s=dn;break;case"wheel":s=Rn;break;case"copy":case"cut":case"paste":s=bn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":s=Pn}var c=0!==(4&t),f=!c&&"scroll"===e,d=c?null!==i?i+"Capture":null:i;c=[];for(var p,m=r;null!==m;){var h=(p=m).stateNode;if(5===p.tag&&null!==h&&(p=h,null!==d&&(null!=(h=Re(m,d))&&c.push(Yr(m,h,p)))),f)break;m=m.return}0<c.length&&(i=new s(i,u,null,n,a),l.push({event:i,listeners:c}))}}if(0===(7&t)){if(s="mouseout"===e||"pointerout"===e,(!(i="mouseover"===e||"pointerover"===e)||n===we||!(u=n.relatedTarget||n.fromElement)||!wa(u)&&!u[ga])&&(s||i)&&(i=a.window===a?a:(i=a.ownerDocument)?i.defaultView||i.parentWindow:window,s?(s=r,null!==(u=(u=n.relatedTarget||n.toElement)?wa(u):null)&&(u!==(f=Ve(u))||5!==u.tag&&6!==u.tag)&&(u=null)):(s=null,u=r),s!==u)){if(c=mn,h="onMouseLeave",d="onMouseEnter",m="mouse","pointerout"!==e&&"pointerover"!==e||(c=Pn,h="onPointerLeave",d="onPointerEnter",m="pointer"),f=null==s?i:xa(s),p=null==u?i:xa(u),(i=new c(h,m+"leave",s,n,a)).target=f,i.relatedTarget=p,h=null,wa(a)===r&&((c=new c(d,m+"enter",u,n,a)).target=p,c.relatedTarget=f,h=c),f=h,s&&u)e:{for(d=u,m=0,p=c=s;p;p=qr(p))m++;for(p=0,h=d;h;h=qr(h))p++;for(;0<m-p;)c=qr(c),m--;for(;0<p-m;)d=qr(d),p--;for(;m--;){if(c===d||null!==d&&c===d.alternate)break e;c=qr(c),d=qr(d)}c=null}else c=null;null!==s&&Kr(l,i,s,c,!1),null!==u&&null!==f&&Kr(l,f,u,c,!0)}if("select"===(s=(i=r?xa(r):window).nodeName&&i.nodeName.toLowerCase())||"input"===s&&"file"===i.type)var g=Kn;else if(Wn(i))if(Gn)g=lr;else{g=ar;var v=rr}else(s=i.nodeName)&&"input"===s.toLowerCase()&&("checkbox"===i.type||"radio"===i.type)&&(g=or);switch(g&&(g=g(e,r))?Hn(l,g,n,a):(v&&v(e,i,r),"focusout"===e&&(v=i._wrapperState)&&v.controlled&&"number"===i.type&&ee(i,"number",i.value)),v=r?xa(r):window,e){case"focusin":(Wn(v)||"true"===v.contentEditable)&&(yr=v,br=r,wr=null);break;case"focusout":wr=br=yr=null;break;case"mousedown":kr=!0;break;case"contextmenu":case"mouseup":case"dragend":kr=!1,xr(l,n,a);break;case"selectionchange":if(vr)break;case"keydown":case"keyup":xr(l,n,a)}var y;if(jn)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Vn?Un(e,n)&&(b="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(b="onCompositionStart");b&&(In&&"ko"!==n.locale&&(Vn||"onCompositionStart"!==b?"onCompositionEnd"===b&&Vn&&(y=en()):(Jt="value"in(Gt=a)?Gt.value:Gt.textContent,Vn=!0)),0<(v=Xr(r,b)).length&&(b=new wn(b,e,null,n,a),l.push({event:b,listeners:v}),y?b.data=y:null!==(y=An(n))&&(b.data=y))),(y=Fn?function(e,t){switch(e){case"compositionend":return An(t);case"keypress":return 32!==t.which?null:($n=!0,Dn);case"textInput":return(e=t.data)===Dn&&$n?null:e;default:return null}}(e,n):function(e,t){if(Vn)return"compositionend"===e||!jn&&Un(e,t)?(e=en(),Zt=Jt=Gt=null,Vn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return In&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=Xr(r,"onBeforeInput")).length&&(a=new wn("onBeforeInput","beforeinput",null,n,a),l.push({event:a,listeners:r}),a.data=y))}Ur(l,t)}))}function Yr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Xr(e,t){for(var n=t+"Capture",r=[];null!==e;){var a=e,o=a.stateNode;5===a.tag&&null!==o&&(a=o,null!=(o=Re(e,n))&&r.unshift(Yr(e,o,a)),null!=(o=Re(e,t))&&r.push(Yr(e,o,a))),e=e.return}return r}function qr(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Kr(e,t,n,r,a){for(var o=t._reactName,l=[];null!==n&&n!==r;){var i=n,s=i.alternate,u=i.stateNode;if(null!==s&&s===r)break;5===i.tag&&null!==u&&(i=u,a?null!=(s=Re(n,o))&&l.unshift(Yr(n,s,i)):a||null!=(s=Re(n,o))&&l.push(Yr(n,s,i))),n=n.return}0!==l.length&&e.push({event:t,listeners:l})}var Gr=/\r\n?/g,Jr=/\u0000|\uFFFD/g;function Zr(e){return("string"===typeof e?e:""+e).replace(Gr,"\n").replace(Jr,"")}function ea(e,t,n){if(t=Zr(t),Zr(e)!==t&&n)throw Error(o(425))}function ta(){}var na=null,ra=null;function aa(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var oa="function"===typeof setTimeout?setTimeout:void 0,la="function"===typeof clearTimeout?clearTimeout:void 0,ia="function"===typeof Promise?Promise:void 0,sa="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof ia?function(e){return ia.resolve(null).then(e).catch(ua)}:oa;function ua(e){setTimeout((function(){throw e}))}function ca(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&8===a.nodeType)if("/$"===(n=a.data)){if(0===r)return e.removeChild(a),void Vt(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=a}while(n);Vt(t)}function fa(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function da(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var pa=Math.random().toString(36).slice(2),ma="__reactFiber$"+pa,ha="__reactProps$"+pa,ga="__reactContainer$"+pa,va="__reactEvents$"+pa,ya="__reactListeners$"+pa,ba="__reactHandles$"+pa;function wa(e){var t=e[ma];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ga]||n[ma]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=da(e);null!==e;){if(n=e[ma])return n;e=da(e)}return t}n=(e=n).parentNode}return null}function ka(e){return!(e=e[ma]||e[ga])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function xa(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(o(33))}function Sa(e){return e[ha]||null}var Ea=[],Ca=-1;function _a(e){return{current:e}}function Na(e){0>Ca||(e.current=Ea[Ca],Ea[Ca]=null,Ca--)}function Pa(e,t){Ca++,Ea[Ca]=e.current,e.current=t}var za={},Ta=_a(za),Oa=_a(!1),Ra=za;function La(e,t){var n=e.type.contextTypes;if(!n)return za;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a,o={};for(a in n)o[a]=t[a];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function ja(e){return null!==(e=e.childContextTypes)&&void 0!==e}function Ma(){Na(Oa),Na(Ta)}function Fa(e,t,n){if(Ta.current!==za)throw Error(o(168));Pa(Ta,t),Pa(Oa,n)}function Ia(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!==typeof r.getChildContext)return n;for(var a in r=r.getChildContext())if(!(a in t))throw Error(o(108,B(e)||"Unknown",a));return I({},n,r)}function Da(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||za,Ra=Ta.current,Pa(Ta,e),Pa(Oa,Oa.current),!0}function $a(e,t,n){var r=e.stateNode;if(!r)throw Error(o(169));n?(e=Ia(e,t,Ra),r.__reactInternalMemoizedMergedChildContext=e,Na(Oa),Na(Ta),Pa(Ta,e)):Na(Oa),Pa(Oa,n)}var Ua=null,Aa=!1,Va=!1;function Ba(e){null===Ua?Ua=[e]:Ua.push(e)}function Wa(){if(!Va&&null!==Ua){Va=!0;var e=0,t=bt;try{var n=Ua;for(bt=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Ua=null,Aa=!1}catch(a){throw null!==Ua&&(Ua=Ua.slice(e+1)),Ye(Ze,Wa),a}finally{bt=t,Va=!1}}return null}var Ha=[],Qa=0,Ya=null,Xa=0,qa=[],Ka=0,Ga=null,Ja=1,Za="";function eo(e,t){Ha[Qa++]=Xa,Ha[Qa++]=Ya,Ya=e,Xa=t}function to(e,t,n){qa[Ka++]=Ja,qa[Ka++]=Za,qa[Ka++]=Ga,Ga=e;var r=Ja;e=Za;var a=32-lt(r)-1;r&=~(1<<a),n+=1;var o=32-lt(t)+a;if(30<o){var l=a-a%5;o=(r&(1<<l)-1).toString(32),r>>=l,a-=l,Ja=1<<32-lt(t)+a|n<<a|r,Za=o+e}else Ja=1<<o|n<<a|r,Za=e}function no(e){null!==e.return&&(eo(e,1),to(e,1,0))}function ro(e){for(;e===Ya;)Ya=Ha[--Qa],Ha[Qa]=null,Xa=Ha[--Qa],Ha[Qa]=null;for(;e===Ga;)Ga=qa[--Ka],qa[Ka]=null,Za=qa[--Ka],qa[Ka]=null,Ja=qa[--Ka],qa[Ka]=null}var ao=null,oo=null,lo=!1,io=null;function so(e,t){var n=Lu(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function uo(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,ao=e,oo=fa(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,ao=e,oo=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==Ga?{id:Ja,overflow:Za}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Lu(18,null,null,0)).stateNode=t,n.return=e,e.child=n,ao=e,oo=null,!0);default:return!1}}function co(e){return 0!==(1&e.mode)&&0===(128&e.flags)}function fo(e){if(lo){var t=oo;if(t){var n=t;if(!uo(e,t)){if(co(e))throw Error(o(418));t=fa(n.nextSibling);var r=ao;t&&uo(e,t)?so(r,n):(e.flags=-4097&e.flags|2,lo=!1,ao=e)}}else{if(co(e))throw Error(o(418));e.flags=-4097&e.flags|2,lo=!1,ao=e}}}function po(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;ao=e}function mo(e){if(e!==ao)return!1;if(!lo)return po(e),lo=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!aa(e.type,e.memoizedProps)),t&&(t=oo)){if(co(e))throw ho(),Error(o(418));for(;t;)so(e,t),t=fa(t.nextSibling)}if(po(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){oo=fa(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}oo=null}}else oo=ao?fa(e.stateNode.nextSibling):null;return!0}function ho(){for(var e=oo;e;)e=fa(e.nextSibling)}function go(){oo=ao=null,lo=!1}function vo(e){null===io?io=[e]:io.push(e)}var yo=w.ReactCurrentBatchConfig;function bo(e,t,n){if(null!==(e=n.ref)&&"function"!==typeof e&&"object"!==typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(o(309));var r=n.stateNode}if(!r)throw Error(o(147,e));var a=r,l=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===l?t.ref:(t=function(e){var t=a.refs;null===e?delete t[l]:t[l]=e},t._stringRef=l,t)}if("string"!==typeof e)throw Error(o(284));if(!n._owner)throw Error(o(290,e))}return e}function wo(e,t){throw e=Object.prototype.toString.call(t),Error(o(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ko(e){return(0,e._init)(e._payload)}function xo(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function a(e,t){return(e=Mu(e,t)).index=0,e.sibling=null,e}function l(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function i(t){return e&&null===t.alternate&&(t.flags|=2),t}function s(e,t,n,r){return null===t||6!==t.tag?((t=$u(n,e.mode,r)).return=e,t):((t=a(t,n)).return=e,t)}function u(e,t,n,r){var o=n.type;return o===S?f(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===o||"object"===typeof o&&null!==o&&o.$$typeof===R&&ko(o)===t.type)?((r=a(t,n.props)).ref=bo(e,t,n),r.return=e,r):((r=Fu(n.type,n.key,n.props,null,e.mode,r)).ref=bo(e,t,n),r.return=e,r)}function c(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Uu(n,e.mode,r)).return=e,t):((t=a(t,n.children||[])).return=e,t)}function f(e,t,n,r,o){return null===t||7!==t.tag?((t=Iu(n,e.mode,r,o)).return=e,t):((t=a(t,n)).return=e,t)}function d(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t)return(t=$u(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case k:return(n=Fu(t.type,t.key,t.props,null,e.mode,n)).ref=bo(e,null,t),n.return=e,n;case x:return(t=Uu(t,e.mode,n)).return=e,t;case R:return d(e,(0,t._init)(t._payload),n)}if(te(t)||M(t))return(t=Iu(t,e.mode,n,null)).return=e,t;wo(e,t)}return null}function p(e,t,n,r){var a=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n)return null!==a?null:s(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case k:return n.key===a?u(e,t,n,r):null;case x:return n.key===a?c(e,t,n,r):null;case R:return p(e,t,(a=n._init)(n._payload),r)}if(te(n)||M(n))return null!==a?null:f(e,t,n,r,null);wo(e,n)}return null}function m(e,t,n,r,a){if("string"===typeof r&&""!==r||"number"===typeof r)return s(t,e=e.get(n)||null,""+r,a);if("object"===typeof r&&null!==r){switch(r.$$typeof){case k:return u(t,e=e.get(null===r.key?n:r.key)||null,r,a);case x:return c(t,e=e.get(null===r.key?n:r.key)||null,r,a);case R:return m(e,t,n,(0,r._init)(r._payload),a)}if(te(r)||M(r))return f(t,e=e.get(n)||null,r,a,null);wo(t,r)}return null}function h(a,o,i,s){for(var u=null,c=null,f=o,h=o=0,g=null;null!==f&&h<i.length;h++){f.index>h?(g=f,f=null):g=f.sibling;var v=p(a,f,i[h],s);if(null===v){null===f&&(f=g);break}e&&f&&null===v.alternate&&t(a,f),o=l(v,o,h),null===c?u=v:c.sibling=v,c=v,f=g}if(h===i.length)return n(a,f),lo&&eo(a,h),u;if(null===f){for(;h<i.length;h++)null!==(f=d(a,i[h],s))&&(o=l(f,o,h),null===c?u=f:c.sibling=f,c=f);return lo&&eo(a,h),u}for(f=r(a,f);h<i.length;h++)null!==(g=m(f,a,h,i[h],s))&&(e&&null!==g.alternate&&f.delete(null===g.key?h:g.key),o=l(g,o,h),null===c?u=g:c.sibling=g,c=g);return e&&f.forEach((function(e){return t(a,e)})),lo&&eo(a,h),u}function g(a,i,s,u){var c=M(s);if("function"!==typeof c)throw Error(o(150));if(null==(s=c.call(s)))throw Error(o(151));for(var f=c=null,h=i,g=i=0,v=null,y=s.next();null!==h&&!y.done;g++,y=s.next()){h.index>g?(v=h,h=null):v=h.sibling;var b=p(a,h,y.value,u);if(null===b){null===h&&(h=v);break}e&&h&&null===b.alternate&&t(a,h),i=l(b,i,g),null===f?c=b:f.sibling=b,f=b,h=v}if(y.done)return n(a,h),lo&&eo(a,g),c;if(null===h){for(;!y.done;g++,y=s.next())null!==(y=d(a,y.value,u))&&(i=l(y,i,g),null===f?c=y:f.sibling=y,f=y);return lo&&eo(a,g),c}for(h=r(a,h);!y.done;g++,y=s.next())null!==(y=m(h,a,g,y.value,u))&&(e&&null!==y.alternate&&h.delete(null===y.key?g:y.key),i=l(y,i,g),null===f?c=y:f.sibling=y,f=y);return e&&h.forEach((function(e){return t(a,e)})),lo&&eo(a,g),c}return function e(r,o,l,s){if("object"===typeof l&&null!==l&&l.type===S&&null===l.key&&(l=l.props.children),"object"===typeof l&&null!==l){switch(l.$$typeof){case k:e:{for(var u=l.key,c=o;null!==c;){if(c.key===u){if((u=l.type)===S){if(7===c.tag){n(r,c.sibling),(o=a(c,l.props.children)).return=r,r=o;break e}}else if(c.elementType===u||"object"===typeof u&&null!==u&&u.$$typeof===R&&ko(u)===c.type){n(r,c.sibling),(o=a(c,l.props)).ref=bo(r,c,l),o.return=r,r=o;break e}n(r,c);break}t(r,c),c=c.sibling}l.type===S?((o=Iu(l.props.children,r.mode,s,l.key)).return=r,r=o):((s=Fu(l.type,l.key,l.props,null,r.mode,s)).ref=bo(r,o,l),s.return=r,r=s)}return i(r);case x:e:{for(c=l.key;null!==o;){if(o.key===c){if(4===o.tag&&o.stateNode.containerInfo===l.containerInfo&&o.stateNode.implementation===l.implementation){n(r,o.sibling),(o=a(o,l.children||[])).return=r,r=o;break e}n(r,o);break}t(r,o),o=o.sibling}(o=Uu(l,r.mode,s)).return=r,r=o}return i(r);case R:return e(r,o,(c=l._init)(l._payload),s)}if(te(l))return h(r,o,l,s);if(M(l))return g(r,o,l,s);wo(r,l)}return"string"===typeof l&&""!==l||"number"===typeof l?(l=""+l,null!==o&&6===o.tag?(n(r,o.sibling),(o=a(o,l)).return=r,r=o):(n(r,o),(o=$u(l,r.mode,s)).return=r,r=o),i(r)):n(r,o)}}var So=xo(!0),Eo=xo(!1),Co=_a(null),_o=null,No=null,Po=null;function zo(){Po=No=_o=null}function To(e){var t=Co.current;Na(Co),e._currentValue=t}function Oo(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ro(e,t){_o=e,Po=No=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(ki=!0),e.firstContext=null)}function Lo(e){var t=e._currentValue;if(Po!==e)if(e={context:e,memoizedValue:t,next:null},null===No){if(null===_o)throw Error(o(308));No=e,_o.dependencies={lanes:0,firstContext:e}}else No=No.next=e;return t}var jo=null;function Mo(e){null===jo?jo=[e]:jo.push(e)}function Fo(e,t,n,r){var a=t.interleaved;return null===a?(n.next=n,Mo(t)):(n.next=a.next,a.next=n),t.interleaved=n,Io(e,r)}function Io(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Do=!1;function $o(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Uo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ao(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Vo(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&Ts)){var a=r.pending;return null===a?t.next=t:(t.next=a.next,a.next=t),r.pending=t,Io(e,n)}return null===(a=r.interleaved)?(t.next=t,Mo(r)):(t.next=a.next,a.next=t),r.interleaved=t,Io(e,n)}function Bo(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,yt(e,n)}}function Wo(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var a=null,o=null;if(null!==(n=n.firstBaseUpdate)){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===o?a=o=l:o=o.next=l,n=n.next}while(null!==n);null===o?a=o=t:o=o.next=t}else a=o=t;return n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ho(e,t,n,r){var a=e.updateQueue;Do=!1;var o=a.firstBaseUpdate,l=a.lastBaseUpdate,i=a.shared.pending;if(null!==i){a.shared.pending=null;var s=i,u=s.next;s.next=null,null===l?o=u:l.next=u,l=s;var c=e.alternate;null!==c&&((i=(c=c.updateQueue).lastBaseUpdate)!==l&&(null===i?c.firstBaseUpdate=u:i.next=u,c.lastBaseUpdate=s))}if(null!==o){var f=a.baseState;for(l=0,c=u=s=null,i=o;;){var d=i.lane,p=i.eventTime;if((r&d)===d){null!==c&&(c=c.next={eventTime:p,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});e:{var m=e,h=i;switch(d=t,p=n,h.tag){case 1:if("function"===typeof(m=h.payload)){f=m.call(p,f,d);break e}f=m;break e;case 3:m.flags=-65537&m.flags|128;case 0:if(null===(d="function"===typeof(m=h.payload)?m.call(p,f,d):m)||void 0===d)break e;f=I({},f,d);break e;case 2:Do=!0}}null!==i.callback&&0!==i.lane&&(e.flags|=64,null===(d=a.effects)?a.effects=[i]:d.push(i))}else p={eventTime:p,lane:d,tag:i.tag,payload:i.payload,callback:i.callback,next:null},null===c?(u=c=p,s=f):c=c.next=p,l|=d;if(null===(i=i.next)){if(null===(i=a.shared.pending))break;i=(d=i).next,d.next=null,a.lastBaseUpdate=d,a.shared.pending=null}}if(null===c&&(s=f),a.baseState=s,a.firstBaseUpdate=u,a.lastBaseUpdate=c,null!==(t=a.shared.interleaved)){a=t;do{l|=a.lane,a=a.next}while(a!==t)}else null===o&&(a.shared.lanes=0);Ds|=l,e.lanes=l,e.memoizedState=f}}function Qo(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(null!==a){if(r.callback=null,r=n,"function"!==typeof a)throw Error(o(191,a));a.call(r)}}}var Yo={},Xo=_a(Yo),qo=_a(Yo),Ko=_a(Yo);function Go(e){if(e===Yo)throw Error(o(174));return e}function Jo(e,t){switch(Pa(Ko,t),Pa(qo,e),Pa(Xo,Yo),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:se(null,"");break;default:t=se(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Na(Xo),Pa(Xo,t)}function Zo(){Na(Xo),Na(qo),Na(Ko)}function el(e){Go(Ko.current);var t=Go(Xo.current),n=se(t,e.type);t!==n&&(Pa(qo,e),Pa(Xo,n))}function tl(e){qo.current===e&&(Na(Xo),Na(qo))}var nl=_a(0);function rl(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var al=[];function ol(){for(var e=0;e<al.length;e++)al[e]._workInProgressVersionPrimary=null;al.length=0}var ll=w.ReactCurrentDispatcher,il=w.ReactCurrentBatchConfig,sl=0,ul=null,cl=null,fl=null,dl=!1,pl=!1,ml=0,hl=0;function gl(){throw Error(o(321))}function vl(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ir(e[n],t[n]))return!1;return!0}function yl(e,t,n,r,a,l){if(sl=l,ul=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ll.current=null===e||null===e.memoizedState?ti:ni,e=n(r,a),pl){l=0;do{if(pl=!1,ml=0,25<=l)throw Error(o(301));l+=1,fl=cl=null,t.updateQueue=null,ll.current=ri,e=n(r,a)}while(pl)}if(ll.current=ei,t=null!==cl&&null!==cl.next,sl=0,fl=cl=ul=null,dl=!1,t)throw Error(o(300));return e}function bl(){var e=0!==ml;return ml=0,e}function wl(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===fl?ul.memoizedState=fl=e:fl=fl.next=e,fl}function kl(){if(null===cl){var e=ul.alternate;e=null!==e?e.memoizedState:null}else e=cl.next;var t=null===fl?ul.memoizedState:fl.next;if(null!==t)fl=t,cl=e;else{if(null===e)throw Error(o(310));e={memoizedState:(cl=e).memoizedState,baseState:cl.baseState,baseQueue:cl.baseQueue,queue:cl.queue,next:null},null===fl?ul.memoizedState=fl=e:fl=fl.next=e}return fl}function xl(e,t){return"function"===typeof t?t(e):t}function Sl(e){var t=kl(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=cl,a=r.baseQueue,l=n.pending;if(null!==l){if(null!==a){var i=a.next;a.next=l.next,l.next=i}r.baseQueue=a=l,n.pending=null}if(null!==a){l=a.next,r=r.baseState;var s=i=null,u=null,c=l;do{var f=c.lane;if((sl&f)===f)null!==u&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var d={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};null===u?(s=u=d,i=r):u=u.next=d,ul.lanes|=f,Ds|=f}c=c.next}while(null!==c&&c!==l);null===u?i=r:u.next=s,ir(r,t.memoizedState)||(ki=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=u,n.lastRenderedState=r}if(null!==(e=n.interleaved)){a=e;do{l=a.lane,ul.lanes|=l,Ds|=l,a=a.next}while(a!==e)}else null===a&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function El(e){var t=kl(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,l=t.memoizedState;if(null!==a){n.pending=null;var i=a=a.next;do{l=e(l,i.action),i=i.next}while(i!==a);ir(l,t.memoizedState)||(ki=!0),t.memoizedState=l,null===t.baseQueue&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function Cl(){}function _l(e,t){var n=ul,r=kl(),a=t(),l=!ir(r.memoizedState,a);if(l&&(r.memoizedState=a,ki=!0),r=r.queue,Dl(zl.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||null!==fl&&1&fl.memoizedState.tag){if(n.flags|=2048,Ll(9,Pl.bind(null,n,r,a,t),void 0,null),null===Os)throw Error(o(349));0!==(30&sl)||Nl(n,t,a)}return a}function Nl(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=ul.updateQueue)?(t={lastEffect:null,stores:null},ul.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Pl(e,t,n,r){t.value=n,t.getSnapshot=r,Tl(t)&&Ol(e)}function zl(e,t,n){return n((function(){Tl(t)&&Ol(e)}))}function Tl(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ir(e,n)}catch(r){return!0}}function Ol(e){var t=Io(e,1);null!==t&&au(t,e,1,-1)}function Rl(e){var t=wl();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xl,lastRenderedState:e},t.queue=e,e=e.dispatch=Kl.bind(null,ul,e),[t.memoizedState,e]}function Ll(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=ul.updateQueue)?(t={lastEffect:null,stores:null},ul.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function jl(){return kl().memoizedState}function Ml(e,t,n,r){var a=wl();ul.flags|=e,a.memoizedState=Ll(1|t,n,void 0,void 0===r?null:r)}function Fl(e,t,n,r){var a=kl();r=void 0===r?null:r;var o=void 0;if(null!==cl){var l=cl.memoizedState;if(o=l.destroy,null!==r&&vl(r,l.deps))return void(a.memoizedState=Ll(t,n,o,r))}ul.flags|=e,a.memoizedState=Ll(1|t,n,o,r)}function Il(e,t){return Ml(8390656,8,e,t)}function Dl(e,t){return Fl(2048,8,e,t)}function $l(e,t){return Fl(4,2,e,t)}function Ul(e,t){return Fl(4,4,e,t)}function Al(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Vl(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Fl(4,4,Al.bind(null,t,e),n)}function Bl(){}function Wl(e,t){var n=kl();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&vl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Hl(e,t){var n=kl();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&vl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ql(e,t,n){return 0===(21&sl)?(e.baseState&&(e.baseState=!1,ki=!0),e.memoizedState=n):(ir(n,t)||(n=ht(),ul.lanes|=n,Ds|=n,e.baseState=!0),t)}function Yl(e,t){var n=bt;bt=0!==n&&4>n?n:4,e(!0);var r=il.transition;il.transition={};try{e(!1),t()}finally{bt=n,il.transition=r}}function Xl(){return kl().memoizedState}function ql(e,t,n){var r=ru(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Gl(e))Jl(t,n);else if(null!==(n=Fo(e,t,n,r))){au(n,e,r,nu()),Zl(n,t,r)}}function Kl(e,t,n){var r=ru(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Gl(e))Jl(t,a);else{var o=e.alternate;if(0===e.lanes&&(null===o||0===o.lanes)&&null!==(o=t.lastRenderedReducer))try{var l=t.lastRenderedState,i=o(l,n);if(a.hasEagerState=!0,a.eagerState=i,ir(i,l)){var s=t.interleaved;return null===s?(a.next=a,Mo(t)):(a.next=s.next,s.next=a),void(t.interleaved=a)}}catch(pr){}null!==(n=Fo(e,t,a,r))&&(au(n,e,r,a=nu()),Zl(n,t,r))}}function Gl(e){var t=e.alternate;return e===ul||null!==t&&t===ul}function Jl(e,t){pl=dl=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Zl(e,t,n){if(0!==(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,yt(e,n)}}var ei={readContext:Lo,useCallback:gl,useContext:gl,useEffect:gl,useImperativeHandle:gl,useInsertionEffect:gl,useLayoutEffect:gl,useMemo:gl,useReducer:gl,useRef:gl,useState:gl,useDebugValue:gl,useDeferredValue:gl,useTransition:gl,useMutableSource:gl,useSyncExternalStore:gl,useId:gl,unstable_isNewReconciler:!1},ti={readContext:Lo,useCallback:function(e,t){return wl().memoizedState=[e,void 0===t?null:t],e},useContext:Lo,useEffect:Il,useImperativeHandle:function(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Ml(4194308,4,Al.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ml(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ml(4,2,e,t)},useMemo:function(e,t){var n=wl();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=wl();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ql.bind(null,ul,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},wl().memoizedState=e},useState:Rl,useDebugValue:Bl,useDeferredValue:function(e){return wl().memoizedState=e},useTransition:function(){var e=Rl(!1),t=e[0];return e=Yl.bind(null,e[1]),wl().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ul,a=wl();if(lo){if(void 0===n)throw Error(o(407));n=n()}else{if(n=t(),null===Os)throw Error(o(349));0!==(30&sl)||Nl(r,t,n)}a.memoizedState=n;var l={value:n,getSnapshot:t};return a.queue=l,Il(zl.bind(null,r,l,e),[e]),r.flags|=2048,Ll(9,Pl.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=wl(),t=Os.identifierPrefix;if(lo){var n=Za;t=":"+t+"R"+(n=(Ja&~(1<<32-lt(Ja)-1)).toString(32)+n),0<(n=ml++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=hl++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ni={readContext:Lo,useCallback:Wl,useContext:Lo,useEffect:Dl,useImperativeHandle:Vl,useInsertionEffect:$l,useLayoutEffect:Ul,useMemo:Hl,useReducer:Sl,useRef:jl,useState:function(){return Sl(xl)},useDebugValue:Bl,useDeferredValue:function(e){return Ql(kl(),cl.memoizedState,e)},useTransition:function(){return[Sl(xl)[0],kl().memoizedState]},useMutableSource:Cl,useSyncExternalStore:_l,useId:Xl,unstable_isNewReconciler:!1},ri={readContext:Lo,useCallback:Wl,useContext:Lo,useEffect:Dl,useImperativeHandle:Vl,useInsertionEffect:$l,useLayoutEffect:Ul,useMemo:Hl,useReducer:El,useRef:jl,useState:function(){return El(xl)},useDebugValue:Bl,useDeferredValue:function(e){var t=kl();return null===cl?t.memoizedState=e:Ql(t,cl.memoizedState,e)},useTransition:function(){return[El(xl)[0],kl().memoizedState]},useMutableSource:Cl,useSyncExternalStore:_l,useId:Xl,unstable_isNewReconciler:!1};function ai(e,t){if(e&&e.defaultProps){for(var n in t=I({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function oi(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:I({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var li={isMounted:function(e){return!!(e=e._reactInternals)&&Ve(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=nu(),a=ru(e),o=Ao(r,a);o.payload=t,void 0!==n&&null!==n&&(o.callback=n),null!==(t=Vo(e,o,a))&&(au(t,e,a,r),Bo(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=nu(),a=ru(e),o=Ao(r,a);o.tag=1,o.payload=t,void 0!==n&&null!==n&&(o.callback=n),null!==(t=Vo(e,o,a))&&(au(t,e,a,r),Bo(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=nu(),r=ru(e),a=Ao(n,r);a.tag=2,void 0!==t&&null!==t&&(a.callback=t),null!==(t=Vo(e,a,r))&&(au(t,e,r,n),Bo(t,e,r))}};function ii(e,t,n,r,a,o,l){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,o,l):!t.prototype||!t.prototype.isPureReactComponent||(!sr(n,r)||!sr(a,o))}function si(e,t,n){var r=!1,a=za,o=t.contextType;return"object"===typeof o&&null!==o?o=Lo(o):(a=ja(t)?Ra:Ta.current,o=(r=null!==(r=t.contextTypes)&&void 0!==r)?La(e,a):za),t=new t(n,o),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=li,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=o),t}function ui(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&li.enqueueReplaceState(t,t.state,null)}function ci(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},$o(e);var o=t.contextType;"object"===typeof o&&null!==o?a.context=Lo(o):(o=ja(t)?Ra:Ta.current,a.context=La(e,o)),a.state=e.memoizedState,"function"===typeof(o=t.getDerivedStateFromProps)&&(oi(e,t,o,n),a.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof a.getSnapshotBeforeUpdate||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||(t=a.state,"function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount(),t!==a.state&&li.enqueueReplaceState(a,a.state,null),Ho(e,n,a,r),a.state=e.memoizedState),"function"===typeof a.componentDidMount&&(e.flags|=4194308)}function fi(e,t){try{var n="",r=t;do{n+=A(r),r=r.return}while(r);var a=n}catch(o){a="\nError generating stack: "+o.message+"\n"+o.stack}return{value:e,source:t,stack:a,digest:null}}function di(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function pi(e,t){try{console.error(t.value)}catch(dr){setTimeout((function(){throw dr}))}}var mi="function"===typeof WeakMap?WeakMap:Map;function hi(e,t,n){(n=Ao(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Qs||(Qs=!0,Ys=r),pi(0,t)},n}function gi(e,t,n){(n=Ao(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"===typeof r){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){pi(0,t)}}var o=e.stateNode;return null!==o&&"function"===typeof o.componentDidCatch&&(n.callback=function(){pi(0,t),"function"!==typeof r&&(null===Xs?Xs=new Set([this]):Xs.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function vi(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new mi;var a=new Set;r.set(t,a)}else void 0===(a=r.get(t))&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=Nu.bind(null,e,t,n),t.then(e,e))}function yi(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function bi(e,t,n,r,a){return 0===(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Ao(-1,1)).tag=2,Vo(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var wi=w.ReactCurrentOwner,ki=!1;function xi(e,t,n,r){t.child=null===e?Eo(t,null,n,r):So(t,e.child,n,r)}function Si(e,t,n,r,a){n=n.render;var o=t.ref;return Ro(t,a),r=yl(e,t,n,r,o,a),n=bl(),null===e||ki?(lo&&n&&no(t),t.flags|=1,xi(e,t,r,a),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Qi(e,t,a))}function Ei(e,t,n,r,a){if(null===e){var o=n.type;return"function"!==typeof o||ju(o)||void 0!==o.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Fu(n.type,null,r,t,t.mode,a)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=o,Ci(e,t,o,r,a))}if(o=e.child,0===(e.lanes&a)){var l=o.memoizedProps;if((n=null!==(n=n.compare)?n:sr)(l,r)&&e.ref===t.ref)return Qi(e,t,a)}return t.flags|=1,(e=Mu(o,r)).ref=t.ref,e.return=t,t.child=e}function Ci(e,t,n,r,a){if(null!==e){var o=e.memoizedProps;if(sr(o,r)&&e.ref===t.ref){if(ki=!1,t.pendingProps=r=o,0===(e.lanes&a))return t.lanes=e.lanes,Qi(e,t,a);0!==(131072&e.flags)&&(ki=!0)}}return Pi(e,t,n,r,a)}function _i(e,t,n){var r=t.pendingProps,a=r.children,o=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0===(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Pa(Ms,js),js|=n;else{if(0===(1073741824&n))return e=null!==o?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Pa(Ms,js),js|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==o?o.baseLanes:n,Pa(Ms,js),js|=r}else null!==o?(r=o.baseLanes|n,t.memoizedState=null):r=n,Pa(Ms,js),js|=r;return xi(e,t,a,n),t.child}function Ni(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Pi(e,t,n,r,a){var o=ja(n)?Ra:Ta.current;return o=La(t,o),Ro(t,a),n=yl(e,t,n,r,o,a),r=bl(),null===e||ki?(lo&&r&&no(t),t.flags|=1,xi(e,t,n,a),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Qi(e,t,a))}function zi(e,t,n,r,a){if(ja(n)){var o=!0;Da(t)}else o=!1;if(Ro(t,a),null===t.stateNode)Hi(e,t),si(t,n,r),ci(t,n,r,a),r=!0;else if(null===e){var l=t.stateNode,i=t.memoizedProps;l.props=i;var s=l.context,u=n.contextType;"object"===typeof u&&null!==u?u=Lo(u):u=La(t,u=ja(n)?Ra:Ta.current);var c=n.getDerivedStateFromProps,f="function"===typeof c||"function"===typeof l.getSnapshotBeforeUpdate;f||"function"!==typeof l.UNSAFE_componentWillReceiveProps&&"function"!==typeof l.componentWillReceiveProps||(i!==r||s!==u)&&ui(t,l,r,u),Do=!1;var d=t.memoizedState;l.state=d,Ho(t,r,l,a),s=t.memoizedState,i!==r||d!==s||Oa.current||Do?("function"===typeof c&&(oi(t,n,c,r),s=t.memoizedState),(i=Do||ii(t,n,i,r,d,s,u))?(f||"function"!==typeof l.UNSAFE_componentWillMount&&"function"!==typeof l.componentWillMount||("function"===typeof l.componentWillMount&&l.componentWillMount(),"function"===typeof l.UNSAFE_componentWillMount&&l.UNSAFE_componentWillMount()),"function"===typeof l.componentDidMount&&(t.flags|=4194308)):("function"===typeof l.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=u,r=i):("function"===typeof l.componentDidMount&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Uo(e,t),i=t.memoizedProps,u=t.type===t.elementType?i:ai(t.type,i),l.props=u,f=t.pendingProps,d=l.context,"object"===typeof(s=n.contextType)&&null!==s?s=Lo(s):s=La(t,s=ja(n)?Ra:Ta.current);var p=n.getDerivedStateFromProps;(c="function"===typeof p||"function"===typeof l.getSnapshotBeforeUpdate)||"function"!==typeof l.UNSAFE_componentWillReceiveProps&&"function"!==typeof l.componentWillReceiveProps||(i!==f||d!==s)&&ui(t,l,r,s),Do=!1,d=t.memoizedState,l.state=d,Ho(t,r,l,a);var m=t.memoizedState;i!==f||d!==m||Oa.current||Do?("function"===typeof p&&(oi(t,n,p,r),m=t.memoizedState),(u=Do||ii(t,n,u,r,d,m,s)||!1)?(c||"function"!==typeof l.UNSAFE_componentWillUpdate&&"function"!==typeof l.componentWillUpdate||("function"===typeof l.componentWillUpdate&&l.componentWillUpdate(r,m,s),"function"===typeof l.UNSAFE_componentWillUpdate&&l.UNSAFE_componentWillUpdate(r,m,s)),"function"===typeof l.componentDidUpdate&&(t.flags|=4),"function"===typeof l.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof l.componentDidUpdate||i===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),"function"!==typeof l.getSnapshotBeforeUpdate||i===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),l.props=r,l.state=m,l.context=s,r=u):("function"!==typeof l.componentDidUpdate||i===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),"function"!==typeof l.getSnapshotBeforeUpdate||i===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),r=!1)}return Ti(e,t,n,r,o,a)}function Ti(e,t,n,r,a,o){Ni(e,t);var l=0!==(128&t.flags);if(!r&&!l)return a&&$a(t,n,!1),Qi(e,t,o);r=t.stateNode,wi.current=t;var i=l&&"function"!==typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&l?(t.child=So(t,e.child,null,o),t.child=So(t,null,i,o)):xi(e,t,i,o),t.memoizedState=r.state,a&&$a(t,n,!0),t.child}function Oi(e){var t=e.stateNode;t.pendingContext?Fa(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Fa(0,t.context,!1),Jo(e,t.containerInfo)}function Ri(e,t,n,r,a){return go(),vo(a),t.flags|=256,xi(e,t,n,r),t.child}var Li,ji,Mi,Fi,Ii={dehydrated:null,treeContext:null,retryLane:0};function Di(e){return{baseLanes:e,cachePool:null,transitions:null}}function $i(e,t,n){var r,a=t.pendingProps,l=nl.current,i=!1,s=0!==(128&t.flags);if((r=s)||(r=(null===e||null!==e.memoizedState)&&0!==(2&l)),r?(i=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(l|=1),Pa(nl,1&l),null===e)return fo(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0===(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(s=a.children,e=a.fallback,i?(a=t.mode,i=t.child,s={mode:"hidden",children:s},0===(1&a)&&null!==i?(i.childLanes=0,i.pendingProps=s):i=Du(s,a,0,null),e=Iu(e,a,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Di(n),t.memoizedState=Ii,e):Ui(t,s));if(null!==(l=e.memoizedState)&&null!==(r=l.dehydrated))return function(e,t,n,r,a,l,i){if(n)return 256&t.flags?(t.flags&=-257,Ai(e,t,i,r=di(Error(o(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(l=r.fallback,a=t.mode,r=Du({mode:"visible",children:r.children},a,0,null),(l=Iu(l,a,i,null)).flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,0!==(1&t.mode)&&So(t,e.child,null,i),t.child.memoizedState=Di(i),t.memoizedState=Ii,l);if(0===(1&t.mode))return Ai(e,t,i,null);if("$!"===a.data){if(r=a.nextSibling&&a.nextSibling.dataset)var s=r.dgst;return r=s,Ai(e,t,i,r=di(l=Error(o(419)),r,void 0))}if(s=0!==(i&e.childLanes),ki||s){if(null!==(r=Os)){switch(i&-i){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}0!==(a=0!==(a&(r.suspendedLanes|i))?0:a)&&a!==l.retryLane&&(l.retryLane=a,Io(e,a),au(r,e,a,-1))}return vu(),Ai(e,t,i,r=di(Error(o(421))))}return"$?"===a.data?(t.flags|=128,t.child=e.child,t=zu.bind(null,e),a._reactRetry=t,null):(e=l.treeContext,oo=fa(a.nextSibling),ao=t,lo=!0,io=null,null!==e&&(qa[Ka++]=Ja,qa[Ka++]=Za,qa[Ka++]=Ga,Ja=e.id,Za=e.overflow,Ga=t),t=Ui(t,r.children),t.flags|=4096,t)}(e,t,s,a,r,l,n);if(i){i=a.fallback,s=t.mode,r=(l=e.child).sibling;var u={mode:"hidden",children:a.children};return 0===(1&s)&&t.child!==l?((a=t.child).childLanes=0,a.pendingProps=u,t.deletions=null):(a=Mu(l,u)).subtreeFlags=14680064&l.subtreeFlags,null!==r?i=Mu(r,i):(i=Iu(i,s,n,null)).flags|=2,i.return=t,a.return=t,a.sibling=i,t.child=a,a=i,i=t.child,s=null===(s=e.child.memoizedState)?Di(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~n,t.memoizedState=Ii,a}return e=(i=e.child).sibling,a=Mu(i,{mode:"visible",children:a.children}),0===(1&t.mode)&&(a.lanes=n),a.return=t,a.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=a,t.memoizedState=null,a}function Ui(e,t){return(t=Du({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Ai(e,t,n,r){return null!==r&&vo(r),So(t,e.child,null,n),(e=Ui(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Vi(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),Oo(e.return,t,n)}function Bi(e,t,n,r,a){var o=e.memoizedState;null===o?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=a)}function Wi(e,t,n){var r=t.pendingProps,a=r.revealOrder,o=r.tail;if(xi(e,t,r.children,n),0!==(2&(r=nl.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Vi(e,n,t);else if(19===e.tag)Vi(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Pa(nl,r),0===(1&t.mode))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;null!==n;)null!==(e=n.alternate)&&null===rl(e)&&(a=n),n=n.sibling;null===(n=a)?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Bi(t,!1,a,n,o);break;case"backwards":for(n=null,a=t.child,t.child=null;null!==a;){if(null!==(e=a.alternate)&&null===rl(e)){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Bi(t,!0,n,null,o);break;case"together":Bi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Hi(e,t){0===(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Qi(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Ds|=t.lanes,0===(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(o(153));if(null!==t.child){for(n=Mu(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Mu(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Yi(e,t){if(!lo)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Xi(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=14680064&a.subtreeFlags,r|=14680064&a.flags,a.return=e,a=a.sibling;else for(a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function qi(e,t,n){var r=t.pendingProps;switch(ro(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xi(t),null;case 1:case 17:return ja(t.type)&&Ma(),Xi(t),null;case 3:return r=t.stateNode,Zo(),Na(Oa),Na(Ta),ol(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(mo(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==io&&(su(io),io=null))),ji(e,t),Xi(t),null;case 5:tl(t);var a=Go(Ko.current);if(n=t.type,null!==e&&null!=t.stateNode)Mi(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(o(166));return Xi(t),null}if(e=Go(Xo.current),mo(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[ma]=t,r[ha]=l,e=0!==(1&t.mode),n){case"dialog":Ar("cancel",r),Ar("close",r);break;case"iframe":case"object":case"embed":Ar("load",r);break;case"video":case"audio":for(a=0;a<Ir.length;a++)Ar(Ir[a],r);break;case"source":Ar("error",r);break;case"img":case"image":case"link":Ar("error",r),Ar("load",r);break;case"details":Ar("toggle",r);break;case"input":K(r,l),Ar("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},Ar("invalid",r);break;case"textarea":ae(r,l),Ar("invalid",r)}for(var s in ye(n,l),a=null,l)if(l.hasOwnProperty(s)){var u=l[s];"children"===s?"string"===typeof u?r.textContent!==u&&(!0!==l.suppressHydrationWarning&&ea(r.textContent,u,e),a=["children",u]):"number"===typeof u&&r.textContent!==""+u&&(!0!==l.suppressHydrationWarning&&ea(r.textContent,u,e),a=["children",""+u]):i.hasOwnProperty(s)&&null!=u&&"onScroll"===s&&Ar("scroll",r)}switch(n){case"input":Q(r),Z(r,l,!0);break;case"textarea":Q(r),le(r);break;case"select":case"option":break;default:"function"===typeof l.onClick&&(r.onclick=ta)}r=a,t.updateQueue=r,null!==r&&(t.flags|=4)}else{s=9===a.nodeType?a:a.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=ie(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=s.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof r.is?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),"select"===n&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[ma]=t,e[ha]=r,Li(e,t,!1,!1),t.stateNode=e;e:{switch(s=be(n,r),n){case"dialog":Ar("cancel",e),Ar("close",e),a=r;break;case"iframe":case"object":case"embed":Ar("load",e),a=r;break;case"video":case"audio":for(a=0;a<Ir.length;a++)Ar(Ir[a],e);a=r;break;case"source":Ar("error",e),a=r;break;case"img":case"image":case"link":Ar("error",e),Ar("load",e),a=r;break;case"details":Ar("toggle",e),a=r;break;case"input":K(e,r),a=q(e,r),Ar("invalid",e);break;case"option":default:a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=I({},r,{value:void 0}),Ar("invalid",e);break;case"textarea":ae(e,r),a=re(e,r),Ar("invalid",e)}for(l in ye(n,a),u=a)if(u.hasOwnProperty(l)){var c=u[l];"style"===l?ge(e,c):"dangerouslySetInnerHTML"===l?null!=(c=c?c.__html:void 0)&&fe(e,c):"children"===l?"string"===typeof c?("textarea"!==n||""!==c)&&de(e,c):"number"===typeof c&&de(e,""+c):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(i.hasOwnProperty(l)?null!=c&&"onScroll"===l&&Ar("scroll",e):null!=c&&b(e,l,c,s))}switch(n){case"input":Q(e),Z(e,r,!1);break;case"textarea":Q(e),le(e);break;case"option":null!=r.value&&e.setAttribute("value",""+W(r.value));break;case"select":e.multiple=!!r.multiple,null!=(l=r.value)?ne(e,!!r.multiple,l,!1):null!=r.defaultValue&&ne(e,!!r.multiple,r.defaultValue,!0);break;default:"function"===typeof a.onClick&&(e.onclick=ta)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Xi(t),null;case 6:if(e&&null!=t.stateNode)Fi(e,t,e.memoizedProps,r);else{if("string"!==typeof r&&null===t.stateNode)throw Error(o(166));if(n=Go(Ko.current),Go(Xo.current),mo(t)){if(r=t.stateNode,n=t.memoizedProps,r[ma]=t,(l=r.nodeValue!==n)&&null!==(e=ao))switch(e.tag){case 3:ea(r.nodeValue,n,0!==(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&ea(r.nodeValue,n,0!==(1&e.mode))}l&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[ma]=t,t.stateNode=r}return Xi(t),null;case 13:if(Na(nl),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(lo&&null!==oo&&0!==(1&t.mode)&&0===(128&t.flags))ho(),go(),t.flags|=98560,l=!1;else if(l=mo(t),null!==r&&null!==r.dehydrated){if(null===e){if(!l)throw Error(o(318));if(!(l=null!==(l=t.memoizedState)?l.dehydrated:null))throw Error(o(317));l[ma]=t}else go(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Xi(t),l=!1}else null!==io&&(su(io),io=null),l=!0;if(!l)return 65536&t.flags?t:null}return 0!==(128&t.flags)?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!==(1&t.mode)&&(null===e||0!==(1&nl.current)?0===Fs&&(Fs=3):vu())),null!==t.updateQueue&&(t.flags|=4),Xi(t),null);case 4:return Zo(),ji(e,t),null===e&&Wr(t.stateNode.containerInfo),Xi(t),null;case 10:return To(t.type._context),Xi(t),null;case 19:if(Na(nl),null===(l=t.memoizedState))return Xi(t),null;if(r=0!==(128&t.flags),null===(s=l.rendering))if(r)Yi(l,!1);else{if(0!==Fs||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(s=rl(e))){for(t.flags|=128,Yi(l,!1),null!==(r=s.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(l=n).flags&=14680066,null===(s=l.alternate)?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=s.childLanes,l.lanes=s.lanes,l.child=s.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=s.memoizedProps,l.memoizedState=s.memoizedState,l.updateQueue=s.updateQueue,l.type=s.type,e=s.dependencies,l.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Pa(nl,1&nl.current|2),t.child}e=e.sibling}null!==l.tail&&Ge()>Ws&&(t.flags|=128,r=!0,Yi(l,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=rl(s))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Yi(l,!0),null===l.tail&&"hidden"===l.tailMode&&!s.alternate&&!lo)return Xi(t),null}else 2*Ge()-l.renderingStartTime>Ws&&1073741824!==n&&(t.flags|=128,r=!0,Yi(l,!1),t.lanes=4194304);l.isBackwards?(s.sibling=t.child,t.child=s):(null!==(n=l.last)?n.sibling=s:t.child=s,l.last=s)}return null!==l.tail?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Ge(),t.sibling=null,n=nl.current,Pa(nl,r?1&n|2:1&n),t):(Xi(t),null);case 22:case 23:return pu(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!==(1&t.mode)?0!==(1073741824&js)&&(Xi(t),6&t.subtreeFlags&&(t.flags|=8192)):Xi(t),null;case 24:case 25:return null}throw Error(o(156,t.tag))}function Ki(e,t){switch(ro(t),t.tag){case 1:return ja(t.type)&&Ma(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Zo(),Na(Oa),Na(Ta),ol(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 5:return tl(t),null;case 13:if(Na(nl),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(o(340));go()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Na(nl),null;case 4:return Zo(),null;case 10:return To(t.type._context),null;case 22:case 23:return pu(),null;default:return null}}Li=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},ji=function(){},Mi=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,Go(Xo.current);var o,l=null;switch(n){case"input":a=q(e,a),r=q(e,r),l=[];break;case"select":a=I({},a,{value:void 0}),r=I({},r,{value:void 0}),l=[];break;case"textarea":a=re(e,a),r=re(e,r),l=[];break;default:"function"!==typeof a.onClick&&"function"===typeof r.onClick&&(e.onclick=ta)}for(c in ye(n,r),n=null,a)if(!r.hasOwnProperty(c)&&a.hasOwnProperty(c)&&null!=a[c])if("style"===c){var s=a[c];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(i.hasOwnProperty(c)?l||(l=[]):(l=l||[]).push(c,null));for(c in r){var u=r[c];if(s=null!=a?a[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(null!=u||null!=s))if("style"===c)if(s){for(o in s)!s.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&s[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(l||(l=[]),l.push(c,n)),n=u;else"dangerouslySetInnerHTML"===c?(u=u?u.__html:void 0,s=s?s.__html:void 0,null!=u&&s!==u&&(l=l||[]).push(c,u)):"children"===c?"string"!==typeof u&&"number"!==typeof u||(l=l||[]).push(c,""+u):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(i.hasOwnProperty(c)?(null!=u&&"onScroll"===c&&Ar("scroll",e),l||s===u||(l=[])):(l=l||[]).push(c,u))}n&&(l=l||[]).push("style",n);var c=l;(t.updateQueue=c)&&(t.flags|=4)}},Fi=function(e,t,n,r){n!==r&&(t.flags|=4)};var Gi=!1,Ji=!1,Zi="function"===typeof WeakSet?WeakSet:Set,es=null;function ts(e,t){var n=e.ref;if(null!==n)if("function"===typeof n)try{n(null)}catch(r){_u(e,t,r)}else n.current=null}function ns(e,t,n){try{n()}catch(r){_u(e,t,r)}}var rs=!1;function as(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var a=r=r.next;do{if((a.tag&e)===e){var o=a.destroy;a.destroy=void 0,void 0!==o&&ns(t,n,o)}a=a.next}while(a!==r)}}function os(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ls(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"===typeof t?t(e):t.current=e}}function is(e){var t=e.alternate;null!==t&&(e.alternate=null,is(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[ma],delete t[ha],delete t[va],delete t[ya],delete t[ba])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ss(e){return 5===e.tag||3===e.tag||4===e.tag}function us(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||ss(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function cs(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=ta));else if(4!==r&&null!==(e=e.child))for(cs(e,t,n),e=e.sibling;null!==e;)cs(e,t,n),e=e.sibling}function fs(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(fs(e,t,n),e=e.sibling;null!==e;)fs(e,t,n),e=e.sibling}var ds=null,ps=!1;function ms(e,t,n){for(n=n.child;null!==n;)hs(e,t,n),n=n.sibling}function hs(e,t,n){if(ot&&"function"===typeof ot.onCommitFiberUnmount)try{ot.onCommitFiberUnmount(at,n)}catch(i){}switch(n.tag){case 5:Ji||ts(n,t);case 6:var r=ds,a=ps;ds=null,ms(e,t,n),ps=a,null!==(ds=r)&&(ps?(e=ds,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):ds.removeChild(n.stateNode));break;case 18:null!==ds&&(ps?(e=ds,n=n.stateNode,8===e.nodeType?ca(e.parentNode,n):1===e.nodeType&&ca(e,n),Vt(e)):ca(ds,n.stateNode));break;case 4:r=ds,a=ps,ds=n.stateNode.containerInfo,ps=!0,ms(e,t,n),ds=r,ps=a;break;case 0:case 11:case 14:case 15:if(!Ji&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){a=r=r.next;do{var o=a,l=o.destroy;o=o.tag,void 0!==l&&(0!==(2&o)||0!==(4&o))&&ns(n,t,l),a=a.next}while(a!==r)}ms(e,t,n);break;case 1:if(!Ji&&(ts(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(i){_u(n,t,i)}ms(e,t,n);break;case 21:ms(e,t,n);break;case 22:1&n.mode?(Ji=(r=Ji)||null!==n.memoizedState,ms(e,t,n),Ji=r):ms(e,t,n);break;default:ms(e,t,n)}}function gs(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Zi),t.forEach((function(t){var r=Tu.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}function vs(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var a=n[r];try{var l=e,i=t,s=i;e:for(;null!==s;){switch(s.tag){case 5:ds=s.stateNode,ps=!1;break e;case 3:case 4:ds=s.stateNode.containerInfo,ps=!0;break e}s=s.return}if(null===ds)throw Error(o(160));hs(l,i,a),ds=null,ps=!1;var u=a.alternate;null!==u&&(u.return=null),a.return=null}catch(pr){_u(a,t,pr)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)ys(t,e),t=t.sibling}function ys(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(vs(t,e),bs(e),4&r){try{as(3,e,e.return),os(3,e)}catch(g){_u(e,e.return,g)}try{as(5,e,e.return)}catch(g){_u(e,e.return,g)}}break;case 1:vs(t,e),bs(e),512&r&&null!==n&&ts(n,n.return);break;case 5:if(vs(t,e),bs(e),512&r&&null!==n&&ts(n,n.return),32&e.flags){var a=e.stateNode;try{de(a,"")}catch(g){_u(e,e.return,g)}}if(4&r&&null!=(a=e.stateNode)){var l=e.memoizedProps,i=null!==n?n.memoizedProps:l,s=e.type,u=e.updateQueue;if(e.updateQueue=null,null!==u)try{"input"===s&&"radio"===l.type&&null!=l.name&&G(a,l),be(s,i);var c=be(s,l);for(i=0;i<u.length;i+=2){var f=u[i],d=u[i+1];"style"===f?ge(a,d):"dangerouslySetInnerHTML"===f?fe(a,d):"children"===f?de(a,d):b(a,f,d,c)}switch(s){case"input":J(a,l);break;case"textarea":oe(a,l);break;case"select":var p=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!l.multiple;var m=l.value;null!=m?ne(a,!!l.multiple,m,!1):p!==!!l.multiple&&(null!=l.defaultValue?ne(a,!!l.multiple,l.defaultValue,!0):ne(a,!!l.multiple,l.multiple?[]:"",!1))}a[ha]=l}catch(g){_u(e,e.return,g)}}break;case 6:if(vs(t,e),bs(e),4&r){if(null===e.stateNode)throw Error(o(162));a=e.stateNode,l=e.memoizedProps;try{a.nodeValue=l}catch(g){_u(e,e.return,g)}}break;case 3:if(vs(t,e),bs(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Vt(t.containerInfo)}catch(g){_u(e,e.return,g)}break;case 4:default:vs(t,e),bs(e);break;case 13:vs(t,e),bs(e),8192&(a=e.child).flags&&(l=null!==a.memoizedState,a.stateNode.isHidden=l,!l||null!==a.alternate&&null!==a.alternate.memoizedState||(Bs=Ge())),4&r&&gs(e);break;case 22:if(f=null!==n&&null!==n.memoizedState,1&e.mode?(Ji=(c=Ji)||f,vs(t,e),Ji=c):vs(t,e),bs(e),8192&r){if(c=null!==e.memoizedState,(e.stateNode.isHidden=c)&&!f&&0!==(1&e.mode))for(es=e,f=e.child;null!==f;){for(d=es=f;null!==es;){switch(m=(p=es).child,p.tag){case 0:case 11:case 14:case 15:as(4,p,p.return);break;case 1:ts(p,p.return);var h=p.stateNode;if("function"===typeof h.componentWillUnmount){r=p,n=p.return;try{t=r,h.props=t.memoizedProps,h.state=t.memoizedState,h.componentWillUnmount()}catch(g){_u(r,n,g)}}break;case 5:ts(p,p.return);break;case 22:if(null!==p.memoizedState){Ss(d);continue}}null!==m?(m.return=p,es=m):Ss(d)}f=f.sibling}e:for(f=null,d=e;;){if(5===d.tag){if(null===f){f=d;try{a=d.stateNode,c?"function"===typeof(l=a.style).setProperty?l.setProperty("display","none","important"):l.display="none":(s=d.stateNode,i=void 0!==(u=d.memoizedProps.style)&&null!==u&&u.hasOwnProperty("display")?u.display:null,s.style.display=he("display",i))}catch(g){_u(e,e.return,g)}}}else if(6===d.tag){if(null===f)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(g){_u(e,e.return,g)}}else if((22!==d.tag&&23!==d.tag||null===d.memoizedState||d===e)&&null!==d.child){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;null===d.sibling;){if(null===d.return||d.return===e)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:vs(t,e),bs(e),4&r&&gs(e);case 21:}}function bs(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(ss(n)){var r=n;break e}n=n.return}throw Error(o(160))}switch(r.tag){case 5:var a=r.stateNode;32&r.flags&&(de(a,""),r.flags&=-33),fs(e,us(e),a);break;case 3:case 4:var l=r.stateNode.containerInfo;cs(e,us(e),l);break;default:throw Error(o(161))}}catch(i){_u(e,e.return,i)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function ws(e,t,n){es=e,ks(e,t,n)}function ks(e,t,n){for(var r=0!==(1&e.mode);null!==es;){var a=es,o=a.child;if(22===a.tag&&r){var l=null!==a.memoizedState||Gi;if(!l){var i=a.alternate,s=null!==i&&null!==i.memoizedState||Ji;i=Gi;var u=Ji;if(Gi=l,(Ji=s)&&!u)for(es=a;null!==es;)s=(l=es).child,22===l.tag&&null!==l.memoizedState?Es(a):null!==s?(s.return=l,es=s):Es(a);for(;null!==o;)es=o,ks(o,t,n),o=o.sibling;es=a,Gi=i,Ji=u}xs(e)}else 0!==(8772&a.subtreeFlags)&&null!==o?(o.return=a,es=o):xs(e)}}function xs(e){for(;null!==es;){var t=es;if(0!==(8772&t.flags)){var n=t.alternate;try{if(0!==(8772&t.flags))switch(t.tag){case 0:case 11:case 15:Ji||os(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!Ji)if(null===n)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:ai(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;null!==l&&Qo(t,l,r);break;case 3:var i=t.updateQueue;if(null!==i){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}Qo(t,i,n)}break;case 5:var s=t.stateNode;if(null===n&&4&t.flags){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var c=t.alternate;if(null!==c){var f=c.memoizedState;if(null!==f){var d=f.dehydrated;null!==d&&Vt(d)}}}break;default:throw Error(o(163))}Ji||512&t.flags&&ls(t)}catch(p){_u(t,t.return,p)}}if(t===e){es=null;break}if(null!==(n=t.sibling)){n.return=t.return,es=n;break}es=t.return}}function Ss(e){for(;null!==es;){var t=es;if(t===e){es=null;break}var n=t.sibling;if(null!==n){n.return=t.return,es=n;break}es=t.return}}function Es(e){for(;null!==es;){var t=es;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{os(4,t)}catch(s){_u(t,n,s)}break;case 1:var r=t.stateNode;if("function"===typeof r.componentDidMount){var a=t.return;try{r.componentDidMount()}catch(s){_u(t,a,s)}}var o=t.return;try{ls(t)}catch(s){_u(t,o,s)}break;case 5:var l=t.return;try{ls(t)}catch(s){_u(t,l,s)}}}catch(s){_u(t,t.return,s)}if(t===e){es=null;break}var i=t.sibling;if(null!==i){i.return=t.return,es=i;break}es=t.return}}var Cs,_s=Math.ceil,Ns=w.ReactCurrentDispatcher,Ps=w.ReactCurrentOwner,zs=w.ReactCurrentBatchConfig,Ts=0,Os=null,Rs=null,Ls=0,js=0,Ms=_a(0),Fs=0,Is=null,Ds=0,$s=0,Us=0,As=null,Vs=null,Bs=0,Ws=1/0,Hs=null,Qs=!1,Ys=null,Xs=null,qs=!1,Ks=null,Gs=0,Js=0,Zs=null,eu=-1,tu=0;function nu(){return 0!==(6&Ts)?Ge():-1!==eu?eu:eu=Ge()}function ru(e){return 0===(1&e.mode)?1:0!==(2&Ts)&&0!==Ls?Ls&-Ls:null!==yo.transition?(0===tu&&(tu=ht()),tu):0!==(e=bt)?e:e=void 0===(e=window.event)?16:Kt(e.type)}function au(e,t,n,r){if(50<Js)throw Js=0,Zs=null,Error(o(185));vt(e,n,r),0!==(2&Ts)&&e===Os||(e===Os&&(0===(2&Ts)&&($s|=n),4===Fs&&uu(e,Ls)),ou(e,r),1===n&&0===Ts&&0===(1&t.mode)&&(Ws=Ge()+500,Aa&&Wa()))}function ou(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-lt(o),i=1<<l,s=a[l];-1===s?0!==(i&n)&&0===(i&r)||(a[l]=pt(i,t)):s<=t&&(e.expiredLanes|=i),o&=~i}}(e,t);var r=dt(e,e===Os?Ls:0);if(0===r)null!==n&&Xe(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&Xe(n),1===t)0===e.tag?function(e){Aa=!0,Ba(e)}(cu.bind(null,e)):Ba(cu.bind(null,e)),sa((function(){0===(6&Ts)&&Wa()})),n=null;else{switch(wt(r)){case 1:n=Ze;break;case 4:n=et;break;case 16:default:n=tt;break;case 536870912:n=rt}n=Ou(n,lu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function lu(e,t){if(eu=-1,tu=0,0!==(6&Ts))throw Error(o(327));var n=e.callbackNode;if(Eu()&&e.callbackNode!==n)return null;var r=dt(e,e===Os?Ls:0);if(0===r)return null;if(0!==(30&r)||0!==(r&e.expiredLanes)||t)t=yu(e,r);else{t=r;var a=Ts;Ts|=2;var l=gu();for(Os===e&&Ls===t||(Hs=null,Ws=Ge()+500,mu(e,t));;)try{wu();break}catch(s){hu(e,s)}zo(),Ns.current=l,Ts=a,null!==Rs?t=0:(Os=null,Ls=0,t=Fs)}if(0!==t){if(2===t&&(0!==(a=mt(e))&&(r=a,t=iu(e,a))),1===t)throw n=Is,mu(e,0),uu(e,r),ou(e,Ge()),n;if(6===t)uu(e,r);else{if(a=e.current.alternate,0===(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var a=n[r],o=a.getSnapshot;a=a.value;try{if(!ir(o(),a))return!1}catch(i){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(a)&&(2===(t=yu(e,r))&&(0!==(l=mt(e))&&(r=l,t=iu(e,l))),1===t))throw n=Is,mu(e,0),uu(e,r),ou(e,Ge()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(o(345));case 2:case 5:Su(e,Vs,Hs);break;case 3:if(uu(e,r),(130023424&r)===r&&10<(t=Bs+500-Ge())){if(0!==dt(e,0))break;if(((a=e.suspendedLanes)&r)!==r){nu(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=oa(Su.bind(null,e,Vs,Hs),t);break}Su(e,Vs,Hs);break;case 4:if(uu(e,r),(4194240&r)===r)break;for(t=e.eventTimes,a=-1;0<r;){var i=31-lt(r);l=1<<i,(i=t[i])>a&&(a=i),r&=~l}if(r=a,10<(r=(120>(r=Ge()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*_s(r/1960))-r)){e.timeoutHandle=oa(Su.bind(null,e,Vs,Hs),r);break}Su(e,Vs,Hs);break;default:throw Error(o(329))}}}return ou(e,Ge()),e.callbackNode===n?lu.bind(null,e):null}function iu(e,t){var n=As;return e.current.memoizedState.isDehydrated&&(mu(e,t).flags|=256),2!==(e=yu(e,t))&&(t=Vs,Vs=n,null!==t&&su(t)),e}function su(e){null===Vs?Vs=e:Vs.push.apply(Vs,e)}function uu(e,t){for(t&=~Us,t&=~$s,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-lt(t),r=1<<n;e[n]=-1,t&=~r}}function cu(e){if(0!==(6&Ts))throw Error(o(327));Eu();var t=dt(e,0);if(0===(1&t))return ou(e,Ge()),null;var n=yu(e,t);if(0!==e.tag&&2===n){var r=mt(e);0!==r&&(t=r,n=iu(e,r))}if(1===n)throw n=Is,mu(e,0),uu(e,t),ou(e,Ge()),n;if(6===n)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Su(e,Vs,Hs),ou(e,Ge()),null}function fu(e,t){var n=Ts;Ts|=1;try{return e(t)}finally{0===(Ts=n)&&(Ws=Ge()+500,Aa&&Wa())}}function du(e){null!==Ks&&0===Ks.tag&&0===(6&Ts)&&Eu();var t=Ts;Ts|=1;var n=zs.transition,r=bt;try{if(zs.transition=null,bt=1,e)return e()}finally{bt=r,zs.transition=n,0===(6&(Ts=t))&&Wa()}}function pu(){js=Ms.current,Na(Ms)}function mu(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,la(n)),null!==Rs)for(n=Rs.return;null!==n;){var r=n;switch(ro(r),r.tag){case 1:null!==(r=r.type.childContextTypes)&&void 0!==r&&Ma();break;case 3:Zo(),Na(Oa),Na(Ta),ol();break;case 5:tl(r);break;case 4:Zo();break;case 13:case 19:Na(nl);break;case 10:To(r.type._context);break;case 22:case 23:pu()}n=n.return}if(Os=e,Rs=e=Mu(e.current,null),Ls=js=t,Fs=0,Is=null,Us=$s=Ds=0,Vs=As=null,null!==jo){for(t=0;t<jo.length;t++)if(null!==(r=(n=jo[t]).interleaved)){n.interleaved=null;var a=r.next,o=n.pending;if(null!==o){var l=o.next;o.next=a,r.next=l}n.pending=r}jo=null}return e}function hu(e,t){for(;;){var n=Rs;try{if(zo(),ll.current=ei,dl){for(var r=ul.memoizedState;null!==r;){var a=r.queue;null!==a&&(a.pending=null),r=r.next}dl=!1}if(sl=0,fl=cl=ul=null,pl=!1,ml=0,Ps.current=null,null===n||null===n.return){Fs=1,Is=t,Rs=null;break}e:{var l=e,i=n.return,s=n,u=t;if(t=Ls,s.flags|=32768,null!==u&&"object"===typeof u&&"function"===typeof u.then){var c=u,f=s,d=f.tag;if(0===(1&f.mode)&&(0===d||11===d||15===d)){var p=f.alternate;p?(f.updateQueue=p.updateQueue,f.memoizedState=p.memoizedState,f.lanes=p.lanes):(f.updateQueue=null,f.memoizedState=null)}var m=yi(i);if(null!==m){m.flags&=-257,bi(m,i,s,0,t),1&m.mode&&vi(l,c,t),u=c;var h=(t=m).updateQueue;if(null===h){var g=new Set;g.add(u),t.updateQueue=g}else h.add(u);break e}if(0===(1&t)){vi(l,c,t),vu();break e}u=Error(o(426))}else if(lo&&1&s.mode){var v=yi(i);if(null!==v){0===(65536&v.flags)&&(v.flags|=256),bi(v,i,s,0,t),vo(fi(u,s));break e}}l=u=fi(u,s),4!==Fs&&(Fs=2),null===As?As=[l]:As.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t,Wo(l,hi(0,u,t));break e;case 1:s=u;var y=l.type,b=l.stateNode;if(0===(128&l.flags)&&("function"===typeof y.getDerivedStateFromError||null!==b&&"function"===typeof b.componentDidCatch&&(null===Xs||!Xs.has(b)))){l.flags|=65536,t&=-t,l.lanes|=t,Wo(l,gi(l,s,t));break e}}l=l.return}while(null!==l)}xu(n)}catch(w){t=w,Rs===n&&null!==n&&(Rs=n=n.return);continue}break}}function gu(){var e=Ns.current;return Ns.current=ei,null===e?ei:e}function vu(){0!==Fs&&3!==Fs&&2!==Fs||(Fs=4),null===Os||0===(268435455&Ds)&&0===(268435455&$s)||uu(Os,Ls)}function yu(e,t){var n=Ts;Ts|=2;var r=gu();for(Os===e&&Ls===t||(Hs=null,mu(e,t));;)try{bu();break}catch(a){hu(e,a)}if(zo(),Ts=n,Ns.current=r,null!==Rs)throw Error(o(261));return Os=null,Ls=0,Fs}function bu(){for(;null!==Rs;)ku(Rs)}function wu(){for(;null!==Rs&&!qe();)ku(Rs)}function ku(e){var t=Cs(e.alternate,e,js);e.memoizedProps=e.pendingProps,null===t?xu(e):Rs=t,Ps.current=null}function xu(e){var t=e;do{var n=t.alternate;if(e=t.return,0===(32768&t.flags)){if(null!==(n=qi(n,t,js)))return void(Rs=n)}else{if(null!==(n=Ki(n,t)))return n.flags&=32767,void(Rs=n);if(null===e)return Fs=6,void(Rs=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(Rs=t);Rs=t=e}while(null!==t);0===Fs&&(Fs=5)}function Su(e,t,n){var r=bt,a=zs.transition;try{zs.transition=null,bt=1,function(e,t,n,r){do{Eu()}while(null!==Ks);if(0!==(6&Ts))throw Error(o(327));n=e.finishedWork;var a=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-lt(n),o=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~o}}(e,l),e===Os&&(Rs=Os=null,Ls=0),0===(2064&n.subtreeFlags)&&0===(2064&n.flags)||qs||(qs=!0,Ou(tt,(function(){return Eu(),null}))),l=0!==(15990&n.flags),0!==(15990&n.subtreeFlags)||l){l=zs.transition,zs.transition=null;var i=bt;bt=1;var s=Ts;Ts|=4,Ps.current=null,function(e,t){if(na=Wt,hr(e=mr())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var a=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch(k){n=null;break e}var i=0,s=-1,u=-1,c=0,f=0,d=e,p=null;t:for(;;){for(var m;d!==n||0!==a&&3!==d.nodeType||(s=i+a),d!==l||0!==r&&3!==d.nodeType||(u=i+r),3===d.nodeType&&(i+=d.nodeValue.length),null!==(m=d.firstChild);)p=d,d=m;for(;;){if(d===e)break t;if(p===n&&++c===a&&(s=i),p===l&&++f===r&&(u=i),null!==(m=d.nextSibling))break;p=(d=p).parentNode}d=m}n=-1===s||-1===u?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ra={focusedElem:e,selectionRange:n},Wt=!1,es=t;null!==es;)if(e=(t=es).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,es=e;else for(;null!==es;){t=es;try{var h=t.alternate;if(0!==(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==h){var g=h.memoizedProps,v=h.memoizedState,y=t.stateNode,b=y.getSnapshotBeforeUpdate(t.elementType===t.type?g:ai(t.type,g),v);y.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var w=t.stateNode.containerInfo;1===w.nodeType?w.textContent="":9===w.nodeType&&w.documentElement&&w.removeChild(w.documentElement);break;default:throw Error(o(163))}}catch(k){_u(t,t.return,k)}if(null!==(e=t.sibling)){e.return=t.return,es=e;break}es=t.return}h=rs,rs=!1}(e,n),ys(n,e),gr(ra),Wt=!!na,ra=na=null,e.current=n,ws(n,e,a),Ke(),Ts=s,bt=i,zs.transition=l}else e.current=n;if(qs&&(qs=!1,Ks=e,Gs=a),l=e.pendingLanes,0===l&&(Xs=null),function(e){if(ot&&"function"===typeof ot.onCommitFiberRoot)try{ot.onCommitFiberRoot(at,e,void 0,128===(128&e.current.flags))}catch(t){}}(n.stateNode),ou(e,Ge()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(Qs)throw Qs=!1,e=Ys,Ys=null,e;0!==(1&Gs)&&0!==e.tag&&Eu(),l=e.pendingLanes,0!==(1&l)?e===Zs?Js++:(Js=0,Zs=e):Js=0,Wa()}(e,t,n,r)}finally{zs.transition=a,bt=r}return null}function Eu(){if(null!==Ks){var e=wt(Gs),t=zs.transition,n=bt;try{if(zs.transition=null,bt=16>e?16:e,null===Ks)var r=!1;else{if(e=Ks,Ks=null,Gs=0,0!==(6&Ts))throw Error(o(331));var a=Ts;for(Ts|=4,es=e.current;null!==es;){var l=es,i=l.child;if(0!==(16&es.flags)){var s=l.deletions;if(null!==s){for(var u=0;u<s.length;u++){var c=s[u];for(es=c;null!==es;){var f=es;switch(f.tag){case 0:case 11:case 15:as(8,f,l)}var d=f.child;if(null!==d)d.return=f,es=d;else for(;null!==es;){var p=(f=es).sibling,m=f.return;if(is(f),f===c){es=null;break}if(null!==p){p.return=m,es=p;break}es=m}}}var h=l.alternate;if(null!==h){var g=h.child;if(null!==g){h.child=null;do{var v=g.sibling;g.sibling=null,g=v}while(null!==g)}}es=l}}if(0!==(2064&l.subtreeFlags)&&null!==i)i.return=l,es=i;else e:for(;null!==es;){if(0!==(2048&(l=es).flags))switch(l.tag){case 0:case 11:case 15:as(9,l,l.return)}var y=l.sibling;if(null!==y){y.return=l.return,es=y;break e}es=l.return}}var b=e.current;for(es=b;null!==es;){var w=(i=es).child;if(0!==(2064&i.subtreeFlags)&&null!==w)w.return=i,es=w;else e:for(i=b;null!==es;){if(0!==(2048&(s=es).flags))try{switch(s.tag){case 0:case 11:case 15:os(9,s)}}catch(x){_u(s,s.return,x)}if(s===i){es=null;break e}var k=s.sibling;if(null!==k){k.return=s.return,es=k;break e}es=s.return}}if(Ts=a,Wa(),ot&&"function"===typeof ot.onPostCommitFiberRoot)try{ot.onPostCommitFiberRoot(at,e)}catch(x){}r=!0}return r}finally{bt=n,zs.transition=t}}return!1}function Cu(e,t,n){e=Vo(e,t=hi(0,t=fi(n,t),1),1),t=nu(),null!==e&&(vt(e,1,t),ou(e,t))}function _u(e,t,n){if(3===e.tag)Cu(e,e,n);else for(;null!==t;){if(3===t.tag){Cu(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===Xs||!Xs.has(r))){t=Vo(t,e=gi(t,e=fi(n,e),1),1),e=nu(),null!==t&&(vt(t,1,e),ou(t,e));break}}t=t.return}}function Nu(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=nu(),e.pingedLanes|=e.suspendedLanes&n,Os===e&&(Ls&n)===n&&(4===Fs||3===Fs&&(130023424&Ls)===Ls&&500>Ge()-Bs?mu(e,0):Us|=n),ou(e,t)}function Pu(e,t){0===t&&(0===(1&e.mode)?t=1:(t=ct,0===(130023424&(ct<<=1))&&(ct=4194304)));var n=nu();null!==(e=Io(e,t))&&(vt(e,t,n),ou(e,n))}function zu(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Pu(e,n)}function Tu(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;null!==a&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(o(314))}null!==r&&r.delete(t),Pu(e,n)}function Ou(e,t){return Ye(e,t)}function Ru(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Lu(e,t,n,r){return new Ru(e,t,n,r)}function ju(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Mu(e,t){var n=e.alternate;return null===n?((n=Lu(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Fu(e,t,n,r,a,l){var i=2;if(r=e,"function"===typeof e)ju(e)&&(i=1);else if("string"===typeof e)i=5;else e:switch(e){case S:return Iu(n.children,a,l,t);case E:i=8,a|=8;break;case C:return(e=Lu(12,n,t,2|a)).elementType=C,e.lanes=l,e;case z:return(e=Lu(13,n,t,a)).elementType=z,e.lanes=l,e;case T:return(e=Lu(19,n,t,a)).elementType=T,e.lanes=l,e;case L:return Du(n,a,l,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case _:i=10;break e;case N:i=9;break e;case P:i=11;break e;case O:i=14;break e;case R:i=16,r=null;break e}throw Error(o(130,null==e?e:typeof e,""))}return(t=Lu(i,n,t,a)).elementType=e,t.type=r,t.lanes=l,t}function Iu(e,t,n,r){return(e=Lu(7,e,r,t)).lanes=n,e}function Du(e,t,n,r){return(e=Lu(22,e,r,t)).elementType=L,e.lanes=n,e.stateNode={isHidden:!1},e}function $u(e,t,n){return(e=Lu(6,e,null,t)).lanes=n,e}function Uu(e,t,n){return(t=Lu(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Au(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gt(0),this.expirationTimes=gt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gt(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Vu(e,t,n,r,a,o,l,i,s){return e=new Au(e,t,n,i,s),1===t?(t=1,!0===o&&(t|=8)):t=0,o=Lu(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},$o(o),e}function Bu(e){if(!e)return za;e:{if(Ve(e=e._reactInternals)!==e||1!==e.tag)throw Error(o(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ja(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(o(171))}if(1===e.tag){var n=e.type;if(ja(n))return Ia(e,n,t)}return t}function Wu(e,t,n,r,a,o,l,i,s){return(e=Vu(n,r,!0,e,0,o,0,i,s)).context=Bu(null),n=e.current,(o=Ao(r=nu(),a=ru(n))).callback=void 0!==t&&null!==t?t:null,Vo(n,o,a),e.current.lanes=a,vt(e,a,r),ou(e,r),e}function Hu(e,t,n,r){var a=t.current,o=nu(),l=ru(a);return n=Bu(n),null===t.context?t.context=n:t.pendingContext=n,(t=Ao(o,l)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=Vo(a,t,l))&&(au(e,a,l,o),Bo(e,a,l)),l}function Qu(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Yu(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Xu(e,t){Yu(e,t),(e=e.alternate)&&Yu(e,t)}Cs=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||Oa.current)ki=!0;else{if(0===(e.lanes&n)&&0===(128&t.flags))return ki=!1,function(e,t,n){switch(t.tag){case 3:Oi(t),go();break;case 5:el(t);break;case 1:ja(t.type)&&Da(t);break;case 4:Jo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;Pa(Co,r._currentValue),r._currentValue=a;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(Pa(nl,1&nl.current),t.flags|=128,null):0!==(n&t.child.childLanes)?$i(e,t,n):(Pa(nl,1&nl.current),null!==(e=Qi(e,t,n))?e.sibling:null);Pa(nl,1&nl.current);break;case 19:if(r=0!==(n&t.childLanes),0!==(128&e.flags)){if(r)return Wi(e,t,n);t.flags|=128}if(null!==(a=t.memoizedState)&&(a.rendering=null,a.tail=null,a.lastEffect=null),Pa(nl,nl.current),r)break;return null;case 22:case 23:return t.lanes=0,_i(e,t,n)}return Qi(e,t,n)}(e,t,n);ki=0!==(131072&e.flags)}else ki=!1,lo&&0!==(1048576&t.flags)&&to(t,Xa,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Hi(e,t),e=t.pendingProps;var a=La(t,Ta.current);Ro(t,n),a=yl(null,t,r,e,a,n);var l=bl();return t.flags|=1,"object"===typeof a&&null!==a&&"function"===typeof a.render&&void 0===a.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ja(r)?(l=!0,Da(t)):l=!1,t.memoizedState=null!==a.state&&void 0!==a.state?a.state:null,$o(t),a.updater=li,t.stateNode=a,a._reactInternals=t,ci(t,r,e,n),t=Ti(null,t,r,!0,l,n)):(t.tag=0,lo&&l&&no(t),xi(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Hi(e,t),e=t.pendingProps,r=(a=r._init)(r._payload),t.type=r,a=t.tag=function(e){if("function"===typeof e)return ju(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===P)return 11;if(e===O)return 14}return 2}(r),e=ai(r,e),a){case 0:t=Pi(null,t,r,e,n);break e;case 1:t=zi(null,t,r,e,n);break e;case 11:t=Si(null,t,r,e,n);break e;case 14:t=Ei(null,t,r,ai(r.type,e),n);break e}throw Error(o(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,Pi(e,t,r,a=t.elementType===r?a:ai(r,a),n);case 1:return r=t.type,a=t.pendingProps,zi(e,t,r,a=t.elementType===r?a:ai(r,a),n);case 3:e:{if(Oi(t),null===e)throw Error(o(387));r=t.pendingProps,a=(l=t.memoizedState).element,Uo(e,t),Ho(t,r,null,n);var i=t.memoizedState;if(r=i.element,l.isDehydrated){if(l={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=l,t.memoizedState=l,256&t.flags){t=Ri(e,t,r,n,a=fi(Error(o(423)),t));break e}if(r!==a){t=Ri(e,t,r,n,a=fi(Error(o(424)),t));break e}for(oo=fa(t.stateNode.containerInfo.firstChild),ao=t,lo=!0,io=null,n=Eo(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(go(),r===a){t=Qi(e,t,n);break e}xi(e,t,r,n)}t=t.child}return t;case 5:return el(t),null===e&&fo(t),r=t.type,a=t.pendingProps,l=null!==e?e.memoizedProps:null,i=a.children,aa(r,a)?i=null:null!==l&&aa(r,l)&&(t.flags|=32),Ni(e,t),xi(e,t,i,n),t.child;case 6:return null===e&&fo(t),null;case 13:return $i(e,t,n);case 4:return Jo(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=So(t,null,r,n):xi(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,Si(e,t,r,a=t.elementType===r?a:ai(r,a),n);case 7:return xi(e,t,t.pendingProps,n),t.child;case 8:case 12:return xi(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,l=t.memoizedProps,i=a.value,Pa(Co,r._currentValue),r._currentValue=i,null!==l)if(ir(l.value,i)){if(l.children===a.children&&!Oa.current){t=Qi(e,t,n);break e}}else for(null!==(l=t.child)&&(l.return=t);null!==l;){var s=l.dependencies;if(null!==s){i=l.child;for(var u=s.firstContext;null!==u;){if(u.context===r){if(1===l.tag){(u=Ao(-1,n&-n)).tag=2;var c=l.updateQueue;if(null!==c){var f=(c=c.shared).pending;null===f?u.next=u:(u.next=f.next,f.next=u),c.pending=u}}l.lanes|=n,null!==(u=l.alternate)&&(u.lanes|=n),Oo(l.return,n,t),s.lanes|=n;break}u=u.next}}else if(10===l.tag)i=l.type===t.type?null:l.child;else if(18===l.tag){if(null===(i=l.return))throw Error(o(341));i.lanes|=n,null!==(s=i.alternate)&&(s.lanes|=n),Oo(i,n,t),i=l.sibling}else i=l.child;if(null!==i)i.return=l;else for(i=l;null!==i;){if(i===t){i=null;break}if(null!==(l=i.sibling)){l.return=i.return,i=l;break}i=i.return}l=i}xi(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,Ro(t,n),r=r(a=Lo(a)),t.flags|=1,xi(e,t,r,n),t.child;case 14:return a=ai(r=t.type,t.pendingProps),Ei(e,t,r,a=ai(r.type,a),n);case 15:return Ci(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:ai(r,a),Hi(e,t),t.tag=1,ja(r)?(e=!0,Da(t)):e=!1,Ro(t,n),si(t,r,a),ci(t,r,a,n),Ti(null,t,r,!0,e,n);case 19:return Wi(e,t,n);case 22:return _i(e,t,n)}throw Error(o(156,t.tag))};var qu="function"===typeof reportError?reportError:function(e){console.error(e)};function Ku(e){this._internalRoot=e}function Gu(e){this._internalRoot=e}function Ju(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Zu(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function ec(){}function tc(e,t,n,r,a){var o=n._reactRootContainer;if(o){var l=o;if("function"===typeof a){var i=a;a=function(){var e=Qu(l);i.call(e)}}Hu(t,l,e,a)}else l=function(e,t,n,r,a){if(a){if("function"===typeof r){var o=r;r=function(){var e=Qu(l);o.call(e)}}var l=Wu(t,r,e,0,null,!1,0,"",ec);return e._reactRootContainer=l,e[ga]=l.current,Wr(8===e.nodeType?e.parentNode:e),du(),l}for(;a=e.lastChild;)e.removeChild(a);if("function"===typeof r){var i=r;r=function(){var e=Qu(s);i.call(e)}}var s=Vu(e,0,!1,null,0,!1,0,"",ec);return e._reactRootContainer=s,e[ga]=s.current,Wr(8===e.nodeType?e.parentNode:e),du((function(){Hu(t,s,n,r)})),s}(n,t,e,a,r);return Qu(l)}Gu.prototype.render=Ku.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(o(409));Hu(e,t,null,null)},Gu.prototype.unmount=Ku.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;du((function(){Hu(null,e,null,null)})),t[ga]=null}},Gu.prototype.unstable_scheduleHydration=function(e){if(e){var t=Et();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Lt.length&&0!==t&&t<Lt[n].priority;n++);Lt.splice(n,0,e),0===n&&It(e)}},kt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ft(t.pendingLanes);0!==n&&(yt(t,1|n),ou(t,Ge()),0===(6&Ts)&&(Ws=Ge()+500,Wa()))}break;case 13:du((function(){var t=Io(e,1);if(null!==t){var n=nu();au(t,e,1,n)}})),Xu(e,1)}},xt=function(e){if(13===e.tag){var t=Io(e,134217728);if(null!==t)au(t,e,134217728,nu());Xu(e,134217728)}},St=function(e){if(13===e.tag){var t=ru(e),n=Io(e,t);if(null!==n)au(n,e,t,nu());Xu(e,t)}},Et=function(){return bt},Ct=function(e,t){var n=bt;try{return bt=e,t()}finally{bt=n}},xe=function(e,t,n){switch(t){case"input":if(J(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=Sa(r);if(!a)throw Error(o(90));Y(r),J(r,a)}}}break;case"textarea":oe(e,n);break;case"select":null!=(t=n.value)&&ne(e,!!n.multiple,t,!1)}},Pe=fu,ze=du;var nc={usingClientEntryPoint:!1,Events:[ka,xa,Sa,_e,Ne,fu]},rc={findFiberByHostInstance:wa,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ac={bundleType:rc.bundleType,version:rc.version,rendererPackageName:rc.rendererPackageName,rendererConfig:rc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:w.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=He(e))?null:e.stateNode},findFiberByHostInstance:rc.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var oc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!oc.isDisabled&&oc.supportsFiber)try{at=oc.inject(ac),ot=oc}catch(ce){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nc,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Ju(t))throw Error(o(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:x,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.createRoot=function(e,t){if(!Ju(e))throw Error(o(299));var n=!1,r="",a=qu;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(a=t.onRecoverableError)),t=Vu(e,1,!1,null,0,n,0,r,a),e[ga]=t.current,Wr(8===e.nodeType?e.parentNode:e),new Ku(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(o(188));throw e=Object.keys(e).join(","),Error(o(268,e))}return e=null===(e=He(t))?null:e.stateNode},t.flushSync=function(e){return du(e)},t.hydrate=function(e,t,n){if(!Zu(t))throw Error(o(200));return tc(null,e,t,!0,n)},t.hydrateRoot=function(e,t,n){if(!Ju(e))throw Error(o(405));var r=null!=n&&n.hydratedSources||null,a=!1,l="",i=qu;if(null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(a=!0),void 0!==n.identifierPrefix&&(l=n.identifierPrefix),void 0!==n.onRecoverableError&&(i=n.onRecoverableError)),t=Wu(t,null,e,1,null!=n?n:null,a,0,l,i),e[ga]=t.current,Wr(e),r)for(e=0;e<r.length;e++)a=(a=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new Gu(t)},t.render=function(e,t,n){if(!Zu(t))throw Error(o(200));return tc(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!Zu(e))throw Error(o(40));return!!e._reactRootContainer&&(du((function(){tc(null,null,e,!1,(function(){e._reactRootContainer=null,e[ga]=null}))})),!0)},t.unstable_batchedUpdates=fu,t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Zu(n))throw Error(o(200));if(null==e||void 0===e._reactInternals)throw Error(o(38));return tc(e,t,n,!1,r)},t.version="18.3.1-next-f1338f8080-20240426"},391:(e,t,n)=>{var r=n(950);t.createRoot=r.createRoot,t.hydrateRoot=r.hydrateRoot},950:(e,t,n)=>{!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(730)},153:(e,t,n)=>{var r=n(43),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,o={},u=null,c=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(c=t.ref),t)l.call(t,r)&&!s.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:a,type:e,key:u,ref:c,props:o,_owner:i.current}}t.Fragment=o,t.jsx=u,t.jsxs=u},202:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),s=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),p=Symbol.iterator;var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,g={};function v(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}function y(){}function b(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=v.prototype;var w=b.prototype=new y;w.constructor=b,h(w,v.prototype),w.isPureReactComponent=!0;var k=Array.isArray,x=Object.prototype.hasOwnProperty,S={current:null},E={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,r){var a,o={},l=null,i=null;if(null!=t)for(a in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(l=""+t.key),t)x.call(t,a)&&!E.hasOwnProperty(a)&&(o[a]=t[a]);var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(a in s=e.defaultProps)void 0===o[a]&&(o[a]=s[a]);return{$$typeof:n,type:e,key:l,ref:i,props:o,_owner:S.current}}function _(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var N=/\/+/g;function P(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function z(e,t,a,o,l){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var s=!1;if(null===e)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case n:case r:s=!0}}if(s)return l=l(s=e),e=""===o?"."+P(s,0):o,k(l)?(a="",null!=e&&(a=e.replace(N,"$&/")+"/"),z(l,t,a,"",(function(e){return e}))):null!=l&&(_(l)&&(l=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(l,a+(!l.key||s&&s.key===l.key?"":(""+l.key).replace(N,"$&/")+"/")+e)),t.push(l)),1;if(s=0,o=""===o?".":o+":",k(e))for(var u=0;u<e.length;u++){var c=o+P(i=e[u],u);s+=z(i,t,a,c,l)}else if(c=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"===typeof c)for(e=c.call(e),u=0;!(i=e.next()).done;)s+=z(i=i.value,t,a,c=o+P(i,u++),l);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function T(e,t,n){if(null==e)return e;var r=[],a=0;return z(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function O(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var R={current:null},L={transition:null},j={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:L,ReactCurrentOwner:S};function M(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:T,forEach:function(e,t,n){T(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return T(e,(function(){t++})),t},toArray:function(e){return T(e,(function(e){return e}))||[]},only:function(e){if(!_(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=a,t.Profiler=l,t.PureComponent=b,t.StrictMode=o,t.Suspense=c,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=j,t.act=M,t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=h({},e.props),o=e.key,l=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(l=t.ref,i=S.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)x.call(t,u)&&!E.hasOwnProperty(u)&&(a[u]=void 0===t[u]&&void 0!==s?s[u]:t[u])}var u=arguments.length-2;if(1===u)a.children=r;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];a.children=s}return{$$typeof:n,type:e.type,key:o,ref:l,props:a,_owner:i}},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=C,t.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=_,t.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:O}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=L.transition;L.transition={};try{e()}finally{L.transition=t}},t.unstable_act=M,t.useCallback=function(e,t){return R.current.useCallback(e,t)},t.useContext=function(e){return R.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return R.current.useDeferredValue(e)},t.useEffect=function(e,t){return R.current.useEffect(e,t)},t.useId=function(){return R.current.useId()},t.useImperativeHandle=function(e,t,n){return R.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return R.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return R.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return R.current.useMemo(e,t)},t.useReducer=function(e,t,n){return R.current.useReducer(e,t,n)},t.useRef=function(e){return R.current.useRef(e)},t.useState=function(e){return R.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return R.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return R.current.useTransition()},t.version="18.3.1"},43:(e,t,n)=>{e.exports=n(202)},579:(e,t,n)=>{e.exports=n(153)},234:(e,t)=>{function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,a=e[r];if(!(0<o(a,t)))break e;e[r]=t,e[n]=a,n=r}}function r(e){return 0===e.length?null:e[0]}function a(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,a=e.length,l=a>>>1;r<l;){var i=2*(r+1)-1,s=e[i],u=i+1,c=e[u];if(0>o(s,n))u<a&&0>o(c,s)?(e[r]=c,e[u]=n,r=u):(e[r]=s,e[i]=n,r=i);else{if(!(u<a&&0>o(c,n)))break e;e[r]=c,e[u]=n,r=u}}}return t}function o(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var l=performance;t.unstable_now=function(){return l.now()}}else{var i=Date,s=i.now();t.unstable_now=function(){return i.now()-s}}var u=[],c=[],f=1,d=null,p=3,m=!1,h=!1,g=!1,v="function"===typeof setTimeout?setTimeout:null,y="function"===typeof clearTimeout?clearTimeout:null,b="undefined"!==typeof setImmediate?setImmediate:null;function w(e){for(var t=r(c);null!==t;){if(null===t.callback)a(c);else{if(!(t.startTime<=e))break;a(c),t.sortIndex=t.expirationTime,n(u,t)}t=r(c)}}function k(e){if(g=!1,w(e),!h)if(null!==r(u))h=!0,L(x);else{var t=r(c);null!==t&&j(k,t.startTime-e)}}function x(e,n){h=!1,g&&(g=!1,y(_),_=-1),m=!0;var o=p;try{for(w(n),d=r(u);null!==d&&(!(d.expirationTime>n)||e&&!z());){var l=d.callback;if("function"===typeof l){d.callback=null,p=d.priorityLevel;var i=l(d.expirationTime<=n);n=t.unstable_now(),"function"===typeof i?d.callback=i:d===r(u)&&a(u),w(n)}else a(u);d=r(u)}if(null!==d)var s=!0;else{var f=r(c);null!==f&&j(k,f.startTime-n),s=!1}return s}finally{d=null,p=o,m=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var S,E=!1,C=null,_=-1,N=5,P=-1;function z(){return!(t.unstable_now()-P<N)}function T(){if(null!==C){var e=t.unstable_now();P=e;var n=!0;try{n=C(!0,e)}finally{n?S():(E=!1,C=null)}}else E=!1}if("function"===typeof b)S=function(){b(T)};else if("undefined"!==typeof MessageChannel){var O=new MessageChannel,R=O.port2;O.port1.onmessage=T,S=function(){R.postMessage(null)}}else S=function(){v(T,0)};function L(e){C=e,E||(E=!0,S())}function j(e,n){_=v((function(){e(t.unstable_now())}),n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){h||m||(h=!0,L(x))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return r(u)},t.unstable_next=function(e){switch(p){case 1:case 2:case 3:var t=3;break;default:t=p}var n=p;p=t;try{return e()}finally{p=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=p;p=e;try{return t()}finally{p=n}},t.unstable_scheduleCallback=function(e,a,o){var l=t.unstable_now();switch("object"===typeof o&&null!==o?o="number"===typeof(o=o.delay)&&0<o?l+o:l:o=l,e){case 1:var i=-1;break;case 2:i=250;break;case 5:i=1073741823;break;case 4:i=1e4;break;default:i=5e3}return e={id:f++,callback:a,priorityLevel:e,startTime:o,expirationTime:i=o+i,sortIndex:-1},o>l?(e.sortIndex=o,n(c,e),null===r(u)&&e===r(c)&&(g?(y(_),_=-1):g=!0,j(k,o-l))):(e.sortIndex=i,n(u,e),h||m||(h=!0,L(x))),e},t.unstable_shouldYield=z,t.unstable_wrapCallback=function(e){var t=p;return function(){var n=p;p=t;try{return e.apply(this,arguments)}finally{p=n}}}},853:(e,t,n)=>{e.exports=n(234)}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.m=e,(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(r,a){if(1&a&&(r=this(r)),8&a)return r;if("object"===typeof r&&r){if(4&a&&r.__esModule)return r;if(16&a&&"function"===typeof r.then)return r}var o=Object.create(null);n.r(o);var l={};e=e||[null,t({}),t([]),t(t)];for(var i=2&a&&r;"object"==typeof i&&!~e.indexOf(i);i=t(i))Object.getOwnPropertyNames(i).forEach((e=>l[e]=()=>r[e]));return l.default=()=>r,n.d(o,l),o}})(),n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[])),n.u=e=>"static/js/"+e+".dbe46e5c.chunk.js",n.miniCssF=e=>{},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={},t="dev_news:";n.l=(r,a,o,l)=>{if(e[r])e[r].push(a);else{var i,s;if(void 0!==o)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var f=u[c];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==t+o){i=f;break}}i||(s=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",t+o),i.src=r),e[r]=[a];var d=(t,n)=>{i.onerror=i.onload=null,clearTimeout(p);var a=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((e=>e(n))),t)return t(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),s&&document.head.appendChild(i)}}})(),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/DevNews/",(()=>{var e={792:0};n.f.j=(t,r)=>{var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else{var o=new Promise(((n,r)=>a=e[t]=[n,r]));r.push(a[2]=o);var l=n.p+n.u(t),i=new Error;n.l(l,(r=>{if(n.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),l=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+l+")",i.name="ChunkLoadError",i.type=o,i.request=l,a[1](i)}}),"chunk-"+t,t)}};var t=(t,r)=>{var a,o,l=r[0],i=r[1],s=r[2],u=0;if(l.some((t=>0!==e[t]))){for(a in i)n.o(i,a)&&(n.m[a]=i[a]);if(s)s(n)}for(t&&t(r);u<l.length;u++)o=l[u],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0},r=self.webpackChunkdev_news=self.webpackChunkdev_news||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=n(43),a=n.t(r,2),o=n(391),l=n(579);var i=function(){function e(e){var t=this;this._insertTag=function(e){var n;n=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,n),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var n=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{n.insertRule(e,n.cssRules.length)}catch(r){}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)})),this.tags=[],this.ctr=0},e}(),s=Math.abs,u=String.fromCharCode,c=Object.assign;function f(e){return e.trim()}function d(e,t,n){return e.replace(t,n)}function p(e,t){return e.indexOf(t)}function m(e,t){return 0|e.charCodeAt(t)}function h(e,t,n){return e.slice(t,n)}function g(e){return e.length}function v(e){return e.length}function y(e,t){return t.push(e),e}var b=1,w=1,k=0,x=0,S=0,E="";function C(e,t,n,r,a,o,l){return{value:e,root:t,parent:n,type:r,props:a,children:o,line:b,column:w,length:l,return:""}}function _(e,t){return c(C("",null,null,"",null,null,0),e,{length:-e.length},t)}function N(){return S=x>0?m(E,--x):0,w--,10===S&&(w=1,b--),S}function P(){return S=x<k?m(E,x++):0,w++,10===S&&(w=1,b++),S}function z(){return m(E,x)}function T(){return x}function O(e,t){return h(E,e,t)}function R(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function L(e){return b=w=1,k=g(E=e),x=0,[]}function j(e){return E="",e}function M(e){return f(O(x-1,D(91===e?e+2:40===e?e+1:e)))}function F(e){for(;(S=z())&&S<33;)P();return R(e)>2||R(S)>3?"":" "}function I(e,t){for(;--t&&P()&&!(S<48||S>102||S>57&&S<65||S>70&&S<97););return O(e,T()+(t<6&&32==z()&&32==P()))}function D(e){for(;P();)switch(S){case e:return x;case 34:case 39:34!==e&&39!==e&&D(S);break;case 40:41===e&&D(e);break;case 92:P()}return x}function $(e,t){for(;P()&&e+S!==57&&(e+S!==84||47!==z()););return"/*"+O(t,x-1)+"*"+u(47===e?e:P())}function U(e){for(;!R(z());)P();return O(e,x)}var A="-ms-",V="-moz-",B="-webkit-",W="comm",H="rule",Q="decl",Y="@keyframes";function X(e,t){for(var n="",r=v(e),a=0;a<r;a++)n+=t(e[a],a,e,t)||"";return n}function q(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case Q:return e.return=e.return||e.value;case W:return"";case Y:return e.return=e.value+"{"+X(e.children,r)+"}";case H:e.value=e.props.join(",")}return g(n=X(e.children,r))?e.return=e.value+"{"+n+"}":""}function K(e){return j(G("",null,null,null,[""],e=L(e),0,[0],e))}function G(e,t,n,r,a,o,l,i,s){for(var c=0,f=0,h=l,v=0,b=0,w=0,k=1,x=1,S=1,E=0,C="",_=a,O=o,R=r,L=C;x;)switch(w=E,E=P()){case 40:if(108!=w&&58==m(L,h-1)){-1!=p(L+=d(M(E),"&","&\f"),"&\f")&&(S=-1);break}case 34:case 39:case 91:L+=M(E);break;case 9:case 10:case 13:case 32:L+=F(w);break;case 92:L+=I(T()-1,7);continue;case 47:switch(z()){case 42:case 47:y(Z($(P(),T()),t,n),s);break;default:L+="/"}break;case 123*k:i[c++]=g(L)*S;case 125*k:case 59:case 0:switch(E){case 0:case 125:x=0;case 59+f:-1==S&&(L=d(L,/\f/g,"")),b>0&&g(L)-h&&y(b>32?ee(L+";",r,n,h-1):ee(d(L," ","")+";",r,n,h-2),s);break;case 59:L+=";";default:if(y(R=J(L,t,n,c,f,a,i,C,_=[],O=[],h),o),123===E)if(0===f)G(L,t,R,R,_,o,h,i,O);else switch(99===v&&110===m(L,3)?100:v){case 100:case 108:case 109:case 115:G(e,R,R,r&&y(J(e,R,R,0,0,a,i,C,a,_=[],h),O),a,O,h,i,r?_:O);break;default:G(L,R,R,R,[""],O,0,i,O)}}c=f=b=0,k=S=1,C=L="",h=l;break;case 58:h=1+g(L),b=w;default:if(k<1)if(123==E)--k;else if(125==E&&0==k++&&125==N())continue;switch(L+=u(E),E*k){case 38:S=f>0?1:(L+="\f",-1);break;case 44:i[c++]=(g(L)-1)*S,S=1;break;case 64:45===z()&&(L+=M(P())),v=z(),f=h=g(C=L+=U(T())),E++;break;case 45:45===w&&2==g(L)&&(k=0)}}return o}function J(e,t,n,r,a,o,l,i,u,c,p){for(var m=a-1,g=0===a?o:[""],y=v(g),b=0,w=0,k=0;b<r;++b)for(var x=0,S=h(e,m+1,m=s(w=l[b])),E=e;x<y;++x)(E=f(w>0?g[x]+" "+S:d(S,/&\f/g,g[x])))&&(u[k++]=E);return C(e,t,n,0===a?H:i,u,c,p)}function Z(e,t,n){return C(e,t,n,W,u(S),h(e,2,-2),0)}function ee(e,t,n,r){return C(e,t,n,Q,h(e,0,r),h(e,r+1,-1),r)}var te=function(e,t,n){for(var r=0,a=0;r=a,a=z(),38===r&&12===a&&(t[n]=1),!R(a);)P();return O(e,x)},ne=function(e,t){return j(function(e,t){var n=-1,r=44;do{switch(R(r)){case 0:38===r&&12===z()&&(t[n]=1),e[n]+=te(x-1,t,n);break;case 2:e[n]+=M(r);break;case 4:if(44===r){e[++n]=58===z()?"&\f":"",t[n]=e[n].length;break}default:e[n]+=u(r)}}while(r=P());return e}(L(e),t))},re=new WeakMap,ae=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,n=e.parent,r=e.column===n.column&&e.line===n.line;"rule"!==n.type;)if(!(n=n.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||re.get(n))&&!r){re.set(e,!0);for(var a=[],o=ne(t,a),l=n.props,i=0,s=0;i<o.length;i++)for(var u=0;u<l.length;u++,s++)e.props[s]=a[i]?o[i].replace(/&\f/g,l[u]):l[u]+" "+o[i]}}},oe=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}};function le(e,t){switch(function(e,t){return 45^m(e,0)?(((t<<2^m(e,0))<<2^m(e,1))<<2^m(e,2))<<2^m(e,3):0}(e,t)){case 5103:return B+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return B+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return B+e+V+e+A+e+e;case 6828:case 4268:return B+e+A+e+e;case 6165:return B+e+A+"flex-"+e+e;case 5187:return B+e+d(e,/(\w+).+(:[^]+)/,B+"box-$1$2"+A+"flex-$1$2")+e;case 5443:return B+e+A+"flex-item-"+d(e,/flex-|-self/,"")+e;case 4675:return B+e+A+"flex-line-pack"+d(e,/align-content|flex-|-self/,"")+e;case 5548:return B+e+A+d(e,"shrink","negative")+e;case 5292:return B+e+A+d(e,"basis","preferred-size")+e;case 6060:return B+"box-"+d(e,"-grow","")+B+e+A+d(e,"grow","positive")+e;case 4554:return B+d(e,/([^-])(transform)/g,"$1"+B+"$2")+e;case 6187:return d(d(d(e,/(zoom-|grab)/,B+"$1"),/(image-set)/,B+"$1"),e,"")+e;case 5495:case 3959:return d(e,/(image-set\([^]*)/,B+"$1$`$1");case 4968:return d(d(e,/(.+:)(flex-)?(.*)/,B+"box-pack:$3"+A+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+B+e+e;case 4095:case 3583:case 4068:case 2532:return d(e,/(.+)-inline(.+)/,B+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(g(e)-1-t>6)switch(m(e,t+1)){case 109:if(45!==m(e,t+4))break;case 102:return d(e,/(.+:)(.+)-([^]+)/,"$1"+B+"$2-$3$1"+V+(108==m(e,t+3)?"$3":"$2-$3"))+e;case 115:return~p(e,"stretch")?le(d(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==m(e,t+1))break;case 6444:switch(m(e,g(e)-3-(~p(e,"!important")&&10))){case 107:return d(e,":",":"+B)+e;case 101:return d(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+B+(45===m(e,14)?"inline-":"")+"box$3$1"+B+"$2$3$1"+A+"$2box$3")+e}break;case 5936:switch(m(e,t+11)){case 114:return B+e+A+d(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return B+e+A+d(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return B+e+A+d(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return B+e+A+e+e}return e}var ie=[function(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Q:e.return=le(e.value,e.length);break;case Y:return X([_(e,{value:d(e.value,"@","@"+B)})],r);case H:if(e.length)return function(e,t){return e.map(t).join("")}(e.props,(function(t){switch(function(e,t){return(e=t.exec(e))?e[0]:e}(t,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return X([_(e,{props:[d(t,/:(read-\w+)/,":-moz-$1")]})],r);case"::placeholder":return X([_(e,{props:[d(t,/:(plac\w+)/,":"+B+"input-$1")]}),_(e,{props:[d(t,/:(plac\w+)/,":-moz-$1")]}),_(e,{props:[d(t,/:(plac\w+)/,A+"input-$1")]})],r)}return""}))}}],se=function(e){var t=e.key;if("css"===t){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var r,a,o=e.stylisPlugins||ie,l={},s=[];r=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),(function(e){for(var t=e.getAttribute("data-emotion").split(" "),n=1;n<t.length;n++)l[t[n]]=!0;s.push(e)}));var u,c,f=[q,(c=function(e){u.insert(e)},function(e){e.root||(e=e.return)&&c(e)})],d=function(e){var t=v(e);return function(n,r,a,o){for(var l="",i=0;i<t;i++)l+=e[i](n,r,a,o)||"";return l}}([ae,oe].concat(o,f));a=function(e,t,n,r){u=n,X(K(e?e+"{"+t.styles+"}":t.styles),d),r&&(p.inserted[t.name]=!0)};var p={key:t,sheet:new i({key:t,container:r,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:l,registered:{},insert:a};return p.sheet.hydrate(s),p};function ue(e,t,n){var r="";return n.split(" ").forEach((function(n){void 0!==e[n]?t.push(e[n]+";"):n&&(r+=n+" ")})),r}var ce=function(e,t,n){var r=e.key+"-"+t.name;!1===n&&void 0===e.registered[r]&&(e.registered[r]=t.styles)},fe=function(e,t,n){ce(e,t,n);var r=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var a=t;do{e.insert(t===a?"."+r:"",a,e.sheet,!0),a=a.next}while(void 0!==a)}};var de={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function pe(e){var t=Object.create(null);return function(n){return void 0===t[n]&&(t[n]=e(n)),t[n]}}var me=!1,he=/[A-Z]|^ms/g,ge=/_EMO_([^_]+?)_([^]*?)_EMO_/g,ve=function(e){return 45===e.charCodeAt(1)},ye=function(e){return null!=e&&"boolean"!==typeof e},be=pe((function(e){return ve(e)?e:e.replace(he,"-$&").toLowerCase()})),we=function(e,t){switch(e){case"animation":case"animationName":if("string"===typeof t)return t.replace(ge,(function(e,t,n){return Se={name:t,styles:n,next:Se},t}))}return 1===de[e]||ve(e)||"number"!==typeof t||0===t?t:t+"px"},ke="Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";function xe(e,t,n){if(null==n)return"";var r=n;if(void 0!==r.__emotion_styles)return r;switch(typeof n){case"boolean":return"";case"object":var a=n;if(1===a.anim)return Se={name:a.name,styles:a.styles,next:Se},a.name;var o=n;if(void 0!==o.styles){var l=o.next;if(void 0!==l)for(;void 0!==l;)Se={name:l.name,styles:l.styles,next:Se},l=l.next;return o.styles+";"}return function(e,t,n){var r="";if(Array.isArray(n))for(var a=0;a<n.length;a++)r+=xe(e,t,n[a])+";";else for(var o in n){var l=n[o];if("object"!==typeof l){var i=l;null!=t&&void 0!==t[i]?r+=o+"{"+t[i]+"}":ye(i)&&(r+=be(o)+":"+we(o,i)+";")}else{if("NO_COMPONENT_SELECTOR"===o&&me)throw new Error(ke);if(!Array.isArray(l)||"string"!==typeof l[0]||null!=t&&void 0!==t[l[0]]){var s=xe(e,t,l);switch(o){case"animation":case"animationName":r+=be(o)+":"+s+";";break;default:r+=o+"{"+s+"}"}}else for(var u=0;u<l.length;u++)ye(l[u])&&(r+=be(o)+":"+we(o,l[u])+";")}}return r}(e,t,n);case"function":if(void 0!==e){var i=Se,s=n(e);return Se=i,xe(e,t,s)}}var u=n;if(null==t)return u;var c=t[u];return void 0!==c?c:u}var Se,Ee=/label:\s*([^\s;{]+)\s*(;|$)/g;function Ce(e,t,n){if(1===e.length&&"object"===typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var r=!0,a="";Se=void 0;var o=e[0];null==o||void 0===o.raw?(r=!1,a+=xe(n,t,o)):a+=o[0];for(var l=1;l<e.length;l++){if(a+=xe(n,t,e[l]),r)a+=o[l]}Ee.lastIndex=0;for(var i,s="";null!==(i=Ee.exec(a));)s+="-"+i[1];var u=function(e){for(var t,n=0,r=0,a=e.length;a>=4;++r,a-=4)t=1540483477*(65535&(t=255&e.charCodeAt(r)|(255&e.charCodeAt(++r))<<8|(255&e.charCodeAt(++r))<<16|(255&e.charCodeAt(++r))<<24))+(59797*(t>>>16)<<16),n=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&n)+(59797*(n>>>16)<<16);switch(a){case 3:n^=(255&e.charCodeAt(r+2))<<16;case 2:n^=(255&e.charCodeAt(r+1))<<8;case 1:n=1540483477*(65535&(n^=255&e.charCodeAt(r)))+(59797*(n>>>16)<<16)}return(((n=1540483477*(65535&(n^=n>>>13))+(59797*(n>>>16)<<16))^n>>>15)>>>0).toString(36)}(a)+s;return{name:u,styles:a,next:Se}}var _e=!!a.useInsertionEffect&&a.useInsertionEffect,Ne=_e||function(e){return e()},Pe=(_e||r.useLayoutEffect,r.createContext("undefined"!==typeof HTMLElement?se({key:"css"}):null)),ze=(Pe.Provider,function(e){return(0,r.forwardRef)((function(t,n){var a=(0,r.useContext)(Pe);return e(t,a,n)}))}),Te=r.createContext({});var Oe={}.hasOwnProperty,Re="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Le=function(e){var t=e.cache,n=e.serialized,r=e.isStringTag;return ce(t,n,r),Ne((function(){return fe(t,n,r)})),null},je=ze((function(e,t,n){var a=e.css;"string"===typeof a&&void 0!==t.registered[a]&&(a=t.registered[a]);var o=e[Re],l=[a],i="";"string"===typeof e.className?i=ue(t.registered,l,e.className):null!=e.className&&(i=e.className+" ");var s=Ce(l,void 0,r.useContext(Te));i+=t.key+"-"+s.name;var u={};for(var c in e)Oe.call(e,c)&&"css"!==c&&c!==Re&&(u[c]=e[c]);return u.className=i,n&&(u.ref=n),r.createElement(r.Fragment,null,r.createElement(Le,{cache:t,serialized:s,isStringTag:"string"===typeof o}),r.createElement(o,u))})),Me=(n(219),l.Fragment);function Fe(e,t,n){return Oe.call(t,"css")?l.jsx(je,function(e,t){var n={};for(var r in t)Oe.call(t,r)&&(n[r]=t[r]);return n[Re]=e,n}(e,t),n):l.jsx(e,t,n)}function Ie(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Ce(t)}var De=function(){var e=Ie.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},$e=function e(t){for(var n=t.length,r=0,a="";r<n;r++){var o=t[r];if(null!=o){var l=void 0;switch(typeof o){case"boolean":break;case"object":if(Array.isArray(o))l=e(o);else for(var i in l="",o)o[i]&&i&&(l&&(l+=" "),l+=i);break;default:l=o}l&&(a&&(a+=" "),a+=l)}}return a};var Ue=function(e){var t=e.cache,n=e.serializedArr;return Ne((function(){for(var e=0;e<n.length;e++)fe(t,n[e],!1)})),null},Ae=ze((function(e,t){var n=[],a=function(){for(var e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];var o=Ce(r,t.registered);return n.push(o),ce(t,o,!1),t.key+"-"+o.name},o={css:a,cx:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return function(e,t,n){var r=[],a=ue(e,r,n);return r.length<2?n:a+t(r)}(t.registered,a,$e(n))},theme:r.useContext(Te)},l=e.children(o);return r.createElement(r.Fragment,null,r.createElement(Ue,{cache:t,serializedArr:n}),l)})),Ve=Object.defineProperty,Be=(e,t,n)=>((e,t,n)=>t in e?Ve(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n)(e,"symbol"!==typeof t?t+"":t,n),We=new Map,He=new WeakMap,Qe=0,Ye=void 0;function Xe(e){return Object.keys(e).sort().filter((t=>void 0!==e[t])).map((t=>`${t}_${"root"===t?function(e){return e?(He.has(e)||(Qe+=1,He.set(e,Qe.toString())),He.get(e)):"0"}(e.root):e[t]}`)).toString()}function qe(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:Ye;if("undefined"===typeof window.IntersectionObserver&&void 0!==r){const a=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:"number"===typeof n.threshold?n.threshold:0,time:0,boundingClientRect:a,intersectionRect:a,rootBounds:a}),()=>{}}const{id:a,observer:o,elements:l}=function(e){const t=Xe(e);let n=We.get(t);if(!n){const r=new Map;let a;const o=new IntersectionObserver((t=>{t.forEach((t=>{var n;const o=t.isIntersecting&&a.some((e=>t.intersectionRatio>=e));e.trackVisibility&&"undefined"===typeof t.isVisible&&(t.isVisible=o),null==(n=r.get(t.target))||n.forEach((e=>{e(o,t)}))}))}),e);a=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:o,elements:r},We.set(t,n)}return n}(n),i=l.get(e)||[];return l.has(e)||l.set(e,i),i.push(t),o.observe(e),function(){i.splice(i.indexOf(t),1),0===i.length&&(l.delete(e),o.unobserve(e)),0===l.size&&(o.disconnect(),We.delete(a))}}var Ke=class extends r.Component{constructor(e){super(e),Be(this,"node",null),Be(this,"_unobserveCb",null),Be(this,"handleNode",(e=>{this.node&&(this.unobserve(),e||this.props.triggerOnce||this.props.skip||this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=e||null,this.observeNode()})),Be(this,"handleChange",((e,t)=>{e&&this.props.triggerOnce&&this.unobserve(),function(e){return"function"!==typeof e.children}(this.props)||this.setState({inView:e,entry:t}),this.props.onChange&&this.props.onChange(e,t)})),this.state={inView:!!e.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(e){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold&&e.skip===this.props.skip&&e.trackVisibility===this.props.trackVisibility&&e.delay===this.props.delay||(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:a,fallbackInView:o}=this.props;this._unobserveCb=qe(this.node,this.handleChange,{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:a},o)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:e}=this.props;if("function"===typeof e){const{inView:t,entry:n}=this.state;return e({inView:t,entry:n,ref:this.handleNode})}const{as:t,triggerOnce:n,threshold:a,root:o,rootMargin:l,onChange:i,skip:s,trackVisibility:u,delay:c,initialInView:f,fallbackInView:d,...p}=this.props;return r.createElement(t||"div",{ref:this.handleNode,...p},e)}};function Ge(){let{threshold:e,delay:t,trackVisibility:n,rootMargin:a,root:o,triggerOnce:l,skip:i,initialInView:s,fallbackInView:u,onChange:c}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var f;const[d,p]=r.useState(null),m=r.useRef(),[h,g]=r.useState({inView:!!s,entry:void 0});m.current=c,r.useEffect((()=>{if(i||!d)return;let r;return r=qe(d,((e,t)=>{g({inView:e,entry:t}),m.current&&m.current(e,t),t.isIntersecting&&l&&r&&(r(),r=void 0)}),{root:o,rootMargin:a,threshold:e,trackVisibility:n,delay:t},u),()=>{r&&r()}}),[Array.isArray(e)?e.toString():e,d,o,a,l,i,n,u,t]);const v=null==(f=h.entry)?void 0:f.target,y=r.useRef();d||!v||l||i||y.current===v||(y.current=v,g({inView:!!s,entry:void 0}));const b=[p,h.inView,h.entry];return b.ref=b[0],b.inView=b[1],b.entry=b[2],b}var Je=n(163);De`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`,De`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`,De`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`,De`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`,De`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`,De`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,De`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,De`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,De`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,De`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`,De`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`,De`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,De`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;const Ze=De`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,et=De`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,tt=De`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,nt=De`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,rt=De`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,at=De`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ot=De`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,lt=De`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,it=De`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,st=De`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ut=De`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ct=De`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ft=De`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function dt(e,t){return n=>n?e():t()}function pt(e){return dt(e,(()=>null))}function mt(e){return pt((()=>({opacity:0})))(e)}const ht=e=>{const{cascade:t=!1,damping:n=.5,delay:a=0,duration:o=1e3,fraction:l=0,keyframes:i=at,triggerOnce:s=!1,className:u,style:c,childClassName:f,childStyle:d,children:p,onVisibilityChange:m}=e,h=(0,r.useMemo)((()=>function(e){let{duration:t=1e3,delay:n=0,timingFunction:r="ease",keyframes:a=at,iterationCount:o=1}=e;return Ie`
    animation-duration: ${t}ms;
    animation-timing-function: ${r};
    animation-delay: ${n}ms;
    animation-name: ${a};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${o};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}({keyframes:i,duration:o})),[o,i]);return void 0==p?null:"string"===typeof(g=p)||"number"===typeof g||"boolean"===typeof g?Fe(vt,{...e,animationStyles:h,children:String(p)}):(0,Je.isFragment)(p)?Fe(yt,{...e,animationStyles:h}):Fe(Me,{children:r.Children.map(p,((i,p)=>{if(!(0,r.isValidElement)(i))return null;const g=a+(t?p*o*n:0);switch(i.type){case"ol":case"ul":return Fe(Ae,{children:t=>{let{cx:n}=t;return Fe(i.type,{...i.props,className:n(u,i.props.className),style:Object.assign({},c,i.props.style),children:Fe(ht,{...e,children:i.props.children})})}});case"li":return Fe(Ke,{threshold:l,triggerOnce:s,onChange:m,children:e=>{let{inView:t,ref:n}=e;return Fe(Ae,{children:e=>{let{cx:r}=e;return Fe(i.type,{...i.props,ref:n,className:r(f,i.props.className),css:pt((()=>h))(t),style:Object.assign({},d,i.props.style,mt(!t),{animationDelay:g+"ms"})})}})}});default:return Fe(Ke,{threshold:l,triggerOnce:s,onChange:m,children:e=>{let{inView:t,ref:n}=e;return Fe("div",{ref:n,className:u,css:pt((()=>h))(t),style:Object.assign({},c,mt(!t),{animationDelay:g+"ms"}),children:Fe(Ae,{children:e=>{let{cx:t}=e;return Fe(i.type,{...i.props,className:t(f,i.props.className),style:Object.assign({},d,i.props.style)})}})})}})}}))});var g},gt={display:"inline-block",whiteSpace:"pre"},vt=e=>{const{animationStyles:t,cascade:n=!1,damping:r=.5,delay:a=0,duration:o=1e3,fraction:l=0,triggerOnce:i=!1,className:s,style:u,children:c,onVisibilityChange:f}=e,{ref:d,inView:p}=Ge({triggerOnce:i,threshold:l,onChange:f});return dt((()=>Fe("div",{ref:d,className:s,style:Object.assign({},u,gt),children:c.split("").map(((e,n)=>Fe("span",{css:pt((()=>t))(p),style:{animationDelay:a+n*o*r+"ms"},children:e},n)))})),(()=>Fe(yt,{...e,children:c})))(n)},yt=e=>{const{animationStyles:t,fraction:n=0,triggerOnce:r=!1,className:a,style:o,children:l,onVisibilityChange:i}=e,{ref:s,inView:u}=Ge({triggerOnce:r,threshold:n,onChange:i});return Fe("div",{ref:s,className:a,css:pt((()=>t))(u),style:Object.assign({},o,mt(!u)),children:l})};De`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`,De`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,De`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,De`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,De`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,De`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`,De`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`,De`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`,De`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`,De`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;const bt=De`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,wt=De`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,kt=De`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,xt=De`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,St=De`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,Et=De`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,Ct=De`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,_t=De`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,Nt=De`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,Pt=De`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,zt=De`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,Tt=De`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,Ot=De`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;const Rt=e=>{const{big:t=!1,direction:n,reverse:a=!1,...o}=e,l=(0,r.useMemo)((()=>function(e,t,n){switch(n){case"bottom-left":return t?wt:et;case"bottom-right":return t?kt:tt;case"down":return e?t?St:rt:t?xt:nt;case"left":return e?t?Ct:ot:t?Et:at;case"right":return e?t?Nt:it:t?_t:lt;case"top-left":return t?Pt:st;case"top-right":return t?zt:ut;case"up":return e?t?Ot:ft:t?Tt:ct;default:return t?bt:Ze}}(t,a,n)),[t,n,a]);return Fe(ht,{keyframes:l,...o})};De`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`,De`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,De`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,De`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`,De`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;De`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`,De`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`,De`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,De`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;De`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,De`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,De`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,De`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,De`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,De`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`,De`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`,De`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,De`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,De`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;De`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,De`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,De`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,De`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,De`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,De`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,De`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,De`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;De`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`,De`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,De`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,De`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,De`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,De`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`,De`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,De`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`,De`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`,De`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;class Lt extends r.Component{render(){let{title:e,index:t,description:n,image:r,url:a,author:o,date:i,source:s}=this.props;return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{className:"col-6 col-md-4 col-sm-4 my-4",children:(0,l.jsx)(Rt,{delay:t%12*60,triggerOnce:!0,direction:"right",children:(0,l.jsx)("a",{className:"alink",href:a,target:"_blank",rel:"noreferrer",style:{textDecoration:"none",color:"inherit"},children:(0,l.jsx)("div",{className:"card mb-3 mx-2 my-2",style:{backgroundColor:"inherit",border:"none"},children:(0,l.jsxs)("div",{className:"row g-0",children:[(0,l.jsx)("div",{className:"col-md-4 pt-3",children:(0,l.jsx)("img",{style:{aspectRatio:2},src:r,className:"img-fluid rounded-start",alt:"img"})}),(0,l.jsx)("div",{className:"col-md-8",children:(0,l.jsxs)("div",{className:"card-body alink mx-1",style:{padding:"0px"},children:[(0,l.jsxs)("p",{className:"card-title fs-5",style:{textAlign:"left"},children:[" ",(0,l.jsx)("strong",{children:e.length>60?e.slice(0,50)+"...":e})]}),(0,l.jsx)("p",{className:"card-text",children:(0,l.jsxs)("small",{className:"text-body-secondary",children:["by ",o]})})]})})]})})})})},a)})}}const jt=n.p+"static/media/loading.09e661f951940730c9b5.gif";class Mt extends r.Component{render(){return(0,l.jsx)("div",{className:"text-center ",children:(0,l.jsx)("img",{src:jt,alt:"loading"})})}}const Ft=Mt,It=e=>{const[t,n]=(0,r.useState)(),[a,o]=(0,r.useState)(!1),[i,s]=(0,r.useState)(0),[u,c]=(0,r.useState)(0),[f,d]=(0,r.useState)(e.pagesize);(0,r.useEffect)((()=>{(async()=>{e.setProgress(10);let t=`https://divyanshu-950.github.io/newsAPI/category/${e.category}.json`;o(!0);let r=await fetch(t);e.setProgress(50);let a=await r.json();e.setProgress(70),n(a.articles.slice(i,f)),c(a.articles.length),o(!1),e.setProgress(100)})()}),[]);return(0,l.jsxs)("div",{className:"container",children:[(0,l.jsx)("h1",{className:" text-center ",style:{marginTop:"85px",fontFamily:"math"},children:(0,l.jsx)("small",{className:"text-body-secondary",children:(0,l.jsxs)("strong",{children:["  ","general"!==e.category?e.category.charAt(0).toUpperCase()+e.category.slice(1)+" News":"Top Headlines"," "]})})}),(0,l.jsx)("hr",{}),a&&(0,l.jsx)(Ft,{}),(0,l.jsx)("div",{className:"row",children:t&&t.map(((e,t)=>(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(Lt,{index:t,title:e.title?e.title.slice(0,51):"",description:e.description?e.description.slice(0,100):"",author:e.author,date:e.publishedAt,source:e.source.name,image:e.urlToImage?e.urlToImage:"https://t3.ftcdn.net/jpg/03/27/55/60/240_F_327556002_99c7QmZmwocLwF7ywQ68ChZaBry1DbtD.jpg",url:e.url})})))}),(0,l.jsx)("div",{className:"container d-flex justify-content-center",style:{marginBottom:"50px"},children:(0,l.jsxs)("button",{type:"button",style:f>=u?{display:"none"}:{},className:"btn btn-primary",onClick:async()=>{e.setProgress(10);let r=`https://divyanshu-950.github.io/newsAPI/category/${e.category}.json`;o(!0);let a=await fetch(r);e.setProgress(50);let l=await a.json();e.setProgress(70),n(t.concat(l.articles.slice(i+e.pagesize,f+e.pagesize))),c(l.articles.length),o(!1),e.setProgress(100),s(i+e.pagesize),d(f+e.pagesize)},children:["Load More  ",(0,l.jsx)("i",{class:"fa-solid fa-chevron-down"})]})})]})};It.defaultProps={pagesize:15,category:"general"};const Dt=It;function $t(){return $t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$t.apply(this,arguments)}var Ut;!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(Ut||(Ut={}));const At="popstate";function Vt(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function Bt(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function Wt(e,t){return{usr:e.state,key:e.key,idx:t}}function Ht(e,t,n,r){return void 0===n&&(n=null),$t({pathname:"string"===typeof e?e:e.pathname,search:"",hash:""},"string"===typeof t?Yt(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function Qt(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function Yt(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Xt(e,t,n,r){void 0===r&&(r={});let{window:a=document.defaultView,v5Compat:o=!1}=r,l=a.history,i=Ut.Pop,s=null,u=c();function c(){return(l.state||{idx:null}).idx}function f(){i=Ut.Pop;let e=c(),t=null==e?null:e-u;u=e,s&&s({action:i,location:p.location,delta:t})}function d(e){let t="null"!==a.location.origin?a.location.origin:a.location.href,n="string"===typeof e?e:Qt(e);return n=n.replace(/ $/,"%20"),Vt(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}null==u&&(u=0,l.replaceState($t({},l.state,{idx:u}),""));let p={get action(){return i},get location(){return e(a,l)},listen(e){if(s)throw new Error("A history only accepts one active listener");return a.addEventListener(At,f),s=e,()=>{a.removeEventListener(At,f),s=null}},createHref:e=>t(a,e),createURL:d,encodeLocation(e){let t=d(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){i=Ut.Push;let r=Ht(p.location,e,t);n&&n(r,e),u=c()+1;let f=Wt(r,u),d=p.createHref(r);try{l.pushState(f,"",d)}catch(m){if(m instanceof DOMException&&"DataCloneError"===m.name)throw m;a.location.assign(d)}o&&s&&s({action:i,location:p.location,delta:1})},replace:function(e,t){i=Ut.Replace;let r=Ht(p.location,e,t);n&&n(r,e),u=c();let a=Wt(r,u),f=p.createHref(r);l.replaceState(a,"",f),o&&s&&s({action:i,location:p.location,delta:0})},go:e=>l.go(e)};return p}var qt;!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(qt||(qt={}));new Set(["lazy","caseSensitive","path","id","index","children"]);function Kt(e,t,n){return void 0===n&&(n="/"),Gt(e,t,n,!1)}function Gt(e,t,n,r){let a=dn(("string"===typeof t?Yt(t):t).pathname||"/",n);if(null==a)return null;let o=Jt(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]));return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(o);let l=null;for(let i=0;null==l&&i<o.length;++i){let e=fn(a);l=un(o[i],e,r)}return l}function Jt(e,t,n,r){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r="");let a=(e,a,o)=>{let l={relativePath:void 0===o?e.path||"":o,caseSensitive:!0===e.caseSensitive,childrenIndex:a,route:e};l.relativePath.startsWith("/")&&(Vt(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path "'+r+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),l.relativePath=l.relativePath.slice(r.length));let i=vn([r,l.relativePath]),s=n.concat(l);e.children&&e.children.length>0&&(Vt(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+i+'".'),Jt(e.children,t,s,i)),(null!=e.path||e.index)&&t.push({path:i,score:sn(i,e.index),routesMeta:s})};return e.forEach(((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let r of Zt(e.path))a(e,t,r);else a(e,t)})),t}function Zt(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,a=n.endsWith("?"),o=n.replace(/\?$/,"");if(0===r.length)return a?[o,""]:[o];let l=Zt(r.join("/")),i=[];return i.push(...l.map((e=>""===e?o:[o,e].join("/")))),a&&i.push(...l),i.map((t=>e.startsWith("/")&&""===t?"/":t))}const en=/^:[\w-]+$/,tn=3,nn=2,rn=1,an=10,on=-2,ln=e=>"*"===e;function sn(e,t){let n=e.split("/"),r=n.length;return n.some(ln)&&(r+=on),t&&(r+=nn),n.filter((e=>!ln(e))).reduce(((e,t)=>e+(en.test(t)?tn:""===t?rn:an)),r)}function un(e,t,n){void 0===n&&(n=!1);let{routesMeta:r}=e,a={},o="/",l=[];for(let i=0;i<r.length;++i){let e=r[i],s=i===r.length-1,u="/"===o?t:t.slice(o.length)||"/",c=cn({path:e.relativePath,caseSensitive:e.caseSensitive,end:s},u),f=e.route;if(!c&&s&&n&&!r[r.length-1].route.index&&(c=cn({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},u)),!c)return null;Object.assign(a,c.params),l.push({params:a,pathname:vn([o,c.pathname]),pathnameBase:yn(vn([o,c.pathnameBase])),route:f}),"/"!==c.pathnameBase&&(o=vn([o,c.pathnameBase]))}return l}function cn(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=!0);Bt("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,((e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)")));e.endsWith("*")?(r.push({paramName:"*"}),a+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":""!==e&&"/"!==e&&(a+="(?:(?=\\/|$))");let o=new RegExp(a,t?void 0:"i");return[o,r]}(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let o=a[0],l=o.replace(/(.)\/+$/,"$1"),i=a.slice(1);return{params:r.reduce(((e,t,n)=>{let{paramName:r,isOptional:a}=t;if("*"===r){let e=i[n]||"";l=o.slice(0,o.length-e.length).replace(/(.)\/+$/,"$1")}const s=i[n];return e[r]=a&&!s?void 0:(s||"").replace(/%2F/g,"/"),e}),{}),pathname:o,pathnameBase:l,pattern:e}}function fn(e){try{return e.split("/").map((e=>decodeURIComponent(e).replace(/\//g,"%2F"))).join("/")}catch(t){return Bt(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function dn(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function pn(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function mn(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}function hn(e,t){let n=mn(e);return t?n.map(((e,t)=>t===n.length-1?e.pathname:e.pathnameBase)):n.map((e=>e.pathnameBase))}function gn(e,t,n,r){let a;void 0===r&&(r=!1),"string"===typeof e?a=Yt(e):(a=$t({},e),Vt(!a.pathname||!a.pathname.includes("?"),pn("?","pathname","search",a)),Vt(!a.pathname||!a.pathname.includes("#"),pn("#","pathname","hash",a)),Vt(!a.search||!a.search.includes("#"),pn("#","search","hash",a)));let o,l=""===e||""===a.pathname,i=l?"/":a.pathname;if(null==i)o=n;else{let e=t.length-1;if(!r&&i.startsWith("..")){let t=i.split("/");for(;".."===t[0];)t.shift(),e-=1;a.pathname=t.join("/")}o=e>=0?t[e]:"/"}let s=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:a=""}="string"===typeof e?Yt(e):e,o=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:o,search:bn(r),hash:wn(a)}}(a,o),u=i&&"/"!==i&&i.endsWith("/"),c=(l||"."===i)&&n.endsWith("/");return s.pathname.endsWith("/")||!u&&!c||(s.pathname+="/"),s}const vn=e=>e.join("/").replace(/\/\/+/g,"/"),yn=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),bn=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",wn=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";Error;function kn(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}const xn=["post","put","patch","delete"],Sn=(new Set(xn),["get",...xn]);new Set(Sn),new Set([301,302,303,307,308]),new Set([307,308]);Symbol("deferred");function En(){return En=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},En.apply(this,arguments)}const Cn=r.createContext(null);const _n=r.createContext(null);const Nn=r.createContext(null);const Pn=r.createContext(null);const zn=r.createContext({outlet:null,matches:[],isDataRoute:!1});const Tn=r.createContext(null);function On(){return null!=r.useContext(Pn)}function Rn(){return On()||Vt(!1),r.useContext(Pn).location}function Ln(e){r.useContext(Nn).static||r.useLayoutEffect(e)}function jn(){let{isDataRoute:e}=r.useContext(zn);return e?function(){let{router:e}=Wn(Vn.UseNavigateStable),t=Qn(Bn.UseNavigateStable),n=r.useRef(!1);return Ln((()=>{n.current=!0})),r.useCallback((function(r,a){void 0===a&&(a={}),n.current&&("number"===typeof r?e.navigate(r):e.navigate(r,En({fromRouteId:t},a)))}),[e,t])}():function(){On()||Vt(!1);let e=r.useContext(Cn),{basename:t,future:n,navigator:a}=r.useContext(Nn),{matches:o}=r.useContext(zn),{pathname:l}=Rn(),i=JSON.stringify(hn(o,n.v7_relativeSplatPath)),s=r.useRef(!1);return Ln((()=>{s.current=!0})),r.useCallback((function(n,r){if(void 0===r&&(r={}),!s.current)return;if("number"===typeof n)return void a.go(n);let o=gn(n,JSON.parse(i),l,"path"===r.relative);null==e&&"/"!==t&&(o.pathname="/"===o.pathname?t:vn([t,o.pathname])),(r.replace?a.replace:a.push)(o,r.state,r)}),[t,a,i,l,e])}()}function Mn(e,t){let{relative:n}=void 0===t?{}:t,{future:a}=r.useContext(Nn),{matches:o}=r.useContext(zn),{pathname:l}=Rn(),i=JSON.stringify(hn(o,a.v7_relativeSplatPath));return r.useMemo((()=>gn(e,JSON.parse(i),l,"path"===n)),[e,i,l,n])}function Fn(e,t,n,a){On()||Vt(!1);let{navigator:o}=r.useContext(Nn),{matches:l}=r.useContext(zn),i=l[l.length-1],s=i?i.params:{},u=(i&&i.pathname,i?i.pathnameBase:"/");i&&i.route;let c,f=Rn();if(t){var d;let e="string"===typeof t?Yt(t):t;"/"===u||(null==(d=e.pathname)?void 0:d.startsWith(u))||Vt(!1),c=e}else c=f;let p=c.pathname||"/",m=p;if("/"!==u){let e=u.replace(/^\//,"").split("/");m="/"+p.replace(/^\//,"").split("/").slice(e.length).join("/")}let h=Kt(e,{pathname:m});let g=An(h&&h.map((e=>Object.assign({},e,{params:Object.assign({},s,e.params),pathname:vn([u,o.encodeLocation?o.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?u:vn([u,o.encodeLocation?o.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),l,n,a);return t&&g?r.createElement(Pn.Provider,{value:{location:En({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Ut.Pop}},g):g}function In(){let e=function(){var e;let t=r.useContext(Tn),n=Hn(Bn.UseRouteError),a=Qn(Bn.UseRouteError);if(void 0!==t)return t;return null==(e=n.errors)?void 0:e[a]}(),t=kn(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:a};return r.createElement(r.Fragment,null,r.createElement("h2",null,"Unexpected Application Error!"),r.createElement("h3",{style:{fontStyle:"italic"}},t),n?r.createElement("pre",{style:o},n):null,null)}const Dn=r.createElement(In,null);class $n extends r.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?r.createElement(zn.Provider,{value:this.props.routeContext},r.createElement(Tn.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Un(e){let{routeContext:t,match:n,children:a}=e,o=r.useContext(Cn);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),r.createElement(zn.Provider,{value:t},a)}function An(e,t,n,a){var o;if(void 0===t&&(t=[]),void 0===n&&(n=null),void 0===a&&(a=null),null==e){var l;if(!n)return null;if(n.errors)e=n.matches;else{if(!(null!=(l=a)&&l.v7_partialHydration&&0===t.length&&!n.initialized&&n.matches.length>0))return null;e=n.matches}}let i=e,s=null==(o=n)?void 0:o.errors;if(null!=s){let e=i.findIndex((e=>e.route.id&&void 0!==(null==s?void 0:s[e.route.id])));e>=0||Vt(!1),i=i.slice(0,Math.min(i.length,e+1))}let u=!1,c=-1;if(n&&a&&a.v7_partialHydration)for(let r=0;r<i.length;r++){let e=i[r];if((e.route.HydrateFallback||e.route.hydrateFallbackElement)&&(c=r),e.route.id){let{loaderData:t,errors:r}=n,a=e.route.loader&&void 0===t[e.route.id]&&(!r||void 0===r[e.route.id]);if(e.route.lazy||a){u=!0,i=c>=0?i.slice(0,c+1):[i[0]];break}}}return i.reduceRight(((e,a,o)=>{let l,f=!1,d=null,p=null;var m;n&&(l=s&&a.route.id?s[a.route.id]:void 0,d=a.route.errorElement||Dn,u&&(c<0&&0===o?(m="route-fallback",!1||Yn[m]||(Yn[m]=!0),f=!0,p=null):c===o&&(f=!0,p=a.route.hydrateFallbackElement||null)));let h=t.concat(i.slice(0,o+1)),g=()=>{let t;return t=l?d:f?p:a.route.Component?r.createElement(a.route.Component,null):a.route.element?a.route.element:e,r.createElement(Un,{match:a,routeContext:{outlet:e,matches:h,isDataRoute:null!=n},children:t})};return n&&(a.route.ErrorBoundary||a.route.errorElement||0===o)?r.createElement($n,{location:n.location,revalidation:n.revalidation,component:d,error:l,children:g(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):g()}),null)}var Vn=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Vn||{}),Bn=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Bn||{});function Wn(e){let t=r.useContext(Cn);return t||Vt(!1),t}function Hn(e){let t=r.useContext(_n);return t||Vt(!1),t}function Qn(e){let t=function(){let e=r.useContext(zn);return e||Vt(!1),e}(),n=t.matches[t.matches.length-1];return n.route.id||Vt(!1),n.route.id}const Yn={};a.startTransition;function Xn(e){Vt(!1)}function qn(e){let{basename:t="/",children:n=null,location:a,navigationType:o=Ut.Pop,navigator:l,static:i=!1,future:s}=e;On()&&Vt(!1);let u=t.replace(/^\/*/,"/"),c=r.useMemo((()=>({basename:u,navigator:l,static:i,future:En({v7_relativeSplatPath:!1},s)})),[u,s,l,i]);"string"===typeof a&&(a=Yt(a));let{pathname:f="/",search:d="",hash:p="",state:m=null,key:h="default"}=a,g=r.useMemo((()=>{let e=dn(f,u);return null==e?null:{location:{pathname:e,search:d,hash:p,state:m,key:h},navigationType:o}}),[u,f,d,p,m,h,o]);return null==g?null:r.createElement(Nn.Provider,{value:c},r.createElement(Pn.Provider,{children:n,value:g}))}function Kn(e){let{children:t,location:n}=e;return Fn(Gn(t),n)}new Promise((()=>{}));r.Component;function Gn(e,t){void 0===t&&(t=[]);let n=[];return r.Children.forEach(e,((e,a)=>{if(!r.isValidElement(e))return;let o=[...t,a];if(e.type===r.Fragment)return void n.push.apply(n,Gn(e.props.children,o));e.type!==Xn&&Vt(!1),e.props.index&&e.props.children&&Vt(!1);let l={id:e.props.id||o.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(l.children=Gn(e.props.children,o)),n.push(l)})),n}var Jn=n(950),Zn=n.t(Jn,2);function er(){return er=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},er.apply(this,arguments)}function tr(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);const nr=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"];try{window.__reactRouterVersion="6"}catch(yr){}new Map;const rr=a.startTransition;Zn.flushSync,a.useId;function ar(e){let{basename:t,children:n,future:a,window:o}=e,l=r.useRef();var i;null==l.current&&(l.current=(void 0===(i={window:o,v5Compat:!0})&&(i={}),Xt((function(e,t){let{pathname:n,search:r,hash:a}=e.location;return Ht("",{pathname:n,search:r,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){return"string"===typeof t?t:Qt(t)}),null,i)));let s=l.current,[u,c]=r.useState({action:s.action,location:s.location}),{v7_startTransition:f}=a||{},d=r.useCallback((e=>{f&&rr?rr((()=>c(e))):c(e)}),[c,f]);return r.useLayoutEffect((()=>s.listen(d)),[s,d]),r.createElement(qn,{basename:t,children:n,location:u.location,navigationType:u.action,navigator:s,future:a})}const or="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement,lr=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ir=r.forwardRef((function(e,t){let n,{onClick:a,relative:o,reloadDocument:l,replace:i,state:s,target:u,to:c,preventScrollReset:f,unstable_viewTransition:d}=e,p=tr(e,nr),{basename:m}=r.useContext(Nn),h=!1;if("string"===typeof c&&lr.test(c)&&(n=c,or))try{let e=new URL(window.location.href),t=c.startsWith("//")?new URL(e.protocol+c):new URL(c),n=dn(t.pathname,m);t.origin===e.origin&&null!=n?c=n+t.search+t.hash:h=!0}catch(yr){}let g=function(e,t){let{relative:n}=void 0===t?{}:t;On()||Vt(!1);let{basename:a,navigator:o}=r.useContext(Nn),{hash:l,pathname:i,search:s}=Mn(e,{relative:n}),u=i;return"/"!==a&&(u="/"===i?a:vn([a,i])),o.createHref({pathname:u,search:s,hash:l})}(c,{relative:o}),v=function(e,t){let{target:n,replace:a,state:o,preventScrollReset:l,relative:i,unstable_viewTransition:s}=void 0===t?{}:t,u=jn(),c=Rn(),f=Mn(e,{relative:i});return r.useCallback((t=>{if(function(e,t){return 0===e.button&&(!t||"_self"===t)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)}(t,n)){t.preventDefault();let n=void 0!==a?a:Qt(c)===Qt(f);u(e,{replace:n,state:o,preventScrollReset:l,relative:i,unstable_viewTransition:s})}}),[c,u,f,a,o,n,e,l,i,s])}(c,{replace:i,state:s,target:u,preventScrollReset:f,relative:o,unstable_viewTransition:d});return r.createElement("a",er({},p,{href:n||g,onClick:h||l?a:function(e){a&&a(e),e.defaultPrevented||v(e)},ref:t,target:u}))}));var sr,ur;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(sr||(sr={})),function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(ur||(ur={}));const cr=function(){let e=Rn();return(0,r.useEffect)((()=>{setTimeout((()=>{const e=document.getElementById("navbarSupportedContent");e.classList.contains("show")&&e.classList.remove("show")}),700)}),[e]),(0,l.jsx)("div",{children:(0,l.jsx)("nav",{className:"navbar fixed-top navbar-expand-lg navbar-dark bg-dark",children:(0,l.jsxs)("div",{className:"container-fluid",children:[(0,l.jsx)(ir,{className:"navbar-brand ",to:"/",children:(0,l.jsxs)("strong",{style:{marginRight:"15px"},children:["Dev",(0,l.jsx)("i",{className:"fa-regular fa-newspaper fa-sm"}),"News"]})}),(0,l.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,l.jsx)("span",{className:"navbar-toggler-icon"})}),(0,l.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:(0,l.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[(0,l.jsx)("li",{className:"nav-item",children:(0,l.jsx)(ir,{className:"nav-link "+("/"===e.pathname?"active":""),"aria-current":"page",to:"/",children:"Home"})}),(0,l.jsx)("li",{className:"nav-item",children:(0,l.jsx)(ir,{className:"nav-link "+("/Business"===e.pathname?"active":""),to:"/Business",children:"Business"})}),(0,l.jsx)("li",{className:"nav-item",children:(0,l.jsx)(ir,{className:"nav-link "+("/Entertainment"===e.pathname?"active":""),to:"/Entertainment",children:"Entertainment"})}),(0,l.jsx)("li",{className:"nav-item",children:(0,l.jsx)(ir,{className:"nav-link "+("/Health"===e.pathname?"active":""),to:"/Health",children:"Health"})}),(0,l.jsx)("li",{className:"nav-item",children:(0,l.jsx)(ir,{className:"nav-link "+("/Science"===e.pathname?"active":""),to:"/Science",children:"Science"})}),(0,l.jsx)("li",{className:"nav-item",children:(0,l.jsx)(ir,{className:"nav-link "+("/Sports"===e.pathname?"active":""),to:"/Sports",children:"Sports"})}),(0,l.jsx)("li",{className:"nav-item",children:(0,l.jsx)(ir,{className:"nav-link "+("/Technology"===e.pathname?"active":""),to:"/Technology",children:"Technology"})})]})})]})})})};function fr(){return(fr=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var dr=function(){};function pr(e,t){return Math.random()*(t-e+1)+e}function mr(e,t){return Math.floor(pr(e,t))}const hr=(0,r.forwardRef)((function(e,t){var n=e.progress,a=e.height,o=void 0===a?2:a,l=e.className,i=void 0===l?"":l,s=e.color,u=void 0===s?"red":s,c=e.background,f=void 0===c?"transparent":c,d=e.onLoaderFinished,p=e.transitionTime,m=void 0===p?300:p,h=e.loaderSpeed,g=void 0===h?500:h,v=e.waitingTime,y=void 0===v?1e3:v,b=e.shadow,w=void 0===b||b,k=e.containerStyle,x=void 0===k?{}:k,S=e.style,E=void 0===S?{}:S,C=e.shadowStyle,_=void 0===C?{}:C,N=e.containerClassName,P=void 0===N?"":N,z=(0,r.useRef)(!1),T=(0,r.useState)(0),O=T[0],R=T[1],L=(0,r.useRef)({active:!1,refreshRate:1e3}),j=(0,r.useState)(!1),M=j[0],F=j[1],I=(0,r.useState)({active:!1,value:20}),D=I[0],$=I[1],U={position:"fixed",top:0,left:0,height:o,background:f,zIndex:99999999999,width:"100%"},A={boxShadow:"0 0 10px "+u+", 0 0 10px "+u,width:"5%",opacity:1,position:"absolute",height:"100%",transition:"all "+g+"ms ease",transform:"rotate(3deg) translate(0px, -4px)",left:"-10rem"},V=(0,r.useState)({height:"100%",background:u,transition:"all "+g+"ms ease",width:"0%"}),B=V[0],W=V[1],H=(0,r.useState)(A),Q=H[0],Y=H[1];(0,r.useEffect)((function(){return z.current=!0,function(){z.current=!1}}),[]),(0,r.useImperativeHandle)(t,(function(){return{continuousStart:function(e,t){if(void 0===t&&(t=1e3),!D.active)if(M)console.warn("react-top-loading-bar: You can't use both controlling by props and ref methods to control the bar!");else{var n=e||mr(10,20);L.current={active:!0,refreshRate:t},R(n),G(n)}},staticStart:function(e){if(!L.current.active)if(M)console.warn("react-top-loading-bar: You can't use both controlling by props and ref methods to control the bar!");else{var t=e||mr(30,50);$({active:!0,value:t}),R(t),G(t)}},complete:function(){M?console.warn("react-top-loading-bar: You can't use both controlling by props and ref methods to control the bar!"):(R(100),G(100))}}})),(0,r.useEffect)((function(){W(fr({},B,{background:u})),Y(fr({},Q,{boxShadow:"0 0 10px "+u+", 0 0 5px "+u}))}),[u]),(0,r.useEffect)((function(){if(t){if(t&&void 0!==n)return void console.warn('react-top-loading-bar: You can\'t use both controlling by props and ref methods to control the bar! Please use only props or only ref methods! Ref methods will override props if "ref" property is available.');G(O),F(!1)}else n&&G(n),F(!0)}),[n]);var X,q,K,G=function e(t){t>=100?(W(fr({},B,{width:"100%"})),w&&Y(fr({},Q,{left:t-10+"%"})),setTimeout((function(){z.current&&(W(fr({},B,{opacity:0,width:"100%",transition:"all "+m+"ms ease-out",color:u})),setTimeout((function(){z.current&&(L.current.active&&(L.current=fr({},L.current,{active:!1}),R(0),e(0)),D.active&&($(fr({},D,{active:!1})),R(0),e(0)),d&&d(),R(0),e(0))}),m))}),y)):(W((function(e){return fr({},e,{width:t+"%",opacity:1,transition:t>0?"all "+g+"ms ease":""})})),w&&Y(fr({},Q,{left:t-5.5+"%",transition:t>0?"all "+g+"ms ease":""})))};return X=function(){var e=pr(Math.min(10,(100-O)/5),Math.min(20,(100-O)/3));O+e<95&&(R(O+e),G(O+e))},q=L.current.active?L.current.refreshRate:null,K=(0,r.useRef)(dr),(0,r.useEffect)((function(){K.current=X})),(0,r.useEffect)((function(){}),[void 0]),(0,r.useEffect)((function(){if(null!==q&&!1!==q){var e=setInterval((function(){return K.current()}),q);return function(){return clearInterval(e)}}}),[q]),(0,r.createElement)("div",{className:P,style:fr({},U,x)},(0,r.createElement)("div",{className:i,style:fr({},B,E)},w?(0,r.createElement)("div",{style:fr({},Q,_)}):null))}));const gr=function(){const e=window.matchMedia("(max-width: 1000px)").matches?6:4,t=15,[n,a]=(0,r.useState)(0);return(0,l.jsxs)(ar,{basename:"/DevNews",children:[(0,l.jsx)(cr,{}),(0,l.jsx)(hr,{color:"#f11946",progress:n}),(0,l.jsxs)(Kn,{children:[(0,l.jsx)(Xn,{exact:!0,path:"/",element:(0,l.jsx)(Dt,{items:e,setProgress:a,pagesize:t,category:"general"},"general")}),(0,l.jsx)(Xn,{exact:!0,path:"/Business",element:(0,l.jsx)(Dt,{items:e,setProgress:a,pagesize:t,category:"business"},"business")}),(0,l.jsx)(Xn,{exact:!0,path:"/Entertainment",element:(0,l.jsx)(Dt,{items:e,setProgress:a,pagesize:t,category:"entertainment"},"entertainment")}),(0,l.jsx)(Xn,{exact:!0,path:"/Health",element:(0,l.jsx)(Dt,{items:e,setProgress:a,pagesize:t,category:"health"},"health")}),(0,l.jsx)(Xn,{exact:!0,path:"/Science",element:(0,l.jsx)(Dt,{items:e,setProgress:a,pagesize:t,category:"science"},"science")}),(0,l.jsx)(Xn,{exact:!0,path:"/Sports",element:(0,l.jsx)(Dt,{items:e,setProgress:a,pagesize:t,category:"sports"},"sports")}),(0,l.jsx)(Xn,{exact:!0,path:"/Technology",element:(0,l.jsx)(Dt,{items:e,setProgress:a,pagesize:t,category:"technology"},"technology")})]})]})},vr=e=>{e&&e instanceof Function&&n.e(453).then(n.bind(n,453)).then((t=>{let{getCLS:n,getFID:r,getFCP:a,getLCP:o,getTTFB:l}=t;n(e),r(e),a(e),o(e),l(e)}))};o.createRoot(document.getElementById("root")).render((0,l.jsx)(r.StrictMode,{children:(0,l.jsx)(gr,{})})),vr()})();
//# sourceMappingURL=main.bd497631.js.map