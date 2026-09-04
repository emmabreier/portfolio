const projectContent = document.getElementById("project-content");

const projects = {
    cortona: `
        <div class="project-layout">
            <div class="project-copy">
                <p class="project-kicker">Brand Identity</p>
                <h1>Cortona<br>Branding</h1>
                <p>
                While abroad in Cortona, Italy, I created a brand identity for the town.
          </p>
            </div>

            <div class="project-media media-tall">
                <img src="Images/mockbrandingbag.png" alt="Cortona Branding">
            </div>
        </div>
    `,

    personal: `
        <div class="print-design-section internship-block">
            <div class="print-design-header">
                <p class="eyebrow">Personal Project</p>
                <h2>Catan Game <br>Design</h2>
            </div>

            <div class="print-design-layout internship-layout">
                <div class="print-design-copy">
                    <p class="meta">Game Design</p>
                    <h3>Catan</h3>
                    <p>
                        This project was an illustrative card design for the board game Catan. The goal was to create cards with humor but still clear design and readibility. I focused on creating a cohesive visual system that felt playful, but still grounded in the game's original aesthetic.
                    </p>
                </div>

                <div class="project-media print-feature">
                    <img src="Images/catangameshot.jpeg" alt="Catan game design">
                </div>
            </div>

            <div class="photo-carousel" aria-label="Catan project images">
                <button class="carousel-button carousel-button-prev" type="button" aria-label="Previous Catan image">&lt;</button>
                <div class="carousel-viewport">
                    <div class="carousel-track">
                        <figure class="photo-card">
                            <img src="Images/charliecatan.PNG" alt="Catan design detail 1">
                        </figure>
                        <figure class="photo-card">
                            <img src="Images/dadcatan.PNG" alt="Catan design detail 2">
                        </figure>
                        <figure class="photo-card">
                            <img src="Images/orecard.PNG" alt="Catan design detail 3">
                        </figure>
                        <figure class="photo-card">
                            <img src="Images/charlie2card.PNG" alt="Catan design detail 4">
                        </figure>
                        <figure class="photo-card">
                            <img src="Images/oscarcard.PNG" alt="Catan design detail 5">
                        </figure>
                        <figure class="photo-card">
                            <img src="Images/emmacard.PNG" alt="Catan design detail 6">
                        </figure>
                        <figure class="photo-card">
                            <img src="Images/lizcard.PNG" alt="Catan game design detail 7">
                        </figure>
                    </div>
                </div>
                <button class="carousel-button carousel-button-next" type="button" aria-label="Next Catan image">&gt;</button>
            </div>
        </div>

        <div class="print-design-section">
            <div class="print-design-header">
                <p class="eyebrow">Personal Project</p>
                <h2>Cortona Zine</h2>
            </div>

            <div class="content-pair print-design-layout">
                <div class="content-type print-design-copy">
                    <p class="meta">Editorial Design</p>
                    <h3>Cortona Zine</h3>
                    <p>
                        This zine documents the architecture, landscape, and visual details I collected while studying abroad in Cortona, Italy.
                    </p>
                </div>

                <div class="content-photo project-media print-feature">
                    <img src="Images/zine7title.jpeg" alt="Cortona zine title page">
                </div>
            </div>

            <div class="photo-grid fine-art-grid cortona-zine-grid">
                <figure class="photo-card">
                    <img src="Images/zine5owl.jpeg" alt="Cortona zine street page">
                </figure>
                <figure class="photo-card">
                    <img src="Images/zine2.jpeg" alt="Cortona zine landscape page">
                </figure>
                <figure class="photo-card">
                    <img src="Images/zine3bird.png" alt="Cortona zine flower illustration">
                </figure>
                <figure class="photo-card">
                    <img src="Images/zine4well.jpeg" alt="Cortona zine floral print">
                </figure>
                <figure class="photo-card">
                    <img src="Images/zine1.jpeg" alt="Cortona zine watercolor page">
                </figure>
                <figure class="photo-card">
                    <img src="Images/zine6fall.jpeg" alt="Cortona zine painted page">
                </figure>
            </div>
        </div>
    `,

    "print-design": `
        <div class="print-design-section">
            <div class="print-design-header">
                <p class="eyebrow">Print Design</p>
                <h2>Mostra</h2>
            </div>

            <div class="content-pair print-design-layout">
                <div class="content-photo project-media print-feature">
                    <img src="Images/mostra final 3.jpg" alt="Mostra poster design">
                </div>

                <div class="content-type print-design-copy">
                    <p class="meta">Event Poster</p>
                    <h3>Mostra</h3>
                    <p>
                    While abroad in Cortona, Italy, students on the program host an art show for the Cortona locals to see what we created and experienced during our semester there. <br>
                    <br>
                    I created a poster advertising the show, or "mostra" in italian, that was inspired by the architechture and landscape that makes Cortona so famous: its hills. The typography is stacked, going with the sharp angles and steepness of the town, and the photo was taken myself while abroad. 
                    </p>
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
                    <img src="Images/moon2.png" alt="Moon poster design">
                </div>

                <div class="content-type print-design-copy">
                    <p class="meta">Editorial Poster</p>
                    <h3>1237 Lunations</h3>
                    <p>
                    This poster was apart of a series of posters for the Lamar Dodd, celebrating the 100th anniversary of the Dodd School of Art. Each student was assigned a letter, and when placed together, said "celebrate the centennial." I was assigned the letter "C", and I created a poster inspired by the amount of times the moon has its phase in 100 years. 
                    </p>
                </div>
            </div>
        </div>

        <div class="print-design-section internship-block">
            <div class="print-design-header">
                <p class="eyebrow">Print Design</p>
                <h2>UGA Archway <br>Internship</h2>
            </div>
                 <div class="content-pair print-design-layout">
                     <div class="content-photo project-media print-feature">
                    <img src="Images/internposter4.png" alt="Moon poster design">
                </div>

                <div class="content-type print-design-copy">
                    <p class="meta">Editorial Poster</p>
                    <h3>My Role</h3>
                    <p>
                        UGA Archway Partnership is an organizaton that organizes and carries out community events helping neghboring counties around Athens, GA. As an intern at UGA Archway Partnership, I work on a variety of print and digita design that gets distrubuted to the public and to Archway's partners. I work on posters, data sheets, and brochures for county and community events. 
                    </p>
                </div>
            </div>

                 <div class="photo-grid poster-grid">
                <figure class="photo-card">
                    <img src="Images/Internposter1.png" alt="Poster design 1">
                </figure>
                <figure class="photo-card">
                    <img src="Images/Internposter2.png" alt="Poster design 2">
                </figure>
                <figure class="photo-card">
                    <img src="Images/Internposter5.png" alt="Poster design 3">
                </figure>
                <figure class="photo-card">
                    <img src="Images/Internmedicaltour.png" alt="Poster design 4">
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
                    <img src="Images/Interndata1.png" alt="Internship poster design">
                </div>
            </div>

            <div class="photo-grid poster-grid internship-data-grid">
                <figure class="photo-card">
                    <img src="Images/Interndatatable.png" alt="Poster design 2">
                </figure>
                <figure class="photo-card">
                    <img src="Images/Interndata2.png" alt="Poster design 3">
                </figure>
                <figure class="photo-card">
                    <img src="Images/Interndata4.png" alt="Poster design 4">
                </figure>
                <figure class="photo-card">
                    <img src="Images/Interndata6.png" alt="Poster design 1">
                </figure>
            </div>
        </div>

    `,

    "fine-art": `
        <div class="print-design-header project-page-header">
            <p class="eyebrow">Photography + Painting</p>
            <h2>My Style</h2>
        </div>

        <div class="content-pair print-design-layout">
            <div class="content-photo project-media print-feature">
                <img src="Images/closeuppaintingme.jpg" alt="Featured fine art painting">
            </div>

            <div class="content-type print-design-copy">
                <p class="meta">Photography + Painting</p>
                <h3>Fine Art</h3>
                <p>
                    I specialize in watercolor painting, and I love painting people, and florals. Photography I focus on capturing nature and the architecture around me. <br>
                    <br>My love for photography follows me into my graphic design work, as I often use my own photography in my designs.
                </p>
            </div>
        </div>

        <div class="photo-grid fine-art-grid">
            <figure class="photo-card tall">
                <img src="Images/scoutpainting.jpeg" alt="Fine art photo 2">
            </figure>
            <figure class="photo-card tall">
                <img src="Images/emmawatstop.jpg" alt="Fine art photo 3">
            </figure>
            <figure class="photo-card tall">
                <img src="Images/cortonatop.JPG" alt="Fine art photo 5">
            </figure>
               <figure class="photo-card square">
                <img src="Images/paw.JPEG" alt="Fine art photo 3">
            </figure>
             <figure class="photo-card wide">
                <img src="Images/romevr.JPG" alt="Fine art photo 4">
            </figure>
            <figure class="photo-card tall">
                <img src="Images/venicesign.JPG" alt="Fine art photo 3">
            </figure>
            <figure class="photo-card tall">
                <img src="Images/watercolorflower.jpeg" alt="Fine art photo 4">
            </figure>
             <figure class="photo-card tall">
                <img src="Images/vaticanwindow.JPG" alt="Fine art photo 1">
            </figure>
            <figure class="photo-card square">
                <img src="Images/myselfinpainting.jpeg" alt="Fine art photo 3">
            </figure>
            <figure class="photo-card tall">
                <img src="Images/rubyincortona.JPG" alt="Fine art photo 5">
            </figure>
            <figure class="photo-card tall">
                <img src="Images/oxfordwindow.JPG" alt="Fine art photo 6">
            </figure>
            <figure class="photo-card wide">
                <img src="Images/horizontalwomen.JPG" alt="Fine art photo 5">
            </figure>
        </div>
    `
};

function setActiveProject(projectKey) {
    const projectHtml = projects[projectKey];

    if (projectContent && projectHtml) {
        projectContent.innerHTML = projectHtml;
        setupCarousel();
    }

    document.querySelectorAll(".portfolio-nav a")
        .forEach(link => link.classList.remove("active"));

    const activeLink = document.querySelector(`.portfolio-nav a[data-project="${projectKey}"]`);
    if (activeLink) {
        activeLink.classList.add("active");
    }
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

    setActiveProject("print-design");
}