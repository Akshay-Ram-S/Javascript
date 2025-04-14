const container = document.getElementById("content-container");
const loading = document.getElementById("loading");

let isLoading = false;
let itemCount = 1;
const totalItems = 1000;
const batchSize = 10;

// Generating dummy code
function createContent(start, count) {
  const items = [];
  for (let i = start; i < start + count; i++) {
    items.push(`<div class="content-item">Item #${i}</div>`);
  }
  return items.join("");
}

// Load items
function loadContent() {
  if (isLoading || itemCount >= totalItems) return;

  isLoading = true;
  loading.style.display = "block";

  setTimeout(() => {
    const content = createContent(itemCount, batchSize);
    container.insertAdjacentHTML("beforeend", content);
    itemCount += batchSize;
    isLoading = false;
    loading.style.display = itemCount >= totalItems ? "none" : "block";
  }, 1000);
}

// When cursor is reaches near bottom of existing content new content should be loaded
function handleScroll() {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight - 100) {
    loadContent();
  }
}

// Initial loading of content
loadContent();

// Listening for scrolls
window.addEventListener("scroll", handleScroll);
