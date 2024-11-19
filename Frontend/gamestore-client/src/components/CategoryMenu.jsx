import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Gamepad2, 
  Crosshair, 
  Swords, 
  Car, 
  Trophy, 
  Brain,
  Users,
  Rocket
} from 'lucide-react';

// Define categories with their corresponding routes and icons
const categories = [
  { name: 'Arcade', icon: Gamepad2, path: '/arcade' },
  { name: 'Shooting', icon: Crosshair, path: '/shooting' },
  { name: 'Action', icon: Swords, path: '/action' },
  { name: 'Racing', icon: Car, path: '/racing' },
  { name: 'Sports', icon: Trophy, path: '/sports' },
  { name: 'Puzzle', icon: Brain, path: '/puzzle' },
  { name: 'Multiplayer', icon: Users, path: '/multiplayer' },
  { name: 'Adventure', icon: Rocket, path: '/adventure' },
];

export default function CategoryMenu() {
  const navigate = useNavigate(); // Hook to navigate programmatically

  return (
    <div className="bg-gray-800 py-4">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => navigate(category.path)} // Navigate to the category path
              className="flex flex-col items-center justify-center p-4 rounded-lg hover:bg-gray-700 transition group"
              aria-label={category.name}
            >
              <category.icon className="w-6 h-6 text-gray-400 group-hover:text-blue-400 mb-2" />
              <span className="text-sm text-gray-300 group-hover:text-white">
                {category.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
