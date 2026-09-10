import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LandingPage } from './pages/LandingPage';
import { ContactPage } from './pages/ContactPage';

export const App: React.FC = () => {
  const [activePage, setActivePage] = useState<'landing' | 'contact'>('landing');

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col justify-between">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      {activePage === 'landing' ? (
        <LandingPage onContactClick={() => setActivePage('contact')} />
      ) : (
        <ContactPage />
      )}
      <Footer />
    </div>
  );
};

export default App;