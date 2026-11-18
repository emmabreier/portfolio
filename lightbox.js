const lightbox = document.createElement("div");
lightbox.className = "image-lightbox";
lightbox.setAttribute("aria-hidden", "true");
lightbox.innerHTML = `
    <button class="image-lightbox-close" type="button" aria-label="Close enlarged image">&times;</button>
    <div class="image-lightbox-content">
        <img class="image-lightbox-image" alt="">
    </div>
`;
document.body.appendChild(lightbox);

const lightboxImage = lightbox.querySelector(".image-lightbox-image");
const closeButton = lightbox.querySelector(".image-lightbox-close");
let lightboxLoadId = 0;

function closeLightbox() {
    lightboxLoadId += 1;
    lightbox.classList.remove("is-open");
    lightbox.classList.remove("is-svg");
    lightboxImage.classList.remove("is-loading", "is-loaded");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("lightbox-open");
}

function openLightbox(image) {
    const imageSrc = image.dataset.full || image.currentSrc || image.src;
    const loadId = ++lightboxLoadId;

    lightboxImage.classList.remove("is-loaded");
    lightboxImage.classList.add("is-loading");
    lightboxImage.alt = image.alt || "Enlarged portfolio image";
    lightbox.classList.toggle("is-svg", new URL(imageSrc, window.location.href).pathname.toLowerCase().endsWith(".svg"));
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("lightbox-open");

    const preload = new Image();
    preload.onload = async () => {
        if (loadId !== lightboxLoadId) return;
        lightboxImage.src = imageSrc;
        if (lightboxImage.decode) {
            try {
                await lightboxImage.decode();
            } catch (_) {}
        }
        if (loadId !== lightboxLoadId) return;
        lightboxImage.classList.remove("is-loading");
        lightboxImage.classList.add("is-loaded");
    };
    preload.src = imageSrc;
}

document.addEventListener("click", event => {
    const image = event.target.closest("img");

    if (image && !lightbox.contains(image) && !image.classList.contains("no-lightbox")) {
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
