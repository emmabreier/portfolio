const projectContent = document.getElementById("project-content");

const projects = {
    "about-layton": `
        <div class="print-design-header project-page-header">
            <p class="eyebrow">Layton Studio</p>
            <h2>Layton Design Studio</h2>
        </div>

        <div class="content-pair print-design-layout about-layton-pair">
            <div class="content-type print-design-copy">
                <p class="meta">Brand Identity</p>
                <h3>Layton Studio</h3>
                <p>
                    Layton design studio is a collaborative branding and identity practice focused on clarity, character, and strategic visual storytelling.
                </p>
            </div>

            <div class="content-photo project-media print-feature">
                <img src="Images/unveil.jpg" alt="Layton About">
            </div>
        </div>
    `,

    "BMW mean machine": `
        <div class="print-design-header project-page-header">
            <p class="eyebrow">Layton Studio</p>
            <h2>BMW x UGA</h2>
        </div>

        <div class="project-media media-wide bmw-banner">
            <img src="Images/mmbanner10.png" alt="BMW Mean Machine">
        </div>
        <div class="content-pair print-design-layout">
            <div class="content-type print-design-copy">
                <p class="meta">Brand Collaboration</p>
                <h3>Mean Machine</h3>
                <p>
                    UGA collaborated with BMW to create a mean machine concept rooted in performance, precision, and motorsport energy.
                </p>
            </div>

            <div class="content-photo project-media print-feature">
                <img src="Images/finallaytonpages-01.png" alt="BMW Mean Machine">
            </div>
        </div>
    `,

    "UGA Motorsports": `
        <div class="print-design-header project-page-header">
            <p class="eyebrow">Layton Studio</p>
            <h2>UGA Motorsports</h2>
        </div>

        <div class="content-pair print-design-layout">
            <div class="content-type print-design-copy">
                <p class="meta">Brand Identity</p>
                <h3>UGA Motorsports</h3>
                <p>
                    We worked with UGA College of Engineering to create a new brand system for UGA Motorsports that felt bold, technical, and unmistakably athletic.
                </p>
            </div>

            <div class="content-photo project-media print-feature">
                <img src="Images/finallaytonpages-02.png" alt="UGA Motorsports">
            </div>
        </div>

        <div class="photo-grid">
         <div class="project-media media-tall">
                <img src="Images/callpolice.jpeg" alt="UGA Motorsports">
            </div>
             <div class="project-media media-tall">
                <img src="Images/unveil.jpg" alt="UGA Motorsports">
            </div>
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