!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},i=e.parcelRequired870;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in n){var i=n[e];delete n[e];var l={id:e,exports:{}};return t[e]=l,i.call(l.exports,l,l.exports),l.exports}var d=new Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d}).register=function(e,t){n[e]=t},e.parcelRequired870=i);var l=i("lvC14"),d=(l=i("lvC14"),i("cqmI4")),o=i("dYN6e"),s=document.querySelector(".watched-button"),a=document.querySelector(".queue-button"),r=document.querySelector(".empty-lib");function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l.getWatchedItems;try{var t,n=(0,l.getWatchedItems)();(null==n?void 0:n.length)>0&&(console.log(n.length>0),r.classList.add("visually-hidden"));var i=null!==(t=e())&&void 0!==t?t:[],s=(0,o.makeLibraryMovieList)(i);d.listRef.innerHTML=s}catch(e){console.log(e)}}a.addEventListener("click",(function(){a.classList.add("active-button"),s.classList.remove("active-button");var e=(0,l.getQueueItems)();(null==e?void 0:e.length)>0?(r.classList.add("visually-hidden"),c(l.getQueueItems)):(d.listRef.innerHTML="",r.classList.remove("visually-hidden"))})),s.addEventListener("click",(function(){s.classList.add("active-button"),a.classList.remove("active-button");var e=(0,l.getWatchedItems)();(null==e?void 0:e.length)>0?(console.log(e.length>0),r.classList.add("visually-hidden"),c(l.getWatchedItems)):(d.listRef.innerHTML="",r.classList.remove("visually-hidden"))})),c(),i("a4V2g");var u=i("cP0sx"),v=(d=i("cqmI4"),i("9iAID"));document.addEventListener("DOMContentLoaded",(function(){d.listRef.addEventListener("click",u.openMovieInfo),v.btnUp.addEventListener()}))}();
//# sourceMappingURL=library.8bf4b8a8.js.map
