import { useEffect, useState } from 'react';
import prefersReducedMotion from './prefersReducedMotion';

// Types each word, holds, deletes it, then moves on to the next one.
export default function useTypewriter(words, { typeMs = 75, deleteMs = 40, holdMs = 1800 } = {}) {
  const [text, setText] = useState('');

  useEffect(() => {
    if (prefersReducedMotion()) {
      setText(words[0]);
      return;
    }

    let word = 0;
    let length = 0;
    let deleting = false;
    let timer;

    const tick = () => {
      const current = words[word];
      length += deleting ? -1 : 1;
      setText(current.slice(0, length));

      if (!deleting && length === current.length) {
        deleting = true;
        timer = setTimeout(tick, holdMs);
      } else if (deleting && length === 0) {
        deleting = false;
        word = (word + 1) % words.length;
        timer = setTimeout(tick, 350);
      } else {
        timer = setTimeout(tick, deleting ? deleteMs : typeMs);
      }
    };

    timer = setTimeout(tick, 600);
    return () => clearTimeout(timer);
  }, [words, typeMs, deleteMs, holdMs]);

  return text;
}
