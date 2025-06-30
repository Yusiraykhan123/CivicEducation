import React, { useState, useEffect } from 'react';
import { Star, Heart } from 'lucide-react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [garudaBlink, setGarudaBlink] = useState(false);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setGarudaBlink(true);
      setTimeout(() => setGarudaBlink(false), 300);
    }, 3000);

    return () => clearInterval(blinkInterval);
  }, []);

  const handleNavigation = (section: string) => {
    console.log('Navigating to:', section); // Debug log
    onNavigate(section);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center relative">
      {/* Minimal Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute text-xl opacity-10 animate-float pointer-events-none"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${6 + Math.random() * 3}s`
            }}
          >
            {['⭐', '🌟'][Math.floor(Math.random() * 2)]}
          </div>
        ))}
      </div>

      {/* Simple floating decorations */}
      <div className="absolute top-10 left-10 pointer-events-none z-0">
        <Star className="text-yellow-400 w-6 h-6 opacity-50" />
      </div>
      <div className="absolute top-20 right-10 pointer-events-none z-0">
        <Heart className="text-red-400 w-5 h-5 opacity-50" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-30 flex flex-col items-center w-full max-w-4xl">
        {/* Pancasila Logo with Subtle Effect */}
        <div className={`mb-6 transform transition-all duration-300 ${garudaBlink ? 'scale-105' : 'scale-100'}`}>
          <div className="w-28 h-28 mx-auto mb-3 shadow-lg rounded-full overflow-hidden bg-gradient-to-br from-white to-yellow-50 border-2 border-yellow-300">
            <img 
              src="/Pancasila.png" 
              alt="Logo Pancasila" 
              className="w-full h-full object-contain p-1"
            />
          </div>
        </div>

        {/* Title with Simple Gradient */}
        <div className="mb-6">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 bg-clip-text text-transparent">
            PANCASILA
          </h1>
        </div>
           <p className="text-xl md:text-2xl text-blue-600 font-bold mb-2">
        Dasar Negara Indonesia
      </p>
        <p className="text-md text-gray-700 mb-6 max-w-md bg-white/60 p-3 rounded-xl backdrop-blur-sm shadow-md">
          Mari belajar tentang lima sila Pancasila dengan cara yang menyenangkan! ✨
        </p>

        {/* Action Buttons with Simple Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg w-full mb-6">
          <button
            type="button"
            onClick={() => handleNavigation('learning')}
            className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <div className="flex items-center justify-center space-x-2">
              <span className="text-xl">🎓</span>
              <span>Mulai Belajar</span>
            </div>
          </button>
          
          <button
            type="button"
            onClick={() => handleNavigation('games')}
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <div className="flex items-center justify-center space-x-2">
              <span className="text-xl">🎮</span>
              <span>Main Yuk!</span>
            </div>
          </button>
        </div>

        {/* Additional Fun Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-lg w-full mb-6">
          <button
            type="button"
            onClick={() => handleNavigation('song')}
            className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-md"
          >
            <div className="flex items-center justify-center space-x-2">
              <span className="text-xl">🎵</span>
              <span>Dengerin Lagu</span>
            </div>
          </button>
          
          <button
            type="button"
            onClick={() => handleNavigation('quiz')}
            className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-md"
          >
            <div className="flex items-center justify-center space-x-2">
              <span className="text-xl">🧠</span>
              <span>Kuis Seru</span>
            </div>
          </button>
        </div>

        {/* Welcome Message */}
        <div className="mt-8 p-6 bg-gradient-to-r from-yellow-100 to-blue-100 rounded-2xl border-2 border-yellow-300 max-w-md shadow-lg">
          <p className="text-yellow-800 font-bold text-lg text-center">
            🎉 Hai Adik-adik Hebat! 🎉
          </p>
          <p className="text-yellow-700 font-medium text-center mt-2">
            Yuk belajar Pancasila sambil bersenang-senang! 🌈
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;