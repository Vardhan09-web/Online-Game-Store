import React from 'react';
import { Link } from 'react-router-dom';
import GameCarousel from '../components/GameCarousel'; // Import the GameCarousel component

// Define a list of featured Action games
const actionGames = [
    {
      id: 1,
      title: 'Grand Theft Auto V',
      description: 'An open-world action-adventure game featuring criminal activities, car chases, and heists.',
      demoLink: '/demo/gta-v',
      image: 'https://images.unsplash.com/photo-1605062463141-d4e1ea5f8c55?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8Mnx8Y3JpbWluYWwtY2hhc2VzLWdyYW5kLXRoZWZmdC1vLXNwb3J0c3xlbnwwfHx8fDE2NzI2MjY5MjM&ixlib=rb-1.2.1&q=80&w=1080',
    },
    {
      id: 2,
      title: 'Red Dead Redemption 2',
      description: 'A Western action-adventure game set in an open world with an immersive story and gameplay.',
      demoLink: '/demo/red-dead-redemption-2',
      image: 'https://images.unsplash.com/photo-1597696351453-6a1d4ac75f98?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8OXx8b3Blbi1vZi1saWZlLWNvZC1uZWctcG9saXNoZWQtY2hhc2V8ZW58fHx8fDE2NzI2MjY5MjA&ixlib=rb-1.2.1&q=80&w=1080',
    },
    {
      id: 3,
      title: 'Cyberpunk 2077',
      description: 'A futuristic action RPG where players navigate a dystopian world filled with violence, technology, and conspiracy.',
      demoLink: '/demo/cyberpunk-2077',
      image: 'https://images.unsplash.com/photo-1606901342052-67a8a0d59a96?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8Mnx8Y3liZXJwdW5rLXNpZ3VuLXZpcnR1YWwtYWxpdGZpbGx8ZW58fHx8fDE2NzI2MjY5MjA&ixlib=rb-1.2.1&q=80&w=1080',
    },
    {
      id: 4,
      title: 'Assassin’s Creed Valhalla',
      description: 'An action RPG that takes place during the Viking invasion of England, featuring stealth, combat, and exploration.',
      demoLink: '/demo/assassins-creed-valhalla',
      image: 'https://images.unsplash.com/photo-1607284893065-2c61e46491f4?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8Mnx8YXNzYXNzaW5zLWNyZWVkLXZhbGhhbGxhLWZpcnN0fGVufDB8fHx8fDE2NzI2MjY5MjY&ixlib=rb-1.2.1&q=80&w=1080',
    },
    {
      id: 5,
      title: 'Call of Duty: Modern Warfare II',
      description: 'A tactical first-person shooter that features intense combat, various weapons, and multiplayer gameplay.',
      demoLink: '/demo/cod-modern-warfare-ii',
      image: 'https://images.unsplash.com/photo-1597627453467-13e6025c7db7?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8Mnx8Y29kLW1vZGVybi1jb21iYXQtY2FzZWFyLXJhbmdlLXJvZmlldCUyQ3Nob3N8ZW58fHx8fDE2NzI2MjY5MjA&ixlib=rb-1.2.1&q=80&w=1080',
    },
    {
      id: 6,
      title: 'Spider-Man: Miles Morales',
      description: 'An action-adventure game featuring Miles Morales as Spider-Man, facing off against new villains in New York City.',
      demoLink: '/demo/spider-man-miles-morales',
      image: 'https://images.unsplash.com/photo-1607303121444-b0b07a024195?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8Mnx8c3BpZGVyLW1hbi1naWZ0fGVufDB8fHx8fDE2NzI2MjY5MjM&ixlib=rb-1.2.1&q=80&w=1080',
    },
    {
      id: 7,
      title: 'Horizon Forbidden West',
      description: 'A post-apocalyptic action RPG where players control Aloy as she ventures into new territories to save the world.',
      demoLink: '/demo/horizon-forbidden-west',
      image: 'https://images.unsplash.com/photo-1644245872846-e5e249fcf3e2?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8Mnx8aG9yaXpvbi1mb3JiaWRkZW4td2VzdHxlbnwwfHx8fDE2NzI2MjY5MjY&ixlib=rb-1.2.1&q=80&w=1080',
    },
    {
      id: 8,
      title: 'Doom Eternal',
      description: 'A fast-paced first-person shooter that features intense combat against demonic forces.',
      demoLink: '/demo/doom-eternal',
      image: 'https://images.unsplash.com/photo-1579168657097-b706e4ca5676?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8Mnx8ZG9vbS1ldGVybmFsLXByZXN0b3JpfGVufDB8fHx8fDE2NzI2MjY5MjY&ixlib=rb-1.2.1&q=80&w=1080',
    },
    {
      id: 9,
      title: 'Far Cry 6',
      description: 'An open-world FPS with engaging storytelling and tactical combat in a fictional Caribbean island.',
      demoLink: '/demo/far-cry-6',
      image: 'https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?auto=format&fit=crop&w=500&q=80',
    },
    {
      id: 10,
      title: 'Battlefield 2042',
      description: 'A multiplayer first-person shooter with large-scale battles set in a futuristic world.',
      demoLink: '/demo/battlefield-2042',
      image: 'https://images.unsplash.com/photo-1625833610393-2fcbf5cb5cf0?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8Mnx8YmF0dGxlZmllZWQtMjA0MnwyfDB8fHx8fDE2NzI2MjY5MjE&ixlib=rb-1.2.1&q=80&w=1080',
    },
    {
      id: 11,
      title: 'Mortal Kombat 11',
      description: 'A brutal fighting game that features iconic characters and intense, over-the-top combat moves.',
      demoLink: '/demo/mortal-kombat-11',
      image: 'https://images.unsplash.com/photo-1605172900424-0e0f0ec15fe4?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8Mnx8bW9ydGFsLWtvbWJhdC0xMXwyfDB8fHx8fDE2NzI2MjY5MjM&ixlib=rb-1.2.1&q=80&w=1080',
    },
    {
      id: 12,
      title: 'Hitman 3',
      description: 'A stealth-based action game where players take on the role of Agent 47 and complete various assassination missions.',
      demoLink: '/demo/hitman-3',
      image: 'https://images.unsplash.com/photo-1607482515351-9c5fe47770fe?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8Mnx8aGl0bWFuLWRlc2lnbmVkLXN0ZWx0aC1idXQtZ3JhbWVzLWZpYWxlc3xlbnwwfHx8fDE2NzI2MjY5MjI&ixlib=rb-1.2.1&q=80&w=1080',
    },
    {
      id: 13,
      title: 'Sekiro: Shadows Die Twice',
      description: 'An action-adventure game that combines stealth and intense combat in a samurai-based setting.',
      demoLink: '/demo/sekiro-shadows-die-twice',
      image: 'https://images.unsplash.com/photo-1576712237229-090982cce8f0?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8Mnx8c2VraXJvLXNoYWRvd3MtZGlldC10d2ljZXxlbnwwfHx8fDE2NzI2MjY5MjM&ixlib=rb-1.2.1&q=80&w=1080',
    },
    {
      id: 14,
      title: 'Devil May Cry 5',
      description: 'A hack-and-slash action game featuring stylish combat, intense boss fights, and powerful character abilities.',
      demoLink: '/demo/devil-may-cry-5',
      image: 'https://images.unsplash.com/photo-1578362184965-9d04e776ed85?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8Mnx8ZGV2aWxfbWF5X3NldmlzfGVufDB8fHx8fDE2NzI2MjY5MjI&ixlib=rb-1.2.1&q=80&w=1080',
    },
    {
      id: 15,
      title: 'Tomb Raider',
      description: 'An action-adventure game where players control Lara Croft on her journey through dangerous locations filled with puzzles.',
      demoLink: '/demo/tomb-raider',
      image: 'https://images.unsplash.com/photo-1605804155625-f99b05669b6f?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8Mnx8dG9tYi1yYWlkZXItc3Rvcnl0ZWxsaWZlfGVufDB8fHx8fDE2NzI2MjY5MjM&ixlib=rb-1.2.1&q=80&w=1080',
    },
    {
      id: 16,
      title: 'The Witcher 3: Wild Hunt',
      description: 'An open-world RPG featuring a monster hunter on a journey across a fantasy world, filled with dark secrets and powerful enemies.',
      demoLink: '/demo/the-witcher-3-wild-hunt',
      image: 'https://images.unsplash.com/photo-1594614961774-d71d47a4e11a?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8MXx8dGhlLXdpdGNoZXItMy13aWxkLWh1bnR8ZW58fHx8fDE2NzI2MjY5MjM&ixlib=rb-1.2.1&q=80&w=1080',
    }
  ];
  

export default function ActionPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <main>
        {/* Game Carousel specific to the Action category */}
        <GameCarousel category="Action" />

        {/* Show More Button */}
        <div className="text-center my-6">
          <Link to="/action" className="text-blue-400 hover:text-blue-300 transition">
            Show More Action Games
          </Link>
        </div>

        {/* Display a grid of Action games */}
        <div className="p-8">
          <h2 className="text-2xl font-semibold text-white mb-6">Featured Action Games</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {actionGames.map((game) => (
              <div
                key={game.id}
                className="bg-gray-800 rounded-lg p-4 hover:transform hover:scale-105 transition duration-300"
              >
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
