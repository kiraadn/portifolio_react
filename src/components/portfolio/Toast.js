import { useEffect } from 'react';
import { toast as toastData } from '../../data/portfolioData';

export function Toast({ visible, onRequestClose }) {
  useEffect(() => {
    if (!visible) return undefined;
    const id = window.setTimeout(() => {
      onRequestClose?.();
    }, toastData.durationMs);
    return () => window.clearTimeout(id);
  }, [visible, onRequestClose]);

  return (
    <div id="toast" className={`toast${visible ? ' show' : ''}`} role="status" aria-live="polite">
      <i className={toastData.iconClass} aria-hidden />
      <span>{toastData.message}</span>
    </div>
  );
}
