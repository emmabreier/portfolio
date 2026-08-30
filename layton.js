const projectContent = document.getElementById("project-content");

const projects = {
    "about-layton": `
        <div class="project-description">Studio profile</div>
        <h1>LAYTON</h1>
        <p class="lead">
            Layton Studio is positioned as a design-forward practice focused on strategic storytelling, elevated systems, and highly considered brand experiences for ambitious clients.
        </p>

        <div class="project-meta">
            <div class="meta-item">
                <span>Focus</span>
                <strong>Brand systems<br>and digital direction</strong>
            </div>
            <div class="meta-item">
                <span>Approach</span>
                <strong>Editorial<br>storytelling</strong>
            </div>
            <div class="meta-item">
                <span>Result</span>
                <strong>Clear voice<br>with enduring clarity</strong>
            </div>
        </div>

        <div class="project-split">
            <div class="detail-block">
                <h2>Studio Overview</h2>
                <p>
                    The studio practice combines strategic thinking with craft, producing identity systems and creative direction that remain flexible enough for growth while still feeling distinctive.
                </p>
                <p>
                    Every touchpoint is shaped to feel intentional, from campaign narratives to presentation systems and digital experiences.
                </p>
            </div>
            <div class="detail-block">
                <h2>Core strengths</h2>
                <ul>
                    <li>Strategic positioning and planning</li>
                    <li>Distinctive visual systems</li>
                    <li>Content that supports growth</li>
                </ul>
            </div>
        </div>

        <div class="project-visuals">
            <div class="visual-card" style="background: linear-gradient(135deg, #d8d0ca 0%, #ecded3 38%, #d8e1ea 100%);"><span>Studio identity</span></div>
            <div class="caption">A presentation-ready studio framework designed to communicate clarity, confidence, and distinction.</div>
        </div>
    `,

    "BMW mean machine": `
        <div class="project-description">Campaign concept</div>
        <h1>BMW MEAN<br>MACHINE</h1>
        <p class="lead">
            This project explored how performance branding could feel both technical and emotionally resonant, translating motorsport energy into a refined campaign identity.
        </p>

        <div class="project-meta">
            <div class="meta-item">
                <span>Client</span>
                <strong>BMW + UGA<br>Motorsports</strong>
            </div>
            <div class="meta-item">
                <span>Deliverable</span>
                <strong>Campaign<br>identity</strong>
            </div>
            <div class="meta-item">
                <span>Objective</span>
                <strong>Build hype<br>through design</strong>
            </div>
        </div>

        <div class="project-split">
            <div class="detail-block">
                <h2>Project Overview</h2>
                <p>
                    The concept focused on motion, torque, and speed as visual cues, balancing high-energy graphics with a simpler underlying structure that still felt premium and polished.
                </p>
                <p>
                    The campaign direction made the performance story more legible while preserving the performance attitude that makes the brand compelling.
                </p>
            </div>
            <div class="detail-block">
                <h2>Creative Notes</h2>
                <ul>
                    <li>High-contrast motion language</li>
                    <li>Technical confidence without clutter</li>
                    <li>Clear focus on brand energy</li>
                </ul>
            </div>
        </div>

        <div class="project-visuals">
            <div class="visual-card" style="background: linear-gradient(135deg, #b8bdc0 0%, #dee4ea 32%, #c6b7a7 100%);"><span>Motorsport campaign</span></div>
            <div class="caption">A performance-driven direction designed to read fast, serious, and visually memorable.</div>
        </div>
    `,

    "UGA Motorsports": `
        <div class="project-description">Sports branding</div>
        <h1>UGA MOTORSPORTS</h1>
        <p class="lead">
            The UGA Motorsports work centered on building a visual identity that reflected both technical competence and the excitement of a student-driven racing culture.
        </p>

        <div class="project-meta">
            <div class="meta-item">
                <span>Audience</span>
                <strong>Students<br>and supporters</strong>
            </div>
            <div class="meta-item">
                <span>Challenge</span>
                <strong>Convey speed<br>with clarity</strong>
            </div>
            <div class="meta-item">
                <span>Style</span>
                <strong>Competitive,<br>confident, modern</strong>
            </div>
        </div>

        <div class="project-split">
            <div class="detail-block">
                <h2>Project Overview</h2>
                <p>
                    The design language pushed bold geometry and energetic layouts while making sure the team identity still felt credible and approachable.
                </p>
                <p>
                    The system was built to support social graphics, event materials, and branding touchpoints with a consistent voice across mediums.
                </p>
            </div>
            <div class="detail-block">
                <h2>Design goals</h2>
                <ul>
                    <li>Capture competitive energy</li>
                    <li>Support team identity across channels</li>
                    <li>Keep messaging clear and confident</li>
                </ul>
            </div>
        </div>

        <div class="project-visuals">
            <div class="visual-card" style="background: linear-gradient(135deg, #d7d7d7 0%, #f0e9dc 46%, #dfe7ea 100%);"><span>Team identity</span></div>
            <div class="caption">A bold motorsports system that brings technical precision and team pride into one visual voice.</div>
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