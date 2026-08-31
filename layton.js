const projectContent = document.getElementById("project-content");

const projects = {
    "about-layton": `
        <h1>Layton Design Studio</h1>

        <p>
            Layton design studio. 
        </p>

        <img src="images/cortona/cortona-1.jpg" alt="Layton About">
    `,

    "BMW mean machine": `
        <h1>BMW Mean<br>Machine</h1>

        <p>
            UGA collaborated with BMW to create a mean machine.
        </p>

        <img src="images/cortona/cortona-1.jpg" alt="Cortona Branding">
    `,

    "UGA Motorsports": `
        <h1>UGA Motorsports</h1>

        <p>
            We worked with UGA college of engineering to create a new brand for UGA Motorsports.
        </p>

        <img src="images/personal/personal-1.jpg" alt="Personal Project">
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