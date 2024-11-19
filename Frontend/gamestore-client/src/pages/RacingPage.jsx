import React from 'react';
import { Link } from 'react-router-dom';
import GameCarousel from '../components/GameCarousel';
import CategoryMenu from '../components/CategoryMenu';

const racingGames = [
  {
    id: 1,
    title: 'Asphalt 9: Legends',
    description: 'High-speed racing game with stunning graphics and a variety of cars. Features multiplayer modes and exciting tracks.',
    demoLink: '/demo/asphalt-9-legends',
    image: 'https://images.unsplash.com/photo-1565294152-f926d1e34fc7?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8Mnx8YXNwaGFsdHxlbnwwfHx8fDE2NzI2MTkwMjg&ixlib=rb-1.2.1&q=80&w=1080',
  },
  {
    id: 2,
    title: 'Need for Speed: No Limits',
    description: 'Street racing with intense action and car customization, featuring a variety of missions and challenges.',
    demoLink: '/demo/need-for-speed-no-limits',
    image: 'https://images.unsplash.com/photo-1594854798481-b63b281af6bb?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8Mnx8bmVlZC1mb3Itc3BlZWQtaW1hZ2V8ZW58fHx8fDE2NzI2Mjg3OTI&ixlib=rb-1.2.1&q=80&w=1080',
  },
  {
    id: 3,
    title: 'CarX Drift Racing 2',
    description: 'A drifting game with realistic physics, customizable cars, and multiple multiplayer modes.',
    demoLink: '/demo/carx-drift-racing-2',
    image: 'https://images.unsplash.com/photo-1584721298718-015f3f3d26e5?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8OXx8Y2FyeC1kaWZ0LXJhY2luZ3x7ZW58fHx8fDE2NzI2MzE5NzI&ixlib=rb-1.2.1&q=80&w=1080',
  },
  {
    id: 4,
    title: 'F1 Mobile Racing',
    description: 'Official F1 mobile game with realistic driving mechanics and real-life teams, featuring high-speed racing.',
    demoLink: '/demo/f1-mobile-racing',
    image: 'https://images.unsplash.com/photo-1603430411117-d6d2026315ab?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8Mnx8ZmFjZS1yYWNpbmd8ZW58fHx8fDE2NzI2MzMyNjI&ixlib=rb-1.2.1&q=80&w=1080',
  },
  {
    id: 5,
    title: 'Real Racing 3',
    description: 'A popular racing game known for its realistic graphics, licensed cars, and a wide range of tracks.',
    demoLink: '/demo/real-racing-3',
    image: 'https://images.unsplash.com/photo-1570786015865-c34b102f17fa?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8Nnx8Y2FyeC1yYWNpbmd8ZW58fHx8fDE2NzI2Mjg5Nzc&ixlib=rb-1.2.1&q=80&w=1080',
  },
  {
    id: 6,
    title: 'CSR Racing 2',
    description: 'A drag racing game with high-quality graphics and a wide variety of customizable cars.',
    demoLink: '/demo/csr-racing-2',
    image: 'https://images.unsplash.com/photo-1617855123315-2b9fcb801424?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8M3x8Y3NyLXJhY2luZy1kcmFnfGVufDB8fHx8fDE2NzI2MjkzMzc&ixlib=rb-1.2.1&q=80&w=1080',
  },
  {
    id: 7,
    title: 'MotoGP Racing 21',
    description: 'A thrilling motorcycle racing game with realistic physics and real-life teams from the MotoGP championship.',
    demoLink: '/demo/motogp-racing-21',
    image: 'https://images.unsplash.com/photo-1581447237369-0ac55b8d9d73?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8Mnx8Y29tcGV0aXRpdmUtY2Fyd3xlbnwwfHx8fDE2NzI2MzI0MjY&ixlib=rb-1.2.1&q=80&w=1080',
  },
  {
    id: 8,
    title: 'Hill Climb Racing 2',
    description: 'Physics-based driving game where players tackle challenging hill climbs with a variety of vehicles.',
    demoLink: '/demo/hill-climb-racing-2',
    image: 'https://images.unsplash.com/photo-1604033989149-b33ccba9b64b?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8Mnx8aGlsbC1jbGltYi1yYWNpbmd8ZW58fHx8fDE2NzI2Mjg5Njk&ixlib=rb-1.2.1&q=80&w=1080',
  },
  {
    id: 9,
    title: 'Beach Buggy Racing 2',
    description: 'Exciting kart racing game with various tracks and power-ups to compete against AI or multiplayer opponents.',
    demoLink: '/demo/beach-buggy-racing-2',
    image: 'https://images.unsplash.com/photo-1595207019425-fce7fd8e5f3c?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8Nnx8YmVhY2gtYnVnZ3ktcmFjaW5nfGVufDB8fHx8fDE2NzI2Mjk0OTk&ixlib=rb-1.2.1&q=80&w=1080',
  },
  {
    id: 10,
    title: 'Off the Road: OTR Open World Driving',
    description: 'Open-world driving game with different vehicles, landscapes, and missions to complete.',
    demoLink: '/demo/off-the-road-otr',
    image: 'https://images.unsplash.com/photo-1591956753834-b046ac79ff6e?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8OXx8b2ZmLXRoZS1yb2FkLXJhdmluZ3x7ZW58fHx8fDE2NzI2Mjk2NzM&ixlib=rb-1.2.1&q=80&w=1080',
  },
  {
    id: 11,
    title: 'MadOut2 BigCityOnline',
    description: 'Open-world racing game with a mix of driving, action, and exploration in a big city environment.',
    demoLink: '/demo/madout2-bigcityonline',
    image: 'https://images.unsplash.com/photo-1567042017-276300c80f16?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8Mnx8bW9kZXJuYWNsaW5lLXRyaWZmaWNjY2VudHxlbnwwfHx8fDE2NzI2Mjg5OTM&ixlib=rb-1.2.1&q=80&w=1080',
  },
  {
    id: 12,
    title: 'Rebel Racing',
    description: 'A racing game with beautiful tracks and realistic car physics, focusing on intense races.',
    demoLink: '/demo/rebel-racing',
    image: 'https://images.unsplash.com/photo-1569745817-cd445ecbb2c0?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8M3x8cmVib2wtcmFjaW5nLXJhbXAtY2FyfGVufDB8fHx8fDE2NzI2MzE1Njg&ixlib=rb-1.2.1&q=80&w=1080',
  },
  {
    id: 13,
    title: 'TrackMania',
    description: 'A fast-paced racing game with various tracks and multiplayer racing modes.',
    demoLink: '/demo/trackmania',
    image: 'https://images.unsplash.com/photo-1554986124-b3b8a1cfae85?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8Mnx8dHJhY2ttYW5pYS1yYWNpbmd8ZW58fHx8fDE2NzI2Mjk5NzQ&ixlib=rb-1.2.1&q=80&w=1080',
  },
  {
    id: 14,
    title: 'Motor Wars 2',
    description: 'A racing game with vehicular combat and high-speed action with real-time multiplayer battles.',
    demoLink: '/demo/motor-wars-2',
    image: 'https://images.unsplash.com/photo-1579056958425-4f1f35b0b99e?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8Mnx8bW90b3ItY2FybXxlbnwwfHx8fDE2NzI2Mjg5Mzk&ixlib=rb-1.2.1&q=80&w=1080',
  },
  {
    id: 15,
    title: 'Nitro Nation Online',
    description: 'A racing game with a focus on online multiplayer, car customization, and drag racing.',
    demoLink: '/demo/nitro-nation-online',
    image: 'https://images.unsplash.com/photo-1562029261-4c131e1496a4?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8Mnx8Y2FyLXJha2luZy1kYXRyYWNpbmd8ZW58fHx8fDE2NzI2Mjg5NDI&ixlib=rb-1.2.1&q=80&w=1080',
  },
  {
    id: 16,
    title: 'Drive Ahead!',
    description: 'An action-packed car combat game with multiplayer modes and vehicle customization.',
    demoLink: '/demo/drive-ahead',
    image: 'https://images.unsplash.com/photo-1602988677124-635c73e2b0fa?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8Mnx8ZHJpdmUtYWhlYWQtbmFjaGluZy1nYW1lJTIwZGF0aW5nfGVufDB8fHx8fDE2NzI2Mjg4MjI&ixlib=rb-1.2.1&q=80&w=1080',
  }
];


export default function RacingPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <main>
        <GameCarousel category="Racing" />
        <CategoryMenu />

        <div className="text-center my-6">
          <Link to="/racing" className="text-blue-400 hover:text-blue-300 transition">
            Show More Racing Games
          </Link>
        </div>

        <div className="p-8">
          <h2 className="text-2xl font-semibold text-white mb-6">Featured Racing Games</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {racingGames.map((game) => (
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
