const projectContent = document.getElementById("project-content");

function buildLiveryCaseStudy(project) {
    const renderImage = (image, alt) =>
        `<img loading="lazy" decoding="async" src="Images/${image}" alt="${alt}">`;
    const renderGrid = images => images.map(({ image, alt }) => renderImage(image, alt)).join("");
    const links = project.links.map(({ href, label }) =>
        `<a class="issue-cta" href="${href}" target="_blank" rel="noopener noreferrer">${label}</a>`
    ).join("");

    return `
        <div class="livery-case-study ${project.theme}">
            <div class="print-design-header project-page-header">
                <p class="eyebrow">${project.eyebrow}</p>
                <h2>${project.title}</h2>
            </div>

            <div class="content-pair print-design-layout">
                <div class="content-photo project-media print-feature">
                    ${renderImage(project.hero.image, project.hero.alt)}
                </div>
                <div class="content-type print-design-copy">
                    <h3>Overview</h3>
                    <p>${project.overview}</p>
                    ${links}
                </div>
            </div>

            <div class="content-pair print-design-layout">
                <div class="content-type print-design-copy">
                    <h3>About</h3>
                    <p>${project.about.copy}</p>
                </div>
                <div class="content-photo project-media print-feature">
                    ${renderImage(project.about.image, project.about.alt)}
                </div>
            </div>

            <div class="content-pair print-design-layout">
                <div class="content-photo project-media print-feature">
                    ${renderImage(project.inspiration.image, project.inspiration.alt)}
                </div>
                <div class="content-type print-design-copy">
                    <h3>Inspiration</h3>
                    <p>${project.inspiration.copy}</p>
                </div>
            </div>

            <div class="mockup-grid inspiration-mockup-grid">
                ${renderGrid(project.inspiration.images)}
            </div>

            <div class="content-pair print-design-layout cortona-process-pair">
                <div class="content-type print-design-copy">
                    <h3>Process</h3>
                    <p>${project.process.copy}</p>
                </div>
                <div class="process-photo-column">
                    ${renderGrid(project.process.images)}
                </div>
            </div>

            <div class="content-pair print-design-layout">
                <div class="content-type print-design-copy">
                    <h3>${project.brand.heading}</h3>
                    <p>${project.brand.copy}</p>
                </div>
                <div class="content-photo project-media print-feature">
                    ${renderImage(project.brand.image, project.brand.alt)}
                </div>
            </div>

            <div class="color-section">
                <div class="color-section-text">
                    <h3>Colors</h3>
                    <p>${project.colors.copy}</p>
                </div>
                <div class="color-swatches" aria-hidden="true">
                    <div class="color-swatch color-swatch-1"></div>
                    <div class="color-swatch color-swatch-2"></div>
                    <div class="color-swatch color-swatch-3 color-swatch-half"></div>
                    <div class="color-swatch color-swatch-4 color-swatch-half"></div>
                </div>
            </div>

            <div class="content-pair print-design-layout">
                <div class="content-type print-design-copy">
                    <h3>${project.graphics.heading}</h3>
                    <p>${project.graphics.copy}</p>
                </div>
                <div class="content-photo project-media print-feature">
                    ${renderImage(project.graphics.image, project.graphics.alt)}
                </div>
            </div>

            <div class="content-pair print-design-layout final-pattern-pair">
                <div class="content-photo project-media print-feature">
                    ${renderImage(project.application.image, project.application.alt)}
                </div>
                <div class="content-type print-design-copy">
                    <h3>${project.application.heading}</h3>
                    <p>${project.application.copy}</p>
                </div>
            </div>

            <div class="mockup-grid">
                ${renderGrid(project.gallery)}
            </div>

            <div class="final-reflection">
                <h3>Final Reflection</h3>
                <p>${project.reflection}</p>
            </div>
        </div>
    `;
}

