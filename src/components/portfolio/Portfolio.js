import { useCallback, useState } from 'react';
import { About } from './About';
import { Contact } from './Contact';
import { Footer } from './Footer';
import { Header } from './Header';
import { Hero } from './Hero';
import { ProjectsSection } from './ProjectsSection';
import { Services } from './Services';
import { Toast } from './Toast';

export function Portfolio() {
  const [toastVisible, setToastVisible] = useState(false);

  const showToast = useCallback(() => setToastVisible(true), []);
  const hideToast = useCallback(() => setToastVisible(false), []);

  return (
    <div className="portfolio-root">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <ProjectsSection />
        <Contact onSubmitSuccess={showToast} />
      </main>
      <Footer />
      <Toast visible={toastVisible} onRequestClose={hideToast} />
    </div>
  );
}
