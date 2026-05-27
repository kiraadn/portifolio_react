import { useEffect, useRef } from 'react';

class Particle {
  constructor(x, y, directionX, directionY, size, color) {
    this.x = x;
    this.y = y;
    this.directionX = directionX;
    this.directionY = directionY;
    this.size = size;
    this.color = color;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  update(ctx, width, height) {
    if (this.x > width || this.x < 0) this.directionX = -this.directionX;
    if (this.y > height || this.y < 0) this.directionY = -this.directionY;
    this.x += this.directionX;
    this.y += this.directionY;
    this.draw(ctx);
  }
}

function initParticles(canvas, ctx) {
  const particles = [];
  const numberOfParticles = (canvas.height * canvas.width) / 9000;
  for (let i = 0; i < numberOfParticles; i += 1) {
    const size = Math.random() * 2 + 1;
    const x = Math.random() * (canvas.width - size * 4) + size * 2;
    const y = Math.random() * (canvas.height - size * 4) + size * 2;
    const directionX = Math.random() * 0.4 - 0.2;
    const directionY = Math.random() * 0.4 - 0.2;
    particles.push(new Particle(x, y, directionX, directionY, size, '#00d4ff'));
  }
  return particles;
}

function connect(ctx, particles, width, height) {
  for (let a = 0; a < particles.length; a += 1) {
    for (let b = a; b < particles.length; b += 1) {
      const dx = particles[a].x - particles[b].x;
      const dy = particles[a].y - particles[b].y;
      const distance = dx * dx + dy * dy;
      const threshold = (width / 7) * (height / 7);
      if (distance < threshold) {
        const opacityValue = 1 - distance / 20000;
        ctx.strokeStyle = `rgba(0, 212, 255,${opacityValue})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(particles[a].x, particles[a].y);
        ctx.lineTo(particles[b].x, particles[b].y);
        ctx.stroke();
      }
    }
  }
}

/**
 * Rede de partículas no canvas do hero (resize + loop de animação).
 */
export function useHeroCanvas() {
  const canvasRef = useRef(null);
  const frameRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const ctx = canvas.getContext('2d');
    if (!ctx) return undefined;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particlesRef.current = initParticles(canvas, ctx);
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesRef.current.forEach((p) => p.update(ctx, canvas.width, canvas.height));
      connect(ctx, particlesRef.current, canvas.width, canvas.height);
      frameRef.current = requestAnimationFrame(animate);
    };

    resize();
    frameRef.current = requestAnimationFrame(animate);
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return canvasRef;
}
