import { useEffect, useRef, type FC } from 'react';
import { useTheme } from '../hooks/useTheme';

export const LanternCursor: FC = () => {
  const lampRef = useRef<HTMLDivElement | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const lamp = lampRef.current;
    if (!lamp) return;

    let mouseX = -1000;
    let mouseY = -1000;
    let curX = -1000;
    let curY = -1000;
    let animId: number;
    let lastTime = performance.now();

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    const render = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      // Smooth lag: 1 - e^(-10 * dt)
      const factor = 1 - Math.exp(-10 * dt);
      curX += (mouseX - curX) * factor;
      curY += (mouseY - curY) * factor;

      lamp.style.transform = `translate3d(${curX - 260}px, ${curY - 260}px, 0)`;

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const isDark = theme === 'dark';

  return (
    <div
      ref={lampRef}
      className="fixed top-0 left-0 w-[520px] h-[520px] rounded-full pointer-events-none z-50 mix-blend-screen opacity-0 sm:opacity-100 transition-opacity duration-500 will-change-transform"
      style={{
        background: isDark
          ? 'radial-gradient(closest-side, rgba(255, 170, 90, 0.18), rgba(255, 140, 70, 0.07) 55%, transparent)'
          : 'radial-gradient(closest-side, rgba(99, 102, 241, 0.12), rgba(34, 211, 238, 0.05) 55%, transparent)',
      }}
      aria-hidden="true"
    />
  );
};
