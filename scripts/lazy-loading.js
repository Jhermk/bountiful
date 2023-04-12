const placeholderImage = "https://placehold.co/50x50?text=Loading...";

const areaCards = document.querySelector(".area-cards");
const areaCardImages = areaCards.querySelectorAll("img");
areaCardImages.forEach((img) => {
  img.setAttribute("src", placeholderImage);
});

function lazyLoadImages() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.getAttribute("data-src");
        img.setAttribute("src", src);
        observer.unobserve(img);
      }
    });
  });

  areaCardImages.forEach((img) => {
    observer.observe(img);
  });
}

window.addEventListener("load", lazyLoadImages);
