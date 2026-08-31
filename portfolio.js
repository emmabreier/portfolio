const projectContent = document.getElementById("project-content");

const projects = {
    cortona: `
        <div class="project-layout">
            <div class="project-copy">
                <p class="project-kicker">Brand Identity</p>
                <h1>Cortona<br>Branding</h1>
                <p>
                    While abroad, we developed a visual identity for the city of Cortona that felt rooted in place, memory, and community.
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
                <h2>Catan Game Design</h2>
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

            <div class="photo-grid poster-grid">
                <figure class="photo-card">
                    <img src="Images/charliecard.PNG" alt="Catan design detail 1">
                </figure>
                <figure class="photo-card">
                    <img src="Images/emmacard.PNG" alt="Catan design detail 2">
                </figure>
                <figure class="photo-card">
                    <img src="Images/orecard.PNG" alt="Catan design detail 3">
                </figure>
                <figure class="photo-card">
                    <img src="Images/lizcard.PNG" alt="Catan design detail 4">
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

            <div class="print-design-layout">
                <div class="project-media print-feature">
                    <img src="Images/mostra final 3.jpg" alt="Mostra poster design">
                </div>

                <div class="print-design-copy">
                    <p class="meta">Event Poster</p>
                    <h3>Mostra</h3>
                    <p>
                        A campus event poster built around rhythm, contrast, and movement. The composition balances bold typography with a softer, atmospheric image to create an invitation that feels both energetic and intimate.
                    </p>
                </div>
            </div>
        </div>

        <div class="print-design-section">
            <div class="print-design-header">
                <p class="eyebrow">Print Design</p>
                <h2>Dodd Centennial</h2>
            </div>

            <div class="print-design-layout">
                <div class="project-media print-feature">
                    <img src="Images/moon2.png" alt="Moon poster design">
                </div>

                <div class="print-design-copy">
                    <p class="meta">Editorial Poster</p>
                    <h3>Moon</h3>
                    <p>
                        This piece explores mood and atmosphere through a quiet, cinematic palette. The composition emphasizes scale, negative space, and the sense of stillness that makes the message feel contemplative and immersive.
                    </p>
                </div>
            </div>
        </div>

        <div class="print-design-section internship-block">
            <div class="print-design-header">
                <p class="eyebrow">Print Design</p>
                <h2>UGA Archway <br>Internship</h2>
            </div>
             <div class="print-design-layout">
                <div class="project-media print-feature">
                    <img src="Images/moon2.png" alt="Moon poster design">
                </div>

                <div class="print-design-copy">
                    <p class="meta">Editorial Poster</p>
                    <h3>Moon</h3>
                    <p>
                        This piece explores mood and atmosphere through a quiet, cinematic palette. The composition emphasizes scale, negative space, and the sense of stillness that makes the message feel contemplative and immersive.
                    </p>
                </div>
            </div>

            <div class="print-design-layout internship-layout">
                <div class="print-design-copy">
                    <p class="meta">Community Design</p>
                    <h3>UGA Medical Data Packets</h3>
                    <p>
                        During my internship, I created a series of data packets for UGA Medical School and their new Med tour. I created 7 packets for each of the counties the students and faculty visited.
                    </p>
                </div>

                <div class="project-media print-feature">
                    <img src="Images/mostra final 3.jpg" alt="Internship poster design">
                </div>
            </div>

            <div class="photo-grid poster-grid">
                <figure class="photo-card">
                    <img src="Images/charliecard.PNG" alt="Poster design 1">
                </figure>
                <figure class="photo-card">
                    <img src="Images/emmacard.PNG" alt="Poster design 2">
                </figure>
                <figure class="photo-card">
                    <img src="Images/orecard.PNG" alt="Poster design 3">
                </figure>
                <figure class="photo-card">
                    <img src="Images/lizcard.PNG" alt="Poster design 4">
                </figure>
            </div>
        </div>
    `,

    "fine-art": `
        <div class="project-layout">
            <div class="project-copy">
                <p class="project-kicker">Photography + Painting</p>
                <h1>Fine Art</h1>
                <p>
                    I specialize in watercolor painting, and in photography I focus on capturing nature and the architecture around me.
                </p>
            </div>

            <div class="project-media media-tall">
                <img src="Images/closeuppaintingme.jpeg" alt="Featured fine art painting">
            </div>
        </div>

        <div class="photo-grid fine-art-grid">
            <figure class="photo-card tall">
                <img src="Images/scoutpainting.jpeg" alt="Fine art photo 2">
            </figure>
            <figure class="photo-card tall">
                <img src="Images/watercolorflower.jpeg" alt="Fine art photo 4">
            </figure>
            <figure class="photo-card tall">
                <img src="Images/venicesign.JPG" alt="Fine art photo 3">
            </figure>
            <figure class="photo-card square">
                <img src="Images/paw.JPEG" alt="Fine art photo 3">
            </figure>
            <figure class="photo-card square">
                <img src="Images/myselfinpainting.jpeg" alt="Fine art photo 3">
            </figure>
            <figure class="photo-card tall">
                <img src="Images/vaticanwindow.JPG" alt="Fine art photo 1">
            </figure>
            <figure class="photo-card tall">
                <img src="Images/rubyincortona.JPG" alt="Fine art photo 5">
            </figure>
            <figure class="photo-card tall">
                <img src="Images/oxfordwindow.JPG" alt="Fine art photo 6">
            </figure>
            <figure class="photo-card square">
                <img src="Images/flowerpen.jpeg" alt="Fine art photo 7">
            </figure>
            <figure class="photo-card wide">
                <img src="Images/romevr.JPG" alt="Fine art photo 4">
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
    }

    document.querySelectorAll(".portfolio-nav a")
        .forEach(link => link.classList.remove("active"));

    const activeLink = document.querySelector(`.portfolio-nav a[data-project="${projectKey}"]`);
    if (activeLink) {
        activeLink.classList.add("active");
    }
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