const lightbox = document.createElement("div");
lightbox.className = "image-lightbox";
lightbox.setAttribute("aria-hidden", "true");
lightbox.innerHTML = `
    <button class="image-lightbox-close" type="button" aria-label="Close enlarged image">&times;</button>
    <img class="image-lightbox-image" alt="">
`;
document.body.appendChild(lightbox);

const lightboxImage = lightbox.querySelector(".image-lightbox-image");
const closeButton = lightbox.querySelector(".image-lightbox-close");

function closeLightbox() {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("lightbox-open");
}

function openLightbox(image) {
    lightboxImage.src = image.currentSrc || image.src;
    lightboxImage.alt = image.alt || "Enlarged portfolio image";
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("lightbox-open");
}

document.addEventListener("click", event => {
    const image = event.target.closest("img");

    if (image && !lightbox.contains(image)) {
        openLightbox(image);
        return;
    }

    if (event.target === lightbox || event.target === closeButton) {
        closeLightbox();
    }
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape" && lightbox.classList.contains("is-open")) {
        closeLightbox();
    }
});
