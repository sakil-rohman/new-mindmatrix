/* ==========================================================================
   MINDMATRIX - INTERACTIONS, CUSTOM CURSOR, 3D TILT, FILTERS, SEARCH, MODALS
   ========================================================================== */

const MindMatrixInteractions = {
  init() {
    this.initCustomCursor();
    this.initMagneticButtons();
    this.init3DTiltAndSpotlight();
    this.initHeroFloatingParallax();
    this.initProjectFiltering();
    this.initBlogCarouselAndFiltering();
    this.initFAQAccordion();
    this.initSearchOverlay();
    this.initConsultationAndDetailModals();
    this.initContactFormValidation();
    this.initCookieConsent();
  },

  /* ------------------------------------------------------------------------
     4. CUSTOM CURSOR (Disabled on Touch Devices)
     ------------------------------------------------------------------------ */
  initCustomCursor() {
    const isTouch = window.matchMedia('(hover: none), (pointer: coarse)').matches;
    if (isTouch) return;

    const dot = document.getElementById('cursor-dot');
    const outline = document.getElementById('cursor-outline');
    if (!dot || !outline) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let outlineX = mouseX;
    let outlineY = mouseY;

    window.addEventListener('pointermove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
    }, { passive: true });

    const renderCursor = () => {
      outlineX += (mouseX - outlineX) * 0.18;
      outlineY += (mouseY - outlineY) * 0.18;
      outline.style.left = `${outlineX}px`;
      outline.style.top = `${outlineY}px`;
      requestAnimationFrame(renderCursor);
    };
    requestAnimationFrame(renderCursor);

    // Golden accent on primary CTA hover & expansion on cards
    document.addEventListener('mouseover', (e) => {
      const target = e.target;
      if (target.closest('.btn, a, button')) {
        document.body.classList.add('cursor-hover-cta');
      } else {
        document.body.classList.remove('cursor-hover-cta');
      }

      if (target.closest('.solution-card, .project-card, .industry-card, .blog-card, .framework-step-card')) {
        document.body.classList.add('cursor-hover-card');
      } else {
        document.body.classList.remove('cursor-hover-card');
      }
    });
  },

  /* ------------------------------------------------------------------------
     MAGNETIC HOVER FOR SELECTED CTA BUTTONS
     ------------------------------------------------------------------------ */
  initMagneticButtons() {
    const isTouch = window.matchMedia('(hover: none), (pointer: coarse)').matches;
    if (isTouch) return;

    document.querySelectorAll('.magnetic-btn').forEach(btn => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.16}px, ${y * 0.22}px)`;
      });
      btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
      });
    });
  },

  /* ------------------------------------------------------------------------
     3D PERSPECTIVE TILT & MOUSE SPOTLIGHT FOR CARDS
     ------------------------------------------------------------------------ */
  init3DTiltAndSpotlight() {
    const isTouch = window.matchMedia('(hover: none), (pointer: coarse)').matches;
    if (isTouch) return;

    document.querySelectorAll('.tilt-card').forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Set CSS custom properties for spotlight
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);

        // Calculate 3D tilt
        const rotateY = ((x / rect.width) - 0.5) * 8;
        const rotateX = ((0.5 - (y / rect.height))) * 8;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  },

  /* ------------------------------------------------------------------------
     HERO FLOATING CARDS MOUSE PARALLAX
     ------------------------------------------------------------------------ */
  initHeroFloatingParallax() {
    const stage = document.getElementById('hero-visual-stage');
    if (!stage) return;

    const cards = stage.querySelectorAll('.hero-floating-card');
    stage.addEventListener('pointermove', (e) => {
      const rect = stage.getBoundingClientRect();
      const relX = (e.clientX - rect.left) / rect.width - 0.5;
      const relY = (e.clientY - rect.top) / rect.height - 0.5;

      cards.forEach(card => {
        const depth = parseFloat(card.getAttribute('data-parallax-depth') || '15');
        card.style.transform = `translate3d(${relX * depth}px, ${relY * depth}px, 0)`;
      });
    });

    stage.addEventListener('pointerleave', () => {
      cards.forEach(card => {
        card.style.transform = '';
      });
    });
  },

  /* ------------------------------------------------------------------------
     10. PROJECT CATEGORY FILTERING
     ------------------------------------------------------------------------ */
  initProjectFiltering() {
    const filterBar = document.getElementById('project-filters');
    if (!filterBar) return;

    filterBar.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-pill-btn');
      if (!btn) return;

      filterBar.querySelectorAll('.filter-pill-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const category = btn.getAttribute('data-filter');
      MindMatrixComponents.renderProjects(category);

      if (typeof gsap !== 'undefined') {
        gsap.fromTo('#projects-grid .project-card',
          { y: 20, opacity: 0, scale: 0.97 },
          { y: 0, opacity: 1, scale: 1, duration: 0.45, stagger: 0.07, ease: 'power2.out' }
        );
      }
    });
  },

  /* ------------------------------------------------------------------------
     15. BLOG CAROUSEL (SWIPER.JS) & CATEGORY FILTERING
     ------------------------------------------------------------------------ */
  initBlogCarouselAndFiltering() {
    if (typeof Swiper !== 'undefined') {
      window.insightsSwiperInstance = new Swiper('#insights-swiper', {
        slidesPerView: 1,
        spaceBetween: 24,
        grabCursor: true,
        navigation: {
          nextEl: '#insights-next',
          prevEl: '#insights-prev'
        },
        breakpoints: {
          700: { slidesPerView: 2, spaceBetween: 24 },
          1080: { slidesPerView: 3, spaceBetween: 28 }
        }
      });
    }

    const blogFilterBar = document.getElementById('blog-filters');
    if (blogFilterBar) {
      blogFilterBar.addEventListener('click', (e) => {
        const btn = e.target.closest('.filter-pill-btn');
        if (!btn) return;

        blogFilterBar.querySelectorAll('.filter-pill-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const category = btn.getAttribute('data-blog-filter');
        MindMatrixComponents.renderInsights(category);
      });
    }

    const viewAllBtn = document.getElementById('view-all-insights-btn');
    if (viewAllBtn && blogFilterBar) {
      viewAllBtn.addEventListener('click', () => {
        blogFilterBar.querySelectorAll('.filter-pill-btn').forEach(b => b.classList.remove('active'));
        const allBtn = blogFilterBar.querySelector('[data-blog-filter="all"]');
        if (allBtn) allBtn.classList.add('active');
        MindMatrixComponents.renderInsights('all');
        MindMatrixNavigation.scrollToTarget('#insights');
      });
    }
  },

  /* ------------------------------------------------------------------------
     INTERACTIVE FAQ ACCORDION
     ------------------------------------------------------------------------ */
  initFAQAccordion() {
    const accordion = document.getElementById('faq-accordion');
    if (!accordion) return;

    accordion.addEventListener('click', (e) => {
      const trigger = e.target.closest('.faq-trigger');
      if (!trigger) return;

      const item = trigger.closest('.faq-item');
      const answer = item.querySelector('.faq-answer');
      const isOpen = item.classList.contains('open');

      // Close all others
      accordion.querySelectorAll('.faq-item').forEach(other => {
        other.classList.remove('open');
        other.querySelector('.faq-trigger').setAttribute('aria-expanded', 'false');
        other.querySelector('.faq-answer').style.maxHeight = '0px';
      });

      if (!isOpen) {
        item.classList.add('open');
        trigger.setAttribute('aria-expanded', 'true');
        answer.style.maxHeight = `${answer.scrollHeight + 24}px`;
      }
    });
  },

  /* ------------------------------------------------------------------------
     SEARCH OVERLAY WITH LOCAL DEMO SEARCH
     ------------------------------------------------------------------------ */
  initSearchOverlay() {
    const openBtn = document.getElementById('open-search-btn');
    const modal = document.getElementById('search-modal');
    const input = document.getElementById('global-search-input');
    const resultsContainer = document.getElementById('global-search-results');

    if (!openBtn || !modal || !input || !resultsContainer) return;

    const searchIndex = [
      { title: 'AI & Intelligent Solutions', type: 'Solution Page', desc: 'Generative AI, AI Agents, Machine Learning, Chatbots, Computer Vision', target: 'solution-ai.html' },
      { title: 'Digital Growth Solutions', type: 'Solution Page', desc: 'Website Development, E-commerce, SEO, Lead Generation Systems', target: 'solution-digital-growth.html' },
      { title: 'Software & Technology Development', type: 'Solution Page', desc: 'Custom Software, Web & Mobile Apps, Enterprise CRM & ERP', target: 'solution-software.html' },
      { title: 'Business Automation & Intelligence', type: 'Solution Page', desc: 'Workflow Automation, Inventory Management, BI & Data Analytics', target: 'solution-automation.html' },
      { title: 'Technology Consulting & Support', type: 'Solution Page', desc: 'Digital Transformation, Cloud Solutions, Security & Support', target: 'solution-consulting.html' },
      { title: 'The MindMatrix Growth Framework', type: 'Services Page', desc: 'Discover, Analyze, Strategize, Implement, Optimize, Scale', target: 'services.html#framework' },
      { title: 'About MindMatrix Services', type: 'Company Page', desc: 'Innovating from Northeast India for the World — Mission & Vision', target: 'about.html' },
      { title: 'Careers at MindMatrix', type: 'Careers Page', desc: 'Open roles in AI Engineering, Full-Stack Development & UI/UX', target: 'careers.html' },
      { title: 'Contact & Consultation Desk', type: 'Contact Page', desc: 'Request a tailored AI & Business Growth consultation', target: 'contact.html' },
      ...MindMatrixData.projects.map(p => ({ title: p.title, type: 'Project Demo', desc: p.shortDesc, target: 'projects.html', projectId: p.id })),
      ...MindMatrixData.articles.map(a => ({ title: a.title, type: 'Insight Article', desc: a.shortDesc, target: 'insights.html', articleId: a.id })),
      ...MindMatrixData.industries.map(i => ({ title: i.title, type: 'Industry', desc: i.shortDesc, target: 'services.html#industries', industryId: i.id }))
    ];

    const renderResults = (query = '') => {
      const q = query.trim().toLowerCase();
      const matches = q
        ? searchIndex.filter(item =>
            item.title.toLowerCase().includes(q) ||
            item.desc.toLowerCase().includes(q) ||
            item.type.toLowerCase().includes(q)
          )
        : searchIndex.slice(0, 6);

      if (matches.length === 0) {
        resultsContainer.innerHTML = `
          <div style="padding:1.25rem;text-align:center;color:var(--color-muted-light);">
            No matching solutions or insights found for "<strong>${query}</strong>".
          </div>
        `;
        return;
      }

      resultsContainer.innerHTML = matches.map((item, idx) => `
        <a href="${item.target}" class="search-result-item" data-search-idx="${idx}" data-target="${item.target}">
          <div>
            <div style="font-family:var(--font-heading);font-weight:700;font-size:0.96rem;color:var(--color-white);">${item.title}</div>
            <div style="font-size:0.8rem;color:var(--color-muted-light);">${item.desc}</div>
          </div>
          <span class="search-result-badge">${item.type}</span>
        </a>
      `).join('');

      resultsContainer.querySelectorAll('.search-result-item').forEach(link => {
        link.addEventListener('click', (e) => {
          const target = link.getAttribute('data-target');
          if (target && target.startsWith('#')) {
            e.preventDefault();
            modal.classList.remove('open');
            MindMatrixNavigation.scrollToTarget(target);
          } else {
            modal.classList.remove('open');
          }
        });
      });
    };

    openBtn.addEventListener('click', () => {
      modal.classList.add('open');
      renderResults(input.value);
      setTimeout(() => input.focus(), 100);
    });

    // Keyboard shortcut Ctrl+K or Cmd+K
    window.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        modal.classList.add('open');
        renderResults(input.value);
        setTimeout(() => input.focus(), 100);
      }
      if (e.key === 'Escape') {
        document.querySelectorAll('.modal-backdrop.open').forEach(m => m.classList.remove('open'));
      }
    });

    input.addEventListener('input', () => renderResults(input.value));
  },

  /* ------------------------------------------------------------------------
     CONSULTATION MODAL & DYNAMIC DETAIL MODAL (PROJECTS / ARTICLES / INDUSTRIES)
     ------------------------------------------------------------------------ */
  initConsultationAndDetailModals() {
    const consultModal = document.getElementById('consultation-modal');
    const detailModal = document.getElementById('detail-modal');
    const detailBody = document.getElementById('detail-modal-body');
    const topicInput = document.getElementById('modal-topic');

    // Close Modal Buttons & Backdrop Click
    document.addEventListener('click', (e) => {
      const closeBtn = e.target.closest('[data-close-modal]');
      if (closeBtn) {
        const modalId = closeBtn.getAttribute('data-close-modal');
        const m = document.getElementById(modalId);
        if (m) m.classList.remove('open');
      }

      if (e.target.classList.contains('modal-backdrop')) {
        e.target.classList.remove('open');
      }

      // Open Consultation Modal
      const consultTrigger = e.target.closest('[data-open-consultation]');
      if (consultTrigger && consultModal) {
        e.preventDefault();
        const topic = consultTrigger.getAttribute('data-open-consultation');
        if (topicInput && topic) topicInput.value = topic;
        const banner = document.getElementById('modal-success-banner');
        if (banner) banner.classList.remove('visible');
        consultModal.classList.add('open');
      }

      // Open Project Detail Modal
      const projTrigger = e.target.closest('[data-open-project]');
      if (projTrigger && detailModal && detailBody) {
        const projId = projTrigger.getAttribute('data-open-project');
        const proj = MindMatrixData.projects.find(p => p.id === projId);
        if (proj) {
          this.showProjectDetail(proj, detailModal, detailBody);
        }
      }

      // Open Article Detail Modal
      const artTrigger = e.target.closest('[data-open-article]');
      if (artTrigger && detailModal && detailBody) {
        const artId = artTrigger.getAttribute('data-open-article');
        const art = MindMatrixData.articles.find(a => a.id === artId);
        if (art) {
          this.showArticleDetail(art, detailModal, detailBody);
        }
      }

      // Open Industry Detail Modal
      const indCard = e.target.closest('[data-industry-id]');
      if (indCard && detailModal && detailBody) {
        const indId = indCard.getAttribute('data-industry-id');
        const ind = MindMatrixData.industries.find(i => i.id === indId);
        if (ind) {
          document.querySelectorAll('.industry-card').forEach(c => c.classList.remove('active'));
          indCard.classList.add('active');
          this.showIndustryDetail(ind, detailModal, detailBody);
        }
      }

      // Legal Links Modal
      const legalTrigger = e.target.closest('[data-legal-modal]');
      if (legalTrigger && detailModal && detailBody) {
        e.preventDefault();
        const title = legalTrigger.getAttribute('data-legal-modal');
        this.showLegalModal(title, detailModal, detailBody);
      }
    });
  },

  showProjectDetail(proj, modal, body) {
    body.innerHTML = `
      <button type="button" class="modal-close-btn" data-close-modal="detail-modal" aria-label="Close">
        <i data-lucide="x"></i>
      </button>
      <div style="display:flex;align-items:center;gap:0.6rem;margin-bottom:0.8rem;">
        <span class="eyebrow-badge" style="margin:0;background:rgba(8,123,255,0.1);color:var(--color-electric-blue);">${proj.category}</span>
        <span style="font-size:0.75rem;font-weight:700;background:#FEF3C7;color:#92400E;padding:0.25rem 0.7rem;border-radius:99px;">${proj.badge}</span>
      </div>
      <h3 id="detail-modal-title" style="font-family:var(--font-heading);font-size:1.75rem;margin-bottom:0.85rem;">${proj.title}</h3>
      <div style="border-radius:16px;overflow:hidden;height:200px;margin-bottom:1.35rem;border:1px solid rgba(8,123,255,0.2);">
        ${proj.svgArt}
      </div>
      <p style="font-size:0.98rem;color:var(--color-muted-text);line-height:1.7;margin-bottom:1.35rem;">${proj.fullDesc}</p>
      <h4 style="font-family:var(--font-heading);font-size:1rem;margin-bottom:0.65rem;">Key Capabilities &amp; Business Impact:</h4>
      <ul style="display:flex;flex-direction:column;gap:0.5rem;margin-bottom:1.5rem;">
        ${proj.highlights.map(h => `
          <li style="display:flex;align-items:center;gap:0.55rem;font-size:0.92rem;color:var(--color-text-dark);">
            <i data-lucide="check-circle-2" style="width:17px;height:17px;color:var(--color-electric-blue);flex-shrink:0;"></i>
            <span>${h}</span>
          </li>
        `).join('')}
      </ul>
      <div style="display:flex;flex-wrap:wrap;gap:0.45rem;margin-bottom:1.65rem;">
        ${proj.technologies.map(t => `<span class="project-tech-chip">${t}</span>`).join('')}
      </div>
      <button type="button" class="btn btn-blue" style="width:100%;" data-close-modal="detail-modal" data-open-consultation="Project Inquiry: ${proj.title}">
        <span>Build a Similar Solution for My Business</span>
        <i data-lucide="arrow-right"></i>
      </button>
    `;
    modal.classList.add('open');
    if (window.lucide) window.lucide.createIcons();
  },

  showArticleDetail(art, modal, body) {
    body.innerHTML = `
      <button type="button" class="modal-close-btn" data-close-modal="detail-modal" aria-label="Close">
        <i data-lucide="x"></i>
      </button>
      <div style="display:flex;align-items:center;gap:0.65rem;margin-bottom:0.75rem;">
        <span class="eyebrow-badge" style="margin:0;background:rgba(8,123,255,0.1);color:var(--color-electric-blue);">${art.category}</span>
        <span style="font-size:0.75rem;color:var(--color-muted-text);">${art.date} • ${art.readTime}</span>
      </div>
      <h3 id="detail-modal-title" style="font-family:var(--font-heading);font-size:1.75rem;margin-bottom:0.6rem;">${art.title}</h3>
      <p style="font-size:0.85rem;font-weight:600;color:var(--color-electric-blue);margin-bottom:1.25rem;">By ${art.author} (Sample Demonstration Article)</p>
      <div style="font-size:0.98rem;color:var(--color-muted-text);line-height:1.75;margin-bottom:1.75rem;">
        ${art.fullContent}
      </div>
      <button type="button" class="btn btn-gold" style="width:100%;" data-close-modal="detail-modal" data-open-consultation="Insight Discussion: ${art.title}">
        <span>Discuss This Topic With Our Specialists</span>
        <i data-lucide="sparkles"></i>
      </button>
    `;
    modal.classList.add('open');
    if (window.lucide) window.lucide.createIcons();
  },

  showIndustryDetail(ind, modal, body) {
    body.innerHTML = `
      <button type="button" class="modal-close-btn" data-close-modal="detail-modal" aria-label="Close">
        <i data-lucide="x"></i>
      </button>
      <div class="eyebrow-badge" style="background:rgba(8,123,255,0.1);color:var(--color-electric-blue);">INDUSTRY SOLUTIONS</div>
      <h3 id="detail-modal-title" style="font-family:var(--font-heading);font-size:1.75rem;margin-bottom:0.65rem;">${ind.title}</h3>
      <p style="font-size:0.98rem;color:var(--color-muted-text);line-height:1.7;margin-bottom:1.35rem;">${ind.shortDesc}</p>
      <h4 style="font-family:var(--font-heading);font-size:1rem;margin-bottom:0.75rem;">Tailored Capabilities for ${ind.title}:</h4>
      <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:0.75rem;margin-bottom:1.75rem;">
        ${ind.solutions.map(s => `
          <div style="padding:0.85rem;border-radius:12px;background:#F2F7FF;border:1px solid rgba(8,123,255,0.2);font-weight:600;font-size:0.88rem;color:var(--color-text-dark);display:flex;align-items:center;gap:0.5rem;">
            <i data-lucide="check" style="width:16px;height:16px;color:var(--color-electric-blue);"></i>
            <span>${s}</span>
          </div>
        `).join('')}
      </div>
      <button type="button" class="btn btn-blue" style="width:100%;" data-close-modal="detail-modal" data-open-consultation="Industry Solutions: ${ind.title}">
        <span>Request a ${ind.title} Consultation</span>
        <i data-lucide="arrow-right"></i>
      </button>
    `;
    modal.classList.add('open');
    if (window.lucide) window.lucide.createIcons();
  },

  showLegalModal(title, modal, body) {
    body.innerHTML = `
      <button type="button" class="modal-close-btn" data-close-modal="detail-modal" aria-label="Close">
        <i data-lucide="x"></i>
      </button>
      <div class="eyebrow-badge" style="background:rgba(8,123,255,0.1);color:var(--color-electric-blue);">MINDMATRIX LEGAL</div>
      <h3 id="detail-modal-title" style="font-family:var(--font-heading);font-size:1.65rem;margin-bottom:0.85rem;">${title}</h3>
      <p style="font-size:0.95rem;color:var(--color-muted-text);line-height:1.7;margin-bottom:1rem;">
        <strong>MindMatrix Services Private Limited</strong> respects your privacy and is committed to transparent corporate governance.
      </p>
      <p style="font-size:0.92rem;color:var(--color-muted-text);line-height:1.7;margin-bottom:1.5rem;">
        This frontend interface currently runs in local static demonstration mode without storing personal data on an external server. Full legal policy documents will be served dynamically once the PHP backend and database are connected.
      </p>
      <button type="button" class="btn btn-blue" data-close-modal="detail-modal">Close Window</button>
    `;
    modal.classList.add('open');
    if (window.lucide) window.lucide.createIcons();
  },

  /* ------------------------------------------------------------------------
     21. FRONTEND FORM VALIDATION (CLEARLY LABELLED DEMO RESPONSE)
     ------------------------------------------------------------------------ */
  initContactFormValidation() {
    const attachValidator = (formId, bannerId) => {
      const form = document.getElementById(formId);
      const banner = document.getElementById(bannerId);
      if (!form || !banner) return;

      form.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;

        form.querySelectorAll('[required]').forEach(field => {
          const group = field.closest('.form-group');
          const val = field.value.trim();
          let fieldValid = val.length > 0;

          if (field.type === 'email') {
            fieldValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
          } else if (field.tagName === 'TEXTAREA') {
            fieldValid = val.length >= 6;
          }

          if (!fieldValid) {
            isValid = false;
            field.classList.add('invalid');
            if (group) group.classList.add('has-error');
          } else {
            field.classList.remove('invalid');
            if (group) group.classList.remove('has-error');
          }
        });

        if (!isValid) return;

        const nameInput = form.querySelector('input[type="text"]');
        const userName = nameInput ? nameInput.value.trim() : 'Partner';

        banner.innerHTML = `
          <div style="display:flex;align-items:flex-start;gap:0.85rem;">
            <i data-lucide="check-circle-2" style="color:var(--color-golden-yellow);width:24px;height:24px;flex-shrink:0;margin-top:2px;"></i>
            <div>
              <h4 style="font-family:var(--font-heading);font-size:1.05rem;color:var(--color-golden-yellow);margin-bottom:0.25rem;">
                Frontend Demonstration Confirmation — Thank You, ${userName}!
              </h4>
              <p style="font-size:0.86rem;color:rgba(255,255,255,0.88);line-height:1.55;">
                Your inquiry passed all frontend validation checks. <strong>Note:</strong> This is a frontend-only demonstration response. Connect your PHP endpoint (e.g., <code>api/submit-inquiry.php</code>) to persist inquiries in your database.
              </p>
            </div>
          </div>
        `;
        banner.classList.add('visible');
        if (window.lucide) window.lucide.createIcons();
        form.reset();
      });

      // Clear validation error on input
      form.querySelectorAll('.form-control').forEach(ctrl => {
        ctrl.addEventListener('input', () => {
          ctrl.classList.remove('invalid');
          const group = ctrl.closest('.form-group');
          if (group) group.classList.remove('has-error');
        });
      });
    };

    attachValidator('main-contact-form', 'contact-success-banner');
    attachValidator('modal-consultation-form', 'modal-success-banner');
  },

  /* ------------------------------------------------------------------------
     COOKIE CONSENT BANNER
     ------------------------------------------------------------------------ */
  initCookieConsent() {
    const banner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('cookie-accept-btn');
    const essentialBtn = document.getElementById('cookie-essential-btn');
    if (!banner) return;

    const consent = localStorage.getItem('mindmatrix_cookie_consent');
    if (!consent) {
      setTimeout(() => {
        banner.classList.remove('hidden');
      }, 2400);
    }

    const saveConsent = (type) => {
      localStorage.setItem('mindmatrix_cookie_consent', type);
      banner.classList.add('hidden');
    };

    if (acceptBtn) acceptBtn.addEventListener('click', () => saveConsent('all'));
    if (essentialBtn) essentialBtn.addEventListener('click', () => saveConsent('essential'));
  }
};

