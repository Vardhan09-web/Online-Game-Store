import React from 'react';
import { Link } from 'react-router-dom';
import GameCarousel from '../components/GameCarousel';
import GameGrid from '../components/GameGrid';
import CategoryMenu from '../components/CategoryMenu';

const shootingGames = [
  {
    id: 1,
    title: 'Garena Free Fire',
    description: 'A popular battle royale game with fast-paced action and unique characters.',
    demoLink: '/demo/garena-free-fire',
    image: 'https://images.unsplash.com/photo-1555685812-4b74313f1af5?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 2,
    title: 'Call of Duty: Mobile',
    description: 'A mobile version of the iconic franchise offering multiplayer modes and battle royale.',
    demoLink: '/demo/cod-mobile',
    image: 'https://images.unsplash.com/photo-1610113258740-4c19af0b2a92?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 3,
    title: 'Battlegrounds Mobile India (BGMI)',
    description: 'A battle royale game with immersive maps and realistic combat.',
    demoLink: '/demo/bgmi',
    image: 'https://images.unsplash.com/photo-1605460375648-278bcbd579a6?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 4,
    title: 'Modern Combat 5: Blackout',
    description: 'A campaign-driven first-person shooter with multiplayer modes.',
    demoLink: '/demo/modern-combat-5',
    image: 'https://images.unsplash.com/photo-1587304804386-4bfac9ed4d9e?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 5,
    title: 'Sniper 3D Assassin',
    description: 'A sniper shooting game with various missions and realistic graphics.',
    demoLink: '/demo/sniper-3d-assassin',
    image: 'https://images.unsplash.com/photo-1520024146164-1d4fcac027d2?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 6,
    title: 'Counter-Strike: Global Offensive (CS:GO)',
    description: 'A tactical first-person shooter with competitive team-based gameplay.',
    demoLink: '/demo/csgo',
    image: 'https://images.unsplash.com/photo-1601197198053-171019c8d6e8?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 7,
    title: 'Valorant',
    description: 'A free-to-play tactical FPS combining precise gunplay with hero abilities.',
    demoLink: '/demo/valorant',
    image: 'https://images.unsplash.com/photo-1585139706546-f052999c9193?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 8,
    title: 'Call of Duty: Warzone',
    description: 'A free-to-play battle royale game with large-scale maps.',
    demoLink: '/demo/warzone',
    image: 'https://images.unsplash.com/photo-1581276879432-f1f0637c6e87?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 9,
    title: 'Apex Legends',
    description: 'A squad-based battle royale game with unique characters and abilities.',
    demoLink: '/demo/apex-legends',
    image: 'https://images.unsplash.com/photo-1552827802-8f90a935cbc8?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 10,
    title: 'Overwatch 2',
    description: 'A fast-paced hero shooter with diverse characters and team-based objectives.',
    demoLink: '/demo/overwatch-2',
    image: 'https://images.unsplash.com/photo-1585123093587-276a3e9a7c2b?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 11,
    title: 'Halo Infinite',
    description: 'A sci-fi first-person shooter with a gripping campaign and competitive multiplayer.',
    demoLink: '/demo/halo-infinite',
    image: 'https://images.unsplash.com/photo-1608589649860-c4d68bbf0799?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 12,
    title: 'Far Cry 6',
    description: 'An open-world FPS with engaging storytelling and tactical combat.',
    demoLink: '/demo/far-cry-6',
    image: 'https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 13,
    title: 'Rainbow Six Siege',
    description: 'A tactical FPS focused on close-quarter combat and teamwork.',
    demoLink: '/demo/rainbow-six-siege',
    image: 'https://images.unsplash.com/photo-1610887651551-3ffcee50303e?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 14,
    title: 'Doom Eternal',
    description: 'A fast-paced FPS where you fight demons in an intense campaign.',
    demoLink: '/demo/doom-eternal',
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b7?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 15,
    title: 'Battlefield 2042',
    description: 'A large-scale multiplayer FPS with vehicles and destructible environments.',
    demoLink: '/demo/battlefield-2042',
    image: 'https://images.unsplash.com/photo-1560896944-09d54f44ed23?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 16,
    title: 'House of the Dead',
    description: 'A zombie shooting game, popular in gaming arcades.',
    demoLink: '/demo/house-of-the-dead',
    image: 'https://images.unsplash.com/photo-1583943977905-5c1fc484e18d?auto=format&fit=crop&w=500&q=80',
  },
];


export default function ShootingPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <main>
        <GameCarousel category="Shooting" />
        <CategoryMenu />

        <div className="text-center my-6">
          <Link to="/shooting" className="text-blue-400 hover:text-blue-300 transition">
            Show More Shooting Games
          </Link>
        </div>

        <div className="p-8">
          <h2 className="text-2xl font-semibold text-white mb-6">Featured Shooting Games</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {shootingGames.map((game) => (
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
