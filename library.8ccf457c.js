!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},o={},n=t.parcelRequired870;null==n&&((n=function(e){if(e in i)return i[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return i[e]=n,t.call(n.exports,n,n.exports),n.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){o[e]=t},t.parcelRequired870=n);var s=n("lvC14"),l=(s=n("lvC14"),n("cqmI4")),a=n("dYN6e"),c=document.querySelector(".watched-button"),d=document.querySelector(".queue-button"),r=document.querySelector(".empty-lib");function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s.getWatchedItems;try{var t,i=(0,s.getWatchedItems)();(null==i?void 0:i.length)>0&&(console.log(i.length>0),r.classList.add("visually-hidden"));var o=null!==(t=e())&&void 0!==t?t:[],n=(0,a.makeLibraryMovieList)(o);l.listRef.innerHTML=n}catch(e){console.log(e)}}d.addEventListener("click",(function(){d.classList.add("active-button"),c.classList.remove("active-button");var e=(0,s.getQueueItems)();(null==e?void 0:e.length)>0?(r.classList.add("visually-hidden"),p(s.getQueueItems)):(l.listRef.innerHTML="",r.classList.remove("visually-hidden"))})),c.addEventListener("click",(function(){c.classList.add("active-button"),d.classList.remove("active-button");var e=(0,s.getWatchedItems)();(null==e?void 0:e.length)>0?(console.log(e.length>0),r.classList.add("visually-hidden"),p(s.getWatchedItems)):(l.listRef.innerHTML="",r.classList.remove("visually-hidden"))})),p();var h=e(JSON.parse('{"developers":[{"name":"Liubov Yermakova","position":"Developer","git":"https://github.com/LiubovErm","linkedin":"https://www.linkedin.com/in/yermakova-liubov-444b74245/","photo300":"https://i.ibb.co/gSLtb1J/300.jpg","photo600":"https://i.ibb.co/cFrWnfm/600.jpg"},{"name":"Aleksandra Pauk","position":"Developer","git":"https://github.com/AleksandraPauk","linkedin":"","photo300":"https://i.ibb.co/sPGSwHS/300.jpg","photo600":"https://i.ibb.co/8c0LMYh/600.jpg"},{"name":"Kirill Afanasiev","position":"Developer","git":"https://github.com/AfanasevKirillGitHub/","linkedin":"https://www.linkedin.com/in/afanasiev-kirill/","photo300":"https://i.ibb.co/gSLtb1J/300.jpg","photo600":"https://i.ibb.co/cFrWnfm/600.jpg"},{"name":"Vlad Popov","position":"Scrum master","git":"https://github.com/StudentVlad5","linkedin":"https://www.linkedin.com/in/vladyslav-popov-a491232a/","photo300":"https://i.ibb.co/gSLtb1J/300.jpg","photo600":"https://i.ibb.co/cFrWnfm/600.jpg"},{"name":"Viktor Biletskyi","position":"Developer","git":"https://github.com/f0remangod","linkedin":"https://www.linkedin.com/in/viktor-biletskyi-70617a242/","photo300":"https://i.ibb.co/5LnggMW/300.jpg","photo600":"https://i.ibb.co/KWxQ0WV/600.jpg"},{"name":"Yehor Derkach","position":"Developer","git":"https://github.com/GeorgiyDer","linkedin":"","photo300":"https://i.ibb.co/gSLtb1J/300.jpg","photo600":"https://i.ibb.co/cFrWnfm/600.jpg"},{"name":"Andrii Tkachov","position":"Developer","git":"https://github.com/AndriiTkac4ov","linkedin":"","photo300":"https://i.ibb.co/CnBbq4R/300.jpg","photo600":"https://i.ibb.co/pndPBKY/600.jpg"},{"name":"Sergii Poluliakh","position":"Team lead","git":"https://github.com/SPoluliakh","linkedin":"https://www.linkedin.com/in/sergii-poluliakh/","photo300":"https://i.ibb.co/L0WX694/300.jpg","photo600":"https://i.ibb.co/42myh6n/600.jpg"}]}')).developers,u={modalOpen:document.querySelector("#open-modal"),modalClose:document.querySelector("#close-modal"),modal:document.querySelector("#modal"),backdrop:document.querySelector("#backdrop"),list:document.querySelector(".dev-modal__list")};function v(){u.backdrop.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}u.modalOpen.addEventListener("click",(function(){console.log("Click"),v(),e=h.map((function(e){var t=e.name,i=e.position,o=e.git,n=e.photo300,s=e.photo600,l=e.linkedin;return'<li class="dev-modal__card">\n    <picture class="dev-modal__picture">\n      <source srcset="'.concat(n," 1x, ").concat(s,' 2x">\n    </picture>\n\n    <div class="dev-modal__wrapper">\n        <h2 class="dev-modal__name">').concat(t,'</h2>\n        <p class="dev-modal__position">').concat(i,'</p>\n        <ul class="dev-social-network">\n            <li class="dev-social-network__item">\n                <a class="dev-social-network__link" href="').concat(o,'">\n                    <svg class="dev-social-network__icon" width="14px" height="14px">\n                        <use href="./images/sprite.svg#icon-github">\n                        </use>\n                    </svg>\n                </a>\n            </li>\n            <li class="dev-social-network__item">\n                <a class="dev-social-network__link" href="').concat(l,'">\n                    <svg class="dev-social-network__icon" width="14px" height="14px">\n                        <use href="./images/sprite.svg#icon-linkedin">\n                        </use>\n                    </svg>\n                </a>\n            </li>\n        </ul>\n    </div>\n</li>')})).join(""),u.list.insertAdjacentHTML("beforeend",e);var e})),u.backdrop.addEventListener("click",(function(){v()}));var g=n("cP0sx"),m=(l=n("cqmI4"),n("9iAID"));document.addEventListener("DOMContentLoaded",(function(){l.listRef.addEventListener("click",g.openMovieInfo),m.btnUp.addEventListener()}))}();
//# sourceMappingURL=library.8ccf457c.js.map
