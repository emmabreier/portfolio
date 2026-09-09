const projectContent = document.getElementById("project-content");

const projects = {
    "about-layton": `
        <div class="print-design-header project-page-header">
            <p class="eyebrow">Client-Based Professional Practice</p>
            <h2>Layton Design <br>Studio</h2>
        </div>

        <div class="content-pair print-design-layout about-layton-pair">
            <div class="content-type print-design-copy">
                <h3>About Layton</h3>
                <p>
                Layton Design Studio is a collaborative, client-focused professional practice studio where students gain hands-on experience working with real clients. The studio provides an opportunity to develop design skills while learning how to communicate, collaborate, and build professional relationships.            
                    </p>
            </div>

            <div class="content-photo project-media print-feature">
                <img src="Images/carcloseup.JPG" alt="Layton About">
            </div>
        </div>
    `,

    "BMW mean machine": `
        <div class="print-design-header project-page-header">
            <p class="eyebrow">Livery Design</p>
            <h2>BMW x UGA</h2>
        </div>

        <div class="project-media banner-media bmw-banner">
            <img src="Images/mmbanner10.png" alt="BMW Mean Machine">
        </div>
        <div class="content-pair print-design-layout">
            <div class="content-type print-design-copy">
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
            <p class="eyebrow">Branding and Livery</p>
            <h2>UGA <br>Motorsports</h2>
        </div>

        <div class="content-pair print-design-layout">
            <div class="content-type print-design-copy">
                <p>
                    We worked with UGA College of Engineering to create a new brand system for UGA Motorsports that felt bold, technical, and unmistakably athletic.
                </p>
            </div>

            <div class="content-photo project-media print-feature">
                <img src="Images/finallaytonpages-02.png" alt="UGA Motorsports">
            </div>
        </div>

        <div class="photo-grid">
         <div class="project-media portrait-media">
                <img src="Images/callpolice.jpeg" alt="UGA Motorsports">
            </div>
             <div class="project-media portrait-media">
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