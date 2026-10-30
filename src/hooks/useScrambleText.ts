import { useState, useEffect, useRef, useCallback } from 'react';

const CYBER_GLYPHS = '01#_<>[]{}/*+=~!?$%&^';

export function useScrambleText(targetText: string, speed = 35) {
  const [displayText, setDisplayText] = useState(targetText);
  const frameRef = useRef<number | null>(null);

  const scramble = useCallback(() => {
    let iteration = 0;
    const maxIterations = targetText.length;

    if (frameRef.current) cancelAnimationFrame(frameRef.current);

    let lastTimestamp = 0;

    const animate = (timestamp: number) => {
      if (timestamp - lastTimestamp > speed) {
        lastTimestamp = timestamp;

        setDisplayText(
          targetText
            .split('')
            .map((char, index) => {
              if (char === ' ') return ' ';
              if (index < iteration) {
                return targetText[index];
              }
              return CYBER_GLYPHS[Math.floor(Math.random() * CYBER_GLYPHS.length)];
            })
            .join('')
        );

        iteration += 1 / 2;
      }

      if (iteration <= maxIterations) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setDisplayText(targetText);
      }
    };

    frameRef.current = requestAnimationFrame(animate);
  }, [targetText, speed]);

  useEffect(() => {
    scramble();
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [scramble]);

  return { displayText, replay: scramble };
}
