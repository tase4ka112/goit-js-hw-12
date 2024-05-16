import{a as m,S as y,i as c}from"./assets/vendor-f736e62a.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const f of s.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();const L="https://pixabay.com/api/",b="43794074-5ff9b3f6f51ca0335da2b7303",w="photo",E="horizontal",$=!0,v=15;async function p(o,e){try{const{data:i}=await m.get(`${L}?key=${b}&q=${o}&image_type=${w}&orientation=${E}&safesearch=${$}&page=${e}&per_page=${v}`);return i}catch(i){console.log(i)}}const R=new y(".gallery-link"),g=(o,e)=>{const i=o.map(r=>` <li class="gallery-item">
        <a class="gallery-link" href="${r.largeImageURL}" data-lightbox="gallery">
    <img class="gallery-image" src="${r.webformatURL}" alt="${r.tags}">
          <ul class="stats-block">
            <li>
              <span>Likes</span>
              <span>${r.likes}</span> 
            </li>
            <li>
              <span>Views</span>
              <span>${r.views}</span>
            </li>
            <li>
              <span>Coments</span>
              <span>${r.comments}</span>
            </li>
            <li>
              <span>Download</span>
              <span>${r.downloads}</span>
            </li>
          </ul>
        </a>
      </li>`).join("");e.insertAdjacentHTML("beforeend",i),R.refresh()},h=document.querySelector("#search-form"),a=document.querySelector("#gallery"),d=document.querySelector(".loader"),n=document.querySelector("#loadMore");let l=1,u="";h.addEventListener("submit",async o=>{if(o.preventDefault(),u=o.target.elements.searchInput.value.trim(),!u){a.innerHTML="",c.show({message:"Please enter text to find something!",position:"topRight",timeout:2e3,color:"red"});return}a.innerHTML="",d.classList.remove("is-hidden"),l=1;try{const e=await p(u,l);if(h.searchInput.value="",a.innerHTML="",!e.hits.length){c.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:2e3,color:"red"}),n.classList.add("is-hidden"),a.innerHTML="",d.classList.add("is-hidden");return}g(e.hits,a),n.classList.remove("is-hidden"),d.classList.add("is-hidden"),l*15>=e.totalHits&&(n.classList.add("is-hidden"),c.show({title:"Error",message:"We're sorry, but you've reached the end of search results.",position:"topRight",messageColor:"#ffffff",timeout:3e3,backgroundColor:"#ef4040"}))}catch(e){console.log(e),c.error({title:"Error",message:"An error occurred while fetching images. Please try again later.",position:"topRight",messageColor:"#ffffff",timeout:3e3,backgroundColor:"#ef4040"}),d.classList.add("is-hidden"),n.classList.add("is-hidden")}});n.addEventListener("click",async o=>{l+=1;const e=await p(u,l);S(a),g(e.hits,a),l*15>=e.totalHits&&(n.classList.add("is-hidden"),c.show({message:"We're sorry, but you've reached the end of search results.",position:"topRight",messageColor:"#ffffff",timeout:3e3,backgroundColor:"#ef4040"}))});function S(o){setTimeout(()=>{const{height:e}=o.firstElementChild.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})},500)}
//# sourceMappingURL=commonHelpers.js.map
