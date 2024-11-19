import React from 'react';
import { Link } from 'react-router-dom';
import GameCarousel from '../components/GameCarousel';
import CategoryMenu from '../components/CategoryMenu';

const multiplayerGames = [
  {
    id: 1,
    title: 'Fortnite',
    description: 'A battle royale game where 100 players fight to be the last one standing.',
    demoLink: '/demo/fortnite',
    image: 'https://images.unsplash.com/photo-1561614380-b4c2f6e5b12c?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8Mnx8bWF0Y2hpbmctcm95YWwtZ2FtZXxlbnwwfHx8fDE2NzI2MjY5MjM&ixlib=rb-1.2.1&q=80&w=1080',
  },
  {
    id: 2,
    title: 'Call of Duty: Warzone',
    description: 'A free-to-play battle royale mode within the Call of Duty franchise.',
    demoLink: '/demo/call-of-duty-warzone',
    image: 'https://images.unsplash.com/photo-1562886220-5583c9186c88?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8MXx8Y29kZXZzdG9yaWVzLXBhY3RpdmV8ZW58fHx8fDE2NzI2MjY5MjI&ixlib=rb-1.2.1&q=80&w=1080',
  },
  {
    id: 3,
    title: 'Minecraft',
    description: 'A sandbox game where players can build, explore, and survive in a blocky world.',
    demoLink: '/demo/minecraft',
    image: 'https://images.unsplash.com/photo-1594345226502-2f6a074e68b8?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8Mnx8b3Blbi13b3JsfGVufDB8fHx8fDE2NzI2MjY5MjQ&ixlib=rb-1.2.1&q=80&w=1080',
  },
  {
    id: 4,
    title: 'Apex Legends',
    description: 'A free-to-play battle royale game that features unique characters with special abilities.',
    demoLink: '/demo/apex-legends',
    image: 'https://images.unsplash.com/photo-1555206500-1ca2267b7028?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8MXx8Y2FtZXJlLXRoZW9yaWVzLXBhY3RpdmV8ZW58fHx8fDE2NzI2MjY5MjM&ixlib=rb-1.2.1&q=80&w=1080',
  },
  {
    id: 5,
    title: 'Overwatch',
    description: 'A team-based multiplayer first-person shooter where players choose from a variety of heroes.',
    demoLink: '/demo/overwatch',
    image: 'https://images.unsplash.com/photo-1561741302-65828e3a87ea?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8MXx8dGVhbS1ib3NlZC1nb21lLWVzc2VudGlhbHxlbnwwfHx8fDE2NzI2MjY5MjQ&ixlib=rb-1.2.1&q=80&w=1080',
  },
  {
    id: 6,
    title: 'Valorant',
    description: 'A tactical first-person shooter where players control unique agents and work together to complete objectives.',
    demoLink: '/demo/valorant',
    image: 'https://images.unsplash.com/photo-1590507880724-06ad0bdbbcdd?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8Mnx8dmFsb3JhbnQtY2FtZ3xlbnwwfHx8fDE2NzI2MjY5MjE&ixlib=rb-1.2.1&q=80&w=1080',
  },
  {
    id: 7,
    title: 'League of Legends',
    description: 'A multiplayer online battle arena game where teams of champions battle to destroy the enemy base.',
    demoLink: '/demo/league-of-legends',
    image: 'https://images.unsplash.com/photo-1589750437600-451d92d33745?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8Mnx8bGVhZ3VlLW9mLWxlZ2VuZC1zX2xpZ2h0c3xlbnwwfHx8fDE2NzI2MjY5Mzg&ixlib=rb-1.2.1&q=80&w=1080',
  },
  {
    id: 8,
    title: 'Rocket League',
    description: 'A physics-based soccer game with vehicles, where players aim to score goals with their cars.',
    demoLink: '/demo/rocket-league',
    image: 'https://images.unsplash.com/photo-1597713058452-8d3be5cf9cb4?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8Mnx8cm9ja2V0LWxlYWd1ZXxlbnwwfHx8fDE2NzI2MjY5MjY&ixlib=rb-1.2.1&q=80&w=1080',
  },
  {
    id: 9,
    title: 'Tom Clancy\'s Rainbow Six Siege',
    description: 'A tactical multiplayer shooter focused on strategy and close-quarters combat.',
    demoLink: '/demo/rainbow-six-siege',
    image: 'https://images.unsplash.com/photo-1610887651551-3ffcee50303e?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8Mnx8cmFpbmJvdy1zaXgtc2VpZ2V8ZW58fHx8fDE2NzI2MjY5Mzk&ixlib=rb-1.2.1&q=80&w=1080',
  },
  {
    id: 10,
    title: 'PUBG Mobile',
    description: 'A mobile version of the popular battle royale game where players fight to be the last one standing.',
    demoLink: '/demo/pubg-mobile',
    image: 'https://images.unsplash.com/photo-1614855727421-235f14cbb1c8?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8MXx8cGFiZy1ib3R0bGVzLWJhdHRsZXJveWV8ZW58fHx8fDE2NzI2MjY5NDI&ixlib=rb-1.2.1&q=80&w=1080',
  },
  {
    id: 11,
    title: 'World of Warcraft',
    description: 'A massively multiplayer online role-playing game where players explore the world of Azeroth and battle for survival.',
    demoLink: '/demo/world-of-warcraft',
    image: 'https://images.unsplash.com/photo-1562324441-5cb71b6f32fe?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8Mnx8bW9vLW9mLXdhcmNyYWZ0c3xlbnwwfHx8fDE2NzI2MjY5MjE&ixlib=rb-1.2.1&q=80&w=1080',
  },
  {
    id: 12,
    title: 'Fall Guys',
    description: 'A quirky multiplayer game where players compete in obstacle courses to be the last one standing.',
    demoLink: '/demo/fall-guys',
    image: 'https://images.unsplash.com/photo-1593460707100-7fa8d23f4246?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8Mnx8ZmFsbC1ndXlzfGVufDB8fHx8fDE2NzI2MjY5MzA&ixlib=rb-1.2.1&q=80&w=1080',
  },
  {
    id: 13,
    title: 'Among Us',
    description: 'A multiplayer game where players work together to complete tasks, but one player is an imposter trying to sabotage the mission.',
    demoLink: '/demo/among-us',
    image: 'https://images.unsplash.com/photo-1603288835676-58217bb9e812?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8Mnx8YW1vbmctdXMtZ2FtZXxlbnwwfHx8fDE2NzI2MjY5MjI&ixlib=rb-1.2.1&q=80&w=1080',
  },
  {
    id: 14,
    title: 'Counter-Strike: Global Offensive',
    description: 'A tactical shooter where players compete in teams to complete missions in a terrorist vs counter-terrorist scenario.',
    demoLink: '/demo/csgo',
    image: 'https://images.unsplash.com/photo-1610987454175-505456fe1d09?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8Mnx8Y291bnRlci1zdHJpa2UtY2FtZ2luZ3xlbnwwfHx8fDE2NzI2MjY5MzI&ixlib=rb-1.2.1&q=80&w=1080',
  },
  {
    id: 15,
    title: 'Destiny 2',
    description: 'An online-only multiplayer first-person shooter that combines PvE and PvP elements in a sci-fi universe.',
    demoLink: '/demo/destiny-2',
    image: 'https://images.unsplash.com/photo-1604359317490-6b62b47b82c8?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8Mnx8ZGVzdGluYXR5LTJ8ZW58fHx8fDE2NzI2MjY5Mjg&ixlib=rb-1.2.1&q=80&w=1080',
  },
  {
    id: 16,
    title: 'Sea of Thieves',
    description: 'A multiplayer pirate adventure game where players team up to sail the seas, find treasure, and battle other pirate crews.',
    demoLink: '/demo/sea-of-thieves',
    image: 'https://images.unsplash.com/photo-1519664727597-ff97e1d7ef5a?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8MXx8c2VhLW9mLXRoZXZlZXN8ZW58fHx8fDE2NzI2MjY5MjM&ixlib=rb-1.2.1&q=80&w=1080',
  }
];


export default function MultiplayerPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <main>
        <GameCarousel category="Multiplayer" />
        <CategoryMenu />

        <div className="text-center my-6">
          <Link to="/multiplayer" className="text-blue-400 hover:text-blue-300 transition">
            Show More Multiplayer Games
          </Link>
        </div>

        <div className="p-8">
          <h2 className="text-2xl font-semibold text-white mb-6">Featured Multiplayer Games</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {multiplayerGames.map((game) => (
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
