/* =========================================================
    Scroll-triggered intro animation (About page)

    A tiny pink dot in the center of the screen grows with
    scroll until it covers the viewport, then fades to reveal
    the existing page underneath.

    Plays on a fresh visit and whenever the About page is
    refreshed, but not when arriving via a link from another
    page of the site. On pages without the overlay this script
    only records internal navigation in a session flag.
    ========================================================= */

(function () {
    'use strict';

    var NAV_FLAG = 'eb_internal_nav';

    var overlay = document.getElementById('intro-overlay');

    // On pages without the intro (Portfolio, Layton Studio, Strike),
    // record when the user leaves via an internal link so the About
    // page knows the visit came from within the site.
    if (!overlay) {
        document.addEventListener('click', function (event) {
            var target = event.target;
            var link = target && target.closest ? target.closest('a[href]') : null;
            if (!link) { return; }
            var href = link.getAttribute('href') || '';
            // Only flag relative links to pages of this site (skip
            // external links, mailto/tel and in-page anchors).
            if (/^([a-z][a-z0-9+.-]*:|#)/i.test(href)) { return; }
            try { window.sessionStorage.setItem(NAV_FLAG, '1'); } catch (e) { /* ignore */ }
        }, true);
        return;
    }

    var reduceMotion = window.matchMedia &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // How did we get here: 'navigate', 'reload' or 'back_forward'.
    var navType = 'navigate';
    if (window.performance) {
        if (window.performance.getEntriesByType) {
            var navEntries = window.performance.getEntriesByType('navigation');
            if (navEntries.length && navEntries[0].type) {
                navType = navEntries[0].type;
            } else if (window.performance.navigation) {
                navType = ['navigate', 'reload', 'back_forward'][window.performance.navigation.type] || 'navigate';
            }
        } else if (window.performance.navigation) {
            navType = ['navigate', 'reload', 'back_forward'][window.performance.navigation.type] || 'navigate';
        }
    }

    // Detect arrival from another page of this site (e.g. clicking
    // ABOUT in the nav). The session flag works everywhere, including
    // local files; the referrer is a fallback for the deployed site.
    var cameFromSitePage = false;
    try {
        if (window.sessionStorage.getItem(NAV_FLAG) === '1') {
            cameFromSitePage = true;
            window.sessionStorage.removeItem(NAV_FLAG);
        }
    } catch (e) { /* ignore */ }

    if (!cameFromSitePage && document.referrer) {
        try {
            var refPath = new URL(document.referrer).pathname;
            var herePath = window.location.pathname;
            var hereDir = herePath.slice(0, herePath.lastIndexOf('/') + 1);
            cameFromSitePage = refPath.indexOf(hereDir) === 0 && refPath !== herePath;
        } catch (e) { /* ignore */ }
    }

    // Skip when the user prefers reduced motion, when navigating back or
    // forward, or when arriving from another page of the site. A refresh
    // ('reload') and a fresh visit always play the intro.
    if (reduceMotion || navType === 'back_forward' ||
        (navType !== 'reload' && cameFromSitePage)) {
        overlay.remove();
        return;
    }

    var circle = document.getElementById('intro-circle');
    var body = document.body;

    var MIN_SCALE = 0.03; // tiny starting dot, relative to the 145vmax circle
    var finished = false;
    var ticking = false;
    var prevScrollRestoration = null;

    function easeOutQuad(t) {
        return 1 - (1 - t) * (1 - t);
    }

    function maxScroll() {
        return Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
    }

    function render() {
        ticking = false;
        if (finished) { return; }

        var p = Math.min(Math.max(window.scrollY / maxScroll(), 0), 1);
        var scale = MIN_SCALE + (1 - MIN_SCALE) * easeOutQuad(p);
        circle.style.transform = 'translate(-50%, -50%) scale(' + scale + ')';

        if (p >= 1) {
            finish();
        }
    }

    function onScroll() {
        if (!ticking) {
            ticking = true;
            window.requestAnimationFrame(render);
        }
    }

    function finish() {
        if (finished) { return; }
        finished = true;

        window.removeEventListener('scroll', onScroll);
        window.removeEventListener('resize', onScroll);
        window.removeEventListener('wheel', onScroll);
        window.removeEventListener('touchmove', onScroll);
        window.removeEventListener('keydown', onScroll);

        // Hand scrolling back to the real page, snapped to the top. The
        // overlay is opaque and fixed, so this jump is invisible.
        body.classList.remove('intro-lock');
        window.scrollTo(0, 0);

        if (prevScrollRestoration !== null) {
            window.history.scrollRestoration = prevScrollRestoration;
            prevScrollRestoration = null;
        }

        // Start the reveal from a fully pink screen, with a gentle
        // zoom-through so it feels like the circle opens into the site.
        circle.style.transform = 'translate(-50%, -50%) scale(1.12)';
        overlay.classList.add('is-done');

        var removed = false;
        function removeOverlay() {
            if (removed) { return; }
            removed = true;
            overlay.remove();
        }
        overlay.addEventListener('transitionend', removeOverlay, { once: true });
        window.setTimeout(removeOverlay, 900); // fallback if transitionend never fires
    }

    // Activate the intro.
    body.classList.add('intro-lock');
    overlay.classList.add('is-active');

    // Always start at the very top of the runway.
    if ('scrollRestoration' in window.history) {
        prevScrollRestoration = window.history.scrollRestoration;
        window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    // Some browsers skip the scroll event while scrolling is effectively
    // locked; listen to wheel/touch input too so the circle always tracks
    // the scroll gesture.
    window.addEventListener('wheel', onScroll, { passive: true });
    window.addEventListener('touchmove', onScroll, { passive: true });
    window.addEventListener('keydown', onScroll);

    // Fallback timer: guarantees the circle always converges to the
    // true scroll position, even when requestAnimationFrame is throttled
    // or a scroll event is swallowed. render() is cheap and idempotent.
    var settleTimer = window.setInterval(function () {
        if (finished) {
            window.clearInterval(settleTimer);
            return;
        }
        render();
    }, 150);

    render();
})();
