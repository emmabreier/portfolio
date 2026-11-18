const galleryGrid = document.getElementById("gallery-grid");

const screenshotImages = [
    { src: "Images/wetpaint.png", alt: "Strike Magazine wet paint spread", category: "Strike Magazine", project: "strike-magazine" },
    { src: "OfficialJustTrish.png", alt: "Official Just Trish", category: "Just Trish", project: "fine-art" },
    { src: "Images/retreatingpage11.png", alt: "Strike Magazine retreating spread", category: "Strike Magazine", project: "strike-magazine" },
    { src: "Images/mockup4.jpg", alt: "Cortona zine cover mockup", category: "Cortona Branding", project: "cortona" },
    { src: "Images/mockup2.jpg", alt: "Cortona circular sign", category: "Cortona Branding", project: "cortona" },
    { src: "Images/colorways.png", alt: "Cortona logo colorways", category: "Cortona Branding", project: "cortona" },
    { src: "Images/Internposter4.png", alt: "Welcome Aboard student guide", category: "Print Design", project: "print-design" },
    { src: "Images/mostra final 3.jpg", alt: "Mostra event poster", category: "Print Design", project: "print-design" },
    { src: "Images/moon2.png", alt: "1237 Lunations poster", category: "Print Design", project: "print-design" },
    { src: "longwaytrish.png", alt: "Long Way Trish", category: "Long Way Trish", project: "fine-art" },
    { src: "Images/charliecatan.PNG", alt: "Catan card design", category: "Print Design", project: "print-design" },
    { src: "Images/orecard.PNG", alt: "Catan card design", category: "Print Design", project: "print-design" },
    { src: "Images/charlie2card.PNG", alt: "Catan card design", category: "Print Design", project: "print-design" },
    { src: "Images/oscarcard.PNG", alt: "Catan card design", category: "Print Design", project: "print-design" },
    { src: "Images/zine4well.jpeg", alt: "Cortona zine spread", category: "Cortona Zine", project: "print-design" },
    { src: "Images/zine5owl.jpeg", alt: "Cortona zine owl illustration", category: "Cortona Zine", project: "print-design" },
    { src: "Images/zine6fall.jpeg", alt: "Cortona zine fall spread", category: "Cortona Zine", project: "print-design" },
    { src: "Images/zine7title.jpeg", alt: "Cortona zine cover", category: "Cortona Zine", project: "print-design" }
];

const finalLiveryImages = ["bmw3.JPEG", "bmw4.JPEG", "bmw6.JPEG", "bmw9.JPEG"]
    .map((filename, index) => ({
        src: `Images/${filename}`,
        alt: index === 0 ? "Final chosen BMW Mean Machine livery" : `Final chosen BMW Mean Machine photo ${index + 2}`,
        category: "Final Chosen Livery",
        project: "BMW x UGA"
    }));

const fineArtMarkup = window.portfolioProjectData?.["fine-art"] || "";
const fineArtDocument = new DOMParser().parseFromString(fineArtMarkup, "text/html");
const excludedFineArtSources = new Set([
    "Images/closeuppaintingme.jpg",
    "Images/cortonatop.JPG"
]);
const fineArtImages = [...fineArtDocument.querySelectorAll("img[src^='Images/']")]
    .filter((image) => !excludedFineArtSources.has(image.getAttribute("src")))
    .filter((image) => /\.(?:jpe?g|png|webp)$/i.test(image.getAttribute("src")))
    .map((image) => ({
        src: image.getAttribute("src"),
        alt: image.alt || "Fine art by Emma Breier",
        category: "Fine Art",
        project: "fine-art"
    }));

const sectionByCategory = {
    "Cortona Branding": "cortona-branding",
    "Cortona Zine": "cortona-zine",
    "Final Chosen Livery": "final-chosen-livery",
    "Fine Art": "fine-art"
};

const sectionByImage = {
    "Images/Interndatatable.png": "uga-medical-data-packets",
    "Images/mostra final 3.jpg": "mostra",
    "Images/moon2.png": "dodd-centennial"
};

const sectionTitles = {
    "cortona-branding": "Cortona Branding",
    "uga-medical-data-packets": "UGA Medical Data Packets",
    mostra: "Mostra",
    "dodd-centennial": "Dodd Centennial",
    "catan-game-design": "Catan Game Design",
    "cortona-zine": "Cortona Zine",
    "final-chosen-livery": "Final Chosen Livery",
    "fine-art": "Fine Art"
};

const galleryThumbnails = new Map([
    ["Images/wetpaint.png", "Images/optimized/gallery-wetpaint.png"],
    ["Images/retreatingpage11.png", "Images/optimized/gallery-retreatingpage11.png"],
    ["Images/moon2.png", "Images/optimized/gallery-moon2.png"],
    ["OfficialJustTrish.png", "Images/optimized/gallery-justtrish.jpg"],
    ["longwaytrish.png", "Images/optimized/gallery-longwaytrish.jpg"]
]);

const excludedGallerySources = new Set([
    "Images/zine1.jpeg",
    "Images/zine3bird.png"
]);

if (galleryGrid) {
    const seenImages = new Set();
    const galleryImages = [...screenshotImages, ...fineArtImages, ...finalLiveryImages];
    const groupedByCategory = new Map();

    galleryImages.forEach((galleryImage) => {
        const category = galleryImage.category;
        if (!groupedByCategory.has(category)) {
            groupedByCategory.set(category, []);
        }
        groupedByCategory.get(category).push(galleryImage);
    });

    const interleavedImages = [];
    let remaining = true;

    while (remaining) {
        remaining = false;
        groupedByCategory.forEach((categoryImages) => {
            if (categoryImages.length) {
                interleavedImages.push(categoryImages.shift());
                remaining = true;
            }
        });
    }

    const topSources = [
        "Images/wetpaint.png",
        "Images/retreatingpage11.png",
        "Images/moon2.png"
    ];
    const topImages = topSources
        .map((source) => interleavedImages.find((galleryImage) => galleryImage.src === source))
        .filter(Boolean);
    const remainingImages = interleavedImages.filter(
        (galleryImage) => !topSources.includes(galleryImage.src)
    );

    [...topImages, ...remainingImages].forEach(({ src, alt, category, project }) => {
        if (seenImages.has(src) || excludedGallerySources.has(src)) {
            return;
        }

        seenImages.add(src);

        const figure = document.createElement("figure");
        figure.className = "gallery-item";

        const image = document.createElement("img");
        image.src = galleryThumbnails.get(src) || src.replace(/^Images\//, "Images/optimized/");
        image.dataset.full = src;
        image.dataset.category = category;
        image.dataset.project = project;
        image.dataset.section = sectionByImage[src] || sectionByCategory[category] ||
            (/Catan/i.test(alt) ? "catan-game-design" : "print-design");
        image.dataset.sectionTitle = sectionTitles[image.dataset.section] || category;
        image.alt = alt;
        image.loading = seenImages.size < 5 ? "eager" : "lazy";
        image.decoding = "async";
        image.classList.add("is-loading");
        image.addEventListener("load", () => {
            image.classList.remove("is-loading");
            image.classList.add("is-loaded");
        }, { once: true });
        image.addEventListener("error", () => {
            if (image.dataset.fallbackUsed) {
                return;
            }
            image.dataset.fallbackUsed = "true";
            image.src = src;
        }, { once: true });

        figure.append(image);
        galleryGrid.append(figure);
    });
}