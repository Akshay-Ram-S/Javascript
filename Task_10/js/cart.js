let cart = JSON.parse(localStorage.getItem("cart")) || [];
let products = [];

export function setProducts(data) {
  products = data;
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function addToCart(id) {
  const item = cart.find((i) => i.id === id);
  if (item) {
    item.qty++;
  } else {
    cart.push({ id, qty: 1 });
  }
  saveCart();
  renderCart();
}

function removeFromCart(id) {
  cart = cart.filter((i) => i.id !== id);
  saveCart();
  renderCart();
}

function updateQuantity(id, qty) {
  const item = cart.find((i) => i.id === id);
  if (item) {
    item.qty = qty;
    if (qty <= 0) removeFromCart(id);
    saveCart();
    renderCart();
  }
}

export function renderCart() {
  const cartDiv = document.getElementById("cart-items");
  cartDiv.innerHTML = "";
  let total = 0;

  cart.forEach((item) => {
    const product = products.find((p) => p.id === item.id);
    if (!product) return;

    const itemTotal = product.price * item.qty;
    total += itemTotal;

    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <span>${product.name} (₹${product.price})</span>
      <input type="number" min="1" value="${item.qty}" data-id="${item.id}">
      <button data-id="${item.id}">X</button>
    `;
    cartDiv.appendChild(div);
  });

  document.querySelectorAll("#cart-items input").forEach((input) => {
    input.addEventListener("change", (e) => {
      const id = parseInt(e.target.dataset.id);
      const qty = parseInt(e.target.value);
      updateQuantity(id, qty);
    });
  });

  document.querySelectorAll("#cart-items button").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = parseInt(e.target.dataset.id);
      removeFromCart(id);
    });
  });

  const tax = total * 0.18;
  const discount = total * 0.1;
  const grandTotal = total + tax - discount;

  document.getElementById("total").textContent = total.toFixed(2);
  document.getElementById("tax").textContent = tax.toFixed(2);
  document.getElementById("discount").textContent = discount.toFixed(2);
  document.getElementById("grand-total").textContent = grandTotal.toFixed(2);
}
