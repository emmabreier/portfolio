const projectContent = document.getElementById("project-content");

const projects = {
    "about-layton": `
        <div class="project-layout">
            <div class="project-copy">
                <h1>Layton<br>Design<br>Studio</h1>
                <p>
                    Layton design studio is a collaborative branding and identity practice focused on clarity, character, and strategic visual storytelling.
                </p>
            </div>

            <div class="project-media media-tall">
                <img src="images/cortona/cortona-1.jpg" alt="Layton About">
            </div>
        </div>
    `,

    "BMW mean machine": `
        <div class="project-layout">
            <div class="project-copy">
                <h1>BMW Mean<br>Machine</h1>
                <p>
                    UGA collaborated with BMW to create a mean machine concept rooted in performance, precision, and motorsport energy.
                </p>
            </div>

            <div class="project-media media-tall">
                <img src="images/cortona/cortona-1.jpg" alt="BMW Mean Machine">
            </div>
        </div>
    `,

    "UGA Motorsports": `
        <div class="project-layout">
            <div class="project-copy">
                <h1>UGA Motorsports</h1>
                <p>
                    We worked with UGA College of Engineering to create a new brand system for UGA Motorsports that felt bold, technical, and unmistakably athletic.
                </p>
            </div>

            <div class="project-media media-tall">
                <img src="images/unveil.jpg" alt="UGA Motorsports">
            </div>
        </div>

        <div class="photo-grid">
            <figure class="photo-card square">
                <img src="images/motorsportcover.jpeg" alt="UGA Motorsports cover">
            </figure>
        </div>
    `
};

function setActiveProject(projectKey) {
    const projectHtml = projects[projectKey];

    if (projectContent && projectHtml) {
        projectContent.innerHTML = projectHtml;
    }

    document.querySelectorAll(".layton-nav a")
        .forEach(link => link.classList.remove("active"));

    const activeLink = document.querySelector(`.layton-nav a[data-project="${projectKey}"]`);
    if (activeLink) {
        activeLink.classList.add("active");
    }
}

if (projectContent) {
    document.querySelectorAll(".layton-nav a").forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            setActiveProject(this.dataset.project);
        });
    });

    setActiveProject("about-layton");
}