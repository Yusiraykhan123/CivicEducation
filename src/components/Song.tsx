import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Music, Volume2, VolumeX } from 'lucide-react';

const Song: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentVerse, setCurrentVerse] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const songLyrics = [
    {
      verse: "Bait 1",
      lyrics: [
        "Garuda Pancasila",
        "Akulah pendukungmu",
        "Patriot proklamasi",
        "Sedia berkorban untukmu"
      ]
    },
    {
      verse: "Bait 2",
      lyrics: [
        "Pancasila dasar negara",
        "Rakyat adil makmur sentosa",
        "Pribadi bangsaku",
        "Ayo maju terus"
      ]
    },
    {
      verse: "Bait 3",
      lyrics: [
        "Aku Indonesia tetap merdeka",
        "Tetap merdeka",
        "Sekali merdeka tetap merdeka",
        "Selama hayat masih dikandung badan"
      ]
    }
  ];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    
    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', () => setIsPlaying(false));

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', () => setIsPlaying(false));
    };
  }, []);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      try {
        await audio.play();
      } catch (error) {
        console.error('Error playing audio:', error);
      }
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    
    const newTime = (parseFloat(e.target.value) / 100) * duration;
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const nextVerse = () => {
    setCurrentVerse((prev) => (prev + 1) % songLyrics.length);
  };

  return (
    <div className="min-h-screen p-4 pt-8 bg-gradient-to-br from-purple-50 via-blue-50 to-green-50">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <Music className="w-10 h-10 text-blue-500 mx-auto mb-2" />
          <h1 className="text-2xl md:text-3xl font-bold text-red-600 mb-2">
            🎵 Lagu Pancasila 🎵
          </h1>
          <p className="text-md text-gray-700">
            Mari bernyanyi bersama tentang Pancasila!
          </p>
        </div>

        {/* Main Content - Horizontal Layout */}
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          
          {/* Left Side - Music Player */}
          <div className="bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl shadow-lg p-5 text-white">
            {/* Hidden Audio Element */}
            <audio 
              ref={audioRef}
              src="/Garuda Pancasila - Lagu Nasional Indonesia (dengan Lirik).mp3"
              preload="metadata"
            />
            
            <div className="text-center mb-3">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-2">
                <Volume2 className={`w-8 h-8 ${isPlaying ? 'animate-pulse' : ''}`} />
              </div>
              <h2 className="text-lg font-bold mb-1">Garuda Pancasila</h2>
              <p className="text-blue-100 text-sm">Lagu Nasional Indonesia</p>
            </div>

            <div className="flex justify-center mb-3">
              <button
                onClick={togglePlay}
                className="bg-white text-blue-500 hover:bg-blue-50 rounded-full p-3 transition-all duration-300 hover:scale-105 shadow-md"
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </button>
            </div>

            {/* Progress Bar */}
            <div className="mb-3">
              <input
                type="range"
                min="0"
                max="100"
                value={duration ? (currentTime / duration) * 100 : 0}
                onChange={handleProgressChange}
                className="w-full h-2 bg-white bg-opacity-20 rounded-lg appearance-none slider"
              />
              <div className="flex justify-between text-xs text-blue-100 mt-1">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            {/* Volume Control */}
            <div className="flex items-center justify-center space-x-2">
              <button onClick={toggleMute} className="text-white hover:text-blue-200">
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                className="w-20 h-1 bg-white bg-opacity-20 rounded-lg appearance-none slider"
              />
            </div>
          </div>

          {/* Right Side - Lyrics */}
          <div className="bg-white rounded-xl shadow-lg p-5">
            <div className="text-center mb-3">
              <h3 className="text-lg font-bold text-blue-600 mb-2">
                {songLyrics[currentVerse].verse}
              </h3>
              <div className="flex justify-center space-x-2 mb-2">
                {songLyrics.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentVerse(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentVerse ? 'bg-blue-500' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="text-center space-y-1">
              {songLyrics[currentVerse].lyrics.map((line, index) => (
                <p
                  key={index}
                  className={`text-sm text-gray-700 p-2 rounded-lg transition-all duration-500 ${
                    isPlaying ? 'bg-yellow-100' : ''
                  }`}
                >
                  {line}
                </p>
              ))}
            </div>

            {/* Next Verse Button */}
            <div className="text-center mt-3">
              <button
                onClick={nextVerse}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-md"
              >
                🎵 Bait Selanjutnya
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Elements */}
        <div className="grid md:grid-cols-3 gap-3 mb-4">
          <div className="bg-red-100 rounded-lg p-3 text-center">
            <div className="text-2xl mb-1">🎵</div>
            <h4 className="font-bold text-red-700 text-sm">Mudah Diingat</h4>
            <p className="text-red-600 text-xs">Lagu yang mudah dihafal</p>
          </div>
          <div className="bg-blue-100 rounded-lg p-3 text-center">
            <div className="text-2xl mb-1">🎤</div>
            <h4 className="font-bold text-blue-700 text-sm">Mari Bernyanyi</h4>
            <p className="text-blue-600 text-xs">Nyanyikan bersama teman</p>
          </div>
          <div className="bg-yellow-100 rounded-lg p-3 text-center">
            <div className="text-2xl mb-1">❤️</div>
            <h4 className="font-bold text-yellow-700 text-sm">Cinta Pancasila</h4>
            <p className="text-yellow-600 text-xs">Dengan sepenuh hati</p>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Song;