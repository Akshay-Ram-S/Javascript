import { renderProducts } from "./products.js";
import { renderCart, setProducts } from "./cart.js";

let allProducts = [];

fetch("../data.json")
  .then((res) => res.json())
  .then((data) => {
    allProducts = data;
    setProducts(allProducts);
    renderProducts(allProducts);
    renderCart();
    console.log("Done");
  })
  .catch((err) => {
    console.error("Error loading products:", err);
  });

document.getElementById("search").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const query = e.target.value.toLowerCase();
    const filtered = getProducts().filter((p) =>
      p.name.toLowerCase().includes(query)
    );
    renderProducts(filtered);
  }
});

const priceHighLow = document.getElementById("high-low");
const priceLowHigh = document.getElementById("low-high");
const sortByName = document.getElementById("name");
const sortByNameDesc = document.getElementById("name-desc");

priceHighLow.addEventListener("click", function () {
  allProducts.sort((item1, item2) => item2.price - item1.price);
  renderProducts(allProducts);
});

priceLowHigh.addEventListener("click", function () {
  allProducts.sort((item1, item2) => item1.price - item2.price);
  renderProducts(allProducts);
});

sortByName.addEventListener("click", function () {
  allProducts.sort((item1, item2) => item1.name.localeCompare(item2.name));
  renderProducts(allProducts);
});

sortByNameDesc.addEventListener("click", function () {
  allProducts.sort((item1, item2) => item2.name.localeCompare(item1.name));
  renderProducts(allProducts);
});

const categoryFilter = document.getElementById("categoryFilter");
categoryFilter.addEventListener("change", () => {
  const selectedCategory = categoryFilter.value;
  const filtered =
    selectedCategory === "all"
      ? allProducts
      : allProducts.filter((p) => p.category === selectedCategory);

  renderProducts(filtered);
});
