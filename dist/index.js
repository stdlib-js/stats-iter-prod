"use strict";var u=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var t=u(function(f,a){
var n=require('@stdlib/assert-is-iterator-like/dist'),o=require('@stdlib/stats-incr-prod/dist'),v=require('@stdlib/error-tools-fmtprodmsg/dist');function s(i){var r,e;if(!n(i))throw new TypeError(v('1LL3w',i));for(r=o();e=i.next(),!e.done;)typeof e.value=="number"?r(e.value):r(NaN);return r()}a.exports=s
});var p=t();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
