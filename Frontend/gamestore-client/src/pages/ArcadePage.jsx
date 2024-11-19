import React from 'react';
import { Link } from 'react-router-dom';
import GameCarousel from '../components/GameCarousel'; // Assuming this is the carousel component
import GameGrid from '../components/GameGrid'; // Assuming this is the game grid component

const arcadeGames = [
  {
    id: 1,
    title: 'Pac-Man',
    description: 'Guide Pac-Man to eat pellets while avoiding ghosts in this timeless classic.',
    demoLink: '/demo/pac-man', // Demo link
    image: 'https://images.unsplash.com/photo-1523642595783-360db29e4483?auto=format&fit=crop&w=500&q=80', // Game image
  },
  {
    id: 2,
    title: 'Space Invaders',
    description: 'Defend Earth from waves of alien invaders in this retro classic.',
    demoLink: '/demo/space-invaders',
    image: 'https://images.unsplash.com/photo-1604589341620-b646e3108bc7?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 3,
    title: 'Street Fighter II',
    description: 'Engage in intense one-on-one combat with iconic fighters.',
    demoLink: '/demo/street-fighter-ii',
    image: 'https://images.unsplash.com/photo-1603755273900-5249f5b637e6?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 4,
    title: 'Tekken',
    description: 'Experience dynamic combat in this legendary fighting game.',
    demoLink: '/demo/tekken',
    image: 'https://images.unsplash.com/photo-1522335649636-67c1e3d783c7?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 5,
    title: 'Daytona USA',
    description: 'Race through exciting tracks with high-speed multiplayer action.',
    demoLink: '/demo/daytona-usa',
    image: 'https://images.unsplash.com/photo-1586772001114-f7aa70d308c2?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 6,
    title: 'Time Crisis',
    description: 'Test your reflexes in this light gun shooting game with duck-and-cover action.',
    demoLink: '/demo/time-crisis',
    image: 'https://images.unsplash.com/photo-1570995858243-57d5c5278e2c?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 7,
    title: 'House of the Dead',
    description: 'Fight against hordes of zombies in this horror-themed shooter.',
    demoLink: '/demo/house-of-the-dead',
    image: 'https://images.unsplash.com/photo-1542062094-3294c3c8bd64?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 8,
    title: 'Dance Dance Revolution',
    description: 'Challenge your rhythm and footwork in this dancing game.',
    demoLink: '/demo/dance-dance-revolution',
    image: 'https://images.unsplash.com/photo-1533588774743-5dc348b97ff0?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 9,
    title: 'Air Hockey',
    description: 'Compete in a fast-paced game of air hockey on a smooth table.',
    demoLink: '/demo/air-hockey',
    image: 'https://images.unsplash.com/photo-1574169208507-843761748ae8?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 10,
    title: 'Mario Kart Arcade GP',
    description: 'Race with Mario and friends in fun-filled multiplayer tracks.',
    demoLink: '/demo/mario-kart',
    image: 'https://images.unsplash.com/photo-1603785697443-1f12257a4b14?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 11,
    title: 'Virtua Cop',
    description: 'Take down criminals with precision shooting in this arcade classic.',
    demoLink: '/demo/virtua-cop',
    image: 'https://images.unsplash.com/photo-1610016741235-6708a6c8e3c2?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 12,
    title: 'Sega Rally Championship',
    description: 'Race through realistic terrains in this rally game.',
    demoLink: '/demo/sega-rally',
    image: 'https://images.unsplash.com/photo-1515805671658-1c5ac2fb3a15?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 13,
    title: 'Metal Slug',
    description: 'Enjoy run-and-gun action in this thrilling side-scrolling game.',
    demoLink: '/demo/metal-slug',
    image: 'https://images.unsplash.com/photo-1574611595560-bd5f750aba92?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 14,
    title: 'Cruis\'n USA',
    description: 'Drive through scenic locations with high-speed arcade-style gameplay.',
    demoLink: '/demo/cruisn-usa',
    image: 'https://images.unsplash.com/photo-1516409145265-d3f918be68e0?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 15,
    title: 'Mortal Kombat',
    description: 'Engage in brutal combat with iconic characters and finishing moves.',
    demoLink: '/demo/mortal-kombat',
    image: 'https://images.unsplash.com/photo-1602354870425-24d27c7d1f19?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 16,
    title: 'Asteroids',
    description: 'Destroy asteroids while avoiding collisions in this space shooter.',
    demoLink: '/demo/asteroids',
    image: 'https://images.unsplash.com/photo-1581533940080-870cf53f5a38?auto=format&fit=crop&w=500&q=80',
  },
];


export default function ArcadePage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <main>
        {/* Game Carousel for Arcade Category */}
        <GameCarousel category="Arcade" />

        {/* Show More Button */}
        <div className="text-center my-6">
          <Link to="/arcade" className="text-blue-400 hover:text-blue-300 transition">
            Show More Arcade Games
          </Link>
        </div>

        {/* Display Arcade Games Grid */}
        <div className="p-8">
          <h2 className="text-2xl font-semibold text-white mb-6">Featured Arcade Games</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {arcadeGames.map((game) => (
              <div key={game.id} className="bg-gray-800 rounded-lg p-4 hover:transform hover:scale-105 transition duration-300">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-medium text-white">{game.title}</h3>
                <p className="text-gray-400 text-sm">{game.description}</p>
                <div className="mt-4">
                  <Link to={game.demoLink} className="text-blue-400 hover:text-blue-300 transition">
                    Play Demo
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
