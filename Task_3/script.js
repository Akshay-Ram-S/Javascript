const thumbnails = document.querySelectorAll(".thumbnail");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".close");
const overlay = document.querySelector(".overlay");

thumbnails.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    const fullImgSrc = thumb.getAttribute("src");
    lightboxImg.src = fullImgSrc;
    lightbox.classList.add("show");
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.classList.remove("show");
});

overlay.addEventListener("click", () => {
  lightbox.classList.remove("show");
});
