const galleryGrid = document.getElementById("gallery-grid");

const screenshotImages = [
    { src: "Images/mockup4.jpg", alt: "Cortona zine cover mockup", category: "Cortona Branding" },
    { src: "Images/mockup2.jpg", alt: "Cortona circular sign", category: "Cortona Branding" },
    { src: "Images/mockup1.jpg", alt: "Cortona patterned tote bag", category: "Cortona Branding" },
    { src: "Images/colorways.png", alt: "Cortona logo colorways", category: "Cortona Branding" },
    { src: "Images/patterncortona.png", alt: "Cortona repeating pattern", category: "Cortona Branding" },
    { src: "Images/Interndatatable.png", alt: "Bibb County health packet table of contents", category: "Print Design" },
    { src: "Images/mostra final 3.jpg", alt: "Mostra event poster", category: "Print Design" },
    { src: "Images/moon2.png", alt: "1237 Lunations poster", category: "Print Design" },
    { src: "Images/catangameshot.jpeg", alt: "Catan game design", category: "Print Design" },
    { src: "Images/charliecatan.PNG", alt: "Catan card design", category: "Print Design" },
    { src: "Images/dadcatan.PNG", alt: "Catan card design", category: "Print Design" },
    { src: "Images/orecard.PNG", alt: "Catan card design", category: "Print Design" },
    { src: "Images/charlie2card.PNG", alt: "Catan card design", category: "Print Design" },
    { src: "Images/oscarcard.PNG", alt: "Catan card design", category: "Print Design" },
    { src: "Images/emmacard.PNG", alt: "Catan card design", category: "Print Design" },
    { src: "Images/zine1.jpeg", alt: "Cortona zine pattern spread", category: "Cortona Zine" },
    { src: "Images/zine2.jpeg", alt: "Cortona zine spread", category: "Cortona Zine" },
    { src: "Images/zine3bird.png", alt: "Cortona zine illustration spread", category: "Cortona Zine" },
    { src: "Images/zine4well.jpeg", alt: "Cortona zine spread", category: "Cortona Zine" },
    { src: "Images/zine5owl.jpeg", alt: "Cortona zine owl illustration", category: "Cortona Zine" },
    { src: "Images/zine6fall.jpeg", alt: "Cortona zine fall spread", category: "Cortona Zine" },
    { src: "Images/zine7title.jpeg", alt: "Cortona zine cover", category: "Cortona Zine" }
];

const finalLiveryImages = ["bmw3.JPEG", "bmw4.JPEG", "bmw6.JPEG", "bmw8.JPEG", "bmw9.JPEG"]
    .map((filename, index) => ({
        src: `Images/${filename}`,
        alt: index === 0 ? "Final chosen BMW Mean Machine livery" : `Final chosen BMW Mean Machine photo ${index + 2}`,
        category: "Final Chosen Livery"
    }));

const fineArtMarkup = window.portfolioProjectData?.["fine-art"] || "";
const fineArtDocument = new DOMParser().parseFromString(fineArtMarkup, "text/html");
const fineArtImages = [...fineArtDocument.querySelectorAll("img[src^='Images/']")]
    .filter((image) => /\.(?:jpe?g|png|webp)$/i.test(image.getAttribute("src")))
    .map((image) => ({
        src: image.getAttribute("src"),
        alt: image.alt || "Fine art by Emma Breier",
        category: "Fine Art"
    }));

if (galleryGrid) {
    const seenImages = new Set();
    const galleryImages = [...screenshotImages, ...fineArtImages, ...finalLiveryImages];

    galleryImages.forEach(({ src, alt, category }) => {
        if (seenImages.has(src)) {
            return;
        }

        seenImages.add(src);

        const figure = document.createElement("figure");
        figure.className = "gallery-item";

        const image = document.createElement("img");
        image.src = src.replace(/^Images\//, "Images/optimized/");
        image.dataset.full = src;
        image.alt = alt;
        image.loading = "lazy";
        image.decoding = "async";
        image.addEventListener("error", () => {
            if (image.dataset.fallbackUsed) {
                return;
            }
            image.dataset.fallbackUsed = "true";
            image.src = src;
        }, { once: true });

        const caption = document.createElement("figcaption");
        const project = document.createElement("span");
        project.className = "gallery-item-category";
        project.textContent = category;

        const description = document.createElement("span");
        description.textContent = alt;

        caption.append(project, description);
        figure.append(image, caption);
        galleryGrid.append(figure);
    });
}