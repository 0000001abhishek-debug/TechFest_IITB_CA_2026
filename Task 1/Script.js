const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-links a');
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-links');
const sections = document.querySelectorAll('main section[id]');
const cursorGlow = document.querySelector('.cursor-glow');
const cursorDot = document.querySelector('.cursor-dot');
const magneticButtons = document.querySelectorAll('.magnetic');
const counters = document.querySelectorAll('.counter');
const auroraCanvas = document.getElementById('aurora-canvas');
const brainCanvas = document.getElementById('brain-canvas');

const setActiveLink = () => {
  const scrollY = window.scrollY + 140;
  sections.forEach((section) => {
    const id = section.getAttribute('id');
    const offset = section.offsetTop;
    const height = section.offsetHeight;
    if (scrollY >= offset && scrollY < offset + height) {
      navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${id}`));
    }
  });
};

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 24);
  setActiveLink();
});

navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    if (link.getAttribute('href').startsWith('#')) {
      event.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (window.innerWidth <= 760) {
      navMenu.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });
});

menuToggle?.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!expanded));
  navMenu.classList.toggle('open');
});

const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 1;
const customCursorEnabled = false;
const shouldUseCursor = customCursorEnabled && !isTouchDevice && window.matchMedia('(prefers-reduced-motion: no-preference)').matches;

if (!shouldUseCursor) {
  document.body.style.cursor = 'auto';
  if (cursorGlow) cursorGlow.style.display = 'none';
  if (cursorDot) cursorDot.style.display = 'none';
}

const interactiveSelectors = ['.button', 'a[href^="#"]', '.nav-links a', '.menu-toggle'];
const interactiveElements = document.querySelectorAll(interactiveSelectors.join(','));
interactiveElements.forEach((element) => {
  element.addEventListener('click', (event) => {
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${event.clientX - rect.left}px`;
    ripple.style.top = `${event.clientY - rect.top}px`;
    element.appendChild(ripple);
    ripple.addEventListener('animationend', () => ripple.remove());
  });
});

magneticButtons.forEach((button) => {
  button.addEventListener('mousemove', (event) => {
    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const dx = (x / rect.width - 0.5) * 10;
    const dy = (y / rect.height - 0.5) * 10;
    gsap.to(button, { x: dx, y: dy, rotate: dx * 0.15, duration: 0.18, ease: 'power1.out' });
  });
  button.addEventListener('mouseleave', () => gsap.to(button, { x: 0, y: 0, rotate: 0, duration: 0.22, ease: 'power1.out' }));
});

if (window.gsap) {
  gsap.from('.hero h1, .hero .subtitle, .hero .hero-text, .hero .hero-actions, .hero .hero-pills', {
    y: 30,
    opacity: 0,
    duration: 1,
    stagger: 0.12,
    ease: 'power3.out'
  });

  gsap.from('.navbar', { y: -40, opacity: 0, duration: 0.8, ease: 'power3.out' });
  gsap.from('.holo-panel', { scale: 0.96, opacity: 0, duration: 1.1, ease: 'power3.out' });
}

if (window.Lenis) {
  const lenis = new Lenis({ duration: 1.2, smoothWheel: true, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
  const raf = (time) => {
    lenis.raf(time);
    requestAnimationFrame(raf);
  };
  requestAnimationFrame(raf);
}

if (window.AOS) {
  AOS.init({ duration: 850, once: false, offset: 140, easing: 'cubic-bezier(0.2, 0.8, 0.2, 1)' });
}

const animateCounters = () => {
  counters.forEach((counter) => {
    const target = Number(counter.dataset.target || 0);
    const isDecimal = target % 1 !== 0;
    gsap.to(counter, {
      duration: 1.8,
      innerText: target,
      snap: { innerText: isDecimal ? 0.1 : 1 },
      ease: 'power2.out',
      onUpdate: function () {
        const val = Number(counter.innerText);
        counter.textContent = isDecimal ? val.toFixed(1) : `${Math.round(val).toLocaleString()}`;
      },
      onComplete: function () {
        counter.textContent = isDecimal ? `${target.toFixed(1)}` : `${target.toLocaleString()}`;
      }
    });
  });
};

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animateCounters();
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.metric-card').forEach((card) => counterObserver.observe(card));

const particleCtx = auroraCanvas.getContext('2d');
let width = 0;
let height = 0;
let particles = [];

const resizeAurora = () => {
  width = auroraCanvas.width = window.innerWidth * window.devicePixelRatio;
  height = auroraCanvas.height = window.innerHeight * window.devicePixelRatio;
  particleCtx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
  particles = Array.from({ length: 70 }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    vx: (Math.random() - 0.5) * 0.35,
    vy: (Math.random() - 0.5) * 0.35,
    r: Math.random() * 1.8 + 0.6,
    alpha: Math.random() * 0.4 + 0.1
  }));
};

