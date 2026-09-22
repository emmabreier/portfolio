/* =========================================================
    Fade transition between top-nav pages (ABOUT / PORTFOLIO /
    LAYTON STUDIO / STRIKE). The top-nav itself stays put; only
    the rest of the page fades out before navigating away, and
    fades in (via CSS) when the next page loads.
    ========================================================= */

(function () {
    'use strict';

    var FADE_OUT_MS = 150;

    var reduceMotion = window.matchMedia &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) { return; }

    document.querySelectorAll('.top-nav a[href]').forEach(function (link) {
        link.addEventListener('click', function (event) {
            var href = link.getAttribute('href') || '';

            if (event.defaultPrevented || event.button !== 0 ||
                event.metaKey || event.ctrlKey || event.shiftKey || event.altKey ||
                link.target === '_blank' || /^([a-z][a-z0-9+.-]*:|#)/i.test(href)) {
                return;
            }

            var targetUrl = new URL(href, window.location.href);
            if (targetUrl.href === window.location.href) { return; }

            event.preventDefault();
            document.body.classList.add('is-page-leaving');
            window.setTimeout(function () {
                window.location.href = targetUrl.href;
            }, FADE_OUT_MS);
        });
    });
})();
