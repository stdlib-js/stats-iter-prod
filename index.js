// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).iterprod=e()}(this,(function(){"use strict";var r=/./,e="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=Object.defineProperty;function t(r){return"number"==typeof r}function i(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function o(r,e,n){var t=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(t=!0,r=r.substr(1)),r=n?r+i(o):i(o)+r,t&&(r="-"+r)),r}var a=String.prototype.toLowerCase,u=String.prototype.toUpperCase;function c(r){var e,n,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,i=parseInt(n,10),!isFinite(i)){if(!t(n))throw new Error("invalid integer. Value: "+n);i=0}return i<0&&("u"===r.specifier||10!==e)&&(i=4294967295+i+1),i<0?(n=(-i).toString(e),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=i.toString(e),i||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===u.call(r.specifier)?u.call(n):a.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function f(r){return"string"==typeof r}var l=Math.abs,s=String.prototype.toLowerCase,p=String.prototype.toUpperCase,y=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,v=/^(\d+)$/,b=/^(\d+)e/,w=/\.0$/,h=/\.0*e/,m=/(\..*[^0])0*e/;function A(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":l(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=y.call(n,m,"$1e"),n=y.call(n,h,"e"),n=y.call(n,w,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=y.call(n,g,"e+0$1"),n=y.call(n,d,"e-0$1"),r.alternate&&(n=y.call(n,v,"$1."),n=y.call(n,b,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===p.call(r.specifier)?p.call(n):s.call(n)}function j(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}function E(r,e,n){var t=e-r.length;return t<0?r:r=n?r+j(t):j(t)+r}var _=String.fromCharCode,I=isNaN,U=Array.isArray;function x(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function S(r){var e,n,t,i,a,u,l,s,p;if(!U(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",l=1,s=0;s<r.length;s++)if(f(t=r[s]))u+=t;else{if(e=void 0!==t.precision,!(t=x(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+t+"`.");for(t.mapping&&(l=t.mapping),n=t.flags,p=0;p<n.length;p++)switch(i=n.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===t.width){if(t.width=parseInt(arguments[l],10),l+=1,I(t.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[l],10),l+=1,I(t.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[l],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=c(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!I(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=I(a)?String(t.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=A(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=o(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=E(t.arg,t.width,t.padRight)),u+=t.arg||"",l+=1}return u}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function O(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function k(r){var e,n,t,i;for(n=[],i=0,t=T.exec(r);t;)(e=r.slice(i,T.lastIndex-t[0].length)).length&&n.push(e),n.push(O(t)),i=T.lastIndex,t=T.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function F(r){return"string"==typeof r}function H(r){var e,n,t;if(!F(r))throw new TypeError(H("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=k(r),(n=new Array(arguments.length))[0]=e,t=1;t<n.length;t++)n[t]=arguments[t];return S.apply(null,n)}var L,G=Object.prototype,V=G.toString,N=G.__defineGetter__,W=G.__defineSetter__,C=G.__lookupGetter__,$=G.__lookupSetter__;L=function(){try{return e({},"x",{}),!0}catch(r){return!1}}()?n:function(r,e,n){var t,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(H("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===V.call(n))throw new TypeError(H("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(C.call(r,e)||$.call(r,e)?(t=r.__proto__,r.__proto__=G,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),o="get"in n,a="set"in n,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&N&&N.call(r,e,n.get),a&&W&&W.call(r,e,n.set),r};var P=L;function R(r,e,n){P(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}function B(r){return"boolean"==typeof r}var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return M&&"symbol"==typeof Symbol.toStringTag}var X=Object.prototype.toString;var Y=Object.prototype.hasOwnProperty;var z="function"==typeof Symbol?Symbol:void 0,q="function"==typeof z?z.toStringTag:"";var D=Z()?function(r){var e,n,t,i,o;if(null==r)return X.call(r);n=r[q],o=q,e=null!=(i=r)&&Y.call(i,o);try{r[q]=void 0}catch(e){return X.call(r)}return t=X.call(r),e?r[q]=n:delete r[q],t}:function(r){return X.call(r)},J=Boolean,K=Boolean.prototype.toString;var Q=Z();function rr(r){return"object"==typeof r&&(r instanceof J||(Q?function(r){try{return K.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===D(r)))}function er(r){return B(r)||rr(r)}function nr(){return new Function("return this;")()}R(er,"isPrimitive",B),R(er,"isObject",rr);var tr="object"==typeof self?self:null,ir="object"==typeof window?window:null,or="object"==typeof global?global:null,ar="object"==typeof globalThis?globalThis:null;var ur=function(r){if(arguments.length){if(!B(r))throw new TypeError(H("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return nr()}if(ar)return ar;if(tr)return tr;if(ir)return ir;if(or)return or;throw new Error("unexpected error. Unable to resolve global object.")}(),cr=ur.document&&ur.document.childNodes,fr=Int8Array;function lr(){return/^\s*function\s*([^(]*)/i}var sr=/^\s*function\s*([^(]*)/i;R(lr,"REGEXP",sr);var pr=Array.isArray?Array.isArray:function(r){return"[object Array]"===D(r)};function yr(r){return null!==r&&"object"==typeof r}function gr(r){var e,n,t,i;if(("Object"===(n=D(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(t=r.constructor).name)return t.name;if(e=sr.exec(t.toString()))return e[1]}return yr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":n}R(yr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(H("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var n,t;if(!pr(e))return!1;if(0===(n=e.length))return!1;for(t=0;t<n;t++)if(!1===r(e[t]))return!1;return!0}}(yr));var dr="function"==typeof r||"object"==typeof fr||"function"==typeof cr?function(r){return gr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?gr(r).toLowerCase():e};function vr(r){var e=typeof r;return null!==r&&("object"===e||"function"===e)&&function(r){return"function"===dr(r)}(r.next)}function br(r){return r!=r}var wr=Number.POSITIVE_INFINITY,hr=Number.NEGATIVE_INFINITY;function mr(r){return r===wr||r===hr}function Ar(r,e,n,t){return br(r)||mr(r)?(e[t]=r,e[t+n]=0,e):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(e[t]=4503599627370496*r,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}R((function(r){return Ar(r,[0,0],1,0)}),"assign",Ar);var jr="function"==typeof Uint32Array;var Er="function"==typeof Uint32Array?Uint32Array:null;var _r,Ir="function"==typeof Uint32Array?Uint32Array:void 0;_r=function(){var r,e,n;if("function"!=typeof Er)return!1;try{e=new Er(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(jr&&n instanceof Uint32Array||"[object Uint32Array]"===D(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Ir:function(){throw new Error("not implemented")};var Ur=_r,xr="function"==typeof Float64Array;var Sr="function"==typeof Float64Array?Float64Array:null;var Tr,Or="function"==typeof Float64Array?Float64Array:void 0;Tr=function(){var r,e,n;if("function"!=typeof Sr)return!1;try{e=new Sr([1,3.14,-3.14,NaN]),n=e,r=(xr&&n instanceof Float64Array||"[object Float64Array]"===D(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?Or:function(){throw new Error("not implemented")};var kr=Tr,Fr="function"==typeof Uint8Array;var Hr="function"==typeof Uint8Array?Uint8Array:null;var Lr,Gr="function"==typeof Uint8Array?Uint8Array:void 0;Lr=function(){var r,e,n;if("function"!=typeof Hr)return!1;try{e=new Hr(e=[1,3.14,-3.14,256,257]),n=e,r=(Fr&&n instanceof Uint8Array||"[object Uint8Array]"===D(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Gr:function(){throw new Error("not implemented")};var Vr=Lr,Nr="function"==typeof Uint16Array;var Wr="function"==typeof Uint16Array?Uint16Array:null;var Cr,$r="function"==typeof Uint16Array?Uint16Array:void 0;Cr=function(){var r,e,n;if("function"!=typeof Wr)return!1;try{e=new Wr(e=[1,3.14,-3.14,65536,65537]),n=e,r=(Nr&&n instanceof Uint16Array||"[object Uint16Array]"===D(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?$r:function(){throw new Error("not implemented")};var Pr,Rr=Cr,Br={uint16:Rr,uint8:Vr};(Pr=new Br.uint16(1))[0]=4660;var Mr=52===new Br.uint8(Pr.buffer)[0],Zr=!0===Mr?1:0,Xr=new kr(1),Yr=new Ur(Xr.buffer);var zr,qr;function Dr(r){var e=function(r){return Xr[0]=r,Yr[Zr]}(r);return(e=(2146435072&e)>>>20)-1023|0}!0===Mr?(zr=1,qr=0):(zr=0,qr=1);var Jr,Kr,Qr={HIGH:zr,LOW:qr},re=new kr(1),ee=new Ur(re.buffer),ne=Qr.HIGH,te=Qr.LOW;function ie(r,e,n,t){return re[0]=r,e[t]=ee[ne],e[t+n]=ee[te],e}function oe(r){return ie(r,[0,0],1,0)}R(oe,"assign",ie),!0===Mr?(Jr=1,Kr=0):(Jr=0,Kr=1);var ae={HIGH:Jr,LOW:Kr},ue=new kr(1),ce=new Ur(ue.buffer),fe=ae.HIGH,le=ae.LOW;var se=[0,0],pe=[0,0];function ye(r,e,n,t){var i,o;return 0===r||br(r)||mr(r)?(e[t]=r,e[t+n]=0,e):(Ar(r,se,1,0),o=Dr(se[0])+se[1]+1,oe.assign(se[0],pe,1,0),i=pe[0],i&=2148532223,r=function(r,e){return ce[fe]=r,ce[le]=e,ue[0]}(i|=1071644672,pe[1]),e[t]=r,e[t+n]=o,e)}R((function(r){return ye(r,[0,0],1,0)}),"assign",ye);function ge(r){return r===wr||r===hr}var de,ve={uint16:Rr,uint8:Vr};de=function(){var r;return(r=new ve.uint16(1))[0]=4660,52===new ve.uint8(r.buffer)[0]}();var be,we,he=de;!0===he?(be=1,we=0):(be=0,we=1);var me={HIGH:be,LOW:we},Ae=new kr(1),je=new Ur(Ae.buffer),Ee=me.HIGH,_e=me.LOW;function Ie(r,e,n,t){return Ae[0]=r,e[t]=je[Ee],e[t+n]=je[_e],e}function Ue(r){return Ie(r,[0,0],1,0)}R(Ue,"assign",Ie);var xe,Se,Te=!0===he?1:0,Oe=new kr(1),ke=new Ur(Oe.buffer);function Fe(r){return Oe[0]=r,ke[Te]}!0===he?(xe=1,Se=0):(xe=0,Se=1);var He={HIGH:xe,LOW:Se},Le=new kr(1),Ge=new Ur(Le.buffer),Ve=He.HIGH,Ne=He.LOW;function We(r,e){return Ge[Ve]=r,Ge[Ne]=e,Le[0]}var Ce=[0,0];function $e(r,e,n,t){return br(r)||ge(r)?(e[t]=r,e[t+n]=0,e):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(e[t]=4503599627370496*r,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}R((function(r){return $e(r,[0,0],1,0)}),"assign",$e);var Pe=[0,0],Re=[0,0];function Be(r,e){var n,t,i,o,a,u;return 0===e||0===r||br(r)||ge(r)?r:($e(r,Pe,1,0),e+=Pe[1],e+=function(r){var e=Fe(r);return(e=(2146435072&e)>>>20)-1023|0}(r=Pe[0]),e<-1074?(i=0,o=r,Ue.assign(i,Ce,1,0),a=Ce[0],a&=2147483647,u=Fe(o),We(a|=u&=2147483648,Ce[1])):e>1023?r<0?hr:wr:(e<=-1023?(e+=52,t=2220446049250313e-31):t=1,Ue.assign(r,Re,1,0),n=Re[0],n&=2148532223,t*We(n|=e+1023<<20,Re[1])))}var Me=[0,0];return function(r){var e,n,t,i,o;if(!vr(r))throw new TypeError(function(){var r,e=arguments,n="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)n+="&arg[]="+encodeURIComponent(e[r]);return n}("1LL3w,G7",r));for(t=.5,o=1,e=function(r){return 0===arguments.length?void 0===i?null:i:(ye(r,Me,1,0),o+=Me[1],(t*=Me[0])>-.5&&t<.5&&(ye(t,Me,1,0),t=Me[0],o+=Me[1]),i=Be(t,o))};!(n=r.next()).done;)"number"==typeof n.value?e(n.value):e(NaN);return e()}}));
//# sourceMappingURL=index.js.map
