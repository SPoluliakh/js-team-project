!function(){function e(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=r.parcelRequired870;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,r.call(a.exports,a,a.exports),a.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,r){n[e]=r},r.parcelRequired870=a);var s=a("5p8r0");a("1GZuu");var o,i=a("jgLRi"),u=a("lvC14"),c=a("cP0sx"),l=a("cqmI4"),f=a("bpxeT"),p=a("2TvXO"),d=a("1VFfL"),v=(l=a("cqmI4"),a("eopHt")),h=a("dYN6e"),m=(u=a("lvC14"),a("1GZuu")),L=a("64MGL");function g(e,r,t){var n,a,s,o,i;function u(){var c=Date.now()-o;c<r&&c>=0?n=setTimeout(u,r-c):(n=null,t||(i=e.apply(s,a),s=a=null))}null==r&&(r=100);var c=function(){s=this,a=arguments,o=Date.now();var c=t&&!n;return n||(n=setTimeout(u,r)),c&&(i=e.apply(s,a),s=a=null),i};return c.clear=function(){n&&(clearTimeout(n),n=null)},c.flush=function(){n&&(i=e.apply(s,a),s=a=null,clearTimeout(n),n=null)},c}g.debounce=g,o=g;var R;c=a("cP0sx");function w(){return(w=e(f)(e(p).mark((function r(t){var n,a,s,o,i,c,f,g,w;return e(p).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t.preventDefault(),R=t.currentTarget.searchQuery.value.trim(),(0,L.startSpinner)(),R){r.next=8;break}return l.errorRef.classList.add("show-error"),setTimeout((function(){l.errorRef.classList.remove("show-error")}),3e3),(0,L.stopSpinner)(),r.abrupt("return");case 8:return r.next=10,(0,v.getBySearchName)(R);case 10:if(n=r.sent,a=n.data,s=a.results,o=a.total_results,i=(0,m.makePaginationOptions)(o),0!==s.length){r.next=18;break}return l.errorRef.classList.add("show-error"),setTimeout((function(){l.errorRef.classList.remove("show-error")}),3e3),(0,L.stopSpinner)(),r.abrupt("return");case 18:(0,L.stopSpinner)(),l.errorRef.classList.remove("show-error"),f=null!==(c=(0,u.getGenreOptions)())&&void 0!==c?c:[],g=(0,h.makeMovieList)(s,f),l.listRef.innerHTML=g,l.searchListRef.innerHTML="";try{m.pagination.reset(),m.pagination.off("afterMove",m.updateMoviesList),(w=new(e(d))(l.paginationContainer,i)).off("afterMove",y),w.on("afterMove",y)}catch(e){console.log(e)}case 26:case"end":return r.stop()}}),r)})))).apply(this,arguments)}function y(e){return b.apply(this,arguments)}function b(){return(b=e(f)(e(p).mark((function r(t){var n,a,s,o,i,c;return e(p).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.page,localStorage.setItem("page",n),e.next=4,(0,v.getBySearchName)(R,n);case 4:a=e.sent,s=a.data.results,console.log(a.data),i=null!==(o=(0,u.getGenreOptions)())&&void 0!==o?o:[],c=(0,h.makeMovieList)(s,i),l.listRef.innerHTML=c,document.documentElement.scrollTo({top:0,behavior:"smooth"});case 12:case"end":return e.stop()}}),r)})))).apply(this,arguments)}function M(){return(M=e(f)(e(p).mark((function r(t){var n,a;return e(p).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l.searchListRef.classList.remove("visually-hidden"),l.searchListRef.innerHTML="",R=t.target.value.trim()){e.next=6;break}return l.searchListRef.classList.add("visually-hidden"),e.abrupt("return");case 6:return e.next=8,(0,v.getBySearchName)(R);case 8:if(n=e.sent,0!==(a=n.data.results).length){e.next=14;break}return l.errorRef.classList.add("show-error"),setTimeout((function(){l.errorRef.classList.remove("show-error")}),3e3),e.abrupt("return");case 14:l.searchListRef.insertAdjacentHTML("beforeend",T(a.slice(0,5)));case 15:case"end":return e.stop()}}),r)})))).apply(this,arguments)}function T(e){var r="";return e.forEach((function(e){var t=e.title,n=e.id,a=e.release_date;return r+='<li class="search-list-item" data-id='.concat(n,">").concat(t,' <span class="release-date">(').concat(a?a.slice(0,4):"no info",")</span></li>")})),r}a("jgLRi"),l.searchFormRef.addEventListener("submit",(function(e){return w.apply(this,arguments)})),l.searchInputRef.addEventListener("input",(0,o.debounce)((function(e){return M.apply(this,arguments)}),700)),l.searchListRef.addEventListener("click",c.openMovieInfo),a("5clMQ"),a("1GZuu"),a("a4V2g");var x=a("9iAID");s=a("5p8r0");document.addEventListener("DOMContentLoaded",(function(){(0,u.setGenreOptions)(),(0,i.moviesListMarkupFirstRender)(),l.listRef.addEventListener("click",c.openMovieInfo),x.btnUp.addEventListener(),(0,s.darkmode)()}))}();
//# sourceMappingURL=index.b3da368f.js.map
