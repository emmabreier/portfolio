const projectContent = document.getElementById("project-content");

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

    "BMW mean machine": `
        <div class="livery-case-study bmw-case-study">
            <div class="print-design-header project-page-header">
                <p class="eyebrow">Livery Design</p>
                <h2>BMW x UGA</h2>
            </div>

            <div class="content-pair print-design-layout">
                <div class="content-photo project-media print-feature">
                    <img loading="lazy" decoding="async" src="Images/bmw1.JPEG" alt="BMW Mean Machine concept artwork">
                </div>
                <div class="content-type print-design-copy">
                    <p> A team of 12 student designers with Layton Design Studio collaborated with BMW and UGA Athletics to create three unique wraps for the BMW Mean Machine, with fans voting to select the final design.</p>
                    <div class="project-cta-row">
                        <a class="issue-cta" href="https://news.uga.edu/uga-students-take-the-wheel-in-designing-bmw-mean-machine/" target="_blank" rel="noopener noreferrer">read the UGA story</a>
                        <a class="issue-cta" href="https://youtu.be/5FPfbL2OMug?si=DKulfhqUlrJwxa_j" target="_blank" rel="noopener noreferrer">watch youtube video</a>
                    </div>
                </div>
            </div>

            <div class="content-pair print-design-layout">
                <div class="content-type print-design-copy">
                    <h3>About the Mean Machine</h3>
                    <p>The BMW Mean Machine is a fan-favorite promotional vehicle known for the past few years to be designed by a fan submission process. This year, BMW wanted to work directly with the students at UGA, and our team of 12 student designers collaborated to create three unique concepts and wraps for the vans to vote on. </p>
                </div>
                <div class="content-photo project-media print-feature">
                    <img loading="lazy" decoding="async" src="Images/bmw2.JPEG" alt="Close-up of the BMW Mean Machine livery">
                </div>
            </div>

            <div class="content-pair print-design-layout livery-system-pair">
                <div class="content-type print-design-copy">
                    <h3>Class Logistics</h3>
                    <p>The class practiced professional design processes, from initial concept development with a team of designers to client communication and presentations of the final design concepts. <br>This project was very collaborative and designed so that all students worked and gave input on every single part of the design process.</p>
                </div>
                <div class="content-photo project-media print-feature">
                    <img loading="lazy" decoding="async" src="Images/8E6A404E-B740-45D5-AB8C-135381EEED95_1_201_a.jpeg" alt="BMW Mean Machine livery system artwork">
                </div>
            </div>

            <div class="process-wide-photo">
                <img loading="lazy" decoding="async" src="Images/longprocessphoto.png" alt="Wide BMW Mean Machine design process overview">
            </div>

            <div class="content-pair print-design-layout cortona-process-pair">
                <div class="content-type print-design-copy">
                    <h3>Development</h3>
                    <p>The design develops from graphic concept work into a full vehicle application, balancing sponsor visibility, movement, and the identity of both partners.</p>
                </div>
                <div class="process-photo-column bmw-process-photo-column">
                    <img loading="lazy" decoding="async" src="Images/college inspo.png" alt="Collegiate inspiration for the BMW Mean Machine design">
                    <img loading="lazy" decoding="async" src="Images/bmwsketch.JPG" alt="BMW Mean Machine design sketch">
                </div>
            </div>

            <div class="content-pair print-design-layout">
                <div class="content-photo project-media print-feature">
                    <img loading="lazy" decoding="async" src="Images/bmwscene1.jpeg" alt="BMW Mean Machine graphics">
                </div>
                <div class="content-type print-design-copy">
                    <h3>Collaboration</h3>
                    <p>Layered shapes and directional marks add motion to the bodywork while giving the project a distinctive visual signature.</p>
                </div>
            </div>

            <section class="motorsports-section">
                <div class="content-pair print-design-layout bmw-concept-intro">
                    <div class="content-type print-design-copy">
                        <h3>Final Concept: Collegiate</h3>
                        <p>The Collegiate concept pairs UGA’s recognizable colors and athletic identity with a bold, performance-inspired vehicle design.</p>
                    </div>
                    <div aria-hidden="true"></div>
                </div>
                <div class="motorsports-comparison-grid">
                    <figure class="photo-card"><img loading="lazy" decoding="async" src="Images/mmdriverside.png" alt="BMW Mean Machine Concept One driver side"></figure>
                    <figure class="photo-card"><img loading="lazy" decoding="async" src="Images/mmpassenger.png" alt="BMW Mean Machine Concept One passenger side"></figure>
                </div>
                <div class="process-wide-photo">
                    <img loading="lazy" decoding="async" src="Images/mmcloseup.png" alt="Close-up of the BMW Mean Machine Concept One design">
                </div>
            </section>

            <section class="motorsports-section bmw-beware-section">
                <div class="content-pair print-design-layout bmw-concept-intro">
                    <div class="content-type print-design-copy">
                        <h3>Final Concept: Beware of Dawg</h3>
                        <p>The Beware of Dawg concept brings an energetic Bulldog-inspired graphic treatment across the vehicle’s sides, rear, and roof.</p>
                    </div>
                    <div aria-hidden="true"></div>
                </div>
                <div class="bmw-beware-grid">
                    <figure class="photo-card"><img loading="lazy" decoding="async" src="Images/beware-dawg-passenger-side.jpg" alt="Beware of Dawg BMW Mean Machine passenger side"></figure>
                    <figure class="photo-card"><img loading="lazy" decoding="async" src="Images/beware-dawg-driver-side.jpg" alt="Beware of Dawg BMW Mean Machine driver side"></figure>
                </div>
                <div class="bmw-beware-grid">
                    <figure class="photo-card"><img loading="lazy" decoding="async" src="Images/beware-dawg-back.jpg" alt="Beware of Dawg BMW Mean Machine rear view"></figure>
                    <figure class="photo-card bmw-beware-top"><img loading="lazy" decoding="async" src="Images/beware-dawg-top.jpg" alt="Overhead view of the Beware of Dawg BMW Mean Machine design"></figure>
                </div>
            </section>

            <div class="content-pair print-design-layout">
                <div class="content-type print-design-copy">
                    <h3>Fan Interaction</h3>
                    <p>Fans explored three student-designed concepts and helped choose the design that would represent the Mean Machine.</p>
                </div>
                <div class="content-photo project-media print-feature">
                    <img loading="lazy" decoding="async" src="Images/fanvote2.png" alt="BMW Mean Machine fan vote campaign page">
                </div>
            </div>

            <div class="content-pair print-design-layout">
                <div class="content-type print-design-copy">
                    <h3>Voting</h3>
                    <p>A dedicated campaign page invited fans to vote for their favorite Mean Machine design.</p>
                </div>
                <div class="content-photo project-media print-feature">
                    <img loading="lazy" decoding="async" src="Images/fanvote.png" alt="Fan vote page presenting the three BMW Mean Machine concepts">
                </div>
            </div>

            <div class="content-pair print-design-layout final-pattern-pair">
                <div class="content-photo project-media print-feature">
                    <img loading="lazy" decoding="async" src="Images/bmw7.JPEG" alt="Finished BMW Mean Machine livery">
                </div>
                <div class="content-type print-design-copy">
                    <h3>Final Chosen Livery</h3>
                    <p>The finished concept applies the identity across the car, translating the graphics into a unified on-track presence.</p>
                </div>
            </div>

            <div class="fine-art-grid bmw-gallery">
                <figure class="photo-card"><img loading="lazy" decoding="async" src="Images/bmw3.JPEG" alt="BMW Mean Machine photo 3"></figure>
                <figure class="photo-card"><img loading="lazy" decoding="async" src="Images/bmw4.JPEG" alt="BMW Mean Machine photo 4"></figure>
                <figure class="photo-card"><img loading="lazy" decoding="async" src="Images/bmw5.JPEG" alt="BMW Mean Machine photo 5"></figure>
                <figure class="photo-card"><img loading="lazy" decoding="async" src="Images/bmw6.JPEG" alt="BMW Mean Machine photo 6"></figure>
                <figure class="photo-card"><img loading="lazy" decoding="async" src="Images/bmw8.JPEG" alt="BMW Mean Machine photo 8"></figure>
                <figure class="photo-card"><img loading="lazy" decoding="async" src="Images/bmw9.JPEG" alt="BMW Mean Machine photo 9"></figure>
            </div>

            <div class="final-reflection">
                <h3>Final Reflection</h3>
                <p>This was an incredible opportunity, and I felt my work improve significantly as this semester went on. The biggest challenge was self-perseverance and maintaining confidence throughout the process. As a young student, it’s easy to second-guess yourself and feel unprepared for a challenge, especially with the potential for thousands to see your work. I loved working collaboratively, and I thoroughly enjoyed how well this group of designers worked well together. I felt comfortable enough to try harder tasks, present to the clients more, and experiment. I wasn't afraid to fail or throw out bad ideas, and I think thats what made this such a beneficial and wonderful project. Earlier in the year, I was unable to express fully when I didn't know how to do something, and that inability to be fully transparent slowed my progress down. I learned that even though it's terrifying, you have to dive into the deep end and be yourself. At the end of this project, I am so proud of what I created, and I am proud of what our class created together.</p>
            </div>
        </div>
    `,

    "UGA Motorsports": `
        <div class="livery-case-study motorsports-case-study">
            <div class="print-design-header project-page-header">
                <p class="eyebrow">Branding and Livery</p>
                <h2>UGA <br>Motorsports</h2>
            </div>

            <div class="content-pair print-design-layout">
                <div class="content-photo project-media print-feature">
                    <img loading="lazy" decoding="async" src="Images/unveil.jpg" alt="UGA Motorsports car unveiling">
                </div>
                <div class="content-type print-design-copy">
                    <p>As part of UGA’s Layton Design Studio, developing a cohesive visual identity and vehicle liveries for UGA Motorsports, a student-run racing team.</p>
                    <a class="issue-cta" href="https://www.instagram.com/ugamotorsports/" target="_blank" rel="noopener noreferrer">follow UGA Motorsports on Instagram</a>
                </div>
            </div>
            <div class="fine-art-grid motorsports-photo-grid motorsports-intro-grid">
                <figure class="photo-card"><img loading="lazy" decoding="async" src="Images/mslogobefore.png" alt="Original UGA Motorsports logo"></figure>
                <figure class="photo-card"><img loading="lazy" decoding="async" src="Images/ugafinalms.png" alt="Final UGA Motorsports logo"></figure>
            </div>

            <section class="motorsports-section">
                <div class="content-pair print-design-layout">
                    <div class="content-type print-design-copy"><h3>About UGA Motorsports</h3><p>As UGA Motorsports continued to grow in skill and competitiveness, its outdated logo and inconsistent branding no longer reflected the team it was becoming. They needed a cohesive identity and updated liveries to match their performance and attract sponsors.​​​​​​​</p></div>
                    <div class="content-photo project-media print-feature"><img loading="lazy" decoding="async" src="Images/metalkingwmm.png" alt="UGA Motorsports team exploring logo concepts"></div>
                </div>
                <div class="fine-art-grid motorsports-photo-grid">
                    <figure class="photo-card"><img loading="lazy" decoding="async" src="Images/behindscenems.png" alt="UGA Motorsports hand-drawn logo explorations"></figure>
                    <figure class="photo-card"><img loading="lazy" decoding="async" src="Images/msprocessphoto2.png" alt="UGA Motorsports process photo"></figure>
                </div>
            </section>

            <section class="motorsports-section">
                <div class="content-pair print-design-layout">
                    <div class="content-photo project-media print-feature"><img loading="lazy" decoding="async" src="Images/motorsportcover.jpeg" alt="UGA Motorsports inspiration photo"></div>
                    <div class="content-type print-design-copy"><h3>Research and Exploration</h3><p>Through on-site and in-studio meetings with the Motorsports team, we gathered insight into their identity and goals, then translated those ideas into initial sketches and concepts.</p></div>
                </div>
                <div class="content-pair print-design-layout">
                    <div class="content-type print-design-copy"><h3>Final Logo and Identity</h3><p>With the concept defined, we expanded into a complete visual identity system: building detailed brand guidelines, application mockups, and clear standards for proper and improper use.
</p></div>
                    <div class="content-photo project-media print-feature"><img loading="lazy" decoding="async" src="Images/ugafinalms.png" alt="Final UGA Motorsports logo"></div>
                </div>
                <div class="fine-art-grid motorsports-photo-grid motorsports-final-logo-grid">
                    <figure class="photo-card"><img loading="lazy" decoding="async" src="Images/logomarkvariations.png" alt="UGA Motorsports logo mark variations"></figure>
                    <figure class="photo-card"><img loading="lazy" decoding="async" src="Images/mockupms.png" alt="UGA Motorsports apparel mockup"></figure>
                    <figure class="photo-card"><img loading="lazy" decoding="async" src="Images/instamockupms.png" alt="UGA Motorsports Instagram mockup"></figure>
                </div>
            </section>

            <section class="motorsports-section">
                <div class="content-pair print-design-layout">
                    <div class="content-type print-design-copy"><h3>Brand Guidelines</h3></div>
                    <div class="content-photo project-media print-feature"><img loading="lazy" decoding="async" src="Images/mslogomark.png" alt="UGA Motorsports logo mark guidelines"></div>
                </div>
                <div class="motorsports-comparison-grid">
                    <figure class="photo-card"><img loading="lazy" decoding="async" src="Images/msdoanddont1.png" alt="UGA Motorsports typography do and don't guidelines"></figure>
                    <figure class="photo-card"><img loading="lazy" decoding="async" src="Images/msdoanddont2.png" alt="UGA Motorsports logo application do and don't guidelines"></figure>
                </div>
            </section>

            <section class="motorsports-section">
                <div class="content-pair print-design-layout">
                    <div class="content-photo project-media print-feature"><img loading="lazy" decoding="async" src="Images/msshop.jpeg" alt="UGA Motorsports FSAE car concept"></div>
                    <div class="content-type print-design-copy"><h3>Livery Design</h3><p>After finalizing the visual identity, we transitioned into vehicle livery design, maintaining consistency with the established brand direction. We gained access to the Motorsport workspace to gain more intelligence and inspiration on both cars.</p></div>
                </div>
                <div class="content-pair print-design-layout">
                    <div class="content-type print-design-copy"><h3>Process</h3><p>The design team had a unique challenge to this car considering the texture of the material. The design had to be able to be hand-painted using only stencils; the amount of sponsors also was an important factor into this design.</p></div>
                    <div class="content-photo project-media print-feature"><img loading="lazy" decoding="async" src="Images/msfsaesketch.png" alt="UGA FSAE car in the shop"></div>
                </div>
                <div class="content-pair print-design-layout">
                    <div class="content-photo project-media print-feature"><img loading="lazy" decoding="async" src="Images/unveil.jpg" alt="UGA Motorsports car unveiling"></div>
                    <div class="content-type print-design-copy">
                        <h3>Final FSAE Car</h3>
                        <p>The design team had the opportunity to see our design as the finished result at the UGA Motorsports unveiling.</p>
                    </div>
                </div>
                <div class="fine-art-grid motorsports-photo-grid">
                    <figure class="photo-card"><img loading="lazy" decoding="async" src="Images/finalfsae.jpg" alt="Final UGA Motorsports FSAE car"></figure>
                    <figure class="photo-card"><img loading="lazy" decoding="async" src="Images/IMG_4958.jpg" alt="UGA Motorsports FSAE car photo"></figure>
                </div>
                <div class="motorsports-wide-photo"><img loading="lazy" decoding="async" src="Images/inalmshorizonral.jpeg" alt="UGA Motorsports FSAE car in a wide horizontal view"></div>
                <div class="final-reflection">
                    <h3>Final Reflection</h3>
                    <p>This project strengthened my ability to collaborate and grow within a team of designers. I learned that another designer’s success doesn’t diminish my own; instead, it can expand my perspective and push my work in new, more creative directions.
Working with real clients across multiple projects also improved my time management and communication skills, both with clients and within the team. Additionally, the fast-paced, hands-on nature of the project significantly advanced my technical abilities and efficiency with digital design tools.</p>
                </div>
            </section>
        </div>
    `
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