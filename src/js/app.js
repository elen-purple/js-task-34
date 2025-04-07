import { getCardsLayout } from "./get-cards-layout";
import { setCardsLayout } from "./set-cards-layout";

let page = 1;

getCardsLayout(page).then(({ hits }) => {
  setCardsLayout(hits);
});

document.querySelector("#load-btn").addEventListener("click", () => {
  page += 1;
  getCardsLayout(page).then(({ hits }) => {
    setCardsLayout(hits);
  });
});
