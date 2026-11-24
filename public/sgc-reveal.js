/* SGC site behaviour: scroll-reveal animations + mobile nav toggle.
   Scroll-reveal tags elements automatically (see TARGETS); no markup changes needed. */
(function () {
  /* ---------- Mobile nav toggle ---------- */
  function initNav() {
    var nav = document.querySelector('.site-nav');
    if (!nav) return;
    var toggle = nav.querySelector('.nav-toggle');
    var links = nav.querySelector('.nav-links');
    if (!toggle || !links) return;
    function closeMenu() {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open navigation');
    }
    toggle.addEventListener('click', function () {
      var isOpen = toggle.getAttribute('aria-expanded') === 'true';
      nav.classList.toggle('is-open', !isOpen);
      toggle.setAttribute('aria-expanded', String(!isOpen));
      toggle.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
    });
    links.addEventListener('click', function (e) { if (e.target.closest('a')) closeMenu(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeMenu(); });
  }

  /* ---------- Scroll reveal ---------- */
  function initReveal() {
    var root = document.documentElement;
    if (!('IntersectionObserver' in window) ||
        (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches)) return;

    root.classList.add('js-reveal');

    var TARGETS = [
      '.hero-title', '.hero-meta', '.hero-cta', '.hero-organizers',
      '.page-hero-eyebrow', '.page-hero-title', '.page-hero-lead',
      '.photo-strip', '.section-heading', '.section-lead', '.media-stack',
      '.card', '.btn.speaker-list-button',
      '.about-description', '.feature-item', '.speaker-card', '.speaker-announcement',
      '.venue-layout > *', '.tickets-layout > *', '.ticket-price-card',
      '.indie-grid > *', '.indie-actions', '.sponsor-tier', '.sponsor-contact',
      '.sponsor-community-tier', '.faq-item', '.partner-logo',
      '.newsletter-copy', '.newsletter-form', '.contact-link',
      '.speaker-profile', '.team-card', '.volunteer-copy', '.volunteer-button', '.venue-details', '.venue-photo', '.parking-directions-grid > *',
      '.footer-brand', '.footer-link-group', '.footer-venue', '.footer-bottom'
    ].join(',');

    var STEP = 80;
    var MAX_STEPS = 7;
    var io, firstBatch = true;

    function finish(el) {
      el.classList.remove('rv', 'rv-in');
      el.style.removeProperty('--rv-delay');
    }
    function show(el, delay) {
      el.style.setProperty('--rv-delay', delay + 'ms');
      el.classList.add('rv-in');
      var done = false;
      function cleanup() { if (!done) { done = true; finish(el); } }
      el.addEventListener('transitionend', function (e) {
        if (e.target === el && e.propertyName === 'opacity') cleanup();
      });
      setTimeout(cleanup, delay + 1400);
    }
    function onIntersect(entries) {
      var visible = [];
      entries.forEach(function (entry) {
        var el = entry.target;
        if (entry.isIntersecting) {
          visible.push(entry);
        } else if (entry.boundingClientRect.top < 0) {
          io.unobserve(el);
          finish(el);
        }
      });
      visible.sort(function (a, b) {
        var ra = a.boundingClientRect, rb = b.boundingClientRect;
        return Math.abs(ra.top - rb.top) > 24 ? ra.top - rb.top : ra.left - rb.left;
      });
      var base = firstBatch ? 120 : 0;
      firstBatch = false;
      visible.forEach(function (entry, i) {
        io.unobserve(entry.target);
        show(entry.target, base + Math.min(i, MAX_STEPS) * STEP);
      });
    }

    var all = Array.prototype.slice.call(document.querySelectorAll(TARGETS));
    var els = all.filter(function (el) {
      var p = el.parentElement;
      while (p) { if (all.indexOf(p) !== -1) return false; p = p.parentElement; }
      return true;
    });
    io = new IntersectionObserver(onIntersect, { rootMargin: '0px 0px -8% 0px', threshold: 0 });
    els.forEach(function (el) { el.classList.add('rv'); io.observe(el); });
  }

  function init() { initNav(); initReveal(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
