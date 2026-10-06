const projectContent = document.getElementById("project-content");

function buildLiveryCaseStudy(project) {
    const renderImage = (image, alt) =>
        `<img loading="lazy" decoding="async" src="Images/${image}" alt="${alt}">`;
    const renderGrid = images => images.map(({ image, alt }) => renderImage(image, alt)).join("");
    const renderGallery = project.galleryLayout === "columns"
        ? project.gallery.map(({ image, alt }) => `<figure class="photo-card">${renderImage(image, alt)}</figure>`).join("")
        : renderGrid(project.gallery);
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

            <div class="content-pair print-design-layout ${project.theme === "bmw-case-study" ? "livery-system-pair" : ""}">
                <div class="content-type print-design-copy">
                    <h3>${project.brand.heading}</h3>
                    <p>${project.brand.copy}</p>
                </div>
                <div class="content-photo project-media print-feature">
                    ${renderImage(project.brand.image, project.brand.alt)}
                </div>
            </div>

            ${project.process.wideImage ? `
                <div class="process-wide-photo">
                    ${renderImage(project.process.wideImage.image, project.process.wideImage.alt)}
                </div>
            ` : ""}

            <div class="content-pair print-design-layout cortona-process-pair">
                <div class="content-type print-design-copy">
                    <h3>Process</h3>
                    <p>${project.process.copy}</p>
                </div>
                <div class="process-photo-column ${project.theme === "bmw-case-study" ? "bmw-process-photo-column" : ""}">
                    ${renderGrid(project.process.images)}
                </div>
            </div>

            <div class="content-pair print-design-layout">
                <div class="content-photo project-media print-feature">
                    ${renderImage(project.graphics.image, project.graphics.alt)}
                </div>
                <div class="content-type print-design-copy">
                    <h3>${project.graphics.heading}</h3>
                    <p>${project.graphics.copy}</p>
                </div>
            </div>

            ${project.fanInteraction ? `
                <div class="content-pair print-design-layout">
                    <div class="content-type print-design-copy">
                        <h3>${project.fanInteraction.heading}</h3>
                        <p>${project.fanInteraction.copy}</p>
                    </div>
                    <div class="content-photo project-media print-feature">
                        ${renderImage(project.fanInteraction.image, project.fanInteraction.alt)}
                    </div>
                </div>
            ` : ""}

            ${project.voting ? `
                <div class="content-pair print-design-layout">
                    <div class="content-type print-design-copy">
                        <h3>${project.voting.heading}</h3>
                        <p>${project.voting.copy}</p>
                    </div>
                    <div class="content-photo project-media print-feature">
                        ${renderImage(project.voting.image, project.voting.alt)}
                    </div>
                </div>
            ` : ""}

            <div class="content-pair print-design-layout final-pattern-pair">
                <div class="content-photo project-media print-feature">
                    ${renderImage(project.application.image, project.application.alt)}
                </div>
                <div class="content-type print-design-copy">
                    <h3>${project.application.heading}</h3>
                    <p>${project.application.copy}</p>
                </div>
            </div>

            <div class="${project.galleryLayout === "columns" ? "fine-art-grid bmw-gallery" : "mockup-grid"}">
                ${renderGallery}
            </div>

            <div class="final-reflection">
                <h3>Final Reflection</h3>
                <p>${project.reflection}</p>
            </div>
        </div>
    `;
}

function buildMotorsportsCaseStudy() {
    const image = (file, alt) =>
        `<img loading="lazy" decoding="async" src="Images/${file}" alt="${alt}">`;
    const photoPair = (heading, copy, file, alt, textFirst = false) => `
        <div class="content-pair print-design-layout">
            ${textFirst ? `
                <div class="content-type print-design-copy"><h3>${heading}</h3><p>${copy}</p></div>
                <div class="content-photo project-media print-feature">${image(file, alt)}</div>
            ` : `
                <div class="content-photo project-media print-feature">${image(file, alt)}</div>
                <div class="content-type print-design-copy"><h3>${heading}</h3><p>${copy}</p></div>
            `}
        </div>
    `;
    const photoGrid = files => `
        <div class="fine-art-grid motorsports-photo-grid">
            ${files.map(({ file, alt }) => `<figure class="photo-card">${image(file, alt)}</figure>`).join("")}
        </div>
    `;

    return `
        <div class="livery-case-study motorsports-case-study">
            <div class="print-design-header project-page-header">
                <p class="eyebrow">Branding and Livery</p>
                <h2>UGA <br>Motorsports</h2>
            </div>

            <div class="content-pair print-design-layout">
                <div class="content-photo project-media print-feature">
                    ${image("unveil.jpg", "UGA Motorsports car unveiling")}
                </div>
                <div class="content-type print-design-copy">
                    <h3>About UGA Motorsports</h3>
                    <p>We worked with UGA College of Engineering to create a bold, technical brand system for UGA Motorsports. The identity connects the team's engineering work, cars, and public presence.</p>
                    <a class="issue-cta" href="https://www.instagram.com/ugamotorsports/" target="_blank" rel="noopener noreferrer">follow UGA Motorsports on Instagram</a>
                </div>
            </div>
            ${photoGrid([
                { file: "mslogobefore.png", alt: "Original UGA Motorsports logo" },
                { file: "ugafinalms.png", alt: "Final UGA Motorsports logo" }
            ])}

            <section class="motorsports-section">
                ${photoPair("Exploring the Mark", "Initial logo studies explored racing cues, UGA recognition, and ways to create a flexible mark that could work across team and vehicle applications.", "logomarkvariations.png", "UGA Motorsports logo mark explorations", true)}
                ${photoGrid([
                    { file: "ugalogomark.png", alt: "UGA Motorsports logomark guidance" },
                    { file: "behindscenems.png", alt: "UGA Motorsports early hand-drawn logo research" }
                ])}
            </section>

            <section class="motorsports-section">
                ${photoPair("Built for Racing", "The existing Motorsports inspiration image stays here. Its racing atmosphere and strong contrast continue to inform the team's identity.", "motorsportcover.jpeg", "UGA Motorsports inspiration photo")}
            </section>

            <section class="motorsports-section">
                <div class="content-type print-design-copy motorsports-section-intro">
                    <p>The identity is supported by a consistent palette, typography, logo guidance, and mockups for team apparel and social media.</p>
                </div>
                ${photoGrid([
                    { file: "brandcolorsms.png", alt: "UGA Motorsports brand colors" },
                    { file: "typerules.png", alt: "UGA Motorsports typography rules" }
                ])}
                <div class="motorsports-comparison-grid">
                    <figure class="photo-card">${image("msdoanddont1.png", "UGA Motorsports logo application guidance")}</figure>
                    <figure class="photo-card">${image("msdoanddont2.png", "UGA Motorsports logo usage examples")}</figure>
                </div>
                ${photoGrid([
                    { file: "mockupms.png", alt: "UGA Motorsports apparel mockup" },
                    { file: "instamockupms.png", alt: "UGA Motorsports Instagram mockup" }
                ])}
            </section>

            <section class="motorsports-section">
                ${photoPair("Process", "The FSAE identity was developed from early car concepts into a clear, high-impact race design that carries UGA branding across the vehicle.", "fsaems.png", "UGA Motorsports FSAE car concept")}
                <div class="content-pair print-design-layout">
                    <div class="content-type print-design-copy">
                        <h3>About FSAE</h3>
                        <p>The student team applies its engineering and design work to a competition-ready vehicle, bringing the identity from concept into the shop and onto the track.</p>
                    </div>
                    <div class="content-photo project-media print-feature">
                        ${image("mscarshop.jpeg", "UGA FSAE car in the shop")}
                    </div>
                </div>
                ${photoGrid([
                    { file: "msshop.jpeg", alt: "UGA FSAE team with the car in the shop" },
                    { file: "inalmshorizonral.jpeg", alt: "UGA FSAE car in profile" }
                ])}
            </section>

            <section class="motorsports-section">
                ${photoPair("Process", "The endurance program brings the team's engineering, preparation, and visual identity together through hands-on work in the shop and on race day.", "msshop.jpeg", "UGA Motorsports endurance team working in the shop")}
                ${photoPair("Inspiration", "The car, team environment, and racing culture continue to shape how the Motorsports identity is used across the endurance program.", "motorsportcover.jpeg", "UGA Motorsports endurance inspiration", true)}
                ${photoGrid([
                    { file: "mscarshop.jpeg", alt: "UGA Motorsports endurance car in the shop" },
                    { file: "inalmshorizonral.jpeg", alt: "UGA Motorsports endurance car in profile" }
                ])}
            </section>
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
        overview: "The Layton Design Studio partnered with BMW and UGA Athletics to rebrand the Mean Machine, a fan-favorite promotional vehicle designed through public submissions in past years. BMW and UGA aimed to highlight more student-led work in the final design. A team of 12 student designers developed three distinct wraps, with fans nationwide voting to select the winning design. This BMW X7 will represent UGA during the 2026–2027 football season.​​​​​​​",
        links: [
            { href: "https://news.uga.edu/uga-students-take-the-wheel-in-designing-bmw-mean-machine/", label: "read the UGA story" },
            { href: "https://youtu.be/5FPfbL2OMug?si=DKulfhqUlrJwxa_j", label: "watch youtube video" }
        ],
        hero: { image: "bmw1.JPEG", alt: "BMW Mean Machine concept artwork" },
        about: {
            image: "bmw2.JPEG",
            alt: "Close-up of the BMW Mean Machine livery",
            copy: "Representatives from BMW and UGA Athletics met with our team to explain past wraps and models, sharing what worked and what didn’t to inform the new design. From there, we collaborated on mood boards and sketches, developing three concepts: Collegiate, Make Noise, and Beware of Dawg."
        },
        process: {
            copy: "The design develops from graphic concept work into a full vehicle application, balancing sponsor visibility, movement, and the identity of both partners.",
            images: [
                { image: "college inspo.png", alt: "Collegiate inspiration for the BMW Mean Machine design" },
                { image: "dawginspo.png", alt: "Dawg inspiration for the BMW Mean Machine design" }
            ],
            wideImage: {
                image: "longprocessphoto.png",
                alt: "Wide BMW Mean Machine design process overview"
            }
        },
        brand: {
            heading: "Livery System",
            copy: "The brand elements and graphic language are carried across the vehicle to create a cohesive, high-performance concept.",
            image: "bmwscene1.jpeg",
            alt: "BMW Mean Machine livery system artwork"
        },
        colors: { copy: "The palette pairs UGA red and white with deep charcoal and blue accents for a sharp, performance-led look." },
        graphics: {
            heading: "Graphics",
            copy: "Layered shapes and directional marks add motion to the bodywork while giving the project a distinctive visual signature.",
            image: "bmwscene2.jpeg",
            alt: "BMW Mean Machine graphics"
        },
        fanInteraction: {
            heading: "Fan Interaction",
            copy: "Fans explored three student-designed concepts and helped choose the design that would represent the Mean Machine.",
            image: "fanvote2.png",
            alt: "BMW Mean Machine fan vote campaign page"
        },
        voting: {
            heading: "Voting",
            copy: "A dedicated campaign page invited fans to vote for their favorite Mean Machine design.",
            image: "fanvote.png",
            alt: "Fan vote page presenting the three BMW Mean Machine concepts"
        },
        application: {
            heading: "Final Livery",
            copy: "The finished concept applies the identity across the car, translating the graphics into a unified on-track presence.",
            image: "bmw7.JPEG",
            alt: "Finished BMW Mean Machine livery"
        },
        galleryLayout: "columns",
        gallery: [
            { image: "bmw3.JPEG", alt: "BMW Mean Machine photo 3" },
            { image: "bmw4.JPEG", alt: "BMW Mean Machine photo 4" },
            { image: "bmw5.JPEG", alt: "BMW Mean Machine photo 5" },
            { image: "bmw6.JPEG", alt: "BMW Mean Machine photo 6" },
            { image: "bmw8.JPEG", alt: "BMW Mean Machine photo 8" },
            { image: "bmw9.JPEG", alt: "BMW Mean Machine photo 9" }
        ],
        reflection: "This was an incredible opportunity, and I felt my work improve significantly as this semester went on. The biggest challenge was self-perseverance and maintaining confidence throughout the process. As a young student, it’s easy to second-guess yourself and feel unprepared for a challenge, especially with the potential for thousands to see your work. " +
        "I loved working collaboratively, and I thoroughly enjoyed how well this group of designers worked well together. I felt comfortable enough to try harder tasks, present to the clients more, and experiment. I wasn't afraid to fail or throw out bad ideas, and I think thats what made this such a beneficial and wonderful project. Earlier in the year, I was unable to express fully when I didn't know how to do something, and that inability to be fully transparent slowed my progress down. I learned that even though it's terrifying, you have to dive into the deep end and be yourself. At the end of this project, I am so proud of what I created, and I am proud of what our class created together. "
    }),

    "UGA Motorsports": buildMotorsportsCaseStudy()
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