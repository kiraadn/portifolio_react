import { useEffect } from 'react';
import './styles/portfolio.css';
import { Portfolio } from './components/portfolio/Portfolio';
import { site } from './data/portfolioData';

function App() {
  useEffect(() => {
    document.title = site.title;
  }, []);

  return <Portfolio />;
}

export default App;
