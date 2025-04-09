let e;const t=e=>fetch(`https://pixabay.com/api/?key=49666473-3abe1c6e3c5239c6859051d04&lang=en&orientation=horizontal&category=places&editors_choice=true&per_page=4&page=${e}`).then(e=>e.json()),a=e=>{e.forEach(e=>{document.querySelector("#cards-list").insertAdjacentHTML("beforeend",`<li id="${e.id}" class="cards__item">
          <img src="${e.webformatURL}" alt="${e.user}" class="cards__img" />
          <h3 class="cards__subtitle">Owner: <span class="cards__span">${e.user}</span></h3>
          <ul class="cards__infos">
            <li class="cards__info">
              Views: <span class="cards__span">${e.views}</span>
            </li>
            <li class="cards__info">
              Downloads: <span class="cards__span">${e.downloads}</span>
            </li>
            <li class="cards__info">
              Likes: <span class="cards__span">${e.likes}</span>
            </li>
          </ul>
          <button class="cards__subbtn" type="button">Learn more</button>
        </li>`)})};Object.keys(localStorage).includes("page")?e=Number.parseInt(localStorage.getItem("page")):(e=1,localStorage.setItem("page",e));for(let o=0;o<e;o+=1)t(o+1).then(({hits:e})=>{a(e)});document.querySelector("#load-btn").addEventListener("click",()=>{e+=1,localStorage.setItem("page",e),t(e).then(({hits:e})=>{a(e)})});const o=document.querySelector("#cards-list"),s=document.querySelector("#backdrop"),l=document.querySelector("#close-btn");function r(){s.classList.toggle("is-hidden"),document.querySelector("body").classList.toggle("no-scroll")}o.addEventListener("click",e=>{"BUTTON"===e.target.nodeName&&fetch(`https://pixabay.com/api/?key=49666473-3abe1c6e3c5239c6859051d04&id=${e.target.parentElement.id}`).then(e=>e.json()).then(e=>{let{hits:t}=e,[a]=t;console.log(a),s.querySelector('[data-role="img"]').src=a.webformatURL,s.querySelector('[data-role="img"]').alt=a.user,s.querySelector('[data-role="title"]').textContent=a.user,s.querySelector('[data-role="views"]').textContent=a.views,s.querySelector('[data-role="downloads"]').textContent=a.downloads,s.querySelector('[data-role="likes"]').textContent=a.likes,s.querySelector('[data-role="collections"]').textContent=a.collections,s.querySelector('[data-role="tags"]').textContent=a.tags,r()})}),l.addEventListener("click",e=>{s.querySelector('[data-role="img"]').src="#",s.querySelector('[data-role="img"]').alt="",s.querySelector('[data-role="title"]').textContent="",s.querySelector('[data-role="views"]').textContent="",s.querySelector('[data-role="downloads"]').textContent="",s.querySelector('[data-role="likes"]').textContent="",s.querySelector('[data-role="collections"]').textContent="",s.querySelector('[data-role="tags"]').textContent="",r()});
//# sourceMappingURL=js-task-34.7995b48b.js.map
