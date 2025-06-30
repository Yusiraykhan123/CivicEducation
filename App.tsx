import { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Learning from './components/Learning';
import Song from './components/Song';
import Games from './components/Games';
import Quiz from './components/Quiz';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  const renderSection = () => {
    switch (activeSection) {
      case 'hero':
        return <Hero onNavigate={setActiveSection} />;
      case 'learning':
        return <Learning />;
      case 'song':
        return <Song />;
      case 'games':
        return <Games />;
      case 'quiz':
        return <Quiz />;
      default:
        return <Hero onNavigate={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 via-blue-50 to-green-50 relative overflow-hidden">
      {/* Minimal animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute text-lg opacity-5 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${10 + Math.random() * 5}s`
            }}
          >
            {['🌟', '⭐', '✨'][Math.floor(Math.random() * 3)]}
          </div>
        ))}
      </div>
      
      <Navigation activeSection={activeSection} onNavigate={setActiveSection} />
      <main className="pb-24 relative z-10">
        {renderSection()}
      </main>
    </div>
  );
}

export default App;