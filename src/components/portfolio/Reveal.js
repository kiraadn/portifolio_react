import { useInView } from '../../hooks/useInView';

export function Reveal({ children, className = '' }) {
  const [ref, inView] = useInView(0.15);
  const classes = ['reveal', inView ? 'active' : '', className].filter(Boolean).join(' ');

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  );
}
