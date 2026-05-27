import { useEffect, useState } from 'react';

/**
 * Efeito máquina de escrever para lista de frases (roles).
 */
export function useTypewriter(roles, options = {}) {
  const pauseEnd = options.pauseEnd ?? 2000;
  const pauseBetween = options.pauseBetween ?? 500;
  const typeSpeed = options.typeSpeed ?? 100;
  const deleteSpeed = options.deleteSpeed ?? 50;

  const [text, setText] = useState('');

  useEffect(() => {
    if (!roles?.length) return undefined;

    let cancelled = false;
    let timeoutId;
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const tick = () => {
      if (cancelled) return;

      const current = roles[roleIndex];
      let delay = typeSpeed;

      if (!isDeleting) {
        if (charIndex < current.length) {
          charIndex += 1;
          setText(current.slice(0, charIndex));
          delay = typeSpeed;
        } else {
          isDeleting = true;
          delay = pauseEnd;
        }
      } else if (charIndex > 0) {
        charIndex -= 1;
        setText(current.slice(0, charIndex));
        delay = deleteSpeed;
      } else {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        delay = pauseBetween;
      }

      timeoutId = setTimeout(tick, delay);
    };

    timeoutId = setTimeout(tick, typeSpeed);

    return () => {
      cancelled = true;
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [roles, pauseEnd, pauseBetween, typeSpeed, deleteSpeed]);

  return text;
}
