/* ═══════════════════════════════════════════════════════════
   SRIDHAR RANGANATHAN — Site JavaScript
   Scroll reveal · Counter animation · Nav effects · Mobile menu
   Shared across index.html and case-studies/*.html
   ═══════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  // ─── Nav: scroll effect ───────────────────────────────────
  const nav = document.getElementById('nav');

  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 24);
    }, { passive: true });
  }


  // ─── Nav: mobile toggle ───────────────────────────────────
  const navToggle = document.getElementById('navToggle');
  const navLinks  = document.getElementById('navLinks');

  if (nav && navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      navToggle.classList.toggle('open', isOpen);
      navToggle.setAttribute('aria-expanded', isOpen);
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target)) {
        navLinks.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }


  // ─── Nav: active link highlight on scroll ─────────────────
  // Resolve targets straight from the nav's own hrefs, since a nav
  // target (e.g. #skills) isn't always a top-level <section>.
  const navItems = Array.from(document.querySelectorAll('.nav__links a'));
  const sections = navItems
    .map(link => {
      const href = link.getAttribute('href');
      return href && href.startsWith('#') ? document.querySelector(href) : null;
    })
    .filter(Boolean);

  if (sections.length && navItems.length) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navItems.forEach(link => {
            const isActive = link.getAttribute('href') === `#${id}`;
            link.classList.toggle('active', isActive);
          });
        }
      });
    }, { threshold: 0.4 });

    sections.forEach(s => sectionObserver.observe(s));
  }


  // ─── Scroll reveal ────────────────────────────────────────
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const parent = entry.target.parentElement;
      const siblings = Array.from(parent.querySelectorAll('.reveal:not(.visible)'));
      const idx = siblings.indexOf(entry.target);

      setTimeout(() => {
        entry.target.classList.add('visible');
      }, Math.min(idx * 80, 320));

      revealObserver.unobserve(entry.target);
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  document.querySelectorAll('.reveal').forEach(el => {
    revealObserver.observe(el);
  });


  // ─── Counter animation ────────────────────────────────────
  function animateCounter(el) {
    const target    = parseFloat(el.dataset.target);
    const prefix     = el.dataset.prefix  || '';
    const suffix     = el.dataset.suffix  || '';
    const isDecimal  = String(el.dataset.target).includes('.');
    const duration   = 2000;
    const startTime  = performance.now();

    const format = (value) => {
      const formatted = isDecimal ? value.toFixed(2) : Math.floor(value);
      return `${prefix}${formatted}${suffix}`;
    };

    const tick = (now) => {
      const elapsed  = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased    = 1 - Math.pow(1 - progress, 3);
      const current  = target * eased;

      el.textContent = format(current);

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        el.textContent = format(target);
      }
    };

    requestAnimationFrame(tick);
  }

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    });
  }, { threshold: 0.6 });

  document.querySelectorAll('.metric__value[data-target]').forEach(el => {
    counterObserver.observe(el);
  });


  // ─── Smooth scroll for same-page anchor clicks ────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href.length < 2) return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const offset = parseInt(getComputedStyle(document.documentElement)
        .getPropertyValue('--nav-height'), 10) || 72;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });


  // ─── Case study pages: "More Case Studies" grid ───────────
  // Reads window.CASE_STUDIES (defined in case-studies-data.js) and
  // renders every entry except the current page into #moreCaseStudies.
  const moreGrid = document.getElementById('moreCaseStudies');

  if (moreGrid && Array.isArray(window.CASE_STUDIES)) {
    const currentSlug = moreGrid.dataset.currentSlug;
    const others = window.CASE_STUDIES.filter(cs => cs.slug !== currentSlug);

    moreGrid.innerHTML = others.map(cs => `
      <a class="more-case-card reveal" href="${cs.slug}.html">
        <div class="more-case-card__img-wrap">
          <img src="${cs.image}" alt="${cs.imageAlt}" loading="lazy" />
        </div>
        <div class="more-case-card__body">
          <div class="more-case-card__tag">${cs.tag}</div>
          <h3 class="more-case-card__title">${cs.title}</h3>
          <p class="more-case-card__hook">${cs.hook}</p>
        </div>
      </a>
    `).join('');

    moreGrid.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
  }

})();
