import { useEffect, useRef, type FC } from 'react';

/**
 * OrbitHeroBackground
 * -------------------
 * Fixed full-page space video that sits behind ALL sections.
 * The video is pinned to the viewport (position: fixed) so it's always
 * visible through the glassmorphism panels as users scroll down.
 *
 * Video: 1664×1248, 9 s loop — planet, moons, satellites, stars
 * Poster: same artwork as a still image (PNG fallback)
 */
export const OrbitHeroBackground: FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;

    const play = () => {
      if (v.paused) {
        v.play().catch(() => {
          // Swallow — user gesture will resume
        });
      }
    };

    play();
    v.addEventListener('canplay', play);

    const onVisibility = () => {
      if (document.visibilityState === 'visible') play();
    };
    document.addEventListener('visibilitychange', onVisibility);

    // First-interaction fallback for strict autoplay policies
    const once = { once: true, passive: true } as const;
    const onInteract = () => play();
    window.addEventListener('pointerdown', onInteract, once);
    window.addEventListener('touchstart', onInteract, once);
    window.addEventListener('scroll', onInteract, once);

    return () => {
      v.removeEventListener('canplay', play);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className="orbit-fixed-sky"
      aria-hidden="true"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster="https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/0bf7409c-9fa2-4bef-a49d-34903dcc91ad.png"
      src="https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/4b73c700-3112-4c07-bd48-0af2893dff7c.mp4"
    />
  );
};