const drawAurora = () => {
  particleCtx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  particles.forEach((particle, index) => {
    particle.x += particle.vx;
    particle.y += particle.vy;
    if (particle.x < 0 || particle.x > window.innerWidth) particle.vx *= -1;
    if (particle.y < 0 || particle.y > window.innerHeight) particle.vy *= -1;
    particleCtx.beginPath();
    particleCtx.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2);
    particleCtx.fillStyle = `rgba(255,255,255,${particle.alpha})`;
    particleCtx.fill();

    for (let j = index + 1; j < particles.length; j += 1) {
      const other = particles[j];
      const dist = Math.hypot(particle.x - other.x, particle.y - other.y);
      if (dist < 120) {
        particleCtx.beginPath();
        particleCtx.moveTo(particle.x, particle.y);
        particleCtx.lineTo(other.x, other.y);
        particleCtx.strokeStyle = `rgba(0,245,255,${0.06 * (1 - dist / 120)})`;
        particleCtx.stroke();
      }
    }
  });
  requestAnimationFrame(drawAurora);
};

resizeAurora();
drawAurora();
window.addEventListener('resize', resizeAurora);

if (window.THREE && brainCanvas) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, brainCanvas.clientWidth / brainCanvas.clientHeight, 0.1, 1000);
  camera.position.z = 7;

  const renderer = new THREE.WebGLRenderer({ canvas: brainCanvas, antialias: true, alpha: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(brainCanvas.clientWidth, brainCanvas.clientHeight);

  const group = new THREE.Group();
  scene.add(group);

  const geometry = new THREE.TorusKnotGeometry(1.3, 0.25, 180, 18);
  const material = new THREE.MeshPhysicalMaterial({
    color: 0x4f8bff,
    roughness: 0.12,
    metalness: 0.2,
    transparent: true,
    opacity: 0.82,
    emissive: 0x00f5ff,
    emissiveIntensity: 0.18,
    clearcoat: 0.65
  });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.rotation.x = 0.9;
  group.add(mesh);

  const lineMaterial = new THREE.LineBasicMaterial({ color: 0x00f5ff, transparent: true, opacity: 0.75 });
  const lineGeometry = new THREE.WireframeGeometry(geometry);
  const wireframe = new THREE.LineSegments(lineGeometry, lineMaterial);
  group.add(wireframe);

  const points = [];
  for (let i = 0; i < 8; i += 1) {
    points.push(new THREE.Vector3(Math.sin(i) * 1.3, Math.cos(i * 0.7) * 1.1, Math.cos(i * 0.5) * 1.5));
  }
  const curve = new THREE.CatmullRomCurve3(points);
  const tube = new THREE.TubeGeometry(curve, 80, 0.05, 8, false);
  const tubeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ffc8, transparent: true, opacity: 0.8 });
  const tubeMesh = new THREE.Mesh(tube, tubeMaterial);
  group.add(tubeMesh);

  const ambient = new THREE.AmbientLight(0x7aa0ff, 0.72);
  const point = new THREE.PointLight(0x00f5ff, 2.2, 20);
  point.position.set(2, 2, 3);
  scene.add(ambient, point);

  const animateBrain = () => {
    group.rotation.y += 0.004;
    group.rotation.x = Math.sin(Date.now() * 0.0004) * 0.12 + 0.35;
    renderer.render(scene, camera);
    requestAnimationFrame(animateBrain);
  };

  animateBrain();
  window.addEventListener('resize', () => {
    camera.aspect = brainCanvas.clientWidth / brainCanvas.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(brainCanvas.clientWidth, brainCanvas.clientHeight);
  });
}

setActiveLink();