const projects = {
    "about-layton": `
        <div class="print-design-header project-page-header">
            <p class="eyebrow">Client-Based Professional Practice</p>
            <h2>Layton <br>Design Studio</h2>
        </div>

        <div class="content-pair print-design-layout">
            <div class="content-photo project-media print-feature">
                <img loading="lazy" decoding="async" src="Images/croppedlogis1.JPEG" alt="close up of a car">
            </div>

            <div class="content-type print-design-copy">
                <h3>About Layton</h3>
                <p>
                Layton Design Studio is a collaborative, client-focused professional practice studio where students gain hands-on experience working with real clients. The studio provides an opportunity to develop design skills while learning how to communicate, collaborate, and build professional relationships.            
                    </p>
            </div>
        </div>
    `,

    "BMW mean machine": buildLiveryCaseStudy({
        theme: "bmw-case-study",
        eyebrow: "Livery Design",
        title: "BMW x UGA",
        overview: "UGA collaborated with BMW to create a Mean Machine concept rooted in performance, precision, and motorsport energy.",
        links: [
            { href: "https://news.uga.edu/uga-students-take-the-wheel-in-designing-bmw-mean-machine/", label: "read the UGA story" },
            { href: "https://youtu.be/5FPfbL2OMug?si=DKulfhqUlrJwxa_j", label: "watch youtube video" }
        ],
        hero: { image: "finallaytonpages-01.jpg", alt: "BMW Mean Machine concept artwork" },
        about: {
            image: "carcloseup.JPG",
            alt: "Close-up of the BMW Mean Machine livery",
            copy: "The project brought BMW performance together with UGA identity in a bold, high-impact livery for the Mean Machine concept."
        },
        inspiration: {
            image: "finallaytonpages-02.jpg",
            alt: "BMW Mean Machine visual direction",
            copy: "The visual direction draws on the speed and technical precision of motorsport, pairing graphic movement with strong, recognizable team branding.",
            images: [
                { image: "finallaytonpages-03.png", alt: "BMW Mean Machine design exploration" },
                { image: "finallaytonpages-04.png", alt: "BMW Mean Machine livery study" }
            ]
        },
        process: {
            copy: "The design develops from graphic concept work into a full vehicle application, balancing sponsor visibility, movement, and the identity of both partners.",
            images: [
                { image: "carreveal.jpg", alt: "BMW Mean Machine livery revealed on the car" },
                { image: "finallaytonpages-03.png", alt: "BMW Mean Machine design process" }
            ]
        },
        brand: {
            heading: "Livery System",
            copy: "The brand elements and graphic language are carried across the vehicle to create a cohesive, high-performance concept.",
            image: "finallaytonpages-04.png",
            alt: "BMW Mean Machine livery system artwork"
        },
        colors: { copy: "The palette pairs UGA red and white with deep charcoal and blue accents for a sharp, performance-led look." },
        graphics: {
            heading: "Graphics",
            copy: "Layered shapes and directional marks add motion to the bodywork while giving the project a distinctive visual signature.",
            image: "finallaytonpages-02.jpg",
            alt: "BMW Mean Machine graphics"
        },
        application: {
            heading: "Final Livery",
            copy: "The finished concept applies the identity across the car, translating the graphics into a unified on-track presence.",
            image: "carcloseup.JPG",
            alt: "Finished BMW Mean Machine livery"
        },
        gallery: [
            { image: "finallaytonpages-01.jpg", alt: "BMW Mean Machine concept artwork" },
            { image: "finallaytonpages-02.jpg", alt: "BMW Mean Machine visual direction" },
            { image: "carreveal.jpg", alt: "BMW Mean Machine car reveal" },
            { image: "finallaytonpages-04.png", alt: "BMW Mean Machine livery detail" }
        ],
        reflection: "The collaboration brought a high-performance visual concept to life by connecting UGA spirit with BMW's motorsport-focused character."
    }),

    "UGA Motorsports": buildLiveryCaseStudy({
        theme: "motorsports-case-study",
        eyebrow: "Branding and Livery",
        title: "UGA <br>Motorsports",
        overview: "We worked with UGA College of Engineering to create a new brand system for UGA Motorsports that felt bold, technical, and unmistakably athletic.",
        links: [
            { href: "https://news.uga.edu/uga-students-take-the-wheel-in-designing-bmw-mean-machine/", label: "read the UGA story" },
            { href: "https://youtu.be/5FPfbL2OMug?si=DKulfhqUlrJwxa_j", label: "watch youtube video" }
        ],
        hero: { image: "finallaytonpages-02.jpg", alt: "UGA Motorsports visual identity" },
        about: {
            image: "LDS_UGAMotorsports_Spring26.jpg",
            alt: "Presenting the UGA Motorsports project",
            copy: "The project builds a recognizable identity for the UGA Motorsports team, connecting its engineering work and race-day presence through a bold visual system."
        },
        inspiration: {
            image: "motorsportcover.jpeg",
            alt: "UGA Motorsports graphics and team environment",
            copy: "The direction takes cues from racing culture: high contrast, strong movement, technical details, and the energy of the team and its community.",
            images: [
                { image: "callpolice.jpeg", alt: "UGA Motorsports car in use" },
                { image: "unveil.jpg", alt: "UGA Motorsports car unveiling" }
            ]
        },
        process: {
            copy: "The identity was developed alongside the team, moving from collaborative exploration and presentation into real-world applications on the car and at events.",
            images: [
                { image: "LDS_UGAMotorsports_Spring26.jpg", alt: "UGA Motorsports concept presentation" },
                { image: "unveil.jpg", alt: "UGA Motorsports design revealed" }
            ]
        },
        brand: {
            heading: "Team Identity",
            copy: "A consistent visual system helps UGA Motorsports communicate its personality across team materials, the car, and public appearances.",
            image: "finallaytonpages-03.png",
            alt: "UGA Motorsports identity artwork"
        },
        colors: { copy: "A race-ready palette centers on Georgia red, black, and white, with restrained metallic tones supporting the technical feel." },
        graphics: {
            heading: "Race Graphics",
            copy: "The graphic system is built to read clearly at speed, using strong contrast and confident shapes across the vehicle and supporting materials.",
            image: "finallaytonpages-04.png",
            alt: "UGA Motorsports graphic system"
        },
        application: {
            heading: "Final Application",
            copy: "The identity comes together on the race car and in team settings, creating a unified presence from the workshop to the track.",
            image: "callpolice.jpeg",
            alt: "UGA Motorsports identity applied to the car"
        },
        gallery: [
            { image: "finallaytonpages-03.png", alt: "UGA Motorsports identity design" },
            { image: "finallaytonpages-04.png", alt: "UGA Motorsports race graphics" },
            { image: "unveil.jpg", alt: "UGA Motorsports car unveiling" },
            { image: "LDS_UGAMotorsports_Spring26.jpg", alt: "UGA Motorsports project presentation" }
        ],
        reflection: "This project brought the team's competitive spirit and engineering focus into a visual identity designed to work across the car, team, and racing environment."
    })
};

function setActiveProject(projectKey) {
    const projectHtml = projects[projectKey];

    if (!projectContent || !projectHtml) {
        return;
    }

    const swapContent = () => {
        projectContent.innerHTML = projectHtml;
    };

    const isFirstRender = !projectContent.innerHTML.trim();
    const reduceMotion = window.matchMedia &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isFirstRender || reduceMotion) {
        swapContent();
    } else {
        // Gentle cross-fade between sections
        projectContent.classList.add('is-fading');
        window.setTimeout(() => {
            swapContent();
            projectContent.classList.remove('is-fading');
            projectContent.classList.add('is-entering');

            const cleanup = () => projectContent.classList.remove('is-entering');
            projectContent.addEventListener('transitionend', cleanup, { once: true });
            window.setTimeout(cleanup, 250); // fallback if transitionend is dropped
        }, 150);
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