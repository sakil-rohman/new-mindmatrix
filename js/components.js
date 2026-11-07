/* ==========================================================================
   MINDMATRIX SERVICES PRIVATE LIMITED - LOCAL DATA & DYNAMIC COMPONENTS
   Structured for seamless future PHP Backend & CMS integration.
   ========================================================================== */

const MindMatrixData = {
  /* ------------------------------------------------------------------------
     10. FEATURED PROJECTS DATA (Clearly labelled as Demonstration Concepts)
     ------------------------------------------------------------------------ */
  projects: [
    {
      id: 'proj-ai-customer-assistant',
      title: 'AI Customer Assistant',
      category: 'AI Solutions',
      badge: 'Demonstration Concept',
      shortDesc: 'An intelligent chatbot that handles customer queries, generates leads, and improves response time.',
      fullDesc: 'Designed for high-growth service and retail organizations, this intelligent AI Customer Assistant integrates Large Language Models with your internal product catalog and knowledge base. It resolves routine inquiries 24/7, captures and qualifies high-intent sales leads, and escalates complex conversations directly to human teams.',
      technologies: ['Generative AI', 'LLM Agents', 'Python', 'FastAPI', 'Vector Search', 'WebSockets'],
      highlights: [
        '24/7 automated multi-channel customer query resolution',
        'Intelligent lead qualification & CRM synchronization',
        'Context-aware answers grounded in company documentation',
        'Live human handover dashboard with conversation summaries'
      ],
      svgArt: `
        <svg viewBox="0 0 420 230" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="420" height="230" fill="url(#pGrad1)" />
          <defs>
            <linearGradient id="pGrad1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#061226" />
              <stop offset="55%" stop-color="#0A2756" />
              <stop offset="100%" stop-color="#071A35" />
            </linearGradient>
          </defs>
          <circle cx="330" cy="65" r="70" fill="rgba(0,212,255,0.12)" />
          <rect x="38" y="34" width="245" height="58" rx="14" fill="rgba(8,123,255,0.22)" stroke="#00D4FF" stroke-width="1.5" />
          <circle cx="66" cy="63" r="14" fill="#FFC629" />
          <rect x="92" y="51" width="130" height="8" rx="4" fill="#FFFFFF" />
          <rect x="92" y="66" width="165" height="7" rx="3.5" fill="rgba(0,212,255,0.65)" />
          <rect x="125" y="108" width="255" height="68" rx="14" fill="rgba(6,18,38,0.85)" stroke="#FFC629" stroke-width="1.5" />
          <rect x="148" y="126" width="180" height="8" rx="4" fill="#FFC629" />
          <rect x="148" y="142" width="210" height="7" rx="3.5" fill="rgba(255,255,255,0.7)" />
          <rect x="148" y="156" width="140" height="7" rx="3.5" fill="rgba(0,212,255,0.7)" />
        </svg>
      `
    },
    {
      id: 'proj-inventory-business-mgmt',
      title: 'Inventory & Business Management',
      category: 'Business Automation',
      badge: 'Demonstration Concept',
      shortDesc: 'A complete system to manage inventory, sales, billing, and business operations.',
      fullDesc: 'A unified enterprise resource and inventory platform engineered to eliminate manual spreadsheet bottlenecks. Track multi-warehouse stock levels in real time, automate GST-ready billing, monitor supplier purchase orders, and view executive profit-and-loss analytics from any device.',
      technologies: ['Python / Django', 'PostgreSQL', 'React', 'REST API', 'Automated Billing', 'BI Analytics'],
      highlights: [
        'Real-time stock alerts and multi-location warehouse tracking',
        'Fast point-of-sale and automated invoice generation',
        'Vendor procurement & purchase order lifecycle management',
        'Role-based access control and daily financial reports'
      ],
      svgArt: `
        <svg viewBox="0 0 420 230" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="420" height="230" fill="#071A35" />
          <rect x="28" y="26" width="364" height="178" rx="12" fill="#061226" stroke="rgba(0,212,255,0.4)" stroke-width="1.5" />
          <rect x="46" y="44" width="95" height="55" rx="8" fill="rgba(8,123,255,0.18)" stroke="#087BFF" />
          <text x="58" y="76" fill="#00D4FF" font-family="Space Grotesk" font-size="16" font-weight="700">INVENTORY</text>
          <rect x="156" y="44" width="95" height="55" rx="8" fill="rgba(255,198,41,0.14)" stroke="#FFC629" />
          <text x="176" y="76" fill="#FFC629" font-family="Space Grotesk" font-size="16" font-weight="700">BILLING</text>
          <rect x="266" y="44" width="108" height="55" rx="8" fill="rgba(0,212,255,0.14)" stroke="#00D4FF" />
          <text x="282" y="76" fill="#FFFFFF" font-family="Space Grotesk" font-size="16" font-weight="700">ANALYTICS</text>
          <rect x="46" y="116" width="328" height="68" rx="8" fill="rgba(255,255,255,0.03)" />
          <path d="M64 166 L124 142 L184 154 L250 128 L310 138 L354 122" stroke="#FFC629" stroke-width="3" stroke-linecap="round" />
          <circle cx="250" cy="128" r="5" fill="#00D4FF" />
          <circle cx="354" cy="122" r="5" fill="#FFC629" />
        </svg>
      `
    },
    {
      id: 'proj-business-growth-platform',
      title: 'Business Growth Platform',
      category: 'Digital Growth',
      badge: 'Demonstration Concept',
      shortDesc: 'A digital platform to build online presence, manage customers, and drive more sales.',
      fullDesc: 'An end-to-end digital commerce and customer acquisition engine designed for ambitious brands. Combines ultra-fast web architecture, conversion-optimized landing funnels, automated lead nurturing, and an integrated customer relationship portal.',
      technologies: ['Next.js', 'TypeScript', 'Node.js', 'SEO Architecture', 'Lead Funnels', 'CRM Sync'],
      highlights: [
        'High-converting brand presence engineered for Core Web Vitals',
        'Integrated lead capture pipelines & automated follow-ups',
        'Unified customer portal with order & inquiry tracking',
        'Search Engine Optimization (SEO) and conversion analytics'
      ],
      svgArt: `
        <svg viewBox="0 0 420 230" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="420" height="230" fill="#06152E" />
          <circle cx="210" cy="115" r="95" stroke="rgba(0,212,255,0.22)" stroke-dasharray="6 6" />
          <rect x="52" y="42" width="316" height="146" rx="14" fill="rgba(7,26,53,0.9)" stroke="#00D4FF" stroke-width="1.5" />
          <rect x="74" y="128" width="28" height="38" rx="4" fill="#087BFF" />
          <rect x="116" y="110" width="28" height="56" rx="4" fill="#087BFF" />
          <rect x="158" y="92" width="28" height="74" rx="4" fill="#00D4FF" />
          <rect x="200" y="74" width="28" height="92" rx="4" fill="#00D4FF" />
          <rect x="242" y="58" width="28" height="108" rx="4" fill="#FFC629" />
          <path d="M295 85 L335 85 L335 125" stroke="#FFC629" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M290 130 L335 85" stroke="#FFC629" stroke-width="3" stroke-linecap="round" />
        </svg>
      `
    },
    {
      id: 'proj-enterprise-crm-portal',
      title: 'Custom Enterprise Operations & CRM Suite',
      category: 'Software Development',
      badge: 'Demonstration Concept',
      shortDesc: 'Tailor-made web and mobile application connecting field teams, client pipelines, and executive dashboards.',
      fullDesc: 'Built for growing organizations that have outgrown off-the-shelf tools, this custom software suite unifies sales pipelines, service ticketing, staff workflows, and mobile field reporting into a single secure cloud platform.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'REST APIs', 'Docker', 'Cloud Security'],
      highlights: [
        'Custom sales & service pipeline stages matching your workflow',
        'Mobile-ready interface for on-the-go field teams',
        'Automated task reminders, SLA tracking, and client portals',
        'Seamless API integration with existing accounting & email tools'
      ],
      svgArt: `
        <svg viewBox="0 0 420 230" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="420" height="230" fill="#071A35" />
          <rect x="34" y="30" width="110" height="170" rx="10" fill="#061226" stroke="#087BFF" stroke-width="1.5" />
          <rect x="50" y="50" width="78" height="10" rx="5" fill="#FFC629" />
          <rect x="50" y="72" width="60" height="8" rx="4" fill="rgba(0,212,255,0.5)" />
          <rect x="50" y="90" width="70" height="8" rx="4" fill="rgba(0,212,255,0.35)" />
          <rect x="160" y="30" width="226" height="80" rx="10" fill="#061226" stroke="#00D4FF" stroke-width="1.5" />
          <circle cx="200" cy="70" r="22" stroke="#FFC629" stroke-width="4" />
          <rect x="238" y="56" width="120" height="10" rx="5" fill="#FFFFFF" />
          <rect x="238" y="74" width="90" height="8" rx="4" fill="#00D4FF" />
          <rect x="160" y="122" width="226" height="78" rx="10" fill="#061226" stroke="rgba(8,123,255,0.5)" stroke-width="1.5" />
          <rect x="180" y="142" width="186" height="10" rx="5" fill="rgba(0,212,255,0.6)" />
          <rect x="180" y="164" width="135" height="10" rx="5" fill="rgba(255,198,41,0.7)" />
        </svg>
      `
    },
    {
      id: 'proj-vision-quality-ai',
      title: 'Intelligent Document & Vision Automation',
      category: 'AI Solutions',
      badge: 'Demonstration Concept',
      shortDesc: 'Automated extraction and verification of invoices, forms, and visual inspection workflows using AI.',
      fullDesc: 'Eliminate hours of manual data entry by combining Computer Vision and intelligent OCR pipelines. Automatically extract structured tables from invoices, receipts, and operational forms while flagging anomalies for human review.',
      technologies: ['Computer Vision', 'Python', 'Machine Learning', 'OCR Pipelines', 'REST API'],
      highlights: [
        'Automated data extraction from structured & unstructured documents',
        'Instant validation rules and anomaly detection',
        'Direct export to ERP, accounting, and database systems',
        'Audit-ready verification logs with confidence scoring'
      ],
      svgArt: `
        <svg viewBox="0 0 420 230" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="420" height="230" fill="#061226" />
          <rect x="75" y="28" width="120" height="174" rx="10" fill="#0A234A" stroke="#00D4FF" stroke-width="1.5" />
          <line x1="60" y1="115" x2="210" y2="115" stroke="#FFC629" stroke-width="2.5" />
          <rect x="95" y="52" width="80" height="8" rx="4" fill="#FFFFFF" />
          <rect x="95" y="70" width="65" height="8" rx="4" fill="rgba(0,212,255,0.6)" />
          <rect x="95" y="135" width="80" height="8" rx="4" fill="rgba(0,212,255,0.6)" />
          <rect x="95" y="155" width="55" height="8" rx="4" fill="#FFC629" />
          <path d="M210 115 L265 115" stroke="#00D4FF" stroke-width="2" stroke-dasharray="4 4" />
          <circle cx="315" cy="115" r="46" fill="rgba(8,123,255,0.2)" stroke="#FFC629" stroke-width="2" />
          <text x="296" y="121" fill="#FFC629" font-family="Space Grotesk" font-size="18" font-weight="700">AI CV</text>
        </svg>
      `
    },
    {
      id: 'proj-automated-bi-hub',
      title: 'Automated Executive BI & Reporting Hub',
      category: 'Business Automation',
      badge: 'Demonstration Concept',
      shortDesc: 'Centralized business intelligence dashboard consolidating sales, operations, and automated daily reports.',
      fullDesc: 'Turn scattered data across spreadsheets, billing tools, and marketing channels into a single source of executive truth. Receive automated daily and weekly KPI digests via email or messaging apps and uncover growth opportunities fast.',
      technologies: ['Data Analytics', 'Business Intelligence', 'Python', 'PostgreSQL', 'Automated Reporting'],
      highlights: [
        'Real-time consolidation of sales, finance, and operations metrics',
        'Automated scheduled PDF and interactive dashboard reports',
        'Predictive trend forecasting and bottleneck alerts',
        'Custom KPI views for leadership, sales, and operations teams'
      ],
      svgArt: `
        <svg viewBox="0 0 420 230" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="420" height="230" fill="#071A35" />
          <circle cx="125" cy="115" r="58" stroke="#087BFF" stroke-width="14" />
          <path d="M125 57 A58 58 0 0 1 183 115" stroke="#FFC629" stroke-width="14" stroke-linecap="round" />
          <path d="M183 115 A58 58 0 0 1 100 167" stroke="#00D4FF" stroke-width="14" stroke-linecap="round" />
          <rect x="220" y="48" width="160" height="36" rx="8" fill="#061226" stroke="rgba(0,212,255,0.4)" />
          <rect x="236" y="62" width="95" height="8" rx="4" fill="#00D4FF" />
          <rect x="220" y="98" width="160" height="36" rx="8" fill="#061226" stroke="rgba(255,198,41,0.4)" />
          <rect x="236" y="112" width="120" height="8" rx="4" fill="#FFC629" />
          <rect x="220" y="148" width="160" height="36" rx="8" fill="#061226" stroke="rgba(8,123,255,0.4)" />
          <rect x="236" y="162" width="80" height="8" rx="4" fill="#FFFFFF" />
        </svg>
      `
    }
  ],

  /* ------------------------------------------------------------------------
     11. INDUSTRIES WE SERVE DATA (7 Interactive Industry Cards)
     ------------------------------------------------------------------------ */
  industries: [
    {
      id: 'ind-retail',
      title: 'Retail & E-commerce',
      icon: 'shopping-bag',
      shortDesc: 'Omnichannel storefronts, inventory automation, AI product recommendations, and customer loyalty systems.',
      solutions: ['E-commerce Platforms', 'Inventory & POS Sync', 'AI Shopping Assistants', 'Automated Order Workflows']
    },
    {
      id: 'ind-education',
      title: 'Education',
      icon: 'graduation-cap',
      shortDesc: 'Digital learning portals, institution management systems, AI tutoring assistants, and admissions automation.',
      solutions: ['Campus & LMS Portals', 'AI Study Assistants', 'Automated Admissions & Fee Systems', 'Student Analytics']
    },
    {
      id: 'ind-healthcare',
      title: 'Healthcare',
      icon: 'heart-pulse',
      shortDesc: 'Patient appointment platforms, clinic & diagnostic workflow automation, and intelligent patient support.',
      solutions: ['Appointment & Clinic Portals', 'Patient Query Chatbots', 'Medical Inventory & Billing', 'Secure Data Workflows']
    },
    {
      id: 'ind-hospitality',
      title: 'Hospitality & Tourism',
      icon: 'compass',
      shortDesc: 'Direct booking engines, AI travel concierges, property management automation, and regional tourism showcases.',
      solutions: ['Direct Booking Platforms', '24/7 AI Concierge Chatbots', 'Guest Experience Automation', 'Digital Growth & SEO']
    },
    {
      id: 'ind-manufacturing',
      title: 'Manufacturing',
      icon: 'factory',
      shortDesc: 'Supply chain visibility, production & warehouse tracking, distributor portals, and predictive analytics.',
      solutions: ['Production & Inventory ERP', 'Distributor Order Portals', 'Quality & Document Automation', 'Operations BI']
    },
    {
      id: 'ind-realestate',
      title: 'Real Estate',
      icon: 'building-2',
      shortDesc: 'High-conversion property portals, automated lead qualification, CRM pipelines, and virtual showcase experiences.',
      solutions: ['Interactive Property Portals', 'AI Lead Qualification Agents', 'Broker & Sales CRM', 'Automated Follow-up Systems']
    },
    {
      id: 'ind-smes',
      title: 'Professional Services & SMEs',
      icon: 'briefcase',
      shortDesc: 'End-to-end digital transformation, client portals, automated invoicing, and AI productivity copilots for growing businesses.',
      solutions: ['Custom Business Portals', 'Workflow & Billing Automation', 'AI Knowledge Assistants', 'Dedicated Tech Consulting']
    }
  ],

  /* ------------------------------------------------------------------------
     13. TECHNOLOGY ECOSYSTEM DATA
     ------------------------------------------------------------------------ */
  technologies: [
    // Row 1
    { name: 'Python', category: 'Programming', icon: 'terminal' },
    { name: 'JavaScript (ES6+)', category: 'Programming', icon: 'file-code' },
    { name: 'TypeScript', category: 'Programming', icon: 'code-2' },
    { name: 'HTML5', category: 'Frontend', icon: 'layout' },
    { name: 'CSS3', category: 'Frontend', icon: 'palette' },
    { name: 'React', category: 'Frontend', icon: 'atom' },
    { name: 'Next.js', category: 'Frontend', icon: 'globe' },
    { name: 'Django', category: 'Backend', icon: 'server' },
    { name: 'Node.js', category: 'Backend', icon: 'cpu' },
    { name: 'REST APIs', category: 'Backend', icon: 'webhook' },
    // Row 2
    { name: 'Machine Learning', category: 'AI & Data', icon: 'brain-circuit' },
    { name: 'Generative AI', category: 'AI & Data', icon: 'sparkles' },
    { name: 'LLMs & AI Agents', category: 'AI & Data', icon: 'bot' },
    { name: 'Computer Vision', category: 'AI & Data', icon: 'eye' },
    { name: 'Data Analytics', category: 'AI & Data', icon: 'bar-chart-3' },
    { name: 'PostgreSQL', category: 'Database', icon: 'database' },
    { name: 'MySQL', category: 'Database', icon: 'hard-drive' },
    { name: 'MongoDB', category: 'Database', icon: 'layers' },
    { name: 'Linux', category: 'Infrastructure', icon: 'terminal-square' },
    { name: 'Docker', category: 'Infrastructure', icon: 'box' },
    { name: 'Git & CI/CD', category: 'Infrastructure', icon: 'git-branch' },
    { name: 'Cloud Platforms', category: 'Infrastructure', icon: 'cloud' }
  ],

  /* ------------------------------------------------------------------------
     15. INSIGHTS & BLOG DATA (Clearly identified as Sample Articles)
     ------------------------------------------------------------------------ */
  articles: [
    {
      id: 'art-ai-transforming-businesses',
      title: 'How AI Is Transforming Businesses',
      category: 'Artificial Intelligence',
      author: 'MindMatrix AI Research Desk',
      date: 'Sample Insight • 2026',
      readTime: '5 min read',
      shortDesc: 'Discover how practical Artificial Intelligence moves beyond hype to drive real customer acquisition, cost reduction, and faster decision-making.',
      fullContent: `
        <p>Artificial Intelligence is no longer reserved for tech giants. Today, forward-looking businesses across retail, healthcare, education, and professional services are embedding practical AI into their core operations.</p>
        <h4 style="margin:1.1rem 0 0.4rem;color:var(--color-text-dark);">1. Elevating Customer Experience</h4>
        <p>Intelligent conversational systems respond immediately to prospect questions, recommend relevant solutions, and capture qualified leads around the clock.</p>
        <h4 style="margin:1.1rem 0 0.4rem;color:var(--color-text-dark);">2. Eliminating Repetitive Operational Bottlenecks</h4>
        <p>From automated document processing to predictive inventory insights, AI frees human teams to focus on strategy, relationships, and creative problem-solving.</p>
      `
    },
    {
      id: 'art-what-are-ai-agents',
      title: 'What Are AI Agents?',
      category: 'Artificial Intelligence',
      author: 'MindMatrix Engineering Team',
      date: 'Sample Insight • 2026',
      readTime: '6 min read',
      shortDesc: 'Unlike basic rule-based chatbots, autonomous AI Agents can reason, connect to your business tools, and execute multi-step workflows.',
      fullContent: `
        <p>Traditional chatbots follow rigid decision trees. If a customer asks a question outside the script, the bot fails. <strong>AI Agents</strong> represent a paradigm shift: they combine Large Language Models with tool access, memory, and business guardrails.</p>
        <h4 style="margin:1.1rem 0 0.4rem;color:var(--color-text-dark);">How AI Agents Work in Business</h4>
        <p>An AI Agent can check real-time inventory in your database, draft a personalized quote, schedule a consultation on your calendar, and log the interaction in your CRM—all within seconds.</p>
      `
    },
    {
      id: 'art-understanding-llms',
      title: 'Understanding Large Language Models',
      category: 'Artificial Intelligence',
      author: 'MindMatrix AI Research Desk',
      date: 'Sample Insight • 2026',
      readTime: '7 min read',
      shortDesc: 'A clear, executive-friendly guide to how Large Language Models (LLMs) and Retrieval-Augmented Generation (RAG) unlock company knowledge.',
      fullContent: `
        <p>Large Language Models (LLMs) excel at understanding and generating human language. For enterprises, the real magic happens when an LLM is securely connected to your private company knowledge base using Retrieval-Augmented Generation (RAG).</p>
        <p style="margin-top:0.8rem;">This allows your staff and customers to query policies, product manuals, and operational data using natural conversation—with accurate, cited answers.</p>
      `
    },
    {
      id: 'art-ai-automate-operations',
      title: 'How AI Can Automate Business Operations',
      category: 'Business Automation',
      author: 'MindMatrix Automation Practice',
      date: 'Sample Insight • 2026',
      readTime: '5 min read',
      shortDesc: 'Identify the highest-ROI workflows in billing, inventory, reporting, and customer onboarding that can be automated today.',
      fullContent: `
        <p>Manual data entry across disconnected spreadsheets silently drains team productivity and introduces costly errors. By combining workflow automation with intelligent triggers, businesses can streamline end-to-end operations.</p>
        <p style="margin-top:0.8rem;">Key automation wins include instant invoice generation, low-stock procurement alerts, automated CRM lead assignment, and scheduled executive BI reporting.</p>
      `
    },
    {
      id: 'art-why-custom-software',
      title: 'Why Businesses Need Custom Software',
      category: 'Software & Digital Growth',
      author: 'MindMatrix Architecture Desk',
      date: 'Sample Insight • 2026',
      readTime: '6 min read',
      shortDesc: 'When off-the-shelf SaaS subscriptions limit your workflow, custom software provides a scalable competitive advantage tailored to your business.',
      fullContent: `
        <p>Off-the-shelf software forces your business to adapt to generic templates—often accompanied by rising per-user subscription fees and disconnected data silos.</p>
        <p style="margin-top:0.8rem;">Custom web, mobile, and enterprise software built around your exact operational process eliminates friction, integrates cleanly with your existing stack, and scales as a proprietary business asset.</p>
      `
    },
    {
      id: 'art-digital-transformation-smes',
      title: 'Digital Transformation for Small Businesses',
      category: 'Software & Digital Growth',
      author: 'MindMatrix Growth Advisory',
      date: 'Sample Insight • 2026',
      readTime: '5 min read',
      shortDesc: 'A practical roadmap for SMEs in Northeast India and beyond to modernize customer acquisition, operations, and data visibility step by step.',
      fullContent: `
        <p>Digital transformation does not require replacing everything overnight. The most successful small and medium enterprises adopt a phased approach—starting with a high-converting digital presence and lead capture system, then automating core inventory or service workflows, and progressively layering AI intelligence.</p>
      `
    }
  ],

  /* ------------------------------------------------------------------------
     21. INTERACTIVE FAQ DATA
     ------------------------------------------------------------------------ */
  faqs: [
    {
      question: 'How does MindMatrix help businesses grow beyond standard software development?',
      answer: 'We start with your business objectives—attracting customers, increasing revenue, and reducing operational friction. Through our 6-step Growth Framework (Discover, Analyze, Strategize, Implement, Optimize, Scale), we align custom software, AI automation, and digital growth systems directly with measurable business outcomes.'
    },
    {
      question: 'Can we adopt Artificial Intelligence even if our current processes are manual?',
      answer: 'Yes. Many of our clients begin with manual or spreadsheet-based workflows. We first help you digitize and structure your core operations, and then embed practical AI assistants, chatbots, or automated reporting where they create immediate value.'
    },
    {
      question: 'Do you provide ongoing technical support and maintenance after launch?',
      answer: 'Absolutely. Long-Term Technical Partnership is one of our core pillars. We provide ongoing cloud management, security updates, performance optimization, and feature expansion as your business scales.'
    },
    {
      question: 'Is this website ready for PHP backend and CMS integration?',
      answer: 'Yes. All projects, solutions, industries, insights, and forms are modularly structured with clean data models and validation hooks so your PHP backend, MySQL/PostgreSQL database, and admin CMS can be connected seamlessly.'
    }
  ]
};

