/* ═══════════════════════════════════════════
   RSD DIRECT — SHARED JS
   Minimal vanilla — no frameworks, no build step
═══════════════════════════════════════════ */

(function () {
  'use strict';

  /* ── MOBILE NAV TOGGLE ── */
  function initNav() {
    var burger = document.querySelector('.nav-burger');
    var mobile = document.querySelector('.nav-mobile');
    if (!burger || !mobile) return;

    burger.addEventListener('click', function () {
      var isOpen = mobile.classList.toggle('open');
      burger.classList.toggle('open', isOpen);
      burger.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // close on outside click
    document.addEventListener('click', function (e) {
      if (!burger.contains(e.target) && !mobile.contains(e.target)) {
        mobile.classList.remove('open');
        burger.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });

    // close on nav link click
    mobile.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        mobile.classList.remove('open');
        burger.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ── ACTIVE NAV LINK ── */
  function setActiveNav() {
    var page = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(function (a) {
      var href = a.getAttribute('href') || '';
      if (href === page || (page === '' && href === 'index.html')) {
        a.classList.add('active');
      }
    });
  }

  /* ── FILTER TABS ── */
  function initFilters() {
    var filterBtns = document.querySelectorAll('[data-filter]');
    var filterItems = document.querySelectorAll('[data-category]');
    if (!filterBtns.length) return;

    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var cat = btn.getAttribute('data-filter');

        // update buttons
        filterBtns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');

        // show/hide items
        filterItems.forEach(function (item) {
          var match = cat === 'all' || item.getAttribute('data-category') === cat;
          item.style.display = match ? '' : 'none';
        });
      });
    });
  }

  /* ── SCROLL REVEAL (intersection observer) ── */
  function initReveal() {
    if (!('IntersectionObserver' in window)) return;
    var els = document.querySelectorAll('.reveal');
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('revealed');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });
    els.forEach(function (el) { obs.observe(el); });
  }

  /* ── SMOOTH ANCHOR SCROLL ── */
  function initAnchors() {
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        var target = document.querySelector(a.getAttribute('href'));
        if (!target) return;
        e.preventDefault();
        var top = target.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top: top, behavior: 'smooth' });
      });
    });
  }

  /* ── CONTACT FORM (no backend — mailto fallback) ── */
  function initForm() {
    var form = document.querySelector('#contact-form');
    if (!form) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name    = (form.querySelector('[name="name"]') || {}).value || '';
      var email   = (form.querySelector('[name="email"]') || {}).value || '';
      var company = (form.querySelector('[name="company"]') || {}).value || '';
      var message = (form.querySelector('[name="message"]') || {}).value || '';
      var subject = encodeURIComponent('RSD Direct Inquiry — ' + name);
      var body    = encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\nCompany: ' + company + '\n\nMessage:\n' + message);
      window.location.href = 'mailto:info@realspacedigital.net?subject=' + subject + '&body=' + body;
    });
  }

  /* ── INIT ── */
  document.addEventListener('DOMContentLoaded', function () {
    initNav();
    setActiveNav();
    initFilters();
    initReveal();
    initAnchors();
    initForm();
  });

})();
