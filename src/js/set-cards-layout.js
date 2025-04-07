export const setCardsLayout = (cards) => {
  cards.forEach((card) => {
    document.querySelector("#cards-list").insertAdjacentHTML(
      "beforeend",
      `<li id="${card.id}" class="cards__item">
          <img src="${card.webformatURL}" alt="${card.user}" class="cards__img" />
          <h3 class="cards__subtitle">Owner: <span class="cards__span">${card.user}</span></h3>
          <ul class="cards__infos">
            <li class="cards__info">
              Views: <span class="cards__span">${card.views}</span>
            </li>
            <li class="cards__info">
              Downloads: <span class="cards__span">${card.downloads}</span>
            </li>
            <li class="cards__info">
              Likes: <span class="cards__span">${card.likes}</span>
            </li>
          </ul>
          <button class="cards__subbtn" type="button">Learn more</button>
        </li>`
    );
  });
};
