import React from 'react';
import { Home, BookOpen, Music, Gamepad2, HelpCircle } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, onNavigate }) => {
  const navItems = [
    { id: 'hero', label: 'Beranda', icon: Home, emoji: '🏠', color: 'from-pink-400 to-red-400' },
    { id: 'learning', label: 'Belajar', icon: BookOpen, emoji: '📚', color: 'from-blue-400 to-purple-400' },
    { id: 'song', label: 'Lagu', icon: Music, emoji: '🎵', color: 'from-green-400 to-teal-400' },
    { id: 'games', label: 'Permainan', icon: Gamepad2, emoji: '🎮', color: 'from-orange-400 to-yellow-400' },
    { id: 'quiz', label: 'Kuis', icon: HelpCircle, emoji: '🧠', color: 'from-purple-400 to-pink-400' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-pink-50 to-blue-50 shadow-lg border-t border-blue-200 z-50 backdrop-blur-md">
      <div className="flex justify-around items-center py-2 max-w-lg mx-auto">
        {navItems.map(({ id, label, icon: Icon, emoji, color }) => (
          <button
            key={id}
            onClick={() => onNavigate(id)}
            className={`relative flex flex-col items-center p-2 rounded-lg transition-all duration-300 ${
              activeSection === id
                ? `bg-gradient-to-r ${color} text-white scale-105 shadow-md`
                : 'text-gray-600 hover:bg-white/50 hover:text-blue-600'
            }`}
          >
            {/* Emoji for active state only */}
            {activeSection === id && (
              <div className="absolute -top-1 -right-1 text-xs">
                {emoji}
              </div>
            )}
            
            <Icon size={20} />
            <span className={`text-xs mt-1 font-medium`}>
              {label}
            </span>
            
            {/* Active indicator */}
            {activeSection === id && (
              <div className="absolute -bottom-1 w-8 h-1 bg-white rounded-full"></div>
            )}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;