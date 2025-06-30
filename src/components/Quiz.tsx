import React, { useState } from 'react';
import { HelpCircle, Trophy, RotateCcw, Star } from 'lucide-react';
import { quizData } from '../utils/quizData';

const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const nextQuestion = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate final score
      let finalScore = 0;
      selectedAnswers.forEach((answer, index) => {
        if (answer === quizData[index].correctAnswer) {
          finalScore++;
        }
      });
      setScore(finalScore);
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setScore(0);
  };

  const getScoreMessage = () => {
    const percentage = (score / quizData.length) * 100;
    if (percentage >= 80) return { message: "Luar biasa! Kamu sangat memahami Pancasila!", emoji: "🏆", color: "text-yellow-600" };
    if (percentage >= 60) return { message: "Bagus! Kamu cukup memahami Pancasila!", emoji: "🌟", color: "text-blue-600" };
    return { message: "Terus belajar! Kamu pasti bisa lebih baik!", emoji: "💪", color: "text-green-600" };
  };

  if (showResults) {
    const scoreInfo = getScoreMessage();
    return (
      <div className="min-h-screen p-4 pt-8 flex items-center justify-center">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <Trophy className="w-20 h-20 text-yellow-500 mx-auto mb-6 animate-bounce" />
            <h2 className="text-3xl font-bold text-blue-600 mb-4">
              Hasil Kuis Pancasila
            </h2>
            
            <div className="text-6xl mb-4">{scoreInfo.emoji}</div>
            <div className="text-4xl font-bold text-green-600 mb-4">
              {score}/{quizData.length}
            </div>
            
            <p className={`text-xl font-semibold mb-6 ${scoreInfo.color}`}>
              {scoreInfo.message}
            </p>

            {/* Detailed Results */}
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Jawaban Kamu:</h3>
              <div className="space-y-3">
                {quizData.map((question, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <span className="text-sm text-gray-700">Soal {index + 1}</span>
                    <div className="flex items-center">
                      {selectedAnswers[index] === question.correctAnswer ? (
                        <div className="flex items-center text-green-600">
                          <Star className="w-4 h-4 fill-current mr-1" />
                          <span className="text-sm font-medium">Benar</span>
                        </div>
                      ) : (
                        <div className="flex items-center text-red-500">
                          <span className="text-sm font-medium">Salah</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={resetQuiz}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <RotateCcw className="inline mr-2" />
              Coba Lagi
            </button>
          </div>
        </div>
      </div>
    );
  }

  const question = quizData[currentQuestion];
  const isAnswered = selectedAnswers[currentQuestion] !== undefined;

  return (
    <div className="min-h-screen p-4 pt-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <HelpCircle className="w-16 h-16 text-purple-500 mx-auto mb-4 animate-pulse" />
          <h1 className="text-3xl md:text-4xl font-bold text-red-600 mb-2">
            Kuis Pancasila
          </h1>
          <p className="text-lg text-gray-700">
            Uji pemahamanmu tentang Pancasila!
          </p>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium text-gray-600">
              Soal {currentQuestion + 1} dari {quizData.length}
            </span>
            <span className="text-sm font-medium text-gray-600">
              {Math.round(((currentQuestion + 1) / quizData.length) * 100)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-500"
              style={{ width: `${((currentQuestion + 1) / quizData.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-6">
          <div className="text-center mb-8">
            {question.image && (
              <div className="text-6xl mb-6 animate-pulse">
                {question.image}
              </div>
            )}
            <h2 className="text-xl md:text-2xl font-bold text-blue-600 mb-6">
              {question.question}
            </h2>
          </div>

          {/* Answer Options */}
          <div className="space-y-4">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-300 ${
                  selectedAnswers[currentQuestion] === index
                    ? 'bg-blue-100 border-blue-500 text-blue-800 scale-105'
                    : 'bg-gray-50 border-gray-200 hover:bg-blue-50 hover:border-blue-300 text-gray-700'
                }`}
              >
                <div className="flex items-center">
                  <span className="flex items-center justify-center w-8 h-8 bg-blue-500 text-white rounded-full font-bold mr-4">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="font-medium">{option}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Hint */}
          {question.hint && (
            <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg">
              <p className="text-sm text-yellow-800">
                <strong>💡 Petunjuk:</strong> {question.hint}
              </p>
            </div>
          )}
        </div>

        {/* Next Button */}
        <div className="text-center">
          <button
            onClick={nextQuestion}
            disabled={!isAnswered}
            className={`font-bold py-3 px-8 rounded-xl transition-all duration-300 ${
              isAnswered
                ? 'bg-green-500 hover:bg-green-600 text-white hover:scale-105 shadow-lg'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {currentQuestion < quizData.length - 1 ? '➡️ Soal Selanjutnya' : '🏁 Selesai'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;