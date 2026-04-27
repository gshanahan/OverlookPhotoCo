// Future use: image lazy loading, gallery filtering, animations
console.log("Overlook Photography loaded");

function openLightbox(card) {
  const img = card.querySelector("img");
  const exif = card.querySelector(".exif-bar").innerText;

  document.getElementById("lightbox-img").src = img.src;
  document.getElementById("lightbox-exif").innerText = exif;

  document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}