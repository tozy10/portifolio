import { useEffect, useRef, useState } from 'react';
import prefersReducedMotion from './prefersReducedMotion';

// Counts from 0 to `target` the first time the element scrolls into view.
// Starts at `target` so the pre-rendered HTML shows the real number.
export default function useCountUp(target, duration = 1400) {
  const ref = useRef(null);
  const [value, setValue] = useState(target);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion()) return;
    setValue(0);

    let frame;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();

      const start = performance.now();
      const step = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(Math.round(eased * target));
        if (progress < 1) frame = requestAnimationFrame(step);
      };
      frame = requestAnimationFrame(step);
    }, { threshold: 0.4 });

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [target, duration]);

  return [ref, value];
}
