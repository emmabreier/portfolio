const projectContent = document.getElementById("project-content");

const projects = {
    cortona: `
        <h1>CORTONA<br>BRANDING</h1>

        <p>
            Your Cortona Branding project description goes here.
        </p>

        <img src="images/cortona/cortona-1.jpg" alt="Cortona Branding">
    `,

    personal: `
        <h1>PERSONAL<br>PROJECTS</h1>

        <p>
            Your personal projects go here.
        </p>

        <img src="images/personal/personal-1.jpg" alt="Personal Project">
    `,

    posters: `
        <h1>POSTERS</h1>

        <p>
            Your poster work goes here.
        </p>

        <img src="images/posters/poster-1.jpg" alt="Poster Design">
    `,

    "fine-art": `
        <h1>FINE ART</h1>

        <p>
            Your fine art work goes here.
        </p>

        <img src="images/fine-art/art-1.jpg" alt="Fine Art">
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