/* ==========================================================================
   COMPONENT RENDERERS
   ========================================================================== */
const MindMatrixComponents = {
  init() {
    this.renderProjects('all');
    this.renderIndustries();
    this.renderTechMarquee();
    this.renderInsights('all');
    this.renderFAQs();
  },

  /* Render Featured Projects with Category Filtering */
  renderProjects(filterCategory = 'all') {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;

    const filtered = filterCategory === 'all'
      ? MindMatrixData.projects
      : MindMatrixData.projects.filter(p => p.category === filterCategory);

    grid.innerHTML = filtered.map(proj => `
      <article class="project-card" data-project-id="${proj.id}">
        <div class="project-cover-wrap">
          <span class="project-demo-badge">${proj.badge}</span>
          <span class="project-category-badge">${proj.category}</span>
          <div class="project-cover-visual">${proj.svgArt}</div>
        </div>
        <div class="project-body">
          <h3 class="project-title">${proj.title}</h3>
          <p class="project-desc">${proj.shortDesc}</p>
          <div class="project-tech-list">
            ${proj.technologies.map(t => `<span class="project-tech-chip">${t}</span>`).join('')}
          </div>
          <div class="project-footer">
            <button type="button" class="project-view-btn" data-open-project="${proj.id}">
              <span>View Project Concept</span>
              <i data-lucide="arrow-up-right" style="width:16px;height:16px;"></i>
            </button>
            <span style="font-size:0.75rem;color:var(--color-muted-text);font-weight:600;">Demo Showcase</span>
          </div>
        </div>
      </article>
    `).join('');

    if (window.lucide) window.lucide.createIcons();
  },

  /* Render 7 Interactive Industry Cards */
  renderIndustries() {
    const grid = document.getElementById('industries-grid');
    if (!grid) return;

    grid.innerHTML = MindMatrixData.industries.map((ind, idx) => `
      <article class="industry-card ${idx === 0 ? 'active' : ''}" data-industry-id="${ind.id}" tabindex="0" role="button" aria-label="${ind.title} solutions">
        <div>
          <div class="industry-icon-box">
            <i data-lucide="${ind.icon}"></i>
          </div>
          <h3 class="industry-title">${ind.title}</h3>
          <p class="industry-desc">${ind.shortDesc}</p>
        </div>
        <div>
          <div style="display:flex;flex-wrap:wrap;gap:0.35rem;margin-bottom:0.9rem;">
            ${ind.solutions.slice(0, 2).map(s => `<span style="font-size:0.72rem;font-weight:600;background:#EBF3FF;color:var(--color-electric-blue);padding:0.2rem 0.55rem;border-radius:99px;">${s}</span>`).join('')}
          </div>
          <span class="industry-Action-hint">
            <span>Explore Industry Solutions</span>
            <i data-lucide="arrow-right" style="width:15px;height:15px;"></i>
          </span>
        </div>
        <i data-lucide="${ind.icon}" class="industry-bg-art"></i>
      </article>
    `).join('');

    if (window.lucide) window.lucide.createIcons();
  },

  /* Render Infinite Technology Ecosystem Marquee */
  renderTechMarquee() {
    const wrapper = document.getElementById('tech-marquee-wrapper');
    if (!wrapper) return;

    const row1 = MindMatrixData.technologies.slice(0, 10);
    const row2 = MindMatrixData.technologies.slice(10);

    const buildTrack = (items, isReverse = false) => {
      const doubled = [...items, ...items];
      return `
        <div class="marquee-track ${isReverse ? 'reverse' : ''}">
          ${doubled.map(tech => `
            <div class="tech-node-pill" title="${tech.name} (${tech.category})">
              <div class="tech-node-icon"><i data-lucide="${tech.icon}"></i></div>
              <div class="tech-node-meta">
                <span class="tech-node-name">${tech.name}</span>
                <span class="tech-node-cat">${tech.category}</span>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    };

    wrapper.innerHTML = buildTrack(row1, false) + buildTrack(row2, true);
    if (window.lucide) window.lucide.createIcons();
  },

  /* Render Insights & Blog Cards inside Swiper */
  renderInsights(filterCategory = 'all') {
    const wrapper = document.getElementById('insights-swiper-wrapper');
    if (!wrapper) return;

    const filtered = filterCategory === 'all'
      ? MindMatrixData.articles
      : MindMatrixData.articles.filter(a => a.category === filterCategory);

    wrapper.innerHTML = filtered.map((art, index) => `
      <div class="swiper-slide" style="height:auto;">
        <article class="blog-card">
          <div class="blog-cover">
            <span class="blog-cat-pill">${art.category}</span>
            <span class="blog-sample-pill">Sample Content</span>
            <svg class="blog-cover-art" viewBox="0 0 400 205" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="400" height="205" fill="${index % 2 === 0 ? '#071A35' : '#061329'}" />
              <circle cx="${310 - index * 22}" cy="70" r="65" fill="rgba(8,123,255,0.2)" />
              <circle cx="${110 + index * 18}" cy="140" r="45" fill="rgba(0,212,255,0.14)" />
              <path d="M30 155 Q 140 ${70 + index * 10} 250 120 T 370 65" stroke="#00D4FF" stroke-width="2.2" fill="none" />
              <path d="M30 170 Q 160 110 270 140 T 370 95" stroke="#FFC629" stroke-width="1.8" stroke-dasharray="5 5" fill="none" />
              <circle cx="250" cy="120" r="5" fill="#FFC629" />
              <circle cx="370" cy="65" r="4.5" fill="#00D4FF" />
            </svg>
          </div>
          <div class="blog-body">
            <div class="blog-meta">
              <span>${art.date}</span>
              <span>•</span>
              <span>${art.readTime}</span>
            </div>
            <h3 class="blog-title">${art.title}</h3>
            <p class="blog-desc">${art.shortDesc}</p>
            <div class="blog-footer">
              <span class="blog-author">${art.author}</span>
              <button type="button" class="blog-read-btn" data-open-article="${art.id}">
                <span>Read More</span>
                <i data-lucide="arrow-right" style="width:15px;height:15px;"></i>
              </button>
            </div>
          </div>
        </article>
      </div>
    `).join('');

    if (window.lucide) window.lucide.createIcons();
    if (window.insightsSwiperInstance) {
      window.insightsSwiperInstance.update();
      window.insightsSwiperInstance.slideTo(0);
    }
  },

  /* Render Interactive FAQ Accordion */
  renderFAQs() {
    const container = document.getElementById('faq-accordion');
    if (!container) return;

    container.innerHTML = MindMatrixData.faqs.map((faq, index) => `
      <div class="faq-item ${index === 0 ? 'open' : ''}">
        <button type="button" class="faq-trigger" aria-expanded="${index === 0 ? 'true' : 'false'}">
          <span>${faq.question}</span>
          <span class="faq-icon"><i data-lucide="plus" style="width:18px;height:18px;"></i></span>
        </button>
        <div class="faq-answer" style="${index === 0 ? 'max-height:240px;' : ''}">
          <div class="faq-answer-inner">${faq.answer}</div>
        </div>
      </div>
    `).join('');

    if (window.lucide) window.lucide.createIcons();
  }
};

