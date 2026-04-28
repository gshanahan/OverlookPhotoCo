// Future use: image lazy loading, gallery filtering, animations
console.log("Overlook Photography loaded");

let currentIndex = 0;
let currentPhotos = [];
new Image().src = currentPhotos[currentIndex + 1]?.src;

//UPDATE THIS TO ADD IMAGES TO GALLARY
const photos = [
  {
    "src": "/media/OlderPics/BeePeaking.png",
    "title": "Bee Peaking",
    "exif": "Canon EOS M2 · Unknown Macro Lens (This is an older picture)",
    "tags": ["digital", "macro", "animals"]
  },
  {
    "src": "/media/OlderPics/ButterflyGlasses.png",
    "title": "Butterfly Glasses",
    "exif": "Canon EOS M2 · Unknown Macro Lens (This is an older picture)",
    "tags": ["digital", "macro", "animals"]
  },
  {
    "src": "/media/OlderPics/DragonFly.png",
    "title": "Dragonfly",
    "exif": "Canon EOS M2 · Unknown Macro Lens (This is an older picture)",
    "tags": ["digital", "macro", "animals"]
  },
  {
    "src": "/media/OlderPics/Cloud.png",
    "title": "Cloud",
    "exif": "Canon EOS M2 · Unknown Macro Lens (This is an older picture)",
    "tags": ["digital", "landscape"]
  },
  {
    "src": "/media/OlderPics/WaterSparkle.jpg",
    "title": "Water Sparkle",
    "exif": "Unknown Film Camera · Unknown Lens (This is an older picture)",
    "tags": ["film", "landscape"]
  },
  {
    "src": "/media/OlderPics/LCBeach.jpg",
    "title": "LC Beach",
    "exif": "Unknown Film Camera · Unknown Lens (This is an older picture)",
    "tags": ["film", "landscape"]
  },
  {
    "src": "/media/OlderPics/Boardwalk.jpg",
    "title": "Boardwalk",
    "exif": "Unknown Film Camera · Unknown Lens (This is an older picture)",
    "tags": ["film", "landscape"]
  }
];

let currentFilter = "all";

function setFilter(filter) {
  currentFilter = filter;
  renderGallery();
}

function renderGallery() {
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = "";

  currentPhotos = photos.filter(photo => {
    if (currentFilter === "all") return true;
    return photo.tags.includes(currentFilter);
  });

  currentPhotos.forEach((photo, index) => {
    const card = document.createElement("div");
    card.className = "photo-card";

    card.innerHTML = `
      <img src="${photo.src}" alt="${photo.title}">
      <div class="exif-bar">${photo.exif}</div>
    `;

    card.onclick = () => openLightbox(index);

    gallery.appendChild(card);
  });
}

function openLightbox(index) {
  currentIndex = index;

  const photo = currentPhotos[currentIndex];

  document.getElementById("lightbox-img").src = photo.src;
  document.getElementById("lightbox-exif").innerText = photo.exif;

  document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

document.getElementById("lightbox").addEventListener("click", (e) => {
  if (e.target.id === "lightbox") {
    closeLightbox();
  }
});

function nextImage() {
  currentIndex = (currentIndex + 1) % currentPhotos.length;
  updateLightbox();
}

function prevImage() {
  currentIndex = (currentIndex - 1 + currentPhotos.length) % currentPhotos.length;
  updateLightbox();
}

function updateLightbox() {
  const photo = currentPhotos[currentIndex];

  document.getElementById("lightbox-img").src = photo.src;
  document.getElementById("lightbox-exif").innerText = photo.exif;
}

document.addEventListener("keydown", (e) => {
  const lightbox = document.getElementById("lightbox");

  if (lightbox.style.display !== "flex") return;

  if (e.key === "ArrowRight") nextImage();
  if (e.key === "ArrowLeft") prevImage();
  if (e.key === "Escape") closeLightbox();
});

renderGallery();