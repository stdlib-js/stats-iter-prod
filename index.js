// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).iterprod=t()}(this,(function(){"use strict";var r=/./,t="function"==typeof Object.defineProperty?Object.defineProperty:null;var n,e=Object.defineProperty,o=Object.prototype,i=o.toString,u=o.__defineGetter__,a=o.__defineSetter__,f=o.__lookupGetter__,c=o.__lookupSetter__;n=function(){try{return t({},"x",{}),!0}catch(r){return!1}}()?e:function(r,t,n){var e,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===i.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(f.call(r,t)||c.call(r,t)?(e=r.__proto__,r.__proto__=o,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),y="get"in n,p="set"in n,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(r,t,n.get),p&&a&&a.call(r,t,n.set),r};var l=n;function y(r,t,n){l(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function p(r){return"boolean"==typeof r}var v="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function s(){return v&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;var w="function"==typeof Symbol?Symbol.toStringTag:"";var m=s()?function(r){var t,n,e,o,i;if(null==r)return b.call(r);n=r[w],i=w,t=null!=(o=r)&&d.call(o,i);try{r[w]=void 0}catch(t){return b.call(r)}return e=b.call(r),t?r[w]=n:delete r[w],e}:function(r){return b.call(r)},A=Boolean.prototype.toString;var g=s();function h(r){return"object"==typeof r&&(r instanceof Boolean||(g?function(r){try{return A.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===m(r)))}function j(r){return p(r)||h(r)}function _(){return new Function("return this;")()}y(j,"isPrimitive",p),y(j,"isObject",h);var U="object"==typeof self?self:null,E="object"==typeof window?window:null,I="object"==typeof global?global:null;var O=function(r){if(arguments.length){if(!p(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return _()}if(U)return U;if(E)return E;if(I)return I;throw new Error("unexpected error. Unable to resolve global object.")}(),S=O.document&&O.document.childNodes,T=Int8Array;function N(){return/^\s*function\s*([^(]*)/i}var F=/^\s*function\s*([^(]*)/i;y(N,"REGEXP",F);var G=Array.isArray?Array.isArray:function(r){return"[object Array]"===m(r)};function H(r){return null!==r&&"object"==typeof r}function P(r){var t,n,e,o;if(("Object"===(n=m(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=F.exec(e.toString()))return t[1]}return H(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}y(H,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!G(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(H));var x="function"==typeof r||"object"==typeof T||"function"==typeof S?function(r){return P(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?P(r).toLowerCase():t};function B(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&function(r){return"function"===x(r)}(r.next)}function L(r){return r!=r}var V=Number.POSITIVE_INFINITY,C=Number.NEGATIVE_INFINITY;function W(r){return r===V||r===C}function k(r,t,n,e){return L(r)||W(r)?(t[e]=r,t[e+n]=0,t):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(t[e]=4503599627370496*r,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}y((function(r){return k(r,[0,0],1,0)}),"assign",k);var M="function"==typeof Uint32Array;var R="function"==typeof Uint32Array?Uint32Array:null;var Y,X="function"==typeof Uint32Array?Uint32Array:void 0;Y=function(){var r,t,n;if("function"!=typeof R)return!1;try{t=new R(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(M&&n instanceof Uint32Array||"[object Uint32Array]"===m(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?X:function(){throw new Error("not implemented")};var Z=Y,q="function"==typeof Float64Array;var z="function"==typeof Float64Array?Float64Array:null;var D,J="function"==typeof Float64Array?Float64Array:void 0;D=function(){var r,t,n;if("function"!=typeof z)return!1;try{t=new z([1,3.14,-3.14,NaN]),n=t,r=(q&&n instanceof Float64Array||"[object Float64Array]"===m(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?J:function(){throw new Error("not implemented")};var K=D,Q="function"==typeof Uint8Array;var $="function"==typeof Uint8Array?Uint8Array:null;var rr,tr="function"==typeof Uint8Array?Uint8Array:void 0;rr=function(){var r,t,n;if("function"!=typeof $)return!1;try{t=new $(t=[1,3.14,-3.14,256,257]),n=t,r=(Q&&n instanceof Uint8Array||"[object Uint8Array]"===m(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?tr:function(){throw new Error("not implemented")};var nr=rr,er="function"==typeof Uint16Array;var or="function"==typeof Uint16Array?Uint16Array:null;var ir,ur="function"==typeof Uint16Array?Uint16Array:void 0;ir=function(){var r,t,n;if("function"!=typeof or)return!1;try{t=new or(t=[1,3.14,-3.14,65536,65537]),n=t,r=(er&&n instanceof Uint16Array||"[object Uint16Array]"===m(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?ur:function(){throw new Error("not implemented")};var ar,fr={uint16:ir,uint8:nr};(ar=new fr.uint16(1))[0]=4660;var cr=52===new fr.uint8(ar.buffer)[0],lr=!0===cr?1:0,yr=new K(1),pr=new Z(yr.buffer);function vr(r){return yr[0]=r,pr[lr]}var sr,br;function dr(r){var t=vr(r);return(t=(2146435072&t)>>>20)-1023|0}!0===cr?(sr=1,br=0):(sr=0,br=1);var wr,mr,Ar={HIGH:sr,LOW:br},gr=new K(1),hr=new Z(gr.buffer),jr=Ar.HIGH,_r=Ar.LOW;function Ur(r,t,n,e){return gr[0]=r,t[e]=hr[jr],t[e+n]=hr[_r],t}function Er(r){return Ur(r,[0,0],1,0)}y(Er,"assign",Ur),!0===cr?(wr=1,mr=0):(wr=0,mr=1);var Ir={HIGH:wr,LOW:mr},Or=new K(1),Sr=new Z(Or.buffer),Tr=Ir.HIGH,Nr=Ir.LOW;function Fr(r,t){return Sr[Tr]=r,Sr[Nr]=t,Or[0]}var Gr=[0,0],Hr=[0,0];function Pr(r,t,n,e){var o,i;return 0===r||L(r)||W(r)?(t[e]=r,t[e+n]=0,t):(k(r,Gr,1,0),i=dr(Gr[0])+Gr[1]+1,Er.assign(Gr[0],Hr,1,0),o=Hr[0],o&=2148532223,r=Fr(o|=1071644672,Hr[1]),t[e]=r,t[e+n]=i,t)}y((function(r){return Pr(r,[0,0],1,0)}),"assign",Pr);var xr=[0,0];var Br=[0,0],Lr=[0,0];function Vr(r,t){var n,e,o,i,u,a;return 0===t||0===r||L(r)||W(r)?r:(k(r,Br,1,0),t+=Br[1],(t+=dr(r=Br[0]))<-1074?(o=0,i=r,Er.assign(o,xr,1,0),u=xr[0],u&=2147483647,a=vr(i),Fr(u|=a&=2147483648,xr[1])):t>1023?r<0?C:V:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,Er.assign(r,Lr,1,0),n=Lr[0],n&=2148532223,e*Fr(n|=t+1023<<20,Lr[1])))}var Cr=[0,0];return function(r){var t,n,e,o,i;if(!B(r))throw new TypeError(function(){var r,t=arguments,n="https://stdlib.io/e/"+t[0]+"?";for(r=1;r<t.length;r++)n+="&arg[]="+encodeURIComponent(t[r]);return n}("0fZ49",r));for(e=.5,i=1,t=function(r){return 0===arguments.length?void 0===o?null:o:(Pr(r,Cr,1,0),i+=Cr[1],(e*=Cr[0])>-.5&&e<.5&&(Pr(e,Cr,1,0),e=Cr[0],i+=Cr[1]),o=Vr(e,i))};!(n=r.next()).done;)"number"==typeof n.value?t(n.value):t(NaN);return t()}}));
//# sourceMappingURL=index.js.map
