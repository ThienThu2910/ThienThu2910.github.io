import { useEffect, useRef, type FC } from 'react';
import { useTheme } from '../hooks/useTheme';

interface Wisp {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseRadius: number;
  pulsePhase: number;
  pulseSpeed: number;
  kind: 'ghost' | 'ember';
  pushX: number;
  pushY: number;
}

interface StreamStreak {
  xRatio: number;
  speed: number;
  len: number;
  strokeW: number;
  opacity: number;
  phase: number;
}

export const GhostFallsBackground: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates for repulsion
    const mouse = { x: -1000, y: -1000 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize, { passive: true });

    // Generate Floating Wisps (Ghost & Ember)
    const wispCount = Math.min(Math.floor((width * height) / 28000), 45);
    const wisps: Wisp[] = [];

    for (let i = 0; i < wispCount; i++) {
      const isEmber = Math.random() < 0.35;
      wisps.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: -(0.25 + Math.random() * 0.55), // Natural rising drift
        baseRadius: isEmber ? 1.0 + Math.random() * 1.5 : 1.2 + Math.random() * 2.2,
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.03,
        kind: isEmber ? 'ember' : 'ghost',
        pushX: 0,
        pushY: 0,
      });
    }

    // Generate Central Ghost-Light Energy Falls Stream
    const streakCount = 28;
    const streaks: StreamStreak[] = [];
    for (let i = 0; i < streakCount; i++) {
      streaks.push({
        xRatio: 0.46 + Math.random() * 0.08, // Column around center
        speed: 280 + Math.random() * 320,
        len: 80 + Math.random() * 180,
        strokeW: 1.2 + Math.random() * 2.5,
        opacity: 0.15 + Math.random() * 0.45,
        phase: Math.random() * 1200,
      });
    }

    let isVisible = true;
    const handleVisibility = () => {
      isVisible = !document.hidden;
      if (isVisible) {
        lastTime = performance.now();
        render(performance.now());
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);

    let lastTime = performance.now();
    let simTime = 0;

    const render = (now: number) => {
      if (!isVisible) return;
      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;
      simTime += dt;

      ctx.clearRect(0, 0, width, height);

      const isDark = theme === 'dark';

      // 1. Draw Vertical Ghost-Light Waterfall Column (Center Cascade)
      if (isDark) {
        ctx.save();
        ctx.globalCompositeOperation = 'lighter';

        const streamCenter = width * 0.5;
        const streamWidth = Math.min(width * 0.18, 220);

        // Soft ambient column glow
        const colGrad = ctx.createLinearGradient(streamCenter - streamWidth / 2, 0, streamCenter + streamWidth / 2, 0);
        colGrad.addColorStop(0, 'rgba(112, 224, 255, 0)');
        colGrad.addColorStop(0.3, 'rgba(112, 224, 255, 0.03)');
        colGrad.addColorStop(0.5, 'rgba(175, 238, 255, 0.06)');
        colGrad.addColorStop(0.7, 'rgba(112, 224, 255, 0.03)');
        colGrad.addColorStop(1, 'rgba(112, 224, 255, 0)');
        ctx.fillStyle = colGrad;
        ctx.fillRect(streamCenter - streamWidth / 2, 0, streamWidth, height);

        // Fast streaks
        for (let i = 0; i < streaks.length; i++) {
          const s = streaks[i];
          const sx = streamCenter - streamWidth / 2 + (s.xRatio - 0.46) / 0.08 * streamWidth;
          const sy = ((simTime * s.speed + s.phase) % (height + s.len)) - s.len;

          const streakGrad = ctx.createLinearGradient(0, sy, 0, sy + s.len);
          streakGrad.addColorStop(0, 'rgba(190, 240, 255, 0)');
          streakGrad.addColorStop(0.4, `rgba(210, 248, 255, ${s.opacity})`);
          streakGrad.addColorStop(1, 'rgba(120, 200, 255, 0)');

          ctx.fillStyle = streakGrad;
          ctx.fillRect(sx - s.strokeW / 2, sy, s.strokeW, s.len);
        }
        ctx.restore();
      }

      // 2. Draw Wisps with Cursor Repulsion
      for (let i = 0; i < wisps.length; i++) {
        const w = wisps[i];

        // Rising float motion
        w.x += w.vx;
        w.y += w.vy;

        // Wrap around bottom
        if (w.y < -20) {
          w.y = height + 20;
          w.x = Math.random() * width;
        }
        if (w.x < -20) w.x = width + 20;
        if (w.x > width + 20) w.x = -20;

        // Cursor Repulsion logic (within 240px)
        const currentPosX = w.x + w.pushX;
        const currentPosY = w.y + w.pushY;
        const dx = currentPosX - mouse.x;
        const dy = currentPosY - mouse.y;
        const dist = Math.hypot(dx, dy);

        let targetPushX = 0;
        let targetPushY = 0;

        if (dist < 240 && dist > 1) {
          const force = Math.pow(1 - dist / 240, 1.5) * 80;
          targetPushX = (dx / dist) * force;
          targetPushY = (dy / dist) * force;
        }

        // Push easing
        const pushEase = 1 - Math.exp(-3.5 * dt);
        w.pushX += (targetPushX - w.pushX) * pushEase;
        w.pushY += (targetPushY - w.pushY) * pushEase;

        w.pulsePhase += w.pulseSpeed;
        const rad = w.baseRadius + Math.sin(w.pulsePhase) * 0.5;
        const drawX = w.x + w.pushX;
        const drawY = w.y + w.pushY;

        ctx.save();
        ctx.beginPath();
        ctx.arc(drawX, drawY, Math.max(0.8, rad), 0, Math.PI * 2);

        if (isDark) {
          if (w.kind === 'ember') {
            // Warm Ember Glow
            ctx.fillStyle = 'rgba(255, 154, 60, 0.75)';
            ctx.shadowColor = '#FF9A3C';
            ctx.shadowBlur = 9;
          } else {
            // Pale Cyan Ghost Light
            ctx.fillStyle = 'rgba(175, 238, 255, 0.8)';
            ctx.shadowColor = '#70E0FF';
            ctx.shadowBlur = 10;
          }
        } else {
          // Light Mode
          ctx.fillStyle = w.kind === 'ember' ? 'rgba(245, 158, 11, 0.5)' : 'rgba(99, 102, 241, 0.45)';
          ctx.shadowColor = 'rgba(99, 102, 241, 0.2)';
          ctx.shadowBlur = 4;
        }

        ctx.fill();
        ctx.restore();
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none -z-10 transition-opacity duration-700"
      aria-hidden="true"
    />
  );
};
