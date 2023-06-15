var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequirecf35;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){n[e]=t},e.parcelRequirecf35=o);new(0,(i=o("lWmWv")).default);var i=o("lWmWv"),s=o("7EVBB");const a=new(0,i.default),l=document.querySelector(".movieDescription");!async function(){try{const e=function(e){const t=Math.floor(Math.random()*e.length);return e[t]}((await a.getNewFilms()).data.results),t=await a.getMovieInfo(e.id);l.innerHTML=function({id:e,backdrop_path:t,original_title:n,release_date:o,vote_average:i,vote_count:s,popularity:a,genres:l,overview:r,poster_path:c}){const d=l.map((({name:e})=>e)).join(", ");return`\n    <div class="image-upcoming">  \n    <img loading="lazy" class="gallery-item_img"\n        width="704" height="400"\n        srcset="\n  https://image.tmdb.org/t/p/w780${t} 768w,\n  https://image.tmdb.org/t/p/w300${t} 320w"\n  src="https://image.tmdb.org/t/p/w300${t}" "sizes="(min-width: 1280px) 1280px, (min-width: 768px) 768px, (min-width: 320px) 320px, 100vw "        \n  \n        alt="Movie Poster">\n    </div>\n    <div class="gallery-item" id="${e}">\n      <h3 class="info-item-title">${n}</h3>\n      <div class="info">\n        <ul class="info-item-one-part">\n          <li class="info-item">Release date</li>\n          <li class="info-item">Vote / Votes</li>\n        </ul>\n        <ul class="info-item-two-part">\n          <li class="info-item-two info-item-second">${o}</li>\n          <li class="info-item-two">\n            <span class="info-item-fourth vote-text">${i}</span> / <span class="info-item-fourth vote-text">${s}</span>\n          </li>\n        </ul>\n        <ul class="info-item-one-part">\n          <li class="info-item">Popularity</li>\n          <li class="info-item">Genre</li>\n        </ul>\n        <ul class="info-item-two-part">\n          <li class="info-item-two">${a}</li>\n          <li class="info-item-two">${d}</li>\n        </ul>\n      </div>\n      <div class="info-item-about">\n        <h4 class="info-item-thirty">About</h4>\n        <p class="info-item-about-movie">${r}</p>\n      </div>\n      <button type="button" class="add-remove-btn button-accent" id="fix"></button>\n    </div>`}(t.data);const n=document.querySelector(".add-remove-btn");new(0,s.ServiceAddRemoveBtn)(n,t).setButtonName()}catch(e){console.log(e)}}(),o("5WlD3");i=o("lWmWv");var r=o("jaYit"),c=o("9B8F0");s=o("7EVBB");const d=new(0,o("1pDlj").ScrollService),p=new(0,i.default),u='<svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path class="svg-close-icon" d="M11.25 11.25L0.75 0.75M11.25 0.75L0.75 11.25" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"/>\n</svg>',m=document.querySelector(".hero-content"),h=document.querySelector(".hero-default");async function v(e){document.querySelectorAll(".hero-button-trailer").forEach(((t,n)=>{t.addEventListener("click",(()=>{!async function(e){try{const t=(await p.getTrailer(e)).data.results.find((e=>"Trailer"===e.type||"Official Trailer"===e.name));if(!t)throw new Error("Trailer not found");const n=c.create(`\n        <iframe class="iframe" src="https://www.youtube.com/embed/${t.key}" width="560" height="315" frameborder="0"></iframe>\n      `,{handlerEscape:null,onShow(){d.blockScroll(),this.handlerEscape=f.bind(n),document.addEventListener("keydown",this.handlerEscape)},onClose(){d.restoreScroll(),document.removeEventListener("keydown",this.handlerEscape)}});n.show()}catch(e){(function(){const e=c.create('\n  <div class="trailer-fail">\n  <p class="trailer-fail-text">OOPS...<br/> We are very sorry!<br /> But we couldn’t find the trailer.</p>\n  <button type="button" class="btn-close"><svg class="btn-close--svg">\n  <use href=\'/sprite.a5e5e87b.svg#icon-close\'></use>\n  </svg>\n  </button>\n  <div class="bg-box"></div>\n  </div>\n  '),t=e.element().querySelector(".btn-close");function n(){e.close(),t.removeEventListener("click",n)}return t.addEventListener("click",n),e}
//! modal------------------
)().show(),console.log("Error:",e)}}(e[n].id)}))}))}function f(e){"Escape"===e.code&&this.close()}function w(){this.close()}!async function(){try{const e=await p.getTrend("day"),t=e.data.results.sort((()=>Math.random()-.5));0===e.data.results.length?(function(e){const t='\n  <div class="hero-content">\n  <h1 class="hero-title-default">Let’s Make Your Own Cinema</h1>\n    <p class="hero-description-default">Is a guide to creating a personalized movie theater experience. You\'ll need a projector, screen, and speakers.</p>\n    <a class="hero-link" href="./catalog.html">Get Started</a>\n    \n    <div class="hero-picture-default">\n</div>\n</div>\n';e.innerHTML=t}(h),function(){const e=document.querySelector(".hero-description-default"),t=document.querySelector(".hero-content");t.classList.add("hero-content-default"),t.classList.add("container"),t.classList.remove("hero-content");window.innerWidth>768?e.textContent="Is a guide to creating a personalized movie theater experience. You'll need a projector, screen, and speakers. Decorate your space, choose your films, and stock up on snacks for the full experience.":e.textContent="Is a guide to creating a personalized movie theater experience. You'll need a projector, screen, and speakers. "}()):async function(e,t){const n=e.map((({original_title:e,overview:t,backdrop_path:n,vote_average:o,id:i})=>{const s=function(e,t){return`\n    srcset="https://image.tmdb.org/t/p/w1280${e} 1280w,\n  https://image.tmdb.org/t/p/w780${e} 768w,\n  https://image.tmdb.org/t/p/w300${e} 320w"\n  src="https://image.tmdb.org/t/p/w300${e}" "sizes="(min-width: 1280px) 1280px, (min-width: 768px) 768px, (min-width: 320px) 320px, 100vw "   \n     alt='${t}'`}(n,e);return`\n      <swiper-slide class="hero-film_background hero-wrap"\n      data-movie-id="${i}"\n      ><img class="hero-film_background" width="1280" height="720" ${s}/><div class="swiper-test">\n        <div class="hero-wrap">\n          <h1 class="hero-title">${e}</h1>\n          <div class="hero-stars">${(0,r.getStar)(o)}</div>\n          <p class="hero-description-js">${t}</p>\n          <div class="hero-buttons">\n            <button class="hero-button-trailer ">\n              Watch trailer\n            </button>\n            <button class="hero-button-moredetails\n          ">\n              More details\n            </button>\n          </div>\n        </div></div>\n      </swiper-slide>\n    `})).join("");t.innerHTML=n,v(e),function(e){async function t(e){try{const t=await p.getMovieInfo(e);c.create(function({id:e,poster_path:t,original_title:n,vote_average:o,vote_count:i,popularity:s,genres:a,overview:l}){const r=a.map((({name:e})=>e)).join(", ");return`\n<div class="pop-up-modal visual" id="modalPopUp">\n  <button class="pop-up-modal__close" id="closeModalPopUp">\n    ${u}\n  </button>\n  <div class="pop-up-modal__container">\n    <img src="https://image.tmdb.org/t/p/original${t}" alt="image.png" class="pop-up-modal__img" />\n    <div class="pop-card" id="${e}">\n      <h2 class="pop-up-modal__title">${n}</h2>\n      <div class="pop-up-modal__blok">\n        <ul class="pop-up-modal__list">\n          <li class="pop-up-modal__link">Vote / Votes</li>\n          <li class="pop-up-modal__link">Popularity</li>\n          <li class="pop-up-modal__link">Genre</li>\n          <li class="pop-up-modal__link">ABOUT</li>\n        </ul>\n        <ul class="pop-up-modal__list">\n          <li class="pop-up-modal__link-item item-votes">\n            <div class="vote">${o}</div>\n            &nbsp;/&nbsp;\n            <div class="votes">${i}</div>\n          </li>\n          <li class="pop-up-modal__link-item popularity">${s}</li>\n          <li class="pop-up-modal__link-item genres">${r}</li>\n        </ul>\n      </div>\n      <div class="pop-up-modal__about">\n        <p class="pop-up-modal__about-txt">${l}</p>\n      </div>\n        <div class="pop-up-modal-wrap-btn">\n          <button\n            class="add-remove-btn button-accent"\n            type="button"\n            data-action="add-remove-to-my-library"\n          ></button>\n        </div>\n    </div>\n  </div>\n</div>\n`}(t.data),{handlerEscape:null,handlerBtnClose:null,onShow:e=>{d.blockScroll();const n=e.element().querySelector('button[data-action="add-remove-to-my-library"]');new(0,s.ServiceAddRemoveBtn)(n,t).setButtonName();const o=f.bind(e);document.addEventListener("keydown",o);const i=e.element().querySelector("#closeModalPopUp"),a=w.bind(e);i.addEventListener("click",a)},onClose(){d.restoreScroll(),document.removeEventListener("keydown",this.handlerEscape),document.removeEventListener("click",this.handlerBtnClose)}}).show(),v(t)}catch(e){console.log(e)}}document.querySelectorAll(".hero-button-moredetails").forEach(((n,o)=>{n.addEventListener("click",(()=>{t(e[o].id)}))}))}(e)}(t.slice(0,5),m)}catch(e){console.log("Error:",e)}}(),o("8FnLx");i=o("lWmWv");var g=o("1nG8V"),b=o("gjiCh");const y=document.querySelector(".card-list"),_=new(0,i.default),k=new(0,b.Loader);!async function(){try{k.onShow();const e=(await _.getTrend("week")).data.results.slice(0,3);y.innerHTML=await(0,g.createMarkupFilmsCards)(e)}catch(e){console.log("Error:",e)}k.onClose()}(),o("6Ju3h"),o("6HA5D"),o("iuRNH"),o("i04RF"),o("jnjzE");
//# sourceMappingURL=index.264047d5.js.map
