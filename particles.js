// ============================================
// PARTICLE ANIMATION SYSTEM
// ============================================
// Creates an animated particle background for the hero section

class ParticleSystem {
  constructor(canvasId, options = {}) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;

    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.mouse = { x: null, y: null, radius: 150 };
    
    // Configuration
    this.config = {
      particleCount: options.particleCount || 80,
      particleColor: options.particleColor || 'rgba(6, 182, 212, 0.8)',
      lineColor: options.lineColor || 'rgba(6, 182, 212, 0.3)',
      particleSize: options.particleSize || 2,
      speedFactor: options.speedFactor || 0.5,
      connectionDistance: options.connectionDistance || 120,
      mouseInteraction: options.mouseInteraction !== false
    };

    this.init();
  }

  init() {
    this.setCanvasSize();
    this.createParticles();
    this.setupEventListeners();
    this.animate();
  }

  setCanvasSize() {
    this.canvas.width = this.canvas.offsetWidth;
    this.canvas.height = this.canvas.offsetHeight;
  }

  setupEventListeners() {
    window.addEventListener('resize', () => {
      this.setCanvasSize();
      this.particles = [];
      this.createParticles();
    });

    if (this.config.mouseInteraction) {
      this.canvas.addEventListener('mousemove', (e) => {
        const rect = this.canvas.getBoundingClientRect();
        this.mouse.x = e.clientX - rect.left;
        this.mouse.y = e.clientY - rect.top;
      });

      this.canvas.addEventListener('mouseleave', () => {
        this.mouse.x = null;
        this.mouse.y = null;
      });
    }
  }

  createParticles() {
    for (let i = 0; i < this.config.particleCount; i++) {
      this.particles.push(new Particle(this.canvas.width, this.canvas.height, this.config));
    }
  }

  connectParticles() {
    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i + 1; j < this.particles.length; j++) {
        const dx = this.particles[i].x - this.particles[j].x;
        const dy = this.particles[i].y - this.particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.config.connectionDistance) {
          const opacity = 1 - (distance / this.config.connectionDistance);
          this.ctx.strokeStyle = this.config.lineColor.replace('0.3', opacity * 0.3);
          this.ctx.lineWidth = 1;
          this.ctx.beginPath();
          this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
          this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
          this.ctx.stroke();
        }
      }
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Update and draw particles
    this.particles.forEach(particle => {
      particle.update(this.mouse, this.canvas.width, this.canvas.height);
      particle.draw(this.ctx);
    });

    // Connect nearby particles
    this.connectParticles();

    requestAnimationFrame(() => this.animate());
  }
}

class Particle {
  constructor(canvasWidth, canvasHeight, config) {
    this.x = Math.random() * canvasWidth;
    this.y = Math.random() * canvasHeight;
    this.size = config.particleSize;
    this.baseSize = config.particleSize;
    this.speedX = (Math.random() - 0.5) * config.speedFactor;
    this.speedY = (Math.random() - 0.5) * config.speedFactor;
    this.color = config.particleColor;
  }

  update(mouse, canvasWidth, canvasHeight) {
    // Mouse interaction
    if (mouse.x && mouse.y) {
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < mouse.radius) {
        const force = (mouse.radius - distance) / mouse.radius;
        const angle = Math.atan2(dy, dx);
        this.x -= Math.cos(angle) * force * 3;
        this.y -= Math.sin(angle) * force * 3;
        this.size = this.baseSize * (1 + force);
      } else {
        if (this.size > this.baseSize) {
          this.size -= 0.1;
        }
      }
    }

    // Move particle
    this.x += this.speedX;
    this.y += this.speedY;

    // Bounce off edges
    if (this.x < 0 || this.x > canvasWidth) {
      this.speedX *= -1;
      this.x = Math.max(0, Math.min(canvasWidth, this.x));
    }
    if (this.y < 0 || this.y > canvasHeight) {
      this.speedY *= -1;
      this.y = Math.max(0, Math.min(canvasHeight, this.y));
    }
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

// Initialize particle system when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Check if user prefers reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  if (!prefersReducedMotion) {
    // Initialize particles for hero section
    const heroParticles = new ParticleSystem('particleCanvas', {
      particleCount: window.innerWidth < 768 ? 40 : 80,
      particleColor: 'rgba(6, 182, 212, 0.8)',
      lineColor: 'rgba(6, 182, 212, 0.3)',
      particleSize: 2,
      speedFactor: 0.5,
      connectionDistance: 120,
      mouseInteraction: true
    });
  }
});

// Dark mode support - update particle colors
document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      // Particle colors will automatically adjust via CSS opacity
    });
  }
});
