import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { pancasilaData } from '../utils/pancasilaData';

const Learning: React.FC = () => {
  const [currentSila, setCurrentSila] = useState(0);

  const nextSila = () => {
    setCurrentSila((prev) => (prev + 1) % pancasilaData.length);
  };

  const prevSila = () => {
    setCurrentSila((prev) => (prev - 1 + pancasilaData.length) % pancasilaData.length);
  };

  const sila = pancasilaData[currentSila];

  return (
    <div className="min-h-screen p-4 pt-8 bg-gradient-to-br from-purple-50 via-blue-50 to-green-50 relative overflow-hidden">
      {/* Animated Background - reduced */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute text-lg opacity-10 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${6 + Math.random() * 3}s`
            }}
          >
            {['📚', '⭐'][Math.floor(Math.random() * 2)]}
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header with Fun Animation */}
        <div className="text-center mb-6">
          <div className="flex justify-center mb-3">
            <div className="text-4xl animate-bounce">📖</div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 bg-clip-text text-transparent mb-3">
            🌟 Belajar Pancasila 🌟
          </h1>
          <p className="text-lg text-gray-700 bg-white/60 p-3 rounded-2xl backdrop-blur-sm shadow-md">
            Mari kenali lima sila Pancasila satu per satu dengan cara yang menyenangkan! 🚀
          </p>
        </div>

        {/* Sila Navigation with Fun Buttons */}
        <div className="flex justify-center mb-6">
          <div className="flex space-x-2 bg-white/60 p-3 rounded-2xl backdrop-blur-sm shadow-md">
            {pancasilaData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSila(index)}
                className={`relative w-12 h-12 rounded-full font-bold text-lg transition-all duration-300 ${
                  index === currentSila
                    ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white scale-105 shadow-md'
                    : 'bg-gradient-to-r from-gray-200 to-gray-300 text-gray-700 hover:bg-gradient-to-r hover:from-blue-200 hover:to-purple-200'
                }`}
              >
                <span className="relative z-10">{index + 1}</span>
                {index === currentSila && (
                  <div className="absolute -top-1 -right-1 text-xs">⭐</div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content with Horizontal Layout */}
        <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-lg p-6 mb-6 border border-blue-200 relative">
          <div className="absolute top-4 right-4 text-lg opacity-50">🌈</div>
          
          <div className="grid md:grid-cols-3 gap-6 items-start">
            {/* Image Column - Smaller */}
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-3 bg-white rounded-xl shadow-md overflow-hidden border border-yellow-300 hover:scale-105 transition-transform duration-300">
                <img 
                  src={sila.image} 
                  alt={`Sila ke-${currentSila + 1}: ${sila.title}`}
                  className="w-full h-full object-contain p-2"
                />
              </div>
              
              {/* Star Progress */}
              <div className="flex justify-center space-x-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 transition-all duration-300 ${
                      i <= currentSila ? 'text-yellow-400 fill-current' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              {/* Badge */}
              <div className="inline-block bg-gradient-to-r from-green-400 to-blue-400 text-white px-3 py-1 rounded-full font-bold text-sm shadow-sm">
                Sila #{currentSila + 1}
              </div>
            </div>

            {/* Content Column - Medium */}
            <div className="space-y-3">
              <div>
                <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  Sila ke-{currentSila + 1}
                </h2>
                <h3 className="text-lg font-bold text-red-600 mb-2 bg-yellow-100 p-2 rounded-lg shadow-sm border-l-4 border-red-500">
                  {sila.title}
                </h3>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-3 rounded-lg shadow-sm border border-blue-200">
                <p className="text-md text-gray-700 leading-relaxed">
                  {sila.description}
                </p>
              </div>
            </div>

            {/* Examples Column - Medium */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-3 shadow-sm border border-green-200 h-fit">
              <div className="flex items-center mb-2">
                <span className="text-md mr-2">💡</span>
                <h4 className="font-bold text-green-800 text-md">Contoh:</h4>
              </div>
              <ul className="space-y-1">
                {sila.examples.slice(0, 3).map((example, index) => (
                  <li key={index} className="flex items-start bg-white p-2 rounded-lg shadow-sm">
                    <span className="text-green-500 mr-2 text-sm">🌟</span>
                    <span className="text-green-700 flex-1 text-sm">{example}</span>
                  </li>
                ))}
                {sila.examples.length > 3 && (
                  <li className="text-center text-green-600 text-sm">
                    ...dan {sila.examples.length - 3} contoh lainnya!
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>

        {/* Navigation Buttons with Simple Design */}
        <div className="flex justify-between items-center bg-white/60 p-4 rounded-2xl backdrop-blur-sm shadow-lg">
          <button
            onClick={prevSila}
            disabled={currentSila === 0}
            className={`flex items-center font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-md ${
              currentSila === 0 
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                : 'bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white hover:scale-105'
            }`}
          >
            <ChevronLeft className="mr-2" />
            <span>Sebelumnya</span>
          </button>
          
          {/* Progress Dots */}
          <div className="flex space-x-2">
            {pancasilaData.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSila 
                    ? 'bg-gradient-to-r from-red-500 to-pink-500 scale-125' 
                    : 'bg-gray-300'
                } ${index < currentSila ? 'bg-green-400' : ''}`}
              />
            ))}
          </div>

          <button
            onClick={nextSila}
            disabled={currentSila === pancasilaData.length - 1}
            className={`flex items-center font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-md ${
              currentSila === pancasilaData.length - 1
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white hover:scale-105'
            }`}
          >
            <span>Selanjutnya</span>
            <ChevronRight className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Learning;