const projectContent = document.getElementById("project-content");

const projects = {
    cortona: `
        <div class="print-design-header project-page-header">
            <p class="eyebrow">City Branding</p>
            <h2>Cortona <br>Branding</h2>
        </div>

        <div class="content-pair print-design-layout">
            <div class="content-photo project-media print-feature">
                <img loading="lazy" decoding="async" src="Images/mockup2.jpg" alt="Cortona Branding">
            </div>

            <div class="content-type print-design-copy">
            
                <p>
                   While my time in Cortona, Italy, I created a mini branding identity package for the town, focusing on capturing its unique charm and character that the locals feel are not portrayed correctly by locals.
                </p>
            </div>
        </div>
        <div class="print-design-layout internship-layout">
                <div class="print-design-copy">
                <div class="rotation-corner" aria-hidden="true">
                    <img class="rotation-frame" src="Images/rotateone.svg" alt="" loading="lazy" decoding="async">
                </div>
                <h3>About Cortona</h3>
                    <p>
                    After spending three months living in Cortona, I wanted to create a brand identity based on how I experienced the town, not simply how it is portrayed from the outside. The project reflects the history, culture, and everyday details that shaped my experience of Cortona.

                    </p>
                </div>

                <div class="project-media print-feature">
                    <img loading="lazy" decoding="async" src="Images/DSCF3397.jpg" alt="Catan game design">
                </div>
            </div>
            <div class="content-pair print-design-layout">
            <div class="content-photo project-media print-feature">
                <img loading="lazy" decoding="async" src="Images/moodboardcort.jpg" alt="Cortona Branding">
            </div>

            <div class="content-type print-design-copy">
                <h3>Inspiration</h3>
                <p>
                Vintage markets and repurposing are an important part of Cortona’s culture. I wanted to reflect the city’s appreciation for handmade, hand-painted design, as well as the familiar symbols and visual details found throughout the town.

                </p>
            </div>
        </div>

        <div class="mockup-grid inspiration-mockup-grid">
            <img loading="lazy" decoding="async" src="Images/mockup3wide.jpg" alt="Cortona mockup 3">
            <img loading="lazy" decoding="async" src="Images/mockup1.jpg" alt="Cortona mockup 1">
        </div>

        <div class="content-pair print-design-layout cortona-process-pair">
            <div class="content-type print-design-copy">
                <h3>Process</h3>
                <p>
                   My main goal was to create by own interpretation fo Cortona's symbols, while maintaining a strong connection to the town's visual language and cultural heritage, and not straying away from the visuals you would see around town. I wanted to ensure that my designs felt authentic and rooted in the town's identity.
                </p>
            </div>

            <div class="process-photo-column">
                <img loading="lazy" decoding="async" src="Images/behindscene1.jpg" alt="Cortona process detail 1">
                <img loading="lazy" decoding="async" src="Images/behindscene2.jpg" alt="Cortona process detail 2">
            </div>
        </div>

        <div class="content-pair print-design-layout">
            <div class="content-type print-design-copy">
                <h3>Logotype</h3>
                <p>
                    The final logotype I created I inspired off of a combination of signs I saw in town, I kept a strong hand-made feel.
                </p>
            </div>

            <div class="content-photo project-media print-feature">
                <img loading="lazy" decoding="async" src="Images/cortonalogo.svg" alt="Cortona logo">
            </div>
        </div>

        <div class="color-section">
            <div class="color-section-text">
                <h3>Colors</h3>
                <p>
                    A warm, sun-baked palette pulled from Cortona's terracotta rooftops, ochre walls, and deep Tuscan skies.
                </p>
            </div>

            <div class="color-swatches" aria-hidden="true">
                <div class="color-swatch color-swatch-1"></div>
                <div class="color-swatch color-swatch-2"></div>
                <div class="color-swatch color-swatch-3 color-swatch-half"></div>
                <div class="color-swatch color-swatch-4 color-swatch-half"></div>
            </div>
        </div>

        <div class="content-pair print-design-layout">
            <div class="content-type print-design-copy">
                <h3>Icons</h3>
                <p>
                The icons are inspired by the three large symbols I saw throughout Cortona. The sun is for the beautiful sunsets and bright sun that the town gets, the flowers are my version of the quatrefoils that are everywhere. 
                </p>
            </div>

            <div class="content-photo project-media print-feature">
                <img loading="lazy" decoding="async" src="Images/colorways.png" alt="Cortona icon colorways">
            </div>
        </div>

        <div class="content-pair print-design-layout final-pattern-pair">
            <div class="content-photo project-media print-feature">
                <img loading="lazy" decoding="async" src="Images/patterncortona.png" alt="Cortona pattern">
            </div>

            <div class="content-type print-design-copy">
                <h3>Final Pattern</h3>
                <p>
                A repeating pattern inspired by the iron wraught railings all over the town, and quatrefoils incorporated. 
                </p>
            </div>
        </div>

        <div class="mockup-grid">
            <img loading="lazy" decoding="async" src="Images/mockup2.jpg" alt="Cortona mockup 2">
            <img loading="lazy" decoding="async" src="Images/mockup4.jpg" alt="Cortona mockup 4">
            <img loading="lazy" decoding="async" src="Images/mockup5.jpg" alt="Cortona mockup 5">
            <img loading="lazy" decoding="async" src="Images/mockup6.jpg" alt="Cortona mockup 6">
        </div>

        <div class="final-reflection">
            <h3>Final Reflection</h3>
            <p>
                This project gave me the opportunity to translate my experience of Cortona into a visual identity rooted in the town's character, history, and everyday details.
            </p>
        </div>

    `,

    personal: `
        <div class="print-design-section internship-block">
            <div class="print-design-header">
                <p class="eyebrow">Game Design</p>
                <h2>Catan Game <br>Design</h2>
            </div>

            <div class="print-design-layout internship-layout">
                <div class="print-design-copy">
                    <p>
                        This project was an illustrative card design for the board game Catan. The goal was to create cards with humor but still clear design and readibility. I focused on creating a cohesive visual system that felt playful, but still grounded in the game's original aesthetic.
                    </p>
                </div>

                <div class="project-media print-feature">
                    <img loading="lazy" decoding="async" src="Images/catangameshot.jpeg" alt="Catan game design">
                </div>
            </div>

            <div class="photo-carousel" aria-label="Catan project images">
                <button class="carousel-button carousel-button-prev" type="button" aria-label="Previous Catan image">&lt;</button>
                <div class="carousel-viewport">
                    <div class="carousel-track">
                        <figure class="photo-card">
                            <img loading="lazy" decoding="async" src="Images/charliecatan.PNG" alt="Catan design detail 1">
                        </figure>
                        <figure class="photo-card">
                            <img loading="lazy" decoding="async" src="Images/dadcatan.PNG" alt="Catan design detail 2">
                        </figure>
                        <figure class="photo-card">
                            <img loading="lazy" decoding="async" src="Images/orecard.PNG" alt="Catan design detail 3">
                        </figure>
                        <figure class="photo-card">
                            <img loading="lazy" decoding="async" src="Images/charlie2card.PNG" alt="Catan design detail 4">
                        </figure>
                        <figure class="photo-card">
                            <img loading="lazy" decoding="async" src="Images/oscarcard.PNG" alt="Catan design detail 5">
                        </figure>
                        <figure class="photo-card">
                            <img loading="lazy" decoding="async" src="Images/emmacard.PNG" alt="Catan design detail 6">
                        </figure>
                        <figure class="photo-card">
                            <img loading="lazy" decoding="async" src="Images/lizcard.PNG" alt="Catan game design detail 7">
                        </figure>
                    </div>
                </div>
                <button class="carousel-button carousel-button-next" type="button" aria-label="Next Catan image">&gt;</button>
            </div>
        </div>

        <div class="print-design-section">
            <div class="print-design-header">
                <p class="eyebrow">Print Design</p>
                <h2>Cortona <br>
                Zine</h2>
            </div>

            <div class="content-pair print-design-layout">
                <div class="content-type print-design-copy">
                    <p>
                        This zine documents the architecture, landscape, and visual details I collected while studying abroad in Cortona, Italy.
                    </p>
                </div>

                <div class="content-photo project-media print-feature">
                    <img loading="lazy" decoding="async" src="Images/zine7title.jpeg" alt="Cortona zine title page">
                </div>
            </div>

            <div class="issue11-magazine-embed">
                <iframe
                    loading="lazy"
                    allowfullscreen="allowfullscreen"
                    allow="autoplay; fullscreen; clipboard-write"
                    scrolling="no"
                    src="https://heyzine.com/flip-book/4553b1f875.html"
                    title="Cortona Zine flipbook">
                </iframe>
            </div>
        </div>
    `,

    "print-design": `
        <div class="print-design-section internship-block">
            <div class="print-design-header">
                <p class="eyebrow">Print Design</p>
                <h2>UGA Archway <br>Internship</h2>
            </div>
            <div class="content-pair print-design-layout">
                <div class="content-photo project-media print-feature">
                    <img loading="lazy" decoding="async" src="Images/Internposter4.png" alt="Internship poster design">
                </div>

                <div class="content-type print-design-copy">
                    <h3>My Role</h3>
                    <p>
                        UGA Archway Partnership is an organizaton that organizes and carries out community events helping neghboring counties around Athens, GA. As an intern at UGA Archway Partnership, I work on a variety of print and digita design that gets distrubuted to the public and to Archway's partners. I work on posters, data sheets, and brochures for county and community events. 
                    </p>
                </div>
            </div>

            <div class="photo-grid poster-grid">
                <figure class="photo-card">
                    <img loading="lazy" decoding="async" src="Images/Internposter1.png" alt="Poster design 1">
                </figure>
                <figure class="photo-card">
                    <img loading="lazy" decoding="async" src="Images/crcposter.png" alt="Poster design 2">
                </figure>
                <figure class="photo-card">
                    <img loading="lazy" decoding="async" src="Images/Internposter5.png" alt="Poster design 3">
                </figure>
                <figure class="photo-card">
                    <img loading="lazy" decoding="async" src="Images/Internmedicaltour.png" alt="Poster design 4">
                </figure>
            </div>

            <div class="content-pair print-design-layout internship-layout">
                <div class="content-type print-design-copy">
                    <p class="meta">Community Design</p>
                    <h3>UGA Medical Data Packets</h3>
                    <p>
                        During my internship, I created a series of data packets for UGA Medical School and their new Med tour. I created 7 packets for each of the counties the students and faculty visited.
                    </p>
                </div>
                <div class="content-photo project-media print-feature">
                    <img loading="lazy" decoding="async" src="Images/Interndata1.png" alt="UGA Medical School data packet">
                </div>
            </div>

            <div class="photo-grid poster-grid internship-data-grid">
                <figure class="photo-card">
                    <img loading="lazy" decoding="async" src="Images/Interndatatable.png" alt="Medical data packet table">
                </figure>
                <figure class="photo-card">
                    <img loading="lazy" decoding="async" src="Images/newbibb2.png" alt="Bibb County medical data packet">
                </figure>
                <figure class="photo-card">
                    <img loading="lazy" decoding="async" src="Images/newbibb1.png" alt="Bibb County medical data packet detail">
                </figure>
                <figure class="photo-card">
                    <img loading="lazy" decoding="async" src="Images/newbibb3.png" alt="Bibb County medical data packet detail">
                </figure>
            </div>
        </div>

        <div class="print-design-section">
            <div class="print-design-header">
                <p class="eyebrow">Event Poster</p>
                <h2>Mostra</h2>
            </div>

            <div class="content-pair print-design-layout">
                <div class="content-photo project-media print-feature">
                    <img loading="lazy" decoding="async" src="Images/mostra final 3.jpg" alt="Mostra poster design">
                </div>

                <div class="content-type print-design-copy">
                    <h3>Art Show</h3>
                    <p>
                    While abroad in Cortona, Italy, students on the program host an art show for the Cortona locals to see what we created and experienced during our semester there. <br>
                    <br>
                    I created a poster advertising the show, or "mostra" in italian, that was inspired by the architechture and landscape that makes Cortona so famous: its hills. The typography is stacked, going with the sharp angles and steepness of the town, and the photo was taken myself while abroad. 
                    </p>
                </div>
            </div>

            <div class="content-pair print-design-layout internship-layout">
                <div class="content-type print-design-copy">
                    <h3>Landscape Study</h3>
                    <p>
                        I used my own photograph of Cortona’s steep streets and layered architecture as the poster imagery, pairing the landscape with stacked typography inspired by the town’s angles.
                    </p>
                </div>

                <div class="content-photo project-media print-feature">
                    <img loading="lazy" decoding="async" src="Images/mostrafield.jpg" alt="Mostra field poster">
                </div>
            </div>
        </div>

        <div class="print-design-section">
            <div class="print-design-header">
                <p class="eyebrow">Print Design</p>
                <h2>Dodd Centennial</h2>
            </div>

            <div class="content-pair print-design-layout">
                <div class="content-photo project-media print-feature">
                    <img loading="lazy" decoding="async" src="Images/moon2.png" alt="Moon poster design">
                </div>

                <div class="content-type print-design-copy">
                    <p class="meta">Editorial Poster</p>
                    <h3>1237 Lunations</h3>
                    <p>
                    This poster was apart of a series of posters for the Lamar Dodd, celebrating the 100th anniversary of the Dodd School of Art. Each student was assigned a letter, and when placed together, said "celebrate the centennial." I was assigned the letter "C", and I created a poster inspired by the amount of times the moon has its phase in 100 years. 
                    </p>
                </div>
            </div>

            <div class="content-pair print-design-layout internship-layout">
                <div class="content-type print-design-copy">
                    <h3>Series Concept</h3>
                    <p>
                        The assigned letter “C” became a starting point for a visual metaphor: the moon’s repeating phases accumulating across a century. This poster detail carries that concept into the composition and oversized forms.
                    </p>
                </div>

                <div class="content-photo project-media print-feature centennial-detail-image">
                    <img loading="lazy" decoding="async" src="Images/fieldposter.JPG" alt="Dodd Centennial field poster">
                </div>
            </div>
        </div>

    `,

    "fine-art": `
        <div class="print-design-header project-page-header">
            <p class="eyebrow">Photography + Painting</p>
            <h2>Fine Art</h2>
        </div>

        <div class="content-pair print-design-layout">
            <div class="content-photo project-media print-feature">
                <img loading="lazy" decoding="async" src="Images/closeuppaintingme.jpg" alt="Featured fine art painting">
            </div>

            <div class="content-type print-design-copy">
                <h3>My Style</h3>
                <p>
                    I specialize in watercolor painting, and I love painting people, and florals. Photography I focus on capturing nature and the architecture around me. <br>
                    <br>My love for photography follows me into my graphic design work, as I often use my own photography in my designs.
                </p>
            </div>
        </div>

        <div class="photo-grid fine-art-grid">
            <figure class="photo-card portrait-art">
                <img loading="lazy" decoding="async" src="Images/scoutpainting.jpeg" alt="Fine art photo 2">
            </figure>
            <figure class="photo-card portrait-art">
                <img loading="lazy" decoding="async" src="Images/emmawatstop.jpg" alt="Fine art photo 3">
            </figure>
            <figure class="photo-card portrait-art">
                <img loading="lazy" decoding="async" src="Images/cortonatop.JPG" alt="Fine art photo 5">
            </figure>
               <figure class="photo-card square-art">
                <img loading="lazy" decoding="async" src="Images/paw.JPEG" alt="Fine art photo 3">
            </figure>
             <figure class="photo-card landscape-art">
                <img loading="lazy" decoding="async" src="Images/romevr.JPG" alt="Fine art photo 4">
            </figure>
            <figure class="photo-card portrait-art">
                <img loading="lazy" decoding="async" src="Images/venicesign.JPG" alt="Fine art photo 3">
            </figure>
            <figure class="photo-card portrait-art">
                <img loading="lazy" decoding="async" src="Images/watercolorflower.jpeg" alt="Fine art photo 4">
            </figure>
             <figure class="photo-card portrait-art">
                <img loading="lazy" decoding="async" src="Images/vaticanwindow.JPG" alt="Fine art photo 1">
            </figure>
             <figure class="photo-card square-art">
                <img loading="lazy" decoding="async" src="Images/myselfinpainting.jpeg" alt="Fine art photo 3">
            </figure>
            <figure class="photo-card portrait-art">
                <img loading="lazy" decoding="async" src="Images/rubyincortona.JPG" alt="Fine art photo 5">
            </figure>
            <figure class="photo-card portrait-art">
                <img loading="lazy" decoding="async" src="Images/oxfordwindow.JPG" alt="Fine art photo 6">
            </figure>
            <figure class="photo-card landscape-art">
                <img loading="lazy" decoding="async" src="Images/horizontalwomen.JPG" alt="Fine art photo 5">
            </figure>
        </div>
    `
};

