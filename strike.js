const projectContent = document.getElementById("project-content");

const projects = {
    "about-strike": `
        <div class="project-layout">
            <div class="project-copy">
                <h1>Strike<br>Magazine</h1>
                <p>
                    Strike is a student-run magazine published at the University of Georgia. I worked with the team to create a brand identity that felt editorial, expressive, and culturally aware.
                </p>
            </div>

            <div class="project-media media-tall">
                <img src="Images/meatstrike.jpeg" alt="Strike About">
            </div>
        </div>
    `,

    "issue-11": `
        <div class="project-layout">
            <div class="project-copy">
                <h1>Issue 11</h1>
                <p>
                    Issue 11 — Mirage explores dreamlike visuals, layered typography, and a reflective editorial mood.
                </p>
            </div>

            <div class="project-media media-tall">
                <img src="Images/issue11cover.png" alt="Strike Issue 11">
            </div>
        </div>

        <div class="photo-grid issue11-grid">
            <figure class="photo-card tall issue11-collage">
                <img src="Images/shortersidecollage.jpg" alt="Strike Issue 11 spread">
            </figure>

            <figure class="photo-card text-card issue11-copy">
                <div class="text-card-inner">
                    <h3>Issue 11</h3>
                    <p>Mirage explores dreamlike visuals, layered typography, and a reflective editorial mood.</p>
                </div>
            </figure>

            <figure class="photo-card issue11-titlepage">
                <img src="Images/issue11titlepage.png" alt="Strike Issue 11 title page">
            </figure>
        </div>
    `,

    "issue-12": `
        <div class="project-layout">
            <div class="project-copy">
                <h1>Issue 12</h1>
                <p>
                    Issue 12 — Cosmopolis explores city texture, movement, and a more cinematic editorial identity.
                </p>
            </div>

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