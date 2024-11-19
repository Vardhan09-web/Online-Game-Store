import React from 'react';
import { Link } from 'react-router-dom';
import GameCarousel from '../components/GameCarousel';
import CategoryMenu from '../components/CategoryMenu';

const sportsGames = [
  {
    id: 1,
    title: 'FIFA 23',
    description: 'A soccer simulation game featuring realistic gameplay, teams, and modes.',
    demoLink: '/demo/fifa-23',
    image: 'https://images.unsplash.com/photo-1599693204280-ef7b35ea7edb?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8Mnx8c29jY2VyLWdhbWUtZmlmYS1nYW1lY3VsdHVyZXxlbnwwfHx8fDE2NzI2MjY5MjM&ixlib=rb-1.2.1&q=80&w=1080',
  },
  {
    id: 2,
    title: 'NBA 2K23',
    description: 'A basketball simulation game where players can control teams, players, and even customize their experience.',
    demoLink: '/demo/nba-2k23',
    image: 'https://images.unsplash.com/photo-1615772022453-219d3528c6d1?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8OXx8YmFza2V0YmFsbC1nYW1lcy1vbmNvbWVrYXRpb25zLW1lbnVzaWN8ZW58fHx8fDE2NzI2MjY5MjI&ixlib=rb-1.2.1&q=80&w=1080',
  },
  {
    id: 3,
    title: 'Madden NFL 23',
    description: 'An American football simulation game that lets players control teams and compete in various modes.',
    demoLink: '/demo/madden-nfl-23',
    image: 'https://images.unsplash.com/photo-1570992632687-055d4e81d58a?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8MXx8YW1lcmljYW4tZm9vdGJhbGwtY2FtZXxlbnwwfHx8fDE2NzI2MjY5MjA&ixlib=rb-1.2.1&q=80&w=1080',
  },
  {
    id: 4,
    title: 'WWE 2K23',
    description: 'A wrestling game with authentic WWE gameplay, featuring various modes and characters.',
    demoLink: '/demo/wwe-2k23',
    image: 'https://images.unsplash.com/photo-1519682541457-0ec0f8e31d13?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8NXx8d3dlLXdlc3RsaW5nLXNwb3J0cy1nYW1lcy1kYW5nZXJzb2NpfGVufDB8fHx8fDE2NzI2MjY5MjA&ixlib=rb-1.2.1&q=80&w=1080',
  },
  {
    id: 5,
    title: 'PGA Tour 2K23',
    description: 'A golf simulation game featuring realistic courses, players, and gameplay.',
    demoLink: '/demo/pga-tour-2k23',
    image: 'https://images.unsplash.com/photo-1574813941583-588b4635be93?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8Mnx8Z29sZi1mZWF0dXJlcy1wZXJmZWN0c3xlbnwwfHx8fDE2NzI2MjY5MjM&ixlib=rb-1.2.1&q=80&w=1080',
  },
  {
    id: 6,
    title: 'Rocket League',
    description: 'A unique combination of soccer and cars, where players use vehicles to score goals.',
    demoLink: '/demo/rocket-league',
    image: 'https://images.unsplash.com/photo-1597713058452-8d3be5cf9cb4?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8Mnx8cm9ja2V0LWxlYWd1ZXxlbnwwfHx8fDE2NzI2MjY5MjY&ixlib=rb-1.2.1&q=80&w=1080',
  },
  {
    id: 7,
    title: 'FIFA Mobile',
    description: 'A mobile version of the FIFA series where players can manage teams and compete in various modes.',
    demoLink: '/demo/fifa-mobile',
    image: 'https://images.unsplash.com/photo-1611875147853-022e6f306f80?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8NXx8Zm9vdC1nb2FsLXRpc3N1ZXxlbnwwfHx8fDE2NzI2MjY5MjQ&ixlib=rb-1.2.1&q=80&w=1080',
  },
  {
    id: 8,
    title: 'eFootball 2023',
    description: 'A soccer game that features real-time online play with players from all around the world.',
    demoLink: '/demo/efootball-2023',
    image: 'https://images.unsplash.com/photo-1625673949074-1d1400f20c2c?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8Mnx8ZWZmb3J0aW5lLXNvY2Nlci1nb3N0Z2FtZXxlbnwwfHx8fDE2NzI2MjY5Mjg&ixlib=rb-1.2.1&q=80&w=1080',
  },
  {
    id: 9,
    title: 'NBA Live 19',
    description: 'An NBA simulation game that allows players to control real-life basketball teams and engage in realistic matchups.',
    demoLink: '/demo/nba-live-19',
    image: 'https://images.unsplash.com/photo-1579051356481-4cde62cf2fe6?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8Mnx8YmFza2V0YmFsbC1nb21lcy1yZWFsLXNlYS1idXNmZXxlbnwwfHx8fDE2NzI2MjY5MjQ&ixlib=rb-1.2.1&q=80&w=1080',
  },
  {
    id: 10,
    title: 'UFC 4',
    description: 'A mixed martial arts game with real-world fighters, where players can compete in the octagon.',
    demoLink: '/demo/ufc-4',
    image: 'https://images.unsplash.com/photo-1603129942384-12d1cb7dba45?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8Mnx8dWZjLWZvY3VzaXMtYmF0dGxlc3xlbnwwfHx8fDE2NzI2MjY5MjU&ixlib=rb-1.2.1&q=80&w=1080',
  },
  {
    id: 11,
    title: 'Pro Evolution Soccer 2021',
    description: 'A soccer simulation game that features realistic mechanics and various modes.',
    demoLink: '/demo/pro-evolution-soccer-2021',
    image: 'https://images.unsplash.com/photo-1605664705770-09f3c4c9e1fe?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8MXx8cGFmY2Z1bC1zb2NjaWVyLXNwb3J0c3xlbnwwfHx8fDE2NzI2MjY5MjA&ixlib=rb-1.2.1&q=80&w=1080',
  },
  {
    id: 12,
    title: 'MMA Manager 2',
    description: 'A mobile MMA manager game where players can create their own MMA fighters and compete in tournaments.',
    demoLink: '/demo/mma-manager-2',
    image: 'https://images.unsplash.com/photo-1605735703922-0bca9c1e3f27?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8Mnx8bW1hLW1hbmFnZXItZG9jdW1lbnRzLXdhcnJpb3JvcnxlbnwwfHx8fDE2NzI2MjY5MjA&ixlib=rb-1.2.1&q=80&w=1080',
  },
  {
    id: 13,
    title: 'F1 2022',
    description: 'A racing game that brings the excitement of Formula 1 racing to the virtual world with realistic physics and gameplay.',
    demoLink: '/demo/f1-2022',
    image: 'https://images.unsplash.com/photo-1635196324178-c43198d7a20d?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8Mnx8Zm9ybXVsYS1vbmUtb3ZlcnByZWZ8ZW58fHx8fDE2NzI2MjY5MjE&ixlib=rb-1.2.1&q=80&w=1080',
  },
  {
    id: 14,
    title: 'WRC 10',
    description: 'A rally racing game that brings the thrills of the World Rally Championship to your fingertips.',
    demoLink: '/demo/wrc-10',
    image: 'https://images.unsplash.com/photo-1635478526788-c2c338c82b96?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8NXx8cmFsbHktcmFjaW5nLWNvbnZlcnNhdGlvbnMtZ3JhbWVkZXxlbnwwfHx8fDE2NzI2MjY5MjA&ixlib=rb-1.2.1&q=80&w=1080',
  },
  {
    id: 15,
    title: 'FIFA 22',
    description: 'A soccer simulation game that offers dynamic gameplay and several modes for fans of the sport.',
    demoLink: '/demo/fifa-22',
    image: 'https://images.unsplash.com/photo-1613273600767-8bc038ed7ca2?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8MXx8Y29uZm9ydC1nb2FsLXNwb3J0c3xlbnwwfHx8fDE2NzI2MjY5MjI&ixlib=rb-1.2.1&q=80&w=1080',
  },
  {
    id: 16,
    title: 'FIFA Street',
    description: 'A street soccer game that focuses on trick shots and street-style play.',
    demoLink: '/demo/fifa-street',
    image: 'https://images.unsplash.com/photo-1582575983282-66c586d4e4bb?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8Mnx8Zm9vdC1nYW1lcy1zdHJlZXQtZm9vdGJhbGxfZW58fHx8fDE2NzI2MjY5MjM&ixlib=rb-1.2.1&q=80&w=1080',
  }
];


export default function SportsPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <main>
        <GameCarousel category="Sports" />
        <CategoryMenu />

        <div className="text-center my-6">
          <Link to="/sports" className="text-blue-400 hover:text-blue-300 transition">
            Show More Sports Games
          </Link>
        </div>

        <div className="p-8">
          <h2 className="text-2xl font-semibold text-white mb-6">Featured Sports Games</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {sportsGames.map((game) => (
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