function setActiveProject(projectKey) {
    const projectHtml = projects[projectKey];

    if (!projectContent || !projectHtml) {
        return;
    }

    const swapContent = () => {
        projectContent.innerHTML = projectHtml;
        setupCarousel();
        setupRotationCorner();
    };

    const isFirstRender = !projectContent.innerHTML.trim();
    const reduceMotion = window.matchMedia &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isFirstRender || reduceMotion) {
        swapContent();
    } else {
        // Gentle cross-fade between sections
        projectContent.classList.add('is-fading');
        window.setTimeout(() => {
            swapContent();
            projectContent.classList.remove('is-fading');
            projectContent.classList.add('is-entering');

            const cleanup = () => projectContent.classList.remove('is-entering');
            projectContent.addEventListener('transitionend', cleanup, { once: true });
            window.setTimeout(cleanup, 250); // fallback if transitionend is dropped
        }, 150);
    }

    document.querySelectorAll(".portfolio-nav a")
        .forEach(link => link.classList.remove("active"));

    const activeLink = document.querySelector(`.portfolio-nav a[data-project="${projectKey}"]`);
    if (activeLink) {
        activeLink.classList.add("active");
    }
}

let rotationIntervalId = null;

function setupRotationCorner() {
    if (rotationIntervalId) {
        window.clearInterval(rotationIntervalId);
        rotationIntervalId = null;
    }

    const rotationImg = projectContent.querySelector(".rotation-frame");
    if (!rotationImg) {
        return;
    }

    const frames = [
        "Images/rotateone.svg",
        "Images/rotatetwo.svg",
        "Images/rotatethree.svg",
        "Images/rotatefour.svg"
    ];
    let frameIndex = 0;

    rotationIntervalId = window.setInterval(() => {
        frameIndex = (frameIndex + 1) % frames.length;
        rotationImg.src = frames[frameIndex];
    }, 1000);
}

function setupCarousel() {
    const carousel = projectContent.querySelector(".photo-carousel");

    if (!carousel) {
        return;
    }

    const viewport = carousel.querySelector(".carousel-viewport");
    const previousButton = carousel.querySelector(".carousel-button-prev");
    const nextButton = carousel.querySelector(".carousel-button-next");
    const firstCard = carousel.querySelector(".photo-card");

    if (!viewport || !previousButton || !nextButton || !firstCard) {
        return;
    }

    const getScrollDistance = () => firstCard.getBoundingClientRect().width + 16;

    previousButton.addEventListener("click", () => {
        viewport.scrollBy({ left: -getScrollDistance(), behavior: "smooth" });
    });

    nextButton.addEventListener("click", () => {
        viewport.scrollBy({ left: getScrollDistance(), behavior: "smooth" });
    });
}

if (projectContent) {
    document.querySelectorAll(".portfolio-nav a").forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            setActiveProject(this.dataset.project);
        });
    });

    setActiveProject("cortona");
}