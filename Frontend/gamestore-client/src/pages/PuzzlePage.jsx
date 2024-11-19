import React from 'react';
import { Link } from 'react-router-dom';
import GameCarousel from '../components/GameCarousel';

const puzzleGames = [
  {
    id: 1,
    title: 'Monument Valley',
    description: 'A visually stunning puzzle game that challenges you to manipulate impossible architecture.',
    demoLink: '/demo/monument-valley',
    image: 'https://images.unsplash.com/photo-1588721737607-60771a2ed3c7?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8Nnx8cHV6emxlLXJldmVhbHxlbnwwfHx8fDE2NzI2MjY5Mzk&ixlib=rb-1.2.1&q=80&w=1080',
  },
  {
    id: 2,
    title: 'The Room',
    description: 'A highly acclaimed puzzle game with tactile exploration of intricate, mysterious objects.',
    demoLink: '/demo/the-room',
    image: 'https://images.unsplash.com/photo-1602983083469-7ec74a5c4a7e?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8Mnx8cHV6emxlLXNob3B8ZW58fHx8fDE2NzI2MjY5NTY&ixlib=rb-1.2.1&q=80&w=1080',
  },
  {
    id: 3,
    title: 'Lara Croft: Relic Run',
    description: 'A mix of action, puzzle-solving, and exploration as Lara Croft embarks on a treasure hunt.',
    demoLink: '/demo/lara-croft-relic-run',
    image: 'https://images.unsplash.com/photo-1517490227170-2b7b2a19a37d?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8Mnx8cHV6emxlLXBsdXplfGVufDB8fHx8fDE2NzI2MjY5MTg&ixlib=rb-1.2.1&q=80&w=1080',
  },
  {
    id: 4,
    title: 'Flow Free',
    description: 'A simple yet addictive puzzle game where you connect matching colors without overlapping lines.',
    demoLink: '/demo/flow-free',
    image: 'https://images.unsplash.com/photo-1532024136349-9c911c897ae0?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8Mnx8cHV6emxlLWRpc3Bvc2UtbGluZXxlbnwwfHx8fDE2NzI2MjY4NTY&ixlib=rb-1.2.1&q=80&w=1080',
  },
  {
    id: 5,
    title: 'Cut the Rope',
    description: 'A physics-based puzzle game where you cut ropes to feed candy to a little monster.',
    demoLink: '/demo/cut-the-rope',
    image: 'https://images.unsplash.com/photo-1532026763499-7bbdf87cb88d?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8M3x8cHV6emxlLXNpbXBsZWNhbmR5fGVufDB8fHx8fDE2NzI2MjY4NzI&ixlib=rb-1.2.1&q=80&w=1080',
  },
  {
    id: 6,
    title: 'Brain It On!',
    description: 'A challenging physics-based puzzle game where you draw shapes to solve tricky problems.',
    demoLink: '/demo/brain-it-on',
    image: 'https://images.unsplash.com/photo-1611246790160-6bb2c4f3fca1?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8OXx8cHV6emxlLXJlYWR5LXdlYXRoZXIuZW58fHx8fDE2NzI2Mjc4NTY&ixlib=rb-1.2.1&q=80&w=1080',
  },
  {
    id: 7,
    title: 'Unblock Me',
    description: 'A sliding block puzzle game where the goal is to move the red block out of the board.',
    demoLink: '/demo/unblock-me',
    image: 'https://images.unsplash.com/photo-1561534040-b6b8ad8b0b6a?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8M3x8cHV6emxlLXB1enpsZX0=&ixlib=rb-1.2.1&q=80&w=1080',
  },
  {
    id: 8,
    title: 'Myst',
    description: 'An atmospheric puzzle game set in a surreal world, with puzzles that challenge your logic and observation.',
    demoLink: '/demo/myst',
    image: 'https://images.unsplash.com/photo-1604093477175-66efed7955d7?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8OXx8cHV6emxlLXB1emVsaG93X3JvY2t8ZW58fHx8fDE2NzI2MjY4MzY&ixlib=rb-1.2.1&q=80&w=1080',
  },
  {
    id: 9,
    title: '2048',
    description: 'A number puzzle game where you combine like numbers to reach the 2048 tile.',
    demoLink: '/demo/2048',
    image: 'https://images.unsplash.com/photo-1543951975-cf8fe13e875e?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8Mnx8cHV6emxlLWludHJvbnN8ZW58fHx8fDE2NzI2MjY4MTQ&ixlib=rb-1.2.1&q=80&w=1080',
  },
  {
    id: 10,
    title: 'The Witness',
    description: 'A first-person puzzle game set in a mysterious island, featuring hundreds of puzzles and hidden paths.',
    demoLink: '/demo/the-witness',
    image: 'https://images.unsplash.com/photo-1562951440-b5f03305f9f0?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8Mnx8cHV6emxlLXNpemUtbGVnZW5kLWRlc2lnbmVkaXNtZW58fHx8fDE2NzI2MjY5MDg&ixlib=rb-1.2.1&q=80&w=1080',
  },
  {
    id: 11,
    title: 'Tetris',
    description: 'A classic puzzle game where you rotate and fit blocks to complete lines.',
    demoLink: '/demo/tetris',
    image: 'https://images.unsplash.com/photo-1573312310329-84a5a593045d?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8OXx8cHV6emxlLWRpc3BsYXktdHJhY2t8ZW58fHx8fDE2NzI2MjY5MTg&ixlib=rb-1.2.1&q=80&w=1080',
  },
  {
    id: 12,
    title: 'Bejeweled Blitz',
    description: 'A match-three puzzle game where you swap gems to create combos and score points.',
    demoLink: '/demo/bejeweled-blitz',
    image: 'https://images.unsplash.com/photo-1581281428881-1687ab755e75?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8M3x8Y2xhc3NpYy1ydWxlc3VsdGVzfGVufDB8fHx8fDE2NzI2Mjc4Mzg&ixlib=rb-1.2.1&q=80&w=1080',
  },
  {
    id: 13,
    title: 'Sudoku',
    description: 'A number puzzle game where players fill a 9x9 grid with numbers so that each column, row, and 3x3 grid contains all digits from 1 to 9.',
    demoLink: '/demo/sudoku',
    image: 'https://images.unsplash.com/photo-1573312349302-3187356b08b6?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8OXx8Y2xvY2stc3Vkb2t1fGVufDB8fHx8fDE2NzI2MjY5Mzg&ixlib=rb-1.2.1&q=80&w=1080',
  },
  {
    id: 14,
    title: 'Jigsaw Puzzles',
    description: 'Classic jigsaw puzzles in various themes, from landscapes to artworks.',
    demoLink: '/demo/jigsaw-puzzles',
    image: 'https://images.unsplash.com/photo-1580574786768-d41d77e7f4c8?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8OXx8anlnc3dhcmV2YXRpdmUtbWFnZXxlbnwwfHx8fDE2NzI2Mjc4NDU&ixlib=rb-1.2.1&q=80&w=1080',
  },
  {
    id: 15,
    title: 'Escape Room: Mystery Word',
    description: 'A word puzzle game where you solve clues to escape various rooms.',
    demoLink: '/demo/escape-room-mystery-word',
    image: 'https://images.unsplash.com/photo-1604091824133-71a71c9eb1a9?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8OXx8cHV6emxlLXRvLWRpc3BsYXktb3JkZW58fHx8fDE2NzI2MjY5MjQ&ixlib=rb-1.2.1&q=80&w=1080',
  },
  {
    id: 16,
    title: 'Candy Crush Saga',
    description: 'A match-three puzzle game that involves matching candy pieces of the same color.',
    demoLink: '/demo/candy-crush-saga',
    image: 'https://images.unsplash.com/photo-1597133871873-75f86b004925?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8OXx8Y2FuZHktY3J1c2gtc2FnYXxlbnwwfHx8fDE2NzI2MjY5MjI&ixlib=rb-1.2.1&q=80&w=1080',
  }
];


export default function PuzzlePage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <main>
        <GameCarousel category="Puzzle" />

        <div className="text-center my-6">
          <Link to="/puzzle" className="text-blue-400 hover:text-blue-300 transition">
            Show More Puzzle Games
          </Link>
        </div>

        <div className="p-8">
          <h2 className="text-2xl font-semibold text-white mb-6">Featured Puzzle Games</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {puzzleGames.map((game) => (
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
