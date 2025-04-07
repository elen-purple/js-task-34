import { getCardsLayout } from "./get-cards-layout";
import { setCardsLayout } from "./set-cards-layout";

let page;
if (Object.keys(localStorage).includes("page")) {
  page = Number.parseInt(localStorage.getItem("page"));
} else {
  page = 1;
  localStorage.setItem("page", page);
}

for (let i = 0; i < page; i += 1) {
  getCardsLayout(i + 1).then(({ hits }) => {
    setCardsLayout(hits);
  });
}

document.querySelector("#load-btn").addEventListener("click", () => {
  page += 1;
  localStorage.setItem("page", page);
  getCardsLayout(page).then(({ hits }) => {
    setCardsLayout(hits);
  });
});
