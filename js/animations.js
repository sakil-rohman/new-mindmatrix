/* ==========================================================================
   MINDMATRIX - GSAP & SCROLLTRIGGER COHERENT ANIMATION SYSTEM
   Includes:
   - Branded Preloader 0-100% Readiness & Cinematic Reveal
   - Hero Text & Visual Entrance
   - ScrollTrigger Section & Card Stagger Reveals
   - Growth Framework Sequential Activation
   ========================================================================== */

const MindMatrixAnimations = {
  initPreloader(onCompleteCallback) {
    const preloader = document.getElementById('preloader');
    const bar = document.getElementById('preloader-bar');
    const percentEl = document.getElementById('preloader-percent');
    const statusText = document.getElementById('preloader-status-text');

    if (!preloader) {
      if (onCompleteCallback) onCompleteCallback();
      return;
    }

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      preloader.classList.add('loaded');
      if (onCompleteCallback) onCompleteCallback();
      return;
    }

    const stages = [
      { pct: 25, label: 'LOADING NEURAL ENGINE' },
      { pct: 58, label: 'CALIBRATING 3D CORE' },
      { pct: 86, label: 'SYNCHRONIZING INTERFACE' },
      { pct: 100, label: 'EXPERIENCE READY' }
    ];

    let currentPct = 0;
    const interval = setInterval(() => {
      currentPct += Math.floor(Math.random() * 14) + 9;
      if (currentPct >= 100) currentPct = 100;

      if (bar) bar.style.width = `${currentPct}%`;
      if (percentEl) percentEl.textContent = `${currentPct}%`;

      const stage = stages.find(s => currentPct <= s.pct);
      if (stage && statusText) statusText.textContent = stage.label;

      if (currentPct === 100) {
        clearInterval(interval);
        setTimeout(() => {
          preloader.classList.add('loaded');
          this.animateHeroEntrance();
          if (onCompleteCallback) onCompleteCallback();
        }, 220);
      }
    }, 55);
  },

  animateHeroEntrance() {
    if (typeof gsap === 'undefined') return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const heroItems = document.querySelectorAll('[data-hero-reveal]');
    const floatingCards = document.querySelectorAll('.hero-floating-card');

    gsap.fromTo(heroItems,
      { y: 28, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.85,
        stagger: 0.11,
        ease: 'power3.out'
      }
    );

    gsap.fromTo(floatingCards,
      { scale: 0.85, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.75,
        stagger: 0.1,
        delay: 0.3,
        ease: 'back.out(1.4)'
      }
    );
  },

  initScrollAnimations() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    gsap.registerPlugin(ScrollTrigger);

    // Reveal Section Headers
    document.querySelectorAll('.section-header').forEach(header => {
      gsap.fromTo(header,
        { y: 32, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: header,
            start: 'top 86%',
            once: true
          }
        }
      );
    });

    // Reveal Cards & Elements with [data-scroll-reveal]
    const revealEls = document.querySelectorAll('[data-scroll-reveal]');
    revealEls.forEach((el, idx) => {
      gsap.fromTo(el,
        { y: 34, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          delay: (idx % 3) * 0.07,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            once: true
          }
        }
      );
    });

    // Interactive Growth Framework Step Highlighting
    const frameworkCards = document.querySelectorAll('.framework-step-card');
    frameworkCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        frameworkCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
      });
      card.addEventListener('click', () => {
        frameworkCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
      });
    });
  }
};

