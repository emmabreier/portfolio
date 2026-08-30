const projectContent = document.getElementById("project-content");

const projects = {
    "about-strike": `
        <div class="project-description">Editorial brand</div>
        <h1>STRIKE</h1>
        <p class="lead">
            Strike is positioned as a culture-forward publication and creative platform, combining thoughtful editorial structure with a strong sense of voice, movement, and identity.
        </p>

        <div class="project-meta">
            <div class="meta-item">
                <span>Focus</span>
                <strong>Editorial<br>identity</strong>
            </div>
            <div class="meta-item">
                <span>Medium</span>
                <strong>Print + digital<br>storytelling</strong>
            </div>
            <div class="meta-item">
                <span>Goal</span>
                <strong>Distinctive voice<br>and clear narrative</strong>
            </div>
        </div>

        <div class="project-split">
            <div class="detail-block">
                <h2>Project Overview</h2>
                <p>
                    The brand system was designed to feel energetic but grounded, mixing contemporary editorial sensibility with a digital-first understanding of how stories travel today.
                </p>
                <p>
                    Strike exists at the intersection of culture, design, and publication, giving every issue a strong sense of rhythm and point of view.
                </p>
            </div>
            <div class="detail-block">
                <h2>Creative focus</h2>
                <ul>
                    <li>Strong editorial hierarchy</li>
                    <li>Distinctive voice across issues</li>
                    <li>Flexible system for storytelling</li>
                </ul>
            </div>
        </div>

        <div class="project-visuals">
            <div class="visual-card" style="background: linear-gradient(135deg, #d4d5d1 0%, #f1ddd2 35%, #dfe8eb 100%);"><span>Publication system</span></div>
            <div class="caption">A culture-led editorial voice designed to feel current, intelligent, and memorable across platforms.</div>
        </div>
    `,

    "issue-11": `
        <div class="project-description">Issue 11</div>
        <h1>ISSUE 11</h1>
        <p class="lead">
            Issue 11 pulled the publication further toward a more tactile, layered editorial direction while keeping the visual language compact and focused.
        </p>

        <div class="project-meta">
            <div class="meta-item">
                <span>Theme</span>
                <strong>Texture,<br>pace, and voice</strong>
            </div>
            <div class="meta-item">
                <span>Style</span>
                <strong>Layered<br>editorial</strong>
            </div>
            <div class="meta-item">
                <span>Result</span>
                <strong>More depth<br>with tighter hierarchy</strong>
            </div>
        </div>

        <div class="project-split">
            <div class="detail-block">
                <h2>Project Overview</h2>
                <p>
                    The issue structure emphasized pacing and sequencing. Visual hierarchy was tightened so that each story could breathe without feeling disconnected or crowded.
                </p>
                <p>
                    The mood was intentionally more textured, giving the work a stronger sense of character while still preserving the publication’s broader identity.
                </p>
            </div>
            <div class="detail-block">
                <h2>Design objectives</h2>
                <ul>
                    <li>Build stronger pacing across stories</li>
                    <li>Refresh the editorial rhythm</li>
                    <li>Highlight trust and clarity</li>
                </ul>
            </div>
        </div>

        <div class="project-visuals">
            <div class="visual-card" style="background: linear-gradient(135deg, #c9d0d7 0%, #ece3d9 42%, #d7d2c8 100%);"><span>Issue layout</span></div>
            <div class="caption">A more tactile issue direction that shifts energy through texture, spacing, and stronger editorial control.</div>
        </div>
    `,

    "issue-12": `
        <div class="project-description">Issue 12</div>
        <h1>ISSUE 12</h1>
        <p class="lead">
            Issue 12 pushed the publication further into a sharper, more immersive composition, using bolder pacing and stronger contrast to make each feature feel more deliberate.
        </p>

        <div class="project-meta">
            <div class="meta-item">
                <span>Theme</span>
                <strong>Impact,<br>clarity, and motion</strong>
            </div>
            <div class="meta-item">
                <span>Format</span>
                <strong>Magazine<br>identity</strong>
            </div>
            <div class="meta-item">
                <span>Objective</span>
                <strong>Capture attention<br>without losing tone</strong>
            </div>
        </div>

        <div class="project-split">
            <div class="detail-block">
                <h2>Project Overview</h2>
                <p>
                    This issue refined the visual system further, placing emphasis on contrast and pacing to make the reading experience feel active and more immersive from the first spread to the last.
                </p>
                <p>
                    The narrative remained editorial first, but the design language added more punch and clarity to support a stronger visual experience.
                </p>
            </div>
            <div class="detail-block">
                <h2>Design goals</h2>
                <ul>
                    <li>Create stronger visual rhythm</li>
                    <li>Emphasize key points without excess</li>
                    <li>Refresh brand energy for repeat readers</li>
                </ul>
            </div>
        </div>

        <div class="project-visuals">
            <div class="visual-card" style="background: linear-gradient(135deg, #c8c7c2 0%, #efe5dc 38%, #dfe7ec 100%);"><span>Issue direction</span></div>
            <div class="caption">A more confident issue language that sharpens contrast, pacing, and page-to-page momentum.</div>
        </div>
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