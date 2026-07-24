import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutVision from './components/AboutVision';
import Services from './components/Services';
import LettingPlan from './components/LettingPlan';
import ListingsShowcase from './components/ListingsShowcase';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Blog from './components/Blog';

function App() {
  const [view, setView] = useState('home');

  const renderView = () => {
    switch (view) {
      case 'home':
        return <Home setView={setView} />;
      case 'about':
        return <AboutVision />;
      case 'services':
        return <Services />;
      case 'letting-plan':
        return <LettingPlan />;
      case 'portfolio':
        return <ListingsShowcase />;
      case 'contact':
        return <ContactForm />;
      case 'blog':
        return <Blog />;
      default:
        return <Home setView={setView} />;
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar currentView={view} setView={setView} />
      <main style={{ flex: '1 0 auto', paddingTop: view === 'home' ? '0' : '70px', marginBottom: view === 'home' ? '70px' : '0' }}>
        {renderView()}
      </main>
      <Footer setView={setView} />
    </div>
  );
}

export default App;
