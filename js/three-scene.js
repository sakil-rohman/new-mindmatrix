/* ==========================================================================
   MINDMATRIX - THREE.JS INTERACTIVE 3D AI NEURAL INTELLIGENCE SCULPTURE
   Features:
   - Glowing blue neural connections & vertex nodes
   - Central golden MindMatrix-inspired intelligence core
   - Animated holographic orbital rings
   - Emitted ambient particles
   - Smooth mouse parallax & reduced-motion / WebGL fallback support
   ========================================================================== */

const MindMatrixThreeScene = {
  scene: null,
  camera: null,
  renderer: null,
  neuralGroup: null,
  coreMesh: null,
  ring1: null,
  ring2: null,
  ring3: null,
  particles: null,
  mouseX: 0,
  mouseY: 0,
  targetX: 0,
  targetY: 0,
  isRunning: false,
  rafId: null,

  init() {
    const container = document.getElementById('hero-three-canvas');
    if (!container) return;

    // Check if Three.js loaded and WebGL is supported
    if (typeof THREE === 'undefined' || !this.isWebGLAvailable()) {
      this.renderFallbackVisual(container);
      return;
    }

    try {
      const width = container.clientWidth || 520;
      const height = container.clientHeight || 520;
      const isMobile = window.innerWidth < 768;

      this.scene = new THREE.Scene();

      this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
      this.camera.position.z = isMobile ? 12.5 : 11.2;

      this.renderer = new THREE.WebGLRenderer({
        antialias: !isMobile,
        alpha: true,
        powerPreference: 'high-performance'
      });
      this.renderer.setSize(width, height);
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.innerHTML = '';
      container.appendChild(this.renderer.domElement);

      this.neuralGroup = new THREE.Group();
      this.scene.add(this.neuralGroup);

      // Lighting
      const ambientLight = new THREE.AmbientLight(0x087BFF, 0.9);
      this.scene.add(ambientLight);

      const pointLightBlue = new THREE.PointLight(0x00D4FF, 2.2, 30);
      pointLightBlue.position.set(5, 5, 6);
      this.scene.add(pointLightBlue);

      const pointLightGold = new THREE.PointLight(0xFFC629, 2.4, 25);
      pointLightGold.position.set(-4, -3, 4);
      this.scene.add(pointLightGold);

      // 1. Outer Glowing Neural Intelligence Shell (Icosahedron Wireframe + Nodes)
      const shellDetail = isMobile ? 1 : 2;
      const shellGeo = new THREE.IcosahedronGeometry(2.85, shellDetail);

      const wireMat = new THREE.MeshBasicMaterial({
        color: 0x00D4FF,
        wireframe: true,
        transparent: true,
        opacity: 0.32
      });
      const wireMesh = new THREE.Mesh(shellGeo, wireMat);
      this.neuralGroup.add(wireMesh);

      // Glowing Neural Nodes at vertices
      const posAttr = shellGeo.attributes.position;
      const nodeGeo = new THREE.BufferGeometry();
      nodeGeo.setAttribute('position', posAttr.clone());

      const nodeMat = new THREE.PointsMaterial({
        color: 0x00D4FF,
        size: isMobile ? 0.12 : 0.14,
        transparent: true,
        opacity: 0.95
      });
      const nodePoints = new THREE.Points(nodeGeo, nodeMat);
      this.neuralGroup.add(nodePoints);

      // 2. Inner Golden Intelligence Core
      const coreGeo = new THREE.OctahedronGeometry(1.38, 1);
      const coreMat = new THREE.MeshStandardMaterial({
        color: 0xFFC629,
        emissive: 0xFF9900,
        emissiveIntensity: 0.45,
        metalness: 0.7,
        roughness: 0.25,
        wireframe: true,
        transparent: true,
        opacity: 0.78
      });
      this.coreMesh = new THREE.Mesh(coreGeo, coreMat);
      this.neuralGroup.add(this.coreMesh);

      // Subtle inner glowing sphere behind logo
      const auraGeo = new THREE.SphereGeometry(0.95, 24, 24);
      const auraMat = new THREE.MeshBasicMaterial({
        color: 0x087BFF,
        transparent: true,
        opacity: 0.24
      });
      const auraMesh = new THREE.Mesh(auraGeo, auraMat);
      this.neuralGroup.add(auraMesh);

      // 3. Three Animated Holographic Rings
      const ringGeo1 = new THREE.TorusGeometry(3.65, 0.022, 16, 100);
      const ringMat1 = new THREE.MeshBasicMaterial({
        color: 0x00D4FF,
        transparent: true,
        opacity: 0.55
      });
      this.ring1 = new THREE.Mesh(ringGeo1, ringMat1);
      this.ring1.rotation.x = Math.PI / 2.4;
      this.neuralGroup.add(this.ring1);

      const ringGeo2 = new THREE.TorusGeometry(4.15, 0.018, 16, 100);
      const ringMat2 = new THREE.MeshBasicMaterial({
        color: 0xFFC629,
        transparent: true,
        opacity: 0.48
      });
      this.ring2 = new THREE.Mesh(ringGeo2, ringMat2);
      this.ring2.rotation.y = Math.PI / 3;
      this.ring2.rotation.x = Math.PI / 4;
      this.neuralGroup.add(this.ring2);

      const ringGeo3 = new THREE.TorusGeometry(4.55, 0.015, 16, 100);
      const ringMat3 = new THREE.MeshBasicMaterial({
        color: 0x087BFF,
        transparent: true,
        opacity: 0.35
      });
      this.ring3 = new THREE.Mesh(ringGeo3, ringMat3);
      this.ring3.rotation.x = -Math.PI / 3.2;
      this.neuralGroup.add(this.ring3);

      // 4. Floating Neural Particle Field
      const particleCount = isMobile ? 80 : 190;
      const pGeo = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);

      for (let i = 0; i < particleCount; i++) {
        const radius = 3.2 + Math.random() * 2.4;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = radius * Math.cos(phi);
      }
      pGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

      const pMat = new THREE.PointsMaterial({
        color: 0xFFC629,
        size: 0.075,
        transparent: true,
        opacity: 0.75
      });
      this.particles = new THREE.Points(pGeo, pMat);
      this.scene.add(this.particles);

      // Events
      this.bindEvents(container);

      // Start Render Loop
      this.isRunning = true;
      this.animate();
    } catch (err) {
      console.warn('Three.js initialization fallback triggered:', err);
      this.renderFallbackVisual(container);
    }
  },

  isWebGLAvailable() {
    try {
      const canvas = document.createElement('canvas');
      return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
    } catch (e) {
      return false;
    }
  },

  renderFallbackVisual(container) {
    container.innerHTML = `
      <div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;">
        <div style="width:280px;height:280px;border-radius:50%;border:2px dashed rgba(0,212,255,0.45);background:radial-gradient(circle, rgba(8,123,255,0.28), transparent 70%);"></div>
      </div>
    `;
  },

  bindEvents(container) {
    window.addEventListener('pointermove', (e) => {
      const halfW = window.innerWidth / 2;
      const halfH = window.innerHeight / 2;
      this.mouseX = (e.clientX - halfW) / halfW;
      this.mouseY = (e.clientY - halfH) / halfH;
    }, { passive: true });

    window.addEventListener('resize', () => {
      if (!this.renderer || !this.camera) return;
      const width = container.clientWidth || 500;
      const height = container.clientHeight || 500;
      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(width, height);
    });

    // Pause non-essential WebGL animation when page tab is hidden
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.isRunning = false;
        if (this.rafId) cancelAnimationFrame(this.rafId);
      } else {
        if (!this.isRunning) {
          this.isRunning = true;
          this.animate();
        }
      }
    });
  },

  animate() {
    if (!this.isRunning) return;
    this.rafId = requestAnimationFrame(() => this.animate());

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const speedFactor = prefersReduced ? 0.15 : 1;

    this.targetX += (this.mouseX - this.targetX) * 0.05;
    this.targetY += (this.mouseY - this.targetY) * 0.05;

    if (this.neuralGroup) {
      this.neuralGroup.rotation.y += 0.0035 * speedFactor;
      this.neuralGroup.rotation.x += 0.0015 * speedFactor;
      this.neuralGroup.rotation.y += this.targetX * 0.015;
      this.neuralGroup.rotation.x += this.targetY * 0.015;
    }

    if (this.coreMesh) {
      this.coreMesh.rotation.y -= 0.008 * speedFactor;
      this.coreMesh.rotation.z += 0.005 * speedFactor;
    }

    if (this.ring1) this.ring1.rotation.z += 0.006 * speedFactor;
    if (this.ring2) this.ring2.rotation.x -= 0.005 * speedFactor;
    if (this.ring3) this.ring3.rotation.y += 0.004 * speedFactor;

    if (this.particles) {
      this.particles.rotation.y -= 0.0018 * speedFactor;
    }

    if (this.renderer && this.scene && this.camera) {
      this.renderer.render(this.scene, this.camera);
    }
  }
};

