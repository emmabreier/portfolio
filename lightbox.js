const lightbox = document.createElement("div");
lightbox.className = "image-lightbox";
lightbox.setAttribute("aria-hidden", "true");
lightbox.innerHTML = `
    <button class="image-lightbox-close" type="button" aria-label="Close enlarged image">&times;</button>
    <div class="image-lightbox-content">
        <img class="image-lightbox-image" alt="">
        <div class="image-lightbox-info" hidden>
            <p class="image-lightbox-category"></p>
            <p class="image-lightbox-description"></p>
            <a class="image-lightbox-project-link" href="">View section</a>
        </div>
    </div>
`;
document.body.appendChild(lightbox);

const lightboxImage = lightbox.querySelector(".image-lightbox-image");
const lightboxInfo = lightbox.querySelector(".image-lightbox-info");
const lightboxCategory = lightbox.querySelector(".image-lightbox-category");
const lightboxDescription = lightbox.querySelector(".image-lightbox-description");
const projectLink = lightbox.querySelector(".image-lightbox-project-link");
const closeButton = lightbox.querySelector(".image-lightbox-close");

function closeLightbox() {
    lightbox.classList.remove("is-open");
    lightbox.classList.remove("is-svg");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("lightbox-open");
}

function openLightbox(image) {
    const imageSrc = image.dataset.full || image.currentSrc || image.src;
    lightboxImage.src = imageSrc;
    lightboxImage.alt = image.alt || "Enlarged portfolio image";
    lightboxCategory.textContent = image.dataset.category || "";
    lightboxCategory.hidden = !image.dataset.category;
    lightboxDescription.textContent = image.alt || "";
    lightboxInfo.hidden = !image.dataset.project;
    projectLink.hidden = !image.dataset.project;
    if (image.dataset.project) {
        const sectionQuery = image.dataset.section ? `&section=${encodeURIComponent(image.dataset.section)}` : "";
        projectLink.href = `portfolio.html?project=${encodeURIComponent(image.dataset.project)}${sectionQuery}`;
        projectLink.textContent = `View ${image.dataset.sectionTitle || image.dataset.category || "project"}`;
    }
    lightbox.classList.toggle("is-svg", new URL(imageSrc, window.location.href).pathname.toLowerCase().endsWith(".svg"));
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("lightbox-open");
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
