const projectContent = document.getElementById("project-content");

const projects = {
    cortona: `
        <div class="project-layout">
            <div class="project-copy">
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
        <div class="project-layout">
            <div class="project-copy">
                <h1>Personal<br>Projects</h1>
                <p>
                    Personal projects outside of school explore experimentation, storytelling, and visual ideas that grow beyond the classroom.
                </p>
            </div>

            <div class="project-media media-tall">
                <img src="Images/catangameshot.jpeg" alt="Personal Project">
            </div>
        </div>
    `,

    posters: `
        <div class="project-layout">
            <div class="project-copy">
                <h1>Posters</h1>
                <p>
                    My poster designs and work for various events and organizations explore typography, rhythm, and visual storytelling across a range of formats.
                </p>
            </div>

            <div class="project-media media-tall">
                <img src="Images/mostra final 3.jpg" alt="Poster Design">
            </div>
        </div>
    `,

    internship: `
        <div class="project-layout">
            <div class="project-copy">
                <h1>Internship</h1>
                <p>
                    My internship work at Archway Partnership focused on strategic communication, civic design, and creating useful visual systems for community-centered work.
                </p>
            </div>
        </div>
    `,

    "fine-art": `
        <div class="project-layout">
            <div class="project-copy">
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