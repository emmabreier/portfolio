const projectContent = document.getElementById("project-content");

const projects = {
    "about-strike": `
        <div class="print-design-header project-page-header">
            <p class="eyebrow">Strike Magazine</p>
            <h2>Strike Magazine</h2>
        </div>

        <div class="content-pair print-design-layout">
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

        <div class="photo-grid photo-grid--main">
            <figure class="photo-card">
                <img src="Images/readingstrike.JPG" alt="Strike magazine reading spread">
            </figure>
            <figure class="photo-card">
                <img src="Images/potentialcover1.jpeg" alt="Strike magazine cover concept">
            </figure>
            <figure class="photo-card wide">
                <img src="Images/shortersidecollage.jpg" alt="Strike magazine collage">
            </figure>
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
                <img src="Images/closefacewetpaint.png" alt="Strike Issue 11">
            </div>
        </div>

        <div class="photo-grid photo-grid--main">
            <figure class="photo-card">
                <img src="Images/wetpaintdraft.png" alt="Strike Issue 11 spread">
            </figure>
            <figure class="photo-card">
                <img src="Images/readingreal.jpg" alt="Strike Issue 11 title page">
            </figure>
            <figure class="photo-card wide">
                <img src="Images/behindscenes11.png" alt="Strike Issue 11 editorial page">
            </figure>
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
            <p class="eyebrow">Strike Magazine</p>
            <h2>Issue 12</h2>
        </div>

        <div class="content-pair print-design-layout">
            <div class="content-type print-design-copy">
                <p class="meta">Editorial Design</p>
                <h3>Cosmopolis</h3>
                <p>
                    Issue 12 — Cosmopolis explores city texture, movement, and a more cinematic editorial identity.
                </p>
            </div>

            <div class="content-photo project-media print-feature">
                <img src="Images/zine7title.jpeg" alt="Strike Issue 12">
            </div>
        </div>

        <div class="photo-grid fine-art-grid">
            <figure class="photo-card">
                <img src="Images/zine1.jpeg" alt="Strike Issue 12 editorial page 1">
            </figure>
            <figure class="photo-card">
                <img src="Images/zine2.jpeg" alt="Strike Issue 12 editorial page 2">
            </figure>
            <figure class="photo-card">
                <img src="Images/zine3bird.png" alt="Strike Issue 12 editorial page 3">
            </figure>
            <figure class="photo-card">
                <img src="Images/zine4well.jpeg" alt="Strike Issue 12 editorial page 4">
            </figure>
            <figure class="photo-card">
                <img src="Images/zine5owl.jpeg" alt="Strike Issue 12 editorial page 5">
            </figure>
            <figure class="photo-card">
                <img src="Images/zine6fall.jpeg" alt="Strike Issue 12 editorial page 6">
            </figure>
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