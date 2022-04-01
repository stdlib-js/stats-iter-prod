// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-prod@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";var i=t,n=r,o=e,d=s;var a=function(t){var r,e;if(!i(t))throw new TypeError(d("invalid argument. Must provide an iterator. Value: `%s`.",t));for(r=o();"number"==typeof(e=t.next()).value?r(e.value):n(e,"value")&&r(NaN),!e.done;);return r()};export{a as default};
//# sourceMappingURL=index.mjs.map
