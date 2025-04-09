let s;const e=s=>fetch(`https://pixabay.com/api/?key=49666473-3abe1c6e3c5239c6859051d04&lang=en&orientation=horizontal&category=places&editors_choice=true&per_page=4&page=${s}`).then(s=>s.json()),a=s=>{s.forEach(s=>{document.querySelector("#cards-list").insertAdjacentHTML("beforeend",`<li id="${s.id}" class="cards__item">
          <img src="${s.webformatURL}" alt="${s.user}" class="cards__img" />
          <h3 class="cards__subtitle">Owner: <span class="cards__span">${s.user}</span></h3>
          <ul class="cards__infos">
            <li class="cards__info">
              Views: <span class="cards__span">${s.views}</span>
            </li>
            <li class="cards__info">
              Downloads: <span class="cards__span">${s.downloads}</span>
            </li>
            <li class="cards__info">
              Likes: <span class="cards__span">${s.likes}</span>
            </li>
          </ul>
          <button class="cards__subbtn" type="button">Learn more</button>
        </li>`)})};document.querySelector("body").scrollTop=0,Object.keys(localStorage).includes("page")?s=Number.parseInt(localStorage.getItem("page")):(s=1,localStorage.setItem("page",s));for(let t=0;t<s;t+=1)e(t+1).then(({hits:s})=>{a(s)});document.querySelector("#load-btn").addEventListener("click",()=>{s+=1,localStorage.setItem("page",s),e(s).then(({hits:s})=>{a(s)})});
//# sourceMappingURL=js-task-34.9fec095f.js.map
