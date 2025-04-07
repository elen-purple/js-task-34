export const getCardsLayout = (page) =>
  fetch(
    `https://pixabay.com/api/?key=49666473-3abe1c6e3c5239c6859051d04&lang=en&orientation=horizontal&category=places&editors_choice=true&per_page=4&page=${page}`
  ).then((reponse) => reponse.json());
