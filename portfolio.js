const projectContent = document.getElementById("project-content");

const projects = {
    cortona: `
        <h1>Cortona<br>Branding</h1>

        <p>
            Your Cortona Branding project description goes here.
        </p>

        <img src="images/cortona/cortona-1.jpg" alt="Cortona Branding">
    `,

    personal: `
        <h1>Personal<br>Projects</h1>

        <p>
            Your personal projects go here.
        </p>

        <img src="images/personal/personal-1.jpg" alt="Personal Project">
    `,

    posters: `
        <h1>Posters</h1>

        <p>
            Your poster work goes here.
        </p>

        <img src="images/posters/poster-1.jpg" alt="Poster Design">
    `,

    internship: `
        <h1>Internship</h1>

        <p>
            Your internship experience and work goes here.
        </p>

        <img src="images/internship/internship-1.jpg" alt="Internship Work">
    `,

    "fine-art": `
        <h1>Fine Art</h1>

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