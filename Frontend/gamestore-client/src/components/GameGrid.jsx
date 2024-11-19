import React from 'react';
import { Star } from 'lucide-react';

const games = [
  {
    id: 1,
    title: "Neon Hunters",
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&w=600&q=80",
    price: "$29.99",
    rating: 4.5,
    tags: ["Action", "Multiplayer"]
  },
  {
    id: 2,
    title: "Space Warriors",
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=600&q=80",
    price: "$39.99",
    rating: 4.8,
    tags: ["Shooting", "Sci-Fi"]
  },
  {
    id: 3,
    title: "Medieval Quest",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80",
    price: "$44.99",
    rating: 4.6,
    tags: ["RPG", "Adventure"]
  },
  {
    id: 4,
    title: "Cyber Racers",
    image: "https://tse3.mm.bing.net/th?id=OIP.GIWrDT1zNcX-wzWmY8t2kgAAAA&pid=Api&P=0&h=180",
    price: "$34.99",
    rating: 4.7,
    tags: ["Racing", "Multiplayer"]
  }
];

export default function GameGrid() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold text-white mb-8">Featured Games</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {games.map((game) => (
          <div 
            key={game.id} 
            className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition duration-300"
          >
            <img
              src={game.image}
              alt={game.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-white mb-2">{game.title}</h3>
              <div className="flex items-center mb-2">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="text-gray-300 ml-1">{game.rating}</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {game.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs bg-gray-700 text-gray-300 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-blue-400">{game.price}</span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
