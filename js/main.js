/* ==========================================================================
   MINDMATRIX SERVICES PRIVATE LIMITED - APPLICATION BOOTSTRAP (main.js)
   "Intelligence. Innovation. Impact."
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Set dynamic current year in footer
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 2. Render dynamic data components (Projects, Industries, Tech Marquee, Insights, FAQs)
  MindMatrixComponents.init();

  // 3. Initialize Lucide Icons across the DOM
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // 4. Initialize Interactive 3D AI Neural Intelligence Sculpture (Three.js)
  MindMatrixThreeScene.init();

  // 5. Initialize Smooth Navigation, Sticky Header & Mobile Drawer
  MindMatrixNavigation.init();

  // 6. Initialize Interactive UI Controls (Cursor, 3D Tilt, Filters, Search, Modals, Form Validation)
  MindMatrixInteractions.init();

  // 7. Run Branded Preloader and trigger ScrollTrigger animations once ready
  MindMatrixAnimations.initPreloader(() => {
    MindMatrixAnimations.initScrollAnimations();
  });
});

