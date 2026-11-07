/* ==========================================================================
   MINDMATRIX - NAVIGATION, LENIS SMOOTH SCROLL, MEGA MENU & MOBILE DRAWER
   ========================================================================== */

const MindMatrixNavigation = {
  lenis: null,
  header: null,
  mobileDrawer: null,
  mobileToggleBtn: null,

  init() {
    this.header = document.getElementById('site-header');
    this.mobileDrawer = document.getElementById('mobile-nav-drawer');
    this.mobileToggleBtn = document.getElementById('mobile-menu-toggle');

    this.initSmoothScroll();
    this.initStickyHeader();
    this.initMobileMenu();
    this.initAnchorLinks();
    this.initActiveSectionSpy();
  },

  initSmoothScroll() {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced || typeof Lenis === 'undefined') return;

    try {
      this.lenis = new Lenis({
        duration: 1.15,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true
      });

      if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        this.lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add((time) => {
          this.lenis.raf(time * 1000);
        });
        gsap.ticker.lagSmoothing(0);
      } else {
        const raf = (time) => {
          this.lenis.raf(time);
          requestAnimationFrame(raf);
        };
        requestAnimationFrame(raf);
      }
    } catch (e) {
      console.warn('Lenis smooth scroll fallback:', e);
    }
  },

  initStickyHeader() {
    const backToTop = document.getElementById('back-to-top');

    const onScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      if (this.header) {
        if (scrollY > 45) {
          this.header.classList.add('scrolled');
        } else {
          this.header.classList.remove('scrolled');
        }
      }
      if (backToTop) {
        if (scrollY > 520) {
          backToTop.classList.add('visible');
        } else {
          backToTop.classList.remove('visible');
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    if (backToTop) {
      backToTop.addEventListener('click', () => {
        this.scrollToTarget('#home');
      });
    }
  },

  initMobileMenu() {
    if (!this.mobileToggleBtn || !this.mobileDrawer) return;

    this.mobileToggleBtn.addEventListener('click', () => {
      const isOpen = this.mobileDrawer.classList.toggle('open');
      this.mobileToggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      this.mobileDrawer.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
      this.mobileToggleBtn.innerHTML = isOpen
        ? '<i data-lucide="x"></i>'
        : '<i data-lucide="menu"></i>';
      if (window.lucide) window.lucide.createIcons();
    });

    // Close mobile menu when clicking a link
    this.mobileDrawer.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('click', () => {
        this.mobileDrawer.classList.remove('open');
        this.mobileToggleBtn.setAttribute('aria-expanded', 'false');
        this.mobileDrawer.setAttribute('aria-hidden', 'true');
        this.mobileToggleBtn.innerHTML = '<i data-lucide="menu"></i>';
        if (window.lucide) window.lucide.createIcons();
      });
    });
  },

  initAnchorLinks() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const targetId = anchor.getAttribute('href');
        if (!targetId || targetId === '#' || targetId.startsWith('#privacy') || targetId.startsWith('#terms') || targetId.startsWith('#cookies')) {
          return;
        }
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          this.scrollToTarget(targetEl);
        }
      });
    });
  },

  scrollToTarget(target) {
    const el = typeof target === 'string' ? document.querySelector(target) : target;
    if (!el) return;

    if (this.lenis) {
      this.lenis.scrollTo(el, { offset: -80 });
    } else {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  },

  initActiveSectionSpy() {
    const sections = document.querySelectorAll('main section[id], #careers');
    const navLinks = document.querySelectorAll('#desktop-nav-menu .nav-link');
    const isHomePage = window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/mind/') || window.location.pathname.endsWith('/mind');
    if (!isHomePage) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === `#${id}` || (id === 'home' && href === 'index.html')) {
              link.classList.add('active');
            }
          });
        }
      });
    }, { rootMargin: '-35% 0px -55% 0px' });

    sections.forEach(sec => observer.observe(sec));
  }
};

