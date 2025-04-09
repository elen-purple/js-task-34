const list = document.querySelector("#cards-list");
const backdrop = document.querySelector("#backdrop");
const closeBtn = document.querySelector("#close-btn");

function toggleModal() {
  backdrop.classList.toggle("is-hidden");
  document.querySelector("body").classList.toggle("no-scroll");
}

list.addEventListener("click", (e) => {
  if (e.target.nodeName === "BUTTON") {
    fetch(
      `https://pixabay.com/api/?key=49666473-3abe1c6e3c5239c6859051d04&id=${e.target.parentElement.id}`
    )
      .then((reponse) => reponse.json())
      .then((obj) => {
        const { hits } = obj;
        const [card] = hits;
        console.log(card);
        backdrop.querySelector(`[data-role="img"]`).src = card.webformatURL;
        backdrop.querySelector(`[data-role="img"]`).alt = card.user;
        backdrop.querySelector(`[data-role="title"]`).textContent = card.user;
        backdrop.querySelector(`[data-role="views"]`).textContent = card.views;
        backdrop.querySelector(`[data-role="downloads"]`).textContent =
          card.downloads;
        backdrop.querySelector(`[data-role="likes"]`).textContent = card.likes;
        backdrop.querySelector(`[data-role="collections"]`).textContent =
          card.collections;
        backdrop.querySelector(`[data-role="tags"]`).textContent = card.tags;
        toggleModal();
      });
  }
});

closeBtn.addEventListener("click", (e) => {
  backdrop.querySelector(`[data-role="img"]`).src = "#";
  backdrop.querySelector(`[data-role="img"]`).alt = "";
  backdrop.querySelector(`[data-role="title"]`).textContent = "";
  backdrop.querySelector(`[data-role="views"]`).textContent = "";
  backdrop.querySelector(`[data-role="downloads"]`).textContent = "";
  backdrop.querySelector(`[data-role="likes"]`).textContent = "";
  backdrop.querySelector(`[data-role="collections"]`).textContent = "";
  backdrop.querySelector(`[data-role="tags"]`).textContent = "";
  toggleModal();
});
