import { useEffect, useRef, type FC } from 'react';

const STREAK_WIDTH = 8;
const STREAK_HEIGHT = 160;

function createStreakSprite(colorStops: [number, string][]) {
  const c = document.createElement('canvas');
  c.width = STREAK_WIDTH;
  c.height = STREAK_HEIGHT;
  const ctx = c.getContext('2d');
  if (!ctx) return c;
  const grad = ctx.createLinearGradient(0, 0, 0, STREAK_HEIGHT);
  colorStops.forEach(([pos, col]) => grad.addColorStop(pos, col));
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, STREAK_WIDTH, STREAK_HEIGHT);
  return c;
}

export const HollowmereOverlays: FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Pre-rendered Streak Sprites
    const ghostSpriteA = createStreakSprite([
      [0, 'rgba(190, 240, 255, 0)'],
      [0.35, 'rgba(210, 248, 255, 0.95)'],
      [1, 'rgba(120, 200, 255, 0)'],
    ]);

    const ghostSpriteB = createStreakSprite([
      [0, 'rgba(120, 190, 255, 0)'],
      [0.5, 'rgba(140, 215, 255, 0.8)'],
      [1, 'rgba(90, 150, 255, 0)'],
    ]);

    const lavaSpriteA = createStreakSprite([
      [0, 'rgba(255, 190, 80, 0)'],
      [0.4, 'rgba(255, 236, 150, 1)'],
      [1, 'rgba(255, 120, 30, 0)'],
    ]);

    const lavaSpriteB = createStreakSprite([
      [0, 'rgba(255, 120, 30, 0)'],
      [0.5, 'rgba(255, 150, 50, 0.9)'],
      [1, 'rgba(255, 80, 20, 0)'],
    ]);

    // 1. Initialize Waterfall Canvases
    const fallCanvases = Array.from(document.querySelectorAll<HTMLCanvasElement>('canvas.hollow-fall')).map((canvas) => {
      const kind = canvas.dataset.kind || 'ghost';
      const speedMultiplier = parseFloat(canvas.dataset.speed || '1');
      const isSeam = canvas.dataset.seam === '1';

      interface Streak {
        x: number;
        len: number;
        v: number;
        strokeW: number;
        opacity: number;
        phase: number;
        sprite: HTMLCanvasElement;
      }

      const streaks: Streak[] = [];
      let w = 0;
      let h = 0;

      const resize = () => {
        w = canvas.offsetWidth;
        h = canvas.offsetHeight;
        const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
        canvas.width = Math.round(w * dpr);
        canvas.height = Math.round(h * dpr);
        const ctx = canvas.getContext('2d');
        if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

        streaks.length = 0;
        const count = kind === 'ghost' ? Math.round(w / 2.2) * 2 : Math.round(w / 3) * 3;

        for (let i = 0; i < count; i++) {
          const isA = Math.random() < 0.45;
          const sprite = kind === 'ghost' ? (isA ? ghostSpriteA : ghostSpriteB) : (isA ? lavaSpriteA : lavaSpriteB);
          const strokeW = kind === 'ghost' ? 0.8 + Math.random() * 3.2 : 1 + Math.random() * 2.2;
          const len = kind === 'ghost' ? 60 + Math.random() * 220 : 30 + Math.random() * 70;
          const v = (kind === 'ghost' ? 420 + Math.random() * 340 : 195 + Math.random() * 155) * speedMultiplier;

          const x = kind === 'ghost' ? Math.random() * w : w * 0.25 + Math.random() * (w * 0.5);

          streaks.push({
            x,
            len,
            v,
            strokeW,
            opacity: 0.18 + Math.random() * 0.55,
            phase: Math.random() * (h + len),
            sprite,
          });
        }
      };

      resize();
      window.addEventListener('resize', resize);

      return {
        canvas,
        ctx: canvas.getContext('2d'),
        kind,
        isSeam,
        getW: () => w,
        getH: () => h,
        streaks,
        destroy: () => window.removeEventListener('resize', resize),
      };
    });

    // 2. Initialize Particle Canvases
    const dustCanvases = Array.from(document.querySelectorAll<HTMLCanvasElement>('canvas.hollow-dust')).map((canvas) => {
      const kind = canvas.dataset.kind;
      const total = parseInt(canvas.dataset.count || '50', 10);
      const bx = parseFloat(canvas.dataset.x || '0') / 100;
      const by = parseFloat(canvas.dataset.y || '0') / 100;
      const bw = parseFloat(canvas.dataset.w || '100') / 100;
      const bh = parseFloat(canvas.dataset.h || '100') / 100;

      interface Particle {
        u: number;
        v: number;
        r: number;
        phase: number;
        speed: number;
      }

      const particles: Particle[] = [];
      let cw = 0;
      let ch = 0;

      const resize = () => {
        cw = canvas.offsetWidth;
        ch = canvas.offsetHeight;
        const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
        canvas.width = Math.round(cw * dpr);
        canvas.height = Math.round(ch * dpr);
        const ctx = canvas.getContext('2d');
        if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

        particles.length = 0;
        for (let i = 0; i < total; i++) {
          particles.push({
            u: bx + Math.random() * bw,
            v: by + Math.random() * bh,
            r: Math.random(),
            phase: Math.random() * Math.PI * 2,
            speed: 0.4 + Math.random() * 0.8,
          });
        }
      };

      resize();
      window.addEventListener('resize', resize);

      return {
        canvas,
        ctx: canvas.getContext('2d'),
        kind,
        getW: () => cw,
        getH: () => ch,
        bx,
        by,
        bw,
        bh,
        particles,
        destroy: () => window.removeEventListener('resize', resize),
      };
    });

    // 3. Initialize Ghost Sprites with Cursor Repulsion
    let mouseX = -1000;
    let mouseY = -1000;
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const ghosts = Array.from(document.querySelectorAll<HTMLElement>('.hollow-sprite.hollow-ghost')).map((el) => {
      const anchorX = parseFloat(el.dataset.gx || '50');
      const anchorY = parseFloat(el.dataset.gy || '50');
      const phase = Math.random() * Math.PI * 2;
      return { el, anchorX, anchorY, phase, pushX: 0, pushY: 0 };
    });

    // 4. Initialize Bat Sprites
    const bats = Array.from(document.querySelectorAll<HTMLElement>('.hollow-sprite.hollow-bat')).map((el) => {
      const y0 = parseFloat(el.dataset.y0 || '20');
      const duration = parseFloat(el.dataset.speed || '12');
      const scale = parseFloat(el.dataset.scale || '2');
      const offset = Math.random();
      let flapTimer = 0;
      let isDown = false;
      return { el, y0, duration, scale, offset, flapTimer, isDown };
    });

    // 5. Main 60 FPS Render Loop
    let animId: number;
    let lastTime = performance.now();
    let simTime = 0;

    const render = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;
      simTime += dt;

      const viewportHeight = window.innerHeight;

      // Render Falls
      fallCanvases.forEach(({ canvas, ctx, kind, isSeam, getW, getH, streaks }) => {
        if (!ctx) return;
        const rect = canvas.getBoundingClientRect();
        if (rect.bottom < -50 || rect.top > viewportHeight + 50) return;

        const w = getW();
        const h = getH();
        ctx.clearRect(0, 0, w, h);

        if (isSeam) {
          const bodyGrad = ctx.createLinearGradient(0, 0, w, 0);
          bodyGrad.addColorStop(0, 'rgba(80,150,255,0)');
          bodyGrad.addColorStop(0.18, 'rgba(90,175,255,0.7)');
          bodyGrad.addColorStop(0.5, 'rgba(175,238,255,0.96)');
          bodyGrad.addColorStop(0.82, 'rgba(90,175,255,0.7)');
          bodyGrad.addColorStop(1, 'rgba(80,150,255,0)');
          ctx.fillStyle = bodyGrad;
          ctx.fillRect(0, 0, w, h);
        }

        ctx.globalCompositeOperation = 'lighter';

        for (let i = 0; i < streaks.length; i++) {
          const s = streaks[i];
          const y = ((simTime * s.v + s.phase) % (h + s.len)) - s.len;

          let alpha = s.opacity;
          if (kind === 'ghost') {
            const edgeDist = Math.abs(s.x / w - 0.5) * 2;
            alpha *= 1 - Math.pow(edgeDist, 2) * 0.6;
          }

          ctx.globalAlpha = Math.max(0, Math.min(1, alpha));
          ctx.drawImage(s.sprite, s.x - s.strokeW / 2, y, s.strokeW, s.len);
          ctx.drawImage(s.sprite, s.x - s.strokeW / 2, y - (h + s.len), s.strokeW, s.len);
        }

        ctx.globalAlpha = 1;
        ctx.globalCompositeOperation = 'source-over';
      });

      // Render Dust Particles
      dustCanvases.forEach(({ canvas, ctx, kind, getW, getH, bx, by, bw, bh, particles }) => {
        if (!ctx) return;
        const rect = canvas.getBoundingClientRect();
        if (rect.bottom < -50 || rect.top > viewportHeight + 50) return;

        const w = getW();
        const h = getH();
        ctx.clearRect(0, 0, w, h);

        if (kind === 'wisp') {
          for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            p.v -= 0.02 * p.speed * dt;
            if (p.v < 0.35) {
              p.v = 0.98;
              p.u = 0.2 + Math.random() * 0.6;
            }
            const sway = Math.sin(simTime * 2 + p.phase) * 0.012;
            const px = (p.u + sway) * w;
            const py = p.v * h;
            const rad = 0.8 + p.r * 1.8;
            const riseRatio = Math.max(0, Math.min((0.98 - p.v) / 0.25, 1));
            const pulse = Math.abs(Math.sin(2 * simTime + p.phase));
            ctx.fillStyle = 'rgb(190, 240, 255)';
            ctx.globalAlpha = riseRatio * pulse * 0.85;
            ctx.beginPath();
            ctx.arc(px, py, rad, 0, Math.PI * 2);
            ctx.fill();
          }
        } else if (kind === 'mote') {
          for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            p.v -= 0.008 * p.speed * dt;
            if (p.v < 0) p.v += 1;
            const sway = Math.sin(simTime * 1.5 + p.phase) * 0.02;
            const px = (p.u + sway) * w;
            const py = p.v * h;
            const rad = 0.6 + p.r * 1.4;
            ctx.fillStyle = 'rgb(170, 225, 255)';
            ctx.globalAlpha = 0.25 + p.r * 0.5;
            ctx.beginPath();
            ctx.arc(px, py, rad, 0, Math.PI * 2);
            ctx.fill();
          }
        } else if (kind === 'spray') {
          for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            const life = (simTime * p.speed * 0.8 + p.phase) % 1;
            const offsetX = (p.r - 0.5) * 0.6 * bw;
            const offsetY = Math.pow(life, 2) * 0.9 * bh;
            const px = (bx + bw * 0.5 + offsetX) * w;
            const py = (by + offsetY) * h;
            const rad = 0.7 + p.r * 1.6;
            ctx.fillStyle = 'rgb(200, 245, 255)';
            ctx.globalAlpha = Math.max(0, 1 - life);
            ctx.beginPath();
            ctx.arc(px, py, rad, 0, Math.PI * 2);
            ctx.fill();
          }
        } else if (kind === 'bubble') {
          for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            const life = (simTime * p.speed * 0.16 + p.phase) % 1;
            const wobble = Math.sin(1.4 * simTime + p.phase) * 0.03 * bw;
            const px = (p.u + wobble) * w;
            const py = (by + bh * (1 - life)) * h;
            const rad = (2 + p.r * 7) * (w / 1440);
            const a = Math.sin(life * Math.PI) * 0.9;

            const bGrad = ctx.createRadialGradient(px - rad * 0.3, py - rad * 0.3, rad * 0.1, px, py, rad);
            bGrad.addColorStop(0, `rgba(255, 240, 180, ${a})`);
            bGrad.addColorStop(0.55, `rgba(255, 170, 70, ${a * 0.55})`);
            bGrad.addColorStop(1, 'transparent');

            ctx.fillStyle = bGrad;
            ctx.beginPath();
            ctx.arc(px, py, rad, 0, Math.PI * 2);
            ctx.fill();
          }
        } else if (kind === 'shimmer') {
          for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            const a = Math.max(0, Math.sin(simTime * (1.2 + 2 * p.r) + p.phase)) * 0.8;
            const spread = 0.3 + ((p.v - by) / bh) * 0.7;
            const px = (bx + (p.u - bx) * spread) * w;
            const py = p.v * h;
            const len = 12 + p.r * 20;

            ctx.fillStyle = `rgba(255, 240, 205, ${a})`;
            ctx.fillRect(px - len / 2, py, len, 1.2);
          }
        }
        ctx.globalAlpha = 1;
      });

      // Update Ghost Sprites with Repulsion
      ghosts.forEach((g) => {
        const parentScene = g.el.closest('.hollow-scene');
        if (!parentScene) return;
        const sceneRect = parentScene.getBoundingClientRect();
        const sceneW = sceneRect.width;
        const sceneH = sceneRect.height;

        const floatX = Math.sin(0.35 * simTime + g.phase) * (sceneW * 0.012);
        const floatY = Math.sin(0.9 * simTime + g.phase) * (sceneH * 0.014);

        const currentScreenX = sceneRect.left + (g.anchorX / 100) * sceneW + floatX + g.pushX;
        const currentScreenY = sceneRect.top + (g.anchorY / 100) * sceneH + floatY + g.pushY;

        const dx = currentScreenX - mouseX;
        const dy = currentScreenY - mouseY;
        const dist = Math.hypot(dx, dy);

        let targetPushX = 0;
        let targetPushY = 0;
        if (dist < 260 && dist > 1) {
          const force = Math.pow(1 - dist / 260, 1.5) * 90;
          targetPushX = (dx / dist) * force;
          targetPushY = (dy / dist) * force;
        }

        const easePush = 1 - Math.exp(-3 * dt);
        g.pushX += (targetPushX - g.pushX) * easePush;
        g.pushY += (targetPushY - g.pushY) * easePush;

        const totalX = (g.anchorX / 100) * sceneW + floatX + g.pushX;
        const totalY = (g.anchorY / 100) * sceneH + floatY + g.pushY;
        const rot = Math.sin(0.7 * simTime + g.phase) * 6 + (floatX + g.pushX) * 0.05;

        g.el.style.transform = `translate3d(${totalX}px, ${totalY}px, 0) translate(-50%, -50%) rotate(${rot}deg)`;
      });

      // Update Bats
      bats.forEach((b) => {
        const progress = (simTime / b.duration + b.offset) % 1;
        const xPercent = -8 + progress * 116;
        const yPercent = b.y0 + Math.sin(progress * 9 + b.offset * 6) * (1.5 + b.scale);

        b.flapTimer += dt;
        if (b.flapTimer > 0.09) {
          b.flapTimer = 0;
          b.isDown = !b.isDown;
          b.el.classList.toggle('down', b.isDown);
        }

        b.el.style.left = `${xPercent}%`;
        b.el.style.top = `${yPercent}%`;
      });

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      fallCanvases.forEach((c) => c.destroy());
      dustCanvases.forEach((c) => c.destroy());
    };
  }, []);

  return <div ref={containerRef} className="contents" />;
};
