var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},n=e.parcelRequired870;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in i){var n=i[e];delete i[e];var s={id:e,exports:{}};return t[e]=s,n.call(s.exports,s,s.exports),s.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){i[e]=t},e.parcelRequired870=n);var s=n("6TDp9"),l=n("1CpbH"),o=n("bnlKQ"),d=n("3ILHO"),a=n("1699B"),r=(d=n("3ILHO"),n("aOITw"));document.addEventListener("DOMContentLoaded",(()=>{d.listRef.addEventListener("click",a.openMovieInfo),r.btnUp.addEventListener()})),d.zeroPlus.addEventListener("click",(async function(e=1){try{const t=await(0,s.getPopularForKidsZero)(e),{results:i}=t.data,n=(0,l.getGenreOptions)()??[],a=(0,o.makeMovieList)(i,n);d.listRef.innerHTML=a}catch(e){console.log(e)}d.zeroPlus.disabled=!0,d.sixPlus.disabled=!1,d.twelvePlus.disabled=!1})),d.sixPlus.addEventListener("click",(async function(e=1){try{const t=await(0,s.getPopularForKidsSix)(e),{results:i}=t.data,n=(0,l.getGenreOptions)()??[],a=(0,o.makeMovieList)(i,n);d.listRef.innerHTML=a}catch(e){console.log(e)}d.zeroPlus.disabled=!1,d.sixPlus.disabled=!0,d.twelvePlus.disabled=!1})),d.twelvePlus.addEventListener("click",(async function(e=1){try{const t=await(0,s.getPopularForKidsTwelve)(e),{results:i}=t.data,n=(0,l.getGenreOptions)()??[],a=(0,o.makeMovieList)(i,n);d.listRef.innerHTML=a}catch(e){console.log(e)}d.zeroPlus.disabled=!1,d.sixPlus.disabled=!1,d.twelvePlus.disabled=!0}));
//# sourceMappingURL=kids.62ba3d3b.js.map
