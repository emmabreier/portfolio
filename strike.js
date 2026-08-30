const projectContent = document.getElementById("project-content");

const projects = {
    "about-strike": `
        <h1>STRIKE</h1>

        <p>
            This is where your About Strike project description goes.
        </p>

        <img src="images/cortona/cortona-1.jpg" alt="Strike About">
    `,

    "issue-11": `
        <h1>ISSUE 11</h1>

        <p>
            Your ISSUE 11 project description goes here.
        </p>

        <img src="images/cortona/cortona-1.jpg" alt="Cortona Branding">
    `,

    "issue-12": `
        <h1>ISSUE 12</h1>

        <p>
            Your ISSUE 12 project description goes here.
        </p>

        <img src="images/cortona/cortona-1.jpg" alt="Cortona Branding">
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