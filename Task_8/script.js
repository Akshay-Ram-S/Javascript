// View templates
const routes = {
  "/": () => "<h1>Home</h1><br /><p>Welcome to home page.</p>",
  "/about": () => "<h1>About</h1><br /><p>This is the about page.</p>",
  "/contact": () => "<h1>Contact</h1><br /><p>This is the contact page</p>",
};

// Router function
function router() {
  const path = location.hash.slice(1) || "/";
  const content = routes[path];

  const content_area = document.getElementById("content-area");
  if (content) {
    content_area.innerHTML = content();
  } else {
    content_area.innerHTML = "<h1>404</h1><p>Page not found.</p>";
  }
}

// Initial load
window.addEventListener("load", router);

// Handle hash changes
window.addEventListener("hashchange", router);
