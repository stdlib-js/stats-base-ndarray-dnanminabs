"use strict";var s=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(u){throw (r=0, u)}};};var n=s(function(b,a){
var v=require('@stdlib/ndarray-base-numel-dimension/dist'),q=require('@stdlib/ndarray-base-stride/dist'),d=require('@stdlib/ndarray-base-offset/dist'),m=require('@stdlib/ndarray-base-data-buffer/dist'),o=require('@stdlib/stats-strided-dnanminabs/dist').ndarray;function f(e){var r=e[0];return o(v(r,0),m(r),q(r,0),d(r))}a.exports=f
});var c=require("path").join,g=require('@stdlib/utils-try-require/dist'),j=require('@stdlib/assert-is-error/dist'),p=n(),i,t=g(c(__dirname,"./native.js"));j(t)?i=p:i=t;module.exports=i;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
