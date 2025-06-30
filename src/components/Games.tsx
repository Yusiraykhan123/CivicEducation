import React, { useState } from 'react';
import { Gamepad2, Star, CheckCircle, XCircle } from 'lucide-react';
import { gameData } from '../utils/gameData';

const Games: React.FC = () => {
  const [currentGame, setCurrentGame] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [gameCompleted, setGameCompleted] = useState(false);

  const game = gameData[currentGame];

  const handleAnswer = (answerIndex: number) => {
    if (showResult) return;
    
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    
    if (answerIndex === game.correctAnswer) {
      setScore(score + 1);
    }
  };

  const nextGame = () => {
    if (currentGame < gameData.length - 1) {
      setCurrentGame(currentGame + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setGameCompleted(true);
    }
  };

  const resetGame = () => {
    setCurrentGame(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setGameCompleted(false);
  };

  if (gameCompleted) {
    return (
      <div className="min-h-screen p-4 pt-8 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <Star className="w-16 h-16 text-yellow-500 mx-auto mb-4 animate-spin" />
            <h2 className="text-3xl font-bold text-green-600 mb-4">Hebat!</h2>
            <p className="text-xl text-gray-700 mb-4">
              Kamu berhasil menyelesaikan semua permainan!
            </p>
            <div className="text-2xl font-bold text-blue-600 mb-6">
              Skor: {score}/{gameData.length}
            </div>
            <button
              onClick={resetGame}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 hover:scale-105"
            >
              🎮 Main Lagi
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 pt-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Gamepad2 className="w-16 h-16 text-green-500 mx-auto mb-4 animate-bounce" />
          <h1 className="text-3xl md:text-4xl font-bold text-red-600 mb-2">
            Permainan Pancasila
          </h1>
          <p className="text-lg text-gray-700">
            Tebak sila berdasarkan gambar dan penjelasan!
          </p>
        </div>

        {/* Progress */}
        <div className="flex justify-center mb-6">
          <div className="bg-white rounded-full p-2 shadow-lg">
            <div className="flex space-x-2">
              {gameData.map((_, index) => (
                <div
                  key={index}
                  className={`w-4 h-4 rounded-full ${
                    index < currentGame
                      ? 'bg-green-500'
                      : index === currentGame
                      ? 'bg-blue-500'
                      : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Score */}
        <div className="text-center mb-6">
          <div className="inline-block bg-yellow-100 rounded-full px-6 py-2">
            <span className="text-xl font-bold text-yellow-800">
              Skor: {score}/{gameData.length}
            </span>
          </div>
        </div>

        {/* Game Content */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-6">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4 animate-pulse">
              {game.symbol}
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4">
              Pertanyaan {currentGame + 1}
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              {game.question}
            </p>
          </div>

          {/* Answer Options */}
          <div className="grid md:grid-cols-2 gap-4">
            {game.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={showResult}
                className={`p-4 rounded-xl text-left transition-all duration-300 border-2 ${
                  showResult
                    ? index === game.correctAnswer
                      ? 'bg-green-100 border-green-500 text-green-800'
                      : selectedAnswer === index
                      ? 'bg-red-100 border-red-500 text-red-800'
                      : 'bg-gray-100 border-gray-300 text-gray-600'
                    : 'bg-blue-50 border-blue-200 hover:bg-blue-100 hover:border-blue-400 text-blue-800'
                } ${!showResult ? 'hover:scale-105' : ''}`}
              >
                <div className="flex items-center">
                  <span className="font-bold text-lg mr-3">
                    {String.fromCharCode(65 + index)}.
                  </span>
                  <span className="font-medium">{option}</span>
                  {showResult && index === game.correctAnswer && (
                    <CheckCircle className="ml-auto text-green-500 w-6 h-6" />
                  )}
                  {showResult && selectedAnswer === index && index !== game.correctAnswer && (
                    <XCircle className="ml-auto text-red-500 w-6 h-6" />
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Result */}
          {showResult && (
            <div className="mt-6 text-center">
              <div className={`p-4 rounded-xl ${
                selectedAnswer === game.correctAnswer
                  ? 'bg-green-100 text-green-800'
                  : 'bg-red-100 text-red-800'
              }`}>
                <p className="font-bold text-lg mb-2">
                  {selectedAnswer === game.correctAnswer ? '🎉 Benar!' : '😊 Belum tepat!'}
                </p>
                <p>{game.explanation}</p>
              </div>
            </div>
          )}
        </div>

        {/* Next Button */}
        {showResult && (
          <div className="text-center">
            <button
              onClick={nextGame}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
            >
              {currentGame < gameData.length - 1 ? '➡️ Pertanyaan Selanjutnya' : '🏆 Selesai'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Games;