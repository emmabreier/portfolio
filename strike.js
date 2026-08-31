const projectContent = document.getElementById("project-content");

const projects = {
    "about-strike": `
        <h1>Strike</h1>

        <p>
            Strike is a student run magazine that is published at the University of Georgia. I worked with the Strike team to create a new brand for the magazine.
        </p>

        <img src="images/cortona/cortona-1.jpg" alt="Strike About">
    `,

    "issue-11": `
        <h1>Issue 11</h1>

        <p>
             Issue 11- Mirage
        </p>

        <img src="images/cortona/cortona-1.jpg" alt="Cortona Branding">
    `,

    "issue-12": `
        <h1>Issue 12</h1>

        <p>
            Issue 12- Cosmopolis.
        </p>

        <img src="Images/cortona/cortona-1.jpeg" alt="Cortona Branding">
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