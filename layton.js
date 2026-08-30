const projectContent = document.getElementById("project-content");

const projects = {
    "about-layton": `
        <h1>LAYTON</h1>

        <p>
            This is where your About Layton project description goes.
        </p>

        <img src="images/cortona/cortona-1.jpg" alt="Layton About">
    `,

    "BMW mean machine": `
        <h1>BMW MEAN<br>MACHINE</h1>

        <p>
            Your BMW project description goes here.
        </p>

        <img src="images/cortona/cortona-1.jpg" alt="Cortona Branding">
    `,

    "UGA Motorsports": `
        <h1>UGA MOTORSPORTS</h1>

        <p>
            Your UGA Motorsports project description goes here.
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