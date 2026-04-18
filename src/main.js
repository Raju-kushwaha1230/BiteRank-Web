import './style.css'

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Navbar Scroll Effect
const nav = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// GSAP Animations
// 1. Hero Animations
const heroTl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.5 } });
heroTl.from('.hero-content h1', { opacity: 0, y: 50, delay: 0.5 })
      .from('.hero-content p', { opacity: 0, y: 30 }, '-=1.2')
      .from('.hero-btns', { opacity: 0, y: 20 }, '-=1.1')
      .from('#hero-phone', { opacity: 0, x: 100, rotate: 15, scale: 0.8 }, '-=1.5');

// 2. Parallax Effects (Optimized for Mobile)
const isMobile = window.innerWidth < 768;

gsap.to('#hero-phone', {
  y: isMobile ? -30 : -100,
  scrollTrigger: {
    trigger: '.hero',
    start: 'top top',
    end: 'bottom top',
    scrub: true
  }
});

gsap.to('#stories-phone', {
  y: isMobile ? -20 : -50,
  scrollTrigger: {
    trigger: '.stories-showcase',
    start: 'top bottom',
    end: 'bottom top',
    scrub: true
  }
});

gsap.to('#geotag-phone', {
  y: isMobile ? -30 : -80,
  rotate: isMobile ? -2 : -5,
  scrollTrigger: {
    trigger: '.geotag',
    start: 'top bottom',
    end: 'bottom top',
    scrub: true
  }
});

// 3. Staggered Reveals
gsap.utils.toArray('.reveal').forEach((el) => {
  gsap.fromTo(el, 
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 90%', // Trigger sooner
        once: true // Only animate once
      }
    }
  );
});

// 4. Magnetic Button Effect
const magneticBtns = document.querySelectorAll('.btn-primary');
magneticBtns.forEach(btn => {
  btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    gsap.to(btn, {
      x: x * 0.3,
      y: y * 0.3,
      duration: 0.3,
      ease: 'power2.out'
    });
  });
  
  btn.addEventListener('mouseleave', () => {
    gsap.to(btn, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.3)'
    });
  });
});

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

console.log('BiteRank Ultra-Premium Loaded');
