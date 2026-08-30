const projectContent = document.getElementById("project-content");

const projects = {
    cortona: `
        <div class="project-description">Brand identity</div>
        <h1>CORTONA<br>BRANDING</h1>
        <p class="lead">
            Cortona Branding was developed as a confident, modern identity system for a lifestyle-led brand, blending editorial clarity with warm hospitality and elevated visual rhythm.
        </p>

        <div class="project-meta">
            <div class="meta-item">
                <span>Role</span>
                <strong>Brand Strategy<br>Art Direction</strong>
            </div>
            <div class="meta-item">
                <span>Focus</span>
                <strong>Identity System<br>Campaign Design</strong>
            </div>
            <div class="meta-item">
                <span>Outcome</span>
                <strong>Refined visual language<br>for a premium audience</strong>
            </div>
        </div>

        <div class="project-split">
            <div class="detail-block">
                <h2>Project Overview</h2>
                <p>
                    The identity was built around a clean typography system, a restrained palette, and layered visuals that feel editorial without becoming overly formal.
                </p>
                <p>
                    The goal was to create a brand that could move across hospitality, retail, and digital touchpoints while remaining distinct and memorable.
                </p>
            </div>
            <div class="detail-block">
                <h2>Key Results</h2>
                <ul>
                    <li>Unified visual tone across print and digital</li>
                    <li>Created a stronger brand recall in campaign work</li>
                    <li>Elevated positioning for a premium lifestyle audience</li>
                </ul>
            </div>
        </div>

        <div class="project-visuals">
            <div class="visual-card"><span>Brand moodboard</span></div>
            <div class="caption">Identity direction developed to balance elegance, familiarity, and contemporary energy.</div>
        </div>
    `,

    personal: `
        <div class="project-description">Personal practice</div>
        <h1>PERSONAL<br>PROJECTS</h1>
        <p class="lead">
            Personal projects allow experimentation with typography, layout, and story-driven visuals in a more open and exploratory way, without the constraints of a brand system.
        </p>

        <div class="project-meta">
            <div class="meta-item">
                <span>Focus</span>
                <strong>Experimental<br>Visual Exploration</strong>
            </div>
            <div class="meta-item">
                <span>Medium</span>
                <strong>Editorial<br>Digital</strong>
            </div>
            <div class="meta-item">
                <span>Approach</span>
                <strong>Concept-driven<br>making</strong>
            </div>
        </div>

        <div class="project-split">
            <div class="detail-block">
                <h2>Project Overview</h2>
                <p>
                    This body of work explores pacing, rhythm, and composition as the key drivers behind visual storytelling. Each piece pushes a different idea about scale, contrast, and narrative flow.
                </p>
                <p>
                    The work is intentionally loose in structure, giving room for new frameworks to emerge while still reflecting a strong design sensibility.
                </p>
            </div>
            <div class="detail-block">
                <h2>Creative Intent</h2>
                <ul>
                    <li>Test visual systems in a low-risk environment</li>
                    <li>Develop a more personal studio voice</li>
                    <li>Explore narrative composition and pacing</li>
                </ul>
            </div>
        </div>

        <div class="project-visuals">
            <div class="visual-card" style="background: linear-gradient(135deg, #d7d8d0 0%, #f0e9df 45%, #dfe7ea 100%);"><span>Experimental series</span></div>
            <div class="caption">A study in contrast, texture, and composition across independent concept pieces.</div>
        </div>
    `,

    posters: `
        <div class="project-description">Print design</div>
        <h1>POSTERS</h1>
        <p class="lead">
            Poster work is built around hierarchy, tension, and visual immediacy, translating a concept into a single, powerful moment that can be read quickly and remembered longer.
        </p>

        <div class="project-meta">
            <div class="meta-item">
                <span>Style</span>
                <strong>Bold<br>Typography-led</strong>
            </div>
            <div class="meta-item">
                <span>Medium</span>
                <strong>Poster<br>Campaign</strong>
            </div>
            <div class="meta-item">
                <span>Goal</span>
                <strong>High-impact<br>communication</strong>
            </div>
        </div>

        <div class="project-split">
            <div class="detail-block">
                <h2>Project Overview</h2>
                <p>
                    Each poster focuses on a single narrative hook, using scale, pacing, texture, and negative space to direct attention and heighten emotional impact.
                </p>
                <p>
                    The work remains rooted in typography and composition, with a strong emphasis on clarity and a memorable atmosphere.
                </p>
            </div>
            <div class="detail-block">
                <h2>Creative Priorities</h2>
                <ul>
                    <li>Readable at a glance with layered meaning</li>
                    <li>Strong contrast and concise messaging</li>
                    <li>Flexible across print and digital display</li>
                </ul>
            </div>
        </div>

        <div class="project-visuals">
            <div class="visual-card" style="background: linear-gradient(135deg, #c8b5a6 0%, #f5dfd1 35%, #dfe7ec 100%);"><span>Poster system</span></div>
            <div class="caption">A library of poster explorations that test emphasis, rhythm, and messaging through bold composition.</div>
        </div>
    `,

    "fine-art": `
        <div class="project-description">Fine art</div>
        <h1>FINE ART</h1>
        <p class="lead">
            Fine art work embraces slower observation and deeper texture, allowing visual ideas to develop from material, mood, and atmosphere instead of strict commercial constraints.
        </p>

        <div class="project-meta">
            <div class="meta-item">
                <span>Theme</span>
                <strong>Material<br>Experience</strong>
            </div>
            <div class="meta-item">
                <span>Process</span>
                <strong>Exploratory<br>Layering</strong>
            </div>
            <div class="meta-item">
                <span>Intent</span>
                <strong>Emotion<br>and atmosphere</strong>
            </div>
        </div>

        <div class="project-split">
            <div class="detail-block">
                <h2>Project Overview</h2>
                <p>
                    These pieces focus on atmosphere, memory, and surface, creating a visual language that feels tactile and grounded in observation rather than pure objectivity.
                </p>
                <p>
                    The work is less about immediate clarity and more about resonance, inviting viewers to linger with texture, color, and form.
                </p>
            </div>
            <div class="detail-block">
                <h2>Visual Direction</h2>
                <ul>
                    <li>Slow, contemplative visual rhythm</li>
                    <li>Texture-led surfaces and layered color</li>
                    <li>Meaning built through mood and context</li>
                </ul>
            </div>
        </div>

        <div class="project-visuals">
            <div class="visual-card" style="background: linear-gradient(135deg, #d9d1c9 0%, #dcd5d0 35%, #bfc7c4 100%);"><span>Material study</span></div>
            <div class="caption">Artwork that foregrounds atmosphere, materiality, and emotional tone over utility.</div>
        </div>
    `
};

function setActiveProject(projectKey) {
    const projectHtml = projects[projectKey];

    if (projectContent && projectHtml) {
        projectContent.innerHTML = projectHtml;
    }

    document.querySelectorAll(".portfolio-nav a")
        .forEach(link => link.classList.remove("active"));

    const activeLink = document.querySelector(`.portfolio-nav a[data-project="${projectKey}"]`);
    if (activeLink) {
        activeLink.classList.add("active");
    }
}

if (projectContent) {
    document.querySelectorAll(".portfolio-nav a").forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            setActiveProject(this.dataset.project);
        });
    });

    setActiveProject("cortona");
}