import { addToCart } from "./cart.js";

export function renderProducts(products) {
  const container = document.getElementById("products");
  container.innerHTML = "";

  products.forEach((product) => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h4>${product.name}</h4>
      <p>₹${product.price}</p>
      <button data-id="${product.id}">Add to Cart</button>
    `;
    container.appendChild(div);
  });

  container.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = parseInt(e.target.dataset.id);
      addToCart(id);
    });
  });
}
