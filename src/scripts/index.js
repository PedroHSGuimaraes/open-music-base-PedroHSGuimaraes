function createCard(product) {
  const card = document.createElement("li");
  const img = document.createElement("img");
  const p = document.createElement("p");
  const h2 = document.createElement("h2");
  const div = document.createElement("div");
  const span = document.createElement("span");
  const priceP = document.createElement("p");
  const buyButton = document.createElement("button");

  card.classList.add("card");
  img.src = product.img;
  img.alt = product.title;
  img.classList.add("card-image");
  div.classList.add("card-content");
  p.textContent = `${product.band} - ${product.year}`;
  p.classList.add("card-subtitle");
  h2.textContent = product.title;
  h2.classList.add("card-title");
  priceP.textContent = `R$: ${product.price}.00`;
  priceP.classList.add("card-price");
  buyButton.textContent = "Comprar";
  buyButton.classList.add("btn-buy");

  div.appendChild(p);
  div.appendChild(h2);
  card.appendChild(img);
  card.appendChild(div);
  span.appendChild(priceP);
  span.appendChild(buyButton);
  card.appendChild(span);

  return card;
}

function renderButtons(categories) {
  const filterButtons = document.querySelector(".filter-buttons");

  categories.forEach((category) => {
    const li = document.createElement("li");
    const button = document.createElement("button");

    button.innerText = category;
    button.classList.add("btn");

    li.appendChild(button);
    filterButtons.appendChild(li);
  });
}

function renderCards(products, priceFilter) {
  const cardList = document.querySelector(".card-list");
  cardList.innerHTML = "";

  products.forEach((product) => {
    if (priceFilter === 0 || product.price <= priceFilter) {
      const card = createCard(product);
      card.classList.add("fade-in");
      cardList.appendChild(card);
    }
  });
}

renderButtons(categories);
renderCards(products, 0);

function addEvents(categoriesArray, productsArray) {
  const priceValue = document.querySelector(".price-value");
  const filterButtons = document.querySelectorAll(".filter-buttons button");
  const priceInput = document.querySelector(".price-filter");

  let filteredArray = productsArray;
  let categoryIndex = 0;
  let inputValue = priceInput.value;

  filterButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      categoryIndex = index;
      filteredArray =
        categoryIndex === 0
          ? productsArray
          : productsArray.filter(
              (product) =>
                product.category === index &&
                (product.price <= inputValue || inputValue === "")
            );
      renderCards(filteredArray, inputValue);
    });
  });

  priceInput.addEventListener("input", () => {
    inputValue = priceInput.value;
    filteredArray =
      categoryIndex === 0
        ? productsArray
        : productsArray.filter(
            (product) =>
              product.category === categoriesArray[categoryIndex] &&
              (product.price <= inputValue || inputValue === "")
          );
    renderCards(filteredArray, parseFloat(inputValue));
    priceValue.textContent = inputValue;
  });
}
addEvents(categories, products);
