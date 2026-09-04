const projectContent = document.getElementById("project-content");

const projects = {
    "about-strike": `
        <div class="print-design-header project-page-header">
            <p class="eyebrow">Strike Magazine</p>
            <h2>Strike Magazine</h2>
        </div>

        <div class="content-pair print-design-layout about-strike-pair">
            <div class="content-type print-design-copy">
                <p class="meta">Magazine Identity</p>
                <h3>Strike</h3>
                <p>
                    Strike is a student-run magazine published at the University of Georgia. I worked with the team to create a brand identity that felt editorial, expressive, and culturally aware.
                </p>
            </div>

            <div class="content-photo project-media print-feature">
                <img src="Images/meatstrike.JPEG" alt="Strike About">
            </div>
        </div>

        <div class="content-pair print-design-layout internship-layout">
            <div class="content-photo project-media print-feature">
                <img src="Images/shortersidecollage.jpg" alt="Strike magazine collage">
            </div>

            <div class="content-type print-design-copy">
                <p class="meta">Editorial Collage</p>
                <h3>My Role</h3>
                <p>
                    A layered collage exploring the expressive, tactile visual language of Strike Magazine.
                </p>
            </div>
        </div>
    `,

    "issue-11": `
        <div class="print-design-header project-page-header">
            <p class="eyebrow">Strike Magazine</p>
            <h2>Issue 11</h2>
        </div>

        <div class="content-pair print-design-layout">
            <div class="content-type print-design-copy">
                <p class="meta">Editorial Design</p>
                <h3>Mirage</h3>
                <p>
                    Issue 11 — Mirage explores dreamlike visuals, layered typography, and a reflective editorial mood.
                </p>
                <a class="issue-cta" href="https://issuu.com/strike_magazine/docs/strike_magazine_athens_issue_11" target="_blank" rel="noopener noreferrer">read the full issue here</a>
            </div>

            <div class="content-photo project-media print-feature">
                <img src="Images/readingreal.jpg" alt="Strike Issue 11">
            </div>
        </div>

        <div class="content-pair print-design-layout internship-layout">
            <div class="content-photo project-media print-feature">
                <img src="Images/behindscenes11.png" alt="Strike Issue 11 painted spread">
            </div>

            <div class="content-type print-design-copy">
                <p class="meta">Material Study</p>
                <h3>Making of Mirage</h3>
                <p>
                    Painted surfaces and layered details build the dreamlike visual language of Mirage.
                </p>
            </div>
        </div>

        <div class="content-pair print-design-layout internship-layout">
            <div class="content-photo project-media print-feature">
                <img src="Images/wetpaintdraft.png" alt="Strike Issue 11 editorial page in progress">
            </div>

            <div class="content-type print-design-copy">
                <p class="meta">Process</p>
                <h3>Layout and Typography</h3>
                <p>
                    An editorial page in progress, showing the physical experimentation behind the finished issue.
                </p>
            </div>
        </div>

        <div class="print-design-header project-page-header issue11-spreads-header">
            <h2>My Spreads</h2>
        </div>

        <div class="photo-grid fine-art-grid issue11-image-grid">
            <figure class="photo-card">
                <img src="Images/wetpaint.png" alt="Strike Issue 11 editorial page">
            </figure>
            <figure class="photo-card">
                <img src="Images/revelare11.png" alt="Strike Issue 11 editorial page">
            </figure>
            <figure class="photo-card">
                <img src="Images/retreatingpage11.png" alt="Strike Issue 11 editorial page">
            </figure>
            <figure class="photo-card">
                <img src="Images/watching11.png" alt="Strike Issue 11 editorial page">
            </figure>
            <figure class="photo-card">
                <img src="Images/warpedupsidedown11.png" alt="Strike Issue 11 magazine spread">
            </figure>
            <figure class="photo-card">
                <img src="Images/anglerevelare11.png" alt="Strike Issue 11 cover concept">
            </figure>
        </div>
    `,

    "issue-12": `
        <div class="print-design-header project-page-header">
            <h2>Issue 12</h2>
        </div>

        <div class="print-design-copy issue12-coming-soon">
            <p>Coming soon...</p>
        </div>
    `
};

function setActiveProject(projectKey) {
    const projectHtml = projects[projectKey];

    if (projectContent && projectHtml) {
        projectContent.innerHTML = projectHtml;
    }

    document.querySelectorAll(".strike-nav a")
        .forEach(link => link.classList.remove("active"));

    const activeLink = document.querySelector(`.strike-nav a[data-project="${projectKey}"]`);
    if (activeLink) {
        activeLink.classList.add("active");
    }
}

if (projectContent) {
    document.querySelectorAll(".strike-nav a").forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            setActiveProject(this.dataset.project);
        });
    });

    setActiveProject("about-strike");
}