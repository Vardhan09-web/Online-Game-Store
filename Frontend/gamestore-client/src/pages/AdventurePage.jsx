import React from 'react';
import { Link } from 'react-router-dom';
import GameCarousel from '../components/GameCarousel';

const adventureGames = [
    {
      id: 1,
      title: 'The Legend of Zelda: Breath of the Wild',
      description: 'An open-world adventure game that follows Link on a quest to defeat Calamity Ganon.',
      demoLink: '/demo/zelda-breath-of-the-wild',
      image: 'https://images.unsplash.com/photo-1590062787747-bd9086e1f7fc?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8MXx8YWR2ZW50dXJlLXBsdXplfGVufDB8fHx8fDE2NzI2Mjc4Mzg&ixlib=rb-1.2.1&q=80&w=1080',
    },
    {
      id: 2,
      title: 'Uncharted 4: A Thief\'s End',
      description: 'A thrilling adventure game with action, exploration, and treasure hunting.',
      demoLink: '/demo/uncharted-4',
      image: 'https://images.unsplash.com/photo-1568714435-460f55733f98?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8Mnx8YWR2ZW50dXJlLWNvbG9yZ3JhcGh8ZW58fHx8fDE2NzI2MjY5MTg&ixlib=rb-1.2.1&q=80&w=1080',
    },
    {
      id: 3,
      title: 'Red Dead Redemption 2',
      description: 'A deep, narrative-driven adventure game set in the American Wild West, full of immersive exploration.',
      demoLink: '/demo/red-dead-redemption-2',
      image: 'https://images.unsplash.com/photo-1511253345621-96c8a3484fef?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8Mnx8YWR2ZW50dXJlLXNob3B8ZW58fHx8fDE2NzI2MjY5MjA&ixlib=rb-1.2.1&q=80&w=1080',
    },
    {
      id: 4,
      title: 'Tomb Raider (2013)',
      description: 'A reboot of the classic series, following Lara Croft on a deadly adventure to survive on a mysterious island.',
      demoLink: '/demo/tomb-raider-2013',
      image: 'https://images.unsplash.com/photo-1511878093431-bcbdb22da40d?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8Mnx8YWR2ZW50dXJlLWlzbGFuZCV8ZW58fHx8fDE2NzI2MjY5NTg&ixlib=rb-1.2.1&q=80&w=1080',
    },
    {
      id: 5,
      title: 'Horizon Zero Dawn',
      description: 'An open-world adventure set in a post-apocalyptic world, where you hunt robotic creatures and explore vast landscapes.',
      demoLink: '/demo/horizon-zero-dawn',
      image: 'https://images.unsplash.com/photo-1567271140-f88b259b7bbd?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8NXx8YWR2ZW50dXJlLW9wZW4td29ybGR8ZW58fHx8fDE2NzI2MjY5Mjg&ixlib=rb-1.2.1&q=80&w=1080',
    },
    {
      id: 6,
      title: 'The Witcher 3: Wild Hunt',
      description: 'An open-world RPG that combines action, exploration, and storytelling as Geralt of Rivia searches for his adopted daughter.',
      demoLink: '/demo/witcher-3-wild-hunt',
      image: 'https://images.unsplash.com/photo-1602833803283-779453de77bb?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8Mnx8YWR2ZW50dXJlLXRoZWFsdGhxfGVufDB8fHx8fDE2NzI2MjY4NjE&ixlib=rb-1.2.1&q=80&w=1080',
    },
    {
      id: 7,
      title: 'Assassin\'s Creed Odyssey',
      description: 'A sprawling adventure game set in Ancient Greece, full of combat, exploration, and decision-making.',
      demoLink: '/demo/assassins-creed-odyssey',
      image: 'https://images.unsplash.com/photo-1600467970421-746f8fa98f02?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8Mnx8YWR2ZW50dXJlLWZlYXR1cmluZy1jb21iYXQlMjBhdml8ZW58fHx8fDE2NzI2MjY4NTY&ixlib=rb-1.2.1&q=80&w=1080',
    },
    {
      id: 8,
      title: 'Minecraft',
      description: 'A sandbox adventure game where you can explore, build, and survive in an open world made of blocks.',
      demoLink: '/demo/minecraft',
      image: 'https://images.unsplash.com/photo-1574731012232-1e3f71f0a8b9?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8MXx8YWR2ZW50dXJlLWJsd2VuZGZvb3JkLXBlcnNvbmFsLWNvbXBsZXglMjBvY2N1bGVvbnxlbnwwfHx8fDE2NzI2MjY4NDA&ixlib=rb-1.2.1&q=80&w=1080',
    },
    {
      id: 9,
      title: 'Life is Strange',
      description: 'An episodic graphic adventure game that mixes time travel, mystery, and emotional storytelling.',
      demoLink: '/demo/life-is-strange',
      image: 'https://images.unsplash.com/photo-1530506220005-e7b3c65fcab8?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8OXx8YWR2ZW50dXJlLXN0b3J5c2hpcHxlbnwwfHx8fDE2NzI2MjY4NTg&ixlib=rb-1.2.1&q=80&w=1080',
    },
    {
      id: 10,
      title: 'Prince of Persia: The Sands of Time',
      description: 'A classic action-adventure game where you control a prince with the power to manipulate time.',
      demoLink: '/demo/prince-of-persia-sands-of-time',
      image: 'https://images.unsplash.com/photo-1554933103-e9a832ad24d3?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8NXx8YWR2ZW50dXJlLXBvc3RhcG9saXRpYy1yZXBsaWNhfGVufDB8fHx8fDE2NzI2MjY4MTE&ixlib=rb-1.2.1&q=80&w=1080',
    },
    {
      id: 11,
      title: 'Metal Gear Solid V: The Phantom Pain',
      description: 'An action-adventure stealth game that follows Big Boss as he embarks on a mission of revenge and survival.',
      demoLink: '/demo/metal-gear-solid-v',
      image: 'https://images.unsplash.com/photo-1560813805-bc8c19b7f6ae?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8Mnx8YWR2ZW50dXJlLXNob2xkZXN0ZWxmaXxlbnwwfHx8fDE2NzI2MjY5NTY&ixlib=rb-1.2.1&q=80&w=1080',
    },
    {
      id: 12,
      title: 'Firewatch',
      description: 'A first-person adventure game set in a Wyoming forest, where you uncover a mystery through dialogue and exploration.',
      demoLink: '/demo/firewatch',
      image: 'https://images.unsplash.com/photo-1519634579341-d54214f9be1c?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8MXx8YWR2ZW50dXJlLWZpcnN0cG9yc29uLWNvbG9yZy1mYWNlLWdpZm9yZGVuLWRhbWFnZXxlbnwwfHx8fDE2NzI2MjY5MTI&ixlib=rb-1.2.1&q=80&w=1080',
    },
    {
      id: 13,
      title: 'Journey',
      description: 'An atmospheric adventure game where you explore a vast desert, solving puzzles and uncovering hidden secrets.',
      demoLink: '/demo/journey',
      image: 'https://images.unsplash.com/photo-1492062243456-029b00f94cf9?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8OXx8YWR2ZW50dXJlLXNvbHV0aW9uLWltYWdlLXN0b3JpZXN8ZW58fHx8fDE2NzI2MjY5MjI&ixlib=rb-1.2.1&q=80&w=1080',
    },
    {
      id: 14,
      title: 'The Last of Us Part II',
      description: 'A gripping narrative-driven adventure game set in a post-apocalyptic world, focusing on survival and revenge.',
      demoLink: '/demo/the-last-of-us-2',
      image: 'https://images.unsplash.com/photo-1599516897743-b40ac73a9d0e?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8OXx8YWR2ZW50dXJlLXNvbHZlLXNlY3VyaXR5fGVufDB8fHx8fDE2NzI2MjY5MjM&ixlib=rb-1.2.1&q=80&w=1080',
    },
    {
      id: 15,
      title: 'Outer Worlds',
      description: 'A sci-fi RPG with elements of adventure, where you navigate different planets, make moral decisions, and explore complex narratives.',
      demoLink: '/demo/outer-worlds',
      image: 'https://images.unsplash.com/photo-1570812075434-e9ea7cc1a07d?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8Mnx8YWR2ZW50dXJlLW1vcmFsLXBhcmFkaXNlbnxlbnwwfHx8fDE2NzI2MjY5MjA&ixlib=rb-1.2.1&q=80&w=1080',
    },
    {
      id: 16,
      title: 'The Elder Scrolls V: Skyrim',
      description: 'A classic RPG adventure game set in the open world of Skyrim, filled with dragons, dungeons, and questing.',
      demoLink: '/demo/elder-scrolls-v-skyrim',
      image: 'https://images.unsplash.com/photo-1512677745879-0e1f3beec6e9?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8OXx8YWR2ZW50dXJlLXNrb3JpY2Fscy1sYXRlLXN0b3J5fGVufDB8fHx8fDE2NzI2MjY5MjY&ixlib=rb-1.2.1&q=80&w=1080',
    }
  ];
  

export default function AdventurePage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <main>
        <GameCarousel category="Adventure" />

        <div className="text-center my-6">
          <Link to="/adventure" className="text-blue-400 hover:text-blue-300 transition">
            Show More Adventure Games
          </Link>
        </div>

        <div className="p-8">
          <h2 className="text-2xl font-semibold text-white mb-6">Featured Adventure Games</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {adventureGames.map((game) => (
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
